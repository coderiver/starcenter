var $ = require('jquery');
require('gsap');
require('TimelineLite');
require('gsap-scrollToPlugin');
var loadPartials = require('./_load-partials.js');

function Modal(modalSelector, contentSelector) {
    this.el        = $(modalSelector);
    this.wrapper   = this.el.parent();
    this.content   = this.el.find(contentSelector).toArray();
    this.scrollable= this.el.children().first();
    this.positions = {};
    this.winHeight = $(window).height();
    this.opened    = false;
    this.inProgress = false;
    this.activeContentIndex = null;
    this.options = {
        zIndex: 97,
        duration: 800,
        delay: 300,
        class: 'is-opened'
    };
}

Modal.prototype._preventBubbling = function() {
    var e = arguments[0];
    e.stopPropagation();
};

Modal.prototype._cancelBubbling = function(val) {
    var _ = this;

    if (val === true) {
        this.el.on('mousewheel DOMMouseScroll scroll', _._preventBubbling);
    } else if (val === false) {
        this.el.off('mousewheel DOMMouseScroll scroll', _._preventBubbling);
    }
};

Modal.prototype._enableCustomScroll = function() {
    var _ = this;

    _.scrollable.on('mousewheel', function(e) {
        e.stopPropagation();
        app.util.scrollTo(e, _.scrollable, true);
    });
};

Modal.prototype._disableCustomScroll = function() {
    var _ = this;

    _.scrollable.off('mousewheel');
};

Modal.prototype._getPositions = function() {
    var _ = this;

    _.positions.top    = _.wrapper.offset().top;
    _.positions.height = _.wrapper.height();
    _.positions.bottom = _.positions.top - _.positions.height - _.winHeight;

    return _.positions;
};

Modal.prototype._toFullscreen = function(contentIndex, animDur, animDelay) {
    var _       = this,
        dur     = animDur / 1000   || _.options.duration / 1000,
        del     = animDelay / 1000 || _.options.delay / 1000,
        content = _.content[ contentIndex ],
        pos     = _._getPositions(),
        tl      = new TimelineLite();

    tl
        .add(function() {
            _.inProgress = true;
            _.opened = true;
            _.activeContentIndex = contentIndex;
            })
        .to(_.el, 0, {
            top: pos.top,
            left: 0,
            right: 0,
            height: pos.height,
            position: 'fixed',
            zIndex: _.options.zIndex
            })
        .to(_.el, dur, {top: 0, height: _.winHeight, ease: Linear.easeNone})
        .to(_.el, 0, {height: '100%'})
        .delay(del)
        .fromTo(content, dur / 2, {display: 'block', opacity: 0, y: 100}, {opacity: 1, y: 0, ease: Linear.easeNone})
        .add(function() {
            _.inProgress = false;
            _.el.addClass(_.options.class);
            _._enableCustomScroll();
            });
};

Modal.prototype._toInitState = function(animDur, animDelay) {
    var _   = this,
        dur = animDur / 1000   || _.options.duration / 1000,
        del = animDelay / 1000 || _.options.delay / 1000,
        tl  = new TimelineLite().pause();

    tl
        .add(function() {
            _.inProgress = true;
            _.el.removeClass(_.options.class);
            })
        .to(_.content, dur / 2, {y: 100, opacity: 0, ease: Linear.easeNone})
        .to(_.content, 0, {display: 'none'})
        .to(_.el, dur, {
            top: _.positions.top,
            height: _.positions.height,
            clearProps: 'all',
            ease: Linear.easeNone,
            delay: del})
        .add(function() {
            _.inProgress = false;
            _.opened = false;
            _._disableCustomScroll();
            });

    if ( _.scrollable.scrollTop() > 0 ) {
        _.scrollable.animate({scrollTop: 0}, 500, function() {
            tl.play();
        });
    } else {
        tl.play();
    }
};

Modal.prototype._loadContent = function(url, div) {
    var _ = this;
    var container = $(div);
    // check if content was loaded in container, by default container is empty
    if ( container.children().length > 0 ) return;
    loadPartials(url, container);
};

Modal.prototype.open = function(contentIndex, partialsUrl, animDur, animDelay) {
    if ( this.opened ) return;

    var _ = this;
    var contentContainer = _.content[contentIndex];

    _._loadContent(partialsUrl, contentContainer);
    _._cancelBubbling(true);
    _._toFullscreen(contentIndex, animDur, animDelay);
};


Modal.prototype.close = function(animDur, animDelay) {
    if ( !this.opened ) return;

    var _ = this;

    _._cancelBubbling(false);
    _._toInitState(animDur, animDelay);
};

Modal.prototype.switchContent = function(contentIndex, partialsUrl, animDur) {
    if ( !this.opened || this.activeContentIndex == contentIndex ) return;

    var _           = this,
        dur         = animDur / 1000 || _.options.duration / 1000 * 0.5;
        prevContent = _.content[ _.activeContentIndex ];
        nextContent = _.content[ contentIndex ];
        tl          = new TimelineLite();

    _._loadContent(partialsUrl, nextContent);

    tl
        .delay(dur)
        .to(prevContent, dur, {y: 100, opacity: 0})
        .to(prevContent, 0, {display: 'none'})
        .to(nextContent, 0, {display: 'block'})
        .fromTo(nextContent, dur, {y: 100, opacity: 0}, {y: 0, opacity: 1})
        .add(function() {
            _.activeContentIndex = contentIndex;
            }, '+=0');
};


module.exports = Modal;
