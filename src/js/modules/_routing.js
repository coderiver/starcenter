require('jquery');
require('sammy');


var router = $.sammy(function() {
    this.get('/', function() {
        console.log('#HOME');
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
});

module.exports = router;