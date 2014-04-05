module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['browserify', 'concat']);

  grunt.initConfig({
    browserify: {
      dist: {
        files: {
          '.tmp/common.js': ['common/entry.js'],
        }
      }
    },
    concat : {
      dist: {
        src: ['.tmp/*.js', 'src/*.js'],
        dest: 'app.js',
      }
    }
  });
};
