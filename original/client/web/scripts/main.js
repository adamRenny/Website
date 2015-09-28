(function(requirejs, require) {
    'use strict';

    requirejs.config({
        baseUrl: '/assets/scripts',

        paths: {
            jquery: '../vendor/jquery/dist/jquery',
            lodash: '../vendor/lodash/dist/lodash.compat'
        },

        shim: {
            lodash: {
                exports: '_'
            }
        },

        urlArgs: 'cb=' + (new Date()).getTime()
    });

    require(['app']);
}(window.requirejs, window.require));