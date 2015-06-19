var $ = require('jquery');

function BackButton(selector, onClickFunction) {
    this.element  = $(selector);
    this.active   = false;
    this.activeClass = 'is-visible';
    this.onClickFunction = typeof onClickFunction == 'function' ? onClickFunction : function() {};

    if ( typeof onClickFunction != 'undefined' ) this._init();
}

BackButton.prototype.visible = function(timeout) {
    var _ = this;
    if ( _.active ) return;
    setTimeout(function() {
        _.element.addClass(_.activeClass);
        _.active = true;
    }, timeout || 0);
};

BackButton.prototype.hidden = function(timeout) {
    var _ = this;
    if ( !_.active ) return;
    setTimeout(function() {
        _.element.removeClass(_.activeClass);
        _.active = false;
    }, timeout || 0);
};

BackButton.prototype._init = function() {
    var _ = this;
    _.element.on('click', function(e) {
        e.preventDefault();
        _.onClickFunction();
    });
};

module.exports = BackButton;