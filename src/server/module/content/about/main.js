import Page from '../../../model/Page';

function register(server, options, next) {
    var connection = server.select('web');

    connection.route({
        // name: 'index',
        path: '/',
        method: 'GET',
        handler: (request, reply) => {
            var content = reply.view('AboutRoute', { page: new Page() });
            return content;
        }
    });

    return next();
}

register.attributes =  {
    name: 'content-about',
    dependencies: 'react-renderer'
};

export default register;
