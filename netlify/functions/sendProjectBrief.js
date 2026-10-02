const nodemailer = require("nodemailer");

const DEFAULT_RECIPIENTS = "sedargroup.sn@gmail.com";

const recipients = () =>
  (process.env.PROJECT_CONTACT_EMAIL || DEFAULT_RECIPIENTS)
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const response = (statusCode, body) => ({
  statusCode,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
});

const buildHtml = ({ subject, page, fields }) => {
  const rows = fields
    .map(
      ({ key, value }) => `
        <tr>
          <td style="padding:10px 14px;border:1px solid #e8e2dc;background:#faf7f4;font-family:Arial,sans-serif;font-size:13px;color:#7d7873;width:240px;vertical-align:top;">${escapeHtml(
            key
          )}</td>
          <td style="padding:10px 14px;border:1px solid #e8e2dc;font-family:Arial,sans-serif;font-size:14px;color:#191514;white-space:pre-wrap;">${escapeHtml(
            value
          )}</td>
        </tr>`
    )
    .join("");

  return `
  <div style="background:#f4f1ee;padding:28px;">
    <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e8e2dc;">
      <div style="background:#15110f;padding:26px 30px;">
        <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#c5a47e;">Sédar Group</p>
        <h1 style="margin:8px 0 0;font-family:Georgia,serif;font-size:22px;font-weight:normal;color:#ffffff;">${escapeHtml(
          subject
        )}</h1>
        <p style="margin:6px 0 0;font-family:Arial,sans-serif;font-size:12px;color:rgba(255,255,255,0.55);">Reçu depuis la page « ${escapeHtml(
          page
        )} » le ${new Date().toLocaleString("fr-FR", { timeZone: "Africa/Dakar" })}</p>
      </div>
      <div style="padding:26px 30px;">
        <table style="width:100%;border-collapse:collapse;">${rows}</table>
      </div>
    </div>
  </div>`;
};

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

  const { subject, page, name, email, phone, fields } = payload;

  if (!name || !email || !phone || !Array.isArray(fields) || fields.length === 0) {
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
      from: `Sédar Group <${process.env.APP_EMAIL}>`,
      to: recipients(),
      replyTo: `${name} <${email}>`,
      subject: `${subject || "Nouveau projet"} — ${name}`,
      text: fields.map(({ key, value }) => `${key}: ${value}`).join("\n"),
      html: buildHtml({
        subject: subject || "Nouveau projet",
        page: page || "site",
        fields,
      }),
    });

    return response(200, { ok: true });
  } catch (error) {
    console.error("sendProjectBrief failed", error);
    return response(502, { error: "Could not send the email" });
  }
};
