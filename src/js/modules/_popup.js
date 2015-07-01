// var $ = require('jquery');
// require('jquery-mousewheel')($);
// require('gsap');
// require('TimelineLite');
// require('gsap-scrollToPlugin');

function Popup(popupSelector) {
    this.el         = $(popupSelector);
    this.scrollable = this.el.children().first();
    this.opened     = false;
    this.inProgress = false;
    this.options    = {
        class: 'is-opened'
    };
}

Popup.prototype._enableCustomScroll = function() {
    var _ = this;

    _.scrollable.on('mousewheel', function(e) {
        var a = _.scrollable.scrollTop();
        console.log(a);
        e.stopPropagation();
        app.util.scrollTo(e, _.scrollable);
    });
};

Popup.prototype._disableCustomScroll = function() {
    var _ = this;

    _.scrollable.off('mousewheel');
};

Popup.prototype.open = function() {
    var _  = this;

    _.el.addClass(_.options.class);
    _._enableCustomScroll();
    app.navbar.hidden();

    _.opened = true;
    app.openedPopup = _;
};


Popup.prototype.close = function() {
    var _ = this;

    _.el.removeClass(_.options.class);
    _._disableCustomScroll();
    app.navbar.visible();

    _.opened = false;
    app.openedPopup = null;
};
