module.exports = function (grunt) {
    'use strict';

    // loads all grunt tasks from package.json
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        // pulls in meta data used by some plugins
        pkg: grunt.file.readJSON('package.json'),

        port: 9010,

        /**************
         * SERVING
         *************/

        // serve the presentation
        connect: {
            server: {
                options: {
                    port: '<%= port %>',
                    base: 'slides',
                    livereload: true,
                    hostname: '0.0.0.0',
                    open: {
                        target: 'http://localhost:<%= port %>'
                    }
                }
            }
        },

        /**************
         * BUILDING
         *************/

        // generates the slides
        exec: {
            generate: {
                command: 'reveal-ck generate'
            }
        },

        /**************
         * UTILITIES
         *************/

        // watch files and run tasks on change
        watch: {
            slides: {
                files: [ 'slides.md', 'images/*' ],
                tasks: [ 'exec:generate' ]
            },
            livereload: {
                options: {
                    livereload: true
                },
                // after compiling then do livereload
                files: [ 'slides/index.html', 'slides/images/*' ]
            }
        }
    });

    // default task to make the slides
    grunt.registerTask('default', [ 'slides' ]);

    // make the slides
    grunt.registerTask('slides', [ 'exec:generate' ]);

    // serve the presentation
    grunt.registerTask('serve', [ 'connect' ]);

    // continuous development
    grunt.registerTask('dev', [ 'slides', 'serve', 'watch' ]);
};