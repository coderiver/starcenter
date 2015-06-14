var $ = require('jquery');
require('slick-carousel');
require('gsap');
require('TimelineLite');

function Category(element, itemSelector) {
    this.element   = $(element);
    this.items     = this.element.find(itemSelector).toArray();
    this.active    = false;
    this.hidden    = false;
    this.inProgress= false;
    this.initSlide = 0;
    this.direction = null;
    this.classes   = {
        animate: 'is-animate',
        active: 'is-active',
        standby: 'is-standby'
    };
    this.options = {
        duration: 800, // animation duration
        delay: 200, // deley before open
        shiftY: -274,
        initWidth: this.element.outerWidth(),
        targetWidth: 1500,
        easing: Power2.easeOut
    };
    this.slickOptions = {
        accessibility: false,
        autoplay: false,
        arrows: false,
        draggable: false,
        slide: itemSelector,
        speed: 500,
        swipe: false,
        fade: false,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        easing: 'easeInCubic',
        infinite: true,
        initialSlide: 1,
        slidesToShow: 3,
        respondTo: 'slider'
    };

    this._initEvents();

    return this;
}



Category.prototype._initEvents = function() {
    var _ = this;

    $(_.items).bind('click', function() {
        _.initSlide = $(this).index();
    });

    _.element.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        if ( currentSlide == slick.slideCount - 1 &&  nextSlide == 0 ) {
            _.direction = 'FORWARD';
        }
        else if ( currentSlide == 0 &&  nextSlide == slick.slideCount - 1 ) {
            _.direction = 'REVERSE';
        }
        else if ( nextSlide > currentSlide ) {
            _.direction = 'FORWARD';
        }
        else if ( nextSlide < currentSlide ) {
            _.direction = 'REVERSE';
        }
        else {
            _.direction = null;
        }
    });
};



Category.prototype._init = function(initSlide) {
    var _ = this,
        slideIndex = $.isNumeric(initSlide) ? initSlide : _.initSlide;

    _.clonedItems = $(_.items).clone(true).addClass('clone');
    _.element.append(_.clonedItems);
    setTimeout(function() {
        _.element.slick(_.slickOptions);
        _.element.slick('slickGoTo', slideIndex);
    }, 0);
};



Category.prototype._destroy = function() {
    var _ = this;

    _.element.slick('unslick');
    $(_.clonedItems).remove();
    $(_.items).removeClass(_.classes.active);
    _.direction = null;
};



Category.prototype.initSlider = function(initSlideIndex) {
    var _  = this;

    _._init(initSlideIndex);
};



Category.prototype.open = function(duration, delay) {
    if ( this.active || this.inProgress ) return;

    var _   = this,
        dur = duration / 1000 || _.options.duration / 1000,
        del = delay / 1000 || _.options.delay / 1000,
        tl  = new TimelineLite();

    tl
        .add(function() {
            _.inProgress = true;
            })
        .delay(del)
        .addLabel('afterDelay')
        .add(function() {
            _.element.addClass(_.classes.animate);
            }, 'afterDelay')
        .to(_.element, 0, {x: '-50%', marginLeft: 0}, 'afterDelay')
        .to(_.element, dur, {
            y: _.options.shiftY,
            width: _.options.targetWidth,
            ease: _.options.easing
            })
        .add(function() {
            _._init();
            _.element.addClass(_.classes.active);
            _.inProgress = false;
            _.active = true;
            });
};



Category.prototype.close = function(duration, delay) {
    if ( !this.active || this.inProgress ) return;

    var _   = this,
        dur = duration / 1000 || _.options.duration / 1000,
        del = delay / 1000 || 0,
        tl  = new TimelineLite();

    tl
        .add(function() {
            _.inProgress = true;
            })
        .delay(del)
        .add(function() {
            _.element.removeClass(_.classes.active);
            _._destroy();
            })
        .to(_.element, dur, {
            y: 0,
            width: _.options.initWidth,
            ease: _.options.easing,
            clearProps: 'all'
            })
        .add(function() {
            _.element.removeClass(_.classes.animate);
            _.inProgress = false;
            _.active = false;
            });
};



Category.prototype.toggleHidden = function(animDur, animDelay) {
    var _   = this,
        dur = $.isNumeric(animDur) ? animDur / 1000 : 0.5,
        del = $.isNumeric(animDelay) ? animDelay / 1000 : _.options.duration / 1000;

    if ( _.hidden ) {
        TweenMax.fromTo(_.element, dur,
            {autoAlpha: 0, y: 50},
            {autoAlpha: 1, y:  0, clearProps: 'all', ease: _.options.easing, delay: del}
            );
        _.hidden = false;
    } else {
        TweenMax.fromTo(_.element, dur,
            {autoAlpha: 1, y:  0},
            {autoAlpha: 0, y: 50, ease: _.options.easing}
            );
        _.hidden = true;
    }
};



Category.prototype.activate = function(duration, delay) {
    if ( this.active || this.inProgress ) return;

    var _   = this,
        dur = duration / 1000 || _.options.duration / 1000,
        del = delay / 1000 || _.options.delay / 1000,
        tl  = new TimelineLite();

    _.element
        .removeClass(_.classes.standby)
        .addClass(_.classes.animate)
        .addClass(_.classes.active);

    _.active = true;
};



Category.prototype.deactivate = function(duration, delay) {
    if ( !this.active || this.inProgress ) return;

    var _   = this,
        dur = duration || _.options.duration,
        del = delay || _.options.delay,
        tl  = new TimelineLite();

    _.element.removeClass(_.classes.active);

    setTimeout(function() {
        _.element.removeClass(_.classes.animate);
        _.active = false;
    }, dur);

    setTimeout(function() {
        _.element.addClass(_.classes.standby);
    }, dur + 100);
};



module.exports = Category;