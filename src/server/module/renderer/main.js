import config from '../../config';
import rendererFactory from './renderer';

function register(server, options, next) {
    
    // Use the server root to expose the renderer outside of the plugin
    // Other plugins can't render against engine without using the root
    // @see https://github.com/hapijs/hapi/issues/2278
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
    
    return next();
}

register.attributes = {
    name: 'react-renderer',
    dependencies: 'vision'
};

export default register;
