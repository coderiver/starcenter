module.exports = function() {

    var gulp    = require('gulp'),
        jade    = require('gulp-jade'),
        notify  = require('gulp-notify'),
        plumber = require('gulp-plumber'),
        changed = require('gulp-changed'),
        rename  = require('gulp-rename'),
        filter  = require('gulp-filter'),
        config  = require('./../config');

    var indexFilter = filter('index.html');

    // gulp.task('jade', function() {

        return gulp.src(config.src.jade + '/[^_]*.jade')
            .pipe(plumber({errorHandler: notify.onError(function(error){return error.message;})}))
            .pipe(changed(config.dest.html, {extension: '.html'}))
            .pipe(jade({pretty: true}))
            // .pipe(indexFilter)
            // .pipe(rename({
            //     extname: '.php'
            // }))
            // .pipe(indexFilter.restore())
            .pipe(gulp.dest(config.dest.html));

    // });

};
