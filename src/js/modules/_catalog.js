var $ = require('jquery');

function Catalog(selector) {
    this.el      = $(selector);
    this.classes = {
        init: 'is-init',
        anim: 'is-animate',
        done: 'is-done'
    };
    this.animDur = 500;
    this.animDelay = 300;
}

Catalog.prototype.open = function() {
    var that = this;
    that.el.addClass(that.classes.init);
    setTimeout(function() {
        that.el.addClass(that.classes.anim);
    }, 10);
    setTimeout(function() {
        that.el.addClass(that.classes.done);
    }, that.animDelay);
    that.setHeight();
};

Catalog.prototype.close = function() {
    var that = this;
    that.el.removeClass(that.classes.done);
    setTimeout(function() {
        that.el.removeClass(that.classes.anim);
    }, that.animDur);
    setTimeout(function() {
        that.el.removeClass(that.classes.init);
        that.el.css('height', '');
    }, that.animDur + that.animDelay);
};

Catalog.prototype.setHeight = function() {
    this.el.height($(window).height());
};

module.exports = Catalog;