var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var wordController = require('./controllers/wordController.js');

try{
  /**
   * 1. 로컬이 아니면 키 감추기(https://wonblog.tistory.com/16)
   * 2. db 연결
   */
  console.log(__dirname);
  if(process.env.NODE_ENV =='production'){
    var config=require('./public/javascripts/config/prod');
  }
  else{
    var config=require('./public/javascripts/config/dev');
  }
  mongoose.connect(config.mongoURI, {useNewUrlParser: true})
  var db=mongoose.connection;
  db.on('error', console.error.bind(console, "connection error: "));
  db.once('open', ()=>{
    console.log("DB connected");
  });
} catch(error){
  console.log(error);
}


/*데이터베이스 요청 라우팅*/
router.get('/load', async (req, res) => {
  res.json(await wordController.load_data());
});
router.post('/write', function(req, res, next){
  res.json(wordController.save_data(req));
});
router.post('/del', function(req, res, next){
  res.json(wordController.del_one(req.body._id));
});

module.exports = router;