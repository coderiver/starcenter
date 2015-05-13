var $ = require('jquery');

function Buttons(wrapperSelector, buttonSelector) {
    this.wrapper = $(wrapperSelector);
    this.btns    = $(buttonSelector).toArray();
    this.classes = {
        active: 'is-active',
    };
}

Buttons.prototype._activate = function() {
    this.wrapper.addClass(this.classes.active);
};

Buttons.prototype.activate = function() {

};



module.exports = Buttons;