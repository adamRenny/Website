var IS_PRODUCTION = require('./environment');

module.exports = {
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
};