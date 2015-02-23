'use strict';

var handlebars = require('handlebars');
var PATHS = require('./paths');
var URLS = require('./urls');

module.exports = {

    PATHS: PATHS.RENDERER,

    ENGINE: {
        hbs: handlebars
    },
    
    COMPILE_MODE: 'async',

    VIEW_DEFAULTS: {
        baseUrl: URLS.URI.BASE
    }
};