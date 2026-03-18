import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';

const limiter = rateLimit({ limit: 100, interval: 60_000 }); 

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (!limiter.check(ip).success) {
    return NextResponse.json({ error: 'Te veel verzoeken. Probeer het later opnieuw.' }, { status: 429 });
  }

  let parsed: { planName?: string; billingCycle?: string; quantity?: number };
  try {
    parsed = await req.json();
  } catch {
    return NextResponse.json({ error: 'Ongeldig verzoek.' }, { status: 400 });
  }
  const { planName, billingCycle, quantity } = parsed;

  if (!planName || !billingCycle || quantity === undefined) {
    return NextResponse.json({ error: 'Ongeldige invoer' }, { status: 400 });
  }
    if (quantity <= 0 || quantity > 1665) {
    return NextResponse.json({ error: 'Ongeldige hoeveelheid' }, { status: 400 });
  }
  if (billingCycle !== 'monthly' && billingCycle !== 'yearly') {
    return NextResponse.json({ error: 'Ongeldige factureringscyclus' }, { status: 400 });
  }

  const reference = `YYIT-${planName.toUpperCase()}-${billingCycle.toUpperCase()}-${Date.now()}`;
  const description = `${planName} (${billingCycle === 'monthly' ? 'maand' : 'jaar'}) - ${quantity} station${quantity !== 1 ? 's' : ''}`;
  let price = 0;
  const pricingplans = {
    Starter: { monthly: 14.95 },
    Compleet: { monthly: 44.95 },
    Premium: { monthly: 59.95 },
  };

  
  switch (planName) {
    case 'Starter':
      price = billingCycle === 'monthly' ? pricingplans.Starter.monthly : pricingplans.Starter.monthly * 10; // 2 maanden gratis bij jaarbetaling 
      break;
    case 'Compleet':
      price = billingCycle === 'monthly' ? pricingplans.Compleet.monthly : pricingplans.Compleet.monthly * 10; // 2 maanden gratis bij jaarbetaling 
      break;
    case 'Premium':
      price = billingCycle === 'monthly' ? pricingplans.Premium.monthly : pricingplans.Premium.monthly * 10; // 2 maanden gratis bij jaarbetaling 
      break;
    default:
      return NextResponse.json({ error: 'Ongeldig plan' }, { status: 400 });
  }

  price = price * quantity;

  const serviceId = process.env.PAYNL_SERVICE_ID;
  const userId = process.env.PAYNL_USER_ID;
  const tokenId = process.env.PAYNL_TOKEN_ID;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.yyit.nl/#';

  if (!serviceId || !userId || !tokenId) {
    return NextResponse.json({ error: 'Server configuratie ontbreekt' }, { status: 500 });
  }

  const base64Auth = Buffer.from(`${userId}:${tokenId}`).toString('base64');
  const totalRounded = (price * 100).toFixed(0); // Zorg dat het bedrag altijd 2 decimalen heeft, ook als het een heel getal is

  const body = {
    serviceId,
    type: 'SINGLE',
    description,
    returnUrl: `${baseUrl}?betaald=1`,
    amount: {
      value: totalRounded,
      currency: 'EUR',
    },
    paymentMethod: { id: 10 }, // iDeal
    notification: {
      type: 'email',
      recipient: 'support-icarus@amyyon.nl',
    },
  };

  const response = await fetch('https://connect.pay.nl/v1/orders', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      authorization: `Basic ${base64Auth}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error('Pay.nl error:', response.status, data?.type ?? 'unknown');
    return NextResponse.json({ error: 'Betaalpagina kon niet worden geladen' }, { status: 500 });
  }

  return NextResponse.json({ redirectUrl: data.links?.checkout });
}
