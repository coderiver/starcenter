require('jquery');

var morph = {
    selector : '.morphFigure',
    elements: [],

    init: function() {
        var that = this;
        $(that.selector).each(function(index, el) {
            that.elements.push(el);
        });

        $(that.elements).each(function(index, el) {
            $(el).bind('morphSquare', function(event) {
                console.log('Event fired: ' + event.type);
                el.children[0].beginElement();
                el.children[1].beginElement();
                el.children[2].beginElement();
                el.children[3].beginElement();
            });
            $(el).bind('morphCircle', function(event) {
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

module.exports = morph;