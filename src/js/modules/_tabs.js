var $ = require('jquery');

function Tabs(wrapper, tabButton, tabContent) {
    this.wrapper = $(wrapper);
    this.button  = this.wrapper.find(tabButton);
    this.content = this.wrapper.find(tabContent);
    this.activeTab = null;
    this.canSwitch = true;
    this.options = {
        dur: 400,
        hideDelay: 500,
        showDelay: 1000,
        animClass: 'is-animate',
        activeClass: 'is-active'
    };
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

                    setTimeout(function() {
                        _.showContent(index);
                    }, _.options.showDelay);

                    _.hideContent();
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
                _._toggleBorder();
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
    _._toggleBorder();
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

Tabs.prototype._toggleBorder = function() {
    var _ = this;
    var border = $(_.content[_.activeTab]).find('.table__border');
    border.toggleClass(_.options.animClass);
};

Tabs.prototype.init = function() {
    var _ = this;
    _._initEvents();
};


module.exports = Tabs;