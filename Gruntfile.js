
module.exports = function(grunt) {

    // Project configuration.
grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'dest/output.min.js': ['src/input1.js', 'src/input2.js']
        },
      },
    },
    watch: {
        js: {
          files: ['js/**/*.js'],
          tasks: ['jshint'],
        },
        CSS: {
            files: ['CSS/**/*.css'],
            tasks: ['jshint'],
          },
      },
      sass: {                              // Task
        dist: {                            // Target
          options: {                       // Target options
            style: 'expanded'
          },
          files: {                         // Dictionary of files
            'main.css': 'main.scss',       // 'destination': 'source'
            'widgets.css': 'widgets.scss'
          },
        },
      },
      jshint: {
        all: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js']
      }
  });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');


    grunt.registerTask('default', ['sass']);

}
