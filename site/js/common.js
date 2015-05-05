head.ready(function() {

    var win = $(window);

    // fullpage
    // $('#fullpage').fullpage({
    //      //Navigation
    //     menu: false,
    //     anchors:[],
    //     navigation: false,
    //     navigationPosition: 'right',
    //     navigationTooltips: ['firstSlide', 'secondSlide'],
    //     showActiveTooltips: false,
    //     slidesNavigation: true,
    //     slidesNavPosition: 'bottom',

    //     //Scrolling
    //     css3: true,
    //     scrollingSpeed: 700,
    //     autoScrolling: true,
    //     fitToSection: false,
    //     scrollBar: false,
    //     easing: 'easeInOutCubic',
    //     easingcss3: 'ease',
    //     loopBottom: false,
    //     loopTop: false,
    //     loopHorizontal: true,
    //     continuousVertical: false,
    //     normalScrollElements: '#element1, .element2',
    //     scrollOverflow: false,
    //     touchSensitivity: 15,
    //     normalScrollElementTouchThreshold: 5,

    //     //Accessibility
    //     keyboardScrolling: true,
    //     animateAnchor: true,
    //     recordHistory: true,

    //     //Design
    //     controlArrows: true,
    //     verticalCentered: true,
    //     resize : false,
    //     sectionsColor : 'none',
    //     paddingTop: '3em',
    //     paddingBottom: '10px',
    //     fixedElements: '#header, .footer',
    //     responsive: 0,

    //     //Custom selectors
    //     sectionSelector: '.section',
    //     slideSelector: '.fp-slide',

    //     //events
    //     onLeave: function(index, nextIndex, direction){},
    //     afterLoad: function(anchorLink, index){},
    //     afterRender: function(){},
    //     afterResize: function(){},
    //     afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
    //     onSlideLeave: function(anchorLink, index, slideIndex, direction){}
    // });


    // main slider
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
            draggable: false,
            slide: '.slide',
            speed: 300,
            swipe: false,
            fade: true,
            useCSS: true,
            pauseOnHover: true
        };

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

    MainSlider.prototype.autoplay = function() {
        var that  = this;
        that.autoplayInterval = setInterval(function() {
            that.slider.slick('slickNext');
            // that.currentSlide = that.slider.slick('slickCurrentSlide');
            // that.updatePagiBtns(that.currentSlide);
            console.log(that.currentSlide);
        }, 5000);
    };

    MainSlider.prototype.updatePagiBtns = function(slideIndex) {
        var that = this;
        var index = slideIndex || that.currentSlide;
        $(that.pagiBtns).removeClass('is-active');
        $(that.pagiBtns[index]).addClass('is-active');
    };

    MainSlider.prototype.stopAutoplay = function() {
        var that = this;
        clearInterval(that.autoplayInterval);
    };

    var slider1 = new MainSlider('#slider1', '.main-slider__slides', '.main-slider__paginator');
    var slider2 = new MainSlider('#slider2', '.main-slider__slides', '.main-slider__paginator');

    slider1.init();
    slider2.init();

    console.log(slider1, slider2);


    $('.catalog__btns .btn').on('click', function(event) {
        event.preventDefault();
        if ( $(this).index() === 0 ) catalog.open();
        else catalog.close();
    });

    var catalog = {
        el: $('.catalog'),
        activeClass: 'is-active',
        animClass: 'is-animate',

        open: function() {
            this.el
                .addClass(this.activeClass)
                .addClass(this.animClass);
            this.setHeight();
        },
        close: function() {
            var that = this;
            that.el.removeClass(that.animClass);
            setTimeout(function() {
                that.el.removeClass(that.activeClass);
                that.el.css('height', '');
            }, 300);
        },
        setHeight: function() {
            this.el.height(win.height());
        }
    };


});