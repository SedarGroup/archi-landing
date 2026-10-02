const nodemailer = require("nodemailer");

const DEFAULT_RECIPIENTS = "sedargroup.sn@gmail.com";

const recipients = () =>
  (process.env.PROJECT_CONTACT_EMAIL || DEFAULT_RECIPIENTS)
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);

const response = (statusCode, body) => ({
  statusCode,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
});

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return response(405, { error: "Method not allowed" });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (error) {
    return response(400, { error: "Invalid JSON body" });
  }

  const { email, subject, message } = payload;

  if (!email || !message) {
    return response(400, { error: "Missing required fields" });
  }

  if (!process.env.APP_EMAIL || !process.env.APP_EMAIL_PASS) {
    console.error("APP_EMAIL / APP_EMAIL_PASS are not configured");
    return response(500, { error: "Mail transport not configured" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `Formulaire accueil <${process.env.APP_EMAIL}>`,
      to: recipients(),
      replyTo: email,
      subject: subject || "Message depuis le site",
      text: `Message envoyé par ${email}.\n${message}`,
      html: `Message envoyé par ${email}.<br />${message}`,
    });

    return response(200, { ok: true });
  } catch (error) {
    console.error("sendMail failed", error);
    return response(502, { error: "Could not send the email" });
  }
};
