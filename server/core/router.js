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
            debugger;
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

function setUp(server) {
    assert(server instanceof Hapi.Server, 'Expected server provided to be a Hapi Server');

    var routeFilePaths = getAllRouteFilepaths([
        PATHS.APP.ROUTES
    ]);

    var routeList = loadRoutes(routeFilePaths);
    validateRoutes(routeList);
    var routes = buildRouteHandlers(routeList)

    integrateAssetRoute(server);

    integrateRoutes(server, routes);
    this.routeDictionary = buildRouteDictionary(routeList);
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