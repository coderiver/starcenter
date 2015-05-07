// module.exports = function() {

    var win = $(window);

    $('.catalog__btns .btn').on('click', function(event) {
        event.preventDefault();
        if ( $(this).index() === 0 ) {
            slider1.makeHidden();
            catalog.open();
        } else {
            catalog.close();
            slider1.makeVisible();
        }
    });

    var catalog = {
        el: $('.catalog'),
        initClass: 'is-init',
        animClass: 'is-animate',
        doneClass: 'is-done',

        open: function() {
            var that = this;
            that.el.addClass(that.initClass);
            setTimeout(function() {
                that.el.addClass(that.animClass);
            }, 20);
            setTimeout(function() {
                that.el.addClass(that.doneClass);
                morph.toSquare();
            }, 200);
            that.setHeight();
            // this.el.nanoScroller();
        },
        close: function() {
            var that = this;
            that.el.removeClass(that.doneClass);
            morph.toCircle();
            setTimeout(function() {
                that.el.removeClass(that.animClass);
            }, 500);
            setTimeout(function() {
                that.el.removeClass(that.initClass);
                that.el.css('height', '');
                // that.el.nanoScroller({destroy: true});
            }, 700);
        },
        setHeight: function() {
            this.el.height(win.height());
        }
    };

    (function() {
        var setBodyClass = function(className) {
            $('html').addClass(className);
        };

        if ( navigator.appVersion.indexOf("Win") != -1 ) {
            setBodyClass('windows-os');
        }
        else if ( navigator.appVersion.indexOf("Mac") != -1 ) {
            setBodyClass('mac-os');
        }
        // else if ( navigator.appVersion.indexOf("X11") != -1 ) {
        //     setBodyClass('unix-os');
        // }
        // else if ( navigator.appVersion.indexOf("Linux") != -1 ) {
        //     setBodyClass('linux-os');
        // }

    })();

    var morph = {
        selector : '.morphFigure',
        elements: [],

        init: function() {
            var that = this;
            $(that.selector).each(function(index, el) {
                that.elements.push(el);
            });

            console.log(that.elements);

            $(that.elements).each(function(index, el) {
                $(el).bind('morphSquare', function(event) {
                    // event.preventDefault();
                    console.log('Event fired: ' + event.type);
                    el.children[0].beginElement();
                    el.children[1].beginElement();
                    el.children[2].beginElement();
                    el.children[3].beginElement();
                });
                $(el).bind('morphCircle', function(event) {
                    // event.preventDefault();
                    console.log('Event fired: ' + event.type);
                    el.children[4].beginElement();
                    el.children[5].beginElement();
                    el.children[6].beginElement();
                    el.children[7].beginElement();
                });
            });
        },
        toSquare: function() {
            $(this.elements).each(function(index, el) {
                $(el).trigger('morphSquare');
            });
        },
        toCircle: function() {
            $(this.elements).each(function(index, el) {
                $(el).trigger('morphCircle');
            });
        },
    };

    morph.init();

// };