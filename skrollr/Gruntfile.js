module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'css/style.css' : 'sass/style.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		},
		jshint: {
			options: {
				smarttabs: false,
				curly: true,
				immed: true,
				latedef: true,
				noarg: true,
				quotmark: 'single',
				undef: true,
				unused: true,
				strict: true,
				trailing: true,
				globals: {
					window: true,
					document: true,
					navigator: true,
					define: true,
					module: true
				}
			},
			all: ['src/**/*.js']
		},
		qunit: {
			all: ['test/index.html', 'test/loading.html']
		},
		uglify: {
			options: {
				banner: '/*! skrollr test <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd") %>) | Jackrabbit - https://github.com/Jackrabbitrocks | Free to use under terms of MIT license */\n'
			},

			all: {
				files: {
					'dist/skrollr.min.js': 'src/skrollr.js'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.registerTask('default',['watch']);
	grunt.registerTask('dev',['sass','jshint']);
}