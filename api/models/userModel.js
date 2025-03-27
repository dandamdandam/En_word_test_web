var mongoose = require('mongoose');

var UserSchema=mongoose.Schema;
var User=new UserSchema({ userEmail: String });

userModel = mongoose.model('User', User);

module.exports = {
  userModel: userModel
}