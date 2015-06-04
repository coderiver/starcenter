var gulp = require('./gulp')([
    // connect tasks here
    'server',
    'browserify',
    'scripts',
    'jade',
    'jade-all',
    'jade-partials',
    'sass',
    'svg-sprite',
    'svgo',
    'svgo-borders',
    'sprite',
    'watch'
    ]);

gulp.task('build', [
    'svg-sprite',
    'sprite',
    'sass',
    'jade-all',
    'scripts'
    ]);

gulp.task('default', [
    'server',
    'watch',
    'browserify'
    ]);
