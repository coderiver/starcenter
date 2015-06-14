// require('pace').start();
var $ = require('jquery');
require('sammy');
require('jquery-mousewheel')($);
// require('nanoscroller');
require('modernizr');
require('gsap');
require('gsap-scrollToPlugin');
require('TimelineLite');
var ScrollMagic = require('scrollmagic');
var Slider  = require('./modules/_main-slider.js');
var Category = require('./modules/_category.js');
var Morph = require('./modules/_canvas.js');
var Modal = require('./modules/_modal.js');
var Tabs = require('./modules/_tabs.js');
var Box = require('./modules/_box.js');
var Navbar = require('./modules/_navbar.js');
var initScenes = require('./modules/_scroll-scenes.js');


global.app = {};
app.router = require('./modules/_routing.js');
app.scrollDisabled = false;
app.openedPopup = null;
app.toparea  = {};
// app.objects  = {};
app.catalog  = {};
app.catalog2 = {};
// app.initMap = require('./modules/_map.js');

app.util = {
    toCamelCase: function(str) {
        return str.replace(/^([A-Z])|[\s-_](\w)/g, function(match, p1, p2, offset) {
                if (p2) return p2.toUpperCase();
                return p1.toLowerCase();
            });
    },

    prevent: function(event) {
        // console.log(event);
        event.preventDefault();
    },

    toggleScroll: function() {
        if ( !app.scrollDisabled ) {
            app.rootContainer.on('mousewheel DOMMouseScroll', event, app.util.prevent);
            app.scrollDisabled = true;
        } else {
            app.rootContainer.off('mousewheel DOMMouseScroll', app.util.prevent);
            app.scrollDisabled = false;
        }
    },

    // transform 1, 2, 3 => 01, 02, 03
    transformNumber: function(number) {
        if ( number.toString().length > 1 ) return number;
        return (parseInt(number, 10) + 100).toString().substr(1);
    },

    getScrollBarWidth: function() {
        var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
            widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
        $outer.remove();
        return 100 - widthWithScroll;
    },

    getPlatform: function() {
        var setBodyClass = function(className) {
            $('html').addClass(className);
        };

        if ( navigator.appVersion.indexOf("Win") != -1 ) {
            setBodyClass('windows-os');
        }
        else if ( navigator.appVersion.indexOf("Mac") != -1 ) {
            setBodyClass('mac-os');
        }
        else if ( navigator.appVersion.indexOf("X11") != -1 ) {
            setBodyClass('unix-os');
        }
        else if ( navigator.appVersion.indexOf("Linux") != -1 ) {
            setBodyClass('linux-os');
        }
    },

    openPopup: function(popupId) {
        app.openedPopup = popupId;
        $(app.openedPopup).addClass('is-opened');
        app.navbar.hidden();
        app.mainSlider.pause();
    },

    closePopup: function(popupId) {
        $(app.openedPopup).removeClass('is-opened');
        app.navbar.visible();
        app.mainSlider.play();
        app.openedPopup = null;
    }
};

app.init = function() {

    app.mainSlider   = new Slider('#main-slider');
    app.category     = new Category('.catalog-category', '.catalog-category__item');
    app.category2    = new Category('.category', '.category__item');
    app.morph        = new Morph('#morph');
    app.morph2       = new Morph('#morph2');
    app.modal        = new Modal('#catalog', '.catalog__content');
    app.modal2       = new Modal('#catalog2', '.capabilities-modal__content');
    // app.tabs         = new Tabs('#forms', '.btn_tab', '.tabs__content');
    app.rootContainer= $('#outer');
    app.scrollmagic  = initScenes();
    app.navbar       = new Navbar();

    app.mainSlider.init();
    app.mainSlider.pause();
    app.morph.init();
    // app.tabs.init();
    app.initBoxes();
    app.initTabs();
    app.initPopupEvents();
    app.initPopupSlider();
    app.navbar.init();
    app.navbar.hidden();
    app.category.toggleHidden();
    app.category2.initSlider(1);
    app.morph2.init().initStandby('square');

    Pace.on('done', function() {
        app.category.toggleHidden(null, 1000);
        app.navbar.visible(null, 1000);
        setTimeout(function() {
            $('body').removeClass('preload');
            app.mainSlider.play();
        }, 2000);
    });

};

app.initBoxes = function() {
    $.each($('.js-box'), function(index, el) {
        // var id = el.id ? app.util.toCamelCase(el.id) : 'object' + index;
        // app.objects[ id ] = new Box().init(el);
        new Box().init(el);
    });
};

app.initTabs = function() {
    $.each($('.tabs'), function(index, el) {
        new Tabs(el).init();
    });
};

app.initPopupEvents = function() {
    $('[data-open-popup]').each(function(index, el) {
        var $this = $(this);

        $this.on('click', function(e) {
            e.preventDefault();

            var popupId = $this.data('open-popup');

            app.util.openPopup(popupId);
        });
    });

    $('.popup .object__close').on('click', function() {
        app.util.closePopup();
    });
};

app.initPopupSlider = function() {
    $('.popup .object__slider').each(function(index, el) {

        var slider =  $(el);

        slider.on('init', function(e, slick) {
            // transform 1,2,3 to 01,02,03
            var button = slick.$dots.find('button');
            $.each(button, function(index, el) {
                var number = $(el).text();
                $(el).text(app.util.transformNumber(number));
            });
        });

        slider.slick({
            accessibility: false,
            autoplay: false,
            draggable: false,
            slide: '.object__slide',
            prevArrow: slider.parent().find('.object__slider-prev'),
            nextArrow: slider.parent().find('.object__slider-next'),
            dots: true,
            swipe: false,
            respondTo: 'slider',
            arrows: true,
            speed: 500
        });

    });
};








//------------------------------------------------------------------------------
//
//    #catalog
//
//------------------------------------------------------------------------------

app.catalog.opened = false;

app.catalog.open = function(morphState, contentIndex) {
    if ( app.catalog.opened ) return;
    app.modal.open(contentIndex);
    app.mainSlider.rollUp();
    app.category.open();
    app.morph.activate(morphState);
    app.navbar.hidden();
    // app.util.toggleScroll();
    app.catalog.opened = true;
};

app.catalog.close = function() {
    if ( !app.catalog.opened ) return;
    app.modal.close();
    app.mainSlider.rollDown();
    app.morph.deactivate();
    app.category.close();
    app.navbar.visible(null, 800);
    // app.util.toggleScroll();
    app.catalog.opened = false;
};



app.catalog2.opened = false;

app.catalog2.open = function(btn) {

    var state = btn.data('morph-state'),
        contentIndex = btn.data('content-index');
        centerSlide = btn.parents('.slick-center');
        timeout = centerSlide.length ? 0 : app.category2.slickOptions.speed; // speed of changes slides

    if ( !app.catalog2.opened ) {
        // if clicked not center button
        if ( !centerSlide.length ) {
            app.morph2.initStandby(state);

            btn.addClass('is-hover');

            setTimeout(function() {
                btn.removeClass('is-hover');
            }, app.category2.slickOptions.speed);
        }

        setTimeout(function() {
            app.category2.activate();
            app.morph2.fromStandby();
            app.modal2.open(contentIndex);
            app.navbar.hidden();
            app.catalog2.opened = true;
        }, timeout);
    }

    else {
        setTimeout(function() {
            app.morph2.changeState(state, app.category2.direction);
            app.modal2.switchContent(contentIndex);
        }, 0);
    }
};

app.catalog2.close = function() {
    if ( !app.catalog2.opened ) return;

    app.morph2.toStandby();
    app.modal2.close();

    setTimeout(function () {
        app.category2.deactivate();
        app.catalog2.opened = false;
        app.navbar.visible(null, 800);
    }, 700);
};







//------------------------------------------------------------------------------
//
//    #toparea
//
//------------------------------------------------------------------------------

app.toparea.transformed = false;
app.toparea.inProgress = false;

app.toparea.transform = function() {
    if ( app.toparea.inProgress ) return;
    app.mainSlider.rollUp();
    app.morph.moveDown();
    app.toparea.transformed = true;
};

app.toparea.transformBack = function() {
    if ( app.toparea.inProgress ) return;
    app.mainSlider.rollDown();
    app.morph.moveBack();
    app.toparea.transformed = false;
};

app.toparea.toggle = function() {
    if ( !app.toparea.transformed ) app.toparea.transform();
    else app.toparea.transformBack();
    app.category.toggleHidden();
};





//------------------------------------------------------------------------------
//
//    #events
//
//------------------------------------------------------------------------------

app.initEvents = function() {

    $('.catalog-btn').on('click', function(e) {
        var state = $(this).data('morph-state'),
            contentIndex = $(this).data('content-index');

        if ( !app.catalog.opened ) {
            app.catalog.open(state, contentIndex);
        }
        else {
            setTimeout(function() {
                app.morph.changeState(state, app.category.direction);
                app.modal.switchContent(contentIndex);
            }, 0);
        }
    });


    $('#header .logo').on('click', function(e) {
        if ( app.openedPopup ) app.util.closePopup();
        app.catalog.close();
        app.catalog2.close();
    });

    $('.category .btn_category').on('click', function(e) {
        app.catalog2.open($(this));
    });
};





//------------------------------------------------------------------------------
//
//    #app inin and common
//
//------------------------------------------------------------------------------
$(document).ready(function() {

app.util.getPlatform();
app.init();
app.initEvents();

var scrollbarWidth = app.util.getScrollBarWidth();
console.log('Scroll bar width: ' + scrollbarWidth + 'px');

app.router.run('#/');


// $(function(){

//     var $window = $('#outer');
//     var scrollTime = 1;
//     var scrollDistance = 170;

//     $window.on("mousewheel DOMMouseScroll", function(event){
//         event.preventDefault();
//         var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
//         var scrollTop = $window.scrollTop();
//         var finalScroll = scrollTop - parseInt(delta*scrollDistance);

//         TweenMax.to($window, scrollTime, {
//             scrollTo : { y: finalScroll, autoKill:true },
//                 ease: Power1.easeOut,
//                 overwrite: 5
//             });

//     });
// });

// $('#outer').on('mousewheel DOMMouseScroll', function(event) {
//     console.log('deltaY: ' + event.originalEvent.deltaY);
// });


// $('.nano').nanoScroller();


// app.rootContainer.on('mousewheel', function(e) {
    // console.log(e);
    // console.log(e.deltaY, e.deltaFactor);
// });

});