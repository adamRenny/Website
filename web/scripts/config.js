requirejs.config({
    baseUrl: './scripts',

    paths: {
        angular: '../vendor/angular/angular',
        jquery: '../vendor/jquery/dist/jquery'
    },

    shim: {
        angular: {
            deps: [
                'jquery'
            ],
            exports: 'angular'
        }
    },

    deps: [],

    urlArgs: 'cb=' + (new Date().getTime())
});