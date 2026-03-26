// app/api/testimonials/submit/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";



export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const { name, role, company, companyUrl, country, countryFlag, rating, review } = body;

    // Validation
    if (!name || !role || !country || !rating || !review) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
      return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
    }

    const stars = "⭐".repeat(Number(rating));
    const uniqueId = Date.now();

    await resend.emails.send({
      from: "onboarding@resend.dev", // swap for your domain later e.g. portfolio@sobee.dev
      to: process.env.CONTACT_EMAIL!,
      subject: `⭐ New Review from ${name} — ${rating}/5 stars`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px;">
          
          <h2 style="color: #1e3a8a; margin-bottom: 4px;">New Testimonial Submission</h2>
          <p style="color: #64748b; font-size: 14px; margin-top: 0;">Submitted on ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>

          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />

          <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
            <tr><td style="padding: 6px 0; color: #64748b; width: 120px;">Name</td><td style="padding: 6px 0; font-weight: bold; color: #0f172a;">${name}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Role</td><td style="padding: 6px 0; color: #0f172a;">${role}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Company</td><td style="padding: 6px 0; color: #0f172a;">${company || "—"}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Country</td><td style="padding: 6px 0; color: #0f172a;">${country} ${countryFlag}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;">Rating</td><td style="padding: 6px 0;">${stars}</td></tr>
          </table>

          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />

          <p style="color: #64748b; font-size: 14px; margin-bottom: 8px;">Review</p>
          <blockquote style="margin: 0; padding: 16px; background: #f8fafc; border-left: 4px solid #1e3a8a; border-radius: 4px; color: #334155; font-style: italic;">
            "${review}"
          </blockquote>

          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />

          <p style="color: #64748b; font-size: 13px; margin-bottom: 8px;">✅ To approve — copy this into <code style="background:#f1f5f9;padding:2px 6px;border-radius:4px;">data/testimonials.ts</code>:</p>

          <pre style="background: #0f172a; color: #e2e8f0; padding: 16px; border-radius: 8px; font-size: 13px; overflow-x: auto; white-space: pre-wrap;">{
  id: ${uniqueId},
  name: "${name}",
  role: "${role}",
  company: "${company || ""}",
  ${companyUrl ? `companyUrl: "${companyUrl}",` : ""}
  country: "${country}",
  countryFlag: "${countryFlag}",
  rating: ${rating},
  avatarColor: "bg-blue-800",
  review: "${review.replace(/"/g, '\\"').replace(/\n/g, " ")}",
},</pre>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Review submitted! Thank you.",
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}