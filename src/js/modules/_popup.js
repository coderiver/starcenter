var $ = require('jquery');
require('gsap');
require('TimelineLite');
// require('gsap-scrollToPlugin');

function Popup(popupSelector) {
    this.el        = $(popupSelector);
    // this.wrapper   = this.el.parent();
    // this.content   = this.el.find(contentSelector).toArray();
    // this.scrollable= this.el.children().first();
    this.opened    = false;
    this.inProgress = false;
    this.options = {
        zIndex: 97,
        duration: 0.8,
        delay: 0.3,
        class: 'is-opened'
    };
}

Popup.prototype.open = function() {
    var _  = this;
        // tl = new TimelineLite();

    // tl.fromTo(_.el, _.options.duration, {yPercent: 100}, {yPercent: 0});

    _.el.addClass(_.options.class);
    app.navbar.hidden();

    _.opened = true;
    app.openedPopup = _;
};


Popup.prototype.close = function() {
    var _ = this;

    _.el.removeClass(_.options.class);
    app.navbar.visible();

    _.opened = false;
    app.openedPopup = null;
};