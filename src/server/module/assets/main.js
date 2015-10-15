import Page from '../../model/Page';
import config from '../../config';

// @see https://github.com/hapijs/hapi/commit/0eb9a62d4f34114846a72178a506f22f89d91663
function register(server, options, next) {
    var connection = server.select(config.get('/connections/web/label'));

    server.route({
        method: 'GET',
        path: config.get('/urls/routes/assets'),
        handler: {
            directory: {
                path: config.get('/paths/app/assets')
            }
        }
    });

    return next();
}

register.attributes =  {
    name: 'assets',
    dependencies: 'inert'
};

export default register;
