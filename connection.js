var mysql = require('mysql');

var con = mysql.createConnection({
  host: process.env.MYSQL_HOST || "localhost",
  user: "k8s",
  password: "k8s",
  port: process.env.MYSQL_HOST || 3306,
  database: "test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("*** k8s_node connected successfully to k8s_sql. Connected!");
  var sql = "CREATE TABLE pods (name VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) console.log("*** Table already created : 'pods'");
    else
      console.log("*** Table created : 'pods'");
  });
});

module.exports = con;