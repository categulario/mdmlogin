module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      main: {
        options: {
          paths: ['css'],
          compress: true
        },
        files: {
          'assets/css/theme.css': 'src/less/theme.less',
        }
      }
    },
    watch: {
      options:{
        livereload: true,
      },

      css: {
        files: [
          'src/less/*.less',
        ],
        tasks: [
          'less:main',
        ],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', [
    'less',
  ]);

};