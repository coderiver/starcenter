var paper = require('paper');
var $     = require('jquery');
var TWEEN = require('tween.js');
require('gsap');
require('../../../node_modules/gsap/src/uncompressed/TimelineLite.js');


var Morph = function(selector) {

    this.canvas = $(selector);
    this.state  = {
        visible: false,
        active: false,
        inProgress: false,
        morph: 'circle', // circle, square, triangle or smTriangle
        prevMorph: null, // circle, square, triangle or smTriangle
        rectangle: 'small' // small, big, wide or hidden
    };
    this.sizes  = {
        circle    : 510,
        square    : 450,
        triangle  : 580,
        smTriangle: 290
    };
    // max of sizes
    this.morphSize = {
        x: 580,
        y: 580
    };
    this.dur = 800; // morph animation duration
    this.fadeDur = 200;
    this.shiftY = 680;
    this.visibleClass = 'is-visible';
    this.activeClass = 'is-active';

};

Morph.prototype._initContent = function() {
    var front = [],
        back  = [];
        state = this.state;
        morphSize = this.morphSize;

    paper.setup(this.canvas[0]);

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
                    source: 'img/canvas1.png',
                    position: paper.view.center
                }),
                altPic: new paper.Raster({
                    source: 'img/canvas1.png',
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
                    source: 'img/canvas2.png',
                    position: paper.view.center
                }),
                altPic: new paper.Raster({
                    source: 'img/canvas2.png',
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
                    source: 'img/canvas3.png',
                    position: paper.view.center,
                    visible: true,
                }),
                altPic: new paper.Raster({
                    source: 'img/canvas3-1.png',
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
    var _ = this;

    paper.view.onFrame = function(event) {
        TWEEN.update();
    };
};

Morph.prototype._render = function() {
    paper.view.draw();
};

Morph.prototype._calcPosition = function() {
    var c   = this.sizes.circle,
        s   = this.sizes.square,
        t   = this.sizes.triangle,
        smt = this.sizes.smTriangle,
        point;

    // coordinates of vertexes for each morph state relative to view.center
    point = {
        circle: [
            {point: 1, x: -c/2, y:    0, handle: {x:    0, y:  140}},
            {point: 2, x:    0, y: -c/2, handle: {x: -140, y:    0}},
            {point: 3, x:  c/2, y:    0, handle: {x:    0, y: -140}},
            {point: 4, x:    0, y:  c/2, handle: {x:  140, y:    0}}
            // {x: -255, y:    0},
            // {x:    0, y: -255},
            // {x:  255, y:    0},
            // {x:    0, y:  255},
        ],
        square: [
            {point: 1, x: -s/2, y: -s/2, handle: {x: 0, y: 0}},
            {point: 2, x:  s/2, y: -s/2, handle: {x: 0, y: 0}},
            {point: 3, x:  s/2, y:  s/2, handle: {x: 0, y: 0}},
            {point: 4, x: -s/2, y:  s/2, handle: {x: 0, y: 0}}
            // {x: -225, y: -225},
            // {x:  225, y: -225},
            // {x:  225, y:  225},
            // {x: -225, y:  225},
        ],
        triangle: [
            {point: 1, x: -0.36207 * t/2, y: 0.58621 * t/2, handle: {x: 0, y: 0}},
            {point: 2, x:           -t/2, y: 0.39310 * t/2, handle: {x: 0, y: 0}},
            {point: 3, x:  0.53448 * t/2, y:          -t/2, handle: {x: 0, y: 0}},
            {point: 4, x:            t/2, y:           t/2, handle: {x: 0, y: 0}}
            // {x: -105, y:  170},
            // {x: -290, y:  114},
            // {x:  155, y: -290},
            // {x:  290, y:  290},
        ],
        smTriangle: [
            {point: 1, x: -0.36207 * smt/2, y: 0.58621 * smt/2, handle: {x: 0, y: 0}},
            {point: 2, x:           -smt/2, y: 0.39310 * smt/2, handle: {x: 0, y: 0}},
            {point: 3, x:  0.53448 * smt/2, y:          -smt/2, handle: {x: 0, y: 0}},
            {point: 4, x:            smt/2, y:           smt/2, handle: {x: 0, y: 0}},
        ]
    };

    this.pathPosition = {
        morph: {
            circle:     this._translateCoordinates(point.circle),
            square:     this._translateCoordinates(point.square),
            triangle:   this._translateCoordinates(point.triangle),
            smTriangle: this._translateCoordinates(point.smTriangle)
        },
        rectangle: {
            initial: {
                center: new paper.Point(paper.view.center.x, paper.view.size.height - 64),
                size: new paper.Size(513, 47)
            },
            big: {
                center: paper.view.center,
                size: new paper.Size(791, 261)
            },
            wide: {
                center: paper.view.center,
                size: new paper.Size(1220, 160)
            },
            hidden: {
                center: new paper.Point(paper.view.center.x, paper.view.size.height + 100),
                size: new paper.Size(513, 47)
            }
        }
    };
};

Morph.prototype._toggleContentVisibility = function(value, onlyPictures) {
    // show or hide content (pictures and rectangle)
    // value = true/false ==> content visible/invisible
    var _   = this,
        val = typeof value != 'undefined' ? value : !_.objects.raster.circle.pic.visible; // true or false

    $.each(_.objects.raster, function(index, item) {
        item.pic.visible    = val;
        item.altPic.visible = val;
    });

    if ( !onlyPictures ) {
        _.objects.other.rectangle.visible = val;
    }
};

Morph.prototype._changePicture = function(state) {
    var currentState = this._getState('morph');

    if (state == currentState) return;

    var _ = this,
        prevState = _._getState('prevMorph'),
        props,
        pics;

    /*### props item
    # inner/outer          - inside/outside morph path;
    # pic                  - paper raster object;
    # initPos              - position of pic before animation, relative to canvas center;
    # pos                  - position of pic/altPic after animation end, relative to canvas center;
    # opacity              - opacity for pic after animation end;
    # delay                - delay between start animation for inner in outer;
    ###*/
    props = {
        // current picture
        current : {
            inner: {
                pic: _.objects.raster[currentState].pic,
                initPos: _.objects.raster[currentState].position,
                pos: {
                    x: paper.view.center.x - _.morphSize.x,
                    y: _.objects.raster[currentState].position.y
                },
                duration: _.dur / 2,
                delay   : _.dur * 0.2, // ~ 150ms
                easing  : TWEEN.Easing.Cubic.In,
            },
            outer: {
                pic: _.objects.raster[currentState].altPic,
                initPos: _.objects.raster[currentState].position,
                pos: {
                    x: paper.view.center.x - _.morphSize.x / 2,
                    y: _.objects.raster[currentState].position.y
                },
                duration: _.dur / 2,
                delay   : 0,
                opacity : 0,
                easing  : TWEEN.Easing.Quadratic.In
            }
        },
        // next picture
        next : {
            inner: {
                pic     : _.objects.raster[state].pic,
                initPos : { x: paper.view.center.x + _.morphSize.x,
                            y: _.objects.raster[state].position.y },
                pos     : _.objects.raster[state].position,
                duration: _.dur / 2,
                delay   : _.dur / 2,
                easing  : TWEEN.Easing.Quadratic.Out,
            },
            outer: {
                pic     : _.objects.raster[state].altPic,
                initPos : { x: paper.view.center.x + _.morphSize.x / 2,
                            y: _.objects.raster[state].position.y },
                pos     : _.objects.raster[state].position,
                duration: _.dur / 2,
                delay   : _.dur / 2,
                opacity : 1,
                easing  : TWEEN.Easing.Quadratic.Out
            }
        }
    };

    pics = props;

    if ( state == prevState ) {
        pics.current.inner.pos.x  = paper.view.center.x + _.morphSize.x;
        pics.current.outer.pos.x  = paper.view.center.x + _.morphSize.x / 2;
        pics.next.inner.initPos.x = paper.view.center.x - _.morphSize.x;
        pics.next.outer.initPos.x = paper.view.center.x - _.morphSize.x / 2;
    }

    // reset properties after previous transformation in other methods
    pics.next.inner.pic.position.x = pics.next.inner.initPos.x;
    pics.next.inner.pic.position.y = pics.next.inner.initPos.y;
    pics.next.outer.pic.position.x = pics.next.outer.initPos.x;
    pics.next.outer.pic.position.y = pics.next.outer.initPos.y;
    pics.next.outer.pic.scaling.x = 1;
    pics.next.outer.pic.scaling.y = 1;

    $.each(pics, function(index, item) {
        new TWEEN.Tween(item.inner.pic.position)
            .to({x: item.inner.pos.x}, item.inner.duration)
            .easing(item.inner.easing)
            .onUpdate(function() {
                item.inner.pic.position.x = this.x;
            })
            .delay(item.inner.delay)
            .start();

        new TWEEN.Tween(item.outer.pic.position)
            .to({x: item.outer.pos.x}, item.outer.duration)
            .easing(item.outer.easing)
            .onUpdate(function() {
                item.outer.pic.position.x = this.x;
            })
            .delay(item.outer.delay)
            .start();

        new TWEEN.Tween(item.outer.pic)
            .to({opacity: item.outer.opacity}, item.outer.duration)
            .easing(item.outer.easing)
            .onUpdate(function() {
                item.outer.pic.opacity = this.opacity;
            })
            .delay(item.outer.delay)
            .start();
    });
};

Morph.prototype._togglePicture = function(state) {
    // if state was not passed, then this method hiddes picture for active morph state,
    // otherwise he show picture for passed state
    var _ = this,
        easing = TWEEN.Easing.Cubic.In,
        dur    = _.dur,
        pics,
        log;

    if ( typeof state == 'undefined' ) {

        state = _._getState('morph');
        pics = {
            inner: {
                pic: _.objects.raster[state].pic,
                pos: {
                    x: _.objects.raster[state].position.x,
                    y: paper.view.center.y + _.morphSize.y / 3 * 2,
                },
                initPos: _.objects.raster[state].position
            },
            outer: {
                pic: _.objects.raster[state].altPic,
                pos: _.objects.raster[state].position,
                initPos: _.objects.raster[state].position,
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
                pic: _.objects.raster[state].pic,
                initPos: {
                    x: _.objects.raster[state].position.x,
                    y: paper.view.center.y + _.morphSize.y / 3 * 2,
                },
                pos: _.objects.raster[state].position
            },
            outer: {
                pic: _.objects.raster[state].altPic,
                initPos: _.objects.raster[state].position,
                pos: _.objects.raster[state].position,
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
    pics.outer.pic.scale(pics.outer.initScaling.x, _.objects.paths.morph.bounds.topCenter);

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

Morph.prototype._morph = function(state, dur) {

    var currentState  = this._getState('morph');

    if ( state == currentState ) return;

    var _          = this,
        duration   = dur || _.dur,
        easing     = TWEEN.Easing.Quadratic.Out,
        morphPath  = _.objects.paths.morph,
        segments   = morphPath.segments,
        prevPoints = _.pathPosition.morph[currentState],
        points     = _.pathPosition.morph[state];

    _._updateState('inProgress', true);

    $.each(segments, function(index, segment) {
        new TWEEN.Tween(segment.point)
            .to(points[index], duration)
            .easing(easing)
            .onUpdate(function() {
                segment.point.x = this.x;
                segment.point.y = this.y;
            })
            .start();

        if ( currentState == 'circle' || state == 'circle' ) {
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

    _._updateState('prevMorph', currentState);
    _._updateState('morph', state);

    setTimeout(function() {
        _._updateState('inProgress', false);
    }, duration);

    console.log('%c' + 'State change: ' + currentState + ' => ' + state, 'background:yellow');
};

Morph.prototype._morphRectangle = function(state) {
    var prevState = this._getState('rectangle');

    if ( state == prevState ) return;

    var _       = this,
        rect    = _.objects.other.rectangle,
        prevPos = _.pathPosition.rectangle[prevState],
        pos     = _.pathPosition.rectangle[state],
        easing  = TWEEN.Easing.Cubic.Out;
        dur     = _.dur;

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

    _._updateState('rectangle', state);
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

Morph.prototype._fade = function(duration) {
    var _     = this,
        visible = _._getState('visible'),
        tl      = new TimelineLite();
        dur     = duration / 1000 || _.fadeDur / 1000;

    tl
        .addLabel('beginFade')
        .to(_.canvas, dur, {autoAlpha: visible ? 0 : 1, ease: Linear.easeNone})
        .addLabel('endFade')
        .add(function() {
            _.canvas.toggleClass(_.visibleClass);
            }, visible ? 'endFade' : 'beginFade')
        .add(function() {
            _._updateState('visible', !visible);
            });
};

Morph.prototype.init = function() {
    this._initContent();
    this._initEvents();
    this._toggleContentVisibility(false, true); //make pictures invisible
    this._calcPosition();
    this._render();
};

Morph.prototype.toSquare = function() {
    this._changePicture('square');
    this._morph('square');
};

Morph.prototype.toTriangle = function() {
    this._changePicture('triangle');
    this._morph('triangle');
};

Morph.prototype.toCircle = function() {
    this._changePicture('circle');
    this._morph('circle');
};

Morph.prototype.changeState = function(state) {
    this._changePicture(state);
    this._morph(state);
};

Morph.prototype.activate = function(state, delay) {
    var active = this._getState('active');

    if ( active ) return;

    var _    = this,
        timeout = delay || _.fadeDur; // delay in milliseconds between visible state and activating

    _._fade();

    setTimeout(function() {
        _._togglePicture(state);
        _._morph(state);
        _._toggleContentVisibility(true, true); // make pictures visible
        _._morphRectangle('big');
        _._updateState('active', true);
    }, timeout);
};

Morph.prototype.deactivate = function() {
    var active = this._getState('active');

    if ( !active ) return;

    var _ = this;

    _._togglePicture();
    _._morph('circle');
    _._morphRectangle('initial');

    setTimeout(function() {
        _._fade();
        _._toggleContentVisibility(false, true); // make pictures invisible
    }, _.dur);

    _._updateState('active', false);
};

Morph.prototype.moveDown = function(duration) {
    if ( this._getState('active') ) return;
    var _   = this,
        tl  = new TimelineLite(),
        dur = duration || _.dur; // seconds

    tl
        .addLabel('fadeIn', _.fadeDur / 1000)
        .add(function() {
            _._fade();
            _._toggleContentVisibility(false);
        })
        .add(function() {
            _._morph('smTriangle', dur);
            }, 'fadeIn')
        .to(_.canvas, dur / 1000, {y: _.shiftY}, 'fadeIn');
};

Morph.prototype.moveBack = function(duration) {
    if ( this._getState('active') ) return;
    var _   = this,
        tl  = new TimelineLite(),
        dur = duration || _.dur; // seconds

    tl
        .add(function() {
            _._morph('circle', dur);
            })
        .to(_.canvas, dur / 1000, {y: 0})
        .add(function() {
            _._fade();
            _._toggleContentVisibility(true);
            });
};

module.exports = Morph;