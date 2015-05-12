var paper = require('paper');
var $     = require('jquery');
var TWEEN = require('tween.js');


var Morph = function(canvasObj) {

    this.canvas = canvasObj[0];
    this.dur    = 500;
    this.state  = 'circle'; // can be circle, square or triangle
    this.sizes  = {
        circle  : 510,
        square  : 450,
        triangle: 580
    };
    this.morphSize = {
        x: 580,
        y: 580
    };

};

Morph.prototype._initContent = function() {
    var front = [],
        back  = [];
        state = this.state;
        morphSize = this.morphSize;

    paper.setup(this.canvas);

    this.backGroup  = new paper.Group();
    this.frontGroup = new paper.Group();

    this.objects = {
        paths: {
            morph: new paper.Path.Circle({
                center: [paper.view.center.x, paper.view.center.y],
                radius: this.sizes.circle / 2
            }),
            fill: new paper.Path.Rectangle({
                center: paper.view.center,
                size: [paper.view.viewSize.width, paper.view.viewSize.height],
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
                // shift: {x: 111, y: 92},
                pic: new paper.Raster({
                    source: '/img/canvas1.png',
                    position: paper.view.center
                }),
                altPic: new paper.Raster({
                    source: '/img/canvas1.png',
                    position: paper.view.center,
                    opacity: 0
                }),
                position: {
                    x: paper.view.center.x + 111,
                    y: paper.view.center.y + 92
                }
            },
            square: {
                // shift: {x: 50, y: 131},
                pic: new paper.Raster({
                    source: '/img/canvas2.png',
                    position: paper.view.center
                }),
                altPic: new paper.Raster({
                    source: '/img/canvas2.png',
                    position: paper.view.center,
                    opacity: 0
                }),
                position: {
                    x: paper.view.center.x + 29,
                    y: paper.view.center.y + 102
                }
            },
            triangle: {
                // shift: {x: 45, y: 90},
                pic: new paper.Raster({
                    source: '/img/canvas3.png',
                    position: paper.view.center,
                    visible: true,
                }),
                altPic: new paper.Raster({
                    source: '/img/canvas3-1.png',
                    position: paper.view.center,
                    opacity: 0
                }),
                position: {
                    x: paper.view.center.x + 45,
                    y: paper.view.center.y + 90
                }
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
        raster.pic.onLoad = function() {
            raster.pic.position.x = raster.position.x + morphSize.x;
            raster.pic.position.y = raster.position.y;
        };
        raster.altPic.onLoad = function() {
            raster.altPic.position.x = raster.position.x + morphSize.x / 2;
            raster.altPic.position.y = raster.position.y;
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
            // that.activate('square');
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
        dur    = 0.8 * this.dur,
        altDur = this.dur,
        delay  = altDur - dur,
        raster;

    /*### pics item
    # inner/outer          - inside/outside morph path;
    # pic                  - paper raster object;
    # initPos              - position of pic before animation, relative to canvas center;
    # pos                  - position of pic/altPic after animation end, relative to canvas center;
    # opacity              - opacity for pic after animation end;
    # delay                - delay between start animation for inner in outer;
    ###*/
    pics = {
        prev: {
            inner: {
                pic: this.objects.raster[prevState].pic,
                initPos: this.objects.raster[prevState].position,
                pos: {
                    x: paper.view.center.x - this.morphSize.x,
                    y: this.objects.raster[prevState].position.y
                }
            },
            outer: {
                pic: this.objects.raster[prevState].altPic,
                initPos: this.objects.raster[prevState].position,
                pos: {
                    x: paper.view.center.x - this.morphSize.x,
                    y: this.objects.raster[prevState].position.y
                },
                opacity: 0
            },
            delay   : 0
        },
        next: {
            inner: {
                pic     : this.objects.raster[state].pic,
                initPos : { x: paper.view.center.x + this.morphSize.x,
                            y: this.objects.raster[state].position.y },
                pos     : this.objects.raster[state].position
            },
            outer: {
                pic     : this.objects.raster[state].altPic,
                initPos : { x: paper.view.center.x + this.morphSize.x / 2,
                            y: this.objects.raster[state].position.y },
                pos     : this.objects.raster[state].position,
                opacity : 1
            },
            delay: 100,
        }
    };

    pics.next.inner.pic.position.x = pics.next.inner.initPos.x;
    pics.next.outer.pic.position.x = pics.next.outer.initPos.x;

    $.each(pics, function(index, item) {
        new TWEEN.Tween(item.inner.pic.position)
            .to({x: item.inner.pos.x}, dur)
            .easing(easing)
            .onUpdate(function() {
                item.inner.pic.position.x = this.x;
            })
            .delay(item.delay)
            .start();

        new TWEEN.Tween(item.outer.pic.position)
            .to({x: item.outer.pos.x}, altDur)
            .easing(easing)
            .onUpdate(function() {
                item.outer.pic.position.x = this.x;
            })
            .delay(item.delay)
            .start();

        new TWEEN.Tween(item.outer.pic)
            .to({opacity: item.outer.opacity}, dur)
            .easing(easing)
            .onUpdate(function() {
                item.outer.pic.opacity = this.opacity;
            })
            .delay(item.delay)
            .start();
    });

};

Morph.prototype._showPicture = function(state) {
    // var prevState = this._getState();

    // if (state == prevState) return;

    var easing = TWEEN.Easing.Cubic.In,
        dur    = this.dur,
        pics;

    pics = {
        inner: {
            pic: this.objects.raster[state].pic,
            initPos: {
                x: this.objects.raster[state].position.x,
                y: paper.view.center.y + this.morphSize.y / 2,
            },
            pos: this.objects.raster[state].position
        },
        outer: {
            pic: this.objects.raster[state].altPic,
            initPos: {
                x: paper.view.center.x,
                y: paper.view.center.y - 100
            },
            pos: this.objects.raster[state].position,
            initOpacity: 0,
            initScaling: [0.2, 0.2],
            opacity: 1,
            scaling: {x: 1, y: 1},
            delay: 100
        }
    };

    // set pictures initial state
    pics.inner.pic.position.x = pics.inner.initPos.x;
    pics.inner.pic.position.y = pics.inner.initPos.y;
    pics.outer.pic.position.x = pics.outer.initPos.x;
    pics.outer.pic.position.y = pics.outer.initPos.y;
    pics.outer.pic.set({
        scaling: pics.outer.initScaling,
        opacity: pics.outer.initOpacity,
    });

    // translate picture inside morph object
    new TWEEN.Tween(pics.inner.pic.position)
        .to(pics.inner.pos, dur)
        .easing(easing)
        .onUpdate(function() {
            pics.inner.pic.position.x = this.x;
            pics.inner.pic.position.y = this.y;
        })
        .start();

    // scale picture outside morph object
    new TWEEN.Tween(pics.outer.pic.scaling)
        .to(pics.outer.scaling, dur)
        .easing(easing)
        .onUpdate(function() {
            pics.outer.pic.scaling.x = this.x;
            pics.outer.pic.scaling.y = this.y;
        })
        .delay(pics.outer.delay)
        .start();

    // fade in picture outside morph object
    new TWEEN.Tween(pics.outer.pic)
        .to({opacity: pics.outer.opacity}, dur)
        .easing(easing)
        .onUpdate(function() {
            pics.outer.pic.opacity = this.opacity;
        })
        .delay(pics.outer.delay)
        .start();

    // translate picture outside morph object
    new TWEEN.Tween(pics.outer.pic.position)
        .to(pics.outer.pos, dur)
        .easing(easing)
        .onUpdate(function() {
            pics.outer.pic.position.x = this.x;
            pics.outer.pic.position.y = this.y;
        })
        .start();

    console.log('%c' + 'Picture showed:' + ' => ' + state, 'background:lightblue');

};


Morph.prototype.activate = function(state) {
    this._showPicture(state);
    this._morph(state);
};

Morph.prototype._morph = function(state) {

    var prevState  = this._getState();

    if ( state == prevState ) return;

    var duration   = this.dur,
        callCount  = duration * 60 / 1000, // morph anim duration * frame per second
        easing     = TWEEN.Easing.Cubic.Out,
        morphPath  = this.objects.paths.morph,
        segments   = morphPath.segments,
        prevPoints = this.point[prevState],
        points     = this.point[state];

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

    this._updateState(state);

    console.log('%c' + 'State change: ' + prevState + ' => ' + state, 'background:yellow');
};

Morph.prototype.square = function() {
    this._changePicture('square');
    this._morph('square');
};

Morph.prototype.triangle = function() {
    this._changePicture('triangle');
    this._morph('triangle');
};

Morph.prototype.circle = function() {
    this._changePicture('circle');
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