var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
const createError = require('http-errors');

var wordController = require('./controllers/wordController.js');
var userController = require('./controllers/userController.js');

try{
  /**
   * 1. 로컬이 아니면 키 감추기(https://wonblog.tistory.com/16)
   * 2. db 연결
   */
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

// wordModel
router.get('/word/load', async (req, res) => {
  res.json(await wordController.load_words());
});
router.post('/word/write', function(req, res, next){
  res.json(wordController.save_word(req));
});
router.post('/word/del', function(req, res, next){
  res.json(wordController.del_word(req.body._id));
});

// userModel
router.get('/auth', async (req, res) => {
  let isSuccess = await userController.signIn(req);
  if(isSuccess) res.status(200).send('signIn/signUp success');
  else res.status(400).send('The assessToken is not available.');
});

module.exports = router;