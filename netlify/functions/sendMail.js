const nodemailer = require('nodemailer')
exports.handler = (event, context, callback) => {
  if (event.httpMethod === 'POST') {
    const {email,subject,message}=JSON.parse(event.body);
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.APP_EMAIL,
        pass: process.env.APP_EMAIL_PASS,
      },
    });
    let mailOptions = {
      from: email,
      to: ["ibracool99@gmail.com","sedargroup.sn@gmail.com"],
      subject: subject,
      html: message,
    };
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        callback(null, {
          statusCode: 404,
          body: JSON.parse(err)
        })
      } else {
        callback(null, {
          statusCode: 200,
          body: JSON.parse(info)
        })
      }
    });
  }
}