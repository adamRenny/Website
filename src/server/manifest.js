import Confidence from 'confidence';
import config from './config';


/**
 * Criteria for which version of the manifest to provide
 * Supported values: production, staging, development, test
 *
 * @see Confidence <https://github.com/hapijs/confidence>
 */
const CRITERIA = {
    ENVIRONMENT: process.env.NODE_ENV
};

/**
 * Confidence based configuration
 * Used to define Hapi components passed into the server at startup
 * Organized for the Glue module
 * 
 * @see Glue <https://github.com/hapijs/glue>
 *
 * @class manifest
 * @static
 * @final
 */
const MANIFEST = {
    /**
     * Confidence level meta information
     *
     * @for manifest
     * @private
     * @property $meta
     * @type {string}
     * @static
     * @final
     */
    $meta: 'Defines the settings of the web server',

    /**
     * Server-level configurations
     * Used to define the server at startup with any settings
     *
     * @for manifest
     * @private
     * @property server
     * @type {object}
     * @static
     * @final
     */
    server: {
        /**
         * Confidence filter for the server configuration
         *
         * @for manifest
         * @private
         * @property $filter
         * @type {string}
         * @static
         * @final
         */
        $filter: 'ENVIRONMENT',

        /**
         * Filtered settings
         * Used during development NODE_ENV
         *
         * @for manifest
         * @private
         * @property development
         * @type {object}
         * @static
         * @final
         */
        development: {},

        /**
         * Confidence default for the server configuration
         * Used for all settings except those listed above
         *
         * @for manifest
         * @private
         * @property $default
         * @type {object}
         * @static
         * @final
         */
        $default: {
            /**
             * Hapi server configuration
             * Used for configuring when the server debugs information for the runtime
             *
             * @for manifest
             * @private
             * @property debug
             * @type {object}
             * @static
             * @final
             */
            debug: {
                /**
                 * Hapi server configuration
                 * Setting for what kinds of events the server should log during runtime
                 *
                 * @for manifest
                 * @private
                 * @property log
                 * @type {string[]}
                 * @static
                 * @final
                 */
                log: ['error'],

                /**
                 * Hapi server configuration
                 * Setting for what kinds of events the server should log during a request
                 *
                 * @for manifest
                 * @private
                 * @property log
                 * @type {string[]}
                 * @static
                 * @final
                 */
                request: ['error']
            }
        }
    },

    /**
     * Individual connections settings
     * Includes definition for each of the connections
     *
     * @for manifest
     * @private
     * @property connections
     * @type {object}
     * @static
     * @final
     */
    connections: [
        // Web Connection
        {
            /**
             * Web connection
             * IP address for which the connection to be attached
             *
             * @for manifest
             * @private
             * @property address
             * @type {string}
             * @static
             * @final
             */
            address: config.get('/connections/web/ipAddress'),

            /**
             * Web connection
             * Port for the connection to be attached to
             *
             * @for manifest
             * @private
             * @property port
             * @type {number}
             * @static
             * @final
             */
            port: config.get('/connections/web/port'),

            /**
             * Web connection
             * Collection of labels to identify the connection by
             * Used for inspection
             *
             * @for manifest
             * @private
             * @property labels
             * @type {string[]}
             * @static
             * @final
             */
            labels: [
                config.get('/connections/web/label')
            ],

            /**
             * Web connection
             * Settings for all routes globally
             *
             * @for manifest
             * @private
             * @property routes
             * @type {object}
             * @static
             * @final
             */
            routes: {
                /**
                 * Web connection
                 * Security settings to enable during communication with any route
                 *
                 * @for manifest
                 * @private
                 * @property security
                 * @type {object}
                 * @static
                 * @final
                 */
                security: {
                    /**
                     * Web connection
                     * IFrame HTTP headers setting
                     * Using sameorigin forces agent to allow only iframes from within the iframe
                     * @see OWasp X-Frame-Options <https://www.owasp.org/index.php/Clickjacking_Defense_Cheat_Sheet#Defending_with_X-Frame-Options_Response_Headers>
                     *
                     * @for manifest
                     * @private
                     * @property xframe
                     * @type {string}
                     * @static
                     * @final
                     */
                    xframe: 'sameorigin',

                    // XSS Protection Headers
                    /**
                     * Web connection
                     * XSS Protection HTTP headers setting
                     * Using true forces XSS protection to be on
                     * @see OWasp X-XSS-Protection <http://blogs.msdn.com/b/ie/archive/2008/07/02/ie8-security-part-iv-the-xss-filter.aspx>
                     *
                     * @for manifest
                     * @private
                     * @property xss
                     * @type {boolean}
                     * @static
                     * @final
                     */
                    xss: true
                }
            }
        }
    ],

    /**
     * Plugins for the server
     * Plugins are organized by filepath-object or array with objects
     *
     * @for manifest
     * @private
     * @property plugins
     * @type {object|object[]}
     * @static
     * @final
     */
    plugins: {
        // Basic Security, dependency of scooter
        
        /**
         * Plugin module
         * User Agent Sniffing
         * @see Scooter <https://github.com/hapijs/scooter>
         *
         * @for manifest
         * @private
         * @property scooter
         * @type {null}
         * @static
         * @final
         */
        'scooter': null,

        /**
         * Plugin module
         * Content Security Policy
         * Acts as a whitelist
         *
         * @see Blankie <https://github.com/nlf/blankie>
         * @see CSP <http://www.w3.org/TR/CSP11/>
         * @see OWasp CSP <https://www.owasp.org/index.php/Content_Security_Policy>
         *
         * @for manifest
         * @private
         * @property blankie
         * @type {object}
         * @static
         * @final
         */
        'blankie': {
            /**
             * Content Security Policy Setting
             * Default accepted resource URL
             *
             * @for manifest
             * @private
             * @property defaultSrc
             * @type {string}
             * @static
             * @final
             */
            defaultSrc: '*',

            /**
             * Content Security Policy Setting
             * Accepted JavaScript script URL
             *
             * self indicated from the origin
             * unsafe-inline from any inline scripts (Google Analytics)
             *
             * @for manifest
             * @private
             * @property scriptSrc
             * @type {string}
             * @static
             * @final
             */
            scriptSrc: '\'self\' www.google-analytics.com \'unsafe-inline\'',
            
            /**
             * Content Security Policy Setting
             * Accepted image asset source URL
             *
             * data: to support generated data URLs
             * google analytics due to an analytics gif
             *
             * @for manifest
             * @private
             * @property imgSrc
             * @type {string}
             * @static
             * @final
             */
            imgSrc: '\'self\' data: www.google-analytics.com',

            /**
             * Content Security Policy Setting
             * Setting to force CSP to be report only
             *
             * @for manifest
             * @private
             * @property reportOnly
             * @type {boolean}
             * @static
             * @final
             */
            reportOnly: !config.get('/isProduction'),

            /**
             * Content Security Policy Setting
             * URL to report to when CSP is attacked
             *
             * @for manifest
             * @private
             * @property reportUri
             * @type {string}
             * @static
             * @final
             */
            reportUri: config.get('/urls/uri/cspReport')
        },

        /**
         * Plugin module
         * Renderer plugin to allow for custom renderers
         *
         * @see Vision <https://github.com/hapijs/vision>
         *
         * @for manifest
         * @private
         * @property vision
         * @type {object}
         * @static
         * @final
         */
        'vision': null,

        /**
         * Plugin module
         * File I/O Plugin
         *
         * @see Vision <https://github.com/hapijs/inert>
         *
         * @for manifest
         * @private
         * @property inert
         * @type {object}
         * @static
         * @final
         */
        'inert': null,

        /**
         * Plugin module
         * Asset module to add pathing for assets
         *
         * @for manifest
         * @private
         * @property ./module/assets/main
         * @type {object}
         * @static
         * @final
         */
        './module/assets/main': null,

        /**
         * Plugin module
         * Rendering module for React rendering
         *
         * @for manifest
         * @private
         * @property ./module/renderer/main
         * @type {object}
         * @static
         * @final
         */
        './module/renderer/main': null,

        /**
         * Plugin module
         * About section of the project
         * Likely overengineered and candidate for refactor
         *
         * @for manifest
         * @private
         * @property ./module/content/about/main
         * @type {object}
         * @static
         * @final
         */
        './module/content/about/main': null,

        /**
         * Plugin module
         * License section of the project
         * Likely overengineered and candidate for refactor
         *
         * @for manifest
         * @private
         * @property ./module/content/license/main
         * @type {object}
         * @static
         * @final
         */
        './module/content/license/main': null,

        /**
         * Plugin module
         * Human readable error handling
         *
         * @for manifest
         * @private
         * @property ./module/error/main
         * @type {object}
         * @static
         * @final
         */
        './module/error/main': null
    }
};


var store = new Confidence.Store(MANIFEST);

/**
 * Getter to gather a value from the manifest
 * Broker to the manifest
 *
 * @for manifest
 * @method get
 * @param {string} key Key to access against
 */
function get(key) {
    return store.get(key, CRITERIA);
}

/**
 * Getter to gather neta data from the manifest
 * Broker to the manifest
 * Confidence Specific data
 *
 * @for manifest
 * @method meta
 * @param {string} key Key to access against
 */
function meta(key) {
    return store.meta(key, CRITERIA);
}

export default {
    get,
    meta
};