import Confidence from 'confidence';
import path from 'path';

const CRITERIA = {
    ENVIRONMENT: process.env.NODE_ENV
};

const ROOT = path.join(__dirname, '..', '..');
const SRC = path.join(ROOT, 'src');
const DEST = path.join(ROOT, 'dest');
const CLIENT = path.join(DEST, 'client');
const APP = path.join(DEST, 'server');
const VIEW = path.join(APP, 'view');

const CONFIG = {
    $meta: 'This file configures the plot device.',
    projectName: 'adamRenny Personal Website',

    connections: {
        web: {
            label: 'web',
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
            assets: CLIENT
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
        },

        social: {
            deckbox: 'https://deckbox.org/users/adamRenny',
            github: 'https://github.com/adamRenny',
            linkedin: 'https://www.linkedin.com/in/adamrenny',
            npm: 'https://www.npmjs.org/~adamrenny',
            twitter: 'https://twitter.com/AdamRenny',
            codepen: 'http://codepen.io/adamRenny/'
        },

        affiliations: {
            // Extra Curricular Activities
            karate: 'http://southmetrokarate.com/',
            toyama: 'http://www.seiryuukandojo.com/',
            umn: 'http://umn.edu'
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