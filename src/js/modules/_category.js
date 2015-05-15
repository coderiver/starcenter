require('jquery');
require('jquery.easing');
require('slick-carousel');

function Category(wrapperSelector, itemSelector) {
    this.wrapper = $(wrapperSelector);
    this.items   = this.wrapper.find(itemSelector).toArray();
    this.classes = {
        prev: 'is-prev',
        active: 'is-active',
        next: 'is-next'
    };
    this.options = {
        duration: 500,
        easing: 'easeInCubic',
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
    var that = this;

    $(that.items).bind('click', function() {
        that.options.initSlide = $(this).index();
        console.log(that.options.initSlide);
    });

    that.wrapper.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $(slick.$slides[currentSlide]).removeClass(that.classes.active);
        $(slick.$slides[nextSlide]).addClass(that.classes.active);
    });
    // that.wrapper.on('afterChange', function(event, slick, currentSlide) {
    //     $(slick.$slides[currentSlide]).addClass(that.classes.active);
    // });
};

Category.prototype._init = function() {
    var that = this;

    that.clonedItems = $(that.items).clone(true).addClass('clone');
    that.wrapper.append(that.clonedItems);
    that.wrapper.slick(that.slickOptions);
    that.wrapper.slick('slickGoTo', that.options.initSlide);
};

Category.prototype._destroy = function() {
    this.wrapper.slick('unslick');
    $(this.clonedItems).remove();
    $(this.items).removeClass(this.classes.active);
};

Category.prototype.enable = function() {
    var that = this;

    that._initEvents();

    setTimeout(function() {
        that._init();
    }, that.options.delayBeforeInit);
};

Category.prototype.disable = function() {
    var that = this;
    this._destroy();
};

module.exports = Category;