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

    this.options = {
        animDur: 0.7,
        class: 'is-opened', // add to box when opened
        wrapperClass: 'is-animate', // add to wrapper when start transforming to fullscren mode
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
        slide: '.object__slider',
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



Box.prototype.init = function(box) {
    var _ = this;

    if ( box instanceof jQuery ) { _.elements.box = box; }
    else { _.elements.box = $(box); }

    _.wrapper        = _.elements.box.parent();
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

    _._initEvents();

    return this;
};



Box.prototype._initEvents = function() {
    var _ = this;

    _.elements.openButton.on('click', function(e) {
        _.open();
    });

    _.elements.closeButton.on('click', function(e) {
        _.close();
    });

    _.elements.box.on('scroll mousewheel DOMMouseScroll', function(e) {
        e.stopPropagation();
    });

    $(window).on('resize', function() {
        $(_).trigger('winResized');
        _._updateOnResize();
    });
};



Box.prototype._initSlider = function () {
    var _ = this;

    _.elements.slider.on('init', function(e, slick) {
        // transform 1,2,3 to 01,02,03
        button = slick.$dots.find('button');
        $.each(button, function(index, el) {
            var number = $(el).text();
            $(el).text(app.util.transformNumber(number));
        });
    });

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

    _.position.top    =  _.wrapper.offset().top;
    _.position.left   =  _.wrapper.offset().left;
    _.position.width  =  _.wrapper.width();
    _.position.height =  _.wrapper.height();
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

            _.wrapper.addClass(_.options.wrapperClass);

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



Box.prototype._toInitState = function(callback) {
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

            _.wrapper.removeClass(_.options.wrapperClass);
            // app.util.toggleScroll();
            app.navbar.visible();
            });
};



Box.prototype.open = function() {
    if ( this.opened ) return;

    var _ = this;

    _._toFullscreen();
};




Box.prototype.close = function() {
    if ( !this.opened ) return;

    var _ = this;

    // if current slide of slider is not first
    if ( _.slider.slick('slickCurrentSlide') !== 0 ) {
        _.slider.slick('slickGoTo', 0);
        setTimeout(function() {
            _._toInitState();
        }, _.slider.slick('slickGetOption', 'speed') || _.slickOptions.speed );

    } else {
        _._toInitState();
    }
};


module.exports = Box;