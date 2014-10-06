var path = require('path');

var server = require(path.join(__dirname, 'server'));
var identity = require(path.join(__dirname, 'identity'));
var security = require(path.join(__dirname, 'security'));

var renderer = require(path.join(__dirname, 'renderer'));
var router = require(path.join(__dirname, 'routing'));

function Pipeline() {}

function setUp() {
    var impl = server.impl;

    renderer.setUp();

    // Setup session pipeline
    impl.use(identity.processIdentity);
    impl.use(security.generateSession());

    // Setup security pipeline
    impl.use(security.generateCSP());
    impl.use(security.generateXFrame());
    impl.use(security.generateP3P());
    impl.use(security.generateXSSProtection());

    router.setUp();
}

Pipeline.prototype = {
    constructor: Pipeline,

    setUp: setUp
};

module.exports = new Pipeline();