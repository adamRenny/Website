var path = require('path');
var console = require(path.join(__dirname, '/src/console'));
var CONFIG = require(path.join(__dirname, '/src/config'));
var server = require(path.join(__dirname, '/src/server'));

var pipeline = require('./src/pipeline');

function onReceivedKillSignal(signal) {
    console.timed('Received %s - terminating node server ...', signal);
    process.exit(1);
}

function processHasStopped() {
    console.timed('Node server stopped.');
}

// Setup all process failure events
process.on('exit', processHasStopped);
CONFIG.TEARDOWN_SIGNALS.forEach(function(signal) {
    process.on(signal, onReceivedKillSignal.bind(global, signal));
});

pipeline.setUp();

server.listen();