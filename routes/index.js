var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/**
 * mongoose key 감추기
 * https://wonblog.tistory.com/16
*/
console.log(__dirname);
if(process.env.NODE_ENV =='production'){
  var config=require('./config/prod');
}
else{
  var config=require('./config/dev');
}

/*mongoose 연결*/
mongoose.connect(config.mongoURI, {useNewUrlParser: true})
var db=mongoose.connection;
db.on('error', console.error.bind(console, "connection error: "));
db.once('open', ()=>{
  console.log("DB connected");
});
/*스키마 생성*/
var Schema=mongoose.Schema;
var Words=new Schema({
  word: String,
  meanings: [String]
});
var wordsModel = mongoose.model('Words', Words);
/*데이터베이스 요청 라우팅*/
router.get('/load', async (req, res) => {
  const data = await wordsModel.find({});
  res.json(data);
});
router.post('/write', function(req, res, next){
  var words = new wordsModel();
  words.word=req.body.word;
  words.meanings=req.body['meanings[]'];
  try{
    words.save();
    res.json({status: "SUCCESS"});
  } catch(err){
    console.log(err);
  }
});
router.post('/del', function(req, res, next){
  var id=req.body._id;
  try{
    wordsModel.findByIdAndDelete(id).then(function(doc){console.log(doc)});
    res.json({status:"SUCCESS"});
  }catch(err){
    console.log(err);
  }
});
router.post('/check_data', function(req, res, next){    //DEBUG
  wordsModel.findOne({word:req.body.name}).then(function(doc){console.log(doc)});
});

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
