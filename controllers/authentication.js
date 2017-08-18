const jwt = require('jsonwebtoken');
const config = require('../config/main');
var User = require('../models/user');


function generateToken(payload) {
  return jwt.sign(payload, config.secret, { expiresIn: '7d' });

}

exports.register = function(req, res) {

    console.log("[+] Registering user " + req.body.username + "...");
    console.log("Body: " + req.body.password);

    const user = new User({ username : req.body.username });
    User.register(user, req.body.password, function(err, account) {

        if (err) {
            return res.status(422).send({ error: err});
        }

        // Subscribe member to Mailchimp list
        // mailchimp.subscribeToNewsletter(user.email);

        var payload = {
          '_id': user._id,
          'username': user.username
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
      '_id': req.user._id,
      'username': req.user.username
    };

    return res.status(201).json({
        token: `${generateToken(payload)}`,
        user: payload
    });
};
