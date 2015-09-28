'use strict';

module.exports = function(grunt) {
    grunt.task.loadNpmTasks('grunt-babel');
    grunt.task.loadNpmTasks('grunt-contrib-copy');
    grunt.task.loadNpmTasks('grunt-contrib-clean');

    var envContent = grunt.config.data.settings.env;

    grunt.config(
        'babel',
        {
            build: {
                options: {
                    modules: 'amd',
                    // sourceMap: true
                },

                files: {
                    '<%= settings.paths.scripts.dest %>/app.js' : '<%= settings.paths.scripts.src %>/app.js'
                }
            }
        }
    );

    grunt.config(
        'clean',
        {
            scripts: [
                '<%= settings.paths.scripts.dest %>'
            ],

            vendor: [
                '<%= settings.paths.vendor.dest %>'
            ]
        }
    );

    grunt.config(
        'copy',
        {
            scripts: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= settings.paths.scripts.src %>',
                        src: 'main.js',
                        dest: '<%= settings.paths.scripts.dest %>'
                    }
                ]
            },

            vendor: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= settings.paths.vendor.src %>',
                        src: '**',
                        dest: '<%= settings.paths.vendor.dest %>'
                    }
                ]
            }
        }
    );

    grunt.registerTask(
        'scripts',
        [
            'clean:scripts',
            'clean:vendor',
            'babel:build',
            'copy:scripts',
            'copy:vendor'
        ]
    );
};