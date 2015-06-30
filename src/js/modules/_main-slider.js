require('jquery');
require('slick-carousel');
require('gsap');
require('TimelineLite');

function MainSlider(wrapper) {

    this.wrapper  = $(wrapper);
    this.slider   = this.wrapper.find('.main-slider__slides');
    this.pagiBtns = this.wrapper.find('.main-slider__paginator').find('button');
    this.circle   = this.wrapper.find('.main-slider__morph');
    this.overlay  = this.wrapper.find('.main-slider__overlay');
    // this.currentSlide = 0;
    this.hiddenClass = 'is-hidden';
    this.slickOptions = {
        accessibility: false,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        draggable: false,
        slide: '.slide',
        dots: true,
        speed: 700,
        swipe: false,
        fade: true,
        useCSS: true,
        pauseOnHover: false
    };
    this.animDur = 800;
    this.circleFade = 200; // seconds, duration for circle fade animation in
    this.easing = Linear.easeNone;

}



MainSlider.prototype.init = function() {
    var _ = this;
    _.slider.on('init', function(e, slick) {
        // _.pagination();
        // transform 1,2,3 to 01,02,03
        button = slick.$dots.find('button');
        $.each(button, function(index, el) {
            var number = $(el).text();
            $(el).text(app.util.transformNumber(number));
        });
    });

    // _.slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        // _.currentSlide = nextSlide;
        // _.updatePagiBtns();
    // });

    _.slider.slick(_.slickOptions);
};



// MainSlider.prototype.toSlide = function(slideIndex) {
//     var _ = this;
//     _.slider.slick('slickGoTo', slideIndex);
// };



// MainSlider.prototype.pagination = function() {
//     var _ = this;
//     _.pagiBtns.on('click', function(event) {
//         event.preventDefault();
//         var index = $(this).index();
//         _.toSlide(index);
//     });
// };



MainSlider.prototype.play = function() {
    this.slider.slick('slickPlay');
};



MainSlider.prototype.pause = function() {
    this.slider.slick('slickPause');
};



// MainSlider.prototype.updatePagiBtns = function(slideIndex) {
//     var index = slideIndex || this.currentSlide;
//     $(this.pagiBtns).removeClass('is-active');
//     $(this.pagiBtns[index]).addClass('is-active');
// };



MainSlider.prototype.rollUp = function(duration, delay) {
    var _    = this,
        dur  = duration / 1000 || _.animDur / 1000,
        del  = delay / 1000 || _.circleFade / 1000,
        tl   = new TimelineLite();

    tl
        .add(function() {
            _.pause();
            _.overlay.show();
            _.wrapper.addClass(_.hiddenClass);
        })
        .to(_.circle, 0, {autoAlpha: 0, ease: _.easing, delay: del})
        .addLabel('circleFade')
        .fromTo(_.overlay, dur, {y: '100%'}, {y: '0%', ease: _.easing}, 'circleFade')
        .to(_.slider, dur, {scale: 0.8, autoAlpha: 0, ease: _.easing}, 'circleFade');
};



MainSlider.prototype.rollDown = function(duration) {
    var _    = this,
        dur  = duration / 1000 || _.animDur / 1000,
        tl   = new TimelineLite();

    tl
        .addLabel('start')
        .to(_.overlay, dur, {y: '100%', clearProps: 'all', ease: _.easing}, 'start')
        .to(_.slider, dur, {scale: 1, autoAlpha: 1, clearProps: 'all', ease: _.easing}, 'start')
        .to(_.circle, 0, {autoAlpha: 1, clearProps: 'all', ease: _.easing})
        .add(function() {
            _.wrapper.removeClass(_.hiddenClass);
            _.overlay.hide();
            _.play();
        });
};



module.exports = MainSlider;

