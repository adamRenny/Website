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
    }
];