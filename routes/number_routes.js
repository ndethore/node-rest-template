module.exports = function(app, db) {

    app.get('users/:userID/number', (req, res) => {
        // Todo: Check user's current tier. If too small return error
        // Todo: Buy number on twilio
        // Todo: Save number in database
        console.log("[+] Buying number for user " + req.params.userID + "...");
        console.log("Params: " + req.params);
        console.log("Body: " + req.body);

        res.send('+123456789')
    });

    app.delete('users/:userID/number/:numberID', (req, res) => {
        // Todo: Update user's tier
        // Todo: Release number on twilio
        // Todo: Remove database entry
        console.log("[+] Deleting number for user " + req.params.userID + "...");
        console.log("Params: " + req.params);
        console.log("Body: " + req.body);

        res.status(200);
    });
};
