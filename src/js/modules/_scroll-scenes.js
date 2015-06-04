require('jquery');
require('gsap');
require('TimelineLite');

var ScrollMagic = require('scrollmagic');
require('../../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js');

module.exports = function() {

    var scrollmagic = {},
        mainContainer = $('#outer');

    // init ScrollMagic controller
    scrollmagic.controller = new ScrollMagic.Controller({container: mainContainer[0]});
    TweenMax.lagSmoothing(1000, 16);



    //##### timeline toparea
    scrollmagic.toparea = {
        el: $('.catalog'),
        scene: null,
    };
    scrollmagic.toparea.scene = new ScrollMagic.Scene({
        duration: 300,
        // offset: 300,
        triggerElement: scrollmagic.toparea.el[0],
        triggerHook: 'onLeave',
        loglevel: 1
    })
        .on('end', function(e) {
            if ( !app.catalog.opened ) {
                app.toparea.toggle();
            }
        })
        .addTo(scrollmagic.controller);



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
        offset: 15,
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
        duration: 400,
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
        duration: 800,
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
        manRow: $('.box__bg-row'),
        canAnimate: true,
        stateChanged: false,
        scene: null
    };

    function showPeople() {
        scrollmagic.box.manRow.each(function(index, el) {
            TweenMax.to(el, 0.2, {opacity: 1, y: 0}).delay(0.05 * index);
        });
    }
    function hidePeople() {
        scrollmagic.box.manRow.each(function(index, el) {
            TweenMax.to(el, 0.2, {opacity: 0, y: -30}).delay(0.05 * (scrollmagic.box.manRow.length - index));
        });
    }

    TweenMax.set(scrollmagic.box.manRow, {opacity: 0, y: -30});
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

    mainContainer.mousemove(function(e) {
        // console.log(e.screenX, e.screenY);
        scrollmagic.deco.el.each(function(index, el) {
            TweenMax.to(el,  0.5, {x: e.screenX / 100, y: e.screenY / 100});
        });
    });

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }



    //##### scenes for all heads
    scrollmagic.head = {
        elements: $('.head:not(.head_capabilities)'),
        scenes: {}
    };
    scrollmagic.head.elements.each(function(index, el) {
        var img  = $(el).find('.head__img'),
            text = $(el).find('.head__text');

        // var tween = new TimelineLite().add([
        //     TweenMax.fromTo(img,  1, {y: 200}, {y: 0,  ease: Linear.easeNone}),
        //     TweenMax.fromTo(text, 1, {y: 250}, {y: -250,  ease: Linear.easeNone})
        //     ]);

        TweenMax.set(img,  {bottom: -100});
        TweenMax.set(text, {bottom: -150});

        scrollmagic.head.scenes['head' + index] = new ScrollMagic.Scene({
            duration: $(window).height() + $(el).height(),
            offset: - $(el).height() / 2,
            triggerElement: el,
            triggerHook: 'onEnter',
            loglevel: 1
        })
            // .setTween(tween)
            .on('progress', function(e) {
                var progressImg  = (100 * e.progress).toFixed(1);
                var progressText = (300 * e.progress).toFixed(1);
                TweenMax.to(img,  0.05, {y: -progressImg,  ease: Linear.easeNone});
                TweenMax.to(text, 0.05, {y: -progressText, ease: Linear.easeNone});
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