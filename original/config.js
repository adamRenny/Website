'use strict';

var path = require('path');

var clientDir = path.join(__dirname, 'client');
var clientSrc = path.join(clientDir, 'src');
var clientTemp = path.join(clientDir, 'temp');
var clientDest = path.join(clientDir, 'web');

module.exports = {
    paths: {
        src: clientSrc,
        dest: clientDest,
        temp: clientTemp,

        styles: {
            src: path.join(clientSrc, 'styles'),
            temp: path.join(clientTemp, 'styles'),
            dest: path.join(clientDest, 'styles')
        },

        scripts: {
            src: path.join(clientSrc, 'scripts'),
            temp: path.join(clientTemp, 'scripts'),
            dest: path.join(clientDest, 'scripts')
        },

        vendor: {
            src: path.join(clientSrc, 'vendor'),
            temp: path.join(clientTemp, 'vendor'),
            dest: path.join(clientDest, 'vendor')
        }
    }    
};