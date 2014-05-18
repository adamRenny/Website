define(function(require, module, exports) {
    'use strict';

    var module = require('./module');

    module.controller('tokolCharacterBuilderController', [
        'tokolConst', 
        function(
            CONST
        ) {
        console.log('builderController', CONST);
    }]);
});