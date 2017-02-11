module.exports = function(grunt) {

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-package-modules');
  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // all of our configuration will go here
    typescript: {
      base: {
        src: ['src/cores/**/*.ts'],
        dest: 'dist/temp/',
        options: {
          module: 'commonjs', //or commonjs
          target: 'es5', //or es3
          sourceMap: false,
          declaration: false
        }
      }
    },

    watch: {
      files: 'src/cores/**/*.ts',
      tasks: ['typescript']
    },

    clean: {
      build: {
        src: [ 'dist' ]
      }
    },

    copy: {
      main: {
        expand: true,
        src: 'src/**/**/*.js',
        dest: 'dist/js/'
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['dist/temp/*.js'],
        dest: 'dist/hydra.js',
      },
    },

    uglify: {
      build: {
        files: {
          'dist/hydra.min.js': 'dist/hydra.js'
        }
      }
    },

    packageModules: {
      dist: {
        src: 'package.json',
        dest: 'dist/vendor'
      },
    }
  });

  grunt.registerTask('build', ['clean', 'typescript', 'concat', 'uglify']);

};
