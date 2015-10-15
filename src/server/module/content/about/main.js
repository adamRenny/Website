import Page from '../../../model/Page';

function register(server, options, next) {
    var connection = server.select('web');

    connection.route({
        // name: 'index',
        path: '/',
        method: 'GET',
        handler: (request, reply) => {
            console.log('...?');
            var content = reply.view('AboutRoute', { page: new Page() });
            console.log('got content');
            return content;
        }
    });

    next();
}

register.attributes =  {
    name: 'content-about'
};

export default register;
