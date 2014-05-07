
module.exports = function(grunt) {

	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		// watch for changes and trigger compass, jshint, uglify and livereload
		watch: {
			js: {
				files: ['js/src/*.js'],
				tasks: ['uglify']
			},
			css: {
				files: ['css/src/*.scss'],
				tasks: ['sass','autoprefixer'],
				options: {
					livereload: true
				}
			}
		},


		// we use the Sass
		sass: {
			dist: {
				options: {
					// nested, compact, compressed, expanded
					style: 'compressed'
				},
				files: {
					'css/src/main-unprefixed.css': 'css/src/main.scss',
				}
			}
		},


		// uglify to concat, minify, and make source maps
		uglify: {
			dist: {
				files: {
					'js/main.js': 'js/src/*.js',
				}
			}
		},


		// auto-prefix our css3 properties.
		autoprefixer: {
			files: {
				dest: 'css/main.css',
				src: 'css/src/main-unprefixed.css'
			}
		},

	});

	// register task
	grunt.registerTask('default', ['watch']);

	// a build task just in case we want to
	grunt.registerTask('build', ['sass','uglify']);

};

