var mongoose = require('mongoose');

/**
 * mongoose key 감추기
 * https://wonblog.tistory.com/16
*/

var wordsModel;

/**
 * 1. 로컬이 아니면 키 감추기
 * 2. db 연결
 * 3. 스키마 구성
 */
exports.connect=function(){
    console.log(__dirname);
    if(process.env.NODE_ENV =='production'){
      var config=require('./config/prod');
    }
    else{
      var config=require('./config/dev');
    }
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
    wordsModel = mongoose.model('Words', Words);
}

/**
 * 데이터 다루는 함수
 */
exports.load_data=async function(){
    const data = await wordsModel.find({});
    return data;
}
exports.save_data=function(req){
    var words = new wordsModel();
    words.word=req.body.word;
    words.meanings=req.body['meanings[]'];
    try{
      words.save();
      return {status: "SUCCESS"};
    } catch(err){
      console.log(err);
    }
}
exports.del_one=function(id){
  try{
    wordsModel.findByIdAndDelete(id).then(function(doc){console.log(doc)});
    return {status:"SUCCESS"};
  }catch(err){
    console.log(err);
  }
}