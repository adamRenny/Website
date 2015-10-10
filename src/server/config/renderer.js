'use strict';

var PATHS = require('./paths');
var URLS = require('./urls');

var Handlebars = require('handlebars');
var helpers = require('handlebars-helpers');
helpers.register(Handlebars, {});

module.exports = {

    PATHS: PATHS.RENDERER,

    ENGINE: {
        hbs: Handlebars
    },
    
    COMPILE_MODE: 'async',

    VIEW_DEFAULTS: {
        baseUrl: URLS.URI.BASE
    }
};