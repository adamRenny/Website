require([
    'angular',
    'modules/index'
], function(
    angular
) {
    'use strict';

    angular.element(document).ready(onReady);

    function onReady() {
        angular.bootstrap(document, ['app']);
    }
});