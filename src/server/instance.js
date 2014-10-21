var express = require('express');
var Server = require('./Server');

module.exports = new Server(
    express()
);