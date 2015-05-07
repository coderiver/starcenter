module.exports = function() {

    var gulp         = require('gulp'),
        sass         = require('gulp-ruby-sass'),
        sourcemaps   = require('gulp-sourcemaps'),
        filter       = require('gulp-filter'),
        postcss      = require('gulp-postcss'),
        autoprefixer = require('autoprefixer-core'),
        assets       = require('postcss-assets'),
        jade         = require('gulp-jade'),
        notify       = require('gulp-notify'),
        plumber      = require('gulp-plumber'),
        changed      = require('gulp-changed'),
        svgmin       = require('gulp-svgmin'),
        svgSprite    = require('gulp-svg-sprites'),
        browserSync  = require('browser-sync'),
        cheerio      = require('gulp-cheerio'),
        spritesmith  = require('gulp.spritesmith'),
        config       = require('./../config');

    // gulp.task('', function() {


    // });

};