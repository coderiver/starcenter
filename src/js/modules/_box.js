require('jquery');
require('slick-carousel');
require('gsap');
require('TimelineLite');

function Box() {
    this.elements    = {};
    this.opened      = false;
    this.position    = {}; // box position before fullscreen mode
    this.slider      = null;
    this.win         = {};
    this.mode        = 'slider'; // can be 'slider' (default) or 'modal',

    this.options = {
        animDur: 0.5,
        class: '', // add to box when opened, look in init
        wrapperClass: '', // add to wrapper when start transforming, look in init
        zIndex: 98,
        easing: Power1.easeOut,
        breakpoint: 800,
        height1: 580, // gallery height for viewport height <= breakpoint
        height2: 680, // gallery height for viewport height > breakpoint
        initSliderHeight: 450, // gallery height before fullscreen mode
        sliderHeight: null,  // gallery height in fullscreen mode
        infoTop: 100 // shift y for info table in fullscreen mode
    };

    this.slickOptions = {
        accessibility: false,
        autoplay: false,
        draggable: false,
        slide: '.object__slide',
        prevArrow: null,
        nextArrow: null,
        dots: true,
        swipe: false,
        respondTo: 'slider',
        arrows: true,
        speed: 500
    };

    return this;
}



Box.prototype.init = function(box, mode) {
    var _  = this,
        modeAttr;

    if ( box instanceof jQuery ) { _.elements.box = box; }
    else { _.elements.box = $(box); }

    _.elements.wrapper     = _.elements.box.parents('.object-wrapper');
    _.elements.inner       = _.elements.box.find('.object__inner');
    _.elements.slider      = _.elements.box.find('.object__slider');
    _.elements.openButton  = _.elements.box.find('.info .btn');
    _.elements.closeButton = _.elements.box.find('.object__close');
    _.elements.info        = _.elements.box.find('.info');
    _.elements.detail      = _.elements.box.find('.object__detail');

    _.win.W = $(window).width();
    _.win.H = $(window).height();

    // update options
    _.options.sliderHeight   = _.win.H <= _.options.breakpoint ? _.options.height1 : _.options.height2;
    _.slickOptions.prevArrow = _.elements.box.find('.object__slider-prev');
    _.slickOptions.nextArrow = _.elements.box.find('.object__slider-next');

    // update options
    modeAttr = _.elements.box.data('mode');
    if ( mode ) _.mode = mode;
    else if ( modeAttr ) _.mode = modeAttr;
    _.options.class        = _.mode == 'slider' ? 'is-slider': 'is-opened';
    _.options.wrapperClass = _.mode == 'slider' ? 'is-slider' : 'is-animate';

    _._getPosition();
    _._initEvents();

    return this;
};



Box.prototype._initEvents = function() {
    var _ = this;

    _.elements.openButton.on('click', function(e) {
        e.preventDefault();
        _.open();
    });

     _.elements.slider.on('click', function() {
        _.open();
    });

    _.elements.closeButton.on('click', function(e) {
        e.preventDefault();
        _.close(true);
    });

    if ( _.mode == 'modal' ) {
        _.elements.box.on('scroll mousewheel DOMMouseScroll', function(e) {
            e.stopPropagation();
        });
    }

    $(window).on('resize', function() {
        $(_).trigger('winResized');
        _._updateOnResize();
    });

    _.elements.slider.on('init', function(e, slick) {
        // transform 1,2,3 to 01,02,03
        var button = slick.$dots.find('button');
        $.each(button, function(index, el) {
            var number = $(el).text();
            $(el).text(app.util.transformNumber(number));
        });
    });
};


Box.prototype._initSlider = function () {
    var _ = this;

    _.slider = _.elements.slider.slick(_.slickOptions);
};



Box.prototype._destroySlider = function() {
    var _ = this;

    _.elements.slider.slick('unslick');
    _.slider = null;
};



Box.prototype._updateOnResize = function() {
    var _ = this;

    _.win.W = $(window).width();
    _.win.H = $(window).height();

    _.options.sliderHeight = _.win.H <= _.options.breakpoint ? _.options.height1 : _.options.height2;
};



Box.prototype._getPosition = function() {
    var _       = this;

    _.position.top    =  _.elements.wrapper.offset().top;
    _.position.left   =  _.elements.wrapper.offset().left;
    _.position.width  =  _.elements.wrapper.width();
    _.position.height =  _.elements.wrapper.height();
    _.position.right  =  _.win.W - _.position.width - _.position.left;
    _.position.bottom =  _.win.H - _.position.height - _.position.top;

    return _.position;
};



Box.prototype._toFullscreen = function() {
    var _   = this,
        pos = _._getPosition();
        tl  = new TimelineLite();

    tl
        .add('start', 0)
        .add(function() {
            // app.util.toggleScroll();
            _.opened = true;
            app.navbar.hidden();

            // update initial position of box if window will be resize
            $(_).on('winResized', _._getPosition);

            _.elements.wrapper.addClass(_.options.wrapperClass);

            _.elements.box.css({
                top: pos.top,
                left: pos.left,
                right: pos.right,
                bottom: pos.bottom,
                width: 'auto',
                height: 'auto',
                position: 'fixed',
                zIndex: _.options.zIndex
            });
            })
        .to(_.elements.box, _.options.animDur, {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            ease: _.options.easing
            }, 'start')
        .to(_.elements.slider, _.options.animDur, {
            height: _.options.sliderHeight,
            ease: _.options.easing,
            }, 'start')
        .to(_.elements.info, _.options.animDur, {
            y: _.options.infoTop,
            ease: _.options.easing,
            }, 'start')
        .add(function() {
            _.elements.box.addClass(_.options.class);
            _._initSlider();
            });
};



Box.prototype._toInitState = function() {
    var _  = this;
        tl = new TimelineLite();

    tl
        .add('start', 0)
        .add(function() {
            _._destroySlider();
            $(_).off('winResized');
            _.elements.box.removeClass(_.options.class);
            })
        .to(_.elements.box, _.options.animDur, {
            top: _.position.top,
            left: _.position.left,
            width: _.position.width,
            height: _.position.height,
            ease: _.options.easing,
            })
        .to(_.elements.slider, _.options.animDur, {
            height: _.options.initSliderHeight,
            ease: _.options.easing,
            }, 'start')
        .to(_.elements.info, _.options.animDur, {
            y: 0,
            ease: _.options.easing,
            }, 'start')
        .add(function() {
            _.elements.box.css({
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

            _.elements.wrapper.removeClass(_.options.wrapperClass);
            // app.util.toggleScroll();
            app.navbar.visible();
            });
};



Box.prototype._toFullSize = function() {
    var _  = this,
        tl = new TimelineLite();

    tl
        .add(function() {
            _.opened = true;
            _.elements.wrapper.addClass(_.options.wrapperClass);
            _.elements.detail.slideDown();
            })
        .to(_.elements.wrapper, 0, {height: 'auto'})
        .to(_.elements.box, 0, {width: '100%'})
        .addLabel('beginAnimations')
        .fromTo(_.elements.wrapper, _.options.animDur, {width: _.position.width}, {
            width: _.win.W,
            ease: Linear.easeNone
            }, 'beginAnimations')
        .to(_.elements.wrapper, 0, {
            width: '100%'
            })
        .to(_.elements.slider, _.options.animDur, {
            height: _.options.sliderHeight,
            ease: _.options.easing,
            }, 'beginAnimations')
        .to(_.elements.info, _.options.animDur, {
            y: _.options.infoTop,
            ease: _.options.easing,
            }, 'beginAnimations')
        .add(function() {
            _.elements.box.addClass(_.options.class);
            _._initSlider();
            });
};

Box.prototype._toInitSize = function(animDur) {
    var _   = this,
        dur = $.isNumeric(animDur) ? animDur : _.options.animDur,
        tl  = new TimelineLite();


    tl
        .add(function() {
            _._destroySlider();
            _.elements.box.removeClass(_.options.class);
            _.elements.detail.slideUp(dur);
            })
        .addLabel('beginAnimations')
        .to(_.elements.slider, dur, {
            height: _.options.initSliderHeight,
            ease: _.options.easing,
            }, 'beginAnimations')
        .to(_.elements.info, dur, {
            y: 0,
            ease: _.options.easing,
            }, 'beginAnimations')
        .to(_.elements.wrapper, dur, {
            width: _.position.width,
            ease: _.options.easing,
            }, 'beginAnimations')
        // .to([_.elements.box, _.elements.wrapper, _.elements.info, _.elements.slider], 0, {
        //     clearProps: 'all'
        //     })
        .add(function() {
            _.opened = false;
            _.elements.wrapper.removeClass(_.options.wrapperClass);
            });
};



Box.prototype.open = function() {
    if ( this.opened ) return;

    var _ = this;

    if ( _.mode == 'slider' ) _._toFullSize();
    if ( _.mode == 'modal' ) _._toFullscreen();

    if ( app.openedObjects instanceof Array ) {
        app.openedObjects.push(_);
    }
};



Box.prototype.close = function(removeFromOpened) {
    if ( !this.opened ) return;

    var _        = this,
        func     = null,
        duration = null,
        dontAnimate,
        timeout,
        index;

    if ( removeFromOpened === false ) {
        timeout     = 0;
        dontAnimate = true;
        duration    = 0;
    } else {
        timeout     = _.slider.slick('slickGetOption', 'speed');
        dontAnimate = false;
        index       = app.openedObjects.indexOf(_);
        if ( index > -1 ) {
            app.openedObjects.splice(index, 1);
        }
    }

    if ( _.mode == 'slider' ) {
        func = function() {
            _._toInitSize(duration);
        };
    }
    else if ( _.mode == 'modal' ) {
        func = function() {
            _._toInitState();
        };
    }

    // if current slide of slider is not first
    if ( _.slider.slick('slickCurrentSlide') !== 0 ) {
        _.slider.slick('slickGoTo', 0, dontAnimate);
        setTimeout(function() {
            func();
        }, timeout );

    } else {
        func();
    }
};


module.exports = Box;
