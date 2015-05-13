var $ = require('jquery');

function Catalog(selector) {
    this.el        = $(selector);
    this.initClass = 'is-init';
    this.animClass = 'is-animate';
    this.doneClass = 'is-done';
}

Catalog.prototype.open = function() {
    var that = this;
    that.el.addClass(that.initClass);
    setTimeout(function() {
        that.el.addClass(that.animClass);
    }, 20);
    setTimeout(function() {
        that.el.addClass(that.doneClass);
    }, 200);
    that.setHeight();
};

Catalog.prototype.close = function() {
    var that = this;
    that.el.removeClass(that.doneClass);
    setTimeout(function() {
        that.el.removeClass(that.animClass);
    }, 500);
    setTimeout(function() {
        that.el.removeClass(that.initClass);
        that.el.css('height', '');
    }, 700);
};

Catalog.prototype.setHeight = function() {
    this.el.height($(window).height());
};

module.exports = Catalog;