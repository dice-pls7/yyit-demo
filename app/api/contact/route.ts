import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { rateLimit } from '@/lib/rate-limit';

const limiter = rateLimit({ limit: 5, interval: 60_000 });

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (!limiter.check(ip).success) {
    return NextResponse.json({ error: 'Te veel verzoeken. Probeer het later opnieuw.' }, { status: 429 });
  }

  let parsed: { name?: string; email?: string; company?: string; phone?: string; message?: string };
  try {
    parsed = await req.json();
  } catch {
    return NextResponse.json({ error: 'Ongeldig verzoek.' }, { status: 400 });
  }

  const { name, email, company, phone, message } = parsed;

  if (!name || !email) {
    return NextResponse.json({ error: 'Naam en e-mail zijn verplicht.' }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set');
    return NextResponse.json({ error: 'Verzenden mislukt, probeer het later opnieuw.' }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: 'YYIT Website <noreply@yyit.nl>',
    to: 'ict-support@amyyon.nl',
    subject: `Nieuw contactformulier van ${name}`,
    text: [
      `Naam: ${name}`,
      `E-mail: ${email}`,
      `Bedrijf: ${company || '-'}`,
      `Telefoon: ${phone || '-'}`,
      `Bericht: ${message || '-'}`,
    ].join('\n'),
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Verzenden mislukt, probeer het later opnieuw.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
