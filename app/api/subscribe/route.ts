import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Ongeldig e-mailadres' }, { status: 400 });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const server = process.env.MAILCHIMP_SERVER;

  if (!apiKey || !audienceId || !server) {
    return NextResponse.json({ error: 'Server configuratie ontbreekt' }, { status: 500 });
  }

  const response = await fetch(
    `https://${server}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
      }),
    }
  );

  const data = await response.json();

  // Already subscribed is not an error for the user
  if (!response.ok && data.title !== 'Member Exists') {
    return NextResponse.json({ error: 'Inschrijving mislukt, probeer het later opnieuw.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
