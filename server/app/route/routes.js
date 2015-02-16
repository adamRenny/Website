'use strict';

module.exports = [
    {
        path: '/',
        controller: 'infoController',
        action: 'aboutAction'
    },
    {
        path: '/license',
        controller: 'infoController',
        action: 'licenseAction'
    }
];