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
        info    : infoObj,
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

    app.info._initSlider('.object-gallery__slider');




    /* ############################################################################# *\
    #
    #  Animations
    #
    \* ############################################################################ */

    app.scrollmagic.controller = new ScrollMagic.Controller();

    //##### timeline scene
    app.scrollmagic.timeline = {
        el: $('#timeline'),
        trigger: $('#trigger1')[0],
        animated: false,
        state2: false,
        scene: null
    };
    app.scrollmagic.timeline.scene = new ScrollMagic.Scene({
        duration: 450,
        offset: 90,
        triggerElement: app.scrollmagic.timeline.trigger,
        triggerHook: 'onCenter',
        loglevel: 1
    })
        .on('start', function(e) {
            app.scrollmagic.timeline.el.toggleClass('is-animate');
        })
        .on('end', function(e) {
            app.scrollmagic.timeline.el.toggleClass('state-2');
        })
        .addTo(app.scrollmagic.controller);



    //##### only class toggle scene
    app.scrollmagic.factsText = {
        el: $('.facts__text')[0],
        offset: -200,
        duration: 450,
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
        offset: -100,
        scene: null
    };
    $([ app.scrollmagic.factsText,
        app.scrollmagic.factsGroup1,
        app.scrollmagic.factsGroup2,
        app.scrollmagic.tabs
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



    // ##### scene for box with men on background
    app.scrollmagic.box = {
        el: $('.box'),
        trigger: $('.box-wrapper'),
        table1: $('.box .men-table'),
        table2: $('.box .partners-table'),
        canAnimate: true,
        stateChanged: false,
        scene: null
    };
    app.scrollmagic.box.scene = new ScrollMagic.Scene({
        duration: 500,
        offset: 285,
        triggerHook: 'onCenter',
        triggerElement: app.scrollmagic.box.trigger[0],
        loglevel: 1
    })
        .on('start', function(e) {
            var box = app.scrollmagic.box.el;

            if ( e.state === 'DURING' ) {
                box.css({
                    top: box.offset().top,
                    left: box.offset().left,
                    width: box.width(),
                    position: 'fixed'
                });
            }

            if ( e.state === 'BEFORE' ) {
                box.css({
                    position: '',
                    top: '',
                    left: '',
                    width: ''
                });
            }

            app.scrollmagic.box.table1.toggleClass('is-animate');

            if ( e.state == 'DURING' && app.scrollmagic.box.canAnimate) {
                app.scrollmagic.box.canAnimate = false;
                showPeople();
                setTimeout(function() {
                    app.scrollmagic.box.canAnimate = true;
                }, 2500);
            }

            if ( e.state == 'BEFORE' && app.scrollmagic.box.canAnimate) {
                app.scrollmagic.box.canAnimate = false;
                hidePeople();
                setTimeout(function() {
                    app.scrollmagic.box.canAnimate = true;
                }, 2500);
            }
        })
        .on('end', function(e) {
            var box = app.scrollmagic.box.el;
            if ( e.state === 'DURING' ) {
                box.css({
                    top: box.offset().top,
                    left: box.offset().left,
                    width: box.width(),
                    position: 'fixed'
                });
            }
            if ( e.state === 'AFTER' ) {
                box.css({
                    position: '',
                    top: Math.ceil(500 * e.progress),
                    left: '',
                    width: ''
                });
            }
        })
        .on('progress', function(e) {
            if ( e.progress >= 0.6 && !app.scrollmagic.box.stateChanged ) {
                app.scrollmagic.box.stateChanged = true;

                app.scrollmagic.box.table1.removeClass('is-animate');

                setTimeout(function() {
                    app.scrollmagic.box.table2.addClass('is-animate');
                }, 500);

                app.scrollmagic.box.el.addClass('is-animate');
            }

            if ( e.progress < 0.6 && app.scrollmagic.box.stateChanged ) {
                app.scrollmagic.box.stateChanged = false;

                app.scrollmagic.box.table2.removeClass('is-animate');

                setTimeout(function() {
                    app.scrollmagic.box.table1.addClass('is-animate');
                }, 500);

                app.scrollmagic.box.el.removeClass('is-animate');
            }
        })
        .addTo(app.scrollmagic.controller);

    function showPeople(cb) {
        var man = $('.box__bg .icon-man');
        man.each(function(index, el) {
            TweenLite.to(el, 0.2, {opacity: 1, y: 0}).delay(0.002 * index);
        });
    }
    function hidePeople(cb) {
        var man = $('.box__bg .icon-man');
        man.each(function(index, el) {
            TweenLite.to(el, 0.2, {opacity: 0, y: -30}).delay(0.002 * (man.length - index));
        });
    }



    // ##### parallax for decorative elements
    app.scrollmagic.deco = {
        el: $('.deco__inner'),
        scenes: {}
    };
    app.scrollmagic.deco.el.each(function(index, el) {
        // var tween = TweenLite.fromTo(el, 0.5, {y: -50}, {y: 50});
        app.scrollmagic.deco.scenes['deco-' + index] = new ScrollMagic.Scene({
            duration: $(window).height(),
            triggerElement: $(el).parents('.deco')[0],
            triggerHook: 'onEnter',
            loglevel: 1
        })
            .on('progress', function(e) {
                var progress = (50 * e.progress).toFixed(1);
                TweenLite.to(el, 0.1, {y: progress});
            })
            // .setTween(tween)
            .addTo(app.scrollmagic.controller);
    });



    //##### scenes for all heads
    app.scrollmagic.head = {
        elements: $('.head:not(.head_capability)'),
        scenes: {}
    };
    app.scrollmagic.head.elements.each(function(index, el) {
        var img  = $(el).find('.head__img'),
            text = $(el).find('.head__text');

        // var tween = new TimelineLite().add([
        //     TweenLite.to($(el).find('.head__img'),  1, {y: 30}),
        //     TweenLite.to($(el).find('.head__text'), 1, {y: 50}),
        //     // TweenLite.to($(el).find('.deco'),       1, {y: '40%'}),
        //     ]);
        app.scrollmagic.head.scenes['head' + index] = new ScrollMagic.Scene({
            duration: $(window).height(),
            // offset: -200,
            triggerElement: el,
            triggerHook: 'onCenter',
            loglevel: 1
        })
            .on('progress', function(e) {
                var progress = (300 - 300 * e.progress).toFixed(1);
                var progress1 = (70 - 70 * e.progress).toFixed(1);
                TweenLite.to(img,  0.05, {y: progress, ease: Linear.easeNone});
                TweenLite.to(text, 0.05, {y: progress1, ease: Linear.easeNone});
            })
            // .setTween(tween)
            .addTo(app.scrollmagic.controller);

        // var bg   = $(el).find('.head__bg'),
        //     img  = $(el).find('.head__img'),
        //     text = $(el).find('.head__text');
        //     // deco = $(el).find('.deco');
        // bg.mousemove(function(e) {
        //     TweenLite.to(img,  0.5, {x: e.screenX / 150, y: e.screenY / 150});
        //     TweenLite.to(text, 0.5, {x: e.screenX / 100,  y: e.screenY / 100});
        //     // TweenLite.to(deco, 0.2, {x: e.screenX / 80,  y: e.screenY / 80});
        // });
        // bg.mouseleave(function(e) {
        //     TweenLite.to(img,  0.5, {x: 0, y: 0});
        //     TweenLite.to(text, 0.5, {x: 0, y: 0});
            // TweenLite.to(deco, 0.5, {x: 0, y: 0});
        // });
    });




    //##### draw border table when table is in viewport
    app.scrollmagic.tables = {
        el: $('.js-table'),
        scenes: {}
    };
    app.scrollmagic.tables.el.each(function(index, el) {
        app.scrollmagic.tables.scenes['table' + index] = new ScrollMagic.Scene({
            offset: -100,
            triggerElement: el,
            triggerHook: 'onCenter',
            loglevel: 1
        })
            .setClassToggle(el, 'is-animate')
            .addTo(app.scrollmagic.controller);
    });

    console.log(app);
    console.log(app.scrollmagic);

    // console.log(app.morph, app.category);

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