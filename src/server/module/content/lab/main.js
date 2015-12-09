import Page from '../../../model/Page';
import config from '../../../config';

import assetService from '../../assets/service';

/**
 * App Plugin
 * Used to add routes for Lab page
 *
 * TODO: Refactor appropriately when a better schema is discovered
 *
 * @class LabContentPlugin
 * @constructor
 * @param {Hapi.Server} server Server attached to
 * @param {object} options Registration options
 * @param {function} next Next function called when complete
 */
function register(server, options, next) {
    var connection = server.select(config.get('/connections/web/label'));

    connection.route({
        path: '/lab',
        method: 'GET',
        handler: (request, reply) => {
            var content = reply.view(
                'LabRoute',
                { 
                    page: new Page({
                        title: 'Lab November2015',
                        bodyScripts: [
                            assetService.buildURI('script/112015Lab.js')
                        ]
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
     * @for LabContentPlugin
     * @property name
     * @type {string}
     */
    name: 'content-lab',

    /**
     * Properties required before using the plugin
     *
     * @for LabContentPlugin
     * @property dependencies
     * @type {string|string[]}
     */
    dependencies: 'react-renderer'
};

export default register;
