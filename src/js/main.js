var $ = require('jquery');
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
// var router = require('./modules/_routing.js');
var initScenes = require('./modules/_scroll-scenes.js');


global.app = {};
app.router = require('./modules/_routing.js');

$(document).ready(function() {

app.scrollDisabled = false;
app.toparea  = {};
app.objects  = {};
app.catalog = {};
app.slider   = new Slider('#main-slider');
app.category = new Category('.catalog-category', '.catalog-category__item');
app.morph    = new Morph('#morph');
app.topareaModal = new Modal('#catalog', '.catalog__content');
app.tabs     = new Tabs('.tabs', '.btn_tab', '.tabs__content');
app.rootContainer = $('#outer');
app.scrollmagic = initScenes();
app.navbar = new Navbar();

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
    }
};




//------------------------------------------------------------------------------
//
//    #init
//
//------------------------------------------------------------------------------

app.slider.init();
app.morph.init();
app.tabs.init();
app.util.getPlatform();


$.each($('.js-box'), function(index, el) {

    var id = el.id ? app.util.toCamelCase(el.id) : 'object' + index;

    app.objects[ id ] = new Box().init(el);
});

var scrollbarWidth = app.util.getScrollBarWidth();
console.log('Scroll bar width: ' + scrollbarWidth + 'px');








//------------------------------------------------------------------------------
//
//    #catalog
//
//------------------------------------------------------------------------------

app.catalog.opened = false;

app.catalog.open = function(state, contentIndex) {
    if ( app.catalog.opened ) return;
    app.topareaModal.open(contentIndex);
    app.slider.rollUp();
    app.category.open();
    app.morph.activate(state);
    app.navbar.hidden();
    // app.util.toggleScroll();
    app.catalog.opened = true;
};

app.catalog.close = function() {
    if ( !app.catalog.opened ) return;
    app.topareaModal.close();
    app.slider.rollDown();
    app.morph.deactivate();
    app.category.close();
    app.navbar.visible(null, 800);
    // app.util.toggleScroll();
    app.catalog.opened = false;
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
    app.slider.rollUp();
    app.morph.moveDown();
    app.toparea.transformed = true;
};

app.toparea.transformBack = function() {
    if ( app.toparea.inProgress ) return;
    app.slider.rollDown();
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

app.scrollmagic.tabs.scene.on('start end', function(e) {
    if ( app.tabs.activeTab !== null ) app.tabs.hideContent();
});


$('.catalog-btn').on('click', function(e) {
    var state = $(this).data('morph-state'),
        contentIndex = $(this).data('content-index');

    if ( !app.catalog.opened ) {
        app.catalog.open(state, contentIndex);
    }
    else {
        setTimeout(function() {
            app.morph.changeState(state, app.category.direction);
            app.topareaModal.switchContent(contentIndex);
        }, 0);
    }
});


$('#header .logo').on('click', function(e) {
    app.catalog.close();
});


// $('.nano').nanoScroller();


// app.rootContainer.on('mousewheel', function(e) {
    // console.log(e);
    // console.log(e.deltaY, e.deltaFactor);
// });







//------------------------------------------------------------------------------
//
//    #common
//
//------------------------------------------------------------------------------
app.navbar.init();
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


});