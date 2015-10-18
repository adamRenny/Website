import Page from '../../../model/Page';
import config from '../../../config';

/**
 * App Plugin
 * Used to add routes for License page
 *
 * TODO: Refactor appropriately when a better schema is discovered
 *
 * @class LicenseContentPlugin
 * @constructor
 * @param {Hapi.Server} server Server attached to
 * @param {object} options Registration options
 * @param {function} next Next function called when complete
 */
function register(server, options, next) {
    var connection = server.select(config.get('/connections/web/label'));

    connection.route({
        path: '/license',
        method: 'GET',
        handler: (request, reply) => {
            var content = reply.view(
                'LicenseRoute',
                { 
                    page: new Page({
                        title: 'License'
                    })
                }
            );
            return content;
        }
    });

    return next();
}

register.attributes =  {
    /**
     * Runtime name of the plugin
     *
     * @for LicenseContentPlugin
     * @property name
     * @type {string}
     */
    name: 'content-license',

    /**
     * Properties required before using the plugin
     *
     * @for LicenseContentPlugin
     * @property dependencies
     * @type {string|string[]}
     */
    dependencies: 'react-renderer'
};

export default register;
