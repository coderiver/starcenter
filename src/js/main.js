require('jquery');
require('modernizr');
require('../../node_modules/gsap/src/uncompressed/TweenLite.js');
require('../../node_modules/gsap/src/uncompressed/TimelineLite.js');
require('../../node_modules/gsap/src/uncompressed/plugins/CSSPlugin.js');
require('../../node_modules/gsap/src/uncompressed/plugins/ScrollToPlugin.js');
var ScrollMagic = require('scrollmagic');
require('../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js');
var Slider  = require('./modules/_main-slider.js');
var Morph   = require('./modules/_canvas.js');
var Catalog = require('./modules/_catalog.js');
var Category = require('./modules/_category.js');
var Tabs = require('./modules/_tabs.js');
var router = require('./modules/_routing.js');
var infoObj = require('./modules/_info.js');
var initAnimations = require('./modules/_animations.js');


var app = {};

$(document).ready(function() {

    router.run();

    app.slider   = new Slider('#slider1', '.main-slider__slides', '.main-slider__paginator');
    app.morph    = new Morph('#morph');
    app.catalog  = new Catalog('.catalog');
    app.category = new Category('.catalog-category', '.catalog-category__item');
    app.tabs     = new Tabs('.tabs', '.btn_tab', '.tabs__content');
    app.info     = infoObj;
    app.scrollmagic = initAnimations();

    app.openCatalog = function(state) {
        app.catalog.open();
        app.slider.makeHidden();
        app.category.enable();
        setTimeout(function() { app.morph.activate(state); }, 300 );
    };

    app.closeCatalog = function() {
        app.catalog.close();
        app.slider.makeVisible();
        app.morph.deactivate();
        app.category.disable();
    };


    // init
    app.slider.init();
    app.morph.init();
    app.tabs.init();

    // app.info._initSlider('.object-gallery__slider');

    app.scrollmagic.tabs.scene.on('start', function(e) {
        if ( app.tabs.activeTab !== null ) app.tabs.hideContent();
    });




    console.log(app);



    $('.catalog-btn').on('click', function(event) {
        var state = $(this).data('morph-state');
        if ( !app.morph.state.active ) {
            app.openCatalog(state);
        } else {
            app.morph.changeState(state);
        }
    });

    $('#header .logo').on('click', function(event) {
        app.closeCatalog();
    });





    /* ############################################################################# *\
    #
    #  Common
    #
    \* ############################################################################ */

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

    function getScrollBarWidth() {
        var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
            widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
        $outer.remove();
        return 100 - widthWithScroll;
    }

    var width = getScrollBarWidth();
    console.log('Scroll bar width: ' + width + 'px');

    // $('.men-table').on('click', function() {
    //     $(this).find('.table__border').toggleClass('is-animate');
    // });
    // $('.partners-table').on('click', function() {
    //     $(this).find('.table__border').toggleClass('is-animate');
    // });
    // $('.contacts-table').on('click', function() {
    //     $(this).find('.table__border').toggleClass('is-animate');
    // });
    // $('.skyline').on('click', function() {
    //     $(this).toggleClass('is-animate');
    // });

    // $(function(){

    //     var $window = $('#outer');
    //     var scrollTime = 1;
    //     var scrollDistance = 170;

    //     $window.on("mousewheel DOMMouseScroll", function(event){
    //         event.preventDefault();
    //         var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
    //         var scrollTop = $window.scrollTop();
    //         var finalScroll = scrollTop - parseInt(delta*scrollDistance);

    //         TweenLite.to($window, scrollTime, {
    //             scrollTo : { y: finalScroll, autoKill:true },
    //                 ease: Power1.easeOut,
    //                 overwrite: 5
    //             });

    //     });
    // });

    // $('#outer').on('mousewheel DOMMouseScroll', function(event) {
    //     console.log('deltaY: ' + event.originalEvent.deltaY);
    // });

    window.app = app;

});