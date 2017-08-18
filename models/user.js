const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const User = new Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
    validate: [validateEmail, 'Please fill a valid email address']
  },
  firstName: String,
  lastName: String
});

User.plugin(passportLocalMongoose, {usernameField: 'email', usernameQueryFields: ['email']});

module.exports = mongoose.model('User', User);
