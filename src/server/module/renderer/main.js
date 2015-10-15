import config from '../../config';
import rendererFactory from './renderer';

function register(server, options, next) {
    server.dependency('vision');

    console.log('renderer');
    server.root.views({
        // Setup
        engines: {
            js: rendererFactory(config.get('/paths/renderer/views'))
        },
        context: {
            baseUrl: config.get('/urls/uri/base')
        },

        // Paths
        path: config.get('/paths/renderer/routes'),

        isCached: config.get('/isProduction')
    });

    next();
}

register.attributes = {
    name: 'react-renderer'
};

export default register;
