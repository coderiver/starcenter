require('jquery');
require('../../../node_modules/gsap/src/uncompressed/TweenLite.js');
require('../../../node_modules/gsap/src/uncompressed/TimelineLite.js');
require('../../../node_modules/gsap/src/uncompressed/plugins/CSSPlugin.js');
require('../../../node_modules/gsap/src/uncompressed/plugins/ScrollToPlugin.js');

var ScrollMagic = require('scrollmagic');
require('../../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js');

module.exports = function() {

    var scrollmagic = {},
        mainContainer = $('#outer');


    scrollmagic.controller = new ScrollMagic.Controller();
    TweenLite.lagSmoothing(1000, 16);


    //##### timeline scene
    scrollmagic.timeline = {
        el: $('#timeline'),
        trigger: $('#trigger1')[0],
        animated: false,
        state2: false,
        scene: null
    };
    scrollmagic.timeline.scene = new ScrollMagic.Scene({
        duration: 450,
        offset: 90,
        triggerElement: scrollmagic.timeline.trigger,
        triggerHook: 'onCenter',
        loglevel: 1
    })
        .on('start', function(e) {
            scrollmagic.timeline.el.toggleClass('is-animate');
        })
        .on('end', function(e) {
            scrollmagic.timeline.el.toggleClass('state-2');
        })
        .addTo(scrollmagic.controller);



    //##### only class toggle scene
    scrollmagic.factsText = {
        el: $('.facts__text')[0],
        offset: -200,
        duration: 450,
        scene: null
    };
    scrollmagic.factsGroup1 = {
        el: $('.facts-group')[0],
        offset: -200,
        scene: null
    };
    scrollmagic.factsGroup2 = {
        el: $('.facts-group')[1],
        offset: -200,
        scene: null
    };
    scrollmagic.tabs = {
        el: $('.tabs')[0],
        offset: -100,
        scene: null
    };
    $([ scrollmagic.factsText,
        scrollmagic.factsGroup1,
        scrollmagic.factsGroup2,
        scrollmagic.tabs
        ]).each(function(index, item) {
            item.scene = new ScrollMagic.Scene({
                duration: item.duration || 0,
                offset: item.offset || 0,
                triggerElement: item.trigger || item.el,
                triggerHook: item.triggerHook || 'onCenter',
                loglevel: 1
            })
                .setClassToggle(item.el, 'is-animate')
                .addTo(scrollmagic.controller);
    });



    // ##### scene for box with men on background
    scrollmagic.box = {
        el: $('.box'),
        // trigger: $('.box-wrapper'),
        // table1: $('.box .men-table'),
        // table2: $('.box .partners-table'),
        canAnimate: true,
        stateChanged: false,
        scene: null
    };
    // scrollmagic.box.scene = new ScrollMagic.Scene({
    //     duration: 500,
    //     offset: 285,
    //     triggerHook: 'onCenter',
    //     triggerElement: scrollmagic.box.trigger[0],
    //     loglevel: 1
    // })
    //     .on('start', function(e) {
    //         var box = scrollmagic.box.el;

    //         if ( e.state === 'DURING' ) {
    //             box.css({
    //                 top: box.offset().top,
    //                 left: box.offset().left,
    //                 width: box.width(),
    //                 position: 'fixed'
    //             });
    //         }

    //         if ( e.state === 'BEFORE' ) {
    //             box.css({
    //                 position: '',
    //                 top: '',
    //                 left: '',
    //                 width: ''
    //             });
    //         }

    //         scrollmagic.box.table1.toggleClass('is-animate');

    //         if ( e.state == 'DURING' && scrollmagic.box.canAnimate) {
    //             scrollmagic.box.canAnimate = false;
    //             showPeople();
    //             setTimeout(function() {
    //                 scrollmagic.box.canAnimate = true;
    //             }, 2500);
    //         }

    //         if ( e.state == 'BEFORE' && scrollmagic.box.canAnimate) {
    //             scrollmagic.box.canAnimate = false;
    //             hidePeople();
    //             setTimeout(function() {
    //                 scrollmagic.box.canAnimate = true;
    //             }, 2500);
    //         }
    //     })
    //     .on('end', function(e) {
    //         var box = scrollmagic.box.el;
    //         if ( e.state === 'DURING' ) {
    //             box.css({
    //                 top: box.offset().top,
    //                 left: box.offset().left,
    //                 width: box.width(),
    //                 position: 'fixed'
    //             });
    //         }
    //         if ( e.state === 'AFTER' ) {
    //             box.css({
    //                 position: '',
    //                 top: Math.ceil(500 * e.progress),
    //                 left: '',
    //                 width: ''
    //             });
    //         }
    //     })
    //     .on('progress', function(e) {
    //         if ( e.progress >= 0.6 && !scrollmagic.box.stateChanged ) {
    //             scrollmagic.box.stateChanged = true;

    //             scrollmagic.box.table1.removeClass('is-animate');

    //             setTimeout(function() {
    //                 scrollmagic.box.table2.addClass('is-animate');
    //             }, 500);

    //             scrollmagic.box.el.addClass('is-animate');
    //         }

    //         if ( e.progress < 0.6 && scrollmagic.box.stateChanged ) {
    //             scrollmagic.box.stateChanged = false;

    //             scrollmagic.box.table2.removeClass('is-animate');

    //             setTimeout(function() {
    //                 scrollmagic.box.table1.addClass('is-animate');
    //             }, 500);

    //             scrollmagic.box.el.removeClass('is-animate');
    //         }
    //     })
    //     .addTo(scrollmagic.controller);

    function showPeople() {
        var man = $('.box__bg-row');
        man.each(function(index, el) {
            TweenLite.to(el, 0.2, {opacity: 1, y: 0}).delay(0.05 * index);
        });
    }
    function hidePeople() {
        var man = $('.box__bg-row');
        man.each(function(index, el) {
            TweenLite.to(el, 0.2, {opacity: 0, y: -30}).delay(0.05 * (man.length - index));
        });
    }

    TweenLite.set($('.box__bg-row'), {opacity: 0, y: -30});
    scrollmagic.box.scene = new ScrollMagic.Scene({
        duration: 800,
        triggerElement: scrollmagic.box.el[0],
        loglevel: 1
    })
        .on('start', function(e) {
            if ( scrollmagic.box.canAnimate ) {

                scrollmagic.box.canAnimate = false;

                scrollmagic.box.el.toggleClass('is-animate');
                if ( e.state === 'DURING' ) showPeople();
                if ( e.state === 'BEFORE' ) hidePeople();

                setTimeout(function() {
                    scrollmagic.box.canAnimate = true;
                }, 600);
            }
        })
        .addTo(scrollmagic.controller);



    // ##### parallax for decorative elements
    scrollmagic.deco = {
        el: $('.deco__inner'),
        scenes: {}
    };
    // scrollmagic.deco.el.each(function(index, el) {
        // var tween = TweenLite.fromTo(el, 0.5, {y: -50}, {y: 50});
        // scrollmagic.deco.scenes['deco-' + index] = new ScrollMagic.Scene({
        //     duration: $(window).height(),
        //     triggerElement: $(el).parents('.deco')[0],
        //     triggerHook: 'onEnter',
        //     loglevel: 1
        // })
        //     .on('progress', function(e) {
        //         var progress = (50 * e.progress).toFixed(1);
        //         TweenLite.to(el, 0.1, {y: progress});
        //     })
        //     // .setTween(tween)
        //     .addTo(scrollmagic.controller);
    // });

    mainContainer.mousemove(function(e) {
        // console.log(e.screenX, e.screenY);
        scrollmagic.deco.el.each(function(index, el) {
            TweenLite.to(el,  0.5, {x: e.screenX / 100, y: e.screenY / 100});
        });
    });

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }



    //##### scenes for all heads
    scrollmagic.head = {
        elements: $('.head:not(.head_capability)'),
        scenes: {}
    };
    scrollmagic.head.elements.each(function(index, el) {
        var img  = $(el).find('.head__img'),
            text = $(el).find('.head__text');

        TweenLite.set(img,  {bottom: -200});
        TweenLite.set(text, {bottom: -250});

        scrollmagic.head.scenes['head' + index] = new ScrollMagic.Scene({
            duration: $(window).height() + $(el).height(),
            offset: - $(el).height() / 2,
            triggerElement: el,
            triggerHook: 'onEnter',
            loglevel: 1
        })
            .on('progress', function(e) {
                var progressImg  = (200 * e.progress).toFixed(1);
                var progressText = (500 * e.progress).toFixed(1);
                TweenLite.to(img,  0.05, {y: -progressImg,  ease: Linear.easeNone});
                TweenLite.to(text, 0.05, {y: -progressText, ease: Linear.easeNone});
            })
            .addTo(scrollmagic.controller);
    });




    //##### draw border table when table is in viewport
    scrollmagic.tables = {
        el: $('.js-table'),
        scenes: {}
    };
    scrollmagic.tables.el.each(function(index, el) {
        scrollmagic.tables.scenes['table' + index] = new ScrollMagic.Scene({
            offset: -100,
            triggerElement: el,
            triggerHook: 'onCenter',
            loglevel: 1
        })
            .setClassToggle(el, 'is-animate')
            .addTo(scrollmagic.controller);
    });

    return scrollmagic;
};