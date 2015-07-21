module.exports = function() {

    var gulp      = require('gulp'),
        filter    = require('gulp-filter'),
        notify    = require('gulp-notify'),
        plumber   = require('gulp-plumber'),
        svgmin    = require('gulp-svgmin'),
        // svgSprite = require('gulp-svg-sprites'),
        svgStore  = require('gulp-svgstore'),
        cheerio   = require('gulp-cheerio'),
        rename    = require('gulp-rename'),
        config    = require('../config.js');

    // gulp.task('svg-sprite', function() {

        return gulp.src(config.src.svg + '/icons/*.svg')
            .pipe(svgmin({
                js2svg: {
                    pretty: true
                },
                plugins: [{
                    removeDesc: true
                },{
                    cleanupIDs: true
                },{
                    mergePaths: false
                }
            ]}))
            .pipe(cheerio({
                run: function ($, file) {
                    $('[fill]').removeAttr('fill');
                },
                parserOptions: { xmlMode: true }
            }))
            // .pipe(svgSprite({
            //     mode: "symbols",
            //     selector: "icon-%f",
            //     preview: false,
            //     svg: {
            //         symbols: 'icons.svg'
            //     }
            // }))
            .pipe(rename({
                prefix: 'icon-'
            }))
            .pipe(svgStore({
                inlineSvg: true
            }))
            .pipe(rename({
                basename: 'icons'
            }))
            .pipe(gulp.dest(config.dest.img));
    // });

};
