'use strict';

var CONFIG = require('../config/index');
var Hapi = require('hapi');
var renderer = require('./renderer');
var router = require('./router');
var Promise = require('bluebird');

var context;
var server;
var web;

function prepareServer() {
    server = new Hapi.Server();
    web = server.connection({
        address: CONFIG.SERVER.IP_ADDRESS,
        port: CONFIG.SERVER.PORT,
        labels: [
            'web'
        ]
    });

    context.server = server;
    context.web = web;

    function startUpServer(resolve, reject) {

        renderer.setUp(server);
        router.setUp(server);

        server.start(function() {
            resolve(server);
        });
    }

    return new Promise(startUpServer);
}

context = {
    server: null,
    web: null,

    prepareServer: prepareServer
};

module.exports = context;