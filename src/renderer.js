var dotEmc = require('dot-emc');
var path = require('path');
var server = require('./server');
var CONFIG = require('./config');

function Renderer() {}

function setUp() {
    var impl = server.impl;
    impl.set('views', path.join(CONFIG.ROOT, 'src', 'views'));
    impl.set('view engine', 'html');
    impl.engine('html', dotEmc.init({
        app: impl,
        fileExtension: 'html',
        options: {
            templateSettings: {
                cache: CONFIG.IS_PRODUCTION
            }
        }
    }).__express);

    impl.set('baseUrl', CONFIG.BASE_URL);
}

Renderer.prototype = {
    constructor: Renderer,

    setUp: setUp
};

module.exports = new Renderer();