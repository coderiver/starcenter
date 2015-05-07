var paper = require('paper');
var $     = require('jquery');
// paper.install(window);

function __bind (t, e) {
    return function() {
            return t.apply(e, arguments);
        };
}

var Morph = function(canvasObj) {

    this.canvas = canvasObj[0];

};

Morph.prototype._initContent = function() {
    paper.setup(this.canvas);
    this.size = 510;
    this.paths = {
        sources: {
            circle: new paper.Path.Circle({
                center: [paper.view.center.x, paper.view.center.y],
                radius: this.size / 2,
                fillColor: {
                    gradient: {
                        stops: ['#54B7C6', '#CDF0E9']
                    },
                    origin: [paper.view.center.x, paper.view.center.y - 255],
                    destination: [paper.view.center.x, paper.view.center.y + 255]
                }
            })
        }
    };
    this.images = [
        new paper.Raster({
            source: '/img/canvas1.png',
            position: [paper.view.center.x, paper.view.center.y + 255]
        }),
        // new paper.Raster({
        //     source: '/img/canvas2.png',
        //     position: paper.view.center
        // }),
        // new paper.Raster({
        //     source: '/img/canvas3.png',
        //     position: paper.view.center
        // })
    ];
};

Morph.prototype._render = function() {
    var children = [];
    $.each(this.paths.sources, function(index, path) {
        children.push(path);
    });
    $.each(this.images, function(index, raster) {
        var data = raster.image;
        console.log(data);
        children.push(raster);
    });
    this.group = new paper.Group(children);
    paper.view.draw();
};

Morph.prototype.init = function() {
    this._initContent();
    this._render();
    console.log(paper.view);
};


// window.onload = Morph;



    // view.onFrame = function(event) {
    //     // On each frame, rotate the path by 3 degrees:
    //     path.rotate(3);
    // };

    // Morph = function() {
    //     function t(t) {
    //         this.update = __bind(this.update, this),
    //         this.resize = __bind(this.resize, this),
    //         this.getStatus = __bind(this.getStatus, this),
    //         this.updateStatus = __bind(this.updateStatus, this),
    //         this._calcExpo = __bind(this._calcExpo, this),
    //         this._render = __bind(this._render, this),
    //         this._translatePictures = __bind(this._translatePictures, this),
    //         this._morph = __bind(this._morph, this),
    //         this._endLoading = __bind(this._endLoading, this),
    //         this._initEvents = __bind(this._initEvents, this),
    //         this._initContent = __bind(this._initContent, this),
    //         this.$canvas = t.$canvas,
    //         this.tween = {
    //             duration: 2e3,
    //             startTime: 0,
    //             stopped: !0,
    //             val: 0
    //         },
    //         this.testVal = 0,
    //         this.testDest = 0,
    //         this._initContent(),
    //         this._initEvents()
    //     }
    //     return
    //         t.LOADED = 'morph_loaded',
    //         t.prototype._initContent = function() {
    //             var t;
    //             return
    //                 this.canvas = this.$canvas[0],
    //                 paper.setup(this.canvas),
    //                 this.size = 500,
    //                 this.topShift = {
    //                     x: -300,
    //                     y: -400
    //                 },
    //                 this.bottomShift = {
    //                     x: 350,
    //                     y: 350
    //                 },
    //                 this.paths = {
    //                     sources: {
    //                         square: new paper.Path.Rectangle({
    //                             size: [this.size, this.size]
    //                         }),
    //                         circle: new paper.Path.Circle({
    //                             radius: this.size / 2
    //                         }),
    //                         triangle: new paper.Path.RegularPolygon({
    //                             sides: 3,
    //                             radius: this.size / 1.6
    //                         }),
    //                         topsquare: new paper.Path.Rectangle({
    //                             size: [this.size + 50, this.size + 50]
    //                         }),
    //                         topcircle: new paper.Path.Circle({
    //                             radius: this.size / 3.5
    //                         }),
    //                         toptriangle: new paper.Path.RegularPolygon({
    //                             sides: 3,
    //                             radius: this.size / 3.5
    //                         }),
    //                         bottomsquare: new paper.Path.Rectangle({
    //                             size: [this.size, this.size]
    //                         }),
    //                         bottomcircle: new paper.Path.Circle({
    //                             radius: this.size / 3.5
    //                         }),
    //                         bottomtriangle: new paper.Path.RegularPolygon({
    //                             sides: 3,
    //                             radius: this.size / 3.5
    //                         })
    //                     },
    //                     morph: [
    //                         {
    //                             prefix: ',
    //                             item: new paper.Path.Circle({
    //                                 center: paper.view.center
    //                             })
    //                         }, {
    //                             prefix: "",
    //                             item: new paper.Path.Circle({
    //                                 center: paper.view.center,
    //                                 radius: this.size / 2,
    //                                 fillColor: {
    //                                     gradient: {
    //                                         stops: ["#28b3ff", "#ae95ff"]
    //                                     },
    //                                     origin: [paper.view.center.x, paper.view.center.y - 100],
    //                                     destination: [paper.view.center.x, paper.view.center.y + 100]
    //                                 }
    //                             })
    //                         }, {
    //                             prefix: "top",
    //                             item: new paper.Path.Circle({
    //                                 center: new paper.Point(paper.view.center.x + this.topShift.x, paper.view.center.y + this.topShift.y),
    //                                 fillColor: "#28b3ff"
    //                             })
    //                         }, {
    //                             prefix: "bottom",
    //                             item: new paper.Path.Circle({
    //                                 center: new paper.Point(paper.view.center.x + this.bottomShift.x, paper.view.center.y + this.bottomShift.y),
    //                                 fillColor: "#b5c5cf"
    //                             })
    //                         }
    //                     ],
    //                     pictures: [
    //                         new paper.Raster("/assets/medias/home/first-guy.png", paper.view.center),
    //                         new paper.Raster("/assets/medias/home/second-guy.png", paper.view.center)
    //                     ]
    //                 },
    //                 t = [
    //                     this.paths.morph[0].item,
    //                     this.paths.pictures[0],
    //                     this.paths.pictures[1]
    //                 ],
    //                 void 0 === BrowserDetect.getIEVersion() && (this.paths.morph[1].item.blendMode = "multiply",
    //                 t.push(this.paths.morph[1].item)), this.group = new paper.Group({
    //                     children: t,
    //                     clipped: !0
    //                 }),
    //                 this.sources = this.paths.sources,
    //                 this.pos = {
    //                     handles: {
    //                         start: 0,
    //                         current: 0,
    //                         dest: 0
    //                     },
    //                     fourthPoint: {
    //                         start: 0,
    //                         current: 0,
    //                         dest: 0
    //                     },
    //                     rotation: {
    //                         start: 0,
    //                         current: 30,
    //                         dest: 30,
    //                         prev: 30
    //                     },
    //                     picture1: {
    //                         start: new paper.Point(paper.view.center.x, paper.view.center.y),
    //                         current: new paper.Point(paper.view.center.x, paper.view.center.y),
    //                         dest: new paper.Point(paper.view.center.x, paper.view.center.y)
    //                     },
    //                     picture2: {
    //                         start: new paper.Point(paper.view.center.x, paper.view.center.y),
    //                         current: new paper.Point(paper.view.center.x, paper.view.center.y),
    //                         dest: new paper.Point(paper.view.center.x, paper.view.center.y)
    //                     },
    //                     dot1: {
    //                         start: 0,
    //                         current: 0,
    //                         dest: 0
    //                     },
    //                     dot2: {
    //                         start: 0,
    //                         current: 0,
    //                         dest: 0
    //                     },
    //                     dot3: {
    //                         start: 0,
    //                         current: 0,
    //                         dest: 0
    //                     },
    //                     siblingsPos: {
    //                         start: 0,
    //                         current: 0,
    //                         dest: 0
    //                     }
    //                 },
    //                 this.navDots = this.$canvas.siblings("nav").find("li"),
    //                 this.status = -1,
    //                 this.ease = 1,
    //                 this.updateStatus(-1, !0)
    //         },
    //         t.prototype._initEvents = function() {
    //             var t, e, n;
    //             for (this.loadedPics = 0, n = [], t = e = 0; 2 > e; t = ++e) n.push(this.paths.pictures[t].onLoad = function(t) {
    //                 return function() {
    //                     return t.resize(), t.loadedPics++, 2 === t.loadedPics ? t._endLoading() : void 0
    //                 }
    //             }(this));
    //             return n
    //         },
    //         t.prototype._endLoading = function() {
    //             return $(this).trigger(t.LOADED), this.resize()
    //         },
    //         t.prototype._morph = function() {
    //             var t, e, n, i, r, s, o, a, u, h;
    //             for (h = [], t = a = 0, u = this.paths.morph.length; u >= 0 ? u > a : a > u; t = u >= 0 ? ++a : --a) r = this.paths.morph[t].item.segments, n = this.paths.morph[t].prefix, h.push(function() {
    //                 var t, a, u;
    //                 for (u = [], e = t = 0, a = r.length; a >= 0 ? a > t : t > a; e = a >= 0 ? ++t : --t) i = r[e], s = this.sources[n + "circle"].segments[e], o = this.sources[n + "triangle"].segments[e], e === r.length - 1 && (o = this.sources[n + "triangle"].segments[r.length - 2]), i.handleIn.x = s.handleIn.x * this.pos.handles.current, i.handleIn.y = s.handleIn.y * this.pos.handles.current, i.handleOut.x = s.handleOut.x * this.pos.handles.current, i.handleOut.y = s.handleOut.y * this.pos.handles.current, i.point.x = o.point.x * (1 - this.pos.fourthPoint.current) + s.point.x * this.pos.fourthPoint.current, u.push(i.point.y = o.point.y * (1 - this.pos.fourthPoint.current) + s.point.y * this.pos.fourthPoint.current);
    //                 return u
    //             }.call(this));
    //             return h
    //         },
    //         t.prototype._translatePictures = function() {
    //             var t, e, n, i, r, s;
    //             for (s = [], t = i = 0, r = this.paths.pictures.length; r >= 0 ? r > i : i > r; t = r >= 0 ? ++i : --i) e = this.paths.pictures[t], n = this.pos["picture" + [t + 1]].current, s.push(e.position = n);
    //             return s
    //         },
    //         t.prototype._render = function() {
    //             var t;
    //             return
    //                 this.tween.stopped === !1 && (
    //                     W.time.now - this.tween.startTime > this.tween.duration && (this.tween.stopped = !0),
    //                     this.tween.val = Ease.outExpo((W.time.now - this.tween.startTime) / this.tween.duration) || 1,
    //                     this.pos.rotation.prev = this.pos.rotation.current,
    //                     $.each(this.pos, function(t) {
    //                         return function(e, n) {
    //                             return e.match("picture") ? (n.current.x = n.dest.x * t.tween.val + n.start.x * (1 - t.tween.val), n.current.y = n.dest.y * t.tween.val + n.start.y * (1 - t.tween.val)) : n.current = n.dest * t.tween.val + n.start * (1 - t.tween.val)
    //                         }
    //                     }(this)),
    //                     t = this.pos.rotation.current - this.pos.rotation.prev,
    //                     $.each(this.paths.sources, function(e) {
    //                         return function(n, i) {
    //                             var r, s;
    //                             return s = new paper.Point, r = 1, n.match("top") ? (s.x = .5 * M.ww + e.topShift.x - 100, s.y = .5 * M.wh + e.topShift.y - 100, r = .2) : n.match("bottom") ? (s.x = .5 * M.ww + e.bottomShift.x + 10, s.y = .5 * M.wh + e.bottomShift.y + 20, r = -.65) : (s.x = .5 * M.ww, s.y = .5 * M.wh), i.rotate(t * r, s)
    //                         }
    //                     }(this)),
    //                     $.each(this.navDots, function(t) {
    //                         return function(e, n) {
    //                             return Normalize.transform(n, "rotate(" + t.pos["dot" + (e + 1)].current + "deg)")
    //                         }
    //                     }(this)),
    //                     this._morph(),
    //                     this._translatePictures()
    //                 ),
    //                 paper.view.draw()
    //         },
    //         t.prototype._calcExpo = function(t) {
    //             return 1 === t ? t : 1 - Math.pow(2, -10 * t)
    //         },
    //         t.prototype.updateStatus = function(t, e) {
    //             var n;
    //             return n = this.status, this.status = t, this.tween.duration = e !== !0 ? 1e3 : 0, $.each(this.pos, function() {
    //                 return function(t, e) {
    //                     return t.match("picture") ? (e.start.x = e.current.x, e.start.y = e.current.y) : e.start = e.current
    //                 }
    //             }(this)), -1 === this.status ? (this.pos.handles.dest = 0, this.pos.fourthPoint.dest = 0, this.pos.rotation.dest = 80, this.pos.picture1.dest.x = paper.view.center.x, this.pos.picture1.dest.y = paper.view.center.y, this.pos.picture2.dest.x = paper.view.center.x, this.pos.picture2.dest.y = paper.view.center.y - this.paths.pictures[1].height, this.pos.dot1.dest = -180, this.pos.dot2.dest = -180, this.pos.dot3.dest = 0, Normalize.transformOrigin(this.navDots[1], "0 0")) : 0 === this.status ? (this.pos.handles.dest = 0, this.pos.fourthPoint.dest = 0, this.pos.rotation.dest = 80, this.pos.picture1.dest.x = paper.view.center.x, this.pos.picture1.dest.y = paper.view.center.y, this.pos.picture2.dest.x = paper.view.center.x, this.pos.picture2.dest.y = paper.view.center.y - this.paths.pictures[1].height, this.pos.dot1.dest = -180, this.pos.dot2.dest = -180, this.pos.dot3.dest = 0, Normalize.transformOrigin(this.navDots[1], "0 0")) : 1 === this.status ? (this.pos.handles.dest = 1, this.pos.fourthPoint.dest = 1, this.pos.rotation.dest = 150, this.pos.picture1.dest.x = paper.view.center.x + this.paths.pictures[0].width, this.pos.picture1.dest.y = paper.view.center.y, this.pos.picture2.dest.x = paper.view.center.x, this.pos.picture2.dest.y = paper.view.center.y, this.pos.dot1.dest = 0, this.pos.dot2.dest = 0, this.pos.dot3.dest = 0) : 2 === this.status && (this.pos.handles.dest = 0, this.pos.fourthPoint.dest = 1, this.pos.rotation.dest = 0, this.pos.picture1.dest.x = paper.view.center.x + this.paths.pictures[0].width, this.pos.picture1.dest.y = paper.view.center.y, this.pos.picture2.dest.x = paper.view.center.x, this.pos.picture2.dest.y = paper.view.center.y + this.paths.pictures[1].height, this.pos.dot1.dest = 0, this.pos.dot2.dest = 180, this.pos.dot3.dest = 180, Normalize.transformOrigin(this.navDots[1], "0 30px")), this.tween.startTime = W.time.now || +new Date, this.tween.stopped = !1
    //         },
    //         t.prototype.getStatus = function() {
    //             return this.status
    //         },
    //         t.prototype.resize = function() {
    //             return $.each(this.paths.sources, function(t) {
    //                 return function(e, n) {
    //                     return e.match("top") ? (n.position.x = .5 * M.ww + t.topShift.x, n.position.y = .5 * M.wh + t.topShift.y) : e.match("bottom") ? (n.position.x = .5 * M.ww + t.bottomShift.x, n.position.y = .5 * M.wh + t.bottomShift.y) : (n.position.x = .5 * M.ww, n.position.y = .5 * M.wh)
    //                 }
    //             }(this)), this.paths.morph[1].item.fillColor = {
    //                 gradient: {
    //                     stops: ["#28b3ff", "#ae95ff"]
    //                 },
    //                 origin: [paper.view.center.x, paper.view.center.y - 100],
    //                 destination: [paper.view.center.x, paper.view.center.y + 100]
    //             }, this.updateStatus(this.status, !0)
    //         },
    //         t.prototype.update = function() {
    //             return this._render()
    //         },
    //         t
    // }(),
    //     M = {
    //         ww: 1060,
    //         wh: 1160
    //     },


module.exports = Morph;