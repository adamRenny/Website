import Page from '../../../model/Page';
import config from '../../../config';

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
    name: 'content-license',
    dependencies: 'react-renderer'
};

export default register;
