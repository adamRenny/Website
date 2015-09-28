'use strict';

module.exports = function(grunt) {
    grunt.task.loadNpmTasks('grunt-contrib-less');

    var envContent = grunt.config.data.settings.env;

    grunt.config(
        'less',
        {
            build: {
                options: {
                    paths: [
                        '<%= settings.paths.styles.src %>'
                    ],

                    compress: envContent.isProd,
                    yuicompress: envContent.isProd
                },

                files: {
                    '<%= settings.paths.styles.dest %>/screen.css' : '<%= settings.paths.styles.src %>/screen.less'
                }
            }
        }
    );

    grunt.registerTask(
        'styles',
        [
            'less:build'
        ]
    );
};