require('jquery');
require('slick-carousel');
require('../../../node_modules/gsap/src/uncompressed/TweenLite.js');
require('../../../node_modules/gsap/src/uncompressed/TimelineLite.js');
require('../../../node_modules/gsap/src/uncompressed/plugins/CSSPlugin.js');

function Category(wrapperSelector, itemSelector) {
    this.wrapper   = $(wrapperSelector);
    this.items     = this.wrapper.find(itemSelector).toArray();
    this.active    = false;
    this.opened    = false;
    this.wasActive = false;
    this.timeline  = null;
    this.classes   = {
        prev: 'is-prev',
        active: 'is-active',
        next: 'is-next'
    };
    this.options = {
        duration: 1,
        shiftY: -274,
        targetWidth: 1600,
        easing: Power1.easeNone,
        initSlide: 0,
        delayBeforeInit: 900,
    };
    this.slickOptions = {
        accessibility: false,
        autoplay: false,
        arrows: false,
        draggable: false,
        slide: itemSelector,
        speed: this.dur,
        swipe: false,
        fade: false,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        easing: 'easeInCubic',
        infinite: true,
        initialSlide: 1,
        slidesToShow: 3
    };
}

Category.prototype._initEvents = function() {
    var _ = this;

    $(_.items).bind('click', function() {
        _.options.initSlide = $(this).index();
    });
};

Category.prototype._init = function() {
    var _ = this;

    _.clonedItems = $(_.items).clone(true).addClass('clone');
    _.wrapper.append(_.clonedItems);
    _.wrapper.slick(_.slickOptions);
    setTimeout(function() {
        _.wrapper.slick('slickGoTo', _.options.initSlide);
    }, 200);
};

Category.prototype._destroy = function() {
    this.wrapper.slick('unslick');
    $(this.clonedItems).remove();
    $(this.items).removeClass(this.classes.active);
};

Category.prototype.enable = function() {
    var _ = this;
    if ( !_.wasActive ) {
        _._initEvents();
    }

    _.active = true;
    _.wasActive = true;

    setTimeout(function() {
        _._init();
    }, _.options.delayBeforeInit);
};

Category.prototype.disable = function() {
    if ( !this.active ) return;

    this.active = false;
    this._destroy();
};

Category.prototype.open = function() {
    if ( this.opened ) return;

    var _  = this;

    _.opened = true;

    _.timeline = new TimelineLite();

    _.timeline.eventCallback('onComplete', function(e) {
        // _._init();
        console.log('complete');
    });

    _.timeline.set(_.wrapper, {x: '-50%', marginLeft: 0});
    _.timeline.set(_.items, {width: ''});
    _.timeline.set(_.items, {width: '33.3333%'});

    _.timeline
        .to(_.wrapper, _.options.duration, {
            y: _.options.shiftY,
            width: _.options.targetWidth,
            ease: _.options.easing
            });

};

Category.prototype.close = function() {
    if ( !this.opened ) return;

    var _ = this;

    // _.timeline.eventCallback('onComplete', function(e) {
    //     // _.timeline = null;
    //     console.log(e);
    // });

    _.timeline
        .reversed(true);

    _.opened = false;

};


module.exports = Category;