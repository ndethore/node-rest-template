const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    // email: {
    //     type: String,
    //     // lowercase: true,
    //     // unique: true,
    //     // required: true
    // }
    // password: {
    //     type: String,
    //     // required: true
    // }
});

User.plugin(passportLocalMongoose);//, {usernameField: 'email'});

module.exports = mongoose.model('User', User);
