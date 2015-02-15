'use strict';

var handlebars = require('handlebars');
var PATHS = require('./paths');

module.exports = {

    PATHS: PATHS.RENDERER,

    ENGINE: {
        hbs: handlebars
    },
    COMPILE_MODE: 'async',
    VIEW_DEFAULTS: {

    }
};