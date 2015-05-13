require('jquery');
require('slick-carousel');

function MainSlider(wrapper, slider, paginator) {

        this.wrapper  = $(wrapper);
        this.slider   = this.wrapper.find(slider);
        this.pagiBtns = this.wrapper.find(paginator).find('button');
        this.currentSlide = 0;
        this.slickOptions = {
            accessibility: false,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            draggable: false,
            slide: '.slide',
            speed: 300,
            swipe: false,
            fade: true,
            useCSS: true,
            pauseOnHover: true
        };
        this.animDur = 500;
        this.animDelay = 300;

    }

MainSlider.prototype.init = function() {
    var that = this;
    that.slider.on('init', function() {
        console.log('slick is ready');
        that.pagination();
    });

    that.slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        that.currentSlide = nextSlide;
        that.updatePagiBtns();
    });

    that.slider.slick(that.slickOptions);
    // that.slickSlider = that.slider.slick('getSlick');
    // console.log(that.slickSlider.__proto__);
};

MainSlider.prototype.toSlide = function(slideIndex) {
    var that = this;
    that.slider.slick('slickGoTo', slideIndex);
    // that.currentSlide = slideIndex;
};

MainSlider.prototype.pagination = function() {
    var that = this;
    that.pagiBtns.on('click', function(event) {
        event.preventDefault();
        var index = $(this).index();
        that.toSlide(index);
        // that.updatePagiBtns(index);
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
    // setTimeout(function() {
    //     that.wrapper.css('display', 'none');
    // }, 800);
};

MainSlider.prototype.makeVisible = function() {
    var that = this;
    // that.wrapper.css('display', '');
    that.wrapper.removeClass('is-hidden');
    // setTimeout(function() {
        // that.wrapper.removeClass('is-init');
    // }, that.animDelay);
    setTimeout(function() {
        that.play();
    }, that.animDur);
};

module.exports = MainSlider;

