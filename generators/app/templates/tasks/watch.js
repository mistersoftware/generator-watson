'use strict';

//////////////////////////////
// Export
//////////////////////////////
module.exports = function (gulp) {

  //////////////////////////////
  // Core Task
  //////////////////////////////
  gulp.task('watch',[
    'eslint:watch',
    'copy:watch',
    'sass:watch',
    'uglify:watch',
    'imagemin:watch'
  ]);
}