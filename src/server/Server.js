var console = require('../console');
var CONFIG = require('../config/config');
var Promise = require('bluebird');

function Server(impl) {
    this.impl = impl;

    this.impl.listen = Promise.promisify(this.impl.listen);
}

function listen() {
    return this.impl.listen(CONFIG.PORT, CONFIG.IP_ADDRESS)
        .then(console.timedLater(CONFIG.STRINGS.SERVER.LISTENING, CONFIG.IP_ADDRESS, CONFIG.PORT));
}

Server.prototype.listen = listen;

module.exports = Server;