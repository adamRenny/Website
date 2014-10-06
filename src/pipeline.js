var server = require('./server');
var identity = require('./identity');
var security = require('./security');

var renderer = require('./renderer');
var router = require('./routing');

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