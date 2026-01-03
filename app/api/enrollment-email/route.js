import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { to, firstName, courseTitle, phone } = await req.json();

    if (!to) {
      return new Response(JSON.stringify({ ok: false, error: 'Missing recipient email' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // If SMTP is not configured, no-op but report success to avoid blocking UX
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, FROM_EMAIL } = process.env;
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !FROM_EMAIL) {
      console.warn('SMTP not configured. Skipping email send.');
      return new Response(JSON.stringify({ ok: true, skipped: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const subject = `Thank you for enrolling${courseTitle ? ` in ${courseTitle}` : ''} - VAWE Institute`;
    const html = `
      <div style="font-family: Arial, sans-serif; line-height:1.6; color:#111;">
        <h2 style="margin:0 0 12px;">Thank you${firstName ? `, ${firstName}` : ''}!</h2>
        <p>We’ve received your enrollment details${courseTitle ? ` for <b>${courseTitle}</b>` : ''}.</p>
        <p>Our team will contact you within <b>10 minutes to 24 hours</b> to complete the next steps.</p>
        ${phone ? `<p>We may also reach you at <b>${phone}</b>.</p>` : ''}
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0;" />
        <p style="margin:0;">Warm regards,<br/>VAWE Institute</p>
      </div>
    `;

    await transporter.sendMail({
      from: FROM_EMAIL,
      to,
      subject,
      html,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Enrollment email error:', err);
    return new Response(JSON.stringify({ ok: false, error: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}


