var paper = require('paper');
var $     = require('jquery');


var Morph = function(canvasObj) {

    this.canvas = canvasObj[0];
    this.dur    = 400;
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
            fill: new paper.Path.Rectangle({
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
                position: [paper.view.center.x, paper.view.center.y + 300]
            }),
            // new paper.Raster({
            //     source: '/img/canvas2.png',
            //     position: [paper.view.center.x, paper.view.center.y + 300]
            // }),
            // new paper.Raster({
            //     source: '/img/canvas3.png',
            //     position: [paper.view.center.x, paper.view.center.y + 300]
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

    console.log(this.group);
};

Morph.prototype._initEvents = function() {
    var that = this;
    var clickCount = 0;

    this.group.onClick = function() {
        if ( clickCount === 0 ) {
            that.square();
        }
        if ( clickCount === 1 ) {
            that.triangle();
        }
        if ( clickCount === 2 ) {
            that.circle();
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
            // {x: -255, y:    0},
            // {x:    0, y: -255},
            // {x:  255, y:    0},
            // {x:    0, y:  255},
        ],
        square: [
            {x: -this.sizes.square / 2, y: -this.sizes.square / 2},
            {x:  this.sizes.square / 2, y: -this.sizes.square / 2},
            {x:  this.sizes.square / 2, y:  this.sizes.square / 2},
            {x: -this.sizes.square / 2, y:  this.sizes.square / 2}
            // {x: -225, y: -225},
            // {x:  225, y: -225},
            // {x:  225, y:  225},
            // {x: -225, y:  225},
        ],
        triangle: [
            {x: -0.36207 * this.sizes.triangle / 2, y: 0.58621 * this.sizes.triangle / 2},
            {x:           -this.sizes.triangle / 2, y: 0.39310 * this.sizes.triangle / 2},
            {x:  0.53448 * this.sizes.triangle / 2, y:          -this.sizes.triangle / 2},
            {x:            this.sizes.triangle / 2, y:           this.sizes.triangle / 2}
            // {x: -105, y:  170},
            // {x: -290, y:  114},
            // {x:  155, y: -290},
            // {x:  290, y:  290},
        ]
    };
};

Morph.prototype.update = function() {
    this._render();
};

Morph.prototype._morph = function(state) {

    var prevState  = this._getState();

    if ( state == prevState ) return;

    console.log('%c' + prevState + ' => ' + state, 'background:yellow');

    var vertexes   = [],
        vectorArr  = [],
        callCount  = this.dur * 60 / 1000, // morph anim duration * frame per second
        morphPath  = this.objects.paths.morph,
        segments   = morphPath.segments,
        prevPoints = this._translateCoordinates(this.point[prevState]),
        points     = this._translateCoordinates(this.point[state]);

    $.each(segments, function(index, segment) {
        vertexes.push(segment.point);
    });

    for (var i = 0; i < points.length; i++) {
        var x = prevPoints[i].x - points[i].x;
        var y = prevPoints[i].y - points[i].y;
        vectorArr.push({x: x, y: y});
    }

    morphPath.onFrame = function(event) {
        var i;

        if ( event.count < callCount ) {
            for ( i = 0; i < vertexes.length; i++ ) {
                vertexes[i].x -= vectorArr[i].x / callCount;
                vertexes[i].y -= vectorArr[i].y / callCount;
            }

            if ( prevState == 'circle' ) {
                segments[0].handleIn.y = segments[1].handleOut.x =
                segments[2].handleOut.y = segments[3].handleIn.x -= 140 / callCount;
                segments[0].handleOut.y = segments[1].handleIn.x =
                segments[2].handleIn.y = segments[3].handleOut.x += 140 / callCount;
            }

            if ( state == 'circle' ) {
                segments[0].handleIn.y = segments[1].handleOut.x =
                segments[2].handleOut.y = segments[3].handleIn.x += 140 / callCount;
                segments[0].handleOut.y = segments[1].handleIn.x =
                segments[2].handleIn.y = segments[3].handleOut.x -= 140 / callCount;
            }
        }
        else {
            for ( i = 0; i < vertexes.length; i++ ) {
                vertexes[i].x = points[i].x;
                vertexes[i].y = points[i].y;
            }

            if ( prevState == 'circle' ) {
                segments[0].handleIn.y = segments[1].handleOut.x =
                segments[2].handleOut.y = segments[3].handleIn.x = 0;
                segments[0].handleOut.y = segments[1].handleIn.x =
                segments[2].handleIn.y = segments[3].handleOut.x = 0;
            }

            if ( state == 'circle' ) {
                segments[0].handleIn.y = segments[1].handleOut.x =
                segments[2].handleOut.y = segments[3].handleIn.x = 140;
                segments[0].handleOut.y = segments[1].handleIn.x =
                segments[2].handleIn.y = segments[3].handleOut.x = -140;
            }
        }

        if ( event.count == callCount ) morphPath.onFrame = undefined;
    };

    this._updateState(state);

    // console.log(path);
    console.log(segments);
    // console.log(vertexes);
    console.log(vectorArr);
    console.log(points);
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

Morph.prototype._translateCoordinates = function(pointsArray) {
    var arr = [];
    $.each(pointsArray, function(index, value) {
        var x = value.x + paper.view.center.x;
        var y = value.y + paper.view.center.y;
        arr.push({x: x, y: y});
    });
    return arr;
};


module.exports = Morph;