var $ = require('jquery');
var ScrollMagic = require('scrollmagic');

function Tabs(wrapper, tabButton, tabContent) {
    this.wrapper = $(wrapper);
    this.button  = this.wrapper.find(tabButton || '.btn_tab');
    this.content = this.wrapper.find(tabContent || '.tabs__content');
    this.activeTab = null;
    this.canSwitch = true;
    this.options = {
        dur: 400,
        hideDelay: 500,
        showDelay: 1000,
        animClass: 'is-animate',
        activeClass: 'is-active'
    };

    return this;
}

Tabs.prototype._initEvents = function() {
    var _ = this;

    _.content.each(function(index) {
        var el = $(this);
        if ( el.is(':visible') ) {
            el.hide();
        }
    });

    _.button.each(function(index) {
        var el = $(this);
        el.on('click', function(event) {
            event.preventDefault();

            if ( !_.canSwitch ) return;

            if ( _.activeTab !== null ) {
                if ( index != _.activeTab ) {

                    // setTimeout(function() {
                    //     _.showContent(index);
                    // }, _.options.showDelay);

                    // _.hideContent();
                    _.switchContent(index);
                    el.addClass(_.options.activeClass);
                } else {
                    _.hideContent();
                }

            } else {
                _.showContent(index);
            }
        });
    });
};

Tabs.prototype._toggleBorder = function() {
    var _ = this;
    var border = $(_.content[_.activeTab]).find('.table__border');
    border.toggleClass(_.options.animClass);
};

Tabs.prototype._showBorders = function() {
    var _ = this;
    var borders = _.wrapper.find('.table__border');
    borders.addClass(_.options.animClass);
};

Tabs.prototype._hideBorders = function() {
    var _ = this;
    var borders = _.wrapper.find('.table__border');
    borders.removeClass(_.options.animClass);
};

Tabs.prototype._buildScene = function() {
    var _ = this;

    new ScrollMagic.Scene({
        duration: '100%',
        offset: 0,
        triggerElement: _.wrapper[0],
        triggerHook: 'onEnter',
        loglevel: 1
    })
        .on('start end', function(e) {
            if ( _.activeTab !== null ) _.hideContent();
        })
        .setClassToggle(_.wrapper[0], _.options.animClass)
        .addTo(app.scrollmagic.controller);
};

Tabs.prototype.showContent = function(tabNumber) {
    var _       = this,
        button  = $(_.button[tabNumber]),
        content = $(_.content[tabNumber]);

    _.activeTab = tabNumber;
    _.canSwitch = false;

    if ( !button.hasClass(_.options.activeClass) ) button.addClass(_.options.activeClass);

    content.slideDown({
        duration: _.options.dur,
        start: function() {
            setTimeout(function() {
                // _._toggleBorder();
                _._showBorders();
            }, 100);
        },
        complete: function() {
            _.canSwitch = true;
        }
    });
};

Tabs.prototype.hideContent = function() {
    var _ = this;
    if ( _.activeTab === null ) return;
    _.canSwitch = false;
    // _._toggleBorder();
    _._hideBorders();
    _.button.removeClass(_.options.activeClass);
    $(_.content[_.activeTab])
        .delay(_.options.hideDelay)
        .slideUp({
            duration: _.options.dur,
            complete: function() {
                _.canSwitch = true;
            }
        });
    _.activeTab = null;
};

Tabs.prototype.switchContent = function(tabNumber) {
    var _       = this,
        content = $(_.content[tabNumber]);

    if ( _.activeTab === null ) return;
    _.canSwitch = false;
    _.button.removeClass(_.options.activeClass);
    $(_.content[_.activeTab]).slideUp(_.options.dur);
    content
        .delay(_.options.dur)
        .slideDown({
            duration: _.options.dur,
            complete: function() {
                _.activeTab = tabNumber;
                _.canSwitch = true;
            }
        });
};

Tabs.prototype.init = function() {
    var _ = this;
    _._initEvents();
    _._buildScene();

    return this;
};


module.exports = Tabs;