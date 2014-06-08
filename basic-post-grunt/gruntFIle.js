module.exports = function (grunt) {
    /** load all grunt tasks matching the `grunt-*` pattern **/
    require('load-grunt-tasks')(grunt);

    /** set up config **/
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        distDir: 'dist',

        copy: {
            statics: {
                files: {
                    'dist/': ['*.html']
                }
            },
            img: {
                files: {
                    'dist/': ['images/**']
                }
            }
        },

        clean: {
            src: [
                '<%= distDir %>/'
            ]
        },


        concat: {
            js: {
                src: 'js/*.js',
                dest: '<%= distDir %>/main.js'
            },
            css: {
                src: 'css/common.css',
                dest: '<%= distDir %>/main.css'
            }
        },


        uglify: {
            options: {
                report: 'min'
            },
            js: {
                files: {
                    '<%= distDir %>/main.js': '<%= distDir %>/main.js'
                }
            }
        },

        cssmin: {
            options: {
                report: 'min'
            },
            css: {
                files: {
                    '<%= distDir %>/main.css': '<%= distDir %>/main.css'
                }
            }
        },

        // allow to serve different files for development and release
        useminPrepare: {
            html: 'index.html'
        },
        usemin: {
            html: '<%= distDir %>/index.html'
        }
    });

    /** register tasks **/

    // default task
    grunt.registerTask('default', []);

    // use before a release
    grunt.registerTask('release', ['useminPrepare', 'clean', 'copy', 'concat', 'uglify', 'cssmin', 'usemin']);

    // kick off the default task then watch
    grunt.registerTask('monitor', ['default', 'watch']);
};