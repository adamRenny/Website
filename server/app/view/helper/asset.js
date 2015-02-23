'use strict';

var path = require('path');
var URLS = require('../../../config/urls');

function assetHelper(asset) {
    if (typeof asset !== 'string') {
        asset = '/';
    }

    return path.join(URLS.URI.ASSETS, asset);
}

module.exports = assetHelper;