require('jquery');

var info = {
    slickOptions : {
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
    }
};


info._initSlider = function (element) {
    var _ = this;
    console.log(element);
    $(element).slick(_.slickOptions);
}.bind(info);

module.exports = info;