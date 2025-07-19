import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, weddingDate, pakket, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // Send email using Resend with React template
    const { data, error } = await resend.emails.send({
      from: 'Dreamlovers Contact <info@dreamlovers.be>',
      to: ['info@dreamlovers.be'],
      subject: `Nieuwe contact aanvraag van ${name}`,
      react: EmailTemplate({
        name,
        email,
        weddingDate,
        pakket,
        message,
      }),
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    console.log('Contact form submission sent:', {
      name,
      email,
      weddingDate,
      pakket,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ message: 'Contact form submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
