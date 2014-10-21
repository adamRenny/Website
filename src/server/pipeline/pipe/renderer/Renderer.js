var expressHandlebars = require('express-handlebars');
var path = require('path');
var server = require('../../../instance');
var CONFIG = require('../../../../config/config');

function Renderer() {}

function setUp() {
    var viewPath = path.join(CONFIG.PATHS.ROOT, 'src', 'app', 'view');

    this.impl = expressHandlebars.create({
        extname: '.' + CONFIG.TEMPLATE_EXT,
        defaultLayout: 'core',
        layoutsDir: path.join(viewPath, 'layout'),
        partialsDir: path.join(viewPath, 'partial')
    });

    var impl = server.impl;

    impl.set('views', viewPath);

    impl.set('view engine', CONFIG.TEMPLATE_EXT);
    impl.engine(CONFIG.TEMPLATE_EXT, this.impl.engine);

    var viewCacheMethod = 'disable';
    if (CONFIG.IS_PRODUCTION) {
        viewCacheMethod = 'enable';
    }

    impl[viewCacheMethod]('view cache');

    // Turn off the header - take away as much inference as possible
    impl.disable('x-powered-by');

    impl.locals.baseUrl = CONFIG.BASE_URL;
}

Renderer.prototype = {
    constructor: Renderer,

    setUp: setUp
};

module.exports = Renderer;