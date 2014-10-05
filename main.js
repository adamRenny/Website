#!/bin/env node

var express = require('express');
var dotEmc = require('dot-emc');
var path = require('path');
var fs = require('extended-fs');

var IP_ADDRESS = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var PORT = process.env.OPENSHIFT_NODEJS_PORT || 3000;
var IS_PRODUCTION = process.env.NODE_ENV !== 'development';

var app = express();

var TEARDOWN_SIGNALS = [
    'SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
    'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
];

var BASE_URL = '/';

function onExit(source) {
    if (typeof source === 'string') {
        process.exit(1);
        console.log('%s: Received %s - terminating sample app ...',
                       Date(Date.now()), source);
    }

    console.log('%s: Node server stopped.', Date(Date.now()) );
}

function setup() {
    app.set('views', path.join(__dirname, 'src', 'views'));
    app.set('view engine', 'html');
    app.engine('html', dotEmc.init({
            app: app, 
            fileExtension: 'html',
            options: {
                templateSettings: {
                    cache: IS_PRODUCTION
                }
            }
        }).__express);
    // Stand in RequireJS step
    app.use('/scripts/vendor/require.js', function(req, res) {
        function fulfillScript(content) {
            res.setHeader('Content-Type', 'text/javascript');
            res.send(content);
        }

        fs.readFilePromise(path.join(__dirname, 'web-src', 'vendor', 'requirejs', 'require.js'), 'utf-8')
            .then(fulfillScript);
    });

    // Stand in Lodash step
    app.use('/scripts/vendor/lodash.js', function(req, res) {
        function fulfillScript(content) {
            res.setHeader('Content-Type', 'text/javascript');
            res.send(content);
        }

        fs.readFilePromise(path.join(__dirname, 'web-src', 'vendor', 'lodash', 'dist', 'lodash.compat.js'), 'utf-8')
            .then(fulfillScript);
    });
    app.use('/scripts', express.static(path.join(__dirname, 'web-src', 'scripts')));
    app.use('/styles', express.static(path.join(__dirname, 'web', 'styles')));
    app.use('/media', express.static(path.join(__dirname, 'web', 'media')));

    app.set('baseUrl', BASE_URL);

    app.get('/', function(req, res) {
        res.render('index', function(err, content) {
            res.setHeader('Content-Type', 'text/html');
            res.send(content);
        });
    });

    app.get('/license', function(req, res) {
        res.render('license', function(err, content) {
            res.setHeader('Content-Type', 'text/html');
            res.send(content);
        }); 
    });

    app.get('/webgl', function(req, res) {
        res.render('webgl', function(err, content) {
            res.setHeader('Content-Type', 'text/html');
            res.send(content);
        }); 
    });

    // Favicons
    app.use('/', express.static(path.join(__dirname, 'web', 'favicon')));

    app.use(function(req, res) {
        res.render('404', function(err, content) {
            res.setHeader('Content-Type', 'text/html');
            res.send(404, content);
        });
    })

    TEARDOWN_SIGNALS.forEach(function(signal) {
        var teardown = onExit.bind(undefined, signal);
        process.on(signal, teardown);
    });

    process.on('exit', onExit);

    app.listen(PORT, IP_ADDRESS, function() {
        console.log('%s: Node server started on %s:%d ...',
            Date(Date.now()), IP_ADDRESS, PORT);
    });
}

setup();