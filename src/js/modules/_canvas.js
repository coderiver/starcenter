var paper = require('paper');
var $     = require('jquery');
var TWEEN = require('tween.js');


var Morph = function(canvasObj) {

    this.canvas = canvasObj[0];
    this.dur    = 500;
    this.state  = 'circle'; // can be circle, square or triangle
    this.sizes  = {
        circle  : 510,
        square  : 480,
        triangle: 580,
    };

};

Morph.prototype._initContent = function() {
    var front = [],
        back  = [];
        state = this.state;

    paper.setup(this.canvas);

    this.backGroup  = new paper.Group();
    this.frontGroup = new paper.Group();

    this.objects = {
        paths: {
            morph: new paper.Path.Circle({
                center: [paper.view.center.x, paper.view.center.y],
                radius: this.sizes.circle / 2,
                // fillColor: '#ccc',
                // stroke: 1,
                // strokeColor: 'red'
            }),
            fill: new paper.Path.Rectangle({
                center: paper.view.center,
                size: [paper.view.viewSize.width, paper.view.viewSize.height],
                // visible: false,
                fillColor: {
                    gradient: {
                        stops: ['#54B7C6', '#CDF0E9']
                    },
                    origin: [paper.view.center.x, paper.view.center.y - this.sizes.triangle / 2],
                    destination: [paper.view.center.x, paper.view.center.y + this.sizes.triangle / 2]
                }
            })
        },
        raster: {
            circle: {
                shift: {x: 111, y: 92},
                pic: new paper.Raster({
                    source: '/img/canvas1.png',
                    position: paper.view.center,
                    visible: true,
                }),
                altPic: new paper.Raster({
                    source: '/img/canvas1.png',
                    position: paper.view.center,
                    visible: true,
                    opacity: 0
                })
            },
            square: {
                shift: {x: 0, y: 131},
                pic: new paper.Raster({
                    source: '/img/canvas2.png',
                    position: paper.view.center,
                    visible: true,
                }),
                altPic: new paper.Raster({
                    source: '/img/canvas2.png',
                    position: paper.view.center,
                    visible: true,
                    opacity: 0
                })
            },
            triangle: {
                shift: {x: 45, y: 90},
                pic: new paper.Raster({
                    source: '/img/canvas3.png',
                    position: paper.view.center,
                    visible: true,
                }),
                altPic: new paper.Raster({
                    source: '/img/canvas3-1.png',
                    position: paper.view.center,
                    visible: true,
                    opacity: 0
                })
            }
        },
        other: {
            rectangle: new paper.Path.Rectangle({
                center: paper.view.center,
                size: [1224, 160],
                strokeWidth: 3,
                // strokeScaling: false,
                strokeColor: '#333',
            })
        }
    };

    $.each(this.objects.paths, function(index, path) {
        front.push(path);
    });

    $.each(this.objects.other, function(index, path) {
        back.push(path);
    });

    // set positioning for raster objects after their load
    $.each(this.objects.raster, function(index, raster) {
        // set positioning for raster for current state
        // if ( index == state ) {
        //     raster.pic.onLoad = function() {
        //         raster.pic.position.x += raster.shift.x;
        //         raster.pic.position.y += raster.shift.y;
        //     };
        //     raster.altPic.onLoad = function() {
        //         raster.altPic.position.x += raster.shift.x;
        //         raster.altPic.position.y += raster.shift.y;
        //         raster.altPic.opacity = 1;
        //     };
        //     front.push(raster.pic);
        //     back.push(raster.altPic);
        //     return;
        // }
        raster.pic.onLoad = function() {
            raster.pic.position.x += raster.pic.width;
            raster.pic.position.y += raster.shift.y;
        };
        raster.altPic.onLoad = function() {
            raster.altPic.position.x += (raster.altPic.width / 2);
            raster.altPic.position.y += raster.shift.y;
        };
        front.push(raster.pic);
        back.push(raster.altPic);
    });

    this.backGroup.set({
        children: back
    });

    this.frontGroup.set({
        children: front,
        clipped: true
    });

};

Morph.prototype._initEvents = function() {
    var that = this;
    var clickCount = 0;

    paper.view.onFrame = function(event) {
        TWEEN.update();
    };

    this.frontGroup.onClick = function() {
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
    var c = this.sizes.circle,
        s = this.sizes.square,
        t = this.sizes.triangle,
        point;

    // coordinates of vertexes for each morph state relative to view.center
    point = {
        circle: [
            {x: -c/2, y:    0, handle: {x:    0, y:  140}},
            {x:    0, y: -c/2, handle: {x: -140, y:    0}},
            {x:  c/2, y:    0, handle: {x:    0, y: -140}},
            {x:    0, y:  c/2, handle: {x:  140, y:    0}}
            // {x: -255, y:    0},
            // {x:    0, y: -255},
            // {x:  255, y:    0},
            // {x:    0, y:  255},
        ],
        square: [
            {x: -s/2, y: -s/2, handle: {x: 0, y: 0}},
            {x:  s/2, y: -s/2, handle: {x: 0, y: 0}},
            {x:  s/2, y:  s/2, handle: {x: 0, y: 0}},
            {x: -s/2, y:  s/2, handle: {x: 0, y: 0}}
            // {x: -225, y: -225},
            // {x:  225, y: -225},
            // {x:  225, y:  225},
            // {x: -225, y:  225},
        ],
        triangle: [
            {x: -0.36207 * t/2, y: 0.58621 * t/2, handle: {x: 0, y: 0}},
            {x:           -t/2, y: 0.39310 * t/2, handle: {x: 0, y: 0}},
            {x:  0.53448 * t/2, y:          -t/2, handle: {x: 0, y: 0}},
            {x:            t/2, y:           t/2, handle: {x: 0, y: 0}}
            // {x: -105, y:  170},
            // {x: -290, y:  114},
            // {x:  155, y: -290},
            // {x:  290, y:  290},
        ]
    };

    this.point = {
        circle:   this._translateCoordinates(point.circle),
        square:   this._translateCoordinates(point.square),
        triangle: this._translateCoordinates(point.triangle)
    };
};

Morph.prototype._changePicture = function(state) {
    var prevState = this._getState();

    if (state == prevState) return;

    var easing = TWEEN.Easing.Cubic.In,
        dur    = 0.7 * this.dur,
        altDur = this.dur,
        delay  = altDur - dur,
        raster;

    raster = {
        prev : {
            pic         : this.objects.raster[prevState].pic,
            altPic      : this.objects.raster[prevState].altPic,
            initPosX    : paper.view.center.x + this.objects.raster[prevState].shift.x,
            initAltPosX : paper.view.center.x + this.objects.raster[prevState].shift.x,
            posX        : paper.view.center.x - this.objects.raster[prevState].pic.width,
            altPosX     : paper.view.center.x - this.objects.raster[prevState].altPic.width / 2,
            opacity     : 0,
            delay       : 0
        },
        next : {
            pic         : this.objects.raster[state].pic,
            altPic      : this.objects.raster[state].altPic,
            initPosX    : paper.view.center.x + this.objects.raster[state].pic.width,
            initAltPosX : paper.view.center.x + this.objects.raster[state].altPic.width / 2,
            posX        : paper.view.center.x + this.objects.raster[state].shift.x,
            altPosX     : paper.view.center.x + this.objects.raster[state].shift.x,
            opacity     : 1,
            delay       : 100
        }
    };

    console.log(raster);

    raster.next.pic.position.x    = raster.next.initPosX;
    raster.next.altPic.position.x = raster.next.initAltPosX;

    $.each(raster, function(index, item) {
        new TWEEN.Tween(item.pic.position)
            .to({x: item.posX}, dur)
            .easing(easing)
            .onUpdate(function() {
                item.pic.position.x = this.x;
            })
            .delay(item.delay)
            .start();

        new TWEEN.Tween(item.altPic.position)
            .to({x: item.posX}, altDur)
            .easing(easing)
            .onUpdate(function() {
                item.altPic.position.x = this.x;
            })
            .delay(item.delay)
            .start();

        new TWEEN.Tween(item.altPic)
            .to({opacity: item.opacity }, dur)
            .easing(easing)
            .onUpdate(function() {
                item.altPic.opacity = this.opacity;
            })
            .delay(item.delay)
            .start();
    });

};

Morph.prototype.update = function() {
    this._render();
};

Morph.prototype._morph = function(state) {

    var prevState  = this._getState();

    if ( state == prevState ) return;

    console.log('%c' + prevState + ' => ' + state, 'background:yellow');


    var duration   = this.dur,
        callCount  = duration * 60 / 1000, // morph anim duration * frame per second
        easing     = TWEEN.Easing.Cubic.Out,
        morphPath  = this.objects.paths.morph,
        segments   = morphPath.segments,
        prevPoints = this.point[prevState],
        points     = this.point[state];

    // console.log(segments);
    // console.log(points);

    $.each(segments, function(index, segment) {
        new TWEEN.Tween(segment.point)
            .to(points[index], duration)
            .easing(easing)
            .onUpdate(function() {
                segment.point.x = this.x;
                segment.point.y = this.y;
            })
            .start();

        if ( prevState == 'circle' || state == 'circle' ) {
            new TWEEN.Tween(segment.handleIn)
                .to(points[index].handle, duration)
                .easing(easing)
                .onUpdate(function() {
                    segment.handleIn.x  = this.x !== 0 ?  this.x : 0;
                    segment.handleOut.x = this.x !== 0 ? -this.x : 0;
                    segment.handleIn.y  = this.y !== 0 ?  this.y : 0;
                    segment.handleOut.y = this.y !== 0 ? -this.y : 0;
                })
                .start();
        }
    });

    this._changePicture(state);

    this._updateState(state);

    // console.log(points);
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
    var arr = pointsArray;
    $.each(arr, function(index, value) {
        value.x += paper.view.center.x;
        value.y += paper.view.center.y;
    });
    return arr;
};

module.exports = Morph;