var User = require('../models/user');

exports.register = function(req, res) {

    console.log("[+] Registering user " + req.body.username + "...");
    console.log("Body: " + req.body.password);

    User.register(new User({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {

            // var description;

            // switch (err) {
            // case MissingUsernameError:
            //     description = 'You must enter an email address.';
            // case MissingPasswordError:
            //     description = 'You must enter a password.';
            // case UserExistsError:
            //     description = 'That email address is already in use.';
            // }

            return res.status(422).send({ error: err});
        }

        // Subscribe member to Mailchimp list
        // mailchimp.subscribeToNewsletter(user.email);

        // Authenticate user after creation
        // passport.authenticate('local')(req, res, function () {
        //     return res.status(201);
        // });

        // or

        // Respond with JWT if user was created

        // let userInfo = setUserInfo(user);

        // res.status(201).json({
        //     token: 'JWT ' + generateToken(userInfo),
        //     user: userInfo
        // });

        console.log("No error detected.");
        return res.status(201).send(req.body.username);

    });
    console.log("Registration complete.");
};

exports.login = function(req, res) {
    //passport.authenticate('local')(req, res, function () {
    return res.status(200);
    //});
};
