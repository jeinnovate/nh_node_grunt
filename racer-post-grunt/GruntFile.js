module.exports = function (grunt) {
    /** load all grunt tasks matching the `grunt-*` pattern **/
    require('load-grunt-tasks')(grunt);

    /** set up config **/
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        distDir: 'dist',
        port: 9020,

        // serve the presentation
        connect: {
            server: {
                options: {
                    port: '<%= port %>',
                    base: '',
                    livereload: true,
                    hostname: '0.0.0.0',
                    open: {
                        target: 'http://localhost:<%= port %>'
                    }
                }
            }
        },

        // copy the files to the dist version
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

        // clean the dist directory
        clean: {
            src: [
                '<%= distDir %>/'
            ]
        },

        // concat the files
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

        // minify the js
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

        // take out the livereload block for the release
        replace: {
            livereload: {
                src: [ 'dist/index.html' ],
                dest: 'dist/',
                replacements: [
                    {
                        from: '<script src="http://localhost:<%= port %>/livereload.js"></script>',
                        to: '<!-- blank -->'
                    }
                ]
            }
        },

        // minify the css
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
        },

        // watch files and run tasks on change
        watch: {
            livereload: {
                options: {
                    livereload: true
                },
                files: [ 'images/**', '*.{html,css,js}']
            }
        }
    });

    /** register tasks **/

        // default task
    grunt.registerTask('default', []);

    // use before a release
    grunt.registerTask('release', ['useminPrepare', 'clean', 'copy', 'replace:livereload', 'concat', 'uglify', 'cssmin', 'usemin']);

    // kick off the default task then watch
    grunt.registerTask('dev', ['default', 'connect', 'watch']);
};