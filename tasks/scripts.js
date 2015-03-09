'use strict';

module.exports = function(grunt) {
    grunt.task.loadNpmTasks('grunt-babel');

    var envContent = grunt.config.data.settings.env;

    grunt.config(
        'babel',
        {
            build: {
                options: {
                    modules: 'amdStrict',
                    sourceMap: true
                },

                files: {
                    '<%= settings.paths.scripts.dest %>/main.js' : '<%= settings.paths.scripts.src %>/main.js'
                }
            }
        }
    );

    grunt.registerTask(
        'scripts',
        [   
            'babel:build'
        ]
    );
};