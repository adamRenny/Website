var path = require('path');

var IS_PRODUCTION = process.env.NODE_ENV !== 'development';

module.exports = {
    BASE_URL: '/',
    ROOT: path.join(__dirname, '..'),
    SESSION: {
        SHOULD_SAVE_UNINITIALIZED: false,
        SHOULD_RESAVE: true,
        KEY: 'rennySid',
        SECRET: 'allura'
    },
    SECURITY: {
        // Content Security Policy
        CSP: {
            // CSP Policy: http://www.w3.org/TR/CSP11/
            policy: {
                'default-src': '*',
                'script-src': '\'self\' www.google-analytics.com \'unsafe-inline\'',
                // Gif from Google Analytics
                'img-src': '\'self\' data: www.google-analytics.com',
                allow: '\'self\' www.google-analytics.com'
            },
            reportOnly: !IS_PRODUCTION
        },

        // Only Allow opening from same origin
        XFRAME: 'SAMEORIGIN',

        // P3P: http://www.w3.org/TR/P3P11/#compact_policies
        // Research and Development DEV
        // Individual Analysis IVA
        // Individual Decision IVD
        // Location LOC
        P3P: 'DEV IVA IVD LOC',

        // XSS Protection Headers
        XSS_PROTECTION: true
    },
    IP_ADDRESS: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
    PORT: process.env.OPENSHIFT_NODEJS_PORT || 3000,
    IS_PRODUCTION: IS_PRODUCTION,
    TEARDOWN_SIGNALS: [
        'SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
        'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
    ]
};