// window.jQuery = window.$ = require('jquery');
require('jquery');
require('modernizr');
require('velocity-animate');
var ScrollMagic = require('scrollmagic');
require('../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.velocity.js');
var Slider  = require('./modules/_main-slider.js');
var Morph   = require('./modules/_canvas.js');
var Catalog = require('./modules/_catalog.js');
var Category = require('./modules/_category.js');
var Tabs = require('./modules/_tabs.js');
var router = require('./modules/_routing.js');
var TWEEN = require('tween.js');


var app, catalog, morph, slider;

var content = $('#content');

$(document).ready(function() {

    router.run();

    app = {
        slider  : new Slider('#slider1', '.main-slider__slides', '.main-slider__paginator'),
        morph   : new Morph('#morph'),
        catalog : new Catalog('.catalog'),
        category: new Category('.catalog-category', '.catalog-category__item'),
        tabs    : new Tabs('.tabs', '.btn_tab', '.tabs__content'),
        scrollmagic: {}
    };

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

    app.scrollmagic.controller = new ScrollMagic.Controller();


    //##### timeline scene
    app.scrollmagic.timeline = {
        el: $('#timeline')[0],
        // jqel: $('#timeline'),
        // trigger: $('#trigger1')[0],
        scene: null
    };
    app.scrollmagic.timeline.scene = new ScrollMagic.Scene({
        duration: 554,
        triggerElement: app.scrollmagic.timeline.el,
        triggerHook: 'onCenter',
        loglevel: 1
    })
        .setPin(app.scrollmagic.timeline.el)
        // .setVelocity(app.scrollmagic.timeline.el, {top: '+=554'}, {duration: 1000})
        // .on('progress', function(e) {
        //    console.log(e);
        //    console.log(app.scrollmagic.timeline.el);
        //    app.scrollmagic.timeline.el.style.top = 450 + Math.ceil(554 * e.progress) + 'px';
        //    app.scrollmagic.timeline.el.style.marginLeft = -470 - Math.ceil(1200 * e.progress) + 'px';
        // })
        .addTo(app.scrollmagic.controller);


    //##### only class toggle scene
    app.scrollmagic.factsText = {
        el: $('.facts__text')[0],
        offset: -200,
        scene: null
    };
    app.scrollmagic.factsGroup1 = {
        el: $('.facts-group')[0],
        offset: -200,
        scene: null
    };
    app.scrollmagic.factsGroup2 = {
        el: $('.facts-group')[1],
        offset: -200,
        scene: null
    };
    app.scrollmagic.tabs = {
        el: $('.tabs')[0],
        offset: -200,
        scene: null
    };
    app.scrollmagic.box = {
        el: $('.box')[0],
        duration: 940,
        offset: 160,
        scene: null
    };
    $([ app.scrollmagic.factsText,
        app.scrollmagic.factsGroup1,
        app.scrollmagic.factsGroup2,
        app.scrollmagic.tabs,
        app.scrollmagic.box
        ]).each(function(index, item) {
            item.scene = new ScrollMagic.Scene({
                duration: item.duration || 0,
                offset: item.offset || 0,
                triggerElement: item.trigger || item.el,
                triggerHook: item.triggerHook || 'onCenter',
                loglevel: 1
            })
                .setClassToggle(item.el, 'is-animate')
                .addTo(app.scrollmagic.controller);
    });

    //##### scene for box with men on background
    app.scrollmagic.boxInner = {
        el: $('.box__inner')[0],
        container: $('.box__table'),
        table1: $('.box .men-table'),
        table2: $('.box .partners-table'),
        scene: null
    };
    app.scrollmagic.boxInner.scene = new ScrollMagic.Scene({
        duration: 500,
        triggerElement: app.scrollmagic.boxInner.el,
        triggerHook: 'onCenter',
        loglevel: 1
    })
        // .setPin(app.scrollmagic.boxInner.container[0])
        .on('enter', function(e) {
            console.log(e);
            var container = app.scrollmagic.boxInner.container;
            container.css({
                top: container.offset().top,
                left: container.offset().left,
                position: 'fixed'
            });
        })
        .on('leave', function(e) {
            console.log(e);
            var container = app.scrollmagic.boxInner.container;
            if ( e.progress === 0 ) {
                container.css({
                    position: '',
                    top: '',
                    left: ''
                });
            }
            if ( e.progress === 1 ) {
                container.css({
                    position: '',
                    top: Math.ceil(500 * e.progress),
                    left: ''
                });
            }
        })
        .addTo(app.scrollmagic.controller);


    console.log(app);
    console.log(app.scrollmagic);

    // console.log(app.morph, app.category);

    $('.catalog-btn').on('click', function(event) {
        // event.preventDefault();
        var state = $(this).data('morph-state');
        if ( !app.morph.state.active ) {
            app.openCatalog(state);
        } else {
            app.morph.changeState(state);
        }
    });

    $('#header .logo').on('click', function(event) {
        // event.preventDefault();
        app.closeCatalog();
    });



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

    $('.men-table').on('click', function() {
        $(this).find('.table__border').toggleClass('is-animate');
    });
    $('.partners-table').on('click', function() {
        $(this).find('.table__border').toggleClass('is-animate');
    });
    $('.contacts-table').on('click', function() {
        $(this).find('.table__border').toggleClass('is-animate');
    });
    $('.skyline').on('click', function() {
        $(this).toggleClass('is-animate');
    });

});


module.exports = app;