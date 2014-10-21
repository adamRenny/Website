var CONFIG = require('../../../../config/config');
var session = require('express-session');
var lusca = require('lusca');

function Security() {}

function generateSession() {
    return session({
        secret: CONFIG.SESSION.SECRET,
        key: CONFIG.SESSION.KEY,
        resave: CONFIG.SESSION.SHOULD_RESAVE,
        saveUninitialized: CONFIG.SESSION.SHOULD_SAVE_UNINITIALIZED
    });
}

function generateCSP() {
    return lusca.csp(CONFIG.SECURITY.CSP);
}

function generateXFrame() {
    return lusca.xframe(CONFIG.SECURITY.XFRAME);
}

function generateXSSProtection() {
    return lusca.xssProtection(CONFIG.SECURITY.XSS_PROTECTION);
}

function generateP3P() {
    return lusca.p3p(CONFIG.SECURITY.P3P);
}

Security.prototype = {
    constructor: Security,

    generateSession: generateSession,

    generateCSP: generateCSP,
    generateXFrame: generateXFrame,
    generateXSSProtection: generateXSSProtection,
    generateP3P: generateP3P
};

module.exports = Security;