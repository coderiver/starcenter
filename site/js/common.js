head.ready(function() {

    var mainSlider = $('.main-slider');

    // mainSlider.each(function(index, el) {
    //     var that      = $(this);
    //     var slides    = that.find('.main-slider__slides'),
    //         paginator = that.find('.main-slider__paginator');

    //         paginator.find('button').on('click', function(event) {
    //             event.preventDefault();
    //             var slideIndex = $(this).index();
    //             console.log(slideIndex);
    //             slides.slick('slickGoTo', slideIndex);
    //         });

    //     slides.slick({
    //         accessibility: false,
    //         autoplay: true,
    //         autoplaySpeed: 5000,
    //         arrows: false,
    //         draggable: true,
    //         slide: '.slide',
    //         // fade: true,
    //         speed: 0,
    //         // useCSS: false,
    //         swipe: false
    //     });
    // });


    console.log('Hello from the Hell');

    // this constructor use slick => http://kenwheeler.github.io/slick/
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
            draggable: true,
            slide: '.slide',
            speed: 0,
            swipe: false,
            // fade: true,
            useCSS: false,
        };

    }

    MainSlider.prototype.init = function() {
        var that = this;
        that.slider.on('init', function() {
            console.log('slick is ready');
            that.pagination();
        });
        that.slider.slick(that.slickOptions);
    };

    MainSlider.prototype.toSlide = function(slideIndex) {
        var that = this;
        that.slider.slick('slickGoTo', slideIndex);
        that.currentSlide = slideIndex;
        console.log(that.currentSlide);
    };

    MainSlider.prototype.pagination = function() {
        var that = this;
        // that.currentSlide = that.slider.slick('slickCurrentSlide');
        that.pagiBtns.on('click', function(event) {
            event.preventDefault();
            var index = $(this).index();
            $(that.pagiBtns[that.currentSlide]).removeClass('is-active');
            $(this).addClass('is-active');
            that.toSlide(index);
        });
    };

    var sliderOne = new MainSlider('#slider1', '.main-slider__slides', '.main-slider__paginator');

    sliderOne.init();

    console.log(sliderOne);

});