var $ = require('jquery');
require('gsap');
require('TimelineLite');

function Modal(selector) {
    this.el        = $(selector);
    this.wrapper   = this.el.parent();
    this.positions = {};
    this.winHeight = $(window).height();
    this.opened    = false;
    this.inProgress = false;
    this.options = {
        zIndex: 98,
        duration: 800,
        delay: 300
    };
}

Modal.prototype._getPositions = function() {
    var _ = this;

    _.positions.top    = _.wrapper.offset().top;
    _.positions.height = _.wrapper.height();
    _.positions.bottom = _.positions.top - _.positions.height - _.winHeight;

    return _.positions;
};


Modal.prototype._toFullscreen = function(animDur, animDelay) {
    var _   = this,
        dur = animDur / 1000   || _.options.duration / 1000,
        del = animDelay / 1000 || _.options.delay / 1000,
        pos = _._getPositions(),
        tl  = new TimelineLite();

    tl
        .add(function() {
            _.inProgress = true;
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
        .add(function() {
            _.inProgress = false;
            _.opened = true;
            });

};

Modal.prototype._toInitState = function(animDur, animDelay) {
    var _   = this,
        dur = animDur / 1000   || _.options.duration / 1000,
        del = animDelay / 1000 || _.options.delay / 1000,
        tl  = new TimelineLite();

    tl
        .add(function() {
            _.inProgress = true;
            })
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


};


Modal.prototype.open = function() {
    if ( this.opened ) return;

    var _ = this;

    _._toFullscreen();
};


Modal.prototype.close = function() {
    if ( !this.opened ) return;

    var _ = this;

    _._toInitState();
};


module.exports = Modal;