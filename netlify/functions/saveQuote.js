var mysql = require('mysql');
const nodemailer = require('nodemailer');

function sendMail(email, name, phone, option1,
  option2,
  surface, other) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_EMAIL_PASS,
    },
  });
  let mailOptions = {
    from: `Sedar <${email}>`,
    to: ["ibracool99@gmail.com", "sedargroup.sn@gmail.com"],
    subject: "Nouvelle demande de devis",
    html: `${name} souhaite avoir un devis.\nTéléphone: ${phone?phone:'N/A'}\nMail: ${email?email:'N/A'}\n Option 1: ${option1?option1:'N/A'}\nOption2: ${option2?option2:'N/A'} ${other?other:''}\nSurface: ${surface?surface:'N/A'} m2\n `,
  };
  transporter.sendMail(mailOptions, function (err, info) {});
}
exports.handler = (event, context, callback) => {
  if (event.httpMethod === 'POST') {
    const {
      email,
      name,
      phone,
      option1,
      option2,
      surface,
      other
    } = JSON.parse(event.body);
    if (email && name && phone) {
      sendMail(email, name, phone, option1, option2, surface, other)
      var con = mysql.createConnection({
        host: process.env.MYSQLHOSTNAME,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
      });
      con.connect(function (err) {
        if (err) {
          callback(null, {
            statusCode: 500,
            body: JSON.stringify(err)
          })
        }
        console.log("Connected!");
        var sql = `INSERT INTO quotes ( email, name, phone, option1, option2, surface, other) VALUES ('${email}','${name}','${phone}','${option1}','${option2}','${surface?surface:0}','${other}')`;
        con.query(sql, function (err, result) {
          if (err) {
            callback(null, {
              statusCode: 500,
              body: JSON.stringify(err)
            })
          }
          callback(null, {
            statusCode: 200,
            body: '1 quote inserted'
          })
        });
      });
    } else {
      callback(null, {
        statusCode: 404,
        body: 'Invalid request'
      })
    }
  }
}