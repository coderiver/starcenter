module.exports = function() {

    var gulp       = require('gulp'),
        browserify = require('browserify'),
        watchify   = require('watchify'),
        source     = require('vinyl-source-stream'),
        buffer     = require('vinyl-buffer'),
        uglify     = require('gulp-uglify'),
        // gutil      = require('gulp-util'),
        // notify     = require('gulp-notify'),
        sourcemaps = require('gulp-sourcemaps'),
        config     = require('./../config.js');

    // gulp.task('browserify', function() {

        var props = {
            entries:    [config.src.js + '/main.js'],
            dest:       config.dest.js,
            outputName: 'main.js',
            debug:      true,
        };
        // var b = browserify({
        //     cache: {},
        //     packageCache: {},
        // });
        // var w = watchify(b, props);

        return browserify(props)
            .bundle()
            .on('error', config.errorHandler )
            // .on('update', function() {
            //     console.log('update');
            //     w.bundle();
            // })
            .pipe(source('main.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
                // .pipe(uglify())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(config.dest.js));

    // });

};