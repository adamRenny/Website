var expressHandlebars = require('express-handlebars');
var path = require('path');
var server = require('./server');
var CONFIG = require('./config');

function Renderer() {}

function setUp() {
    this.impl = expressHandlebars.create({
        extname: '.hbs',
        defaultLayout: 'core',
        layoutsDir: path.join(CONFIG.ROOT, 'src', 'view', 'layout'),
        partialsDir: path.join(CONFIG.ROOT, 'src', 'view', 'partial')
    });

    var impl = server.impl;

    impl.set('views', path.join(CONFIG.ROOT, 'src', 'view'));

    impl.set('view engine', 'hbs');
    impl.engine('hbs', this.impl.engine);

    if (CONFIG.IS_PRODUCTION) {
        impl.enable('view cache');
    }

    impl.set('baseUrl', CONFIG.BASE_URL);
}

Renderer.prototype = {
    constructor: Renderer,

    setUp: setUp
};

module.exports = new Renderer();