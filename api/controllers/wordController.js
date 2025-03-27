var wordModel = require("../models/wordModel.js").wordModel;

/**
 * wordModel의 모든 데이터 로드
 * @returns 
 */
exports.load_words=async function(){
    const data = await wordModel.find({});
    return data;
}
/**
 * 
 * @param {*} req 
 * @returns 
 */
exports.save_word=function(req){
    var words = new wordModel();
    try{
        words.word=req.body.word;
        words.meanings=req.body['meanings'];
        words.save();
        return {status: 200};
    } catch(err){
        console.log(err);
    }
}
exports.del_word=function(id){
  try{
        wordModel.findByIdAndDelete(id).then(function(doc){});
        return {status:200};
  }catch(err){
        console.log(err);
  }
}