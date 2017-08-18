const AuthenticationController  = require('./controllers/authentication');
const express                   = require('express');
const passportService           = require('./config/passport');
const passport                  = require('passport');
const logger                    = require('morgan');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

module.exports = function (app) {
    // Initializing route groups
    const apiRoutes = express.Router();
    const authRoutes = express.Router();

    //= ========================
    // Auth Routes
    //= ========================

    // Set auth routes as subgroup/middleware to apiRoutes
    apiRoutes.use('/auth', authRoutes);

    // Set register route
    authRoutes.post('/register', AuthenticationController.register);

    // Set login route
    authRoutes.post('/login', requireLogin, AuthenticationController.login);



    // Set url for API group routes
    app.use('/api', apiRoutes);



    //= ========================
    // Error Handling
    //= ========================

    app.use(function (err, req, res, next) {
      // We log the error internaly
        logger.error(err);

      //
      // Remove Error's `stack` property. We don't want
      // users to see this at the production env
      //
        if (req.app.get('env') !== 'development') {
            delete err.stack;
        }

      // Finaly respond to the request
        res.status(err.statusCode || 500).json(err);
    });

};
