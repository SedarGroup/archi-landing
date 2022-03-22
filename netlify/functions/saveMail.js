// var mysql = require('mysql');
const nodemailer = require('nodemailer')
exports.handler = (event, context, callback) => {
  const mail = event.queryStringParameters.email;
  if(mail){
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.APP_EMAIL,
        pass: process.env.APP_EMAIL_PASS,
      },
    });
    let mailOptions = {
      from: `Sedar`,
      to: ["ibracool99@gmail.com","sedargroup.sn@gmail.com"],
      subject: "Abonnement à la newsletter",
      html: `Nouvel abonnement à la newsletter: ${mail}`,
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
  // var con = mysql.createConnection({
  //   host: process.env.MYSQLHOSTNAME,
  //   user: process.env.USER,
  //   password: process.env.PASSWORD,
  //   database: process.env.DATABASE
  // });
  // con.connect(function (err) {
  //   if (err) {
  //     callback(null, {
  //       statusCode: 500,
  //       body: JSON.stringify(err)
  //     })
  //   }
  //   console.log("Connected!");
  //   var sql = `INSERT INTO emails (email) VALUES ('${mail}')`;
  //   con.query(sql, function (err, result) {
  //     if (err) {
  //       callback(null, {
  //         statusCode: 500,
  //         body: JSON.stringify(err)
  //       })
  //     }
  //     callback(null, {
  //       statusCode: 200,
  //       body: '1 mail inserted'
  //     })
  //   });
  // });
}
  else {
    callback(null, {
      statusCode: 404,
      body: 'No mail provided'
    })
  }
}