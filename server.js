#!/usr/bin/env node

const config  = require('./config');
const argv    = require('minimist')(process.argv.slice(2));
const twilio_client  = require('twilio')(config.account.sid, config.account.auth_token);
const express        = require('express');
const mongo_client   = require('mongodb').MongoClient;

const app = express();
const port = 8000;

if (argv.h || argv.help) {
    console.log([
        '',
        '  Usage: server.js [options]',
        '',
        '  Options:',
        '',
        '    -h, --help    output usage information',
        '',
    ].join('\n'));
    process.exit(0);
}

app.listen(port, () => {
    console.log('Listening on port: ' + port);
});
