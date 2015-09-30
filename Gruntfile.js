module.exports = function ( grunt )
{
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          sourcemap : 'none',
          noCache   : true
        },
        files: {
          'app/styles/app.css'        : 'app/sass/app.sass',
        }
      }
    },
    /*
    jade: {
      dist: {
        files: {
          'dist/index.html' : 'app/jade/index.jade'
        }
      }
    },
    bowercopy: {
      components: {
        files: {
          'dist/assets/js/jquery.min.js'         : 'jquery/dist/jquery.min.js'
        }
      }
    },
    copy: {
      assets: {
        expand: true,
        cwd: 'app/assets/',
        src: '**',
        dest: 'dist/assets/',
      },
      root: {
        dot: true,
        expand: true,
        cwd: 'app/root/',
        src: '**',
        dest: 'dist/',
      },
      system: {
        expand: true,
        cwd: 'app/system/',
        src: '**',
        dest: 'dist/system/',
      },
      downloads: {
        expand: true,
        cwd: 'app/downloads/',
        src: '**',
        dest: 'dist/downloads/',
      }
    },
    */
    watch: {
      sass: {
        files: ['app/sass/**/*.sass'],
        tasks: ['sass']
//      },
//      jade: {
//        files: ['app/jade/**/*.jade'],
//        tasks: ['jade']
//      },
//      bower: {
//        files: ['bower_components/**/*'],
//        tasks: ['bowercopy']
      }
    }
  });

//  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
//  grunt.loadNpmTasks('grunt-contrib-jade');
//  grunt.loadNpmTasks('grunt-contrib-copy');
//  grunt.loadNpmTasks('grunt-bowercopy');

  grunt.registerTask('default', [ 'sass','watch']);
}
