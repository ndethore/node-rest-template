module.exports = function(app, db) {

    app.get('users/:userID', (req, res) => {
        // Todo: Create user model
        // Todo: Query database and return JSON
        console.log("Params: " + req.params);
        console.log("[+] Retrieving user" + req.params.userID + "...");
        console.log("Body: " + req.body);

        res.status(200);
    });

    app.update('users/:userID', (req, res) => {
        // Todo: Update user's tier
        // Todo: Release number on twilio
        // Todo: Remove database entry
        console.log("[+] Deleting number for user " + req.params.userID + "...");
        console.log("Params: " + req.params);
        console.log("Body: " + req.body);

        res.status(200);
    });
};
