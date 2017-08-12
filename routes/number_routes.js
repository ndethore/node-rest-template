module.exports = function(app, db) {
    app.get('/number', (req, res) => {
        // Request a number that wasn't previously registered
        // for the website url in req.body
        console.log(req.body);

        res.send('+123456789')
    });
};
