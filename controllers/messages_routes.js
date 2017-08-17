
module.exports = function(app, db) {


    // Create message
    app.post('/users/:userID/numbers/:numberID/messages', (req, res) => {
        console.log("[+] Adding message...");
        console.log("Params: " + req.params);
        console.log("Body: " + req.body);

        res.send(200);
    });


    // Retrieve message
    app.get('/users/:userID/numbers/:numberID/messages', (req, res) => {
        console.log("[+] Retrieving all messages for number" + req.params.numberID + "...");
        console.log("Params: " + req.params);
        console.log("Body: " + req.body);

        // Todo: Query db and build message list.
        res.send(200);
    });


    // Retrieve all messages
    app.get('/users/:userID/messages', (req, res) => {
        console.log("[+] Retrieving all messages for user " + req.params.userID + "...");
        console.log("Params: " + req.params);
        console.log("Body: " + req.body);

        // Todo: Query db and build message list.
        res.send(200);
    });

};
