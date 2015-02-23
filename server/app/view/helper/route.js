'use strict';

var router = require('../../../core/router');

function routeHelper(routeName) {
    return router.getURLForRoute(routeName);
}

module.exports = routeHelper;