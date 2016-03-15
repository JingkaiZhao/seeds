var webpack = require('webpack');

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel: {
      options: {
          sourceMap: false,
          presets: ['react']
      },
      compile: {
          files: [{
              expand: true,
              cwd: 'src/',
              src: ['**/*.js'],
              dest: 'build/',
              ext: '.js'
          }]
      }
    },
    webpack: {
      jsbundle: {
        context: __dirname + "/build",
        entry: ['./root.js'],
        output: {
          path: __dirname,
          filename: 'bundle.js'
        },
        module: {
          loaders: [
          ]
        },
        // plugins: [new webpack.DefinePlugin({
        //   "process.env": {
        //     NODE_ENV: JSON.stringify("production")
        //   }
        // })]
      }
    },
    watch: {
      tasks: ['babel', 'webpack']
    }
  });

  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('compile', 'Run react JSX compile with babel', ['babel']);
  grunt.registerTask('pack', 'Pack js files with webpack', ['webpack']);

  grunt.registerTask('default', 'Run all build tasks', ['babel', 'webpack']);
};



