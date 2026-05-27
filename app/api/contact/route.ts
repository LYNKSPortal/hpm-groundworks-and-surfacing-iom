import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, service, details } = body;

    if (!firstName || !lastName || !email || !phone || !service || !details) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"HPM Website" <${process.env.MAIL_FROM}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `New Quote Request — ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #111111; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #43D5E9; margin: 0; font-size: 22px;">New Quote Request</h1>
            <p style="color: #aaaaaa; margin: 4px 0 0; font-size: 13px;">Received via hpm.im contact form</p>
          </div>
          <div style="background: #f7f7f7; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px; font-weight: 600; width: 140px;">Name</td>
                <td style="padding: 8px 0; color: #111111; font-size: 14px;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px; font-weight: 600;">Email</td>
                <td style="padding: 8px 0; color: #111111; font-size: 14px;"><a href="mailto:${email}" style="color: #43D5E9;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px; font-weight: 600;">Phone</td>
                <td style="padding: 8px 0; color: #111111; font-size: 14px;"><a href="tel:${phone}" style="color: #43D5E9;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px; font-weight: 600;">Service</td>
                <td style="padding: 8px 0; color: #111111; font-size: 14px;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px; font-weight: 600; vertical-align: top;">Project Details</td>
                <td style="padding: 8px 0; color: #111111; font-size: 14px; line-height: 1.6;">${details.replace(/\n/g, '<br>')}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e5e5; font-size: 12px; color: #aaaaaa;">
              Sent from HPM Groundworks & Surfacing website — hpm.im
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
