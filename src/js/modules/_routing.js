require('jquery');
require('sammy');
var Box = require('./_box.js');
var Tabs = require('./_tabs.js');
var ScrollMagic = require('scrollmagic');

var sections = [
    'home',
    'facts',
    'advantages',
    'capabilities',
    'partners',
    'contacts'
];


var router = $.sammy(function(router) {

    var loaded = {
        rent : false,
        buy: false,
        invest: false
    };

    router.element_selector = '#outer';
    router.debug = false;
    router.raise_errors = true;

    this.helpers({
        pathToId: function(str) {
            var id = '#' + str.slice(3);
            return id;
        }
    });

    this.notFound = function() {
        router.log('404. Not Found');
        // console.log();
    };

    this.get('#/', function() {
        console.log('#HOME');
    });

    this.get('#/objects/:category', function(context) {
        var category  = this.params.category,
            container = $('#objects-' + category);

        if ( !loaded[ category ] ) {
            context.load('partials/' + category + '.html')
                .then(function(content) {
                    container.html(content);

                    var box = container.find('.js-box');
                    var tabs2 = container.find('#invest-variants');

                    box.each(function(index, el) {
                        var id = el.id ? app.util.toCamelCase(el.id) : 'object' + index;
                        app.objects[ id ] = new Box().init(el);
                    });

                    if ( tabs2.length ) {
                        app.tabs2 = new Tabs('#invest-variants', '.btn_tab', '.tabs__content');

                        app.scrollmagic.tabs2 = {
                            el: tabs2,
                            borders: tabs2.find('.js-table'),
                            duration: 800,
                            offset: -100,
                            scene: null
                        };
                        app.scrollmagic.tabs2.scene = new ScrollMagic.Scene({
                            // duration: 800,
                            offset: -100,
                            triggerElement: app.scrollmagic.tabs2.el[0],
                            triggerHook: 'onCenter',
                            loglevel: 1
                        })
                            .on('start', function(e) {
                                if ( app.catalog.opened ) {
                                    $.each([app.scrollmagic.tabs2.el, app.scrollmagic.tabs2.borders], function() {
                                        $(this).toggleClass('is-animate');
                                    });
                                }
                            })
                            .addTo(app.scrollmagic.controller);
                    }

                    loaded[ category ] = true;
                    console.log(loaded);

                });
        }
        else {
            this.log('content is loaded');
        }

    });

    $.each(sections, function(index, val) {
        router.get('#/' + val, function() {
            // console.log(this);
            // var id = this.pathToId(this.path);
            // app.navbar.scrollToSection(id);

        });
    });

});

module.exports = router;