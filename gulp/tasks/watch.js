module.exports = function() {

    var gulp         = require('gulp'),
        config       = require('./../config');

    // gulp.task('watch', function() {

        gulp.watch(config.src.sass + '/**/*', ['sass']);
        gulp.watch(config.src.jade + '/**/*.jade', ['jade']);
        gulp.watch(config.src.jade + '/**/_*.jade', ['jade-all']);
        gulp.watch(config.src.svg + '/icons/*.svg', ['svg-sprite']);
        gulp.watch(config.src.img + '/icons/*.png', ['sprite']);
        gulp.watch(config.src.js + '/**/[^vendor]*.js', ['browserify']);
        gulp.watch(config.src.js + '/vendor.js', ['browserify-vendor']);

    // });

};