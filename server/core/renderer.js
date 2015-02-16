'use strict';

var _ = require('lodash');
var assert = require('assert');
var Hapi = require('hapi');
var path = require('path');
var CONFIG = require('../config/index');

function Renderer() {}

function setUp(server) {
    assert(server instanceof Hapi.Server, 'Expected server provided to be a Hapi Server');

    var engines = {};
    engines[CONFIG.RENDERER.TEMPLATE_EXT] = require('handlebars');

    server.views({
        // Setup
        engines: CONFIG.RENDERER.ENGINE,
        context: CONFIG.RENDERER.VIEW_DEFAULTS,
        layout: 'base',

        // Paths
        path: CONFIG.RENDERER.PATHS.VIEWS,
        helpersPath: CONFIG.RENDERER.PATHS.VIEW_HELPERS,
        layoutPath: CONFIG.RENDERER.PATHS.LAYOUTS,
        partialsPath: CONFIG.RENDERER.PATHS.PARTIALS
    });
}

_.merge(Renderer.prototype, {
    setUp: setUp
});

module.exports = new Renderer();