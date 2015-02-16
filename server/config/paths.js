'use strict';

var path = require('path');

var ROOT = path.join(__dirname, '..', '..');
var APP = path.join(ROOT, 'server', 'app')
var VIEW = path.join(APP, 'view');
var WEB = path.join(ROOT, 'web');

module.exports = {
    ROOT: ROOT,

    APP: {
        ROOT: APP,
        ROUTES: path.join(APP, 'route'),
        CONTROLLERS: path.join(APP, 'controller'),
        MODELS: path.join(APP, 'model'),
        ASSETS: WEB
    },

    RENDERER: {
        VIEWS: path.join(VIEW, 'content'),
        VIEW_HELPERS: path.join(VIEW, 'helper'),
        LAYOUTS: path.join(VIEW, 'layout'),
        PARTIALS: path.join(VIEW, 'partial')
    }
};