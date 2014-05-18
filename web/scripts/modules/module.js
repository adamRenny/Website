define(function(require, module, exports) {
    'use strict';

    var angular = require('angular');
   
    return angular.module('app', [
        'app.core',
        'app.game'
    ]);
});