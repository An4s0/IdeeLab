import nodemailer from "nodemailer";

export default async function sendVerifyEmail(email: string, token: string) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT!),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  if (!transporter) return false;

  await transporter.sendMail({
    from: `"IdeeLab" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Verify Your Email Address",
    html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 24px; border-radius: 8px;">
            <div style="text-align: center;">
                <img src="https://i.imgur.com/NfIjqh2.png" alt="IdeeLab Logo" style="height: 80px; margin-bottom: 20px;" />
                <h2 style="color: #F97316; margin-bottom: 8px;">Verify Your Email</h2>
                <p style="color: #333; font-size: 16px; margin: 0 0 24px;">
                    Please click the button below to verify your email address.
                </p>
                <a href="${process.env.NEXT_PUBLIC_BASE_URL}/verify-email/${token}" 
                   style="display: inline-block; padding: 12px 24px; background-color: #F97316; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">
                    Verify Email
                </a>
                <p style="font-size: 14px; color: #777; margin-top: 24px;">
                    Or copy and paste the following link in your browser:
                </p>
                <p style="font-size: 14px; word-break: break-all;">
                    <a href="${process.env.NEXT_PUBLIC_BASE_URL}/verify-email/${token}">
                        ${process.env.NEXT_PUBLIC_BASE_URL}/verify-email/${token}
                    </a>
                </p>
            </div>
        </div>
    `,
    text: `Please verify your email by clicking the link: ${process.env.NEXT_PUBLIC_BASE_URL}/verify-email/${token}`,
  });

  return true;
}
