module.exports = function() {

    var gulp         = require('gulp'),
        notify       = require('gulp-notify'),
        plumber      = require('gulp-plumber'),
        spritesmith  = require('gulp.spritesmith'),
        config       = require('./../config');

    // gulp.task('sprite', function() {

        var spriteData = gulp.src(config.src.img + '/icons/*.png')
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(spritesmith({
            imgName: 'icons.png',
            cssName: '_sprite.scss',
            imgPath: '../img/icons.png',
            cssFormat: 'sass',
            padding: 10,
            // algorithm: 'top-down',
            cssTemplate: config.src.helpers + '/sprite.template.mustache'
        }));
        spriteData.img
            .pipe(gulp.dest(config.dest.img));
        spriteData.css
            .pipe(gulp.dest(config.src.sass));

    // });

};