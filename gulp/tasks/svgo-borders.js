module.exports = function() {

    var gulp         = require('gulp'),
        svgmin       = require('gulp-svgmin'),
        cheerio      = require('gulp-cheerio'),
        config       = require('./../config');

    // gulp.task('svgo', function() {
        return gulp.src(config.src.svg + '/svg-borders/*.svg')
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
                    var path = $('path');
                    var outer = [];
                    var inner = [];
                    path.each(function(index, el) {
                        $(el)
                            .removeClass()
                            .removeAttr('id');
                        if ( $(el).attr('stroke-width') == 3 || $(el).parents('[stroke-width="3"]').length ) {
                            outer.push(el);
                        } else {
                            inner.push(el);
                        }
                    });
                    $(inner).addClass('inner-border');
                    $(outer).addClass('outer-border');
                },
                parserOptions: { xmlMode: true }
            }))
            .pipe(gulp.dest(config.src.svg + '/svg-borders/optimized'));
    // });

};