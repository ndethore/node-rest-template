const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  firstName: String,
  lastName: String
});

User.plugin(passportLocalMongoose, {usernameField: 'email', usernameQueryFields: ['email']});

module.exports = mongoose.model('User', User);
