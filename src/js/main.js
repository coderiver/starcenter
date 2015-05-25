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
// var TWEEN = require('tween.js');


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
        offset: -200,
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

            app.scrollmagic.box.table1.find('.table__border').toggleClass('is-animate');

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

                app.scrollmagic.box.table1.find('.table__border').removeClass('is-animate');
                TweenLite.fromTo(app.scrollmagic.box.table1, 0.5, {opacity: 1}, {opacity: 0});

                setTimeout(function() {
                    app.scrollmagic.box.table2.find('.table__border').addClass('is-animate');
                    TweenLite.fromTo(app.scrollmagic.box.table2, 0.5, {opacity: 0}, {opacity: 1});
                }, 0.5);

                app.scrollmagic.box.el.addClass('is-animate');
            }

            if ( e.progress < 0.6 && app.scrollmagic.box.stateChanged ) {
                app.scrollmagic.box.stateChanged = false;

                app.scrollmagic.box.table2.find('.table__border').removeClass('is-animate');
                TweenLite.fromTo(app.scrollmagic.box.table2, 0.5, {opacity: 1}, {opacity: 0});

                setTimeout(function() {
                    app.scrollmagic.box.table1.find('.table__border').addClass('is-animate');
                    TweenLite.fromTo(app.scrollmagic.box.table1, 0.5, {opacity: 0}, {opacity: 1});
                }, 0.5);

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



    //##### scene for box with men on background
    // app.scrollmagic.boxInner = {
    //     el: $('.box__inner')[0],
    //     container: $('.box__table'),
    //     table1: $('.box .men-table'),
    //     table2: $('.box .partners-table'),
    //     stateChanged: false,
    //     scene: null
    // };
    // app.scrollmagic.boxInner.scene = new ScrollMagic.Scene({
    //     duration: 500,
    //     triggerElement: app.scrollmagic.boxInner.el,
    //     triggerHook: 'onCenter',
    //     loglevel: 1
    // })
        // .on('enter', function(e) {
        //     var container = app.scrollmagic.boxInner.container;
        //     container.css({
        //         top: container.offset().top,
        //         left: container.offset().left,
        //         position: 'fixed'
        //     });
        // })
        // .on('leave', function(e) {
        //     var container = app.scrollmagic.boxInner.container;
        //     if ( e.progress === 0 ) {
        //         container.css({
        //             position: '',
        //             top: '',
        //             left: ''
        //         });
        //     }
        //     if ( e.progress === 1 ) {
        //         container.css({
        //             position: '',
        //             top: Math.ceil(500 * e.progress),
        //             left: ''
        //         });
        //     }
        // })
        // .on('progress', function(e) {
        //     if ( e.progress >= 0.4 && !app.scrollmagic.boxInner.stateChanged ) {
        //         app.scrollmagic.boxInner.stateChanged = true;

        //         app.scrollmagic.boxInner.table1.find('.table__border').removeClass('is-animate');
        //         TweenLite.fromTo(app.scrollmagic.boxInner.table1, 0.5, {opacity: 1}, {opacity: 0});

        //         setTimeout(function() {
        //             app.scrollmagic.boxInner.table2.find('.table__border').addClass('is-animate');
        //             TweenLite.fromTo(app.scrollmagic.boxInner.table2, 0.5, {opacity: 0}, {opacity: 1});
        //         }, 0.5);

        //         app.scrollmagic.box.el.addClass('is-animate');
        //     }
        //     if ( e.progress < 0.4 && app.scrollmagic.boxInner.stateChanged ) {
        //         app.scrollmagic.boxInner.stateChanged = false;

        //         app.scrollmagic.boxInner.table2.find('.table__border').removeClass('is-animate');
        //         TweenLite.fromTo(app.scrollmagic.boxInner.table2, 0.5, {opacity: 1}, {opacity: 0});

        //         setTimeout(function() {
        //             app.scrollmagic.boxInner.table1.find('.table__border').addClass('is-animate');
        //             TweenLite.fromTo(app.scrollmagic.boxInner.table1, 0.5, {opacity: 0}, {opacity: 1});
        //         }, 0.5);

        //         app.scrollmagic.box.el.removeClass('is-animate');
        //     }
        // })
        // .addTo(app.scrollmagic.controller);


    // ##### parallax for decorative elements
    app.scrollmagic.deco = {
        el: $('.deco__inner'),
        scenes: {}
    };
    app.scrollmagic.deco.el.each(function(index, el) {
        var tween = TweenLite.fromTo(el, 0.5, {y: '-50px'}, {y: '50px'});
        app.scrollmagic.deco.scenes['deco-' + index] = new ScrollMagic.Scene({
            duration: $(window).height(),
            triggerElement: $(el).parents('.deco')[0],
            triggerHook: 'onEnter',
            loglevel: 1
        })
            .setTween(tween)
            .addTo(app.scrollmagic.controller);
    });



    //##### scenes for all heads
    app.scrollmagic.head = {
        elements: $('.head:not(.head_capability)'),
        scenes: {}
    };
    app.scrollmagic.head.elements.each(function(index, el) {
        // var tween = new TimelineLite().add([
        //     TweenLite.to($(el).find('.head__img'), 1, {y: '20%', ease: Linear.easeNone}),
        //     TweenLite.to($(el).find('.head__text'), 1, {y: '20%', ease: Linear.easeNone}),
        //     TweenLite.to($(el).find('.deco'), 1, {y: '20%', ease: Linear.easeNone}),
        //     ]);
        // app.scrollmagic.head.scenes['head' + index] = new ScrollMagic.Scene({
        //     duration: $(window).height(),
        //     // offset: -200,
        //     triggerElement: el,
        //     triggerHook: 'onCenter',
        //     loglevel: 1
        // })
        //     .setTween(tween)
        //     .addTo(app.scrollmagic.controller);

        var bg   = $(el).find('.head__bg'),
            img  = $(el).find('.head__img'),
            text = $(el).find('.head__text');
            // deco = $(el).find('.deco');
        bg.mousemove(function(e) {
            TweenLite.to(img,  0.2, {x: e.screenX / 150, y: e.screenY / 150});
            TweenLite.to(text, 0.2, {x: e.screenX / 100,  y: e.screenY / 100});
            // TweenLite.to(deco, 0.2, {x: e.screenX / 80,  y: e.screenY / 80});
        });
        bg.mouseleave(function(e) {
            TweenLite.to(img,  0.5, {x: 0, y: 0});
            TweenLite.to(text, 0.5, {x: 0, y: 0});
            // TweenLite.to(deco, 0.5, {x: 0, y: 0});
        });
    });




    //##### draw border table when table is in viewport
    app.scrollmagic.borders = {
        el: $('.js-border'),
        scenes: {}
    };
    app.scrollmagic.borders.el.each(function(index, el) {
        app.scrollmagic.borders.scenes['border' + index] = new ScrollMagic.Scene({
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

    $(function(){

        var $window = $('#outer');
        var scrollTime = 1.2;
        var scrollDistance = 170;

        $window.on("mousewheel DOMMouseScroll", function(event){
            event.preventDefault();
            var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
            var scrollTop = $window.scrollTop();
            var finalScroll = scrollTop - parseInt(delta*scrollDistance);

            TweenLite.to($window, scrollTime, {
                scrollTo : { y: finalScroll, autoKill:true },
                    ease: Power1.easeOut,
                    overwrite: 5
                });

        });
    });

    // $('#outer').on('mousewheel DOMMouseScroll', function(event) {
    //     console.log('deltaY: ' + event.originalEvent.deltaY);
    // });

});