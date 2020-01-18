var express = require('express');
var con = require('../connection');
var router = express.Router();

/* GET pods listing. */
router.get('/', function(req, res, next) {
  // res.send('List Of Pods');
  var sql = "select name from pods";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("*** Listing Pod Details inserted.");
    console.log(result)
    res.render('pods', { title: 'k8s Node SQL - List of Pods', pods: result });
  });
});

module.exports = router;
