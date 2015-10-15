import Confidence from 'confidence';
import config from './config';


const CRITERIA = {
    ENVIRONMENT: process.env.NODE_ENV
};

const MANIFEST = {
    $meta: 'Defines the settings of the web server',
    server: {
        // Only if is production
        $filter: 'ENVIRONMENT',

        development: {

        },

        $default: {
            debug: {
                log: ['error'],
                request: ['error']
            }
        }
    },

    connections: [
        {
            address: config.get('/connections/web/ipAddress'),
            port: config.get('/connections/web/port'),
            labels: [
                config.get('/connections/web/label')
            ],

            routes: {
                security: {
                    // Only Allow opening from same origin
                    xframe: 'sameorigin',

                    // XSS Protection Headers
                    xss: true
                }
            }
        }
    ],

    // 'moduleName' : {}:options
    plugins: {
        // Basic Security, dependency of scooter
        'blankie': null,

        // Content Security Policy
        'scooter': {
        
            // CSP Policy: http://www.w3.org/TR/CSP11/
            defaultSrc: '*',
            scriptSrc: '\'self\' www.google-analytics.com \'unsafe-inline\'',
            // To support gif from Google Analytics
            imgSrc: '\'self\' data: www.google-analytics.com',

            // Can't remember why this was included
            // allow: '\'self\' www.google-analytics.com',

            reportOnly: !config.get('/isProduction'),
            reportUri: config.get('/urls/uri/cspReport')
        },

        // Custom Renderer Setup
        'vision': null,

        // File I/O
        'inert': null,

        // Asset Modules
        './module/assets/main': null,

        // Rendering Modules
        './module/renderer/main': null,

        // Content Modules
        './module/content/about/main': null,
        './module/content/license/main': null,

        // Error Handling
        './module/error/main': null
    }
};


var store = new Confidence.Store(MANIFEST);

function get(key) {
    return store.get(key, CRITERIA);
}

function meta(key) {
    return store.meta(key, CRITERIA);
}

export default {
    get,
    meta
};