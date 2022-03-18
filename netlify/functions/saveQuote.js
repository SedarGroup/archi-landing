var mysql = require('mysql');
exports.handler = (event, context, callback) => {
  console.log(event)
  const {
    email,
    name,
    phone,
    renovation,
    conception
  } = JSON.parse(event.body);
  if (email && name && phone) {
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
      var sql = `INSERT INTO quotes ( email, name, phone, renovation, conception) VALUES ('${email}','${name}','${phone}','${renovation?renovation:0}','${conception?conception:0}')`;
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