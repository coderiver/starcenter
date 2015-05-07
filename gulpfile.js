var gulp = require('./gulp')([
    // connect your tasks here
    'server',
    'browserify',
    'browserify-vendor',
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
    'browserify',
    'browserify-vendor'
    ]);

gulp.task('default', [
    'server',
    'watch'
    ]);
