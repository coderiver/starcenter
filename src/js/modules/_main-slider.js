require('jquery');
require('slick-carousel');
require('../../../node_modules/gsap/src/uncompressed/TweenLite.js');
require('../../../node_modules/gsap/src/uncompressed/TimelineLite.js');
require('../../../node_modules/gsap/src/uncompressed/plugins/CSSPlugin.js');

function MainSlider(wrapper) {

        this.wrapper  = $(wrapper);
        this.slider   = this.wrapper.find('.main-slider__slides');
        this.pagiBtns = this.wrapper.find('.main-slider__paginator').find('button');
        this.circle   = this.wrapper.find('.main-slider__morph');
        this.overlay  = this.wrapper.find('.main-slider__overlay');
        this.currentSlide = 0;
        this.slickOptions = {
            accessibility: false,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            draggable: false,
            slide: '.slide',
            speed: 700,
            swipe: false,
            fade: true,
            useCSS: true,
            pauseOnHover: true
        };
        this.animDur = 0.8;
        this.animDelay = 300;
        this.easing = Power1.easeNone;

    }

MainSlider.prototype.init = function() {
    var that = this;
    that.slider.on('init', function() {
        that.pagination();
    });

    that.slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        that.currentSlide = nextSlide;
        that.updatePagiBtns();
    });

    that.slider.slick(that.slickOptions);
};

MainSlider.prototype.toSlide = function(slideIndex) {
    var that = this;
    that.slider.slick('slickGoTo', slideIndex);
};

MainSlider.prototype.pagination = function() {
    var that = this;
    that.pagiBtns.on('click', function(event) {
        event.preventDefault();
        var index = $(this).index();
        that.toSlide(index);
    });
};

MainSlider.prototype.play = function() {
    this.slider.slick('slickPlay');
};

MainSlider.prototype.updatePagiBtns = function(slideIndex) {
    var index = slideIndex || this.currentSlide;
    $(this.pagiBtns).removeClass('is-active');
    $(this.pagiBtns[index]).addClass('is-active');
};

MainSlider.prototype.pause = function() {
    this.slider.slick('slickPause');
};

MainSlider.prototype.makeHidden = function() {
    var that = this;
    that.pause();
    setTimeout(function() {
        that.wrapper.addClass('is-hidden');
    }, that.animDelay);
};

MainSlider.prototype.makeVisible = function() {
    var that = this;
    that.wrapper.removeClass('is-hidden');
    setTimeout(function() {
        that.play();
    }, that.animDur);
};

MainSlider.prototype.rollUp = function(duration) {
    var that = this,
        dur  = duration/1000 || that.animDur,
        tl   = new TimelineLite();

    tl.eventCallback('onStart', function() {
        that.overlay.show();
        that.pause();
    });

    tl
        .fromTo(that.overlay, dur, {y: '100%'}, {y: '0%', ease: that.easing})
        .to(that.slider, dur, {scale: 0.8, opacity: 0, ease: that.easing}, 0)
        .to(that.circle, 0.2, {opacity: 0, ease: that.easing}, 0);
};

MainSlider.prototype.rollDown = function(duration) {
    var that = this,
        dur  = duration/1000 || that.animDur,
        tl   = new TimelineLite();

    tl.eventCallback('onComplete', function() {
        that.overlay.hide();
        that.play();
    });

    tl
        .to(that.overlay, dur, {y: '100%', ease: that.easing})
        .to(that.slider, dur, {scale: 1, opacity: 1,  ease: that.easing}, 0)
        .to(that.circle, 0.2, {opacity: 1, ease: that.easing}, '+=0.1');

};

module.exports = MainSlider;

