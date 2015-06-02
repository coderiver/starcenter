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

    this.helpers({
        pathToId: function(str) {
            var id = '#' + str.slice(3);
            return id;
        }
    });

    this.get('/', function() {
        console.log('#HOME');
        console.log(this);
    });

    this.get('#/rent', function() {
        console.log('#RENT');
        // content.html('content');
    });

    this.get('#/buy', function() {
        console.log('#BUY');
        // content.html('content');
    });

    this.get('#/invest', function() {
        console.log('#INVEST');
        // content.html('content');
    });

    $.each(sections, function(index, val) {
        router.get('#/' + val, function() {
            var id = this.pathToId(this.path);
            app.navbar.scrollToSection(id);
        });
    });

});

module.exports = router;