'use strict';

var STRINGS = require('./strings');
var PATHS = require('./paths');
var SECURITY = require('./security');
var RENDERER = require('./renderer');
var URLS = require('./urls');

var IS_PRODUCTION = require('./environment');

module.exports = {
    STRINGS: STRINGS,

    IS_PRODUCTION: IS_PRODUCTION,

    URLS: URLS,
    PATHS: PATHS,

    SESSION: {
        SHOULD_SAVE_UNINITIALIZED: false,
        SHOULD_RESAVE: true,
        KEY: 'rennySid',
        SECRET: 'allura'
    },

    SECURITY: SECURITY,

    RENDERER: RENDERER,

    SERVER: {
        IP_ADDRESS: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
        PORT: parseInt(process.env.OPENSHIFT_NODEJS_PORT, 10) || 3000
    },
    
    TEARDOWN_SIGNALS: [
        'SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
        'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
    ]
};