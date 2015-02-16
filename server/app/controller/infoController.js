'use strict';

var _ = require('lodash');
var assert = require('assert');

function InfoController() {}

function aboutAction(request, reply) {
    return reply.view('about');
}

function licenseAction(request, reply) {
    return reply.view('license');
}

_.merge(InfoController.prototype, {
    aboutAction: aboutAction,
    licenseAction: licenseAction
});

module.exports = new InfoController();