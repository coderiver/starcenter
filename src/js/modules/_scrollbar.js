var $ = require('jquery');
// require('jquery-mousewheel')($);
require('gsap');
var ScrollMagic = require('scrollmagic');
require('../../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js');

function Scrollbar(selector) {

    this.element        = $(selector || '#nav');
    this.back           = this.element.find('.nav__back');
    this.front          = this.element.find('.nav__front');
    this.sections       = $('.js-section');
    this.sectionsHeight = [];
    this.buttonsHeight  = [];
    this.percentageHight = [];
    this.root           = app.rootContainer;
    this.scrollable     = $('#inner');
    this.scrollhight    = null;
    this.height         = 0;
    this.buttons        = this.front.find('li');
    this.winHeigh       = $(window).height();

    // this._initEvents();

}


Scrollbar.prototype._initEvents = function() {
    var _ = this;

    app.rootContainer.on('mousewheel DOMMouseScroll', function(e) {
        // e.preventDefault();
        // console.log(e);
        console.log(event.deltaY, event.deltaFactor);
    });
};


Scrollbar.prototype._calcScrollHeight = function() {
    var _            = this;
        marginBottom = parseInt(_.scrollable.css('margin-bottom'));

    _.scrollhight = _.scrollable.outerHeight() + marginBottom - _.winHeigh;

    return _.scrollhight;
};


Scrollbar.prototype.init = function() {
    var _ = this;

    _._calcScrollHeight();
    _._calcButtonsHeight();

    //##### scrollmagic scene for scrollbar
    app.scrollmagic.scrollbar = {
        scenes: {}
    };

    $.each(_.sections, function(index, el) {
        var id            = 'section' + index,
            sectionHeight = $(el).outerHeight();

        _.sectionsHeight[ index ] = sectionHeight;

        app.scrollmagic.scrollbar.scenes[id] = new ScrollMagic.Scene({
            duration: sectionHeight,
            triggerElement: el,
            triggerHook: 'onCenter',
            loglevel: 1
        })
            .on('start', function(e) {
                if (e.scrollDirection == 'REVERSE') {
                    var i = index;
                    _.height -= _.percentageHight[ --i ];
                    _.update();
                }
            })
            .on('progress', function(e) {
                var delta = _.percentageHight[ index ] * e.progress;
                console.log(_.height);
                _.update(delta);
            })
            .on('end', function(e) {
                if (e.scrollDirection == 'FORWARD') {
                    _.height += _.percentageHight[ index ];
                    _.update();
                }
            })
            .addTo(app.scrollmagic.controller);
    });
};



Scrollbar.prototype._calcButtonsHeight = function() {
    var _ = this,
        buttonsHeight = [],
        allButtonsHeight = 0,
        space;


    $.each(_.buttons, function(index, el) {
        var width = $(el).outerWidth();
        allButtonsHeight += width;
        buttonsHeight[ index ] = width;
        if ( index == _.buttons.length - 1) {
            console.log(allButtonsHeight);
        }
    });

    space = (_.winHeigh - allButtonsHeight) / _.buttons.length;

    _.percentageHight = buttonsHeight.map(function(val, index) {
        return ( (val + space) / _.winHeigh * 100 );
    });
    console.log(buttonsHeight, _.percentageHight);
};


Scrollbar.prototype.update = function(scrollDelta) {
    var _     = this;
        delta = scrollDelta || 0;

    // var percent = ((_.height + delta) / _.scrollhight * 100 ).toFixed(2) + '%';
    var percent = ( _.height + delta ).toFixed(2) + '%';
    TweenMax.to(_.front, 0.2, {width: percent, overwrite: 'all', ease: Linear.easeNone});
};


module.exports = Scrollbar;