var notify  = require('gulp-notify');

module.exports = {

    //** src paths **
    src: {
        root    : './src',
        jade    : './src/jade',
        sass    : './src/sass',
        js      : './src/js',
        img     : './src/img',
        svg     : './src/img/svg',
        helpers : './src/helpers'
    },
    //** dest paths **
    dest: {
        root : './site',
        html : './site',
        css  : './site/css',
        js   : './site/js',
        img  : './site/img'
    },

    errorHandler: function() {
        var args = Array.prototype.slice.call(arguments);
        notify.onError({
            title: "Compile Error",
            message: "<%= error.message %>"
        }).apply(this, args);
        this.emit('end');
    }

};