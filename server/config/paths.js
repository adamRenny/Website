var path = require('path');

var ROOT = path.join(__dirname, '..', '..');

module.exports = {
    ROOT: ROOT,
    VIEWS: path.join(ROOT, 'src', 'app', 'view')
};