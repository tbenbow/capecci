module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    paths: ['./css/less','./css/less/core'],
                    yuicompress: true
                },
                files: {
                    './css/style.css': './css/less/style.less'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions']
            },
            single_file: {
                src: 'css/style.css'
            }
        },
        csso: {
            default: {
                options: {
                    banner: '/* Design & Development by Hellomoon - www.hellomoon.net */'
                },
                files: {
                    './css/style.min.css': ['./css/style.css']
                }
            }
        },
        watch: {
            files: ['./css/less/*','./css/less/core/*','./css/less/components/*','./css/less/layouts/*'],
            tasks: ['less','autoprefixer']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-csso');
    grunt.loadNpmTasks('grunt-contrib-watch');

	// Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', 'watch');

};