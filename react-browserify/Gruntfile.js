module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    browserify: {
      dist: {
        files: {
          'build/bundle.js': ['src/App.js']
        },
        options: {
          transform: ['reactify']
        }
      }
    },
    watch: {
      tasks: ['browserify']
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.registerTask('default', 'Pack js files with browserify', ['browserify']);
};



