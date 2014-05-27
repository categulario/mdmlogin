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
          'css/theme.css': 'css/theme.less'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('default', ['less']);

};