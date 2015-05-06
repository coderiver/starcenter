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

    MainSlider.prototype.play = function() {
        // var that  = this;
        // that.autoplayInterval = setInterval(function() {
        //     that.slider.slick('slickNext');
        //     // that.currentSlide = that.slider.slick('slickCurrentSlide');
        //     // that.updatePagiBtns(that.currentSlide);
        //     console.log(that.currentSlide);
        // }, 5000);
        this.slider.slick('slickPlay');
    };

    MainSlider.prototype.updatePagiBtns = function(slideIndex) {
        var that = this;
        var index = slideIndex || that.currentSlide;
        $(that.pagiBtns).removeClass('is-active');
        $(that.pagiBtns[index]).addClass('is-active');
    };

    MainSlider.prototype.pause = function() {
        // var that = this;
        // clearInterval(that.autoplayInterval);
        this.slider.slick('slickPause');
    };

    MainSlider.prototype.makeHidden = function() {
        var that = this;
        that.pause();
        that.wrapper.addClass('is-animate');
        setTimeout(function() {
            that.wrapper.css('display', 'none');
        }, 500);
    };

    MainSlider.prototype.makeVisible = function() {
        var that = this;
        that.wrapper.css('display', '');
        setTimeout(function() {
            that.wrapper.removeClass('is-animate');
        }, 20);
        setTimeout(function() {
            that.play();
        }, 700);
    };

    var slider1 = new MainSlider('#slider1', '.main-slider__slides', '.main-slider__paginator');
    var slider2 = new MainSlider('#slider2', '.main-slider__slides', '.main-slider__paginator');

    slider1.init();
    slider2.init();


    $('.catalog__btns .btn').on('click', function(event) {
        event.preventDefault();
        if ( $(this).index() === 0 ) {
            slider1.makeHidden();
            catalog.open();
        } else {
            catalog.close();
            slider1.makeVisible();
        }
    });

    var catalog = {
        el: $('.catalog'),
        initClass: 'is-init',
        animClass: 'is-animate',
        doneClass: 'is-done',

        open: function() {
            var that = this;
            that.el.addClass(that.initClass);
            setTimeout(function() {
                that.el.addClass(that.animClass);
            }, 20);
            setTimeout(function() {
                that.el.addClass(that.doneClass);
                morph.toSquare();
            }, 200);
            that.setHeight();
            // this.el.nanoScroller();
        },
        close: function() {
            var that = this;
            that.el.removeClass(that.doneClass);
            morph.toCircle();
            setTimeout(function() {
                that.el.removeClass(that.animClass);
            }, 500);
            setTimeout(function() {
                that.el.removeClass(that.initClass);
                that.el.css('height', '');
                // that.el.nanoScroller({destroy: true});
            }, 700);
        },
        setHeight: function() {
            this.el.height(win.height());
        }
    };

    // $('.nano').nanoScroller({
    //     // paneClass: 'myclass',
    //     // sliderMinHeight: 40,
    //     // sliderMaxHeight: 200,
    //     // preventPageScrolling: true,
    //     // disableResize: true,
    //     // alwaysVisible: true,
    //     // flashDelay: 1000,
    //     // paneClass: 'scrollPane',
    //     // sliderClass: 'scrollSlider',
    //     // contentClass: 'sliderContent',
    //     // tabIndex: 0
    // });

    (function() {
        var setBodyClass = function(className) {
            $('html').addClass(className);
        };

        if ( navigator.appVersion.indexOf("Win") != -1 ) {
            setBodyClass('windows-os');
        }
        else if ( navigator.appVersion.indexOf("Mac") != -1 ) {
            setBodyClass('mac-os');
        }
        // else if ( navigator.appVersion.indexOf("X11") != -1 ) {
        //     setBodyClass('unix-os');
        // }
        // else if ( navigator.appVersion.indexOf("Linux") != -1 ) {
        //     setBodyClass('linux-os');
        // }

    })();

    var morph = {
        selector : '.morphFigure',
        elements: [],

        init: function() {
            var that = this;
            $(that.selector).each(function(index, el) {
                that.elements.push(el);
            });

            console.log(that.elements);

            $(that.elements).each(function(index, el) {
                $(el).bind('morphSquare', function(event) {
                    // event.preventDefault();
                    console.log('Event fired: ' + event.type);
                    el.children[0].beginElement();
                    el.children[1].beginElement();
                    el.children[2].beginElement();
                    el.children[3].beginElement();
                });
                $(el).bind('morphCircle', function(event) {
                    // event.preventDefault();
                    console.log('Event fired: ' + event.type);
                    el.children[4].beginElement();
                    el.children[5].beginElement();
                    el.children[6].beginElement();
                    el.children[7].beginElement();
                });
            });
        },
        toSquare: function() {
            $(this.elements).each(function(index, el) {
                $(el).trigger('morphSquare');
            });
        },
        toCircle: function() {
            $(this.elements).each(function(index, el) {
                $(el).trigger('morphCircle');
            });
        },
    };

    morph.init();


});