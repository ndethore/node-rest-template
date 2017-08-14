#!/usr/bin/env node

const config          = require('./config');
const argv            = require('minimist')(process.argv.slice(2));
const express         = require('express');
const bodyParser      = require('body-parser');
const mongoose        = require('mongoose');
const twilio_client   = require('twilio')(config.account.sid, config.account.auth_token);

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

app.use(bodyParser.json());
require('./routes')(app, {});
app.listen(port, () => {
    console.log('Listening on port: ' + port);
});
