import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';

type UnknownRecord = Record<string, unknown>;

type NormalizedCompany = {
  id: string;
  kvkNumber: string;
  establishmentNumber?: string;
  name: string;
  city?: string;
  street?: string;
  postalCode?: string;
};

function asString(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function pickString(source: UnknownRecord, keys: string[]): string | undefined {
  for (const key of keys) {
    const found = asString(source[key]);
    if (found) return found;
  }
  return undefined;
}

function normalizeCompany(item: UnknownRecord, index: number): NormalizedCompany | null {
  // KVK API v2 nested address: item.adres.binnenlandsAdres
  const adresObj = (item.adres && typeof item.adres === 'object' ? item.adres as UnknownRecord : {});
  const binnenlandsAdres: UnknownRecord = ('binnenlandsAdres' in adresObj && typeof adresObj.binnenlandsAdres === 'object'
    ? adresObj.binnenlandsAdres as UnknownRecord : {});
  const address = (item.address && typeof item.address === 'object' ? item.address as UnknownRecord : {}) as UnknownRecord;

  const kvkNumber = pickString(item, [
    'kvkNummer',   // KVK API v2
    'kvkNumber',
    'kvk',
    'kvk_nummer',
    'dossiernummer',
    'cocNumber',
    'chamberOfCommerceNumber',
  ]);

  const name = pickString(item, [
    'naam',        // KVK API v2
    'name',
    'handelsnaam',
    'organisatieNaam',
    'companyName',
    'tradeName',
  ]);

  if (!kvkNumber || !name) return null;

  const establishmentNumber = pickString(item, [
    'vestigingsnummer', // KVK API v2
    'establishmentNumber',
    'locationNumber',
  ]);

  const city =
    pickString(binnenlandsAdres, ['plaats']) ??
    pickString(item, ['city', 'plaats']) ??
    pickString(address, ['city', 'plaats']);
  const street =
    pickString(binnenlandsAdres, ['straatNaam']) ??
    pickString(item, ['street', 'straat']) ??
    pickString(address, ['street', 'straat']);
  const postalCode =
    pickString(binnenlandsAdres, ['postcode']) ??
    pickString(item, ['postalCode', 'postcode']) ??
    pickString(address, ['postalCode', 'postcode']);

  return {
    id: `${kvkNumber}-${establishmentNumber ?? index}`,
    kvkNumber,
    establishmentNumber,
    name,
    city,
    street,
    postalCode,
  };
}

function readResultList(raw: unknown): unknown[] {
  if (Array.isArray(raw)) return raw;
  if (!raw || typeof raw !== 'object') return [];

  const source = raw as UnknownRecord;
  const candidates = [
    source.results,
    source.resultaten,
    source.items,
    source.data,
    source.hits,
    source.organisations,
    source.organizations,
  ];

  for (const candidate of candidates) {
    if (Array.isArray(candidate)) return candidate;
    if (candidate && typeof candidate === 'object') {
      const nested = candidate as UnknownRecord;
      if (Array.isArray(nested.items)) return nested.items;
      if (Array.isArray(nested.results)) return nested.results;
      if (Array.isArray(nested.hits)) return nested.hits;
    }
  }

  return [];
}

const limiter = rateLimit({ limit: 100, interval: 60_000 }); // 

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (!limiter.check(ip).success) {
    return NextResponse.json({ error: 'Te veel verzoeken. Probeer het later opnieuw.' }, { status: 429 });
  }

  let body: { query?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Ongeldig verzoek.' }, { status: 400 });
  }
  const { query } = body;
  const companyQuery = typeof query === 'string' ? query.trim() : '';

  if (companyQuery.length < 2) {
    return NextResponse.json(
      { error: 'Vul minimaal 2 tekens van de bedrijfsnaam in.' },
      { status: 400 }
    );
  }

  const endpoint = process.env.KVK_API_ENDPOINT;
  const apiKey = process.env.KVK_API_KEY;
  const queryParam = process.env.KVK_QUERY_PARAM ?? 'query';
  const authMode = process.env.KVK_API_AUTH_MODE ?? 'header';
  const apiKeyHeader = process.env.KVK_API_KEY_HEADER ?? 'x-api-key';

  if (!endpoint || !apiKey) {
    return NextResponse.json(
      { error: 'KVK zoekservice is nog niet geconfigureerd.' },
      { status: 500 }
    );
  }

  const parsedUrl = new URL(endpoint);
  parsedUrl.searchParams.set(queryParam, companyQuery);
  // query_param auth: API key goes in the URL (e.g. KVK API v2 ?user_key=)
  if (authMode === 'query_param') {
    parsedUrl.searchParams.set(apiKeyHeader, apiKey);
  }
  const url = parsedUrl.toString();

  const headers: Record<string, string> = {
    accept: 'application/json',
  };

  if (authMode === 'bearer') {
    headers.authorization = `Bearer ${apiKey}`;
  } else if (authMode === 'header') {
    headers[apiKeyHeader] = apiKey;
  }
  // authMode === 'query_param': no header, key is already in the URL

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers,
      cache: 'no-store',
    });

    const raw = await response.json();

    if (!response.ok) {
      console.error('KVK provider error:', response.status);
      return NextResponse.json(
        { error: 'KVK-gegevens konden niet worden opgehaald.' },
        { status: 502 }
      );
    }

    const seen = new Set<string>();
    const list = readResultList(raw)
      .map((item, index) => {
        if (!item || typeof item !== 'object') return null;
        return normalizeCompany(item as UnknownRecord, index);
      })
      .filter((item): item is NormalizedCompany => {
        if (item === null) return false;
        if (seen.has(item.kvkNumber)) return false;
        seen.add(item.kvkNumber);
        return true;
      })
      .slice(0, 20);

    return NextResponse.json({ results: list });
  } catch (error) {
    console.error('KVK lookup failed:', error);
    return NextResponse.json(
      { error: 'Er ging iets mis bij het zoeken naar bedrijven.' },
      { status: 500 }
    );
  }
}
