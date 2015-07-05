require('jquery');
require('gsap');
require('TimelineLite');

function Filter(element, filterContainer) {
    this.element    = element instanceof jQuery ? element : $(element);
    this.button     = this.element.find('input[type="radio"]');
    this.container  = filterContainer || this.element.next();
    this.allFilter  = 'all';
    this.animDur    = 1;

    this.init();

    return this;
}

Filter.prototype._show = function(el) {
    var _ = this;

    TweenMax.set(el, {display: ''});
    TweenMax.fromTo(el, _.animDur, {y: 50, opacity: 0}, {y: 0, opacity: 1, clearProps: 'all'});
};

Filter.prototype._hide = function(el) {
    var _ = this;

    TweenMax.fromTo(el, _.animDur, {y: 0, opacity: 1}, {y: 50, opacity: 0});
    TweenMax.set(el, {display: 'none', delay: _.animDur});
};

Filter.prototype.init = function() {
    var _     = this,
        idgen = 0,
        idprefix = "M" + (+new Date()).toString(36),
        id = idprefix + (idgen++).toString(36);

    if ( !_.container instanceof jQuery ) {
        _.container = _.element.siblings(_.container);
    }

    _.button.attr('name', id);

    _.button.on('change', function(e) {
        var filter = $(this).val();
        _.filterContent(filter);
    });
};

Filter.prototype.filterContent = function(filter) {
    var _  = this,
        tl = new TimelineLite(),
        content;

    content = _.container.find('[data-filter]');

    function filtering() {
        if ( filter === _.allFilter ) {
            content.each(function(index, el) {
                $(el).css('display', '');
            });
        }
        else {
            content.each(function(index, item) {
                var el = $(item);
                if ( el.data('filter') == filter ) {
                    el.css('display', '');
                }
                else {
                    el.hide();
                }
            });
        }
    }

    tl
        .fromTo(_.container, _.animDur / 2, {opacity: 1, y: 0}, {opacity: 0, y: 50})
        .add(function() {
            if ( app.closeAllOpenedObjects instanceof Function ) {
                app.closeAllOpenedObjects();
            }
            filtering();
        })
        .to(_.container, _.animDur / 2, {opacity: 1, y: 0, clearProps: 'all'});
};

module.exports = Filter;
