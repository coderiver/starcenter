module.exports = function() {

    var gulp         = require('gulp'),
        sass         = require('gulp-ruby-sass'),
        sourcemaps   = require('gulp-sourcemaps'),
        postcss      = require('gulp-postcss'),
        autoprefixer = require('autoprefixer-core'),
        assets       = require('postcss-assets'),
        config       = require('./../config');

    // gulp.task('sass', function() {

        var processors = [
            autoprefixer({browsers: ['last 4 versions'], cascade: false}),
            assets({loadPaths: ['site/img/']})
        ];

        return sass(config.src.sass, {
            sourcemap: true,
            style: 'compact'
        })
        .on('error', function (err) {console.error('Error', err.message);})
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.dest.css));

    // });

};