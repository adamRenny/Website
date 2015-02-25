'use strict';

var CONFIG = require('../config/index');
var Hapi = require('hapi');
var Blankie = require('blankie');
var Scooter = require('scooter');
var renderer = require('./renderer');
var router = require('./router');
var Promise = require('bluebird');

var context;
var server;
var web;

function setUpSecurityPolicy() {
    return new Promise(function(resolve, reject) {
        function onRegistrationComplete(error) {
            if (typeof error !== 'undefined') {
                reject(error);
            }
            resolve();
        }

        server.register(
            [
                Scooter,
                {
                    register: Blankie,
                    options: CONFIG.SECURITY.CSP
                }
            ],
            onRegistrationComplete
        );
    });
}

function setUpInfrastructure() {
    renderer.setUp(server);
    router.setUp(server);
}

function startUp() {
    return new Promise(function(resolve, reject) {
        server.start(function() {
            resolve(server);
        });
    })
}

function prepareServer() {
    server = new Hapi.Server();

    web = server.connection({
        address: CONFIG.SERVER.IP_ADDRESS,
        port: CONFIG.SERVER.PORT,
        labels: [
            'web'
        ],

        routes: {
            security: {
                xframe: CONFIG.SECURITY.XFRAME.toLowerCase(),
                xss: CONFIG.SECURITY.XSS_PROTECTION
            }
        }
    });

    context.server = server;
    context.web = web;

    return setUpSecurityPolicy()
        .then(setUpInfrastructure)
        .then(startUp);
}

context = {
    server: null,
    web: null,

    prepareServer: prepareServer
};

module.exports = context;