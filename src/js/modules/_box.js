require('jquery');
require('slick-carousel');
require('../../../node_modules/gsap/src/uncompressed/TweenLite.js');
require('../../../node_modules/gsap/src/uncompressed/TimelineLite.js');
require('../../../node_modules/gsap/src/uncompressed/plugins/CSSPlugin.js');
require('../../../node_modules/gsap/src/uncompressed/plugins/ScrollToPlugin.js');

function Box() {
    this.el          = {};
    this.opened      = false;
    this.position    = null;
    this.slider      = null;

    this.options = {
        animDur: 0.7,
        class: 'is-opened',
        zIndex: 98,
        easing: Power1.easeOut
    };

    this.slickOptions = {
        accessibility: false,
        autoplay: false,
        draggable: false,
        slide: '.object__slider',
        dots: true,
        swipe: false,
        respondTo: 'slider',
        adaptiveHeight: true,
        arrows: true,
        speed: 500
        // lazyLoad: 'progressive'
        // speed: this.dur,
        // fade: false,
        // centerMode: true,
        // centerPadding: '0',
        // focusOnSelect: true,
        // easing: 'easeInCubic',
        // infinite: true,
        // initialSlide: 1,
        // slidesToShow: 3
    };
}



Box.prototype.init = function(box) {
    var _ = this;

    if ( box instanceof jQuery ) { _.el.box = box; }
    else { _.el.box = $(box); }

    _.el.inner       = _.el.box.find('.object__inner');
    _.el.gallery     = _.el.box.find('.object__gallery');
    _.el.slider      = _.el.box.find('.object__slider');
    _.el.openButton  = _.el.box.find('.info .btn');
    _.el.closeButton = _.el.box.find('.object__close');
    _.el.info        = _.el.box.find('.info');
    _.el.detail      = _.el.box.find('.object__detail');

    _.slickOptions.prevArrow = _.el.box.find('.object__slider-prev');
    _.slickOptions.nextArrow = _.el.box.find('.object__slider-next');

    _._initEvents();
};



Box.prototype._initEvents = function() {
    var _ = this;

    _.el.openButton.on('click', function(e) {
        _.open();
    });

    _.el.closeButton.on('click', function(e) {
        // if current slide of slider is not first
        if ( _.slider.slick('slickCurrentSlide') !== 0 ) {
            _.slider.slick('slickGoTo', 0);
            setTimeout(function() {
                _.close();
            }, _.slider.slick('slickGetOption', 'speed') || _.slickOptions.speed );

        } else {
            _.close();
        }
    });

    _.el.box.on('scroll mousewheel DOMMouseScroll', function(e) {
        e.stopPropagation();
    });

    $(window).on('resize', function() {
        $(_).trigger('winResized');
    });
};



Box.prototype._initSlider = function () {
    var _ = this;

    _.slider = _.el.slider.slick(_.slickOptions);
};



Box.prototype._destroySlider = function() {
    var _ = this;

    _.el.slider.slick('unslick');
    _.slider = null;
};



Box.prototype._getPosition = function() {
    var _       = this,
        wrapper = _.el.box.parent();
        ww      = $(window).width();
        wh      = $(window).height();

    var position = {};

    position.top    =  wrapper.offset().top;
    position.left   =  wrapper.offset().left;
    position.width  =  wrapper.width();
    position.height =  wrapper.height();
    position.right  =  ww - position.width - position.left;
    position.bottom =  wh - position.height - position.top;

    _.position = position;

    return position;

};



Box.prototype.open = function() {

    if ( this.opened ) return;

    var _   = this,
        pos = _._getPosition();
        tl  = new TimelineLite();

    tl.eventCallback('onComplete', function() {
        _.el.box.addClass(_.options.class);
        _._initSlider();
    });

    tl.append(function() {

        // app.util.toggleScroll();
        _.opened = true;

        // update initial position of box if window will be resize
        $(_).on('winResized', _._getPosition);

        _.el.box.css({
            top: pos.top,
            left: pos.left,
            // width: pos.width,
            // height: pos.height,
            right: pos.right,
            bottom: pos.bottom,
            width: 'auto',
            height: 'auto',
            position: 'fixed',
            zIndex: _.options.zIndex
        });
    });

    tl.add('start', 0)
        // animate box from initial size to fullscreen
        .to(_.el.box, _.options.animDur, {
            top: 0,
            left: 0,
            // width: '100%',
            // height: '100%',
            right: 0,
            bottom: 0,
            ease: _.options.easing
            })
        // play animations inside box
        .to(_.el.gallery, _.options.animDur, {
            height: 680,
            ease: _.options.easing,
            }, 'start')
        .to(_.el.info, _.options.animDur, {
            // top: 622,
            y: 328,
            ease: _.options.easing,
            }, 'start');
};



Box.prototype.close = function() {

    if ( !this.opened ) return;

    var _  = this;
        tl = new TimelineLite();

    tl.append(function() {
        _._destroySlider();
        $(_).off('winResized');
        _.el.box.removeClass(_.options.class);
    });

    tl.eventCallback('onComplete', function() {

        _.el.box.css({
            top: '',
            left: '',
            right: '',
            bottom: '',
            width: '',
            height: '',
            position: '',
            zIndex: ''
        });

        _.opened = false;
        // app.util.toggleScroll();
    });

    tl.add('start', 0)
        // animate box from fullscreen to initial size
        .to(_.el.box, _.options.animDur, {
            top: _.position.top,
            left: _.position.left,
            width: _.position.width,
            height: _.position.height,
            ease: _.options.easing,
            })
        // play animations inside box in reverse mode
        .to(_.el.gallery, _.options.animDur, {
            height: 450,
            ease: _.options.easing,
            }, 'start')
        .to(_.el.info, _.options.animDur, {
            // top: 294,
            y: 0,
            ease: _.options.easing,
            }, 'start');
        // .to(_.el.detail, _.options.animDur, {

        //     })
};


module.exports = Box;