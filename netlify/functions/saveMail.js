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
  const mail = (event.queryStringParameters || {}).email;

  if (!mail) {
    return response(400, { error: "No mail provided" });
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
      from: `Sédar <${process.env.APP_EMAIL}>`,
      to: recipients(),
      subject: "Abonnement à la newsletter",
      text: `Nouvel abonnement à la newsletter: ${mail}`,
      html: `Nouvel abonnement à la newsletter: ${mail}`,
    });

    return response(200, { ok: true });
  } catch (error) {
    console.error("saveMail failed", error);
    return response(502, { error: "Could not send the email" });
  }
};
