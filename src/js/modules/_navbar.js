var $ = require('jquery');
// require('jquery-mousewheel')($);
require('gsap');
require('gsap-scrollToPlugin');
var ScrollMagic = require('scrollmagic');

function Navbar(selector) {

    this.element         = $(selector || '#nav');
    this.front           = this.element.find('.nav__front');
    this.sections        = $('.js-section');
    this.buttons         = this.element.find('.nav__back .nav__link');
    this.winHeigh        = $(window).height();
    this.sectionsHeight  = []; // height of each section
    this.buttonsHeight   = []; // height of each button/.nav__link
    this.buttonsTop      = []; // offset top of each button/.nav__link
    this.height          = 0; // will be changed after scrolling of each section
    this.activeSection   = null;
    this.sectionProgress = 0; // progress of current section
    this.duration        = 0.5; // seconds
    this.scrollToDur     = 1; // seconds, scroll to section duration
    this.inProggres      = false;
    this.isHidden          = false;

}


Navbar.prototype._initEvents = function() {
    var _ = this;

    $(window).on('resize', function(e) {
        var prevWinHeight = _.winHeigh;
        _.winHeigh = $(window).height();
        if ( _.winHeigh != prevWinHeight )  _.reinit();
    });

    $.each(_.buttons, function(index, button) {
        $(button).on('mouseover', function(e) {
            var delta = _.buttonsTop[ index ] + _.buttonsHeight[ index ] - _.height;
            _.update(delta, 0.3);
        });
        $(button).on('mouseleave', function(e) {
            _.update(null, 0.3);
        });
        $(button).on('click', function(e) {
            e.preventDefault();
            // _.height = _.buttonsTop[ index ] - _.height;
            var sectionId = '#' + ($(this).attr('href')).slice(1);
            // console.log(sectionId);
            _.scrollToSection(sectionId);
        });
    });

};


Navbar.prototype._calcButtonsParam = function() {
    var _ = this;

    $.each(_.buttons, function(index, button) {
        var width     = $(button).outerWidth(),
            offsetTop = $(button).offset().top;

        _.buttonsHeight[ index ] = width;
        _.buttonsTop[ index ] = offsetTop;
    });
};


Navbar.prototype._buildScenes = function() {
    var _ = this;

    //##### scrollmagic scene for navbar
    app.scrollmagic.navbar = {
        scenes: {}
    };

    $.each(_.sections, function(index, el) {
        var id = el.id ? app.util.toCamelCase(el.id) : 'section' + index,
            sectionHeight = $(el).outerHeight();

        _.sectionsHeight[ index ] = sectionHeight;

        app.scrollmagic.navbar.scenes[ id ] = new ScrollMagic.Scene({
            duration: sectionHeight,
            triggerElement: el,
            triggerHook: 'onCenter',
            loglevel: 1
        })
            .on('start', function(e) {
                _.activeSection = id;
                if ( e.scrollDirection == 'FORWARD' ) {
                    _.height = ( _.buttonsTop[ index ] );
                    _.update();
                }
            })
            .on('progress', function(e) {
                _.height = _.buttonsTop[ index ] + ( _.buttonsHeight[ index ] * e.progress );
                _.update();
            })
            .on('end', function(e) {
                if (e.scrollDirection == 'REVERSE') {
                    _.height = ( _.buttonsTop[ index ] );
                    _.update();
                }
                // on end of last section
                if (e.scrollDirection == 'FORWARD' && index === _.sections.length - 1) {
                    _.height = _.winHeigh;
                    _.update();
                }
            })
            .addTo(app.scrollmagic.controller);
    });
};


Navbar.prototype.init = function() {
    var _ = this;

    _._calcButtonsParam();
    _.height = _.buttonsTop[ 0 ];
    _._buildScenes();
    _._initEvents();
};


Navbar.prototype.reinit = function() {
    var _ = this;

    _._calcButtonsParam();
};


Navbar.prototype.update = function(scrollDelta, scrollDur) {
    var _     = this,
        delta = scrollDelta || 0,
        dur   = scrollDur || _.duration;
    // translate pixels(number) to percents(string), relative to window height
    var percent = ((_.height + delta) / _.winHeigh * 100 ).toFixed(2) + '%';
    TweenMax.to(_.front, dur, {width: percent, overwrite: 'all', ease: Linear.easeNone});
};


Navbar.prototype.scrollToSection = function(sectionId) {
    var _ = this;

    var scrollPos = $(sectionId).position().top;

    TweenMax.to(app.rootContainer, _.scrollToDur, {
        scrollTo : { y: scrollPos, autoKill:true },
            ease: Power3.easeOut,
            overwrite: 5,
            onStart: function() {
                _.inProggres = true;
            },
            onComplete: function() {
                _.inProggres = false;
            }
        });
};


Navbar.prototype.hidden = function(animDur, animDelay) {
    if ( this.isHidden ) return;
    var _  = this,
        dur = animDur / 1000 || _.duration,
        del = animDelay / 1000 || 0;

    TweenMax.fromTo(_.element, dur, {xPercent: 0}, {
        xPercent: 100,
        ease: Power2.easeIn,
        delay: del,
        onComplete: function() {
            _.isHidden = true;
        }
        });
};

Navbar.prototype.visible = function(animDur, animDelay) {
    if ( !this.isHidden ) return;
    var _  = this,
        dur = animDur / 1000 || _.duration,
        del = animDelay / 1000 || 0;

    TweenMax.fromTo(_.element, dur, {xPercent: 100}, {
        xPercent: 0,
        ease: Power2.easeOut,
        clearProps: 'all',
        delay: del,
        onComplete: function() {
            _.isHidden = false;
        }
        });
};


module.exports = Navbar;
