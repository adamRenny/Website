'use strict';

var _ = require('lodash');
var assert = require('assert');
var Hapi = require('hapi');
var path = require('path');
var CONFIG = require('../config/index');

function Renderer() {}

function setUp(server) {
    assert(server instanceof Hapi.Server, 'Expected server provided to be a Hapi Server');

    server.views({
        // Setup
        engines: CONFIG.RENDERER.ENGINE,
        context: CONFIG.RENDERER.VIEW_DEFAULTS,
        // compileMode: CONFIG.RENDERER.COMPILE_MODE,

        layout: false,

        // Paths
        path: CONFIG.RENDERER.PATHS.VIEWS,
        helpersPath: CONFIG.RENDERER.PATHS.VIEW_HELPERS,
        partialsPath: CONFIG.RENDERER.PATHS.PARTIALS,

        isCached: CONFIG.IS_PRODUCTION
    });
}

_.merge(Renderer.prototype, {
    setUp: setUp
});

module.exports = new Renderer();