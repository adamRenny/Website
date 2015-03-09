var path = require('path');
var _ = require('lodash');
var config = require('./config');

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    var settings = _.extend(config, {
        env: {
            value: grunt.option('env'),
            isProd: grunt.option('env') !== 'development'
        }
    });

    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json'),

        settings: settings
    });

    grunt.task.loadTasks(
        path.join(__dirname, 'tasks')
    );

    grunt.registerTask('default', [
        'styles',
        'scripts'
    ]);
};