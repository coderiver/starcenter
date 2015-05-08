var paper = require('paper');
var $     = require('jquery');


var Morph = function(canvasObj) {

    this.canvas = canvasObj[0];
    this.dur    = 500;
    this.state  = 'circle'; // can be circle, square or triangle

};

Morph.prototype._initContent = function() {
    var children = [];

    paper.setup(this.canvas);

    this.sizes = {
        circle  : 510,
        square  : 480,
        triangle: 580,
    };

    this.objects = {
        paths: {
            morph: new paper.Path.Circle({
                center: [paper.view.center.x, paper.view.center.y],
                radius: this.sizes.circle / 2,
                fillColor: {
                    gradient: {
                        stops: ['#54B7C6', '#CDF0E9']
                    },
                    origin: [paper.view.center.x, paper.view.center.y - this.sizes.circle / 2],
                    destination: [paper.view.center.x, paper.view.center.y + this.sizes.circle / 2]
                }
            }),
            circle: new paper.Path.Rectangle({
                center: [paper.view.center.x, paper.view.center.y],
                // radius: this.sizes.circle / 2,
                size: [this.sizes.triangle, this.sizes.triangle],
                fillColor: {
                    gradient: {
                        stops: ['#54B7C6', '#CDF0E9']
                    },
                    origin: [paper.view.center.x, paper.view.center.y - this.sizes.triangle / 2],
                    destination: [paper.view.center.x, paper.view.center.y + this.sizes.triangle / 2]
                }
            })
        },
        raster: [
            new paper.Raster({
                source: '/img/canvas1.png',
                position: [paper.view.center.x, paper.view.center.y]
            }),
            // new paper.Raster({
            //     source: '/img/canvas2.png',
            //     position: paper.view.center
            // }),
            // new paper.Raster({
            //     source: '/img/canvas3.png',
            //     position: paper.view.center
            // })
        ]
    };

    $.each(this.objects.paths, function(index, path) {
        children.push(path);
    });

    $.each(this.objects.raster, function(index, raster) {
        console.log(raster);
        raster.onLoad = function() {
            var x = paper.view.center.x;
            var y = paper.view.center.y + raster.height / 2 + 10;
            raster.position.y = y;
        };
        children.push(raster);
    });

    this.group = new paper.Group({
        children: children,
        clipped: true
    });
};

Morph.prototype._initEvents = function() {
    var that = this;
    var clickCount = 0;

    this.group.onClick = function() {
        if ( clickCount === 0 ) {
            that.circle();
        }
        if ( clickCount === 1 ) {
            that.square();
        }
        if ( clickCount === 2 ) {
            that.triangle();
            clickCount = 0;
            return;
        }
        clickCount++;
    };

    // paper.view.onFrame = function(event) {
    //     console.log(event);
    // };

    // setTimeout(function() {
    //     paper.view.onFrame = null;
    // }, 2000);
};

Morph.prototype._render = function() {
    paper.view.draw();
};

Morph.prototype.init = function() {
    this._initContent();
    this._initEvents();
    this._render();
    this._calcPoints();
    // this._morph();
    console.log(paper.view);
};

Morph.prototype._calcPoints = function() {
    // coordinates of vertexes for each morph state relative to view.center
    this.point = {
        circle: [
            {x: -this.sizes.circle / 2, y:                      0},
            {x:                      0, y: -this.sizes.circle / 2},
            {x:  this.sizes.circle / 2, y:                      0},
            {x:                      0, y:  this.sizes.circle / 2}
        ],
        square: [
            {x: -this.sizes.square / 2, y: -this.sizes.square / 2},
            {x:  this.sizes.square / 2, y: -this.sizes.square / 2},
            {x:  this.sizes.square / 2, y:  this.sizes.square / 2},
            {x: -this.sizes.square / 2, y:  this.sizes.square / 2}
        ],
        triangle: [
            {x: -0.59655 * this.sizes.triangle / 2, y: 0.55172 * this.sizes.triangle / 2},
            {x:           -this.sizes.triangle / 2, y: 0.39310 * this.sizes.triangle / 2},
            {x:  0.53448 * this.sizes.triangle / 2, y:          -this.sizes.triangle / 2},
            {x:            this.sizes.triangle / 2, y:           this.sizes.triangle / 2}
        ]
    };
};

Morph.prototype.update = function() {
    this._render();
};

Morph.prototype._morph = function(state) {
    var vertexes   = [],
        vectorArr  = [],
        callCount  = this.dur * 60 / 1000, // morph anim duration * frame per second
        path       = this.objects.paths.morph,
        segments   = path.segments,
        prevState  = this._getState(),
        prevPoints = this.point[prevState],
        points     = this.point[state];

    if ( state == prevState ) return;

    $.each(segments, function(index, segment) {
        vertexes.push(segment.point);
    });

    $.each(points, function(index, point) {
        console.log(index);
        var x = vertexes[index].x - paper.view.center.x - point.x;
        var y = vertexes[index].y - paper.view.center.y - point.y;
        vectorArr.push({x: x, y: y});
    });

    path.onFrame = function(event) {

        $.each(vertexes, function(index, vertex) {
            vertex.x += vectorArr[index].x / callCount;
            vertex.y += vectorArr[index].y / callCount;
        });

        segments[0].handleIn.y = segments[1].handleOut.x =
        segments[2].handleOut.y = segments[3].handleIn.x -= 140 / callCount;
        segments[0].handleOut.y = segments[1].handleIn.x =
        segments[2].handleIn.y = segments[3].handleOut.x += 140 / callCount;

        if ( event.count == callCount ) path.onFrame = undefined;
    };

    this._updateState(state);

    var _ = this;

    // console.log(path);
    // console.log(segments);
    console.log(vertexes);
    console.log(vectorArr);
    console.log(_);
};

Morph.prototype.square = function() {
    this._morph('square');
};

Morph.prototype.triangle = function() {
    this._morph('triangle');
};

Morph.prototype.circle = function() {
    this._morph('circle');
};

Morph.prototype._updateState = function(state) {
    this.state = state;
};

Morph.prototype._getState = function() {
    return this.state;
};


module.exports = Morph;