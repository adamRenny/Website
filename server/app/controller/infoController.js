'use strict';

var _ = require('lodash');
var assert = require('assert');

function InfoController() {}

function aboutAction(request, reply) {
    return reply.view('about');
}

_.merge(InfoController.prototype, {
    aboutAction: aboutAction
});

module.exports = new InfoController();