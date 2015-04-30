var gulp         = require('gulp'),
    sass         = require('gulp-ruby-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    filter       = require('gulp-filter'),
    postcss      = require('gulp-postcss'),
    autoprefixer = require('autoprefixer-core'),
    // assets       = require('postcss-assets'),
    jade         = require('gulp-jade'),
    notify       = require('gulp-notify'),
    plumber      = require('gulp-plumber'),
    changed      = require('gulp-changed'),
    svgmin       = require('gulp-svgmin'),
    svgSprite    = require('gulp-svg-sprites'),
    browserSync  = require('browser-sync'),
    cheerio      = require('gulp-cheerio'),
    spritesmith  = require('gulp.spritesmith'),
    reload       = browserSync.reload;

//** src paths **
var src = {
    root    : 'src',
    jade    : 'src/jade',
    sass    : 'src/sass',
    js      : 'src/js',
    img     : 'src/img',
    svg     : 'src/img/svg',
    helpers : 'src/helpers'
};

//** dest paths **
var dest = {
    root : 'site',
    html : 'site',
    css  : 'site/css',
    js   : 'site/js',
    img  : 'site/img'
};

//webserver
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: dest.root
        },
        files: [dest.html + '/*.html', dest.css + '/*.css', dest.js + '/*.js'],
        port: 8080,
        open: false,
        notify: false,
        ghostMode: false,
        online: false,
        open: false
    });
});

//jade
gulp.task('jade', function() {
    return gulp.src([src.jade + '/*.jade', '!' + src.jade + '/_*.jade', '!' + src.jade + '/includes/*.jade'])
        .pipe(plumber({errorHandler: notify.onError(function(error){return error.message;})}))
        .pipe(changed(dest.html, {extension: '.html'}))
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest(dest.html));
});

//compile all jade files
gulp.task('jade-all', function() {
    return gulp.src([src.jade + '/*.jade', '!' + src.jade + '/_*.jade', '!' + src.jade + '/includes/*.jade'])
        .pipe(plumber({errorHandler: notify.onError(function(error){return error.message;})}))
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest(dest.html));
});

//sass
gulp.task('sass', function() {
    var processors = [
        autoprefixer({browsers: ['last 4 versions'], cascade: false}),
        // assets({loadPaths: ['site/img/']})
    ];

    return sass(src.sass, {
        sourcemap: true,
        style: 'compact'
    })
    .on('error', function (err) {
      console.error('Error', err.message);
    })
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('./', {
        // includeContent: false,
        // sourceRoot: '../../' + src.sass
    }))
    .pipe(gulp.dest(dest.css));
});

//svg sprite
gulp.task('svgsprite', function() {
    return gulp.src(src.svg + '/icons/*.svg')
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
                $('[fill]:not([fill="currentColor"])').removeAttr('fill');
            },
            parserOptions: { xmlMode: true }
        }))
        .pipe(svgSprite({
            mode: "symbols",
            selector: "icon-%f",
            preview: false,
            svg: {
                symbols: 'icons.svg'
            }
            // templates: {
            //     css: require('fs').readFileSync('sass/lib/sprite-template.scss', "utf-8")
            // },
            // cssFile: '../sass/_svg-sprite.sass',
            // svgPath: '../img/sprites/%f',
            // pngPath: '../img/sprites/%f',
            // padding: 10
        }))
        .pipe(gulp.dest(dest.img));
});

gulp.task('svgo', function() {
    return gulp.src(src.svg + '/not-optimized/*.svg')
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
        .pipe(gulp.dest(src.svg + "/optimized"));
});

// sprite
gulp.task('sprite', function() {
    var spriteData = gulp.src(src.img + '/icons/*.png')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(spritesmith({
        imgName: 'icons.png',
        cssName: '_sprite.scss',
        imgPath: '../img/icons.png',
        cssFormat: 'sass',
        padding: 10,
        // algorithm: 'top-down',
        cssTemplate: src.helpers + '/sprite.template.mustache'
    }));
    spriteData.img
        .pipe(gulp.dest(dest.img));
    spriteData.css
        .pipe(gulp.dest(src.sass));
});

// watch
gulp.task('watch', function() {
    gulp.watch(src.sass + '/**/*', ['sass']);
    gulp.watch(src.jade + '/**/*.jade', ['jade']);
    gulp.watch([src.jade + '/_*.jade', src.jade + '/includes/*.jade'], ['jade-all']);
    gulp.watch(src.svg + '/icons/*.svg', ['svgsprite']);
    gulp.watch(src.svg + '/optimize/*.svg', ['svgo']);
    gulp.watch(src.img + '/icons/*.png', ['sprite']);
});

gulp.task('build', ['sass', 'svgsprite', 'sprite', 'jade-all'], function() {});

gulp.task('default', ['browser-sync', 'watch'], function() {});