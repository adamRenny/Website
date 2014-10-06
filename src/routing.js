var express = require('express');
var fs = require('extended-fs');
var path = require('path');
var server = require('./server');
var CONFIG = require('./config');

function Router() {}

function setUp() {
    var impl = server.impl;

    impl.use('/styles', express.static(path.join(CONFIG.ROOT, 'web', 'styles')));
    impl.use('/media', express.static(path.join(CONFIG.ROOT, 'web', 'media')));

    impl.get('/', function(req, res) {
        res.render('index', function(err, content) {
            res.setHeader('Content-Type', 'text/html');
            res.send(content);
        });
    });

    impl.get('/license', function(req, res) {
        res.render('license', function(err, content) {
            res.setHeader('Content-Type', 'text/html');
            res.send(content);
        });
    });

    // Favicons
    impl.use('/', express.static(path.join(CONFIG.ROOT, 'web', 'favicon')));

    impl.use(function(req, res) {
        res.render('404', function(err, content) {
            res.setHeader('Content-Type', 'text/html');
            res.send(404, content);
        });
    });
}

Router.prototype = {
    constructor: Router,

    setUp: setUp
};

module.exports = new Router();