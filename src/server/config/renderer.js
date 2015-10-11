'use strict';

var PATHS = require('./paths');
var URLS = require('./urls');

module.exports = {

    PATHS: PATHS.RENDERER,
    
    COMPILE_MODE: 'async',

    VIEW_DEFAULTS: {
        baseUrl: URLS.URI.BASE
    }
};