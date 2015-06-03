var $ = require('jquery');
require('gsap');
require('TimelineLite');
require('gsap-scrollToPlugin');

function Modal(modalSelector, contentSelector) {
    this.el        = $(modalSelector);
    this.wrapper   = this.el.parent();
    this.content   = this.el.find(contentSelector);
    this.scrollable= this.el.children().first();
    this.positions = {};
    this.winHeight = $(window).height();
    this.opened    = false;
    this.inProgress = false;
    this.activeContentIndex = 0;
    this.options = {
        zIndex: 97,
        duration: 800,
        delay: 300,
        class: 'is-opened'
    };
}

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
        content = _.content.eq( contentIndex ),
        pos     = _._getPositions(),
        tl      = new TimelineLite();

    tl
        .add(function() {
            _.inProgress = true;
            _.opened = true;
            })
        .to(_.el, 0, {
            top: pos.top,
            left: 0,
            right: 0,
            height: pos.height,
            position: 'fixed',
            zIndex: _.options.zIndex
            })
        .to(_.el, dur, {top: 0, height: _.winHeight, ease: Linear.easeNone, delay: del})
        .to(_.el, 0, {height: '100%'})
        .to(content, 0, {display: 'block'})
        .fromTo(content, dur / 2, {opacity: 0, y: 100}, {opacity: 1, y: 0, ease: Linear.easeNone})
        .add(function() {
            _.inProgress = false;
            _.el.addClass(_.options.class);
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
            });

    if ( _.scrollable.scrollTop() > 0 ) {
        _.scrollable.animate({scrollTop: 0}, 500, function() {
            tl.play();
        });
    } else {
        tl.play();
    }

};


Modal.prototype.open = function(contentIndex, animDur, animDelay) {
    if ( this.opened ) return;

    var _ = this;

    _._toFullscreen(contentIndex, animDur, animDelay);
};


Modal.prototype.close = function(animDur, animDelay) {
    if ( !this.opened ) return;

    var _ = this;

    _._toInitState(animDur, animDelay);
};


Modal.prototype.switchContent = function(contentIndex, animDur) {
    if ( !this.opened || this.activeContentIndex == contentIndex ) return;

    var _           = this,
        dur         = animDur / 1000 || _.options.duration / 1000 * 0.5;
        prevContent = _.content.eq( _.activeContentIndex );
        nextContent = _.content.eq( contentIndex );
        tl          = new TimelineLite();

    tl
        .to(prevContent, dur, {y: 100, opacity: 0})
        .to(prevContent, 0, {display: 'none'})
        .to(nextContent, 0, {display: 'block'})
        .fromTo(nextContent, dur, {y: 100, opacity: 0}, {y: 0, opacity: 1})
        .add(function() {
            _.activeContentIndex = contentIndex;
            });
};


module.exports = Modal;