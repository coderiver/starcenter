require('jquery');
require('slick-carousel');
require('../../../node_modules/gsap/src/uncompressed/TweenLite.js');
require('../../../node_modules/gsap/src/uncompressed/TimelineLite.js');
require('../../../node_modules/gsap/src/uncompressed/plugins/CSSPlugin.js');
require('../../../node_modules/gsap/src/uncompressed/plugins/ScrollToPlugin.js');

function Info() {
    this.element     = null;
    this.openButton  = null;
    this.closeButton = null;
    this.opened      = false;
    this.position    = null;
}


Info.prototype.options = {
    animDur: 1,
    class: 'is-fixed',
    zIndex: 110
};


Info.prototype.slickOptions = {
    accessibility: false,
    autoplay: false,
    draggable: false,
    prevArrow: $('.object-gallery__prev'),
    nextArrow: $('.object-gallery__next'),
    slide: '.object-gallery__prev',
    dots: true,
    swipe: false,
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


Info.prototype.init = function(element) {
    var _ = this;

    if ( element instanceof jQuery ) { _.element = element; }
    else { _.element = $(element); }

    _.openButton = _.element.find('.info .btn');

    _._initEvents();
};


Info.prototype._initEvents = function() {
    var _ = this;

    _.openButton.on('click', function(e) {
        e.stopPropagation();
        if ( !_.opened ) _.open();
        else _.close();
    });

    _.element.on('scroll mousewheel DOMMouseScroll', function(e) {
        e.stopPropagation();
    });

    $(window).on('resize', function() {
        $(_).trigger('winResized');
    });
};


Info.prototype._initSlider = function () {
    var _ = this;

    _.element.slick(_.slickOptions);
};


Info.prototype._getPosition = function() {
    var _       = this,
        wrapper = _.element.parent();

    var position = {
        top: wrapper.offset().top,
        left: wrapper.offset().left,
        width: wrapper.width(),
        height: wrapper.height()
    };

    _.position = position;

    return position;

};


Info.prototype.open = function() {
    var _   = this,
        pos = _._getPosition();

    _.opened = true;

    app.util.toggleScroll();

    $(_).on('winResized', _._getPosition);

    _.element
        .addClass(_.options.class)
        .css({
            top: pos.top,
            left: pos.left,
            width: pos.width,
            height: pos.height,
            position: 'fixed',
            zIndex: _.options.zIndex
        });

    TweenLite.to(_.element, _.options.animDur, {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        ease: Linear.easeNone
    });
};


Info.prototype.close = function() {
    var _ = this;

    $(_).off('winResized');

    _.element.removeClass(_.options.class);

    function complete() {
        _.element.css({
            top: '',
            left: '',
            width: '',
            height: '',
            position: '',
            zIndex: ''
        });

        _.opened = false;
        app.util.toggleScroll();
    }

    TweenLite.to(_.element, _.options.animDur, {
        top: _.position.top,
        left: _.position.left,
        width: _.position.width,
        height: _.position.height,
        ease: Linear.easeNone,
        onComplete: complete
    });
};


module.exports = Info;