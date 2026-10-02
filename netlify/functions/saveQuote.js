const nodemailer = require("nodemailer");

const DEFAULT_RECIPIENTS = "ibracool99@gmail.com,sedargroup.sn@gmail.com";

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

  const { email, name, phone, option1, option2, surface, other, region } = payload;

  if (!email || !name || !phone) {
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

  const lines = [
    `${name} souhaite avoir un devis.`,
    `Téléphone: ${phone || "N/A"}`,
    `Mail: ${email || "N/A"}`,
    `Option 1: ${option1 || "N/A"}`,
    `Option 2: ${option2 || "N/A"} ${other || ""}`.trim(),
    `Surface: ${surface || "N/A"} m2`,
    `Région: ${region || "N/A"}`,
  ];

  try {
    await transporter.sendMail({
      from: `Sédar <${process.env.APP_EMAIL}>`,
      to: recipients(),
      replyTo: `${name} <${email}>`,
      subject: "Nouvelle demande de devis",
      text: lines.join("\n"),
      html: lines.join("<br />"),
    });

    return response(200, { ok: true });
  } catch (error) {
    console.error("saveQuote failed", error);
    return response(502, { error: "Could not send the email" });
  }
};
