! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = t.length,
            n = K.type(t);
        return "function" === n || K.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function i(t, e, n) {
        if (K.isFunction(e)) return K.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType) return K.grep(t, function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (ae.test(e)) return K.filter(e, t, n);
            e = K.filter(e, t)
        }
        return K.grep(t, function(t) {
            return U.call(e, t) >= 0 !== n
        })
    }

    function r(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function s(t) {
        var e = pe[t] = {};
        return K.each(t.match(fe) || [], function(t, n) {
            e[n] = !0
        }), e
    }

    function o() {
        J.removeEventListener("DOMContentLoaded", o, !1), t.removeEventListener("load", o, !1), K.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = K.expando + Math.random()
    }

    function u(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(we, "-$1").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : ye.test(n) ? K.parseJSON(n) : n
                } catch (r) {}
                _e.set(t, e, n)
            } else n = void 0;
        return n
    }

    function h() {
        return !0
    }

    function c() {
        return !1
    }

    function l() {
        try {
            return J.activeElement
        } catch (t) {}
    }

    function d(t, e) {
        return K.nodeName(t, "table") && K.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function f(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function p(t) {
        var e = je.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function g(t, e) {
        for (var n = 0, i = t.length; i > n; n++) ve.set(t[n], "globalEval", !e || ve.get(e[n], "globalEval"))
    }

    function m(t, e) {
        var n, i, r, s, o, a, u, h;
        if (1 === e.nodeType) {
            if (ve.hasData(t) && (s = ve.access(t), o = ve.set(e, s), h = s.events)) {
                delete o.handle, o.events = {};
                for (r in h)
                    for (n = 0, i = h[r].length; i > n; n++) K.event.add(e, r, h[r][n])
            }
            _e.hasData(t) && (a = _e.access(t), u = K.extend({}, a), _e.set(e, u))
        }
    }

    function v(t, e) {
        var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && K.nodeName(t, e) ? K.merge([t], n) : n
    }

    function _(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && Se.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
    }

    function y(e, n) {
        var i, r = K(n.createElement(e)).appendTo(n.body),
            s = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(r[0])) ? i.display : K.css(r[0], "display");
        return r.detach(), s
    }

    function w(t) {
        var e = J,
            n = Fe[t];
        return n || (n = y(t, e), "none" !== n && n || (qe = (qe || K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = qe[0].contentDocument, e.write(), e.close(), n = y(t, e), qe.detach()), Fe[t] = n), n
    }

    function x(t, e, n) {
        var i, r, s, o, a = t.style;
        return n = n || We(t), n && (o = n.getPropertyValue(e) || n[e]), n && ("" !== o || K.contains(t.ownerDocument, t) || (o = K.style(t, e)), He.test(o) && Be.test(e) && (i = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o
    }

    function b(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function C(t, e) {
        if (e in t) return e;
        for (var n = e[0].toUpperCase() + e.slice(1), i = e, r = Ge.length; r--;)
            if (e = Ge[r] + n, e in t) return e;
        return i
    }

    function S(t, e, n) {
        var i = Ve.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function T(t, e, n, i, r) {
        for (var s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > s; s += 2) "margin" === n && (o += K.css(t, n + be[s], !0, r)), i ? ("content" === n && (o -= K.css(t, "padding" + be[s], !0, r)), "margin" !== n && (o -= K.css(t, "border" + be[s] + "Width", !0, r))) : (o += K.css(t, "padding" + be[s], !0, r), "padding" !== n && (o += K.css(t, "border" + be[s] + "Width", !0, r)));
        return o
    }

    function k(t, e, n) {
        var i = !0,
            r = "width" === e ? t.offsetWidth : t.offsetHeight,
            s = We(t),
            o = "border-box" === K.css(t, "boxSizing", !1, s);
        if (0 >= r || null == r) {
            if (r = x(t, e, s), (0 > r || null == r) && (r = t.style[e]), He.test(r)) return r;
            i = o && (Y.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + T(t, e, n || (o ? "border" : "content"), i, s) + "px"
    }

    function E(t, e) {
        for (var n, i, r, s = [], o = 0, a = t.length; a > o; o++) i = t[o], i.style && (s[o] = ve.get(i, "olddisplay"), n = i.style.display, e ? (s[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ce(i) && (s[o] = ve.access(i, "olddisplay", w(i.nodeName)))) : (r = Ce(i), "none" === n && r || ve.set(i, "olddisplay", r ? n : K.css(i, "display"))));
        for (o = 0; a > o; o++) i = t[o], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? s[o] || "" : "none"));
        return t
    }

    function P(t, e, n, i, r) {
        return new P.prototype.init(t, e, n, i, r)
    }

    function A() {
        return setTimeout(function() {
            Ye = void 0
        }), Ye = K.now()
    }

    function N(t, e) {
        var n, i = 0,
            r = {
                height: t
            };
        for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = be[i], r["margin" + n] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r
    }

    function M(t, e, n) {
        for (var i, r = (nn[e] || []).concat(nn["*"]), s = 0, o = r.length; o > s; s++)
            if (i = r[s].call(n, e, t)) return i
    }

    function L(t, e, n) {
        var i, r, s, o, a, u, h, c, l = this,
            d = {},
            f = t.style,
            p = t.nodeType && Ce(t),
            g = ve.get(t, "fxshow");
        n.queue || (a = K._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
            a.unqueued || u()
        }), a.unqueued++, l.always(function() {
            l.always(function() {
                a.unqueued--, K.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], h = K.css(t, "display"), c = "none" === h ? ve.get(t, "olddisplay") || w(t.nodeName) : h, "inline" === c && "none" === K.css(t, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", l.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (r = e[i], Qe.exec(r)) {
                if (delete e[i], s = s || "toggle" === r, r === (p ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[i]) continue;
                    p = !0
                }
                d[i] = g && g[i] || K.style(t, i)
            } else h = void 0;
        if (K.isEmptyObject(d)) "inline" === ("none" === h ? w(t.nodeName) : h) && (f.display = h);
        else {
            g ? "hidden" in g && (p = g.hidden) : g = ve.access(t, "fxshow", {}), s && (g.hidden = !p), p ? K(t).show() : l.done(function() {
                K(t).hide()
            }), l.done(function() {
                var e;
                ve.remove(t, "fxshow");
                for (e in d) K.style(t, e, d[e])
            });
            for (i in d) o = M(p ? g[i] : 0, i, l), i in g || (g[i] = o.start, p && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function D(t, e) {
        var n, i, r, s, o;
        for (n in t)
            if (i = K.camelCase(n), r = e[i], s = t[n], K.isArray(s) && (r = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), o = K.cssHooks[i], o && "expand" in o) {
                s = o.expand(s), delete t[i];
                for (n in s) n in t || (t[n] = s[n], e[n] = r)
            } else e[i] = r
    }

    function I(t, e, n) {
        var i, r, s = 0,
            o = en.length,
            a = K.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (r) return !1;
                for (var e = Ye || A(), n = Math.max(0, h.startTime + h.duration - e), i = n / h.duration || 0, s = 1 - i, o = 0, u = h.tweens.length; u > o; o++) h.tweens[o].run(s);
                return a.notifyWith(t, [h, s, n]), 1 > s && u ? n : (a.resolveWith(t, [h]), !1)
            },
            h = a.promise({
                elem: t,
                props: K.extend({}, e),
                opts: K.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Ye || A(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = K.Tween(t, h.opts, e, n, h.opts.specialEasing[e] || h.opts.easing);
                    return h.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? h.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) h.tweens[n].run(1);
                    return e ? a.resolveWith(t, [h, e]) : a.rejectWith(t, [h, e]), this
                }
            }),
            c = h.props;
        for (D(c, h.opts.specialEasing); o > s; s++)
            if (i = en[s].call(h, t, c, h.opts)) return i;
        return K.map(c, M, h), K.isFunction(h.opts.start) && h.opts.start.call(t, h), K.fx.timer(K.extend(u, {
            elem: t,
            anim: h,
            queue: h.opts.queue
        })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    }

    function z(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0,
                s = e.toLowerCase().match(fe) || [];
            if (K.isFunction(n))
                for (; i = s[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function j(t, e, n, i) {
        function r(a) {
            var u;
            return s[a] = !0, K.each(t[a] || [], function(t, a) {
                var h = a(e, n, i);
                return "string" != typeof h || o || s[h] ? o ? !(u = h) : void 0 : (e.dataTypes.unshift(h), r(h), !1)
            }), u
        }
        var s = {},
            o = t === bn;
        return r(e.dataTypes[0]) || !s["*"] && r("*")
    }

    function O(t, e) {
        var n, i, r = K.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && K.extend(!0, t, i), t
    }

    function R(t, e, n) {
        for (var i, r, s, o, a = t.contents, u = t.dataTypes;
            "*" === u[0];) u.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) {
                    u.unshift(r);
                    break
                }
        if (u[0] in n) s = u[0];
        else {
            for (r in n) {
                if (!u[0] || t.converters[r + " " + u[0]]) {
                    s = r;
                    break
                }
                o || (o = r)
            }
            s = s || o
        }
        return s ? (s !== u[0] && u.unshift(s), n[s]) : void 0
    }

    function q(t, e, n, i) {
        var r, s, o, a, u, h = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (o in t.converters) h[o.toLowerCase()] = t.converters[o];
        for (s = c.shift(); s;)
            if (t.responseFields[s] && (n[t.responseFields[s]] = e), !u && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = s, s = c.shift())
                if ("*" === s) s = u;
                else if ("*" !== u && u !== s) {
            if (o = h[u + " " + s] || h["* " + s], !o)
                for (r in h)
                    if (a = r.split(" "), a[1] === s && (o = h[u + " " + a[0]] || h["* " + a[0]])) {
                        o === !0 ? o = h[r] : h[r] !== !0 && (s = a[0], c.unshift(a[1]));
                        break
                    }
            if (o !== !0)
                if (o && t["throws"]) e = o(e);
                else try {
                    e = o(e)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: o ? l : "No conversion from " + u + " to " + s
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function F(t, e, n, i) {
        var r;
        if (K.isArray(e)) K.each(e, function(e, r) {
            n || kn.test(t) ? i(t, r) : F(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
        });
        else if (n || "object" !== K.type(e)) i(t, e);
        else
            for (r in e) F(t + "[" + r + "]", e[r], n, i)
    }

    function B(t) {
        return K.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var H = [],
        W = H.slice,
        $ = H.concat,
        V = H.push,
        U = H.indexOf,
        X = {},
        Z = X.toString,
        G = X.hasOwnProperty,
        Y = {},
        J = t.document,
        Q = "2.1.1",
        K = function(t, e) {
            return new K.fn.init(t, e)
        },
        te = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ee = /^-ms-/,
        ne = /-([\da-z])/gi,
        ie = function(t, e) {
            return e.toUpperCase()
        };
    K.fn = K.prototype = {
        jquery: Q,
        constructor: K,
        selector: "",
        length: 0,
        toArray: function() {
            return W.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : W.call(this)
        },
        pushStack: function(t) {
            var e = K.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return K.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(K.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(W.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: V,
        sort: H.sort,
        splice: H.splice
    }, K.extend = K.fn.extend = function() {
        var t, e, n, i, r, s, o = arguments[0] || {},
            a = 1,
            u = arguments.length,
            h = !1;
        for ("boolean" == typeof o && (h = o, o = arguments[a] || {}, a++), "object" == typeof o || K.isFunction(o) || (o = {}), a === u && (o = this, a--); u > a; a++)
            if (null != (t = arguments[a]))
                for (e in t) n = o[e], i = t[e], o !== i && (h && i && (K.isPlainObject(i) || (r = K.isArray(i))) ? (r ? (r = !1, s = n && K.isArray(n) ? n : []) : s = n && K.isPlainObject(n) ? n : {}, o[e] = K.extend(h, s, i)) : void 0 !== i && (o[e] = i));
        return o
    }, K.extend({
        expando: "jQuery" + (Q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === K.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            return !K.isArray(t) && t - parseFloat(t) >= 0
        },
        isPlainObject: function(t) {
            return "object" !== K.type(t) || t.nodeType || K.isWindow(t) ? !1 : t.constructor && !G.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? X[Z.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, n = eval;
            t = K.trim(t), t && (1 === t.indexOf("use strict") ? (e = J.createElement("script"), e.text = t, J.head.appendChild(e).parentNode.removeChild(e)) : n(t))
        },
        camelCase: function(t) {
            return t.replace(ee, "ms-").replace(ne, ie)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, i) {
            var r, s = 0,
                o = t.length,
                a = n(t);
            if (i) {
                if (a)
                    for (; o > s && (r = e.apply(t[s], i), r !== !1); s++);
                else
                    for (s in t)
                        if (r = e.apply(t[s], i), r === !1) break
            } else if (a)
                for (; o > s && (r = e.call(t[s], s, t[s]), r !== !1); s++);
            else
                for (s in t)
                    if (r = e.call(t[s], s, t[s]), r === !1) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(te, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? K.merge(i, "string" == typeof t ? [t] : t) : V.call(i, t)), i
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : U.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, r = t.length; n > i; i++) t[r++] = e[i];
            return t.length = r, t
        },
        grep: function(t, e, n) {
            for (var i, r = [], s = 0, o = t.length, a = !n; o > s; s++) i = !e(t[s], s), i !== a && r.push(t[s]);
            return r
        },
        map: function(t, e, i) {
            var r, s = 0,
                o = t.length,
                a = n(t),
                u = [];
            if (a)
                for (; o > s; s++) r = e(t[s], s, i), null != r && u.push(r);
            else
                for (s in t) r = e(t[s], s, i), null != r && u.push(r);
            return $.apply([], u)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, r;
            return "string" == typeof e && (n = t[e], e = t, t = n), K.isFunction(t) ? (i = W.call(arguments, 2), r = function() {
                return t.apply(e || this, i.concat(W.call(arguments)))
            }, r.guid = t.guid = t.guid || K.guid++, r) : void 0
        },
        now: Date.now,
        support: Y
    }), K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        X["[object " + e + "]"] = e.toLowerCase()
    });
    var re = function(t) {
        function e(t, e, n, i) {
            var r, s, o, a, u, h, l, f, p, g;
            if ((e ? e.ownerDocument || e : F) !== L && M(e), e = e || L, n = n || [], !t || "string" != typeof t) return n;
            if (1 !== (a = e.nodeType) && 9 !== a) return [];
            if (I && !i) {
                if (r = _e.exec(t))
                    if (o = r[1]) {
                        if (9 === a) {
                            if (s = e.getElementById(o), !s || !s.parentNode) return n;
                            if (s.id === o) return n.push(s), n
                        } else if (e.ownerDocument && (s = e.ownerDocument.getElementById(o)) && R(e, s) && s.id === o) return n.push(s), n
                    } else {
                        if (r[2]) return K.apply(n, e.getElementsByTagName(t)), n;
                        if ((o = r[3]) && x.getElementsByClassName && e.getElementsByClassName) return K.apply(n, e.getElementsByClassName(o)), n
                    }
                if (x.qsa && (!z || !z.test(t))) {
                    if (f = l = q, p = e, g = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (h = T(t), (l = e.getAttribute("id")) ? f = l.replace(we, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", u = h.length; u--;) h[u] = f + d(h[u]);
                        p = ye.test(t) && c(e.parentNode) || e, g = h.join(",")
                    }
                    if (g) try {
                        return K.apply(n, p.querySelectorAll(g)), n
                    } catch (m) {} finally {
                        l || e.removeAttribute("id")
                    }
                }
            }
            return E(t.replace(ue, "$1"), e, n, i)
        }

        function n() {
            function t(n, i) {
                return e.push(n + " ") > b.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function i(t) {
            return t[q] = !0, t
        }

        function r(t) {
            var e = L.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function s(t, e) {
            for (var n = t.split("|"), i = t.length; i--;) b.attrHandle[n[i]] = e
        }

        function o(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Z) - (~t.sourceIndex || Z);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function u(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function h(t) {
            return i(function(e) {
                return e = +e, i(function(n, i) {
                    for (var r, s = t([], n.length, e), o = s.length; o--;) n[r = s[o]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(t) {
            return t && typeof t.getElementsByTagName !== X && t
        }

        function l() {}

        function d(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
            return i
        }

        function f(t, e, n) {
            var i = e.dir,
                r = n && "parentNode" === i,
                s = H++;
            return e.first ? function(e, n, s) {
                for (; e = e[i];)
                    if (1 === e.nodeType || r) return t(e, n, s)
            } : function(e, n, o) {
                var a, u, h = [B, s];
                if (o) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || r) && t(e, n, o)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || r) {
                            if (u = e[q] || (e[q] = {}), (a = u[i]) && a[0] === B && a[1] === s) return h[2] = a[2];
                            if (u[i] = h, h[2] = t(e, n, o)) return !0
                        }
            }
        }

        function p(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var r = t.length; r--;)
                    if (!t[r](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function g(t, n, i) {
            for (var r = 0, s = n.length; s > r; r++) e(t, n[r], i);
            return i
        }

        function m(t, e, n, i, r) {
            for (var s, o = [], a = 0, u = t.length, h = null != e; u > a; a++)(s = t[a]) && (!n || n(s, i, r)) && (o.push(s), h && e.push(a));
            return o
        }

        function v(t, e, n, r, s, o) {
            return r && !r[q] && (r = v(r)), s && !s[q] && (s = v(s, o)), i(function(i, o, a, u) {
                var h, c, l, d = [],
                    f = [],
                    p = o.length,
                    v = i || g(e || "*", a.nodeType ? [a] : a, []),
                    _ = !t || !i && e ? v : m(v, d, t, a, u),
                    y = n ? s || (i ? t : p || r) ? [] : o : _;
                if (n && n(_, y, a, u), r)
                    for (h = m(y, f), r(h, [], a, u), c = h.length; c--;)(l = h[c]) && (y[f[c]] = !(_[f[c]] = l));
                if (i) {
                    if (s || t) {
                        if (s) {
                            for (h = [], c = y.length; c--;)(l = y[c]) && h.push(_[c] = l);
                            s(null, y = [], h, u)
                        }
                        for (c = y.length; c--;)(l = y[c]) && (h = s ? ee.call(i, l) : d[c]) > -1 && (i[h] = !(o[h] = l))
                    }
                } else y = m(y === o ? y.splice(p, y.length) : y), s ? s(null, o, y, u) : K.apply(o, y)
            })
        }

        function _(t) {
            for (var e, n, i, r = t.length, s = b.relative[t[0].type], o = s || b.relative[" "], a = s ? 1 : 0, u = f(function(t) {
                    return t === e
                }, o, !0), h = f(function(t) {
                    return ee.call(e, t) > -1
                }, o, !0), c = [function(t, n, i) {
                    return !s && (i || n !== P) || ((e = n).nodeType ? u(t, n, i) : h(t, n, i))
                }]; r > a; a++)
                if (n = b.relative[t[a].type]) c = [f(p(c), n)];
                else {
                    if (n = b.filter[t[a].type].apply(null, t[a].matches), n[q]) {
                        for (i = ++a; r > i && !b.relative[t[i].type]; i++);
                        return v(a > 1 && p(c), a > 1 && d(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(ue, "$1"), n, i > a && _(t.slice(a, i)), r > i && _(t = t.slice(i)), r > i && d(t))
                    }
                    c.push(n)
                }
            return p(c)
        }

        function y(t, n) {
            var r = n.length > 0,
                s = t.length > 0,
                o = function(i, o, a, u, h) {
                    var c, l, d, f = 0,
                        p = "0",
                        g = i && [],
                        v = [],
                        _ = P,
                        y = i || s && b.find.TAG("*", h),
                        w = B += null == _ ? 1 : Math.random() || .1,
                        x = y.length;
                    for (h && (P = o !== L && o); p !== x && null != (c = y[p]); p++) {
                        if (s && c) {
                            for (l = 0; d = t[l++];)
                                if (d(c, o, a)) {
                                    u.push(c);
                                    break
                                }
                            h && (B = w)
                        }
                        r && ((c = !d && c) && f--, i && g.push(c))
                    }
                    if (f += p, r && p !== f) {
                        for (l = 0; d = n[l++];) d(g, v, o, a);
                        if (i) {
                            if (f > 0)
                                for (; p--;) g[p] || v[p] || (v[p] = J.call(u));
                            v = m(v)
                        }
                        K.apply(u, v), h && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(u)
                    }
                    return h && (B = w, P = _), g
                };
            return r ? i(o) : o
        }
        var w, x, b, C, S, T, k, E, P, A, N, M, L, D, I, z, j, O, R, q = "sizzle" + -new Date,
            F = t.document,
            B = 0,
            H = 0,
            W = n(),
            $ = n(),
            V = n(),
            U = function(t, e) {
                return t === e && (N = !0), 0
            },
            X = "undefined",
            Z = 1 << 31,
            G = {}.hasOwnProperty,
            Y = [],
            J = Y.pop,
            Q = Y.push,
            K = Y.push,
            te = Y.slice,
            ee = Y.indexOf || function(t) {
                for (var e = 0, n = this.length; n > e; e++)
                    if (this[e] === t) return e;
                return -1
            },
            ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ie = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            se = re.replace("w", "w#"),
            oe = "\\[" + ie + "*(" + re + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + se + "))|)" + ie + "*\\]",
            ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            ue = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
            he = new RegExp("^" + ie + "*," + ie + "*"),
            ce = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
            le = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
            de = new RegExp(ae),
            fe = new RegExp("^" + se + "$"),
            pe = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ne + ")$", "i"),
                needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            _e = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            we = /'|\\/g,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
            be = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            };
        try {
            K.apply(Y = te.call(F.childNodes), F.childNodes), Y[F.childNodes.length].nodeType
        } catch (Ce) {
            K = {
                apply: Y.length ? function(t, e) {
                    Q.apply(t, te.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        x = e.support = {}, S = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, M = e.setDocument = function(t) {
            var e, n = t ? t.ownerDocument || t : F,
                i = n.defaultView;
            return n !== L && 9 === n.nodeType && n.documentElement ? (L = n, D = n.documentElement, I = !S(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                M()
            }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                M()
            })), x.attributes = r(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), x.getElementsByTagName = r(function(t) {
                return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
            }), x.getElementsByClassName = ve.test(n.getElementsByClassName) && r(function(t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
            }), x.getById = r(function(t) {
                return D.appendChild(t).id = q, !n.getElementsByName || !n.getElementsByName(q).length
            }), x.getById ? (b.find.ID = function(t, e) {
                if (typeof e.getElementById !== X && I) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            }, b.filter.ID = function(t) {
                var e = t.replace(xe, be);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete b.find.ID, b.filter.ID = function(t) {
                var e = t.replace(xe, be);
                return function(t) {
                    var n = typeof t.getAttributeNode !== X && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), b.find.TAG = x.getElementsByTagName ? function(t, e) {
                return typeof e.getElementsByTagName !== X ? e.getElementsByTagName(t) : void 0
            } : function(t, e) {
                var n, i = [],
                    r = 0,
                    s = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = s[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return s
            }, b.find.CLASS = x.getElementsByClassName && function(t, e) {
                return typeof e.getElementsByClassName !== X && I ? e.getElementsByClassName(t) : void 0
            }, j = [], z = [], (x.qsa = ve.test(n.querySelectorAll)) && (r(function(t) {
                t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && z.push("[*^$]=" + ie + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || z.push("\\[" + ie + "*(?:value|" + ne + ")"), t.querySelectorAll(":checked").length || z.push(":checked")
            }), r(function(t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && z.push("name" + ie + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || z.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), z.push(",.*:")
            })), (x.matchesSelector = ve.test(O = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && r(function(t) {
                x.disconnectedMatch = O.call(t, "div"), O.call(t, "[s!='']:x"), j.push("!=", ae)
            }), z = z.length && new RegExp(z.join("|")), j = j.length && new RegExp(j.join("|")), e = ve.test(D.compareDocumentPosition), R = e || ve.test(D.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, U = e ? function(t, e) {
                if (t === e) return N = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !x.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === F && R(F, t) ? -1 : e === n || e.ownerDocument === F && R(F, e) ? 1 : A ? ee.call(A, t) - ee.call(A, e) : 0 : 4 & i ? -1 : 1)
            } : function(t, e) {
                if (t === e) return N = !0, 0;
                var i, r = 0,
                    s = t.parentNode,
                    a = e.parentNode,
                    u = [t],
                    h = [e];
                if (!s || !a) return t === n ? -1 : e === n ? 1 : s ? -1 : a ? 1 : A ? ee.call(A, t) - ee.call(A, e) : 0;
                if (s === a) return o(t, e);
                for (i = t; i = i.parentNode;) u.unshift(i);
                for (i = e; i = i.parentNode;) h.unshift(i);
                for (; u[r] === h[r];) r++;
                return r ? o(u[r], h[r]) : u[r] === F ? -1 : h[r] === F ? 1 : 0
            }, n) : L
        }, e.matches = function(t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== L && M(t), n = n.replace(le, "='$1']"), !(!x.matchesSelector || !I || j && j.test(n) || z && z.test(n))) try {
                var i = O.call(t, n);
                if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (r) {}
            return e(n, L, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== L && M(t), R(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== L && M(t);
            var n = b.attrHandle[e.toLowerCase()],
                i = n && G.call(b.attrHandle, e.toLowerCase()) ? n(t, e, !I) : void 0;
            return void 0 !== i ? i : x.attributes || !I ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, n = [],
                i = 0,
                r = 0;
            if (N = !x.detectDuplicates, A = !x.sortStable && t.slice(0), t.sort(U), N) {
                for (; e = t[r++];) e === t[r] && (i = n.push(r));
                for (; i--;) t.splice(n[i], 1)
            }
            return A = null, t
        }, C = e.getText = function(t) {
            var e, n = "",
                i = 0,
                r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += C(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else
                for (; e = t[i++];) n += C(e);
            return n
        }, b = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(xe, be), t[3] = (t[3] || t[4] || t[5] || "").replace(xe, be), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return pe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && de.test(n) && (e = T(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(xe, be).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = W[t + " "];
                    return e || (e = new RegExp("(^|" + ie + ")" + t + "(" + ie + "|$)")) && W(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== X && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(r) {
                        var s = e.attr(r, t);
                        return null == s ? "!=" === n : n ? (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s + " ").indexOf(i) > -1 : "|=" === n ? s === i || s.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, n, i, r) {
                    var s = "nth" !== t.slice(0, 3),
                        o = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === i && 0 === r ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, u) {
                        var h, c, l, d, f, p, g = s !== o ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            _ = !u && !a;
                        if (m) {
                            if (s) {
                                for (; g;) {
                                    for (l = e; l = l[g];)
                                        if (a ? l.nodeName.toLowerCase() === v : 1 === l.nodeType) return !1;
                                    p = g = "only" === t && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [o ? m.firstChild : m.lastChild], o && _) {
                                for (c = m[q] || (m[q] = {}), h = c[t] || [], f = h[0] === B && h[1], d = h[0] === B && h[2], l = f && m.childNodes[f]; l = ++f && l && l[g] || (d = f = 0) || p.pop();)
                                    if (1 === l.nodeType && ++d && l === e) {
                                        c[t] = [B, f, d];
                                        break
                                    }
                            } else if (_ && (h = (e[q] || (e[q] = {}))[t]) && h[0] === B) d = h[1];
                            else
                                for (;
                                    (l = ++f && l && l[g] || (d = f = 0) || p.pop()) && ((a ? l.nodeName.toLowerCase() !== v : 1 !== l.nodeType) || !++d || (_ && ((l[q] || (l[q] = {}))[t] = [B, d]), l !== e)););
                            return d -= r, d === i || d % i === 0 && d / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var r, s = b.pseudos[t] || b.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return s[q] ? s(n) : s.length > 1 ? (r = [t, t, "", n], b.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, r = s(t, n), o = r.length; o--;) i = ee.call(t, r[o]), t[i] = !(e[i] = r[o])
                    }) : function(t) {
                        return s(t, 0, r)
                    }) : s
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = [],
                        n = [],
                        r = k(t.replace(ue, "$1"));
                    return r[q] ? i(function(t, e, n, i) {
                        for (var s, o = r(t, null, i, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s))
                    }) : function(t, i, s) {
                        return e[0] = t, r(e, null, s, n), !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return function(e) {
                        return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                    }
                }),
                lang: i(function(t) {
                    return fe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xe, be).toLowerCase(),
                        function(e) {
                            var n;
                            do
                                if (n = I ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === D
                },
                focus: function(t) {
                    return t === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !b.pseudos.empty(t)
                },
                header: function(t) {
                    return me.test(t.nodeName)
                },
                input: function(t) {
                    return ge.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: h(function() {
                    return [0]
                }),
                last: h(function(t, e) {
                    return [e - 1]
                }),
                eq: h(function(t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: h(function(t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t
                }),
                odd: h(function(t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }),
                lt: h(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: h(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }, b.pseudos.nth = b.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[w] = a(w);
        for (w in {
                submit: !0,
                reset: !0
            }) b.pseudos[w] = u(w);
        return l.prototype = b.filters = b.pseudos, b.setFilters = new l, T = e.tokenize = function(t, n) {
            var i, r, s, o, a, u, h, c = $[t + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = t, u = [], h = b.preFilter; a;) {
                (!i || (r = he.exec(a))) && (r && (a = a.slice(r[0].length) || a), u.push(s = [])), i = !1, (r = ce.exec(a)) && (i = r.shift(), s.push({
                    value: i,
                    type: r[0].replace(ue, " ")
                }), a = a.slice(i.length));
                for (o in b.filter) !(r = pe[o].exec(a)) || h[o] && !(r = h[o](r)) || (i = r.shift(), s.push({
                    value: i,
                    type: o,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? e.error(t) : $(t, u).slice(0)
        }, k = e.compile = function(t, e) {
            var n, i = [],
                r = [],
                s = V[t + " "];
            if (!s) {
                for (e || (e = T(t)), n = e.length; n--;) s = _(e[n]), s[q] ? i.push(s) : r.push(s);
                s = V(t, y(r, i)), s.selector = t
            }
            return s
        }, E = e.select = function(t, e, n, i) {
            var r, s, o, a, u, h = "function" == typeof t && t,
                l = !i && T(t = h.selector || t);
            if (n = n || [], 1 === l.length) {
                if (s = l[0] = l[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && x.getById && 9 === e.nodeType && I && b.relative[s[1].type]) {
                    if (e = (b.find.ID(o.matches[0].replace(xe, be), e) || [])[0], !e) return n;
                    h && (e = e.parentNode), t = t.slice(s.shift().value.length)
                }
                for (r = pe.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !b.relative[a = o.type]);)
                    if ((u = b.find[a]) && (i = u(o.matches[0].replace(xe, be), ye.test(s[0].type) && c(e.parentNode) || e))) {
                        if (s.splice(r, 1), t = i.length && d(s), !t) return K.apply(n, i), n;
                        break
                    }
            }
            return (h || k(t, l))(i, e, !I, n, ye.test(t) && c(e.parentNode) || e), n
        }, x.sortStable = q.split("").sort(U).join("") === q, x.detectDuplicates = !!N, M(), x.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(L.createElement("div"))
        }), r(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), x.attributes && r(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || s("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), r(function(t) {
            return null == t.getAttribute("disabled")
        }) || s(ne, function(t, e, n) {
            var i;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    K.find = re, K.expr = re.selectors, K.expr[":"] = K.expr.pseudos, K.unique = re.uniqueSort, K.text = re.getText, K.isXMLDoc = re.isXML, K.contains = re.contains;
    var se = K.expr.match.needsContext,
        oe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ae = /^.[^:#\[\.,]*$/;
    K.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? K.find.matchesSelector(i, t) ? [i] : [] : K.find.matches(t, K.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, K.fn.extend({
        find: function(t) {
            var e, n = this.length,
                i = [],
                r = this;
            if ("string" != typeof t) return this.pushStack(K(t).filter(function() {
                for (e = 0; n > e; e++)
                    if (K.contains(r[e], this)) return !0
            }));
            for (e = 0; n > e; e++) K.find(t, r[e], i);
            return i = this.pushStack(n > 1 ? K.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function(t) {
            return !!i(this, "string" == typeof t && se.test(t) ? K(t) : t || [], !1).length
        }
    });
    var ue, he = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ce = K.fn.init = function(t, e) {
            var n, i;
            if (!t) return this;
            if ("string" == typeof t) {
                if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : he.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || ue).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof K ? e[0] : e, K.merge(this, K.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : J, !0)), oe.test(n[1]) && K.isPlainObject(e))
                        for (n in e) K.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return i = J.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = J, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : K.isFunction(t) ? "undefined" != typeof ue.ready ? ue.ready(t) : t(K) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), K.makeArray(t, this))
        };
    ce.prototype = K.fn, ue = K(J);
    var le = /^(?:parents|prev(?:Until|All))/,
        de = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    K.extend({
        dir: function(t, e, n) {
            for (var i = [], r = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && K(t).is(n)) break;
                    i.push(t)
                }
            return i
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }), K.fn.extend({
        has: function(t) {
            var e = K(t, this),
                n = e.length;
            return this.filter(function() {
                for (var t = 0; n > t; t++)
                    if (K.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, r = this.length, s = [], o = se.test(t) || "string" != typeof t ? K(t, e || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && K.find.matchesSelector(n, t))) {
                        s.push(n);
                        break
                    }
            return this.pushStack(s.length > 1 ? K.unique(s) : s)
        },
        index: function(t) {
            return t ? "string" == typeof t ? U.call(K(t), this[0]) : U.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(K.unique(K.merge(this.get(), K(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), K.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return K.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return K.dir(t, "parentNode", n)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return K.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return K.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return K.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return K.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return K.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return K.sibling(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || K.merge([], t.childNodes)
        }
    }, function(t, e) {
        K.fn[t] = function(n, i) {
            var r = K.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = K.filter(i, r)), this.length > 1 && (de[t] || K.unique(r), le.test(t) && r.reverse()), this.pushStack(r)
        }
    });
    var fe = /\S+/g,
        pe = {};
    K.Callbacks = function(t) {
        t = "string" == typeof t ? pe[t] || s(t) : K.extend({}, t);
        var e, n, i, r, o, a, u = [],
            h = !t.once && [],
            c = function(s) {
                for (e = t.memory && s, n = !0, a = r || 0, r = 0, o = u.length, i = !0; u && o > a; a++)
                    if (u[a].apply(s[0], s[1]) === !1 && t.stopOnFalse) {
                        e = !1;
                        break
                    }
                i = !1, u && (h ? h.length && c(h.shift()) : e ? u = [] : l.disable())
            },
            l = {
                add: function() {
                    if (u) {
                        var n = u.length;
                        ! function s(e) {
                            K.each(e, function(e, n) {
                                var i = K.type(n);
                                "function" === i ? t.unique && l.has(n) || u.push(n) : n && n.length && "string" !== i && s(n)
                            })
                        }(arguments), i ? o = u.length : e && (r = n, c(e))
                    }
                    return this
                },
                remove: function() {
                    return u && K.each(arguments, function(t, e) {
                        for (var n;
                            (n = K.inArray(e, u, n)) > -1;) u.splice(n, 1), i && (o >= n && o--, a >= n && a--)
                    }), this
                },
                has: function(t) {
                    return t ? K.inArray(t, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], o = 0, this
                },
                disable: function() {
                    return u = h = e = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return h = void 0, e || l.disable(), this
                },
                locked: function() {
                    return !h
                },
                fireWith: function(t, e) {
                    return !u || n && !h || (e = e || [], e = [t, e.slice ? e.slice() : e], i ? h.push(e) : c(e)), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return l
    }, K.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", K.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", K.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", K.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return K.Deferred(function(n) {
                            K.each(e, function(e, s) {
                                var o = K.isFunction(t[e]) && t[e];
                                r[s[1]](function() {
                                    var t = o && o.apply(this, arguments);
                                    t && K.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === i ? n.promise() : this, o ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? K.extend(t, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, K.each(e, function(t, s) {
                var o = s[2],
                    a = s[3];
                i[s[1]] = o.add, a && o.add(function() {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), r[s[0]] = function() {
                    return r[s[0] + "With"](this === r ? i : this, arguments), this
                }, r[s[0] + "With"] = o.fireWith
            }), i.promise(r), t && t.call(r, r), r
        },
        when: function(t) {
            var e, n, i, r = 0,
                s = W.call(arguments),
                o = s.length,
                a = 1 !== o || t && K.isFunction(t.promise) ? o : 0,
                u = 1 === a ? t : K.Deferred(),
                h = function(t, n, i) {
                    return function(r) {
                        n[t] = this, i[t] = arguments.length > 1 ? W.call(arguments) : r, i === e ? u.notifyWith(n, i) : --a || u.resolveWith(n, i)
                    }
                };
            if (o > 1)
                for (e = new Array(o), n = new Array(o), i = new Array(o); o > r; r++) s[r] && K.isFunction(s[r].promise) ? s[r].promise().done(h(r, i, s)).fail(u.reject).progress(h(r, n, e)) : --a;
            return a || u.resolveWith(i, s), u.promise()
        }
    });
    var ge;
    K.fn.ready = function(t) {
        return K.ready.promise().done(t), this
    }, K.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? K.readyWait++ : K.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --K.readyWait : K.isReady) || (K.isReady = !0, t !== !0 && --K.readyWait > 0 || (ge.resolveWith(J, [K]), K.fn.triggerHandler && (K(J).triggerHandler("ready"), K(J).off("ready"))))
        }
    }), K.ready.promise = function(e) {
        return ge || (ge = K.Deferred(), "complete" === J.readyState ? setTimeout(K.ready) : (J.addEventListener("DOMContentLoaded", o, !1), t.addEventListener("load", o, !1))), ge.promise(e)
    }, K.ready.promise();
    var me = K.access = function(t, e, n, i, r, s, o) {
        var a = 0,
            u = t.length,
            h = null == n;
        if ("object" === K.type(n)) {
            r = !0;
            for (a in n) K.access(t, e, a, n[a], !0, s, o)
        } else if (void 0 !== i && (r = !0, K.isFunction(i) || (o = !0), h && (o ? (e.call(t, i), e = null) : (h = e, e = function(t, e, n) {
                return h.call(K(t), n)
            })), e))
            for (; u > a; a++) e(t[a], n, o ? i : i.call(t[a], a, e(t[a], n)));
        return r ? t : h ? e.call(t) : u ? e(t[0], n) : s
    };
    K.acceptData = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }, a.uid = 1, a.accepts = K.acceptData, a.prototype = {
        key: function(t) {
            if (!a.accepts(t)) return 0;
            var e = {},
                n = t[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    e[this.expando] = {
                        value: n
                    }, Object.defineProperties(t, e)
                } catch (i) {
                    e[this.expando] = n, K.extend(t, e)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(t, e, n) {
            var i, r = this.key(t),
                s = this.cache[r];
            if ("string" == typeof e) s[e] = n;
            else if (K.isEmptyObject(s)) K.extend(this.cache[r], e);
            else
                for (i in e) s[i] = e[i];
            return s
        },
        get: function(t, e) {
            var n = this.cache[this.key(t)];
            return void 0 === e ? n : n[e]
        },
        access: function(t, e, n) {
            var i;
            return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, K.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, i, r, s = this.key(t),
                o = this.cache[s];
            if (void 0 === e) this.cache[s] = {};
            else {
                K.isArray(e) ? i = e.concat(e.map(K.camelCase)) : (r = K.camelCase(e), e in o ? i = [e, r] : (i = r, i = i in o ? [i] : i.match(fe) || [])), n = i.length;
                for (; n--;) delete o[i[n]]
            }
        },
        hasData: function(t) {
            return !K.isEmptyObject(this.cache[t[this.expando]] || {})
        },
        discard: function(t) {
            t[this.expando] && delete this.cache[t[this.expando]]
        }
    };
    var ve = new a,
        _e = new a,
        ye = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        we = /([A-Z])/g;
    K.extend({
        hasData: function(t) {
            return _e.hasData(t) || ve.hasData(t)
        },
        data: function(t, e, n) {
            return _e.access(t, e, n)
        },
        removeData: function(t, e) {
            _e.remove(t, e)
        },
        _data: function(t, e, n) {
            return ve.access(t, e, n)
        },
        _removeData: function(t, e) {
            ve.remove(t, e)
        }
    }), K.fn.extend({
        data: function(t, e) {
            var n, i, r, s = this[0],
                o = s && s.attributes;
            if (void 0 === t) {
                if (this.length && (r = _e.get(s), 1 === s.nodeType && !ve.get(s, "hasDataAttrs"))) {
                    for (n = o.length; n--;) o[n] && (i = o[n].name, 0 === i.indexOf("data-") && (i = K.camelCase(i.slice(5)), u(s, i, r[i])));
                    ve.set(s, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                _e.set(this, t)
            }) : me(this, function(e) {
                var n, i = K.camelCase(t);
                if (s && void 0 === e) {
                    if (n = _e.get(s, t), void 0 !== n) return n;
                    if (n = _e.get(s, i), void 0 !== n) return n;
                    if (n = u(s, i, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = _e.get(this, i);
                    _e.set(this, i, e), -1 !== t.indexOf("-") && void 0 !== n && _e.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                _e.remove(this, t)
            })
        }
    }), K.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = ve.get(t, e), n && (!i || K.isArray(n) ? i = ve.access(t, e, K.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = K.queue(t, e),
                i = n.length,
                r = n.shift(),
                s = K._queueHooks(t, e),
                o = function() {
                    K.dequeue(t, e)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete s.stop, r.call(t, o, s)), !i && s && s.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return ve.get(t, n) || ve.access(t, n, {
                empty: K.Callbacks("once memory").add(function() {
                    ve.remove(t, [e + "queue", n])
                })
            })
        }
    }), K.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? K.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = K.queue(this, t, e);
                K._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && K.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                K.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
                r = K.Deferred(),
                s = this,
                o = this.length,
                a = function() {
                    --i || r.resolveWith(s, [s])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;) n = ve.get(s[o], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        be = ["Top", "Right", "Bottom", "Left"],
        Ce = function(t, e) {
            return t = e || t, "none" === K.css(t, "display") || !K.contains(t.ownerDocument, t)
        },
        Se = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = J.createDocumentFragment(),
            e = t.appendChild(J.createElement("div")),
            n = J.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), Y.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Te = "undefined";
    Y.focusinBubbles = "onfocusin" in t;
    var ke = /^key/,
        Ee = /^(?:mouse|pointer|contextmenu)|click/,
        Pe = /^(?:focusinfocus|focusoutblur)$/,
        Ae = /^([^.]*)(?:\.(.+)|)$/;
    K.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var s, o, a, u, h, c, l, d, f, p, g, m = ve.get(t);
            if (m)
                for (n.handler && (s = n, n = s.handler, r = s.selector), n.guid || (n.guid = K.guid++), (u = m.events) || (u = m.events = {}), (o = m.handle) || (o = m.handle = function(e) {
                        return typeof K !== Te && K.event.triggered !== e.type ? K.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(fe) || [""], h = e.length; h--;) a = Ae.exec(e[h]) || [], f = g = a[1], p = (a[2] || "").split(".").sort(), f && (l = K.event.special[f] || {}, f = (r ? l.delegateType : l.bindType) || f, l = K.event.special[f] || {}, c = K.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && K.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, s), (d = u[f]) || (d = u[f] = [], d.delegateCount = 0, l.setup && l.setup.call(t, i, p, o) !== !1 || t.addEventListener && t.addEventListener(f, o, !1)), l.add && (l.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), K.event.global[f] = !0)
        },
        remove: function(t, e, n, i, r) {
            var s, o, a, u, h, c, l, d, f, p, g, m = ve.hasData(t) && ve.get(t);
            if (m && (u = m.events)) {
                for (e = (e || "").match(fe) || [""], h = e.length; h--;)
                    if (a = Ae.exec(e[h]) || [], f = g = a[1], p = (a[2] || "").split(".").sort(), f) {
                        for (l = K.event.special[f] || {}, f = (i ? l.delegateType : l.bindType) || f, d = u[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = d.length; s--;) c = d[s], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(s, 1), c.selector && d.delegateCount--, l.remove && l.remove.call(t, c));
                        o && !d.length && (l.teardown && l.teardown.call(t, p, m.handle) !== !1 || K.removeEvent(t, f, m.handle), delete u[f])
                    } else
                        for (f in u) K.event.remove(t, f + e[h], n, i, !0);
                K.isEmptyObject(u) && (delete m.handle, ve.remove(t, "events"))
            }
        },
        trigger: function(e, n, i, r) {
            var s, o, a, u, h, c, l, d = [i || J],
                f = G.call(e, "type") ? e.type : e,
                p = G.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = a = i = i || J, 3 !== i.nodeType && 8 !== i.nodeType && !Pe.test(f + K.event.triggered) && (f.indexOf(".") >= 0 && (p = f.split("."), f = p.shift(), p.sort()), h = f.indexOf(":") < 0 && "on" + f, e = e[K.expando] ? e : new K.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : K.makeArray(n, [e]), l = K.event.special[f] || {}, r || !l.trigger || l.trigger.apply(i, n) !== !1)) {
                if (!r && !l.noBubble && !K.isWindow(i)) {
                    for (u = l.delegateType || f, Pe.test(u + f) || (o = o.parentNode); o; o = o.parentNode) d.push(o), a = o;
                    a === (i.ownerDocument || J) && d.push(a.defaultView || a.parentWindow || t)
                }
                for (s = 0;
                    (o = d[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? u : l.bindType || f, c = (ve.get(o, "events") || {})[e.type] && ve.get(o, "handle"), c && c.apply(o, n), c = h && o[h], c && c.apply && K.acceptData(o) && (e.result = c.apply(o, n), e.result === !1 && e.preventDefault());
                return e.type = f, r || e.isDefaultPrevented() || l._default && l._default.apply(d.pop(), n) !== !1 || !K.acceptData(i) || h && K.isFunction(i[f]) && !K.isWindow(i) && (a = i[h], a && (i[h] = null), K.event.triggered = f, i[f](), K.event.triggered = void 0, a && (i[h] = a)), e.result
            }
        },
        dispatch: function(t) {
            t = K.event.fix(t);
            var e, n, i, r, s, o = [],
                a = W.call(arguments),
                u = (ve.get(this, "events") || {})[t.type] || [],
                h = K.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !h.preDispatch || h.preDispatch.call(this, t) !== !1) {
                for (o = K.event.handlers.call(this, t, u), e = 0;
                    (r = o[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, n = 0;
                        (s = r.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(s.namespace)) && (t.handleObj = s, t.data = s.data, i = ((K.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, s, o = [],
                a = e.delegateCount,
                u = t.target;
            if (a && u.nodeType && (!t.button || "click" !== t.type))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || "click" !== t.type) {
                        for (i = [], n = 0; a > n; n++) s = e[n], r = s.selector + " ", void 0 === i[r] && (i[r] = s.needsContext ? K(r, this).index(u) >= 0 : K.find(r, this, null, [u]).length), i[r] && i.push(s);
                        i.length && o.push({
                            elem: u,
                            handlers: i
                        })
                    }
            return a < e.length && o.push({
                elem: this,
                handlers: e.slice(a)
            }), o
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, r, s = e.button;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || J, i = n.documentElement, r = n.body, t.pageX = e.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[K.expando]) return t;
            var e, n, i, r = t.type,
                s = t,
                o = this.fixHooks[r];
            for (o || (this.fixHooks[r] = o = Ee.test(r) ? this.mouseHooks : ke.test(r) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, t = new K.Event(s), e = i.length; e--;) n = i[e], t[n] = s[n];
            return t.target || (t.target = J), 3 === t.target.nodeType && (t.target = t.target.parentNode), o.filter ? o.filter(t, s) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== l() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === l() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && K.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return K.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, i) {
            var r = K.extend(new K.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? K.event.trigger(r, null, e) : K.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, K.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    }, K.Event = function(t, e) {
        return this instanceof K.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? h : c) : this.type = t, e && K.extend(this, e), this.timeStamp = t && t.timeStamp || K.now(), void(this[K.expando] = !0)) : new K.Event(t, e)
    }, K.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = h, t && t.preventDefault && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = h, t && t.stopPropagation && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = h, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, K.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        K.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this,
                    r = t.relatedTarget,
                    s = t.handleObj;
                return (!r || r !== i && !K.contains(i, r)) && (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), Y.focusinBubbles || K.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            K.event.simulate(e, t.target, K.event.fix(t), !0)
        };
        K.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = ve.access(i, e);
                r || i.addEventListener(t, n, !0), ve.access(i, e, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = ve.access(i, e) - 1;
                r ? ve.access(i, e, r) : (i.removeEventListener(t, n, !0), ve.remove(i, e))
            }
        }
    }), K.fn.extend({
        on: function(t, e, n, i, r) {
            var s, o;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (o in t) this.on(o, e, n, t[o], r);
                return this
            }
            if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = c;
            else if (!i) return this;
            return 1 === r && (s = i, i = function(t) {
                return K().off(t), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = K.guid++)), this.each(function() {
                K.event.add(this, t, i, n, e)
            })
        },
        one: function(t, e, n, i) {
            return this.on(t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, K(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = c), this.each(function() {
                K.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                K.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? K.event.trigger(t, e, n, !0) : void 0
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Me = /<([\w:]+)/,
        Le = /<|&#?\w+;/,
        De = /<(?:script|style|link)/i,
        Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ze = /^$|\/(?:java|ecma)script/i,
        je = /^true\/(.*)/,
        Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Re = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Re.optgroup = Re.option, Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead, Re.th = Re.td, K.extend({
        clone: function(t, e, n) {
            var i, r, s, o, a = t.cloneNode(!0),
                u = K.contains(t.ownerDocument, t);
            if (!(Y.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || K.isXMLDoc(t)))
                for (o = v(a), s = v(t), i = 0, r = s.length; r > i; i++) _(s[i], o[i]);
            if (e)
                if (n)
                    for (s = s || v(t), o = o || v(a), i = 0, r = s.length; r > i; i++) m(s[i], o[i]);
                else m(t, a);
            return o = v(a, "script"), o.length > 0 && g(o, !u && v(t, "script")), a
        },
        buildFragment: function(t, e, n, i) {
            for (var r, s, o, a, u, h, c = e.createDocumentFragment(), l = [], d = 0, f = t.length; f > d; d++)
                if (r = t[d], r || 0 === r)
                    if ("object" === K.type(r)) K.merge(l, r.nodeType ? [r] : r);
                    else if (Le.test(r)) {
                for (s = s || c.appendChild(e.createElement("div")), o = (Me.exec(r) || ["", ""])[1].toLowerCase(), a = Re[o] || Re._default, s.innerHTML = a[1] + r.replace(Ne, "<$1></$2>") + a[2], h = a[0]; h--;) s = s.lastChild;
                K.merge(l, s.childNodes), s = c.firstChild, s.textContent = ""
            } else l.push(e.createTextNode(r));
            for (c.textContent = "", d = 0; r = l[d++];)
                if ((!i || -1 === K.inArray(r, i)) && (u = K.contains(r.ownerDocument, r), s = v(c.appendChild(r), "script"), u && g(s), n))
                    for (h = 0; r = s[h++];) ze.test(r.type || "") && n.push(r);
            return c
        },
        cleanData: function(t) {
            for (var e, n, i, r, s = K.event.special, o = 0; void 0 !== (n = t[o]); o++) {
                if (K.acceptData(n) && (r = n[ve.expando], r && (e = ve.cache[r]))) {
                    if (e.events)
                        for (i in e.events) s[i] ? K.event.remove(n, i) : K.removeEvent(n, i, e.handle);
                    ve.cache[r] && delete ve.cache[r]
                }
                delete _e.cache[n[_e.expando]]
            }
        }
    }), K.fn.extend({
        text: function(t) {
            return me(this, function(t) {
                return void 0 === t ? K.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = d(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = d(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, i = t ? K.filter(t, this) : this, r = 0; null != (n = i[r]); r++) e || 1 !== n.nodeType || K.cleanData(v(n)), n.parentNode && (e && K.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (K.cleanData(v(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return K.clone(this, t, e)
            })
        },
        html: function(t) {
            return me(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !De.test(t) && !Re[(Me.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(Ne, "<$1></$2>");
                    try {
                        for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (K.cleanData(v(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, K.cleanData(v(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = $.apply([], t);
            var n, i, r, s, o, a, u = 0,
                h = this.length,
                c = this,
                l = h - 1,
                d = t[0],
                g = K.isFunction(d);
            if (g || h > 1 && "string" == typeof d && !Y.checkClone && Ie.test(d)) return this.each(function(n) {
                var i = c.eq(n);
                g && (t[0] = d.call(this, n, i.html())), i.domManip(t, e)
            });
            if (h && (n = K.buildFragment(t, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                for (r = K.map(v(n, "script"), f), s = r.length; h > u; u++) o = n, u !== l && (o = K.clone(o, !0, !0), s && K.merge(r, v(o, "script"))), e.call(this[u], o, u);
                if (s)
                    for (a = r[r.length - 1].ownerDocument, K.map(r, p), u = 0; s > u; u++) o = r[u], ze.test(o.type || "") && !ve.access(o, "globalEval") && K.contains(a, o) && (o.src ? K._evalUrl && K._evalUrl(o.src) : K.globalEval(o.textContent.replace(Oe, "")))
            }
            return this
        }
    }), K.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        K.fn[t] = function(t) {
            for (var n, i = [], r = K(t), s = r.length - 1, o = 0; s >= o; o++) n = o === s ? this : this.clone(!0), K(r[o])[e](n), V.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var qe, Fe = {},
        Be = /^margin/,
        He = new RegExp("^(" + xe + ")(?!px)[a-z%]+$", "i"),
        We = function(t) {
            return t.ownerDocument.defaultView.getComputedStyle(t, null)
        };
    ! function() {
        function e() {
            o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o.innerHTML = "", r.appendChild(s);
            var e = t.getComputedStyle(o, null);
            n = "1%" !== e.top, i = "4px" === e.width, r.removeChild(s)
        }
        var n, i, r = J.documentElement,
            s = J.createElement("div"),
            o = J.createElement("div");
        o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === o.style.backgroundClip, s.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", s.appendChild(o), t.getComputedStyle && K.extend(Y, {
            pixelPosition: function() {
                return e(), n
            },
            boxSizingReliable: function() {
                return null == i && e(), i
            },
            reliableMarginRight: function() {
                var e, n = o.appendChild(J.createElement("div"));
                return n.style.cssText = o.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", o.style.width = "1px", r.appendChild(s), e = !parseFloat(t.getComputedStyle(n, null).marginRight), r.removeChild(s), e
            }
        }))
    }(), K.swap = function(t, e, n, i) {
        var r, s, o = {};
        for (s in e) o[s] = t.style[s], t.style[s] = e[s];
        r = n.apply(t, i || []);
        for (s in e) t.style[s] = o[s];
        return r
    };
    var $e = /^(none|table(?!-c[ea]).+)/,
        Ve = new RegExp("^(" + xe + ")(.*)$", "i"),
        Ue = new RegExp("^([+-])=(" + xe + ")", "i"),
        Xe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ze = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ge = ["Webkit", "O", "Moz", "ms"];
    K.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = x(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, o, a = K.camelCase(e),
                    u = t.style;
                return e = K.cssProps[a] || (K.cssProps[a] = C(u, a)), o = K.cssHooks[e] || K.cssHooks[a], void 0 === n ? o && "get" in o && void 0 !== (r = o.get(t, !1, i)) ? r : u[e] : (s = typeof n, "string" === s && (r = Ue.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(K.css(t, e)), s = "number"), null != n && n === n && ("number" !== s || K.cssNumber[a] || (n += "px"), Y.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), o && "set" in o && void 0 === (n = o.set(t, n, i)) || (u[e] = n)), void 0)
            }
        },
        css: function(t, e, n, i) {
            var r, s, o, a = K.camelCase(e);
            return e = K.cssProps[a] || (K.cssProps[a] = C(t.style, a)), o = K.cssHooks[e] || K.cssHooks[a], o && "get" in o && (r = o.get(t, !0, n)), void 0 === r && (r = x(t, e, i)), "normal" === r && e in Ze && (r = Ze[e]), "" === n || n ? (s = parseFloat(r), n === !0 || K.isNumeric(s) ? s || 0 : r) : r
        }
    }), K.each(["height", "width"], function(t, e) {
        K.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? $e.test(K.css(t, "display")) && 0 === t.offsetWidth ? K.swap(t, Xe, function() {
                    return k(t, e, i)
                }) : k(t, e, i) : void 0
            },
            set: function(t, n, i) {
                var r = i && We(t);
                return S(t, n, i ? T(t, e, i, "border-box" === K.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }), K.cssHooks.marginRight = b(Y.reliableMarginRight, function(t, e) {
        return e ? K.swap(t, {
            display: "inline-block"
        }, x, [t, "marginRight"]) : void 0
    }), K.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        K.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + be[i] + e] = s[i] || s[i - 2] || s[0];
                return r
            }
        }, Be.test(t) || (K.cssHooks[t + e].set = S)
    }), K.fn.extend({
        css: function(t, e) {
            return me(this, function(t, e, n) {
                var i, r, s = {},
                    o = 0;
                if (K.isArray(e)) {
                    for (i = We(t), r = e.length; r > o; o++) s[e[o]] = K.css(t, e[o], !1, i);
                    return s
                }
                return void 0 !== n ? K.style(t, e, n) : K.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return E(this, !0)
        },
        hide: function() {
            return E(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Ce(this) ? K(this).show() : K(this).hide()
            })
        }
    }), K.Tween = P, P.prototype = {
        constructor: P,
        init: function(t, e, n, i, r, s) {
            this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (K.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = P.propHooks[this.prop];
            return t && t.get ? t.get(this) : P.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = P.propHooks[this.prop];
            return this.pos = e = this.options.duration ? K.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : P.propHooks._default.set(this), this
        }
    }, P.prototype.init.prototype = P.prototype, P.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = K.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                K.fx.step[t.prop] ? K.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[K.cssProps[t.prop]] || K.cssHooks[t.prop]) ? K.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, K.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, K.fx = P.prototype.init, K.fx.step = {};
    var Ye, Je, Qe = /^(?:toggle|show|hide)$/,
        Ke = new RegExp("^(?:([+-])=|)(" + xe + ")([a-z%]*)$", "i"),
        tn = /queueHooks$/,
        en = [L],
        nn = {
            "*": [function(t, e) {
                var n = this.createTween(t, e),
                    i = n.cur(),
                    r = Ke.exec(e),
                    s = r && r[3] || (K.cssNumber[t] ? "" : "px"),
                    o = (K.cssNumber[t] || "px" !== s && +i) && Ke.exec(K.css(n.elem, t)),
                    a = 1,
                    u = 20;
                if (o && o[3] !== s) {
                    s = s || o[3], r = r || [], o = +i || 1;
                    do a = a || ".5", o /= a, K.style(n.elem, t, o + s); while (a !== (a = n.cur() / i) && 1 !== a && --u)
                }
                return r && (o = n.start = +o || +i || 0, n.unit = s, n.end = r[1] ? o + (r[1] + 1) * r[2] : +r[2]), n
            }]
        };
    K.Animation = K.extend(I, {
            tweener: function(t, e) {
                K.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, i = 0, r = t.length; r > i; i++) n = t[i], nn[n] = nn[n] || [], nn[n].unshift(e)
            },
            prefilter: function(t, e) {
                e ? en.unshift(t) : en.push(t)
            }
        }), K.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? K.extend({}, t) : {
                complete: n || !n && e || K.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !K.isFunction(e) && e
            };
            return i.duration = K.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in K.fx.speeds ? K.fx.speeds[i.duration] : K.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                K.isFunction(i.old) && i.old.call(this), i.queue && K.dequeue(this, i.queue)
            }, i
        }, K.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(Ce).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var r = K.isEmptyObject(t),
                    s = K.speed(e, n, i),
                    o = function() {
                        var e = I(this, K.extend({}, t), s);
                        (r || ve.get(this, "finish")) && e.stop(!0)
                    };
                return o.finish = o, r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        s = K.timers,
                        o = ve.get(this);
                    if (r) o[r] && o[r].stop && i(o[r]);
                    else
                        for (r in o) o[r] && o[r].stop && tn.test(r) && i(o[r]);
                    for (r = s.length; r--;) s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(n), e = !1, s.splice(r, 1));
                    (e || !n) && K.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, n = ve.get(this),
                        i = n[t + "queue"],
                        r = n[t + "queueHooks"],
                        s = K.timers,
                        o = i ? i.length : 0;
                    for (n.finish = !0, K.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                    for (e = 0; o > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), K.each(["toggle", "show", "hide"], function(t, e) {
            var n = K.fn[e];
            K.fn[e] = function(t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(N(e, !0), t, i, r)
            }
        }), K.each({
            slideDown: N("show"),
            slideUp: N("hide"),
            slideToggle: N("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            K.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), K.timers = [], K.fx.tick = function() {
            var t, e = 0,
                n = K.timers;
            for (Ye = K.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
            n.length || K.fx.stop(), Ye = void 0
        }, K.fx.timer = function(t) {
            K.timers.push(t), t() ? K.fx.start() : K.timers.pop()
        }, K.fx.interval = 13, K.fx.start = function() {
            Je || (Je = setInterval(K.fx.tick, K.fx.interval))
        }, K.fx.stop = function() {
            clearInterval(Je), Je = null
        }, K.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, K.fn.delay = function(t, e) {
            return t = K.fx ? K.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                var i = setTimeout(e, t);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var t = J.createElement("input"),
                e = J.createElement("select"),
                n = e.appendChild(J.createElement("option"));
            t.type = "checkbox", Y.checkOn = "" !== t.value, Y.optSelected = n.selected, e.disabled = !0, Y.optDisabled = !n.disabled, t = J.createElement("input"), t.value = "t", t.type = "radio", Y.radioValue = "t" === t.value
        }();
    var rn, sn, on = K.expr.attrHandle;
    K.fn.extend({
        attr: function(t, e) {
            return me(this, K.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                K.removeAttr(this, t)
            })
        }
    }), K.extend({
        attr: function(t, e, n) {
            var i, r, s = t.nodeType;
            return t && 3 !== s && 8 !== s && 2 !== s ? typeof t.getAttribute === Te ? K.prop(t, e, n) : (1 === s && K.isXMLDoc(t) || (e = e.toLowerCase(), i = K.attrHooks[e] || (K.expr.match.bool.test(e) ? sn : rn)), void 0 === n ? i && "get" in i && null !== (r = i.get(t, e)) ? r : (r = K.find.attr(t, e), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : void K.removeAttr(t, e)) : void 0
        },
        removeAttr: function(t, e) {
            var n, i, r = 0,
                s = e && e.match(fe);
            if (s && 1 === t.nodeType)
                for (; n = s[r++];) i = K.propFix[n] || n, K.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!Y.radioValue && "radio" === e && K.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }
    }), sn = {
        set: function(t, e, n) {
            return e === !1 ? K.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, K.each(K.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = on[e] || K.find.attr;
        on[e] = function(t, e, i) {
            var r, s;
            return i || (s = on[e], on[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, on[e] = s), r
        }
    });
    var an = /^(?:input|select|textarea|button)$/i;
    K.fn.extend({
        prop: function(t, e) {
            return me(this, K.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[K.propFix[t] || t]
            })
        }
    }), K.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, n) {
            var i, r, s, o = t.nodeType;
            return t && 3 !== o && 8 !== o && 2 !== o ? (s = 1 !== o || !K.isXMLDoc(t), s && (e = K.propFix[e] || e, r = K.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    return t.hasAttribute("tabindex") || an.test(t.nodeName) || t.href ? t.tabIndex : -1
                }
            }
        }
    }), Y.optSelected || (K.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), K.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        K.propFix[this.toLowerCase()] = this
    });
    var un = /[\t\r\n\f]/g;
    K.fn.extend({
        addClass: function(t) {
            var e, n, i, r, s, o, a = "string" == typeof t && t,
                u = 0,
                h = this.length;
            if (K.isFunction(t)) return this.each(function(e) {
                K(this).addClass(t.call(this, e, this.className))
            });
            if (a)
                for (e = (t || "").match(fe) || []; h > u; u++)
                    if (n = this[u], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : " ")) {
                        for (s = 0; r = e[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        o = K.trim(i), n.className !== o && (n.className = o)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, s, o, a = 0 === arguments.length || "string" == typeof t && t,
                u = 0,
                h = this.length;
            if (K.isFunction(t)) return this.each(function(e) {
                K(this).removeClass(t.call(this, e, this.className))
            });
            if (a)
                for (e = (t || "").match(fe) || []; h > u; u++)
                    if (n = this[u], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : "")) {
                        for (s = 0; r = e[s++];)
                            for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                        o = t ? K.trim(i) : "", n.className !== o && (n.className = o)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(K.isFunction(t) ? function(n) {
                K(this).toggleClass(t.call(this, n, this.className, e), e)
            } : function() {
                if ("string" === n)
                    for (var e, i = 0, r = K(this), s = t.match(fe) || []; e = s[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else(n === Te || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ve.get(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(un, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    });
    var hn = /\r/g;
    K.fn.extend({
        val: function(t) {
            var e, n, i, r = this[0];
            return arguments.length ? (i = K.isFunction(t), this.each(function(n) {
                var r;
                1 === this.nodeType && (r = i ? t.call(this, n, K(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : K.isArray(r) && (r = K.map(r, function(t) {
                    return null == t ? "" : t + ""
                })), e = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            })) : r ? (e = K.valHooks[r.type] || K.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(hn, "") : null == n ? "" : n)) : void 0
        }
    }), K.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = K.find.attr(t, "value");
                    return null != e ? e : K.trim(K.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, s = "select-one" === t.type || 0 > r, o = s ? null : [], a = s ? r + 1 : i.length, u = 0 > r ? a : s ? r : 0; a > u; u++)
                        if (n = i[u], !(!n.selected && u !== r || (Y.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && K.nodeName(n.parentNode, "optgroup"))) {
                            if (e = K(n).val(), s) return e;
                            o.push(e)
                        }
                    return o
                },
                set: function(t, e) {
                    for (var n, i, r = t.options, s = K.makeArray(e), o = r.length; o--;) i = r[o], (i.selected = K.inArray(i.value, s) >= 0) && (n = !0);
                    return n || (t.selectedIndex = -1), s
                }
            }
        }
    }), K.each(["radio", "checkbox"], function() {
        K.valHooks[this] = {
            set: function(t, e) {
                return K.isArray(e) ? t.checked = K.inArray(K(t).val(), e) >= 0 : void 0
            }
        }, Y.checkOn || (K.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        K.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), K.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var cn = K.now(),
        ln = /\?/;
    K.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, K.parseXML = function(t) {
        var e, n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new DOMParser, e = n.parseFromString(t, "text/xml")
        } catch (i) {
            e = void 0
        }
        return (!e || e.getElementsByTagName("parsererror").length) && K.error("Invalid XML: " + t), e
    };
    var dn, fn, pn = /#.*$/,
        gn = /([?&])_=[^&]*/,
        mn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        vn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        _n = /^(?:GET|HEAD)$/,
        yn = /^\/\//,
        wn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        xn = {},
        bn = {},
        Cn = "*/".concat("*");
    try {
        fn = location.href
    } catch (Sn) {
        fn = J.createElement("a"), fn.href = "", fn = fn.href
    }
    dn = wn.exec(fn.toLowerCase()) || [], K.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: fn,
            type: "GET",
            isLocal: vn.test(dn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Cn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": K.parseJSON,
                "text xml": K.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? O(O(t, K.ajaxSettings), e) : O(K.ajaxSettings, t)
        },
        ajaxPrefilter: z(xn),
        ajaxTransport: z(bn),
        ajax: function(t, e) {
            function n(t, e, n, o) {
                var u, c, v, _, w, b = e;
                2 !== y && (y = 2, a && clearTimeout(a), i = void 0, s = o || "", x.readyState = t > 0 ? 4 : 0, u = t >= 200 && 300 > t || 304 === t, n && (_ = R(l, x, n)), _ = q(l, _, x, u), u ? (l.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (K.lastModified[r] = w), w = x.getResponseHeader("etag"), w && (K.etag[r] = w)), 204 === t || "HEAD" === l.type ? b = "nocontent" : 304 === t ? b = "notmodified" : (b = _.state, c = _.data, v = _.error, u = !v)) : (v = b, (t || !b) && (b = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || b) + "", u ? p.resolveWith(d, [c, b, x]) : p.rejectWith(d, [x, b, v]), x.statusCode(m), m = void 0, h && f.trigger(u ? "ajaxSuccess" : "ajaxError", [x, l, u ? c : v]), g.fireWith(d, [x, b]), h && (f.trigger("ajaxComplete", [x, l]), --K.active || K.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var i, r, s, o, a, u, h, c, l = K.ajaxSetup({}, e),
                d = l.context || l,
                f = l.context && (d.nodeType || d.jquery) ? K(d) : K.event,
                p = K.Deferred(),
                g = K.Callbacks("once memory"),
                m = l.statusCode || {},
                v = {},
                _ = {},
                y = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === y) {
                            if (!o)
                                for (o = {}; e = mn.exec(s);) o[e[1].toLowerCase()] = e[2];
                            e = o[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === y ? s : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return y || (t = _[n] = _[n] || t, v[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return y || (l.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > y)
                                for (e in t) m[e] = [m[e], t[e]];
                            else x.always(t[x.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || w;
                        return i && i.abort(e), n(0, e), this
                    }
                };
            if (p.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, l.url = ((t || l.url || fn) + "").replace(pn, "").replace(yn, dn[1] + "//"), l.type = e.method || e.type || l.method || l.type, l.dataTypes = K.trim(l.dataType || "*").toLowerCase().match(fe) || [""], null == l.crossDomain && (u = wn.exec(l.url.toLowerCase()), l.crossDomain = !(!u || u[1] === dn[1] && u[2] === dn[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (dn[3] || ("http:" === dn[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = K.param(l.data, l.traditional)), j(xn, l, e, x), 2 === y) return x;
            h = l.global, h && 0 === K.active++ && K.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !_n.test(l.type), r = l.url, l.hasContent || (l.data && (r = l.url += (ln.test(r) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = gn.test(r) ? r.replace(gn, "$1_=" + cn++) : r + (ln.test(r) ? "&" : "?") + "_=" + cn++)), l.ifModified && (K.lastModified[r] && x.setRequestHeader("If-Modified-Since", K.lastModified[r]), K.etag[r] && x.setRequestHeader("If-None-Match", K.etag[r])), (l.data && l.hasContent && l.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", l.contentType), x.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Cn + "; q=0.01" : "") : l.accepts["*"]);
            for (c in l.headers) x.setRequestHeader(c, l.headers[c]);
            if (l.beforeSend && (l.beforeSend.call(d, x, l) === !1 || 2 === y)) return x.abort();
            w = "abort";
            for (c in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[c](l[c]);
            if (i = j(bn, l, e, x)) {
                x.readyState = 1, h && f.trigger("ajaxSend", [x, l]), l.async && l.timeout > 0 && (a = setTimeout(function() {
                    x.abort("timeout")
                }, l.timeout));
                try {
                    y = 1, i.send(v, n)
                } catch (b) {
                    if (!(2 > y)) throw b;
                    n(-1, b)
                }
            } else n(-1, "No Transport");
            return x
        },
        getJSON: function(t, e, n) {
            return K.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return K.get(t, void 0, e, "script")
        }
    }), K.each(["get", "post"], function(t, e) {
        K[e] = function(t, n, i, r) {
            return K.isFunction(n) && (r = r || i, i = n, n = void 0), K.ajax({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            })
        }
    }), K.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        K.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), K._evalUrl = function(t) {
        return K.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, K.fn.extend({
        wrapAll: function(t) {
            var e;
            return K.isFunction(t) ? this.each(function(e) {
                K(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = K(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(t) {
            return this.each(K.isFunction(t) ? function(e) {
                K(this).wrapInner(t.call(this, e))
            } : function() {
                var e = K(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = K.isFunction(t);
            return this.each(function(n) {
                K(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
            }).end()
        }
    }), K.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0
    }, K.expr.filters.visible = function(t) {
        return !K.expr.filters.hidden(t)
    };
    var Tn = /%20/g,
        kn = /\[\]$/,
        En = /\r?\n/g,
        Pn = /^(?:submit|button|image|reset|file)$/i,
        An = /^(?:input|select|textarea|keygen)/i;
    K.param = function(t, e) {
        var n, i = [],
            r = function(t, e) {
                e = K.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(t) || t.jquery && !K.isPlainObject(t)) K.each(t, function() {
            r(this.name, this.value)
        });
        else
            for (n in t) F(n, t[n], e, r);
        return i.join("&").replace(Tn, "+")
    }, K.fn.extend({
        serialize: function() {
            return K.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = K.prop(this, "elements");
                return t ? K.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !K(this).is(":disabled") && An.test(this.nodeName) && !Pn.test(t) && (this.checked || !Se.test(t))
            }).map(function(t, e) {
                var n = K(this).val();
                return null == n ? null : K.isArray(n) ? K.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(En, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(En, "\r\n")
                }
            }).get()
        }
    }), K.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (t) {}
    };
    var Nn = 0,
        Mn = {},
        Ln = {
            0: 200,
            1223: 204
        },
        Dn = K.ajaxSettings.xhr();
    t.ActiveXObject && K(t).on("unload", function() {
        for (var t in Mn) Mn[t]()
    }), Y.cors = !!Dn && "withCredentials" in Dn, Y.ajax = Dn = !!Dn, K.ajaxTransport(function(t) {
        var e;
        return Y.cors || Dn && !t.crossDomain ? {
            send: function(n, i) {
                var r, s = t.xhr(),
                    o = ++Nn;
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (r in t.xhrFields) s[r] = t.xhrFields[r];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (r in n) s.setRequestHeader(r, n[r]);
                e = function(t) {
                    return function() {
                        e && (delete Mn[o], e = s.onload = s.onerror = null, "abort" === t ? s.abort() : "error" === t ? i(s.status, s.statusText) : i(Ln[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
                            text: s.responseText
                        } : void 0, s.getAllResponseHeaders()))
                    }
                }, s.onload = e(), s.onerror = e("error"), e = Mn[o] = e("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (a) {
                    if (e) throw a
                }
            },
            abort: function() {
                e && e()
            }
        } : void 0
    }), K.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return K.globalEval(t), t
            }
        }
    }), K.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), K.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function(i, r) {
                    e = K("<script>").prop({
                        async: !0,
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function(t) {
                        e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), J.head.appendChild(e[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var In = [],
        zn = /(=)\?(?=&|$)|\?\?/;
    K.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = In.pop() || K.expando + "_" + cn++;
            return this[t] = !0, t
        }
    }), K.ajaxPrefilter("json jsonp", function(e, n, i) {
        var r, s, o, a = e.jsonp !== !1 && (zn.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && zn.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = K.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(zn, "$1" + r) : e.jsonp !== !1 && (e.url += (ln.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || K.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", s = t[r], t[r] = function() {
            o = arguments
        }, i.always(function() {
            t[r] = s, e[r] && (e.jsonpCallback = n.jsonpCallback, In.push(r)), o && K.isFunction(s) && s(o[0]), o = s = void 0
        }), "script") : void 0
    }), K.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || J;
        var i = oe.exec(t),
            r = !n && [];
        return i ? [e.createElement(i[1])] : (i = K.buildFragment([t], e, r), r && r.length && K(r).remove(), K.merge([], i.childNodes))
    };
    var jn = K.fn.load;
    K.fn.load = function(t, e, n) {
        if ("string" != typeof t && jn) return jn.apply(this, arguments);
        var i, r, s, o = this,
            a = t.indexOf(" ");
        return a >= 0 && (i = K.trim(t.slice(a)), t = t.slice(0, a)), K.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), o.length > 0 && K.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: e
        }).done(function(t) {
            s = arguments, o.html(i ? K("<div>").append(K.parseHTML(t)).find(i) : t)
        }).complete(n && function(t, e) {
            o.each(n, s || [t.responseText, e, t])
        }), this
    }, K.expr.filters.animated = function(t) {
        return K.grep(K.timers, function(e) {
            return t === e.elem
        }).length
    };
    var On = t.document.documentElement;
    K.offset = {
        setOffset: function(t, e, n) {
            var i, r, s, o, a, u, h, c = K.css(t, "position"),
                l = K(t),
                d = {};
            "static" === c && (t.style.position = "relative"), a = l.offset(), s = K.css(t, "top"), u = K.css(t, "left"), h = ("absolute" === c || "fixed" === c) && (s + u).indexOf("auto") > -1, h ? (i = l.position(), o = i.top, r = i.left) : (o = parseFloat(s) || 0, r = parseFloat(u) || 0), K.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (d.top = e.top - a.top + o), null != e.left && (d.left = e.left - a.left + r), "using" in e ? e.using.call(t, d) : l.css(d)
        }
    }, K.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                K.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                s = i && i.ownerDocument;
            return s ? (e = s.documentElement, K.contains(e, i) ? (typeof i.getBoundingClientRect !== Te && (r = i.getBoundingClientRect()), n = B(s), {
                top: r.top + n.pageYOffset - e.clientTop,
                left: r.left + n.pageXOffset - e.clientLeft
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === K.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), K.nodeName(t[0], "html") || (i = t.offset()), i.top += K.css(t[0], "borderTopWidth", !0), i.left += K.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - K.css(n, "marginTop", !0),
                    left: e.left - i.left - K.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || On; t && !K.nodeName(t, "html") && "static" === K.css(t, "position");) t = t.offsetParent;
                return t || On
            })
        }
    }), K.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var i = "pageYOffset" === n;
        K.fn[e] = function(r) {
            return me(this, function(e, r, s) {
                var o = B(e);
                return void 0 === s ? o ? o[n] : e[r] : void(o ? o.scrollTo(i ? t.pageXOffset : s, i ? s : t.pageYOffset) : e[r] = s)
            }, e, r, arguments.length, null)
        }
    }), K.each(["top", "left"], function(t, e) {
        K.cssHooks[e] = b(Y.pixelPosition, function(t, n) {
            return n ? (n = x(t, e), He.test(n) ? K(t).position()[e] + "px" : n) : void 0
        })
    }), K.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        K.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            K.fn[i] = function(i, r) {
                var s = arguments.length && (n || "boolean" != typeof i),
                    o = n || (i === !0 || r === !0 ? "margin" : "border");
                return me(this, function(e, n, i) {
                    var r;
                    return K.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? K.css(e, n, o) : K.style(e, n, i, o)
                }, e, s ? i : void 0, s, null)
            }
        })
    }), K.fn.size = function() {
        return this.length
    }, K.fn.andSelf = K.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return K
    });
    var Rn = t.jQuery,
        qn = t.$;
    return K.noConflict = function(e) {
        return t.$ === K && (t.$ = qn), e && t.jQuery === K && (t.jQuery = Rn), K
    }, typeof e === Te && (t.jQuery = t.$ = K), K
}),
function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = t.length,
            n = re.type(t);
        return "function" === n || re.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function i(t, e, n) {
        if (re.isFunction(e)) return re.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType) return re.grep(t, function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (de.test(e)) return re.filter(e, t, n);
            e = re.filter(e, t)
        }
        return re.grep(t, function(t) {
            return re.inArray(t, e) >= 0 !== n
        })
    }

    function r(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function s(t) {
        var e = we[t] = {};
        return re.each(t.match(ye) || [], function(t, n) {
            e[n] = !0
        }), e
    }

    function o() {
        pe.addEventListener ? (pe.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (pe.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }

    function a() {
        (pe.addEventListener || "load" === event.type || "complete" === pe.readyState) && (o(), re.ready())
    }

    function u(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var i = "data-" + e.replace(Te, "-$1").toLowerCase();
            if (n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Se.test(n) ? re.parseJSON(n) : n
                } catch (r) {}
                re.data(t, e, n)
            } else n = void 0
        }
        return n
    }

    function h(t) {
        var e;
        for (e in t)
            if (("data" !== e || !re.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function c(t, e, n, i) {
        if (re.acceptData(t)) {
            var r, s, o = re.expando,
                a = t.nodeType,
                u = a ? re.cache : t,
                h = a ? t[o] : t[o] && o;
            if (h && u[h] && (i || u[h].data) || void 0 !== n || "string" != typeof e) return h || (h = a ? t[o] = Z.pop() || re.guid++ : o), u[h] || (u[h] = a ? {} : {
                toJSON: re.noop
            }), ("object" == typeof e || "function" == typeof e) && (i ? u[h] = re.extend(u[h], e) : u[h].data = re.extend(u[h].data, e)), s = u[h], i || (s.data || (s.data = {}), s = s.data), void 0 !== n && (s[re.camelCase(e)] = n), "string" == typeof e ? (r = s[e], null == r && (r = s[re.camelCase(e)])) : r = s, r
        }
    }

    function l(t, e, n) {
        if (re.acceptData(t)) {
            var i, r, s = t.nodeType,
                o = s ? re.cache : t,
                a = s ? t[re.expando] : re.expando;
            if (o[a]) {
                if (e && (i = n ? o[a] : o[a].data)) {
                    re.isArray(e) ? e = e.concat(re.map(e, re.camelCase)) : e in i ? e = [e] : (e = re.camelCase(e), e = e in i ? [e] : e.split(" ")), r = e.length;
                    for (; r--;) delete i[e[r]];
                    if (n ? !h(i) : !re.isEmptyObject(i)) return
                }(n || (delete o[a].data, h(o[a]))) && (s ? re.cleanData([t], !0) : ne.deleteExpando || o != o.window ? delete o[a] : o[a] = null)
            }
        }
    }

    function d() {
        return !0
    }

    function f() {
        return !1
    }

    function p() {
        try {
            return pe.activeElement
        } catch (t) {}
    }

    function g(t) {
        var e = je.split("|"),
            n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;) n.createElement(e.pop());
        return n
    }

    function m(t, e) {
        var n, i, r = 0,
            s = typeof t.getElementsByTagName !== Ce ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Ce ? t.querySelectorAll(e || "*") : void 0;
        if (!s)
            for (s = [], n = t.childNodes || t; null != (i = n[r]); r++) !e || re.nodeName(i, e) ? s.push(i) : re.merge(s, m(i, e));
        return void 0 === e || e && re.nodeName(t, e) ? re.merge([t], s) : s
    }

    function v(t) {
        Ne.test(t.type) && (t.defaultChecked = t.checked)
    }

    function _(t, e) {
        return re.nodeName(t, "table") && re.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function y(t) {
        return t.type = (null !== re.find.attr(t, "type")) + "/" + t.type, t
    }

    function w(t) {
        var e = Xe.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function x(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++) re._data(n, "globalEval", !e || re._data(e[i], "globalEval"))
    }

    function b(t, e) {
        if (1 === e.nodeType && re.hasData(t)) {
            var n, i, r, s = re._data(t),
                o = re._data(e, s),
                a = s.events;
            if (a) {
                delete o.handle, o.events = {};
                for (n in a)
                    for (i = 0, r = a[n].length; r > i; i++) re.event.add(e, n, a[n][i])
            }
            o.data && (o.data = re.extend({}, o.data))
        }
    }

    function C(t, e) {
        var n, i, r;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !ne.noCloneEvent && e[re.expando]) {
                r = re._data(e);
                for (i in r.events) re.removeEvent(e, i, r.handle);
                e.removeAttribute(re.expando)
            }
            "script" === n && e.text !== t.text ? (y(e).text = t.text, w(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ne.html5Clone && t.innerHTML && !re.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Ne.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }

    function S(e, n) {
        var i, r = re(n.createElement(e)).appendTo(n.body),
            s = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(r[0])) ? i.display : re.css(r[0], "display");
        return r.detach(), s
    }

    function T(t) {
        var e = pe,
            n = Ke[t];
        return n || (n = S(t, e), "none" !== n && n || (Qe = (Qe || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Qe[0].contentWindow || Qe[0].contentDocument).document, e.write(), e.close(), n = S(t, e), Qe.detach()), Ke[t] = n), n
    }

    function k(t, e) {
        return {
            get: function() {
                var n = t();
                if (null != n) return n ? (delete this.get, void 0) : (this.get = e).apply(this, arguments)
            }
        }
    }

    function E(t, e) {
        if (e in t) return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = fn.length; r--;)
            if (e = fn[r] + n, e in t) return e;
        return i
    }

    function P(t, e) {
        for (var n, i, r, s = [], o = 0, a = t.length; a > o; o++) i = t[o], i.style && (s[o] = re._data(i, "olddisplay"), n = i.style.display, e ? (s[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && Pe(i) && (s[o] = re._data(i, "olddisplay", T(i.nodeName)))) : (r = Pe(i), (n && "none" !== n || !r) && re._data(i, "olddisplay", r ? n : re.css(i, "display"))));
        for (o = 0; a > o; o++) i = t[o], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? s[o] || "" : "none"));
        return t
    }

    function A(t, e, n) {
        var i = hn.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function N(t, e, n, i, r) {
        for (var s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > s; s += 2) "margin" === n && (o += re.css(t, n + Ee[s], !0, r)), i ? ("content" === n && (o -= re.css(t, "padding" + Ee[s], !0, r)), "margin" !== n && (o -= re.css(t, "border" + Ee[s] + "Width", !0, r))) : (o += re.css(t, "padding" + Ee[s], !0, r), "padding" !== n && (o += re.css(t, "border" + Ee[s] + "Width", !0, r)));
        return o
    }

    function M(t, e, n) {
        var i = !0,
            r = "width" === e ? t.offsetWidth : t.offsetHeight,
            s = tn(t),
            o = ne.boxSizing && "border-box" === re.css(t, "boxSizing", !1, s);
        if (0 >= r || null == r) {
            if (r = en(t, e, s), (0 > r || null == r) && (r = t.style[e]), rn.test(r)) return r;
            i = o && (ne.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + N(t, e, n || (o ? "border" : "content"), i, s) + "px"
    }

    function L(t, e, n, i, r) {
        return new L.prototype.init(t, e, n, i, r)
    }

    function D() {
        return setTimeout(function() {
            pn = void 0
        }), pn = re.now()
    }

    function I(t, e) {
        var n, i = {
                height: t
            },
            r = 0;
        for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = Ee[r], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function z(t, e, n) {
        for (var i, r = (wn[e] || []).concat(wn["*"]), s = 0, o = r.length; o > s; s++)
            if (i = r[s].call(n, e, t)) return i
    }

    function j(t, e, n) {
        var i, r, s, o, a, u, h, c, l = this,
            d = {},
            f = t.style,
            p = t.nodeType && Pe(t),
            g = re._data(t, "fxshow");
        n.queue || (a = re._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
            a.unqueued || u()
        }), a.unqueued++, l.always(function() {
            l.always(function() {
                a.unqueued--, re.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], h = re.css(t, "display"), c = "none" === h ? re._data(t, "olddisplay") || T(t.nodeName) : h, "inline" === c && "none" === re.css(t, "float") && (ne.inlineBlockNeedsLayout && "inline" !== T(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ne.shrinkWrapBlocks() || l.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (r = e[i], mn.exec(r)) {
                if (delete e[i], s = s || "toggle" === r, r === (p ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[i]) continue;
                    p = !0
                }
                d[i] = g && g[i] || re.style(t, i)
            } else h = void 0;
        if (re.isEmptyObject(d)) "inline" === ("none" === h ? T(t.nodeName) : h) && (f.display = h);
        else {
            g ? "hidden" in g && (p = g.hidden) : g = re._data(t, "fxshow", {}), s && (g.hidden = !p), p ? re(t).show() : l.done(function() {
                re(t).hide()
            }), l.done(function() {
                var e;
                re._removeData(t, "fxshow");
                for (e in d) re.style(t, e, d[e])
            });
            for (i in d) o = z(p ? g[i] : 0, i, l), i in g || (g[i] = o.start, p && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function O(t, e) {
        var n, i, r, s, o;
        for (n in t)
            if (i = re.camelCase(n), r = e[i], s = t[n], re.isArray(s) && (r = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), o = re.cssHooks[i], o && "expand" in o) {
                s = o.expand(s), delete t[i];
                for (n in s) n in t || (t[n] = s[n], e[n] = r)
            } else e[i] = r
    }

    function R(t, e, n) {
        var i, r, s = 0,
            o = yn.length,
            a = re.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (r) return !1;
                for (var e = pn || D(), n = Math.max(0, h.startTime + h.duration - e), i = n / h.duration || 0, s = 1 - i, o = 0, u = h.tweens.length; u > o; o++) h.tweens[o].run(s);
                return a.notifyWith(t, [h, s, n]), 1 > s && u ? n : (a.resolveWith(t, [h]), !1)
            },
            h = a.promise({
                elem: t,
                props: re.extend({}, e),
                opts: re.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: pn || D(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = re.Tween(t, h.opts, e, n, h.opts.specialEasing[e] || h.opts.easing);
                    return h.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? h.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) h.tweens[n].run(1);
                    return e ? a.resolveWith(t, [h, e]) : a.rejectWith(t, [h, e]), this
                }
            }),
            c = h.props;
        for (O(c, h.opts.specialEasing); o > s; s++)
            if (i = yn[s].call(h, t, c, h.opts)) return i;
        return re.map(c, z, h), re.isFunction(h.opts.start) && h.opts.start.call(t, h), re.fx.timer(re.extend(u, {
            elem: t,
            anim: h,
            queue: h.opts.queue
        })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    }

    function q(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0,
                s = e.toLowerCase().match(ye) || [];
            if (re.isFunction(n))
                for (; i = s[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function F(t, e, n, i) {
        function r(a) {
            var u;
            return s[a] = !0, re.each(t[a] || [], function(t, a) {
                var h = a(e, n, i);
                return "string" != typeof h || o || s[h] ? o ? !(u = h) : void 0 : (e.dataTypes.unshift(h), r(h), !1)
            }), u
        }
        var s = {},
            o = t === $n;
        return r(e.dataTypes[0]) || !s["*"] && r("*")
    }

    function B(t, e) {
        var n, i, r = re.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && re.extend(!0, t, n), t
    }

    function H(t, e, n) {
        for (var i, r, s, o, a = t.contents, u = t.dataTypes;
            "*" === u[0];) u.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)
            for (o in a)
                if (a[o] && a[o].test(r)) {
                    u.unshift(o);
                    break
                }
        if (u[0] in n) s = u[0];
        else {
            for (o in n) {
                if (!u[0] || t.converters[o + " " + u[0]]) {
                    s = o;
                    break
                }
                i || (i = o)
            }
            s = s || i
        }
        return s ? (s !== u[0] && u.unshift(s), n[s]) : void 0
    }

    function W(t, e, n, i) {
        var r, s, o, a, u, h = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (o in t.converters) h[o.toLowerCase()] = t.converters[o];
        for (s = c.shift(); s;)
            if (t.responseFields[s] && (n[t.responseFields[s]] = e), !u && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = s, s = c.shift())
                if ("*" === s) s = u;
                else if ("*" !== u && u !== s) {
            if (o = h[u + " " + s] || h["* " + s], !o)
                for (r in h)
                    if (a = r.split(" "), a[1] === s && (o = h[u + " " + a[0]] || h["* " + a[0]])) {
                        o === !0 ? o = h[r] : h[r] !== !0 && (s = a[0], c.unshift(a[1]));
                        break
                    }
            if (o !== !0)
                if (o && t["throws"]) e = o(e);
                else try {
                    e = o(e)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: o ? l : "No conversion from " + u + " to " + s
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function $(t, e, n, i) {
        var r;
        if (re.isArray(e)) re.each(e, function(e, r) {
            n || Zn.test(t) ? i(t, r) : $(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
        });
        else if (n || "object" !== re.type(e)) i(t, e);
        else
            for (r in e) $(t + "[" + r + "]", e[r], n, i)
    }

    function V() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function U() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function X(t) {
        return re.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var Z = [],
        G = Z.slice,
        Y = Z.concat,
        J = Z.push,
        Q = Z.indexOf,
        K = {},
        te = K.toString,
        ee = K.hasOwnProperty,
        ne = {},
        ie = "1.11.2",
        re = function(t, e) {
            return new re.fn.init(t, e)
        },
        se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        oe = /^-ms-/,
        ae = /-([\da-z])/gi,
        ue = function(t, e) {
            return e.toUpperCase()
        };
    re.fn = re.prototype = {
        jquery: ie,
        constructor: re,
        selector: "",
        length: 0,
        toArray: function() {
            return G.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : G.call(this)
        },
        pushStack: function(t) {
            var e = re.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return re.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(re.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(G.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: J,
        sort: Z.sort,
        splice: Z.splice
    }, re.extend = re.fn.extend = function() {
        var t, e, n, i, r, s, o = arguments[0] || {},
            a = 1,
            u = arguments.length,
            h = !1;
        for ("boolean" == typeof o && (h = o, o = arguments[a] || {}, a++), "object" == typeof o || re.isFunction(o) || (o = {}), a === u && (o = this, a--); u > a; a++)
            if (null != (r = arguments[a]))
                for (i in r) t = o[i], n = r[i], o !== n && (h && n && (re.isPlainObject(n) || (e = re.isArray(n))) ? (e ? (e = !1, s = t && re.isArray(t) ? t : []) : s = t && re.isPlainObject(t) ? t : {}, o[i] = re.extend(h, s, n)) : void 0 !== n && (o[i] = n));
        return o
    }, re.extend({
        expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === re.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === re.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return !re.isArray(t) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== re.type(t) || t.nodeType || re.isWindow(t)) return !1;
            try {
                if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (ne.ownLast)
                for (e in t) return ee.call(t, e);
            for (e in t);
            return void 0 === e || ee.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? K[te.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && re.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(oe, "ms-").replace(ae, ue)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, i) {
            var r, s = 0,
                o = t.length,
                a = n(t);
            if (i) {
                if (a)
                    for (; o > s && (r = e.apply(t[s], i), r !== !1); s++);
                else
                    for (s in t)
                        if (r = e.apply(t[s], i), r === !1) break
            } else if (a)
                for (; o > s && (r = e.call(t[s], s, t[s]), r !== !1); s++);
            else
                for (s in t)
                    if (r = e.call(t[s], s, t[s]), r === !1) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(se, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? re.merge(i, "string" == typeof t ? [t] : t) : J.call(i, t)), i
        },
        inArray: function(t, e, n) {
            var i;
            if (e) {
                if (Q) return Q.call(e, t, n);
                for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in e && e[n] === t) return n
            }
            return -1
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, r = t.length; n > i;) t[r++] = e[i++];
            if (n !== n)
                for (; void 0 !== e[i];) t[r++] = e[i++];
            return t.length = r, t
        },
        grep: function(t, e, n) {
            for (var i, r = [], s = 0, o = t.length, a = !n; o > s; s++) i = !e(t[s], s), i !== a && r.push(t[s]);
            return r
        },
        map: function(t, e, i) {
            var r, s = 0,
                o = t.length,
                a = n(t),
                u = [];
            if (a)
                for (; o > s; s++) r = e(t[s], s, i), null != r && u.push(r);
            else
                for (s in t) r = e(t[s], s, i), null != r && u.push(r);
            return Y.apply([], u)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, r;
            return "string" == typeof e && (r = t[e], e = t, t = r), re.isFunction(t) ? (n = G.call(arguments, 2), i = function() {
                return t.apply(e || this, n.concat(G.call(arguments)))
            }, i.guid = t.guid = t.guid || re.guid++, i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ne
    }), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        K["[object " + e + "]"] = e.toLowerCase()
    });
    var he = function(t) {
        function e(t, e, n, i) {
            var r, s, o, a, u, h, l, f, p, g;
            if ((e ? e.ownerDocument || e : F) !== L && M(e), e = e || L, n = n || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return n;
            if (!i && I) {
                if (11 !== a && (r = _e.exec(t)))
                    if (o = r[1]) {
                        if (9 === a) {
                            if (s = e.getElementById(o), !s || !s.parentNode) return n;
                            if (s.id === o) return n.push(s), n
                        } else if (e.ownerDocument && (s = e.ownerDocument.getElementById(o)) && R(e, s) && s.id === o) return n.push(s), n
                    } else {
                        if (r[2]) return Q.apply(n, e.getElementsByTagName(t)), n;
                        if ((o = r[3]) && x.getElementsByClassName) return Q.apply(n, e.getElementsByClassName(o)), n
                    }
                if (x.qsa && (!z || !z.test(t))) {
                    if (f = l = q, p = e, g = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (h = T(t), (l = e.getAttribute("id")) ? f = l.replace(we, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", u = h.length; u--;) h[u] = f + d(h[u]);
                        p = ye.test(t) && c(e.parentNode) || e, g = h.join(",")
                    }
                    if (g) try {
                        return Q.apply(n, p.querySelectorAll(g)), n
                    } catch (m) {} finally {
                        l || e.removeAttribute("id")
                    }
                }
            }
            return E(t.replace(ue, "$1"), e, n, i)
        }

        function n() {
            function t(n, i) {
                return e.push(n + " ") > b.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function i(t) {
            return t[q] = !0, t
        }

        function r(t) {
            var e = L.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function s(t, e) {
            for (var n = t.split("|"), i = t.length; i--;) b.attrHandle[n[i]] = e
        }

        function o(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function u(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function h(t) {
            return i(function(e) {
                return e = +e, i(function(n, i) {
                    for (var r, s = t([], n.length, e), o = s.length; o--;) n[r = s[o]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function l() {}

        function d(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
            return i
        }

        function f(t, e, n) {
            var i = e.dir,
                r = n && "parentNode" === i,
                s = H++;
            return e.first ? function(e, n, s) {
                for (; e = e[i];)
                    if (1 === e.nodeType || r) return t(e, n, s)
            } : function(e, n, o) {
                var a, u, h = [B, s];
                if (o) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || r) && t(e, n, o)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || r) {
                            if (u = e[q] || (e[q] = {}), (a = u[i]) && a[0] === B && a[1] === s) return h[2] = a[2];
                            if (u[i] = h, h[2] = t(e, n, o)) return !0
                        }
            }
        }

        function p(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var r = t.length; r--;)
                    if (!t[r](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function g(t, n, i) {
            for (var r = 0, s = n.length; s > r; r++) e(t, n[r], i);
            return i
        }

        function m(t, e, n, i, r) {
            for (var s, o = [], a = 0, u = t.length, h = null != e; u > a; a++)(s = t[a]) && (!n || n(s, i, r)) && (o.push(s), h && e.push(a));
            return o
        }

        function v(t, e, n, r, s, o) {
            return r && !r[q] && (r = v(r)), s && !s[q] && (s = v(s, o)), i(function(i, o, a, u) {
                var h, c, l, d = [],
                    f = [],
                    p = o.length,
                    v = i || g(e || "*", a.nodeType ? [a] : a, []),
                    _ = !t || !i && e ? v : m(v, d, t, a, u),
                    y = n ? s || (i ? t : p || r) ? [] : o : _;
                if (n && n(_, y, a, u), r)
                    for (h = m(y, f), r(h, [], a, u), c = h.length; c--;)(l = h[c]) && (y[f[c]] = !(_[f[c]] = l));
                if (i) {
                    if (s || t) {
                        if (s) {
                            for (h = [], c = y.length; c--;)(l = y[c]) && h.push(_[c] = l);
                            s(null, y = [], h, u)
                        }
                        for (c = y.length; c--;)(l = y[c]) && (h = s ? te(i, l) : d[c]) > -1 && (i[h] = !(o[h] = l))
                    }
                } else y = m(y === o ? y.splice(p, y.length) : y), s ? s(null, o, y, u) : Q.apply(o, y)
            })
        }

        function _(t) {
            for (var e, n, i, r = t.length, s = b.relative[t[0].type], o = s || b.relative[" "], a = s ? 1 : 0, u = f(function(t) {
                    return t === e
                }, o, !0), h = f(function(t) {
                    return te(e, t) > -1
                }, o, !0), c = [function(t, n, i) {
                    var r = !s && (i || n !== P) || ((e = n).nodeType ? u(t, n, i) : h(t, n, i));
                    return e = null, r
                }]; r > a; a++)
                if (n = b.relative[t[a].type]) c = [f(p(c), n)];
                else {
                    if (n = b.filter[t[a].type].apply(null, t[a].matches), n[q]) {
                        for (i = ++a; r > i && !b.relative[t[i].type]; i++);
                        return v(a > 1 && p(c), a > 1 && d(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(ue, "$1"), n, i > a && _(t.slice(a, i)), r > i && _(t = t.slice(i)), r > i && d(t))
                    }
                    c.push(n)
                }
            return p(c)
        }

        function y(t, n) {
            var r = n.length > 0,
                s = t.length > 0,
                o = function(i, o, a, u, h) {
                    var c, l, d, f = 0,
                        p = "0",
                        g = i && [],
                        v = [],
                        _ = P,
                        y = i || s && b.find.TAG("*", h),
                        w = B += null == _ ? 1 : Math.random() || .1,
                        x = y.length;
                    for (h && (P = o !== L && o); p !== x && null != (c = y[p]); p++) {
                        if (s && c) {
                            for (l = 0; d = t[l++];)
                                if (d(c, o, a)) {
                                    u.push(c);
                                    break
                                }
                            h && (B = w)
                        }
                        r && ((c = !d && c) && f--, i && g.push(c))
                    }
                    if (f += p, r && p !== f) {
                        for (l = 0; d = n[l++];) d(g, v, o, a);
                        if (i) {
                            if (f > 0)
                                for (; p--;) g[p] || v[p] || (v[p] = Y.call(u));
                            v = m(v)
                        }
                        Q.apply(u, v), h && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(u)
                    }
                    return h && (B = w, P = _), g
                };
            return r ? i(o) : o
        }
        var w, x, b, C, S, T, k, E, P, A, N, M, L, D, I, z, j, O, R, q = "sizzle" + 1 * new Date,
            F = t.document,
            B = 0,
            H = 0,
            W = n(),
            $ = n(),
            V = n(),
            U = function(t, e) {
                return t === e && (N = !0), 0
            },
            X = 1 << 31,
            Z = {}.hasOwnProperty,
            G = [],
            Y = G.pop,
            J = G.push,
            Q = G.push,
            K = G.slice,
            te = function(t, e) {
                for (var n = 0, i = t.length; i > n; n++)
                    if (t[n] === e) return n;
                return -1
            },
            ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            re = ie.replace("w", "w#"),
            se = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
            oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)",
            ae = new RegExp(ne + "+", "g"),
            ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            he = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            le = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(oe),
            fe = new RegExp("^" + re + "$"),
            pe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + se),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ee + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            _e = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            we = /'|\\/g,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            be = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            Ce = function() {
                M()
            };
        try {
            Q.apply(G = K.call(F.childNodes), F.childNodes), G[F.childNodes.length].nodeType
        } catch (Se) {
            Q = {
                apply: G.length ? function(t, e) {
                    J.apply(t, K.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        x = e.support = {}, S = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, M = e.setDocument = function(t) {
            var e, n, i = t ? t.ownerDocument || t : F;
            return i !== L && 9 === i.nodeType && i.documentElement ? (L = i, D = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), I = !S(i), x.attributes = r(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), x.getElementsByTagName = r(function(t) {
                return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
            }), x.getElementsByClassName = ve.test(i.getElementsByClassName), x.getById = r(function(t) {
                return D.appendChild(t).id = q, !i.getElementsByName || !i.getElementsByName(q).length
            }), x.getById ? (b.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && I) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            }, b.filter.ID = function(t) {
                var e = t.replace(xe, be);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete b.find.ID, b.filter.ID = function(t) {
                var e = t.replace(xe, be);
                return function(t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), b.find.TAG = x.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var n, i = [],
                    r = 0,
                    s = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = s[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return s
            }, b.find.CLASS = x.getElementsByClassName && function(t, e) {
                return I ? e.getElementsByClassName(t) : void 0
            }, j = [], z = [], (x.qsa = ve.test(i.querySelectorAll)) && (r(function(t) {
                D.appendChild(t).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && z.push("[*^$]=" + ne + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || z.push("\\[" + ne + "*(?:value|" + ee + ")"), t.querySelectorAll("[id~=" + q + "-]").length || z.push("~="), t.querySelectorAll(":checked").length || z.push(":checked"), t.querySelectorAll("a#" + q + "+*").length || z.push(".#.+[+~]")
            }), r(function(t) {
                var e = i.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && z.push("name" + ne + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || z.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), z.push(",.*:")
            })), (x.matchesSelector = ve.test(O = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && r(function(t) {
                x.disconnectedMatch = O.call(t, "div"), O.call(t, "[s!='']:x"), j.push("!=", oe)
            }), z = z.length && new RegExp(z.join("|")), j = j.length && new RegExp(j.join("|")), e = ve.test(D.compareDocumentPosition), R = e || ve.test(D.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, U = e ? function(t, e) {
                if (t === e) return N = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === F && R(F, t) ? -1 : e === i || e.ownerDocument === F && R(F, e) ? 1 : A ? te(A, t) - te(A, e) : 0 : 4 & n ? -1 : 1)
            } : function(t, e) {
                if (t === e) return N = !0, 0;
                var n, r = 0,
                    s = t.parentNode,
                    a = e.parentNode,
                    u = [t],
                    h = [e];
                if (!s || !a) return t === i ? -1 : e === i ? 1 : s ? -1 : a ? 1 : A ? te(A, t) - te(A, e) : 0;
                if (s === a) return o(t, e);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (n = e; n = n.parentNode;) h.unshift(n);
                for (; u[r] === h[r];) r++;
                return r ? o(u[r], h[r]) : u[r] === F ? -1 : h[r] === F ? 1 : 0
            }, i) : L
        }, e.matches = function(t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== L && M(t), n = n.replace(le, "='$1']"), !(!x.matchesSelector || !I || j && j.test(n) || z && z.test(n))) try {
                var i = O.call(t, n);
                if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (r) {}
            return e(n, L, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== L && M(t), R(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== L && M(t);
            var n = b.attrHandle[e.toLowerCase()],
                i = n && Z.call(b.attrHandle, e.toLowerCase()) ? n(t, e, !I) : void 0;
            return void 0 !== i ? i : x.attributes || !I ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, n = [],
                i = 0,
                r = 0;
            if (N = !x.detectDuplicates, A = !x.sortStable && t.slice(0), t.sort(U), N) {
                for (; e = t[r++];) e === t[r] && (i = n.push(r));
                for (; i--;) t.splice(n[i], 1)
            }
            return A = null, t
        }, C = e.getText = function(t) {
            var e, n = "",
                i = 0,
                r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += C(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else
                for (; e = t[i++];) n += C(e);
            return n
        }, b = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(xe, be), t[3] = (t[3] || t[4] || t[5] || "").replace(xe, be), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return pe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && de.test(n) && (e = T(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(xe, be).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = W[t + " "];
                    return e || (e = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) && W(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(r) {
                        var s = e.attr(r, t);
                        return null == s ? "!=" === n : n ? (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n ? s === i || s.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, n, i, r) {
                    var s = "nth" !== t.slice(0, 3),
                        o = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === i && 0 === r ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, u) {
                        var h, c, l, d, f, p, g = s !== o ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            _ = !u && !a;
                        if (m) {
                            if (s) {
                                for (; g;) {
                                    for (l = e; l = l[g];)
                                        if (a ? l.nodeName.toLowerCase() === v : 1 === l.nodeType) return !1;
                                    p = g = "only" === t && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [o ? m.firstChild : m.lastChild], o && _) {
                                for (c = m[q] || (m[q] = {}), h = c[t] || [], f = h[0] === B && h[1], d = h[0] === B && h[2], l = f && m.childNodes[f]; l = ++f && l && l[g] || (d = f = 0) || p.pop();)
                                    if (1 === l.nodeType && ++d && l === e) {
                                        c[t] = [B, f, d];
                                        break
                                    }
                            } else if (_ && (h = (e[q] || (e[q] = {}))[t]) && h[0] === B) d = h[1];
                            else
                                for (;
                                    (l = ++f && l && l[g] || (d = f = 0) || p.pop()) && ((a ? l.nodeName.toLowerCase() !== v : 1 !== l.nodeType) || !++d || (_ && ((l[q] || (l[q] = {}))[t] = [B, d]), l !== e)););
                            return d -= r, d === i || d % i === 0 && d / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var r, s = b.pseudos[t] || b.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return s[q] ? s(n) : s.length > 1 ? (r = [t, t, "", n], b.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, r = s(t, n), o = r.length; o--;) i = te(t, r[o]), t[i] = !(e[i] = r[o])
                    }) : function(t) {
                        return s(t, 0, r)
                    }) : s
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = [],
                        n = [],
                        r = k(t.replace(ue, "$1"));
                    return r[q] ? i(function(t, e, n, i) {
                        for (var s, o = r(t, null, i, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s))
                    }) : function(t, i, s) {
                        return e[0] = t, r(e, null, s, n), e[0] = null, !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return t = t.replace(xe, be),
                        function(e) {
                            return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                        }
                }),
                lang: i(function(t) {
                    return fe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xe, be).toLowerCase(),
                        function(e) {
                            var n;
                            do
                                if (n = I ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === D
                },
                focus: function(t) {
                    return t === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !b.pseudos.empty(t)
                },
                header: function(t) {
                    return me.test(t.nodeName)
                },
                input: function(t) {
                    return ge.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: h(function() {
                    return [0]
                }),
                last: h(function(t, e) {
                    return [e - 1]
                }),
                eq: h(function(t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: h(function(t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t
                }),
                odd: h(function(t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }),
                lt: h(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: h(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }, b.pseudos.nth = b.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[w] = a(w);
        for (w in {
                submit: !0,
                reset: !0
            }) b.pseudos[w] = u(w);
        return l.prototype = b.filters = b.pseudos, b.setFilters = new l, T = e.tokenize = function(t, n) {
            var i, r, s, o, a, u, h, c = $[t + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = t, u = [], h = b.preFilter; a;) {
                (!i || (r = he.exec(a))) && (r && (a = a.slice(r[0].length) || a), u.push(s = [])), i = !1, (r = ce.exec(a)) && (i = r.shift(), s.push({
                    value: i,
                    type: r[0].replace(ue, " ")
                }), a = a.slice(i.length));
                for (o in b.filter) !(r = pe[o].exec(a)) || h[o] && !(r = h[o](r)) || (i = r.shift(), s.push({
                    value: i,
                    type: o,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? e.error(t) : $(t, u).slice(0)
        }, k = e.compile = function(t, e) {
            var n, i = [],
                r = [],
                s = V[t + " "];
            if (!s) {
                for (e || (e = T(t)), n = e.length; n--;) s = _(e[n]), s[q] ? i.push(s) : r.push(s);
                s = V(t, y(r, i)), s.selector = t
            }
            return s
        }, E = e.select = function(t, e, n, i) {
            var r, s, o, a, u, h = "function" == typeof t && t,
                l = !i && T(t = h.selector || t);
            if (n = n || [], 1 === l.length) {
                if (s = l[0] = l[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && x.getById && 9 === e.nodeType && I && b.relative[s[1].type]) {
                    if (e = (b.find.ID(o.matches[0].replace(xe, be), e) || [])[0], !e) return n;
                    h && (e = e.parentNode), t = t.slice(s.shift().value.length)
                }
                for (r = pe.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !b.relative[a = o.type]);)
                    if ((u = b.find[a]) && (i = u(o.matches[0].replace(xe, be), ye.test(s[0].type) && c(e.parentNode) || e))) {
                        if (s.splice(r, 1), t = i.length && d(s), !t) return Q.apply(n, i), n;
                        break
                    }
            }
            return (h || k(t, l))(i, e, !I, n, ye.test(t) && c(e.parentNode) || e), n
        }, x.sortStable = q.split("").sort(U).join("") === q, x.detectDuplicates = !!N, M(), x.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(L.createElement("div"))
        }), r(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), x.attributes && r(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || s("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), r(function(t) {
            return null == t.getAttribute("disabled")
        }) || s(ee, function(t, e, n) {
            var i;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    re.find = he, re.expr = he.selectors, re.expr[":"] = re.expr.pseudos, re.unique = he.uniqueSort, re.text = he.getText, re.isXMLDoc = he.isXML, re.contains = he.contains;
    var ce = re.expr.match.needsContext,
        le = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        de = /^.[^:#\[\.,]*$/;
    re.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? re.find.matchesSelector(i, t) ? [i] : [] : re.find.matches(t, re.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, re.fn.extend({
        find: function(t) {
            var e, n = [],
                i = this,
                r = i.length;
            if ("string" != typeof t) return this.pushStack(re(t).filter(function() {
                for (e = 0; r > e; e++)
                    if (re.contains(i[e], this)) return !0
            }));
            for (e = 0; r > e; e++) re.find(t, i[e], n);
            return n = this.pushStack(r > 1 ? re.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function(t) {
            return !!i(this, "string" == typeof t && ce.test(t) ? re(t) : t || [], !1).length
        }
    });
    var fe, pe = t.document,
        ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        me = re.fn.init = function(t, e) {
            var n, i;
            if (!t) return this;
            if ("string" == typeof t) {
                if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : ge.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || fe).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof re ? e[0] : e, re.merge(this, re.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : pe, !0)), le.test(n[1]) && re.isPlainObject(e))
                        for (n in e) re.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                if (i = pe.getElementById(n[2]), i && i.parentNode) {
                    if (i.id !== n[2]) return fe.find(t);
                    this.length = 1, this[0] = i
                }
                return this.context = pe, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : re.isFunction(t) ? "undefined" != typeof fe.ready ? fe.ready(t) : t(re) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), re.makeArray(t, this))
        };
    me.prototype = re.fn, fe = re(pe);
    var ve = /^(?:parents|prev(?:Until|All))/,
        _e = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    re.extend({
        dir: function(t, e, n) {
            for (var i = [], r = t[e]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !re(r).is(n));) 1 === r.nodeType && i.push(r), r = r[e];
            return i
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }), re.fn.extend({
        has: function(t) {
            var e, n = re(t, this),
                i = n.length;
            return this.filter(function() {
                for (e = 0; i > e; e++)
                    if (re.contains(this, n[e])) return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, r = this.length, s = [], o = ce.test(t) || "string" != typeof t ? re(t, e || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, t))) {
                        s.push(n);
                        break
                    }
            return this.pushStack(s.length > 1 ? re.unique(s) : s)
        },
        index: function(t) {
            return t ? "string" == typeof t ? re.inArray(this[0], re(t)) : re.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(re.unique(re.merge(this.get(), re(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), re.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return re.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return re.dir(t, "parentNode", n)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return re.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return re.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return re.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return re.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return re.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return re.sibling(t.firstChild)
        },
        contents: function(t) {
            return re.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : re.merge([], t.childNodes)
        }
    }, function(t, e) {
        re.fn[t] = function(n, i) {
            var r = re.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = re.filter(i, r)), this.length > 1 && (_e[t] || (r = re.unique(r)), ve.test(t) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var ye = /\S+/g,
        we = {};
    re.Callbacks = function(t) {
        t = "string" == typeof t ? we[t] || s(t) : re.extend({}, t);
        var e, n, i, r, o, a, u = [],
            h = !t.once && [],
            c = function(s) {
                for (n = t.memory && s, i = !0, o = a || 0, a = 0, r = u.length, e = !0; u && r > o; o++)
                    if (u[o].apply(s[0], s[1]) === !1 && t.stopOnFalse) {
                        n = !1;
                        break
                    }
                e = !1, u && (h ? h.length && c(h.shift()) : n ? u = [] : l.disable())
            },
            l = {
                add: function() {
                    if (u) {
                        var i = u.length;
                        ! function s(e) {
                            re.each(e, function(e, n) {
                                var i = re.type(n);
                                "function" === i ? t.unique && l.has(n) || u.push(n) : n && n.length && "string" !== i && s(n)
                            })
                        }(arguments), e ? r = u.length : n && (a = i, c(n))
                    }
                    return this
                },
                remove: function() {
                    return u && re.each(arguments, function(t, n) {
                        for (var i;
                            (i = re.inArray(n, u, i)) > -1;) u.splice(i, 1), e && (r >= i && r--, o >= i && o--)
                    }), this
                },
                has: function(t) {
                    return t ? re.inArray(t, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], r = 0, this
                },
                disable: function() {
                    return u = h = n = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return h = void 0, n || l.disable(), this
                },
                locked: function() {
                    return !h
                },
                fireWith: function(t, n) {
                    return !u || i && !h || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? h.push(n) : c(n)), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return l
    }, re.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", re.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", re.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", re.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return re.Deferred(function(n) {
                            re.each(e, function(e, s) {
                                var o = re.isFunction(t[e]) && t[e];
                                r[s[1]](function() {
                                    var t = o && o.apply(this, arguments);
                                    t && re.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === i ? n.promise() : this, o ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? re.extend(t, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, re.each(e, function(t, s) {
                var o = s[2],
                    a = s[3];
                i[s[1]] = o.add, a && o.add(function() {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), r[s[0]] = function() {
                    return r[s[0] + "With"](this === r ? i : this, arguments), this
                }, r[s[0] + "With"] = o.fireWith
            }), i.promise(r), t && t.call(r, r), r
        },
        when: function(t) {
            var e, n, i, r = 0,
                s = G.call(arguments),
                o = s.length,
                a = 1 !== o || t && re.isFunction(t.promise) ? o : 0,
                u = 1 === a ? t : re.Deferred(),
                h = function(t, n, i) {
                    return function(r) {
                        n[t] = this, i[t] = arguments.length > 1 ? G.call(arguments) : r, i === e ? u.notifyWith(n, i) : --a || u.resolveWith(n, i)
                    }
                };
            if (o > 1)
                for (e = new Array(o), n = new Array(o), i = new Array(o); o > r; r++) s[r] && re.isFunction(s[r].promise) ? s[r].promise().done(h(r, i, s)).fail(u.reject).progress(h(r, n, e)) : --a;
            return a || u.resolveWith(i, s), u.promise()
        }
    });
    var xe;
    re.fn.ready = function(t) {
        return re.ready.promise().done(t), this
    }, re.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? re.readyWait++ : re.ready(!0)
        },
        ready: function(t) {
            if (t === !0 ? !--re.readyWait : !re.isReady) {
                if (!pe.body) return setTimeout(re.ready);
                re.isReady = !0, t !== !0 && --re.readyWait > 0 || (xe.resolveWith(pe, [re]), re.fn.triggerHandler && (re(pe).triggerHandler("ready"), re(pe).off("ready")))
            }
        }
    }), re.ready.promise = function(e) {
        if (!xe)
            if (xe = re.Deferred(), "complete" === pe.readyState) setTimeout(re.ready);
            else if (pe.addEventListener) pe.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1);
        else {
            pe.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
            var n = !1;
            try {
                n = null == t.frameElement && pe.documentElement
            } catch (i) {}
            n && n.doScroll && ! function r() {
                if (!re.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (t) {
                        return setTimeout(r, 50)
                    }
                    o(), re.ready()
                }
            }()
        }
        return xe.promise(e)
    };
    var be, Ce = "undefined";
    for (be in re(ne)) break;
    ne.ownLast = "0" !== be, ne.inlineBlockNeedsLayout = !1, re(function() {
            var t, e, n, i;
            n = pe.getElementsByTagName("body")[0], n && n.style && (e = pe.createElement("div"), i = pe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== Ce && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var t = pe.createElement("div");
            if (null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    ne.deleteExpando = !1
                }
            }
            t = null
        }(), re.acceptData = function(t) {
            var e = re.noData[(t.nodeName + " ").toLowerCase()],
                n = +t.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
        };
    var Se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Te = /([A-Z])/g;
    re.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return t = t.nodeType ? re.cache[t[re.expando]] : t[re.expando], !!t && !h(t)
        },
        data: function(t, e, n) {
            return c(t, e, n)
        },
        removeData: function(t, e) {
            return l(t, e)
        },
        _data: function(t, e, n) {
            return c(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return l(t, e, !0)
        }
    }), re.fn.extend({
        data: function(t, e) {
            var n, i, r, s = this[0],
                o = s && s.attributes;
            if (void 0 === t) {
                if (this.length && (r = re.data(s), 1 === s.nodeType && !re._data(s, "parsedAttrs"))) {
                    for (n = o.length; n--;) o[n] && (i = o[n].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), u(s, i, r[i])));
                    re._data(s, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                re.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                re.data(this, t, e)
            }) : s ? u(s, t, re.data(s, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                re.removeData(this, t)
            })
        }
    }), re.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = re._data(t, e), n && (!i || re.isArray(n) ? i = re._data(t, e, re.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = re.queue(t, e),
                i = n.length,
                r = n.shift(),
                s = re._queueHooks(t, e),
                o = function() {
                    re.dequeue(t, e)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete s.stop, r.call(t, o, s)), !i && s && s.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return re._data(t, n) || re._data(t, n, {
                empty: re.Callbacks("once memory").add(function() {
                    re._removeData(t, e + "queue"), re._removeData(t, n)
                })
            })
        }
    }), re.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? re.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = re.queue(this, t, e);
                re._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && re.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                re.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
                r = re.Deferred(),
                s = this,
                o = this.length,
                a = function() {
                    --i || r.resolveWith(s, [s])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;) n = re._data(s[o], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var ke = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ee = ["Top", "Right", "Bottom", "Left"],
        Pe = function(t, e) {
            return t = e || t, "none" === re.css(t, "display") || !re.contains(t.ownerDocument, t)
        },
        Ae = re.access = function(t, e, n, i, r, s, o) {
            var a = 0,
                u = t.length,
                h = null == n;
            if ("object" === re.type(n)) {
                r = !0;
                for (a in n) re.access(t, e, a, n[a], !0, s, o)
            } else if (void 0 !== i && (r = !0, re.isFunction(i) || (o = !0), h && (o ? (e.call(t, i), e = null) : (h = e, e = function(t, e, n) {
                    return h.call(re(t), n)
                })), e))
                for (; u > a; a++) e(t[a], n, o ? i : i.call(t[a], a, e(t[a], n)));
            return r ? t : h ? e.call(t) : u ? e(t[0], n) : s
        },
        Ne = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = pe.createElement("input"),
            e = pe.createElement("div"),
            n = pe.createDocumentFragment();
        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === e.firstChild.nodeType, ne.tbody = !e.getElementsByTagName("tbody").length, ne.htmlSerialize = !!e.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== pe.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), ne.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
                ne.noCloneEvent = !1
            }), e.cloneNode(!0).click()), null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete e.test
            } catch (i) {
                ne.deleteExpando = !1
            }
        }
    }(),
    function() {
        var e, n, i = pe.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + e, (ne[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), ne[e + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    }();
    var Me = /^(?:input|select|textarea)$/i,
        Le = /^key/,
        De = /^(?:mouse|pointer|contextmenu)|click/,
        Ie = /^(?:focusinfocus|focusoutblur)$/,
        ze = /^([^.]*)(?:\.(.+)|)$/;
    re.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var s, o, a, u, h, c, l, d, f, p, g, m = re._data(t);
            if (m) {
                for (n.handler && (u = n, n = u.handler, r = u.selector), n.guid || (n.guid = re.guid++), (o = m.events) || (o = m.events = {}), (c = m.handle) || (c = m.handle = function(t) {
                        return typeof re === Ce || t && re.event.triggered === t.type ? void 0 : re.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = t), e = (e || "").match(ye) || [""], a = e.length; a--;) s = ze.exec(e[a]) || [], f = g = s[1], p = (s[2] || "").split(".").sort(), f && (h = re.event.special[f] || {}, f = (r ? h.delegateType : h.bindType) || f, h = re.event.special[f] || {}, l = re.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && re.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, u), (d = o[f]) || (d = o[f] = [], d.delegateCount = 0, h.setup && h.setup.call(t, i, p, c) !== !1 || (t.addEventListener ? t.addEventListener(f, c, !1) : t.attachEvent && t.attachEvent("on" + f, c))), h.add && (h.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, l) : d.push(l), re.event.global[f] = !0);
                t = null
            }
        },
        remove: function(t, e, n, i, r) {
            var s, o, a, u, h, c, l, d, f, p, g, m = re.hasData(t) && re._data(t);
            if (m && (c = m.events)) {
                for (e = (e || "").match(ye) || [""], h = e.length; h--;)
                    if (a = ze.exec(e[h]) || [], f = g = a[1], p = (a[2] || "").split(".").sort(), f) {
                        for (l = re.event.special[f] || {}, f = (i ? l.delegateType : l.bindType) || f, d = c[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = s = d.length; s--;) o = d[s], !r && g !== o.origType || n && n.guid !== o.guid || a && !a.test(o.namespace) || i && i !== o.selector && ("**" !== i || !o.selector) || (d.splice(s, 1), o.selector && d.delegateCount--, l.remove && l.remove.call(t, o));
                        u && !d.length && (l.teardown && l.teardown.call(t, p, m.handle) !== !1 || re.removeEvent(t, f, m.handle), delete c[f])
                    } else
                        for (f in c) re.event.remove(t, f + e[h], n, i, !0);
                re.isEmptyObject(c) && (delete m.handle, re._removeData(t, "events"))
            }
        },
        trigger: function(e, n, i, r) {
            var s, o, a, u, h, c, l, d = [i || pe],
                f = ee.call(e, "type") ? e.type : e,
                p = ee.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = c = i = i || pe, 3 !== i.nodeType && 8 !== i.nodeType && !Ie.test(f + re.event.triggered) && (f.indexOf(".") >= 0 && (p = f.split("."), f = p.shift(), p.sort()), o = f.indexOf(":") < 0 && "on" + f, e = e[re.expando] ? e : new re.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : re.makeArray(n, [e]), h = re.event.special[f] || {}, r || !h.trigger || h.trigger.apply(i, n) !== !1)) {
                if (!r && !h.noBubble && !re.isWindow(i)) {
                    for (u = h.delegateType || f, Ie.test(u + f) || (a = a.parentNode); a; a = a.parentNode) d.push(a), c = a;
                    c === (i.ownerDocument || pe) && d.push(c.defaultView || c.parentWindow || t)
                }
                for (l = 0;
                    (a = d[l++]) && !e.isPropagationStopped();) e.type = l > 1 ? u : h.bindType || f, s = (re._data(a, "events") || {})[e.type] && re._data(a, "handle"), s && s.apply(a, n), s = o && a[o], s && s.apply && re.acceptData(a) && (e.result = s.apply(a, n), e.result === !1 && e.preventDefault());
                if (e.type = f, !r && !e.isDefaultPrevented() && (!h._default || h._default.apply(d.pop(), n) === !1) && re.acceptData(i) && o && i[f] && !re.isWindow(i)) {
                    c = i[o], c && (i[o] = null), re.event.triggered = f;
                    try {
                        i[f]()
                    } catch (g) {}
                    re.event.triggered = void 0, c && (i[o] = c)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = re.event.fix(t);
            var e, n, i, r, s, o = [],
                a = G.call(arguments),
                u = (re._data(this, "events") || {})[t.type] || [],
                h = re.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !h.preDispatch || h.preDispatch.call(this, t) !== !1) {
                for (o = re.event.handlers.call(this, t, u), e = 0;
                    (r = o[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, s = 0;
                        (i = r.handlers[s++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((re.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, s, o = [],
                a = e.delegateCount,
                u = t.target;
            if (a && u.nodeType && (!t.button || "click" !== t.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== t.type)) {
                        for (r = [], s = 0; a > s; s++) i = e[s], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? re(n, this).index(u) >= 0 : re.find(n, this, null, [u]).length), r[n] && r.push(i);
                        r.length && o.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return a < e.length && o.push({
                elem: this,
                handlers: e.slice(a)
            }), o
        },
        fix: function(t) {
            if (t[re.expando]) return t;
            var e, n, i, r = t.type,
                s = t,
                o = this.fixHooks[r];
            for (o || (this.fixHooks[r] = o = De.test(r) ? this.mouseHooks : Le.test(r) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, t = new re.Event(s), e = i.length; e--;) n = i[e], t[n] = s[n];
            return t.target || (t.target = s.srcElement || pe), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, o.filter ? o.filter(t, s) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, r, s = e.button,
                    o = e.fromElement;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || pe, r = i.documentElement, n = i.body, t.pageX = e.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && o && (t.relatedTarget = o === t.target ? e.toElement : o), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== p() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return re.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, i) {
            var r = re.extend(new re.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? re.event.trigger(r, null, e) : re.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, re.removeEvent = pe.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    } : function(t, e, n) {
        var i = "on" + e;
        t.detachEvent && (typeof t[i] === Ce && (t[i] = null), t.detachEvent(i, n))
    }, re.Event = function(t, e) {
        return this instanceof re.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? d : f) : this.type = t, e && re.extend(this, e), this.timeStamp = t && t.timeStamp || re.now(), this[re.expando] = !0, void 0) : new re.Event(t, e)
    }, re.Event.prototype = {
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = d, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = d, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = d, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, re.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        re.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this,
                    r = t.relatedTarget,
                    s = t.handleObj;
                return (!r || r !== i && !re.contains(i, r)) && (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), ne.submitBubbles || (re.event.special.submit = {
        setup: function() {
            return re.nodeName(this, "form") ? !1 : (re.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target,
                    n = re.nodeName(e, "input") || re.nodeName(e, "button") ? e.form : void 0;
                n && !re._data(n, "submitBubbles") && (re.event.add(n, "submit._submit", function(t) {
                    t._submit_bubble = !0
                }), re._data(n, "submitBubbles", !0))
            }), void 0)
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && re.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return re.nodeName(this, "form") ? !1 : (re.event.remove(this, "._submit"), void 0)
        }
    }), ne.changeBubbles || (re.event.special.change = {
        setup: function() {
            return Me.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), re.event.add(this, "click._change", function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), re.event.simulate("change", this, t, !0)
            })), !1) : (re.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Me.test(e.nodeName) && !re._data(e, "changeBubbles") && (re.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || re.event.simulate("change", this.parentNode, t, !0)
                }), re._data(e, "changeBubbles", !0))
            }), void 0)
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return re.event.remove(this, "._change"), !Me.test(this.nodeName)
        }
    }), ne.focusinBubbles || re.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            re.event.simulate(e, t.target, re.event.fix(t), !0)
        };
        re.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = re._data(i, e);
                r || i.addEventListener(t, n, !0), re._data(i, e, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = re._data(i, e) - 1;
                r ? re._data(i, e, r) : (i.removeEventListener(t, n, !0), re._removeData(i, e))
            }
        }
    }), re.fn.extend({
        on: function(t, e, n, i, r) {
            var s, o;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (s in t) this.on(s, e, n, t[s], r);
                return this
            }
            if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = f;
            else if (!i) return this;
            return 1 === r && (o = i, i = function(t) {
                return re().off(t), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = re.guid++)), this.each(function() {
                re.event.add(this, t, i, n, e)
            })
        },
        one: function(t, e, n, i) {
            return this.on(t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, re(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = f), this.each(function() {
                re.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                re.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? re.event.trigger(t, e, n, !0) : void 0
        }
    });
    var je = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Oe = / jQuery\d+="(?:null|\d+)"/g,
        Re = new RegExp("<(?:" + je + ")[\\s/>]", "i"),
        qe = /^\s+/,
        Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Be = /<([\w:]+)/,
        He = /<tbody/i,
        We = /<|&#?\w+;/,
        $e = /<(?:script|style|link)/i,
        Ve = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ue = /^$|\/(?:java|ecma)script/i,
        Xe = /^true\/(.*)/,
        Ze = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ye = g(pe),
        Je = Ye.appendChild(pe.createElement("div"));
    Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td, re.extend({
        clone: function(t, e, n) {
            var i, r, s, o, a, u = re.contains(t.ownerDocument, t);
            if (ne.html5Clone || re.isXMLDoc(t) || !Re.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (Je.innerHTML = t.outerHTML, Je.removeChild(s = Je.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || re.isXMLDoc(t)))
                for (i = m(s), a = m(t), o = 0; null != (r = a[o]); ++o) i[o] && C(r, i[o]);
            if (e)
                if (n)
                    for (a = a || m(t), i = i || m(s), o = 0; null != (r = a[o]); o++) b(r, i[o]);
                else b(t, s);
            return i = m(s, "script"), i.length > 0 && x(i, !u && m(t, "script")), i = a = r = null, s
        },
        buildFragment: function(t, e, n, i) {
            for (var r, s, o, a, u, h, c, l = t.length, d = g(e), f = [], p = 0; l > p; p++)
                if (s = t[p], s || 0 === s)
                    if ("object" === re.type(s)) re.merge(f, s.nodeType ? [s] : s);
                    else if (We.test(s)) {
                for (a = a || d.appendChild(e.createElement("div")), u = (Be.exec(s) || ["", ""])[1].toLowerCase(), c = Ge[u] || Ge._default, a.innerHTML = c[1] + s.replace(Fe, "<$1></$2>") + c[2], r = c[0]; r--;) a = a.lastChild;
                if (!ne.leadingWhitespace && qe.test(s) && f.push(e.createTextNode(qe.exec(s)[0])), !ne.tbody)
                    for (s = "table" !== u || He.test(s) ? "<table>" !== c[1] || He.test(s) ? 0 : a : a.firstChild, r = s && s.childNodes.length; r--;) re.nodeName(h = s.childNodes[r], "tbody") && !h.childNodes.length && s.removeChild(h);
                for (re.merge(f, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = d.lastChild
            } else f.push(e.createTextNode(s));
            for (a && d.removeChild(a), ne.appendChecked || re.grep(m(f, "input"), v), p = 0; s = f[p++];)
                if ((!i || -1 === re.inArray(s, i)) && (o = re.contains(s.ownerDocument, s), a = m(d.appendChild(s), "script"), o && x(a), n))
                    for (r = 0; s = a[r++];) Ue.test(s.type || "") && n.push(s);
            return a = null, d
        },
        cleanData: function(t, e) {
            for (var n, i, r, s, o = 0, a = re.expando, u = re.cache, h = ne.deleteExpando, c = re.event.special; null != (n = t[o]); o++)
                if ((e || re.acceptData(n)) && (r = n[a], s = r && u[r])) {
                    if (s.events)
                        for (i in s.events) c[i] ? re.event.remove(n, i) : re.removeEvent(n, i, s.handle);
                    u[r] && (delete u[r], h ? delete n[a] : typeof n.removeAttribute !== Ce ? n.removeAttribute(a) : n[a] = null, Z.push(r))
                }
        }
    }), re.fn.extend({
        text: function(t) {
            return Ae(this, function(t) {
                return void 0 === t ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pe).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = _(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = _(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, i = t ? re.filter(t, this) : this, r = 0; null != (n = i[r]); r++) e || 1 !== n.nodeType || re.cleanData(m(n)), n.parentNode && (e && re.contains(n.ownerDocument, n) && x(m(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && re.cleanData(m(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && re.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return re.clone(this, t, e)
            })
        },
        html: function(t) {
            return Ae(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Oe, "") : void 0;
                if (!("string" != typeof t || $e.test(t) || !ne.htmlSerialize && Re.test(t) || !ne.leadingWhitespace && qe.test(t) || Ge[(Be.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Fe, "<$1></$2>");
                    try {
                        for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (re.cleanData(m(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, re.cleanData(m(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = Y.apply([], t);
            var n, i, r, s, o, a, u = 0,
                h = this.length,
                c = this,
                l = h - 1,
                d = t[0],
                f = re.isFunction(d);
            if (f || h > 1 && "string" == typeof d && !ne.checkClone && Ve.test(d)) return this.each(function(n) {
                var i = c.eq(n);
                f && (t[0] = d.call(this, n, i.html())), i.domManip(t, e)
            });
            if (h && (a = re.buildFragment(t, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                for (s = re.map(m(a, "script"), y), r = s.length; h > u; u++) i = a, u !== l && (i = re.clone(i, !0, !0), r && re.merge(s, m(i, "script"))), e.call(this[u], i, u);
                if (r)
                    for (o = s[s.length - 1].ownerDocument, re.map(s, w), u = 0; r > u; u++) i = s[u], Ue.test(i.type || "") && !re._data(i, "globalEval") && re.contains(o, i) && (i.src ? re._evalUrl && re._evalUrl(i.src) : re.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ze, "")));
                a = n = null
            }
            return this
        }
    }), re.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        re.fn[t] = function(t) {
            for (var n, i = 0, r = [], s = re(t), o = s.length - 1; o >= i; i++) n = i === o ? this : this.clone(!0), re(s[i])[e](n), J.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Qe, Ke = {};
    ! function() {
        var t;
        ne.shrinkWrapBlocks = function() {
            if (null != t) return t;
            t = !1;
            var e, n, i;
            return n = pe.getElementsByTagName("body")[0], n && n.style ? (e = pe.createElement("div"), i = pe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== Ce && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(pe.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
        }
    }();
    var tn, en, nn = /^margin/,
        rn = new RegExp("^(" + ke + ")(?!px)[a-z%]+$", "i"),
        sn = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (tn = function(e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
        }, en = function(t, e, n) {
            var i, r, s, o, a = t.style;
            return n = n || tn(t), o = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== o || re.contains(t.ownerDocument, t) || (o = re.style(t, e)), rn.test(o) && nn.test(e) && (i = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = r, a.maxWidth = s)), void 0 === o ? o : o + ""
        }) : pe.documentElement.currentStyle && (tn = function(t) {
            return t.currentStyle
        }, en = function(t, e, n) {
            var i, r, s, o, a = t.style;
            return n = n || tn(t), o = n ? n[e] : void 0, null == o && a && a[e] && (o = a[e]), rn.test(o) && !sn.test(e) && (i = a.left, r = t.runtimeStyle, s = r && r.left, s && (r.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : o, o = a.pixelLeft + "px", a.left = i, s && (r.left = s)), void 0 === o ? o : o + "" || "auto"
        }),
        function() {
            function e() {
                var e, n, i, r;
                n = pe.getElementsByTagName("body")[0], n && n.style && (e = pe.createElement("div"), i = pe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s = o = !1, u = !0, t.getComputedStyle && (s = "1%" !== (t.getComputedStyle(e, null) || {}).top, o = "4px" === (t.getComputedStyle(e, null) || {
                    width: "4px"
                }).width, r = e.appendChild(pe.createElement("div")), r.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", e.style.width = "1px", u = !parseFloat((t.getComputedStyle(r, null) || {}).marginRight), e.removeChild(r)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = e.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === r[0].offsetHeight, a && (r[0].style.display = "", r[1].style.display = "none", a = 0 === r[0].offsetHeight), n.removeChild(i))
            }
            var n, i, r, s, o, a, u;
            n = pe.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = n.getElementsByTagName("a")[0], i = r && r.style, i && (i.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === i.opacity, ne.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, re.extend(ne, {
                reliableHiddenOffsets: function() {
                    return null == a && e(), a
                },
                boxSizingReliable: function() {
                    return null == o && e(), o
                },
                pixelPosition: function() {
                    return null == s && e(), s
                },
                reliableMarginRight: function() {
                    return null == u && e(), u
                }
            }))
        }(), re.swap = function(t, e, n, i) {
            var r, s, o = {};
            for (s in e) o[s] = t.style[s], t.style[s] = e[s];
            r = n.apply(t, i || []);
            for (s in e) t.style[s] = o[s];
            return r
        };
    var on = /alpha\([^)]*\)/i,
        an = /opacity\s*=\s*([^)]*)/,
        un = /^(none|table(?!-c[ea]).+)/,
        hn = new RegExp("^(" + ke + ")(.*)$", "i"),
        cn = new RegExp("^([+-])=(" + ke + ")", "i"),
        ln = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        dn = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        fn = ["Webkit", "O", "Moz", "ms"];
    re.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = en(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ne.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, o, a = re.camelCase(e),
                    u = t.style;
                if (e = re.cssProps[a] || (re.cssProps[a] = E(u, a)), o = re.cssHooks[e] || re.cssHooks[a], void 0 === n) return o && "get" in o && void 0 !== (r = o.get(t, !1, i)) ? r : u[e];
                if (s = typeof n, "string" === s && (r = cn.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(re.css(t, e)), s = "number"), null != n && n === n && ("number" !== s || re.cssNumber[a] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), !(o && "set" in o && void 0 === (n = o.set(t, n, i))))) try {
                    u[e] = n
                } catch (h) {}
            }
        },
        css: function(t, e, n, i) {
            var r, s, o, a = re.camelCase(e);
            return e = re.cssProps[a] || (re.cssProps[a] = E(t.style, a)), o = re.cssHooks[e] || re.cssHooks[a], o && "get" in o && (s = o.get(t, !0, n)), void 0 === s && (s = en(t, e, i)), "normal" === s && e in dn && (s = dn[e]), "" === n || n ? (r = parseFloat(s), n === !0 || re.isNumeric(r) ? r || 0 : s) : s
        }
    }), re.each(["height", "width"], function(t, e) {
        re.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? un.test(re.css(t, "display")) && 0 === t.offsetWidth ? re.swap(t, ln, function() {
                    return M(t, e, i)
                }) : M(t, e, i) : void 0
            },
            set: function(t, n, i) {
                var r = i && tn(t);
                return A(t, n, i ? N(t, e, i, ne.boxSizing && "border-box" === re.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }), ne.opacity || (re.cssHooks.opacity = {
        get: function(t, e) {
            return an.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var n = t.style,
                i = t.currentStyle,
                r = re.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                s = i && i.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === re.trim(s.replace(on, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = on.test(s) ? s.replace(on, r) : s + " " + r)
        }
    }), re.cssHooks.marginRight = k(ne.reliableMarginRight, function(t, e) {
        return e ? re.swap(t, {
            display: "inline-block"
        }, en, [t, "marginRight"]) : void 0
    }), re.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        re.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + Ee[i] + e] = s[i] || s[i - 2] || s[0];
                return r
            }
        }, nn.test(t) || (re.cssHooks[t + e].set = A)
    }), re.fn.extend({
        css: function(t, e) {
            return Ae(this, function(t, e, n) {
                var i, r, s = {},
                    o = 0;
                if (re.isArray(e)) {
                    for (i = tn(t), r = e.length; r > o; o++) s[e[o]] = re.css(t, e[o], !1, i);
                    return s
                }
                return void 0 !== n ? re.style(t, e, n) : re.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return P(this, !0)
        },
        hide: function() {
            return P(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Pe(this) ? re(this).show() : re(this).hide()
            })
        }
    }), re.Tween = L, L.prototype = {
        constructor: L,
        init: function(t, e, n, i, r, s) {
            this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (re.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = L.propHooks[this.prop];
            return t && t.get ? t.get(this) : L.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = L.propHooks[this.prop];
            return this.pos = e = this.options.duration ? re.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
        }
    }, L.prototype.init.prototype = L.prototype, L.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = re.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                re.fx.step[t.prop] ? re.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[re.cssProps[t.prop]] || re.cssHooks[t.prop]) ? re.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, re.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, re.fx = L.prototype.init, re.fx.step = {};
    var pn, gn, mn = /^(?:toggle|show|hide)$/,
        vn = new RegExp("^(?:([+-])=|)(" + ke + ")([a-z%]*)$", "i"),
        _n = /queueHooks$/,
        yn = [j],
        wn = {
            "*": [function(t, e) {
                var n = this.createTween(t, e),
                    i = n.cur(),
                    r = vn.exec(e),
                    s = r && r[3] || (re.cssNumber[t] ? "" : "px"),
                    o = (re.cssNumber[t] || "px" !== s && +i) && vn.exec(re.css(n.elem, t)),
                    a = 1,
                    u = 20;
                if (o && o[3] !== s) {
                    s = s || o[3], r = r || [], o = +i || 1;
                    do a = a || ".5", o /= a, re.style(n.elem, t, o + s); while (a !== (a = n.cur() / i) && 1 !== a && --u)
                }
                return r && (o = n.start = +o || +i || 0, n.unit = s, n.end = r[1] ? o + (r[1] + 1) * r[2] : +r[2]), n
            }]
        };
    re.Animation = re.extend(R, {
            tweener: function(t, e) {
                re.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, i = 0, r = t.length; r > i; i++) n = t[i], wn[n] = wn[n] || [], wn[n].unshift(e)
            },
            prefilter: function(t, e) {
                e ? yn.unshift(t) : yn.push(t)
            }
        }), re.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? re.extend({}, t) : {
                complete: n || !n && e || re.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !re.isFunction(e) && e
            };
            return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
            }, i
        }, re.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(Pe).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var r = re.isEmptyObject(t),
                    s = re.speed(e, n, i),
                    o = function() {
                        var e = R(this, re.extend({}, t), s);
                        (r || re._data(this, "finish")) && e.stop(!0)
                    };
                return o.finish = o, r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        s = re.timers,
                        o = re._data(this);
                    if (r) o[r] && o[r].stop && i(o[r]);
                    else
                        for (r in o) o[r] && o[r].stop && _n.test(r) && i(o[r]);
                    for (r = s.length; r--;) s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(n), e = !1, s.splice(r, 1));
                    (e || !n) && re.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, n = re._data(this),
                        i = n[t + "queue"],
                        r = n[t + "queueHooks"],
                        s = re.timers,
                        o = i ? i.length : 0;
                    for (n.finish = !0, re.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                    for (e = 0; o > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), re.each(["toggle", "show", "hide"], function(t, e) {
            var n = re.fn[e];
            re.fn[e] = function(t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(I(e, !0), t, i, r)
            }
        }), re.each({
            slideDown: I("show"),
            slideUp: I("hide"),
            slideToggle: I("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            re.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), re.timers = [], re.fx.tick = function() {
            var t, e = re.timers,
                n = 0;
            for (pn = re.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
            e.length || re.fx.stop(), pn = void 0
        }, re.fx.timer = function(t) {
            re.timers.push(t), t() ? re.fx.start() : re.timers.pop()
        }, re.fx.interval = 13, re.fx.start = function() {
            gn || (gn = setInterval(re.fx.tick, re.fx.interval))
        }, re.fx.stop = function() {
            clearInterval(gn), gn = null
        }, re.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, re.fn.delay = function(t, e) {
            return t = re.fx ? re.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                var i = setTimeout(e, t);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var t, e, n, i, r;
            e = pe.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], n = pe.createElement("select"), r = n.appendChild(pe.createElement("option")), t = e.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ne.getSetAttribute = "t" !== e.className, ne.style = /top/.test(i.getAttribute("style")), ne.hrefNormalized = "/a" === i.getAttribute("href"), ne.checkOn = !!t.value, ne.optSelected = r.selected, ne.enctype = !!pe.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !r.disabled, t = pe.createElement("input"), t.setAttribute("value", ""), ne.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ne.radioValue = "t" === t.value
        }();
    var xn = /\r/g;
    re.fn.extend({
        val: function(t) {
            var e, n, i, r = this[0]; {
                if (arguments.length) return i = re.isFunction(t), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = i ? t.call(this, n, re(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : re.isArray(r) && (r = re.map(r, function(t) {
                        return null == t ? "" : t + ""
                    })), e = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                });
                if (r) return e = re.valHooks[r.type] || re.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(xn, "") : null == n ? "" : n)
            }
        }
    }), re.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = re.find.attr(t, "value");
                    return null != e ? e : re.trim(re.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, s = "select-one" === t.type || 0 > r, o = s ? null : [], a = s ? r + 1 : i.length, u = 0 > r ? a : s ? r : 0; a > u; u++)
                        if (n = i[u], !(!n.selected && u !== r || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && re.nodeName(n.parentNode, "optgroup"))) {
                            if (e = re(n).val(), s) return e;
                            o.push(e)
                        }
                    return o
                },
                set: function(t, e) {
                    for (var n, i, r = t.options, s = re.makeArray(e), o = r.length; o--;)
                        if (i = r[o], re.inArray(re.valHooks.option.get(i), s) >= 0) try {
                            i.selected = n = !0
                        } catch (a) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (t.selectedIndex = -1), r
                }
            }
        }
    }), re.each(["radio", "checkbox"], function() {
        re.valHooks[this] = {
            set: function(t, e) {
                return re.isArray(e) ? t.checked = re.inArray(re(t).val(), e) >= 0 : void 0
            }
        }, ne.checkOn || (re.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var bn, Cn, Sn = re.expr.attrHandle,
        Tn = /^(?:checked|selected)$/i,
        kn = ne.getSetAttribute,
        En = ne.input;
    re.fn.extend({
        attr: function(t, e) {
            return Ae(this, re.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                re.removeAttr(this, t)
            })
        }
    }), re.extend({
        attr: function(t, e, n) {
            var i, r, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s) return typeof t.getAttribute === Ce ? re.prop(t, e, n) : (1 === s && re.isXMLDoc(t) || (e = e.toLowerCase(), i = re.attrHooks[e] || (re.expr.match.bool.test(e) ? Cn : bn)), void 0 === n ? i && "get" in i && null !== (r = i.get(t, e)) ? r : (r = re.find.attr(t, e), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : (re.removeAttr(t, e), void 0))
        },
        removeAttr: function(t, e) {
            var n, i, r = 0,
                s = e && e.match(ye);
            if (s && 1 === t.nodeType)
                for (; n = s[r++];) i = re.propFix[n] || n, re.expr.match.bool.test(n) ? En && kn || !Tn.test(n) ? t[i] = !1 : t[re.camelCase("default-" + n)] = t[i] = !1 : re.attr(t, n, ""), t.removeAttribute(kn ? n : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!ne.radioValue && "radio" === e && re.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }
    }), Cn = {
        set: function(t, e, n) {
            return e === !1 ? re.removeAttr(t, n) : En && kn || !Tn.test(n) ? t.setAttribute(!kn && re.propFix[n] || n, n) : t[re.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, re.each(re.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = Sn[e] || re.find.attr;
        Sn[e] = En && kn || !Tn.test(e) ? function(t, e, i) {
            var r, s;
            return i || (s = Sn[e], Sn[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, Sn[e] = s), r
        } : function(t, e, n) {
            return n ? void 0 : t[re.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), En && kn || (re.attrHooks.value = {
        set: function(t, e, n) {
            return re.nodeName(t, "input") ? (t.defaultValue = e, void 0) : bn && bn.set(t, e, n)
        }
    }), kn || (bn = {
        set: function(t, e, n) {
            var i = t.getAttributeNode(n);
            return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
        }
    }, Sn.id = Sn.name = Sn.coords = function(t, e, n) {
        var i;
        return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
    }, re.valHooks.button = {
        get: function(t, e) {
            var n = t.getAttributeNode(e);
            return n && n.specified ? n.value : void 0
        },
        set: bn.set
    }, re.attrHooks.contenteditable = {
        set: function(t, e, n) {
            bn.set(t, "" === e ? !1 : e, n)
        }
    }, re.each(["width", "height"], function(t, e) {
        re.attrHooks[e] = {
            set: function(t, n) {
                return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
            }
        }
    })), ne.style || (re.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Pn = /^(?:input|select|textarea|button|object)$/i,
        An = /^(?:a|area)$/i;
    re.fn.extend({
        prop: function(t, e) {
            return Ae(this, re.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = re.propFix[t] || t, this.each(function() {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {}
            })
        }
    }), re.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, n) {
            var i, r, s, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o) return s = 1 !== o || !re.isXMLDoc(t), s && (e = re.propFix[e] || e, r = re.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = re.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Pn.test(t.nodeName) || An.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), ne.hrefNormalized || re.each(["href", "src"], function(t, e) {
        re.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), ne.optSelected || (re.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        re.propFix[this.toLowerCase()] = this
    }), ne.enctype || (re.propFix.enctype = "encoding");
    var Nn = /[\t\r\n\f]/g;
    re.fn.extend({
        addClass: function(t) {
            var e, n, i, r, s, o, a = 0,
                u = this.length,
                h = "string" == typeof t && t;
            if (re.isFunction(t)) return this.each(function(e) {
                re(this).addClass(t.call(this, e, this.className))
            });
            if (h)
                for (e = (t || "").match(ye) || []; u > a; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Nn, " ") : " ")) {
                        for (s = 0; r = e[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        o = re.trim(i), n.className !== o && (n.className = o)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, s, o, a = 0,
                u = this.length,
                h = 0 === arguments.length || "string" == typeof t && t;
            if (re.isFunction(t)) return this.each(function(e) {
                re(this).removeClass(t.call(this, e, this.className))
            });
            if (h)
                for (e = (t || "").match(ye) || []; u > a; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Nn, " ") : "")) {
                        for (s = 0; r = e[s++];)
                            for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                        o = t ? re.trim(i) : "", n.className !== o && (n.className = o)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : re.isFunction(t) ? this.each(function(n) {
                re(this).toggleClass(t.call(this, n, this.className, e), e)
            }) : this.each(function() {
                if ("string" === n)
                    for (var e, i = 0, r = re(this), s = t.match(ye) || []; e = s[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else(n === Ce || "boolean" === n) && (this.className && re._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : re._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Nn, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        re.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), re.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var Mn = re.now(),
        Ln = /\?/,
        Dn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    re.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var n, i = null,
            r = re.trim(e + "");
        return r && !re.trim(r.replace(Dn, function(t, e, r, s) {
            return n && e && (i = 0), 0 === i ? t : (n = r || e, i += !s - !r, "")
        })) ? Function("return " + r)() : re.error("Invalid JSON: " + e)
    }, re.parseXML = function(e) {
        var n, i;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
        } catch (r) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + e), n
    };
    var In, zn, jn = /#.*$/,
        On = /([?&])_=[^&]*/,
        Rn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        qn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Fn = /^(?:GET|HEAD)$/,
        Bn = /^\/\//,
        Hn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Wn = {},
        $n = {},
        Vn = "*/".concat("*");
    try {
        zn = location.href
    } catch (Un) {
        zn = pe.createElement("a"), zn.href = "", zn = zn.href
    }
    In = Hn.exec(zn.toLowerCase()) || [], re.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zn,
            type: "GET",
            isLocal: qn.test(In[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Vn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": re.parseJSON,
                "text xml": re.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? B(B(t, re.ajaxSettings), e) : B(re.ajaxSettings, t)
        },
        ajaxPrefilter: q(Wn),
        ajaxTransport: q($n),
        ajax: function(t, e) {
            function n(t, e, n, i) {
                var r, c, v, _, w, b = e;
                2 !== y && (y = 2, a && clearTimeout(a), h = void 0, o = i || "", x.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, n && (_ = H(l, x, n)), _ = W(l, _, x, r), r ? (l.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (re.lastModified[s] = w), w = x.getResponseHeader("etag"), w && (re.etag[s] = w)), 204 === t || "HEAD" === l.type ? b = "nocontent" : 304 === t ? b = "notmodified" : (b = _.state, c = _.data, v = _.error, r = !v)) : (v = b, (t || !b) && (b = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || b) + "", r ? p.resolveWith(d, [c, b, x]) : p.rejectWith(d, [x, b, v]), x.statusCode(m), m = void 0, u && f.trigger(r ? "ajaxSuccess" : "ajaxError", [x, l, r ? c : v]), g.fireWith(d, [x, b]), u && (f.trigger("ajaxComplete", [x, l]), --re.active || re.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var i, r, s, o, a, u, h, c, l = re.ajaxSetup({}, e),
                d = l.context || l,
                f = l.context && (d.nodeType || d.jquery) ? re(d) : re.event,
                p = re.Deferred(),
                g = re.Callbacks("once memory"),
                m = l.statusCode || {},
                v = {},
                _ = {},
                y = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === y) {
                            if (!c)
                                for (c = {}; e = Rn.exec(o);) c[e[1].toLowerCase()] = e[2];
                            e = c[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === y ? o : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return y || (t = _[n] = _[n] || t, v[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return y || (l.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > y)
                                for (e in t) m[e] = [m[e], t[e]];
                            else x.always(t[x.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || w;
                        return h && h.abort(e), n(0, e), this
                    }
                };
            if (p.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, l.url = ((t || l.url || zn) + "").replace(jn, "").replace(Bn, In[1] + "//"), l.type = e.method || e.type || l.method || l.type, l.dataTypes = re.trim(l.dataType || "*").toLowerCase().match(ye) || [""], null == l.crossDomain && (i = Hn.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === In[1] && i[2] === In[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (In[3] || ("http:" === In[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = re.param(l.data, l.traditional)), F(Wn, l, e, x), 2 === y) return x;
            u = re.event && l.global, u && 0 === re.active++ && re.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Fn.test(l.type), s = l.url, l.hasContent || (l.data && (s = l.url += (Ln.test(s) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = On.test(s) ? s.replace(On, "$1_=" + Mn++) : s + (Ln.test(s) ? "&" : "?") + "_=" + Mn++)), l.ifModified && (re.lastModified[s] && x.setRequestHeader("If-Modified-Since", re.lastModified[s]), re.etag[s] && x.setRequestHeader("If-None-Match", re.etag[s])), (l.data && l.hasContent && l.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", l.contentType), x.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Vn + "; q=0.01" : "") : l.accepts["*"]);
            for (r in l.headers) x.setRequestHeader(r, l.headers[r]);
            if (l.beforeSend && (l.beforeSend.call(d, x, l) === !1 || 2 === y)) return x.abort();
            w = "abort";
            for (r in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[r](l[r]);
            if (h = F($n, l, e, x)) {
                x.readyState = 1, u && f.trigger("ajaxSend", [x, l]), l.async && l.timeout > 0 && (a = setTimeout(function() {
                    x.abort("timeout")
                }, l.timeout));
                try {
                    y = 1, h.send(v, n)
                } catch (b) {
                    if (!(2 > y)) throw b;
                    n(-1, b)
                }
            } else n(-1, "No Transport");
            return x
        },
        getJSON: function(t, e, n) {
            return re.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return re.get(t, void 0, e, "script")
        }
    }), re.each(["get", "post"], function(t, e) {
        re[e] = function(t, n, i, r) {
            return re.isFunction(n) && (r = r || i, i = n, n = void 0), re.ajax({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            })
        }
    }), re._evalUrl = function(t) {
        return re.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, re.fn.extend({
        wrapAll: function(t) {
            if (re.isFunction(t)) return this.each(function(e) {
                re(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = re(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return re.isFunction(t) ? this.each(function(e) {
                re(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = re(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = re.isFunction(t);
            return this.each(function(n) {
                re(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
            }).end()
        }
    }), re.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (t.style && t.style.display || re.css(t, "display"))
    }, re.expr.filters.visible = function(t) {
        return !re.expr.filters.hidden(t)
    };
    var Xn = /%20/g,
        Zn = /\[\]$/,
        Gn = /\r?\n/g,
        Yn = /^(?:submit|button|image|reset|file)$/i,
        Jn = /^(?:input|select|textarea|keygen)/i;
    re.param = function(t, e) {
        var n, i = [],
            r = function(t, e) {
                e = re.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(t) || t.jquery && !re.isPlainObject(t)) re.each(t, function() {
            r(this.name, this.value)
        });
        else
            for (n in t) $(n, t[n], e, r);
        return i.join("&").replace(Xn, "+")
    }, re.fn.extend({
        serialize: function() {
            return re.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = re.prop(this, "elements");
                return t ? re.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !re(this).is(":disabled") && Jn.test(this.nodeName) && !Yn.test(t) && (this.checked || !Ne.test(t))
            }).map(function(t, e) {
                var n = re(this).val();
                return null == n ? null : re.isArray(n) ? re.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Gn, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Gn, "\r\n")
                }
            }).get()
        }
    }), re.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && V() || U()
    } : V;
    var Qn = 0,
        Kn = {},
        ti = re.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in Kn) Kn[t](void 0, !0)
    }), ne.cors = !!ti && "withCredentials" in ti, ti = ne.ajax = !!ti, ti && re.ajaxTransport(function(t) {
        if (!t.crossDomain || ne.cors) {
            var e;
            return {
                send: function(n, i) {
                    var r, s = t.xhr(),
                        o = ++Qn;
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (r in t.xhrFields) s[r] = t.xhrFields[r];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (r in n) void 0 !== n[r] && s.setRequestHeader(r, n[r] + "");
                    s.send(t.hasContent && t.data || null), e = function(n, r) {
                        var a, u, h;
                        if (e && (r || 4 === s.readyState))
                            if (delete Kn[o], e = void 0, s.onreadystatechange = re.noop, r) 4 !== s.readyState && s.abort();
                            else {
                                h = {}, a = s.status, "string" == typeof s.responseText && (h.text = s.responseText);
                                try {
                                    u = s.statusText
                                } catch (c) {
                                    u = ""
                                }
                                a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = h.text ? 200 : 404
                            }
                        h && i(a, u, h, s.getAllResponseHeaders())
                    }, t.async ? 4 === s.readyState ? setTimeout(e) : s.onreadystatechange = Kn[o] = e : e()
                },
                abort: function() {
                    e && e(void 0, !0)
                }
            }
        }
    }), re.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return re.globalEval(t), t
            }
        }
    }), re.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), re.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n = pe.head || re("head")[0] || pe.documentElement;
            return {
                send: function(i, r) {
                    e = pe.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || r(200, "success"))
                    }, n.insertBefore(e, n.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var ei = [],
        ni = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = ei.pop() || re.expando + "_" + Mn++;
            return this[t] = !0, t
        }
    }), re.ajaxPrefilter("json jsonp", function(e, n, i) {
        var r, s, o, a = e.jsonp !== !1 && (ni.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = re.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(ni, "$1" + r) : e.jsonp !== !1 && (e.url += (Ln.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || re.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", s = t[r], t[r] = function() {
            o = arguments
        }, i.always(function() {
            t[r] = s, e[r] && (e.jsonpCallback = n.jsonpCallback, ei.push(r)), o && re.isFunction(s) && s(o[0]), o = s = void 0
        }), "script") : void 0
    }), re.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || pe;
        var i = le.exec(t),
            r = !n && [];
        return i ? [e.createElement(i[1])] : (i = re.buildFragment([t], e, r), r && r.length && re(r).remove(), re.merge([], i.childNodes))
    };
    var ii = re.fn.load;
    re.fn.load = function(t, e, n) {
        if ("string" != typeof t && ii) return ii.apply(this, arguments);
        var i, r, s, o = this,
            a = t.indexOf(" ");
        return a >= 0 && (i = re.trim(t.slice(a, t.length)), t = t.slice(0, a)), re.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (s = "POST"), o.length > 0 && re.ajax({
            url: t,
            type: s,
            dataType: "html",
            data: e
        }).done(function(t) {
            r = arguments, o.html(i ? re("<div>").append(re.parseHTML(t)).find(i) : t)
        }).complete(n && function(t, e) {
            o.each(n, r || [t.responseText, e, t])
        }), this
    }, re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        re.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), re.expr.filters.animated = function(t) {
        return re.grep(re.timers, function(e) {
            return t === e.elem
        }).length
    };
    var ri = t.document.documentElement;
    re.offset = {
        setOffset: function(t, e, n) {
            var i, r, s, o, a, u, h, c = re.css(t, "position"),
                l = re(t),
                d = {};
            "static" === c && (t.style.position = "relative"), a = l.offset(), s = re.css(t, "top"), u = re.css(t, "left"), h = ("absolute" === c || "fixed" === c) && re.inArray("auto", [s, u]) > -1, h ? (i = l.position(), o = i.top, r = i.left) : (o = parseFloat(s) || 0, r = parseFloat(u) || 0), re.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (d.top = e.top - a.top + o), null != e.left && (d.left = e.left - a.left + r), "using" in e ? e.using.call(t, d) : l.css(d)
        }
    }, re.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                re.offset.setOffset(this, t, e)
            });
            var e, n, i = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                s = r && r.ownerDocument;
            if (s) return e = s.documentElement, re.contains(e, r) ? (typeof r.getBoundingClientRect !== Ce && (i = r.getBoundingClientRect()), n = X(s), {
                top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : i
        },
        position: function() {
            if (this[0]) {
                var t, e, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === re.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), re.nodeName(t[0], "html") || (n = t.offset()), n.top += re.css(t[0], "borderTopWidth", !0), n.left += re.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - re.css(i, "marginTop", !0),
                    left: e.left - n.left - re.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || ri; t && !re.nodeName(t, "html") && "static" === re.css(t, "position");) t = t.offsetParent;
                return t || ri
            })
        }
    }), re.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = /Y/.test(e);
        re.fn[t] = function(i) {
            return Ae(this, function(t, i, r) {
                var s = X(t);
                return void 0 === r ? s ? e in s ? s[e] : s.document.documentElement[i] : t[i] : (s ? s.scrollTo(n ? re(s).scrollLeft() : r, n ? r : re(s).scrollTop()) : t[i] = r, void 0)
            }, t, i, arguments.length, null)
        }
    }), re.each(["top", "left"], function(t, e) {
        re.cssHooks[e] = k(ne.pixelPosition, function(t, n) {
            return n ? (n = en(t, e), rn.test(n) ? re(t).position()[e] + "px" : n) : void 0
        })
    }), re.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        re.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            re.fn[i] = function(i, r) {
                var s = arguments.length && (n || "boolean" != typeof i),
                    o = n || (i === !0 || r === !0 ? "margin" : "border");
                return Ae(this, function(e, n, i) {
                    var r;
                    return re.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? re.css(e, n, o) : re.style(e, n, i, o)
                }, e, s ? i : void 0, s, null)
            }
        })
    }), re.fn.size = function() {
        return this.length
    }, re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return re
    });
    var si = t.jQuery,
        oi = t.$;
    return re.noConflict = function(e) {
        return t.$ === re && (t.$ = oi), e && t.jQuery === re && (t.jQuery = si), re
    }, typeof e === Ce && (t.jQuery = t.$ = re), re
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
}(function(t) {
    function e(e) {
        var o = e || window.event,
            a = u.call(arguments, 1),
            h = 0,
            l = 0,
            d = 0,
            f = 0,
            p = 0,
            g = 0;
        if (e = t.event.fix(o), e.type = "mousewheel", "detail" in o && (d = -1 * o.detail), "wheelDelta" in o && (d = o.wheelDelta), "wheelDeltaY" in o && (d = o.wheelDeltaY), "wheelDeltaX" in o && (l = -1 * o.wheelDeltaX), "axis" in o && o.axis === o.HORIZONTAL_AXIS && (l = -1 * d, d = 0), h = 0 === d ? l : d, "deltaY" in o && (d = -1 * o.deltaY, h = d), "deltaX" in o && (l = o.deltaX, 0 === d && (h = -1 * l)), 0 !== d || 0 !== l) {
            if (1 === o.deltaMode) {
                var m = t.data(this, "mousewheel-line-height");
                h *= m, d *= m, l *= m
            } else if (2 === o.deltaMode) {
                var v = t.data(this, "mousewheel-page-height");
                h *= v, d *= v, l *= v
            }
            if (f = Math.max(Math.abs(d), Math.abs(l)), (!s || s > f) && (s = f, i(o, f) && (s /= 40)), i(o, f) && (h /= 40, l /= 40, d /= 40), h = Math[h >= 1 ? "floor" : "ceil"](h / s), l = Math[l >= 1 ? "floor" : "ceil"](l / s), d = Math[d >= 1 ? "floor" : "ceil"](d / s), c.settings.normalizeOffset && this.getBoundingClientRect) {
                var _ = this.getBoundingClientRect();
                p = e.clientX - _.left, g = e.clientY - _.top
            }
            return e.deltaX = l, e.deltaY = d, e.deltaFactor = s, e.offsetX = p, e.offsetY = g, e.deltaMode = 0, a.unshift(e, h, l, d), r && clearTimeout(r), r = setTimeout(n, 200), (t.event.dispatch || t.event.handle).apply(this, a)
        }
    }

    function n() {
        s = null
    }

    function i(t, e) {
        return c.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 === 0
    }
    var r, s, o = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        u = Array.prototype.slice;
    if (t.event.fixHooks)
        for (var h = o.length; h;) t.event.fixHooks[o[--h]] = t.event.mouseHooks;
    var c = t.event.special.mousewheel = {
        version: "3.1.11",
        setup: function() {
            if (this.addEventListener)
                for (var n = a.length; n;) this.addEventListener(a[--n], e, !1);
            else this.onmousewheel = e;
            t.data(this, "mousewheel-line-height", c.getLineHeight(this)), t.data(this, "mousewheel-page-height", c.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var n = a.length; n;) this.removeEventListener(a[--n], e, !1);
            else this.onmousewheel = null;
            t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(e) {
            var n = t(e)["offsetParent" in t.fn ? "offsetParent" : "parent"]();
            return n.length || (n = t("body")), parseInt(n.css("fontSize"), 10)
        },
        getPageHeight: function(e) {
            return t(e).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    t.fn.extend({
        mousewheel: function(t) {
            return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
        },
        unmousewheel: function(t) {
            return this.unbind("mousewheel", t)
        }
    })
});
var paper = new function(t) {
    var e = new function() {
        function n(t, n, i, r, o) {
            function a(s, a) {
                a = a || (a = h(n, s)) && (a.get ? a : a.value), "string" == typeof a && "#" === a[0] && (a = t[a.substring(1)] || a);
                var c, d = "function" == typeof a,
                    f = a,
                    p = o || d ? a && a.get ? s in t : t[s] : null;
                o && p || (d && p && (a.base = p), d && r !== !1 && (c = s.match(/^([gs]et|is)(([A-Z])(.*))$/)) && (u[c[3].toLowerCase() + c[4]] = c[2]), f && !d && f.get && "function" == typeof f.get && e.isPlainObject(f) || (f = {
                    value: f,
                    writable: !0
                }), (h(t, s) || {
                    configurable: !0
                }).configurable && (f.configurable = !0, f.enumerable = i), l(t, s, f))
            }
            var u = {};
            if (n) {
                for (var c in n) n.hasOwnProperty(c) && !s.test(c) && a(c);
                for (var c in u) {
                    var d = u[c],
                        f = t["set" + d],
                        p = t["get" + d] || f && t["is" + d];
                    !p || r !== !0 && 0 !== p.length || a(c, {
                        get: p,
                        set: f
                    })
                }
            }
            return t
        }

        function i(t, e, n) {
            return t && ("length" in t && !t.getLength && "number" == typeof t.length ? o : a).call(t, e, n = n || t), n
        }

        function r(t, e, n) {
            for (var i in e) !e.hasOwnProperty(i) || n && n[i] || (t[i] = e[i]);
            return t
        }
        var s = /^(statics|enumerable|beans|preserve)$/,
            o = [].forEach || function(t, e) {
                for (var n = 0, i = this.length; i > n; n++) t.call(e, this[n], n, this)
            },
            a = function(t, e) {
                for (var n in this) this.hasOwnProperty(n) && t.call(e, this[n], n, this)
            },
            u = Object.create || function(t) {
                return {
                    __proto__: t
                }
            },
            h = Object.getOwnPropertyDescriptor || function(t, e) {
                var n = t.__lookupGetter__ && t.__lookupGetter__(e);
                return n ? {
                    get: n,
                    set: t.__lookupSetter__(e),
                    enumerable: !0,
                    configurable: !0
                } : t.hasOwnProperty(e) ? {
                    value: t[e],
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                } : null
            },
            c = Object.defineProperty || function(t, e, n) {
                return (n.get || n.set) && t.__defineGetter__ ? (n.get && t.__defineGetter__(e, n.get), n.set && t.__defineSetter__(e, n.set)) : t[e] = n.value, t
            },
            l = function(t, e, n) {
                return delete t[e], c(t, e, n)
            };
        return n(function() {
            for (var t = 0, e = arguments.length; e > t; t++) r(this, arguments[t])
        }, {
            inject: function(t) {
                if (t) {
                    var e = t.statics === !0 ? t : t.statics,
                        i = t.beans,
                        r = t.preserve;
                    e !== t && n(this.prototype, t, t.enumerable, i, r), n(this, e, !0, i, r)
                }
                for (var s = 1, o = arguments.length; o > s; s++) this.inject(arguments[s]);
                return this
            },
            extend: function() {
                for (var t, e = this, i = 0, r = arguments.length; r > i && !(t = arguments[i].initialize); i++);
                return t = t || function() {
                    e.apply(this, arguments)
                }, t.prototype = u(this.prototype), t.base = e, l(t.prototype, "constructor", {
                    value: t,
                    writable: !0,
                    configurable: !0
                }), n(t, this, !0), arguments.length ? this.inject.apply(t, arguments) : t
            }
        }, !0).inject({
            inject: function() {
                for (var t = 0, e = arguments.length; e > t; t++) {
                    var i = arguments[t];
                    i && n(this, i, i.enumerable, i.beans, i.preserve)
                }
                return this
            },
            extend: function() {
                var t = u(this);
                return t.inject.apply(t, arguments)
            },
            each: function(t, e) {
                return i(this, t, e)
            },
            set: function(t) {
                return r(this, t)
            },
            clone: function() {
                return new this.constructor(this)
            },
            statics: {
                each: i,
                create: u,
                define: l,
                describe: h,
                set: r,
                clone: function(t) {
                    return r(new t.constructor, t)
                },
                isPlainObject: function(t) {
                    var n = null != t && t.constructor;
                    return n && (n === Object || n === e || "Object" === n.name)
                },
                pick: function() {
                    for (var e = 0, n = arguments.length; n > e; e++)
                        if (arguments[e] !== t) return arguments[e]
                }
            }
        })
    };
    "undefined" != typeof module && (module.exports = e), Array.isArray || (Array.isArray = function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }), document.head || (document.head = document.getElementsByTagName("head")[0]), e.inject({
        toString: function() {
            return null != this._id ? (this._class || "Object") + (this._name ? " '" + this._name + "'" : " @" + this._id) : "{ " + e.each(this, function(t, e) {
                if (!/^_/.test(e)) {
                    var n = typeof t;
                    this.push(e + ": " + ("number" === n ? o.instance.number(t) : "string" === n ? "'" + t + "'" : t))
                }
            }, []).join(", ") + " }"
        },
        exportJSON: function(t) {
            return e.exportJSON(this, t)
        },
        toJSON: function() {
            return e.serialize(this)
        },
        _set: function(n, i, r) {
            if (n && (r || e.isPlainObject(n))) {
                var s = n._filtering || n;
                for (var o in s)
                    if (s.hasOwnProperty(o) && (!i || !i[o])) {
                        var a = n[o];
                        a !== t && (this[o] = a)
                    }
                return !0
            }
        },
        statics: {
            exports: {
                enumerable: !0
            },
            extend: function ne() {
                var t = ne.base.apply(this, arguments),
                    n = t.prototype._class;
                return n && !e.exports[n] && (e.exports[n] = t), t
            },
            equals: function(t, n) {
                function i(t, e) {
                    for (var n in t)
                        if (t.hasOwnProperty(n) && !e.hasOwnProperty(n)) return !1;
                    return !0
                }
                if (t === n) return !0;
                if (t && t.equals) return t.equals(n);
                if (n && n.equals) return n.equals(t);
                if (Array.isArray(t) && Array.isArray(n)) {
                    if (t.length !== n.length) return !1;
                    for (var r = 0, s = t.length; s > r; r++)
                        if (!e.equals(t[r], n[r])) return !1;
                    return !0
                }
                if (t && "object" == typeof t && n && "object" == typeof n) {
                    if (!i(t, n) || !i(n, t)) return !1;
                    for (var r in t)
                        if (t.hasOwnProperty(r) && !e.equals(t[r], n[r])) return !1;
                    return !0
                }
                return !1
            },
            read: function(n, i, r, s) {
                if (this === e) {
                    var o = this.peek(n, i);
                    return n.__index++, o
                }
                var a = this.prototype,
                    u = a._readIndex,
                    h = i || u && n.__index || 0;
                s || (s = n.length - h);
                var c = n[h];
                return c instanceof this || r && r.readNull && null == c && 1 >= s ? (u && (n.__index = h + 1), c && r && r.clone ? c.clone() : c) : (c = e.create(this.prototype), u && (c.__read = !0), c = c.initialize.apply(c, h > 0 || s < n.length ? Array.prototype.slice.call(n, h, h + s) : n) || c, u && (n.__index = h + c.__read, c.__read = t), c)
            },
            peek: function(t, e) {
                return t[t.__index = e || t.__index || 0]
            },
            remain: function(t) {
                return t.length - (t.__index || 0)
            },
            readAll: function(t, e, n) {
                for (var i, r = [], s = e || 0, o = t.length; o > s; s++) r.push(Array.isArray(i = t[s]) ? this.read(i, 0, n) : this.read(t, s, n, 1));
                return r
            },
            readNamed: function(n, i, r, s, o) {
                var a = this.getNamed(n, i),
                    u = a !== t;
                if (u) {
                    var h = n._filtered;
                    h || (h = n._filtered = e.create(n[0]), h._filtering = n[0]), h[i] = t
                }
                return this.read(u ? [a] : n, r, s, o)
            },
            getNamed: function(n, i) {
                var r = n[0];
                return n._hasObject === t && (n._hasObject = 1 === n.length && e.isPlainObject(r)), n._hasObject ? i ? r[i] : n._filtered || r : t
            },
            hasNamed: function(t, e) {
                return !!this.getNamed(t, e)
            },
            isPlainValue: function(t, e) {
                return this.isPlainObject(t) || Array.isArray(t) || e && "string" == typeof t
            },
            serialize: function(t, n, i, r) {
                n = n || {};
                var s, a = !r;
                if (a && (n.formatter = new o(n.precision), r = {
                        length: 0,
                        definitions: {},
                        references: {},
                        add: function(t, e) {
                            var n = "#" + t._id,
                                i = this.references[n];
                            if (!i) {
                                this.length++;
                                var r = e.call(t),
                                    s = t._class;
                                s && r[0] !== s && r.unshift(s), this.definitions[n] = r, i = this.references[n] = [n]
                            }
                            return i
                        }
                    }), t && t._serialize) {
                    s = t._serialize(n, r);
                    var u = t._class;
                    !u || i || s._compact || s[0] === u || s.unshift(u)
                } else if (Array.isArray(t)) {
                    s = [];
                    for (var h = 0, c = t.length; c > h; h++) s[h] = e.serialize(t[h], n, i, r);
                    i && (s._compact = !0)
                } else if (e.isPlainObject(t)) {
                    s = {};
                    for (var h in t) t.hasOwnProperty(h) && (s[h] = e.serialize(t[h], n, i, r))
                } else s = "number" == typeof t ? n.formatter.number(t, n.precision) : t;
                return a && r.length > 0 ? [
                    ["dictionary", r.definitions], s
                ] : s
            },
            deserialize: function(t, n, i) {
                var r = t;
                if (i = i || {}, Array.isArray(t)) {
                    var s = t[0],
                        o = "dictionary" === s;
                    if (!o) {
                        if (i.dictionary && 1 == t.length && /^#/.test(s)) return i.dictionary[s];
                        s = e.exports[s]
                    }
                    r = [];
                    for (var a = s ? 1 : 0, u = t.length; u > a; a++) r.push(e.deserialize(t[a], n, i));
                    if (o) i.dictionary = r[0];
                    else if (s) {
                        var h = r;
                        n ? r = n(s, h) : (r = e.create(s.prototype), s.apply(r, h))
                    }
                } else if (e.isPlainObject(t)) {
                    r = {};
                    for (var c in t) r[c] = e.deserialize(t[c], n, i)
                }
                return r
            },
            exportJSON: function(t, n) {
                var i = e.serialize(t, n);
                return n && n.asString === !1 ? i : JSON.stringify(i)
            },
            importJSON: function(t, n) {
                return e.deserialize("string" == typeof t ? JSON.parse(t) : t, function(t, i) {
                    var r = n && n.constructor === t ? n : e.create(t.prototype),
                        s = r === n;
                    if (1 === i.length && r instanceof y && (s || !(r instanceof x))) {
                        var o = i[0];
                        e.isPlainObject(o) && (o.insert = !1)
                    }
                    return t.apply(r, i), s && (n = null), r
                })
            },
            splice: function(e, n, i, r) {
                var s = n && n.length,
                    o = i === t;
                i = o ? e.length : i, i > e.length && (i = e.length);
                for (var a = 0; s > a; a++) n[a]._index = i + a;
                if (o) return e.push.apply(e, n), [];
                var u = [i, r];
                n && u.push.apply(u, n);
                for (var h = e.splice.apply(e, u), a = 0, c = h.length; c > a; a++) h[a]._index = t;
                for (var a = i + s, c = e.length; c > a; a++) e[a]._index = a;
                return h
            },
            capitalize: function(t) {
                return t.replace(/\b[a-z]/g, function(t) {
                    return t.toUpperCase()
                })
            },
            camelize: function(t) {
                return t.replace(/-(.)/g, function(t, e) {
                    return e.toUpperCase()
                })
            },
            hyphenate: function(t) {
                return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
            }
        }
    });
    var n = {
            on: function(t, n) {
                if ("string" != typeof t) e.each(t, function(t, e) {
                    this.on(e, t)
                }, this);
                else {
                    var i = this._eventTypes[t];
                    if (i) {
                        var r = this._callbacks = this._callbacks || {};
                        r = r[t] = r[t] || [], -1 === r.indexOf(n) && (r.push(n), i.install && 1 == r.length && i.install.call(this, t))
                    }
                }
                return this
            },
            off: function(n, i) {
                if ("string" != typeof n) return e.each(n, function(t, e) {
                    this.off(e, t)
                }, this), t;
                var r, s = this._eventTypes[n],
                    o = this._callbacks && this._callbacks[n];
                return s && o && (!i || -1 !== (r = o.indexOf(i)) && 1 === o.length ? (s.uninstall && s.uninstall.call(this, n), delete this._callbacks[n]) : -1 !== r && o.splice(r, 1)), this
            },
            once: function(t, e) {
                return this.on(t, function() {
                    e.apply(this, arguments), this.off(t, e)
                })
            },
            emit: function(t, e) {
                var n = this._callbacks && this._callbacks[t];
                if (!n) return !1;
                for (var i = [].slice.call(arguments, 1), r = 0, s = n.length; s > r; r++)
                    if (n[r].apply(this, i) === !1 && e && e.stop) {
                        e.stop();
                        break
                    }
                return !0
            },
            responds: function(t) {
                return !(!this._callbacks || !this._callbacks[t])
            },
            attach: "#on",
            detach: "#off",
            fire: "#emit",
            _installEvents: function(t) {
                var e = this._callbacks,
                    n = t ? "install" : "uninstall";
                for (var i in e)
                    if (e[i].length > 0) {
                        var r = this._eventTypes[i],
                            s = r[n];
                        s && s.call(this, i)
                    }
            },
            statics: {
                inject: function ie(t) {
                    var n = t._events;
                    if (n) {
                        var i = {};
                        e.each(n, function(n, r) {
                            var s = "string" == typeof n,
                                o = s ? n : r,
                                a = e.capitalize(o),
                                u = o.substring(2).toLowerCase();
                            i[u] = s ? {} : n, o = "_" + o, t["get" + a] = function() {
                                return this[o]
                            }, t["set" + a] = function(t) {
                                var e = this[o];
                                e && this.off(u, e), t && this.on(u, t), this[o] = t
                            }
                        }), t._eventTypes = i
                    }
                    return ie.base.apply(this, arguments)
                }
            }
        },
        r = e.extend({
            _class: "PaperScope",
            initialize: function re() {
                paper = this, this.settings = new e({
                    applyMatrix: !0,
                    handleSize: 4,
                    hitTolerance: 0
                }), this.project = null, this.projects = [], this.tools = [], this.palettes = [], this._id = re._id++, re._scopes[this._id] = this;
                var t = re.prototype;
                if (!this.support) {
                    var n = Q.getContext(1, 1);
                    t.support = {
                        nativeDash: "setLineDash" in n || "mozDash" in n,
                        nativeBlendModes: K.nativeModes
                    }, Q.release(n)
                }
                if (!this.browser) {
                    var i = t.browser = {};
                    navigator.userAgent.toLowerCase().replace(/(opera|chrome|safari|webkit|firefox|msie|trident)\/?\s*([.\d]+)(?:.*version\/([.\d]+))?(?:.*rv\:([.\d]+))?/g, function(t, e, n, r, s) {
                        if (!i.chrome) {
                            var o = "opera" === e ? r : n;
                            "trident" === e && (o = s, e = "msie"), i.version = o, i.versionNumber = parseFloat(o), i.name = e, i[e] = !0
                        }
                    }), i.chrome && delete i.webkit
                }
            },
            version: "0.9.21",
            getView: function() {
                return this.project && this.project.getView()
            },
            getPaper: function() {
                return this
            },
            execute: function(t, e, n) {
                paper.PaperScript.execute(t, this, e, n), W.updateFocus()
            },
            install: function(t) {
                var n = this;
                e.each(["project", "view", "tool"], function(i) {
                    e.define(t, i, {
                        configurable: !0,
                        get: function() {
                            return n[i]
                        }
                    })
                });
                for (var i in this) !/^_/.test(i) && this[i] && (t[i] = this[i])
            },
            setup: function(t) {
                return paper = this, this.project = new v(t), this
            },
            activate: function() {
                paper = this
            },
            clear: function() {
                for (var t = this.projects.length - 1; t >= 0; t--) this.projects[t].remove();
                for (var t = this.tools.length - 1; t >= 0; t--) this.tools[t].remove();
                for (var t = this.palettes.length - 1; t >= 0; t--) this.palettes[t].remove()
            },
            remove: function() {
                this.clear(), delete r._scopes[this._id]
            },
            statics: new function() {
                function t(t) {
                    return t += "Attribute",
                        function(e, n) {
                            return e[t](n) || e[t]("data-paper-" + n)
                        }
                }
                return {
                    _scopes: {},
                    _id: 0,
                    get: function(t) {
                        return this._scopes[t] || null
                    },
                    getAttribute: t("get"),
                    hasAttribute: t("has")
                }
            }
        }),
        s = e.extend(n, {
            initialize: function(t) {
                this._scope = paper, this._index = this._scope[this._list].push(this) - 1, (t || !this._scope[this._reference]) && this.activate()
            },
            activate: function() {
                if (!this._scope) return !1;
                var t = this._scope[this._reference];
                return t && t !== this && t.emit("deactivate"), this._scope[this._reference] = this, this.emit("activate", t), !0
            },
            isActive: function() {
                return this._scope[this._reference] === this
            },
            remove: function() {
                return null == this._index ? !1 : (e.splice(this._scope[this._list], null, this._index, 1), this._scope[this._reference] == this && (this._scope[this._reference] = null), this._scope = null, !0)
            }
        }),
        o = e.extend({
            initialize: function(t) {
                this.precision = t || 5, this.multiplier = Math.pow(10, this.precision)
            },
            number: function(t) {
                return Math.round(t * this.multiplier) / this.multiplier
            },
            pair: function(t, e, n) {
                return this.number(t) + (n || ",") + this.number(e)
            },
            point: function(t, e) {
                return this.number(t.x) + (e || ",") + this.number(t.y)
            },
            size: function(t, e) {
                return this.number(t.width) + (e || ",") + this.number(t.height)
            },
            rectangle: function(t, e) {
                return this.point(t, e) + (e || ",") + this.size(t, e)
            }
        });
    o.instance = new o;
    var a = new function() {
            function e(e, n, i) {
                var r = n === t,
                    s = n - l,
                    o = i + l,
                    a = 0;
                return function(t) {
                    return (r || t > s && o > t) && (e[a++] = n > t ? n : t > i ? i : t), a
                }
            }
            var n = [
                    [.5773502691896257],
                    [0, .7745966692414834],
                    [.33998104358485626, .8611363115940526],
                    [0, .5384693101056831, .906179845938664],
                    [.2386191860831969, .6612093864662645, .932469514203152],
                    [0, .4058451513773972, .7415311855993945, .9491079123427585],
                    [.1834346424956498, .525532409916329, .7966664774136267, .9602898564975363],
                    [0, .3242534234038089, .6133714327005904, .8360311073266358, .9681602395076261],
                    [.14887433898163122, .4333953941292472, .6794095682990244, .8650633666889845, .9739065285171717],
                    [0, .26954315595234496, .5190961292068118, .7301520055740494, .8870625997680953, .978228658146057],
                    [.1252334085114689, .3678314989981802, .5873179542866175, .7699026741943047, .9041172563704749, .9815606342467192],
                    [0, .2304583159551348, .44849275103644687, .6423493394403402, .8015780907333099, .9175983992229779, .9841830547185881],
                    [.10805494870734367, .31911236892788974, .5152486363581541, .6872929048116855, .827201315069765, .9284348836635735, .9862838086968123],
                    [0, .20119409399743451, .3941513470775634, .5709721726085388, .7244177313601701, .8482065834104272, .937273392400706, .9879925180204854],
                    [.09501250983763744, .2816035507792589, .45801677765722737, .6178762444026438, .755404408355003, .8656312023878318, .9445750230732326, .9894009349916499]
                ],
                i = [
                    [1],
                    [.8888888888888888, .5555555555555556],
                    [.6521451548625461, .34785484513745385],
                    [.5688888888888889, .47862867049936647, .23692688505618908],
                    [.46791393457269104, .3607615730481386, .17132449237917036],
                    [.4179591836734694, .3818300505051189, .27970539148927664, .1294849661688697],
                    [.362683783378362, .31370664587788727, .22238103445337448, .10122853629037626],
                    [.3302393550012598, .31234707704000286, .26061069640293544, .1806481606948574, .08127438836157441],
                    [.29552422471475287, .26926671930999635, .21908636251598204, .1494513491505806, .06667134430868814],
                    [.2729250867779006, .26280454451024665, .23319376459199048, .18629021092773426, .1255803694649046, .05566856711617366],
                    [.24914704581340277, .2334925365383548, .20316742672306592, .16007832854334622, .10693932599531843, .04717533638651183],
                    [.2325515532308739, .22628318026289723, .2078160475368885, .17814598076194574, .13887351021978725, .09212149983772845, .04048400476531588],
                    [.2152638534631578, .2051984637212956, .18553839747793782, .15720316715819355, .12151857068790319, .08015808715976021, .03511946033175186],
                    [.2025782419255613, .19843148532711158, .1861610000155622, .16626920581699392, .13957067792615432, .10715922046717194, .07036604748810812, .03075324199611727],
                    [.1894506104550685, .18260341504492358, .16915651939500254, .14959598881657674, .12462897125553388, .09515851168249279, .062253523938647894, .027152459411754096]
                ],
                r = Math.abs,
                s = Math.sqrt,
                o = Math.pow,
                u = Math.cos,
                h = Math.PI,
                c = 1e-5,
                l = 1e-11;
            return {
                TOLERANCE: c,
                EPSILON: l,
                KAPPA: 4 * (s(2) - 1) / 3,
                isZero: function(t) {
                    return r(t) <= l
                },
                integrate: function(t, e, r, s) {
                    for (var o = n[s - 2], a = i[s - 2], u = .5 * (r - e), h = u + e, c = 0, l = s + 1 >> 1, d = 1 & s ? a[c++] * t(h) : 0; l > c;) {
                        var f = u * o[c];
                        d += a[c++] * (t(h + f) + t(h - f))
                    }
                    return u * d
                },
                findRoot: function(t, e, n, i, s, o, a) {
                    for (var u = 0; o > u; u++) {
                        var h = t(n),
                            c = h / e(n),
                            l = n - c;
                        if (r(c) < a) return l;
                        h > 0 ? (s = n, n = i >= l ? .5 * (i + s) : l) : (i = n, n = l >= s ? .5 * (i + s) : l)
                    }
                    return n
                },
                solveQuadratic: function(t, n, i, o, a, u) {
                    var h = e(o, a, u);
                    if (r(t) < l) return r(n) >= l ? h(-i / n) : r(i) < l ? -1 : 0;
                    var c = n / (2 * t),
                        d = i / t,
                        f = c * c;
                    if (d - l > f) return 0;
                    var p = f > d ? s(f - d) : 0,
                        g = h(p - c);
                    return p > 0 && (g = h(-p - c)), g
                },
                solveCubic: function(t, n, i, c, d, f, p) {
                    if (r(t) < l) return a.solveQuadratic(n, i, c, d, f, p);
                    n /= t, i /= t, c /= t;
                    var g = e(d, f, p),
                        m = n * n,
                        v = (m - 3 * i) / 9,
                        _ = (2 * m * n - 9 * n * i + 27 * c) / 54,
                        y = v * v * v,
                        w = _ * _ - y;
                    if (n /= 3, r(w) < l) {
                        if (r(_) < l) return g(-n);
                        var x = s(v),
                            b = _ > 0 ? 1 : -1;
                        return g(2 * -b * x - n), g(b * x - n)
                    }
                    if (0 > w) {
                        var x = s(v),
                            C = Math.acos(_ / (x * x * x)) / 3,
                            S = -2 * x,
                            T = 2 * h / 3;
                        return g(S * u(C) - n), g(S * u(C + T) - n), g(S * u(C - T) - n)
                    }
                    var k = (_ > 0 ? -1 : 1) * o(r(_) + s(w), 1 / 3);
                    return g(k + v / k - n)
                }
            }
        },
        u = e.extend({
            _class: "Point",
            _readIndex: !0,
            initialize: function(t, e) {
                var n = typeof t;
                if ("number" === n) {
                    var i = "number" == typeof e;
                    this.x = t, this.y = i ? e : t, this.__read && (this.__read = i ? 2 : 1)
                } else "undefined" === n || null === t ? (this.x = this.y = 0, this.__read && (this.__read = null === t ? 1 : 0)) : (Array.isArray(t) ? (this.x = t[0], this.y = t.length > 1 ? t[1] : t[0]) : null != t.x ? (this.x = t.x, this.y = t.y) : null != t.width ? (this.x = t.width, this.y = t.height) : null != t.angle ? (this.x = t.length, this.y = 0, this.setAngle(t.angle)) : (this.x = this.y = 0, this.__read && (this.__read = 0)), this.__read && (this.__read = 1))
            },
            set: function(t, e) {
                return this.x = t, this.y = e, this
            },
            equals: function(t) {
                return this === t || t && (this.x === t.x && this.y === t.y || Array.isArray(t) && this.x === t[0] && this.y === t[1]) || !1
            },
            clone: function() {
                return new u(this.x, this.y)
            },
            toString: function() {
                var t = o.instance;
                return "{ x: " + t.number(this.x) + ", y: " + t.number(this.y) + " }"
            },
            _serialize: function(t) {
                var e = t.formatter;
                return [e.number(this.x), e.number(this.y)]
            },
            getLength: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            },
            setLength: function(t) {
                if (this.isZero()) {
                    var e = this._angle || 0;
                    this.set(Math.cos(e) * t, Math.sin(e) * t)
                } else {
                    var n = t / this.getLength();
                    a.isZero(n) && this.getAngle(), this.set(this.x * n, this.y * n)
                }
            },
            getAngle: function() {
                return 180 * this.getAngleInRadians.apply(this, arguments) / Math.PI
            },
            setAngle: function(t) {
                this.setAngleInRadians.call(this, t * Math.PI / 180)
            },
            getAngleInDegrees: "#getAngle",
            setAngleInDegrees: "#setAngle",
            getAngleInRadians: function() {
                if (arguments.length) {
                    var t = u.read(arguments),
                        e = this.getLength() * t.getLength();
                    if (a.isZero(e)) return 0 / 0;
                    var n = this.dot(t) / e;
                    return Math.acos(-1 > n ? -1 : n > 1 ? 1 : n)
                }
                return this.isZero() ? this._angle || 0 : this._angle = Math.atan2(this.y, this.x)
            },
            setAngleInRadians: function(t) {
                if (this._angle = t, !this.isZero()) {
                    var e = this.getLength();
                    this.set(Math.cos(t) * e, Math.sin(t) * e)
                }
            },
            getQuadrant: function() {
                return this.x >= 0 ? this.y >= 0 ? 1 : 4 : this.y >= 0 ? 2 : 3
            }
        }, {
            beans: !1,
            getDirectedAngle: function() {
                var t = u.read(arguments);
                return 180 * Math.atan2(this.cross(t), this.dot(t)) / Math.PI
            },
            getDistance: function() {
                var t = u.read(arguments),
                    n = t.x - this.x,
                    i = t.y - this.y,
                    r = n * n + i * i,
                    s = e.read(arguments);
                return s ? r : Math.sqrt(r)
            },
            normalize: function(e) {
                e === t && (e = 1);
                var n = this.getLength(),
                    i = 0 !== n ? e / n : 0,
                    r = new u(this.x * i, this.y * i);
                return i >= 0 && (r._angle = this._angle), r
            },
            rotate: function(t, e) {
                if (0 === t) return this.clone();
                t = t * Math.PI / 180;
                var n = e ? this.subtract(e) : this,
                    i = Math.sin(t),
                    r = Math.cos(t);
                return n = new u(n.x * r - n.y * i, n.x * i + n.y * r), e ? n.add(e) : n
            },
            transform: function(t) {
                return t ? t._transformPoint(this) : this
            },
            add: function() {
                var t = u.read(arguments);
                return new u(this.x + t.x, this.y + t.y)
            },
            subtract: function() {
                var t = u.read(arguments);
                return new u(this.x - t.x, this.y - t.y)
            },
            multiply: function() {
                var t = u.read(arguments);
                return new u(this.x * t.x, this.y * t.y)
            },
            divide: function() {
                var t = u.read(arguments);
                return new u(this.x / t.x, this.y / t.y)
            },
            modulo: function() {
                var t = u.read(arguments);
                return new u(this.x % t.x, this.y % t.y)
            },
            negate: function() {
                return new u(-this.x, -this.y)
            },
            isInside: function() {
                return f.read(arguments).contains(this)
            },
            isClose: function(t, e) {
                return this.getDistance(t) < e
            },
            isColinear: function(t) {
                return Math.abs(this.cross(t)) < 1e-5
            },
            isOrthogonal: function(t) {
                return Math.abs(this.dot(t)) < 1e-5
            },
            isZero: function() {
                return a.isZero(this.x) && a.isZero(this.y)
            },
            isNaN: function() {
                return isNaN(this.x) || isNaN(this.y)
            },
            dot: function() {
                var t = u.read(arguments);
                return this.x * t.x + this.y * t.y
            },
            cross: function() {
                var t = u.read(arguments);
                return this.x * t.y - this.y * t.x
            },
            project: function() {
                var t = u.read(arguments);
                if (t.isZero()) return new u(0, 0);
                var e = this.dot(t) / t.dot(t);
                return new u(t.x * e, t.y * e)
            },
            statics: {
                min: function() {
                    var t = u.read(arguments),
                        e = u.read(arguments);
                    return new u(Math.min(t.x, e.x), Math.min(t.y, e.y))
                },
                max: function() {
                    var t = u.read(arguments),
                        e = u.read(arguments);
                    return new u(Math.max(t.x, e.x), Math.max(t.y, e.y))
                },
                random: function() {
                    return new u(Math.random(), Math.random())
                }
            }
        }, e.each(["round", "ceil", "floor", "abs"], function(t) {
            var e = Math[t];
            this[t] = function() {
                return new u(e(this.x), e(this.y))
            }
        }, {})),
        h = u.extend({
            initialize: function(t, e, n, i) {
                this._x = t, this._y = e, this._owner = n, this._setter = i
            },
            set: function(t, e, n) {
                return this._x = t, this._y = e, n || this._owner[this._setter](this), this
            },
            getX: function() {
                return this._x
            },
            setX: function(t) {
                this._x = t, this._owner[this._setter](this)
            },
            getY: function() {
                return this._y
            },
            setY: function(t) {
                this._y = t, this._owner[this._setter](this)
            }
        }),
        c = e.extend({
            _class: "Size",
            _readIndex: !0,
            initialize: function(t, e) {
                var n = typeof t;
                if ("number" === n) {
                    var i = "number" == typeof e;
                    this.width = t, this.height = i ? e : t, this.__read && (this.__read = i ? 2 : 1)
                } else "undefined" === n || null === t ? (this.width = this.height = 0, this.__read && (this.__read = null === t ? 1 : 0)) : (Array.isArray(t) ? (this.width = t[0], this.height = t.length > 1 ? t[1] : t[0]) : null != t.width ? (this.width = t.width, this.height = t.height) : null != t.x ? (this.width = t.x, this.height = t.y) : (this.width = this.height = 0, this.__read && (this.__read = 0)), this.__read && (this.__read = 1))
            },
            set: function(t, e) {
                return this.width = t, this.height = e, this
            },
            equals: function(t) {
                return t === this || t && (this.width === t.width && this.height === t.height || Array.isArray(t) && this.width === t[0] && this.height === t[1]) || !1
            },
            clone: function() {
                return new c(this.width, this.height)
            },
            toString: function() {
                var t = o.instance;
                return "{ width: " + t.number(this.width) + ", height: " + t.number(this.height) + " }"
            },
            _serialize: function(t) {
                var e = t.formatter;
                return [e.number(this.width), e.number(this.height)]
            },
            add: function() {
                var t = c.read(arguments);
                return new c(this.width + t.width, this.height + t.height)
            },
            subtract: function() {
                var t = c.read(arguments);
                return new c(this.width - t.width, this.height - t.height)
            },
            multiply: function() {
                var t = c.read(arguments);
                return new c(this.width * t.width, this.height * t.height)
            },
            divide: function() {
                var t = c.read(arguments);
                return new c(this.width / t.width, this.height / t.height)
            },
            modulo: function() {
                var t = c.read(arguments);
                return new c(this.width % t.width, this.height % t.height)
            },
            negate: function() {
                return new c(-this.width, -this.height)
            },
            isZero: function() {
                return a.isZero(this.width) && a.isZero(this.height)
            },
            isNaN: function() {
                return isNaN(this.width) || isNaN(this.height)
            },
            statics: {
                min: function(t, e) {
                    return new c(Math.min(t.width, e.width), Math.min(t.height, e.height))
                },
                max: function(t, e) {
                    return new c(Math.max(t.width, e.width), Math.max(t.height, e.height))
                },
                random: function() {
                    return new c(Math.random(), Math.random())
                }
            }
        }, e.each(["round", "ceil", "floor", "abs"], function(t) {
            var e = Math[t];
            this[t] = function() {
                return new c(e(this.width), e(this.height))
            }
        }, {})),
        d = c.extend({
            initialize: function(t, e, n, i) {
                this._width = t, this._height = e, this._owner = n, this._setter = i
            },
            set: function(t, e, n) {
                return this._width = t, this._height = e, n || this._owner[this._setter](this), this
            },
            getWidth: function() {
                return this._width
            },
            setWidth: function(t) {
                this._width = t, this._owner[this._setter](this)
            },
            getHeight: function() {
                return this._height
            },
            setHeight: function(t) {
                this._height = t, this._owner[this._setter](this)
            }
        }),
        f = e.extend({
            _class: "Rectangle",
            _readIndex: !0,
            beans: !0,
            initialize: function(n, i, r, s) {
                var o = typeof n,
                    a = 0;
                if ("number" === o ? (this.x = n, this.y = i, this.width = r, this.height = s, a = 4) : "undefined" === o || null === n ? (this.x = this.y = this.width = this.height = 0, a = null === n ? 1 : 0) : 1 === arguments.length && (Array.isArray(n) ? (this.x = n[0], this.y = n[1], this.width = n[2], this.height = n[3], a = 1) : n.x !== t || n.width !== t ? (this.x = n.x || 0, this.y = n.y || 0, this.width = n.width || 0, this.height = n.height || 0, a = 1) : n.from === t && n.to === t && (this.x = this.y = this.width = this.height = 0, this._set(n), a = 1)), !a) {
                    var h = u.readNamed(arguments, "from"),
                        l = e.peek(arguments);
                    if (this.x = h.x, this.y = h.y, l && l.x !== t || e.hasNamed(arguments, "to")) {
                        var d = u.readNamed(arguments, "to");
                        this.width = d.x - h.x, this.height = d.y - h.y, this.width < 0 && (this.x = d.x, this.width = -this.width), this.height < 0 && (this.y = d.y, this.height = -this.height)
                    } else {
                        var f = c.read(arguments);
                        this.width = f.width, this.height = f.height
                    }
                    a = arguments.__index
                }
                this.__read && (this.__read = a)
            },
            set: function(t, e, n, i) {
                return this.x = t, this.y = e, this.width = n, this.height = i, this
            },
            clone: function() {
                return new f(this.x, this.y, this.width, this.height)
            },
            equals: function(t) {
                var n = e.isPlainValue(t) ? f.read(arguments) : t;
                return n === this || n && this.x === n.x && this.y === n.y && this.width === n.width && this.height === n.height || !1
            },
            toString: function() {
                var t = o.instance;
                return "{ x: " + t.number(this.x) + ", y: " + t.number(this.y) + ", width: " + t.number(this.width) + ", height: " + t.number(this.height) + " }"
            },
            _serialize: function(t) {
                var e = t.formatter;
                return [e.number(this.x), e.number(this.y), e.number(this.width), e.number(this.height)]
            },
            getPoint: function(t) {
                var e = t ? u : h;
                return new e(this.x, this.y, this, "setPoint")
            },
            setPoint: function() {
                var t = u.read(arguments);
                this.x = t.x, this.y = t.y
            },
            getSize: function(t) {
                var e = t ? c : d;
                return new e(this.width, this.height, this, "setSize")
            },
            setSize: function() {
                var t = c.read(arguments);
                this._fixX && (this.x += (this.width - t.width) * this._fixX), this._fixY && (this.y += (this.height - t.height) * this._fixY), this.width = t.width, this.height = t.height, this._fixW = 1, this._fixH = 1
            },
            getLeft: function() {
                return this.x
            },
            setLeft: function(t) {
                this._fixW || (this.width -= t - this.x), this.x = t, this._fixX = 0
            },
            getTop: function() {
                return this.y
            },
            setTop: function(t) {
                this._fixH || (this.height -= t - this.y), this.y = t, this._fixY = 0
            },
            getRight: function() {
                return this.x + this.width
            },
            setRight: function(e) {
                this._fixX !== t && 1 !== this._fixX && (this._fixW = 0), this._fixW ? this.x = e - this.width : this.width = e - this.x, this._fixX = 1
            },
            getBottom: function() {
                return this.y + this.height
            },
            setBottom: function(e) {
                this._fixY !== t && 1 !== this._fixY && (this._fixH = 0), this._fixH ? this.y = e - this.height : this.height = e - this.y, this._fixY = 1
            },
            getCenterX: function() {
                return this.x + .5 * this.width
            },
            setCenterX: function(t) {
                this.x = t - .5 * this.width, this._fixX = .5
            },
            getCenterY: function() {
                return this.y + .5 * this.height
            },
            setCenterY: function(t) {
                this.y = t - .5 * this.height, this._fixY = .5
            },
            getCenter: function(t) {
                var e = t ? u : h;
                return new e(this.getCenterX(), this.getCenterY(), this, "setCenter")
            },
            setCenter: function() {
                var t = u.read(arguments);
                return this.setCenterX(t.x), this.setCenterY(t.y), this
            },
            getArea: function() {
                return this.width * this.height
            },
            isEmpty: function() {
                return 0 === this.width || 0 === this.height
            },
            contains: function(e) {
                return e && e.width !== t || 4 == (Array.isArray(e) ? e : arguments).length ? this._containsRectangle(f.read(arguments)) : this._containsPoint(u.read(arguments))
            },
            _containsPoint: function(t) {
                var e = t.x,
                    n = t.y;
                return e >= this.x && n >= this.y && e <= this.x + this.width && n <= this.y + this.height
            },
            _containsRectangle: function(t) {
                var e = t.x,
                    n = t.y;
                return e >= this.x && n >= this.y && e + t.width <= this.x + this.width && n + t.height <= this.y + this.height
            },
            intersects: function() {
                var t = f.read(arguments);
                return t.x + t.width > this.x && t.y + t.height > this.y && t.x < this.x + this.width && t.y < this.y + this.height
            },
            touches: function() {
                var t = f.read(arguments);
                return t.x + t.width >= this.x && t.y + t.height >= this.y && t.x <= this.x + this.width && t.y <= this.y + this.height
            },
            intersect: function() {
                var t = f.read(arguments),
                    e = Math.max(this.x, t.x),
                    n = Math.max(this.y, t.y),
                    i = Math.min(this.x + this.width, t.x + t.width),
                    r = Math.min(this.y + this.height, t.y + t.height);
                return new f(e, n, i - e, r - n)
            },
            unite: function() {
                var t = f.read(arguments),
                    e = Math.min(this.x, t.x),
                    n = Math.min(this.y, t.y),
                    i = Math.max(this.x + this.width, t.x + t.width),
                    r = Math.max(this.y + this.height, t.y + t.height);
                return new f(e, n, i - e, r - n)
            },
            include: function() {
                var t = u.read(arguments),
                    e = Math.min(this.x, t.x),
                    n = Math.min(this.y, t.y),
                    i = Math.max(this.x + this.width, t.x),
                    r = Math.max(this.y + this.height, t.y);
                return new f(e, n, i - e, r - n)
            },
            expand: function() {
                var t = c.read(arguments),
                    e = t.width,
                    n = t.height;
                return new f(this.x - e / 2, this.y - n / 2, this.width + e, this.height + n)
            },
            scale: function(e, n) {
                return this.expand(this.width * e - this.width, this.height * (n === t ? e : n) - this.height)
            }
        }, e.each([
            ["Top", "Left"],
            ["Top", "Right"],
            ["Bottom", "Left"],
            ["Bottom", "Right"],
            ["Left", "Center"],
            ["Top", "Center"],
            ["Right", "Center"],
            ["Bottom", "Center"]
        ], function(t, e) {
            var n = t.join(""),
                i = /^[RL]/.test(n);
            e >= 4 && (t[1] += i ? "Y" : "X");
            var r = t[i ? 0 : 1],
                s = t[i ? 1 : 0],
                o = "get" + r,
                a = "get" + s,
                c = "set" + r,
                l = "set" + s,
                d = "get" + n,
                f = "set" + n;
            this[d] = function(t) {
                var e = t ? u : h;
                return new e(this[o](), this[a](), this, f)
            }, this[f] = function() {
                var t = u.read(arguments);
                this[c](t.x), this[l](t.y)
            }
        }, {
            beans: !0
        })),
        p = f.extend({
            initialize: function(t, e, n, i, r, s) {
                this.set(t, e, n, i, !0), this._owner = r, this._setter = s
            },
            set: function(t, e, n, i, r) {
                return this._x = t, this._y = e, this._width = n, this._height = i, r || this._owner[this._setter](this), this
            }
        }, new function() {
            var t = f.prototype;
            return e.each(["x", "y", "width", "height"], function(t) {
                var n = e.capitalize(t),
                    i = "_" + t;
                this["get" + n] = function() {
                    return this[i]
                }, this["set" + n] = function(t) {
                    this[i] = t, this._dontNotify || this._owner[this._setter](this)
                }
            }, e.each(["Point", "Size", "Center", "Left", "Top", "Right", "Bottom", "CenterX", "CenterY", "TopLeft", "TopRight", "BottomLeft", "BottomRight", "LeftCenter", "TopCenter", "RightCenter", "BottomCenter"], function(e) {
                var n = "set" + e;
                this[n] = function() {
                    this._dontNotify = !0, t[n].apply(this, arguments), this._dontNotify = !1, this._owner[this._setter](this)
                }
            }, {
                isSelected: function() {
                    return this._owner._boundsSelected
                },
                setSelected: function(t) {
                    var e = this._owner;
                    e.setSelected && (e._boundsSelected = t, e.setSelected(t || e._selectedSegmentState > 0))
                }
            }))
        }),
        g = e.extend({
            _class: "Matrix",
            initialize: function se(t) {
                var e = arguments.length,
                    n = !0;
                if (6 === e ? this.set.apply(this, arguments) : 1 === e ? t instanceof se ? this.set(t._a, t._c, t._b, t._d, t._tx, t._ty) : Array.isArray(t) ? this.set.apply(this, t) : n = !1 : 0 === e ? this.reset() : n = !1, !n) throw Error("Unsupported matrix parameters")
            },
            set: function(t, e, n, i, r, s, o) {
                return this._a = t, this._c = e, this._b = n, this._d = i, this._tx = r, this._ty = s, o || this._changed(), this
            },
            _serialize: function(t) {
                return e.serialize(this.getValues(), t)
            },
            _changed: function() {
                var t = this._owner;
                t && (t._applyMatrix ? t.transform(null, !0) : t._changed(9))
            },
            clone: function() {
                return new g(this._a, this._c, this._b, this._d, this._tx, this._ty)
            },
            equals: function(t) {
                return t === this || t && this._a === t._a && this._b === t._b && this._c === t._c && this._d === t._d && this._tx === t._tx && this._ty === t._ty || !1
            },
            toString: function() {
                var t = o.instance;
                return "[[" + [t.number(this._a), t.number(this._b), t.number(this._tx)].join(", ") + "], [" + [t.number(this._c), t.number(this._d), t.number(this._ty)].join(", ") + "]]"
            },
            reset: function(t) {
                return this._a = this._d = 1, this._c = this._b = this._tx = this._ty = 0, t || this._changed(), this
            },
            apply: function() {
                var t = this._owner;
                return t ? (t.transform(null, !0), this.isIdentity()) : !1
            },
            translate: function() {
                var t = u.read(arguments),
                    e = t.x,
                    n = t.y;
                return this._tx += e * this._a + n * this._b, this._ty += e * this._c + n * this._d, this._changed(), this
            },
            scale: function() {
                var t = u.read(arguments),
                    e = u.read(arguments, 0, {
                        readNull: !0
                    });
                return e && this.translate(e), this._a *= t.x, this._c *= t.x, this._b *= t.y, this._d *= t.y, e && this.translate(e.negate()), this._changed(), this
            },
            rotate: function(t) {
                t *= Math.PI / 180;
                var e = u.read(arguments, 1),
                    n = e.x,
                    i = e.y,
                    r = Math.cos(t),
                    s = Math.sin(t),
                    o = n - n * r + i * s,
                    a = i - n * s - i * r,
                    h = this._a,
                    c = this._b,
                    l = this._c,
                    d = this._d;
                return this._a = r * h + s * c, this._b = -s * h + r * c, this._c = r * l + s * d, this._d = -s * l + r * d, this._tx += o * h + a * c, this._ty += o * l + a * d, this._changed(), this
            },
            shear: function() {
                var t = u.read(arguments),
                    e = u.read(arguments, 0, {
                        readNull: !0
                    });
                e && this.translate(e);
                var n = this._a,
                    i = this._c;
                return this._a += t.y * this._b, this._c += t.y * this._d, this._b += t.x * n, this._d += t.x * i, e && this.translate(e.negate()), this._changed(), this
            },
            skew: function() {
                var t = u.read(arguments),
                    e = u.read(arguments, 0, {
                        readNull: !0
                    }),
                    n = Math.PI / 180,
                    i = new u(Math.tan(t.x * n), Math.tan(t.y * n));
                return this.shear(i, e)
            },
            concatenate: function(t) {
                var e = this._a,
                    n = this._b,
                    i = this._c,
                    r = this._d,
                    s = t._a,
                    o = t._b,
                    a = t._c,
                    u = t._d,
                    h = t._tx,
                    c = t._ty;
                return this._a = s * e + a * n, this._b = o * e + u * n, this._c = s * i + a * r, this._d = o * i + u * r, this._tx += h * e + c * n, this._ty += h * i + c * r, this._changed(), this
            },
            preConcatenate: function(t) {
                var e = this._a,
                    n = this._b,
                    i = this._c,
                    r = this._d,
                    s = this._tx,
                    o = this._ty,
                    a = t._a,
                    u = t._b,
                    h = t._c,
                    c = t._d,
                    l = t._tx,
                    d = t._ty;
                return this._a = a * e + u * i, this._b = a * n + u * r, this._c = h * e + c * i, this._d = h * n + c * r, this._tx = a * s + u * o + l, this._ty = h * s + c * o + d, this._changed(), this
            },
            chain: function(t) {
                var e = this._a,
                    n = this._b,
                    i = this._c,
                    r = this._d,
                    s = this._tx,
                    o = this._ty,
                    a = t._a,
                    u = t._b,
                    h = t._c,
                    c = t._d,
                    l = t._tx,
                    d = t._ty;
                return new g(a * e + h * n, a * i + h * r, u * e + c * n, u * i + c * r, s + l * e + d * n, o + l * i + d * r)
            },
            isIdentity: function() {
                return 1 === this._a && 0 === this._c && 0 === this._b && 1 === this._d && 0 === this._tx && 0 === this._ty
            },
            orNullIfIdentity: function() {
                return this.isIdentity() ? null : this
            },
            isInvertible: function() {
                return !!this._getDeterminant()
            },
            isSingular: function() {
                return !this._getDeterminant()
            },
            transform: function(t, e, n) {
                return arguments.length < 3 ? this._transformPoint(u.read(arguments)) : this._transformCoordinates(t, e, n)
            },
            _transformPoint: function(t, e, n) {
                var i = t.x,
                    r = t.y;
                return e || (e = new u), e.set(i * this._a + r * this._b + this._tx, i * this._c + r * this._d + this._ty, n)
            },
            _transformCoordinates: function(t, e, n) {
                for (var i = 0, r = 0, s = 2 * n; s > i;) {
                    var o = t[i++],
                        a = t[i++];
                    e[r++] = o * this._a + a * this._b + this._tx, e[r++] = o * this._c + a * this._d + this._ty
                }
                return e
            },
            _transformCorners: function(t) {
                var e = t.x,
                    n = t.y,
                    i = e + t.width,
                    r = n + t.height,
                    s = [e, n, i, n, i, r, e, r];
                return this._transformCoordinates(s, s, 4)
            },
            _transformBounds: function(t, e, n) {
                for (var i = this._transformCorners(t), r = i.slice(0, 2), s = i.slice(), o = 2; 8 > o; o++) {
                    var a = i[o],
                        u = 1 & o;
                    a < r[u] ? r[u] = a : a > s[u] && (s[u] = a)
                }
                return e || (e = new f), e.set(r[0], r[1], s[0] - r[0], s[1] - r[1], n)
            },
            inverseTransform: function() {
                return this._inverseTransform(u.read(arguments))
            },
            _getDeterminant: function() {
                var t = this._a * this._d - this._b * this._c;
                return isFinite(t) && !a.isZero(t) && isFinite(this._tx) && isFinite(this._ty) ? t : null
            },
            _inverseTransform: function(t, e, n) {
                var i = this._getDeterminant();
                if (!i) return null;
                var r = t.x - this._tx,
                    s = t.y - this._ty;
                return e || (e = new u), e.set((r * this._d - s * this._b) / i, (s * this._a - r * this._c) / i, n)
            },
            decompose: function() {
                var t = this._a,
                    e = this._b,
                    n = this._c,
                    i = this._d;
                if (a.isZero(t * i - e * n)) return null;
                var r = Math.sqrt(t * t + e * e);
                t /= r, e /= r;
                var s = t * n + e * i;
                n -= t * s, i -= e * s;
                var o = Math.sqrt(n * n + i * i);
                return n /= o, i /= o, s /= o, e * n > t * i && (t = -t, e = -e, s = -s, r = -r), {
                    scaling: new u(r, o),
                    rotation: 180 * -Math.atan2(e, t) / Math.PI,
                    shearing: s
                }
            },
            getValues: function() {
                return [this._a, this._c, this._b, this._d, this._tx, this._ty]
            },
            getTranslation: function() {
                return new u(this._tx, this._ty)
            },
            getScaling: function() {
                return (this.decompose() || {}).scaling
            },
            getRotation: function() {
                return (this.decompose() || {}).rotation
            },
            inverted: function() {
                var t = this._getDeterminant();
                return t && new g(this._d / t, -this._c / t, -this._b / t, this._a / t, (this._b * this._ty - this._d * this._tx) / t, (this._c * this._tx - this._a * this._ty) / t)
            },
            shiftless: function() {
                return new g(this._a, this._c, this._b, this._d, 0, 0)
            },
            applyToContext: function(t) {
                t.transform(this._a, this._c, this._b, this._d, this._tx, this._ty)
            }
        }, e.each(["a", "c", "b", "d", "tx", "ty"], function(t) {
            var n = e.capitalize(t),
                i = "_" + t;
            this["get" + n] = function() {
                return this[i]
            }, this["set" + n] = function(t) {
                this[i] = t, this._changed()
            }
        }, {})),
        m = e.extend({
            _class: "Line",
            initialize: function(t, e, n, i, r) {
                var s = !1;
                arguments.length >= 4 ? (this._px = t, this._py = e, this._vx = n, this._vy = i, s = r) : (this._px = t.x, this._py = t.y, this._vx = e.x, this._vy = e.y, s = n), s || (this._vx -= this._px, this._vy -= this._py)
            },
            getPoint: function() {
                return new u(this._px, this._py)
            },
            getVector: function() {
                return new u(this._vx, this._vy)
            },
            getLength: function() {
                return this.getVector().getLength()
            },
            intersect: function(t, e) {
                return m.intersect(this._px, this._py, this._vx, this._vy, t._px, t._py, t._vx, t._vy, !0, e)
            },
            getSide: function(t) {
                return m.getSide(this._px, this._py, this._vx, this._vy, t.x, t.y, !0)
            },
            getDistance: function(t) {
                return Math.abs(m.getSignedDistance(this._px, this._py, this._vx, this._vy, t.x, t.y, !0))
            },
            statics: {
                intersect: function(t, e, n, i, r, s, o, h, c, l) {
                    c || (n -= t, i -= e, o -= r, h -= s);
                    var d = n * h - i * o;
                    if (!a.isZero(d)) {
                        var f = t - r,
                            p = e - s,
                            g = (o * p - h * f) / d,
                            m = (n * p - i * f) / d;
                        if (l || g >= 0 && 1 >= g && m >= 0 && 1 >= m) return new u(t + g * n, e + g * i)
                    }
                },
                getSide: function(t, e, n, i, r, s, o) {
                    o || (n -= t, i -= e);
                    var a = r - t,
                        u = s - e,
                        h = a * i - u * n;
                    return 0 === h && (h = a * n + u * i, h > 0 && (a -= n, u -= i, h = a * n + u * i, 0 > h && (h = 0))), 0 > h ? -1 : h > 0 ? 1 : 0
                },
                getSignedDistance: function(t, e, n, i, r, s, o) {
                    if (o || (n -= t, i -= e), a.isZero(n)) return r - t;
                    var u = i / n,
                        h = e - u * t;
                    return (s - u * r - h) / Math.sqrt(u * u + 1)
                }
            }
        }),
        v = s.extend({
            _class: "Project",
            _list: "projects",
            _reference: "project",
            initialize: function(t) {
                s.call(this, !0), this.layers = [], this._activeLayer = null, this.symbols = [], this._currentStyle = new F(null, null, this), this._view = W.create(this, t || Q.getCanvas(1, 1)), this._selectedItems = {}, this._selectedItemCount = 0, this._updateVersion = 0
            },
            _serialize: function(t, n) {
                return e.serialize(this.layers, t, !0, n)
            },
            clear: function() {
                for (var t = this.layers.length - 1; t >= 0; t--) this.layers[t].remove();
                this.symbols = []
            },
            isEmpty: function() {
                return 0 === this.layers.length
            },
            remove: function oe() {
                return oe.base.call(this) ? (this._view && this._view.remove(), !0) : !1
            },
            getView: function() {
                return this._view
            },
            getCurrentStyle: function() {
                return this._currentStyle
            },
            setCurrentStyle: function(t) {
                this._currentStyle.initialize(t)
            },
            getIndex: function() {
                return this._index
            },
            getOptions: function() {
                return this._scope.settings
            },
            getActiveLayer: function() {
                return this._activeLayer || new x({
                    project: this
                })
            },
            getSelectedItems: function() {
                var t = [];
                for (var e in this._selectedItems) {
                    var n = this._selectedItems[e];
                    n.isInserted() && t.push(n)
                }
                return t
            },
            addChild: function(t) {
                return t instanceof x ? (e.splice(this.layers, [t]), this._activeLayer || (this._activeLayer = t)) : t instanceof y ? (this._activeLayer || this.addChild(new x(y.NO_INSERT))).addChild(t) : t = null, t
            },
            _updateSelection: function(t) {
                var e = t._id,
                    n = this._selectedItems;
                t._selected ? n[e] !== t && (this._selectedItemCount++, n[e] = t) : n[e] === t && (this._selectedItemCount--, delete n[e])
            },
            selectAll: function() {
                for (var t = this.layers, e = 0, n = t.length; n > e; e++) t[e].setFullySelected(!0)
            },
            deselectAll: function() {
                var t = this._selectedItems;
                for (var e in t) t[e].setFullySelected(!1)
            },
            hitTest: function() {
                for (var t = u.read(arguments), n = T.getOptions(e.read(arguments)), i = this.layers.length - 1; i >= 0; i--) {
                    var r = this.layers[i]._hitTest(t, n);
                    if (r) return r
                }
                return null
            },
            getItems: function(t) {
                return y._getItems(this.layers, t)
            },
            getItem: function(t) {
                return y._getItems(this.layers, t, null, null, !0)[0] || null
            },
            importJSON: function(t) {
                this.activate();
                var n = this._activeLayer;
                return e.importJSON(t, n && n.isEmpty() && n)
            },
            draw: function(t, n, i) {
                this._updateVersion++, t.save(), n.applyToContext(t);
                for (var r = new e({
                        offset: new u(0, 0),
                        pixelRatio: i,
                        viewMatrix: n.isIdentity() ? null : n,
                        matrices: [new g],
                        updateMatrix: !0
                    }), s = 0, o = this.layers, a = o.length; a > s; s++) o[s].draw(t, r);
                if (t.restore(), this._selectedItemCount > 0) {
                    t.save(), t.strokeWidth = 1;
                    var h = this._selectedItems,
                        c = this._scope.settings.handleSize,
                        l = this._updateVersion;
                    for (var d in h) h[d]._drawSelection(t, n, c, h, l);
                    t.restore()
                }
            }
        }),
        _ = e.extend({
            _class: "Symbol",
            initialize: function ae(t, e) {
                this._id = ae._id = (ae._id || 0) + 1, this.project = paper.project, this.project.symbols.push(this), t && this.setDefinition(t, e)
            },
            _serialize: function(t, n) {
                return n.add(this, function() {
                    return e.serialize([this._class, this._definition], t, !1, n)
                })
            },
            _changed: function(t) {
                8 & t && y._clearBoundsCache(this), 1 & t && (this.project._needsUpdate = !0)
            },
            getDefinition: function() {
                return this._definition
            },
            setDefinition: function(t, e) {
                t._parentSymbol && (t = t.clone()), this._definition && (this._definition._parentSymbol = null), this._definition = t, t.remove(), t.setSelected(!1), e || t.setPosition(new u), t._parentSymbol = this, this._changed(9)
            },
            place: function(t) {
                return new S(this, t)
            },
            clone: function() {
                return new _(this._definition.clone(!1))
            }
        }),
        y = e.extend(n, {
            statics: {
                extend: function ue(t) {
                    return t._serializeFields && (t._serializeFields = new e(this.prototype._serializeFields, t._serializeFields)), ue.base.apply(this, arguments)
                },
                NO_INSERT: {
                    insert: !1
                }
            },
            _class: "Item",
            _applyMatrix: !0,
            _canApplyMatrix: !0,
            _boundsSelected: !1,
            _selectChildren: !1,
            _serializeFields: {
                name: null,
                applyMatrix: null,
                matrix: new g,
                pivot: null,
                locked: !1,
                visible: !0,
                blendMode: "normal",
                opacity: 1,
                guide: !1,
                selected: !1,
                clipMask: !1,
                data: {}
            },
            initialize: function() {},
            _initialize: function(t, n) {
                var i = t && e.isPlainObject(t),
                    r = i && t.internal === !0,
                    s = this._matrix = new g,
                    o = i && t.project || paper.project;
                return r || (this._id = y._id = (y._id || 0) + 1), this._applyMatrix = this._canApplyMatrix && paper.settings.applyMatrix, n && s.translate(n), s._owner = this, this._style = new F(o._currentStyle, this, o), this._project || (r || i && t.insert === !1 ? this._setProject(o) : i && t.parent ? this.setParent(t.parent) : (o._activeLayer || new x).addChild(this)), i && t !== y.NO_INSERT && this._set(t, {
                    insert: !0,
                    parent: !0
                }, !0), i
            },
            _events: new function() {
                var t = {
                        mousedown: {
                            mousedown: 1,
                            mousedrag: 1,
                            click: 1,
                            doubleclick: 1
                        },
                        mouseup: {
                            mouseup: 1,
                            mousedrag: 1,
                            click: 1,
                            doubleclick: 1
                        },
                        mousemove: {
                            mousedrag: 1,
                            mousemove: 1,
                            mouseenter: 1,
                            mouseleave: 1
                        }
                    },
                    n = {
                        install: function(e) {
                            var n = this.getView()._eventCounters;
                            if (n)
                                for (var i in t) n[i] = (n[i] || 0) + (t[i][e] || 0)
                        },
                        uninstall: function(e) {
                            var n = this.getView()._eventCounters;
                            if (n)
                                for (var i in t) n[i] -= t[i][e] || 0
                        }
                    };
                return e.each(["onMouseDown", "onMouseUp", "onMouseDrag", "onClick", "onDoubleClick", "onMouseMove", "onMouseEnter", "onMouseLeave"], function(t) {
                    this[t] = n
                }, {
                    onFrame: {
                        install: function() {
                            this._animateItem(!0)
                        },
                        uninstall: function() {
                            this._animateItem(!1)
                        }
                    },
                    onLoad: {}
                })
            },
            _animateItem: function(t) {
                this.getView()._animateItem(this, t)
            },
            _serialize: function(t, n) {
                function i(i) {
                    for (var o in i) {
                        var a = s[o];
                        e.equals(a, "leading" === o ? 1.2 * i.fontSize : i[o]) || (r[o] = e.serialize(a, t, "data" !== o, n))
                    }
                }
                var r = {},
                    s = this;
                return i(this._serializeFields), this instanceof w || i(this._style._defaults), [this._class, r]
            },
            _changed: function(e) {
                var n = this._parentSymbol,
                    i = this._parent || n,
                    r = this._project;
                if (8 & e && (this._bounds = this._position = this._decomposed = this._globalMatrix = this._currentPath = t), i && 40 & e && y._clearBoundsCache(i), 2 & e && y._clearBoundsCache(this), r && (1 & e && (r._needsUpdate = !0), r._changes)) {
                    var s = r._changesById[this._id];
                    s ? s.flags |= e : (s = {
                        item: this,
                        flags: e
                    }, r._changesById[this._id] = s, r._changes.push(s))
                }
                n && n._changed(e)
            },
            set: function(t) {
                return t && this._set(t), this
            },
            getId: function() {
                return this._id
            },
            getClassName: function() {
                return this._class
            },
            getName: function() {
                return this._name
            },
            setName: function(e, n) {
                if (this._name && this._removeNamed(), e === +e + "") throw Error("Names consisting only of numbers are not supported.");
                var i = this._parent;
                if (e && i) {
                    for (var r = i._children, s = i._namedChildren, o = e, a = 1; n && r[e];) e = o + " " + a++;
                    (s[e] = s[e] || []).push(this), r[e] = this
                }
                this._name = e || t, this._changed(128)
            },
            getStyle: function() {
                return this._style
            },
            setStyle: function(t) {
                this.getStyle().set(t)
            }
        }, e.each(["locked", "visible", "blendMode", "opacity", "guide"], function(t) {
            var n = e.capitalize(t),
                t = "_" + t;
            this["get" + n] = function() {
                return this[t]
            }, this["set" + n] = function(e) {
                e != this[t] && (this[t] = e, this._changed("_locked" === t ? 128 : 129))
            }
        }, {}), {
            beans: !0,
            _locked: !1,
            _visible: !0,
            _blendMode: "normal",
            _opacity: 1,
            _guide: !1,
            isSelected: function() {
                if (this._selectChildren)
                    for (var t = this._children, e = 0, n = t.length; n > e; e++)
                        if (t[e].isSelected()) return !0;
                return this._selected
            },
            setSelected: function(t, e) {
                if (!e && this._selectChildren)
                    for (var n = this._children, i = 0, r = n.length; r > i; i++) n[i].setSelected(t);
                (t = !!t) ^ this._selected && (this._selected = t, this._project._updateSelection(this), this._changed(129))
            },
            _selected: !1,
            isFullySelected: function() {
                var t = this._children;
                if (t && this._selected) {
                    for (var e = 0, n = t.length; n > e; e++)
                        if (!t[e].isFullySelected()) return !1;
                    return !0
                }
                return this._selected
            },
            setFullySelected: function(t) {
                var e = this._children;
                if (e)
                    for (var n = 0, i = e.length; i > n; n++) e[n].setFullySelected(t);
                this.setSelected(t, !0)
            },
            isClipMask: function() {
                return this._clipMask
            },
            setClipMask: function(t) {
                this._clipMask != (t = !!t) && (this._clipMask = t, t && (this.setFillColor(null), this.setStrokeColor(null)), this._changed(129), this._parent && this._parent._changed(1024))
            },
            _clipMask: !1,
            getData: function() {
                return this._data || (this._data = {}), this._data
            },
            setData: function(t) {
                this._data = t
            },
            getPosition: function(t) {
                var e = this._position,
                    n = t ? u : h;
                if (!e) {
                    var i = this._pivot;
                    e = this._position = i ? this._matrix._transformPoint(i) : this.getBounds().getCenter(!0)
                }
                return new n(e.x, e.y, this, "setPosition")
            },
            setPosition: function() {
                this.translate(u.read(arguments).subtract(this.getPosition(!0)))
            },
            getPivot: function(t) {
                var e = this._pivot;
                if (e) {
                    var n = t ? u : h;
                    e = new n(e.x, e.y, this, "setPivot")
                }
                return e
            },
            setPivot: function() {
                this._pivot = u.read(arguments), this._position = t
            },
            _pivot: null,
            getRegistration: "#getPivot",
            setRegistration: "#setPivot"
        }, e.each(["bounds", "strokeBounds", "handleBounds", "roughBounds", "internalBounds", "internalRoughBounds"], function(t) {
            var n = "get" + e.capitalize(t),
                i = t.match(/^internal(.*)$/),
                r = i ? "get" + i[1] : null;
            this[n] = function(e) {
                var i = this._boundsGetter,
                    s = !r && ("string" == typeof i ? i : i && i[n]) || n,
                    o = this._getCachedBounds(s, e, this, r);
                return "bounds" === t ? new p(o.x, o.y, o.width, o.height, this, "setBounds") : o
            }
        }, {
            beans: !0,
            _getBounds: function(t, e, n) {
                var i = this._children;
                if (!i || 0 == i.length) return new f;
                for (var r = 1 / 0, s = -r, o = r, a = s, u = 0, h = i.length; h > u; u++) {
                    var c = i[u];
                    if (c._visible && !c.isEmpty()) {
                        var l = c._getCachedBounds(t, e && e.chain(c._matrix), n);
                        r = Math.min(l.x, r), o = Math.min(l.y, o), s = Math.max(l.x + l.width, s), a = Math.max(l.y + l.height, a)
                    }
                }
                return isFinite(r) ? new f(r, o, s - r, a - o) : new f
            },
            setBounds: function() {
                var t = f.read(arguments),
                    e = this.getBounds(),
                    n = new g,
                    i = t.getCenter();
                n.translate(i), (t.width != e.width || t.height != e.height) && n.scale(0 != e.width ? t.width / e.width : 1, 0 != e.height ? t.height / e.height : 1), i = e.getCenter(), n.translate(-i.x, -i.y), this.transform(n)
            },
            _getCachedBounds: function(t, e, n, i) {
                e = e && e.orNullIfIdentity();
                var r = i ? null : this._matrix.orNullIfIdentity(),
                    s = (!e || e.equals(r)) && t,
                    o = this._parent || this._parentSymbol;
                if (o) {
                    var a = n._id,
                        u = o._boundsCache = o._boundsCache || {
                            ids: {},
                            list: []
                        };
                    u.ids[a] || (u.list.push(n), u.ids[a] = n)
                }
                if (s && this._bounds && this._bounds[s]) return this._bounds[s].clone();
                var h = this._getBounds(i || t, e || r, n);
                if (s) {
                    this._bounds || (this._bounds = {});
                    var c = this._bounds[s] = h.clone();
                    c._internal = !!i
                }
                return h
            },
            statics: {
                _clearBoundsCache: function(e) {
                    var n = e._boundsCache;
                    if (n) {
                        e._bounds = e._position = e._boundsCache = t;
                        for (var i = 0, r = n.list, s = r.length; s > i; i++) {
                            var o = r[i];
                            o !== e && (o._bounds = o._position = t, o._boundsCache && y._clearBoundsCache(o))
                        }
                    }
                }
            }
        }), {
            beans: !0,
            _decompose: function() {
                return this._decomposed = this._matrix.decompose()
            },
            getRotation: function() {
                var t = this._decomposed || this._decompose();
                return t && t.rotation
            },
            setRotation: function(t) {
                var e = this.getRotation();
                if (null != e && null != t) {
                    var n = this._decomposed;
                    this.rotate(t - e), n.rotation = t, this._decomposed = n
                }
            },
            getScaling: function(t) {
                var e = this._decomposed || this._decompose(),
                    n = e && e.scaling,
                    i = t ? u : h;
                return n && new i(n.x, n.y, this, "setScaling")
            },
            setScaling: function() {
                var t = this.getScaling();
                if (t) {
                    var e = u.read(arguments, 0, {
                            clone: !0
                        }),
                        n = this._decomposed;
                    this.scale(e.x / t.x, e.y / t.y), n.scaling = e, this._decomposed = n
                }
            },
            getMatrix: function() {
                return this._matrix
            },
            setMatrix: function(t) {
                this._matrix.initialize(t), this._applyMatrix ? this.transform(null, !0) : this._changed(9)
            },
            getGlobalMatrix: function(t) {
                var e = this._globalMatrix,
                    n = this._project._updateVersion;
                if (e && e._updateVersion !== n && (e = null), !e) {
                    e = this._globalMatrix = this._matrix.clone();
                    var i = this._parent;
                    i && e.preConcatenate(i.getGlobalMatrix(!0)), e._updateVersion = n
                }
                return t ? e : e.clone()
            },
            getApplyMatrix: function() {
                return this._applyMatrix
            },
            setApplyMatrix: function(t) {
                (this._applyMatrix = this._canApplyMatrix && !!t) && this.transform(null, !0)
            },
            getTransformContent: "#getApplyMatrix",
            setTransformContent: "#setApplyMatrix"
        }, {
            getProject: function() {
                return this._project
            },
            _setProject: function(t, e) {
                if (this._project !== t) {
                    this._project && this._installEvents(!1), this._project = t;
                    for (var n = this._children, i = 0, r = n && n.length; r > i; i++) n[i]._setProject(t);
                    e = !0
                }
                e && this._installEvents(!0)
            },
            getView: function() {
                return this._project.getView()
            },
            _installEvents: function he(t) {
                he.base.call(this, t);
                for (var e = this._children, n = 0, i = e && e.length; i > n; n++) e[n]._installEvents(t)
            },
            getLayer: function() {
                for (var t = this; t = t._parent;)
                    if (t instanceof x) return t;
                return null
            },
            getParent: function() {
                return this._parent
            },
            setParent: function(t) {
                return t.addChild(this)
            },
            getChildren: function() {
                return this._children
            },
            setChildren: function(t) {
                this.removeChildren(), this.addChildren(t)
            },
            getFirstChild: function() {
                return this._children && this._children[0] || null
            },
            getLastChild: function() {
                return this._children && this._children[this._children.length - 1] || null
            },
            getNextSibling: function() {
                return this._parent && this._parent._children[this._index + 1] || null
            },
            getPreviousSibling: function() {
                return this._parent && this._parent._children[this._index - 1] || null
            },
            getIndex: function() {
                return this._index
            },
            equals: function(t) {
                return t === this || t && this._class === t._class && this._style.equals(t._style) && this._matrix.equals(t._matrix) && this._locked === t._locked && this._visible === t._visible && this._blendMode === t._blendMode && this._opacity === t._opacity && this._clipMask === t._clipMask && this._guide === t._guide && this._equals(t) || !1
            },
            _equals: function(t) {
                return e.equals(this._children, t._children)
            },
            clone: function(t) {
                return this._clone(new this.constructor(y.NO_INSERT), t)
            },
            _clone: function(n, i) {
                if (n.setStyle(this._style), this._children)
                    for (var r = 0, s = this._children.length; s > r; r++) n.addChild(this._children[r].clone(!1), !0);
                (i || i === t) && n.insertAbove(this);
                for (var o = ["_locked", "_visible", "_blendMode", "_opacity", "_clipMask", "_guide", "_applyMatrix"], r = 0, s = o.length; s > r; r++) {
                    var a = o[r];
                    this.hasOwnProperty(a) && (n[a] = this[a])
                }
                return n._matrix.initialize(this._matrix), n._data = this._data ? e.clone(this._data) : null, n.setSelected(this._selected), this._name && n.setName(this._name, !0), n
            },
            copyTo: function(t) {
                return t.addChild(this.clone(!1))
            },
            rasterize: function(t) {
                var n = this.getStrokeBounds(),
                    i = (t || this.getView().getResolution()) / 72,
                    r = n.getTopLeft().floor(),
                    s = n.getBottomRight().ceil(),
                    o = new c(s.subtract(r)),
                    a = Q.getCanvas(o.multiply(i)),
                    u = a.getContext("2d"),
                    h = (new g).scale(i).translate(r.negate());
                u.save(), h.applyToContext(u), this.draw(u, new e({
                    matrices: [h]
                })), u.restore();
                var l = new C(y.NO_INSERT);
                return l.setCanvas(a), l.transform((new g).translate(r.add(o.divide(2))).scale(1 / i)), l.insertAbove(this), l
            },
            contains: function() {
                return !!this._contains(this._matrix._inverseTransform(u.read(arguments)))
            },
            _contains: function(t) {
                if (this._children) {
                    for (var e = this._children.length - 1; e >= 0; e--)
                        if (this._children[e].contains(t)) return !0;
                    return !1
                }
                return t.isInside(this.getInternalBounds())
            },
            isInside: function() {
                return f.read(arguments).contains(this.getBounds())
            },
            _asPathItem: function() {
                return new M.Rectangle({
                    rectangle: this.getInternalBounds(),
                    matrix: this._matrix,
                    insert: !1
                })
            },
            intersects: function(t, e) {
                return t instanceof y ? this._asPathItem().getIntersections(t._asPathItem(), e || t._matrix).length > 0 : !1
            },
            hitTest: function() {
                return this._hitTest(u.read(arguments), T.getOptions(e.read(arguments)))
            },
            _hitTest: function(n, i) {
                function r(i, r) {
                    var s = p["get" + r]();
                    return n.subtract(s).divide(h).length <= 1 ? new T(i, f, {
                        name: e.hyphenate(r),
                        point: s
                    }) : t
                }
                if (this._locked || !this._visible || this._guide && !i.guides || this.isEmpty()) return null;
                var s = this._matrix,
                    o = i._totalMatrix,
                    a = this.getView(),
                    u = i._totalMatrix = o ? o.chain(s) : this.getGlobalMatrix().preConcatenate(a._matrix),
                    h = i._tolerancePadding = new c(M._getPenPadding(1, u.inverted())).multiply(Math.max(i.tolerance, 1e-5));
                if (n = s._inverseTransform(n), !this._children && !this.getInternalRoughBounds().expand(h.multiply(2))._containsPoint(n)) return null;
                var l, d = !(i.guides && !this._guide || i.selected && !this._selected || i.type && i.type !== e.hyphenate(this._class) || i.class && !(this instanceof i.class)),
                    f = this;
                if (d && (i.center || i.bounds) && this._parent) {
                    var p = this.getInternalBounds();
                    if (i.center && (l = r("center", "Center")), !l && i.bounds)
                        for (var g = ["TopLeft", "TopRight", "BottomLeft", "BottomRight", "LeftCenter", "TopCenter", "RightCenter", "BottomCenter"], m = 0; 8 > m && !l; m++) l = r("bounds", g[m])
                }
                var v = !l && this._children;
                if (v)
                    for (var _ = this._getChildHitTestOptions(i), m = v.length - 1; m >= 0 && !l; m--) l = v[m]._hitTest(n, _);
                return !l && d && (l = this._hitTestSelf(n, i)), l && l.point && (l.point = s.transform(l.point)), i._totalMatrix = o, l
            },
            _getChildHitTestOptions: function(t) {
                return t
            },
            _hitTestSelf: function(e, n) {
                return n.fill && this.hasFill() && this._contains(e) ? new T("fill", this) : t
            },
            matches: function(t, n) {
                function i(t, n) {
                    for (var r in t)
                        if (t.hasOwnProperty(r)) {
                            var s = t[r],
                                o = n[r];
                            if (e.isPlainObject(s) && e.isPlainObject(o)) {
                                if (!i(s, o)) return !1
                            } else if (!e.equals(s, o)) return !1
                        }
                    return !0
                }
                if ("object" == typeof t) {
                    for (var r in t)
                        if (t.hasOwnProperty(r) && !this.matches(r, t[r])) return !1
                } else {
                    var s = /^(empty|editable)$/.test(t) ? this["is" + e.capitalize(t)]() : "type" === t ? e.hyphenate(this._class) : this[t];
                    if (/^(constructor|class)$/.test(t)) {
                        if (!(this instanceof n)) return !1
                    } else if (n instanceof RegExp) {
                        if (!n.test(s)) return !1
                    } else if ("function" == typeof n) {
                        if (!n(s)) return !1
                    } else if (e.isPlainObject(n)) {
                        if (!i(n, s)) return !1
                    } else if (!e.equals(s, n)) return !1
                }
                return !0
            },
            getItems: function(t) {
                return y._getItems(this._children, t, this._matrix)
            },
            getItem: function(t) {
                return y._getItems(this._children, t, this._matrix, null, !0)[0] || null
            },
            statics: {
                _getItems: function ce(t, n, i, r, s) {
                    if (!r) {
                        var o = n.overlapping,
                            a = n.inside,
                            u = o || a,
                            h = u && f.read([u]);
                        r = {
                            items: [],
                            inside: h,
                            overlapping: o && new M.Rectangle({
                                rectangle: h,
                                insert: !1
                            })
                        }, u && (n = e.set({}, n, {
                            inside: !0,
                            overlapping: !0
                        }))
                    }
                    var c = r.items,
                        a = r.inside,
                        o = r.overlapping;
                    i = a && (i || new g);
                    for (var l = 0, d = t && t.length; d > l; l++) {
                        var p = t[l],
                            m = i && i.chain(p._matrix),
                            v = !0;
                        if (a) {
                            var u = p.getBounds(m);
                            if (!a.intersects(u)) continue;
                            a && a.contains(u) || o && o.intersects(p, m) || (v = !1)
                        }
                        if (v && p.matches(n) && (c.push(p), s)) break;
                        if (ce(p._children, n, m, r, s), s && c.length > 0) break
                    }
                    return c
                }
            }
        }, {
            importJSON: function(t) {
                var n = e.importJSON(t, this);
                return n !== this ? this.addChild(n) : n
            },
            addChild: function(e, n) {
                return this.insertChild(t, e, n)
            },
            insertChild: function(t, e, n) {
                var i = this.insertChildren(t, [e], n);
                return i && i[0]
            },
            addChildren: function(t, e) {
                return this.insertChildren(this._children.length, t, e)
            },
            insertChildren: function(t, n, i, r) {
                var s = this._children;
                if (s && n && n.length > 0) {
                    n = Array.prototype.slice.apply(n);
                    for (var o = n.length - 1; o >= 0; o--) {
                        var a = n[o];
                        !r || a instanceof r ? a._remove(!1, !0) : n.splice(o, 1)
                    }
                    e.splice(s, n, t, 0);
                    for (var u = this._project, h = u && u._changes, o = 0, c = n.length; c > o; o++) {
                        var a = n[o];
                        a._parent = this, a._setProject(this._project, !0), a._name && a.setName(a._name), h && this._changed(5)
                    }
                    this._changed(11)
                } else n = null;
                return n
            },
            _insert: function(t, e, n) {
                if (!e._parent) return null;
                var i = e._index + (t ? 1 : 0);
                return e._parent === this._parent && i > this._index && i--, e._parent.insertChild(i, this, n)
            },
            insertAbove: function(t, e) {
                return this._insert(!0, t, e)
            },
            insertBelow: function(t, e) {
                return this._insert(!1, t, e)
            },
            sendToBack: function() {
                return this._parent.insertChild(0, this)
            },
            bringToFront: function() {
                return this._parent.addChild(this)
            },
            appendTop: "#addChild",
            appendBottom: function(t) {
                return this.insertChild(0, t)
            },
            moveAbove: "#insertAbove",
            moveBelow: "#insertBelow",
            reduce: function() {
                if (this._children && 1 === this._children.length) {
                    var t = this._children[0].reduce();
                    return t.insertAbove(this), t.setStyle(this._style), this.remove(), t
                }
                return this
            },
            _removeNamed: function() {
                var t = this._parent;
                if (t) {
                    var e = t._children,
                        n = t._namedChildren,
                        i = this._name,
                        r = n[i],
                        s = r ? r.indexOf(this) : -1; - 1 !== s && (e[i] == this && delete e[i], r.splice(s, 1), r.length ? e[i] = r[r.length - 1] : delete n[i])
                }
            },
            _remove: function(t, n) {
                var i = this._parent;
                if (i) {
                    if (this._name && this._removeNamed(), null != this._index && e.splice(i._children, null, this._index, 1), this._installEvents(!1), t) {
                        var r = this._project;
                        r && r._changes && this._changed(5)
                    }
                    return n && i._changed(11), this._parent = null, !0
                }
                return !1
            },
            remove: function() {
                return this._remove(!0, !0)
            },
            replaceWith: function(t) {
                var e = t && t.insertBelow(this);
                return e && this.remove(), e
            },
            removeChildren: function(t, n) {
                if (!this._children) return null;
                t = t || 0, n = e.pick(n, this._children.length);
                for (var i = e.splice(this._children, null, t, n - t), r = i.length - 1; r >= 0; r--) i[r]._remove(!0, !1);
                return i.length > 0 && this._changed(11), i
            },
            clear: "#removeChildren",
            reverseChildren: function() {
                if (this._children) {
                    this._children.reverse();
                    for (var t = 0, e = this._children.length; e > t; t++) this._children[t]._index = t;
                    this._changed(11)
                }
            },
            isEmpty: function() {
                return !this._children || 0 === this._children.length
            },
            isEditable: function() {
                for (var t = this; t;) {
                    if (!t._visible || t._locked) return !1;
                    t = t._parent
                }
                return !0
            },
            hasFill: function() {
                return this.getStyle().hasFill()
            },
            hasStroke: function() {
                return this.getStyle().hasStroke()
            },
            hasShadow: function() {
                return this.getStyle().hasShadow()
            },
            _getOrder: function(t) {
                function e(t) {
                    var e = [];
                    do e.unshift(t); while (t = t._parent);
                    return e
                }
                for (var n = e(this), i = e(t), r = 0, s = Math.min(n.length, i.length); s > r; r++)
                    if (n[r] != i[r]) return n[r]._index < i[r]._index ? 1 : -1;
                return 0
            },
            hasChildren: function() {
                return this._children && this._children.length > 0
            },
            isInserted: function() {
                return this._parent ? this._parent.isInserted() : !1
            },
            isAbove: function(t) {
                return -1 === this._getOrder(t)
            },
            isBelow: function(t) {
                return 1 === this._getOrder(t)
            },
            isParent: function(t) {
                return this._parent === t
            },
            isChild: function(t) {
                return t && t._parent === this
            },
            isDescendant: function(t) {
                for (var e = this; e = e._parent;)
                    if (e == t) return !0;
                return !1
            },
            isAncestor: function(t) {
                return t ? t.isDescendant(this) : !1
            },
            isGroupedWith: function(t) {
                for (var e = this._parent; e;) {
                    if (e._parent && /^(Group|Layer|CompoundPath)$/.test(e._class) && t.isDescendant(e)) return !0;
                    e = e._parent
                }
                return !1
            },
            translate: function() {
                var t = new g;
                return this.transform(t.translate.apply(t, arguments))
            },
            rotate: function(t) {
                return this.transform((new g).rotate(t, u.read(arguments, 1, {
                    readNull: !0
                }) || this.getPosition(!0)))
            }
        }, e.each(["scale", "shear", "skew"], function(t) {
            this[t] = function() {
                var e = u.read(arguments),
                    n = u.read(arguments, 0, {
                        readNull: !0
                    });
                return this.transform((new g)[t](e, n || this.getPosition(!0)))
            }
        }, {}), {
            transform: function(t, e) {
                t && t.isIdentity() && (t = null);
                var n = this._matrix,
                    i = (e || this._applyMatrix) && (!n.isIdentity() || t);
                if (!t && !i) return this;
                if (t && n.preConcatenate(t), i = i && this._transformContent(n)) {
                    var r = this._pivot,
                        s = this._style,
                        o = s.getFillColor(!0),
                        a = s.getStrokeColor(!0);
                    r && n._transformPoint(r, r, !0), o && o.transform(n), a && a.transform(n), n.reset(!0)
                }
                var u = this._bounds,
                    h = this._position;
                this._changed(9);
                var c = u && t && t.decompose();
                if (c && !c.shearing && 0 === c.rotation % 90) {
                    for (var l in u) {
                        var d = u[l];
                        (i || !d._internal) && t._transformBounds(d, d)
                    }
                    var f = this._boundsGetter,
                        d = u[f && f.getBounds || f || "getBounds"];
                    d && (this._position = d.getCenter(!0)), this._bounds = u
                } else t && h && (this._position = t._transformPoint(h, h));
                return this
            },
            _transformContent: function(t) {
                var e = this._children;
                if (e) {
                    for (var n = 0, i = e.length; i > n; n++) e[n].transform(t, !0);
                    return !0
                }
            },
            globalToLocal: function() {
                return this.getGlobalMatrix(!0)._inverseTransform(u.read(arguments))
            },
            localToGlobal: function() {
                return this.getGlobalMatrix(!0)._transformPoint(u.read(arguments))
            },
            parentToLocal: function() {
                return this._matrix._inverseTransform(u.read(arguments))
            },
            localToParent: function() {
                return this._matrix._transformPoint(u.read(arguments))
            },
            fitBounds: function(t, e) {
                t = f.read(arguments);
                var n = this.getBounds(),
                    i = n.height / n.width,
                    r = t.height / t.width,
                    s = (e ? i > r : r > i) ? t.width / n.width : t.height / n.height,
                    o = new f(new u, new c(n.width * s, n.height * s));
                o.setCenter(t.getCenter()), this.setBounds(o)
            },
            _setStyles: function(t) {
                var e = this._style,
                    n = e.getFillColor(),
                    i = e.getStrokeColor(),
                    r = e.getShadowColor();
                if (n && (t.fillStyle = n.toCanvasStyle(t)), i) {
                    var s = e.getStrokeWidth();
                    if (s > 0) {
                        t.strokeStyle = i.toCanvasStyle(t), t.lineWidth = s;
                        var o = e.getStrokeJoin(),
                            a = e.getStrokeCap(),
                            u = e.getMiterLimit();
                        if (o && (t.lineJoin = o), a && (t.lineCap = a), u && (t.miterLimit = u), paper.support.nativeDash) {
                            var h = e.getDashArray(),
                                c = e.getDashOffset();
                            h && h.length && ("setLineDash" in t ? (t.setLineDash(h), t.lineDashOffset = c) : (t.mozDash = h, t.mozDashOffset = c))
                        }
                    }
                }
                if (r) {
                    var l = e.getShadowBlur();
                    if (l > 0) {
                        t.shadowColor = r.toCanvasStyle(t), t.shadowBlur = l;
                        var d = this.getShadowOffset();
                        t.shadowOffsetX = d.x, t.shadowOffsetY = d.y
                    }
                }
            },
            draw: function(t, e, n) {
                function i(t) {
                    return o ? o.chain(t) : t
                }
                var r = this._updateVersion = this._project._updateVersion;
                if (this._visible && 0 !== this._opacity) {
                    var s = e.matrices,
                        o = e.viewMatrix,
                        a = this._matrix,
                        u = s[s.length - 1].chain(a);
                    if (u.isInvertible()) {
                        s.push(u), e.updateMatrix && (u._updateVersion = r, this._globalMatrix = u);
                        var h, c, l, d = this._blendMode,
                            f = this._opacity,
                            p = "normal" === d,
                            g = K.nativeModes[d],
                            m = p && 1 === f || e.dontStart || e.clip || (g || p && 1 > f) && this._canComposite(),
                            v = e.pixelRatio;
                        if (!m) {
                            var _ = this.getStrokeBounds(i(u));
                            if (!_.width || !_.height) return;
                            l = e.offset, c = e.offset = _.getTopLeft().floor(), h = t, t = Q.getContext(_.getSize().ceil().add(1).multiply(v)), 1 !== v && t.scale(v, v)
                        }
                        t.save();
                        var y = n ? n.chain(a) : !this.getStrokeScaling(!0) && i(u),
                            w = !m && e.clipItem,
                            x = !y || w;
                        if (m ? (t.globalAlpha = f, g && (t.globalCompositeOperation = d)) : x && t.translate(-c.x, -c.y), x && (m ? a : i(u)).applyToContext(t), w && e.clipItem.draw(t, e.extend({
                                clip: !0
                            })), y) {
                            t.setTransform(v, 0, 0, v, 0, 0);
                            var b = e.offset;
                            b && t.translate(-b.x, -b.y)
                        }
                        this._draw(t, e, y), t.restore(), s.pop(), e.clip && !e.dontFinish && t.clip(), m || (K.process(d, t, h, f, c.subtract(l).multiply(v)), Q.release(t), e.offset = l)
                    }
                }
            },
            _isUpdated: function(t) {
                var e = this._parent;
                if (e instanceof L) return e._isUpdated(t);
                var n = this._updateVersion === t;
                return !n && e && e._visible && e._isUpdated(t) && (this._updateVersion = t, n = !0), n
            },
            _drawSelection: function(t, e, n, i, r) {
                if ((this._drawSelected || this._boundsSelected) && this._isUpdated(r)) {
                    var s = this.getSelectedColor(!0) || this.getLayer().getSelectedColor(!0),
                        o = e.chain(this.getGlobalMatrix(!0));
                    if (t.strokeStyle = t.fillStyle = s ? s.toCanvasStyle(t) : "#009dec", this._drawSelected && this._drawSelected(t, o, i), this._boundsSelected) {
                        var a = n / 2;
                        coords = o._transformCorners(this.getInternalBounds()), t.beginPath();
                        for (var u = 0; 8 > u; u++) t[0 === u ? "moveTo" : "lineTo"](coords[u], coords[++u]);
                        t.closePath(), t.stroke();
                        for (var u = 0; 8 > u; u++) t.fillRect(coords[u] - a, coords[++u] - a, n, n)
                    }
                }
            },
            _canComposite: function() {
                return !1
            }
        }, e.each(["down", "drag", "up", "move"], function(t) {
            this["removeOn" + e.capitalize(t)] = function() {
                var e = {};
                return e[t] = !0, this.removeOn(e)
            }
        }, {
            removeOn: function(t) {
                for (var e in t)
                    if (t[e]) {
                        var n = "mouse" + e,
                            i = this._project,
                            r = i._removeSets = i._removeSets || {};
                        r[n] = r[n] || {}, r[n][this._id] = this
                    }
                return this
            }
        })),
        w = y.extend({
            _class: "Group",
            _selectChildren: !0,
            _serializeFields: {
                children: []
            },
            initialize: function(t) {
                this._children = [], this._namedChildren = {}, this._initialize(t) || this.addChildren(Array.isArray(t) ? t : arguments)
            },
            _changed: function le(e) {
                le.base.call(this, e), 1026 & e && (this._clipItem = t)
            },
            _getClipItem: function() {
                var e = this._clipItem;
                if (e === t) {
                    e = null;
                    for (var n = 0, i = this._children.length; i > n; n++) {
                        var r = this._children[n];
                        if (r._clipMask) {
                            e = r;
                            break
                        }
                    }
                    this._clipItem = e
                }
                return e
            },
            isClipped: function() {
                return !!this._getClipItem()
            },
            setClipped: function(t) {
                var e = this.getFirstChild();
                e && e.setClipMask(t)
            },
            _draw: function(t, e) {
                var n = e.clip,
                    i = !n && this._getClipItem(),
                    r = !0;
                if (e = e.extend({
                        clipItem: i,
                        clip: !1
                    }), n ? this._currentPath ? (t.currentPath = this._currentPath, r = !1) : (t.beginPath(), e.dontStart = e.dontFinish = !0) : i && i.draw(t, e.extend({
                        clip: !0
                    })), r)
                    for (var s = 0, o = this._children.length; o > s; s++) {
                        var a = this._children[s];
                        a !== i && a.draw(t, e)
                    }
                n && (this._currentPath = t.currentPath)
            }
        }),
        x = w.extend({
            _class: "Layer",
            initialize: function(n) {
                var i = e.isPlainObject(n) ? new e(n) : {
                        children: Array.isArray(n) ? n : arguments
                    },
                    r = i.insert;
                i.insert = !1, w.call(this, i), (r || r === t) && (this._project.addChild(this), this.activate())
            },
            _remove: function de(t) {
                if (this._parent) return de.base.call(this, t);
                if (null != this._index) {
                    var n = this._project;
                    return n._activeLayer === this && (n._activeLayer = this.getNextSibling() || this.getPreviousSibling()), e.splice(n.layers, null, this._index, 1), this._installEvents(!1), n._needsUpdate = !0, !0
                }
                return !1
            },
            getNextSibling: function fe() {
                return this._parent ? fe.base.call(this) : this._project.layers[this._index + 1] || null
            },
            getPreviousSibling: function pe() {
                return this._parent ? pe.base.call(this) : this._project.layers[this._index - 1] || null
            },
            isInserted: function ge() {
                return this._parent ? ge.base.call(this) : null != this._index
            },
            activate: function() {
                this._project._activeLayer = this
            },
            _insert: function me(t, n, i) {
                return n instanceof x && !n._parent ? (this._remove(!0, !0), e.splice(n._project.layers, [this], n._index + (t ? 1 : 0), 0), this._setProject(n._project, !0), this) : me.base.call(this, t, n, i)
            }
        }),
        b = y.extend({
            _class: "Shape",
            _applyMatrix: !1,
            _canApplyMatrix: !1,
            _boundsSelected: !0,
            _serializeFields: {
                type: null,
                size: null,
                radius: null
            },
            initialize: function(t) {
                this._initialize(t)
            },
            _equals: function(t) {
                return this._type === t._type && this._size.equals(t._size) && e.equals(this._radius, t._radius)
            },
            clone: function(t) {
                var e = new b(y.NO_INSERT);
                return e.setType(this._type), e.setSize(this._size), e.setRadius(this._radius), this._clone(e, t)
            },
            getType: function() {
                return this._type
            },
            setType: function(t) {
                this._type = t
            },
            getShape: "#getType",
            setShape: "#setType",
            getSize: function() {
                var t = this._size;
                return new d(t.width, t.height, this, "setSize")
            },
            setSize: function() {
                var t = c.read(arguments);
                if (this._size) {
                    if (!this._size.equals(t)) {
                        var e = this._type,
                            n = t.width,
                            i = t.height;
                        if ("rectangle" === e) {
                            var r = c.min(this._radius, t.divide(2));
                            this._radius.set(r.width, r.height)
                        } else "circle" === e ? (n = i = (n + i) / 2, this._radius = n / 2) : "ellipse" === e && this._radius.set(n / 2, i / 2);
                        this._size.set(n, i), this._changed(9)
                    }
                } else this._size = t.clone()
            },
            getRadius: function() {
                var t = this._radius;
                return "circle" === this._type ? t : new d(t.width, t.height, this, "setRadius")
            },
            setRadius: function(t) {
                var e = this._type;
                if ("circle" === e) {
                    if (t === this._radius) return;
                    var n = 2 * t;
                    this._radius = t, this._size.set(n, n)
                } else if (t = c.read(arguments), this._radius) {
                    if (this._radius.equals(t)) return;
                    if (this._radius.set(t.width, t.height), "rectangle" === e) {
                        var n = c.max(this._size, t.multiply(2));
                        this._size.set(n.width, n.height)
                    } else "ellipse" === e && this._size.set(2 * t.width, 2 * t.height)
                } else this._radius = t.clone();
                this._changed(9)
            },
            isEmpty: function() {
                return !1
            },
            toPath: function(n) {
                var i = new(M[e.capitalize(this._type)])({
                    center: new u,
                    size: this._size,
                    radius: this._radius,
                    insert: !1
                });
                return i.setStyle(this._style), i.transform(this._matrix), (n || n === t) && i.insertAbove(this), i
            },
            _draw: function(t, e, n) {
                var i = this._style,
                    r = i.hasFill(),
                    s = i.hasStroke(),
                    o = e.dontFinish || e.clip,
                    a = !n;
                if (r || s || o) {
                    var u = this._type,
                        h = this._radius,
                        c = "circle" === u;
                    if (e.dontStart || t.beginPath(), a && c) t.arc(0, 0, h, 0, 2 * Math.PI, !0);
                    else {
                        var l = c ? h : h.width,
                            d = c ? h : h.height,
                            f = this._size,
                            p = f.width,
                            g = f.height;
                        if (a && "rect" === u && 0 === l && 0 === d) t.rect(-p / 2, -g / 2, p, g);
                        else {
                            var m = p / 2,
                                v = g / 2,
                                _ = .44771525016920644,
                                y = l * _,
                                w = d * _,
                                x = [-m, -v + d, -m, -v + w, -m + y, -v, -m + l, -v, m - l, -v, m - y, -v, m, -v + w, m, -v + d, m, v - d, m, v - w, m - y, v, m - l, v, -m + l, v, -m + y, v, -m, v - w, -m, v - d];
                            n && n.transform(x, x, 32), t.moveTo(x[0], x[1]), t.bezierCurveTo(x[2], x[3], x[4], x[5], x[6], x[7]), m !== l && t.lineTo(x[8], x[9]), t.bezierCurveTo(x[10], x[11], x[12], x[13], x[14], x[15]), v !== d && t.lineTo(x[16], x[17]), t.bezierCurveTo(x[18], x[19], x[20], x[21], x[22], x[23]), m !== l && t.lineTo(x[24], x[25]), t.bezierCurveTo(x[26], x[27], x[28], x[29], x[30], x[31])
                        }
                    }
                    t.closePath()
                }
                o || !r && !s || (this._setStyles(t), r && (t.fill(i.getWindingRule()), t.shadowColor = "rgba(0,0,0,0)"), s && t.stroke())
            },
            _canComposite: function() {
                return !(this.hasFill() && this.hasStroke())
            },
            _getBounds: function(t, e) {
                var n = new f(this._size).setCenter(0, 0);
                return "getBounds" !== t && this.hasStroke() && (n = n.expand(this.getStrokeWidth())), e ? e._transformBounds(n) : n
            }
        }, new function() {
            function t(t, e, n) {
                var i = t._radius;
                if (!i.isZero())
                    for (var r = t._size.divide(2), s = 0; 4 > s; s++) {
                        var o = new u(1 & s ? 1 : -1, s > 1 ? 1 : -1),
                            a = o.multiply(r),
                            h = a.subtract(o.multiply(i)),
                            c = new f(a, h);
                        if ((n ? c.expand(n) : c).contains(e)) return h
                    }
            }

            function e(t, e) {
                var n = t.getAngleInRadians(),
                    i = 2 * e.width,
                    r = 2 * e.height,
                    s = i * Math.sin(n),
                    o = r * Math.cos(n);
                return i * r / (2 * Math.sqrt(s * s + o * o))
            }
            return {
                _contains: function n(e) {
                    if ("rectangle" === this._type) {
                        var i = t(this, e);
                        return i ? e.subtract(i).divide(this._radius).getLength() <= 1 : n.base.call(this, e)
                    }
                    return e.divide(this.size).getLength() <= .5
                },
                _hitTestSelf: function i(n, r) {
                    var s = !1;
                    if (this.hasStroke()) {
                        var o = this._type,
                            a = this._radius,
                            u = this.getStrokeWidth() + 2 * r.tolerance;
                        if ("rectangle" === o) {
                            var h = t(this, n, u);
                            if (h) {
                                var c = n.subtract(h);
                                s = 2 * Math.abs(c.getLength() - e(c, a)) <= u
                            } else {
                                var l = new f(this._size).setCenter(0, 0),
                                    d = l.expand(u),
                                    p = l.expand(-u);
                                s = d._containsPoint(n) && !p._containsPoint(n)
                            }
                        } else "ellipse" === o && (a = e(n, a)), s = 2 * Math.abs(n.getLength() - a) <= u
                    }
                    return s ? new T("stroke", this) : i.base.apply(this, arguments)
                }
            }
        }, {
            statics: new function() {
                function t(t, n, i, r, s) {
                    var o = new b(e.getNamed(s));
                    return o._type = t, o._size = i, o._radius = r, o.translate(n)
                }
                return {
                    Circle: function() {
                        var n = u.readNamed(arguments, "center"),
                            i = e.readNamed(arguments, "radius");
                        return t("circle", n, new c(2 * i), i, arguments)
                    },
                    Rectangle: function() {
                        var e = f.readNamed(arguments, "rectangle"),
                            n = c.min(c.readNamed(arguments, "radius"), e.getSize(!0).divide(2));
                        return t("rectangle", e.getCenter(!0), e.getSize(!0), n, arguments)
                    },
                    Ellipse: function() {
                        var e = b._readEllipse(arguments),
                            n = e.radius;
                        return t("ellipse", e.center, n.multiply(2), n, arguments)
                    },
                    _readEllipse: function(t) {
                        var n, i;
                        if (e.hasNamed(t, "radius")) n = u.readNamed(t, "center"), i = c.readNamed(t, "radius");
                        else {
                            var r = f.readNamed(t, "rectangle");
                            n = r.getCenter(!0), i = r.getSize(!0).divide(2)
                        }
                        return {
                            center: n,
                            radius: i
                        }
                    }
                }
            }
        }),
        C = y.extend({
            _class: "Raster",
            _applyMatrix: !1,
            _canApplyMatrix: !1,
            _boundsGetter: "getBounds",
            _boundsSelected: !0,
            _serializeFields: {
                source: null
            },
            initialize: function(e, n) {
                this._initialize(e, n !== t && u.read(arguments, 1)) || ("string" == typeof e ? this.setSource(e) : this.setImage(e)), this._size || (this._size = new c)
            },
            _equals: function(t) {
                return this.getSource() === t.getSource()
            },
            clone: function(t) {
                var e = new C(y.NO_INSERT),
                    n = this._image,
                    i = this._canvas;
                if (n) e.setImage(n);
                else if (i) {
                    var r = Q.getCanvas(this._size);
                    r.getContext("2d").drawImage(i, 0, 0), e.setCanvas(r)
                }
                return this._clone(e, t)
            },
            getSize: function() {
                var t = this._size;
                return new d(t.width, t.height, this, "setSize")
            },
            setSize: function() {
                var t = c.read(arguments);
                if (!this._size.equals(t)) {
                    var e = this.getElement();
                    this.setCanvas(Q.getCanvas(t)), e && this.getContext(!0).drawImage(e, 0, 0, t.width, t.height)
                }
            },
            getWidth: function() {
                return this._size.width
            },
            getHeight: function() {
                return this._size.height
            },
            isEmpty: function() {
                return 0 === this._size.width && 0 === this._size.height
            },
            getResolution: function() {
                var t = this._matrix,
                    e = new u(0, 0).transform(t),
                    n = new u(1, 0).transform(t).subtract(e),
                    i = new u(0, 1).transform(t).subtract(e);
                return new c(72 / n.getLength(), 72 / i.getLength())
            },
            getPpi: "#getResolution",
            getImage: function() {
                return this._image
            },
            setImage: function(t) {
                this._canvas && Q.release(this._canvas), t && t.getContext ? (this._image = null, this._canvas = t) : (this._image = t, this._canvas = null), this._size = new c(t ? t.naturalWidth || t.width : 0, t ? t.naturalHeight || t.height : 0), this._context = null, this._changed(521)
            },
            getCanvas: function() {
                if (!this._canvas) {
                    var t = Q.getContext(this._size);
                    try {
                        this._image && t.drawImage(this._image, 0, 0), this._canvas = t.canvas
                    } catch (e) {
                        Q.release(t)
                    }
                }
                return this._canvas
            },
            setCanvas: "#setImage",
            getContext: function(t) {
                return this._context || (this._context = this.getCanvas().getContext("2d")), t && (this._image = null, this._changed(513)), this._context
            },
            setContext: function(t) {
                this._context = t
            },
            getSource: function() {
                return this._image && this._image.src || this.toDataURL()
            },
            setSource: function(t) {
                function e() {
                    var t = i.getView();
                    t && (paper = t._scope, i.setImage(n), i.emit("load"), t.update())
                }
                var n, i = this;
                n = document.getElementById(t) || new Image, n.naturalWidth && n.naturalHeight ? setTimeout(e, 0) : (H.add(n, {
                    load: e
                }), n.src || (n.src = t)), this.setImage(n)
            },
            getElement: function() {
                return this._canvas || this._image
            }
        }, {
            beans: !1,
            getSubCanvas: function() {
                var t = f.read(arguments),
                    e = Q.getContext(t.getSize());
                return e.drawImage(this.getCanvas(), t.x, t.y, t.width, t.height, 0, 0, t.width, t.height), e.canvas
            },
            getSubRaster: function() {
                var t = f.read(arguments),
                    e = new C(y.NO_INSERT);
                return e.setCanvas(this.getSubCanvas(t)), e.translate(t.getCenter().subtract(this.getSize().divide(2))), e._matrix.preConcatenate(this._matrix), e.insertAbove(this), e
            },
            toDataURL: function() {
                var t = this._image && this._image.src;
                if (/^data:/.test(t)) return t;
                var e = this.getCanvas();
                return e ? e.toDataURL() : null
            },
            drawImage: function(t) {
                var e = u.read(arguments, 1);
                this.getContext(!0).drawImage(t, e.x, e.y)
            },
            getAverageColor: function(t) {
                var n, i;
                t ? t instanceof N ? (i = t, n = t.getBounds()) : t.width ? n = new f(t) : t.x && (n = new f(t.x - .5, t.y - .5, 1, 1)) : n = this.getBounds();
                var r = 32,
                    s = Math.min(n.width, r),
                    o = Math.min(n.height, r),
                    a = C._sampleContext;
                a ? a.clearRect(0, 0, r + 1, r + 1) : a = C._sampleContext = Q.getContext(new c(r)), a.save();
                var u = (new g).scale(s / n.width, o / n.height).translate(-n.x, -n.y);
                u.applyToContext(a), i && i.draw(a, new e({
                    clip: !0,
                    matrices: [u]
                })), this._matrix.applyToContext(a), a.drawImage(this.getElement(), -this._size.width / 2, -this._size.height / 2), a.restore();
                for (var h = a.getImageData(.5, .5, Math.ceil(s), Math.ceil(o)).data, l = [0, 0, 0], d = 0, p = 0, m = h.length; m > p; p += 4) {
                    var v = h[p + 3];
                    d += v, v /= 255, l[0] += h[p] * v, l[1] += h[p + 1] * v, l[2] += h[p + 2] * v
                }
                for (var p = 0; 3 > p; p++) l[p] /= d;
                return d ? O.read(l) : null
            },
            getPixel: function() {
                var t = u.read(arguments),
                    e = this.getContext().getImageData(t.x, t.y, 1, 1).data;
                return new O("rgb", [e[0] / 255, e[1] / 255, e[2] / 255], e[3] / 255)
            },
            setPixel: function() {
                var t = u.read(arguments),
                    e = O.read(arguments),
                    n = e._convert("rgb"),
                    i = e._alpha,
                    r = this.getContext(!0),
                    s = r.createImageData(1, 1),
                    o = s.data;
                o[0] = 255 * n[0], o[1] = 255 * n[1], o[2] = 255 * n[2], o[3] = null != i ? 255 * i : 255, r.putImageData(s, t.x, t.y)
            },
            createImageData: function() {
                var t = c.read(arguments);
                return this.getContext().createImageData(t.width, t.height)
            },
            getImageData: function() {
                var t = f.read(arguments);
                return t.isEmpty() && (t = new f(this._size)), this.getContext().getImageData(t.x, t.y, t.width, t.height)
            },
            setImageData: function(t) {
                var e = u.read(arguments, 1);
                this.getContext(!0).putImageData(t, e.x, e.y)
            },
            _getBounds: function(t, e) {
                var n = new f(this._size).setCenter(0, 0);
                return e ? e._transformBounds(n) : n
            },
            _hitTestSelf: function(t) {
                if (this._contains(t)) {
                    var e = this;
                    return new T("pixel", e, {
                        offset: t.add(e._size.divide(2)).round(),
                        color: {
                            get: function() {
                                return e.getPixel(this.offset)
                            }
                        }
                    })
                }
            },
            _draw: function(t) {
                var e = this.getElement();
                e && (t.globalAlpha = this._opacity, t.drawImage(e, -this._size.width / 2, -this._size.height / 2))
            },
            _canComposite: function() {
                return !0
            }
        }),
        S = y.extend({
            _class: "PlacedSymbol",
            _applyMatrix: !1,
            _canApplyMatrix: !1,
            _boundsGetter: {
                getBounds: "getStrokeBounds"
            },
            _boundsSelected: !0,
            _serializeFields: {
                symbol: null
            },
            initialize: function(e, n) {
                this._initialize(e, n !== t && u.read(arguments, 1)) || this.setSymbol(e instanceof _ ? e : new _(e))
            },
            _equals: function(t) {
                return this._symbol === t._symbol
            },
            getSymbol: function() {
                return this._symbol
            },
            setSymbol: function(t) {
                this._symbol = t, this._changed(9)
            },
            clone: function(t) {
                var e = new S(y.NO_INSERT);
                return e.setSymbol(this._symbol), this._clone(e, t)
            },
            isEmpty: function() {
                return this._symbol._definition.isEmpty()
            },
            _getBounds: function(t, e, n) {
                var i = this.symbol._definition;
                return i._getCachedBounds(t, e && e.chain(i._matrix), n)
            },
            _hitTestSelf: function(t, e) {
                var n = this._symbol._definition._hitTest(t, e);
                return n && (n.item = this), n
            },
            _draw: function(t, e) {
                this.symbol._definition.draw(t, e)
            }
        }),
        T = e.extend({
            _class: "HitResult",
            initialize: function(t, e, n) {
                this.type = t, this.item = e, n && (n.enumerable = !0, this.inject(n))
            },
            statics: {
                getOptions: function(t) {
                    return new e({
                        type: null,
                        tolerance: paper.settings.hitTolerance,
                        fill: !t,
                        stroke: !t,
                        segments: !t,
                        handles: !1,
                        ends: !1,
                        center: !1,
                        bounds: !1,
                        guides: !1,
                        selected: !1
                    }, t)
                }
            }
        }),
        k = e.extend({
            _class: "Segment",
            beans: !0,
            initialize: function(e, n, i, r, s, o) {
                var a, u, h, c = arguments.length;
                0 === c || (1 === c ? e.point ? (a = e.point, u = e.handleIn, h = e.handleOut) : a = e : 2 === c && "number" == typeof e ? a = arguments : 3 >= c ? (a = e, u = n, h = i) : (a = e !== t ? [e, n] : null, u = i !== t ? [i, r] : null, h = s !== t ? [s, o] : null)), new E(a, this, "_point"), new E(u, this, "_handleIn"), new E(h, this, "_handleOut")
            },
            _serialize: function(t) {
                return e.serialize(this.isLinear() ? this._point : [this._point, this._handleIn, this._handleOut], t, !0)
            },
            _changed: function(t) {
                var e = this._path;
                if (e) {
                    var n, i = e._curves,
                        r = this._index;
                    i && (t && t !== this._point && t !== this._handleIn || !(n = r > 0 ? i[r - 1] : e._closed ? i[i.length - 1] : null) || n._changed(), t && t !== this._point && t !== this._handleOut || !(n = i[r]) || n._changed()), e._changed(25)
                }
            },
            getPoint: function() {
                return this._point
            },
            setPoint: function() {
                var t = u.read(arguments);
                this._point.set(t.x, t.y)
            },
            getHandleIn: function() {
                return this._handleIn
            },
            setHandleIn: function() {
                var t = u.read(arguments);
                this._handleIn.set(t.x, t.y)
            },
            getHandleOut: function() {
                return this._handleOut
            },
            setHandleOut: function() {
                var t = u.read(arguments);
                this._handleOut.set(t.x, t.y)
            },
            isLinear: function() {
                return this._handleIn.isZero() && this._handleOut.isZero()
            },
            setLinear: function(t) {
                t && (this._handleIn.set(0, 0), this._handleOut.set(0, 0))
            },
            isColinear: function(t) {
                var e = this.getNext(),
                    n = t.getNext();
                return this._handleOut.isZero() && e._handleIn.isZero() && t._handleOut.isZero() && n._handleIn.isZero() && e._point.subtract(this._point).isColinear(n._point.subtract(t._point))
            },
            isOrthogonal: function() {
                var t = this.getPrevious(),
                    e = this.getNext();
                return t._handleOut.isZero() && this._handleIn.isZero() && this._handleOut.isZero() && e._handleIn.isZero() && this._point.subtract(t._point).isOrthogonal(e._point.subtract(this._point))
            },
            isArc: function() {
                var t = this.getNext(),
                    e = this._handleOut,
                    n = t._handleIn,
                    i = .5522847498307936;
                if (e.isOrthogonal(n)) {
                    var r = this._point,
                        s = t._point,
                        o = new m(r, e, !0).intersect(new m(s, n, !0), !0);
                    return o && a.isZero(e.getLength() / o.subtract(r).getLength() - i) && a.isZero(n.getLength() / o.subtract(s).getLength() - i)
                }
                return !1
            },
            _selectionState: 0,
            isSelected: function(t) {
                var e = this._selectionState;
                return t ? t === this._point ? !!(4 & e) : t === this._handleIn ? !!(1 & e) : t === this._handleOut ? !!(2 & e) : !1 : !!(7 & e)
            },
            setSelected: function(t, e) {
                var n = this._path,
                    t = !!t,
                    i = this._selectionState,
                    r = i,
                    s = e ? e === this._point ? 4 : e === this._handleIn ? 1 : e === this._handleOut ? 2 : 0 : 7;
                t ? i |= s : i &= ~s, this._selectionState = i, n && i !== r && (n._updateSelection(this, r, i), n._changed(129))
            },
            getIndex: function() {
                return this._index !== t ? this._index : null
            },
            getPath: function() {
                return this._path || null
            },
            getCurve: function() {
                var t = this._path,
                    e = this._index;
                return t ? (e > 0 && !t._closed && e === t._segments.length - 1 && e--, t.getCurves()[e] || null) : null
            },
            getLocation: function() {
                var t = this.getCurve();
                return t ? new A(t, this === t._segment1 ? 0 : 1) : null
            },
            getNext: function() {
                var t = this._path && this._path._segments;
                return t && (t[this._index + 1] || this._path._closed && t[0]) || null
            },
            getPrevious: function() {
                var t = this._path && this._path._segments;
                return t && (t[this._index - 1] || this._path._closed && t[t.length - 1]) || null
            },
            reverse: function() {
                return new k(this._point, this._handleOut, this._handleIn)
            },
            remove: function() {
                return this._path ? !!this._path.removeSegment(this._index) : !1
            },
            clone: function() {
                return new k(this._point, this._handleIn, this._handleOut)
            },
            equals: function(t) {
                return t === this || t && this._class === t._class && this._point.equals(t._point) && this._handleIn.equals(t._handleIn) && this._handleOut.equals(t._handleOut) || !1
            },
            toString: function() {
                var t = ["point: " + this._point];
                return this._handleIn.isZero() || t.push("handleIn: " + this._handleIn), this._handleOut.isZero() || t.push("handleOut: " + this._handleOut), "{ " + t.join(", ") + " }"
            },
            transform: function(t) {
                this._transformCoordinates(t, Array(6), !0), this._changed()
            },
            _transformCoordinates: function(t, e, n) {
                var i = this._point,
                    r = n && this._handleIn.isZero() ? null : this._handleIn,
                    s = n && this._handleOut.isZero() ? null : this._handleOut,
                    o = i._x,
                    a = i._y,
                    u = 2;
                return e[0] = o, e[1] = a, r && (e[u++] = r._x + o, e[u++] = r._y + a), s && (e[u++] = s._x + o, e[u++] = s._y + a), t && (t._transformCoordinates(e, e, u / 2), o = e[0], a = e[1], n ? (i._x = o, i._y = a, u = 2, r && (r._x = e[u++] - o, r._y = e[u++] - a), s && (s._x = e[u++] - o, s._y = e[u++] - a)) : (r || (e[u++] = o, e[u++] = a), s || (e[u++] = o, e[u++] = a))), e
            }
        }),
        E = u.extend({
            initialize: function(e, n, i) {
                var r, s, o;
                if (e)
                    if ((r = e[0]) !== t) s = e[1];
                    else {
                        var a = e;
                        (r = a.x) === t && (a = u.read(arguments), r = a.x), s = a.y, o = a.selected
                    } else r = s = 0;
                this._x = r, this._y = s, this._owner = n, n[i] = this, o && this.setSelected(!0)
            },
            set: function(t, e) {
                return this._x = t, this._y = e, this._owner._changed(this), this
            },
            _serialize: function(t) {
                var e = t.formatter,
                    n = e.number(this._x),
                    i = e.number(this._y);
                return this.isSelected() ? {
                    x: n,
                    y: i,
                    selected: !0
                } : [n, i]
            },
            getX: function() {
                return this._x
            },
            setX: function(t) {
                this._x = t, this._owner._changed(this)
            },
            getY: function() {
                return this._y
            },
            setY: function(t) {
                this._y = t, this._owner._changed(this)
            },
            isZero: function() {
                return a.isZero(this._x) && a.isZero(this._y)
            },
            setSelected: function(t) {
                this._owner.setSelected(t, this)
            },
            isSelected: function() {
                return this._owner.isSelected(this)
            }
        }),
        P = e.extend({
            _class: "Curve",
            initialize: function(t, e, n, i, r, s, o, a) {
                var u = arguments.length;
                if (3 === u) this._path = t, this._segment1 = e, this._segment2 = n;
                else if (0 === u) this._segment1 = new k, this._segment2 = new k;
                else if (1 === u) this._segment1 = new k(t.segment1), this._segment2 = new k(t.segment2);
                else if (2 === u) this._segment1 = new k(t), this._segment2 = new k(e);
                else {
                    var h, c, l, d;
                    4 === u ? (h = t, c = e, l = n, d = i) : 8 === u && (h = [t, e], d = [o, a], c = [n - t, i - e], l = [r - o, s - a]), this._segment1 = new k(h, null, c), this._segment2 = new k(d, l, null)
                }
            },
            _changed: function() {
                this._length = this._bounds = t
            },
            getPoint1: function() {
                return this._segment1._point
            },
            setPoint1: function() {
                var t = u.read(arguments);
                this._segment1._point.set(t.x, t.y)
            },
            getPoint2: function() {
                return this._segment2._point
            },
            setPoint2: function() {
                var t = u.read(arguments);
                this._segment2._point.set(t.x, t.y)
            },
            getHandle1: function() {
                return this._segment1._handleOut
            },
            setHandle1: function() {
                var t = u.read(arguments);
                this._segment1._handleOut.set(t.x, t.y)
            },
            getHandle2: function() {
                return this._segment2._handleIn
            },
            setHandle2: function() {
                var t = u.read(arguments);
                this._segment2._handleIn.set(t.x, t.y)
            },
            getSegment1: function() {
                return this._segment1
            },
            getSegment2: function() {
                return this._segment2
            },
            getPath: function() {
                return this._path
            },
            getIndex: function() {
                return this._segment1._index
            },
            getNext: function() {
                var t = this._path && this._path._curves;
                return t && (t[this._segment1._index + 1] || this._path._closed && t[0]) || null
            },
            getPrevious: function() {
                var t = this._path && this._path._curves;
                return t && (t[this._segment1._index - 1] || this._path._closed && t[t.length - 1]) || null
            },
            isSelected: function() {
                return this.getPoint1().isSelected() && this.getHandle2().isSelected() && this.getHandle2().isSelected() && this.getPoint2().isSelected()
            },
            setSelected: function(t) {
                this.getPoint1().setSelected(t), this.getHandle1().setSelected(t), this.getHandle2().setSelected(t), this.getPoint2().setSelected(t)
            },
            getValues: function(t) {
                return P.getValues(this._segment1, this._segment2, t)
            },
            getPoints: function() {
                for (var t = this.getValues(), e = [], n = 0; 8 > n; n += 2) e.push(new u(t[n], t[n + 1]));
                return e
            },
            getLength: function() {
                return null == this._length && (this._length = this.isLinear() ? this._segment2._point.getDistance(this._segment1._point) : P.getLength(this.getValues(), 0, 1)), this._length
            },
            getArea: function() {
                return P.getArea(this.getValues())
            },
            getPart: function(t, e) {
                return new P(P.getPart(this.getValues(), t, e))
            },
            getPartLength: function(t, e) {
                return P.getLength(this.getValues(), t, e)
            },
            isLinear: function() {
                return this._segment1._handleOut.isZero() && this._segment2._handleIn.isZero()
            },
            isHorizontal: function() {
                return this.isLinear() && a.isZero(this._segment1._point._y - this._segment2._point._y)
            },
            getIntersections: function(t) {
                return P.getIntersections(this.getValues(), t.getValues(), this, t, [])
            },
            _getParameter: function(e, n) {
                return n ? e : e && e.curve === this ? e.parameter : e === t && n === t ? .5 : this.getParameterAt(e, 0)
            },
            divide: function(t, e, n) {
                var i = this._getParameter(t, e),
                    r = 1e-5,
                    s = null;
                if (i > r && 1 - r > i) {
                    var o = P.subdivide(this.getValues(), i),
                        a = n ? !1 : this.isLinear(),
                        h = o[0],
                        c = o[1];
                    a || (this._segment1._handleOut.set(h[2] - h[0], h[3] - h[1]), this._segment2._handleIn.set(c[4] - c[6], c[5] - c[7]));
                    var l = h[6],
                        d = h[7],
                        f = new k(new u(l, d), !a && new u(h[4] - l, h[5] - d), !a && new u(c[2] - l, c[3] - d));
                    if (this._path) this._segment1._index > 0 && 0 === this._segment2._index ? this._path.add(f) : this._path.insert(this._segment2._index, f), s = this;
                    else {
                        var p = this._segment2;
                        this._segment2 = f, s = new P(f, p)
                    }
                }
                return s
            },
            split: function(t, e) {
                return this._path ? this._path.split(this._segment1._index, this._getParameter(t, e)) : null
            },
            reverse: function() {
                return new P(this._segment2.reverse(), this._segment1.reverse())
            },
            remove: function() {
                var t = !1;
                if (this._path) {
                    var e = this._segment2,
                        n = e._handleOut;
                    t = e.remove(), t && this._segment1._handleOut.set(n.x, n.y)
                }
                return t
            },
            clone: function() {
                return new P(this._segment1, this._segment2)
            },
            toString: function() {
                var t = ["point1: " + this._segment1._point];
                return this._segment1._handleOut.isZero() || t.push("handle1: " + this._segment1._handleOut), this._segment2._handleIn.isZero() || t.push("handle2: " + this._segment2._handleIn), t.push("point2: " + this._segment2._point), "{ " + t.join(", ") + " }"
            },
            statics: {
                getValues: function(t, e, n) {
                    var i = t._point,
                        r = t._handleOut,
                        s = e._handleIn,
                        o = e._point,
                        a = [i._x, i._y, i._x + r._x, i._y + r._y, o._x + s._x, o._y + s._y, o._x, o._y];
                    return n && n._transformCoordinates(a, a, 4), a
                },
                evaluate: function(t, e, n) {
                    var i, r, s = t[0],
                        o = t[1],
                        a = t[2],
                        h = t[3],
                        c = t[4],
                        l = t[5],
                        d = t[6],
                        f = t[7],
                        p = 1e-5;
                    if (0 === n && (p > e || e > 1 - p)) {
                        var g = p > e;
                        i = g ? s : d, r = g ? o : f
                    } else {
                        var m = 3 * (a - s),
                            v = 3 * (c - a) - m,
                            _ = d - s - m - v,
                            y = 3 * (h - o),
                            w = 3 * (l - h) - y,
                            x = f - o - y - w;
                        if (0 === n) i = ((_ * e + v) * e + m) * e + s, r = ((x * e + w) * e + y) * e + o;
                        else if (p > e && a === s && h === o || e > 1 - p && c === d && l === f ? (i = c - a, r = l - h) : p > e ? (i = m, r = y) : e > 1 - p ? (i = 3 * (d - c), r = 3 * (f - l)) : (i = (3 * _ * e + 2 * v) * e + m, r = (3 * x * e + 2 * w) * e + y), 3 === n) {
                            var b = 6 * _ * e + 2 * v,
                                C = 6 * x * e + 2 * w;
                            return (i * C - r * b) / Math.pow(i * i + r * r, 1.5)
                        }
                    }
                    return 2 === n ? new u(r, -i) : new u(i, r)
                },
                subdivide: function(e, n) {
                    var i = e[0],
                        r = e[1],
                        s = e[2],
                        o = e[3],
                        a = e[4],
                        u = e[5],
                        h = e[6],
                        c = e[7];
                    n === t && (n = .5);
                    var l = 1 - n,
                        d = l * i + n * s,
                        f = l * r + n * o,
                        p = l * s + n * a,
                        g = l * o + n * u,
                        m = l * a + n * h,
                        v = l * u + n * c,
                        _ = l * d + n * p,
                        y = l * f + n * g,
                        w = l * p + n * m,
                        x = l * g + n * v,
                        b = l * _ + n * w,
                        C = l * y + n * x;
                    return [
                        [i, r, d, f, _, y, b, C],
                        [b, C, w, x, m, v, h, c]
                    ]
                },
                solveCubic: function(t, e, n, i, r, s) {
                    var o = t[e],
                        u = t[e + 2],
                        h = t[e + 4],
                        c = t[e + 6],
                        l = 3 * (u - o),
                        d = 3 * (h - u) - l,
                        f = c - o - l - d;
                    return a.solveCubic(f, d, l, o - n, i, r, s)
                },
                getParameterOf: function(t, e, n) {
                    var i = 1e-5;
                    if (Math.abs(t[0] - e) < i && Math.abs(t[1] - n) < i) return 0;
                    if (Math.abs(t[6] - e) < i && Math.abs(t[7] - n) < i) return 1;
                    for (var r, s, o = [], a = [], u = P.solveCubic(t, 0, e, o, 0, 1), h = P.solveCubic(t, 1, n, a, 0, 1), c = 0; - 1 == u || u > c;)
                        if (-1 == u || (r = o[c++]) >= 0 && 1 >= r) {
                            for (var l = 0; - 1 == h || h > l;)
                                if ((-1 == h || (s = a[l++]) >= 0 && 1 >= s) && (-1 == u ? r = s : -1 == h && (s = r), Math.abs(r - s) < i)) return .5 * (r + s);
                            if (-1 == u) break
                        }
                    return null
                },
                getPart: function(t, e, n) {
                    return e > 0 && (t = P.subdivide(t, e)[1]), 1 > n && (t = P.subdivide(t, (n - e) / (1 - e))[0]), t
                },
                isLinear: function(t) {
                    var e = a.isZero;
                    return e(t[0] - t[2]) && e(t[1] - t[3]) && e(t[4] - t[6]) && e(t[5] - t[7])
                },
                isFlatEnough: function(t, e) {
                    var n = t[0],
                        i = t[1],
                        r = t[2],
                        s = t[3],
                        o = t[4],
                        a = t[5],
                        u = t[6],
                        h = t[7],
                        c = 3 * r - 2 * n - u,
                        l = 3 * s - 2 * i - h,
                        d = 3 * o - 2 * u - n,
                        f = 3 * a - 2 * h - i;
                    return Math.max(c * c, d * d) + Math.max(l * l, f * f) < 10 * e * e
                },
                getArea: function(t) {
                    var e = t[0],
                        n = t[1],
                        i = t[2],
                        r = t[3],
                        s = t[4],
                        o = t[5],
                        a = t[6],
                        u = t[7];
                    return (3 * r * e - 1.5 * r * s - 1.5 * r * a - 3 * n * i - 1.5 * n * s - .5 * n * a + 1.5 * o * e + 1.5 * o * i - 3 * o * a + .5 * u * e + 1.5 * u * i + 3 * u * s) / 10
                },
                getBounds: function(t) {
                    for (var e = t.slice(0, 2), n = e.slice(), i = [0, 0], r = 0; 2 > r; r++) P._addBounds(t[r], t[r + 2], t[r + 4], t[r + 6], r, 0, e, n, i);
                    return new f(e[0], e[1], n[0] - e[0], n[1] - e[1])
                },
                _addBounds: function(t, e, n, i, r, s, o, u, h) {
                    function c(t, e) {
                        var n = t - e,
                            i = t + e;
                        n < o[r] && (o[r] = n), i > u[r] && (u[r] = i)
                    }
                    var l = 3 * (e - n) - t + i,
                        d = 2 * (t + n) - 4 * e,
                        f = e - t,
                        p = a.solveQuadratic(l, d, f, h),
                        g = 1e-5,
                        m = 1 - g;
                    c(i, 0);
                    for (var v = 0; p > v; v++) {
                        var _ = h[v],
                            y = 1 - _;
                        _ > g && m > _ && c(y * y * y * t + 3 * y * y * _ * e + 3 * y * _ * _ * n + _ * _ * _ * i, s)
                    }
                }
            }
        }, e.each(["getBounds", "getStrokeBounds", "getHandleBounds", "getRoughBounds"], function(t) {
            this[t] = function() {
                this._bounds || (this._bounds = {});
                var e = this._bounds[t];
                return e || (e = this._bounds[t] = M[t]([this._segment1, this._segment2], !1, this._path.getStyle())), e.clone()
            }
        }, {}), e.each(["getPoint", "getTangent", "getNormal", "getCurvature"], function(t, e) {
            this[t + "At"] = function(t, n) {
                var i = this.getValues();
                return P.evaluate(i, n ? t : P.getParameterAt(i, t, 0), e)
            }, this[t] = function(t) {
                return P.evaluate(this.getValues(), t, e)
            }
        }, {
            beans: !1,
            getParameterAt: function(t, e) {
                return P.getParameterAt(this.getValues(), t, e)
            },
            getParameterOf: function() {
                var t = u.read(arguments);
                return P.getParameterOf(this.getValues(), t.x, t.y)
            },
            getLocationAt: function(t, e) {
                return e || (t = this.getParameterAt(t)), t >= 0 && 1 >= t && new A(this, t)
            },
            getLocationOf: function() {
                return this.getLocationAt(this.getParameterOf(u.read(arguments)), !0)
            },
            getOffsetOf: function() {
                var t = this.getLocationOf.apply(this, arguments);
                return t ? t.getOffset() : null
            },
            getNearestLocation: function() {
                function t(t) {
                    if (t >= 0 && 1 >= t) {
                        var i = e.getDistance(P.evaluate(n, t, 0), !0);
                        if (r > i) return r = i, s = t, !0
                    }
                }
                for (var e = u.read(arguments), n = this.getValues(), i = 100, r = 1 / 0, s = 0, o = 0; i >= o; o++) t(o / i);
                for (var a = 1 / (2 * i); a > 1e-5;) t(s - a) || t(s + a) || (a /= 2);
                var h = P.evaluate(n, s, 0);
                return new A(this, s, h, null, null, null, e.getDistance(h))
            },
            getNearestPoint: function() {
                return this.getNearestLocation.apply(this, arguments).getPoint()
            }
        }), new function() {
            function e(t) {
                var e = t[0],
                    n = t[1],
                    i = t[2],
                    r = t[3],
                    s = t[4],
                    o = t[5],
                    a = t[6],
                    u = t[7],
                    h = 9 * (i - s) + 3 * (a - e),
                    c = 6 * (e + s) - 12 * i,
                    l = 3 * (i - e),
                    d = 9 * (r - o) + 3 * (u - n),
                    f = 6 * (n + o) - 12 * r,
                    p = 3 * (r - n);
                return function(t) {
                    var e = (h * t + c) * t + l,
                        n = (d * t + f) * t + p;
                    return Math.sqrt(e * e + n * n)
                }
            }

            function n(t, e) {
                return Math.max(2, Math.min(16, Math.ceil(32 * Math.abs(e - t))))
            }
            return {
                statics: !0,
                getLength: function(i, r, s) {
                    r === t && (r = 0), s === t && (s = 1);
                    var o = a.isZero;
                    if (0 === r && 1 === s && o(i[0] - i[2]) && o(i[1] - i[3]) && o(i[6] - i[4]) && o(i[7] - i[5])) {
                        var u = i[6] - i[0],
                            h = i[7] - i[1];
                        return Math.sqrt(u * u + h * h)
                    }
                    var c = e(i);
                    return a.integrate(c, r, s, n(r, s))
                },
                getParameterAt: function(i, r, s) {
                    function o(t) {
                        return p += a.integrate(l, s, t, n(s, t)), s = t, p - r
                    }
                    if (s === t && (s = 0 > r ? 1 : 0), 0 === r) return s;
                    var u = r > 0,
                        h = u ? s : 0,
                        c = u ? 1 : s,
                        l = e(i),
                        d = a.integrate(l, h, c, n(h, c));
                    if (Math.abs(r) >= d) return u ? c : h;
                    var f = r / d,
                        p = 0;
                    return a.findRoot(o, l, s + f, h, c, 16, 1e-5)
                }
            }
        }, new function() {
            function t(t, e, n, i, r, s, o, a) {
                var u = new A(n, i, r, s, o, a);
                (!e || e(u)) && t.push(u)
            }

            function e(r, s, o, a, u, h, c, l, d, f, p, g, v) {
                if (!(v > 20)) {
                    var _, y, w, x = s[0],
                        b = s[1],
                        C = s[6],
                        S = s[7],
                        T = 1e-5,
                        k = 1e-9,
                        E = m.getSignedDistance,
                        A = E(x, b, C, S, s[2], s[3]) || 0,
                        N = E(x, b, C, S, s[4], s[5]) || 0,
                        M = A * N > 0 ? .75 : 4 / 9,
                        L = M * Math.min(0, A, N),
                        D = M * Math.max(0, A, N),
                        I = E(x, b, C, S, r[0], r[1]),
                        z = E(x, b, C, S, r[2], r[3]),
                        j = E(x, b, C, S, r[4], r[5]),
                        O = E(x, b, C, S, r[6], r[7]);
                    if (x === C && k >= f - d && v > 3) _ = (l + c) / 2, y = _, w = 0;
                    else {
                        var R, q, F = n(I, z, j, O),
                            B = F[0],
                            H = F[1];
                        if (R = i(B, H, L, D), B.reverse(), H.reverse(), q = i(B, H, L, D), null == R || null == q) return !1;
                        r = P.getPart(r, R, q), w = q - R, _ = l * R + c * (1 - R), y = l * q + c * (1 - q)
                    }
                    if (p > .8 && w > .8)
                        if (y - _ > f - d) {
                            var W = P.subdivide(r, .5),
                                $ = _ + (y - _) / 2;
                            e(s, W[0], a, o, u, h, d, f, _, $, w, !g, ++v), e(s, W[1], a, o, u, h, d, f, $, y, w, !g, v)
                        } else {
                            var W = P.subdivide(s, .5),
                                $ = d + (f - d) / 2;
                            e(W[0], r, a, o, u, h, d, $, _, y, w, !g, ++v), e(W[1], r, a, o, u, h, $, f, _, y, w, !g, v)
                        } else if (Math.max(f - d, y - _) < T) {
                        var V = _ + (y - _) / 2,
                            U = d + (f - d) / 2;
                        g ? t(u, h, a, U, P.evaluate(s, U, 0), o, V, P.evaluate(r, V, 0)) : t(u, h, o, V, P.evaluate(r, V, 0), a, U, P.evaluate(s, U, 0))
                    } else e(s, r, a, o, u, h, d, f, _, y, w, !g, ++v)
                }
            }

            function n(t, e, n, i) {
                var r, s = [0, t],
                    o = [1 / 3, e],
                    a = [2 / 3, n],
                    u = [1, i],
                    h = m.getSignedDistance,
                    c = h(0, t, 1, i, 1 / 3, e),
                    l = h(0, t, 1, i, 2 / 3, n),
                    d = !1;
                if (0 > c * l) r = [
                    [s, o, u],
                    [s, a, u]
                ], d = 0 > c;
                else {
                    var f, p = 0,
                        g = 0 === c || 0 === l;
                    Math.abs(c) > Math.abs(l) ? (f = o, p = (i - n - (i - t) / 3) * (2 * (i - n) - i + e) / 3) : (f = a, p = (e - t + (t - i) / 3) * (-2 * (t - e) + t - n) / 3), r = 0 > p || g ? [
                        [s, f, u],
                        [s, u]
                    ] : [
                        [s, o, a, u],
                        [s, u]
                    ], d = c ? 0 > c : 0 > l
                }
                return d ? r.reverse() : r
            }

            function i(t, e, n, i) {
                for (var r, s, o, a, u, h = null, c = 0, l = e.length - 1; l > c; c++) {
                    if (o = e[c][1], u = e[c + 1][1], u > o) r = null;
                    else {
                        if (!(i >= u)) continue;
                        s = e[c][0], a = e[c + 1][0], r = s + (i - o) * (a - s) / (u - o)
                    }
                    break
                }
                t[0][1] <= i && (r = t[0][0]);
                for (var c = 0, l = t.length - 1; l > c; c++) {
                    if (o = t[c][1], u = t[c + 1][1], o >= n) h = r;
                    else if (o > u) h = null;
                    else {
                        if (!(u >= n)) continue;
                        s = t[c][0], a = t[c + 1][0], h = s + (n - o) * (a - s) / (u - o)
                    }
                    break
                }
                return h
            }

            function r(e, n, i, r, s, o) {
                for (var a = P.isLinear(e), u = a ? n : e, h = a ? e : n, c = h[0], l = h[1], d = h[6], f = h[7], p = d - c, g = f - l, m = Math.atan2(-g, p), v = Math.sin(m), _ = Math.cos(m), y = p * _ - g * v, w = [0, 0, 0, 0, y, 0, y, 0], x = [], b = 0; 8 > b; b += 2) {
                    var C = u[b] - c,
                        S = u[b + 1] - l;
                    x.push(C * _ - S * v, S * _ + C * v)
                }
                for (var T = [], k = P.solveCubic(x, 1, 0, T, 0, 1), b = 0; k > b; b++) {
                    var E = T[b],
                        C = P.evaluate(x, E, 0).x;
                    if (C >= 0 && y >= C) {
                        var A = P.getParameterOf(w, C, 0),
                            N = a ? A : E,
                            M = a ? E : A;
                        t(s, o, i, N, P.evaluate(e, N, 0), r, M, P.evaluate(n, M, 0))
                    }
                }
            }

            function s(e, n, i, r, s, o) {
                var a = m.intersect(e[0], e[1], e[6], e[7], n[0], n[1], n[6], n[7]);
                if (a) {
                    var u = a.x,
                        h = a.y;
                    t(s, o, i, P.getParameterOf(e, u, h), a, r, P.getParameterOf(n, u, h), a)
                }
            }
            return {
                statics: {
                    getIntersections: function(t, n, i, o, a, u) {
                        var h = P.isLinear(t),
                            c = P.isLinear(n);
                        return (h && c ? s : h || c ? r : e)(t, n, i, o, a, u, 0, 1, 0, 1, 0, !1, 0), a
                    }
                }
            }
        }),
        A = e.extend({
            _class: "CurveLocation",
            beans: !0,
            initialize: function ve(t, e, n, i, r, s, o) {
                this._id = ve._id = (ve._id || 0) + 1, this._curve = t, this._segment1 = t._segment1, this._segment2 = t._segment2, this._parameter = e, this._point = n, this._curve2 = i, this._parameter2 = r, this._point2 = s, this._distance = o
            },
            getSegment: function(t) {
                if (!this._segment) {
                    var e = this.getCurve(),
                        n = this.getParameter();
                    if (1 === n) this._segment = e._segment2;
                    else if (0 === n || t) this._segment = e._segment1;
                    else {
                        if (null == n) return null;
                        this._segment = e.getPartLength(0, n) < e.getPartLength(n, 1) ? e._segment1 : e._segment2
                    }
                }
                return this._segment
            },
            getCurve: function(t) {
                return (!this._curve || t) && (this._curve = this._segment1.getCurve(), null == this._curve.getParameterOf(this._point) && (this._curve = this._segment2.getPrevious().getCurve())), this._curve
            },
            getIntersection: function() {
                var t = this._intersection;
                if (!t && this._curve2) {
                    var e = this._parameter2;
                    this._intersection = t = new A(this._curve2, e, this._point2 || this._point, this), t._intersection = this
                }
                return t
            },
            getPath: function() {
                var t = this.getCurve();
                return t && t._path
            },
            getIndex: function() {
                var t = this.getCurve();
                return t && t.getIndex()
            },
            getOffset: function() {
                var t = this.getPath();
                return t ? t._getOffset(this) : this.getCurveOffset()
            },
            getCurveOffset: function() {
                var t = this.getCurve(),
                    e = this.getParameter();
                return null != e && t && t.getPartLength(0, e)
            },
            getParameter: function(t) {
                if ((null == this._parameter || t) && this._point) {
                    var e = this.getCurve(t);
                    this._parameter = e && e.getParameterOf(this._point)
                }
                return this._parameter
            },
            getPoint: function(t) {
                if ((!this._point || t) && null != this._parameter) {
                    var e = this.getCurve(t);
                    this._point = e && e.getPointAt(this._parameter, !0)
                }
                return this._point
            },
            getDistance: function() {
                return this._distance
            },
            divide: function() {
                var t = this.getCurve(!0);
                return t && t.divide(this.getParameter(!0), !0)
            },
            split: function() {
                var t = this.getCurve(!0);
                return t && t.split(this.getParameter(!0), !0)
            },
            equals: function(t) {
                var e = a.isZero;
                return this === t || t && this._curve === t._curve && this._curve2 === t._curve2 && e(this._parameter - t._parameter) && e(this._parameter2 - t._parameter2) || !1
            },
            toString: function() {
                var t = [],
                    e = this.getPoint(),
                    n = o.instance;
                e && t.push("point: " + e);
                var i = this.getIndex();
                null != i && t.push("index: " + i);
                var r = this.getParameter();
                return null != r && t.push("parameter: " + n.number(r)), null != this._distance && t.push("distance: " + n.number(this._distance)), "{ " + t.join(", ") + " }"
            }
        }, e.each(["getTangent", "getNormal", "getCurvature"], function(t) {
            var e = t + "At";
            this[t] = function() {
                var t = this.getParameter(),
                    n = this.getCurve();
                return null != t && n && n[e](t, !0)
            }
        }, {})),
        N = y.extend({
            _class: "PathItem",
            initialize: function() {},
            getIntersections: function(e, n, i) {
                function r(t, e) {
                    var n = t.getPath(),
                        i = e.getPath();
                    return n === i ? t.getIndex() + t.getParameter() - (e.getIndex() + e.getParameter()) : n._id - i._id
                }
                this === e && (e = null);
                var s = [],
                    o = this.getCurves(),
                    a = e ? e.getCurves() : o,
                    u = this._matrix.orNullIfIdentity(),
                    h = e ? (n || e._matrix).orNullIfIdentity() : u,
                    c = o.length,
                    l = e ? a.length : c,
                    d = [],
                    f = 1e-11,
                    p = 1 - 1e-11;
                if (e && !this.getBounds(u).touches(e.getBounds(h))) return [];
                for (var g = 0; l > g; g++) d[g] = a[g].getValues(h);
                for (var g = 0; c > g; g++) {
                    var v = o[g],
                        _ = e ? v.getValues(u) : d[g];
                    if (!e) {
                        var y = v.getSegment1(),
                            w = v.getSegment2(),
                            x = y._handleOut,
                            b = w._handleIn;
                        if (new m(y._point.subtract(x), x.multiply(2), !0).intersect(new m(w._point.subtract(b), b.multiply(2), !0), !1)) {
                            var C = P.subdivide(_);
                            P.getIntersections(C[0], C[1], v, v, s, function(e) {
                                return e._parameter <= p ? (e._parameter /= 2, e._parameter2 = .5 + e._parameter2 / 2, !0) : t
                            })
                        }
                    }
                    for (var S = e ? 0 : g + 1; l > S; S++) P.getIntersections(_, d[S], v, a[S], s, !e && (S === g + 1 || S === l - 1 && 0 === g) && function(t) {
                        var e = t._parameter;
                        return e >= f && p >= e
                    })
                }
                for (var T = s.length - 1, g = T; g >= 0; g--) {
                    var k = s[g],
                        E = k._curve.getNext(),
                        A = k._curve2.getNext();
                    E && k._parameter >= p && (k._parameter = 0, k._curve = E), A && k._parameter2 >= p && (k._parameter2 = 0, k._curve2 = A)
                }
                if (T > 0) {
                    s.sort(r);
                    for (var g = T; g >= 1; g--) s[g].equals(s[0 === g ? T : g - 1]) && (s.splice(g, 1), T--)
                }
                if (i) {
                    for (var g = T; g >= 0; g--) s.push(s[g].getIntersection());
                    s.sort(r)
                }
                return s
            },
            _asPathItem: function() {
                return this
            },
            setPathData: function(t) {
                function e(t, e) {
                    var n = +i[t];
                    return a && (n += h[e]), n
                }

                function n(t) {
                    return new u(e(t, "x"), e(t + 1, "y"))
                }
                var i, r, s, o = t.match(/[mlhvcsqtaz][^mlhvcsqtaz]*/gi),
                    a = !1,
                    h = new u,
                    l = new u;
                this.clear();
                for (var d = 0, f = o.length; f > d; d++) {
                    var p = o[d],
                        g = p[0],
                        m = g.toLowerCase();
                    i = p.match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g);
                    var v = i && i.length;
                    switch (a = g === m, "z" !== r || /[mz]/.test(m) || this.moveTo(h = l), m) {
                        case "m":
                        case "l":
                            var _ = "m" === m;
                            _ && r && "z" !== r && this.closePath(!0);
                            for (var y = 0; v > y; y += 2) this[0 === y && _ ? "moveTo" : "lineTo"](h = n(y));
                            s = h, _ && (l = h);
                            break;
                        case "h":
                        case "v":
                            for (var w = "h" === m ? "x" : "y", y = 0; v > y; y++) h[w] = e(y, w), this.lineTo(h);
                            s = h;
                            break;
                        case "c":
                            for (var y = 0; v > y; y += 6) this.cubicCurveTo(n(y), s = n(y + 2), h = n(y + 4));
                            break;
                        case "s":
                            for (var y = 0; v > y; y += 4) this.cubicCurveTo(/[cs]/.test(r) ? h.multiply(2).subtract(s) : h, s = n(y), h = n(y + 2)), r = m;
                            break;
                        case "q":
                            for (var y = 0; v > y; y += 4) this.quadraticCurveTo(s = n(y), h = n(y + 2));
                            break;
                        case "t":
                            for (var y = 0; v > y; y += 2) this.quadraticCurveTo(s = /[qt]/.test(r) ? h.multiply(2).subtract(s) : h, h = n(y)), r = m;
                            break;
                        case "a":
                            for (var y = 0; v > y; y += 7) this.arcTo(h = n(y + 5), new c(+i[0], +i[1]), +i[2], +i[4], +i[3]);
                            break;
                        case "z":
                            this.closePath(!0)
                    }
                    r = m
                }
            },
            _canComposite: function() {
                return !(this.hasFill() && this.hasStroke())
            },
            _contains: function(t) {
                var e = this._getWinding(t, !1, !0);
                return !!("evenodd" === this.getWindingRule() ? 1 & e : e)
            }
        }),
        M = N.extend({
            _class: "Path",
            _serializeFields: {
                segments: [],
                closed: !1
            },
            initialize: function(e) {
                this._closed = !1, this._segments = [];
                var n = Array.isArray(e) ? "object" == typeof e[0] ? e : arguments : !e || e.size !== t || e.x === t && e.point === t ? null : arguments;
                n && n.length > 0 ? this.setSegments(n) : (this._curves = t, this._selectedSegmentState = 0, n || "string" != typeof e || (this.setPathData(e), e = null)), this._initialize(!n && e)
            },
            _equals: function(t) {
                return e.equals(this._segments, t._segments)
            },
            clone: function(e) {
                var n = new M(y.NO_INSERT);
                return n.setSegments(this._segments), n._closed = this._closed, this._clockwise !== t && (n._clockwise = this._clockwise), this._clone(n, e)
            },
            _changed: function _e(e) {
                if (_e.base.call(this, e), 8 & e) {
                    var n = this._parent;
                    if (n && (n._currentPath = t), this._length = this._clockwise = t, this._curves && !(16 & e))
                        for (var i = 0, r = this._curves.length; r > i; i++) this._curves[i]._changed();
                    this._monoCurves = t
                } else 32 & e && (this._bounds = t)
            },
            getStyle: function() {
                var t = this._parent;
                return (t instanceof L ? t : this)._style
            },
            getSegments: function() {
                return this._segments
            },
            setSegments: function(e) {
                var n = this.isFullySelected();
                this._segments.length = 0, this._selectedSegmentState = 0, this._curves = t, e && e.length > 0 && this._add(k.readAll(e)), n && this.setFullySelected(!0)
            },
            getFirstSegment: function() {
                return this._segments[0]
            },
            getLastSegment: function() {
                return this._segments[this._segments.length - 1]
            },
            getCurves: function() {
                var t = this._curves,
                    e = this._segments;
                if (!t) {
                    var n = this._countCurves();
                    t = this._curves = Array(n);
                    for (var i = 0; n > i; i++) t[i] = new P(this, e[i], e[i + 1] || e[0])
                }
                return t
            },
            getFirstCurve: function() {
                return this.getCurves()[0]
            },
            getLastCurve: function() {
                var t = this.getCurves();
                return t[t.length - 1]
            },
            isClosed: function() {
                return this._closed
            },
            setClosed: function(t) {
                if (this._closed != (t = !!t)) {
                    if (this._closed = t, this._curves) {
                        var e = this._curves.length = this._countCurves();
                        t && (this._curves[e - 1] = new P(this, this._segments[e - 1], this._segments[0]))
                    }
                    this._changed(25)
                }
            }
        }, {
            beans: !0,
            getPathData: function(t, e) {
                function n(e, n) {
                    e._transformCoordinates(t, g, !1), i = g[0], r = g[1], m ? (v.push("M" + p.pair(i, r)), m = !1) : (u = g[2], h = g[3], u === i && h === r && c === s && l === a ? n || v.push("l" + p.pair(i - s, r - a)) : v.push("c" + p.pair(c - s, l - a) + " " + p.pair(u - s, h - a) + " " + p.pair(i - s, r - a))), s = i, a = r, c = g[4], l = g[5]
                }
                var i, r, s, a, u, h, c, l, d = this._segments,
                    f = d.length,
                    p = new o(e),
                    g = Array(6),
                    m = !0,
                    v = [];
                if (0 === f) return "";
                for (var _ = 0; f > _; _++) n(d[_]);
                return this._closed && f > 0 && (n(d[0], !0), v.push("z")), v.join("")
            }
        }, {
            isEmpty: function() {
                return 0 === this._segments.length
            },
            isPolygon: function() {
                for (var t = 0, e = this._segments.length; e > t; t++)
                    if (!this._segments[t].isLinear()) return !1;
                return !0
            },
            _transformContent: function(t) {
                for (var e = Array(6), n = 0, i = this._segments.length; i > n; n++) this._segments[n]._transformCoordinates(t, e, !0);
                return !0
            },
            _add: function(t, e) {
                for (var n = this._segments, i = this._curves, r = t.length, s = null == e, e = s ? n.length : e, o = 0; r > o; o++) {
                    var a = t[o];
                    a._path && (a = t[o] = a.clone()), a._path = this, a._index = e + o, a._selectionState && this._updateSelection(a, 0, a._selectionState)
                }
                if (s) n.push.apply(n, t);
                else {
                    n.splice.apply(n, [e, 0].concat(t));
                    for (var o = e + r, u = n.length; u > o; o++) n[o]._index = o
                }
                if (i || t._curves) {
                    i || (i = this._curves = []);
                    var h = e > 0 ? e - 1 : e,
                        c = h,
                        l = Math.min(h + r, this._countCurves());
                    t._curves && (i.splice.apply(i, [h, 0].concat(t._curves)), c += t._curves.length);
                    for (var o = c; l > o; o++) i.splice(o, 0, new P(this, null, null));
                    this._adjustCurves(h, l)
                }
                return this._changed(25), t
            },
            _adjustCurves: function(t, e) {
                for (var n, i = this._segments, r = this._curves, s = t; e > s; s++) n = r[s], n._path = this, n._segment1 = i[s], n._segment2 = i[s + 1] || i[0], n._changed();
                (n = r[this._closed && 0 === t ? i.length - 1 : t - 1]) && (n._segment2 = i[t] || i[0], n._changed()), (n = r[e]) && (n._segment1 = i[e], n._changed())
            },
            _countCurves: function() {
                var t = this._segments.length;
                return !this._closed && t > 0 ? t - 1 : t
            },
            add: function(t) {
                return arguments.length > 1 && "number" != typeof t ? this._add(k.readAll(arguments)) : this._add([k.read(arguments)])[0]
            },
            insert: function(t, e) {
                return arguments.length > 2 && "number" != typeof e ? this._add(k.readAll(arguments, 1), t) : this._add([k.read(arguments, 1)], t)[0]
            },
            addSegment: function() {
                return this._add([k.read(arguments)])[0]
            },
            insertSegment: function(t) {
                return this._add([k.read(arguments, 1)], t)[0]
            },
            addSegments: function(t) {
                return this._add(k.readAll(t))
            },
            insertSegments: function(t, e) {
                return this._add(k.readAll(e), t)
            },
            removeSegment: function(t) {
                return this.removeSegments(t, t + 1)[0] || null
            },
            removeSegments: function(t, n, i) {
                t = t || 0, n = e.pick(n, this._segments.length);
                var r = this._segments,
                    s = this._curves,
                    o = r.length,
                    a = r.splice(t, n - t),
                    u = a.length;
                if (!u) return a;
                for (var h = 0; u > h; h++) {
                    var c = a[h];
                    c._selectionState && this._updateSelection(c, c._selectionState, 0), c._index = c._path = null
                }
                for (var h = t, l = r.length; l > h; h++) r[h]._index = h;
                if (s) {
                    var d = t > 0 && n === o + (this._closed ? 1 : 0) ? t - 1 : t,
                        s = s.splice(d, u);
                    i && (a._curves = s.slice(1)), this._adjustCurves(d, d)
                }
                return this._changed(25), a
            },
            clear: "#removeSegments",
            getLength: function() {
                if (null == this._length) {
                    var t = this.getCurves();
                    this._length = 0;
                    for (var e = 0, n = t.length; n > e; e++) this._length += t[e].getLength()
                }
                return this._length
            },
            getArea: function() {
                for (var t = this.getCurves(), e = 0, n = 0, i = t.length; i > n; n++) e += t[n].getArea();
                return e
            },
            isFullySelected: function() {
                var t = this._segments.length;
                return this._selected && t > 0 && this._selectedSegmentState === 7 * t
            },
            setFullySelected: function(t) {
                t && this._selectSegments(!0), this.setSelected(t)
            },
            setSelected: function ye(t) {
                t || this._selectSegments(!1), ye.base.call(this, t)
            },
            _selectSegments: function(t) {
                var e = this._segments.length;
                this._selectedSegmentState = t ? 7 * e : 0;
                for (var n = 0; e > n; n++) this._segments[n]._selectionState = t ? 7 : 0
            },
            _updateSelection: function(t, e, n) {
                t._selectionState = n;
                var i = this._selectedSegmentState += n - e;
                i > 0 && this.setSelected(!0)
            },
            flatten: function(t) {
                for (var e = new D(this, 64, .1), n = 0, i = e.length / Math.ceil(e.length / t), r = e.length + (this._closed ? -i : i) / 2, s = []; r >= n;) s.push(new k(e.evaluate(n, 0))), n += i;
                this.setSegments(s)
            },
            reduce: function() {
                for (var t = this.getCurves(), e = t.length - 1; e >= 0; e--) {
                    var n = t[e];
                    n.isLinear() && 0 === n.getLength() && n.remove()
                }
                return this
            },
            simplify: function(t) {
                if (this._segments.length > 2) {
                    var e = new I(this, t || 2.5);
                    this.setSegments(e.fit())
                }
            },
            split: function(t, e) {
                if (null !== e) {
                    if (1 === arguments.length) {
                        var n = t;
                        "number" == typeof n && (n = this.getLocationAt(n)), t = n.index, e = n.parameter
                    }
                    var i = 1e-5;
                    e >= 1 - i && (t++, e--);
                    var r = this.getCurves();
                    if (t >= 0 && t < r.length) {
                        e > i && r[t++].divide(e, !0);
                        var s, o = this.removeSegments(t, this._segments.length, !0);
                        return this._closed ? (this.setClosed(!1), s = this) : t > 0 && (s = this._clone((new M).insertAbove(this, !0))), s._add(o, 0), this.addSegment(o[0]), s
                    }
                    return null
                }
            },
            isClockwise: function() {
                return this._clockwise !== t ? this._clockwise : M.isClockwise(this._segments)
            },
            setClockwise: function(t) {
                this.isClockwise() != (t = !!t) && this.reverse(), this._clockwise = t
            },
            reverse: function() {
                this._segments.reverse();
                for (var e = 0, n = this._segments.length; n > e; e++) {
                    var i = this._segments[e],
                        r = i._handleIn;
                    i._handleIn = i._handleOut, i._handleOut = r, i._index = e
                }
                this._curves = null, this._clockwise !== t && (this._clockwise = !this._clockwise), this._changed(9)
            },
            join: function(t) {
                if (t) {
                    var e = t._segments,
                        n = this.getLastSegment(),
                        i = t.getLastSegment();
                    n._point.equals(i._point) && t.reverse();
                    var r, s = t.getFirstSegment();
                    n._point.equals(s._point) ? (n.setHandleOut(s._handleOut), this._add(e.slice(1))) : (r = this.getFirstSegment(), r._point.equals(s._point) && t.reverse(), i = t.getLastSegment(), r._point.equals(i._point) ? (r.setHandleIn(i._handleIn), this._add(e.slice(0, e.length - 1), 0)) : this._add(e.slice())), t.closed && this._add([e[0]]), t.remove()
                }
                var o = this.getFirstSegment(),
                    a = this.getLastSegment();
                o !== a && o._point.equals(a._point) && (o.setHandleIn(a._handleIn), a.remove(), this.setClosed(!0))
            },
            toShape: function(e) {
                function n(t, e) {
                    return d[t].isColinear(d[e])
                }

                function i(t) {
                    return d[t].isOrthogonal()
                }

                function r(t) {
                    return d[t].isArc()
                }

                function s(t, e) {
                    return d[t]._point.getDistance(d[e]._point)
                }
                if (!this._closed) return null;
                var o, u, h, l, d = this._segments;
                if (this.isPolygon() && 4 === d.length && n(0, 2) && n(1, 3) && i(1) ? (o = b.Rectangle, u = new c(s(0, 3), s(0, 1)), l = d[1]._point.add(d[2]._point).divide(2)) : 8 === d.length && r(0) && r(2) && r(4) && r(6) && n(1, 5) && n(3, 7) ? (o = b.Rectangle, u = new c(s(1, 6), s(0, 3)), h = u.subtract(new c(s(0, 7), s(1, 2))).divide(2), l = d[3]._point.add(d[4]._point).divide(2)) : 4 === d.length && r(0) && r(1) && r(2) && r(3) && (a.isZero(s(0, 2) - s(1, 3)) ? (o = b.Circle, h = s(0, 2) / 2) : (o = b.Ellipse, h = new c(s(2, 0) / 2, s(3, 1) / 2)), l = d[1]._point), o) {
                    var f = this.getPosition(!0),
                        p = new o({
                            center: f,
                            size: u,
                            radius: h,
                            insert: !1
                        });
                    return p.rotate(l.subtract(f).getAngle() + 90), p.setStyle(this._style), (e || e === t) && p.insertAbove(this), p
                }
                return null
            },
            _hitTestSelf: function(t, e) {
                function n(e, n) {
                    return t.subtract(e).divide(n).length <= 1
                }

                function i(t, i, r) {
                    if (!e.selected || i.isSelected()) {
                        var s = t._point;
                        if (i !== s && (i = i.add(s)), n(i, w)) return new T(r, p, {
                            segment: t,
                            point: i
                        })
                    }
                }

                function r(t, n) {
                    return (n || e.segments) && i(t, t._point, "segment") || !n && e.handles && (i(t, t._handleIn, "handle-in") || i(t, t._handleOut, "handle-out"))
                }

                function s(t) {
                    l.add(t)
                }

                function o(e) {
                    if (("round" !== a || "round" !== h) && (l = new M({
                            internal: !0,
                            closed: !0
                        }), _ || e._index > 0 && e._index < v - 1 ? "round" !== a && (e._handleIn.isZero() || e._handleOut.isZero()) && M._addBevelJoin(e, a, S, c, s, !0) : "round" !== h && M._addSquareCap(e, h, S, s, !0), !l.isEmpty())) {
                        var i;
                        return l.contains(t) || (i = l.getNearestLocation(t)) && n(i.getPoint(), y)
                    }
                    return n(e._point, w)
                }
                var a, h, c, l, d, f, p = this,
                    g = this.getStyle(),
                    m = this._segments,
                    v = m.length,
                    _ = this._closed,
                    y = e._tolerancePadding,
                    w = y,
                    x = e.stroke && g.hasStroke(),
                    b = e.fill && g.hasFill(),
                    C = e.curves,
                    S = x ? g.getStrokeWidth() / 2 : b && e.tolerance > 0 || C ? 0 : null;
                if (null !== S && (S > 0 ? (a = g.getStrokeJoin(), h = g.getStrokeCap(), c = S * g.getMiterLimit(), w = y.add(new u(S, S))) : a = h = "round"), !e.ends || e.segments || _) {
                    if (e.segments || e.handles)
                        for (var k = 0; v > k; k++)
                            if (f = r(m[k])) return f
                } else if (f = r(m[0], !0) || r(m[v - 1], !0)) return f;
                if (null !== S) {
                    if (d = this.getNearestLocation(t)) {
                        var E = d.getParameter();
                        0 === E || 1 === E && v > 1 ? o(d.getSegment()) || (d = null) : n(d.getPoint(), w) || (d = null)
                    }
                    if (!d && "miter" === a && v > 1)
                        for (var k = 0; v > k; k++) {
                            var P = m[k];
                            if (t.getDistance(P._point) <= c && o(P)) {
                                d = P.getLocation();
                                break
                            }
                        }
                }
                return !d && b && this._contains(t) || d && !x && !C ? new T("fill", this) : d ? new T(x ? "stroke" : "curve", this, {
                    location: d,
                    point: d.getPoint()
                }) : null
            }
        }, e.each(["getPoint", "getTangent", "getNormal", "getCurvature"], function(t) {
            this[t + "At"] = function(e, n) {
                var i = this.getLocationAt(e, n);
                return i && i[t]()
            }
        }, {
            beans: !1,
            _getOffset: function(t) {
                var e = t && t.getIndex();
                if (null != e) {
                    for (var n = this.getCurves(), i = 0, r = 0; e > r; r++) i += n[r].getLength();
                    var s = n[e],
                        o = t.getParameter();
                    return o > 0 && (i += s.getPartLength(0, o)), i
                }
                return null
            },
            getLocationOf: function() {
                for (var t = u.read(arguments), e = this.getCurves(), n = 0, i = e.length; i > n; n++) {
                    var r = e[n].getLocationOf(t);
                    if (r) return r
                }
                return null
            },
            getOffsetOf: function() {
                var t = this.getLocationOf.apply(this, arguments);
                return t ? t.getOffset() : null
            },
            getLocationAt: function(t, e) {
                var n = this.getCurves(),
                    i = 0;
                if (e) {
                    var r = ~~t;
                    return n[r].getLocationAt(t - r, !0)
                }
                for (var s = 0, o = n.length; o > s; s++) {
                    var a = i,
                        u = n[s];
                    if (i += u.getLength(), i > t) return u.getLocationAt(t - a)
                }
                return t <= this.getLength() ? new A(n[n.length - 1], 1) : null
            },
            getNearestLocation: function() {
                for (var t = u.read(arguments), e = this.getCurves(), n = 1 / 0, i = null, r = 0, s = e.length; s > r; r++) {
                    var o = e[r].getNearestLocation(t);
                    o._distance < n && (n = o._distance, i = o)
                }
                return i
            },
            getNearestPoint: function() {
                return this.getNearestLocation.apply(this, arguments).getPoint()
            }
        }), new function() {
            function t(t, e, n, i) {
                function r(e) {
                    var n = o[e],
                        i = o[e + 1];
                    (l != n || d != i) && (t.beginPath(), t.moveTo(l, d), t.lineTo(n, i), t.stroke(), t.beginPath(), t.arc(n, i, s, 0, 2 * Math.PI, !0), t.fill())
                }
                for (var s = i / 2, o = Array(6), a = 0, u = e.length; u > a; a++) {
                    var h = e[a];
                    h._transformCoordinates(n, o, !1);
                    var c = h._selectionState,
                        l = o[0],
                        d = o[1];
                    if (1 & c && r(2), 2 & c && r(4), t.fillRect(l - s, d - s, i, i), !(4 & c)) {
                        var f = t.fillStyle;
                        t.fillStyle = "#ffffff", t.fillRect(l - s + 1, d - s + 1, i - 2, i - 2), t.fillStyle = f
                    }
                }
            }

            function e(t, e, n) {
                function i(e) {
                    if (n) e._transformCoordinates(n, p, !1), r = p[0], s = p[1];
                    else {
                        var i = e._point;
                        r = i._x, s = i._y
                    }
                    if (g) t.moveTo(r, s), g = !1;
                    else {
                        if (n) u = p[2], h = p[3];
                        else {
                            var d = e._handleIn;
                            u = r + d._x, h = s + d._y
                        }
                        u === r && h === s && c === o && l === a ? t.lineTo(r, s) : t.bezierCurveTo(c, l, u, h, r, s)
                    }
                    if (o = r, a = s, n) c = p[4], l = p[5];
                    else {
                        var d = e._handleOut;
                        c = o + d._x, l = a + d._y
                    }
                }
                for (var r, s, o, a, u, h, c, l, d = e._segments, f = d.length, p = Array(6), g = !0, m = 0; f > m; m++) i(d[m]);
                e._closed && f > 0 && i(d[0])
            }
            return {
                _draw: function(t, n, i) {
                    function r(t) {
                        return c[(t % l + l) % l]
                    }
                    var s = n.dontStart,
                        o = n.dontFinish || n.clip,
                        a = this.getStyle(),
                        u = a.hasFill(),
                        h = a.hasStroke(),
                        c = a.getDashArray(),
                        l = !paper.support.nativeDash && h && c && c.length;
                    if (s || t.beginPath(), !s && this._currentPath ? t.currentPath = this._currentPath : (u || h && !l || o) && (e(t, this, i), this._closed && t.closePath(), s || (this._currentPath = t.currentPath)), !o && (u || h) && (this._setStyles(t), u && (t.fill(a.getWindingRule()), t.shadowColor = "rgba(0,0,0,0)"), h)) {
                        if (l) {
                            s || t.beginPath();
                            var d, f = new D(this, 32, .25, i),
                                p = f.length,
                                g = -a.getDashOffset(),
                                m = 0;
                            for (g %= p; g > 0;) g -= r(m--) + r(m--);
                            for (; p > g;) d = g + r(m++), (g > 0 || d > 0) && f.drawPart(t, Math.max(g, 0), Math.max(d, 0)), g = d + r(m++)
                        }
                        t.stroke()
                    }
                },
                _drawSelected: function(n, i) {
                    n.beginPath(), e(n, this, i), n.stroke(), t(n, this._segments, i, paper.settings.handleSize)
                }
            }
        }, new function() {
            function t(t) {
                var e = t.length,
                    n = [],
                    i = [],
                    r = 2;
                n[0] = t[0] / r;
                for (var s = 1; e > s; s++) i[s] = 1 / r, r = (e - 1 > s ? 4 : 2) - i[s], n[s] = (t[s] - n[s - 1]) / r;
                for (var s = 1; e > s; s++) n[e - s - 1] -= i[e - s] * n[e - s];
                return n
            }
            return {
                smooth: function() {
                    var e = this._segments,
                        n = e.length,
                        i = this._closed,
                        r = n,
                        s = 0;
                    if (!(2 >= n)) {
                        i && (s = Math.min(n, 4), r += 2 * Math.min(n, s));
                        for (var o = [], a = 0; n > a; a++) o[a + s] = e[a]._point;
                        if (i)
                            for (var a = 0; s > a; a++) o[a] = e[a + n - s]._point, o[a + n + s] = e[a]._point;
                        else r--;
                        for (var h = [], a = 1; r - 1 > a; a++) h[a] = 4 * o[a]._x + 2 * o[a + 1]._x;
                        h[0] = o[0]._x + 2 * o[1]._x, h[r - 1] = 3 * o[r - 1]._x;
                        for (var c = t(h), a = 1; r - 1 > a; a++) h[a] = 4 * o[a]._y + 2 * o[a + 1]._y;
                        h[0] = o[0]._y + 2 * o[1]._y, h[r - 1] = 3 * o[r - 1]._y;
                        var l = t(h);
                        if (i) {
                            for (var a = 0, d = n; s > a; a++, d++) {
                                var f = a / s,
                                    p = 1 - f,
                                    g = a + s,
                                    m = d + s;
                                c[d] = c[a] * f + c[d] * p, l[d] = l[a] * f + l[d] * p, c[m] = c[g] * p + c[m] * f, l[m] = l[g] * p + l[m] * f
                            }
                            r--
                        }
                        for (var v = null, a = s; r - s >= a; a++) {
                            var _ = e[a - s];
                            v && _.setHandleIn(v.subtract(_._point)), r > a && (_.setHandleOut(new u(c[a], l[a]).subtract(_._point)), v = r - 1 > a ? new u(2 * o[a + 1]._x - c[a + 1], 2 * o[a + 1]._y - l[a + 1]) : new u((o[r]._x + c[r - 1]) / 2, (o[r]._y + l[r - 1]) / 2))
                        }
                        if (i && v) {
                            var _ = this._segments[0];
                            _.setHandleIn(v.subtract(_._point))
                        }
                    }
                }
            }
        }, new function() {
            function t(t) {
                var e = t._segments;
                if (0 === e.length) throw Error("Use a moveTo() command first");
                return e[e.length - 1]
            }
            return {
                moveTo: function() {
                    var t = this._segments;
                    1 === t.length && this.removeSegment(0), t.length || this._add([new k(u.read(arguments))])
                },
                moveBy: function() {
                    throw Error("moveBy() is unsupported on Path items.")
                },
                lineTo: function() {
                    this._add([new k(u.read(arguments))])
                },
                cubicCurveTo: function() {
                    var e = u.read(arguments),
                        n = u.read(arguments),
                        i = u.read(arguments),
                        r = t(this);
                    r.setHandleOut(e.subtract(r._point)), this._add([new k(i, n.subtract(i))])
                },
                quadraticCurveTo: function() {
                    var e = u.read(arguments),
                        n = u.read(arguments),
                        i = t(this)._point;
                    this.cubicCurveTo(e.add(i.subtract(e).multiply(1 / 3)), e.add(n.subtract(e).multiply(1 / 3)), n)
                },
                curveTo: function() {
                    var n = u.read(arguments),
                        i = u.read(arguments),
                        r = e.pick(e.read(arguments), .5),
                        s = 1 - r,
                        o = t(this)._point,
                        a = n.subtract(o.multiply(s * s)).subtract(i.multiply(r * r)).divide(2 * r * s);
                    if (a.isNaN()) throw Error("Cannot put a curve through points with parameter = " + r);
                    this.quadraticCurveTo(a, i)
                },
                arcTo: function() {
                    var n, i, r, s, o, a = t(this),
                        h = a._point,
                        l = u.read(arguments),
                        d = e.peek(arguments),
                        f = e.pick(d, !0);
                    if ("boolean" == typeof f) var p = h.add(l).divide(2),
                        n = p.add(p.subtract(h).rotate(f ? -90 : 90));
                    else if (e.remain(arguments) <= 2) n = l, l = u.read(arguments);
                    else {
                        var v = c.read(arguments);
                        if (v.isZero()) return this.lineTo(l);
                        var _ = e.read(arguments),
                            f = !!e.read(arguments),
                            y = !!e.read(arguments),
                            p = h.add(l).divide(2),
                            w = h.subtract(p).rotate(-_),
                            x = w.x,
                            b = w.y,
                            C = Math.abs,
                            S = 1e-11,
                            T = C(v.width),
                            E = C(v.height),
                            P = T * T,
                            A = E * E,
                            N = x * x,
                            M = b * b,
                            L = Math.sqrt(N / P + M / A);
                        if (L > 1 && (T *= L, E *= L, P = T * T, A = E * E), L = (P * A - P * M - A * N) / (P * M + A * N), C(L) < S && (L = 0), 0 > L) throw Error("Cannot create an arc with the given arguments");
                        i = new u(T * b / E, -E * x / T).multiply((y === f ? -1 : 1) * Math.sqrt(L)).rotate(_).add(p), o = (new g).translate(i).rotate(_).scale(T, E), s = o._inverseTransform(h), r = s.getDirectedAngle(o._inverseTransform(l)), !f && r > 0 ? r -= 360 : f && 0 > r && (r += 360)
                    }
                    if (n) {
                        var D = new m(h.add(n).divide(2), n.subtract(h).rotate(90), !0),
                            I = new m(n.add(l).divide(2), l.subtract(n).rotate(90), !0),
                            z = new m(h, l),
                            j = z.getSide(n);
                        if (i = D.intersect(I, !0), !i) {
                            if (!j) return this.lineTo(l);
                            throw Error("Cannot create an arc with the given arguments")
                        }
                        s = h.subtract(i), r = s.getDirectedAngle(l.subtract(i));
                        var O = z.getSide(i);
                        0 === O ? r = j * Math.abs(r) : j === O && (r += 0 > r ? 360 : -360)
                    }
                    for (var R = Math.abs(r), q = R >= 360 ? 4 : Math.ceil(R / 90), F = r / q, B = F * Math.PI / 360, H = 4 / 3 * Math.sin(B) / (1 + Math.cos(B)), W = [], $ = 0; q >= $; $++) {
                        var w = l,
                            V = null;
                        if (q > $ && (V = s.rotate(90).multiply(H), o ? (w = o._transformPoint(s), V = o._transformPoint(s.add(V)).subtract(w)) : w = i.add(s)), 0 === $) a.setHandleOut(V);
                        else {
                            var U = s.rotate(-90).multiply(H);
                            o && (U = o._transformPoint(s.add(U)).subtract(w)), W.push(new k(w, U, V))
                        }
                        s = s.rotate(F)
                    }
                    this._add(W)
                },
                lineBy: function() {
                    var e = u.read(arguments),
                        n = t(this)._point;
                    this.lineTo(n.add(e))
                },
                curveBy: function() {
                    var n = u.read(arguments),
                        i = u.read(arguments),
                        r = e.read(arguments),
                        s = t(this)._point;
                    this.curveTo(s.add(n), s.add(i), r)
                },
                cubicCurveBy: function() {
                    var e = u.read(arguments),
                        n = u.read(arguments),
                        i = u.read(arguments),
                        r = t(this)._point;
                    this.cubicCurveTo(r.add(e), r.add(n), r.add(i))
                },
                quadraticCurveBy: function() {
                    var e = u.read(arguments),
                        n = u.read(arguments),
                        i = t(this)._point;
                    this.quadraticCurveTo(i.add(e), i.add(n))
                },
                arcBy: function() {
                    var n = t(this)._point,
                        i = n.add(u.read(arguments)),
                        r = e.pick(e.peek(arguments), !0);
                    "boolean" == typeof r ? this.arcTo(i, r) : this.arcTo(i, n.add(u.read(arguments)))
                },
                closePath: function(t) {
                    this.setClosed(!0), t && this.join()
                }
            }
        }, {
            _getBounds: function(t, e) {
                return M[t](this._segments, this._closed, this.getStyle(), e)
            },
            statics: {
                isClockwise: function(t) {
                    for (var e = 0, n = 0, i = t.length; i > n; n++)
                        for (var r = P.getValues(t[n], t[i > n + 1 ? n + 1 : 0]), s = 2; 8 > s; s += 2) e += (r[s - 2] - r[s]) * (r[s + 1] + r[s - 1]);
                    return e > 0
                },
                getBounds: function(t, e, n, i, r) {
                    function s(t) {
                        t._transformCoordinates(i, a, !1);
                        for (var e = 0; 2 > e; e++) P._addBounds(u[e], u[e + 4], a[e + 2], a[e], e, r ? r[e] : 0, h, c, l);
                        var n = u;
                        u = a, a = n
                    }
                    var o = t[0];
                    if (!o) return new f;
                    for (var a = Array(6), u = o._transformCoordinates(i, Array(6), !1), h = u.slice(0, 2), c = h.slice(), l = Array(2), d = 1, p = t.length; p > d; d++) s(t[d]);
                    return e && s(o), new f(h[0], h[1], c[0] - h[0], c[1] - h[1])
                },
                getStrokeBounds: function(t, e, n, i) {
                    function r(t) {
                        d = d.include(i ? i._transformPoint(t, t) : t)
                    }

                    function s(t) {
                        d = d.unite(v.setCenter(i ? i._transformPoint(t._point) : t._point))
                    }

                    function o(t, e) {
                        var n = t._handleIn,
                            i = t._handleOut;
                        "round" === e || !n.isZero() && !i.isZero() && n.isColinear(i) ? s(t) : M._addBevelJoin(t, e, h, m, r)
                    }

                    function a(t, e) {
                        "round" === e ? s(t) : M._addSquareCap(t, e, h, r)
                    }
                    if (!n.hasStroke()) return M.getBounds(t, e, n, i);
                    for (var u = t.length - (e ? 0 : 1), h = n.getStrokeWidth() / 2, l = M._getPenPadding(h, i), d = M.getBounds(t, e, n, i, l), p = n.getStrokeJoin(), g = n.getStrokeCap(), m = h * n.getMiterLimit(), v = new f(new c(l).multiply(2)), _ = 1; u > _; _++) o(t[_], p);
                    return e ? o(t[0], p) : u > 0 && (a(t[0], g), a(t[t.length - 1], g)), d
                },
                _getPenPadding: function(t, e) {
                    if (!e) return [t, t];
                    var n = e.shiftless(),
                        i = n.transform(new u(t, 0)),
                        r = n.transform(new u(0, t)),
                        s = i.getAngleInRadians(),
                        o = i.getLength(),
                        a = r.getLength(),
                        h = Math.sin(s),
                        c = Math.cos(s),
                        l = Math.tan(s),
                        d = -Math.atan(a * l / o),
                        f = Math.atan(a / (l * o));
                    return [Math.abs(o * Math.cos(d) * c - a * Math.sin(d) * h), Math.abs(a * Math.sin(f) * c + o * Math.cos(f) * h)]
                },
                _addBevelJoin: function(t, e, n, i, r, s) {
                    var o = t.getCurve(),
                        a = o.getPrevious(),
                        h = o.getPointAt(0, !0),
                        c = a.getNormalAt(1, !0),
                        l = o.getNormalAt(0, !0),
                        d = c.getDirectedAngle(l) < 0 ? -n : n;
                    if (c.setLength(d), l.setLength(d), s && (r(h), r(h.add(c))), "miter" === e) {
                        var f = new m(h.add(c), new u(-c.y, c.x), !0).intersect(new m(h.add(l), new u(-l.y, l.x), !0), !0);
                        if (f && h.getDistance(f) <= i && (r(f), !s)) return
                    }
                    s || r(h.add(c)), r(h.add(l))
                },
                _addSquareCap: function(t, e, n, i, r) {
                    var s = t._point,
                        o = t.getLocation(),
                        a = o.getNormal().normalize(n);
                    r && (i(s.subtract(a)), i(s.add(a))), "square" === e && (s = s.add(a.rotate(0 === o.getParameter() ? -90 : 90))), i(s.add(a)), i(s.subtract(a))
                },
                getHandleBounds: function(t, e, n, i, r, s) {
                    for (var o = Array(6), a = 1 / 0, u = -a, h = a, c = u, l = 0, d = t.length; d > l; l++) {
                        var p = t[l];
                        p._transformCoordinates(i, o, !1);
                        for (var g = 0; 6 > g; g += 2) {
                            var m = 0 === g ? s : r,
                                v = m ? m[0] : 0,
                                _ = m ? m[1] : 0,
                                y = o[g],
                                w = o[g + 1],
                                x = y - v,
                                b = y + v,
                                C = w - _,
                                S = w + _;
                            a > x && (a = x), b > u && (u = b), h > C && (h = C), S > c && (c = S)
                        }
                    }
                    return new f(a, h, u - a, c - h)
                },
                getRoughBounds: function(t, e, n, i) {
                    var r = n.hasStroke() ? n.getStrokeWidth() / 2 : 0,
                        s = r;
                    return r > 0 && ("miter" === n.getStrokeJoin() && (s = r * n.getMiterLimit()), "square" === n.getStrokeCap() && (s = Math.max(s, r * Math.sqrt(2)))), M.getHandleBounds(t, e, n, i, M._getPenPadding(r, i), M._getPenPadding(s, i))
                }
            }
        });
    M.inject({
        statics: new function() {
            function t(t, n, i) {
                var r = e.getNamed(i),
                    s = new M(r && r.insert === !1 && y.NO_INSERT);
                return s._add(t), s._closed = n, s.set(r)
            }

            function n(e, n, i) {
                for (var s = Array(4), o = 0; 4 > o; o++) {
                    var a = r[o];
                    s[o] = new k(a._point.multiply(n).add(e), a._handleIn.multiply(n), a._handleOut.multiply(n))
                }
                return t(s, !0, i)
            }
            var i = .5522847498307936,
                r = [new k([-1, 0], [0, i], [0, -i]), new k([0, -1], [-i, 0], [i, 0]), new k([1, 0], [0, -i], [0, i]), new k([0, 1], [i, 0], [-i, 0])];
            return {
                Line: function() {
                    return t([new k(u.readNamed(arguments, "from")), new k(u.readNamed(arguments, "to"))], !1, arguments)
                },
                Circle: function() {
                    var t = u.readNamed(arguments, "center"),
                        i = e.readNamed(arguments, "radius");
                    return n(t, new c(i), arguments)
                },
                Rectangle: function() {
                    var e, n = f.readNamed(arguments, "rectangle"),
                        r = c.readNamed(arguments, "radius", 0, {
                            readNull: !0
                        }),
                        s = n.getBottomLeft(!0),
                        o = n.getTopLeft(!0),
                        a = n.getTopRight(!0),
                        u = n.getBottomRight(!0);
                    if (!r || r.isZero()) e = [new k(s), new k(o), new k(a), new k(u)];
                    else {
                        r = c.min(r, n.getSize(!0).divide(2));
                        var h = r.width,
                            l = r.height,
                            d = h * i,
                            p = l * i;
                        e = [new k(s.add(h, 0), null, [-d, 0]), new k(s.subtract(0, l), [0, p]), new k(o.add(0, l), null, [0, -p]), new k(o.add(h, 0), [-d, 0], null), new k(a.subtract(h, 0), null, [d, 0]), new k(a.add(0, l), [0, -p], null), new k(u.subtract(0, l), null, [0, p]), new k(u.subtract(h, 0), [d, 0])]
                    }
                    return t(e, !0, arguments)
                },
                RoundRectangle: "#Rectangle",
                Ellipse: function() {
                    var t = b._readEllipse(arguments);
                    return n(t.center, t.radius, arguments)
                },
                Oval: "#Ellipse",
                Arc: function() {
                    var t = u.readNamed(arguments, "from"),
                        n = u.readNamed(arguments, "through"),
                        i = u.readNamed(arguments, "to"),
                        r = e.getNamed(arguments),
                        s = new M(r && r.insert === !1 && y.NO_INSERT);
                    return s.moveTo(t), s.arcTo(n, i), s.set(r)
                },
                RegularPolygon: function() {
                    for (var n = u.readNamed(arguments, "center"), i = e.readNamed(arguments, "sides"), r = e.readNamed(arguments, "radius"), s = 360 / i, o = !(i % 3), a = new u(0, o ? -r : r), h = o ? -1 : .5, c = Array(i), l = 0; i > l; l++) c[l] = new k(n.add(a.rotate((l + h) * s)));
                    return t(c, !0, arguments)
                },
                Star: function() {
                    for (var n = u.readNamed(arguments, "center"), i = 2 * e.readNamed(arguments, "points"), r = e.readNamed(arguments, "radius1"), s = e.readNamed(arguments, "radius2"), o = 360 / i, a = new u(0, -1), h = Array(i), c = 0; i > c; c++) h[c] = new k(n.add(a.rotate(o * c).multiply(c % 2 ? s : r)));
                    return t(h, !0, arguments)
                }
            }
        }
    });
    var L = N.extend({
        _class: "CompoundPath",
        _serializeFields: {
            children: []
        },
        initialize: function(t) {
            this._children = [], this._namedChildren = {}, this._initialize(t) || ("string" == typeof t ? this.setPathData(t) : this.addChildren(Array.isArray(t) ? t : arguments))
        },
        insertChildren: function we(e, n, i) {
            n = we.base.call(this, e, n, i, M);
            for (var r = 0, s = !i && n && n.length; s > r; r++) {
                var o = n[r];
                o._clockwise === t && o.setClockwise(0 === o._index)
            }
            return n
        },
        reverse: function() {
            for (var t = this._children, e = 0, n = t.length; n > e; e++) t[e].reverse()
        },
        smooth: function() {
            for (var t = 0, e = this._children.length; e > t; t++) this._children[t].smooth()
        },
        isClockwise: function() {
            var t = this.getFirstChild();
            return t && t.isClockwise()
        },
        setClockwise: function(t) {
            this.isClockwise() !== !!t && this.reverse()
        },
        getFirstSegment: function() {
            var t = this.getFirstChild();
            return t && t.getFirstSegment()
        },
        getLastSegment: function() {
            var t = this.getLastChild();
            return t && t.getLastSegment()
        },
        getCurves: function() {
            for (var t = this._children, e = [], n = 0, i = t.length; i > n; n++) e.push.apply(e, t[n].getCurves());
            return e
        },
        getFirstCurve: function() {
            var t = this.getFirstChild();
            return t && t.getFirstCurve()
        },
        getLastCurve: function() {
            var t = this.getLastChild();
            return t && t.getFirstCurve()
        },
        getArea: function() {
            for (var t = this._children, e = 0, n = 0, i = t.length; i > n; n++) e += t[n].getArea();
            return e
        }
    }, {
        beans: !0,
        getPathData: function(t, e) {
            for (var n = this._children, i = [], r = 0, s = n.length; s > r; r++) {
                var o = n[r],
                    a = o._matrix;
                i.push(o.getPathData(t && !a.isIdentity() ? t.chain(a) : a, e))
            }
            return i.join(" ")
        }
    }, {
        _getChildHitTestOptions: function(t) {
            return t.class === M || "path" === t.type ? t : new e(t, {
                fill: !1
            })
        },
        _draw: function(t, e, n) {
            var i = this._children;
            if (0 !== i.length) {
                if (this._currentPath) t.currentPath = this._currentPath;
                else {
                    e = e.extend({
                        dontStart: !0,
                        dontFinish: !0
                    }), t.beginPath();
                    for (var r = 0, s = i.length; s > r; r++) i[r].draw(t, e, n);
                    this._currentPath = t.currentPath
                }
                if (!e.clip) {
                    this._setStyles(t);
                    var o = this._style;
                    o.hasFill() && (t.fill(o.getWindingRule()), t.shadowColor = "rgba(0,0,0,0)"), o.hasStroke() && t.stroke()
                }
            }
        },
        _drawSelected: function(t, e, n) {
            for (var i = this._children, r = 0, s = i.length; s > r; r++) {
                var o = i[r],
                    a = o._matrix;
                n[o._id] || o._drawSelected(t, a.isIdentity() ? e : e.chain(a))
            }
        }
    }, new function() {
        function t(t, e) {
            var n = t._children;
            if (e && 0 === n.length) throw Error("Use a moveTo() command first");
            return n[n.length - 1]
        }
        var n = {
            moveTo: function() {
                var e = t(this),
                    n = e && e.isEmpty() ? e : new M;
                n !== e && this.addChild(n), n.moveTo.apply(n, arguments)
            },
            moveBy: function() {
                var e = t(this, !0),
                    n = e && e.getLastSegment(),
                    i = u.read(arguments);
                this.moveTo(n ? i.add(n._point) : i)
            },
            closePath: function(e) {
                t(this, !0).closePath(e)
            }
        };
        return e.each(["lineTo", "cubicCurveTo", "quadraticCurveTo", "curveTo", "arcTo", "lineBy", "cubicCurveBy", "quadraticCurveBy", "curveBy", "arcBy"], function(e) {
            n[e] = function() {
                var n = t(this, !0);
                n[e].apply(n, arguments)
            }
        }), n
    });
    N.inject(new function() {
        function t(t, r, s, o) {
            function a(t) {
                return t.clone(!1).reduce().reorient().transform(null, !0)
            }

            function u(t) {
                for (var e = 0, n = t.length; n > e; e++) {
                    var i = t[e];
                    p.push.apply(p, i._segments), g.push.apply(g, i._getMonoCurves())
                }
            }
            var h = a(t),
                c = r && t !== r && a(r);
            h.isClockwise() || h.reverse(), !c || o ^ c.isClockwise() || c.reverse(), e(h.getIntersections(c, null, !0));
            var l = [],
                d = [],
                f = [],
                p = [],
                g = [];
            u(h._children || [h]), c && u(c._children || [c]), p.sort(function(t, e) {
                var n = t._intersection,
                    i = e._intersection;
                return !n && !i || n && i ? 0 : n ? -1 : 1
            });
            for (var m = 0, v = p.length; v > m; m++) {
                var _ = p[m];
                if (null == _._winding) {
                    l.length = d.length = f.length = 0;
                    var y = 0,
                        w = _;
                    do l.push(_), f.push(y += _.getCurve().getLength()), _ = _.getNext(); while (_ && !_._intersection && _ !== w);
                    for (var x = 0; 3 > x; x++) {
                        var b = y * Math.random(),
                            C = f.length,
                            S = 0;
                        do
                            if (f[S] >= b) {
                                S > 0 && (b -= f[S - 1]);
                                break
                            }
                        while (++S < C);
                        var T = l[S].getCurve(),
                            k = T.getPointAt(b),
                            E = T.isHorizontal(),
                            P = T._path;
                        P._parent instanceof L && (P = P._parent), d[x] = o && c && (P === h && c._getWinding(k, E) || P === c && !h._getWinding(k, E)) ? 0 : n(k, g, E)
                    }
                    d.sort();
                    for (var A = d[1], x = l.length - 1; x >= 0; x--) l[x]._winding = A
                }
            }
            var N = new L;
            return N.addChildren(i(p, s), !0), h.remove(), c && c.remove(), N = N.reduce(), N.setStyle(t._style), N
        }

        function e(t) {
            function e() {
                for (var t = 0, e = n.length; e > t; t++) {
                    var i = n[t];
                    i._handleOut.set(0, 0), i._handleIn.set(0, 0)
                }
            }
            for (var n, i, r, s = 1e-5, o = t.length - 1; o >= 0; o--) {
                var a = t[o],
                    u = a._parameter;
                r && r._curve === a._curve && r._parameter > 0 ? u /= r._parameter : (n && e(), i = a._curve, n = i.isLinear() && []);
                var h, c;
                (h = i.divide(u, !0, !0)) ? (c = h._segment1, i = h.getPrevious()) : c = s > u ? i._segment1 : u > 1 - s ? i._segment2 : i.getPartLength(0, u) < i.getPartLength(u, 1) ? i._segment1 : i._segment2, c._intersection = a.getIntersection(), a._segment = c, n && n.push(c), r = a
            }
            n && e()
        }

        function n(t, e, i, r) {
            var s = 1e-5,
                o = t.x,
                a = t.y,
                h = 0,
                c = 0,
                l = [],
                d = Math.abs,
                f = 1 - s;
            if (i) {
                for (var p = -1 / 0, g = 1 / 0, m = a - s, v = a + s, _ = 0, y = e.length; y > _; _++) {
                    var w = e[_].values;
                    if (P.solveCubic(w, 0, o, l, 0, 1) > 0)
                        for (var x = l.length - 1; x >= 0; x--) {
                            var b = P.evaluate(w, l[x], 0).y;
                            m > b && b > p ? p = b : b > v && g > b && (g = b)
                        }
                }
                p = (p + a) / 2, g = (g + a) / 2, p > -1 / 0 && (h = n(new u(o, p), e)), 1 / 0 > g && (c = n(new u(o, g), e))
            } else
                for (var C = o - s, S = o + s, _ = 0, y = e.length; y > _; _++) {
                    var T = e[_],
                        w = T.values,
                        k = T.winding,
                        E = T.next;
                    if (k && (1 === k && a >= w[1] && a <= w[7] || a >= w[7] && a <= w[1]) && 1 === P.solveCubic(w, 1, a, l, 0, E.winding || E.values[1] !== a ? f : 1)) {
                        var A = l[0],
                            N = P.evaluate(w, A, 0).x,
                            M = P.evaluate(w, A, 1).y;
                        d(M) < s && !P.isLinear(w) || s > A && M * P.evaluate(T.previous.values, A, 1).y < 0 ? r && N >= C && S >= N && (++h, ++c) : C >= N ? h += k : N >= S && (c += k)
                    }
                }
            return Math.max(d(h), d(c))
        }

        function i(t, e, n) {
            e = e || function() {
                return !0
            };
            for (var i, r, s = [], o = .001, a = .999, u = 0, h = t.length; h > u; u++)
                if (i = r = t[u], !i._visited && e(i._winding)) {
                    var c = new M(y.NO_INSERT),
                        l = i._intersection,
                        d = l && l._segment,
                        f = !1,
                        p = 1;
                    do {
                        var g, m = p > 0 ? i._handleIn : i._handleOut,
                            v = p > 0 ? i._handleOut : i._handleIn;
                        if (f && (!e(i._winding) || n) && (l = i._intersection) && (g = l._segment) && g !== r) {
                            if (n) i._visited = g._visited, i = g, p = 1;
                            else {
                                var _ = i.getCurve();
                                p > 0 && (_ = _.getPrevious());
                                var w = _.getTangentAt(1 > p ? o : a, !0),
                                    x = g.getCurve(),
                                    b = x.getPrevious(),
                                    C = b.getTangentAt(a, !0),
                                    S = x.getTangentAt(o, !0),
                                    T = w.cross(C),
                                    E = w.cross(S);
                                if (0 !== T * E) {
                                    var P = E > T ? b : x,
                                        A = e(P._segment1._winding) ? P : E > T ? x : b,
                                        N = A._segment1;
                                    p = A === b ? -1 : 1, N._visited && i._path !== N._path || !e(N._winding) ? p = 1 : (i._visited = g._visited, i = g, N._visited && (p = 1))
                                } else p = 1
                            }
                            v = p > 0 ? i._handleOut : i._handleIn
                        }
                        c.add(new k(i._point, f && m, v)), f = !0, i._visited = !0, i = p > 0 ? i.getNext() : i.getPrevious()
                    } while (i && !i._visited && i !== r && i !== d && (i._intersection || e(i._winding)));
                    !i || i !== r && i !== d ? c.lastSegment._handleOut.set(0, 0) : (c.firstSegment.setHandleIn((i === d ? d : i)._handleIn), c.setClosed(!0)), c._segments.length > (c._closed ? c.isPolygon() ? 2 : 0 : 1) && s.push(c)
                }
            return s
        }
        return {
            _getWinding: function(t, e, i) {
                return n(t, this._getMonoCurves(), e, i)
            },
            unite: function(e) {
                return t(this, e, function(t) {
                    return 1 === t || 0 === t
                }, !1)
            },
            intersect: function(e) {
                return t(this, e, function(t) {
                    return 2 === t
                }, !1)
            },
            subtract: function(e) {
                return t(this, e, function(t) {
                    return 1 === t
                }, !0)
            },
            exclude: function(t) {
                return new w([this.subtract(t), t.subtract(this)])
            },
            divide: function(t) {
                return new w([this.subtract(t), this.intersect(t)])
            }
        }
    }), M.inject({
        _getMonoCurves: function() {
            function t(t) {
                var e = t[1],
                    r = t[7],
                    s = {
                        values: t,
                        winding: e === r ? 0 : e > r ? -1 : 1,
                        previous: n,
                        next: null
                    };
                n && (n.next = s), i.push(s), n = s
            }

            function e(e) {
                if (0 !== P.getLength(e)) {
                    var n = e[1],
                        i = e[3],
                        r = e[5],
                        s = e[7];
                    if (P.isLinear(e)) t(e);
                    else {
                        var o = 3 * (i - r) - n + s,
                            u = 2 * (n + r) - 4 * i,
                            h = i - n,
                            c = 1e-5,
                            l = [],
                            d = a.solveQuadratic(o, u, h, l, c, 1 - c);
                        if (0 === d) t(e);
                        else {
                            l.sort();
                            var f = l[0],
                                p = P.subdivide(e, f);
                            t(p[0]), d > 1 && (f = (l[1] - f) / (1 - f), p = P.subdivide(p[1], f), t(p[0])), t(p[1])
                        }
                    }
                }
            }
            var n, i = this._monoCurves;
            if (!i) {
                i = this._monoCurves = [];
                for (var r = this.getCurves(), s = this._segments, o = 0, u = r.length; u > o; o++) e(r[o].getValues());
                if (!this._closed && s.length > 1) {
                    var h = s[s.length - 1]._point,
                        c = s[0]._point,
                        l = h._x,
                        d = h._y,
                        f = c._x,
                        p = c._y;
                    e([l, d, l, d, f, p, f, p])
                }
                if (i.length > 0) {
                    var g = i[0],
                        m = i[i.length - 1];
                    g.previous = m, m.next = g
                }
            }
            return i
        },
        getInteriorPoint: function() {
            var t = this.getBounds(),
                e = t.getCenter(!0);
            if (!this.contains(e)) {
                for (var n = this._getMonoCurves(), i = [], r = e.y, s = [], o = 0, a = n.length; a > o; o++) {
                    var u = n[o].values;
                    if ((1 === n[o].winding && r >= u[1] && r <= u[7] || r >= u[7] && r <= u[1]) && P.solveCubic(u, 1, r, i, 0, 1) > 0)
                        for (var h = i.length - 1; h >= 0; h--) s.push(P.evaluate(u, i[h], 0).x);
                    if (s.length > 1) break
                }
                e.x = (s[0] + s[1]) / 2
            }
            return e
        },
        reorient: function() {
            return this.setClockwise(!0), this
        }
    }), L.inject({
        _getMonoCurves: function() {
            for (var t = this._children, e = [], n = 0, i = t.length; i > n; n++) e.push.apply(e, t[n]._getMonoCurves());
            return e
        },
        reorient: function() {
            var t = this.removeChildren().sort(function(t, e) {
                return e.getBounds().getArea() - t.getBounds().getArea()
            });
            this.addChildren(t);
            for (var e = t[0].isClockwise(), n = 1, i = t.length; i > n; n++) {
                for (var r = t[n].getInteriorPoint(), s = 0, o = n - 1; o >= 0; o--) t[o].contains(r) && s++;
                t[n].setClockwise(0 === s % 2 && e)
            }
            return this
        }
    });
    var D = e.extend({
            _class: "PathIterator",
            initialize: function(t, e, n, i) {
                function r(t, e) {
                    var n = P.getValues(t, e, i);
                    a.push(n), s(n, t._index, 0, 1)
                }

                function s(t, e, i, r) {
                    if (r - i > c && !P.isFlatEnough(t, n || .25)) {
                        var o = P.subdivide(t),
                            a = (i + r) / 2;
                        s(o[0], e, i, a), s(o[1], e, a, r)
                    } else {
                        var l = t[6] - t[0],
                            d = t[7] - t[1],
                            f = Math.sqrt(l * l + d * d);
                        f > 1e-5 && (h += f, u.push({
                            offset: h,
                            value: r,
                            index: e
                        }))
                    }
                }
                for (var o, a = [], u = [], h = 0, c = 1 / (e || 32), l = t._segments, d = l[0], f = 1, p = l.length; p > f; f++) o = l[f], r(d, o), d = o;
                t._closed && r(o, l[0]), this.curves = a, this.parts = u, this.length = h, this.index = 0
            },
            getParameterAt: function(t) {
                for (var e, n = this.index; e = n, !(0 == n || this.parts[--n].offset < t););
                for (var i = this.parts.length; i > e; e++) {
                    var r = this.parts[e];
                    if (r.offset >= t) {
                        this.index = e;
                        var s = this.parts[e - 1],
                            o = s && s.index == r.index ? s.value : 0,
                            a = s ? s.offset : 0;
                        return {
                            value: o + (r.value - o) * (t - a) / (r.offset - a),
                            index: r.index
                        }
                    }
                }
                var r = this.parts[this.parts.length - 1];
                return {
                    value: 1,
                    index: r.index
                }
            },
            evaluate: function(t, e) {
                var n = this.getParameterAt(t);
                return P.evaluate(this.curves[n.index], n.value, e)
            },
            drawPart: function(t, e, n) {
                e = this.getParameterAt(e), n = this.getParameterAt(n);
                for (var i = e.index; i <= n.index; i++) {
                    var r = P.getPart(this.curves[i], i == e.index ? e.value : 0, i == n.index ? n.value : 1);
                    i == e.index && t.moveTo(r[0], r[1]), t.bezierCurveTo.apply(t, r.slice(2))
                }
            }
        }, e.each(["getPoint", "getTangent", "getNormal", "getCurvature"], function(t, e) {
            this[t + "At"] = function(t) {
                return this.evaluate(t, e)
            }
        }, {})),
        I = e.extend({
            initialize: function(t, e) {
                this.points = [];
                for (var n, i = t._segments, r = 0, s = i.length; s > r; r++) {
                    var o = i[r].point.clone();
                    n && n.equals(o) || (this.points.push(o), n = o)
                }
                this.error = e
            },
            fit: function() {
                var t = this.points,
                    e = t.length;
                return this.segments = e > 0 ? [new k(t[0])] : [], e > 1 && this.fitCubic(0, e - 1, t[1].subtract(t[0]).normalize(), t[e - 2].subtract(t[e - 1]).normalize()), this.segments
            },
            fitCubic: function(e, n, i, r) {
                if (1 == n - e) {
                    var s = this.points[e],
                        o = this.points[n],
                        a = s.getDistance(o) / 3;
                    return this.addCurve([s, s.add(i.normalize(a)), o.add(r.normalize(a)), o]), t
                }
                for (var u, h = this.chordLengthParameterize(e, n), c = Math.max(this.error, this.error * this.error), l = 0; 4 >= l; l++) {
                    var d = this.generateBezier(e, n, h, i, r),
                        f = this.findMaxError(e, n, d, h);
                    if (f.error < this.error) return this.addCurve(d), t;
                    if (u = f.index, f.error >= c) break;
                    this.reparameterize(e, n, h, d), c = f.error
                }
                var p = this.points[u - 1].subtract(this.points[u]),
                    g = this.points[u].subtract(this.points[u + 1]),
                    m = p.add(g).divide(2).normalize();
                this.fitCubic(e, u, i, m), this.fitCubic(u, n, m.negate(), r)
            },
            addCurve: function(t) {
                var e = this.segments[this.segments.length - 1];
                e.setHandleOut(t[1].subtract(t[0])), this.segments.push(new k(t[3], t[2].subtract(t[3])))
            },
            generateBezier: function(t, e, n, i, r) {
                for (var s = 1e-11, o = this.points[t], a = this.points[e], u = [
                        [0, 0],
                        [0, 0]
                    ], h = [0, 0], c = 0, l = e - t + 1; l > c; c++) {
                    var d = n[c],
                        f = 1 - d,
                        p = 3 * d * f,
                        g = f * f * f,
                        m = p * f,
                        v = p * d,
                        _ = d * d * d,
                        y = i.normalize(m),
                        w = r.normalize(v),
                        x = this.points[t + c].subtract(o.multiply(g + m)).subtract(a.multiply(v + _));
                    u[0][0] += y.dot(y), u[0][1] += y.dot(w), u[1][0] = u[0][1], u[1][1] += w.dot(w), h[0] += y.dot(x), h[1] += w.dot(x)
                }
                var b, C, S = u[0][0] * u[1][1] - u[1][0] * u[0][1];
                if (Math.abs(S) > s) {
                    var T = u[0][0] * h[1] - u[1][0] * h[0],
                        k = h[0] * u[1][1] - h[1] * u[0][1];
                    b = k / S, C = T / S
                } else {
                    var E = u[0][0] + u[0][1],
                        P = u[1][0] + u[1][1];
                    b = C = Math.abs(E) > s ? h[0] / E : Math.abs(P) > s ? h[1] / P : 0
                }
                var A = a.getDistance(o);
                return s *= A, (s > b || s > C) && (b = C = A / 3), [o, o.add(i.normalize(b)), a.add(r.normalize(C)), a]
            },
            reparameterize: function(t, e, n, i) {
                for (var r = t; e >= r; r++) n[r - t] = this.findRoot(i, this.points[r], n[r - t])
            },
            findRoot: function(t, e, n) {
                for (var i = [], r = [], s = 0; 2 >= s; s++) i[s] = t[s + 1].subtract(t[s]).multiply(3);
                for (var s = 0; 1 >= s; s++) r[s] = i[s + 1].subtract(i[s]).multiply(2);
                var o = this.evaluate(3, t, n),
                    a = this.evaluate(2, i, n),
                    u = this.evaluate(1, r, n),
                    h = o.subtract(e),
                    c = a.dot(a) + h.dot(u);
                return Math.abs(c) < 1e-5 ? n : n - h.dot(a) / c
            },
            evaluate: function(t, e, n) {
                for (var i = e.slice(), r = 1; t >= r; r++)
                    for (var s = 0; t - r >= s; s++) i[s] = i[s].multiply(1 - n).add(i[s + 1].multiply(n));
                return i[0]
            },
            chordLengthParameterize: function(t, e) {
                for (var n = [0], i = t + 1; e >= i; i++) n[i - t] = n[i - t - 1] + this.points[i].getDistance(this.points[i - 1]);
                for (var i = 1, r = e - t; r >= i; i++) n[i] /= n[r];
                return n
            },
            findMaxError: function(t, e, n, i) {
                for (var r = Math.floor((e - t + 1) / 2), s = 0, o = t + 1; e > o; o++) {
                    var a = this.evaluate(3, n, i[o - t]),
                        u = a.subtract(this.points[o]),
                        h = u.x * u.x + u.y * u.y;
                    h >= s && (s = h, r = o)
                }
                return {
                    error: s,
                    index: r
                }
            }
        }),
        z = y.extend({
            _class: "TextItem",
            _boundsSelected: !0,
            _applyMatrix: !1,
            _canApplyMatrix: !1,
            _serializeFields: {
                content: null
            },
            _boundsGetter: "getBounds",
            initialize: function(n) {
                this._content = "", this._lines = [];
                var i = n && e.isPlainObject(n) && n.x === t && n.y === t;
                this._initialize(i && n, !i && u.read(arguments))
            },
            _equals: function(t) {
                return this._content === t._content
            },
            _clone: function xe(t) {
                return t.setContent(this._content), xe.base.call(this, t)
            },
            getContent: function() {
                return this._content
            },
            setContent: function(t) {
                this._content = "" + t, this._lines = this._content.split(/\r\n|\n|\r/gm), this._changed(265)
            },
            isEmpty: function() {
                return !this._content
            },
            getCharacterStyle: "#getStyle",
            setCharacterStyle: "#setStyle",
            getParagraphStyle: "#getStyle",
            setParagraphStyle: "#setStyle"
        }),
        j = z.extend({
            _class: "PointText",
            initialize: function() {
                z.apply(this, arguments)
            },
            clone: function(t) {
                return this._clone(new j(y.NO_INSERT), t)
            },
            getPoint: function() {
                var t = this._matrix.getTranslation();
                return new h(t.x, t.y, this, "setPoint")
            },
            setPoint: function() {
                var t = u.read(arguments);
                this.translate(t.subtract(this._matrix.getTranslation()))
            },
            _draw: function(t) {
                if (this._content) {
                    this._setStyles(t);
                    var e = this._style,
                        n = this._lines,
                        i = e.getLeading(),
                        r = t.shadowColor;
                    t.font = e.getFontStyle(), t.textAlign = e.getJustification();
                    for (var s = 0, o = n.length; o > s; s++) {
                        t.shadowColor = r;
                        var a = n[s];
                        e.hasFill() && (t.fillText(a, 0, 0), t.shadowColor = "rgba(0,0,0,0)"), e.hasStroke() && t.strokeText(a, 0, 0), t.translate(0, i)
                    }
                }
            },
            _getBounds: function(t, e) {
                var n = this._style,
                    i = this._lines,
                    r = i.length,
                    s = n.getJustification(),
                    o = n.getLeading(),
                    a = this.getView().getTextWidth(n.getFontStyle(), i),
                    u = 0;
                "left" !== s && (u -= a / ("center" === s ? 2 : 1));
                var h = new f(u, r ? -.75 * o : 0, a, r * o);
                return e ? e._transformBounds(h, h) : h
            }
        }),
        O = e.extend(new function() {
            function t(t) {
                var e, i = t.match(/^#(\w{1,2})(\w{1,2})(\w{1,2})$/);
                if (i) {
                    e = [0, 0, 0];
                    for (var r = 0; 3 > r; r++) {
                        var o = i[r + 1];
                        e[r] = parseInt(1 == o.length ? o + o : o, 16) / 255
                    }
                } else if (i = t.match(/^rgba?\((.*)\)$/)) {
                    e = i[1].split(",");
                    for (var r = 0, a = e.length; a > r; r++) {
                        var o = +e[r];
                        e[r] = 3 > r ? o / 255 : o
                    }
                } else {
                    var u = s[t];
                    if (!u) {
                        n || (n = Q.getContext(1, 1), n.globalCompositeOperation = "copy"), n.fillStyle = "rgba(0,0,0,0)", n.fillStyle = t, n.fillRect(0, 0, 1, 1);
                        var h = n.getImageData(0, 0, 1, 1).data;
                        u = s[t] = [h[0] / 255, h[1] / 255, h[2] / 255]
                    }
                    e = u.slice()
                }
                return e
            }
            var n, i = {
                    gray: ["gray"],
                    rgb: ["red", "green", "blue"],
                    hsb: ["hue", "saturation", "brightness"],
                    hsl: ["hue", "saturation", "lightness"],
                    gradient: ["gradient", "origin", "destination", "highlight"]
                },
                r = {},
                s = {},
                a = [
                    [0, 3, 1],
                    [2, 0, 1],
                    [1, 0, 3],
                    [1, 2, 0],
                    [3, 1, 0],
                    [0, 1, 2]
                ],
                h = {
                    "rgb-hsb": function(t, e, n) {
                        var i = Math.max(t, e, n),
                            r = Math.min(t, e, n),
                            s = i - r,
                            o = 0 === s ? 0 : 60 * (i == t ? (e - n) / s + (n > e ? 6 : 0) : i == e ? (n - t) / s + 2 : (t - e) / s + 4);
                        return [o, 0 === i ? 0 : s / i, i]
                    },
                    "hsb-rgb": function(t, e, n) {
                        t = (t / 60 % 6 + 6) % 6;
                        var i = Math.floor(t),
                            r = t - i,
                            i = a[i],
                            s = [n, n * (1 - e), n * (1 - e * r), n * (1 - e * (1 - r))];
                        return [s[i[0]], s[i[1]], s[i[2]]]
                    },
                    "rgb-hsl": function(t, e, n) {
                        var i = Math.max(t, e, n),
                            r = Math.min(t, e, n),
                            s = i - r,
                            o = 0 === s,
                            a = o ? 0 : 60 * (i == t ? (e - n) / s + (n > e ? 6 : 0) : i == e ? (n - t) / s + 2 : (t - e) / s + 4),
                            u = (i + r) / 2,
                            h = o ? 0 : .5 > u ? s / (i + r) : s / (2 - i - r);
                        return [a, h, u]
                    },
                    "hsl-rgb": function(t, e, n) {
                        if (t = (t / 360 % 1 + 1) % 1, 0 === e) return [n, n, n];
                        for (var i = [t + 1 / 3, t, t - 1 / 3], r = .5 > n ? n * (1 + e) : n + e - n * e, s = 2 * n - r, o = [], a = 0; 3 > a; a++) {
                            var u = i[a];
                            0 > u && (u += 1), u > 1 && (u -= 1), o[a] = 1 > 6 * u ? s + 6 * (r - s) * u : 1 > 2 * u ? r : 2 > 3 * u ? s + 6 * (r - s) * (2 / 3 - u) : s
                        }
                        return o
                    },
                    "rgb-gray": function(t, e, n) {
                        return [.2989 * t + .587 * e + .114 * n]
                    },
                    "gray-rgb": function(t) {
                        return [t, t, t]
                    },
                    "gray-hsb": function(t) {
                        return [0, 0, t]
                    },
                    "gray-hsl": function(t) {
                        return [0, 0, t]
                    },
                    "gradient-rgb": function() {
                        return []
                    },
                    "rgb-gradient": function() {
                        return []
                    }
                };
            return e.each(i, function(t, n) {
                r[n] = [], e.each(t, function(t, s) {
                    var o = e.capitalize(t),
                        a = /^(hue|saturation)$/.test(t),
                        h = r[n][s] = "gradient" === t ? function(t) {
                            var e = this._components[0];
                            return t = R.read(Array.isArray(t) ? t : arguments, 0, {
                                readNull: !0
                            }), e !== t && (e && e._removeOwner(this), t && t._addOwner(this)), t
                        } : "gradient" === n ? function() {
                            return u.read(arguments, 0, {
                                readNull: "highlight" === t,
                                clone: !0
                            })
                        } : function(t) {
                            return null == t || isNaN(t) ? 0 : t
                        };
                    this["get" + o] = function() {
                        return this._type === n || a && /^hs[bl]$/.test(this._type) ? this._components[s] : this._convert(n)[s]
                    }, this["set" + o] = function(t) {
                        this._type === n || a && /^hs[bl]$/.test(this._type) || (this._components = this._convert(n), this._properties = i[n], this._type = n), t = h.call(this, t), null != t && (this._components[s] = t, this._changed())
                    }
                }, this)
            }, {
                _class: "Color",
                _readIndex: !0,
                initialize: function c(e) {
                    var n, s, o, a, u = Array.prototype.slice,
                        h = arguments,
                        l = 0;
                    Array.isArray(e) && (h = e, e = h[0]);
                    var d = null != e && typeof e;
                    if ("string" === d && e in i && (n = e, e = h[1], Array.isArray(e) ? (s = e, o = h[2]) : (this.__read && (l = 1), h = u.call(h, 1), d = typeof e)), !s) {
                        if (a = "number" === d ? h : "object" === d && null != e.length ? e : null) {
                            n || (n = a.length >= 3 ? "rgb" : "gray");
                            var f = i[n].length;
                            o = a[f], this.__read && (l += a === arguments ? f + (null != o ? 1 : 0) : 1), a.length > f && (a = u.call(a, 0, f))
                        } else if ("string" === d) n = "rgb", s = t(e), 4 === s.length && (o = s[3], s.length--);
                        else if ("object" === d)
                            if (e.constructor === c) {
                                if (n = e._type, s = e._components.slice(), o = e._alpha, "gradient" === n)
                                    for (var p = 1, g = s.length; g > p; p++) {
                                        var m = s[p];
                                        m && (s[p] = m.clone())
                                    }
                            } else if (e.constructor === R) n = "gradient", a = h;
                        else {
                            n = "hue" in e ? "lightness" in e ? "hsl" : "hsb" : "gradient" in e || "stops" in e || "radial" in e ? "gradient" : "gray" in e ? "gray" : "rgb";
                            var v = i[n];
                            y = r[n], this._components = s = [];
                            for (var p = 0, g = v.length; g > p; p++) {
                                var _ = e[v[p]];
                                null == _ && 0 === p && "gradient" === n && "stops" in e && (_ = {
                                    stops: e.stops,
                                    radial: e.radial
                                }), _ = y[p].call(this, _), null != _ && (s[p] = _)
                            }
                            o = e.alpha
                        }
                        this.__read && n && (l = 1)
                    }
                    if (this._type = n || "rgb", "gradient" === n && (this._id = c._id = (c._id || 0) + 1), !s) {
                        this._components = s = [];
                        for (var y = r[this._type], p = 0, g = y.length; g > p; p++) {
                            var _ = y[p].call(this, a && a[p]);
                            null != _ && (s[p] = _)
                        }
                    }
                    this._components = s, this._properties = i[this._type], this._alpha = o, this.__read && (this.__read = l)
                },
                _serialize: function(t, n) {
                    var i = this.getComponents();
                    return e.serialize(/^(gray|rgb)$/.test(this._type) ? i : [this._type].concat(i), t, !0, n)
                },
                _changed: function() {
                    this._canvasStyle = null, this._owner && this._owner._changed(65)
                },
                _convert: function(t) {
                    var e;
                    return this._type === t ? this._components.slice() : (e = h[this._type + "-" + t]) ? e.apply(this, this._components) : h["rgb-" + t].apply(this, h[this._type + "-rgb"].apply(this, this._components))
                },
                convert: function(t) {
                    return new O(t, this._convert(t), this._alpha)
                },
                getType: function() {
                    return this._type
                },
                setType: function(t) {
                    this._components = this._convert(t), this._properties = i[t], this._type = t
                },
                getComponents: function() {
                    var t = this._components.slice();
                    return null != this._alpha && t.push(this._alpha), t
                },
                getAlpha: function() {
                    return null != this._alpha ? this._alpha : 1
                },
                setAlpha: function(t) {
                    this._alpha = null == t ? null : Math.min(Math.max(t, 0), 1), this._changed()
                },
                hasAlpha: function() {
                    return null != this._alpha
                },
                equals: function(t) {
                    var n = e.isPlainValue(t, !0) ? O.read(arguments) : t;
                    return n === this || n && this._class === n._class && this._type === n._type && this._alpha === n._alpha && e.equals(this._components, n._components) || !1
                },
                toString: function() {
                    for (var t = this._properties, e = [], n = "gradient" === this._type, i = o.instance, r = 0, s = t.length; s > r; r++) {
                        var a = this._components[r];
                        null != a && e.push(t[r] + ": " + (n ? a : i.number(a)))
                    }
                    return null != this._alpha && e.push("alpha: " + i.number(this._alpha)), "{ " + e.join(", ") + " }"
                },
                toCSS: function(t) {
                    function e(t) {
                        return Math.round(255 * (0 > t ? 0 : t > 1 ? 1 : t))
                    }
                    var n = this._convert("rgb"),
                        i = t || null == this._alpha ? 1 : this._alpha;
                    return n = [e(n[0]), e(n[1]), e(n[2])], 1 > i && n.push(0 > i ? 0 : i), t ? "#" + ((1 << 24) + (n[0] << 16) + (n[1] << 8) + n[2]).toString(16).slice(1) : (4 == n.length ? "rgba(" : "rgb(") + n.join(",") + ")"
                },
                toCanvasStyle: function(t) {
                    if (this._canvasStyle) return this._canvasStyle;
                    if ("gradient" !== this._type) return this._canvasStyle = this.toCSS();
                    var e, n = this._components,
                        i = n[0],
                        r = i._stops,
                        s = n[1],
                        o = n[2];
                    if (i._radial) {
                        var a = o.getDistance(s),
                            u = n[3];
                        if (u) {
                            var h = u.subtract(s);
                            h.getLength() > a && (u = s.add(h.normalize(a - .1)))
                        }
                        var c = u || s;
                        e = t.createRadialGradient(c.x, c.y, 0, s.x, s.y, a)
                    } else e = t.createLinearGradient(s.x, s.y, o.x, o.y);
                    for (var l = 0, d = r.length; d > l; l++) {
                        var f = r[l];
                        e.addColorStop(f._rampPoint, f._color.toCanvasStyle())
                    }
                    return this._canvasStyle = e
                },
                transform: function(t) {
                    if ("gradient" === this._type) {
                        for (var e = this._components, n = 1, i = e.length; i > n; n++) {
                            var r = e[n];
                            t._transformPoint(r, r, !0)
                        }
                        this._changed()
                    }
                },
                statics: {
                    _types: i,
                    random: function() {
                        var t = Math.random;
                        return new O(t(), t(), t())
                    }
                }
            })
        }, new function() {
            var t = {
                add: function(t, e) {
                    return t + e
                },
                subtract: function(t, e) {
                    return t - e
                },
                multiply: function(t, e) {
                    return t * e
                },
                divide: function(t, e) {
                    return t / e
                }
            };
            return e.each(t, function(t, e) {
                this[e] = function(e) {
                    e = O.read(arguments);
                    for (var n = this._type, i = this._components, r = e._convert(n), s = 0, o = i.length; o > s; s++) r[s] = t(i[s], r[s]);
                    return new O(n, r, null != this._alpha ? t(this._alpha, e.getAlpha()) : null)
                }
            }, {})
        });
    e.each(O._types, function(t, n) {
        var i = this[e.capitalize(n) + "Color"] = function(t) {
            var e = null != t && typeof t,
                i = "object" === e && null != t.length ? t : "string" === e ? null : arguments;
            return i ? new O(n, i) : new O(t)
        };
        if (3 == n.length) {
            var r = n.toUpperCase();
            O[r] = this[r + "Color"] = i
        }
    }, e.exports);
    var R = e.extend({
            _class: "Gradient",
            initialize: function be(t, e) {
                this._id = be._id = (be._id || 0) + 1, t && this._set(t) && (t = e = null), this._stops || this.setStops(t || ["white", "black"]), null == this._radial && this.setRadial("string" == typeof e && "radial" === e || e || !1)
            },
            _serialize: function(t, n) {
                return n.add(this, function() {
                    return e.serialize([this._stops, this._radial], t, !0, n)
                })
            },
            _changed: function() {
                for (var t = 0, e = this._owners && this._owners.length; e > t; t++) this._owners[t]._changed()
            },
            _addOwner: function(t) {
                this._owners || (this._owners = []), this._owners.push(t)
            },
            _removeOwner: function(e) {
                var n = this._owners ? this._owners.indexOf(e) : -1; - 1 != n && (this._owners.splice(n, 1), 0 === this._owners.length && (this._owners = t))
            },
            clone: function() {
                for (var t = [], e = 0, n = this._stops.length; n > e; e++) t[e] = this._stops[e].clone();
                return new R(t)
            },
            getStops: function() {
                return this._stops
            },
            setStops: function(e) {
                if (this.stops)
                    for (var n = 0, i = this._stops.length; i > n; n++) this._stops[n]._owner = t;
                if (e.length < 2) throw Error("Gradient stop list needs to contain at least two stops.");
                this._stops = q.readAll(e, 0, {
                    clone: !0
                });
                for (var n = 0, i = this._stops.length; i > n; n++) {
                    var r = this._stops[n];
                    r._owner = this, r._defaultRamp && r.setRampPoint(n / (i - 1))
                }
                this._changed()
            },
            getRadial: function() {
                return this._radial
            },
            setRadial: function(t) {
                this._radial = t, this._changed()
            },
            equals: function(t) {
                if (t === this) return !0;
                if (t && this._class === t._class && this._stops.length === t._stops.length) {
                    for (var e = 0, n = this._stops.length; n > e; e++)
                        if (!this._stops[e].equals(t._stops[e])) return !1;
                    return !0
                }
                return !1
            }
        }),
        q = e.extend({
            _class: "GradientStop",
            initialize: function(e, n) {
                if (e) {
                    var i, r;
                    n === t && Array.isArray(e) ? (i = e[0], r = e[1]) : e.color ? (i = e.color, r = e.rampPoint) : (i = e, r = n), this.setColor(i), this.setRampPoint(r)
                }
            },
            clone: function() {
                return new q(this._color.clone(), this._rampPoint)
            },
            _serialize: function(t, n) {
                return e.serialize([this._color, this._rampPoint], t, !0, n)
            },
            _changed: function() {
                this._owner && this._owner._changed(65)
            },
            getRampPoint: function() {
                return this._rampPoint
            },
            setRampPoint: function(t) {
                this._defaultRamp = null == t, this._rampPoint = t || 0, this._changed()
            },
            getColor: function() {
                return this._color
            },
            setColor: function(t) {
                this._color = O.read(arguments), this._color === t && (this._color = t.clone()), this._color._owner = this, this._changed()
            },
            equals: function(t) {
                return t === this || t && this._class === t._class && this._color.equals(t._color) && this._rampPoint == t._rampPoint || !1
            }
        }),
        F = e.extend(new function() {
            var n = {
                    fillColor: t,
                    strokeColor: t,
                    strokeWidth: 1,
                    strokeCap: "butt",
                    strokeJoin: "miter",
                    strokeScaling: !0,
                    miterLimit: 10,
                    dashOffset: 0,
                    dashArray: [],
                    windingRule: "nonzero",
                    shadowColor: t,
                    shadowBlur: 0,
                    shadowOffset: new u,
                    selectedColor: t,
                    fontFamily: "sans-serif",
                    fontWeight: "normal",
                    fontSize: 12,
                    font: "sans-serif",
                    leading: null,
                    justification: "left"
                },
                i = {
                    strokeWidth: 97,
                    strokeCap: 97,
                    strokeJoin: 97,
                    strokeScaling: 105,
                    miterLimit: 97,
                    fontFamily: 9,
                    fontWeight: 9,
                    fontSize: 9,
                    font: 9,
                    leading: 9,
                    justification: 9
                },
                r = {
                    beans: !0
                },
                s = {
                    _defaults: n,
                    _textDefaults: new e(n, {
                        fillColor: new O
                    }),
                    beans: !0
                };
            return e.each(n, function(n, o) {
                var a = /Color$/.test(o),
                    h = "shadowOffset" === o,
                    c = e.capitalize(o),
                    l = i[o],
                    d = "set" + c,
                    f = "get" + c;
                s[d] = function(e) {
                    var n = this._owner,
                        i = n && n._children;
                    if (i && i.length > 0 && !(n instanceof L))
                        for (var r = 0, s = i.length; s > r; r++) i[r]._style[d](e);
                    else {
                        var u = this._values[o];
                        u != e && (a && (u && (u._owner = t), e && e.constructor === O && (e._owner && (e = e.clone()), e._owner = n)), this._values[o] = e, n && n._changed(l || 65))
                    }
                }, s[f] = function(n) {
                    var i, r = this._owner,
                        s = r && r._children;
                    if (!s || 0 === s.length || n || r instanceof L) {
                        var i = this._values[o];
                        if (i === t) i = this._defaults[o], i && i.clone && (i = i.clone()), this._values[o] = i;
                        else {
                            var c = a ? O : h ? u : null;
                            !c || i && i.constructor === c || (this._values[o] = i = c.read([i], 0, {
                                readNull: !0,
                                clone: !0
                            }), i && a && (i._owner = r))
                        }
                        return i
                    }
                    for (var l = 0, d = s.length; d > l; l++) {
                        var p = s[l]._style[f]();
                        if (0 === l) i = p;
                        else if (!e.equals(i, p)) return t
                    }
                    return i
                }, r[f] = function(t) {
                    return this._style[f](t)
                }, r[d] = function(t) {
                    this._style[d](t)
                }
            }), y.inject(r), s
        }, {
            _class: "Style",
            initialize: function(t, e, n) {
                this._values = {}, this._owner = e, this._project = e && e._project || n || paper.project, e instanceof z && (this._defaults = this._textDefaults), t && this.set(t)
            },
            set: function(t) {
                var e = t instanceof F,
                    n = e ? t._values : t;
                if (n)
                    for (var i in n)
                        if (i in this._defaults) {
                            var r = n[i];
                            this[i] = r && e && r.clone ? r.clone() : r
                        }
            },
            equals: function(t) {
                return t === this || t && this._class === t._class && e.equals(this._values, t._values) || !1
            },
            hasFill: function() {
                return !!this.getFillColor()
            },
            hasStroke: function() {
                return !!this.getStrokeColor() && this.getStrokeWidth() > 0
            },
            hasShadow: function() {
                return !!this.getShadowColor() && this.getShadowBlur() > 0
            },
            getView: function() {
                return this._project.getView()
            },
            getFontStyle: function() {
                var t = this.getFontSize();
                return this.getFontWeight() + " " + t + (/[a-z]/i.test(t + "") ? " " : "px ") + this.getFontFamily()
            },
            getFont: "#getFontFamily",
            setFont: "#setFontFamily",
            getLeading: function Ce() {
                var t = Ce.base.call(this),
                    e = this.getFontSize();
                return /pt|em|%|px/.test(e) && (e = this.getView().getPixelSize(e)), null != t ? t : 1.2 * e
            }
        }),
        B = new function() {
            function t(t, e, n, i) {
                for (var r = ["", "webkit", "moz", "Moz", "ms", "o"], s = e[0].toUpperCase() + e.substring(1), o = 0; 6 > o; o++) {
                    var a = r[o],
                        u = a ? a + s : e;
                    if (u in t) {
                        if (!n) return t[u];
                        t[u] = i;
                        break
                    }
                }
            }
            return {
                getStyles: function(t) {
                    var e = t && 9 !== t.nodeType ? t.ownerDocument : t,
                        n = e && e.defaultView;
                    return n && n.getComputedStyle(t, "")
                },
                getBounds: function(t, e) {
                    var n, i = t.ownerDocument,
                        r = i.body,
                        s = i.documentElement;
                    try {
                        n = t.getBoundingClientRect()
                    } catch (o) {
                        n = {
                            left: 0,
                            top: 0,
                            width: 0,
                            height: 0
                        }
                    }
                    var a = n.left - (s.clientLeft || r.clientLeft || 0),
                        u = n.top - (s.clientTop || r.clientTop || 0);
                    if (!e) {
                        var h = i.defaultView;
                        a += h.pageXOffset || s.scrollLeft || r.scrollLeft, u += h.pageYOffset || s.scrollTop || r.scrollTop
                    }
                    return new f(a, u, n.width, n.height)
                },
                getViewportBounds: function(t) {
                    var e = t.ownerDocument,
                        n = e.defaultView,
                        i = e.documentElement;
                    return new f(0, 0, n.innerWidth || i.clientWidth, n.innerHeight || i.clientHeight)
                },
                getOffset: function(t, e) {
                    return B.getBounds(t, e).getPoint()
                },
                getSize: function(t) {
                    return B.getBounds(t, !0).getSize()
                },
                isInvisible: function(t) {
                    return B.getSize(t).equals(new c(0, 0))
                },
                isInView: function(t) {
                    return !B.isInvisible(t) && B.getViewportBounds(t).intersects(B.getBounds(t, !0))
                },
                getPrefixed: function(e, n) {
                    return t(e, n)
                },
                setPrefixed: function(e, n, i) {
                    if ("object" == typeof n)
                        for (var r in n) t(e, r, !0, n[r]);
                    else t(e, n, !0, i)
                }
            }
        },
        H = {
            add: function(t, e) {
                for (var n in e)
                    for (var i = e[n], r = n.split(/[\s,]+/g), s = 0, o = r.length; o > s; s++) t.addEventListener(r[s], i, !1)
            },
            remove: function(t, e) {
                for (var n in e)
                    for (var i = e[n], r = n.split(/[\s,]+/g), s = 0, o = r.length; o > s; s++) t.removeEventListener(r[s], i, !1)
            },
            getPoint: function(t) {
                var e = t.targetTouches ? t.targetTouches.length ? t.targetTouches[0] : t.changedTouches[0] : t;
                return new u(e.pageX || e.clientX + document.documentElement.scrollLeft, e.pageY || e.clientY + document.documentElement.scrollTop)
            },
            getTarget: function(t) {
                return t.target || t.srcElement
            },
            getRelatedTarget: function(t) {
                return t.relatedTarget || t.toElement
            },
            getOffset: function(t, e) {
                return H.getPoint(t).subtract(B.getOffset(e || H.getTarget(t)))
            },
            stop: function(t) {
                t.stopPropagation(), t.preventDefault()
            }
        };
    H.requestAnimationFrame = new function() {
        function t() {
            for (var e = s.length - 1; e >= 0; e--) {
                var a = s[e],
                    u = a[0],
                    h = a[1];
                (!h || ("true" == r.getAttribute(h, "keepalive") || o) && B.isInView(h)) && (s.splice(e, 1), u())
            }
            n && (s.length ? n(t) : i = !1)
        }
        var e, n = B.getPrefixed(window, "requestAnimationFrame"),
            i = !1,
            s = [],
            o = !0;
        return H.add(window, {
                focus: function() {
                    o = !0
                },
                blur: function() {
                    o = !1
                }
            }),
            function(r, o) {
                s.push([r, o]), n ? i || (n(t), i = !0) : e || (e = setInterval(t, 1e3 / 60))
            }
    };
    var W = e.extend(n, {
            _class: "View",
            initialize: function Se(t, e) {
                this._project = t, this._scope = t._scope, this._element = e;
                var n;
                this._pixelRatio || (this._pixelRatio = window.devicePixelRatio || 1), this._id = e.getAttribute("id"), null == this._id && e.setAttribute("id", this._id = "view-" + Se._id++), H.add(e, this._viewEvents);
                var i = "none";
                if (B.setPrefixed(e.style, {
                        userSelect: i,
                        touchAction: i,
                        touchCallout: i,
                        contentZooming: i,
                        userDrag: i,
                        tapHighlightColor: "rgba(0,0,0,0)"
                    }), r.hasAttribute(e, "resize")) {
                    var s = B.getOffset(e, !0),
                        o = this;
                    n = B.getViewportBounds(e).getSize().subtract(s), this._windowEvents = {
                        resize: function() {
                            B.isInvisible(e) || (s = B.getOffset(e, !0)), o.setViewSize(B.getViewportBounds(e).getSize().subtract(s))
                        }
                    }, H.add(window, this._windowEvents)
                } else if (n = B.getSize(e), n.isNaN() || n.isZero()) {
                    var a = function(t) {
                        return e[t] || parseInt(e.getAttribute(t), 10)
                    };
                    n = new c(a("width"), a("height"))
                }
                if (this._setViewSize(n), r.hasAttribute(e, "stats") && "undefined" != typeof Stats) {
                    this._stats = new Stats;
                    var u = this._stats.domElement,
                        h = u.style,
                        s = B.getOffset(e);
                    h.position = "absolute", h.left = s.x + "px", h.top = s.y + "px", document.body.appendChild(u)
                }
                Se._views.push(this), Se._viewsById[this._id] = this, this._viewSize = n, (this._matrix = new g)._owner = this, this._zoom = 1, Se._focused || (Se._focused = this), this._frameItems = {}, this._frameItemCount = 0
            },
            remove: function() {
                return this._project ? (W._focused === this && (W._focused = null), W._views.splice(W._views.indexOf(this), 1), delete W._viewsById[this._id], this._project._view === this && (this._project._view = null), H.remove(this._element, this._viewEvents), H.remove(window, this._windowEvents), this._element = this._project = null, this.off("frame"), this._animate = !1, this._frameItems = {}, !0) : !1
            },
            _events: {
                onFrame: {
                    install: function() {
                        this.play()
                    },
                    uninstall: function() {
                        this.pause()
                    }
                },
                onResize: {}
            },
            _animate: !1,
            _time: 0,
            _count: 0,
            _requestFrame: function() {
                var t = this;
                H.requestAnimationFrame(function() {
                    t._requested = !1, t._animate && (t._requestFrame(), t._handleFrame())
                }, this._element), this._requested = !0
            },
            _handleFrame: function() {
                paper = this._scope;
                var t = Date.now() / 1e3,
                    n = this._before ? t - this._before : 0;
                this._before = t, this._handlingFrame = !0, this.emit("frame", new e({
                    delta: n,
                    time: this._time += n,
                    count: this._count++
                })), this._stats && this._stats.update(), this._handlingFrame = !1, this.update()
            },
            _animateItem: function(t, e) {
                var n = this._frameItems;
                e ? (n[t._id] = {
                    item: t,
                    time: 0,
                    count: 0
                }, 1 === ++this._frameItemCount && this.on("frame", this._handleFrameItems)) : (delete n[t._id], 0 === --this._frameItemCount && this.off("frame", this._handleFrameItems))
            },
            _handleFrameItems: function(t) {
                for (var n in this._frameItems) {
                    var i = this._frameItems[n];
                    i.item.emit("frame", new e(t, {
                        time: i.time += t.delta,
                        count: i.count++
                    }))
                }
            },
            _update: function() {
                this._project._needsUpdate = !0, this._handlingFrame || (this._animate ? this._handleFrame() : this.update())
            },
            _changed: function(t) {
                1 & t && (this._project._needsUpdate = !0)
            },
            _transform: function(t) {
                this._matrix.concatenate(t), this._bounds = null, this._update()
            },
            getElement: function() {
                return this._element
            },
            getPixelRatio: function() {
                return this._pixelRatio
            },
            getResolution: function() {
                return 72 * this._pixelRatio
            },
            getViewSize: function() {
                var t = this._viewSize;
                return new d(t.width, t.height, this, "setViewSize")
            },
            setViewSize: function() {
                var t = c.read(arguments),
                    e = t.subtract(this._viewSize);
                e.isZero() || (this._viewSize.set(t.width, t.height), this._setViewSize(t), this._bounds = null, this.emit("resize", {
                    size: t,
                    delta: e
                }), this._update())
            },
            _setViewSize: function(t) {
                var e = this._element;
                e.width = t.width, e.height = t.height
            },
            getBounds: function() {
                return this._bounds || (this._bounds = this._matrix.inverted()._transformBounds(new f(new u, this._viewSize))), this._bounds
            },
            getSize: function() {
                return this.getBounds().getSize()
            },
            getCenter: function() {
                return this.getBounds().getCenter()
            },
            setCenter: function() {
                var t = u.read(arguments);
                this.scrollBy(t.subtract(this.getCenter()))
            },
            getZoom: function() {
                return this._zoom
            },
            setZoom: function(t) {
                this._transform((new g).scale(t / this._zoom, this.getCenter())), this._zoom = t
            },
            isVisible: function() {
                return B.isInView(this._element)
            },
            scrollBy: function() {
                this._transform((new g).translate(u.read(arguments).negate()))
            },
            play: function() {
                this._animate = !0, this._requested || this._requestFrame()
            },
            pause: function() {
                this._animate = !1
            },
            draw: function() {
                this.update()
            },
            projectToView: function() {
                return this._matrix._transformPoint(u.read(arguments))
            },
            viewToProject: function() {
                return this._matrix._inverseTransform(u.read(arguments))
            }
        }, {
            statics: {
                _views: [],
                _viewsById: {},
                _id: 0,
                create: function(t, e) {
                    return "string" == typeof e && (e = document.getElementById(e)), new $(t, e)
                }
            }
        }, new function() {
            function t(t) {
                var e = H.getTarget(t);
                return e.getAttribute && W._viewsById[e.getAttribute("id")]
            }

            function e(t, e) {
                return t.viewToProject(H.getOffset(e, t._element))
            }

            function n() {
                if (!W._focused || !W._focused.isVisible())
                    for (var t = 0, e = W._views.length; e > t; t++) {
                        var n = W._views[t];
                        if (n && n.isVisible()) {
                            W._focused = o = n;
                            break
                        }
                    }
            }

            function i(t, e, n) {
                t._handleEvent("mousemove", e, n);
                var i = t._scope.tool;
                return i && i._handleEvent(c && i.responds("mousedrag") ? "mousedrag" : "mousemove", e, n), t.update(), i
            }
            var r, s, o, a, u, h, c = !1,
                l = window.navigator;
            l.pointerEnabled || l.msPointerEnabled ? (a = "pointerdown MSPointerDown", u = "pointermove MSPointerMove", h = "pointerup pointercancel MSPointerUp MSPointerCancel") : (a = "touchstart", u = "touchmove", h = "touchend touchcancel", "ontouchstart" in window && l.userAgent.match(/mobile|tablet|ip(ad|hone|od)|android|silk/i) || (a += " mousedown", u += " mousemove", h += " mouseup"));
            var d = {
                    "selectstart dragstart": function(t) {
                        c && t.preventDefault()
                    }
                },
                f = {
                    mouseout: function(t) {
                        var n = W._focused,
                            r = H.getRelatedTarget(t);
                        !n || r && "HTML" !== r.nodeName || i(n, e(n, t), t)
                    },
                    scroll: n
                };
            return d[a] = function(n) {
                var i = W._focused = t(n),
                    s = e(i, n);
                c = !0, i._handleEvent("mousedown", s, n), (r = i._scope.tool) && r._handleEvent("mousedown", s, n), i.update()
            }, f[u] = function(a) {
                var u = W._focused;
                if (!c) {
                    var h = t(a);
                    h ? (u !== h && i(u, e(u, a), a), s = u, u = W._focused = o = h) : o && o === u && (u = W._focused = s, n())
                }
                if (u) {
                    var l = e(u, a);
                    (c || u.getBounds().contains(l)) && (r = i(u, l, a))
                }
            }, f[h] = function(t) {
                var n = W._focused;
                if (n && c) {
                    var i = e(n, t);
                    c = !1, n._handleEvent("mouseup", i, t), r && r._handleEvent("mouseup", i, t), n.update()
                }
            }, H.add(document, f), H.add(window, {
                load: n
            }), {
                _viewEvents: d,
                _handleEvent: function() {},
                statics: {
                    updateFocus: n
                }
            }
        }),
        $ = W.extend({
            _class: "CanvasView",
            initialize: function(t, e) {
                if (!(e instanceof HTMLCanvasElement)) {
                    var n = c.read(arguments);
                    if (n.isZero()) throw Error("Cannot create CanvasView with the provided argument: " + [].slice.call(arguments, 1));
                    e = Q.getCanvas(n)
                }
                if (this._context = e.getContext("2d"), this._eventCounters = {}, this._pixelRatio = 1, !/^off|false$/.test(r.getAttribute(e, "hidpi"))) {
                    var i = window.devicePixelRatio || 1,
                        s = B.getPrefixed(this._context, "backingStorePixelRatio") || 1;
                    this._pixelRatio = i / s
                }
                W.call(this, t, e)
            },
            _setViewSize: function(t) {
                var e = t.width,
                    n = t.height,
                    i = this._pixelRatio,
                    r = this._element,
                    s = r.style;
                r.width = e * i, r.height = n * i, 1 !== i && (s.width = e + "px", s.height = n + "px", this._context.scale(i, i))
            },
            getPixelSize: function(t) {
                var e = this._context,
                    n = e.font;
                return e.font = t + " serif", t = parseFloat(e.font), e.font = n, t
            },
            getTextWidth: function(t, e) {
                var n = this._context,
                    i = n.font,
                    r = 0;
                n.font = t;
                for (var s = 0, o = e.length; o > s; s++) r = Math.max(r, n.measureText(e[s]).width);
                return n.font = i, r
            },
            update: function() {
                var t = this._project;
                if (!t || !t._needsUpdate) return !1;
                var e = this._context,
                    n = this._viewSize;
                return e.clearRect(0, 0, n.width + 1, n.height + 1), t.draw(e, this._matrix, this._pixelRatio), t._needsUpdate = !1, !0
            }
        }, new function() {
            function e(e, n, i, r, s, o) {
                function a(e) {
                    return e.responds(n) && (u || (u = new Z(n, i, r, s, o ? r.subtract(o) : null)), e.emit(n, u) && u.isStopped) ? (i.preventDefault(), !0) : t
                }
                for (var u, h = s; h;) {
                    if (a(h)) return !0;
                    h = h.getParent()
                }
                return a(e) ? !0 : !1
            }
            var n, i, r, s, o, a, u, h, c;
            return {
                _handleEvent: function(t, l, d) {
                    if (this._eventCounters[t]) {
                        var f = this._project,
                            p = f.hitTest(l, {
                                tolerance: 0,
                                fill: !0,
                                stroke: !0
                            }),
                            g = p && p.item,
                            m = !1;
                        switch (t) {
                            case "mousedown":
                                for (m = e(this, t, d, l, g), h = o == g && Date.now() - c < 300, s = o = g, n = i = r = l, u = !m && g; u && !u.responds("mousedrag");) u = u._parent;
                                break;
                            case "mouseup":
                                m = e(this, t, d, l, g, n), u && (i && !i.equals(l) && e(this, "mousedrag", d, l, u, i), g !== u && (r = l, e(this, "mousemove", d, l, g, r))), !m && g && g === s && (c = Date.now(), e(this, h && s.responds("doubleclick") ? "doubleclick" : "click", d, n, g), h = !1), s = u = null;
                                break;
                            case "mousemove":
                                u && (m = e(this, "mousedrag", d, l, u, i)), m || (g !== a && (r = l), m = e(this, t, d, l, g, r)), i = r = l, g !== a && (e(this, "mouseleave", d, l, a), a = g, e(this, "mouseenter", d, l, g))
                        }
                        return m
                    }
                }
            }
        }),
        V = e.extend({
            _class: "Event",
            initialize: function(t) {
                this.event = t
            },
            isPrevented: !1,
            isStopped: !1,
            preventDefault: function() {
                this.isPrevented = !0, this.event.preventDefault()
            },
            stopPropagation: function() {
                this.isStopped = !0, this.event.stopPropagation()
            },
            stop: function() {
                this.stopPropagation(), this.preventDefault()
            },
            getModifiers: function() {
                return X.modifiers
            }
        }),
        U = V.extend({
            _class: "KeyEvent",
            initialize: function(t, e, n, i) {
                V.call(this, i), this.type = t ? "keydown" : "keyup", this.key = e, this.character = n
            },
            toString: function() {
                return "{ type: '" + this.type + "', key: '" + this.key + "', character: '" + this.character + "', modifiers: " + this.getModifiers() + " }"
            }
        }),
        X = new function() {
            function t(t, n, r, u) {
                var h, c = r ? String.fromCharCode(r) : "",
                    l = i[n],
                    d = l || c.toLowerCase(),
                    f = t ? "keydown" : "keyup",
                    p = W._focused,
                    g = p && p.isVisible() && p._scope,
                    m = g && g.tool;
                a[d] = t, l && (h = e.camelize(l)) in s && (s[h] = t), t ? o[n] = r : delete o[n], m && m.responds(f) && (paper = g, m.emit(f, new U(t, d, c, u)), p && p.update())
            }
            var n, i = {
                    8: "backspace",
                    9: "tab",
                    13: "enter",
                    16: "shift",
                    17: "control",
                    18: "option",
                    19: "pause",
                    20: "caps-lock",
                    27: "escape",
                    32: "space",
                    35: "end",
                    36: "home",
                    37: "left",
                    38: "up",
                    39: "right",
                    40: "down",
                    46: "delete",
                    91: "command",
                    93: "command",
                    224: "command"
                },
                r = {
                    9: !0,
                    13: !0,
                    32: !0
                },
                s = new e({
                    shift: !1,
                    control: !1,
                    option: !1,
                    command: !1,
                    capsLock: !1,
                    space: !1
                }),
                o = {},
                a = {};
            return H.add(document, {
                keydown: function(e) {
                    var o = e.which || e.keyCode;
                    o in i || s.command ? t(!0, o, o in r || s.command ? o : 0, e) : n = o
                },
                keypress: function(e) {
                    null != n && (t(!0, n, e.which || e.keyCode, e), n = null)
                },
                keyup: function(e) {
                    var n = e.which || e.keyCode;
                    n in o && t(!1, n, o[n], e)
                }
            }), H.add(window, {
                blur: function(e) {
                    for (var n in o) t(!1, n, o[n], e)
                }
            }), {
                modifiers: s,
                isDown: function(t) {
                    return !!a[t]
                }
            }
        },
        Z = V.extend({
            _class: "MouseEvent",
            initialize: function(t, e, n, i, r) {
                V.call(this, e), this.type = t, this.point = n, this.target = i, this.delta = r
            },
            toString: function() {
                return "{ type: '" + this.type + "', point: " + this.point + ", target: " + this.target + (this.delta ? ", delta: " + this.delta : "") + ", modifiers: " + this.getModifiers() + " }"
            }
        }),
        G = V.extend({
            _class: "ToolEvent",
            _item: null,
            initialize: function(t, e, n) {
                this.tool = t, this.type = e, this.event = n
            },
            _choosePoint: function(t, e) {
                return t ? t : e ? e.clone() : null
            },
            getPoint: function() {
                return this._choosePoint(this._point, this.tool._point)
            },
            setPoint: function(t) {
                this._point = t
            },
            getLastPoint: function() {
                return this._choosePoint(this._lastPoint, this.tool._lastPoint)
            },
            setLastPoint: function(t) {
                this._lastPoint = t
            },
            getDownPoint: function() {
                return this._choosePoint(this._downPoint, this.tool._downPoint)
            },
            setDownPoint: function(t) {
                this._downPoint = t
            },
            getMiddlePoint: function() {
                return !this._middlePoint && this.tool._lastPoint ? this.tool._point.add(this.tool._lastPoint).divide(2) : this._middlePoint
            },
            setMiddlePoint: function(t) {
                this._middlePoint = t
            },
            getDelta: function() {
                return !this._delta && this.tool._lastPoint ? this.tool._point.subtract(this.tool._lastPoint) : this._delta
            },
            setDelta: function(t) {
                this._delta = t
            },
            getCount: function() {
                return /^mouse(down|up)$/.test(this.type) ? this.tool._downCount : this.tool._count
            },
            setCount: function(t) {
                this.tool[/^mouse(down|up)$/.test(this.type) ? "downCount" : "count"] = t
            },
            getItem: function() {
                if (!this._item) {
                    var t = this.tool._scope.project.hitTest(this.getPoint());
                    if (t) {
                        for (var e = t.item, n = e._parent;
                            /^(Group|CompoundPath)$/.test(n._class);) e = n, n = n._parent;
                        this._item = e
                    }
                }
                return this._item
            },
            setItem: function(t) {
                this._item = t
            },
            toString: function() {
                return "{ type: " + this.type + ", point: " + this.getPoint() + ", count: " + this.getCount() + ", modifiers: " + this.getModifiers() + " }"
            }
        }),
        Y = s.extend({
            _class: "Tool",
            _list: "tools",
            _reference: "tool",
            _events: ["onActivate", "onDeactivate", "onEditOptions", "onMouseDown", "onMouseUp", "onMouseDrag", "onMouseMove", "onKeyDown", "onKeyUp"],
            initialize: function(t) {
                s.call(this), this._firstMove = !0, this._count = 0, this._downCount = 0, this._set(t)
            },
            getMinDistance: function() {
                return this._minDistance
            },
            setMinDistance: function(t) {
                this._minDistance = t, null != this._minDistance && null != this._maxDistance && this._minDistance > this._maxDistance && (this._maxDistance = this._minDistance)
            },
            getMaxDistance: function() {
                return this._maxDistance
            },
            setMaxDistance: function(t) {
                this._maxDistance = t, null != this._minDistance && null != this._maxDistance && this._maxDistance < this._minDistance && (this._minDistance = t)
            },
            getFixedDistance: function() {
                return this._minDistance == this._maxDistance ? this._minDistance : null
            },
            setFixedDistance: function(t) {
                this._minDistance = t, this._maxDistance = t
            },
            _updateEvent: function(t, e, n, i, r, s, o) {
                if (!r) {
                    if (null != n || null != i) {
                        var a = null != n ? n : 0,
                            u = e.subtract(this._point),
                            h = u.getLength();
                        if (a > h) return !1;
                        var c = null != i ? i : 0;
                        if (0 != c)
                            if (h > c) e = this._point.add(u.normalize(c));
                            else if (o) return !1
                    }
                    if (s && e.equals(this._point)) return !1
                }
                switch (this._lastPoint = r && "mousemove" == t ? e : this._point, this._point = e, t) {
                    case "mousedown":
                        this._lastPoint = this._downPoint, this._downPoint = this._point, this._downCount++;
                        break;
                    case "mouseup":
                        this._lastPoint = this._downPoint
                }
                return this._count = r ? 0 : this._count + 1, !0
            },
            _fireEvent: function(t, e) {
                var n = paper.project._removeSets;
                if (n) {
                    "mouseup" === t && (n.mousedrag = null);
                    var i = n[t];
                    if (i) {
                        for (var r in i) {
                            var s = i[r];
                            for (var o in n) {
                                var a = n[o];
                                a && a != i && delete a[s._id]
                            }
                            s.remove()
                        }
                        n[t] = null
                    }
                }
                return this.responds(t) && this.emit(t, new G(this, t, e))
            },
            _handleEvent: function(t, e, n) {
                paper = this._scope;
                var i = !1;
                switch (t) {
                    case "mousedown":
                        this._updateEvent(t, e, null, null, !0, !1, !1), i = this._fireEvent(t, n);
                        break;
                    case "mousedrag":
                        for (var r = !1, s = !1; this._updateEvent(t, e, this.minDistance, this.maxDistance, !1, r, s);) i = this._fireEvent(t, n) || i, r = !0, s = !0;
                        break;
                    case "mouseup":
                        !e.equals(this._point) && this._updateEvent("mousedrag", e, this.minDistance, this.maxDistance, !1, !1, !1) && (i = this._fireEvent("mousedrag", n)), this._updateEvent(t, e, null, this.maxDistance, !1, !1, !1), i = this._fireEvent(t, n) || i, this._updateEvent(t, e, null, null, !0, !1, !1), this._firstMove = !0;
                        break;
                    case "mousemove":
                        for (; this._updateEvent(t, e, this.minDistance, this.maxDistance, this._firstMove, !0, !1);) i = this._fireEvent(t, n) || i, this._firstMove = !1
                }
                return i && n.preventDefault(), i
            }
        }),
        J = {
            request: function(t, e, n) {
                var i = new(window.ActiveXObject || XMLHttpRequest)("Microsoft.XMLHTTP");
                return i.open(t.toUpperCase(), e, !0), "overrideMimeType" in i && i.overrideMimeType("text/plain"), i.onreadystatechange = function() {
                    if (4 === i.readyState) {
                        var t = i.status;
                        if (0 !== t && 200 !== t) throw Error("Could not load " + e + " (Error " + t + ")");
                        n.call(i, i.responseText)
                    }
                }, i.send(null)
            }
        },
        Q = {
            canvases: [],
            getCanvas: function(t, e) {
                var n, i = !0;
                "object" == typeof t && (e = t.height, t = t.width), n = this.canvases.length ? this.canvases.pop() : document.createElement("canvas");
                var r = n.getContext("2d");
                return n.width === t && n.height === e ? i && r.clearRect(0, 0, t + 1, e + 1) : (n.width = t, n.height = e), r.save(), n
            },
            getContext: function(t, e) {
                return this.getCanvas(t, e).getContext("2d")
            },
            release: function(t) {
                var e = t.canvas ? t.canvas : t;
                e.getContext("2d").restore(), this.canvases.push(e)
            }
        },
        K = new function() {
            function t(t, e, n) {
                return .2989 * t + .587 * e + .114 * n
            }

            function n(e, n, i, r) {
                var s = r - t(e, n, i);
                f = e + s, p = n + s, g = i + s;
                var r = t(f, p, g),
                    o = m(f, p, g),
                    a = v(f, p, g);
                if (0 > o) {
                    var u = r - o;
                    f = r + (f - r) * r / u, p = r + (p - r) * r / u, g = r + (g - r) * r / u
                }
                if (a > 255) {
                    var h = 255 - r,
                        c = a - r;
                    f = r + (f - r) * h / c, p = r + (p - r) * h / c, g = r + (g - r) * h / c
                }
            }

            function i(t, e, n) {
                return v(t, e, n) - m(t, e, n)
            }

            function r(t, e, n, i) {
                var r, s = [t, e, n],
                    o = v(t, e, n),
                    a = m(t, e, n);
                a = a === t ? 0 : a === e ? 1 : 2, o = o === t ? 0 : o === e ? 1 : 2, r = 0 === m(a, o) ? 1 === v(a, o) ? 2 : 1 : 0, s[o] > s[a] ? (s[r] = (s[r] - s[a]) * i / (s[o] - s[a]), s[o] = i) : s[r] = s[o] = 0, s[a] = 0, f = s[0], p = s[1], g = s[2]
            }
            var s, o, a, u, h, c, l, d, f, p, g, m = Math.min,
                v = Math.max,
                _ = Math.abs,
                y = {
                    multiply: function() {
                        f = h * s / 255, p = c * o / 255, g = l * a / 255
                    },
                    screen: function() {
                        f = h + s - h * s / 255, p = c + o - c * o / 255, g = l + a - l * a / 255
                    },
                    overlay: function() {
                        f = 128 > h ? 2 * h * s / 255 : 255 - 2 * (255 - h) * (255 - s) / 255, p = 128 > c ? 2 * c * o / 255 : 255 - 2 * (255 - c) * (255 - o) / 255, g = 128 > l ? 2 * l * a / 255 : 255 - 2 * (255 - l) * (255 - a) / 255
                    },
                    "soft-light": function() {
                        var t = s * h / 255;
                        f = t + h * (255 - (255 - h) * (255 - s) / 255 - t) / 255, t = o * c / 255, p = t + c * (255 - (255 - c) * (255 - o) / 255 - t) / 255, t = a * l / 255, g = t + l * (255 - (255 - l) * (255 - a) / 255 - t) / 255
                    },
                    "hard-light": function() {
                        f = 128 > s ? 2 * s * h / 255 : 255 - 2 * (255 - s) * (255 - h) / 255, p = 128 > o ? 2 * o * c / 255 : 255 - 2 * (255 - o) * (255 - c) / 255, g = 128 > a ? 2 * a * l / 255 : 255 - 2 * (255 - a) * (255 - l) / 255
                    },
                    "color-dodge": function() {
                        f = 0 === h ? 0 : 255 === s ? 255 : m(255, 255 * h / (255 - s)), p = 0 === c ? 0 : 255 === o ? 255 : m(255, 255 * c / (255 - o)), g = 0 === l ? 0 : 255 === a ? 255 : m(255, 255 * l / (255 - a))
                    },
                    "color-burn": function() {
                        f = 255 === h ? 255 : 0 === s ? 0 : v(0, 255 - 255 * (255 - h) / s), p = 255 === c ? 255 : 0 === o ? 0 : v(0, 255 - 255 * (255 - c) / o), g = 255 === l ? 255 : 0 === a ? 0 : v(0, 255 - 255 * (255 - l) / a)
                    },
                    darken: function() {
                        f = s > h ? h : s, p = o > c ? c : o, g = a > l ? l : a
                    },
                    lighten: function() {
                        f = h > s ? h : s, p = c > o ? c : o, g = l > a ? l : a
                    },
                    difference: function() {
                        f = h - s, 0 > f && (f = -f), p = c - o, 0 > p && (p = -p), g = l - a, 0 > g && (g = -g)
                    },
                    exclusion: function() {
                        f = h + s * (255 - h - h) / 255, p = c + o * (255 - c - c) / 255, g = l + a * (255 - l - l) / 255
                    },
                    hue: function() {
                        r(s, o, a, i(h, c, l)), n(f, p, g, t(h, c, l))
                    },
                    saturation: function() {
                        r(h, c, l, i(s, o, a)), n(f, p, g, t(h, c, l))
                    },
                    luminosity: function() {
                        n(h, c, l, t(s, o, a))
                    },
                    color: function() {
                        n(s, o, a, t(h, c, l))
                    },
                    add: function() {
                        f = m(h + s, 255), p = m(c + o, 255), g = m(l + a, 255)
                    },
                    subtract: function() {
                        f = v(h - s, 0), p = v(c - o, 0), g = v(l - a, 0)
                    },
                    average: function() {
                        f = (h + s) / 2, p = (c + o) / 2, g = (l + a) / 2
                    },
                    negation: function() {
                        f = 255 - _(255 - s - h), p = 255 - _(255 - o - c), g = 255 - _(255 - a - l)
                    }
                },
                w = this.nativeModes = e.each(["source-over", "source-in", "source-out", "source-atop", "destination-over", "destination-in", "destination-out", "destination-atop", "lighter", "darker", "copy", "xor"], function(t) {
                    this[t] = !0
                }, {}),
                x = Q.getContext(1, 1);
            e.each(y, function(t, e) {
                var n = "darken" === e,
                    i = !1;
                x.save();
                try {
                    x.fillStyle = n ? "#300" : "#a00", x.fillRect(0, 0, 1, 1), x.globalCompositeOperation = e, x.globalCompositeOperation === e && (x.fillStyle = n ? "#a00" : "#300", x.fillRect(0, 0, 1, 1), i = x.getImageData(0, 0, 1, 1).data[0] !== n ? 170 : 51)
                } catch (r) {}
                x.restore(), w[e] = i
            }), Q.release(x), this.process = function(t, e, n, i, r) {
                var m = e.canvas,
                    v = "normal" === t;
                if (v || w[t]) n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.globalAlpha = i, v || (n.globalCompositeOperation = t), n.drawImage(m, r.x, r.y), n.restore();
                else {
                    var _ = y[t];
                    if (!_) return;
                    for (var x = n.getImageData(r.x, r.y, m.width, m.height), b = x.data, C = e.getImageData(0, 0, m.width, m.height).data, S = 0, T = b.length; T > S; S += 4) {
                        s = C[S], h = b[S], o = C[S + 1], c = b[S + 1], a = C[S + 2], l = b[S + 2], u = C[S + 3], d = b[S + 3], _();
                        var k = u * i / 255,
                            E = 1 - k;
                        b[S] = k * f + E * h, b[S + 1] = k * p + E * c, b[S + 2] = k * g + E * l, b[S + 3] = u * i + E * d
                    }
                    n.putImageData(x, r.x, r.y)
                }
            }
        },
        te = e.each({
            fillColor: ["fill", "color"],
            strokeColor: ["stroke", "color"],
            strokeWidth: ["stroke-width", "number"],
            strokeCap: ["stroke-linecap", "string"],
            strokeJoin: ["stroke-linejoin", "string"],
            strokeScaling: ["vector-effect", "lookup", {
                "true": "none",
                "false": "non-scaling-stroke"
            }, function(t, e) {
                return !e && (t instanceof N || t instanceof b || t instanceof z)
            }],
            miterLimit: ["stroke-miterlimit", "number"],
            dashArray: ["stroke-dasharray", "array"],
            dashOffset: ["stroke-dashoffset", "number"],
            fontFamily: ["font-family", "string"],
            fontWeight: ["font-weight", "string"],
            fontSize: ["font-size", "number"],
            justification: ["text-anchor", "lookup", {
                left: "start",
                center: "middle",
                right: "end"
            }],
            opacity: ["opacity", "number"],
            blendMode: ["mix-blend-mode", "string"]
        }, function(t, n) {
            var i = e.capitalize(n),
                r = t[2];
            this[n] = {
                type: t[1],
                property: n,
                attribute: t[0],
                toSVG: r,
                fromSVG: r && e.each(r, function(t, e) {
                    this[t] = e
                }, {}),
                exportFilter: t[3],
                get: "get" + i,
                set: "set" + i
            }
        }, {}),
        ee = {
            href: "http://www.w3.org/1999/xlink",
            xlink: "http://www.w3.org/2000/xmlns"
        };
    return new function() {
        function t(t, e) {
            for (var n in e) {
                var i = e[n],
                    r = ee[n];
                "number" == typeof i && (i = S.number(i)), r ? t.setAttributeNS(r, n, i) : t.setAttribute(n, i)
            }
            return t
        }

        function n(e, n) {
            return t(document.createElementNS("http://www.w3.org/2000/svg", e), n)
        }

        function r(t, n, i) {
            var r = new e,
                s = t.getTranslation();
            if (n) {
                t = t.shiftless();
                var o = t._inverseTransform(s);
                r[i ? "cx" : "x"] = o.x, r[i ? "cy" : "y"] = o.y, s = null
            }
            if (!t.isIdentity()) {
                var u = t.decompose();
                if (u && !u.shearing) {
                    var h = [],
                        c = u.rotation,
                        l = u.scaling;
                    s && !s.isZero() && h.push("translate(" + S.point(s) + ")"), c && h.push("rotate(" + S.number(c) + ")"), a.isZero(l.x - 1) && a.isZero(l.y - 1) || h.push("scale(" + S.point(l) + ")"), r.transform = h.join(" ")
                } else r.transform = "matrix(" + t.getValues().join(",") + ")"
            }
            return r
        }

        function s(e, i) {
            for (var s = r(e._matrix), o = e._children, a = n("g", s), u = 0, h = o.length; h > u; u++) {
                var c = o[u],
                    l = b(c, i);
                if (l)
                    if (c.isClipMask()) {
                        var d = n("clipPath");
                        d.appendChild(l), w(c, d, "clip"), t(a, {
                            "clip-path": "url(#" + d.id + ")"
                        })
                    } else a.appendChild(l)
            }
            return a
        }

        function u(t) {
            var e = r(t._matrix, !0),
                i = t.getSize();
            return e.x -= i.width / 2, e.y -= i.height / 2, e.width = i.width, e.height = i.height, e.href = t.toDataURL(), n("image", e)
        }

        function h(t, e) {
            if (e.matchShapes) {
                var s = t.toShape(!1);
                if (s) return c(s, e)
            }
            var o, a = t._segments,
                u = r(t._matrix);
            if (0 === a.length) return null;
            if (t.isPolygon())
                if (a.length >= 3) {
                    o = t._closed ? "polygon" : "polyline";
                    var h = [];
                    for (i = 0, l = a.length; l > i; i++) h.push(S.point(a[i]._point));
                    u.points = h.join(" ")
                } else {
                    o = "line";
                    var d = a[0]._point,
                        f = a[a.length - 1]._point;
                    u.set({
                        x1: d.x,
                        y1: d.y,
                        x2: f.x,
                        y2: f.y
                    })
                } else o = "path", u.d = t.getPathData(null, e.precision);
            return n(o, u)
        }

        function c(t) {
            var e = t._type,
                i = t._radius,
                s = r(t._matrix, !0, "rectangle" !== e);
            if ("rectangle" === e) {
                e = "rect";
                var o = t._size,
                    a = o.width,
                    u = o.height;
                s.x -= a / 2, s.y -= u / 2, s.width = a, s.height = u, i.isZero() && (i = null)
            }
            return i && ("circle" === e ? s.r = i : (s.rx = i.width, s.ry = i.height)), n(e, s)
        }

        function d(t, e) {
            var i = r(t._matrix),
                s = t.getPathData(null, e.precision);
            return s && (i.d = s), n("path", i)
        }

        function f(t, e) {
            var i = r(t._matrix, !0),
                s = t.getSymbol(),
                o = _(s, "symbol"),
                a = s.getDefinition(),
                u = a.getBounds();
            return o || (o = n("symbol", {
                viewBox: S.rectangle(u)
            }), o.appendChild(b(a, e)), w(s, o, "symbol")), i.href = "#" + o.id, i.x += u.x, i.y += u.y, i.width = S.number(u.width), i.height = S.number(u.height), n("use", i)
        }

        function p(t) {
            var e = _(t, "color");
            if (!e) {
                var i, r = t.getGradient(),
                    s = r._radial,
                    o = t.getOrigin().transform(),
                    a = t.getDestination().transform();
                if (s) {
                    i = {
                        cx: o.x,
                        cy: o.y,
                        r: o.getDistance(a)
                    };
                    var u = t.getHighlight();
                    u && (u = u.transform(), i.fx = u.x, i.fy = u.y)
                } else i = {
                    x1: o.x,
                    y1: o.y,
                    x2: a.x,
                    y2: a.y
                };
                i.gradientUnits = "userSpaceOnUse", e = n((s ? "radial" : "linear") + "Gradient", i);
                for (var h = r._stops, c = 0, l = h.length; l > c; c++) {
                    var d = h[c],
                        f = d._color,
                        p = f.getAlpha();
                    i = {
                        offset: d._rampPoint,
                        "stop-color": f.toCSS(!0)
                    }, 1 > p && (i["stop-opacity"] = p), e.appendChild(n("stop", i))
                }
                w(t, e, "color")
            }
            return "url(#" + e.id + ")"
        }

        function g(t) {
            var e = n("text", r(t._matrix, !0));
            return e.textContent = t._content, e
        }

        function m(n, i, r) {
            var s = {},
                o = !r && n.getParent();
            return null != n._name && (s.id = n._name), e.each(te, function(t) {
                var i = t.get,
                    r = t.type,
                    a = n[i]();
                if (t.exportFilter ? t.exportFilter(n, a) : !o || !e.equals(o[i](), a)) {
                    if ("color" === r && null != a) {
                        var u = a.getAlpha();
                        1 > u && (s[t.attribute + "-opacity"] = u)
                    }
                    s[t.attribute] = null == a ? "none" : "number" === r ? S.number(a) : "color" === r ? a.gradient ? p(a, n) : a.toCSS(!0) : "array" === r ? a.join(",") : "lookup" === r ? t.toSVG[a] : a
                }
            }), 1 === s.opacity && delete s.opacity, n._visible || (s.visibility = "hidden"), t(i, s)
        }

        function _(t, e) {
            return T || (T = {
                ids: {},
                svgs: {}
            }), t && T.svgs[e + "-" + t._id]
        }

        function w(t, e, n) {
            T || _();
            var i = T.ids[n] = (T.ids[n] || 0) + 1;
            e.id = n + "-" + i, T.svgs[n + "-" + t._id] = e
        }

        function x(t, e) {
            var i = t,
                r = null;
            if (T) {
                i = "svg" === t.nodeName.toLowerCase() && t;
                for (var s in T.svgs) r || (i || (i = n("svg"), i.appendChild(t)), r = i.insertBefore(n("defs"), i.firstChild)), r.appendChild(T.svgs[s]);
                T = null
            }
            return e.asString ? (new XMLSerializer).serializeToString(i) : i
        }

        function b(t, e, n) {
            var i = k[t._class],
                r = i && i(t, e);
            if (r) {
                var s = e.onExport;
                s && (r = s(t, r, e) || r);
                var o = JSON.stringify(t._data);
                o && "{}" !== o && r.setAttribute("data-paper-data", o)
            }
            return r && m(t, r, n)
        }

        function C(t) {
            return t || (t = {}), S = new o(t.precision), t
        }
        var S, T, k = {
            Group: s,
            Layer: s,
            Raster: u,
            Path: h,
            Shape: c,
            CompoundPath: d,
            PlacedSymbol: f,
            PointText: g
        };
        y.inject({
            exportSVG: function(t) {
                return t = C(t), x(b(this, t, !0), t)
            }
        }), v.inject({
            exportSVG: function(t) {
                t = C(t);
                var e = this.layers,
                    i = this.getView(),
                    s = i.getViewSize(),
                    o = n("svg", {
                        x: 0,
                        y: 0,
                        width: s.width,
                        height: s.height,
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    }),
                    a = o,
                    u = i._matrix;
                u.isIdentity() || (a = o.appendChild(n("g", r(u))));
                for (var h = 0, c = e.length; c > h; h++) a.appendChild(b(e[h], t, !0));
                return x(o, t)
            }
        })
    }, new function() {
        function n(t, e, n, i) {
            var r = ee[e],
                s = r ? t.getAttributeNS(r, e) : t.getAttribute(e);
            return "null" === s && (s = null), null == s ? i ? null : n ? "" : 0 : n ? s : parseFloat(s)
        }

        function i(t, e, i, r) {
            return e = n(t, e, !1, r), i = n(t, i, !1, r), !r || null != e && null != i ? new u(e, i) : null
        }

        function r(t, e, i, r) {
            return e = n(t, e, !1, r), i = n(t, i, !1, r), !r || null != e && null != i ? new c(e, i) : null
        }

        function s(t, e, n) {
            return "none" === t ? null : "number" === e ? parseFloat(t) : "array" === e ? t ? t.split(/[\s,]+/g).map(parseFloat) : [] : "color" === e ? S(t) || t : "lookup" === e ? n[t] : t
        }

        function o(t, e, n, i) {
            var r = t.childNodes,
                s = "clippath" === e,
                o = new w,
                a = o._project,
                u = a._currentStyle,
                h = [];
            s || (o = x(o, t, i), a._currentStyle = o._style.clone());
            for (var c = 0, l = r.length; l > c; c++) {
                var d, f = r[c];
                1 !== f.nodeType || !(d = T(f, n, !1)) || d instanceof _ || h.push(d)
            }
            return o.addChildren(h), s && (o = x(o.reduce(), t, i)), a._currentStyle = u, (s || "defs" === e) && (o.remove(), o = null), o
        }

        function a(t, e) {
            for (var n = t.getAttribute("points").match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g), i = [], r = 0, s = n.length; s > r; r += 2) i.push(new u(parseFloat(n[r]), parseFloat(n[r + 1])));
            var o = new M(i);
            return "polygon" === e && o.closePath(), o
        }

        function h(t) {
            var e = t.getAttribute("d"),
                n = {
                    pathData: e
                };
            return (e.match(/m/gi) || []).length > 1 || /z\S+/i.test(e) ? new L(n) : new M(n)
        }

        function l(t, e) {
            var r, s = (n(t, "href", !0) || "").substring(1),
                o = "radialgradient" === e;
            if (s) r = P[s].getGradient();
            else {
                for (var a = t.childNodes, u = [], h = 0, c = a.length; c > h; h++) {
                    var l = a[h];
                    1 === l.nodeType && u.push(x(new q, l))
                }
                r = new R(u, o)
            }
            var d, f, p;
            return o ? (d = i(t, "cx", "cy"), f = d.add(n(t, "r"), 0), p = i(t, "fx", "fy", !0)) : (d = i(t, "x1", "y1"), f = i(t, "x2", "y2")), x(new O(r, d, f, p), t), null
        }

        function d(t, e, n, i) {
            for (var r = (i.getAttribute(n) || "").split(/\)\s*/g), s = new g, o = 0, a = r.length; a > o; o++) {
                var u = r[o];
                if (!u) break;
                for (var h = u.split(/\(\s*/), c = h[0], l = h[1].split(/[\s,]+/g), d = 0, f = l.length; f > d; d++) l[d] = parseFloat(l[d]);
                switch (c) {
                    case "matrix":
                        s.concatenate(new g(l[0], l[1], l[2], l[3], l[4], l[5]));
                        break;
                    case "rotate":
                        s.rotate(l[0], l[1], l[2]);
                        break;
                    case "translate":
                        s.translate(l[0], l[1]);
                        break;
                    case "scale":
                        s.scale(l);
                        break;
                    case "skewX":
                        s.skew(l[0], 0);
                        break;
                    case "skewY":
                        s.skew(0, l[0])
                }
            }
            t.transform(s)
        }

        function p(t, e, n) {
            var i = t["fill-opacity" === n ? "getFillColor" : "getStrokeColor"]();
            i && i.setAlpha(parseFloat(e))
        }

        function m(n, i, r) {
            var s = n.attributes[i],
                o = s && s.value;
            if (!o) {
                var a = e.camelize(i);
                o = n.style[a], o || r.node[a] === r.parent[a] || (o = r.node[a])
            }
            return o ? "none" === o ? null : o : t
        }

        function x(n, i, r) {
            var s = {
                node: B.getStyles(i) || {},
                parent: !r && B.getStyles(i.parentNode) || {}
            };
            return e.each(E, function(r, o) {
                var a = m(i, o, s);
                a !== t && (n = e.pick(r(n, a, o, i, s), n))
            }), n
        }

        function S(t) {
            var e = t && t.match(/\((?:#|)([^)']+)/);
            return e && P[e[1]]
        }

        function T(t, e, n) {
            function i(t) {
                paper = s;
                var i = T(t, e, n),
                    r = e.onLoad,
                    o = s.project && s.getView();
                r && r.call(this, i), o.update()
            }
            if (!t) return null;
            e ? "function" == typeof e && (e = {
                onLoad: e
            }) : e = {};
            var r = t,
                s = paper;
            if (n)
                if ("string" != typeof t || /^.*</.test(t)) {
                    if ("undefined" != typeof File && t instanceof File) {
                        var o = new FileReader;
                        return o.onload = function() {
                            i(o.result)
                        }, o.readAsText(t)
                    }
                } else {
                    if (r = document.getElementById(t), !r) return J.request("get", t, i);
                    t = null
                }
            if ("string" == typeof t && (r = (new DOMParser).parseFromString(t, "image/svg+xml")), !r.nodeName) throw Error("Unsupported SVG source: " + t);
            var a, u = r.nodeName.toLowerCase(),
                h = k[u],
                c = r.getAttribute && r.getAttribute("data-paper-data"),
                l = s.settings,
                d = l.applyMatrix;
            if (l.applyMatrix = !1, a = h && h(r, u, e, n) || null, l.applyMatrix = d, a) {
                "#document" === u || a instanceof w || (a = x(a, r, n));
                var f = e.onImport;
                f && (a = f(r, a, e) || a), e.expandShapes && a instanceof b && (a.remove(), a = a.toPath()), c && (a._data = JSON.parse(c))
            }
            return n && (P = {}), a
        }
        var k = {
                "#document": function(t, e, n, i) {
                    for (var r = t.childNodes, s = 0, o = r.length; o > s; s++) {
                        var a = r[s];
                        if (1 === a.nodeType) {
                            var u = a.nextSibling;
                            document.body.appendChild(a);
                            var h = T(a, n, i);
                            return u ? t.insertBefore(a, u) : t.appendChild(a), h
                        }
                    }
                },
                g: o,
                svg: o,
                clippath: o,
                polygon: a,
                polyline: a,
                path: h,
                lineargradient: l,
                radialgradient: l,
                image: function(t) {
                    var e = new C(n(t, "href", !0));
                    return e.on("load", function() {
                        var e = r(t, "width", "height");
                        this.setSize(e);
                        var n = this._matrix._transformPoint(i(t, "x", "y").add(e.divide(2)));
                        this.translate(n)
                    }), e
                },
                symbol: function(t, e, n, i) {
                    return new _(o(t, e, n, i), !0)
                },
                defs: o,
                use: function(t) {
                    var e = (n(t, "href", !0) || "").substring(1),
                        r = P[e],
                        s = i(t, "x", "y");
                    return r ? r instanceof _ ? r.place(s) : r.clone().translate(s) : null
                },
                circle: function(t) {
                    return new b.Circle(i(t, "cx", "cy"), n(t, "r"))
                },
                ellipse: function(t) {
                    return new b.Ellipse({
                        center: i(t, "cx", "cy"),
                        radius: r(t, "rx", "ry")
                    })
                },
                rect: function(t) {
                    var e = i(t, "x", "y"),
                        n = r(t, "width", "height"),
                        s = r(t, "rx", "ry");
                    return new b.Rectangle(new f(e, n), s)
                },
                line: function(t) {
                    return new M.Line(i(t, "x1", "y1"), i(t, "x2", "y2"))
                },
                text: function(t) {
                    var e = new j(i(t, "x", "y").add(i(t, "dx", "dy")));
                    return e.setContent(t.textContent.trim() || ""), e
                }
            },
            E = e.each(te, function(t) {
                this[t.attribute] = function(e, n) {
                    if (e[t.set](s(n, t.type, t.fromSVG)), "color" === t.type && e instanceof b) {
                        var i = e[t.get]();
                        i && i.transform((new g).translate(e.getPosition(!0).negate()))
                    }
                }
            }, {
                id: function(t, e) {
                    P[e] = t, t.setName && t.setName(e)
                },
                "clip-path": function(t, e) {
                    var n = S(e);
                    if (n) {
                        if (n = n.clone(), n.setClipMask(!0), !(t instanceof w)) return new w(n, t);
                        t.insertChild(0, n)
                    }
                },
                gradientTransform: d,
                transform: d,
                "fill-opacity": p,
                "stroke-opacity": p,
                visibility: function(t, e) {
                    t.setVisible("visible" === e)
                },
                display: function(t, e) {
                    t.setVisible(null !== e)
                },
                "stop-color": function(t, e) {
                    t.setColor && t.setColor(e)
                },
                "stop-opacity": function(t, e) {
                    t._color && t._color.setAlpha(parseFloat(e))
                },
                offset: function(t, e) {
                    var n = e.match(/(.*)%$/);
                    t.setRampPoint(n ? n[1] / 100 : parseFloat(e))
                },
                viewBox: function(t, e, n, i, o) {
                    var a = new f(s(e, "array")),
                        u = r(i, "width", "height", !0);
                    if (t instanceof w) {
                        var h = u ? a.getSize().divide(u) : 1,
                            c = (new g).translate(a.getPoint()).scale(h);
                        t.transform(c.inverted())
                    } else if (t instanceof _) {
                        u && a.setSize(u);
                        var l = "visible" != m(i, "overflow", o),
                            d = t._definition;
                        l && !a.contains(d.getBounds()) && (l = new b.Rectangle(a).transform(d._matrix), l.setClipMask(!0), d.addChild(l))
                    }
                }
            }),
            P = {};
        y.inject({
            importSVG: function(t, e) {
                return this.addChild(T(t, e, !0))
            }
        }), v.inject({
            importSVG: function(t, e) {
                return this.activate(), T(t, e, !0)
            }
        })
    }, e.exports.PaperScript = function() {
        function t(t, e, n) {
            var i = g[e];
            if (t && t[i]) {
                var r = t[i](n);
                return "!=" === e ? !r : r
            }
            switch (e) {
                case "+":
                    return t + n;
                case "-":
                    return t - n;
                case "*":
                    return t * n;
                case "/":
                    return t / n;
                case "%":
                    return t % n;
                case "==":
                    return t == n;
                case "!=":
                    return t != n
            }
        }

        function n(t, e) {
            var n = m[t];
            if (n && e && e[n]) return e[n]();
            switch (t) {
                case "+":
                    return +e;
                case "-":
                    return -e
            }
        }

        function i(t, e) {
            return p.acorn.parse(t, e)
        }

        function s(t, e, n) {
            function r(t) {
                for (var e = 0, n = h.length; n > e; e++) {
                    var i = h[e];
                    if (i[0] >= t) break;
                    t += i[1]
                }
                return t
            }

            function s(e) {
                return t.substring(r(e.range[0]), r(e.range[1]))
            }

            function o(e, n) {
                return t.substring(r(e.range[1]), r(n.range[0]))
            }

            function a(e, n) {
                for (var i = r(e.range[0]), s = r(e.range[1]), o = 0, a = h.length - 1; a >= 0; a--)
                    if (i > h[a][0]) {
                        o = a + 1;
                        break
                    }
                h.splice(o, 0, [i, n.length - s + i]), t = t.substring(0, i) + n + t.substring(s)
            }

            function u(t, e) {
                if (t) {
                    for (var n in t)
                        if ("range" !== n && "loc" !== n) {
                            var i = t[n];
                            if (Array.isArray(i))
                                for (var r = 0, h = i.length; h > r; r++) u(i[r], t);
                            else i && "object" == typeof i && u(i, t)
                        }
                    switch (t.type) {
                        case "UnaryExpression":
                            if (t.operator in m && "Literal" !== t.argument.type) {
                                var c = s(t.argument);
                                a(t, '$__("' + t.operator + '", ' + c + ")")
                            }
                            break;
                        case "BinaryExpression":
                            if (t.operator in g && "Literal" !== t.left.type) {
                                var l = s(t.left),
                                    d = s(t.right),
                                    f = o(t.left, t.right),
                                    p = t.operator;
                                a(t, "__$__(" + l + "," + f.replace(RegExp("\\" + p), '"' + p + '"') + ", " + d + ")")
                            }
                            break;
                        case "UpdateExpression":
                        case "AssignmentExpression":
                            var v = e && e.type;
                            if (!("ForStatement" === v || "BinaryExpression" === v && /^[=!<>]/.test(e.operator) || "MemberExpression" === v && e.computed))
                                if ("UpdateExpression" === t.type) {
                                    var c = s(t.argument),
                                        _ = c + " = __$__(" + c + ', "' + t.operator[0] + '", 1)';
                                    t.prefix || "AssignmentExpression" !== v && "VariableDeclarator" !== v || (_ = c + "; " + _), a(t, _)
                                } else if (/^.=$/.test(t.operator) && "Literal" !== t.left.type) {
                                var l = s(t.left),
                                    d = s(t.right);
                                a(t, l + " = __$__(" + l + ', "' + t.operator[0] + '", ' + d + ")")
                            }
                    }
                }
            }
            if (!t) return "";
            n = n || {}, e = e || "";
            var h = [],
                c = null,
                l = paper.browser,
                d = l.versionNumber,
                f = /\r\n|\n|\r/gm;
            if (l.chrome && d >= 30 || l.webkit && d >= 537.76 || l.firefox && d >= 23) {
                var p = 0;
                if (0 === window.location.href.indexOf(e)) {
                    var v = document.getElementsByTagName("html")[0].innerHTML;
                    p = v.substr(0, v.indexOf(t) + 1).match(f).length + 1
                }
                var _ = ["AAAA"];
                _.length = (t.match(f) || []).length + 1 + p, c = {
                    version: 3,
                    file: e,
                    names: [],
                    mappings: _.join(";AACA"),
                    sourceRoot: "",
                    sources: [e]
                };
                var y = n.source || !e && t;
                y && (c.sourcesContent = [y])
            }
            return u(i(t, {
                ranges: !0
            })), c && (t = Array(p + 1).join("\n") + t + "\n//# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(c)))) + "\n//# sourceURL=" + (e || "paperscript")), t
        }

        function o(i, r, o, a) {
            function h(t, e) {
                for (var n in t) !e && /^_/.test(n) || !RegExp("([\\b\\s\\W]|^)" + n.replace(/\$/g, "\\$") + "\\b").test(i) || (g.push(n), m.push(t[n]))
            }
            paper = r;
            var c, l = r.getView(),
                d = /\s+on(?:Key|Mouse)(?:Up|Down|Move|Drag)\b/.test(i) ? new Y : null,
                f = d ? d._events : [],
                p = ["onFrame", "onResize"].concat(f),
                g = [],
                m = [];
            i = s(i, o, a), h({
                __$__: t,
                $__: n,
                paper: r,
                view: l,
                tool: d
            }, !0), h(r), p = e.each(p, function(t) {
                RegExp("\\s+" + t + "\\b").test(i) && (g.push(t), this.push(t + ": " + t))
            }, []).join(", "), p && (i += "\nreturn { " + p + " };");
            var v = paper.browser;
            if (v.chrome || v.firefox) {
                var _ = document.createElement("script"),
                    y = document.head;
                v.firefox && (i = "\n" + i), _.appendChild(document.createTextNode("paper._execute = function(" + g + ") {" + i + "\n}")), y.appendChild(_), c = paper._execute, delete paper._execute, y.removeChild(_)
            } else c = Function(g, i);
            var w = c.apply(r, m) || {};
            e.each(f, function(t) {
                var e = w[t];
                e && (d[t] = e)
            }), l && (w.onResize && l.setOnResize(w.onResize), l.emit("resize", {
                size: l.size,
                delta: new u
            }), w.onFrame && l.setOnFrame(w.onFrame), l.update())
        }

        function a(t) {
            if (/^text\/(?:x-|)paperscript$/.test(t.type) && "true" !== r.getAttribute(t, "ignore")) {
                var e = r.getAttribute(t, "canvas"),
                    n = document.getElementById(e),
                    i = t.src,
                    s = "data-paper-scope";
                if (!n) throw Error('Unable to find canvas with id "' + e + '"');
                var a = r.get(n.getAttribute(s)) || (new r).setup(n);
                return n.setAttribute(s, a._id), i ? J.request("get", i, function(t) {
                    o(t, a, i)
                }) : o(t.innerHTML, a, t.baseURI), t.setAttribute("data-paper-ignore", "true"), a
            }
        }

        function h() {
            e.each(document.getElementsByTagName("script"), a)
        }

        function l(t) {
            return t ? a(t) : h()
        }
        var d, f, p = this;
        ! function(t, e) {
            return "object" == typeof d && "object" == typeof module ? e(d) : "function" == typeof f && f.amd ? f(["exports"], e) : (e(t.acorn || (t.acorn = {})), void 0)
        }(this, function(t) {
            "use strict";

            function e(t) {
                le = t || {};
                for (var e in ge) Object.prototype.hasOwnProperty.call(le, e) || (le[e] = ge[e]);
                pe = le.sourceFile || null
            }

            function n(t, e) {
                var n = me(de, t);
                e += " (" + n.line + ":" + n.column + ")";
                var i = new SyntaxError(e);
                throw i.pos = t, i.loc = n, i.raisedAt = ve, i
            }

            function i(t) {
                function e(t) {
                    if (1 == t.length) return n += "return str === " + JSON.stringify(t[0]) + ";";
                    n += "switch(str){";
                    for (var e = 0; e < t.length; ++e) n += "case " + JSON.stringify(t[e]) + ":";
                    n += "return true}return false;"
                }
                t = t.split(" ");
                var n = "",
                    i = [];
                t: for (var r = 0; r < t.length; ++r) {
                    for (var s = 0; s < i.length; ++s)
                        if (i[s][0].length == t[r].length) {
                            i[s].push(t[r]);
                            continue t
                        }
                    i.push([t[r]])
                }
                if (i.length > 3) {
                    i.sort(function(t, e) {
                        return e.length - t.length
                    }), n += "switch(str.length){";
                    for (var r = 0; r < i.length; ++r) {
                        var o = i[r];
                        n += "case " + o[0].length + ":", e(o)
                    }
                    n += "}"
                } else e(t);
                return Function("str", n)
            }

            function r() {
                this.line = Te, this.column = ve - ke
            }

            function s() {
                Te = 1, ve = ke = 0, Se = !0, h()
            }

            function o(t, e) {
                ye = ve, le.locations && (xe = new r), be = t, h(), Ce = e, Se = t.beforeExpr
            }

            function a() {
                var t = le.onComment && le.locations && new r,
                    e = ve,
                    i = de.indexOf("*/", ve += 2);
                if (-1 === i && n(ve - 2, "Unterminated comment"), ve = i + 2, le.locations) {
                    Jn.lastIndex = e;
                    for (var s;
                        (s = Jn.exec(de)) && s.index < ve;) ++Te, ke = s.index + s[0].length
                }
                le.onComment && le.onComment(!0, de.slice(e + 2, i), e, ve, t, le.locations && new r)
            }

            function u() {
                for (var t = ve, e = le.onComment && le.locations && new r, n = de.charCodeAt(ve += 2); fe > ve && 10 !== n && 13 !== n && 8232 !== n && 8233 !== n;) ++ve, n = de.charCodeAt(ve);
                le.onComment && le.onComment(!1, de.slice(t + 2, ve), t, ve, e, le.locations && new r)
            }

            function h() {
                for (; fe > ve;) {
                    var t = de.charCodeAt(ve);
                    if (32 === t) ++ve;
                    else if (13 === t) {
                        ++ve;
                        var e = de.charCodeAt(ve);
                        10 === e && ++ve, le.locations && (++Te, ke = ve)
                    } else if (10 === t || 8232 === t || 8233 === t) ++ve, le.locations && (++Te, ke = ve);
                    else if (t > 8 && 14 > t) ++ve;
                    else if (47 === t) {
                        var e = de.charCodeAt(ve + 1);
                        if (42 === e) a();
                        else {
                            if (47 !== e) break;
                            u()
                        }
                    } else if (160 === t) ++ve;
                    else {
                        if (!(t >= 5760 && Vn.test(String.fromCharCode(t)))) break;
                        ++ve
                    }
                }
            }

            function c() {
                var t = de.charCodeAt(ve + 1);
                return t >= 48 && 57 >= t ? S(!0) : (++ve, o(xn))
            }

            function l() {
                var t = de.charCodeAt(ve + 1);
                return Se ? (++ve, x()) : 61 === t ? w(Tn, 2) : w(Cn, 1)
            }

            function d() {
                var t = de.charCodeAt(ve + 1);
                return 61 === t ? w(Tn, 2) : w(On, 1)
            }

            function f(t) {
                var e = de.charCodeAt(ve + 1);
                return e === t ? w(124 === t ? An : Nn, 2) : 61 === e ? w(Tn, 2) : w(124 === t ? Mn : Dn, 1)
            }

            function p() {
                var t = de.charCodeAt(ve + 1);
                return 61 === t ? w(Tn, 2) : w(Ln, 1)
            }

            function g(t) {
                var e = de.charCodeAt(ve + 1);
                return e === t ? 45 == e && 62 == de.charCodeAt(ve + 2) && Yn.test(de.slice(Pe, ve)) ? (ve += 3, u(), h(), y()) : w(En, 2) : 61 === e ? w(Tn, 2) : w(kn, 1)
            }

            function m(t) {
                var e = de.charCodeAt(ve + 1),
                    n = 1;
                return e === t ? (n = 62 === t && 62 === de.charCodeAt(ve + 2) ? 3 : 2, 61 === de.charCodeAt(ve + n) ? w(Tn, n + 1) : w(jn, n)) : 33 == e && 60 == t && 45 == de.charCodeAt(ve + 2) && 45 == de.charCodeAt(ve + 3) ? (ve += 4, u(), h(), y()) : (61 === e && (n = 61 === de.charCodeAt(ve + 2) ? 3 : 2), w(zn, n))
            }

            function v(t) {
                var e = de.charCodeAt(ve + 1);
                return 61 === e ? w(In, 61 === de.charCodeAt(ve + 2) ? 3 : 2) : w(61 === t ? Sn : Pn, 1)
            }

            function _(t) {
                switch (t) {
                    case 46:
                        return c();
                    case 40:
                        return ++ve, o(mn);
                    case 41:
                        return ++ve, o(vn);
                    case 59:
                        return ++ve, o(yn);
                    case 44:
                        return ++ve, o(_n);
                    case 91:
                        return ++ve, o(dn);
                    case 93:
                        return ++ve, o(fn);
                    case 123:
                        return ++ve, o(pn);
                    case 125:
                        return ++ve, o(gn);
                    case 58:
                        return ++ve, o(wn);
                    case 63:
                        return ++ve, o(bn);
                    case 48:
                        var e = de.charCodeAt(ve + 1);
                        if (120 === e || 88 === e) return C();
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                        return S(!1);
                    case 34:
                    case 39:
                        return T(t);
                    case 47:
                        return l(t);
                    case 37:
                    case 42:
                        return d();
                    case 124:
                    case 38:
                        return f(t);
                    case 94:
                        return p();
                    case 43:
                    case 45:
                        return g(t);
                    case 60:
                    case 62:
                        return m(t);
                    case 61:
                    case 33:
                        return v(t);
                    case 126:
                        return w(Pn, 1)
                }
                return !1
            }

            function y(t) {
                if (t ? ve = _e + 1 : _e = ve, le.locations && (we = new r), t) return x();
                if (ve >= fe) return o(Re);
                var e = de.charCodeAt(ve);
                if (Qn(e) || 92 === e) return P();
                var i = _(e);
                if (i === !1) {
                    var s = String.fromCharCode(e);
                    if ("\\" === s || Zn.test(s)) return P();
                    n(ve, "Unexpected character '" + s + "'")
                }
                return i
            }

            function w(t, e) {
                var n = de.slice(ve, ve + e);
                ve += e, o(t, n)
            }

            function x() {
                for (var t, e, i = "", r = ve;;) {
                    ve >= fe && n(r, "Unterminated regular expression");
                    var s = de.charAt(ve);
                    if (Yn.test(s) && n(r, "Unterminated regular expression"), t) t = !1;
                    else {
                        if ("[" === s) e = !0;
                        else if ("]" === s && e) e = !1;
                        else if ("/" === s && !e) break;
                        t = "\\" === s
                    }++ve
                }
                var i = de.slice(r, ve);
                ++ve;
                var a = E();
                return a && !/^[gmsiy]*$/.test(a) && n(r, "Invalid regexp flag"), o(ze, RegExp(i, a))
            }

            function b(t, e) {
                for (var n = ve, i = 0, r = 0, s = null == e ? 1 / 0 : e; s > r; ++r) {
                    var o, a = de.charCodeAt(ve);
                    if (o = a >= 97 ? a - 97 + 10 : a >= 65 ? a - 65 + 10 : a >= 48 && 57 >= a ? a - 48 : 1 / 0, o >= t) break;
                    ++ve, i = i * t + o
                }
                return ve === n || null != e && ve - n !== e ? null : i
            }

            function C() {
                ve += 2;
                var t = b(16);
                return null == t && n(_e + 2, "Expected hexadecimal number"), Qn(de.charCodeAt(ve)) && n(ve, "Identifier directly after number"), o(Ie, t)
            }

            function S(t) {
                var e = ve,
                    i = !1,
                    r = 48 === de.charCodeAt(ve);
                t || null !== b(10) || n(e, "Invalid number"), 46 === de.charCodeAt(ve) && (++ve, b(10), i = !0);
                var s = de.charCodeAt(ve);
                (69 === s || 101 === s) && (s = de.charCodeAt(++ve), (43 === s || 45 === s) && ++ve, null === b(10) && n(e, "Invalid number"), i = !0), Qn(de.charCodeAt(ve)) && n(ve, "Identifier directly after number");
                var a, u = de.slice(e, ve);
                return i ? a = parseFloat(u) : r && 1 !== u.length ? /[89]/.test(u) || Le ? n(e, "Invalid number") : a = parseInt(u, 8) : a = parseInt(u, 10), o(Ie, a)
            }

            function T(t) {
                ve++;
                for (var e = "";;) {
                    ve >= fe && n(_e, "Unterminated string constant");
                    var i = de.charCodeAt(ve);
                    if (i === t) return ++ve, o(je, e);
                    if (92 === i) {
                        i = de.charCodeAt(++ve);
                        var r = /^[0-7]+/.exec(de.slice(ve, ve + 3));
                        for (r && (r = r[0]); r && parseInt(r, 8) > 255;) r = r.slice(0, r.length - 1);
                        if ("0" === r && (r = null), ++ve, r) Le && n(ve - 2, "Octal literal in strict mode"), e += String.fromCharCode(parseInt(r, 8)), ve += r.length - 1;
                        else switch (i) {
                            case 110:
                                e += "\n";
                                break;
                            case 114:
                                e += "\r";
                                break;
                            case 120:
                                e += String.fromCharCode(k(2));
                                break;
                            case 117:
                                e += String.fromCharCode(k(4));
                                break;
                            case 85:
                                e += String.fromCharCode(k(8));
                                break;
                            case 116:
                                e += "  ";
                                break;
                            case 98:
                                e += "\b";
                                break;
                            case 118:
                                e += "";
                                break;
                            case 102:
                                e += "\f";
                                break;
                            case 48:
                                e += "\x00";
                                break;
                            case 13:
                                10 === de.charCodeAt(ve) && ++ve;
                            case 10:
                                le.locations && (ke = ve, ++Te);
                                break;
                            default:
                                e += String.fromCharCode(i)
                        }
                    } else(13 === i || 10 === i || 8232 === i || 8233 === i) && n(_e, "Unterminated string constant"), e += String.fromCharCode(i), ++ve
                }
            }

            function k(t) {
                var e = b(16, t);
                return null === e && n(_e, "Bad character escape sequence"), e
            }

            function E() {
                qn = !1;
                for (var t, e = !0, i = ve;;) {
                    var r = de.charCodeAt(ve);
                    if (Kn(r)) qn && (t += de.charAt(ve)), ++ve;
                    else {
                        if (92 !== r) break;
                        qn || (t = de.slice(i, ve)), qn = !0, 117 != de.charCodeAt(++ve) && n(ve, "Expecting Unicode escape sequence \\uXXXX"), ++ve;
                        var s = k(4),
                            o = String.fromCharCode(s);
                        o || n(ve - 1, "Invalid Unicode escape"), (e ? Qn(s) : Kn(s)) || n(ve - 4, "Invalid Unicode escape"), t += o
                    }
                    e = !1
                }
                return qn ? t : de.slice(i, ve)
            }

            function P() {
                var t = E(),
                    e = Oe;
                return qn || ($n(t) ? e = ln[t] : (le.forbidReserved && (3 === le.ecmaVersion ? Fn : Bn)(t) || Le && Hn(t)) && n(_e, "The keyword '" + t + "' is reserved")), o(e, t)
            }

            function A() {
                Ee = _e, Pe = ye, Ae = xe, y()
            }

            function N(t) {
                if (Le = t, ve = Pe, le.locations)
                    for (; ke > ve;) ke = de.lastIndexOf("\n", ke - 2) + 1, --Te;
                h(), y()
            }

            function M() {
                this.type = null, this.start = _e, this.end = null
            }

            function L() {
                this.start = we, this.end = null, null !== pe && (this.source = pe)
            }

            function D() {
                var t = new M;
                return le.locations && (t.loc = new L), le.ranges && (t.range = [_e, 0]), t
            }

            function I(t) {
                var e = new M;
                return e.start = t.start, le.locations && (e.loc = new L, e.loc.start = t.loc.start), le.ranges && (e.range = [t.range[0], 0]), e
            }

            function z(t, e) {
                return t.type = e, t.end = Pe, le.locations && (t.loc.end = Ae), le.ranges && (t.range[1] = Pe), t
            }

            function j(t) {
                return le.ecmaVersion >= 5 && "ExpressionStatement" === t.type && "Literal" === t.expression.type && "use strict" === t.expression.value
            }

            function O(t) {
                return be === t ? (A(), !0) : void 0
            }

            function R() {
                return !le.strictSemicolons && (be === Re || be === gn || Yn.test(de.slice(Pe, _e)))
            }

            function q() {
                O(yn) || R() || B()
            }

            function F(t) {
                be === t ? A() : B()
            }

            function B() {
                n(_e, "Unexpected token")
            }

            function H(t) {
                "Identifier" !== t.type && "MemberExpression" !== t.type && n(t.start, "Assigning to rvalue"), Le && "Identifier" === t.type && Wn(t.name) && n(t.start, "Assigning to " + t.name + " in strict mode")
            }

            function W(t) {
                Ee = Pe = ve, le.locations && (Ae = new r), Ne = Le = null, Me = [], y();
                var e = t || D(),
                    n = !0;
                for (t || (e.body = []); be !== Re;) {
                    var i = $();
                    e.body.push(i), n && j(i) && N(!0), n = !1
                }
                return z(e, "Program")
            }

            function $() {
                (be === Cn || be === Tn && "/=" == Ce) && y(!0);
                var t = be,
                    e = D();
                switch (t) {
                    case qe:
                    case He:
                        A();
                        var i = t === qe;
                        O(yn) || R() ? e.label = null : be !== Oe ? B() : (e.label = ce(), q());
                        for (var r = 0; r < Me.length; ++r) {
                            var s = Me[r];
                            if (null == e.label || s.name === e.label.name) {
                                if (null != s.kind && (i || "loop" === s.kind)) break;
                                if (e.label && i) break
                            }
                        }
                        return r === Me.length && n(e.start, "Unsyntactic " + t.keyword), z(e, i ? "BreakStatement" : "ContinueStatement");
                    case We:
                        return A(), q(), z(e, "DebuggerStatement");
                    case Ve:
                        return A(), Me.push(ti), e.body = $(), Me.pop(), F(nn), e.test = V(), q(), z(e, "DoWhileStatement");
                    case Ze:
                        if (A(), Me.push(ti), F(mn), be === yn) return X(e, null);
                        if (be === en) {
                            var o = D();
                            return A(), G(o, !0), z(o, "VariableDeclaration"), 1 === o.declarations.length && O(cn) ? Z(e, o) : X(e, o)
                        }
                        var o = Y(!1, !0);
                        return O(cn) ? (H(o), Z(e, o)) : X(e, o);
                    case Ge:
                        return A(), ue(e, !0);
                    case Ye:
                        return A(), e.test = V(), e.consequent = $(), e.alternate = O(Ue) ? $() : null, z(e, "IfStatement");
                    case Je:
                        return Ne || n(_e, "'return' outside of function"), A(), O(yn) || R() ? e.argument = null : (e.argument = Y(), q()), z(e, "ReturnStatement");
                    case Qe:
                        A(), e.discriminant = V(), e.cases = [], F(pn), Me.push(ei);
                        for (var a, u; be != gn;)
                            if (be === Fe || be === $e) {
                                var h = be === Fe;
                                a && z(a, "SwitchCase"), e.cases.push(a = D()), a.consequent = [], A(), h ? a.test = Y() : (u && n(Ee, "Multiple default clauses"), u = !0, a.test = null), F(wn)
                            } else a || B(), a.consequent.push($());
                        return a && z(a, "SwitchCase"), A(), Me.pop(), z(e, "SwitchStatement");
                    case Ke:
                        return A(), Yn.test(de.slice(Pe, _e)) && n(Pe, "Illegal newline after throw"), e.argument = Y(), q(), z(e, "ThrowStatement");
                    case tn:
                        if (A(), e.block = U(), e.handler = null, be === Be) {
                            var c = D();
                            A(), F(mn), c.param = ce(), Le && Wn(c.param.name) && n(c.param.start, "Binding " + c.param.name + " in strict mode"), F(vn), c.guard = null, c.body = U(), e.handler = z(c, "CatchClause")
                        }
                        return e.guardedHandlers = De, e.finalizer = O(Xe) ? U() : null, e.handler || e.finalizer || n(e.start, "Missing catch or finally clause"), z(e, "TryStatement");
                    case en:
                        return A(), G(e), q(), z(e, "VariableDeclaration");
                    case nn:
                        return A(), e.test = V(), Me.push(ti), e.body = $(), Me.pop(), z(e, "WhileStatement");
                    case rn:
                        return Le && n(_e, "'with' in strict mode"), A(), e.object = V(), e.body = $(), z(e, "WithStatement");
                    case pn:
                        return U();
                    case yn:
                        return A(), z(e, "EmptyStatement");
                    default:
                        var l = Ce,
                            d = Y();
                        if (t === Oe && "Identifier" === d.type && O(wn)) {
                            for (var r = 0; r < Me.length; ++r) Me[r].name === l && n(d.start, "Label '" + l + "' is already declared");
                            var f = be.isLoop ? "loop" : be === Qe ? "switch" : null;
                            return Me.push({
                                name: l,
                                kind: f
                            }), e.body = $(), Me.pop(), e.label = d, z(e, "LabeledStatement")
                        }
                        return e.expression = d, q(), z(e, "ExpressionStatement")
                }
            }

            function V() {
                F(mn);
                var t = Y();
                return F(vn), t
            }

            function U(t) {
                var e, n = D(),
                    i = !0,
                    r = !1;
                for (n.body = [], F(pn); !O(gn);) {
                    var s = $();
                    n.body.push(s), i && t && j(s) && (e = r, N(r = !0)), i = !1
                }
                return r && !e && N(!1), z(n, "BlockStatement")
            }

            function X(t, e) {
                return t.init = e, F(yn), t.test = be === yn ? null : Y(), F(yn), t.update = be === vn ? null : Y(), F(vn), t.body = $(), Me.pop(), z(t, "ForStatement")
            }

            function Z(t, e) {
                return t.left = e, t.right = Y(), F(vn), t.body = $(), Me.pop(), z(t, "ForInStatement")
            }

            function G(t, e) {
                for (t.declarations = [], t.kind = "var";;) {
                    var i = D();
                    if (i.id = ce(), Le && Wn(i.id.name) && n(i.id.start, "Binding " + i.id.name + " in strict mode"), i.init = O(Sn) ? Y(!0, e) : null, t.declarations.push(z(i, "VariableDeclarator")), !O(_n)) break
                }
                return t
            }

            function Y(t, e) {
                var n = J(e);
                if (!t && be === _n) {
                    var i = I(n);
                    for (i.expressions = [n]; O(_n);) i.expressions.push(J(e));
                    return z(i, "SequenceExpression")
                }
                return n
            }

            function J(t) {
                var e = Q(t);
                if (be.isAssign) {
                    var n = I(e);
                    return n.operator = Ce, n.left = e, A(), n.right = J(t), H(e), z(n, "AssignmentExpression")
                }
                return e
            }

            function Q(t) {
                var e = K(t);
                if (O(bn)) {
                    var n = I(e);
                    return n.test = e, n.consequent = Y(!0), F(wn), n.alternate = Y(!0, t), z(n, "ConditionalExpression")
                }
                return e
            }

            function K(t) {
                return te(ee(), -1, t)
            }

            function te(t, e, n) {
                var i = be.binop;
                if (null != i && (!n || be !== cn) && i > e) {
                    var r = I(t);
                    r.left = t, r.operator = Ce, A(), r.right = te(ee(), i, n);
                    var s = z(r, /&&|\|\|/.test(r.operator) ? "LogicalExpression" : "BinaryExpression");
                    return te(s, e, n)
                }
                return t
            }

            function ee() {
                if (be.prefix) {
                    var t = D(),
                        e = be.isUpdate;
                    return t.operator = Ce, t.prefix = !0, Se = !0, A(), t.argument = ee(), e ? H(t.argument) : Le && "delete" === t.operator && "Identifier" === t.argument.type && n(t.start, "Deleting local variable in strict mode"), z(t, e ? "UpdateExpression" : "UnaryExpression")
                }
                for (var i = ne(); be.postfix && !R();) {
                    var t = I(i);
                    t.operator = Ce, t.prefix = !1, t.argument = i, H(i), A(), i = z(t, "UpdateExpression")
                }
                return i
            }

            function ne() {
                return ie(re())
            }

            function ie(t, e) {
                if (O(xn)) {
                    var n = I(t);
                    return n.object = t, n.property = ce(!0), n.computed = !1, ie(z(n, "MemberExpression"), e)
                }
                if (O(dn)) {
                    var n = I(t);
                    return n.object = t, n.property = Y(), n.computed = !0, F(fn), ie(z(n, "MemberExpression"), e)
                }
                if (!e && O(mn)) {
                    var n = I(t);
                    return n.callee = t, n.arguments = he(vn, !1), ie(z(n, "CallExpression"), e)
                }
                return t
            }

            function re() {
                switch (be) {
                    case on:
                        var t = D();
                        return A(), z(t, "ThisExpression");
                    case Oe:
                        return ce();
                    case Ie:
                    case je:
                    case ze:
                        var t = D();
                        return t.value = Ce, t.raw = de.slice(_e, ye), A(), z(t, "Literal");
                    case an:
                    case un:
                    case hn:
                        var t = D();
                        return t.value = be.atomValue, t.raw = be.keyword, A(), z(t, "Literal");
                    case mn:
                        var e = we,
                            n = _e;
                        A();
                        var i = Y();
                        return i.start = n, i.end = ye, le.locations && (i.loc.start = e, i.loc.end = xe), le.ranges && (i.range = [n, ye]), F(vn), i;
                    case dn:
                        var t = D();
                        return A(), t.elements = he(fn, !0, !0), z(t, "ArrayExpression");
                    case pn:
                        return oe();
                    case Ge:
                        var t = D();
                        return A(), ue(t, !1);
                    case sn:
                        return se();
                    default:
                        B()
                }
            }

            function se() {
                var t = D();
                return A(), t.callee = ie(re(), !0), t.arguments = O(mn) ? he(vn, !1) : De, z(t, "NewExpression")
            }

            function oe() {
                var t = D(),
                    e = !0,
                    i = !1;
                for (t.properties = [], A(); !O(gn);) {
                    if (e) e = !1;
                    else if (F(_n), le.allowTrailingCommas && O(gn)) break;
                    var r, s = {
                            key: ae()
                        },
                        o = !1;
                    if (O(wn) ? (s.value = Y(!0), r = s.kind = "init") : le.ecmaVersion >= 5 && "Identifier" === s.key.type && ("get" === s.key.name || "set" === s.key.name) ? (o = i = !0, r = s.kind = s.key.name, s.key = ae(), be !== mn && B(), s.value = ue(D(), !1)) : B(), "Identifier" === s.key.type && (Le || i))
                        for (var a = 0; a < t.properties.length; ++a) {
                            var u = t.properties[a];
                            if (u.key.name === s.key.name) {
                                var h = r == u.kind || o && "init" === u.kind || "init" === r && ("get" === u.kind || "set" === u.kind);
                                h && !Le && "init" === r && "init" === u.kind && (h = !1), h && n(s.key.start, "Redefinition of property")
                            }
                        }
                    t.properties.push(s)
                }
                return z(t, "ObjectExpression")
            }

            function ae() {
                return be === Ie || be === je ? re() : ce(!0)
            }

            function ue(t, e) {
                be === Oe ? t.id = ce() : e ? B() : t.id = null, t.params = [];
                var i = !0;
                for (F(mn); !O(vn);) i ? i = !1 : F(_n), t.params.push(ce());
                var r = Ne,
                    s = Me;
                if (Ne = !0, Me = [], t.body = U(!0), Ne = r, Me = s, Le || t.body.body.length && j(t.body.body[0]))
                    for (var o = t.id ? -1 : 0; o < t.params.length; ++o) {
                        var a = 0 > o ? t.id : t.params[o];
                        if ((Hn(a.name) || Wn(a.name)) && n(a.start, "Defining '" + a.name + "' in strict mode"), o >= 0)
                            for (var u = 0; o > u; ++u) a.name === t.params[u].name && n(a.start, "Argument name clash in strict mode")
                    }
                return z(t, e ? "FunctionDeclaration" : "FunctionExpression")
            }

            function he(t, e, n) {
                for (var i = [], r = !0; !O(t);) {
                    if (r) r = !1;
                    else if (F(_n), e && le.allowTrailingCommas && O(t)) break;
                    n && be === _n ? i.push(null) : i.push(Y(!0))
                }
                return i
            }

            function ce(t) {
                var e = D();
                return e.name = be === Oe ? Ce : t && !le.forbidReserved && be.keyword || B(), Se = !1, A(), z(e, "Identifier")
            }
            t.version = "0.4.0";
            var le, de, fe, pe;
            t.parse = function(t, n) {
                return de = t + "", fe = de.length, e(n), s(), W(le.program)
            };
            var ge = t.defaultOptions = {
                    ecmaVersion: 5,
                    strictSemicolons: !1,
                    allowTrailingCommas: !0,
                    forbidReserved: !1,
                    locations: !1,
                    onComment: null,
                    ranges: !1,
                    program: null,
                    sourceFile: null
                },
                me = t.getLineInfo = function(t, e) {
                    for (var n = 1, i = 0;;) {
                        Jn.lastIndex = i;
                        var r = Jn.exec(t);
                        if (!(r && r.index < e)) break;
                        ++n, i = r.index + r[0].length
                    }
                    return {
                        line: n,
                        column: e - i
                    }
                };
            t.tokenize = function(t, n) {
                function i(t) {
                    return y(t), r.start = _e, r.end = ye, r.startLoc = we, r.endLoc = xe, r.type = be, r.value = Ce, r
                }
                de = t + "", fe = de.length, e(n), s();
                var r = {};
                return i.jumpTo = function(t, e) {
                    if (ve = t, le.locations) {
                        Te = 1, ke = Jn.lastIndex = 0;
                        for (var n;
                            (n = Jn.exec(de)) && n.index < t;) ++Te, ke = n.index + n[0].length
                    }
                    Se = e, h()
                }, i
            };
            var ve, _e, ye, we, xe, be, Ce, Se, Te, ke, Ee, Pe, Ae, Ne, Me, Le, De = [],
                Ie = {
                    type: "num"
                },
                ze = {
                    type: "regexp"
                },
                je = {
                    type: "string"
                },
                Oe = {
                    type: "name"
                },
                Re = {
                    type: "eof"
                },
                qe = {
                    keyword: "break"
                },
                Fe = {
                    keyword: "case",
                    beforeExpr: !0
                },
                Be = {
                    keyword: "catch"
                },
                He = {
                    keyword: "continue"
                },
                We = {
                    keyword: "debugger"
                },
                $e = {
                    keyword: "default"
                },
                Ve = {
                    keyword: "do",
                    isLoop: !0
                },
                Ue = {
                    keyword: "else",
                    beforeExpr: !0
                },
                Xe = {
                    keyword: "finally"
                },
                Ze = {
                    keyword: "for",
                    isLoop: !0
                },
                Ge = {
                    keyword: "function"
                },
                Ye = {
                    keyword: "if"
                },
                Je = {
                    keyword: "return",
                    beforeExpr: !0
                },
                Qe = {
                    keyword: "switch"
                },
                Ke = {
                    keyword: "throw",
                    beforeExpr: !0
                },
                tn = {
                    keyword: "try"
                },
                en = {
                    keyword: "var"
                },
                nn = {
                    keyword: "while",
                    isLoop: !0
                },
                rn = {
                    keyword: "with"
                },
                sn = {
                    keyword: "new",
                    beforeExpr: !0
                },
                on = {
                    keyword: "this"
                },
                an = {
                    keyword: "null",
                    atomValue: null
                },
                un = {
                    keyword: "true",
                    atomValue: !0
                },
                hn = {
                    keyword: "false",
                    atomValue: !1
                },
                cn = {
                    keyword: "in",
                    binop: 7,
                    beforeExpr: !0
                },
                ln = {
                    "break": qe,
                    "case": Fe,
                    "catch": Be,
                    "continue": He,
                    "debugger": We,
                    "default": $e,
                    "do": Ve,
                    "else": Ue,
                    "finally": Xe,
                    "for": Ze,
                    "function": Ge,
                    "if": Ye,
                    "return": Je,
                    "switch": Qe,
                    "throw": Ke,
                    "try": tn,
                    "var": en,
                    "while": nn,
                    "with": rn,
                    "null": an,
                    "true": un,
                    "false": hn,
                    "new": sn,
                    "in": cn,
                    "instanceof": {
                        keyword: "instanceof",
                        binop: 7,
                        beforeExpr: !0
                    },
                    "this": on,
                    "typeof": {
                        keyword: "typeof",
                        prefix: !0,
                        beforeExpr: !0
                    },
                    "void": {
                        keyword: "void",
                        prefix: !0,
                        beforeExpr: !0
                    },
                    "delete": {
                        keyword: "delete",
                        prefix: !0,
                        beforeExpr: !0
                    }
                },
                dn = {
                    type: "[",
                    beforeExpr: !0
                },
                fn = {
                    type: "]"
                },
                pn = {
                    type: "{",
                    beforeExpr: !0
                },
                gn = {
                    type: "}"
                },
                mn = {
                    type: "(",
                    beforeExpr: !0
                },
                vn = {
                    type: ")"
                },
                _n = {
                    type: ",",
                    beforeExpr: !0
                },
                yn = {
                    type: ";",
                    beforeExpr: !0
                },
                wn = {
                    type: ":",
                    beforeExpr: !0
                },
                xn = {
                    type: "."
                },
                bn = {
                    type: "?",
                    beforeExpr: !0
                },
                Cn = {
                    binop: 10,
                    beforeExpr: !0
                },
                Sn = {
                    isAssign: !0,
                    beforeExpr: !0
                },
                Tn = {
                    isAssign: !0,
                    beforeExpr: !0
                },
                kn = {
                    binop: 9,
                    prefix: !0,
                    beforeExpr: !0
                },
                En = {
                    postfix: !0,
                    prefix: !0,
                    isUpdate: !0
                },
                Pn = {
                    prefix: !0,
                    beforeExpr: !0
                },
                An = {
                    binop: 1,
                    beforeExpr: !0
                },
                Nn = {
                    binop: 2,
                    beforeExpr: !0
                },
                Mn = {
                    binop: 3,
                    beforeExpr: !0
                },
                Ln = {
                    binop: 4,
                    beforeExpr: !0
                },
                Dn = {
                    binop: 5,
                    beforeExpr: !0
                },
                In = {
                    binop: 6,
                    beforeExpr: !0
                },
                zn = {
                    binop: 7,
                    beforeExpr: !0
                },
                jn = {
                    binop: 8,
                    beforeExpr: !0
                },
                On = {
                    binop: 10,
                    beforeExpr: !0
                };
            t.tokTypes = {
                bracketL: dn,
                bracketR: fn,
                braceL: pn,
                braceR: gn,
                parenL: mn,
                parenR: vn,
                comma: _n,
                semi: yn,
                colon: wn,
                dot: xn,
                question: bn,
                slash: Cn,
                eq: Sn,
                name: Oe,
                eof: Re,
                num: Ie,
                regexp: ze,
                string: je
            };
            for (var Rn in ln) t.tokTypes["_" + Rn] = ln[Rn];
            var qn, Fn = i("abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile"),
                Bn = i("class enum extends super const export import"),
                Hn = i("implements interface let package private protected public static yield"),
                Wn = i("eval arguments"),
                $n = i("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this"),
                Vn = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
                Un = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
                Xn = "̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ؚؠ-ىٲ-ۓۧ-ۨۻ-ۼܰ-݊ࠀ-ࠔࠛ-ࠣࠥ-ࠧࠩ-࠭ࡀ-ࡗࣤ-ࣾऀ-ःऺ-़ा-ॏ॑-ॗॢ-ॣ०-९ঁ-ঃ়া-ৄেৈৗয়-ৠਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୟ-ୠ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఁ-ఃె-ైొ-్ౕౖౢ-ౣ౦-౯ಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢ-ೣ೦-೯ംഃെ-ൈൗൢ-ൣ൦-൯ංඃ්ා-ුූෘ-ෟෲෳิ-ฺเ-ๅ๐-๙ິ-ູ່-ໍ໐-໙༘༙༠-༩༹༵༷ཁ-ཇཱ-྄྆-྇ྍ-ྗྙ-ྼ࿆က-ဩ၀-၉ၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟ᜎ-ᜐᜠ-ᜰᝀ-ᝐᝲᝳក-ឲ៝០-៩᠋-᠍᠐-᠙ᤠ-ᤫᤰ-᤻ᥑ-ᥭᦰ-ᧀᧈ-ᧉ᧐-᧙ᨀ-ᨕᨠ-ᩓ᩠-᩿᩼-᪉᪐-᪙ᭆ-ᭋ᭐-᭙᭫-᭳᮰-᮹᯦-᯳ᰀ-ᰢ᱀-᱉ᱛ-ᱽ᳐-᳒ᴀ-ᶾḁ-ἕ‌‍‿⁀⁔⃐-⃥⃜⃡-⃰ⶁ-ⶖⷠ-ⷿ〡-〨゙゚Ꙁ-ꙭꙴ-꙽ꚟ꛰-꛱ꟸ-ꠀ꠆ꠋꠣ-ꠧꢀ-ꢁꢴ-꣄꣐-꣙ꣳ-ꣷ꤀-꤉ꤦ-꤭ꤰ-ꥅꦀ-ꦃ꦳-꧀ꨀ-ꨧꩀ-ꩁꩌ-ꩍ꩐-꩙ꩻꫠ-ꫩꫲ-ꫳꯀ-ꯡ꯬꯭꯰-꯹ﬠ-ﬨ︀-️︠-︦︳︴﹍-﹏０-９＿",
                Zn = RegExp("[" + Un + "]"),
                Gn = RegExp("[" + Un + Xn + "]"),
                Yn = /[\n\r\u2028\u2029]/,
                Jn = /\r\n|[\n\r\u2028\u2029]/g,
                Qn = t.isIdentifierStart = function(t) {
                    return 65 > t ? 36 === t : 91 > t ? !0 : 97 > t ? 95 === t : 123 > t ? !0 : t >= 170 && Zn.test(String.fromCharCode(t))
                },
                Kn = t.isIdentifierChar = function(t) {
                    return 48 > t ? 36 === t : 58 > t ? !0 : 65 > t ? !1 : 91 > t ? !0 : 97 > t ? 95 === t : 123 > t ? !0 : t >= 170 && Gn.test(String.fromCharCode(t))
                },
                ti = {
                    kind: "loop"
                },
                ei = {
                    kind: "switch"
                }
        });
        var g = {
                "+": "__add",
                "-": "__subtract",
                "*": "__multiply",
                "/": "__divide",
                "%": "__modulo",
                "==": "equals",
                "!=": "equals"
            },
            m = {
                "-": "__negate",
                "+": null
            },
            v = e.each(["add", "subtract", "multiply", "divide", "modulo", "negate"], function(t) {
                this["__" + t] = "#" + t
            }, {});
        return u.inject(v), c.inject(v), O.inject(v), "complete" === document.readyState ? setTimeout(h) : H.add(window, {
            load: h
        }), {
            compile: s,
            execute: o,
            load: l,
            parse: i
        }
    }.call(this), paper = new(r.inject(e.exports, {
        enumerable: !0,
        Base: e,
        Numerical: a,
        Key: X
    })), "function" == typeof define && define.amd ? define("paper", paper) : "object" == typeof module && module && (module.exports = paper), paper
};
window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout(t)
}()), window.requestAnimationFrame || (window.requestAnimationFrame = function() {
    return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
        return window.setTimeout(t, 1e3 / 60)
    }
}());
var App, Band, Brands, BrowserDetect, Circles, Contact, Ease, Event, Header, Home, Lab, LabArticle, Loader, M, Morph, Normalize, Page, Router, Test, Transitions, TransitionsFactory, Utils, W, _Morph, __bind = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    },
    __hasProp = {}.hasOwnProperty,
    __extends = function(t, e) {
        function n() {
            this.constructor = t
        }
        for (var i in e) __hasProp.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    };
Loader = function() {
    function t(t) {
        this._onLoad = __bind(this._onLoad, this);
        var e;
        this.container = t.container, this.each = t.each, this.complete = t.complete, e = this.container.find("img").filter(function() {
            return "" === this.getAttribute("src")
        }), this.imgLength = e.length, this.imgInc = 0, this.steps = 0, this.empty = !1, e.length || (this.empty = !0, this.complete && this.complete()), e.each(function(t) {
            return function(e, n) {
                var i;
                return i = n.getAttribute("data-src"), img.complete ? t._onLoad(n) : n.onload = t._onLoad(n), n.src = i
            }
        }(this))
    }
    return t.prototype._onLoad = function(t) {
        return this.imgInc++, this.steps = this.imgInc / this.imgLength * 100, this.each && this.each(t), this.imgInc === this.imgLength && this.complete ? this.complete() : void 0
    }, t
}(), Router = function() {
    function t() {
        this.backCall = __bind(this.backCall, this), this.cache = {}, this.container = $(".ajaxContainer"), this.current = this.container.attr("id"), this.headTitle = $("title"), this.pages = {
            prev: "",
            current: this.container.attr("id")
        }, this.requestInProgress = !1, this.fromCache = !1, this.fromNativeNav = !1, this._initEvents(), this.initCache(), t.singleton = this
    }
    return t.CALLSTART = "callstart", t.CALLEND = "callend", t.CALLERROR = "callerror", t.INITIALIZE = "initialize", t.CLICK = "click", t.singleton, t.prototype.initCache = function() {
        return this.href = document.location.pathname, this.content = this.container, this.caching()
    }, t.prototype._initEvents = function() {
        return $(document).on("click", "a", function(e) {
            return function(n) {
                return e.elm = $(n.currentTarget), e.href = e.elm.attr("href"), e.checkRequestAvailability(), e.isRequestAvailable && e.getContent(), e.isTargetSet || n.preventDefault(), $(e).trigger(t.CLICK)
            }
        }(this)), $(window).on("popstate", function(t) {
            return function(e) {
                return document.location.pathname.split("#")[0] !== t.href ? (t.backCall(), e.preventDefault()) : void 0
            }
        }(this))
    }, t.prototype.checkRequestAvailability = function() {
        return this.isRequestAvailable = !0, this.isTargetSet = !1, this.requestInProgress && (this.isRequestAvailable = !1), this.elm.attr("target") ? (this.isTargetSet = !0, this.isRequestAvailable = !1) : void 0
    }, t.prototype.areUrlsMatching = function() {
        var t, e, n;
        return n = this.href, t = document.location.pathname, e = document.location.href, "/" === n.substr(-1) && (n = n.substr(0, n.length - 1)), "/" === e.substr(-1) && (e = e.substr(0, e.length - 1), t = t.substr(0, t.length - 1)), n === t || n === e ? !0 : !1
    }, t.prototype.backCall = function() {
        return this.fromNativeNav = !0, document.location.pathname === this.href ? window.history.go(-1) : (this.href = document.location.pathname, this.getContent())
    }, t.prototype.getContent = function() {
        return this.pages.prev = this.pages.current, this.requestInProgress = !0, $(this).trigger(t.CALLSTART), this.cache[this.href] ? (this.fromCache = !0, this.content = this.cache[this.href].clone(), this.requestSucceeded()) : (this.fromCache = !1, this.request())
    }, t.prototype.request = function() {
        return this.ajaxRequest && 4 !== this.ajaxRequest && this.ajaxRequest.abort(), this.ajaxRequest = $.ajax({
            url: this.href,
            success: function(t) {
                return function(e) {
                    return t.ajaxResponse = e, t.content = $(e).filter(".ajaxContainer"), 0 === t.content.length && (t.content = $(e).find(".ajaxContainer")), t.title = $(e).filter("title").text(), t.requestSucceeded()
                }
            }(this),
            complete: function() {
                return function() {}
            }(this),
            error: function(e) {
                return function(n) {
                    return console.log(n), $(e).trigger(t.CALLERROR)
                }
            }(this)
        })
    }, t.prototype.requestSucceeded = function() {
        return this.pages.current = this.content.attr("id"), this.changeTitle(), this.caching(), this.fromNativeNav === !1 && this.changeUrl(), this.fromNativeNav = !1, $(this).trigger(t.CALLEND)
    }, t.prototype.changeTitle = function() {
        return this.headTitle.text(this.title)
    }, t.prototype.caching = function() {
        return this.cache[this.href] = this.content.clone()
    }, t.prototype.changeUrl = function(t) {
        var e, n;
        return t && (this.href = t), n = {}, e = this.href.split(window.location.host)[1], e && (e = e.substr(4)), window.history.pushState ? this.pages.current === this.pages.prev ? window.history.replaceState(n, null, this.href) : window.history.pushState(n, null, this.href) : window.location.hash = e
    }, t
}(), Transitions = function() {
    function t() {
        this._defaultIn = __bind(this._defaultIn, this), this._defaultOut = __bind(this._defaultOut, this), this._transitionIn = __bind(this._transitionIn, this), this._transitionOut = __bind(this._transitionOut, this), this._onRouterEnd = __bind(this._onRouterEnd, this), this._onRouterStart = __bind(this._onRouterStart, this), this._onRouterClick = __bind(this._onRouterClick, this), this._initEvents = __bind(this._initEvents, this), this.router = new Router, this._transitionInDelay = 0, this.transitionsWhenCallFinished = !0, this._initEvents()
    }
    return t.START = "callstart", t.END = "callend", t.MIDDLE = "callmiddle", t.prototype._initEvents = function() {
        return $(this.router).on(Router.CLICK, this._onRouterClick).on(Router.CALLSTART, this._onRouterStart).on(Router.CALLEND, this._onRouterEnd)
    }, t.prototype._onRouterClick = function() {}, t.prototype._onRouterStart = function() {
        return this.transitionsWhenCallFinished !== !0 ? this._transitionOut() : void 0
    }, t.prototype._onRouterEnd = function() {
        var t;
        return this.transitionsWhenCallFinished === !0 ? (t = "_" + this.router.pages.prev + "To" + this.router.pages.current.charAt(0).toUpperCase() + this.router.pages.current.slice(1), this[t] ? this[t]() : (this._transitionOut(), setTimeout(function(t) {
            return function() {
                return t._transitionIn()
            }
        }(this), this._transitionInDelay))) : this._transitionIn()
    }, t.prototype._transitionOut = function() {
        var t;
        return t = "_" + this.router.pages.prev + "Out", this[t] ? this[t]() : this._defaultOut()
    }, t.prototype._transitionIn = function() {
        var t;
        return t = "_" + this.router.pages.current + "In", $(window).scrollTop(0), this[t] ? this[t]() : this._defaultIn()
    }, t.prototype._defaultOut = function() {
        return this.container = $(".ajaxContainer"), this.router.requestInProgress = !0, this.container.addClass("removed"), this.container[0].offsetHeight, $(this).trigger(t.START)
    }, t.prototype._defaultIn = function() {
        var e, n;
        return n = $(".ajaxContainer"), e = this.router.content, n.eq(0).after(e), n.remove(), e.addClass("added"), e[0].offsetHeight, e.removeClass("added"), this.sectionId = this.router.pages.current, $(this).trigger(t.MIDDLE), this.router.requestInProgress = !1, $(this).trigger(t.END)
    }, t
}(), Event = function() {
    function t() {}
    return t.MOUSEDOWN = $("body").hasClass("tablet") ? "touchstart" : "mousedown", t.MOUSEUP = $("body").hasClass("tablet") ? "touchend" : "mouseup", t.MOUSEMOVE = $("body").hasClass("tablet") ? "touchmove" : "mousemove", t.CLICK = $("body").hasClass("tablet") ? "touchstart" : "click", t.ENTER = $("body").hasClass("tablet") ? "touchstart" : "mouseenter", t.KEYDOWN = "keydown", t.WHEEL = "mousewheel", t.LOADED = "loaded", t.STEPS = "steps", t.SUBMIT = "submit", t
}(), Page = function() {
    function t(t) {
        this.destroy = __bind(this.destroy, this), this.update = __bind(this.update, this), this.resize = __bind(this.resize, this), this._initEvents = __bind(this._initEvents, this), this._initContent = __bind(this._initContent, this), this.pageId = t.pageId, console.log("%c# --------------------o Initialize Class " + this.pageId, "background: #e1e342; color: #0F0F0F;"), this._initContent(), this._initEvents()
    }
    return t.prototype._initContent = function() {
        return this.container = $("#part-" + this.pageId.charAt(0).toLowerCase() + this.pageId.slice(1)), new Loader({
            container: this.container
        })
    }, t.prototype._initEvents = function() {}, t.prototype.resize = function() {}, t.prototype.update = function() {}, t.prototype.destroy = function() {
        var t;
        return t = this.constructor.name, console.log("%c# --------------------o Destroy Class " + t, "background: #e3b042; color: #0F0F0F;")
    }, t
}(), W = function() {
    function t() {}
    return t.init = function() {
        return t.window = $(window), t.body = $("body"), t.device = $("body").attr("class"), t.ww = $(window).width(), t.wh = $(window).height(), t.sw = screen.width, t.sh = screen.height, t.scrollTop = {
            real: 0,
            calc: 0
        }, t.isTablet = $("body").hasClass("tablet") ? !0 : !1
    }, t
}(), BrowserDetect = function() {
    function t() {}
    return t.getIEVersion = function() {
        var t, e;
        return e = window.navigator.userAgent, t = e.indexOf("MSIE"), t > 0 ? ~~e.substring(t + 5, e.indexOf(".", t)) : e.match(/Trident\/7\./) ? 11 : void 0
    }, t
}(), Ease = function() {
    function t() {}
    return t.linear = function(t) {
        return t
    }, t.inQuad = function(t) {
        return t * t
    }, t.outQuad = function(t) {
        return t * (2 - t)
    }, t.inCube = function(t) {
        return t * t * t
    }, t.outCube = function(t) {
        return --t * t * t + 1
    }, t.inOutCube = function(t) {
        return t *= 2, 1 > t ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
    }, t.inQuart = function(t) {
        return t * t * t * t
    }, t.outQuart = function(t) {
        return 1 - --t * t * t * t
    }, t.inOutQuart = function(t) {
        return t *= 2, 1 > t ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
    }, t.inQuint = function(t) {
        return t * t * t * t * t
    }, t.outQuint = function(t) {
        return --t * t * t * t * t + 1
    }, t.inOutQuint = function(t) {
        return t *= 2, 1 > t ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
    }, t.inSine = function(t) {
        return 1 - Math.cos(t * Math.PI / 2)
    }, t.outSine = function(t) {
        return Math.sin(t * Math.PI / 2)
    }, t.inOutSine = function(t) {
        return .5 * (1 - Math.cos(Math.PI * t))
    }, t.inExpo = function(t) {
        return 0 === t ? 0 : Math.pow(1024, t - 1)
    }, t.outExpo = function(t) {
        return 1 === t ? t : 1 - Math.pow(2, -10 * t)
    }, t.inOutExpo = function(t) {
        return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
    }, t.inCirc = function(t) {
        return 1 - Math.sqrt(1 - t * t)
    }, t.outCirc = function(t) {
        return Math.sqrt(1 - --t * t)
    }, t.inOutCirc = function(t) {
        return t *= 2, 1 > t ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
    }, t.inBack = function(t) {
        var e;
        return e = 1.70158, t * t * ((e + 1) * t - e)
    }, t.outBack = function(t) {
        var e;
        return e = 1.70158, --t * t * ((e + 1) * t + e) + 1
    }, t.inOutBack = function(t) {
        var e;
        return e = 2.5949095, (t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
    }, t
}(), Normalize = function() {
    function t() {}
    return t.transform = function(t, e) {
        return t ? (t.style.transform = e, t.style.webkitTransform = e, t.style.mozTransform = e) : void 0
    }, t.transformOrigin = function(t, e) {
        return t ? (t.style.transformOrigin = e, t.style.webkitTransformOrigin = e, t.style.mozTransformOrigin = e) : void 0
    }, t
}(), Utils = function() {
    function t() {}
    return t.getCoverSizeImage = function(t, e, n, i) {
        var r, s, o, a, u, h;
        return h = t, a = e, o = n || W.ww, r = i || W.wh, u = h / a, s = o / r, u > s ? {
            width: r * u,
            height: r,
            top: 0,
            left: .5 * -(r * u - o)
        } : {
            width: o,
            height: o / u,
            top: .5 * -(o / u - r),
            left: 0
        }
    }, t.getContainSizeImage = function(t, e, n, i) {
        var r, s, o, a, u, h;
        return h = t, a = e, o = n || W.ww, r = i || W.wh, u = h / a, s = o / r, u > s ? {
            width: o,
            height: o / u,
            top: .5 * (r - o / u),
            left: 0
        } : {
            width: r * u,
            height: r,
            top: 0,
            left: .5 * (o - r * u)
        }
    }, t.clearTimers = function(t) {
        return $.each(t, function(t, e) {
            return clearTimeout(e)
        })
    }, t.hexToRgb = function(t) {
        var e;
        return e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t), e ? {
            r: parseInt(e[1], 16),
            g: parseInt(e[2], 16),
            b: parseInt(e[3], 16)
        } : null
    }, t
}(), App = function() {
    function t() {
        this.update = __bind(this.update, this), this._onTransitionsEnd = __bind(this._onTransitionsEnd, this), this._onTransitionsMiddle = __bind(this._onTransitionsMiddle, this), this._onTransitionsStart = __bind(this._onTransitionsStart, this), this._onResize = __bind(this._onResize, this), this._initEvents = __bind(this._initEvents, this), this._destroySection = __bind(this._destroySection, this), this._initPage = __bind(this._initPage, this), this._initContent = __bind(this._initContent, this), console.log("%c# --------------------o Running Desktop", "background: #42e34d; color: #0F0F0F;"), W.init(), this._initContent(), this._initEvents(), this._onResize()
    }
    return t.pages = {
        brands: "Brands",
        contact: "Contact",
        home: "Home",
        lab: "Lab",
        labArticle: "LabArticle"
    }, t.prototype._initContent = function() {
        return W.time = {
            now: +new Date,
            old: +new Date
        }, this.transitions = new Transitions, new Loader({
            container: $(".main-header")
        }), this.header = new Header, this._initPage()
    }, t.prototype._initPage = function() {
        return this._destroySection(), this.pageId = $(".ajaxContainer").attr("id").replace("part-", ""), this.pageId && (this.section = new window[t.pages[this.pageId] || "Page"]({
            pageId: this.pageId
        })), this.header.changeColor(this.pageId), this._onResize()
    }, t.prototype._destroySection = function() {
        return this.section && this.section.destroy(), this.section = void 0
    }, t.prototype._initEvents = function() {
        return W.window.on("resize", this._onResize), $(this.transitions).on(Transitions.START, this._onTransitionsStart).on(Transitions.MIDDLE, this._onTransitionsMiddle).on(Transitions.END, this._onTransitionsEnd)
    }, t.prototype._onResize = function() {
        return W.sw = screen.width, W.sh = screen.height, W.ww = W.window.width(), W.wh = W.window.height(), this.section && this.section.resize ? this.section.resize() : void 0
    }, t.prototype._onTransitionsStart = function() {
        return this.header.updateActiveNav()
    }, t.prototype._onTransitionsMiddle = function() {
        return this._initPage()
    }, t.prototype._onTransitionsEnd = function() {}, t.prototype.update = function() {
        return W.time.now = +new Date, W.time.delta = (W.time.now - W.time.old) / 1e3, W.time.old = W.time.now, this.section && this.section.update ? this.section.update() : void 0
    }, t
}(), $(function() {
    var t, e;
    return t = new App, (e = function() {
        return t.update(), window.requestAnimationFrame(e)
    })()
}), TransitionsFactory = function(t) {
    function e() {
        return e.__super__.constructor.apply(this, arguments)
    }
    return __extends(e, t), e
}(Transitions), Band = function() {
    function t(t) {
        this.update = __bind(this.update, this), this.color = t.color, this.radius = t.radius, this.ctx = t.ctx, this.length = t.length, this.pos = t.pos, this.speed = t.speed
    }
    return t.prototype.update = function() {
        return this.pos += this.speed * W.time.delta, this.ctx.beginPath(), this.ctx.strokeStyle = this.color, this.ctx.arc(.5 * W.ww, .5 * W.wh, this.radius, this.pos, this.pos + this.length), this.ctx.stroke()
    }, t
}(), Circles = function() {
    function t(t) {
        this.update = __bind(this.update, this), this.resize = __bind(this.resize, this), this._drawBands = __bind(this._drawBands, this), this._drawCircles = __bind(this._drawCircles, this), this._render = __bind(this._render, this), this._initEvents = __bind(this._initEvents, this), this._initContent = __bind(this._initContent, this), this.$canvas = t.$canvas, this._initContent(), this._initEvents()
    }
    return t.prototype._initContent = function() {
        var t, e, n, i, r, s, o;
        for (this.canvas = this.$canvas[0], this.ctx = this.canvas.getContext("2d"), this.maxRadius = 350, this.arcZero = .5 * -Math.PI, this.arcFull = 2 * Math.PI, this.bands = [], e = ["purple", "pink", "orange"], t = [{
                length: .1,
                pos: [0, .15, .3, .45, .6, .8],
                speed: 2 * Math.PI / 20
            }, {
                length: .1,
                pos: [0, .15, .3, .45, .6],
                speed: 2 * -Math.PI / 30
            }, {
                length: .1,
                pos: [0, .15, .3, .45],
                speed: 2 * Math.PI / 15
            }], o = [], n = r = 0, s = t.length; s >= 0 ? s > r : r > s; n = s >= 0 ? ++r : --r) o.push(function() {
            var r, s, o;
            for (o = [], i = r = 0, s = t[n].pos.length; s >= 0 ? s > r : r > s; i = s >= 0 ? ++r : --r) o.push(this.bands.push(new Band({
                ctx: this.ctx,
                color: e[n],
                radius: this.maxRadius - 40 * n * 2,
                length: t[n].length * this.arcFull,
                pos: t[n].pos[i] * this.arcFull,
                speed: t[n].speed
            })));
            return o
        }.call(this));
        return o
    }, t.prototype._initEvents = function() {}, t.prototype._render = function() {
        return this._drawCircles(), this._drawBands()
    }, t.prototype._drawCircles = function() {
        var t, e, n;
        for (n = [], t = e = 0; 8 > e; t = ++e) this.ctx.beginPath(), this.ctx.strokeStyle = "#d2d2d2", this.ctx.arc(.5 * W.ww, .5 * W.wh, this.maxRadius - 40 * t, 0, 2 * Math.PI), this.ctx.lineWidth = 1.5, n.push(this.ctx.stroke());
        return n
    }, t.prototype._drawBands = function() {
        var t, e, n, i;
        for (i = [], t = e = 0, n = this.bands.length; n >= 0 ? n > e : e > n; t = n >= 0 ? ++e : --e) i.push(this.bands[t].update());
        return i
    }, t.prototype.resize = function() {
        return this.canvas.width = W.ww, this.canvas.height = W.wh, this.maxRadius = .5 * (Math.min(W.ww, W.wh) - 100), this.maxRadius = 350
    }, t.prototype.update = function() {
        return this.ctx.clearRect(0, 0, W.ww, W.wh), this._render()
    }, t
}(), Morph = function() {
    function t(t) {
        this.update = __bind(this.update, this), this.resize = __bind(this.resize, this), this.getStatus = __bind(this.getStatus, this), this.updateStatus = __bind(this.updateStatus, this), this._calcExpo = __bind(this._calcExpo, this), this._render = __bind(this._render, this), this._translatePictures = __bind(this._translatePictures, this), this._morph = __bind(this._morph, this), this._endLoading = __bind(this._endLoading, this), this._initEvents = __bind(this._initEvents, this), this._initContent = __bind(this._initContent, this), this.$canvas = t.$canvas, this.tween = {
            duration: 2e3,
            startTime: 0,
            stopped: !0,
            val: 0
        }, this.testVal = 0, this.testDest = 0, this._initContent(), this._initEvents()
    }
    return t.LOADED = "morph_loaded", t.prototype._initContent = function() {
        var t;
        return this.canvas = this.$canvas[0], paper.setup(this.canvas), this.size = 500, this.topShift = {
            x: -300,
            y: -400
        }, this.bottomShift = {
            x: 350,
            y: 350
        }, this.paths = {
            sources: {
                square: new paper.Path.Rectangle({
                    size: [this.size, this.size]
                }),
                circle: new paper.Path.Circle({
                    radius: this.size / 2
                }),
                triangle: new paper.Path.RegularPolygon({
                    sides: 3,
                    radius: this.size / 1.6
                }),
                topsquare: new paper.Path.Rectangle({
                    size: [this.size + 50, this.size + 50]
                }),
                topcircle: new paper.Path.Circle({
                    radius: this.size / 3.5
                }),
                toptriangle: new paper.Path.RegularPolygon({
                    sides: 3,
                    radius: this.size / 3.5
                }),
                bottomsquare: new paper.Path.Rectangle({
                    size: [this.size, this.size]
                }),
                bottomcircle: new paper.Path.Circle({
                    radius: this.size / 3.5
                }),
                bottomtriangle: new paper.Path.RegularPolygon({
                    sides: 3,
                    radius: this.size / 3.5
                })
            },
            morph: [{
                prefix: "",
                item: new paper.Path.Circle({
                    center: paper.view.center
                })
            }, {
                prefix: "",
                item: new paper.Path.Circle({
                    center: paper.view.center,
                    radius: this.size / 2,
                    fillColor: {
                        gradient: {
                            stops: ["#28b3ff", "#ae95ff"]
                        },
                        origin: [paper.view.center.x, paper.view.center.y - 100],
                        destination: [paper.view.center.x, paper.view.center.y + 100]
                    }
                })
            }, {
                prefix: "top",
                item: new paper.Path.Circle({
                    center: new paper.Point(paper.view.center.x + this.topShift.x, paper.view.center.y + this.topShift.y),
                    fillColor: "#28b3ff"
                })
            }, {
                prefix: "bottom",
                item: new paper.Path.Circle({
                    center: new paper.Point(paper.view.center.x + this.bottomShift.x, paper.view.center.y + this.bottomShift.y),
                    fillColor: "#b5c5cf"
                })
            }],
            pictures: [new paper.Raster("/assets/medias/home/first-guy.png", paper.view.center), new paper.Raster("/assets/medias/home/second-guy.png", paper.view.center)]
        }, t = [this.paths.morph[0].item, this.paths.pictures[0], this.paths.pictures[1]], void 0 === BrowserDetect.getIEVersion() && (this.paths.morph[1].item.blendMode = "multiply", t.push(this.paths.morph[1].item)), this.group = new paper.Group({
            children: t,
            clipped: !0
        }), this.sources = this.paths.sources, this.pos = {
            handles: {
                start: 0,
                current: 0,
                dest: 0
            },
            fourthPoint: {
                start: 0,
                current: 0,
                dest: 0
            },
            rotation: {
                start: 0,
                current: 30,
                dest: 30,
                prev: 30
            },
            picture1: {
                start: new paper.Point(paper.view.center.x, paper.view.center.y),
                current: new paper.Point(paper.view.center.x, paper.view.center.y),
                dest: new paper.Point(paper.view.center.x, paper.view.center.y)
            },
            picture2: {
                start: new paper.Point(paper.view.center.x, paper.view.center.y),
                current: new paper.Point(paper.view.center.x, paper.view.center.y),
                dest: new paper.Point(paper.view.center.x, paper.view.center.y)
            },
            dot1: {
                start: 0,
                current: 0,
                dest: 0
            },
            dot2: {
                start: 0,
                current: 0,
                dest: 0
            },
            dot3: {
                start: 0,
                current: 0,
                dest: 0
            },
            siblingsPos: {
                start: 0,
                current: 0,
                dest: 0
            }
        }, this.navDots = this.$canvas.siblings("nav").find("li"), this.status = -1, this.ease = 1, this.updateStatus(-1, !0)
    }, t.prototype._initEvents = function() {
        var t, e, n;
        for (this.loadedPics = 0, n = [], t = e = 0; 2 > e; t = ++e) n.push(this.paths.pictures[t].onLoad = function(t) {
            return function() {
                return t.resize(), t.loadedPics++, 2 === t.loadedPics ? t._endLoading() : void 0
            }
        }(this));
        return n
    }, t.prototype._endLoading = function() {
        return $(this).trigger(t.LOADED), this.resize()
    }, t.prototype._morph = function() {
        var t, e, n, i, r, s, o, a, u, h;
        for (h = [], t = a = 0, u = this.paths.morph.length; u >= 0 ? u > a : a > u; t = u >= 0 ? ++a : --a) r = this.paths.morph[t].item.segments, n = this.paths.morph[t].prefix, h.push(function() {
            var t, a, u;
            for (u = [], e = t = 0, a = r.length; a >= 0 ? a > t : t > a; e = a >= 0 ? ++t : --t) i = r[e], s = this.sources[n + "circle"].segments[e], o = this.sources[n + "triangle"].segments[e], e === r.length - 1 && (o = this.sources[n + "triangle"].segments[r.length - 2]), i.handleIn.x = s.handleIn.x * this.pos.handles.current, i.handleIn.y = s.handleIn.y * this.pos.handles.current, i.handleOut.x = s.handleOut.x * this.pos.handles.current, i.handleOut.y = s.handleOut.y * this.pos.handles.current, i.point.x = o.point.x * (1 - this.pos.fourthPoint.current) + s.point.x * this.pos.fourthPoint.current, u.push(i.point.y = o.point.y * (1 - this.pos.fourthPoint.current) + s.point.y * this.pos.fourthPoint.current);
            return u
        }.call(this));
        return h
    }, t.prototype._translatePictures = function() {
        var t, e, n, i, r, s;
        for (s = [], t = i = 0, r = this.paths.pictures.length; r >= 0 ? r > i : i > r; t = r >= 0 ? ++i : --i) e = this.paths.pictures[t], n = this.pos["picture" + [t + 1]].current, s.push(e.position = n);
        return s
    }, t.prototype._render = function() {
        var t;
        return this.tween.stopped === !1 && (W.time.now - this.tween.startTime > this.tween.duration && (this.tween.stopped = !0), this.tween.val = Ease.outExpo((W.time.now - this.tween.startTime) / this.tween.duration) || 1, this.pos.rotation.prev = this.pos.rotation.current, $.each(this.pos, function(t) {
            return function(e, n) {
                return e.match("picture") ? (n.current.x = n.dest.x * t.tween.val + n.start.x * (1 - t.tween.val), n.current.y = n.dest.y * t.tween.val + n.start.y * (1 - t.tween.val)) : n.current = n.dest * t.tween.val + n.start * (1 - t.tween.val)
            }
        }(this)), t = this.pos.rotation.current - this.pos.rotation.prev, $.each(this.paths.sources, function(e) {
            return function(n, i) {
                var r, s;
                return s = new paper.Point, r = 1, n.match("top") ? (s.x = .5 * M.ww + e.topShift.x - 100, s.y = .5 * M.wh + e.topShift.y - 100, r = .2) : n.match("bottom") ? (s.x = .5 * M.ww + e.bottomShift.x + 10, s.y = .5 * M.wh + e.bottomShift.y + 20, r = -.65) : (s.x = .5 * M.ww, s.y = .5 * M.wh), i.rotate(t * r, s)
            }
        }(this)), $.each(this.navDots, function(t) {
            return function(e, n) {
                return Normalize.transform(n, "rotate(" + t.pos["dot" + (e + 1)].current + "deg)")
            }
        }(this)), this._morph(), this._translatePictures()), paper.view.draw()
    }, t.prototype._calcExpo = function(t) {
        return 1 === t ? t : 1 - Math.pow(2, -10 * t)
    }, t.prototype.updateStatus = function(t, e) {
        var n;
        return n = this.status, this.status = t, this.tween.duration = e !== !0 ? 1e3 : 0, $.each(this.pos, function() {
            return function(t, e) {
                return t.match("picture") ? (e.start.x = e.current.x, e.start.y = e.current.y) : e.start = e.current
            }
        }(this)), -1 === this.status ? (this.pos.handles.dest = 0, this.pos.fourthPoint.dest = 0, this.pos.rotation.dest = 80, this.pos.picture1.dest.x = paper.view.center.x, this.pos.picture1.dest.y = paper.view.center.y, this.pos.picture2.dest.x = paper.view.center.x, this.pos.picture2.dest.y = paper.view.center.y - this.paths.pictures[1].height, this.pos.dot1.dest = -180, this.pos.dot2.dest = -180, this.pos.dot3.dest = 0, Normalize.transformOrigin(this.navDots[1], "0 0")) : 0 === this.status ? (this.pos.handles.dest = 0, this.pos.fourthPoint.dest = 0, this.pos.rotation.dest = 80, this.pos.picture1.dest.x = paper.view.center.x, this.pos.picture1.dest.y = paper.view.center.y, this.pos.picture2.dest.x = paper.view.center.x, this.pos.picture2.dest.y = paper.view.center.y - this.paths.pictures[1].height, this.pos.dot1.dest = -180, this.pos.dot2.dest = -180, this.pos.dot3.dest = 0, Normalize.transformOrigin(this.navDots[1], "0 0")) : 1 === this.status ? (this.pos.handles.dest = 1, this.pos.fourthPoint.dest = 1, this.pos.rotation.dest = 150, this.pos.picture1.dest.x = paper.view.center.x + this.paths.pictures[0].width, this.pos.picture1.dest.y = paper.view.center.y, this.pos.picture2.dest.x = paper.view.center.x, this.pos.picture2.dest.y = paper.view.center.y, this.pos.dot1.dest = 0, this.pos.dot2.dest = 0, this.pos.dot3.dest = 0) : 2 === this.status && (this.pos.handles.dest = 0, this.pos.fourthPoint.dest = 1, this.pos.rotation.dest = 0, this.pos.picture1.dest.x = paper.view.center.x + this.paths.pictures[0].width, this.pos.picture1.dest.y = paper.view.center.y, this.pos.picture2.dest.x = paper.view.center.x, this.pos.picture2.dest.y = paper.view.center.y + this.paths.pictures[1].height, this.pos.dot1.dest = 0, this.pos.dot2.dest = 180, this.pos.dot3.dest = 180, Normalize.transformOrigin(this.navDots[1], "0 30px")), this.tween.startTime = W.time.now || +new Date, this.tween.stopped = !1
    }, t.prototype.getStatus = function() {
        return this.status
    }, t.prototype.resize = function() {
        return $.each(this.paths.sources, function(t) {
            return function(e, n) {
                return e.match("top") ? (n.position.x = .5 * M.ww + t.topShift.x, n.position.y = .5 * M.wh + t.topShift.y) : e.match("bottom") ? (n.position.x = .5 * M.ww + t.bottomShift.x, n.position.y = .5 * M.wh + t.bottomShift.y) : (n.position.x = .5 * M.ww, n.position.y = .5 * M.wh)
            }
        }(this)), this.paths.morph[1].item.fillColor = {
            gradient: {
                stops: ["#28b3ff", "#ae95ff"]
            },
            origin: [paper.view.center.x, paper.view.center.y - 100],
            destination: [paper.view.center.x, paper.view.center.y + 100]
        }, this.updateStatus(this.status, !0)
    }, t.prototype.update = function() {
        return this._render()
    }, t
}(), M = {
    ww: 1060,
    wh: 1160
}, _Morph = function() {
    function t(t) {
        this.update = __bind(this.update, this), this.resize = __bind(this.resize, this), this.getStatus = __bind(this.getStatus, this), this.updateStatus = __bind(this.updateStatus, this), this._calcExpo = __bind(this._calcExpo, this), this._render = __bind(this._render, this), this._translatePictures = __bind(this._translatePictures, this), this._morph = __bind(this._morph, this), this._initMorph = __bind(this._initMorph, this), this._endLoading = __bind(this._endLoading, this), this._initEvents = __bind(this._initEvents, this), this._initContent = __bind(this._initContent, this), this.$canvas = t.$canvas, this.tween = {
            duration: 2e3,
            startTime: 0,
            stopped: !0,
            val: 0
        }, this.testVal = 0, this.testDest = 0, this._initContent(), this._initEvents()
    }
    return t.LOADED = "morph_loaded", t.prototype._initContent = function() {
        return this.canvas = this.$canvas[0], paper.setup(this.canvas), this.size = 500, this.topShift = {
            x: -300,
            y: -400
        }, this.bottomShift = {
            x: 350,
            y: 350
        }, this.paths = {
            sources: {
                square: new paper.Path.Rectangle({
                    size: [this.size, this.size]
                }),
                circle: new paper.Path.Circle({
                    radius: this.size / 2
                }),
                triangle: new paper.Path.RegularPolygon({
                    sides: 3,
                    radius: this.size / 1.6
                }),
                topsquare: new paper.Path.Rectangle({
                    size: [this.size + 50, this.size + 50]
                }),
                topcircle: new paper.Path.Circle({
                    radius: this.size / 3.5
                }),
                toptriangle: new paper.Path.RegularPolygon({
                    sides: 3,
                    radius: this.size / 3.5
                }),
                bottomsquare: new paper.Path.Rectangle({
                    size: [this.size, this.size]
                }),
                bottomcircle: new paper.Path.Circle({
                    radius: this.size / 3.5
                }),
                bottomtriangle: new paper.Path.RegularPolygon({
                    sides: 3,
                    radius: this.size / 3.5
                })
            },
            morph: [{
                prefix: "",
                item: new paper.Path.Circle({
                    center: paper.view.center
                })
            }, {
                prefix: "",
                item: new paper.Path.Circle({
                    center: paper.view.center,
                    radius: this.size / 2,
                    fillColor: {
                        gradient: {
                            stops: ["#28b3ff", "#ae95ff"]
                        },
                        origin: [paper.view.center.x, paper.view.center.y - 100],
                        destination: [paper.view.center.x, paper.view.center.y + 100]
                    },
                    blendMode: "multiply"
                })
            }, {
                prefix: "top",
                item: new paper.Path.Circle({
                    center: new paper.Point(paper.view.center.x + this.topShift.x, paper.view.center.y + this.topShift.y),
                    fillColor: "#28b3ff"
                })
            }, {
                prefix: "bottom",
                item: new paper.Path.Circle({
                    center: new paper.Point(paper.view.center.x + this.bottomShift.x, paper.view.center.y + this.bottomShift.y),
                    fillColor: "#b5c5cf"
                })
            }],
            pictures: [new paper.Raster("/temp/first-guy.png", paper.view.center), new paper.Raster("/temp/second-guy.png", paper.view.center)]
        }, this.group = new paper.Group({
            children: [this.paths.morph[0].item, this.paths.pictures[0], this.paths.pictures[1], this.paths.morph[1].item],
            clipped: !0
        }), this.sources = this.paths.sources, this.pos = {
            scale: {
                start: 1,
                current: 1,
                dest: 1
            },
            handles: {
                start: 0,
                current: 0,
                dest: 0
            },
            fourthPoint: {
                start: 0,
                current: 0,
                dest: 0
            },
            rotation: {
                start: 0,
                current: 30,
                dest: 30,
                prev: 30
            },
            picture1: {
                start: new paper.Point(paper.view.center.x, paper.view.center.y),
                current: new paper.Point(paper.view.center.x, paper.view.center.y),
                dest: new paper.Point(paper.view.center.x, paper.view.center.y)
            },
            picture2: {
                start: new paper.Point(paper.view.center.x, paper.view.center.y),
                current: new paper.Point(paper.view.center.x, paper.view.center.y),
                dest: new paper.Point(paper.view.center.x, paper.view.center.y)
            },
            dot1: {
                start: 0,
                current: 0,
                dest: 0
            },
            dot2: {
                start: 0,
                current: 0,
                dest: 0
            },
            dot3: {
                start: 0,
                current: 0,
                dest: 0
            }
        }, this.navDots = this.$canvas.siblings("nav").find("li"), this.status = -1, this.ease = 1, this.updateStatus(-1, !0)
    }, t.prototype._initEvents = function() {
        var t, e;
        for (this.loadedPics = 0, t = e = 0; 2 > e; t = ++e) this.paths.pictures[t].onLoad = function(t) {
            return function() {
                return t.resize(), t.loadedPics++, 2 === t.loadedPics ? t._endLoading() : void 0
            }
        }(this);
        return $("body").on(Event.CLICK, function(t) {
            return function() {
                return t.tween.stopped = !1, t.tween.startTime = W.time.now
            }
        }(this))
    }, t.prototype._endLoading = function() {
        return $(this).trigger(Morph.LOADED), this._initMorph(), this.resize()
    }, t.prototype._initMorph = function() {}, t.prototype._morph = function() {
        var t, e, n, i, r, s, o, a, u, h, c;
        for (t = a = 0, h = this.paths.morph.length; h >= 0 ? h > a : a > h; t = h >= 0 ? ++a : --a)
            for (r = this.paths.morph[t].item.segments, n = this.paths.morph[t].prefix, e = u = 0, c = r.length; c >= 0 ? c > u : u > c; e = c >= 0 ? ++u : --u) i = r[e], s = this.sources[n + "circle"].segments[e], o = this.sources[n + "triangle"].segments[e], e === r.length - 1 && (o = this.sources[n + "triangle"].segments[r.length - 2]), i.handleIn.x = s.handleIn.x * this.pos.handles.current, i.handleIn.y = s.handleIn.y * this.pos.handles.current, i.handleOut.x = s.handleOut.x * this.pos.handles.current, i.handleOut.y = s.handleOut.y * this.pos.handles.current, i.point.x = (o.point.x * (1 - this.pos.fourthPoint.current) + s.point.x * this.pos.fourthPoint.current) * this.pos.scale.current, i.point.y = (o.point.y * (1 - this.pos.fourthPoint.current) + s.point.y * this.pos.fourthPoint.current) * this.pos.scale.current;
        return console.log(this.pos.scale.current)
    }, t.prototype._translatePictures = function() {
        var t, e, n, i, r, s;
        for (s = [], t = i = 0, r = this.paths.pictures.length; r >= 0 ? r > i : i > r; t = r >= 0 ? ++i : --i) e = this.paths.pictures[t], n = this.pos["picture" + [t + 1]].current, s.push(e.position = n);
        return s
    }, t.prototype._render = function() {
        var t;
        return this.tween.stopped === !1 && (W.time.now - this.tween.startTime > this.tween.duration && (this.tween.stopped = !0), this.tween.val = Ease.outExpo((W.time.now - this.tween.startTime) / this.tween.duration) || 1, this.pos.rotation.prev = this.pos.rotation.current, $.each(this.pos, function(t) {
            return function(e, n) {
                return e.match("picture") ? (n.current.x = n.dest.x * t.tween.val + n.start.x * (1 - t.tween.val), n.current.y = n.dest.y * t.tween.val + n.start.y * (1 - t.tween.val)) : n.current = n.dest * t.tween.val + n.start * (1 - t.tween.val)
            }
        }(this)), t = this.pos.rotation.current - this.pos.rotation.prev, $.each(this.paths.sources, function(e) {
            return function(n, i) {
                var r, s;
                return s = new paper.Point, r = 1, n.match("top") ? (s.x = .5 * W.ww + e.topShift.x - 100, s.y = .5 * W.wh + e.topShift.y - 100, r = .2) : n.match("bottom") ? (s.x = .5 * W.ww + e.bottomShift.x + 10, s.y = .5 * W.wh + e.bottomShift.y + 20, r = -.65) : (s.x = .5 * W.ww, s.y = .5 * W.wh), i.rotate(t * r, s)
            }
        }(this)), $.each(this.navDots, function(t) {
            return function(e, n) {
                return Normalize.transform(n, "rotate(" + t.pos["dot" + (e + 1)].current + "deg)")
            }
        }(this)), this._morph(), this._translatePictures()), paper.view.draw()
    }, t.prototype._calcExpo = function(t) {
        return 1 === t ? t : 1 - Math.pow(2, -10 * t)
    }, t.prototype.updateStatus = function(t, e) {
        var n;
        return n = this.status, this.status = t, this.tween.duration = e !== !0 ? 1e3 : 0, $.each(this.pos, function() {
            return function(t, e) {
                return t.match("picture") ? (e.start.x = e.current.x, e.start.y = e.current.y) : e.start = e.current
            }
        }(this)), this.paths.sources.triangle.radius = 100, -1 === this.status && (this.pos.scale.dest = .5, this.pos.handles.dest = 0, this.pos.fourthPoint.dest = 0, this.pos.rotation.dest = 80, this.pos.picture1.dest.x = paper.view.center.x - this.paths.pictures[1].width, this.pos.picture1.dest.y = paper.view.center.y, this.pos.picture2.dest.x = paper.view.center.x, this.pos.picture2.dest.y = paper.view.center.y - this.paths.pictures[1].height, this.pos.dot1.dest = -180, this.pos.dot2.dest = -180, this.pos.dot3.dest = 0, Normalize.transformOrigin(this.navDots[1], "0 0")), 0 === this.status ? (this.pos.handles.dest = 0, this.pos.fourthPoint.dest = 0, this.pos.rotation.dest = 80, this.pos.picture1.dest.x = paper.view.center.x, this.pos.picture1.dest.y = paper.view.center.y, this.pos.picture2.dest.x = paper.view.center.x, this.pos.picture2.dest.y = paper.view.center.y - this.paths.pictures[1].height, this.pos.dot1.dest = -180, this.pos.dot2.dest = -180, this.pos.dot3.dest = 0, Normalize.transformOrigin(this.navDots[1], "0 0")) : 1 === this.status ? (this.pos.scale.dest = 1, this.pos.handles.dest = 1, this.pos.fourthPoint.dest = 1, this.pos.rotation.dest = 150, this.pos.picture1.dest.x = paper.view.center.x + this.paths.pictures[0].width, this.pos.picture1.dest.y = paper.view.center.y, this.pos.picture2.dest.x = paper.view.center.x, this.pos.picture2.dest.y = paper.view.center.y, this.pos.dot1.dest = 0, this.pos.dot2.dest = 0, this.pos.dot3.dest = 0) : 2 === this.status && (this.pos.handles.dest = 0, this.pos.fourthPoint.dest = 1, this.pos.rotation.dest = 0, this.pos.picture1.dest.x = paper.view.center.x + this.paths.pictures[0].width, this.pos.picture1.dest.y = paper.view.center.y, this.pos.picture2.dest.x = paper.view.center.x, this.pos.picture2.dest.y = paper.view.center.y + this.paths.pictures[1].height, this.pos.dot1.dest = 0, this.pos.dot2.dest = 180, this.pos.dot3.dest = 180, Normalize.transformOrigin(this.navDots[1], "0 30px")), this.tween.startTime = W.time.now || +new Date, this.tween.stopped = !1
    }, t.prototype.getStatus = function() {
        return this.status
    }, t.prototype.resize = function() {
        return paper.view.viewSize = new paper.Size(W.ww, W.wh), paper.view.update(), $.each(this.paths.sources, function(t) {
            return function(e, n) {
                return e.match("top") ? (n.position.x = .5 * W.ww + t.topShift.x, n.position.y = .5 * W.wh + t.topShift.y) : e.match("bottom") ? (n.position.x = .5 * W.ww + t.bottomShift.x, n.position.y = .5 * W.wh + t.bottomShift.y) : (n.position.x = .5 * W.ww, n.position.y = .5 * W.wh)
            }
        }(this)), this.paths.morph[1].item.fillColor = {
            gradient: {
                stops: ["#28b3ff", "#ae95ff"]
            },
            origin: [paper.view.center.x, paper.view.center.y - 100],
            destination: [paper.view.center.x, paper.view.center.y + 100]
        }, this.updateStatus(-1, !0)
    }, t.prototype.update = function() {
        return this._render()
    }, t
}(), Brands = function(t) {
    function e() {
        this.update = __bind(this.update, this), this.resize = __bind(this.resize, this), this._onTitleClick = __bind(this._onTitleClick, this), this._initEvents = __bind(this._initEvents, this), this._initContent = __bind(this._initContent, this), e.__super__.constructor.apply(this, arguments), console.log("—————————————————————————————————o Brands")
    }
    return __extends(e, t), e.prototype._initContent = function() {
        return e.__super__._initContent.apply(this, arguments), this.brands = this.container.find("li"), this.titles = this.container.find(".title"), setTimeout(function(t) {
            return function() {
                return t.brands.eq(0).trigger("click")
            }
        }(this), 300)
    }, e.prototype._initEvents = function() {
        return this.container.find("li").on(Event.CLICK, this._onTitleClick)
    }, e.prototype._onTitleClick = function(t) {
        var e, n, i;
        return e = $(t.currentTarget), e.attr("class") && e.attr("class").match("active") ? void 0 : (i = e.find(".text-wrapper"), n = i.children(".text"), this.brands.removeClass("active").find(".text-wrapper").css("height", 0), e.addClass("active"), i.css("height", n.outerHeight()))
    }, e.prototype.resize = function() {
        return this.titles.each(function() {
            return function(t, e) {
                var n, i;
                return n = $(e), i = n.find(".border"), i.css("width", n.offset().left + n.width())
            }
        }(this))
    }, e.prototype.update = function() {}, e
}(Page), Contact = function(t) {
    function e() {
        this.update = __bind(this.update, this), this.resize = __bind(this.resize, this), this._onCircleLeave = __bind(this._onCircleLeave, this), this._onCircleEnter = __bind(this._onCircleEnter, this), this._resetTween = __bind(this._resetTween, this), this._render = __bind(this._render, this), this._initEvents = __bind(this._initEvents, this), this._initContent = __bind(this._initContent, this), console.log("—————————————————————————————————o Contact"), e.__super__.constructor.apply(this, arguments)
    }
    return __extends(e, t), e.prototype._initContent = function() {
        return e.__super__._initContent.apply(this, arguments), this.$canvas = this.container.find("canvas"), this.canvas = this.$canvas[0], paper.setup(this.canvas), this.hi = [new paper.Path.Rectangle({
            size: [120, 464]
        }), new paper.Path.Rectangle({
            size: [120, 464]
        }), new paper.Path.Rectangle({
            size: [210, 100]
        }), new paper.Path.Rectangle({
            size: [110, 310]
        }), new paper.Path.Circle({
            radius: 60
        })], this.circle = this.hi[4], this.group = new paper.Group({
            children: this.hi,
            fillColor: "black"
        }), this.circleSource = new paper.Path.Circle({
            radius: 60,
            fillColor: "rgba(0, 0, 0, 0)",
            position: [.5 * W.ww + 205, .5 * W.wh - 145]
        }), this.circleSegmentsPos = [], $.each(this.circle.segments, function(t) {
            return function() {
                var e;
                return e = {}, e.dest = {
                    x: 0,
                    y: 0
                }, e.start = {
                    x: 0,
                    y: 0
                }, e.current = {
                    x: 0,
                    y: 0
                }, t.circleSegmentsPos.push(e)
            }
        }(this)), this._circleEntered = !1, this.ease = .05, this.tween = {
            duration: 1e3,
            startTime: 0,
            stopped: !0,
            val: 0,
            type: "outExpo"
        }, this._render()
    }, e.prototype._initEvents = function() {
        return this.circleSource.onMouseEnter = this._onCircleEnter, this.circleSource.onMouseLeave = this._onCircleLeave
    }, e.prototype._render = function() {
        return this._circleEntered === !1 && W.time.now - this.tween.startTime > this.tween.duration && (this.tween.stopped = !0), this.tween.val = Ease[this.tween.type]((W.time.now - this.tween.startTime) / this.tween.duration) || 1, $.each(this.circleSegmentsPos, function(t) {
            return function(e, n) {
                var i, r;
                return r = t.circleSource.segments[e].point, i = t.circle.segments[e].point, n.current.x = n.start.x * (1 - t.tween.val) + n.dest.x * t.tween.val, n.current.y = n.start.y * (1 - t.tween.val) + n.dest.y * t.tween.val, i.x = r.x + n.current.x, i.y = r.y + n.current.y
            }
        }(this)), paper.view.draw()
    }, e.prototype._resetTween = function() {
        return this.tween.startTime = W.time.now || +new Date, this.tween.stopped = !1, $.each(this.circleSegmentsPos, function() {
            return function(t, e) {
                return e.start.x = e.current.x, e.start.y = e.current.y, e.dest.x = -60 + 110 * Math.random(), e.dest.y = -60 + 110 * Math.random()
            }
        }(this))
    }, e.prototype._onCircleEnter = function() {
        return this._resetTween(), this.tween.duration = 1e3, this.tween.type = "outExpo", this.tween.interval = setInterval(function(t) {
            return function() {
                return t._resetTween()
            }
        }(this), this.tween.duration), this._circleEntered = !0
    }, e.prototype._onCircleLeave = function() {
        return clearInterval(this.tween.interval), this._circleEntered = !1, this.tween.duration = 1e3, this.tween.type = "inOutExpo", $.each(this.circleSegmentsPos, function() {
            return function(t, e) {
                return e.start.x = e.current.x, e.start.y = e.current.y, 0 === t && console.log("--------------------", e.dest, e.start), e.dest.x = 0, e.dest.y = 0
            }
        }(this))
    }, e.prototype.resize = function() {
        var t;
        return this.container.css({
            width: W.ww,
            height: W.wh
        }), t = [-243, -2, 54, -2, -83, -8, 259, 75, 258, -210], $.each(this.hi, function() {
            return function(e, n) {
                return n.position = [.5 * W.ww + t[2 * e], .5 * W.wh + t[2 * e + 1]]
            }
        }(this)), this.circleSource.position = [.5 * W.ww + t[8], .5 * W.wh + t[9]], this.group.fillColor = {
            gradient: {
                stops: ["#28b3ff", "#ae95ff"]
            },
            origin: [paper.view.center.x, paper.view.center.y - 100],
            destination: [paper.view.center.x, paper.view.center.y + 100]
        }, paper.view.viewSize = new paper.Size(W.ww, W.wh), paper.view.update()
    }, e.prototype.update = function() {
        return this._render()
    }, e
}(Page), Home = function(t) {
    function e() {
        return this.update = __bind(this.update, this), this.resize = __bind(this.resize, this), this._onInfoScroll = __bind(this._onInfoScroll, this), this._onNavClick = __bind(this._onNavClick, this), this._onMouseWheel = __bind(this._onMouseWheel, this), this._onMorphLoaded = __bind(this._onMorphLoaded, this), this._onKeyDown = __bind(this._onKeyDown, this), this._updateStatus = __bind(this._updateStatus, this), this._initEvents = __bind(this._initEvents, this), this._initContent = __bind(this._initContent, this), e.__super__.constructor.apply(this, arguments)
    }
    return __extends(e, t), e.prototype._initContent = function() {
        return e.__super__._initContent.apply(this, arguments), this.overview = this.container.find(".overview"), this.morph = new Morph({
            $canvas: $("#morph"),
            container: this.container
        }), this.infoScroll = this.container.find(".info-scroll"), this.updatedScreenIndex = -1, this.prevScreenIndex = -2, this.currentScreenIndex = -1, this.scrolling = !1, this.scrolled = !1, this.isIE = !(void 0 === BrowserDetect.getIEVersion() || BrowserDetect.getIEVersion() >= 9), this._updateStatus(), setTimeout(function(t) {
            return function() {
                return t.resize()
            }
        }(this), 300)
    }, e.prototype._initEvents = function() {
        return this.isIE === !1 ? ($("body").on("keydown", this._onKeyDown), $(this.morph).on(Morph.LOADED, this._onMorphLoaded), $(this.container).on(Event.WHEEL, this._onMouseWheel), this.container.find("nav").on(Event.CLICK, "li", this._onNavClick)) : void 0
    }, e.prototype._updateStatus = function() {
        return this.updatedScreenIndex !== this.currentScreenIndex && (this.prevScreenIndex = this.currentScreenIndex, this.currentScreenIndex = this.updatedScreenIndex, this.currentScreenIndex < 0 ? (this.currentScreenIndex = 0, this.updatedScreenIndex = 0) : this.currentScreenIndex > 2 && (this.currentScreenIndex = 2, this.updatedScreenIndex = 2)), this.currentScreenIndex !== this.prevScreenIndex && (this.morph.updateStatus(this.currentScreenIndex), this.overview[0].offsetHeight, this.overview.addClass("status-" + this.currentScreenIndex).removeClass("status-" + this.prevScreenIndex)), 2 === this.currentScreenIndex ? this.infoScroll.addClass("hidden") : this.infoScroll.removeClass("hidden")
    }, e.prototype._onKeyDown = function(t) {
        var e, n;
        return 39 === (e = t.keyCode) || 40 === e ? this.updatedScreenIndex++ : (37 === (n = t.keyCode) || 38 === n) && this.updatedScreenIndex--, this._updateStatus()
    }, e.prototype._onMorphLoaded = function() {
        var t;
        return t = '<img src="/assets/medias/home/first-guy.png" /><img src="/assets/medias/home/second-guy.png" />', this.container.find(".pictures").append(t), this.updatedScreenIndex = 0, this._updateStatus()
    }, e.prototype._onMouseWheel = function(t) {
        return this.scrolling === !1 && this.scrolled === !1 && (this.scrolled = !0, setTimeout(function(t) {
            return function() {
                return t.scrolled = !1
            }
        }(this), 1e3), t.deltaY < 0 ? this.updatedScreenIndex++ : this.updatedScreenIndex--, this._updateStatus()), t.preventDefault()
    }, e.prototype._onNavClick = function(t) {
        var e, n, i;
        return e = $(t.currentTarget), n = e.index(), i = 0, i = 0 === n && 0 === this.currentScreenIndex ? 1 : 2 === n && 2 === this.currentScreenIndex ? 1 : n, this.updatedScreenIndex = i, this._updateStatus()
    }, e.prototype._onInfoScroll = function() {
        return this.currentScreenIndex < 2 ? (this.updatedScreenIndex++, this._updateStatus()) : void 0
    }, e.prototype.resize = function() {
        return e.__super__.resize.apply(this, arguments), console.log(W.ww), this.isIE === !1 ? (this.container.css({
            width: W.ww,
            height: W.wh
        }), this.morph.resize()) : void 0
    }, e.prototype.update = function() {
        return e.__super__.update.apply(this, arguments), this.isIE === !1 ? this.morph.update() : void 0
    }, e
}(Page), Lab = function(t) {
    function e() {
        return e.__super__.constructor.apply(this, arguments)
    }
    return __extends(e, t), e
}(Page), LabArticle = function(t) {
    function e() {
        this.update = __bind(this.update, this), this.resize = __bind(this.resize, this), this._initContent = __bind(this._initContent, this), e.__super__.constructor.apply(this, arguments), console.log("—————————————————————————————————o Lab Article")
    }
    return __extends(e, t), e.prototype._initContent = function() {
        return e.__super__._initContent.apply(this, arguments), this.header = this.container.find("header"), this.backgroundHeader = this.header.find(".background-container"), this.headerBackground = {}, new Loader({
            container: this.header,
            complete: function(t) {
                return function() {
                    return t.headerBackground.elm = t.header.find("img"), console.log(t.container.length), t.headerBackground.width = t.headerBackground.elm[0].naturalWidth, t.headerBackground.height = t.headerBackground.elm[0].naturalHeight, t.resize()
                }
            }(this)
        }), this.container.find(".text").find("a").attr("target", "_blank")
    }, e.prototype.resize = function() {
        var t;
        return e.__super__.resize.apply(this, arguments), this.header.css({
            height: W.wh - 50
        }), this.headerBackground.elm ? (t = Utils.getCoverSizeImage(1400, 900, W.ww, W.wh - 50), this.headerBackground.elm.css(t)) : void 0
    }, e.prototype.update = function() {
        var t;
        return t = W.window.scrollTop(), 0 > t ? t = 0 : t > W.wh - 50 && (t = W.wh - 50), Normalize.transform(this.backgroundHeader[0], "translate3d(0, " + .5 * t + "px, 0)")
    }, e
}(Page), Test = function(t) {
    function e() {
        this.update = __bind(this.update, this), this.resize = __bind(this.resize, this), e.__super__.constructor.apply(this, arguments), console.log("—————————————————————————————————o History"), this.circles = new Circles({
            $canvas: this.container.find("#circles")
        })
    }
    return __extends(e, t), e.prototype.resize = function() {
        return e.__super__.resize.apply(this, arguments), this.circles.resize()
    }, e.prototype.update = function() {
        return e.__super__.update.apply(this, arguments), this.circles.update()
    }, e
}(Page), Header = function() {
    function t() {
        this.changeColor = __bind(this.changeColor, this), this.updateActiveNav = __bind(this.updateActiveNav, this), this._initContent = __bind(this._initContent, this), this.container = $(".main-header"), this._initContent()
    }
    return t.prototype._initContent = function() {
        return this.menuItems = this.container.find("a"), this.updateActiveNav(), new Loader({
            container: this.container
        })
    }, t.prototype.updateActiveNav = function() {
        return this.menuItems.each(function() {
            return function(t, e) {
                var n;
                return n = $(e), document.location.href.match(n.attr("href")) ? n.addClass("active").parent().siblings().children("a").removeClass("active") : void 0
            }
        }(this))
    }, t.prototype.changeColor = function(t) {
        return "labArticle" === t ? this.container.addClass("white") : this.container.removeClass("white")
    }, t
}();