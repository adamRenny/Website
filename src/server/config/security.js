'use strict';

var IS_PRODUCTION = require('./environment');
var URLS = require('./urls');

module.exports = {
    // Content Security Policy
    CSP: {
        // CSP Policy: http://www.w3.org/TR/CSP11/
        defaultSrc: '*',
        scriptSrc: '\'self\' www.google-analytics.com \'unsafe-inline\'',
        // Gif from Google Analytics
        imgSrc: '\'self\' data: www.google-analytics.com',

        // Can't remember why this was included
        // allow: '\'self\' www.google-analytics.com',

        reportOnly: !IS_PRODUCTION,
        reportUri: URLS.URI.CSP_REPORT
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