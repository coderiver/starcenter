var paper = require('paper');
var $     = require('jquery');
var TWEEN = require('tween.js');


var Morph = function(selector) {

    this.canvas = $(selector)[0];
    this.dur    = 500;
    this.state  = {
        active: false,
        morph: 'circle', // circle, square or triangle
        rectangle: 'small' // small, big or wide
    };
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
                        stops: ['#2B92A5', '#CDF0E9']
                    },
                    origin: [paper.view.center.x, paper.view.center.y - this.sizes.circle / 2],
                    destination: [paper.view.center.x, paper.view.center.y + this.sizes.circle / 2]
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
                point: [0, 0],
                size: [513, 47],
                strokeWidth: 3,
                // strokeScaling: false,
                strokeColor: '#333',
            })
        }
    };

    //setup rectange
    this.objects.other.rectangle.bounds.center = new paper.Point(paper.view.center.x, paper.view.size.height - 64);

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

Morph.prototype._morphRectangle = function(state) {
    var prevState = this._getState('rectangle');

    if ( state == prevState ) return;

    var rect    = this.objects.other.rectangle,
        prevPos = this.pathPosition.rectangle[prevState],
        pos     = this.pathPosition.rectangle[state],
        easing  = TWEEN.Easing.Cubic.Out;
        dur     = this.dur;


    // change rectange size
    new TWEEN.Tween(rect.bounds.size)
        .to(pos.size, dur)
        .easing(easing)
        .onUpdate(function() {
            rect.bounds.size.width = this.width;
            rect.bounds.size.height = this.height;
        })
        .start();

    // change rectange position
    new TWEEN.Tween(rect.position)
        .to(pos.center, dur)
        .easing(easing)
        .onUpdate(function() {
            rect.position.x = this.x;
            rect.position.y = this.y;
        })
        .start();

    this._updateState('rectangle', state);

};

Morph.prototype._calcPosition = function() {
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

    this.pathPosition = {
        morph: {
            circle:   this._translateCoordinates(point.circle),
            square:   this._translateCoordinates(point.square),
            triangle: this._translateCoordinates(point.triangle),
        },
        rectangle: {
            small: {
                center: new paper.Point(paper.view.center.x, paper.view.size.height - 64),
                size: new paper.Size(513, 47)
            },
            big: {
                center: paper.view.center,
                size: new paper.Size(790, 260)
            },
            wide: {
                center: paper.view.center,
                size: new paper.Size(1220, 160)
            }
        }
    };
};

Morph.prototype._changePicture = function(state) {
    var prevState = this._getState('morph');

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
                    x: paper.view.center.x - this.morphSize.x / 2,
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

    // reset properties after previous transformation in other methods
    pics.next.inner.pic.position.x = pics.next.inner.initPos.x;
    pics.next.inner.pic.position.y = pics.next.inner.initPos.y;
    pics.next.outer.pic.position.x = pics.next.outer.initPos.x;
    pics.next.outer.pic.position.y = pics.next.outer.initPos.y;
    pics.next.outer.pic.scaling.x = 1;
    pics.next.outer.pic.scaling.y = 1;

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
            // .easing(easing)
            .onUpdate(function() {
                item.outer.pic.position.x = this.x;
            })
            .delay(item.delay)
            .start();

        new TWEEN.Tween(item.outer.pic)
            .to({opacity: item.outer.opacity}, dur)
            // .easing(easing)
            .onUpdate(function() {
                item.outer.pic.opacity = this.opacity;
            })
            .delay(item.delay)
            .start();
    });

};

Morph.prototype._togglePicture = function(state) {
    // if state was not passed, then this method hiddes picture for active morph state,
    // otherwise he show picture for passed state
    var easing = TWEEN.Easing.Cubic.In,
        dur    = this.dur,
        pics,
        log;

    if ( typeof state == 'undefined' ) {

        state = this._getState('morph');
        pics = {
            inner: {
                pic: this.objects.raster[state].pic,
                pos: {
                    x: this.objects.raster[state].position.x,
                    y: paper.view.center.y + this.morphSize.y / 3 * 2,
                },
                initPos: this.objects.raster[state].position
            },
            outer: {
                pic: this.objects.raster[state].altPic,
                pos: this.objects.raster[state].position,
                initPos: this.objects.raster[state].position,
                initOpacity: 1,
                initScaling: {x: 1, y: 1},
                opacity: 0,
                scaling: {x: 0.2, y: 0.2},
                delay: 100
            }
        };

        console.log('%c' + 'Hide picture:' + ' => ' + state, 'background:lightblue');

    } else {

        pics = {
            inner: {
                pic: this.objects.raster[state].pic,
                initPos: {
                    x: this.objects.raster[state].position.x,
                    y: paper.view.center.y + this.morphSize.y / 3 * 2,
                },
                pos: this.objects.raster[state].position
            },
            outer: {
                pic: this.objects.raster[state].altPic,
                initPos: this.objects.raster[state].position,
                pos: this.objects.raster[state].position,
                initOpacity: 0,
                initScaling: {x: 0.2, y: 0.2},
                opacity: 1,
                scaling: {x: 1, y: 1},
                delay: 100
            }
        };

        console.log('%c' + 'Show picture:' + ' => ' + state, 'background:lightblue');

    }

    // setup pictures initial state
    pics.inner.pic.position.x = pics.inner.initPos.x;
    pics.inner.pic.position.y = pics.inner.initPos.y;
    pics.outer.pic.position.x = pics.outer.initPos.x;
    pics.outer.pic.position.y = pics.outer.initPos.y;
    pics.outer.pic.opacity    = pics.outer.initOpacity;
    pics.outer.pic.scale(pics.outer.initScaling.x, this.objects.paths.morph.bounds.topCenter);

    // translate picture inside morph object
    new TWEEN.Tween(pics.inner.pic.position)
        .to(pics.inner.pos, dur)
        // .easing(easing)
        .onUpdate(function() {
            pics.inner.pic.position.x = this.x;
            pics.inner.pic.position.y = this.y;
        })
        .start();

    // scale picture outside morph object
    new TWEEN.Tween(pics.outer.pic.scaling)
        .to(pics.outer.scaling, dur)
        // .easing(easing)
        .onUpdate(function() {
            pics.outer.pic.scale(this.x, this.y);
        })
        // .delay(pics.outer.delay)
        .start();

    // fade in picture outside morph object
    new TWEEN.Tween(pics.outer.pic)
        .to({opacity: pics.outer.opacity}, dur)
        // .easing(easing)
        .onUpdate(function() {
            pics.outer.pic.opacity = this.opacity;
        })
        .delay(pics.outer.delay)
        .start();

    // translate picture outside morph object
    new TWEEN.Tween(pics.outer.pic.position)
        .to(pics.outer.pos, dur)
        // .easing(easing)
        .onUpdate(function() {
            pics.outer.pic.position.x = this.x;
            pics.outer.pic.position.y = this.y;
        })
        // .delay(pics.outer.delay)
        .start();

};

Morph.prototype._morph = function(state) {

    var prevState  = this._getState('morph');

    if ( state == prevState ) return;

    var duration   = this.dur,
        callCount  = duration * 60 / 1000, // morph anim duration * frame per second
        easing     = TWEEN.Easing.Cubic.Out,
        morphPath  = this.objects.paths.morph,
        segments   = morphPath.segments,
        prevPoints = this.pathPosition.morph[prevState],
        points     = this.pathPosition.morph[state];

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

    this._updateState('morph', state);

    console.log('%c' + 'State change: ' + prevState + ' => ' + state, 'background:yellow');
};

Morph.prototype._updateState = function(name, state) {
    this.state[name] = state;
};

Morph.prototype._getState = function(name) {
    if ( name && this.state.hasOwnProperty(name) ) {
        return this.state[name];
    } else {
        return this.state;
    }
};

Morph.prototype._translateCoordinates = function(pointsArray) {
    var arr = pointsArray;
    $.each(arr, function(index, value) {
        value.x += paper.view.center.x;
        value.y += paper.view.center.y;
    });
    return arr;
};

Morph.prototype.init = function() {
    this._initContent();
    this._initEvents();
    this._render();
    this._calcPosition();
    // this._morph();
    console.log(paper.view);
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

Morph.prototype.changeState = function(state) {
    this._changePicture(state);
    this._morph(state);
};

Morph.prototype.activate = function(state) {
    var active = this._getState('active');

    if ( active ) return;

    this._togglePicture(state);
    this._morph(state);
    this._morphRectangle('big');

    this._updateState('active', true);
};

Morph.prototype.deactivate = function() {
    var active = this._getState('active');

    if ( !active ) return;

    this._togglePicture();
    this._morph('circle');
    this._morphRectangle('small');

    this._updateState('active', false);
};

module.exports = Morph;