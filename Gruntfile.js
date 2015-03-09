var path = require('path');

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json'),

        settings: {
            env: {
                value: grunt.option('env'),
                isProd: grunt.option('env') !== 'development',
            },

            paths: {
                styles: {
                    src: path.join(__dirname, 'web-src', 'styles'),
                    dest: path.join(__dirname, 'web', 'styles')
                },

                scripts: {
                    src: path.join(__dirname, 'web-src', 'scripts'),
                    dest: path.join(__dirname, 'web', 'scripts')
                }
            }
        }
    });

    grunt.task.loadTasks(
        path.join(__dirname, 'tasks')
    );

    grunt.registerTask('default', [
        'styles',
        'scripts'
    ]);
};