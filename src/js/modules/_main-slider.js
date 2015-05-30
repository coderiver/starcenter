require('jquery');
require('slick-carousel');
require('gsap');
require('../../../node_modules/gsap/src/uncompressed/TimelineLite.js');

function MainSlider(wrapper) {

    this.wrapper  = $(wrapper);
    this.slider   = this.wrapper.find('.main-slider__slides');
    this.pagiBtns = this.wrapper.find('.main-slider__paginator').find('button');
    this.circle   = this.wrapper.find('.main-slider__morph');
    this.overlay  = this.wrapper.find('.main-slider__overlay');
    this.currentSlide = 0;
    this.hiddenClass = 'is-hidden';
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
    this.circleFade = 0.2; // seconds, duration for circle fade animation in
    this.easing = Power1.easeNone;

}



MainSlider.prototype.init = function() {
    var _ = this;
    _.slider.on('init', function() {
        _.pagination();
    });

    _.slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        _.currentSlide = nextSlide;
        _.updatePagiBtns();
    });

    _.slider.slick(_.slickOptions);
};



MainSlider.prototype.toSlide = function(slideIndex) {
    var _ = this;
    _.slider.slick('slickGoTo', slideIndex);
};



MainSlider.prototype.pagination = function() {
    var _ = this;
    _.pagiBtns.on('click', function(event) {
        event.preventDefault();
        var index = $(this).index();
        _.toSlide(index);
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



MainSlider.prototype.rollUp = function(duration, delay) {
    var _    = this,
        dur  = duration / 1000 || _.animDur,
        del  = delay / 1000 || 0,
        tl   = new TimelineLite();

    tl
        .delay(del)
        .add(function() {
            _.pause();
            _.overlay.show();
            _.wrapper.addClass(_.hiddenClass);
        })
        .fromTo(_.circle, _.circleFade, {autoAlpha: 1}, {autoAlpha: 0, ease: _.easing})
        .addLabel('circleFade')
        .fromTo(_.overlay, dur, {y: '100%'}, {y: '0%', ease: _.easing}, 'circleFade')
        .to(_.slider, dur, {scale: 0.8, autoAlpha: 0, ease: _.easing}, 'circleFade');
};



MainSlider.prototype.rollDown = function(duration, delay) {
    var _    = this,
        dur  = duration / 1000 || _.animDur,
        del  = delay / 1000 || 0,
        tl   = new TimelineLite();

    tl
        .delay(del)
        .addLabel('start')
        .to(_.overlay, dur, {y: '100%', clearProps: 'all', ease: _.easing}, 'start')
        .to(_.slider, dur, {scale: 1, autoAlpha: 1, clearProps: 'all', ease: _.easing}, 'start')
        .to(_.circle, _.circleFade, {autoAlpha: 1, clearProps: 'all', ease: _.easing})
        .add(function() {
            _.wrapper.removeClass(_.hiddenClass);
            _.overlay.hide();
            _.play();
        });

};



module.exports = MainSlider;

