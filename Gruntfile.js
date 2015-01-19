module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		concat: {
	        css: {
	           src: [
	                 'css/*'
	                ],
	            dest: 'release/css/c.unmin.css'
	        },
	        js : {
	            src : [
	                'js/*'
	            ],
	            dest : 'release/js/j.unmin.js'
	        }
    	},
		cssmin : {
            css: {
                src: 'release/css/c.unmin.css',
                dest: 'release/css/c.css'
            }
	    },
		uglify : {
	        js: {
	            files: {
	                'release/js/j.js' : [ 'release/js/j.unmin.js' ]
	            }	
	        }
    	},
    	htmlmin: {
    		build: {
      			options: {
        			removeComments: true,
        			collapseWhitespace: true
      			},
      			files: {
        			'release/index.html': 'release/index.html'
      			}
    		}
    	}
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', [ 'concat:css', 'cssmin:css', 'concat:js', 'uglify:js', 'htmlmin:build' ]);    
}