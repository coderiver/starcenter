var app, Slider, Catalog, Morph, catalog, morph, slider;

require('jquery');
require('modernizr');

Slider  = require('./modules/_main-slider.js');
Morph   = require('./modules/_canvas.js');
Catalog = require('./modules/_catalog.js');

$(document).ready(function() {

    app = {
        slider  : new Slider('#slider1', '.main-slider__slides', '.main-slider__paginator'),
        morph   : new Morph('#morph'),
        catalog : new Catalog('.catalog'),
    };

    app.openCatalog = function(state) {
        app.catalog.open();
        app.slider.makeHidden();
        setTimeout(function() {
            app.morph.activate(state);
        }, 300);
    };

    app.closeCatalog = function() {
        app.catalog.close();
        app.slider.makeVisible();
        app.morph.deactivate();
    };

    app.slider.init();
    app.morph.init();

    console.log(app.morph, app.catalog);

    $('.catalog__btns .btn').on('click', function(event) {
        event.preventDefault();
        var state = $(this).data('morph-state');
        if ( !app.morph.state.active ) {
            app.openCatalog(state);
        } else {
            app.morph.changeState(state);
        }
    });

    $('#header .logo').on('click', function(event) {
        event.preventDefault();
        console.log(event);
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

});