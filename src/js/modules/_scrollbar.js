var $ = require('jquery');
// require('jquery-mousewheel')($);
require('gsap');
var ScrollMagic = require('scrollmagic');
require('../../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js');

function Scrollbar(selector) {

    this.element        = $(selector || '#nav');
    this.front          = this.element.find('.nav__front');
    this.sections       = $('.js-section');
    this.buttons        = this.element.find('.nav__back .nav__link');
    this.winHeigh       = $(window).height();
    this.sectionsHeight = []; // height of each section
    this.buttonsHeight  = []; // height of each button/.nav__link
    this.buttonsTop     = []; // offset top of each button/.nav__link
    this.height         = 0; // will be changed after scrolling of each section
    this.activeSection  = null;

}


Scrollbar.prototype._initEvents = function() {
    var _ = this;

    $(window).on('resize', function(e) {
        _.reinit();
        console.log(_.buttonsHeight, '\n', _.buttonsTop);
    });
    $(app.rootContainer).on('resize', function(e) {
        console.log(e);
    });

};


Scrollbar.prototype._calcButtonsParam = function() {
    var _ = this;

    $.each(_.buttons, function(index, el) {
        var width     = $(el).outerWidth(),
            offsetTop = $(el).offset().top;

        _.buttonsHeight[ index ] = width;
        _.buttonsTop[ index ] = offsetTop;
    });
};


Scrollbar.prototype._buildScenes = function() {
    var _ = this;

    //##### scrollmagic scene for scrollbar
    app.scrollmagic.scrollbar = {
        scenes: {}
    };

    $.each(_.sections, function(index, el) {
        var id = el.id ? app.util.toCamelCase(el.id) : 'section' + index,
            sectionHeight = $(el).outerHeight();

        _.sectionsHeight[ index ] = sectionHeight;

        app.scrollmagic.scrollbar.scenes[ id ] = new ScrollMagic.Scene({
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
                var delta = _.buttonsHeight[ index ] * e.progress;
                _.update(delta);
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


Scrollbar.prototype.init = function() {
    var _ = this;

    _._calcButtonsParam();
    _.height = _.buttonsTop[ 0 ];
    _._buildScenes();
    _._initEvents();
};


Scrollbar.prototype.reinit = function() {
    var _ = this;

    _._calcButtonsParam();
    // _.update();
    // _._buildScenes();
};


Scrollbar.prototype.update = function(scrollDelta) {
    var _     = this;
        delta = scrollDelta || 0;
    // translate pixels(number) to percents(string), relative to window height
    var percent = ((_.height + delta) / _.winHeigh * 100 ).toFixed(2) + '%';
    TweenMax.to(_.front, 0.2, {width: percent, overwrite: 'all', ease: Linear.easeNone});
};


module.exports = Scrollbar;