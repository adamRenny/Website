'use strict';

var fs = require('fs');
var path = require('path');
var assert = require('assert');
var _ = require('lodash');
var Hapi = require('hapi');
var CONFIG = require('../config/index');
var PATHS = CONFIG.PATHS;
var URLS = CONFIG.URLS;

var ROUTE_DEFAULT = {
    METHOD: 'GET'
};

function Router() {}

function filterToDirectories(fileList) {
    return _.filter(
        fileList,
        function(filepath) {
            var stats = fs.statSync(filepath);
            return stats.isDirectory();
        }
    );
}

function getAllRouteFilepaths(searchPathList) {
    var filePaths = [];
    var directories;

    _.each(
        searchPathList,
        function(searchPath) {
            var fileList = _.map(
                fs.readdirSync(searchPath),
                function(filename) {
                    return path.join(searchPath, filename);
                }
            );

            directories = filterToDirectories(fileList);
            filePaths.push.apply(
                filePaths,
                _.difference(
                    fileList,
                    directories
                )
            );
        }
    );


    if (directories.length) {
        filePaths.push.apply(
            filePaths,
            getAllRouteFilepaths(directories)
        );
    }

    return filePaths;
}

function loadRoutes(routeFilePaths) {
    return _.reduce(
        routeFilePaths,
        function(routeList, routePath) {
            var routes = require(routePath);

            assert(routes instanceof Array, 'Expected a list of routes to be provided from ' + routePath);
            routeList.push.apply(routeList, routes);
            return routeList;
        },
        []
    );
}

function removeUniqueRoutes(routeList, otherRoutes) {
    return _.difference(routeList, otherRoutes);
}

function validateRoutes(routeList) {
    function validateRoute(route) {
        assert(typeof route.path === 'string', 'Expected route to have a path');
        assert(typeof route.controller === 'string', 'Expected route to have a controller');
        assert(typeof route.action === 'string', 'Expected route to have an action');

        if (typeof route.method === 'undefined') {
            route.method = ROUTE_DEFAULT.METHOD;
        }
    }

    _.each(
        routeList,
        validateRoute
    );
}

function buildRouteHandlers(routeList) {
    var controllers = {};

    function getController(controllerPath) {
        // TODO: Update to use try-catch to rename error
        if (typeof controllers[controllerPath] === 'undefined') {
            controllers[controllerPath] = require(path.join(PATHS.APP.CONTROLLERS, controllerPath));
        }

        return controllers[controllerPath];
    }

    function buildRouteHandler(route) {
        var controller = getController(route.controller);
        var method = route.action;

        assert(
            typeof controller[method] === 'function',
            'Expected controller [' + route.controller + '] to have method [' + method + ']'
        );

        function routeHandler(request, reply) {
            return controller[method](request, reply);
        }

        var finalRoute = {};
        finalRoute.path = route.path;
        finalRoute.method = route.method;
        finalRoute.handler = routeHandler;

        return finalRoute;
    }

    return _.map(
        routeList,
        buildRouteHandler
    );
}

function extractErrorRoute(routeList) {
    return _.filter(
        routeList,
        function(route) {
            return route.name === 'error';
        }
    );
}

// https://github.com/hapijs/hapi/commit/0eb9a62d4f34114846a72178a506f22f89d91663
function integrateAssetRoute(server) {
    server.route({
        method: 'GET',
        path: URLS.ROUTES.ASSETS,
        handler: {
            directory: {
                path: PATHS.APP.ASSETS
            }
        }
    });
}

function integrateRoutes(server, routes) {
    _.each(
        routes,
        function(route) {
            server.route(route);
        }
    );
}

function buildRouteDictionary(routes) {
    var routeDictionary = {};

    _.each(
        routes,
        function(route) {
            routeDictionary[route.name] = route.path;
        }
    );

    return routeDictionary;
}

var ERROR_STATUS_CODES = {
    NOT_FOUND: 400,
    INTERNAL: 500
};

function isStatusErroneous(statusCode) {
    return Math.floor(statusCode / ERROR_STATUS_CODES.NOT_FOUND) === 1 ||
        Math.floor(statusCode / ERROR_STATUS_CODES.INTERNAL) === 1;
}

function getStatusCode(response) {
    if (response instanceof Error) {
        return response.output.statusCode;
    }

    return response.statusCode;
}

function onPreResponse(request, reply) {
    request.response.header('P3P', 'CP="' + CONFIG.SECURITY.P3P + '"');
    return reply['continue']();
}

function setUpExtensions(server, errorRoute) {
    function onPostHandler(request, reply) {
        var response = request.response;
        var statusCode = getStatusCode(response);

        if (!isStatusErroneous(statusCode)) {
            return reply['continue']();
        }

        return errorRoute.handler(request, reply, statusCode);
    }

    // Handle the error and call out to the error route
    server.ext('onPostHandler', onPostHandler);

    // Prepare the P3P response header
    server.ext('onPreResponse', onPreResponse);
}

function setUp(server) {
    assert(server instanceof Hapi.Server, 'Expected server provided to be a Hapi Server');

    var routeFilePaths = getAllRouteFilepaths([
        PATHS.APP.ROUTES
    ]);

    var routeList = loadRoutes(routeFilePaths);
    var errorRoute = extractErrorRoute(routeList);
    routeList = removeUniqueRoutes(routeList, errorRoute);

    validateRoutes(routeList);
    var routes = buildRouteHandlers(routeList);
    errorRoute = buildRouteHandlers(errorRoute);

    integrateAssetRoute(server);
    integrateRoutes(server, routes);
    this.routeDictionary = buildRouteDictionary(routeList);

    setUpExtensions(server, errorRoute[0]);
}

function getURLForRoute(routeName) {
    if (typeof this.routeDictionary[routeName] === 'undefined') {
        return '#';
    }

    return this.routeDictionary[routeName];
}

_.merge(Router.prototype, {
    setUp: setUp,

    getURLForRoute: getURLForRoute
});

module.exports = new Router();