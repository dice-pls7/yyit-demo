import { NextRequest, NextResponse } from 'next/server';

// Whitelist of valid plans with their exact prices in euros
const VALID_PLANS: Record<string, number> = {
  'YYIT Starter pakket': 12.50,
  'YYIT Compleet pakket': 49.00,
  'YYIT Premium pakket': 99.00,
};

// Trusted domains for payment redirects
const TRUSTED_REDIRECT_HOSTS = ['connect.pay.nl'];

// Tolerance for floating-point price comparison (e.g. 12.50 vs 12.4999...)
const PRICE_EPSILON = 0.001;

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { description, price, reference } = body;

  // Type validation
  if (
    typeof description !== 'string' ||
    typeof price !== 'number' ||
    typeof reference !== 'string' ||
    !description ||
    !reference
  ) {
    return NextResponse.json({ error: 'Ongeldige invoer' }, { status: 400 });
  }

  // Whitelist price validation — prevent price manipulation
  const validPrice = VALID_PLANS[description.trim()];
  if (validPrice === undefined || Math.abs(validPrice - price) > PRICE_EPSILON) {
    return NextResponse.json({ error: 'Ongeldige prijs of pakket' }, { status: 400 });
  }

  const serviceId = process.env.PAYNL_SERVICE_ID;
  const userId = process.env.PAYNL_USER_ID;
  const tokenId = process.env.PAYNL_TOKEN_ID;
  const notificationEmail = process.env.PAYNL_NOTIFICATION_EMAIL ?? 'support-icarus@amyyon.nl';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.yyit.nl/#';

  if (!serviceId || !userId || !tokenId) {
    return NextResponse.json({ error: 'Server configuratie ontbreekt' }, { status: 500 });
  }

  const base64Auth = Buffer.from(`${userId}:${tokenId}`).toString('base64');
  const totalCents = Math.round(validPrice * 100);

  const requestBody = {
    serviceId,
    type: 'SINGLE',
    description,
    reference,
    returnUrl: `${baseUrl}?betaald=1`,
    amount: {
      value: totalCents,
      currency: 'EUR',
    },
    paymentMethod: { id: 10 }, // iDeal
    notification: {
      type: 'email',
      recipient: notificationEmail,
    },
  };

  const response = await fetch('https://connect.pay.nl/v1/orders', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      authorization: `Basic ${base64Auth}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error('Pay.nl API error', { status: response.status });
    return NextResponse.json({ error: 'Betaalpagina kon niet worden geladen' }, { status: 500 });
  }

  const redirectUrl: unknown = data.links?.checkout;

  // Validate redirect URL against trusted domains before returning it
  if (typeof redirectUrl !== 'string') {
    return NextResponse.json({ error: 'Betaalpagina kon niet worden geladen' }, { status: 500 });
  }

  try {
    const parsed = new URL(redirectUrl);
    if (!TRUSTED_REDIRECT_HOSTS.includes(parsed.hostname)) {
      console.error('Untrusted redirect host returned by payment API', { host: parsed.hostname });
      return NextResponse.json({ error: 'Betaalpagina kon niet worden geladen' }, { status: 500 });
    }
  } catch {
    return NextResponse.json({ error: 'Betaalpagina kon niet worden geladen' }, { status: 500 });
  }

  return NextResponse.json({ redirectUrl });
}
