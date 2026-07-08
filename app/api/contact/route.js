import { Resend } from "resend";

export async function POST(request) {
  const { name, email, phone, service, message } = await request.json();

  if (!name || !email) {
    return Response.json({ error: "Name and email are required." }, { status: 400 });
  }

  // If RESEND_API_KEY is not set yet, log and return success so the form UX works.
  // Add RESEND_API_KEY to your Vercel project environment variables to activate.
  if (!process.env.RESEND_API_KEY) {
    console.log("[contact] Resend not configured. Submission:", { name, email, phone, service });
    return Response.json({ success: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "Cade Barone Website <onboarding@resend.dev>",
    to: "cadebarone00@gmail.com",
    replyTo: email,
    subject: `New inquiry — ${service || "General"} — ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:#1F2D44;">New website inquiry</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#4A586C;font-weight:600;width:120px;">Name</td><td style="padding:8px 0;">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#4A586C;font-weight:600;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#C2A14D;">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#4A586C;font-weight:600;">Phone</td><td style="padding:8px 0;">${phone || "—"}</td></tr>
          <tr><td style="padding:8px 0;color:#4A586C;font-weight:600;">Service</td><td style="padding:8px 0;">${service || "—"}</td></tr>
        </table>
        ${message ? `<h3 style="color:#1F2D44;margin-top:24px;">Message</h3><p style="color:#4A586C;line-height:1.6;">${message}</p>` : ""}
        <hr style="border:none;border-top:1px solid #E4E9F0;margin:32px 0;">
        <p style="color:#9DA9BC;font-size:13px;">Sent from cadebarone.com</p>
      </div>
    `,
  });

  return Response.json({ success: true });
}
