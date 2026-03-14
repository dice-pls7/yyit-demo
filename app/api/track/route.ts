import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { event, properties } = body as { event: string; properties?: Record<string, unknown> };

    if (!event || typeof event !== 'string') {
      return NextResponse.json({ error: 'Missing event name' }, { status: 400 });
    }

    const propsString = properties
      ? Object.entries(properties)
          .map(([k, v]) => `${k}=${String(v)}`)
          .join(' ')
      : '';

    // Structured log — visible for free in Vercel Dashboard → your project → Logs tab.
    // Filter by "[ANALYTICS]" to find these events quickly.
    console.log(`[ANALYTICS] ${event}${propsString ? ' | ' + propsString : ''}`);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
