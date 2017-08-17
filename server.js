#!/usr/bin/env node

const argv            = require('minimist')(process.argv.slice(2));
const app             = require('express')();
const config          = require('./config/main');
const router          = require('./router')
const mongoose        = require('mongoose');
const bodyParser      = require('body-parser');
const logger          = require('morgan');

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


// Database Setup
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/burner', {useMongoClient: true})
    .then(() =>  {

        // Setting up basic middleware for all Express requests
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(logger('dev'));

        // Import routes to be served
        router(app); //require('./routes')(app, {});

        // Start server
        app.listen(config.port, () => {
            console.log(`Listening on port: ${config.port}`);
        });

    })
    .catch((err) => console.error(err));

