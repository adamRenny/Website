module.exports = {
    IP_ADDRESS: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
    PORT: process.env.OPENSHIFT_NODEJS_PORT || 3000,
    IS_PRODUCTION: process.env.NODE_ENV !== 'development',
    TEARDOWN_SIGNALS: [
        'SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
        'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
    ]
};