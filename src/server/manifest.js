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
                'web'
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
        'blankie': null,

        // Content Security Policy
        'scooter': {
        
            // CSP Policy: http://www.w3.org/TR/CSP11/
            defaultSrc: '*',
            scriptSrc: '\'self\' www.google-analytics.com \'unsafe-inline\'',
            // Gif from Google Analytics
            imgSrc: '\'self\' data: www.google-analytics.com',

            // Can't remember why this was included
            // allow: '\'self\' www.google-analytics.com',

            reportOnly: !config.get('/isProduction'),
            reportUri: config.get('/urls/uri/cspReport')
        },

        'vision': null,

        './module/renderer/main': null,
        './module/content/about/main': null
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