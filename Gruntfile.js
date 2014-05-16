
module.exports = function(grunt) {

	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		// watch for changes and trigger compass, jshint, uglify and livereload
		watch: {
			js: {
				files: ['js/src/*.js'],
				tasks: ['uglify', 'shell']
			},
			css: {
				files: ['css/src/*.scss'],
				tasks: ['sass','autoprefixer', 'shell'],
				options: {
					livereload: true
				}
			},
            html: {
                files: ['**/*.html', '**/*.md', '**/*.rss', '**/*.yml', '!_site/**/*.*'],
                tasks: ['shell']
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
					'js/head.js': 'js/lib/*.js',
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


		// build the Jekyll site.
		shell: {
			jekyll: {
				command: 'jekyll build --drafts'
			}
		}

	});

	// register task
	grunt.registerTask('default', ['watch']);

	// a build task just in case we want to
	grunt.registerTask('build', ['sass','uglify']);

};

