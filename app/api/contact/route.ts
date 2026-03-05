import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const phone = data.get('phone') as string;
    const subject = data.get('subject') as string;
    const message = data.get('message') as string;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Required fields missing' }, { status: 400 });
    }

    // TODO: Add your email sending logic here (e.g. nodemailer, resend, sendgrid)
    console.log('Contact form submission:', { name, email, phone, subject, message });

    return NextResponse.json({ success: true, message: 'Message received! We will get back to you shortly.' });
  } catch {
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
