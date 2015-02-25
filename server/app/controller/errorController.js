'use strict';

var _ = require('lodash');
var assert = require('assert');

function ErrorController() {}

function isNotFound(statusCode) {
    return Math.floor(statusCode / 400) >= 1;
}

function isInternalError(statusCode) {
    return Math.floor(statusCode / 500) >= 1;
}

function getStatusCode(response) {
    if (response instanceof Error) {
        return response.output.statusCode;
    }

    return response.statusCode;
}

function errorAction(request, reply) {
    var statusCode = getStatusCode(request.response);
    var view = 'error/error';

    if (isInternalError(statusCode)) {
        view = 'error/internalError';
    } else if (isNotFound(statusCode)) {
        view = 'error/notFound';
    }

    return reply.view(view)
        .code(statusCode);
}

_.merge(ErrorController.prototype, {
    errorAction: errorAction
});

module.exports = new ErrorController();