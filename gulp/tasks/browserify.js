module.exports = function() {

    var gulp       = require('gulp'),
        browserify = require('browserify'),
        source     = require('vinyl-source-stream'),
        buffer     = require('vinyl-buffer'),
        uglify     = require('gulp-uglify'),
        sourcemaps = require('gulp-sourcemaps'),
        config     = require('./../config.js');

    // gulp.task('browserify', function() {

        return browserify({
            entries:    config.src.js + '/main.js',
            dest:       config.dest.js,
            outputName: 'main.js',
            debug:      true
        })
            .bundle()
            .on('error', function (err) {
                console.error('Error', err.message);
                this.emit('end');
            })
            .pipe(source('main.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
                // .pipe(uglify())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(config.dest.js));

    // });

};