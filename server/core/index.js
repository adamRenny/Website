'use strict';

var CONFIG = require('../config/index');
var Server = require('./Server');

module.exports = {
    server: new Server(
        CONFIG.SERVER.IP_ADDRESS,
        CONFIG.SERVER.PORT
    )
};