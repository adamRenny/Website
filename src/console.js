function logLater() {
    var args = Array.prototype.slice.call(arguments, 0);

    return function() {
        console.log.apply(console, args);
    }
}

function logTimedLater() {
    var args = Array.prototype.slice.call(arguments, 0);

    return function() {
        console.timed.apply(console, args);
    }
}

var PREFIX = '%s: ';
function timedLog() {
    var args = Array.prototype.slice.call(arguments, 0);
    var message = args[0];
    args = args.slice(1);
    args.unshift(new Date());
    args.unshift(PREFIX + message);

    console.log.apply(console, args);
}

console.later = logLater;
console.timedLater = logTimedLater;
console.timed = timedLog;

module.exports = console;