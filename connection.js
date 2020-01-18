var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "k8s",
  password: "k8s",
  port: "3306",
  database: "test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("*** k8s_node connected successfully to k8s_sql. Connected!");
});

module.exports = con;