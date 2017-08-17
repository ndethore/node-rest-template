const passport = require('passport');
const User = require('../models/user');
const config = require('./main');

// const JwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;

// Setting JWT strategy options
// const jwtOptions = {
//     // Telling Passport to check authorization headers for JWT
//     jwtFromRequest: ExtractJwt.fromAuthHeader(),
//     // Telling Passport where to find the secret
//     secretOrKey: config.secret

//     // TO-DO: Add issuer and audience checks
// };

// // Setting up JWT login strategy
// const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
//     User.findById(payload._id, (err, user) => {
//         if (err) { return done(err, false); }

//         if (user) {
//             done(null, user);
//         } else {
//             done(null, false);
//         }
//     });
// });


// passport.use(jwtLogin);
// passport.use(new LocalStrategy(User.authenticate()));
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

console.log('Passport successfully configured.');

