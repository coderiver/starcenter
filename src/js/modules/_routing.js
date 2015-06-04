require('jquery');
require('sammy');

var sections = [
    'home',
    'facts',
    'advantages',
    'capabilities',
    'partners',
    'contacts'
];


var router = $.sammy(function(router) {

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
        var category = this.params.category,
            container = $('#objects-' + category);
        context.load('partials/' + category + '.html')
            .then(function(content) {
                container.html(content);
                console.log(category, container);
            });
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