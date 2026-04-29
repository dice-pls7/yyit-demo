import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  let payload: {
    type?: string;
    payload?: {
      orderId?: string;
      status?: string;
      reference?: string;
      amount?: { value?: number; currency?: string };
      customer?: { email?: string };
      description?: string;
    };
  };

  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: 'Ongeldig verzoek.' }, { status: 400 });
  }

  const order = payload?.payload;
  const status = order?.status?.toUpperCase();

  // Only act on successful payments
  if (status !== 'PAID' && status !== 'CAPTURED') {
    return NextResponse.json({ received: true });
  }

  const customerEmail = order?.customer?.email ?? 'onbekend';
  const reference = order?.reference ?? '-';
  const description = order?.description ?? '-';
  const amount = order?.amount?.value
    ? `€ ${(order.amount.value / 100).toFixed(2)}`
    : '-';

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set');
    return NextResponse.json({ received: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: 'YYIT Website <noreply@yyit.nl>',
    to: 'ict-support@amyyon.nl',
    subject: `Nieuwe betaling ontvangen – ${reference}`,
    text: [
      'Er is een nieuwe betaling ontvangen via yyit.nl.',
      '',
      `Referentie:   ${reference}`,
      `Pakket:       ${description}`,
      `Bedrag:       ${amount}`,
      `Klant e-mail: ${customerEmail}`,
      '',
      'Neem contact op met de klant om hen te onboarden.',
    ].join('\n'),
  });

  if (error) {
    console.error('Resend error:', error);
    // Still return 200 so Pay.nl does not keep retrying
    return NextResponse.json({ received: true });
  }

  return NextResponse.json({ received: true });
}
