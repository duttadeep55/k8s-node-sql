var os = require('os');
var express = require('express');
var con = require('../connection');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var hostname = os.hostname();
  console.log('*** Serving from host : '+hostname)
  var sql = "INSERT INTO pods (name) VALUES ('"+hostname+"')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("*** hostname : "+hostname+"  record inserted in 'pods' table.");
  });
  res.render('index', { title: 'k8s Node SQL', hostname: hostname });
});

/* GET health check. */
router.get('/health', function(req, res, next) {
  res.send(200);
});

module.exports = router;
