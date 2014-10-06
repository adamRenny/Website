var id = 0;

function RequestIdentity() {
    this.id = id++;
}

RequestIdentity.prototype.id = 0;

function IdentityFactory() {}

function processIdentity(req, res, next) {
    var identity = new RequestIdentity();
    req.identity = identity;
    res.identity = identity;
    next();
}

IdentityFactory.prototype = {
    constructor: IdentityFactory,

    processIdentity: processIdentity
};

module.exports = new IdentityFactory();