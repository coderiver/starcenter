require('jquery');
require('modernizr');

$(document).ready(function() {

    var MainSlider = require('./modules/_main-slider.js'),
        catalog    = require('./modules/_catalog.js'),
        morph      = require('./modules/_morph.js'),
        Canvas     = require('./modules/_canvas.js'),
        win        = $(window);
        slider     = new MainSlider('#slider1', '.main-slider__slides', '.main-slider__paginator');

    slider.init();
    morph.init();
    // canvas.init($('#morph'));

    var Morph = new Canvas($('#morph'));
    Morph.init();
    console.log(Morph);

    // console.log(slider, morph);


    $('.catalog__btns .btn').on('click', function(event) {
        event.preventDefault();
        if ( $(this).index() === 0 ) {
            // slider.makeHidden();
            // catalog.open();
            // setTimeout(function() {
            //     morph.toSquare();
            // }, 200);
            Morph.activate('circle');
        } else if ( $(this).index() === 1 ) {
            Morph.activate('square');
        } else {
            Morph.activate('triangle');
            // catalog.close();
            // slider.makeVisible();
            // setTimeout(function() {
            //     morph.toCircle();
            // }, 200);
        }
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

});