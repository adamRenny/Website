'use strict';

var _ = require('lodash');
var Hapi = require('hapi');
var assert = require('assert');
var Promise = require('bluebird');

function Server(ipAddress, port) {
    assert(typeof ipAddress === 'string', 'Expected an IP Address to be provided');
    assert(typeof port === 'number', 'Expected a port to be provided ');

    this.init(ipAddress, port);
}

function init(ipAddress, port) {
    this.ipAddress = ipAddress;
    this.port = port;

    this.setUpServer();
}

function setUpServer() {
    this.impl = new Hapi.Server();

    this.impl.connection({
        address: this.ipAddress,
        port: this.port
    });
}

function start() {
    var server = this;
    var impl = server.impl;

    function execute(resolve, reject) {
        function onStartComplete(error) {
            if (typeof error === 'undefined') {
                resolve(server);
            } else {
                reject(server);
            }
        }

        impl.start(onStartComplete);
    }

    return new Promise(execute);
}

_.merge(Server.prototype, {
    ipAddress: '',
    port: -1,

    init: init,
    setUpServer: setUpServer,

    start: start
});

module.exports = Server;