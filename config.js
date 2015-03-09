'use strict';

var path = require('path');

var clientSrc = path.join(__dirname, 'client', 'src');
var clientDest = path.join(__dirname, 'client', 'web');

module.exports = {
    paths: {
        styles: {
            src: path.join(clientSrc, 'styles'),
            dest: path.join(clientDest, 'styles')
        },

        scripts: {
            src: path.join(clientSrc, 'scripts'),
            dest: path.join(clientDest, 'scripts')
        },

        temp: path.join(clientSrc, 'temp')
    }    
};