var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/inputTab', function(req, res, next){
  res.render('inputTab');
});

router.get('/logTab', function(req, res, next){
  res.render('logTab');
});

router.get('/testTab', function(req, res, next){
  res.render('testTab');
});

module.exports = router;
