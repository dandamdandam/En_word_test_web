var express = require('express');
var router = express.Router();

try{
  var mongo = require('../public/javascripts/mongo');
  /*mongoose 연결*/
  mongo.connect()
} catch(error){
  console.log(error);
}


/*데이터베이스 요청 라우팅*/
router.get('/load', async (req, res) => {
  res.json(await mongo.load_data());
});
router.post('/write', function(req, res, next){
  res.json(mongo.save_data(req));
});
router.post('/del', function(req, res, next){
  res.json(mongo.del_one(req.body._id));
});

module.exports = router;