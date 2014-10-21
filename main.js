var path = require('path');
var console = require('./src/console');
var CONFIG = require('./src/config/config');
var server = require('./src/server/instance');

var pipeline = require('./src/server/pipeline/instance');

function onReceivedKillSignal(signal) {
    console.timed(CONFIG.STRINGS.SERVER.ON_KILL, signal);
    process.exit(1);
}

function processHasStopped() {
    console.timed(CONFIG.STRINGS.SERVER.PROCESS_TERMINATED);
}

// Setup all process failure events
process.on('exit', processHasStopped);
CONFIG.TEARDOWN_SIGNALS.forEach(function(signal) {
    process.on(signal, onReceivedKillSignal.bind(global, signal));
});

pipeline.setUp();

server.listen();