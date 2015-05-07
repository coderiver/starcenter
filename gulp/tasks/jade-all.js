module.exports = function() {

    var gulp         = require('gulp'),
        jade         = require('gulp-jade'),
        notify       = require('gulp-notify'),
        plumber      = require('gulp-plumber'),
        config       = require('./../config');

    // gulp.task('jade-all', function() {

        return gulp.src(config.src.jade + '/[^_]*.jade')
            .pipe(plumber({errorHandler: notify.onError(function(error){return error.message;})}))
            .pipe(jade({pretty: true}))
            .pipe(gulp.dest(config.dest.html));

    // });

};