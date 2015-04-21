var express = require('express');
var router = express.Router();

var formulajs = require('formulajs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/hello', function(req, res, next) {
  var exeStr = 'formulajs.',
      result = {};
  if (req.body && req.body.str) {
    exeStr += req.body.str;
  }
  try {
    result = eval(exeStr);
  } catch (err) {
    result = err;
  }
  res.send(result);
});

module.exports = router;
