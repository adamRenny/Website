import Page from '../../model/Page';

import statusCodeService from './statusCodeService';

import config from '../../config';

function register(server, options, next) {
    var connection = server.select(config.get('/connections/web/label'));

    connection.ext(
        'onPostHandler',
        (request, reply) => {
            let statusCode = statusCodeService.extractStatusCode(request.response);

            if (!statusCodeService.isErroneous(statusCode)) {
                return reply['continue']();
            }

            let errorRoutePath = 'error/ErrorRoute';

            if (statusCodeService.isInternalError(statusCode)) {
                errorRoutePath = 'error/InternalErrorRoute';
            } else if (statusCodeService.isNotFound(statusCode)) {
                errorRoutePath = 'error/NotFoundRoute';
            }

            return reply.view(
                    errorRoutePath,
                    {
                        page: new Page({
                            title: 'Error'
                        })
                    }
                )
                .code(statusCode);
        }
    );

    return next();
}

register.attributes =  {
    name: 'error'
};

export default register;
