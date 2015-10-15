'use strict';

import Glue from 'glue';
import manifest from './manifest';
import Promise from 'bluebird';

var composeOptions = {
    relativeTo: __dirname
};


module.exports = () => new Promise(
    (resolve) => Glue.compose(
        manifest.get('/'),
        composeOptions,
        (err, server) => resolve({
            err,
            server
        })
    )
);