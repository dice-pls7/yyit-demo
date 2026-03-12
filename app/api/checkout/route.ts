import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { description, price, reference } = await req.json();

  if (!description || !price || !reference) {
    return NextResponse.json({ error: 'Ongeldige invoer' }, { status: 400 });
  }

  const serviceId = process.env.PAYNL_SERVICE_ID;
  const userId = process.env.PAYNL_USER_ID;
  const tokenId = process.env.PAYNL_TOKEN_ID;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://yyit-demo.vercel.app';

  if (!serviceId || !userId || !tokenId) {
    return NextResponse.json({ error: 'Server configuratie ontbreekt' }, { status: 500 });
  }

  const base64Auth = Buffer.from(`${userId}:${tokenId}`).toString('base64');
  const totalCents = Math.round(price * 100);

  const body = {
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
    console.error('Pay.nl error:', data);
    return NextResponse.json({ error: 'Betaalpagina kon niet worden geladen' }, { status: 500 });
  }

  return NextResponse.json({ redirectUrl: data.links?.checkout });
}
