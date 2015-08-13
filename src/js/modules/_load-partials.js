var Box        = require('./_box.js');
var Tabs       = require('./_tabs.js');
var Filter     = require('./_filter.js');
var formSubmit = require('./_form-submit.js');

module.exports = function(url, div) {

    var container = div instanceof jQuery ? div : $(div);
    // var partialUrl;

    // if ($('html').attr('lang') === 'en') {
    //     partialUrl = url.replace('partials', 'partials/en');
    // } else {
    //     partialUrl = url;
    // }

    container.load(url, function(content) {

        var box    = container.find('.js-box');
        var tabs   = container.find('.js-tabs-2');
        var filter = container.find('.filter');
        var form   = container.find('form');

        if ( box.length ) {
            box.each(function(index, el) {
                new Box().init(el);
            });
        }

        if ( tabs.length ) {
            $.each(tabs, function(index, el) {
                new Tabs(el).init();
            });
        }

        if ( filter.length ) {
            $.each(filter, function(index, el) {
                new Filter(el);
            });
        }

        if ( form.length ) {
            $.each(form, function(index, el) {
                formSubmit(el);
            });
        }
    });

};
