'use strict';

module.exports = [
    {
        name: 'index',
        path: '/',
        controller: 'infoController',
        action: 'aboutAction'
    },
    {
        name: 'license',
        path: '/license',
        controller: 'infoController',
        action: 'licenseAction'
    },

    // Custom Route, error routes are handled differently
    // Action should expect the request, reply, and a statusCode
    {
        name: 'error',
        controller: 'errorController',
        action: 'errorAction'
    }
];