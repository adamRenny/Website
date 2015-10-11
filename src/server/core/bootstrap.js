'use strict';

import CONFIG from '../config/index';
import Promise from 'bluebird';
import Hapi from 'hapi';
import Renderer from './renderer';

import Vision from 'vision';
import Scooter from 'scooter';
import Blankie from 'blankie';

import Page from '../model/Page';

function registerToServer(server, settings) {
    return new Promise((resolve, reject) => {
        server.register(
            settings,
            (error) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve();
            }
        );
    });
}

function startServer(server) {
    return new Promise((resolve) => server.start(resolve));
}

function bootstrap() {
    var options;
    if (CONFIG.IS_PRODUCTION) {
        options = {
            debug: {
                log: ['error'],
                request: ['error']
            }
        };
    }

    var server = new Hapi.Server(options);

    let connection = server.connection({
        address: CONFIG.SERVER.IP_ADDRESS,
        port: CONFIG.SERVER.PORT,
        labels: [
            'web'
        ],

        routes: {
            security: {
                xframe: CONFIG.SECURITY.XFRAME.toLowerCase(),
                xss: CONFIG.SECURITY.XSS_PROTECTION
            }
        }
    });

    return registerToServer(
        server,
        [
            Scooter,
            {
                register: Blankie,
                options: CONFIG.SECURITY.CSP
            }
        ]
    )
    .then(() => registerToServer(server, Vision))
    .then(() => {
        server.views({
            // Setup
            engines: {
                js: Renderer
            },
            context: CONFIG.RENDERER.VIEW_DEFAULTS,
            // compileMode: CONFIG.RENDERER.COMPILE_MODE,

            layout: false,

            // Paths
            path: CONFIG.RENDERER.PATHS.VIEWS,

            isCached: CONFIG.IS_PRODUCTION
        });

        connection.route({
            // name: 'index',
            path: '/',
            method: 'GET',
            handler: (request, reply) => reply.view('AboutRoute', { page: new Page() })
        });

        return startServer(server);
    });
};

export default bootstrap;