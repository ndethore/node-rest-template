const numberRoutes = require('./number_routes');

module.exports = function(app, db) {
    numberRoutes(app, db);
};
