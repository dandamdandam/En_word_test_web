var mongoose = require('mongoose');

/*스키마 생성*/
var WordSchema=mongoose.Schema;
var Word=new WordSchema({
  word: String,
  meanings: [String]
});

wordModel = mongoose.model('Word', Word);

module.exports = {
  wordModel: wordModel
}