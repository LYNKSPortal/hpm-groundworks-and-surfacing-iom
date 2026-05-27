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
      cc: process.env.MAIL_CC,
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

    await transporter.sendMail({
      from: `"HPM Groundworks & Surfacing" <${process.env.MAIL_FROM}>`,
      to: email,
      replyTo: process.env.MAIL_TO,
      subject: `Thanks for your enquiry, ${firstName} — HPM Groundworks`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #111111; padding: 24px; border-radius: 8px 8px 0 0;">
            <img src="https://hpm.im/images/logo.png" alt="HPM Groundworks & Surfacing" style="height: 48px; width: auto; filter: invert(1);" />
          </div>
          <div style="background: #ffffff; padding: 32px 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5;">
            <h2 style="color: #111111; font-size: 20px; margin: 0 0 8px;">Thanks for getting in touch, ${firstName}!</h2>
            <p style="color: #6b7280; font-size: 14px; line-height: 1.6; margin: 0 0 24px;">
              We've received your enquiry and a member of our team will be in touch with you within the next <strong style="color: #111111;">24 hours</strong>.
            </p>

            <div style="background: #f7f7f7; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
              <p style="color: #111111; font-size: 13px; font-weight: 600; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 0.05em;">Your Submission</p>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 6px 0; color: #6b7280; font-size: 13px; font-weight: 600; width: 130px;">Name</td>
                  <td style="padding: 6px 0; color: #111111; font-size: 13px;">${firstName} ${lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #6b7280; font-size: 13px; font-weight: 600;">Phone</td>
                  <td style="padding: 6px 0; color: #111111; font-size: 13px;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #6b7280; font-size: 13px; font-weight: 600;">Service</td>
                  <td style="padding: 6px 0; color: #111111; font-size: 13px;">${service}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #6b7280; font-size: 13px; font-weight: 600; vertical-align: top;">Details</td>
                  <td style="padding: 6px 0; color: #111111; font-size: 13px; line-height: 1.6;">${details.replace(/\n/g, '<br>')}</td>
                </tr>
              </table>
            </div>

            <p style="color: #6b7280; font-size: 13px; line-height: 1.6; margin: 0 0 8px;">
              If you need to speak with us sooner, please don't hesitate to call or email us directly:
            </p>
            <p style="margin: 0 0 4px;">
              <a href="tel:+447624229993" style="color: #43D5E9; font-size: 13px; font-weight: 600; text-decoration: none;">📞 +44 7624 229993</a>
            </p>
            <p style="margin: 0 0 24px;">
              <a href="mailto:jaye@hpm.im" style="color: #43D5E9; font-size: 13px; font-weight: 600; text-decoration: none;">✉️ jaye@hpm.im</a>
            </p>

            <div style="border-top: 1px solid #e5e5e5; padding-top: 16px; font-size: 12px; color: #aaaaaa;">
              HPM Groundworks & Surfacing LTD · 7 Brookfield Avenue, Ramsey, IM8 2AD, Isle of Man<br/>
              <a href="https://hpm.im" style="color: #43D5E9; text-decoration: none;">hpm.im</a>
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
