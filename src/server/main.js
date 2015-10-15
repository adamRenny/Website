'use strict';

import config from './config';
import bootstrap from './bootstrap';
import Promise from 'bluebird';

const TEARDOWN_SIGNALS = [
    'SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
    'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
];

function onReceivedKillSignal(signal) {
    console.log('Received %s - terminating node server ...', signal);
    process.exit(1);
}

function processHasStopped() {
    console.log('Node server stopped.');
}

// Setup all process failure events
process.on('exit', processHasStopped);
TEARDOWN_SIGNALS.forEach((signal) => process.on(
    signal,
    () => onReceivedKillSignal(signal)
));

bootstrap()
    .then(
        ({error, server}) => {
            if (error) {
                console.log('Could not start server');
                Promise.reject(error);
            }

            return new Promise((resolve) => {
                server.start(resolve);
            });
        }
    )
    .then(
        () => {
            console.log('Node server started on %s:%d ...', config.get('/connections/web/ipAddress'), config.get('/connections/web/port'));
        },
        (error) => {
            console.error(error);
        }
    );