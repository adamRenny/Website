var path = require('path');
var express = require('express');
var console = require(path.join(__dirname, 'console'));
var CONFIG = require(path.join(__dirname, 'config'));
var Promise = require('bluebird');

function Server(impl) {
    this.impl = impl;

    this.impl.listen = Promise.promisify(this.impl.listen);
}

function listen() {
    return this.impl.listen(CONFIG.PORT, CONFIG.IP_ADDRESS)
        .then(console.timedLater('Node server started on %s:%d ...', CONFIG.IP_ADDRESS, CONFIG.PORT));
}

Server.prototype.listen = listen;

function buildServer() {
    var impl = express();
    var server = new Server(impl);

    return server;
}

module.exports = buildServer();