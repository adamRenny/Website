'use strict';

var CONFIG = require('./config/index');
var bootstrap = require('./core/bootstrap');

function onReceivedKillSignal(signal) {
    console.log(CONFIG.STRINGS.SERVER.ON_KILL, signal);
    process.exit(1);
}

function processHasStopped() {
    console.log(CONFIG.STRINGS.SERVER.PROCESS_TERMINATED);
}

// Setup all process failure events
process.on('exit', processHasStopped);
CONFIG.TEARDOWN_SIGNALS.forEach(function(signal) {
    process.on(signal, () => onReceivedKillSignal(signal));
});

bootstrap()
    .then(function() {
        console.log('Server Ready');
    });