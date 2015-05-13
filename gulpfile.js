var gulp = require('./gulp')([
    // connect your tasks here
    'server',
    'browserify',
    'jade',
    'jade-all',
    'sass',
    'svg-sprite',
    'sprite',
    'watch'
    ]);

gulp.task('build', [
    'svg-sprite',
    'sprite',
    'sass',
    'jade-all',
    'browserify'
    ]);

gulp.task('default', [
    'server',
    'watch',
    'browserify'
    ]);
