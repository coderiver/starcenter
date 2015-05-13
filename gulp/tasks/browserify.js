module.exports = function() {

    var gulp        = require('gulp'),
        browserify  = require('browserify'),
        watchify    = require('watchify'),
        source      = require('vinyl-source-stream'),
        buffer      = require('vinyl-buffer'),
        uglify      = require('gulp-uglify'),
        gutil       = require('gulp-util'),
        sourcemaps  = require('gulp-sourcemaps'),
        browserSync = require('browser-sync'),
        config      = require('./../config.js');

    // gulp.task('browserify', function() {

        var props = {
            entries: [config.src.js + '/main.js'],
            dest: [config.dest.js],
            outputName: 'main.js',
            debug: true,
            cache: {},
            packageCache: {}
        };

        var b = watchify(browserify(props));
        b.on('update', bundle);
        b.on('log', gutil.log);

        function bundle() {
          return b.bundle()
            .on('error', config.errorHandler)
            .pipe(source('main.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
               // .pipe(uglify())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(config.dest.js))
            .pipe(browserSync.reload({stream:true, once: true}));
        }
        return bundle();

    // });

};