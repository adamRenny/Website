var server = require('../instance');
var identity = require('./pipe/identity/instance');
var security = require('./pipe/security/instance');

var renderer = require('./pipe/renderer/instance');
var router = require('./pipe/router/instance');

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

module.exports = Pipeline;