require('jquery');

var catalog = {
    el: $('.catalog'),
    initClass: 'is-init',
    animClass: 'is-animate',
    doneClass: 'is-done',

    open: function() {
        var that = this;
        that.el.addClass(that.initClass);
        setTimeout(function() {
            that.el.addClass(that.animClass);
        }, 20);
        setTimeout(function() {
            that.el.addClass(that.doneClass);
        }, 200);
        that.setHeight();
    },
    close: function() {
        var that = this;
        that.el.removeClass(that.doneClass);
        setTimeout(function() {
            that.el.removeClass(that.animClass);
        }, 500);
        setTimeout(function() {
            that.el.removeClass(that.initClass);
            that.el.css('height', '');
        }, 700);
    },
    setHeight: function() {
        this.el.height($(window).height());
    }
};

module.exports = catalog;