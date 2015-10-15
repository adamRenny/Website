import Confidence from 'confidence';
import path from 'path';

const CRITERIA = {
    ENVIRONMENT: process.env.NODE_ENV
};

const ROOT = path.join(__dirname, '..', '..');
const SRC = path.join(ROOT, 'src');
const DEST = path.join(ROOT, 'dest');
const APP = path.join(DEST, 'server');
const VIEW = path.join(APP, 'view');

const CONFIG = {
    $meta: 'This file configures the plot device.',
    projectName: 'adamRenny Personal Website',

    connections: {
        web: {
            ipAddress: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
            port: parseInt(process.env.OPENSHIFT_NODEJS_PORT, 10) || 3000
        }
    },
    
    isProduction: CRITERIA.ENVIRONMENT !== 'development',

    paths: {
        root: ROOT,

        app: {
            root: APP,
            routes: path.join(APP, 'route'),
            controllers: path.join(APP, 'controller'),
            models: path.join(APP, 'model'),
            assets: DEST
        },

        renderer: {
            views: VIEW,
            routes: path.join(VIEW, 'page', 'route')
        }
    },

    urls: {
        routes: {
            assets: '/assets/{param*}'
        },

        uri: {
            assets: '/assets',
            base: '/',
            cspReport: '/cspLog'
        }
    }
};


var store = new Confidence.Store(CONFIG);

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