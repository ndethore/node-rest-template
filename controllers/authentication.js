const jwt = require('jsonwebtoken');
const config = require('../config/main');
var User = require('../models/user');


function generateToken(payload) {
  return jwt.sign(payload, (config.secret || 'secret'), { expiresIn: '7d' });

}

exports.register = function(req, res) {

    console.log("[+] Registering user " + req.body.email + "...");
    console.log("Body: " + req.body.password);

    const user = new User({ email: req.body.email});
    User.register(user, req.body.password, function(err, account) {

        if (err) {
            return res.status(422).send({ error: err});
        }

        // Subscribe member to Mailchimp list
        // mailchimp.subscribeToNewsletter(user.email);

        var payload = {
          '_id':        user._id,
          'email':      user.email,
          'firstName':  user.firstName,
          'lastName':    user.lastName
        };
        // Respond with JWT if user was created
        return res.status(201).json({
            token: `${generateToken(payload)}`,
            user: payload
        });

    });
    console.log("Registration complete.");
};

exports.login = function(req, res) {
    var payload = {
      '_id':        req.user._id,
      'email':      req.user.email,
      'firstName':  req.user.firstName,
      'lastName':   req.user.lastName
    };

    return res.status(201).json({
        token: `${generateToken(payload)}`,
        user: payload
    });
};
