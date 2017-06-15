! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = "length" in a && a.length,
            c = _.type(a);
        return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function d(a, b, c) {
        if (_.isFunction(b)) return _.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return _.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (ha.test(b)) return _.filter(b, a, c);
            b = _.filter(b, a)
        }
        return _.grep(a, function(a) {
            return U.call(b, a) >= 0 !== c
        })
    }

    function e(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function f(a) {
        var b = oa[a] = {};
        return _.each(a.match(na) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
    }

    function h() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = _.expando + h.uid++
    }

    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c
                } catch (e) {}
                sa.set(a, b, c)
            } else c = void 0;
        return c
    }

    function j() {
        return !0
    }

    function k() {
        return !1
    }

    function l() {
        try {
            return Z.activeElement
        } catch (a) {}
    }

    function m(a, b) {
        return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function o(a) {
        var b = Ka.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function p(a, b) {
        for (var c = 0, d = a.length; d > c; c++) ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"))
    }

    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c])
            }
            sa.hasData(a) && (h = sa.access(a), i = _.extend({}, h), sa.set(b, i))
        }
    }

    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
    }

    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    function t(b, c) {
        var d, e = _(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
        return e.detach(), f
    }

    function u(a) {
        var b = Z,
            c = Oa[a];
        return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c), c
    }

    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function w(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function x(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--;)
            if (b = Xa[e] + c, b in a) return b;
        return d
    }

    function y(a, b, c) {
        var d = Ta.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + wa[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
        return g
    }

    function A(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ra(a),
            g = "border-box" === _.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e)) return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e)
    }

    function D() {
        return setTimeout(function() {
            Ya = void 0
        }), Ya = _.now()
    }

    function E(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wa[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function F(a, b, c) {
        for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function G(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            n = a.style,
            o = a.nodeType && xa(a),
            p = ra.get(a, "fxshow");
        c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function() {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], $a.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d]) continue;
                    o = !0
                }
                m[d] = p && p[d] || _.style(a, d)
            } else j = void 0;
        if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function() {
                _(a).hide()
            }), l.done(function() {
                var b;
                ra.remove(a, "fxshow");
                for (b in m) _.style(a, b, m[b])
            });
            for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function H(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function I(a, b, c) {
        var d, e, f = 0,
            g = bb.length,
            h = _.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: _.extend({}, b),
                opts: _.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Ya || D(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++)
            if (d = bb[f].call(j, a, k, j.opts)) return d;
        return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function J(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(na) || [];
            if (_.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, _.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {},
            g = a === tb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function L(a, b) {
        var c, d, e = _.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && _.extend(!0, a, d), a
    }

    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
            "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function N(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }

    function O(a, b, c, d) {
        var e;
        if (_.isArray(b)) _.each(b, function(b, e) {
            c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== _.type(b)) d(a, b);
        else
            for (e in b) O(a + "[" + e + "]", b[e], c, d)
    }

    function P(a) {
        return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var Q = [],
        R = Q.slice,
        S = Q.concat,
        T = Q.push,
        U = Q.indexOf,
        V = {},
        W = V.toString,
        X = V.hasOwnProperty,
        Y = {},
        Z = a.document,
        $ = "2.1.4",
        _ = function(a, b) {
            return new _.fn.init(a, b)
        },
        aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ba = /^-ms-/,
        ca = /-([\da-z])/gi,
        da = function(a, b) {
            return b.toUpperCase()
        };
    _.fn = _.prototype = {
        jquery: $,
        constructor: _,
        selector: "",
        length: 0,
        toArray: function() {
            return R.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
        },
        pushStack: function(a) {
            var b = _.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return _.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(_.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(R.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: T,
        sort: Q.sort,
        splice: Q.splice
    }, _.extend = _.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, _.extend({
        expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === _.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isPlainObject: function(a) {
            return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(ba, "ms-").replace(ca, da)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.apply(a[f], d), e === !1) break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]), e === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(aa, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : U.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a),
                i = [];
            if (h)
                for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
            else
                for (f in a) e = b(a[f], f, d), null != e && i.push(e);
            return S.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(R.call(arguments)))
            }, e.guid = a.guid = a.guid || _.guid++, e) : void 0
        },
        now: Date.now,
        support: Y
    }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        V["[object " + b + "]"] = b.toLowerCase()
    });
    var ea = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
            if (!d && I) {
                if (11 !== h && (e = sa.exec(a)))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g), !f || !f.parentNode) return c;
                            if (f.id === g) return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                    } else {
                        if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                        if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c
                    }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                        o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
                    }
                    if (p) try {
                        return $.apply(c, o.querySelectorAll(p)), c
                    } catch (q) {} finally {
                        l || b.removeAttribute("id")
                    }
                }
            }
            return B(a.replace(ia, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }

        function d(a) {
            return a[N] = !0, a
        }

        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
        }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function j(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function l() {}

        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function n(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) {
                            if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d
        }

        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    r = d || p(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !d && b ? r : q(r, m, a, h, i),
                    t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e)
                    for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
            })
        }

        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                    return a === b
                }, g, !0), j = n(function(a) {
                    return aa(b, a) > -1
                }, g, !0), k = [function(a, c, d) {
                    var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                    return b = null, e
                }]; e > h; h++)
                if (c = w.relative[a[h].type]) k = [n(o(k), c)];
                else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                    }
                    k.push(c)
                }
            return o(k)
        }

        function t(a, c) {
            var e = c.length > 0,
                f = a.length > 0,
                g = function(d, g, h, i, j) {
                    var k, l, m, n = 0,
                        o = "0",
                        p = d && [],
                        r = [],
                        s = C,
                        t = d || f && w.find.TAG("*", j),
                        u = P += null == s ? 1 : Math.random() || .1,
                        v = t.length;
                    for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0; m = a[l++];)
                                if (m(k, g, h)) {
                                    i.push(k);
                                    break
                                }
                            j && (P = u)
                        }
                        e && ((k = !m && k) && n--, d && p.push(k))
                    }
                    if (n += o, e && o !== n) {
                        for (l = 0; m = c[l++];) m(p, r, g, h);
                        if (d) {
                            if (n > 0)
                                for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                            r = q(r)
                        }
                        $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (P = u, C = s), p
                };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
            O = a.document,
            P = 0,
            Q = 0,
            R = c(),
            S = c(),
            T = c(),
            U = function(a, b) {
                return a === b && (E = !0), 0
            },
            V = 1 << 31,
            W = {}.hasOwnProperty,
            X = [],
            Y = X.pop,
            Z = X.push,
            $ = X.push,
            _ = X.slice,
            aa = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ca = "[\\x20\\t\\r\\n\\f]",
            da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ea = da.replace("w", "w#"),
            fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
            ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
            ha = new RegExp(ca + "+", "g"),
            ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
            ja = new RegExp("^" + ca + "*," + ca + "*"),
            ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
            la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
            ma = new RegExp(ga),
            na = new RegExp("^" + ea + "$"),
            oa = {
                ID: new RegExp("^#(" + da + ")"),
                CLASS: new RegExp("^\\.(" + da + ")"),
                TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + fa),
                PSEUDO: new RegExp("^" + ga),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ba + ")$", "i"),
                needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
            },
            pa = /^(?:input|select|textarea|button)$/i,
            qa = /^h\d$/i,
            ra = /^[^{]+\{\s*\[native \w/,
            sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ta = /[+~]/,
            ua = /'|\\/g,
            va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
            wa = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            xa = function() {
                F()
            };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
        } catch (ya) {
            $ = {
                apply: X.length ? function(a, b) {
                    Z.apply(a, _.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        v = b.support = {}, y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, F = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), v.getElementsByTagName = e(function(a) {
                return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
            }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function(a) {
                return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
            }), v.getById ? (w.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, w.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete w.find.ID, w.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                return I ? b.getElementsByClassName(a) : void 0
            }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
            }), e(function(a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, U = b ? function(a, b) {
                if (a === b) return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
            } : function(a, b) {
                if (a === b) return E = !0, 0;
                var c, e = 0,
                    f = a.parentNode,
                    h = b.parentNode,
                    i = [a],
                    j = [b];
                if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                if (f === h) return g(a, b);
                for (c = a; c = c.parentNode;) i.unshift(c);
                for (c = b; c = c.parentNode;) j.unshift(c);
                for (; i[e] === j[e];) e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, d) : G
        }, b.matches = function(a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return b(c, G, null, [a]).length > 0
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b)
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()],
                d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return D = null, a
        }, x = b.getText = function(a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else
                for (; b = a[d++];) c += x(b);
            return c
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: oa,
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
                ATTR: function(a) {
                    return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(va, wa).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];)
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [P, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                            else
                                for (;
                                    (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                        c = [],
                        e = A(a.replace(ia, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function(a) {
                    return a = a.replace(va, wa),
                        function(b) {
                            return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                        }
                }),
                lang: d(function(a) {
                    return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === H
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !w.pseudos.empty(a)
                },
                header: function(a) {
                    return qa.test(a.nodeName)
                },
                input: function(a) {
                    return pa.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: j(function() {
                    return [0]
                }),
                last: j(function(a, b) {
                    return [b - 1]
                }),
                eq: j(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[u] = h(u);
        for (u in {
                submit: !0,
                reset: !0
            }) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h;) {
                (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ia, " ")
                }), h = h.slice(d.length));
                for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }, A = b.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a
            }
            return f
        }, B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a,
                l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
                    if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                        break
                    }
            }
            return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), v.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(ba, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    _.find = ea, _.expr = ea.selectors, _.expr[":"] = _.expr.pseudos, _.unique = ea.uniqueSort, _.text = ea.getText, _.isXMLDoc = ea.isXML, _.contains = ea.contains;
    var fa = _.expr.match.needsContext,
        ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ha = /^.[^:#\[\.,]*$/;
    _.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, _.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(_(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (_.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) _.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1).length
        }
    });
    var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ka = _.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ja.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), ga.test(c[1]) && _.isPlainObject(b))
                        for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
        };
    ka.prototype = _.fn, ia = _(Z);
    var la = /^(?:parents|prev(?:Until|All))/,
        ma = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    _.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && _(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), _.fn.extend({
        has: function(a) {
            var b = _(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (_.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? _.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), _.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return _.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return _.dir(a, "parentNode", c)
        },
        next: function(a) {
            return e(a, "nextSibling")
        },
        prev: function(a) {
            return e(a, "previousSibling")
        },
        nextAll: function(a) {
            return _.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return _.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return _.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return _.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return _.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return _.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || _.merge([], a.childNodes)
        }
    }, function(a, b) {
        _.fn[a] = function(c, d) {
            var e = _.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var na = /\S+/g,
        oa = {};
    _.Callbacks = function(a) {
        a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
        var b, c, d, e, g, h, i = [],
            j = !a.once && [],
            k = function(f) {
                for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
                    if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
            },
            l = {
                add: function() {
                    if (i) {
                        var c = i.length;
                        ! function f(b) {
                            _.each(b, function(b, c) {
                                var d = _.type(c);
                                "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), d ? g = i.length : b && (e = c, k(b))
                    }
                    return this
                },
                remove: function() {
                    return i && _.each(arguments, function(a, b) {
                        for (var c;
                            (c = _.inArray(b, i, c)) > -1;) i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
                    }), this
                },
                has: function(a) {
                    return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
                },
                empty: function() {
                    return i = [], g = 0, this
                },
                disable: function() {
                    return i = j = b = void 0, this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return j = void 0, b || l.disable(), this
                },
                locked: function() {
                    return !j
                },
                fireWith: function(a, b) {
                    return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!c
                }
            };
        return l
    }, _.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", _.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", _.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", _.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return _.Deferred(function(c) {
                            _.each(b, function(b, f) {
                                var g = _.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? _.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, _.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b, c, d, e = 0,
                f = R.call(arguments),
                g = f.length,
                h = 1 !== g || a && _.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : _.Deferred(),
                j = function(a, c, d) {
                    return function(e) {
                        c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    });
    var pa;
    _.fn.ready = function(a) {
        return _.ready.promise().done(a), this
    }, _.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? _.readyWait++ : _.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
        }
    }), _.ready.promise = function(b) {
        return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pa.promise(b)
    }, _.ready.promise();
    var qa = _.access = function(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === _.type(c)) {
            e = !0;
            for (h in c) _.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                return j.call(_(a), c)
            })), b))
            for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    _.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
        key: function(a) {
            if (!h.accepts(a)) return 0;
            var b = {},
                c = a[this.expando];
            if (!c) {
                c = h.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, _.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) f[b] = c;
            else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
            else
                for (d in b) f[d] = b[d];
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a),
                g = this.cache[f];
            if (void 0 === b) this.cache[f] = {};
            else {
                _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(na) || [])), c = d.length;
                for (; c--;) delete g[d[c]]
            }
        },
        hasData: function(a) {
            return !_.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var ra = new h,
        sa = new h,
        ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ua = /([A-Z])/g;
    _.extend({
        hasData: function(a) {
            return sa.hasData(a) || ra.hasData(a)
        },
        data: function(a, b, c) {
            return sa.access(a, b, c)
        },
        removeData: function(a, b) {
            sa.remove(a, b)
        },
        _data: function(a, b, c) {
            return ra.access(a, b, c)
        },
        _removeData: function(a, b) {
            ra.remove(a, b)
        }
    }), _.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
                    ra.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                sa.set(this, a)
            }) : qa(this, function(b) {
                var c, d = _.camelCase(a);
                if (f && void 0 === b) {
                    if (c = sa.get(f, a), void 0 !== c) return c;
                    if (c = sa.get(f, d), void 0 !== c) return c;
                    if (c = i(f, d, void 0), void 0 !== c) return c
                } else this.each(function() {
                    var c = sa.get(this, d);
                    sa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                sa.remove(this, a)
            })
        }
    }), _.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = _.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = _._queueHooks(a, b),
                g = function() {
                    _.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return ra.get(a, c) || ra.access(a, c, {
                empty: _.Callbacks("once memory").add(function() {
                    ra.remove(a, [b + "queue", c])
                })
            })
        }
    }), _.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = _.queue(this, a, b);
                _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                _.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = _.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ra.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        wa = ["Top", "Right", "Bottom", "Left"],
        xa = function(a, b) {
            return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
        },
        ya = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = Z.createDocumentFragment(),
            b = a.appendChild(Z.createElement("div")),
            c = Z.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var za = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var Aa = /^key/,
        Ba = /^(?:mouse|pointer|contextmenu)|click/,
        Ca = /^(?:focusinfocus|focusoutblur)$/,
        Da = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
            if (q)
                for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                        return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(na) || [""], j = b.length; j--;) h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && _.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(na) || [""], j = b.length; j--;)
                    if (h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) _.event.remove(a, n + b[j], c, d, !0);
                _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || Z],
                n = X.call(b, "type") ? b.type : b,
                o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !_.isWindow(d)) {
                    for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                    h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0;
                    (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
            }
        },
        dispatch: function(a) {
            a = _.event.fix(a);
            var b, c, d, e, f, g = [],
                h = R.call(arguments),
                i = (ra.get(this, "events") || {})[a.type] || [],
                j = _.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = _.event.handlers.call(this, a, i), b = 0;
                    (e = g[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = e.elem, c = 0;
                        (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[_.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
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
                    return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return _.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = _.extend(new _.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, _.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, _.Event = function(a, b) {
        return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
    }, _.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        _.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), Y.focusinBubbles || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0)
        };
        _.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = ra.access(d, b);
                e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = ra.access(d, b) - 1;
                e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b))
            }
        }
    }), _.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k;
            else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return _().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
                _.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function() {
                _.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                _.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? _.event.trigger(a, b, c, !0) : void 0
        }
    });
    var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Fa = /<([\w:]+)/,
        Ga = /<|&#?\w+;/,
        Ha = /<(?:script|style|link)/i,
        Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ja = /^$|\/(?:java|ecma)script/i,
        Ka = /^true\/(.*)/,
        La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ma = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ma.optgroup = Ma.option, Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead, Ma.th = Ma.td, _.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = _.contains(a.ownerDocument, a);
            if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
                for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]);
                else q(a, h);
            return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
                if (e = a[m], e || 0 === e)
                    if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e);
                    else if (Ga.test(e)) {
                for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || ["", ""])[1].toLowerCase(), h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                _.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++];)
                if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
                    for (j = 0; e = f[j++];) Ja.test(e.type || "") && c.push(e);
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
                    if (b.events)
                        for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                    ra.cache[e] && delete ra.cache[e]
                }
                delete sa.cache[c[sa.expando]]
            }
        }
    }), _.fn.extend({
        text: function(a) {
            return qa(this, function(a) {
                return void 0 === a ? _.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return _.clone(this, a, b)
            })
        },
        html: function(a) {
            return qa(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Ea, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0,
                j = this.length,
                k = this,
                l = j - 1,
                m = a[0],
                p = _.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m)) return this.each(function(c) {
                var d = k.eq(c);
                p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
            });
            if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
                if (f)
                    for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, "")))
            }
            return this
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        _.fn[a] = function(a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Na, Oa = {},
        Pa = /^margin/,
        Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"),
        Ra = function(b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
        };
    ! function() {
        function b() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
            var b = a.getComputedStyle(g, null);
            c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
        }
        var c, d, e = Z.documentElement,
            f = Z.createElement("div"),
            g = Z.createElement("div");
        g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {
            pixelPosition: function() {
                return b(), c
            },
            boxSizingReliable: function() {
                return null == d && b(), d
            },
            reliableMarginRight: function() {
                var b, c = g.appendChild(Z.createElement("div"));
                return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b
            }
        }))
    }(), _.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Sa = /^(none|table(?!-c[ea]).+)/,
        Ta = new RegExp("^(" + va + ")(.*)$", "i"),
        Ua = new RegExp("^([+-])=(" + va + ")", "i"),
        Va = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Wa = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Xa = ["Webkit", "O", "Moz", "ms"];
    _.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = v(a, "opacity");
                        return "" === c ? "1" : c
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
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = _.camelCase(b),
                    i = a.style;
                return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), void(null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = _.camelCase(b);
            return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wa && (e = Wa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
        }
    }), _.each(["height", "width"], function(a, b) {
        _.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va, function() {
                    return A(a, b, d)
                }) : A(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ra(a);
                return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
        return b ? _.swap(a, {
            display: "inline-block"
        }, v, [a, "marginRight"]) : void 0
    }), _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        _.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Pa.test(a) || (_.cssHooks[a + b].set = y)
    }), _.fn.extend({
        css: function(a, b) {
            return qa(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (_.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return B(this, !0)
        },
        hide: function() {
            return B(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                xa(this) ? _(this).show() : _(this).hide()
            })
        }
    }), _.Tween = C, C.prototype = {
        constructor: C,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = C.propHooks[this.prop];
            return this.options.duration ? this.pos = b = _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
        }
    }, C.prototype.init.prototype = C.prototype, C.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, _.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, _.fx = C.prototype.init, _.fx.step = {};
    var Ya, Za, $a = /^(?:toggle|show|hide)$/,
        _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
        ab = /queueHooks$/,
        bb = [G],
        cb = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = _a.exec(b),
                    f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
                    g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };
    _.Animation = _.extend(I, {
            tweener: function(a, b) {
                _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? bb.unshift(a) : bb.push(a)
            }
        }), _.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? _.extend({}, a) : {
                complete: c || !c && b || _.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !_.isFunction(b) && b
            };
            return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
            }, d
        }, _.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(xa).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = _.isEmptyObject(a),
                    f = _.speed(b, c, d),
                    g = function() {
                        var b = I(this, _.extend({}, a), f);
                        (e || ra.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = _.timers,
                        g = ra.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && _.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = ra.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = _.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, _.queue(this, a, []),
                        e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), _.each(["toggle", "show", "hide"], function(a, b) {
            var c = _.fn[b];
            _.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
            }
        }), _.each({
            slideDown: E("show"),
            slideUp: E("hide"),
            slideToggle: E("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            _.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), _.timers = [], _.fx.tick = function() {
            var a, b = 0,
                c = _.timers;
            for (Ya = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || _.fx.stop(), Ya = void 0
        }, _.fx.timer = function(a) {
            _.timers.push(a), a() ? _.fx.start() : _.timers.pop()
        }, _.fx.interval = 13, _.fx.start = function() {
            Za || (Za = setInterval(_.fx.tick, _.fx.interval))
        }, _.fx.stop = function() {
            clearInterval(Za), Za = null
        }, _.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, _.fn.delay = function(a, b) {
            return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a = Z.createElement("input"),
                b = Z.createElement("select"),
                c = b.appendChild(Z.createElement("option"));
            a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
        }();
    var db, eb, fb = _.expr.attrHandle;
    _.fn.extend({
        attr: function(a, b) {
            return qa(this, _.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                _.removeAttr(this, a)
            })
        }
    }), _.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b)) : void 0
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(na);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), eb = {
        set: function(a, b, c) {
            return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = fb[b] || _.find.attr;
        fb[b] = function(a, b, d) {
            var e, f;
            return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fb[b] = f), e
        }
    });
    var gb = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({
        prop: function(a, b) {
            return qa(this, _.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[_.propFix[a] || a]
            })
        }
    }), _.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), Y.optSelected || (_.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    });
    var hb = /[\t\r\n\f]/g;
    _.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).addClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(na) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")) {
                        for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = _.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).removeClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(na) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function(c) {
                _(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c)
                    for (var b, d = 0, e = _(this), f = a.match(na) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else(c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    var ib = /\r/g;
    _.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = _.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
                    return null == a ? "" : a + ""
                })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)) : void 0
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = _.find.attr(a, "value");
                    return null != b ? b : _.trim(_.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
                            if (b = _(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {
            set: function(a, b) {
                return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
            }
        }, Y.checkOn || (_.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        _.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), _.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var jb = _.now(),
        kb = /\?/;
    _.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, _.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
    };
    var lb = /#.*$/,
        mb = /([?&])_=[^&]*/,
        nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        pb = /^(?:GET|HEAD)$/,
        qb = /^\/\//,
        rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        sb = {},
        tb = {},
        ub = "*/".concat("*"),
        vb = a.location.href,
        wb = rb.exec(vb.toLowerCase()) || [];
    _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vb,
            type: "GET",
            isLocal: ob.test(wb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
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
                "text json": _.parseJSON,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
        },
        ajaxPrefilter: J(sb),
        ajaxTransport: J(tb),
        ajax: function(a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b),
                m = l.context || l,
                n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
                o = _.Deferred(),
                p = _.Callbacks("once memory"),
                q = l.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!g)
                                for (g = {}; b = nb.exec(f);) g[b[1].toLowerCase()] = b[2];
                            b = g[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (l.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return d && d.abort(b), c(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "").replace(lb, "").replace(qb, wb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(na) || [""], null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sb, l, b, v), 2 === t) return v;
            j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !pb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (k in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[k](l[k]);
            if (d = K(tb, l, b, v)) {
                v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1, d.send(r, c)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    c(-1, w)
                }
            } else c(-1, "No Transport");
            return v
        },
        getJSON: function(a, b, c) {
            return _.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return _.get(a, void 0, b, "script")
        }
    }), _.each(["get", "post"], function(a, b) {
        _[b] = function(a, c, d, e) {
            return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), _._evalUrl = function(a) {
        return _.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, _.fn.extend({
        wrapAll: function(a) {
            var b;
            return _.isFunction(a) ? this.each(function(b) {
                _(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return this.each(_.isFunction(a) ? function(b) {
                _(this).wrapInner(a.call(this, b))
            } : function() {
                var b = _(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = _.isFunction(a);
            return this.each(function(c) {
                _(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
            }).end()
        }
    }), _.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, _.expr.filters.visible = function(a) {
        return !_.expr.filters.hidden(a)
    };
    var xb = /%20/g,
        yb = /\[\]$/,
        zb = /\r?\n/g,
        Ab = /^(?:submit|button|image|reset|file)$/i,
        Bb = /^(?:input|select|textarea|keygen)/i;
    _.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) O(c, a[c], b, e);
        return d.join("&").replace(xb, "+")
    }, _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = _.prop(this, "elements");
                return a ? _.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !_(this).is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a))
            }).map(function(a, b) {
                var c = _(this).val();
                return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(zb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(zb, "\r\n")
                }
            }).get()
        }
    }), _.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var Cb = 0,
        Db = {},
        Eb = {
            0: 200,
            1223: 204
        },
        Fb = _.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Db) Db[a]()
    }), Y.cors = !!Fb && "withCredentials" in Fb, Y.ajax = Fb = !!Fb, _.ajaxTransport(function(a) {
        var b;
        return Y.cors || Fb && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(),
                    g = ++Cb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Db[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b) throw h
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }), _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return _.globalEval(a), a
            }
        }
    }), _.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), _.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = _("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), Z.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Gb = [],
        Hb = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Gb.pop() || _.expando + "_" + jb++;
            return this[a] = !0, a
        }
    }), _.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || _.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), _.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || Z;
        var d = ga.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
    };
    var Ib = _.fn.load;
    _.fn.load = function(a, b, c) {
        if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        _.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), _.expr.filters.animated = function(a) {
        return _.grep(_.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Jb = a.document.documentElement;
    _.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = _.css(a, "position"),
                l = _(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, _.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                _.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            return f ? (b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), c = P(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e) : void 0
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - _.css(c, "marginTop", !0),
                    left: b.left - d.left - _.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");) a = a.offsetParent;
                return a || Jb
            })
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        _.fn[b] = function(e) {
            return qa(this, function(b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), _.each(["top", "left"], function(a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
            return c ? (c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c) : void 0
        })
    }), _.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        _.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            _.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return qa(this, function(b, c, d) {
                    var e;
                    return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), _.fn.size = function() {
        return this.length
    }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    });
    var Kb = a.jQuery,
        Lb = a.$;
    return _.noConflict = function(b) {
        return a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _
    }, typeof b === za && (a.jQuery = a.$ = _), _
}),
function(a, b, c) {
    "use strict";

    function d(a) {
        return function() {
            var b, c = arguments[0];
            for (b = "[" + (a ? a + ":" : "") + c + "] http://errors.angularjs.org/1.4.9/" + (a ? a + "/" : "") + c, c = 1; c < arguments.length; c++) {
                b = b + (1 == c ? "?" : "&") + "p" + (c - 1) + "=";
                var d, e = encodeURIComponent;
                d = arguments[c], d = "function" == typeof d ? d.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof d ? "undefined" : "string" != typeof d ? JSON.stringify(d) : d, b += e(d)
            }
            return Error(b)
        }
    }

    function e(a) {
        if (null == a || B(a)) return !1;
        if (dd(a) || w(a) || Pc && a instanceof Pc) return !0;
        var b = "length" in Object(a) && a.length;
        return x(b) && (b >= 0 && (b - 1 in a || a instanceof Array) || "function" == typeof a.item)
    }

    function f(a, b, c) {
        var d, g;
        if (a)
            if (z(a))
                for (d in a) "prototype" == d || "length" == d || "name" == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d, a);
            else if (dd(a) || e(a)) {
            var h = "object" != typeof a;
            for (d = 0, g = a.length; g > d; d++)(h || d in a) && b.call(c, a[d], d, a)
        } else if (a.forEach && a.forEach !== f) a.forEach(b, c, a);
        else if (v(a))
            for (d in a) b.call(c, a[d], d, a);
        else if ("function" == typeof a.hasOwnProperty)
            for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d, a);
        else
            for (d in a) Uc.call(a, d) && b.call(c, a[d], d, a);
        return a
    }

    function g(a, b, c) {
        for (var d = Object.keys(a).sort(), e = 0; e < d.length; e++) b.call(c, a[d[e]], d[e]);
        return d
    }

    function h(a) {
        return function(b, c) {
            a(c, b)
        }
    }

    function i() {
        return ++bd
    }

    function j(a, b, c) {
        for (var d = a.$$hashKey, e = 0, f = b.length; f > e; ++e) {
            var g = b[e];
            if (u(g) || z(g))
                for (var h = Object.keys(g), i = 0, k = h.length; k > i; i++) {
                    var l = h[i],
                        m = g[l];
                    c && u(m) ? y(m) ? a[l] = new Date(m.valueOf()) : A(m) ? a[l] = new RegExp(m) : m.nodeName ? a[l] = m.cloneNode(!0) : F(m) ? a[l] = m.clone() : (u(a[l]) || (a[l] = dd(m) ? [] : {}), j(a[l], [m], !0)) : a[l] = m
                }
        }
        return d ? a.$$hashKey = d : delete a.$$hashKey, a
    }

    function k(a) {
        return j(a, Wc.call(arguments, 1), !1)
    }

    function l(a) {
        return j(a, Wc.call(arguments, 1), !0)
    }

    function m(a) {
        return parseInt(a, 10)
    }

    function n(a, b) {
        return k(Object.create(a), b)
    }

    function o() {}

    function p(a) {
        return a
    }

    function q(a) {
        return function() {
            return a
        }
    }

    function r(a) {
        return z(a.toString) && a.toString !== Zc
    }

    function s(a) {
        return "undefined" == typeof a
    }

    function t(a) {
        return "undefined" != typeof a
    }

    function u(a) {
        return null !== a && "object" == typeof a
    }

    function v(a) {
        return null !== a && "object" == typeof a && !$c(a)
    }

    function w(a) {
        return "string" == typeof a
    }

    function x(a) {
        return "number" == typeof a
    }

    function y(a) {
        return "[object Date]" === Zc.call(a)
    }

    function z(a) {
        return "function" == typeof a
    }

    function A(a) {
        return "[object RegExp]" === Zc.call(a)
    }

    function B(a) {
        return a && a.window === a
    }

    function C(a) {
        return a && a.$evalAsync && a.$watch
    }

    function D(a) {
        return "boolean" == typeof a
    }

    function E(a) {
        return a && x(a.length) && ed.test(Zc.call(a))
    }

    function F(a) {
        return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
    }

    function G(a) {
        var b = {};
        a = a.split(",");
        var c;
        for (c = 0; c < a.length; c++) b[a[c]] = !0;
        return b
    }

    function H(a) {
        return Tc(a.nodeName || a[0] && a[0].nodeName)
    }

    function I(a, b) {
        var c = a.indexOf(b);
        return c >= 0 && a.splice(c, 1), c
    }

    function J(a, b) {
        function c(a, b) {
            var c, e = b.$$hashKey;
            if (dd(a)) {
                c = 0;
                for (var f = a.length; f > c; c++) b.push(d(a[c]))
            } else if (v(a))
                for (c in a) b[c] = d(a[c]);
            else if (a && "function" == typeof a.hasOwnProperty)
                for (c in a) a.hasOwnProperty(c) && (b[c] = d(a[c]));
            else
                for (c in a) Uc.call(a, c) && (b[c] = d(a[c]));
            return e ? b.$$hashKey = e : delete b.$$hashKey, b
        }

        function d(a) {
            if (!u(a)) return a;
            var b = e.indexOf(a);
            if (-1 !== b) return g[b];
            if (B(a) || C(a)) throw _c("cpws");
            var d, b = !1;
            return dd(a) ? (d = [], b = !0) : E(a) ? d = new a.constructor(a) : y(a) ? d = new Date(a.getTime()) : A(a) ? (d = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), d.lastIndex = a.lastIndex) : z(a.cloneNode) ? d = a.cloneNode(!0) : (d = Object.create($c(a)), b = !0), e.push(a), g.push(d), b ? c(a, d) : d
        }
        var e = [],
            g = [];
        if (b) {
            if (E(b)) throw _c("cpta");
            if (a === b) throw _c("cpi");
            return dd(b) ? b.length = 0 : f(b, function(a, c) {
                "$$hashKey" !== c && delete b[c]
            }), e.push(a), g.push(b), c(a, b)
        }
        return d(a)
    }

    function K(a, b) {
        if (dd(a)) {
            b = b || [];
            for (var c = 0, d = a.length; d > c; c++) b[c] = a[c]
        } else if (u(a))
            for (c in b = b || {}, a)("$" !== c.charAt(0) || "$" !== c.charAt(1)) && (b[c] = a[c]);
        return b || a
    }

    function L(a, b) {
        if (a === b) return !0;
        if (null === a || null === b) return !1;
        if (a !== a && b !== b) return !0;
        var c, d = typeof a;
        if (d == typeof b && "object" == d) {
            if (!dd(a)) {
                if (y(a)) return y(b) ? L(a.getTime(), b.getTime()) : !1;
                if (A(a)) return A(b) ? a.toString() == b.toString() : !1;
                if (C(a) || C(b) || B(a) || B(b) || dd(b) || y(b) || A(b)) return !1;
                d = ja();
                for (c in a)
                    if ("$" !== c.charAt(0) && !z(a[c])) {
                        if (!L(a[c], b[c])) return !1;
                        d[c] = !0
                    }
                for (c in b)
                    if (!(c in d) && "$" !== c.charAt(0) && t(b[c]) && !z(b[c])) return !1;
                return !0
            }
            if (!dd(b)) return !1;
            if ((d = a.length) == b.length) {
                for (c = 0; d > c; c++)
                    if (!L(a[c], b[c])) return !1;
                return !0
            }
        }
        return !1
    }

    function M(a, b, c) {
        return a.concat(Wc.call(b, c))
    }

    function N(a, b) {
        var c = 2 < arguments.length ? Wc.call(arguments, 2) : [];
        return !z(b) || b instanceof RegExp ? b : c.length ? function() {
            return arguments.length ? b.apply(a, M(c, arguments, 0)) : b.apply(a, c)
        } : function() {
            return arguments.length ? b.apply(a, arguments) : b.call(a)
        }
    }

    function O(a, d) {
        var e = d;
        return "string" == typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? e = c : B(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : C(d) && (e = "$SCOPE"), e
    }

    function P(a, b) {
        return "undefined" == typeof a ? c : (x(b) || (b = b ? 2 : null), JSON.stringify(a, O, b))
    }

    function Q(a) {
        return w(a) ? JSON.parse(a) : a
    }

    function R(a, b) {
        var c = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6e4;
        return isNaN(c) ? b : c
    }

    function S(a, b, c) {
        c = c ? -1 : 1;
        var d = R(b, a.getTimezoneOffset());
        return b = a, a = c * (d - a.getTimezoneOffset()), b = new Date(b.getTime()), b.setMinutes(b.getMinutes() + a), b
    }

    function T(a) {
        a = Pc(a).clone();
        try {
            a.empty()
        } catch (b) {}
        var c = Pc("<div>").append(a).html();
        try {
            return a[0].nodeType === md ? Tc(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + Tc(b)
            })
        } catch (d) {
            return Tc(c)
        }
    }

    function U(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {}
    }

    function V(a) {
        var b = {};
        return f((a || "").split("&"), function(a) {
            var c, d, e;
            a && (d = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (d = a.substring(0, c), e = a.substring(c + 1)), d = U(d), t(d) && (e = t(e) ? U(e) : !0, Uc.call(b, d) ? dd(b[d]) ? b[d].push(e) : b[d] = [b[d], e] : b[d] = e))
        }), b
    }

    function W(a) {
        var b = [];
        return f(a, function(a, c) {
            dd(a) ? f(a, function(a) {
                b.push(Y(c, !0) + (!0 === a ? "" : "=" + Y(a, !0)))
            }) : b.push(Y(c, !0) + (!0 === a ? "" : "=" + Y(a, !0)))
        }), b.length ? b.join("&") : ""
    }

    function X(a) {
        return Y(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function Y(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+")
    }

    function Z(a, b) {
        var c, d, e = jd.length;
        for (d = 0; e > d; ++d)
            if (c = jd[d] + b, w(c = a.getAttribute(c))) return c;
        return null
    }

    function $(a, b) {
        var c, d, e = {};
        f(jd, function(b) {
            b += "app", !c && a.hasAttribute && a.hasAttribute(b) && (c = a, d = a.getAttribute(b))
        }), f(jd, function(b) {
            b += "app";
            var e;
            !c && (e = a.querySelector("[" + b.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(b))
        }), c && (e.strictDi = null !== Z(c, "strict-di"), b(c, d ? [d] : [], e))
    }

    function _(c, d, e) {
        u(e) || (e = {}), e = k({
            strictDi: !1
        }, e);
        var g = function() {
                if (c = Pc(c), c.injector()) {
                    var a = c[0] === b ? "document" : T(c);
                    throw _c("btstrpd", a.replace(/</, "&lt;").replace(/>/, "&gt;"))
                }
                return d = d || [], d.unshift(["$provide", function(a) {
                    a.value("$rootElement", c)
                }]), e.debugInfoEnabled && d.push(["$compileProvider", function(a) {
                    a.debugInfoEnabled(!0)
                }]), d.unshift("ng"), a = Na(d, e.strictDi), a.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, d) {
                    a.$apply(function() {
                        b.data("$injector", d), c(b)(a)
                    })
                }]), a
            },
            h = /^NG_ENABLE_DEBUG_INFO!/,
            i = /^NG_DEFER_BOOTSTRAP!/;
        return a && h.test(a.name) && (e.debugInfoEnabled = !0, a.name = a.name.replace(h, "")), a && !i.test(a.name) ? g() : (a.name = a.name.replace(i, ""), ad.resumeBootstrap = function(a) {
            return f(a, function(a) {
                d.push(a)
            }), g()
        }, void(z(ad.resumeDeferredBootstrap) && ad.resumeDeferredBootstrap()))
    }

    function aa() {
        a.name = "NG_ENABLE_DEBUG_INFO!" + a.name, a.location.reload()
    }

    function ba(a) {
        if (a = ad.element(a).injector(), !a) throw _c("test");
        return a.get("$$testability")
    }

    function ca(a, b) {
        return b = b || "_", a.replace(kd, function(a, c) {
            return (c ? b : "") + a.toLowerCase()
        })
    }

    function da() {
        var b;
        if (!ld) {
            var d = id();
            (Qc = s(d) ? a.jQuery : d ? a[d] : c) && Qc.fn.on ? (Pc = Qc, k(Qc.fn, {
                scope: Ad.scope,
                isolateScope: Ad.isolateScope,
                controller: Ad.controller,
                injector: Ad.injector,
                inheritedData: Ad.inheritedData
            }), b = Qc.cleanData, Qc.cleanData = function(a) {
                var c;
                if (cd) cd = !1;
                else
                    for (var d, e = 0; null != (d = a[e]); e++)(c = Qc._data(d, "events")) && c.$destroy && Qc(d).triggerHandler("$destroy");
                b(a)
            }) : Pc = pa, ad.element = Pc, ld = !0
        }
    }

    function ea(a, b, c) {
        if (!a) throw _c("areq", b || "?", c || "required");
        return a
    }

    function fa(a, b, c) {
        return c && dd(a) && (a = a[a.length - 1]), ea(z(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), a
    }

    function ga(a, b) {
        if ("hasOwnProperty" === a) throw _c("badname", b)
    }

    function ha(a, b, c) {
        if (!b) return a;
        b = b.split(".");
        for (var d, e = a, f = b.length, g = 0; f > g; g++) d = b[g], a && (a = (e = a)[d]);
        return !c && z(a) ? N(e, a) : a
    }

    function ia(a) {
        for (var b, c = a[0], d = a[a.length - 1], e = 1; c !== d && (c = c.nextSibling); e++)(b || a[e] !== c) && (b || (b = Pc(Wc.call(a, 0, e))), b.push(c));
        return b || a
    }

    function ja() {
        return Object.create(null)
    }

    function ka(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c())
        }
        var c = d("$injector"),
            e = d("ng");
        return a = b(a, "angular", Object), a.$$minErr = a.$$minErr || d, b(a, "module", function() {
            var a = {};
            return function(d, f, g) {
                if ("hasOwnProperty" === d) throw e("badname", "module");
                return f && a.hasOwnProperty(d) && (a[d] = null), b(a, d, function() {
                    function a(a, b, c, d) {
                        return d || (d = e),
                            function() {
                                return d[c || "push"]([a, b, arguments]), k
                            }
                    }

                    function b(a, b) {
                        return function(c, f) {
                            return f && z(f) && (f.$$moduleName = d), e.push([a, b, arguments]), k
                        }
                    }
                    if (!f) throw c("nomod", d);
                    var e = [],
                        h = [],
                        i = [],
                        j = a("$injector", "invoke", "push", h),
                        k = {
                            _invokeQueue: e,
                            _configBlocks: h,
                            _runBlocks: i,
                            requires: f,
                            name: d,
                            provider: b("$provide", "provider"),
                            factory: b("$provide", "factory"),
                            service: b("$provide", "service"),
                            value: a("$provide", "value"),
                            constant: a("$provide", "constant", "unshift"),
                            decorator: b("$provide", "decorator"),
                            animation: b("$animateProvider", "register"),
                            filter: b("$filterProvider", "register"),
                            controller: b("$controllerProvider", "register"),
                            directive: b("$compileProvider", "directive"),
                            config: j,
                            run: function(a) {
                                return i.push(a), this
                            }
                        };
                    return g && j(g), k
                })
            }
        })
    }

    function la(b) {
        k(b, {
            bootstrap: _,
            copy: J,
            extend: k,
            merge: l,
            equals: L,
            element: Pc,
            forEach: f,
            injector: Na,
            noop: o,
            bind: N,
            toJson: P,
            fromJson: Q,
            identity: p,
            isUndefined: s,
            isDefined: t,
            isString: w,
            isFunction: z,
            isObject: u,
            isNumber: x,
            isElement: F,
            isArray: dd,
            version: nd,
            isDate: y,
            lowercase: Tc,
            uppercase: Vc,
            callbacks: {
                counter: 0
            },
            getTestability: ba,
            $$minErr: d,
            $$csp: hd,
            reloadWithDebugInfo: aa
        }), (Rc = ka(a))("ng", ["ngLocale"], ["$provide", function(a) {
            a.provider({
                $$sanitizeUri: Xb
            }), a.provider("$compile", Wa).directive({
                a: Ce,
                input: Se,
                textarea: Se,
                form: Ge,
                script: Hf,
                select: Kf,
                style: Mf,
                option: Lf,
                ngBind: Ve,
                ngBindHtml: Xe,
                ngBindTemplate: We,
                ngClass: Ze,
                ngClassEven: _e,
                ngClassOdd: $e,
                ngCloak: af,
                ngController: bf,
                ngForm: He,
                ngHide: Bf,
                ngIf: ef,
                ngInclude: ff,
                ngInit: hf,
                ngNonBindable: uf,
                ngPluralize: yf,
                ngRepeat: zf,
                ngShow: Af,
                ngStyle: Cf,
                ngSwitch: Df,
                ngSwitchWhen: Ef,
                ngSwitchDefault: Ff,
                ngOptions: xf,
                ngTransclude: Gf,
                ngModel: rf,
                ngList: jf,
                ngChange: Ye,
                pattern: Of,
                ngPattern: Of,
                required: Nf,
                ngRequired: Nf,
                minlength: Qf,
                ngMinlength: Qf,
                maxlength: Pf,
                ngMaxlength: Pf,
                ngValue: Ue,
                ngModelOptions: tf
            }).directive({
                ngInclude: gf
            }).directive(De).directive(cf), a.provider({
                $anchorScroll: Oa,
                $animate: Nd,
                $animateCss: Qd,
                $$animateJs: Ld,
                $$animateQueue: Md,
                $$AnimateRunner: Pd,
                $$animateAsyncRun: Od,
                $browser: Ta,
                $cacheFactory: Ua,
                $controller: $a,
                $document: _a,
                $exceptionHandler: ab,
                $filter: jc,
                $$forceReflow: Vd,
                $interpolate: mb,
                $interval: nb,
                $http: ib,
                $httpParamSerializer: cb,
                $httpParamSerializerJQLike: db,
                $httpBackend: kb,
                $xhrFactory: jb,
                $location: zb,
                $log: Ab,
                $parse: Rb,
                $rootScope: Wb,
                $q: Sb,
                $$q: Tb,
                $sce: _b,
                $sceDelegate: $b,
                $sniffer: ac,
                $templateCache: Va,
                $templateRequest: bc,
                $$testability: cc,
                $timeout: dc,
                $window: gc,
                $$rAF: Vb,
                $$jqLite: Ja,
                $$HashMap: Ed,
                $$cookieReader: ic
            })
        }])
    }

    function ma(a) {
        return a.replace(qd, function(a, b, c, d) {
            return d ? c.toUpperCase() : c
        }).replace(rd, "Moz$1")
    }

    function na(a) {
        return a = a.nodeType, 1 === a || !a || 9 === a
    }

    function oa(a, b) {
        var c, d, e = b.createDocumentFragment(),
            g = [];
        if (vd.test(a)) {
            for (c = c || e.appendChild(b.createElement("div")), d = (wd.exec(a) || ["", ""])[1].toLowerCase(), d = yd[d] || yd._default, c.innerHTML = d[1] + a.replace(xd, "<$1></$2>") + d[2], d = d[0]; d--;) c = c.lastChild;
            g = M(g, c.childNodes), c = e.firstChild, c.textContent = ""
        } else g.push(b.createTextNode(a));
        return e.textContent = "", e.innerHTML = "", f(g, function(a) {
            e.appendChild(a)
        }), e
    }

    function pa(a) {
        if (a instanceof pa) return a;
        var c;
        if (w(a) && (a = fd(a), c = !0), !(this instanceof pa)) {
            if (c && "<" != a.charAt(0)) throw td("nosel");
            return new pa(a)
        }
        if (c) {
            c = b;
            var d;
            a = (d = ud.exec(a)) ? [c.createElement(d[1])] : (d = oa(a, c)) ? d.childNodes : []
        }
        za(this, a)
    }

    function qa(a) {
        return a.cloneNode(!0)
    }

    function ra(a, b) {
        if (b || ta(a), a.querySelectorAll)
            for (var c = a.querySelectorAll("*"), d = 0, e = c.length; e > d; d++) ta(c[d])
    }

    function sa(a, b, c, d) {
        if (t(d)) throw td("offargs");
        var e = (d = ua(a)) && d.events,
            g = d && d.handle;
        if (g)
            if (b) {
                var h = function(b) {
                    var d = e[b];
                    t(c) && I(d || [], c), t(c) && d && 0 < d.length || (a.removeEventListener(b, g, !1), delete e[b])
                };
                f(b.split(" "), function(a) {
                    h(a), sd[a] && h(sd[a])
                })
            } else
                for (b in e) "$destroy" !== b && a.removeEventListener(b, g, !1), delete e[b]
    }

    function ta(a, b) {
        var d = a.ng339,
            e = d && od[d];
        e && (b ? delete e.data[b] : (e.handle && (e.events.$destroy && e.handle({}, "$destroy"), sa(a)), delete od[d], a.ng339 = c))
    }

    function ua(a, b) {
        var d = a.ng339,
            d = d && od[d];
        return b && !d && (a.ng339 = d = ++pd, d = od[d] = {
            events: {},
            data: {},
            handle: c
        }), d
    }

    function va(a, b, c) {
        if (na(a)) {
            var d = t(c),
                e = !d && b && !u(b),
                f = !b;
            if (a = (a = ua(a, !e)) && a.data, d) a[b] = c;
            else {
                if (f) return a;
                if (e) return a && a[b];
                k(a, b)
            }
        }
    }

    function wa(a, b) {
        return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1
    }

    function xa(a, b) {
        b && a.setAttribute && f(b.split(" "), function(b) {
            a.setAttribute("class", fd((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + fd(b) + " ", " ")))
        })
    }

    function ya(a, b) {
        if (b && a.setAttribute) {
            var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            f(b.split(" "), function(a) {
                a = fd(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ")
            }), a.setAttribute("class", fd(c))
        }
    }

    function za(a, b) {
        if (b)
            if (b.nodeType) a[a.length++] = b;
            else {
                var c = b.length;
                if ("number" == typeof c && b.window !== b) {
                    if (c)
                        for (var d = 0; c > d; d++) a[a.length++] = b[d]
                } else a[a.length++] = b
            }
    }

    function Aa(a, b) {
        return Ba(a, "$" + (b || "ngController") + "Controller")
    }

    function Ba(a, b, c) {
        for (9 == a.nodeType && (a = a.documentElement), b = dd(b) ? b : [b]; a;) {
            for (var d = 0, e = b.length; e > d; d++)
                if (t(c = Pc.data(a, b[d]))) return c;
            a = a.parentNode || 11 === a.nodeType && a.host
        }
    }

    function Ca(a) {
        for (ra(a, !0); a.firstChild;) a.removeChild(a.firstChild)
    }

    function Da(a, b) {
        b || ra(a);
        var c = a.parentNode;
        c && c.removeChild(a)
    }

    function Ea(b, c) {
        c = c || a, "complete" === c.document.readyState ? c.setTimeout(b) : Pc(c).on("load", b)
    }

    function Fa(a, b) {
        var c = Bd[b.toLowerCase()];
        return c && Cd[H(a)] && c
    }

    function Ga(a, b) {
        var c = function(c, d) {
            c.isDefaultPrevented = function() {
                return c.defaultPrevented
            };
            var e = b[d || c.type],
                f = e ? e.length : 0;
            if (f) {
                if (s(c.immediatePropagationStopped)) {
                    var g = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function() {
                        c.immediatePropagationStopped = !0, c.stopPropagation && c.stopPropagation(), g && g.call(c)
                    }
                }
                c.isImmediatePropagationStopped = function() {
                    return !0 === c.immediatePropagationStopped
                };
                var h = e.specialHandlerWrapper || Ha;
                f > 1 && (e = K(e));
                for (var i = 0; f > i; i++) c.isImmediatePropagationStopped() || h(a, c, e[i])
            }
        };
        return c.elem = a, c
    }

    function Ha(a, b, c) {
        c.call(a, b)
    }

    function Ia(a, b, c) {
        var d = b.relatedTarget;
        d && (d === a || zd.call(a, d)) || c.call(a, b)
    }

    function Ja() {
        this.$get = function() {
            return k(pa, {
                hasClass: function(a, b) {
                    return a.attr && (a = a[0]), wa(a, b)
                },
                addClass: function(a, b) {
                    return a.attr && (a = a[0]), ya(a, b)
                },
                removeClass: function(a, b) {
                    return a.attr && (a = a[0]), xa(a, b)
                }
            })
        }
    }

    function Ka(a, b) {
        var c = a && a.$$hashKey;
        return c ? ("function" == typeof c && (c = a.$$hashKey()), c) : (c = typeof a, c = "function" == c || "object" == c && null !== a ? a.$$hashKey = c + ":" + (b || i)() : c + ":" + a)
    }

    function La(a, b) {
        if (b) {
            var c = 0;
            this.nextUid = function() {
                return ++c
            }
        }
        f(a, this.put, this)
    }

    function Ma(a) {
        return (a = a.toString().replace(Id, "").match(Fd)) ? "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function Na(a, b) {
        function d(a) {
            return function(b, c) {
                return u(b) ? void f(b, h(a)) : a(b, c)
            }
        }

        function e(a, b) {
            if (ga(a, "service"), (z(b) || dd(b)) && (b = p.instantiate(b)), !b.$get) throw Jd("pget", a);
            return o[a + "Provider"] = b
        }

        function g(a, b) {
            return function() {
                var c = t.invoke(b, this);
                if (s(c)) throw Jd("undef", a);
                return c
            }
        }

        function i(a, b, c) {
            return e(a, {
                $get: !1 !== c ? g(a, b) : b
            })
        }

        function j(a) {
            ea(s(a) || dd(a), "modulesToLoad", "not an array");
            var b, c = [];
            return f(a, function(a) {
                function d(a) {
                    var b, c;
                    for (b = 0, c = a.length; c > b; b++) {
                        var d = a[b],
                            e = p.get(d[0]);
                        e[d[1]].apply(e, d[2])
                    }
                }
                if (!n.get(a)) {
                    n.put(a, !0);
                    try {
                        w(a) ? (b = Rc(a), c = c.concat(j(b.requires)).concat(b._runBlocks), d(b._invokeQueue), d(b._configBlocks)) : z(a) ? c.push(p.invoke(a)) : dd(a) ? c.push(p.invoke(a)) : fa(a, "module")
                    } catch (e) {
                        throw dd(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Jd("modulerr", a, e.stack || e.message || e)
                    }
                }
            }), c
        }

        function k(a, c) {
            function d(b, d) {
                if (a.hasOwnProperty(b)) {
                    if (a[b] === l) throw Jd("cdep", b + " <- " + m.join(" <- "));
                    return a[b]
                }
                try {
                    return m.unshift(b), a[b] = l, a[b] = c(b, d)
                } catch (e) {
                    throw a[b] === l && delete a[b], e
                } finally {
                    m.shift()
                }
            }

            function e(a, c, e, f) {
                "string" == typeof e && (f = e, e = null);
                var g, h, i, j = [],
                    k = Na.$$annotate(a, b, f);
                for (h = 0, g = k.length; g > h; h++) {
                    if (i = k[h], "string" != typeof i) throw Jd("itkn", i);
                    j.push(e && e.hasOwnProperty(i) ? e[i] : d(i, f))
                }
                return dd(a) && (a = a[g]), a.apply(c, j)
            }
            return {
                invoke: e,
                instantiate: function(a, b, c) {
                    var d = Object.create((dd(a) ? a[a.length - 1] : a).prototype || null);
                    return a = e(a, d, b, c), u(a) || z(a) ? a : d
                },
                get: d,
                annotate: Na.$$annotate,
                has: function(b) {
                    return o.hasOwnProperty(b + "Provider") || a.hasOwnProperty(b)
                }
            }
        }
        b = !0 === b;
        var l = {},
            m = [],
            n = new La([], !0),
            o = {
                $provide: {
                    provider: d(e),
                    factory: d(i),
                    service: d(function(a, b) {
                        return i(a, ["$injector", function(a) {
                            return a.instantiate(b)
                        }])
                    }),
                    value: d(function(a, b) {
                        return i(a, q(b), !1)
                    }),
                    constant: d(function(a, b) {
                        ga(a, "constant"), o[a] = b, r[a] = b
                    }),
                    decorator: function(a, b) {
                        var c = p.get(a + "Provider"),
                            d = c.$get;
                        c.$get = function() {
                            var a = t.invoke(d, c);
                            return t.invoke(b, null, {
                                $delegate: a
                            })
                        }
                    }
                }
            },
            p = o.$injector = k(o, function(a, b) {
                throw ad.isString(b) && m.push(b), Jd("unpr", m.join(" <- "))
            }),
            r = {},
            t = r.$injector = k(r, function(a, b) {
                var d = p.get(a + "Provider", b);
                return t.invoke(d.$get, d, c, a)
            });
        return f(j(a), function(a) {
            a && t.invoke(a)
        }), t
    }

    function Oa() {
        var a = !0;
        this.disableAutoScrolling = function() {
            a = !1
        }, this.$get = ["$window", "$location", "$rootScope", function(b, c, d) {
            function e(a) {
                var b = null;
                return Array.prototype.some.call(a, function(a) {
                    return "a" === H(a) ? (b = a, !0) : void 0
                }), b
            }

            function f(a) {
                if (a) {
                    a.scrollIntoView();
                    var c;
                    c = g.yOffset, z(c) ? c = c() : F(c) ? (c = c[0], c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : x(c) || (c = 0), c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c))
                } else b.scrollTo(0, 0)
            }

            function g(a) {
                a = w(a) ? a : c.hash();
                var b;
                a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null)
            }
            var h = b.document;
            return a && d.$watch(function() {
                return c.hash()
            }, function(a, b) {
                a === b && "" === a || Ea(function() {
                    d.$evalAsync(g)
                })
            }), g
        }]
    }

    function Pa(a, b) {
        return a || b ? a ? b ? (dd(a) && (a = a.join(" ")), dd(b) && (b = b.join(" ")), a + " " + b) : a : b : ""
    }

    function Qa(a) {
        w(a) && (a = a.split(" "));
        var b = ja();
        return f(a, function(a) {
            a.length && (b[a] = !0)
        }), b
    }

    function Ra(a) {
        return u(a) ? a : {}
    }

    function Sa(a, b, c, d) {
        function e(a) {
            try {
                a.apply(null, Wc.call(arguments, 1))
            } finally {
                if (q--, 0 === q)
                    for (; r.length;) try {
                        r.pop()()
                    } catch (b) {
                        c.error(b)
                    }
            }
        }

        function g() {
            x = null, h(), i()
        }

        function h() {
            a: {
                try {
                    t = l.state;
                    break a
                } catch (a) {}
                t = void 0
            }
            t = s(t) ? null : t,
            L(t, A) && (t = A),
            A = t
        }

        function i() {
            (v !== j.url() || u !== t) && (v = j.url(), u = t, f(y, function(a) {
                a(j.url(), t)
            }))
        }
        var j = this,
            k = a.location,
            l = a.history,
            m = a.setTimeout,
            n = a.clearTimeout,
            p = {};
        j.isMock = !1;
        var q = 0,
            r = [];
        j.$$completeOutstandingRequest = e, j.$$incOutstandingRequestCount = function() {
            q++
        }, j.notifyWhenNoOutstandingRequests = function(a) {
            0 === q ? a() : r.push(a)
        };
        var t, u, v = k.href,
            w = b.find("base"),
            x = null;
        h(), u = t, j.url = function(b, c, e) {
            if (s(e) && (e = null), k !== a.location && (k = a.location), l !== a.history && (l = a.history), b) {
                var f = u === e;
                if (v === b && (!d.history || f)) return j;
                var g = v && sb(v) === sb(b);
                return v = b, u = e, !d.history || g && f ? ((!g || x) && (x = b), c ? k.replace(b) : g ? (c = k, e = b.indexOf("#"), e = -1 === e ? "" : b.substr(e), c.hash = e) : k.href = b, k.href !== b && (x = b)) : (l[c ? "replaceState" : "pushState"](e, "", b), h(), u = t), j
            }
            return x || k.href.replace(/%27/g, "'")
        }, j.state = function() {
            return t
        };
        var y = [],
            z = !1,
            A = null;
        j.onUrlChange = function(b) {
            return z || (d.history && Pc(a).on("popstate", g), Pc(a).on("hashchange", g), z = !0), y.push(b), b
        }, j.$$applicationDestroyed = function() {
            Pc(a).off("hashchange popstate", g)
        }, j.$$checkUrlChange = i, j.baseHref = function() {
            var a = w.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        }, j.defer = function(a, b) {
            var c;
            return q++, c = m(function() {
                delete p[c], e(a)
            }, b || 0), p[c] = !0, c
        }, j.defer.cancel = function(a) {
            return p[a] ? (delete p[a], n(a), e(o), !0) : !1
        }
    }

    function Ta() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function(a, b, c, d) {
            return new Sa(a, d, b, c)
        }]
    }

    function Ua() {
        this.$get = function() {
            function a(a, c) {
                function e(a) {
                    a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null)
                }

                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }
                if (a in b) throw d("$cacheFactory")("iid", a);
                var g = 0,
                    h = k({}, c, {
                        id: a
                    }),
                    i = ja(),
                    j = c && c.capacity || Number.MAX_VALUE,
                    l = ja(),
                    m = null,
                    n = null;
                return b[a] = {
                    put: function(a, b) {
                        if (!s(b)) {
                            if (j < Number.MAX_VALUE) {
                                var c = l[a] || (l[a] = {
                                    key: a
                                });
                                e(c)
                            }
                            return a in i || g++, i[a] = b, g > j && this.remove(n.key), b
                        }
                    },
                    get: function(a) {
                        if (j < Number.MAX_VALUE) {
                            var b = l[a];
                            if (!b) return;
                            e(b)
                        }
                        return i[a]
                    },
                    remove: function(a) {
                        if (j < Number.MAX_VALUE) {
                            var b = l[a];
                            if (!b) return;
                            b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete l[a]
                        }
                        a in i && (delete i[a], g--)
                    },
                    removeAll: function() {
                        i = ja(), g = 0, l = ja(), m = n = null
                    },
                    destroy: function() {
                        l = h = i = null, delete b[a]
                    },
                    info: function() {
                        return k({}, h, {
                            size: g
                        })
                    }
                }
            }
            var b = {};
            return a.info = function() {
                var a = {};
                return f(b, function(b, c) {
                    a[c] = b.info()
                }), a
            }, a.get = function(a) {
                return b[a]
            }, a
        }
    }

    function Va() {
        this.$get = ["$cacheFactory", function(a) {
            return a("templates")
        }]
    }

    function Wa(a, d) {
        function e(a, b, c) {
            var d = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
                e = {};
            return f(a, function(a, f) {
                var g = a.match(d);
                if (!g) throw Rd("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");
                e[f] = {
                    mode: g[1][0],
                    collection: "*" === g[2],
                    optional: "?" === g[3],
                    attrName: g[4] || f
                }
            }), e
        }

        function g(a) {
            var b = a.charAt(0);
            if (!b || b !== Tc(b)) throw Rd("baddir", a);
            if (a !== a.trim()) throw Rd("baddir", a)
        }
        var i = {},
            j = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
            l = /(([\w\-]+)(?:\:([^;]+))?;?)/,
            m = G("ngSrc,ngSrcset,src,srcset"),
            r = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
            v = /^(on[a-z]+|formaction)$/;
        this.directive = function y(b, c) {
            return ga(b, "directive"), w(b) ? (g(b), ea(c, "directiveFactory"), i.hasOwnProperty(b) || (i[b] = [], a.factory(b + "Directive", ["$injector", "$exceptionHandler", function(a, c) {
                var d = [];
                return f(i[b], function(f, g) {
                    try {
                        var h = a.invoke(f);
                        z(h) ? h = {
                            compile: q(h)
                        } : !h.compile && h.link && (h.compile = q(h.link)), h.priority = h.priority || 0, h.index = g, h.name = h.name || b, h.require = h.require || h.controller && h.name, h.restrict = h.restrict || "EA";
                        var i = h,
                            j = h,
                            k = h.name,
                            l = {
                                isolateScope: null,
                                bindToController: null
                            };
                        if (u(j.scope) && (!0 === j.bindToController ? (l.bindToController = e(j.scope, k, !0), l.isolateScope = {}) : l.isolateScope = e(j.scope, k, !1)), u(j.bindToController) && (l.bindToController = e(j.bindToController, k, !0)), u(l.bindToController)) {
                            var m = j.controller,
                                n = j.controllerAs;
                            if (!m) throw Rd("noctrl", k);
                            var o;
                            a: if (n && w(n)) o = n;
                                else {
                                    if (w(m)) {
                                        var p = Ud.exec(m);
                                        if (p) {
                                            o = p[3];
                                            break a
                                        }
                                    }
                                    o = void 0
                                }
                            if (!o) throw Rd("noident", k)
                        }
                        var r = i.$$bindings = l;
                        u(r.isolateScope) && (h.$$isolateBindings = r.isolateScope), h.$$moduleName = f.$$moduleName, d.push(h)
                    } catch (s) {
                        c(s)
                    }
                }), d
            }])), i[b].push(c)) : f(b, h(y)), this
        }, this.aHrefSanitizationWhitelist = function(a) {
            return t(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function(a) {
            return t(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist()
        };
        var x = !0;
        this.debugInfoEnabled = function(a) {
            return t(a) ? (x = a, this) : x
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function(a, d, e, g, h, q, t, y, A, B) {
            function D(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {}
            }

            function E(a, b, c, d, e) {
                a instanceof Pc || (a = Pc(a)), f(a, function(b, c) {
                    b.nodeType == md && b.nodeValue.match(/\S+/) && (a[c] = Pc(b).wrap("<span></span>").parent()[0])
                });
                var g = F(a, b, a, c, d, e);
                E.$$addScopeClass(a);
                var h = null;
                return function(b, c, d) {
                    ea(b, "scope"), e && e.needsNewScope && (b = b.$parent.$new()), d = d || {};
                    var f = d.parentBoundTranscludeFn,
                        i = d.transcludeControllers;
                    if (d = d.futureParentElement, f && f.$$boundTransclude && (f = f.$$boundTransclude), h || (h = (d = d && d[0]) && "foreignobject" !== H(d) && d.toString().match(/SVG/) ? "svg" : "html"), d = "html" !== h ? Pc(X(h, Pc("<div>").append(a).html())) : c ? Ad.clone.call(a) : a, i)
                        for (var j in i) d.data("$" + j + "Controller", i[j].instance);
                    return E.$$addScopeInfo(d, b), c && c(d, b), g && g(b, d, d, f), d
                }
            }

            function F(a, b, d, e, f, g) {
                function h(a, d, e, f) {
                    var g, h, i, j, k, l, o;
                    if (m)
                        for (o = Array(d.length), j = 0; j < n.length; j += 3) g = n[j], o[g] = d[g];
                    else o = d;
                    for (j = 0, k = n.length; k > j;) h = o[n[j++]], d = n[j++], g = n[j++], d ? (d.scope ? (i = a.$new(), E.$$addScopeInfo(Pc(h), i)) : i = a, l = d.transcludeOnThisElement ? G(a, d.transclude, f) : !d.templateOnThisElement && f ? f : !f && b ? G(a, b) : null, d(g, i, h, e, l)) : g && g(a, h.childNodes, c, f)
                }
                for (var i, j, k, l, m, n = [], o = 0; o < a.length; o++) i = new da, j = J(a[o], [], i, 0 === o ? e : c, f), (g = j.length ? N(j, a[o], i, b, d, null, [], [], g) : null) && g.scope && E.$$addScopeClass(i.$$element), i = g && g.terminal || !(k = a[o].childNodes) || !k.length ? null : F(k, g ? (g.transcludeOnThisElement || !g.templateOnThisElement) && g.transclude : b), (g || i) && (n.push(o, g, i), l = !0, m = m || g), g = null;
                return l ? h : null
            }

            function G(a, b, c) {
                return function(d, e, f, g, h) {
                    return d || (d = a.$new(!1, h), d.$$transcluded = !0), b(d, e, {
                        parentBoundTranscludeFn: c,
                        transcludeControllers: f,
                        futureParentElement: g
                    })
                }
            }

            function J(a, b, c, d, e) {
                var f, g = c.$attr;
                switch (a.nodeType) {
                    case 1:
                        P(b, Xa(H(a)), "E", d, e);
                        for (var h, i, k, m = a.attributes, n = 0, o = m && m.length; o > n; n++) {
                            var p = !1,
                                q = !1;
                            h = m[n], f = h.name, i = fd(h.value), h = Xa(f), (k = ia.test(h)) && (f = f.replace(Sd, "").substr(8).replace(/_(.)/g, function(a, b) {
                                return b.toUpperCase()
                            })), (h = h.match(ka)) && Q(h[1]) && (p = f, q = f.substr(0, f.length - 5) + "end", f = f.substr(0, f.length - 6)), h = Xa(f.toLowerCase()), g[h] = f, (k || !c.hasOwnProperty(h)) && (c[h] = i, Fa(a, h) && (c[h] = !0)), Z(a, b, i, h, k), P(b, h, "A", d, e, p, q)
                        }
                        if (a = a.className, u(a) && (a = a.animVal), w(a) && "" !== a)
                            for (; f = l.exec(a);) h = Xa(f[2]), P(b, h, "C", d, e) && (c[h] = fd(f[3])), a = a.substr(f.index + f[0].length);
                        break;
                    case md:
                        if (11 === Oc)
                            for (; a.parentNode && a.nextSibling && a.nextSibling.nodeType === md;) a.nodeValue += a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
                        W(b, a.nodeValue);
                        break;
                    case 8:
                        try {
                            (f = j.exec(a.nodeValue)) && (h = Xa(f[1]), P(b, h, "M", d, e) && (c[h] = fd(f[2])))
                        } catch (r) {}
                }
                return b.sort(U), b
            }

            function K(a, b, c) {
                var d = [],
                    e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a) throw Rd("uterdir", b, c);
                        1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), a = a.nextSibling
                    } while (e > 0)
                } else d.push(a);
                return Pc(d)
            }

            function M(a, b, c) {
                return function(d, e, f, g, h) {
                    return e = K(e[0], b, c), a(d, e, f, g, h)
                }
            }

            function N(a, d, f, g, h, i, j, k, l) {
                function m(a, b, c, d) {
                    a && (c && (a = M(a, c, d)), a.require = s.require, a.directiveName = t, (D === s || s.$$isolateScope) && (a = _(a, {
                        isolateScope: !0
                    })), j.push(a)), b && (c && (b = M(b, c, d)), b.require = s.require, b.directiveName = t, (D === s || s.$$isolateScope) && (b = _(b, {
                        isolateScope: !0
                    })), k.push(b))
                }

                function n(a, b, c, d) {
                    var e;
                    if (w(b)) {
                        var f = b.match(r);
                        b = b.substring(f[0].length);
                        var g = f[1] || f[3],
                            f = "?" === f[2];
                        if ("^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance, e || (d = "$" + b + "Controller", e = g ? c.inheritedData(d) : c.data(d)), !e && !f) throw Rd("ctreq", b, a)
                    } else if (dd(b))
                        for (e = [], g = 0, f = b.length; f > g; g++) e[g] = n(a, b[g], c, d);
                    return e || null
                }

                function o(a, b, c, d, e, f) {
                    var g, h = ja();
                    for (g in d) {
                        var i = d[g],
                            j = {
                                $scope: i === D || i.$$isolateScope ? e : f,
                                $element: a,
                                $attrs: b,
                                $transclude: c
                            },
                            k = i.controller;
                        "@" == k && (k = b[i.name]), j = q(k, j, !0, i.controllerAs), h[i.name] = j, L || a.data("$" + i.name + "Controller", j.instance)
                    }
                    return h
                }

                function p(a, b, e, g, h) {
                    function i(a, b, d) {
                        var e;
                        return C(a) || (d = b, b = a, a = c), L && (e = q), d || (d = L ? s.parent() : s), h(a, b, e, d, y)
                    }
                    var l, m, p, q, r, s, t;
                    d === e ? (g = f, s = f.$$element) : (s = Pc(e), g = new da(s, f)), p = b, D ? m = b.$new(!0) : A && (p = b.$parent), h && (r = i, r.$$boundTransclude = h), B && (q = o(s, g, r, B, m, b)), D && (E.$$addScopeInfo(s, m, !0, !(F && (F === D || F === D.$$originalDirective))), E.$$addScopeClass(s, !0), m.$$isolateBindings = D.$$isolateBindings, (t = ba(b, g, m, m.$$isolateBindings, D)) && m.$on("$destroy", t));
                    for (var u in q) {
                        t = B[u];
                        var v = q[u],
                            w = t.$$bindings.bindToController;
                        v.identifier && w && (l = ba(p, g, v.instance, w, t));
                        var x = v();
                        x !== v.instance && (v.instance = x, s.data("$" + t.name + "Controller", x), l && l(), l = ba(p, g, v.instance, w, t))
                    }
                    for (Q = 0, U = j.length; U > Q; Q++) l = j[Q], aa(l, l.isolateScope ? m : b, s, g, l.require && n(l.directiveName, l.require, s, q), r);
                    var y = b;
                    for (D && (D.template || null === D.templateUrl) && (y = m), a && a(y, e.childNodes, c, h), Q = k.length - 1; Q >= 0; Q--) l = k[Q], aa(l, l.isolateScope ? m : b, s, g, l.require && n(l.directiveName, l.require, s, q), r)
                }
                l = l || {};
                for (var s, t, v, x, y = -Number.MAX_VALUE, A = l.newScopeDirective, B = l.controllerDirectives, D = l.newIsolateScopeDirective, F = l.templateDirective, G = l.nonTlbTranscludeDirective, H = !1, I = !1, L = l.hasElementTranscludeDirective, N = f.$$element = Pc(d), P = g, Q = 0, U = a.length; U > Q; Q++) {
                    s = a[Q];
                    var W = s.$$start,
                        Y = s.$$end;
                    if (W && (N = K(d, W, Y)), v = c, y > s.priority) break;
                    if ((v = s.scope) && (s.templateUrl || (u(v) ? (V("new/isolated scope", D || A, s, N), D = s) : V("new/isolated scope", D, s, N)), A = A || s), t = s.name, !s.templateUrl && s.controller && (v = s.controller, B = B || ja(), V("'" + t + "' controller", B[t], s, N), B[t] = s), (v = s.transclude) && (H = !0, s.$$tlb || (V("transclusion", G, s, N), G = s), "element" == v ? (L = !0, y = s.priority, v = N, N = f.$$element = Pc(b.createComment(" " + t + ": " + f[t] + " ")), d = N[0], $(h, Wc.call(v, 0), d), P = E(v, g, y, i && i.name, {
                            nonTlbTranscludeDirective: G
                        })) : (v = Pc(qa(d)).contents(), N.empty(), P = E(v, g, c, c, {
                            needsNewScope: s.$$isolateScope || s.$$newScope
                        }))), s.template)
                        if (I = !0, V("template", F, s, N), F = s, v = z(s.template) ? s.template(N, f) : s.template, v = ha(v), s.replace) {
                            if (i = s, v = vd.test(v) ? Za(X(s.templateNamespace, fd(v))) : [], d = v[0], 1 != v.length || 1 !== d.nodeType) throw Rd("tplrt", t, "");
                            $(h, N, d), v = {
                                $attr: {}
                            };
                            var Z = J(d, [], v),
                                ca = a.splice(Q + 1, a.length - (Q + 1));
                            (D || A) && O(Z, D, A), a = a.concat(Z).concat(ca), R(f, v), U = a.length
                        } else N.html(v);
                    if (s.templateUrl) I = !0, V("template", F, s, N), F = s, s.replace && (i = s), p = S(a.splice(Q, a.length - Q), N, f, h, H && P, j, k, {
                        controllerDirectives: B,
                        newScopeDirective: A !== s && A,
                        newIsolateScopeDirective: D,
                        templateDirective: F,
                        nonTlbTranscludeDirective: G
                    }), U = a.length;
                    else if (s.compile) try {
                        x = s.compile(N, f, P), z(x) ? m(null, x, W, Y) : x && m(x.pre, x.post, W, Y)
                    } catch (ea) {
                        e(ea, T(N))
                    }
                    s.terminal && (p.terminal = !0, y = Math.max(y, s.priority))
                }
                return p.scope = A && !0 === A.scope, p.transcludeOnThisElement = H, p.templateOnThisElement = I, p.transclude = P, l.hasElementTranscludeDirective = L, p
            }

            function O(a, b, c) {
                for (var d = 0, e = a.length; e > d; d++) a[d] = n(a[d], {
                    $$isolateScope: b,
                    $$newScope: c
                })
            }

            function P(b, c, d, f, g, h, j) {
                if (c === g) return null;
                if (g = null, i.hasOwnProperty(c)) {
                    var k;
                    c = a.get(c + "Directive");
                    for (var l = 0, m = c.length; m > l; l++) try {
                        k = c[l], (s(f) || f > k.priority) && -1 != k.restrict.indexOf(d) && (h && (k = n(k, {
                            $$start: h,
                            $$end: j
                        })), b.push(k), g = k)
                    } catch (o) {
                        e(o)
                    }
                }
                return g
            }

            function Q(b) {
                if (i.hasOwnProperty(b))
                    for (var c = a.get(b + "Directive"), d = 0, e = c.length; e > d; d++)
                        if (b = c[d], b.multiElement) return !0;
                return !1
            }

            function R(a, b) {
                var c = b.$attr,
                    d = a.$attr,
                    e = a.$$element;
                f(a, function(d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                }), f(b, function(b, f) {
                    "class" == f ? (D(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                })
            }

            function S(a, b, c, d, e, h, i, j) {
                var k, l, m = [],
                    o = b[0],
                    p = a.shift(),
                    q = n(p, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: p
                    }),
                    r = z(p.templateUrl) ? p.templateUrl(b, c) : p.templateUrl,
                    s = p.templateNamespace;
                return b.empty(), g(r).then(function(g) {
                        var n, t;
                        if (g = ha(g), p.replace) {
                            if (g = vd.test(g) ? Za(X(s, fd(g))) : [], n = g[0], 1 != g.length || 1 !== n.nodeType) throw Rd("tplrt", p.name, r);
                            g = {
                                $attr: {}
                            }, $(d, b, n);
                            var v = J(n, [], g);
                            u(p.scope) && O(v, !0), a = v.concat(a), R(c, g)
                        } else n = o, b.html(g);
                        for (a.unshift(q), k = N(a, n, c, e, b, p, h, i, j), f(d, function(a, c) {
                                a == n && (d[c] = b[0])
                            }), l = F(b[0].childNodes, e); m.length;) {
                            g = m.shift(), t = m.shift();
                            var w = m.shift(),
                                x = m.shift(),
                                v = b[0];
                            if (!g.$$destroyed) {
                                if (t !== o) {
                                    var y = t.className;
                                    j.hasElementTranscludeDirective && p.replace || (v = qa(n)), $(w, Pc(t), v), D(Pc(v), y)
                                }
                                t = k.transcludeOnThisElement ? G(g, k.transclude, x) : x, k(l, g, v, d, t)
                            }
                        }
                        m = null
                    }),
                    function(a, b, c, d, e) {
                        a = e, b.$$destroyed || (m ? m.push(b, c, d, a) : (k.transcludeOnThisElement && (a = G(b, k.transclude, e)), k(l, b, c, d, a)))
                    }
            }

            function U(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
            }

            function V(a, b, c, d) {
                function e(a) {
                    return a ? " (module: " + a + ")" : ""
                }
                if (b) throw Rd("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, T(d))
            }

            function W(a, b) {
                var c = d(b, !0);
                c && a.push({
                    priority: 0,
                    compile: function(a) {
                        a = a.parent();
                        var b = !!a.length;
                        return b && E.$$addBindingClass(a),
                            function(a, d) {
                                var e = d.parent();
                                b || E.$$addBindingClass(e), E.$$addBindingInfo(e, c.expressions), a.$watch(c, function(a) {
                                    d[0].nodeValue = a
                                })
                            }
                    }
                })
            }

            function X(a, c) {
                switch (a = Tc(a || "html")) {
                    case "svg":
                    case "math":
                        var d = b.createElement("div");
                        return d.innerHTML = "<" + a + ">" + c + "</" + a + ">", d.childNodes[0].childNodes;
                    default:
                        return c
                }
            }

            function Y(a, b) {
                if ("srcdoc" == b) return y.HTML;
                var c = H(a);
                return "xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b) ? y.RESOURCE_URL : void 0
            }

            function Z(a, b, c, e, f) {
                var g = Y(a, e);
                f = m[e] || f;
                var h = d(c, !0, g, f);
                if (h) {
                    if ("multiple" === e && "select" === H(a)) throw Rd("selmulti", T(a));
                    b.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(a, b, i) {
                                    if (b = i.$$observers || (i.$$observers = ja()), v.test(e)) throw Rd("nodomevents");
                                    var j = i[e];
                                    j !== c && (h = j && d(j, !0, g, f), c = j), h && (i[e] = h(a), (b[e] || (b[e] = [])).$$inter = !0, (i.$$observers && i.$$observers[e].$$scope || a).$watch(h, function(a, b) {
                                        "class" === e && a != b ? i.$updateClass(a, b) : i.$set(e, a)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function $(a, c, d) {
                var e, f, g = c[0],
                    h = c.length,
                    i = g.parentNode;
                if (a)
                    for (e = 0, f = a.length; f > e; e++)
                        if (a[e] == g) {
                            a[e++] = d, f = e + h - 1;
                            for (var j = a.length; j > e; e++, f++) j > f ? a[e] = a[f] : delete a[e];
                            a.length -= h - 1, a.context === g && (a.context = d);
                            break
                        }
                for (i && i.replaceChild(d, g), a = b.createDocumentFragment(), a.appendChild(g), Pc.hasData(g) && (Pc.data(d, Pc.data(g)), Qc ? (cd = !0, Qc.cleanData([g])) : delete Pc.cache[g[Pc.expando]]), g = 1, h = c.length; h > g; g++) i = c[g], Pc(i).remove(), a.appendChild(i), delete c[g];
                c[0] = d, c.length = 1
            }

            function _(a, b) {
                return k(function() {
                    return a.apply(null, arguments)
                }, a, b)
            }

            function aa(a, b, c, d, f, g) {
                try {
                    a(b, c, d, f, g)
                } catch (h) {
                    e(h, T(c))
                }
            }

            function ba(a, b, c, e, g) {
                var i = [];
                return f(e, function(e, f) {
                    var j, k, l, m, n = e.attrName,
                        p = e.optional;
                    switch (e.mode) {
                        case "@":
                            p || Uc.call(b, n) || (c[f] = b[n] = void 0), b.$observe(n, function(a) {
                                w(a) && (c[f] = a)
                            }), b.$$observers[n].$$scope = a, w(b[n]) && (c[f] = d(b[n])(a));
                            break;
                        case "=":
                            if (!Uc.call(b, n)) {
                                if (p) break;
                                b[n] = void 0
                            }
                            if (p && !b[n]) break;
                            k = h(b[n]), m = k.literal ? L : function(a, b) {
                                return a === b || a !== a && b !== b
                            }, l = k.assign || function() {
                                throw j = c[f] = k(a), Rd("nonassign", b[n], g.name)
                            }, j = c[f] = k(a), p = function(b) {
                                return m(b, c[f]) || (m(b, j) ? l(a, b = c[f]) : c[f] = b), j = b
                            }, p.$stateful = !0, p = e.collection ? a.$watchCollection(b[n], p) : a.$watch(h(b[n], p), null, k.literal), i.push(p);
                            break;
                        case "&":
                            if (k = b.hasOwnProperty(n) ? h(b[n]) : o, k === o && p) break;
                            c[f] = function(b) {
                                return k(a, b)
                            }
                    }
                }), i.length && function() {
                    for (var a = 0, b = i.length; b > a; ++a) i[a]()
                }
            }
            var da = function(a, b) {
                if (b) {
                    var c, d, e, f = Object.keys(b);
                    for (c = 0, d = f.length; d > c; c++) e = f[c], this[e] = b[e]
                } else this.$attr = {};
                this.$$element = a
            };
            da.prototype = {
                $normalize: Xa,
                $addClass: function(a) {
                    a && 0 < a.length && A.addClass(this.$$element, a)
                },
                $removeClass: function(a) {
                    a && 0 < a.length && A.removeClass(this.$$element, a)
                },
                $updateClass: function(a, b) {
                    var c = Ya(a, b);
                    c && c.length && A.addClass(this.$$element, c), (c = Ya(b, a)) && c.length && A.removeClass(this.$$element, c)
                },
                $set: function(a, b, c, d) {
                    var g = Fa(this.$$element[0], a),
                        h = Dd[a],
                        i = a;
                    if (g ? (this.$$element.prop(a, b), d = g) : h && (this[h] = b, i = h), this[a] = b, d ? this.$attr[a] = d : (d = this.$attr[a]) || (this.$attr[a] = d = ca(a, "-")), g = H(this.$$element), "a" === g && "href" === a || "img" === g && "src" === a) this[a] = b = B(b, "src" === a);
                    else if ("img" === g && "srcset" === a) {
                        for (var g = "", h = fd(b), j = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, j = /\s/.test(h) ? j : /(,)/, h = h.split(j), j = Math.floor(h.length / 2), k = 0; j > k; k++) var l = 2 * k,
                            g = g + B(fd(h[l]), !0),
                            g = g + (" " + fd(h[l + 1]));
                        h = fd(h[2 * k]).split(/\s/), g += B(fd(h[0]), !0), 2 === h.length && (g += " " + fd(h[1])), this[a] = b = g
                    }!1 !== c && (null === b || s(b) ? this.$$element.removeAttr(d) : this.$$element.attr(d, b)), (a = this.$$observers) && f(a[i], function(a) {
                        try {
                            a(b)
                        } catch (c) {
                            e(c)
                        }
                    })
                },
                $observe: function(a, b) {
                    var c = this,
                        d = c.$$observers || (c.$$observers = ja()),
                        e = d[a] || (d[a] = []);
                    return e.push(b), t.$evalAsync(function() {
                            e.$$inter || !c.hasOwnProperty(a) || s(c[a]) || b(c[a])
                        }),
                        function() {
                            I(e, b)
                        }
                }
            };
            var fa = d.startSymbol(),
                ga = d.endSymbol(),
                ha = "{{" == fa || "}}" == ga ? p : function(a) {
                    return a.replace(/\{\{/g, fa).replace(/}}/g, ga)
                },
                ia = /^ngAttr[A-Z]/,
                ka = /^(.+)Start$/;
            return E.$$addBindingInfo = x ? function(a, b) {
                var c = a.data("$binding") || [];
                dd(b) ? c = c.concat(b) : c.push(b), a.data("$binding", c)
            } : o, E.$$addBindingClass = x ? function(a) {
                D(a, "ng-binding")
            } : o, E.$$addScopeInfo = x ? function(a, b, c, d) {
                a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b)
            } : o, E.$$addScopeClass = x ? function(a, b) {
                D(a, b ? "ng-isolate-scope" : "ng-scope")
            } : o, E
        }]
    }

    function Xa(a) {
        return ma(a.replace(Sd, ""))
    }

    function Ya(a, b) {
        var c = "",
            d = a.split(/\s+/),
            e = b.split(/\s+/),
            f = 0;
        a: for (; f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++)
                if (g == e[h]) continue a;
            c += (0 < c.length ? " " : "") + g
        }
        return c
    }

    function Za(a) {
        a = Pc(a);
        var b = a.length;
        if (1 >= b) return a;
        for (; b--;) 8 === a[b].nodeType && Xc.call(a, b, 1);
        return a
    }

    function $a() {
        var a = {},
            b = !1;
        this.register = function(b, c) {
            ga(b, "controller"), u(b) ? k(a, b) : a[b] = c
        }, this.allowGlobals = function() {
            b = !0
        }, this.$get = ["$injector", "$window", function(e, f) {
            function g(a, b, c, e) {
                if (!a || !u(a.$scope)) throw d("$controller")("noscp", e, b);
                a.$scope[b] = c
            }
            return function(d, h, i, j) {
                var l, m, n;
                if (i = !0 === i, j && w(j) && (n = j), w(d)) {
                    if (j = d.match(Ud), !j) throw Td("ctrlfmt", d);
                    m = j[1], n = n || j[3], d = a.hasOwnProperty(m) ? a[m] : ha(h.$scope, m, !0) || (b ? ha(f, m, !0) : c), fa(d, m, !0)
                }
                return i ? (i = (dd(d) ? d[d.length - 1] : d).prototype, l = Object.create(i || null), n && g(h, n, l, m || d.name), k(function() {
                    var a = e.invoke(d, l, h, m);
                    return a !== l && (u(a) || z(a)) && (l = a, n && g(h, n, l, m || d.name)), l
                }, {
                    instance: l,
                    identifier: n
                })) : (l = e.instantiate(d, h, m), n && g(h, n, l, m || d.name), l)
            }
        }]
    }

    function _a() {
        this.$get = ["$window", function(a) {
            return Pc(a.document)
        }]
    }

    function ab() {
        this.$get = ["$log", function(a) {
            return function(b, c) {
                a.error.apply(a, arguments)
            }
        }]
    }

    function bb(a) {
        return u(a) ? y(a) ? a.toISOString() : P(a) : a
    }

    function cb() {
        this.$get = function() {
            return function(a) {
                if (!a) return "";
                var b = [];
                return g(a, function(a, c) {
                    null === a || s(a) || (dd(a) ? f(a, function(a, d) {
                        b.push(Y(c) + "=" + Y(bb(a)))
                    }) : b.push(Y(c) + "=" + Y(bb(a))))
                }), b.join("&")
            }
        }
    }

    function db() {
        this.$get = function() {
            return function(a) {
                function b(a, d, e) {
                    null === a || s(a) || (dd(a) ? f(a, function(a, c) {
                        b(a, d + "[" + (u(a) ? c : "") + "]")
                    }) : u(a) && !y(a) ? g(a, function(a, c) {
                        b(a, d + (e ? "" : "[") + c + (e ? "" : "]"))
                    }) : c.push(Y(d) + "=" + Y(bb(a))))
                }
                if (!a) return "";
                var c = [];
                return b(a, "", !0), c.join("&")
            }
        }
    }

    function eb(a, b) {
        if (w(a)) {
            var c = a.replace($d, "").trim();
            if (c) {
                var d = b("Content-Type");
                (d = d && 0 === d.indexOf(Wd)) || (d = (d = c.match(Yd)) && Zd[d[0]].test(c)), d && (a = Q(c))
            }
        }
        return a
    }

    function fb(a) {
        var b, c = ja();
        return w(a) ? f(a.split("\n"), function(a) {
            b = a.indexOf(":");
            var d = Tc(fd(a.substr(0, b)));
            a = fd(a.substr(b + 1)), d && (c[d] = c[d] ? c[d] + ", " + a : a)
        }) : u(a) && f(a, function(a, b) {
            var d = Tc(b),
                e = fd(a);
            d && (c[d] = c[d] ? c[d] + ", " + e : e)
        }), c
    }

    function gb(a) {
        var b;
        return function(c) {
            return b || (b = fb(a)), c ? (c = b[Tc(c)], void 0 === c && (c = null), c) : b
        }
    }

    function hb(a, b, c, d) {
        return z(d) ? d(a, b, c) : (f(d, function(d) {
            a = d(a, b, c)
        }), a)
    }

    function ib() {
        var a = this.defaults = {
                transformResponse: [eb],
                transformRequest: [function(a) {
                    return u(a) && "[object File]" !== Zc.call(a) && "[object Blob]" !== Zc.call(a) && "[object FormData]" !== Zc.call(a) ? P(a) : a
                }],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: K(Xd),
                    put: K(Xd),
                    patch: K(Xd)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                paramSerializer: "$httpParamSerializer"
            },
            b = !1;
        this.useApplyAsync = function(a) {
            return t(a) ? (b = !!a, this) : b
        };
        var e = !0;
        this.useLegacyPromiseExtensions = function(a) {
            return t(a) ? (e = !!a, this) : e
        };
        var g = this.interceptors = [];
        this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function(h, i, j, l, m, n) {
            function o(b) {
                function g(a) {
                    var b = k({}, a);
                    return b.data = hb(a.data, a.headers, a.status, i.transformResponse), a = a.status, a >= 200 && 300 > a ? b : m.reject(b)
                }

                function h(a, b) {
                    var c, d = {};
                    return f(a, function(a, e) {
                        z(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a
                    }), d
                }
                if (!ad.isObject(b)) throw d("$http")("badreq", b);
                if (!w(b.url)) throw d("$http")("badreq", b.url);
                var i = k({
                    method: "get",
                    transformRequest: a.transformRequest,
                    transformResponse: a.transformResponse,
                    paramSerializer: a.paramSerializer
                }, b);
                i.headers = function(b) {
                    var c, d, e, f = a.headers,
                        g = k({}, b.headers),
                        f = k({}, f.common, f[Tc(b.method)]);
                    a: for (c in f) {
                        d = Tc(c);
                        for (e in g)
                            if (Tc(e) === d) continue a;
                        g[c] = f[c]
                    }
                    return h(g, K(b))
                }(b), i.method = Vc(i.method), i.paramSerializer = w(i.paramSerializer) ? n.get(i.paramSerializer) : i.paramSerializer;
                var j = [function(b) {
                        var d = b.headers,
                            e = hb(b.data, gb(d), c, b.transformRequest);
                        return s(e) && f(d, function(a, b) {
                            "content-type" === Tc(b) && delete d[b]
                        }), s(b.withCredentials) && !s(a.withCredentials) && (b.withCredentials = a.withCredentials), p(b, e).then(g, g)
                    }, c],
                    l = m.when(i);
                for (f(v, function(a) {
                        (a.request || a.requestError) && j.unshift(a.request, a.requestError), (a.response || a.responseError) && j.push(a.response, a.responseError)
                    }); j.length;) {
                    b = j.shift();
                    var o = j.shift(),
                        l = l.then(b, o)
                }
                return e ? (l.success = function(a) {
                    return fa(a, "fn"), l.then(function(b) {
                        a(b.data, b.status, b.headers, i)
                    }), l
                }, l.error = function(a) {
                    return fa(a, "fn"), l.then(null, function(b) {
                        a(b.data, b.status, b.headers, i)
                    }), l
                }) : (l.success = ae("success"), l.error = ae("error")), l
            }

            function p(d, e) {
                function f(a, c, d, e) {
                    function f() {
                        g(c, a, d, e)
                    }
                    n && (a >= 200 && 300 > a ? n.put(y, [a, c, fb(d), e]) : n.remove(y)), b ? l.$applyAsync(f) : (f(), l.$$phase || l.$apply())
                }

                function g(a, b, c, e) {
                    b = b >= -1 ? b : 0, (b >= 200 && 300 > b ? v.resolve : v.reject)({
                        data: a,
                        status: b,
                        headers: gb(c),
                        config: d,
                        statusText: e
                    })
                }

                function j(a) {
                    g(a.data, a.status, K(a.headers()), a.statusText)
                }

                function k() {
                    var a = o.pendingRequests.indexOf(d); - 1 !== a && o.pendingRequests.splice(a, 1)
                }
                var n, p, v = m.defer(),
                    w = v.promise,
                    x = d.headers,
                    y = q(d.url, d.paramSerializer(d.params));
                return o.pendingRequests.push(d), w.then(k, k), !d.cache && !a.cache || !1 === d.cache || "GET" !== d.method && "JSONP" !== d.method || (n = u(d.cache) ? d.cache : u(a.cache) ? a.cache : r), n && (p = n.get(y), t(p) ? p && z(p.then) ? p.then(j, j) : dd(p) ? g(p[1], p[0], K(p[2]), p[3]) : g(p, 200, {}, "OK") : n.put(y, w)), s(p) && ((p = fc(d.url) ? i()[d.xsrfCookieName || a.xsrfCookieName] : c) && (x[d.xsrfHeaderName || a.xsrfHeaderName] = p), h(d.method, y, e, f, x, d.timeout, d.withCredentials, d.responseType)), w
            }

            function q(a, b) {
                return 0 < b.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + b), a
            }
            var r = j("$http");
            a.paramSerializer = w(a.paramSerializer) ? n.get(a.paramSerializer) : a.paramSerializer;
            var v = [];
            return f(g, function(a) {
                    v.unshift(w(a) ? n.get(a) : n.invoke(a))
                }), o.pendingRequests = [],
                function(a) {
                    f(arguments, function(a) {
                        o[a] = function(b, c) {
                            return o(k({}, c || {}, {
                                method: a,
                                url: b
                            }))
                        }
                    })
                }("get", "delete", "head", "jsonp"),
                function(a) {
                    f(arguments, function(a) {
                        o[a] = function(b, c, d) {
                            return o(k({}, d || {}, {
                                method: a,
                                url: b,
                                data: c
                            }))
                        }
                    })
                }("post", "put", "patch"), o.defaults = a, o
        }]
    }

    function jb() {
        this.$get = function() {
            return function() {
                return new a.XMLHttpRequest
            }
        }
    }

    function kb() {
        this.$get = ["$browser", "$window", "$document", "$xhrFactory", function(a, b, c, d) {
            return lb(a, d, a.defer, b.angular.callbacks, c[0])
        }]
    }

    function lb(a, b, c, d, e) {
        function g(a, b, c) {
            var f = e.createElement("script"),
                g = null;
            return f.type = "text/javascript", f.src = a, f.async = !0, g = function(a) {
                f.removeEventListener("load", g, !1), f.removeEventListener("error", g, !1), e.body.removeChild(f), f = null;
                var h = -1,
                    i = "unknown";
                a && ("load" !== a.type || d[b].called || (a = {
                    type: "error"
                }), i = a.type, h = "error" === a.type ? 404 : 200), c && c(h, i)
            }, f.addEventListener("load", g, !1), f.addEventListener("error", g, !1), e.body.appendChild(f), g
        }
        return function(e, h, i, j, k, l, m, n) {
            function p() {
                u && u(), v && v.abort()
            }

            function q(b, d, e, f, g) {
                t(x) && c.cancel(x), u = v = null, b(d, e, f, g),
                    a.$$completeOutstandingRequest(o)
            }
            if (a.$$incOutstandingRequestCount(), h = h || a.url(), "jsonp" == Tc(e)) {
                var r = "_" + (d.counter++).toString(36);
                d[r] = function(a) {
                    d[r].data = a, d[r].called = !0
                };
                var u = g(h.replace("JSON_CALLBACK", "angular.callbacks." + r), r, function(a, b) {
                    q(j, a, d[r].data, "", b), d[r] = o
                })
            } else {
                var v = b(e, h);
                if (v.open(e, h, !0), f(k, function(a, b) {
                        t(a) && v.setRequestHeader(b, a)
                    }), v.onload = function() {
                        var a = v.statusText || "",
                            b = "response" in v ? v.response : v.responseText,
                            c = 1223 === v.status ? 204 : v.status;
                        0 === c && (c = b ? 200 : "file" == ec(h).protocol ? 404 : 0), q(j, c, b, v.getAllResponseHeaders(), a)
                    }, e = function() {
                        q(j, -1, null, null, "")
                    }, v.onerror = e, v.onabort = e, m && (v.withCredentials = !0), n) try {
                    v.responseType = n
                } catch (w) {
                    if ("json" !== n) throw w
                }
                v.send(s(i) ? null : i)
            }
            if (l > 0) var x = c(p, l);
            else l && z(l.then) && l.then(p)
        }
    }

    function mb() {
        var a = "{{",
            b = "}}";
        this.startSymbol = function(b) {
            return b ? (a = b, this) : a
        }, this.endSymbol = function(a) {
            return a ? (b = a, this) : b
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(c, d, e) {
            function f(a) {
                return "\\\\\\" + a
            }

            function g(c) {
                return c.replace(l, a).replace(m, b)
            }

            function h(f, h, l, m) {
                function n(a) {
                    try {
                        var b = a;
                        a = l ? e.getTrusted(l, b) : e.valueOf(b);
                        var c;
                        if (m && !t(a)) c = a;
                        else if (null == a) c = "";
                        else {
                            switch (typeof a) {
                                case "string":
                                    break;
                                case "number":
                                    a = "" + a;
                                    break;
                                default:
                                    a = P(a)
                            }
                            c = a
                        }
                        return c
                    } catch (g) {
                        d(be.interr(f, g))
                    }
                }
                m = !!m;
                for (var o, p, q = 0, r = [], u = [], v = f.length, w = [], x = []; v > q;) {
                    if (-1 == (o = f.indexOf(a, q)) || -1 == (p = f.indexOf(b, o + i))) {
                        q !== v && w.push(g(f.substring(q)));
                        break
                    }
                    q !== o && w.push(g(f.substring(q, o))), q = f.substring(o + i, p), r.push(q), u.push(c(q, n)), q = p + j, x.push(w.length), w.push("")
                }
                if (l && 1 < w.length && be.throwNoconcat(f), !h || r.length) {
                    var y = function(a) {
                        for (var b = 0, c = r.length; c > b; b++) {
                            if (m && s(a[b])) return;
                            w[x[b]] = a[b]
                        }
                        return w.join("")
                    };
                    return k(function(a) {
                        var b = 0,
                            c = r.length,
                            e = Array(c);
                        try {
                            for (; c > b; b++) e[b] = u[b](a);
                            return y(e)
                        } catch (g) {
                            d(be.interr(f, g))
                        }
                    }, {
                        exp: f,
                        expressions: r,
                        $$watchDelegate: function(a, b) {
                            var c;
                            return a.$watchGroup(u, function(d, e) {
                                var f = y(d);
                                z(b) && b.call(this, f, d !== e ? c : f, a), c = f
                            })
                        }
                    })
                }
            }
            var i = a.length,
                j = b.length,
                l = new RegExp(a.replace(/./g, f), "g"),
                m = new RegExp(b.replace(/./g, f), "g");
            return h.startSymbol = function() {
                return a
            }, h.endSymbol = function() {
                return b
            }, h
        }]
    }

    function nb() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", function(a, b, c, d) {
            function e(e, g, h, i) {
                var j = 4 < arguments.length,
                    k = j ? Wc.call(arguments, 4) : [],
                    l = b.setInterval,
                    m = b.clearInterval,
                    n = 0,
                    o = t(i) && !i,
                    p = (o ? d : c).defer(),
                    q = p.promise;
                return h = t(h) ? h : 0, q.then(null, null, j ? function() {
                    e.apply(null, k)
                } : e), q.$$intervalId = l(function() {
                    p.notify(n++), h > 0 && n >= h && (p.resolve(n), m(q.$$intervalId), delete f[q.$$intervalId]), o || a.$apply()
                }, g), f[q.$$intervalId] = p, q
            }
            var f = {};
            return e.cancel = function(a) {
                return a && a.$$intervalId in f ? (f[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete f[a.$$intervalId], !0) : !1
            }, e
        }]
    }

    function ob(a) {
        a = a.split("/");
        for (var b = a.length; b--;) a[b] = X(a[b]);
        return a.join("/")
    }

    function pb(a, b) {
        var c = ec(a);
        b.$$protocol = c.protocol, b.$$host = c.hostname, b.$$port = m(c.port) || de[c.protocol] || null
    }

    function qb(a, b) {
        var c = "/" !== a.charAt(0);
        c && (a = "/" + a);
        var d = ec(a);
        b.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname), b.$$search = V(d.search), b.$$hash = decodeURIComponent(d.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
    }

    function rb(a, b) {
        return 0 === b.indexOf(a) ? b.substr(a.length) : void 0
    }

    function sb(a) {
        var b = a.indexOf("#");
        return -1 == b ? a : a.substr(0, b)
    }

    function tb(a) {
        return a.replace(/(#.+)|#$/, "$1")
    }

    function ub(a, b, c) {
        this.$$html5 = !0, c = c || "", pb(a, this), this.$$parse = function(a) {
            var c = rb(b, a);
            if (!w(c)) throw ee("ipthprfx", a, b);
            qb(c, this), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function() {
            var a = W(this.$$search),
                c = this.$$hash ? "#" + X(this.$$hash) : "";
            this.$$url = ob(this.$$path) + (a ? "?" + a : "") + c, this.$$absUrl = b + this.$$url.substr(1)
        }, this.$$parseLinkUrl = function(d, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g;
            return t(f = rb(a, d)) ? (g = f, g = t(f = rb(c, f)) ? b + (rb("/", f) || f) : a + g) : t(f = rb(b, d)) ? g = b + f : b == d + "/" && (g = b), g && this.$$parse(g), !!g
        }
    }

    function vb(a, b, c) {
        pb(a, this), this.$$parse = function(d) {
            var e, f = rb(a, d) || rb(b, d);
            s(f) || "#" !== f.charAt(0) ? this.$$html5 ? e = f : (e = "", s(f) && (a = d, this.replace())) : (e = rb(c, f), s(e) && (e = f)), qb(e, this), d = this.$$path;
            var f = a,
                g = /^\/[A-Z]:(\/.*)/;
            0 === e.indexOf(f) && (e = e.replace(f, "")), g.exec(e) || (d = (e = g.exec(d)) ? e[1] : d), this.$$path = d, this.$$compose()
        }, this.$$compose = function() {
            var b = W(this.$$search),
                d = this.$$hash ? "#" + X(this.$$hash) : "";
            this.$$url = ob(this.$$path) + (b ? "?" + b : "") + d, this.$$absUrl = a + (this.$$url ? c + this.$$url : "")
        }, this.$$parseLinkUrl = function(b, c) {
            return sb(a) == sb(b) ? (this.$$parse(b), !0) : !1
        }
    }

    function wb(a, b, c) {
        this.$$html5 = !0, vb.apply(this, arguments), this.$$parseLinkUrl = function(d, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g;
            return a == sb(d) ? f = d : (g = rb(b, d)) ? f = a + c + g : b === d + "/" && (f = b), f && this.$$parse(f), !!f
        }, this.$$compose = function() {
            var b = W(this.$$search),
                d = this.$$hash ? "#" + X(this.$$hash) : "";
            this.$$url = ob(this.$$path) + (b ? "?" + b : "") + d, this.$$absUrl = a + c + this.$$url
        }
    }

    function xb(a) {
        return function() {
            return this[a]
        }
    }

    function yb(a, b) {
        return function(c) {
            return s(c) ? this[a] : (this[a] = b(c), this.$$compose(), this)
        }
    }

    function zb() {
        var a = "",
            b = {
                enabled: !1,
                requireBase: !0,
                rewriteLinks: !0
            };
        this.hashPrefix = function(b) {
            return t(b) ? (a = b, this) : a
        }, this.html5Mode = function(a) {
            return D(a) ? (b.enabled = a, this) : u(a) ? (D(a.enabled) && (b.enabled = a.enabled), D(a.requireBase) && (b.requireBase = a.requireBase), D(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(c, d, e, f, g) {
            function h(a, b, c) {
                var e = j.url(),
                    f = j.$$state;
                try {
                    d.url(a, b, c), j.$$state = d.state()
                } catch (g) {
                    throw j.url(e), j.$$state = f, g
                }
            }

            function i(a, b) {
                c.$broadcast("$locationChangeSuccess", j.absUrl(), a, j.$$state, b)
            }
            var j, k;
            k = d.baseHref();
            var l, m = d.url();
            if (b.enabled) {
                if (!k && b.requireBase) throw ee("nobase");
                l = m.substring(0, m.indexOf("/", m.indexOf("//") + 2)) + (k || "/"), k = e.history ? ub : wb
            } else l = sb(m), k = vb;
            var n = l.substr(0, sb(l).lastIndexOf("/") + 1);
            j = new k(l, n, "#" + a), j.$$parseLinkUrl(m, m), j.$$state = d.state();
            var o = /^\s*(javascript|mailto):/i;
            f.on("click", function(a) {
                if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
                    for (var e = Pc(a.target);
                        "a" !== H(e[0]);)
                        if (e[0] === f[0] || !(e = e.parent())[0]) return;
                    var h = e.prop("href"),
                        i = e.attr("href") || e.attr("xlink:href");
                    u(h) && "[object SVGAnimatedString]" === h.toString() && (h = ec(h.animVal).href), o.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || !j.$$parseLinkUrl(h, i) || (a.preventDefault(), j.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0))
                }
            }), tb(j.absUrl()) != tb(m) && d.url(j.absUrl(), !0);
            var p = !0;
            return d.onUrlChange(function(a, b) {
                s(rb(n, a)) ? g.location.href = a : (c.$evalAsync(function() {
                    var d, e = j.absUrl(),
                        f = j.$$state;
                    a = tb(a), j.$$parse(a), j.$$state = b, d = c.$broadcast("$locationChangeStart", a, e, b, f).defaultPrevented, j.absUrl() === a && (d ? (j.$$parse(e), j.$$state = f, h(e, !1, f)) : (p = !1, i(e, f)))
                }), c.$$phase || c.$digest())
            }), c.$watch(function() {
                var a = tb(d.url()),
                    b = tb(j.absUrl()),
                    f = d.state(),
                    g = j.$$replace,
                    k = a !== b || j.$$html5 && e.history && f !== j.$$state;
                (p || k) && (p = !1, c.$evalAsync(function() {
                    var b = j.absUrl(),
                        d = c.$broadcast("$locationChangeStart", b, a, j.$$state, f).defaultPrevented;
                    j.absUrl() === b && (d ? (j.$$parse(a), j.$$state = f) : (k && h(b, g, f === j.$$state ? null : j.$$state), i(a, f)))
                })), j.$$replace = !1
            }), j
        }]
    }

    function Ab() {
        var a = !0,
            b = this;
        this.debugEnabled = function(b) {
            return t(b) ? (a = b, this) : a
        }, this.$get = ["$window", function(c) {
            function d(a) {
                return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), a
            }

            function e(a) {
                var b = c.console || {},
                    e = b[a] || b.log || o;
                a = !1;
                try {
                    a = !!e.apply
                } catch (g) {}
                return a ? function() {
                    var a = [];
                    return f(arguments, function(b) {
                        a.push(d(b))
                    }), e.apply(b, a)
                } : function(a, b) {
                    e(a, null == b ? "" : b)
                }
            }
            return {
                log: e("log"),
                info: e("info"),
                warn: e("warn"),
                error: e("error"),
                debug: function() {
                    var c = e("debug");
                    return function() {
                        a && c.apply(b, arguments)
                    }
                }()
            }
        }]
    }

    function Bb(a, b) {
        if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw ge("isecfld", b);
        return a
    }

    function Cb(a, b) {
        if (a += "", !w(a)) throw ge("iseccst", b);
        return a
    }

    function Db(a, b) {
        if (a) {
            if (a.constructor === a) throw ge("isecfn", b);
            if (a.window === a) throw ge("isecwindow", b);
            if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw ge("isecdom", b);
            if (a === Object) throw ge("isecobj", b)
        }
        return a
    }

    function Eb(a, b) {
        if (a) {
            if (a.constructor === a) throw ge("isecfn", b);
            if (a === he || a === ie || a === je) throw ge("isecff", b)
        }
    }

    function Fb(a, b) {
        if (a && (a === 0..constructor || a === (!1).constructor || a === "".constructor || a === {}.constructor || a === [].constructor || a === Function.constructor)) throw ge("isecaf", b)
    }

    function Gb(a, b) {
        return "undefined" != typeof a ? a : b
    }

    function Hb(a, b) {
        return "undefined" == typeof a ? b : "undefined" == typeof b ? a : a + b
    }

    function Ib(a, b) {
        var c, d;
        switch (a.type) {
            case ne.Program:
                c = !0, f(a.body, function(a) {
                    Ib(a.expression, b), c = c && a.expression.constant
                }), a.constant = c;
                break;
            case ne.Literal:
                a.constant = !0, a.toWatch = [];
                break;
            case ne.UnaryExpression:
                Ib(a.argument, b), a.constant = a.argument.constant, a.toWatch = a.argument.toWatch;
                break;
            case ne.BinaryExpression:
                Ib(a.left, b), Ib(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = a.left.toWatch.concat(a.right.toWatch);
                break;
            case ne.LogicalExpression:
                Ib(a.left, b), Ib(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = a.constant ? [] : [a];
                break;
            case ne.ConditionalExpression:
                Ib(a.test, b), Ib(a.alternate, b), Ib(a.consequent, b), a.constant = a.test.constant && a.alternate.constant && a.consequent.constant, a.toWatch = a.constant ? [] : [a];
                break;
            case ne.Identifier:
                a.constant = !1, a.toWatch = [a];
                break;
            case ne.MemberExpression:
                Ib(a.object, b), a.computed && Ib(a.property, b), a.constant = a.object.constant && (!a.computed || a.property.constant), a.toWatch = [a];
                break;
            case ne.CallExpression:
                c = a.filter ? !b(a.callee.name).$stateful : !1, d = [], f(a.arguments, function(a) {
                    Ib(a, b), c = c && a.constant, a.constant || d.push.apply(d, a.toWatch)
                }), a.constant = c, a.toWatch = a.filter && !b(a.callee.name).$stateful ? d : [a];
                break;
            case ne.AssignmentExpression:
                Ib(a.left, b), Ib(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = [a];
                break;
            case ne.ArrayExpression:
                c = !0, d = [], f(a.elements, function(a) {
                    Ib(a, b), c = c && a.constant, a.constant || d.push.apply(d, a.toWatch)
                }), a.constant = c, a.toWatch = d;
                break;
            case ne.ObjectExpression:
                c = !0, d = [], f(a.properties, function(a) {
                    Ib(a.value, b), c = c && a.value.constant, a.value.constant || d.push.apply(d, a.value.toWatch)
                }), a.constant = c, a.toWatch = d;
                break;
            case ne.ThisExpression:
                a.constant = !1, a.toWatch = []
        }
    }

    function Jb(a) {
        if (1 == a.length) {
            a = a[0].expression;
            var b = a.toWatch;
            return 1 !== b.length ? b : b[0] !== a ? b : c
        }
    }

    function Kb(a) {
        return a.type === ne.Identifier || a.type === ne.MemberExpression
    }

    function Lb(a) {
        return 1 === a.body.length && Kb(a.body[0].expression) ? {
            type: ne.AssignmentExpression,
            left: a.body[0].expression,
            right: {
                type: ne.NGValueParameter
            },
            operator: "="
        } : void 0
    }

    function Mb(a) {
        return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === ne.Literal || a.body[0].expression.type === ne.ArrayExpression || a.body[0].expression.type === ne.ObjectExpression)
    }

    function Nb(a, b) {
        this.astBuilder = a, this.$filter = b
    }

    function Ob(a, b) {
        this.astBuilder = a, this.$filter = b
    }

    function Pb(a) {
        return "constructor" == a
    }

    function Qb(a) {
        return z(a.valueOf) ? a.valueOf() : pe.call(a)
    }

    function Rb() {
        var a = ja(),
            b = ja();
        this.$get = ["$filter", function(d) {
            function e(a, b) {
                return null == a || null == b ? a === b : "object" == typeof a && (a = Qb(a), "object" == typeof a) ? !1 : a === b || a !== a && b !== b
            }

            function g(a, b, d, f, g) {
                var h, i = f.inputs;
                if (1 === i.length) {
                    var j = e,
                        i = i[0];
                    return a.$watch(function(a) {
                        var b = i(a);
                        return e(b, j) || (h = f(a, c, c, [b]), j = b && Qb(b)), h
                    }, b, d, g)
                }
                for (var k = [], l = [], m = 0, n = i.length; n > m; m++) k[m] = e, l[m] = null;
                return a.$watch(function(a) {
                    for (var b = !1, d = 0, g = i.length; g > d; d++) {
                        var j = i[d](a);
                        (b || (b = !e(j, k[d]))) && (l[d] = j, k[d] = j && Qb(j))
                    }
                    return b && (h = f(a, c, c, l)), h
                }, b, d, g)
            }

            function h(a, b, c, d) {
                var e, f;
                return e = a.$watch(function(a) {
                    return d(a)
                }, function(a, c, d) {
                    f = a, z(b) && b.apply(this, arguments), t(a) && d.$$postDigest(function() {
                        t(f) && e()
                    })
                }, c)
            }

            function i(a, b, c, d) {
                function e(a) {
                    var b = !0;
                    return f(a, function(a) {
                        t(a) || (b = !1)
                    }), b
                }
                var g, h;
                return g = a.$watch(function(a) {
                    return d(a)
                }, function(a, c, d) {
                    h = a, z(b) && b.call(this, a, c, d), e(a) && d.$$postDigest(function() {
                        e(h) && g()
                    })
                }, c)
            }

            function j(a, b, c, d) {
                var e;
                return e = a.$watch(function(a) {
                    return d(a)
                }, function(a, c, d) {
                    z(b) && b.apply(this, arguments), e()
                }, c)
            }

            function k(a, b) {
                if (!b) return a;
                var c = a.$$watchDelegate,
                    d = !1,
                    c = c !== i && c !== h ? function(c, e, f, g) {
                        return f = d && g ? g[0] : a(c, e, f, g), b(f, c, e)
                    } : function(c, d, e, f) {
                        return e = a(c, d, e, f), c = b(e, c, d), t(e) ? c : e
                    };
                return a.$$watchDelegate && a.$$watchDelegate !== g ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = g, d = !a.inputs, c.inputs = a.inputs ? a.inputs : [a]), c
            }
            var l = hd().noUnsafeEval,
                m = {
                    csp: l,
                    expensiveChecks: !1
                },
                n = {
                    csp: l,
                    expensiveChecks: !0
                };
            return function(c, e, f) {
                var l, p, q;
                switch (typeof c) {
                    case "string":
                        q = c = c.trim();
                        var r = f ? b : a;
                        return l = r[q], l || (":" === c.charAt(0) && ":" === c.charAt(1) && (p = !0, c = c.substring(2)), f = f ? n : m, l = new me(f), l = new oe(l, d, f).parse(c), l.constant ? l.$$watchDelegate = j : p ? l.$$watchDelegate = l.literal ? i : h : l.inputs && (l.$$watchDelegate = g), r[q] = l), k(l, e);
                    case "function":
                        return k(c, e);
                    default:
                        return k(o, e)
                }
            }
        }]
    }

    function Sb() {
        this.$get = ["$rootScope", "$exceptionHandler", function(a, b) {
            return Ub(function(b) {
                a.$evalAsync(b)
            }, b)
        }]
    }

    function Tb() {
        this.$get = ["$browser", "$exceptionHandler", function(a, b) {
            return Ub(function(b) {
                a.defer(b)
            }, b)
        }]
    }

    function Ub(a, b) {
        function e(a, b, c) {
            function d(b) {
                return function(c) {
                    e || (e = !0, b.call(a, c))
                }
            }
            var e = !1;
            return [d(b), d(c)]
        }

        function g() {
            this.$$state = {
                status: 0
            }
        }

        function h(a, b) {
            return function(c) {
                b.call(a, c)
            }
        }

        function i(d) {
            !d.processScheduled && d.pending && (d.processScheduled = !0, a(function() {
                var a, e, f;
                f = d.pending, d.processScheduled = !1, d.pending = c;
                for (var g = 0, h = f.length; h > g; ++g) {
                    e = f[g][0], a = f[g][d.status];
                    try {
                        z(a) ? e.resolve(a(d.value)) : 1 === d.status ? e.resolve(d.value) : e.reject(d.value)
                    } catch (i) {
                        e.reject(i), b(i)
                    }
                }
            }))
        }

        function j() {
            this.promise = new g, this.resolve = h(this, this.resolve), this.reject = h(this, this.reject), this.notify = h(this, this.notify)
        }
        var l = d("$q", TypeError);
        k(g.prototype, {
            then: function(a, b, c) {
                if (s(a) && s(b) && s(c)) return this;
                var d = new j;
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([d, a, b, c]), 0 < this.$$state.status && i(this.$$state), d.promise
            },
            "catch": function(a) {
                return this.then(null, a)
            },
            "finally": function(a, b) {
                return this.then(function(b) {
                    return n(b, !0, a)
                }, function(b) {
                    return n(b, !1, a)
                }, b)
            }
        }), k(j.prototype, {
            resolve: function(a) {
                this.promise.$$state.status || (a === this.promise ? this.$$reject(l("qcycle", a)) : this.$$resolve(a))
            },
            $$resolve: function(a) {
                var c, d;
                d = e(this, this.$$resolve, this.$$reject);
                try {
                    (u(a) || z(a)) && (c = a && a.then), z(c) ? (this.promise.$$state.status = -1, c.call(a, d[0], d[1], this.notify)) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, i(this.promise.$$state))
                } catch (f) {
                    d[1](f), b(f)
                }
            },
            reject: function(a) {
                this.promise.$$state.status || this.$$reject(a)
            },
            $$reject: function(a) {
                this.promise.$$state.value = a, this.promise.$$state.status = 2, i(this.promise.$$state)
            },
            notify: function(c) {
                var d = this.promise.$$state.pending;
                0 >= this.promise.$$state.status && d && d.length && a(function() {
                    for (var a, e, f = 0, g = d.length; g > f; f++) {
                        e = d[f][0], a = d[f][3];
                        try {
                            e.notify(z(a) ? a(c) : c)
                        } catch (h) {
                            b(h)
                        }
                    }
                })
            }
        });
        var m = function(a, b) {
                var c = new j;
                return b ? c.resolve(a) : c.reject(a), c.promise
            },
            n = function(a, b, c) {
                var d = null;
                try {
                    z(c) && (d = c())
                } catch (e) {
                    return m(e, !1)
                }
                return d && z(d.then) ? d.then(function() {
                    return m(a, b)
                }, function(a) {
                    return m(a, !1)
                }) : m(a, b)
            },
            o = function(a, b, c, d) {
                var e = new j;
                return e.resolve(a), e.promise.then(b, c, d)
            },
            p = function q(a) {
                if (!z(a)) throw l("norslvr", a);
                if (!(this instanceof q)) return new q(a);
                var b = new j;
                return a(function(a) {
                    b.resolve(a)
                }, function(a) {
                    b.reject(a)
                }), b.promise
            };
        return p.defer = function() {
            return new j
        }, p.reject = function(a) {
            var b = new j;
            return b.reject(a), b.promise
        }, p.when = o, p.resolve = o, p.all = function(a) {
            var b = new j,
                c = 0,
                d = dd(a) ? [] : {};
            return f(a, function(a, e) {
                c++, o(a).then(function(a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                }, function(a) {
                    d.hasOwnProperty(e) || b.reject(a)
                })
            }), 0 === c && b.resolve(d), b.promise
        }, p
    }

    function Vb() {
        this.$get = ["$window", "$timeout", function(a, b) {
            var c = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
                d = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
                e = !!c,
                f = e ? function(a) {
                    var b = c(a);
                    return function() {
                        d(b)
                    }
                } : function(a) {
                    var c = b(a, 16.66, !1);
                    return function() {
                        b.cancel(c)
                    }
                };
            return f.supported = e, f
        }]
    }

    function Wb() {
        function a(a) {
            function b() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = ++bd, this.$$ChildScope = null
            }
            return b.prototype = a, b
        }
        var b = 10,
            c = d("$rootScope"),
            g = null,
            h = null;
        this.digestTtl = function(a) {
            return arguments.length && (b = a), b
        }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(d, i, j, k) {
            function l(a) {
                a.currentScope.$$destroyed = !0
            }

            function m(a) {
                9 === Oc && (a.$$childHead && m(a.$$childHead), a.$$nextSibling && m(a.$$nextSibling)), a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null
            }

            function n() {
                this.$id = ++bd, this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
            }

            function p(a) {
                if (x.$$phase) throw c("inprog", x.$$phase);
                x.$$phase = a
            }

            function q(a, b) {
                do a.$$watchersCount += b; while (a = a.$parent)
            }

            function r(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
            }

            function t() {}

            function v() {
                for (; B.length;) try {
                    B.shift()()
                } catch (a) {
                    i(a)
                }
                h = null
            }

            function w() {
                null === h && (h = k.defer(function() {
                    x.$apply(v)
                }))
            }
            n.prototype = {
                constructor: n,
                $new: function(b, c) {
                    var d;
                    return c = c || this, b ? (d = new n, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope), d.$parent = c, d.$$prevSibling = c.$$childTail, c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d, (b || c != this) && d.$on("$destroy", l), d
                },
                $watch: function(a, b, c, d) {
                    var e = j(a);
                    if (e.$$watchDelegate) return e.$$watchDelegate(this, b, c, e, a);
                    var f = this,
                        h = f.$$watchers,
                        i = {
                            fn: b,
                            last: t,
                            get: e,
                            exp: d || a,
                            eq: !!c
                        };
                    return g = null, z(b) || (i.fn = o), h || (h = f.$$watchers = []), h.unshift(i), q(this, 1),
                        function() {
                            0 <= I(h, i) && q(f, -1), g = null
                        }
                },
                $watchGroup: function(a, b) {
                    function c() {
                        i = !1, j ? (j = !1, b(e, e, h)) : b(e, d, h)
                    }
                    var d = Array(a.length),
                        e = Array(a.length),
                        g = [],
                        h = this,
                        i = !1,
                        j = !0;
                    if (!a.length) {
                        var k = !0;
                        return h.$evalAsync(function() {
                                k && b(e, e, h)
                            }),
                            function() {
                                k = !1
                            }
                    }
                    return 1 === a.length ? this.$watch(a[0], function(a, c, f) {
                        e[0] = a, d[0] = c, b(e, a === c ? e : d, f)
                    }) : (f(a, function(a, b) {
                        var f = h.$watch(a, function(a, f) {
                            e[b] = a, d[b] = f, i || (i = !0, h.$evalAsync(c))
                        });
                        g.push(f)
                    }), function() {
                        for (; g.length;) g.shift()()
                    })
                },
                $watchCollection: function(a, b) {
                    function c(a) {
                        d = a;
                        var b, c, g, h;
                        if (!s(d)) {
                            if (u(d))
                                if (e(d))
                                    for (f !== m && (f = m, p = f.length = 0, k++), a = d.length, p !== a && (k++, f.length = p = a), b = 0; a > b; b++) h = f[b], g = d[b], c = h !== h && g !== g, c || h === g || (k++, f[b] = g);
                                else {
                                    f !== n && (f = n = {}, p = 0, k++), a = 0;
                                    for (b in d) Uc.call(d, b) && (a++, g = d[b], h = f[b], b in f ? (c = h !== h && g !== g, c || h === g || (k++, f[b] = g)) : (p++, f[b] = g, k++));
                                    if (p > a)
                                        for (b in k++, f) Uc.call(d, b) || (p--, delete f[b])
                                }
                            else f !== d && (f = d, k++);
                            return k
                        }
                    }
                    c.$stateful = !0;
                    var d, f, g, h = this,
                        i = 1 < b.length,
                        k = 0,
                        l = j(a, c),
                        m = [],
                        n = {},
                        o = !0,
                        p = 0;
                    return this.$watch(l, function() {
                        if (o ? (o = !1, b(d, d, h)) : b(d, g, h), i)
                            if (u(d))
                                if (e(d)) {
                                    g = Array(d.length);
                                    for (var a = 0; a < d.length; a++) g[a] = d[a]
                                } else
                                    for (a in g = {}, d) Uc.call(d, a) && (g[a] = d[a]);
                        else g = d
                    })
                },
                $digest: function() {
                    var a, d, e, f, j, l, m, n, o, q = b,
                        r = [];
                    p("$digest"), k.$$checkUrlChange(), this === x && null !== h && (k.defer.cancel(h), v()), g = null;
                    do {
                        for (l = !1, m = this; y.length;) {
                            try {
                                o = y.shift(), o.scope.$eval(o.expression, o.locals)
                            } catch (s) {
                                i(s)
                            }
                            g = null
                        }
                        a: do {
                            if (f = m.$$watchers)
                                for (j = f.length; j--;) try {
                                    if (a = f[j])
                                        if ((d = a.get(m)) === (e = a.last) || (a.eq ? L(d, e) : "number" == typeof d && "number" == typeof e && isNaN(d) && isNaN(e))) {
                                            if (a === g) {
                                                l = !1;
                                                break a
                                            }
                                        } else l = !0, g = a, a.last = a.eq ? J(d, null) : d, a.fn(d, e === t ? d : e, m), 5 > q && (n = 4 - q, r[n] || (r[n] = []), r[n].push({
                                            msg: z(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                                            newVal: d,
                                            oldVal: e
                                        }))
                                } catch (u) {
                                    i(u)
                                }
                            if (!(f = m.$$watchersCount && m.$$childHead || m !== this && m.$$nextSibling))
                                for (; m !== this && !(f = m.$$nextSibling);) m = m.$parent
                        } while (m = f);
                        if ((l || y.length) && !q--) throw x.$$phase = null, c("infdig", b, r)
                    } while (l || y.length);
                    for (x.$$phase = null; A.length;) try {
                        A.shift()()
                    } catch (w) {
                        i(w)
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, this === x && k.$$applicationDestroyed(), q(this, -this.$$watchersCount);
                        for (var b in this.$$listenerCount) r(this, this.$$listenerCount[b], b);
                        a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = o, this.$on = this.$watch = this.$watchGroup = function() {
                            return o
                        }, this.$$listeners = {}, this.$$nextSibling = null, m(this)
                    }
                },
                $eval: function(a, b) {
                    return j(a)(this, b)
                },
                $evalAsync: function(a, b) {
                    x.$$phase || y.length || k.defer(function() {
                        y.length && x.$digest()
                    }), y.push({
                        scope: this,
                        expression: a,
                        locals: b
                    })
                },
                $$postDigest: function(a) {
                    A.push(a)
                },
                $apply: function(a) {
                    try {
                        p("$apply");
                        try {
                            return this.$eval(a)
                        } finally {
                            x.$$phase = null
                        }
                    } catch (b) {
                        i(b)
                    } finally {
                        try {
                            x.$digest()
                        } catch (c) {
                            throw i(c), c
                        }
                    }
                },
                $applyAsync: function(a) {
                    function b() {
                        c.$eval(a)
                    }
                    var c = this;
                    a && B.push(b), w()
                },
                $on: function(a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []), c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                    var e = this;
                    return function() {
                        var d = c.indexOf(b); - 1 !== d && (c[d] = null, r(e, 1, a))
                    }
                },
                $emit: function(a, b) {
                    var c, d, e, f = [],
                        g = this,
                        h = !1,
                        j = {
                            name: a,
                            targetScope: g,
                            stopPropagation: function() {
                                h = !0
                            },
                            preventDefault: function() {
                                j.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        k = M([j], arguments, 1);
                    do {
                        for (c = g.$$listeners[a] || f, j.currentScope = g, d = 0, e = c.length; e > d; d++)
                            if (c[d]) try {
                                c[d].apply(null, k)
                            } catch (l) {
                                i(l)
                            } else c.splice(d, 1), d--, e--;
                        if (h) return j.currentScope = null, j;
                        g = g.$parent
                    } while (g);
                    return j.currentScope = null, j
                },
                $broadcast: function(a, b) {
                    var c = this,
                        d = this,
                        e = {
                            name: a,
                            targetScope: this,
                            preventDefault: function() {
                                e.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        };
                    if (!this.$$listenerCount[a]) return e;
                    for (var f, g, h = M([e], arguments, 1); c = d;) {
                        for (e.currentScope = c, d = c.$$listeners[a] || [], f = 0, g = d.length; g > f; f++)
                            if (d[f]) try {
                                d[f].apply(null, h)
                            } catch (j) {
                                i(j)
                            } else d.splice(f, 1), f--, g--;
                        if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))
                            for (; c !== this && !(d = c.$$nextSibling);) c = c.$parent
                    }
                    return e.currentScope = null, e
                }
            };
            var x = new n,
                y = x.$$asyncQueue = [],
                A = x.$$postDigestQueue = [],
                B = x.$$applyAsyncQueue = [];
            return x
        }]
    }

    function Xb() {
        var a = /^\s*(https?|ftp|mailto|tel|file):/,
            b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(b) {
            return t(b) ? (a = b, this) : a
        }, this.imgSrcSanitizationWhitelist = function(a) {
            return t(a) ? (b = a, this) : b
        }, this.$get = function() {
            return function(c, d) {
                var e, f = d ? b : a;
                return e = ec(c).href, "" === e || e.match(f) ? c : "unsafe:" + e
            }
        }
    }

    function Yb(a) {
        if ("self" === a) return a;
        if (w(a)) {
            if (-1 < a.indexOf("***")) throw qe("iwcard", a);
            return a = gd(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + a + "$")
        }
        if (A(a)) return new RegExp("^" + a.source + "$");
        throw qe("imatcher")
    }

    function Zb(a) {
        var b = [];
        return t(a) && f(a, function(a) {
            b.push(Yb(a))
        }), b
    }

    function $b() {
        this.SCE_CONTEXTS = re;
        var a = ["self"],
            b = [];
        this.resourceUrlWhitelist = function(b) {
            return arguments.length && (a = Zb(b)), a
        }, this.resourceUrlBlacklist = function(a) {
            return arguments.length && (b = Zb(a)), b
        }, this.$get = ["$injector", function(c) {
            function d(a, b) {
                return "self" === a ? fc(b) : !!a.exec(b.href)
            }

            function e(a) {
                var b = function(a) {
                    this.$$unwrapTrustedValue = function() {
                        return a
                    }
                };
                return a && (b.prototype = new a), b.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue()
                }, b.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString()
                }, b
            }
            var f = function(a) {
                throw qe("unsafe")
            };
            c.has("$sanitize") && (f = c.get("$sanitize"));
            var g = e(),
                h = {};
            return h[re.HTML] = e(g), h[re.CSS] = e(g), h[re.URL] = e(g), h[re.JS] = e(g), h[re.RESOURCE_URL] = e(h[re.URL]), {
                trustAs: function(a, b) {
                    var c = h.hasOwnProperty(a) ? h[a] : null;
                    if (!c) throw qe("icontext", a, b);
                    if (null === b || s(b) || "" === b) return b;
                    if ("string" != typeof b) throw qe("itype", a);
                    return new c(b)
                },
                getTrusted: function(c, e) {
                    if (null === e || s(e) || "" === e) return e;
                    var g = h.hasOwnProperty(c) ? h[c] : null;
                    if (g && e instanceof g) return e.$$unwrapTrustedValue();
                    if (c === re.RESOURCE_URL) {
                        var i, j, g = ec(e.toString()),
                            k = !1;
                        for (i = 0, j = a.length; j > i; i++)
                            if (d(a[i], g)) {
                                k = !0;
                                break
                            }
                        if (k)
                            for (i = 0, j = b.length; j > i; i++)
                                if (d(b[i], g)) {
                                    k = !1;
                                    break
                                }
                        if (k) return e;
                        throw qe("insecurl", e.toString())
                    }
                    if (c === re.HTML) return f(e);
                    throw qe("unsafe")
                },
                valueOf: function(a) {
                    return a instanceof g ? a.$$unwrapTrustedValue() : a
                }
            }
        }]
    }

    function _b() {
        var a = !0;
        this.enabled = function(b) {
            return arguments.length && (a = !!b), a
        }, this.$get = ["$parse", "$sceDelegate", function(b, c) {
            if (a && 8 > Oc) throw qe("iequirks");
            var d = K(re);
            d.isEnabled = function() {
                return a
            }, d.trustAs = c.trustAs, d.getTrusted = c.getTrusted, d.valueOf = c.valueOf, a || (d.trustAs = d.getTrusted = function(a, b) {
                return b
            }, d.valueOf = p), d.parseAs = function(a, c) {
                var e = b(c);
                return e.literal && e.constant ? e : b(c, function(b) {
                    return d.getTrusted(a, b)
                })
            };
            var e = d.parseAs,
                g = d.getTrusted,
                h = d.trustAs;
            return f(re, function(a, b) {
                var c = Tc(b);
                d[ma("parse_as_" + c)] = function(b) {
                    return e(a, b)
                }, d[ma("get_trusted_" + c)] = function(b) {
                    return g(a, b)
                }, d[ma("trust_as_" + c)] = function(b) {
                    return h(a, b)
                }
            }), d
        }]
    }

    function ac() {
        this.$get = ["$window", "$document", function(a, b) {
            var c, d = {},
                e = m((/android (\d+)/.exec(Tc((a.navigator || {}).userAgent)) || [])[1]),
                f = /Boxee/i.test((a.navigator || {}).userAgent),
                g = b[0] || {},
                h = /^(Moz|webkit|ms)(?=[A-Z])/,
                i = g.body && g.body.style,
                j = !1,
                k = !1;
            if (i) {
                for (var l in i)
                    if (j = h.exec(l)) {
                        c = j[0], c = c.substr(0, 1).toUpperCase() + c.substr(1);
                        break
                    }
                c || (c = "WebkitOpacity" in i && "webkit"), j = !!("transition" in i || c + "Transition" in i), k = !!("animation" in i || c + "Animation" in i), !e || j && k || (j = w(i.webkitTransition), k = w(i.webkitAnimation))
            }
            return {
                history: !(!a.history || !a.history.pushState || 4 > e || f),
                hasEvent: function(a) {
                    if ("input" === a && 11 >= Oc) return !1;
                    if (s(d[a])) {
                        var b = g.createElement("div");
                        d[a] = "on" + a in b
                    }
                    return d[a]
                },
                csp: hd(),
                vendorPrefix: c,
                transitions: j,
                animations: k,
                android: e
            }
        }]
    }

    function bc() {
        this.$get = ["$templateCache", "$http", "$q", "$sce", function(a, b, c, d) {
            function e(f, g) {
                e.totalPendingRequests++, w(f) && a.get(f) || (f = d.getTrustedResourceUrl(f));
                var h = b.defaults && b.defaults.transformResponse;
                return dd(h) ? h = h.filter(function(a) {
                    return a !== eb
                }) : h === eb && (h = null), b.get(f, {
                    cache: a,
                    transformResponse: h
                })["finally"](function() {
                    e.totalPendingRequests--
                }).then(function(b) {
                    return a.put(f, b.data), b.data
                }, function(a) {
                    if (!g) throw Rd("tpload", f, a.status, a.statusText);
                    return c.reject(a)
                })
            }
            return e.totalPendingRequests = 0, e
        }]
    }

    function cc() {
        this.$get = ["$rootScope", "$browser", "$location", function(a, b, c) {
            return {
                findBindings: function(a, b, c) {
                    a = a.getElementsByClassName("ng-binding");
                    var d = [];
                    return f(a, function(a) {
                        var e = ad.element(a).data("$binding");
                        e && f(e, function(e) {
                            c ? new RegExp("(^|\\s)" + gd(b) + "(\\s|\\||$)").test(e) && d.push(a) : -1 != e.indexOf(b) && d.push(a)
                        })
                    }), d
                },
                findModels: function(a, b, c) {
                    for (var d = ["ng-", "data-ng-", "ng\\:"], e = 0; e < d.length; ++e) {
                        var f = a.querySelectorAll("[" + d[e] + "model" + (c ? "=" : "*=") + '"' + b + '"]');
                        if (f.length) return f
                    }
                },
                getLocation: function() {
                    return c.url()
                },
                setLocation: function(b) {
                    b !== c.url() && (c.url(b), a.$digest())
                },
                whenStable: function(a) {
                    b.notifyWhenNoOutstandingRequests(a)
                }
            }
        }]
    }

    function dc() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(a, b, c, d, e) {
            function f(f, h, i) {
                z(f) || (i = h, h = f, f = o);
                var j, k = Wc.call(arguments, 3),
                    l = t(i) && !i,
                    m = (l ? d : c).defer(),
                    n = m.promise;
                return j = b.defer(function() {
                    try {
                        m.resolve(f.apply(null, k))
                    } catch (b) {
                        m.reject(b), e(b)
                    } finally {
                        delete g[n.$$timeoutId]
                    }
                    l || a.$apply()
                }, h), n.$$timeoutId = j, g[j] = m, n
            }
            var g = {};
            return f.cancel = function(a) {
                return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
            }, f
        }]
    }

    function ec(a) {
        return Oc && (se.setAttribute("href", a), a = se.href), se.setAttribute("href", a), {
            href: se.href,
            protocol: se.protocol ? se.protocol.replace(/:$/, "") : "",
            host: se.host,
            search: se.search ? se.search.replace(/^\?/, "") : "",
            hash: se.hash ? se.hash.replace(/^#/, "") : "",
            hostname: se.hostname,
            port: se.port,
            pathname: "/" === se.pathname.charAt(0) ? se.pathname : "/" + se.pathname
        }
    }

    function fc(a) {
        return a = w(a) ? ec(a) : a, a.protocol === te.protocol && a.host === te.host
    }

    function gc() {
        this.$get = q(a)
    }

    function hc(a) {
        function b(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {
                return a
            }
        }
        var c = a[0] || {},
            d = {},
            e = "";
        return function() {
            var a, f, g, h, i;
            if (a = c.cookie || "", a !== e)
                for (e = a, a = e.split("; "), d = {}, g = 0; g < a.length; g++) f = a[g], h = f.indexOf("="), h > 0 && (i = b(f.substring(0, h)), s(d[i]) && (d[i] = b(f.substring(h + 1))));
            return d
        }
    }

    function ic() {
        this.$get = hc
    }

    function jc(a) {
        function b(c, d) {
            if (u(c)) {
                var e = {};
                return f(c, function(a, c) {
                    e[c] = b(c, a)
                }), e
            }
            return a.factory(c + "Filter", d)
        }
        this.register = b, this.$get = ["$injector", function(a) {
            return function(b) {
                return a.get(b + "Filter")
            }
        }], b("currency", oc), b("date", zc), b("filter", kc), b("json", Ac), b("limitTo", Bc), b("lowercase", Ae), b("number", pc), b("orderBy", Cc), b("uppercase", Be)
    }

    function kc() {
        return function(a, b, c) {
            if (!e(a)) {
                if (null == a) return a;
                throw d("filter")("notarray", a)
            }
            var f;
            switch (nc(b)) {
                case "function":
                    break;
                case "boolean":
                case "null":
                case "number":
                case "string":
                    f = !0;
                case "object":
                    b = lc(b, c, f);
                    break;
                default:
                    return a
            }
            return Array.prototype.filter.call(a, b)
        }
    }

    function lc(a, b, c) {
        var d = u(a) && "$" in a;
        return !0 === b ? b = L : z(b) || (b = function(a, b) {
                return s(a) ? !1 : null === a || null === b ? a === b : u(b) || u(a) && !r(a) ? !1 : (a = Tc("" + a), b = Tc("" + b), -1 !== a.indexOf(b))
            }),
            function(e) {
                return d && !u(e) ? mc(e, a.$, b, !1) : mc(e, a, b, c)
            }
    }

    function mc(a, b, c, d, e) {
        var f = nc(a),
            g = nc(b);
        if ("string" === g && "!" === b.charAt(0)) return !mc(a, b.substring(1), c, d);
        if (dd(a)) return a.some(function(a) {
            return mc(a, b, c, d)
        });
        switch (f) {
            case "object":
                var h;
                if (d) {
                    for (h in a)
                        if ("$" !== h.charAt(0) && mc(a[h], b, c, !0)) return !0;
                    return e ? !1 : mc(a, b, c, !1)
                }
                if ("object" === g) {
                    for (h in b)
                        if (e = b[h], !z(e) && !s(e) && (f = "$" === h, !mc(f ? a : a[h], e, c, f, f))) return !1;
                    return !0
                }
                return c(a, b);
            case "function":
                return !1;
            default:
                return c(a, b)
        }
    }

    function nc(a) {
        return null === a ? "null" : typeof a
    }

    function oc(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c, d) {
            return s(c) && (c = b.CURRENCY_SYM), s(d) && (d = b.PATTERNS[1].maxFrac), null == a ? a : sc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, d).replace(/\u00A4/g, c)
        }
    }

    function pc(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c) {
            return null == a ? a : sc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
        }
    }

    function qc(a) {
        var b, c, d, e, f, g = 0;
        for (-1 < (c = a.indexOf(ve)) && (a = a.replace(ve, "")), 0 < (d = a.search(/e/i)) ? (0 > c && (c = d), c += +a.slice(d + 1), a = a.substring(0, d)) : 0 > c && (c = a.length), d = 0; a.charAt(d) == we; d++);
        if (d == (f = a.length)) b = [0], c = 1;
        else {
            for (f--; a.charAt(f) == we;) f--;
            for (c -= d, b = [], e = 0; f >= d; d++, e++) b[e] = +a.charAt(d)
        }
        return c > ue && (b = b.splice(0, ue - 1), g = c - 1, c = 1), {
            d: b,
            e: g,
            i: c
        }
    }

    function rc(a, b, c, d) {
        var e = a.d,
            f = e.length - a.i;
        if (b = s(b) ? Math.min(Math.max(c, f), d) : +b, c = b + a.i, d = e[c], c > 0) e.splice(c);
        else {
            a.i = 1, e.length = c = b + 1;
            for (var g = 0; c > g; g++) e[g] = 0
        }
        for (d >= 5 && e[c - 1]++; b > f; f++) e.push(0);
        (b = e.reduceRight(function(a, b, c, d) {
            return b += a, d[c] = b % 10, Math.floor(b / 10)
        }, 0)) && (e.unshift(b), a.i++)
    }

    function sc(a, b, c, d, e) {
        if (!w(a) && !x(a) || isNaN(a)) return "";
        var f = !isFinite(a),
            g = !1,
            h = Math.abs(a) + "",
            i = "";
        if (f) i = "∞";
        else {
            for (g = qc(h), rc(g, e, b.minFrac, b.maxFrac), i = g.d, h = g.i, e = g.e, f = [], g = i.reduce(function(a, b) {
                    return a && !b
                }, !0); 0 > h;) i.unshift(0), h++;
            for (h > 0 ? f = i.splice(h) : (f = i, i = [0]), h = [], i.length > b.lgSize && h.unshift(i.splice(-b.lgSize).join("")); i.length > b.gSize;) h.unshift(i.splice(-b.gSize).join(""));
            i.length && h.unshift(i.join("")), i = h.join(c), f.length && (i += d + f.join("")), e && (i += "e+" + e)
        }
        return 0 > a && !g ? b.negPre + i + b.negSuf : b.posPre + i + b.posSuf
    }

    function tc(a, b, c) {
        var d = "";
        for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b;) a = we + a;
        return c && (a = a.substr(a.length - b)),
            d + a
    }

    function uc(a, b, c, d) {
        return c = c || 0,
            function(e) {
                return e = e["get" + a](), (c > 0 || e > -c) && (e += c), 0 === e && -12 == c && (e = 12), tc(e, b, d)
            }
    }

    function vc(a, b) {
        return function(c, d) {
            var e = c["get" + a](),
                f = Vc(b ? "SHORT" + a : a);
            return d[f][e]
        }
    }

    function wc(a) {
        var b = new Date(a, 0, 1).getDay();
        return new Date(a, 0, (4 >= b ? 5 : 12) - b)
    }

    function xc(a) {
        return function(b) {
            var c = wc(b.getFullYear());
            return b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +c, b = 1 + Math.round(b / 6048e5), tc(b, a)
        }
    }

    function yc(a, b) {
        return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1]
    }

    function zc(a) {
        function b(a) {
            var b;
            if (b = a.match(c)) {
                a = new Date(0);
                var d = 0,
                    e = 0,
                    f = b[8] ? a.setUTCFullYear : a.setFullYear,
                    g = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (d = m(b[9] + b[10]), e = m(b[9] + b[11])), f.call(a, m(b[1]), m(b[2]) - 1, m(b[3])), d = m(b[4] || 0) - d, e = m(b[5] || 0) - e, f = m(b[6] || 0), b = Math.round(1e3 * parseFloat("0." + (b[7] || 0))), g.call(a, d, e, f, b)
            }
            return a
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, d, e) {
            var g, h, i = "",
                j = [];
            if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, w(c) && (c = ze.test(c) ? m(c) : b(c)), x(c) && (c = new Date(c)), !y(c) || !isFinite(c.getTime())) return c;
            for (; d;)(h = ye.exec(d)) ? (j = M(j, h, 1), d = j.pop()) : (j.push(d), d = null);
            var k = c.getTimezoneOffset();
            return e && (k = R(e, c.getTimezoneOffset()), c = S(c, e, !0)), f(j, function(b) {
                g = xe[b], i += g ? g(c, a.DATETIME_FORMATS, k) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), i
        }
    }

    function Ac() {
        return function(a, b) {
            return s(b) && (b = 2), P(a, b)
        }
    }

    function Bc() {
        return function(a, b, c) {
            return b = 1 / 0 === Math.abs(Number(b)) ? Number(b) : m(b), isNaN(b) ? a : (x(a) && (a = a.toString()), dd(a) || w(a) ? (c = !c || isNaN(c) ? 0 : m(c), c = 0 > c ? Math.max(0, a.length + c) : c, b >= 0 ? a.slice(c, c + b) : 0 === c ? a.slice(b, a.length) : a.slice(Math.max(0, c + b), c)) : a)
        }
    }

    function Cc(a) {
        function b(b, c) {
            return c = c ? -1 : 1, b.map(function(b) {
                var d = 1,
                    e = p;
                if (z(b)) e = b;
                else if (w(b) && (("+" == b.charAt(0) || "-" == b.charAt(0)) && (d = "-" == b.charAt(0) ? -1 : 1, b = b.substring(1)), "" !== b && (e = a(b), e.constant))) var f = e(),
                    e = function(a) {
                        return a[f]
                    };
                return {
                    get: e,
                    descending: d * c
                }
            })
        }

        function c(a) {
            switch (typeof a) {
                case "number":
                case "boolean":
                case "string":
                    return !0;
                default:
                    return !1
            }
        }
        return function(a, d, f) {
            if (!e(a)) return a;
            dd(d) || (d = [d]), 0 === d.length && (d = ["+"]);
            var g = b(d, f);
            return g.push({
                get: function() {
                    return {}
                },
                descending: f ? -1 : 1
            }), a = Array.prototype.map.call(a, function(a, b) {
                return {
                    value: a,
                    predicateValues: g.map(function(d) {
                        var e = d.get(a);
                        return d = typeof e, null === e ? (d = "string", e = "null") : "string" === d ? e = e.toLowerCase() : "object" === d && ("function" == typeof e.valueOf && (e = e.valueOf(), c(e)) || r(e) && (e = e.toString(), c(e)) || (e = b)), {
                            value: e,
                            type: d
                        }
                    })
                }
            }), a.sort(function(a, b) {
                for (var c = 0, d = 0, e = g.length; e > d; ++d) {
                    var c = a.predicateValues[d],
                        f = b.predicateValues[d],
                        h = 0;
                    if (c.type === f.type ? c.value !== f.value && (h = c.value < f.value ? -1 : 1) : h = c.type < f.type ? -1 : 1, c = h * g[d].descending) break
                }
                return c
            }), a = a.map(function(a) {
                return a.value
            })
        }
    }

    function Dc(a) {
        return z(a) && (a = {
            link: a
        }), a.restrict = a.restrict || "AC", q(a)
    }

    function Ec(a, b, d, e, g) {
        var h = this,
            i = [];
        h.$error = {}, h.$$success = {}, h.$pending = c, h.$name = g(b.name || b.ngForm || "")(d), h.$dirty = !1, h.$pristine = !0, h.$valid = !0, h.$invalid = !1, h.$submitted = !1, h.$$parentForm = Ee, h.$rollbackViewValue = function() {
            f(i, function(a) {
                a.$rollbackViewValue()
            })
        }, h.$commitViewValue = function() {
            f(i, function(a) {
                a.$commitViewValue()
            })
        }, h.$addControl = function(a) {
            ga(a.$name, "input"), i.push(a), a.$name && (h[a.$name] = a), a.$$parentForm = h
        }, h.$$renameControl = function(a, b) {
            var c = a.$name;
            h[c] === a && delete h[c], h[b] = a, a.$name = b
        }, h.$removeControl = function(a) {
            a.$name && h[a.$name] === a && delete h[a.$name], f(h.$pending, function(b, c) {
                h.$setValidity(c, null, a)
            }), f(h.$error, function(b, c) {
                h.$setValidity(c, null, a)
            }), f(h.$$success, function(b, c) {
                h.$setValidity(c, null, a)
            }), I(i, a), a.$$parentForm = Ee
        }, Mc({
            ctrl: this,
            $element: a,
            set: function(a, b, c) {
                var d = a[b];
                d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c]
            },
            unset: function(a, b, c) {
                var d = a[b];
                d && (I(d, c), 0 === d.length && delete a[b])
            },
            $animate: e
        }), h.$setDirty = function() {
            e.removeClass(a, mf), e.addClass(a, nf), h.$dirty = !0, h.$pristine = !1, h.$$parentForm.$setDirty()
        }, h.$setPristine = function() {
            e.setClass(a, mf, nf + " ng-submitted"), h.$dirty = !1, h.$pristine = !0, h.$submitted = !1, f(i, function(a) {
                a.$setPristine()
            })
        }, h.$setUntouched = function() {
            f(i, function(a) {
                a.$setUntouched()
            })
        }, h.$setSubmitted = function() {
            e.addClass(a, "ng-submitted"), h.$submitted = !0, h.$$parentForm.$setSubmitted()
        }
    }

    function Fc(a) {
        a.$formatters.push(function(b) {
            return a.$isEmpty(b) ? b : b.toString()
        })
    }

    function Gc(a, b, c, d, e, f) {
        var g = Tc(b[0].type);
        if (!e.android) {
            var h = !1;
            b.on("compositionstart", function(a) {
                h = !0
            }), b.on("compositionend", function() {
                h = !1, i()
            })
        }
        var i = function(a) {
            if (j && (f.defer.cancel(j), j = null), !h) {
                var e = b.val();
                a = a && a.type, "password" === g || c.ngTrim && "false" === c.ngTrim || (e = fd(e)), (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, a)
            }
        };
        if (e.hasEvent("input")) b.on("input", i);
        else {
            var j, k = function(a, b, c) {
                j || (j = f.defer(function() {
                    j = null, b && b.value === c || i(a)
                }))
            };
            b.on("keydown", function(a) {
                var b = a.keyCode;
                91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || k(a, this, this.value)
            }), e.hasEvent("paste") && b.on("paste cut", k)
        }
        b.on("change", i), d.$render = function() {
            var a = d.$isEmpty(d.$viewValue) ? "" : d.$viewValue;
            b.val() !== a && b.val(a)
        }
    }

    function Hc(a, b) {
        return function(c, d) {
            var e, g;
            if (y(c)) return c;
            if (w(c)) {
                if ('"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1)), Ie.test(c)) return new Date(c);
                if (a.lastIndex = 0, e = a.exec(c)) return e.shift(), g = d ? {
                    yyyy: d.getFullYear(),
                    MM: d.getMonth() + 1,
                    dd: d.getDate(),
                    HH: d.getHours(),
                    mm: d.getMinutes(),
                    ss: d.getSeconds(),
                    sss: d.getMilliseconds() / 1e3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, f(e, function(a, c) {
                    c < b.length && (g[b[c]] = +a)
                }), new Date(g.yyyy, g.MM - 1, g.dd, g.HH, g.mm, g.ss || 0, 1e3 * g.sss || 0)
            }
            return NaN
        }
    }

    function Ic(a, b, d, e) {
        return function(f, g, h, i, j, k, l) {
            function m(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime())
            }

            function n(a) {
                return t(a) && !y(a) ? d(a) || c : a
            }
            Jc(f, g, h, i), Gc(f, g, h, i, j, k);
            var o, p = i && i.$options && i.$options.timezone;
            if (i.$$parserName = a, i.$parsers.push(function(a) {
                    return i.$isEmpty(a) ? null : b.test(a) ? (a = d(a, o), p && (a = S(a, p)), a) : c
                }), i.$formatters.push(function(a) {
                    if (a && !y(a)) throw pf("datefmt", a);
                    return m(a) ? ((o = a) && p && (o = S(o, p, !0)), l("date")(a, e, p)) : (o = null, "")
                }), t(h.min) || h.ngMin) {
                var q;
                i.$validators.min = function(a) {
                    return !m(a) || s(q) || d(a) >= q
                }, h.$observe("min", function(a) {
                    q = n(a), i.$validate()
                })
            }
            if (t(h.max) || h.ngMax) {
                var r;
                i.$validators.max = function(a) {
                    return !m(a) || s(r) || d(a) <= r
                }, h.$observe("max", function(a) {
                    r = n(a), i.$validate()
                })
            }
        }
    }

    function Jc(a, b, d, e) {
        (e.$$hasNativeValidators = u(b[0].validity)) && e.$parsers.push(function(a) {
            var d = b.prop("validity") || {};
            return d.badInput && !d.typeMismatch ? c : a
        })
    }

    function Kc(a, b, c, d, e) {
        if (t(d)) {
            if (a = a(d), !a.constant) throw pf("constexpr", c, d);
            return a(b)
        }
        return e
    }

    function Lc(a, b) {
        return a = "ngClass" + a, ["$animate", function(c) {
            function d(a, b) {
                var c = [],
                    d = 0;
                a: for (; d < a.length; d++) {
                    for (var e = a[d], f = 0; f < b.length; f++)
                        if (e == b[f]) continue a;
                    c.push(e)
                }
                return c
            }

            function e(a) {
                var b = [];
                return dd(a) ? (f(a, function(a) {
                    b = b.concat(e(a))
                }), b) : w(a) ? a.split(" ") : u(a) ? (f(a, function(a, c) {
                    a && (b = b.concat(c.split(" ")))
                }), b) : a
            }
            return {
                restrict: "AC",
                link: function(g, h, i) {
                    function j(a, b) {
                        var c = h.data("$classCounts") || ja(),
                            d = [];
                        return f(a, function(a) {
                            (b > 0 || c[a]) && (c[a] = (c[a] || 0) + b, c[a] === +(b > 0) && d.push(a))
                        }), h.data("$classCounts", c), d.join(" ")
                    }

                    function k(a) {
                        if (!0 === b || g.$index % 2 === b) {
                            var f = e(a || []);
                            if (l) {
                                if (!L(a, l)) {
                                    var k = e(l),
                                        m = d(f, k),
                                        f = d(k, f),
                                        m = j(m, 1),
                                        f = j(f, -1);
                                    m && m.length && c.addClass(h, m), f && f.length && c.removeClass(h, f)
                                }
                            } else {
                                var m = j(f, 1);
                                i.$addClass(m)
                            }
                        }
                        l = K(a)
                    }
                    var l;
                    g.$watch(i[a], k, !0), i.$observe("class", function(b) {
                        k(g.$eval(i[a]))
                    }), "ngClass" !== a && g.$watch("$index", function(c, d) {
                        var f = 1 & c;
                        if (f !== (1 & d)) {
                            var h = e(g.$eval(i[a]));
                            f === b ? (f = j(h, 1), i.$addClass(f)) : (f = j(h, -1), i.$removeClass(f))
                        }
                    })
                }
            }
        }]
    }

    function Mc(a) {
        function b(a, b) {
            b && !g[a] ? (j.addClass(f, a), g[a] = !0) : !b && g[a] && (j.removeClass(f, a), g[a] = !1)
        }

        function d(a, c) {
            a = a ? "-" + ca(a, "-") : "", b(kf + a, !0 === c), b(lf + a, !1 === c)
        }
        var e = a.ctrl,
            f = a.$element,
            g = {},
            h = a.set,
            i = a.unset,
            j = a.$animate;
        g[lf] = !(g[kf] = f.hasClass(kf)), e.$setValidity = function(a, f, g) {
            s(f) ? (e.$pending || (e.$pending = {}), h(e.$pending, a, g)) : (e.$pending && i(e.$pending, a, g), Nc(e.$pending) && (e.$pending = c)), D(f) ? f ? (i(e.$error, a, g), h(e.$$success, a, g)) : (h(e.$error, a, g), i(e.$$success, a, g)) : (i(e.$error, a, g), i(e.$$success, a, g)), e.$pending ? (b( of , !0), e.$valid = e.$invalid = c, d("", null)) : (b( of , !1), e.$valid = Nc(e.$error), e.$invalid = !e.$valid, d("", e.$valid)), f = e.$pending && e.$pending[a] ? c : e.$error[a] ? !1 : e.$$success[a] ? !0 : null, d(a, f), e.$$parentForm.$setValidity(a, f, e)
        }
    }

    function Nc(a) {
        if (a)
            for (var b in a)
                if (a.hasOwnProperty(b)) return !1;
        return !0
    }
    var Oc, Pc, Qc, Rc, Sc = /^\/(.+)\/([a-z]*)$/,
        Tc = function(a) {
            return w(a) ? a.toLowerCase() : a
        },
        Uc = Object.prototype.hasOwnProperty,
        Vc = function(a) {
            return w(a) ? a.toUpperCase() : a
        },
        Wc = [].slice,
        Xc = [].splice,
        Yc = [].push,
        Zc = Object.prototype.toString,
        $c = Object.getPrototypeOf,
        _c = d("ng"),
        ad = a.angular || (a.angular = {}),
        bd = 0;
    Oc = b.documentMode, o.$inject = [], p.$inject = [];
    var cd, dd = Array.isArray,
        ed = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
        fd = function(a) {
            return w(a) ? a.trim() : a
        },
        gd = function(a) {
            return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        },
        hd = function() {
            if (!t(hd.rules)) {
                var a = b.querySelector("[ng-csp]") || b.querySelector("[data-ng-csp]");
                if (a) {
                    var c = a.getAttribute("ng-csp") || a.getAttribute("data-ng-csp");
                    hd.rules = {
                        noUnsafeEval: !c || -1 !== c.indexOf("no-unsafe-eval"),
                        noInlineStyle: !c || -1 !== c.indexOf("no-inline-style")
                    }
                } else {
                    a = hd;
                    try {
                        new Function(""), c = !1
                    } catch (d) {
                        c = !0
                    }
                    a.rules = {
                        noUnsafeEval: c,
                        noInlineStyle: !1
                    }
                }
            }
            return hd.rules
        },
        id = function() {
            if (t(id.name_)) return id.name_;
            var a, c, d, e, f = jd.length;
            for (c = 0; f > c; ++c)
                if (d = jd[c], a = b.querySelector("[" + d.replace(":", "\\:") + "jq]")) {
                    e = a.getAttribute(d + "jq");
                    break
                }
            return id.name_ = e
        },
        jd = ["ng-", "data-ng-", "ng:", "x-ng-"],
        kd = /[A-Z]/g,
        ld = !1,
        md = 3,
        nd = {
            full: "1.4.9",
            major: 1,
            minor: 4,
            dot: 9,
            codeName: "implicit-superannuation"
        };
    pa.expando = "ng339";
    var od = pa.cache = {},
        pd = 1;
    pa._data = function(a) {
        return this.cache[a[this.expando]] || {}
    };
    var qd = /([\:\-\_]+(.))/g,
        rd = /^moz([A-Z])/,
        sd = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        },
        td = d("jqLite"),
        ud = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        vd = /<|&#?\w+;/,
        wd = /<([\w:-]+)/,
        xd = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        yd = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    yd.optgroup = yd.option, yd.tbody = yd.tfoot = yd.colgroup = yd.caption = yd.thead, yd.th = yd.td;
    var zd = Node.prototype.contains || function(a) {
            return !!(16 & this.compareDocumentPosition(a))
        },
        Ad = pa.prototype = {
            ready: function(c) {
                function d() {
                    e || (e = !0, c())
                }
                var e = !1;
                "complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), pa(a).on("load", d))
            },
            toString: function() {
                var a = [];
                return f(this, function(b) {
                    a.push("" + b)
                }), "[" + a.join(", ") + "]"
            },
            eq: function(a) {
                return Pc(a >= 0 ? this[a] : this[this.length + a])
            },
            length: 0,
            push: Yc,
            sort: [].sort,
            splice: [].splice
        },
        Bd = {};
    f("multiple selected checked disabled readOnly required open".split(" "), function(a) {
        Bd[Tc(a)] = a
    });
    var Cd = {};
    f("input select option textarea button form details".split(" "), function(a) {
        Cd[a] = !0
    });
    var Dd = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    f({
        data: va,
        removeData: ta,
        hasData: function(a) {
            for (var b in od[a.ng339]) return !0;
            return !1
        }
    }, function(a, b) {
        pa[b] = a
    }), f({
        data: va,
        inheritedData: Ba,
        scope: function(a) {
            return Pc.data(a, "$scope") || Ba(a.parentNode || a, ["$isolateScope", "$scope"])
        },
        isolateScope: function(a) {
            return Pc.data(a, "$isolateScope") || Pc.data(a, "$isolateScopeNoTemplate")
        },
        controller: Aa,
        injector: function(a) {
            return Ba(a, "$injector")
        },
        removeAttr: function(a, b) {
            a.removeAttribute(b)
        },
        hasClass: wa,
        css: function(a, b, c) {
            return b = ma(b), t(c) ? void(a.style[b] = c) : a.style[b]
        },
        attr: function(a, b, d) {
            var e = a.nodeType;
            if (e !== md && 2 !== e && 8 !== e)
                if (e = Tc(b), Bd[e]) {
                    if (!t(d)) return a[b] || (a.attributes.getNamedItem(b) || o).specified ? e : c;
                    d ? (a[b] = !0, a.setAttribute(b, e)) : (a[b] = !1, a.removeAttribute(e))
                } else if (t(d)) a.setAttribute(b, d);
            else if (a.getAttribute) return a = a.getAttribute(b, 2), null === a ? c : a
        },
        prop: function(a, b, c) {
            return t(c) ? void(a[b] = c) : a[b]
        },
        text: function() {
            function a(a, b) {
                if (s(b)) {
                    var c = a.nodeType;
                    return 1 === c || c === md ? a.textContent : ""
                }
                a.textContent = b
            }
            return a.$dv = "", a
        }(),
        val: function(a, b) {
            if (s(b)) {
                if (a.multiple && "select" === H(a)) {
                    var c = [];
                    return f(a.options, function(a) {
                        a.selected && c.push(a.value || a.text)
                    }), 0 === c.length ? null : c
                }
                return a.value
            }
            a.value = b
        },
        html: function(a, b) {
            return s(b) ? a.innerHTML : (ra(a, !0), void(a.innerHTML = b))
        },
        empty: Ca
    }, function(a, b) {
        pa.prototype[b] = function(b, c) {
            var d, e, f = this.length;
            if (a !== Ca && s(2 == a.length && a !== wa && a !== Aa ? b : c)) {
                if (u(b)) {
                    for (d = 0; f > d; d++)
                        if (a === va) a(this[d], b);
                        else
                            for (e in b) a(this[d], e, b[e]);
                    return this
                }
                for (d = a.$dv, f = s(d) ? Math.min(f, 1) : f, e = 0; f > e; e++) {
                    var g = a(this[e], b, c);
                    d = d ? d + g : g
                }
                return d
            }
            for (d = 0; f > d; d++) a(this[d], b, c);
            return this
        }
    }), f({
        removeData: ta,
        on: function(a, b, d, e) {
            if (t(e)) throw td("onargs");
            if (na(a)) {
                e = ua(a, !0);
                var f = e.events,
                    g = e.handle;
                g || (g = e.handle = Ga(a, f)), e = 0 <= b.indexOf(" ") ? b.split(" ") : [b];
                for (var h = e.length, i = function(b, c, e) {
                        var h = f[b];
                        h || (h = f[b] = [], h.specialHandlerWrapper = c, "$destroy" === b || e || a.addEventListener(b, g, !1)), h.push(d)
                    }; h--;) b = e[h], sd[b] ? (i(sd[b], Ia), i(b, c, !0)) : i(b)
            }
        },
        off: sa,
        one: function(a, b, c) {
            a = Pc(a), a.on(b, function d() {
                a.off(b, c), a.off(b, d)
            }), a.on(b, c)
        },
        replaceWith: function(a, b) {
            var c, d = a.parentNode;
            ra(a), f(new pa(b), function(b) {
                c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b
            })
        },
        children: function(a) {
            var b = [];
            return f(a.childNodes, function(a) {
                1 === a.nodeType && b.push(a)
            }), b
        },
        contents: function(a) {
            return a.contentDocument || a.childNodes || []
        },
        append: function(a, b) {
            var c = a.nodeType;
            if (1 === c || 11 === c) {
                b = new pa(b);
                for (var c = 0, d = b.length; d > c; c++) a.appendChild(b[c])
            }
        },
        prepend: function(a, b) {
            if (1 === a.nodeType) {
                var c = a.firstChild;
                f(new pa(b), function(b) {
                    a.insertBefore(b, c)
                })
            }
        },
        wrap: function(a, b) {
            b = Pc(b).eq(0).clone()[0];
            var c = a.parentNode;
            c && c.replaceChild(b, a), b.appendChild(a)
        },
        remove: Da,
        detach: function(a) {
            Da(a, !0)
        },
        after: function(a, b) {
            var c = a,
                d = a.parentNode;
            b = new pa(b);
            for (var e = 0, f = b.length; f > e; e++) {
                var g = b[e];
                d.insertBefore(g, c.nextSibling), c = g
            }
        },
        addClass: ya,
        removeClass: xa,
        toggleClass: function(a, b, c) {
            b && f(b.split(" "), function(b) {
                var d = c;
                s(d) && (d = !wa(a, b)), (d ? ya : xa)(a, b)
            })
        },
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        next: function(a) {
            return a.nextElementSibling
        },
        find: function(a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : []
        },
        clone: qa,
        triggerHandler: function(a, b, c) {
            var d, e, g = b.type || b,
                h = ua(a);
            (h = (h = h && h.events) && h[g]) && (d = {
                preventDefault: function() {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function() {
                    return !0 === this.defaultPrevented
                },
                stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0
                },
                isImmediatePropagationStopped: function() {
                    return !0 === this.immediatePropagationStopped
                },
                stopPropagation: o,
                type: g,
                target: a
            }, b.type && (d = k(d, b)), b = K(h), e = c ? [d].concat(c) : [d], f(b, function(b) {
                d.isImmediatePropagationStopped() || b.apply(a, e)
            }))
        }
    }, function(a, b) {
        pa.prototype[b] = function(b, c, d) {
            for (var e, f = 0, g = this.length; g > f; f++) s(e) ? (e = a(this[f], b, c, d), t(e) && (e = Pc(e))) : za(e, a(this[f], b, c, d));
            return t(e) ? e : this
        }, pa.prototype.bind = pa.prototype.on, pa.prototype.unbind = pa.prototype.off
    }), La.prototype = {
        put: function(a, b) {
            this[Ka(a, this.nextUid)] = b
        },
        get: function(a) {
            return this[Ka(a, this.nextUid)]
        },
        remove: function(a) {
            var b = this[a = Ka(a, this.nextUid)];
            return delete this[a], b
        }
    };
    var Ed = [function() {
            this.$get = [function() {
                return La
            }]
        }],
        Fd = /^[^\(]*\(\s*([^\)]*)\)/m,
        Gd = /,/,
        Hd = /^\s*(_?)(\S+?)\1\s*$/,
        Id = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
        Jd = d("$injector");
    Na.$$annotate = function(a, b, c) {
        var d;
        if ("function" == typeof a) {
            if (!(d = a.$inject)) {
                if (d = [], a.length) {
                    if (b) throw w(c) && c || (c = a.name || Ma(a)), Jd("strictdi", c);
                    b = a.toString().replace(Id, ""), b = b.match(Fd), f(b[1].split(Gd), function(a) {
                        a.replace(Hd, function(a, b, c) {
                            d.push(c)
                        })
                    })
                }
                a.$inject = d
            }
        } else dd(a) ? (b = a.length - 1, fa(a[b], "fn"), d = a.slice(0, b)) : fa(a, "fn", !0);
        return d
    };
    var Kd = d("$animate"),
        Ld = function() {
            this.$get = function() {}
        },
        Md = function() {
            var a = new La,
                b = [];
            this.$get = ["$$AnimateRunner", "$rootScope", function(c, d) {
                function e(a, b, c) {
                    var d = !1;
                    return b && (b = w(b) ? b.split(" ") : dd(b) ? b : [], f(b, function(b) {
                        b && (d = !0, a[b] = c)
                    })), d
                }

                function g() {
                    f(b, function(b) {
                        var c = a.get(b);
                        if (c) {
                            var d = Qa(b.attr("class")),
                                e = "",
                                g = "";
                            f(c, function(a, b) {
                                a !== !!d[b] && (a ? e += (e.length ? " " : "") + b : g += (g.length ? " " : "") + b)
                            }), f(b, function(a) {
                                e && ya(a, e), g && xa(a, g)
                            }), a.remove(b)
                        }
                    }), b.length = 0
                }
                return {
                    enabled: o,
                    on: o,
                    off: o,
                    pin: o,
                    push: function(f, h, i, j) {
                        return j && j(), i = i || {}, i.from && f.css(i.from), i.to && f.css(i.to), (i.addClass || i.removeClass) && (h = i.addClass, j = i.removeClass, i = a.get(f) || {}, h = e(i, h, !0), j = e(i, j, !1), (h || j) && (a.put(f, i), b.push(f), 1 === b.length && d.$$postDigest(g))), f = new c, f.complete(), f
                    }
                }
            }]
        },
        Nd = ["$provide", function(a) {
            var b = this;
            this.$$registeredAnimations = Object.create(null), this.register = function(c, d) {
                if (c && "." !== c.charAt(0)) throw Kd("notcsel", c);
                var e = c + "-animation";
                b.$$registeredAnimations[c.substr(1)] = e, a.factory(e, d)
            }, this.classNameFilter = function(a) {
                if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString())) throw Kd("nongcls", "ng-animate");
                return this.$$classNameFilter
            }, this.$get = ["$$animateQueue", function(a) {
                function b(a, b, c) {
                    if (c) {
                        var d;
                        a: {
                            for (d = 0; d < c.length; d++) {
                                var e = c[d];
                                if (1 === e.nodeType) {
                                    d = e;
                                    break a
                                }
                            }
                            d = void 0
                        }!d || d.parentNode || d.previousElementSibling || (c = null)
                    }
                    c ? c.after(a) : b.prepend(a)
                }
                return {
                    on: a.on,
                    off: a.off,
                    pin: a.pin,
                    enabled: a.enabled,
                    cancel: function(a) {
                        a.end && a.end()
                    },
                    enter: function(c, d, e, f) {
                        return d = d && Pc(d), e = e && Pc(e), d = d || e.parent(), b(c, d, e), a.push(c, "enter", Ra(f))
                    },
                    move: function(c, d, e, f) {
                        return d = d && Pc(d), e = e && Pc(e), d = d || e.parent(), b(c, d, e), a.push(c, "move", Ra(f))
                    },
                    leave: function(b, c) {
                        return a.push(b, "leave", Ra(c), function() {
                            b.remove()
                        })
                    },
                    addClass: function(b, c, d) {
                        return d = Ra(d), d.addClass = Pa(d.addclass, c), a.push(b, "addClass", d)
                    },
                    removeClass: function(b, c, d) {
                        return d = Ra(d), d.removeClass = Pa(d.removeClass, c), a.push(b, "removeClass", d)
                    },
                    setClass: function(b, c, d, e) {
                        return e = Ra(e), e.addClass = Pa(e.addClass, c), e.removeClass = Pa(e.removeClass, d), a.push(b, "setClass", e)
                    },
                    animate: function(b, c, d, e, f) {
                        return f = Ra(f), f.from = f.from ? k(f.from, c) : c, f.to = f.to ? k(f.to, d) : d, f.tempClasses = Pa(f.tempClasses, e || "ng-inline-animate"), a.push(b, "animate", f)
                    }
                }
            }]
        }],
        Od = function() {
            this.$get = ["$$rAF", function(a) {
                function b(b) {
                    c.push(b), 1 < c.length || a(function() {
                        for (var a = 0; a < c.length; a++) c[a]();
                        c = []
                    })
                }
                var c = [];
                return function() {
                    var a = !1;
                    return b(function() {
                            a = !0
                        }),
                        function(c) {
                            a ? c() : b(c)
                        }
                }
            }]
        },
        Pd = function() {
            this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function(a, b, c, d, e) {
                function g(a) {
                    this.setHost(a);
                    var b = c();
                    this._doneCallbacks = [], this._tick = function(a) {
                        var c = d[0];
                        c && c.hidden ? e(a, 0, !1) : b(a)
                    }, this._state = 0
                }
                return g.chain = function(a, b) {
                    function c() {
                        d === a.length ? b(!0) : a[d](function(a) {
                            !1 === a ? b(!1) : (d++, c())
                        })
                    }
                    var d = 0;
                    c()
                }, g.all = function(a, b) {
                    function c(c) {
                        e = e && c, ++d === a.length && b(e)
                    }
                    var d = 0,
                        e = !0;
                    f(a, function(a) {
                        a.done(c)
                    })
                }, g.prototype = {
                    setHost: function(a) {
                        this.host = a || {}
                    },
                    done: function(a) {
                        2 === this._state ? a() : this._doneCallbacks.push(a)
                    },
                    progress: o,
                    getPromise: function() {
                        if (!this.promise) {
                            var b = this;
                            this.promise = a(function(a, c) {
                                b.done(function(b) {
                                    !1 === b ? c() : a()
                                })
                            })
                        }
                        return this.promise
                    },
                    then: function(a, b) {
                        return this.getPromise().then(a, b)
                    },
                    "catch": function(a) {
                        return this.getPromise()["catch"](a)
                    },
                    "finally": function(a) {
                        return this.getPromise()["finally"](a)
                    },
                    pause: function() {
                        this.host.pause && this.host.pause()
                    },
                    resume: function() {
                        this.host.resume && this.host.resume()
                    },
                    end: function() {
                        this.host.end && this.host.end(), this._resolve(!0)
                    },
                    cancel: function() {
                        this.host.cancel && this.host.cancel(), this._resolve(!1)
                    },
                    complete: function(a) {
                        var b = this;
                        0 === b._state && (b._state = 1, b._tick(function() {
                            b._resolve(a)
                        }))
                    },
                    _resolve: function(a) {
                        2 !== this._state && (f(this._doneCallbacks, function(b) {
                            b(a)
                        }), this._doneCallbacks.length = 0, this._state = 2)
                    }
                }, g
            }]
        },
        Qd = function() {
            this.$get = ["$$rAF", "$q", "$$AnimateRunner", function(a, b, c) {
                return function(b, d) {
                    function e() {
                        return a(function() {
                            f.addClass && (b.addClass(f.addClass), f.addClass = null), f.removeClass && (b.removeClass(f.removeClass), f.removeClass = null), f.to && (b.css(f.to), f.to = null), g || h.complete(), g = !0
                        }), h
                    }
                    var f = d || {};
                    f.$$prepared || (f = J(f)), f.cleanupStyles && (f.from = f.to = null), f.from && (b.css(f.from), f.from = null);
                    var g, h = new c;
                    return {
                        start: e,
                        end: e
                    }
                }
            }]
        },
        Rd = d("$compile");
    Wa.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Sd = /^((?:x|data)[\:\-_])/i,
        Td = d("$controller"),
        Ud = /^(\S+)(\s+as\s+([\w$]+))?$/,
        Vd = function() {
            this.$get = ["$document", function(a) {
                return function(b) {
                    return b ? !b.nodeType && b instanceof Pc && (b = b[0]) : b = a[0].body, b.offsetWidth + 1
                }
            }]
        },
        Wd = "application/json",
        Xd = {
            "Content-Type": Wd + ";charset=utf-8"
        },
        Yd = /^\[|^\{(?!\{)/,
        Zd = {
            "[": /]$/,
            "{": /}$/
        },
        $d = /^\)\]\}',?\n/,
        _d = d("$http"),
        ae = function(a) {
            return function() {
                throw _d("legacy", a)
            }
        },
        be = ad.$interpolateMinErr = d("$interpolate");
    be.throwNoconcat = function(a) {
        throw be("noconcat", a)
    }, be.interr = function(a, b) {
        return be("interr", a, b.toString())
    };
    var ce = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        de = {
            http: 80,
            https: 443,
            ftp: 21
        },
        ee = d("$location"),
        fe = {
            $$html5: !1,
            $$replace: !1,
            absUrl: xb("$$absUrl"),
            url: function(a) {
                if (s(a)) return this.$$url;
                var b = ce.exec(a);
                return (b[1] || "" === a) && this.path(decodeURIComponent(b[1])), (b[2] || b[1] || "" === a) && this.search(b[3] || ""), this.hash(b[5] || ""), this
            },
            protocol: xb("$$protocol"),
            host: xb("$$host"),
            port: xb("$$port"),
            path: yb("$$path", function(a) {
                return a = null !== a ? a.toString() : "", "/" == a.charAt(0) ? a : "/" + a
            }),
            search: function(a, b) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (w(a) || x(a)) a = a.toString(), this.$$search = V(a);
                        else {
                            if (!u(a)) throw ee("isrcharg");
                            a = J(a, {}), f(a, function(b, c) {
                                null == b && delete a[c]
                            }), this.$$search = a
                        }
                        break;
                    default:
                        s(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
                }
                return this.$$compose(), this
            },
            hash: yb("$$hash", function(a) {
                return null !== a ? a.toString() : ""
            }),
            replace: function() {
                return this.$$replace = !0, this
            }
        };
    f([wb, vb, ub], function(a) {
        a.prototype = Object.create(fe), a.prototype.state = function(b) {
            if (!arguments.length) return this.$$state;
            if (a !== ub || !this.$$html5) throw ee("nostate");
            return this.$$state = s(b) ? null : b, this
        }
    });
    var ge = d("$parse"),
        he = Function.prototype.call,
        ie = Function.prototype.apply,
        je = Function.prototype.bind,
        ke = ja();
    f("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(a) {
        ke[a] = !0
    });
    var le = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "	",
            v: "\x0B",
            "'": "'",
            '"': '"'
        },
        me = function(a) {
            this.options = a
        };
    me.prototype = {
        constructor: me,
        lex: function(a) {
            for (this.text = a, this.index = 0, this.tokens = []; this.index < this.text.length;)
                if (a = this.text.charAt(this.index), '"' === a || "'" === a) this.readString(a);
                else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber();
            else if (this.isIdent(a)) this.readIdent();
            else if (this.is(a, "(){}[].,;:?")) this.tokens.push({
                index: this.index,
                text: a
            }), this.index++;
            else if (this.isWhitespace(a)) this.index++;
            else {
                var b = a + this.peek(),
                    c = b + this.peek(2),
                    d = ke[b],
                    e = ke[c];
                ke[a] || d || e ? (a = e ? c : d ? b : a, this.tokens.push({
                    index: this.index,
                    text: a,
                    operator: !0
                }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
            }
            return this.tokens
        },
        is: function(a, b) {
            return -1 !== b.indexOf(a)
        },
        peek: function(a) {
            return a = a || 1, this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
        },
        isNumber: function(a) {
            return a >= "0" && "9" >= a && "string" == typeof a
        },
        isWhitespace: function(a) {
            return " " === a || "\r" === a || "	" === a || "\n" === a || "\x0B" === a || " " === a
        },
        isIdent: function(a) {
            return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a
        },
        isExpOperator: function(a) {
            return "-" === a || "+" === a || this.isNumber(a)
        },
        throwError: function(a, b, c) {
            throw c = c || this.index, b = t(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c, ge("lexerr", a, b, this.text)
        },
        readNumber: function() {
            for (var a = "", b = this.index; this.index < this.text.length;) {
                var c = Tc(this.text.charAt(this.index));
                if ("." == c || this.isNumber(c)) a += c;
                else {
                    var d = this.peek();
                    if ("e" == c && this.isExpOperator(d)) a += c;
                    else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1)) a += c;
                    else {
                        if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1)) break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            this.tokens.push({
                index: b,
                text: a,
                constant: !0,
                value: Number(a)
            })
        },
        readIdent: function() {
            for (var a = this.index; this.index < this.text.length;) {
                var b = this.text.charAt(this.index);
                if (!this.isIdent(b) && !this.isNumber(b)) break;
                this.index++
            }
            this.tokens.push({
                index: a,
                text: this.text.slice(a, this.index),
                identifier: !0
            })
        },
        readString: function(a) {
            var b = this.index;
            this.index++;
            for (var c = "", d = a, e = !1; this.index < this.text.length;) {
                var f = this.text.charAt(this.index),
                    d = d + f;
                if (e) "u" === f ? (e = this.text.substring(this.index + 1, this.index + 5), e.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + e + "]"), this.index += 4, c += String.fromCharCode(parseInt(e, 16))) : c += le[f] || f, e = !1;
                else if ("\\" === f) e = !0;
                else {
                    if (f === a) return this.index++, void this.tokens.push({
                        index: b,
                        text: d,
                        constant: !0,
                        value: c
                    });
                    c += f
                }
                this.index++
            }
            this.throwError("Unterminated quote", b)
        }
    };
    var ne = function(a, b) {
        this.lexer = a, this.options = b
    };
    ne.Program = "Program", ne.ExpressionStatement = "ExpressionStatement", ne.AssignmentExpression = "AssignmentExpression", ne.ConditionalExpression = "ConditionalExpression", ne.LogicalExpression = "LogicalExpression", ne.BinaryExpression = "BinaryExpression", ne.UnaryExpression = "UnaryExpression", ne.CallExpression = "CallExpression", ne.MemberExpression = "MemberExpression", ne.Identifier = "Identifier", ne.Literal = "Literal", ne.ArrayExpression = "ArrayExpression", ne.Property = "Property", ne.ObjectExpression = "ObjectExpression", ne.ThisExpression = "ThisExpression", ne.NGValueParameter = "NGValueParameter", ne.prototype = {
        ast: function(a) {
            return this.text = a, this.tokens = this.lexer.lex(a), a = this.program(), 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), a
        },
        program: function() {
            for (var a = [];;)
                if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";")) return {
                    type: ne.Program,
                    body: a
                }
        },
        expressionStatement: function() {
            return {
                type: ne.ExpressionStatement,
                expression: this.filterChain()
            }
        },
        filterChain: function() {
            for (var a = this.expression(); this.expect("|");) a = this.filter(a);
            return a
        },
        expression: function() {
            return this.assignment()
        },
        assignment: function() {
            var a = this.ternary();
            return this.expect("=") && (a = {
                type: ne.AssignmentExpression,
                left: a,
                right: this.assignment(),
                operator: "="
            }), a
        },
        ternary: function() {
            var a, b, c = this.logicalOR();
            return this.expect("?") && (a = this.expression(), this.consume(":")) ? (b = this.expression(), {
                type: ne.ConditionalExpression,
                test: c,
                alternate: a,
                consequent: b
            }) : c
        },
        logicalOR: function() {
            for (var a = this.logicalAND(); this.expect("||");) a = {
                type: ne.LogicalExpression,
                operator: "||",
                left: a,
                right: this.logicalAND()
            };
            return a
        },
        logicalAND: function() {
            for (var a = this.equality(); this.expect("&&");) a = {
                type: ne.LogicalExpression,
                operator: "&&",
                left: a,
                right: this.equality()
            };
            return a
        },
        equality: function() {
            for (var a, b = this.relational(); a = this.expect("==", "!=", "===", "!==");) b = {
                type: ne.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.relational()
            };
            return b
        },
        relational: function() {
            for (var a, b = this.additive(); a = this.expect("<", ">", "<=", ">=");) b = {
                type: ne.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.additive()
            };
            return b
        },
        additive: function() {
            for (var a, b = this.multiplicative(); a = this.expect("+", "-");) b = {
                type: ne.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.multiplicative()
            };
            return b
        },
        multiplicative: function() {
            for (var a, b = this.unary(); a = this.expect("*", "/", "%");) b = {
                type: ne.BinaryExpression,
                operator: a.text,
                left: b,
                right: this.unary()
            };
            return b
        },
        unary: function() {
            var a;
            return (a = this.expect("+", "-", "!")) ? {
                type: ne.UnaryExpression,
                operator: a.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary()
        },
        primary: function() {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.constants.hasOwnProperty(this.peek().text) ? a = J(this.constants[this.consume().text]) : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var b; b = this.expect("(", "[", ".");) "(" === b.text ? (a = {
                type: ne.CallExpression,
                callee: a,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === b.text ? (a = {
                type: ne.MemberExpression,
                object: a,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === b.text ? a = {
                type: ne.MemberExpression,
                object: a,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return a
        },
        filter: function(a) {
            a = [a];
            for (var b = {
                    type: ne.CallExpression,
                    callee: this.identifier(),
                    arguments: a,
                    filter: !0
                }; this.expect(":");) a.push(this.expression());
            return b
        },
        parseArguments: function() {
            var a = [];
            if (")" !== this.peekToken().text)
                do a.push(this.expression()); while (this.expect(","));
            return a
        },
        identifier: function() {
            var a = this.consume();
            return a.identifier || this.throwError("is not a valid identifier", a), {
                type: ne.Identifier,
                name: a.text
            }
        },
        constant: function() {
            return {
                type: ne.Literal,
                value: this.consume().value
            }
        },
        arrayDeclaration: function() {
            var a = [];
            if ("]" !== this.peekToken().text)
                do {
                    if (this.peek("]")) break;
                    a.push(this.expression())
                } while (this.expect(","));
            return this.consume("]"), {
                type: ne.ArrayExpression,
                elements: a
            }
        },
        object: function() {
            var a, b = [];
            if ("}" !== this.peekToken().text)
                do {
                    if (this.peek("}")) break;
                    a = {
                        type: ne.Property,
                        kind: "init"
                    }, this.peek().constant ? a.key = this.constant() : this.peek().identifier ? a.key = this.identifier() : this.throwError("invalid key", this.peek()), this.consume(":"), a.value = this.expression(), b.push(a)
                } while (this.expect(","));
            return this.consume("}"), {
                type: ne.ObjectExpression,
                properties: b
            }
        },
        throwError: function(a, b) {
            throw ge("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index))
        },
        consume: function(a) {
            if (0 === this.tokens.length) throw ge("ueoe", this.text);
            var b = this.expect(a);
            return b || this.throwError("is unexpected, expecting [" + a + "]", this.peek()), b
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw ge("ueoe", this.text);
            return this.tokens[0]
        },
        peek: function(a, b, c, d) {
            return this.peekAhead(0, a, b, c, d)
        },
        peekAhead: function(a, b, c, d, e) {
            if (this.tokens.length > a) {
                a = this.tokens[a];
                var f = a.text;
                if (f === b || f === c || f === d || f === e || !(b || c || d || e)) return a
            }
            return !1
        },
        expect: function(a, b, c, d) {
            return (a = this.peek(a, b, c, d)) ? (this.tokens.shift(), a) : !1
        },
        constants: {
            "true": {
                type: ne.Literal,
                value: !0
            },
            "false": {
                type: ne.Literal,
                value: !1
            },
            "null": {
                type: ne.Literal,
                value: null
            },
            undefined: {
                type: ne.Literal,
                value: c
            },
            "this": {
                type: ne.ThisExpression
            }
        }
    }, Nb.prototype = {
        compile: function(a, b) {
            var d = this,
                e = this.astBuilder.ast(a);
            this.state = {
                nextId: 0,
                filters: {},
                expensiveChecks: b,
                fn: {
                    vars: [],
                    body: [],
                    own: {}
                },
                assign: {
                    vars: [],
                    body: [],
                    own: {}
                },
                inputs: []
            }, Ib(e, d.$filter);
            var g, h = "";
            return this.stage = "assign", (g = Lb(e)) && (this.state.computing = "assign", h = this.nextId(), this.recurse(g, h), this.return_(h), h = "fn.assign=" + this.generateFunction("assign", "s,v,l")), g = Jb(e.body), d.stage = "inputs", f(g, function(a, b) {
                var c = "fn" + b;
                d.state[c] = {
                    vars: [],
                    body: [],
                    own: {}
                }, d.state.computing = c;
                var e = d.nextId();
                d.recurse(a, e), d.return_(e), d.state.inputs.push(c), a.watchId = b
            }), this.state.computing = "fn", this.stage = "main", this.recurse(e), h = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + h + this.watchFns() + "return fn;", h = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", h)(this.$filter, Bb, Db, Eb, Cb, Fb, Gb, Hb, a), this.state = this.stage = c, h.literal = Mb(e), h.constant = e.constant, h
        },
        USE: "use",
        STRICT: "strict",
        watchFns: function() {
            var a = [],
                b = this.state.inputs,
                c = this;
            return f(b, function(b) {
                a.push("var " + b + "=" + c.generateFunction(b, "s"))
            }), b.length && a.push("fn.inputs=[" + b.join(",") + "];"), a.join("")
        },
        generateFunction: function(a, b) {
            return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};"
        },
        filterPrefix: function() {
            var a = [],
                b = this;
            return f(this.state.filters, function(c, d) {
                a.push(c + "=$filter(" + b.escape(d) + ")")
            }), a.length ? "var " + a.join(",") + ";" : ""
        },
        varsPrefix: function(a) {
            return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : ""
        },
        body: function(a) {
            return this.state[a].body.join("")
        },
        recurse: function(a, b, d, e, g, h) {
            var i, j, k, l, m = this;
            if (e = e || o, !h && t(a.watchId)) b = b || this.nextId(), this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, e, g, !0));
            else switch (a.type) {
                case ne.Program:
                    f(a.body, function(b, d) {
                        m.recurse(b.expression, c, c, function(a) {
                            j = a
                        }), d !== a.body.length - 1 ? m.current().body.push(j, ";") : m.return_(j)
                    });
                    break;
                case ne.Literal:
                    l = this.escape(a.value), this.assign(b, l), e(l);
                    break;
                case ne.UnaryExpression:
                    this.recurse(a.argument, c, c, function(a) {
                        j = a
                    }), l = a.operator + "(" + this.ifDefined(j, 0) + ")", this.assign(b, l), e(l);
                    break;
                case ne.BinaryExpression:
                    this.recurse(a.left, c, c, function(a) {
                        i = a
                    }), this.recurse(a.right, c, c, function(a) {
                        j = a
                    }), l = "+" === a.operator ? this.plus(i, j) : "-" === a.operator ? this.ifDefined(i, 0) + a.operator + this.ifDefined(j, 0) : "(" + i + ")" + a.operator + "(" + j + ")", this.assign(b, l), e(l);
                    break;
                case ne.LogicalExpression:
                    b = b || this.nextId(), m.recurse(a.left, b), m.if_("&&" === a.operator ? b : m.not(b), m.lazyRecurse(a.right, b)), e(b);
                    break;
                case ne.ConditionalExpression:
                    b = b || this.nextId(), m.recurse(a.test, b), m.if_(b, m.lazyRecurse(a.alternate, b), m.lazyRecurse(a.consequent, b)), e(b);
                    break;
                case ne.Identifier:
                    b = b || this.nextId(), d && (d.context = "inputs" === m.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name), Bb(a.name), m.if_("inputs" === m.stage || m.not(m.getHasOwnProperty("l", a.name)), function() {
                        m.if_("inputs" === m.stage || "s", function() {
                            g && 1 !== g && m.if_(m.not(m.nonComputedMember("s", a.name)), m.lazyAssign(m.nonComputedMember("s", a.name), "{}")), m.assign(b, m.nonComputedMember("s", a.name))
                        })
                    }, b && m.lazyAssign(b, m.nonComputedMember("l", a.name))), (m.state.expensiveChecks || Pb(a.name)) && m.addEnsureSafeObject(b), e(b);
                    break;
                case ne.MemberExpression:
                    i = d && (d.context = this.nextId()) || this.nextId(), b = b || this.nextId(), m.recurse(a.object, i, c, function() {
                        m.if_(m.notNull(i), function() {
                            a.computed ? (j = m.nextId(), m.recurse(a.property, j), m.getStringValue(j), m.addEnsureSafeMemberName(j), g && 1 !== g && m.if_(m.not(m.computedMember(i, j)), m.lazyAssign(m.computedMember(i, j), "{}")), l = m.ensureSafeObject(m.computedMember(i, j)), m.assign(b, l), d && (d.computed = !0, d.name = j)) : (Bb(a.property.name), g && 1 !== g && m.if_(m.not(m.nonComputedMember(i, a.property.name)), m.lazyAssign(m.nonComputedMember(i, a.property.name), "{}")), l = m.nonComputedMember(i, a.property.name), (m.state.expensiveChecks || Pb(a.property.name)) && (l = m.ensureSafeObject(l)), m.assign(b, l), d && (d.computed = !1, d.name = a.property.name))
                        }, function() {
                            m.assign(b, "undefined")
                        }), e(b)
                    }, !!g);
                    break;
                case ne.CallExpression:
                    b = b || this.nextId(), a.filter ? (j = m.filter(a.callee.name), k = [], f(a.arguments, function(a) {
                        var b = m.nextId();
                        m.recurse(a, b), k.push(b)
                    }), l = j + "(" + k.join(",") + ")", m.assign(b, l), e(b)) : (j = m.nextId(), i = {}, k = [], m.recurse(a.callee, j, i, function() {
                        m.if_(m.notNull(j), function() {
                            m.addEnsureSafeFunction(j), f(a.arguments, function(a) {
                                m.recurse(a, m.nextId(), c, function(a) {
                                    k.push(m.ensureSafeObject(a))
                                })
                            }), i.name ? (m.state.expensiveChecks || m.addEnsureSafeObject(i.context), l = m.member(i.context, i.name, i.computed) + "(" + k.join(",") + ")") : l = j + "(" + k.join(",") + ")", l = m.ensureSafeObject(l), m.assign(b, l)
                        }, function() {
                            m.assign(b, "undefined")
                        }), e(b)
                    }));
                    break;
                case ne.AssignmentExpression:
                    if (j = this.nextId(), i = {}, !Kb(a.left)) throw ge("lval");
                    this.recurse(a.left, c, i, function() {
                        m.if_(m.notNull(i.context), function() {
                            m.recurse(a.right, j), m.addEnsureSafeObject(m.member(i.context, i.name, i.computed)), m.addEnsureSafeAssignContext(i.context), l = m.member(i.context, i.name, i.computed) + a.operator + j, m.assign(b, l), e(b || l)
                        })
                    }, 1);
                    break;
                case ne.ArrayExpression:
                    k = [], f(a.elements, function(a) {
                        m.recurse(a, m.nextId(), c, function(a) {
                            k.push(a)
                        })
                    }), l = "[" + k.join(",") + "]", this.assign(b, l), e(l);
                    break;
                case ne.ObjectExpression:
                    k = [], f(a.properties, function(a) {
                        m.recurse(a.value, m.nextId(), c, function(b) {
                            k.push(m.escape(a.key.type === ne.Identifier ? a.key.name : "" + a.key.value) + ":" + b)
                        })
                    }), l = "{" + k.join(",") + "}", this.assign(b, l), e(l);
                    break;
                case ne.ThisExpression:
                    this.assign(b, "s"), e("s");
                    break;
                case ne.NGValueParameter:
                    this.assign(b, "v"), e("v")
            }
        },
        getHasOwnProperty: function(a, b) {
            var c = a + "." + b,
                d = this.current().own;
            return d.hasOwnProperty(c) || (d[c] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")")), d[c]
        },
        assign: function(a, b) {
            return a ? (this.current().body.push(a, "=", b, ";"), a) : void 0
        },
        filter: function(a) {
            return this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0)), this.state.filters[a]
        },
        ifDefined: function(a, b) {
            return "ifDefined(" + a + "," + this.escape(b) + ")"
        },
        plus: function(a, b) {
            return "plus(" + a + "," + b + ")"
        },
        return_: function(a) {
            this.current().body.push("return ", a, ";")
        },
        if_: function(a, b, c) {
            if (!0 === a) b();
            else {
                var d = this.current().body;
                d.push("if(", a, "){"), b(), d.push("}"), c && (d.push("else{"), c(), d.push("}"))
            }
        },
        not: function(a) {
            return "!(" + a + ")"
        },
        notNull: function(a) {
            return a + "!=null"
        },
        nonComputedMember: function(a, b) {
            return a + "." + b
        },
        computedMember: function(a, b) {
            return a + "[" + b + "]"
        },
        member: function(a, b, c) {
            return c ? this.computedMember(a, b) : this.nonComputedMember(a, b)
        },
        addEnsureSafeObject: function(a) {
            this.current().body.push(this.ensureSafeObject(a), ";")
        },
        addEnsureSafeMemberName: function(a) {
            this.current().body.push(this.ensureSafeMemberName(a), ";")
        },
        addEnsureSafeFunction: function(a) {
            this.current().body.push(this.ensureSafeFunction(a), ";")
        },
        addEnsureSafeAssignContext: function(a) {
            this.current().body.push(this.ensureSafeAssignContext(a), ";")
        },
        ensureSafeObject: function(a) {
            return "ensureSafeObject(" + a + ",text)"
        },
        ensureSafeMemberName: function(a) {
            return "ensureSafeMemberName(" + a + ",text)"
        },
        ensureSafeFunction: function(a) {
            return "ensureSafeFunction(" + a + ",text)"
        },
        getStringValue: function(a) {
            this.assign(a, "getStringValue(" + a + ",text)")
        },
        ensureSafeAssignContext: function(a) {
            return "ensureSafeAssignContext(" + a + ",text)"
        },
        lazyRecurse: function(a, b, c, d, e, f) {
            var g = this;
            return function() {
                g.recurse(a, b, c, d, e, f)
            }
        },
        lazyAssign: function(a, b) {
            var c = this;
            return function() {
                c.assign(a, b)
            }
        },
        stringEscapeRegex: /[^ a-zA-Z0-9]/g,
        stringEscapeFn: function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        },
        escape: function(a) {
            if (w(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (x(a)) return a.toString();
            if (!0 === a) return "true";
            if (!1 === a) return "false";
            if (null === a) return "null";
            if ("undefined" == typeof a) return "undefined";
            throw ge("esc")
        },
        nextId: function(a, b) {
            var c = "v" + this.state.nextId++;
            return a || this.current().vars.push(c + (b ? "=" + b : "")), c
        },
        current: function() {
            return this.state[this.state.computing]
        }
    }, Ob.prototype = {
        compile: function(a, b) {
            var c = this,
                d = this.astBuilder.ast(a);
            this.expression = a, this.expensiveChecks = b, Ib(d, c.$filter);
            var e, g;
            (e = Lb(d)) && (g = this.recurse(e)), e = Jb(d.body);
            var h;
            e && (h = [], f(e, function(a, b) {
                var d = c.recurse(a);
                a.input = d, h.push(d), a.watchId = b
            }));
            var i = [];
            return f(d.body, function(a) {
                i.push(c.recurse(a.expression))
            }), e = 0 === d.body.length ? function() {} : 1 === d.body.length ? i[0] : function(a, b) {
                var c;
                return f(i, function(d) {
                    c = d(a, b)
                }), c
            }, g && (e.assign = function(a, b, c) {
                return g(a, c, b)
            }), h && (e.inputs = h), e.literal = Mb(d), e.constant = d.constant, e
        },
        recurse: function(a, b, d) {
            var e, g, h, i = this;
            if (a.input) return this.inputs(a.input, a.watchId);
            switch (a.type) {
                case ne.Literal:
                    return this.value(a.value, b);
                case ne.UnaryExpression:
                    return g = this.recurse(a.argument), this["unary" + a.operator](g, b);
                case ne.BinaryExpression:
                    return e = this.recurse(a.left), g = this.recurse(a.right), this["binary" + a.operator](e, g, b);
                case ne.LogicalExpression:
                    return e = this.recurse(a.left), g = this.recurse(a.right), this["binary" + a.operator](e, g, b);
                case ne.ConditionalExpression:
                    return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);
                case ne.Identifier:
                    return Bb(a.name, i.expression), i.identifier(a.name, i.expensiveChecks || Pb(a.name), b, d, i.expression);
                case ne.MemberExpression:
                    return e = this.recurse(a.object, !1, !!d), a.computed || (Bb(a.property.name, i.expression), g = a.property.name), a.computed && (g = this.recurse(a.property)), a.computed ? this.computedMember(e, g, b, d, i.expression) : this.nonComputedMember(e, g, i.expensiveChecks, b, d, i.expression);
                case ne.CallExpression:
                    return h = [], f(a.arguments, function(a) {
                        h.push(i.recurse(a))
                    }), a.filter && (g = this.$filter(a.callee.name)), a.filter || (g = this.recurse(a.callee, !0)), a.filter ? function(a, d, e, f) {
                        for (var i = [], j = 0; j < h.length; ++j) i.push(h[j](a, d, e, f));
                        return a = g.apply(c, i, f), b ? {
                            context: c,
                            name: c,
                            value: a
                        } : a
                    } : function(a, c, d, e) {
                        var f, j = g(a, c, d, e);
                        if (null != j.value) {
                            Db(j.context, i.expression), Eb(j.value, i.expression), f = [];
                            for (var k = 0; k < h.length; ++k) f.push(Db(h[k](a, c, d, e), i.expression));
                            f = Db(j.value.apply(j.context, f), i.expression)
                        }
                        return b ? {
                            value: f
                        } : f
                    };
                case ne.AssignmentExpression:
                    return e = this.recurse(a.left, !0, 1), g = this.recurse(a.right),
                        function(a, c, d, f) {
                            var h = e(a, c, d, f);
                            return a = g(a, c, d, f), Db(h.value, i.expression), Fb(h.context), h.context[h.name] = a, b ? {
                                value: a
                            } : a
                        };
                case ne.ArrayExpression:
                    return h = [], f(a.elements, function(a) {
                            h.push(i.recurse(a))
                        }),
                        function(a, c, d, e) {
                            for (var f = [], g = 0; g < h.length; ++g) f.push(h[g](a, c, d, e));
                            return b ? {
                                value: f
                            } : f
                        };
                case ne.ObjectExpression:
                    return h = [], f(a.properties, function(a) {
                            h.push({
                                key: a.key.type === ne.Identifier ? a.key.name : "" + a.key.value,
                                value: i.recurse(a.value)
                            })
                        }),
                        function(a, c, d, e) {
                            for (var f = {}, g = 0; g < h.length; ++g) f[h[g].key] = h[g].value(a, c, d, e);
                            return b ? {
                                value: f
                            } : f
                        };
                case ne.ThisExpression:
                    return function(a) {
                        return b ? {
                            value: a
                        } : a
                    };
                case ne.NGValueParameter:
                    return function(a, c, d, e) {
                        return b ? {
                            value: d
                        } : d
                    }
            }
        },
        "unary+": function(a, b) {
            return function(c, d, e, f) {
                return c = a(c, d, e, f), c = t(c) ? +c : 0, b ? {
                    value: c
                } : c
            }
        },
        "unary-": function(a, b) {
            return function(c, d, e, f) {
                return c = a(c, d, e, f), c = t(c) ? -c : 0, b ? {
                    value: c
                } : c
            }
        },
        "unary!": function(a, b) {
            return function(c, d, e, f) {
                return c = !a(c, d, e, f), b ? {
                    value: c
                } : c
            }
        },
        "binary+": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g);
                return d = b(d, e, f, g), h = Hb(h, d), c ? {
                    value: h
                } : h
            }
        },
        "binary-": function(a, b, c) {
            return function(d, e, f, g) {
                var h = a(d, e, f, g);
                return d = b(d, e, f, g), h = (t(h) ? h : 0) - (t(d) ? d : 0), c ? {
                    value: h
                } : h
            }
        },
        "binary*": function(a, b, c) {
            return function(d, e, f, g) {
                return d = a(d, e, f, g) * b(d, e, f, g), c ? {
                    value: d
                } : d
            }
        },
        "binary/": function(a, b, c) {
            return function(d, e, f, g) {
                return d = a(d, e, f, g) / b(d, e, f, g), c ? {
                    value: d
                } : d
            }
        },
        "binary%": function(a, b, c) {
            return function(d, e, f, g) {
                return d = a(d, e, f, g) % b(d, e, f, g), c ? {
                    value: d
                } : d
            }
        },
        "binary===": function(a, b, c) {
            return function(d, e, f, g) {
                return d = a(d, e, f, g) === b(d, e, f, g), c ? {
                    value: d
                } : d
            }
        },
        "binary!==": function(a, b, c) {
            return function(d, e, f, g) {
                return d = a(d, e, f, g) !== b(d, e, f, g), c ? {
                    value: d
                } : d
            }
        },
        "binary==": function(a, b, c) {
            return function(d, e, f, g) {
                return d = a(d, e, f, g) == b(d, e, f, g), c ? {
                    value: d
                } : d
            }
        },
        "binary!=": function(a, b, c) {
            return function(d, e, f, g) {
                return d = a(d, e, f, g) != b(d, e, f, g), c ? {
                    value: d
                } : d
            }
        },
        "binary<": function(a, b, c) {
            return function(d, e, f, g) {
                return d = a(d, e, f, g) < b(d, e, f, g), c ? {
                    value: d
                } : d
            }
        },
        "binary>": function(a, b, c) {
            return function(d, e, f, g) {
                return d = a(d, e, f, g) > b(d, e, f, g), c ? {
                    value: d
                } : d
            }
        },
        "binary<=": function(a, b, c) {
            return function(d, e, f, g) {
                return d = a(d, e, f, g) <= b(d, e, f, g), c ? {
                    value: d
                } : d
            }
        },
        "binary>=": function(a, b, c) {
            return function(d, e, f, g) {
                return d = a(d, e, f, g) >= b(d, e, f, g), c ? {
                    value: d
                } : d
            }
        },
        "binary&&": function(a, b, c) {
            return function(d, e, f, g) {
                return d = a(d, e, f, g) && b(d, e, f, g), c ? {
                    value: d
                } : d
            }
        },
        "binary||": function(a, b, c) {
            return function(d, e, f, g) {
                return d = a(d, e, f, g) || b(d, e, f, g), c ? {
                    value: d
                } : d
            }
        },
        "ternary?:": function(a, b, c, d) {
            return function(e, f, g, h) {
                return e = a(e, f, g, h) ? b(e, f, g, h) : c(e, f, g, h), d ? {
                    value: e
                } : e
            }
        },
        value: function(a, b) {
            return function() {
                return b ? {
                    context: c,
                    name: c,
                    value: a
                } : a
            }
        },
        identifier: function(a, b, d, e, f) {
            return function(g, h, i, j) {
                return g = h && a in h ? h : g, e && 1 !== e && g && !g[a] && (g[a] = {}), h = g ? g[a] : c, b && Db(h, f), d ? {
                    context: g,
                    name: a,
                    value: h
                } : h
            }
        },
        computedMember: function(a, b, c, d, e) {
            return function(f, g, h, i) {
                var j, k, l = a(f, g, h, i);
                return null != l && (j = b(f, g, h, i), j = Cb(j), Bb(j, e), d && 1 !== d && l && !l[j] && (l[j] = {}), k = l[j], Db(k, e)), c ? {
                    context: l,
                    name: j,
                    value: k
                } : k
            }
        },
        nonComputedMember: function(a, b, d, e, f, g) {
            return function(h, i, j, k) {
                return h = a(h, i, j, k), f && 1 !== f && h && !h[b] && (h[b] = {}), i = null != h ? h[b] : c, (d || Pb(b)) && Db(i, g), e ? {
                    context: h,
                    name: b,
                    value: i
                } : i
            }
        },
        inputs: function(a, b) {
            return function(c, d, e, f) {
                return f ? f[b] : a(c, d, e)
            }
        }
    };
    var oe = function(a, b, c) {
        this.lexer = a, this.$filter = b, this.options = c, this.ast = new ne(this.lexer), this.astCompiler = c.csp ? new Ob(this.ast, b) : new Nb(this.ast, b)
    };
    oe.prototype = {
        constructor: oe,
        parse: function(a) {
            return this.astCompiler.compile(a, this.options.expensiveChecks)
        }
    };
    var pe = Object.prototype.valueOf,
        qe = d("$sce"),
        re = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        Rd = d("$compile"),
        se = b.createElement("a"),
        te = ec(a.location.href);
    hc.$inject = ["$document"], jc.$inject = ["$provide"];
    var ue = 22,
        ve = ".",
        we = "0";
    oc.$inject = ["$locale"], pc.$inject = ["$locale"];
    var xe = {
            yyyy: uc("FullYear", 4),
            yy: uc("FullYear", 2, 0, !0),
            y: uc("FullYear", 1),
            MMMM: vc("Month"),
            MMM: vc("Month", !0),
            MM: uc("Month", 2, 1),
            M: uc("Month", 1, 1),
            dd: uc("Date", 2),
            d: uc("Date", 1),
            HH: uc("Hours", 2),
            H: uc("Hours", 1),
            hh: uc("Hours", 2, -12),
            h: uc("Hours", 1, -12),
            mm: uc("Minutes", 2),
            m: uc("Minutes", 1),
            ss: uc("Seconds", 2),
            s: uc("Seconds", 1),
            sss: uc("Milliseconds", 3),
            EEEE: vc("Day"),
            EEE: vc("Day", !0),
            a: function(a, b) {
                return 12 > a.getHours() ? b.AMPMS[0] : b.AMPMS[1]
            },
            Z: function(a, b, c) {
                return a = -1 * c, a = (a >= 0 ? "+" : "") + (tc(Math[a > 0 ? "floor" : "ceil"](a / 60), 2) + tc(Math.abs(a % 60), 2))
            },
            ww: xc(2),
            w: xc(1),
            G: yc,
            GG: yc,
            GGG: yc,
            GGGG: function(a, b) {
                return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1]
            }
        },
        ye = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
        ze = /^\-?\d+$/;
    zc.$inject = ["$locale"];
    var Ae = q(Tc),
        Be = q(Vc);
    Cc.$inject = ["$parse"];
    var Ce = q({
            restrict: "E",
            compile: function(a, b) {
                return b.href || b.xlinkHref ? void 0 : function(a, b) {
                    if ("a" === b[0].nodeName.toLowerCase()) {
                        var c = "[object SVGAnimatedString]" === Zc.call(b.prop("href")) ? "xlink:href" : "href";
                        b.on("click", function(a) {
                            b.attr(c) || a.preventDefault()
                        })
                    }
                }
            }
        }),
        De = {};
    f(Bd, function(a, b) {
        function c(a, c, e) {
            a.$watch(e[d], function(a) {
                e.$set(b, !!a)
            })
        }
        if ("multiple" != a) {
            var d = Xa("ng-" + b),
                e = c;
            "checked" === a && (e = function(a, b, e) {
                e.ngModel !== e[d] && c(a, b, e)
            }), De[d] = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    link: e
                }
            }
        }
    }), f(Dd, function(a, b) {
        De[b] = function() {
            return {
                priority: 100,
                link: function(a, c, d) {
                    return "ngPattern" === b && "/" == d.ngPattern.charAt(0) && (c = d.ngPattern.match(Sc)) ? void d.$set("ngPattern", new RegExp(c[1], c[2])) : void a.$watch(d[b], function(a) {
                        d.$set(b, a)
                    })
                }
            }
        }
    }), f(["src", "srcset", "href"], function(a) {
        var b = Xa("ng-" + a);
        De[b] = function() {
            return {
                priority: 99,
                link: function(c, d, e) {
                    var f = a,
                        g = a;
                    "href" === a && "[object SVGAnimatedString]" === Zc.call(d.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null), e.$observe(b, function(b) {
                        b ? (e.$set(g, b), Oc && f && d.prop(f, e[g])) : "href" === a && e.$set(g, null)
                    })
                }
            }
        }
    });
    var Ee = {
        $addControl: o,
        $$renameControl: function(a, b) {
            a.$name = b
        },
        $removeControl: o,
        $setValidity: o,
        $setDirty: o,
        $setPristine: o,
        $setSubmitted: o
    };
    Ec.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var Fe = function(a) {
            return ["$timeout", "$parse", function(b, d) {
                function e(a) {
                    return "" === a ? d('this[""]').assign : d(a).assign || o
                }
                return {
                    name: "form",
                    restrict: a ? "EAC" : "E",
                    require: ["form", "^^?form"],
                    controller: Ec,
                    compile: function(d, f) {
                        d.addClass(mf).addClass(kf);
                        var g = f.name ? "name" : a && f.ngForm ? "ngForm" : !1;
                        return {
                            pre: function(a, d, f, h) {
                                var i = h[0];
                                if (!("action" in f)) {
                                    var j = function(b) {
                                        a.$apply(function() {
                                            i.$commitViewValue(), i.$setSubmitted()
                                        }), b.preventDefault()
                                    };
                                    d[0].addEventListener("submit", j, !1), d.on("$destroy", function() {
                                        b(function() {
                                            d[0].removeEventListener("submit", j, !1)
                                        }, 0, !1)
                                    })
                                }(h[1] || i.$$parentForm).$addControl(i);
                                var l = g ? e(i.$name) : o;
                                g && (l(a, i), f.$observe(g, function(b) {
                                    i.$name !== b && (l(a, c), i.$$parentForm.$$renameControl(i, b), (l = e(i.$name))(a, i))
                                })), d.on("$destroy", function() {
                                    i.$$parentForm.$removeControl(i), l(a, c), k(i, Ee)
                                })
                            }
                        }
                    }
                }
            }]
        },
        Ge = Fe(),
        He = Fe(!0),
        Ie = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
        Je = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
        Ke = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
        Le = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
        Me = /^(\d{4})-(\d{2})-(\d{2})$/,
        Ne = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Oe = /^(\d{4})-W(\d\d)$/,
        Pe = /^(\d{4})-(\d\d)$/,
        Qe = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Re = {
            text: function(a, b, c, d, e, f) {
                Gc(a, b, c, d, e, f), Fc(d)
            },
            date: Ic("date", Me, Hc(Me, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": Ic("datetimelocal", Ne, Hc(Ne, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: Ic("time", Qe, Hc(Qe, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: Ic("week", Oe, function(a, b) {
                if (y(a)) return a;
                if (w(a)) {
                    Oe.lastIndex = 0;
                    var c = Oe.exec(a);
                    if (c) {
                        var d = +c[1],
                            e = +c[2],
                            f = c = 0,
                            g = 0,
                            h = 0,
                            i = wc(d),
                            e = 7 * (e - 1);
                        return b && (c = b.getHours(), f = b.getMinutes(), g = b.getSeconds(), h = b.getMilliseconds()), new Date(d, 0, i.getDate() + e, c, f, g, h)
                    }
                }
                return NaN
            }, "yyyy-Www"),
            month: Ic("month", Pe, Hc(Pe, ["yyyy", "MM"]), "yyyy-MM"),
            number: function(a, b, d, e, f, g) {
                if (Jc(a, b, d, e), Gc(a, b, d, e, f, g), e.$$parserName = "number", e.$parsers.push(function(a) {
                        return e.$isEmpty(a) ? null : Le.test(a) ? parseFloat(a) : c
                    }), e.$formatters.push(function(a) {
                        if (!e.$isEmpty(a)) {
                            if (!x(a)) throw pf("numfmt", a);
                            a = a.toString()
                        }
                        return a
                    }), t(d.min) || d.ngMin) {
                    var h;
                    e.$validators.min = function(a) {
                        return e.$isEmpty(a) || s(h) || a >= h
                    }, d.$observe("min", function(a) {
                        t(a) && !x(a) && (a = parseFloat(a, 10)), h = x(a) && !isNaN(a) ? a : c, e.$validate()
                    })
                }
                if (t(d.max) || d.ngMax) {
                    var i;
                    e.$validators.max = function(a) {
                        return e.$isEmpty(a) || s(i) || i >= a
                    }, d.$observe("max", function(a) {
                        t(a) && !x(a) && (a = parseFloat(a, 10)), i = x(a) && !isNaN(a) ? a : c, e.$validate()
                    })
                }
            },
            url: function(a, b, c, d, e, f) {
                Gc(a, b, c, d, e, f), Fc(d), d.$$parserName = "url", d.$validators.url = function(a, b) {
                    var c = a || b;
                    return d.$isEmpty(c) || Je.test(c)
                }
            },
            email: function(a, b, c, d, e, f) {
                Gc(a, b, c, d, e, f), Fc(d), d.$$parserName = "email", d.$validators.email = function(a, b) {
                    var c = a || b;
                    return d.$isEmpty(c) || Ke.test(c)
                }
            },
            radio: function(a, b, c, d) {
                s(c.name) && b.attr("name", ++bd), b.on("click", function(a) {
                    b[0].checked && d.$setViewValue(c.value, a && a.type)
                }), d.$render = function() {
                    b[0].checked = c.value == d.$viewValue
                }, c.$observe("value", d.$render)
            },
            checkbox: function(a, b, c, d, e, f, g, h) {
                var i = Kc(h, a, "ngTrueValue", c.ngTrueValue, !0),
                    j = Kc(h, a, "ngFalseValue", c.ngFalseValue, !1);
                b.on("click", function(a) {
                    d.$setViewValue(b[0].checked, a && a.type)
                }), d.$render = function() {
                    b[0].checked = d.$viewValue
                }, d.$isEmpty = function(a) {
                    return !1 === a
                }, d.$formatters.push(function(a) {
                    return L(a, i)
                }), d.$parsers.push(function(a) {
                    return a ? i : j
                })
            },
            hidden: o,
            button: o,
            submit: o,
            reset: o,
            file: o
        },
        Se = ["$browser", "$sniffer", "$filter", "$parse", function(a, b, c, d) {
            return {
                restrict: "E",
                require: ["?ngModel"],
                link: {
                    pre: function(e, f, g, h) {
                        h[0] && (Re[Tc(g.type)] || Re.text)(e, f, g, h[0], b, a, c, d)
                    }
                }
            }
        }],
        Te = /^(true|false|\d+)$/,
        Ue = function() {
            return {
                restrict: "A",
                priority: 100,
                compile: function(a, b) {
                    return Te.test(b.ngValue) ? function(a, b, c) {
                        c.$set("value", a.$eval(c.ngValue))
                    } : function(a, b, c) {
                        a.$watch(c.ngValue, function(a) {
                            c.$set("value", a)
                        })
                    }
                }
            }
        },
        Ve = ["$compile", function(a) {
            return {
                restrict: "AC",
                compile: function(b) {
                    return a.$$addBindingClass(b),
                        function(b, c, d) {
                            a.$$addBindingInfo(c, d.ngBind), c = c[0], b.$watch(d.ngBind, function(a) {
                                c.textContent = s(a) ? "" : a
                            })
                        }
                }
            }
        }],
        We = ["$interpolate", "$compile", function(a, b) {
            return {
                compile: function(c) {
                    return b.$$addBindingClass(c),
                        function(c, d, e) {
                            c = a(d.attr(e.$attr.ngBindTemplate)), b.$$addBindingInfo(d, c.expressions), d = d[0], e.$observe("ngBindTemplate", function(a) {
                                d.textContent = s(a) ? "" : a
                            })
                        }
                }
            }
        }],
        Xe = ["$sce", "$parse", "$compile", function(a, b, c) {
            return {
                restrict: "A",
                compile: function(d, e) {
                    var f = b(e.ngBindHtml),
                        g = b(e.ngBindHtml, function(a) {
                            return (a || "").toString()
                        });
                    return c.$$addBindingClass(d),
                        function(b, d, e) {
                            c.$$addBindingInfo(d, e.ngBindHtml), b.$watch(g, function() {
                                d.html(a.getTrustedHtml(f(b)) || "")
                            })
                        }
                }
            }
        }],
        Ye = q({
            restrict: "A",
            require: "ngModel",
            link: function(a, b, c, d) {
                d.$viewChangeListeners.push(function() {
                    a.$eval(c.ngChange)
                })
            }
        }),
        Ze = Lc("", !0),
        $e = Lc("Odd", 0),
        _e = Lc("Even", 1),
        af = Dc({
            compile: function(a, b) {
                b.$set("ngCloak", c), a.removeClass("ng-cloak")
            }
        }),
        bf = [function() {
            return {
                restrict: "A",
                scope: !0,
                controller: "@",
                priority: 500
            }
        }],
        cf = {},
        df = {
            blur: !0,
            focus: !0
        };
    f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
        var b = Xa("ng-" + a);
        cf[b] = ["$parse", "$rootScope", function(c, d) {
            return {
                restrict: "A",
                compile: function(e, f) {
                    var g = c(f[b], null, !0);
                    return function(b, c) {
                        c.on(a, function(c) {
                            var e = function() {
                                g(b, {
                                    $event: c
                                })
                            };
                            df[a] && d.$$phase ? b.$evalAsync(e) : b.$apply(e)
                        })
                    }
                }
            }
        }]
    });
    var ef = ["$animate", function(a) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function(c, d, e, f, g) {
                    var h, i, j;
                    c.$watch(e.ngIf, function(c) {
                        c ? i || g(function(c, f) {
                            i = f, c[c.length++] = b.createComment(" end ngIf: " + e.ngIf + " "), h = {
                                clone: c
                            }, a.enter(c, d.parent(), d)
                        }) : (j && (j.remove(), j = null), i && (i.$destroy(), i = null), h && (j = ia(h.clone), a.leave(j).then(function() {
                            j = null
                        }), h = null))
                    })
                }
            }
        }],
        ff = ["$templateRequest", "$anchorScroll", "$animate", function(a, b, c) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: ad.noop,
                compile: function(d, e) {
                    var f = e.ngInclude || e.src,
                        g = e.onload || "",
                        h = e.autoscroll;
                    return function(d, e, i, j, k) {
                        var l, m, n, o = 0,
                            p = function() {
                                m && (m.remove(), m = null), l && (l.$destroy(), l = null), n && (c.leave(n).then(function() {
                                    m = null
                                }), m = n, n = null)
                            };
                        d.$watch(f, function(f) {
                            var i = function() {
                                    !t(h) || h && !d.$eval(h) || b()
                                },
                                m = ++o;
                            f ? (a(f, !0).then(function(a) {
                                if (!d.$$destroyed && m === o) {
                                    var b = d.$new();
                                    j.template = a, a = k(b, function(a) {
                                        p(), c.enter(a, null, e).then(i)
                                    }), l = b, n = a, l.$emit("$includeContentLoaded", f), d.$eval(g)
                                }
                            }, function() {
                                d.$$destroyed || m !== o || (p(), d.$emit("$includeContentError", f))
                            }), d.$emit("$includeContentRequested", f)) : (p(), j.template = null)
                        })
                    }
                }
            }
        }],
        gf = ["$compile", function(a) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function(c, d, e, f) {
                    /SVG/.test(d[0].toString()) ? (d.empty(), a(oa(f.template, b).childNodes)(c, function(a) {
                        d.append(a)
                    }, {
                        futureParentElement: d
                    })) : (d.html(f.template), a(d.contents())(c))
                }
            }
        }],
        hf = Dc({
            priority: 450,
            compile: function() {
                return {
                    pre: function(a, b, c) {
                        a.$eval(c.ngInit)
                    }
                }
            }
        }),
        jf = function() {
            return {
                restrict: "A",
                priority: 100,
                require: "ngModel",
                link: function(a, b, d, e) {
                    var g = b.attr(d.$attr.ngList) || ", ",
                        h = "false" !== d.ngTrim,
                        i = h ? fd(g) : g;
                    e.$parsers.push(function(a) {
                        if (!s(a)) {
                            var b = [];
                            return a && f(a.split(i), function(a) {
                                a && b.push(h ? fd(a) : a)
                            }), b
                        }
                    }), e.$formatters.push(function(a) {
                        return dd(a) ? a.join(g) : c
                    }), e.$isEmpty = function(a) {
                        return !a || !a.length
                    }
                }
            }
        },
        kf = "ng-valid",
        lf = "ng-invalid",
        mf = "ng-pristine",
        nf = "ng-dirty",
        of = "ng-pending",
        pf = d("ngModel"),
        qf = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(a, b, d, e, g, h, i, j, k, l) {
            this.$modelValue = this.$viewValue = Number.NaN, this.$$rawModelValue = c, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = c, this.$name = l(d.name || "", !1)(a), this.$$parentForm = Ee;
            var m, n = g(d.ngModel),
                p = n.assign,
                q = n,
                r = p,
                u = null,
                v = this;
            this.$$setOptions = function(a) {
                if ((v.$options = a) && a.getterSetter) {
                    var b = g(d.ngModel + "()"),
                        c = g(d.ngModel + "($$$p)");
                    q = function(a) {
                        var c = n(a);
                        return z(c) && (c = b(a)), c
                    }, r = function(a, b) {
                        z(n(a)) ? c(a, {
                            $$$p: v.$modelValue
                        }) : p(a, v.$modelValue)
                    }
                } else if (!n.assign) throw pf("nonassign", d.ngModel, T(e))
            }, this.$render = o, this.$isEmpty = function(a) {
                return s(a) || "" === a || null === a || a !== a
            };
            var w = 0;
            Mc({
                ctrl: this,
                $element: e,
                set: function(a, b) {
                    a[b] = !0
                },
                unset: function(a, b) {
                    delete a[b]
                },
                $animate: h
            }), this.$setPristine = function() {
                v.$dirty = !1, v.$pristine = !0, h.removeClass(e, nf), h.addClass(e, mf)
            }, this.$setDirty = function() {
                v.$dirty = !0, v.$pristine = !1, h.removeClass(e, mf), h.addClass(e, nf), v.$$parentForm.$setDirty()
            }, this.$setUntouched = function() {
                v.$touched = !1, v.$untouched = !0, h.setClass(e, "ng-untouched", "ng-touched")
            }, this.$setTouched = function() {
                v.$touched = !0, v.$untouched = !1, h.setClass(e, "ng-touched", "ng-untouched")
            }, this.$rollbackViewValue = function() {
                i.cancel(u), v.$viewValue = v.$$lastCommittedViewValue, v.$render()
            }, this.$validate = function() {
                if (!x(v.$modelValue) || !isNaN(v.$modelValue)) {
                    var a = v.$$rawModelValue,
                        b = v.$valid,
                        d = v.$modelValue,
                        e = v.$options && v.$options.allowInvalid;
                    v.$$runValidators(a, v.$$lastCommittedViewValue, function(f) {
                        e || b === f || (v.$modelValue = f ? a : c, v.$modelValue !== d && v.$$writeModelToScope())
                    })
                }
            }, this.$$runValidators = function(a, b, d) {
                function e() {
                    var c = !0;
                    return f(v.$validators, function(d, e) {
                        var f = d(a, b);
                        c = c && f, h(e, f)
                    }), c ? !0 : (f(v.$asyncValidators, function(a, b) {
                        h(b, null)
                    }), !1)
                }

                function g() {
                    var d = [],
                        e = !0;
                    f(v.$asyncValidators, function(f, g) {
                        var i = f(a, b);
                        if (!i || !z(i.then)) throw pf("nopromise", i);
                        h(g, c), d.push(i.then(function() {
                            h(g, !0)
                        }, function(a) {
                            e = !1, h(g, !1)
                        }))
                    }), d.length ? k.all(d).then(function() {
                        i(e)
                    }, o) : i(!0)
                }

                function h(a, b) {
                    j === w && v.$setValidity(a, b)
                }

                function i(a) {
                    j === w && d(a)
                }
                w++;
                var j = w;
                (function() {
                    var a = v.$$parserName || "parse";
                    return s(m) ? (h(a, null), !0) : (m || (f(v.$validators, function(a, b) {
                        h(b, null)
                    }), f(v.$asyncValidators, function(a, b) {
                        h(b, null)
                    })), h(a, m), m)
                })() && e() ? g() : i(!1)
            }, this.$commitViewValue = function() {
                var a = v.$viewValue;
                i.cancel(u), (v.$$lastCommittedViewValue !== a || "" === a && v.$$hasNativeValidators) && (v.$$lastCommittedViewValue = a, v.$pristine && this.$setDirty(), this.$$parseAndValidate())
            }, this.$$parseAndValidate = function() {
                var b = v.$$lastCommittedViewValue;
                if (m = s(b) ? c : !0)
                    for (var d = 0; d < v.$parsers.length; d++)
                        if (b = v.$parsers[d](b), s(b)) {
                            m = !1;
                            break
                        }
                x(v.$modelValue) && isNaN(v.$modelValue) && (v.$modelValue = q(a));
                var e = v.$modelValue,
                    f = v.$options && v.$options.allowInvalid;
                v.$$rawModelValue = b, f && (v.$modelValue = b, v.$modelValue !== e && v.$$writeModelToScope()), v.$$runValidators(b, v.$$lastCommittedViewValue, function(a) {
                    f || (v.$modelValue = a ? b : c, v.$modelValue !== e && v.$$writeModelToScope())
                })
            }, this.$$writeModelToScope = function() {
                r(a, v.$modelValue), f(v.$viewChangeListeners, function(a) {
                    try {
                        a()
                    } catch (c) {
                        b(c)
                    }
                })
            }, this.$setViewValue = function(a, b) {
                v.$viewValue = a, v.$options && !v.$options.updateOnDefault || v.$$debounceViewValueCommit(b)
            }, this.$$debounceViewValueCommit = function(b) {
                var c = 0,
                    d = v.$options;
                d && t(d.debounce) && (d = d.debounce, x(d) ? c = d : x(d[b]) ? c = d[b] : x(d["default"]) && (c = d["default"])), i.cancel(u), c ? u = i(function() {
                    v.$commitViewValue()
                }, c) : j.$$phase ? v.$commitViewValue() : a.$apply(function() {
                    v.$commitViewValue()
                })
            }, a.$watch(function() {
                var b = q(a);
                if (b !== v.$modelValue && (v.$modelValue === v.$modelValue || b === b)) {
                    v.$modelValue = v.$$rawModelValue = b, m = c;
                    for (var d = v.$formatters, e = d.length, f = b; e--;) f = d[e](f);
                    v.$viewValue !== f && (v.$viewValue = v.$$lastCommittedViewValue = f, v.$render(), v.$$runValidators(b, f, o))
                }
                return b
            })
        }],
        rf = ["$rootScope", function(a) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: qf,
                priority: 1,
                compile: function(b) {
                    return b.addClass(mf).addClass("ng-untouched").addClass(kf), {
                        pre: function(a, b, c, d) {
                            var e = d[0];
                            b = d[1] || e.$$parentForm, e.$$setOptions(d[2] && d[2].$options), b.$addControl(e), c.$observe("name", function(a) {
                                e.$name !== a && e.$$parentForm.$$renameControl(e, a)
                            }), a.$on("$destroy", function() {
                                e.$$parentForm.$removeControl(e)
                            })
                        },
                        post: function(b, c, d, e) {
                            var f = e[0];
                            f.$options && f.$options.updateOn && c.on(f.$options.updateOn, function(a) {
                                f.$$debounceViewValueCommit(a && a.type)
                            }), c.on("blur", function(c) {
                                f.$touched || (a.$$phase ? b.$evalAsync(f.$setTouched) : b.$apply(f.$setTouched))
                            })
                        }
                    }
                }
            }
        }],
        sf = /(\s+|^)default(\s+|$)/,
        tf = function() {
            return {
                restrict: "A",
                controller: ["$scope", "$attrs", function(a, b) {
                    var c = this;
                    this.$options = J(a.$eval(b.ngModelOptions)), t(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = fd(this.$options.updateOn.replace(sf, function() {
                        return c.$options.updateOnDefault = !0, " "
                    }))) : this.$options.updateOnDefault = !0
                }]
            }
        },
        uf = Dc({
            terminal: !0,
            priority: 1e3
        }),
        vf = d("ngOptions"),
        wf = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
        xf = ["$compile", "$parse", function(a, c) {
            function d(a, b, d) {
                function f(a, b, c, d, e) {
                    this.selectValue = a, this.viewValue = b, this.label = c, this.group = d, this.disabled = e
                }

                function g(a) {
                    var b;
                    if (!j && e(a)) b = a;
                    else {
                        b = [];
                        for (var c in a) a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c)
                    }
                    return b
                }
                var h = a.match(wf);
                if (!h) throw vf("iexp", a, T(b));
                var i = h[5] || h[7],
                    j = h[6];
                a = / as /.test(h[0]) && h[1];
                var k = h[9];
                b = c(h[2] ? h[1] : i);
                var l = a && c(a) || b,
                    m = k && c(k),
                    n = k ? function(a, b) {
                        return m(d, b)
                    } : function(a) {
                        return Ka(a)
                    },
                    o = function(a, b) {
                        return n(a, u(a, b))
                    },
                    p = c(h[2] || h[1]),
                    q = c(h[3] || ""),
                    r = c(h[4] || ""),
                    s = c(h[8]),
                    t = {},
                    u = j ? function(a, b) {
                        return t[j] = b, t[i] = a, t
                    } : function(a) {
                        return t[i] = a, t
                    };
                return {
                    trackBy: k,
                    getTrackByValue: o,
                    getWatchables: c(s, function(a) {
                        var b = [];
                        a = a || [];
                        for (var c = g(a), e = c.length, f = 0; e > f; f++) {
                            var i = a === c ? f : c[f],
                                j = u(a[i], i),
                                i = n(a[i], j);
                            b.push(i), (h[2] || h[1]) && (i = p(d, j), b.push(i)), h[4] && (j = r(d, j), b.push(j))
                        }
                        return b
                    }),
                    getOptions: function() {
                        for (var a = [], b = {}, c = s(d) || [], e = g(c), h = e.length, i = 0; h > i; i++) {
                            var j = c === e ? i : e[i],
                                m = u(c[j], j),
                                t = l(d, m),
                                j = n(t, m),
                                v = p(d, m),
                                w = q(d, m),
                                m = r(d, m),
                                t = new f(j, t, v, w, m);
                            a.push(t), b[j] = t
                        }
                        return {
                            items: a,
                            selectValueMap: b,
                            getOptionFromViewValue: function(a) {
                                return b[o(a)]
                            },
                            getViewValueFromOption: function(a) {
                                return k ? ad.copy(a.viewValue) : a.viewValue
                            }
                        }
                    }
                }
            }
            var g = b.createElement("option"),
                h = b.createElement("optgroup");
            return {
                restrict: "A",
                terminal: !0,
                require: ["select", "?ngModel"],
                link: {
                    pre: function(a, b, c, d) {
                        d[0].registerOption = o
                    },
                    post: function(b, c, e, i) {
                        function j(a, b) {
                            a.element = b, b.disabled = a.disabled, a.label !== b.label && (b.label = a.label, b.textContent = a.label), a.value !== b.value && (b.value = a.selectValue)
                        }

                        function k(a, b, c, d) {
                            return b && Tc(b.nodeName) === c ? c = b : (c = d.cloneNode(!1), b ? a.insertBefore(c, b) : a.appendChild(c)), c
                        }

                        function l(a) {
                            for (var b; a;) b = a.nextSibling, Da(a), a = b
                        }

                        function m(a) {
                            var b = p && p[0],
                                c = v && v[0];
                            if (b || c)
                                for (; a && (a === b || a === c || 8 === a.nodeType || "option" === H(a) && "" === a.value);) a = a.nextSibling;
                            return a
                        }

                        function n() {
                            var a = w && q.readValue();
                            w = x.getOptions();
                            var b = {},
                                d = c[0].firstChild;
                            if (u && c.prepend(p), d = m(d), w.items.forEach(function(a) {
                                    var e, f;
                                    a.group ? (e = b[a.group], e || (e = k(c[0], d, "optgroup", h), d = e.nextSibling, e.label = a.group, e = b[a.group] = {
                                        groupElement: e,
                                        currentOptionElement: e.firstChild
                                    }), f = k(e.groupElement, e.currentOptionElement, "option", g), j(a, f), e.currentOptionElement = f.nextSibling) : (f = k(c[0], d, "option", g), j(a, f), d = f.nextSibling)
                                }), Object.keys(b).forEach(function(a) {
                                    l(b[a].currentOptionElement)
                                }), l(d), o.$render(), !o.$isEmpty(a)) {
                                var e = q.readValue();
                                (x.trackBy || r ? L(a, e) : a === e) || (o.$setViewValue(e), o.$render())
                            }
                        }
                        var o = i[1];
                        if (o) {
                            var p, q = i[0],
                                r = e.multiple;
                            i = 0;
                            for (var s = c.children(), t = s.length; t > i; i++)
                                if ("" === s[i].value) {
                                    p = s.eq(i);
                                    break
                                }
                            var u = !!p,
                                v = Pc(g.cloneNode(!1));
                            v.val("?");
                            var w, x = d(e.ngOptions, c, b);
                            r ? (o.$isEmpty = function(a) {
                                return !a || 0 === a.length
                            }, q.writeValue = function(a) {
                                w.items.forEach(function(a) {
                                    a.element.selected = !1
                                }), a && a.forEach(function(a) {
                                    (a = w.getOptionFromViewValue(a)) && !a.disabled && (a.element.selected = !0)
                                })
                            }, q.readValue = function() {
                                var a = c.val() || [],
                                    b = [];
                                return f(a, function(a) {
                                    (a = w.selectValueMap[a]) && !a.disabled && b.push(w.getViewValueFromOption(a))
                                }), b
                            }, x.trackBy && b.$watchCollection(function() {
                                return dd(o.$viewValue) ? o.$viewValue.map(function(a) {
                                    return x.getTrackByValue(a)
                                }) : void 0
                            }, function() {
                                o.$render()
                            })) : (q.writeValue = function(a) {
                                var b = w.getOptionFromViewValue(a);
                                b && !b.disabled ? c[0].value !== b.selectValue && (v.remove(), u || p.remove(), c[0].value = b.selectValue, b.element.selected = !0, b.element.setAttribute("selected", "selected")) : null === a || u ? (v.remove(), u || c.prepend(p), c.val(""), p.prop("selected", !0), p.attr("selected", !0)) : (u || p.remove(), c.prepend(v), c.val("?"), v.prop("selected", !0), v.attr("selected", !0))
                            }, q.readValue = function() {
                                var a = w.selectValueMap[c.val()];
                                return a && !a.disabled ? (u || p.remove(), v.remove(), w.getViewValueFromOption(a)) : null
                            }, x.trackBy && b.$watch(function() {
                                return x.getTrackByValue(o.$viewValue)
                            }, function() {
                                o.$render()
                            })), u ? (p.remove(), a(p)(b), p.removeClass("ng-scope")) : p = Pc(g.cloneNode(!1)), n(), b.$watchCollection(x.getWatchables, n)
                        }
                    }
                }
            }
        }],
        yf = ["$locale", "$interpolate", "$log", function(a, b, c) {
            var d = /{}/g,
                e = /^when(Minus)?(.+)$/;
            return {
                link: function(g, h, i) {
                    function j(a) {
                        h.text(a || "")
                    }
                    var k, l = i.count,
                        m = i.$attr.when && h.attr(i.$attr.when),
                        n = i.offset || 0,
                        p = g.$eval(m) || {},
                        q = {},
                        r = b.startSymbol(),
                        t = b.endSymbol(),
                        u = r + l + "-" + n + t,
                        v = ad.noop;
                    f(i, function(a, b) {
                        var c = e.exec(b);
                        c && (c = (c[1] ? "-" : "") + Tc(c[2]), p[c] = h.attr(i.$attr[b]))
                    }), f(p, function(a, c) {
                        q[c] = b(a.replace(d, u))
                    }), g.$watch(l, function(b) {
                        var d = parseFloat(b),
                            e = isNaN(d);
                        e || d in p || (d = a.pluralCat(d - n)), d === k || e && x(k) && isNaN(k) || (v(), e = q[d], s(e) ? (null != b && c.debug("ngPluralize: no rule defined for '" + d + "' in " + m), v = o, j()) : v = g.$watch(e, j), k = d)
                    })
                }
            }
        }],
        zf = ["$parse", "$animate", function(a, g) {
            var h = d("ngRepeat"),
                i = function(a, b, c, d, e, f, g) {
                    a[c] = d, e && (a[e] = f), a.$index = b, a.$first = 0 === b, a.$last = b === g - 1, a.$middle = !(a.$first || a.$last), a.$odd = !(a.$even = 0 === (1 & b))
                };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                compile: function(d, j) {
                    var k = j.ngRepeat,
                        l = b.createComment(" end ngRepeat: " + k + " "),
                        m = k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!m) throw h("iexp", k);
                    var n = m[1],
                        o = m[2],
                        p = m[3],
                        q = m[4],
                        m = n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                    if (!m) throw h("iidexp", n);
                    var r = m[3] || m[1],
                        s = m[2];
                    if (p && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p))) throw h("badident", p);
                    var t, u, v, w, x = {
                        $id: Ka
                    };
                    return q ? t = a(q) : (v = function(a, b) {
                            return Ka(b)
                        }, w = function(a) {
                            return a
                        }),
                        function(a, b, d, j, m) {
                            t && (u = function(b, c, d) {
                                return s && (x[s] = b), x[r] = c, x.$index = d, t(a, x)
                            });
                            var n = ja();
                            a.$watchCollection(o, function(d) {
                                var j, o, q, t, x, y, z, A, B, C, D = b[0],
                                    E = ja();
                                if (p && (a[p] = d), e(d)) A = d, o = u || v;
                                else
                                    for (C in o = u || w, A = [], d) Uc.call(d, C) && "$" !== C.charAt(0) && A.push(C);
                                for (t = A.length, C = Array(t), j = 0; t > j; j++)
                                    if (x = d === A ? j : A[j], y = d[x], z = o(x, y, j), n[z]) B = n[z], delete n[z], E[z] = B, C[j] = B;
                                    else {
                                        if (E[z]) throw f(C, function(a) {
                                            a && a.scope && (n[a.id] = a)
                                        }), h("dupes", k, z, y);
                                        C[j] = {
                                            id: z,
                                            scope: c,
                                            clone: c
                                        }, E[z] = !0
                                    }
                                for (q in n) {
                                    if (B = n[q], z = ia(B.clone), g.leave(z), z[0].parentNode)
                                        for (j = 0, o = z.length; o > j; j++) z[j].$$NG_REMOVED = !0;
                                    B.scope.$destroy()
                                }
                                for (j = 0; t > j; j++)
                                    if (x = d === A ? j : A[j], y = d[x], B = C[j], B.scope) {
                                        q = D;
                                        do q = q.nextSibling; while (q && q.$$NG_REMOVED);
                                        B.clone[0] != q && g.move(ia(B.clone), null, Pc(D)), D = B.clone[B.clone.length - 1], i(B.scope, j, r, y, s, x, t)
                                    } else m(function(a, b) {
                                        B.scope = b;
                                        var c = l.cloneNode(!1);
                                        a[a.length++] = c, g.enter(a, null, Pc(D)), D = c, B.clone = a, E[B.id] = B, i(B.scope, j, r, y, s, x, t)
                                    });
                                n = E
                            })
                        }
                }
            }
        }],
        Af = ["$animate", function(a) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(b, c, d) {
                    b.$watch(d.ngShow, function(b) {
                        a[b ? "removeClass" : "addClass"](c, "ng-hide", {
                            tempClasses: "ng-hide-animate"
                        })
                    })
                }
            }
        }],
        Bf = ["$animate", function(a) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(b, c, d) {
                    b.$watch(d.ngHide, function(b) {
                        a[b ? "addClass" : "removeClass"](c, "ng-hide", {
                            tempClasses: "ng-hide-animate"
                        })
                    })
                }
            }
        }],
        Cf = Dc(function(a, b, c) {
            a.$watch(c.ngStyle, function(a, c) {
                c && a !== c && f(c, function(a, c) {
                    b.css(c, "")
                }), a && b.css(a)
            }, !0)
        }),
        Df = ["$animate", function(a) {
            return {
                require: "ngSwitch",
                controller: ["$scope", function() {
                    this.cases = {}
                }],
                link: function(c, d, e, g) {
                    var h = [],
                        i = [],
                        j = [],
                        k = [],
                        l = function(a, b) {
                            return function() {
                                a.splice(b, 1)
                            }
                        };
                    c.$watch(e.ngSwitch || e.on, function(c) {
                        var d, e;
                        for (d = 0, e = j.length; e > d; ++d) a.cancel(j[d]);
                        for (d = j.length = 0, e = k.length; e > d; ++d) {
                            var m = ia(i[d].clone);
                            k[d].$destroy(), (j[d] = a.leave(m)).then(l(j, d))
                        }
                        i.length = 0, k.length = 0, (h = g.cases["!" + c] || g.cases["?"]) && f(h, function(c) {
                            c.transclude(function(d, e) {
                                k.push(e);
                                var f = c.element;
                                d[d.length++] = b.createComment(" end ngSwitchWhen: "), i.push({
                                    clone: d
                                }), a.enter(d, f.parent(), f)
                            })
                        })
                    })
                }
            }
        }],
        Ef = Dc({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(a, b, c, d, e) {
                d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || [], d.cases["!" + c.ngSwitchWhen].push({
                    transclude: e,
                    element: b
                })
            }
        }),
        Ff = Dc({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(a, b, c, d, e) {
                d.cases["?"] = d.cases["?"] || [], d.cases["?"].push({
                    transclude: e,
                    element: b
                })
            }
        }),
        Gf = Dc({
            restrict: "EAC",
            link: function(a, b, c, e, f) {
                if (!f) throw d("ngTransclude")("orphan", T(b));
                f(function(a) {
                    b.empty(), b.append(a)
                })
            }
        }),
        Hf = ["$templateCache", function(a) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function(b, c) {
                    "text/ng-template" == c.type && a.put(c.id, b[0].text)
                }
            }
        }],
        If = {
            $setViewValue: o,
            $render: o
        },
        Jf = ["$element", "$scope", "$attrs", function(a, d, e) {
            var f = this,
                g = new La;
            f.ngModelCtrl = If, f.unknownOption = Pc(b.createElement("option")), f.renderUnknownOption = function(b) {
                b = "? " + Ka(b) + " ?", f.unknownOption.val(b), a.prepend(f.unknownOption), a.val(b)
            }, d.$on("$destroy", function() {
                f.renderUnknownOption = o
            }), f.removeUnknownOption = function() {
                f.unknownOption.parent() && f.unknownOption.remove()
            }, f.readValue = function() {
                return f.removeUnknownOption(), a.val()
            }, f.writeValue = function(b) {
                f.hasOption(b) ? (f.removeUnknownOption(), a.val(b), "" === b && f.emptyOption.prop("selected", !0)) : null == b && f.emptyOption ? (f.removeUnknownOption(), a.val("")) : f.renderUnknownOption(b)
            }, f.addOption = function(a, b) {
                ga(a, '"option value"'), "" === a && (f.emptyOption = b);
                var c = g.get(a) || 0;
                g.put(a, c + 1), f.ngModelCtrl.$render(), b[0].hasAttribute("selected") && (b[0].selected = !0)
            }, f.removeOption = function(a) {
                var b = g.get(a);
                b && (1 === b ? (g.remove(a), "" === a && (f.emptyOption = c)) : g.put(a, b - 1))
            }, f.hasOption = function(a) {
                return !!g.get(a)
            }, f.registerOption = function(a, b, c, d, e) {
                if (d) {
                    var g;
                    c.$observe("value", function(a) {
                        t(g) && f.removeOption(g), g = a, f.addOption(a, b)
                    })
                } else e ? a.$watch(e, function(a, d) {
                    c.$set("value", a), d !== a && f.removeOption(d), f.addOption(a, b)
                }) : f.addOption(c.value, b);
                b.on("$destroy", function() {
                    f.removeOption(c.value), f.ngModelCtrl.$render()
                })
            }
        }],
        Kf = function() {
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: Jf,
                priority: 1,
                link: {
                    pre: function(a, b, c, d) {
                        var e = d[1];
                        if (e) {
                            var g = d[0];
                            if (g.ngModelCtrl = e, b.on("change", function() {
                                    a.$apply(function() {
                                        e.$setViewValue(g.readValue())
                                    })
                                }), c.multiple) {
                                g.readValue = function() {
                                    var a = [];
                                    return f(b.find("option"), function(b) {
                                        b.selected && a.push(b.value)
                                    }), a
                                }, g.writeValue = function(a) {
                                    var c = new La(a);
                                    f(b.find("option"), function(a) {
                                        a.selected = t(c.get(a.value))
                                    })
                                };
                                var h, i = NaN;
                                a.$watch(function() {
                                    i !== e.$viewValue || L(h, e.$viewValue) || (h = K(e.$viewValue), e.$render()), i = e.$viewValue
                                }), e.$isEmpty = function(a) {
                                    return !a || 0 === a.length
                                }
                            }
                        }
                    },
                    post: function(a, b, c, d) {
                        var e = d[1];
                        if (e) {
                            var f = d[0];
                            e.$render = function() {
                                f.writeValue(e.$viewValue)
                            }
                        }
                    }
                }
            }
        },
        Lf = ["$interpolate", function(a) {
            return {
                restrict: "E",
                priority: 100,
                compile: function(b, c) {
                    if (t(c.value)) var d = a(c.value, !0);
                    else {
                        var e = a(b.text(), !0);
                        e || c.$set("value", b.text())
                    }
                    return function(a, b, c) {
                        var f = b.parent();
                        (f = f.data("$selectController") || f.parent().data("$selectController")) && f.registerOption(a, b, c, d, e)
                    }
                }
            }
        }],
        Mf = q({
            restrict: "E",
            terminal: !1
        }),
        Nf = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, b, c, d) {
                    d && (c.required = !0, d.$validators.required = function(a, b) {
                        return !c.required || !d.$isEmpty(b)
                    }, c.$observe("required", function() {
                        d.$validate()
                    }))
                }
            }
        },
        Of = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, b, e, f) {
                    if (f) {
                        var g, h = e.ngPattern || e.pattern;
                        e.$observe("pattern", function(a) {
                            if (w(a) && 0 < a.length && (a = new RegExp("^" + a + "$")), a && !a.test) throw d("ngPattern")("noregexp", h, a, T(b));
                            g = a || c, f.$validate()
                        }), f.$validators.pattern = function(a, b) {
                            return f.$isEmpty(b) || s(g) || g.test(b)
                        }
                    }
                }
            }
        },
        Pf = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, b, c, d) {
                    if (d) {
                        var e = -1;
                        c.$observe("maxlength", function(a) {
                            a = m(a), e = isNaN(a) ? -1 : a, d.$validate()
                        }), d.$validators.maxlength = function(a, b) {
                            return 0 > e || d.$isEmpty(b) || b.length <= e
                        }
                    }
                }
            }
        },
        Qf = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, b, c, d) {
                    if (d) {
                        var e = 0;
                        c.$observe("minlength", function(a) {
                            e = m(a) || 0, d.$validate()
                        }), d.$validators.minlength = function(a, b) {
                            return d.$isEmpty(b) || b.length >= e
                        }
                    }
                }
            }
        };
    a.angular.bootstrap ? void 0 : (da(), la(ad), ad.module("ngLocale", [], ["$provide", function(a) {
        function b(a) {
            a += "";
            var b = a.indexOf(".");
            return -1 == b ? 0 : a.length - b - 1
        }
        a.value("$locale", {
            DATETIME_FORMATS: {
                AMPMS: ["AM", "PM"],
                DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                ERANAMES: ["Before Christ", "Anno Domini"],
                ERAS: ["BC", "AD"],
                FIRSTDAYOFWEEK: 6,
                MONTH: "January February March April May June July August September October November December".split(" "),
                SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                STANDALONEMONTH: "January February March April May June July August September October November December".split(" "),
                WEEKENDRANGE: [5, 6],
                fullDate: "EEEE, MMMM d, y",
                longDate: "MMMM d, y",
                medium: "MMM d, y h:mm:ss a",
                mediumDate: "MMM d, y",
                mediumTime: "h:mm:ss a",
                "short": "M/d/yy h:mm a",
                shortDate: "M/d/yy",
                shortTime: "h:mm a"
            },
            NUMBER_FORMATS: {
                CURRENCY_SYM: "$",
                DECIMAL_SEP: ".",
                GROUP_SEP: ",",
                PATTERNS: [{
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 3,
                    minFrac: 0,
                    minInt: 1,
                    negPre: "-",
                    negSuf: "",
                    posPre: "",
                    posSuf: ""
                }, {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 2,
                    minFrac: 2,
                    minInt: 1,
                    negPre: "-¤",
                    negSuf: "",
                    posPre: "¤",
                    posSuf: ""
                }]
            },
            id: "en-us",
            pluralCat: function(a, d) {
                var e = 0 | a,
                    f = d;
                return c === f && (f = Math.min(b(a), 3)), Math.pow(10, f), 1 == e && 0 == f ? "one" : "other"
            }
        })
    }]), Pc(b).ready(function() {
        $(b, _)
    }))
}(window, document), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'),
    function(a, b, c) {
        "use strict";

        function d(a, c, d) {
            return {
                restrict: "ECA",
                terminal: !0,
                priority: 400,
                transclude: "element",
                link: function(e, f, g, h, i) {
                    function j() {
                        n && (d.cancel(n), n = null), l && (l.$destroy(), l = null), m && (n = d.leave(m), n.then(function() {
                            n = null
                        }), m = null)
                    }

                    function k() {
                        var g = a.current && a.current.locals;
                        if (b.isDefined(g && g.$template)) {
                            var g = e.$new(),
                                h = a.current;
                            m = i(g, function(a) {
                                d.enter(a, null, m || f).then(function() {
                                    !b.isDefined(o) || o && !e.$eval(o) || c()
                                }), j()
                            }), l = h.scope = g, l.$emit("$viewContentLoaded"), l.$eval(p)
                        } else j()
                    }
                    var l, m, n, o = g.autoscroll,
                        p = g.onload || "";
                    e.$on("$routeChangeSuccess", k), k()
                }
            }
        }

        function e(a, b, c) {
            return {
                restrict: "ECA",
                priority: -400,
                link: function(d, e) {
                    var f = c.current,
                        g = f.locals;
                    e.html(g.$template);
                    var h = a(e.contents());
                    f.controller && (g.$scope = d, g = b(f.controller, g), f.controllerAs && (d[f.controllerAs] = g), e.data("$ngControllerController", g), e.children().data("$ngControllerController", g)), h(d)
                }
            }
        }
        a = b.module("ngRoute", ["ng"]).provider("$route", function() {
            function a(a, c) {
                return b.extend(Object.create(a), c)
            }

            function c(a, b) {
                var c = b.caseInsensitiveMatch,
                    d = {
                        originalPath: a,
                        regexp: a
                    },
                    e = d.keys = [];
                return a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function(a, b, c, d) {
                    return a = "?" === d ? d : null, d = "*" === d ? d : null, e.push({
                        name: c,
                        optional: !!a
                    }), b = b || "", "" + (a ? "" : b) + "(?:" + (a ? b : "") + (d && "(.+?)" || "([^/]+)") + (a || "") + ")" + (a || "")
                }).replace(/([\/$\*])/g, "\\$1"), d.regexp = new RegExp("^" + a + "$", c ? "i" : ""), d
            }
            var d = {};
            this.when = function(a, e) {
                var f = b.copy(e);
                if (b.isUndefined(f.reloadOnSearch) && (f.reloadOnSearch = !0), b.isUndefined(f.caseInsensitiveMatch) && (f.caseInsensitiveMatch = this.caseInsensitiveMatch), d[a] = b.extend(f, a && c(a, f)), a) {
                    var g = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
                    d[g] = b.extend({
                        redirectTo: a
                    }, c(g, f))
                }
                return this
            }, this.caseInsensitiveMatch = !1, this.otherwise = function(a) {
                return "string" == typeof a && (a = {
                    redirectTo: a
                }), this.when(null, a), this
            }, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", function(c, e, g, h, i, j, k) {
                function l(a) {
                    var d = s.current;
                    (q = (p = n()) && d && p.$$route === d.$$route && b.equals(p.pathParams, d.pathParams) && !p.reloadOnSearch && !r) || !d && !p || c.$broadcast("$routeChangeStart", p, d).defaultPrevented && a && a.preventDefault()
                }

                function m() {
                    var a = s.current,
                        d = p;
                    q ? (a.params = d.params, b.copy(a.params, g), c.$broadcast("$routeUpdate", a)) : (d || a) && (r = !1, (s.current = d) && d.redirectTo && (b.isString(d.redirectTo) ? e.path(o(d.redirectTo, d.params)).search(d.params).replace() : e.url(d.redirectTo(d.pathParams, e.path(), e.search())).replace()), h.when(d).then(function() {
                        if (d) {
                            var a, c, e = b.extend({}, d.resolve);
                            return b.forEach(e, function(a, c) {
                                e[c] = b.isString(a) ? i.get(a) : i.invoke(a, null, null, c)
                            }), b.isDefined(a = d.template) ? b.isFunction(a) && (a = a(d.params)) : b.isDefined(c = d.templateUrl) && (b.isFunction(c) && (c = c(d.params)), b.isDefined(c) && (d.loadedTemplateUrl = k.valueOf(c), a = j(c))), b.isDefined(a) && (e.$template = a), h.all(e)
                        }
                    }).then(function(e) {
                        d == s.current && (d && (d.locals = e, b.copy(d.params, g)), c.$broadcast("$routeChangeSuccess", d, a))
                    }, function(b) {
                        d == s.current && c.$broadcast("$routeChangeError", d, a, b)
                    }))
                }

                function n() {
                    var c, f;
                    return b.forEach(d, function(d, g) {
                        var h;
                        if (h = !f) {
                            var i = e.path();
                            h = d.keys;
                            var j = {};
                            if (d.regexp)
                                if (i = d.regexp.exec(i)) {
                                    for (var k = 1, l = i.length; l > k; ++k) {
                                        var m = h[k - 1],
                                            n = i[k];
                                        m && n && (j[m.name] = n)
                                    }
                                    h = j
                                } else h = null;
                            else h = null;
                            h = c = h
                        }
                        h && (f = a(d, {
                            params: b.extend({}, e.search(), c),
                            pathParams: c
                        }), f.$$route = d)
                    }), f || d[null] && a(d[null], {
                        params: {},
                        pathParams: {}
                    })
                }

                function o(a, c) {
                    var d = [];
                    return b.forEach((a || "").split(":"), function(a, b) {
                        if (0 === b) d.push(a);
                        else {
                            var e = a.match(/(\w+)(?:[?*])?(.*)/),
                                f = e[1];
                            d.push(c[f]), d.push(e[2] || ""), delete c[f]
                        }
                    }), d.join("")
                }
                var p, q, r = !1,
                    s = {
                        routes: d,
                        reload: function() {
                            r = !0, c.$evalAsync(function() {
                                l(), m()
                            })
                        },
                        updateParams: function(a) {
                            if (!this.current || !this.current.$$route) throw f("norout");
                            a = b.extend({}, this.current.params, a), e.path(o(this.current.$$route.originalPath, a)), e.search(a)
                        }
                    };
                return c.$on("$locationChangeStart", l), c.$on("$locationChangeSuccess", m), s
            }]
        });
        var f = b.$$minErr("ngRoute");
        a.provider("$routeParams", function() {
            this.$get = function() {
                return {}
            }
        }), a.directive("ngView", d), a.directive("ngView", e), d.$inject = ["$route", "$anchorScroll", "$animate"], e.$inject = ["$compile", "$controller", "$route"]
    }(window, window.angular),
    function(a, b, c) {
        "use strict";
        var d = "BUTTON A INPUT TEXTAREA SELECT DETAILS SUMMARY".split(" "),
            e = function(a, b) {
                return -1 !== b.indexOf(a[0].nodeName) ? !0 : void 0
            };
        b.module("ngAria", ["ng"]).provider("$aria", function() {
            function a(a, b, d, f) {
                return function(g, h, i) {
                    var j = i.$normalize(b);
                    !c[j] || e(h, d) || i[j] || g.$watch(i[a], function(a) {
                        a = f ? !a : !!a, h.attr(b, a)
                    })
                }
            }
            var c = {
                ariaHidden: !0,
                ariaChecked: !0,
                ariaDisabled: !0,
                ariaRequired: !0,
                ariaInvalid: !0,
                ariaMultiline: !0,
                ariaValue: !0,
                tabindex: !0,
                bindKeypress: !0,
                bindRoleForClick: !0
            };
            this.config = function(a) {
                c = b.extend(c, a)
            }, this.$get = function() {
                return {
                    config: function(a) {
                        return c[a]
                    },
                    $$watchExpr: a
                }
            }
        }).directive("ngShow", ["$aria", function(a) {
            return a.$$watchExpr("ngShow", "aria-hidden", [], !0)
        }]).directive("ngHide", ["$aria", function(a) {
            return a.$$watchExpr("ngHide", "aria-hidden", [], !1)
        }]).directive("ngModel", ["$aria", function(a) {
            function b(b, c, d) {
                return a.config(c) && !d.attr(b)
            }

            function c(a, b) {
                return !b.attr("role") && b.attr("type") === a && "INPUT" !== b[0].nodeName
            }

            function f(a, b) {
                var c = a.type,
                    d = a.role;
                return "checkbox" === (c || d) || "menuitemcheckbox" === d ? "checkbox" : "radio" === (c || d) || "menuitemradio" === d ? "radio" : "range" === c || "progressbar" === d || "slider" === d ? "range" : "textbox" === (c || d) || "TEXTAREA" === b[0].nodeName ? "multiline" : ""
            }
            return {
                restrict: "A",
                require: "?ngModel",
                priority: 200,
                compile: function(g, h) {
                    var i = f(h, g);
                    return {
                        pre: function(a, b, c, d) {
                            "checkbox" === i && "checkbox" !== c.type && (d.$isEmpty = function(a) {
                                return !1 === a
                            })
                        },
                        post: function(f, g, h, j) {
                            function k() {
                                return j.$modelValue
                            }

                            function l() {
                                return n ? (n = !1, function(a) {
                                    a = h.value == j.$viewValue, g.attr("aria-checked", a), g.attr("tabindex", 0 - !a)
                                }) : function(a) {
                                    g.attr("aria-checked", h.value == j.$viewValue)
                                }
                            }

                            function m() {
                                g.attr("aria-checked", !j.$isEmpty(j.$viewValue))
                            }
                            var n = b("tabindex", "tabindex", g) && !e(g, d);
                            switch (i) {
                                case "radio":
                                case "checkbox":
                                    c(i, g) && g.attr("role", i), b("aria-checked", "ariaChecked", g) && f.$watch(k, "radio" === i ? l() : m), n && g.attr("tabindex", 0);
                                    break;
                                case "range":
                                    if (c(i, g) && g.attr("role", "slider"), a.config("ariaValue")) {
                                        var o = !g.attr("aria-valuemin") && (h.hasOwnProperty("min") || h.hasOwnProperty("ngMin")),
                                            p = !g.attr("aria-valuemax") && (h.hasOwnProperty("max") || h.hasOwnProperty("ngMax")),
                                            q = !g.attr("aria-valuenow");
                                        o && h.$observe("min", function(a) {
                                            g.attr("aria-valuemin", a)
                                        }), p && h.$observe("max", function(a) {
                                            g.attr("aria-valuemax", a)
                                        }), q && f.$watch(k, function(a) {
                                            g.attr("aria-valuenow", a)
                                        })
                                    }
                                    n && g.attr("tabindex", 0);
                                    break;
                                case "multiline":
                                    b("aria-multiline", "ariaMultiline", g) && g.attr("aria-multiline", !0)
                            }
                            j.$validators.required && b("aria-required", "ariaRequired", g) && f.$watch(function() {
                                return j.$error.required
                            }, function(a) {
                                g.attr("aria-required", !!a)
                            }), b("aria-invalid", "ariaInvalid", g) && f.$watch(function() {
                                return j.$invalid
                            }, function(a) {
                                g.attr("aria-invalid", !!a)
                            })
                        }
                    }
                }
            }
        }]).directive("ngDisabled", ["$aria", function(a) {
            return a.$$watchExpr("ngDisabled", "aria-disabled", [])
        }]).directive("ngMessages", function() {
            return {
                restrict: "A",
                require: "?ngMessages",
                link: function(a, b, c, d) {
                    b.attr("aria-live") || b.attr("aria-live", "assertive")
                }
            }
        }).directive("ngClick", ["$aria", "$parse", function(a, b) {
            return {
                restrict: "A",
                compile: function(c, f) {
                    var g = b(f.ngClick, null, !0);
                    return function(b, c, f) {
                        e(c, d) || (a.config("bindRoleForClick") && !c.attr("role") && c.attr("role", "button"), a.config("tabindex") && !c.attr("tabindex") && c.attr("tabindex", 0), !a.config("bindKeypress") || f.ngKeypress) || c.on("keypress", function(a) {
                            function c() {
                                g(b, {
                                    $event: a
                                })
                            }
                            var d = a.which || a.keyCode;
                            32 !== d && 13 !== d || b.$apply(c)
                        })
                    }
                }
            }
        }]).directive("ngDblclick", ["$aria", function(a) {
            return function(b, c, f) {
                !a.config("tabindex") || c.attr("tabindex") || e(c, d) || c.attr("tabindex", 0)
            }
        }])
    }(window, window.angular),
    function(a, b, c) {
        "use strict";

        function d(a, b, c) {
            if (!a) throw X("areq", b || "?", c || "required");
            return a
        }

        function e(a, b) {
            return a || b ? a ? b ? (N(a) && (a = a.join(" ")), N(b) && (b = b.join(" ")), a + " " + b) : a : b : ""
        }

        function f(a) {
            var b = {};
            return a && (a.to || a.from) && (b.to = a.to, b.from = a.from), b
        }

        function g(a, b, c) {
            var d = "";
            return a = N(a) ? a : a && O(a) && a.length ? a.split(/\s+/) : [], M(a, function(a, e) {
                a && 0 < a.length && (d += e > 0 ? " " : "", d += c ? b + a : a + b)
            }), d
        }

        function h(a) {
            if (a instanceof L) switch (a.length) {
                case 0:
                    return [];
                case 1:
                    if (1 === a[0].nodeType) return a;
                    break;
                default:
                    return L(i(a))
            }
            return 1 === a.nodeType ? L(a) : void 0
        }

        function i(a) {
            if (!a[0]) return a;
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (1 == c.nodeType) return c
            }
        }

        function j(a, b, c) {
            M(b, function(b) {
                a.addClass(b, c)
            })
        }

        function k(a, b, c) {
            M(b, function(b) {
                a.removeClass(b, c)
            })
        }

        function l(a) {
            return function(b, c) {
                c.addClass && (j(a, b, c.addClass), c.addClass = null), c.removeClass && (k(a, b, c.removeClass), c.removeClass = null)
            }
        }

        function m(a) {
            if (a = a || {}, !a.$$prepared) {
                var b = a.domOperation || I;
                a.domOperation = function() {
                    a.$$domOperationFired = !0, b(), b = I
                }, a.$$prepared = !0
            }
            return a
        }

        function n(a, b) {
            o(a, b), p(a, b)
        }

        function o(a, b) {
            b.from && (a.css(b.from), b.from = null)
        }

        function p(a, b) {
            b.to && (a.css(b.to), b.to = null)
        }

        function q(a, b, c) {
            var d = (b.addClass || "") + " " + (c.addClass || ""),
                e = (b.removeClass || "") + " " + (c.removeClass || "");
            return a = r(a.attr("class"), d, e), c.preparationClasses && (b.preparationClasses = x(c.preparationClasses, b.preparationClasses), delete c.preparationClasses), d = b.domOperation !== I ? b.domOperation : null, K(b, c), d && (b.domOperation = d), b.addClass = a.addClass ? a.addClass : null, b.removeClass = a.removeClass ? a.removeClass : null, b
        }

        function r(a, b, c) {
            function d(a) {
                O(a) && (a = a.split(" "));
                var b = {};
                return M(a, function(a) {
                    a.length && (b[a] = !0)
                }), b
            }
            var e = {};
            a = d(a), b = d(b), M(b, function(a, b) {
                e[b] = 1
            }), c = d(c), M(c, function(a, b) {
                e[b] = 1 === e[b] ? null : -1
            });
            var f = {
                addClass: "",
                removeClass: ""
            };
            return M(e, function(b, c) {
                var d, e;
                1 === b ? (d = "addClass", e = !a[c]) : -1 === b && (d = "removeClass", e = a[c]), e && (f[d].length && (f[d] += " "), f[d] += c)
            }), f
        }

        function s(a) {
            return a instanceof b.element ? a[0] : a
        }

        function t(a, b, c) {
            var d = "";
            b && (d = g(b, "ng-", !0)), c.addClass && (d = x(d, g(c.addClass, "-add"))), c.removeClass && (d = x(d, g(c.removeClass, "-remove"))), d.length && (c.preparationClasses = d, a.addClass(d))
        }

        function u(a, b) {
            var c = b ? "-" + b + "s" : "";
            return w(a, [W, c]), [W, c]
        }

        function v(a, b) {
            var c = b ? "paused" : "",
                d = G + "PlayState";
            return w(a, [d, c]), [d, c]
        }

        function w(a, b) {
            a.style[b[0]] = b[1]
        }

        function x(a, b) {
            return a ? b ? a + " " + b : a : b
        }

        function y(a, b, c) {
            var d = Object.create(null),
                e = a.getComputedStyle(b) || {};
            return M(c, function(a, b) {
                var c = e[a];
                if (c) {
                    var f = c.charAt(0);
                    ("-" === f || "+" === f || f >= 0) && (c = z(c)), 0 === c && (c = null), d[b] = c
                }
            }), d
        }

        function z(a) {
            var b = 0;
            return a = a.split(/\s*,\s*/), M(a, function(a) {
                "s" == a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1)), a = parseFloat(a) || 0, b = b ? Math.max(a, b) : a
            }), b
        }

        function A(a) {
            return 0 === a || null != a
        }

        function B(a, b) {
            var c = E,
                d = a + "s";
            return b ? c += "Duration" : d += " linear all", [c, d]
        }

        function C() {
            var a = Object.create(null);
            return {
                flush: function() {
                    a = Object.create(null)
                },
                count: function(b) {
                    return (b = a[b]) ? b.total : 0
                },
                get: function(b) {
                    return (b = a[b]) && b.value
                },
                put: function(b, c) {
                    a[b] ? a[b].total++ : a[b] = {
                        total: 1,
                        value: c
                    }
                }
            }
        }

        function D(a, b, c) {
            M(c, function(c) {
                a[c] = R(a[c]) ? a[c] : b.style.getPropertyValue(c)
            })
        }
        var E, F, G, H, I = b.noop,
            J = b.copy,
            K = b.extend,
            L = b.element,
            M = b.forEach,
            N = b.isArray,
            O = b.isString,
            P = b.isObject,
            Q = b.isUndefined,
            R = b.isDefined,
            S = b.isFunction,
            T = b.isElement;
        Q(a.ontransitionend) && R(a.onwebkittransitionend) ? (E = "WebkitTransition", F = "webkitTransitionEnd transitionend") : (E = "transition", F = "transitionend"), Q(a.onanimationend) && R(a.onwebkitanimationend) ? (G = "WebkitAnimation", H = "webkitAnimationEnd animationend") : (G = "animation", H = "animationend");
        var U = G + "Delay",
            V = G + "Duration",
            W = E + "Delay";
        a = E + "Duration";
        var X = b.$$minErr("ng"),
            Y = {
                transitionDuration: a,
                transitionDelay: W,
                transitionProperty: E + "Property",
                animationDuration: V,
                animationDelay: U,
                animationIterationCount: G + "IterationCount"
            },
            Z = {
                transitionDuration: a,
                transitionDelay: W,
                animationDuration: V,
                animationDelay: U
            };
        b.module("ngAnimate", []).directive("ngAnimateChildren", [function() {
            return function(a, c, d) {
                a = d.ngAnimateChildren, b.isString(a) && 0 === a.length ? c.data("$$ngAnimateChildren", !0) : d.$observe("ngAnimateChildren", function(a) {
                    c.data("$$ngAnimateChildren", "on" === a || "true" === a)
                })
            }
        }]).factory("$$rAFScheduler", ["$$rAF", function(a) {
            function b(a) {
                d = d.concat(a), c()
            }

            function c() {
                if (d.length) {
                    for (var b = d.shift(), f = 0; f < b.length; f++) b[f]();
                    e || a(function() {
                        e || c()
                    })
                }
            }
            var d, e;
            return d = b.queue = [], b.waitUntilQuiet = function(b) {
                e && e(), e = a(function() {
                    e = null, b(), c()
                })
            }, b
        }]).provider("$$animateQueue", ["$animateProvider", function(a) {
            function b(a) {
                if (!a) return null;
                a = a.split(" ");
                var b = Object.create(null);
                return M(a, function(a) {
                    b[a] = !0
                }), b
            }

            function c(a, c) {
                if (a && c) {
                    var d = b(c);
                    return a.split(" ").some(function(a) {
                        return d[a]
                    })
                }
            }

            function e(a, b, c, d) {
                return g[a].some(function(a) {
                    return a(b, c, d)
                })
            }

            function f(a, b) {
                a = a || {};
                var c = 0 < (a.addClass || "").length,
                    d = 0 < (a.removeClass || "").length;
                return b ? c && d : c || d
            }
            var g = this.rules = {
                skip: [],
                cancel: [],
                join: []
            };
            g.join.push(function(a, b, c) {
                return !b.structural && f(b.options)
            }), g.skip.push(function(a, b, c) {
                return !b.structural && !f(b.options)
            }), g.skip.push(function(a, b, c) {
                return "leave" == c.event && b.structural
            }), g.skip.push(function(a, b, c) {
                return c.structural && 2 === c.state && !b.structural
            }), g.cancel.push(function(a, b, c) {
                return c.structural && b.structural
            }), g.cancel.push(function(a, b, c) {
                return 2 === c.state && b.structural
            }), g.cancel.push(function(a, b, d) {
                a = b.options.addClass, b = b.options.removeClass;
                var e = d.options.addClass;
                return d = d.options.removeClass, Q(a) && Q(b) || Q(e) && Q(d) ? !1 : c(a, d) || c(b, e)
            }), this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", function(b, c, g, j, k, o, p, r, u, v) {
                function w() {
                    var a = !1;
                    return function(b) {
                        a ? b() : c.$$postDigest(function() {
                            a = !0, b()
                        })
                    }
                }

                function x(a, b, c) {
                    var d = s(b),
                        e = s(a),
                        f = [];
                    return (a = I[c]) && M(a, function(a) {
                        W.call(a.node, d) ? f.push(a.callback) : "leave" === c && W.call(a.node, e) && f.push(a.callback)
                    }), f
                }

                function y(a, d, g) {
                    function i(c, d, e, f) {
                        y(function() {
                            var c = x(r, a, d);
                            c.length && b(function() {
                                M(c, function(b) {
                                    b(a, e, f)
                                })
                            })
                        }), c.progress(d, e, f)
                    }

                    function k(b) {
                        var c = a,
                            d = u;
                        d.preparationClasses && (c.removeClass(d.preparationClasses), d.preparationClasses = null), d.activeClasses && (c.removeClass(d.activeClasses), d.activeClasses = null), V(a, u), n(a, u), u.domOperation(), v.complete(!b)
                    }
                    var l, r, u = J(g);
                    (a = h(a)) && (l = s(a), r = a.parent());
                    var u = m(u),
                        v = new p,
                        y = w();
                    if (N(u.addClass) && (u.addClass = u.addClass.join(" ")), u.addClass && !O(u.addClass) && (u.addClass = null), N(u.removeClass) && (u.removeClass = u.removeClass.join(" ")), u.removeClass && !O(u.removeClass) && (u.removeClass = null), u.from && !P(u.from) && (u.from = null), u.to && !P(u.to) && (u.to = null), !l) return k(), v;
                    if (g = [l.className, u.addClass, u.removeClass].join(" "), !U(g)) return k(), v;
                    var B = 0 <= ["enter", "move", "leave"].indexOf(d),
                        H = !G || j[0].hidden || F.get(l);
                    g = !H && E.get(l) || {};
                    var I = !!g.state;
                    if (H || I && 1 == g.state || (H = !C(a, r, d)), H) return k(), v;
                    if (B && z(a), H = {
                            structural: B,
                            element: a,
                            event: d,
                            close: k,
                            options: u,
                            runner: v
                        }, I) {
                        if (e("skip", a, H, g)) return 2 === g.state ? (k(), v) : (q(a, g.options, u), g.runner);
                        if (e("cancel", a, H, g))
                            if (2 === g.state) g.runner.end();
                            else {
                                if (!g.structural) return q(a, g.options, H.options), g.runner;
                                g.close()
                            }
                        else if (e("join", a, H, g)) {
                            if (2 !== g.state) return t(a, B ? d : null, u), d = H.event = g.event, u = q(a, g.options, H.options), g.runner;
                            q(a, u, {})
                        }
                    } else q(a, u, {});
                    if ((I = H.structural) || (I = "animate" === H.event && 0 < Object.keys(H.options.to || {}).length || f(H.options)), !I) return k(), A(a), v;
                    var K = (g.counter || 0) + 1;
                    return H.counter = K, D(a, 1, H), c.$$postDigest(function() {
                        var b = E.get(l),
                            c = !b,
                            b = b || {},
                            e = 0 < (a.parent() || []).length && ("animate" === b.event || b.structural || f(b.options));
                        c || b.counter !== K || !e ? (c && (V(a, u), n(a, u)), (c || B && b.event !== d) && (u.domOperation(), v.end()), e || A(a)) : (d = !b.structural && f(b.options, !0) ? "setClass" : b.event, D(a, 2), b = o(a, d, b.options), b.done(function(b) {
                            k(!b), (b = E.get(l)) && b.counter === K && A(s(a)), i(v, d, "close", {})
                        }), v.setHost(b), i(v, d, "start", {}))
                    }), v
                }

                function z(a) {
                    a = s(a).querySelectorAll("[data-ng-animate]"), M(a, function(a) {
                        var b = parseInt(a.getAttribute("data-ng-animate")),
                            c = E.get(a);
                        if (c) switch (b) {
                            case 2:
                                c.runner.end();
                            case 1:
                                E.remove(a)
                        }
                    })
                }

                function A(a) {
                    a = s(a), a.removeAttribute("data-ng-animate"), E.remove(a)
                }

                function B(a, b) {
                    return s(a) === s(b)
                }

                function C(a, b, c) {
                    c = L(j[0].body);
                    var d, e = B(a, c) || "HTML" === a[0].nodeName,
                        f = B(a, g),
                        h = !1,
                        i = F.get(s(a));
                    for ((a = a.data("$ngAnimatePin")) && (b = a); b && b.length;) {
                        f || (f = B(b, g));
                        var k = b[0];
                        if (1 !== k.nodeType) break;
                        if (a = E.get(k) || {}, !h) {
                            if (k = F.get(k), !0 === k && !1 !== i) {
                                i = !0;
                                break
                            }!1 === k && (i = !1), h = a.structural
                        }
                        if ((Q(d) || !0 === d) && (a = b.data("$$ngAnimateChildren"), R(a) && (d = a)), h && !1 === d) break;
                        if (e || (e = B(b, c)), e && f) break;
                        b = f || !(a = b.data("$ngAnimatePin")) ? b.parent() : a
                    }
                    return (!h || d) && !0 !== i && f && e
                }

                function D(a, b, c) {
                    c = c || {}, c.state = b, a = s(a), a.setAttribute("data-ng-animate", b), c = (b = E.get(a)) ? K(b, c) : c, E.put(a, c)
                }
                var E = new k,
                    F = new k,
                    G = null,
                    H = c.$watch(function() {
                        return 0 === r.totalPendingRequests
                    }, function(a) {
                        a && (H(), c.$$postDigest(function() {
                            c.$$postDigest(function() {
                                null === G && (G = !0)
                            })
                        }))
                    }),
                    I = {},
                    S = a.classNameFilter(),
                    U = S ? function(a) {
                        return S.test(a)
                    } : function() {
                        return !0
                    },
                    V = l(u),
                    W = Node.prototype.contains || function(a) {
                        return this === a || !!(16 & this.compareDocumentPosition(a))
                    };
                return {
                    on: function(a, b, c) {
                        b = i(b), I[a] = I[a] || [], I[a].push({
                            node: b,
                            callback: c
                        })
                    },
                    off: function(a, b, c) {
                        function d(a, b, c) {
                            var d = i(b);
                            return a.filter(function(a) {
                                return !(a.node === d && (!c || a.callback === c))
                            })
                        }
                        var e = I[a];
                        e && (I[a] = 1 === arguments.length ? null : d(e, b, c))
                    },
                    pin: function(a, b) {
                        d(T(a), "element", "not an element"), d(T(b), "parentElement", "not an element"), a.data("$ngAnimatePin", b)
                    },
                    push: function(a, b, c, d) {
                        return c = c || {}, c.domOperation = d, y(a, b, c)
                    },
                    enabled: function(a, b) {
                        var c = arguments.length;
                        if (0 === c) b = !!G;
                        else if (T(a)) {
                            var d = s(a),
                                e = F.get(d);
                            1 === c ? b = !e : F.put(d, !b)
                        } else b = G = !!a;
                        return b
                    }
                }
            }]
        }]).provider("$$animation", ["$animateProvider", function(a) {
            function b(a) {
                return a.data("$$animationRunner")
            }
            var c = this.drivers = [];
            this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$HashMap", "$$rAFScheduler", function(a, d, f, g, h, i) {
                function j(a) {
                    function b(a) {
                        if (a.processed) return a;
                        a.processed = !0;
                        var c = a.domNode,
                            f = c.parentNode;
                        e.put(c, a);
                        for (var g; f;) {
                            if (g = e.get(f)) {
                                g.processed || (g = b(g));
                                break
                            }
                            f = f.parentNode
                        }
                        return (g || d).children.push(a), a
                    }
                    var c, d = {
                            children: []
                        },
                        e = new h;
                    for (c = 0; c < a.length; c++) {
                        var f = a[c];
                        e.put(f.domNode, a[c] = {
                            domNode: f.domNode,
                            fn: f.fn,
                            children: []
                        })
                    }
                    for (c = 0; c < a.length; c++) b(a[c]);
                    return function(a) {
                        var b, c = [],
                            d = [];
                        for (b = 0; b < a.children.length; b++) d.push(a.children[b]);
                        a = d.length;
                        var e = 0,
                            f = [];
                        for (b = 0; b < d.length; b++) {
                            var g = d[b];
                            0 >= a && (a = e, e = 0, c.push(f), f = []), f.push(g.fn), g.children.forEach(function(a) {
                                e++, d.push(a)
                            }), a--
                        }
                        return f.length && c.push(f), c
                    }(d)
                }
                var k = [],
                    o = l(a);
                return function(h, l, p) {
                    function q(a) {
                        a = a.hasAttribute("ng-animate-ref") ? [a] : a.querySelectorAll("[ng-animate-ref]");
                        var b = [];
                        return M(a, function(a) {
                            var c = a.getAttribute("ng-animate-ref");
                            c && c.length && b.push(a)
                        }), b
                    }

                    function r(a) {
                        var b = [],
                            c = {};
                        M(a, function(a, d) {
                            var e = s(a.element),
                                f = 0 <= ["enter", "move"].indexOf(a.event),
                                e = a.structural ? q(e) : [];
                            if (e.length) {
                                var g = f ? "to" : "from";
                                M(e, function(a) {
                                    var b = a.getAttribute("ng-animate-ref");
                                    c[b] = c[b] || {}, c[b][g] = {
                                        animationID: d,
                                        element: L(a)
                                    }
                                })
                            } else b.push(a)
                        });
                        var d = {},
                            e = {};
                        return M(c, function(c, f) {
                            var g = c.from,
                                h = c.to;
                            if (g && h) {
                                var i = a[g.animationID],
                                    j = a[h.animationID],
                                    k = g.animationID.toString();
                                if (!e[k]) {
                                    var l = e[k] = {
                                        structural: !0,
                                        beforeStart: function() {
                                            i.beforeStart(), j.beforeStart()
                                        },
                                        close: function() {
                                            i.close(), j.close()
                                        },
                                        classes: t(i.classes, j.classes),
                                        from: i,
                                        to: j,
                                        anchors: []
                                    };
                                    l.classes.length ? b.push(l) : (b.push(i), b.push(j))
                                }
                                e[k].anchors.push({
                                    out: g.element,
                                    "in": h.element
                                })
                            } else g = g ? g.animationID : h.animationID, h = g.toString(), d[h] || (d[h] = !0, b.push(a[g]))
                        }), b
                    }

                    function t(a, b) {
                        a = a.split(" "), b = b.split(" ");
                        for (var c = [], d = 0; d < a.length; d++) {
                            var e = a[d];
                            if ("ng-" !== e.substring(0, 3))
                                for (var f = 0; f < b.length; f++)
                                    if (e === b[f]) {
                                        c.push(e);
                                        break
                                    }
                        }
                        return c.join(" ")
                    }

                    function u(a) {
                        for (var b = c.length - 1; b >= 0; b--) {
                            var d = c[b];
                            if (f.has(d) && (d = f.get(d)(a))) return d
                        }
                    }

                    function v(a, c) {
                        a.from && a.to ? (b(a.from.element).setHost(c), b(a.to.element).setHost(c)) : b(a.element).setHost(c)
                    }

                    function w() {
                        var a = b(h);
                        !a || "leave" === l && p.$$domOperationFired || a.end()
                    }

                    function x(b) {
                        h.off("$destroy", w), h.removeData("$$animationRunner"), o(h, p), n(h, p), p.domOperation(), B && a.removeClass(h, B), h.removeClass("ng-animate"), z.complete(!b)
                    }
                    p = m(p);
                    var y = 0 <= ["enter", "move", "leave"].indexOf(l),
                        z = new g({
                            end: function() {
                                x()
                            },
                            cancel: function() {
                                x(!0)
                            }
                        });
                    if (!c.length) return x(), z;
                    h.data("$$animationRunner", z);
                    var A = e(h.attr("class"), e(p.addClass, p.removeClass)),
                        B = p.tempClasses;
                    return B && (A += " " + B, p.tempClasses = null), k.push({
                        element: h,
                        classes: A,
                        event: l,
                        structural: y,
                        options: p,
                        beforeStart: function() {
                            h.addClass("ng-animate"), B && a.addClass(h, B)
                        },
                        close: x
                    }), h.on("$destroy", w), 1 < k.length ? z : (d.$$postDigest(function() {
                        var a = [];
                        M(k, function(c) {
                            b(c.element) ? a.push(c) : c.close()
                        }), k.length = 0;
                        var c = r(a),
                            d = [];
                        M(c, function(a) {
                            d.push({
                                domNode: s(a.from ? a.from.element : a.element),
                                fn: function() {
                                    a.beforeStart();
                                    var c, d = a.close;
                                    if (b(a.anchors ? a.from.element || a.to.element : a.element)) {
                                        var e = u(a);
                                        e && (c = e.start)
                                    }
                                    c ? (c = c(), c.done(function(a) {
                                        d(!a)
                                    }), v(a, c)) : d()
                                }
                            })
                        }), i(j(d))
                    }), z)
                }
            }]
        }]).provider("$animateCss", ["$animateProvider", function(a) {
            var b = C(),
                c = C();
            this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$$animateQueue", function(a, d, e, h, i, j, k, q) {
                function r(a, b) {
                    var c = a.parentNode;
                    return (c.$$ngAnimateParentKey || (c.$$ngAnimateParentKey = ++K)) + "-" + a.getAttribute("class") + "-" + b
                }

                function t(e, f, h, i) {
                    var j;
                    return 0 < b.count(h) && (j = c.get(h), j || (f = g(f, "-stagger"), d.addClass(e, f), j = y(a, e, i), j.animationDuration = Math.max(j.animationDuration, 0), j.transitionDuration = Math.max(j.transitionDuration, 0), d.removeClass(e, f), c.put(h, j))), j || {}
                }

                function x(a) {
                    L.push(a), k.waitUntilQuiet(function() {
                        b.flush(), c.flush();
                        for (var a = i(), d = 0; d < L.length; d++) L[d](a);
                        L.length = 0
                    })
                }

                function z(c, d, e) {
                    return d = b.get(e), d || (d = y(a, c, Y), "infinite" === d.animationIterationCount && (d.animationIterationCount = 1)), b.put(e, d), c = d, e = c.animationDelay, d = c.transitionDelay, c.maxDelay = e && d ? Math.max(e, d) : e || d, c.maxDuration = Math.max(c.animationDuration * c.animationIterationCount, c.transitionDuration), c
                }
                var C = l(d),
                    K = 0,
                    L = [];
                return function(a, c) {
                    function i() {
                        l()
                    }

                    function k() {
                        l(!0)
                    }

                    function l(b) {
                        S || X && T || (S = !0, T = !1, P.$$skipPreparationClasses || d.removeClass(a, la), d.removeClass(a, na), v(R, !1), u(R, !1), M(ea, function(a) {
                            R.style[a[0]] = ""
                        }), C(a, P), n(a, P), Object.keys(Q).length && M(Q, function(a, b) {
                            a ? R.style.setProperty(b, a) : R.style.removeProperty(b)
                        }), P.onDone && P.onDone(), ha && ha.length && a.off(ha.join(" "), L), Y && Y.complete(!b))
                    }

                    function y(a) {
                        ta.blockTransition && u(R, a),
                            ta.blockKeyframeAnimation && v(R, !!a)
                    }

                    function K() {
                        return Y = new e({
                            end: i,
                            cancel: k
                        }), x(I), l(), {
                            $$willAnimate: !1,
                            start: function() {
                                return Y
                            },
                            end: i
                        }
                    }

                    function L(a) {
                        a.stopPropagation();
                        var b = a.originalEvent || a;
                        a = b.$manualTimeStamp || Date.now(), b = parseFloat(b.elapsedTime.toFixed(3)), Math.max(a - da, 0) >= aa && b >= ba && (X = !0, l())
                    }

                    function O() {
                        function b() {
                            if (!S) {
                                if (y(!1), M(ea, function(a) {
                                        R.style[a[0]] = a[1]
                                    }), C(a, P), d.addClass(a, na), ta.recalculateTimingStyles) {
                                    if (ma = R.className + " " + la, oa = r(R, ma), ra = z(R, ma, oa), sa = ra.maxDelay, _ = Math.max(sa, 0), ba = ra.maxDuration, 0 === ba) return void l();
                                    ta.hasTransitions = 0 < ra.transitionDuration, ta.hasAnimations = 0 < ra.animationDuration
                                }
                                if (ta.applyAnimationDelay && (sa = "boolean" != typeof P.delay && A(P.delay) ? parseFloat(P.delay) : sa, _ = Math.max(sa, 0), ra.animationDelay = sa, ua = [U, sa + "s"], ea.push(ua), R.style[ua[0]] = ua[1]), aa = 1e3 * _, ca = 1e3 * ba, P.easing) {
                                    var b, e = P.easing;
                                    ta.hasTransitions && (b = E + "TimingFunction", ea.push([b, e]), R.style[b] = e), ta.hasAnimations && (b = G + "TimingFunction", ea.push([b, e]), R.style[b] = e)
                                }
                                ra.transitionDuration && ha.push(F), ra.animationDuration && ha.push(H), da = Date.now();
                                var f = aa + 1.5 * ca;
                                b = da + f;
                                var e = a.data("$$animateCss") || [],
                                    g = !0;
                                if (e.length) {
                                    var i = e[0];
                                    (g = b > i.expectedEndTime) ? h.cancel(i.timer): e.push(l)
                                }
                                g && (f = h(c, f, !1), e[0] = {
                                    timer: f,
                                    expectedEndTime: b
                                }, e.push(l), a.data("$$animateCss", e)), ha.length && a.on(ha.join(" "), L), P.to && (P.cleanupStyles && D(Q, R, Object.keys(P.to)), p(a, P))
                            }
                        }

                        function c() {
                            var b = a.data("$$animateCss");
                            if (b) {
                                for (var c = 1; c < b.length; c++) b[c]();
                                a.removeData("$$animateCss")
                            }
                        }
                        if (!S)
                            if (R.parentNode) {
                                var e = function(a) {
                                        if (X) T && a && (T = !1, l());
                                        else if (T = !a, ra.animationDuration)
                                            if (a = v(R, T), T) ea.push(a);
                                            else {
                                                var b = ea,
                                                    c = b.indexOf(a);
                                                a >= 0 && b.splice(c, 1)
                                            }
                                    },
                                    f = qa > 0 && (ra.transitionDuration && 0 === pa.transitionDuration || ra.animationDuration && 0 === pa.animationDuration) && Math.max(pa.animationDelay, pa.transitionDelay);
                                f ? h(b, Math.floor(f * qa * 1e3), !1) : b(), $.resume = function() {
                                    e(!0)
                                }, $.pause = function() {
                                    e(!1)
                                }
                            } else l()
                    }
                    var P = c || {};
                    P.$$prepared || (P = m(J(P)));
                    var Q = {},
                        R = s(a);
                    if (!R || !R.parentNode || !q.enabled()) return K();
                    var S, T, X, Y, $, _, aa, ba, ca, da, ea = [],
                        fa = a.attr("class"),
                        ga = f(P),
                        ha = [];
                    if (0 === P.duration || !j.animations && !j.transitions) return K();
                    var ia = P.event && N(P.event) ? P.event.join(" ") : P.event,
                        ja = "",
                        ka = "";
                    ia && P.structural ? ja = g(ia, "ng-", !0) : ia && (ja = ia), P.addClass && (ka += g(P.addClass, "-add")), P.removeClass && (ka.length && (ka += " "), ka += g(P.removeClass, "-remove")), P.applyClassesEarly && ka.length && C(a, P);
                    var la = [ja, ka].join(" ").trim(),
                        ma = fa + " " + la,
                        na = g(la, "-active"),
                        fa = ga.to && 0 < Object.keys(ga.to).length;
                    if (!(0 < (P.keyframeStyle || "").length || fa || la)) return K();
                    var oa, pa;
                    0 < P.stagger ? (ga = parseFloat(P.stagger), pa = {
                        transitionDelay: ga,
                        animationDelay: ga,
                        transitionDuration: 0,
                        animationDuration: 0
                    }) : (oa = r(R, ma), pa = t(R, la, oa, Z)), P.$$skipPreparationClasses || d.addClass(a, la), P.transitionStyle && (ga = [E, P.transitionStyle], w(R, ga), ea.push(ga)), 0 <= P.duration && (ga = 0 < R.style[E].length, ga = B(P.duration, ga), w(R, ga), ea.push(ga)), P.keyframeStyle && (ga = [G, P.keyframeStyle], w(R, ga), ea.push(ga));
                    var qa = pa ? 0 <= P.staggerIndex ? P.staggerIndex : b.count(oa) : 0;
                    (ia = 0 === qa) && !P.skipBlocking && u(R, 9999);
                    var ra = z(R, ma, oa),
                        sa = ra.maxDelay;
                    _ = Math.max(sa, 0), ba = ra.maxDuration;
                    var ta = {};
                    if (ta.hasTransitions = 0 < ra.transitionDuration, ta.hasAnimations = 0 < ra.animationDuration, ta.hasTransitionAll = ta.hasTransitions && "all" == ra.transitionProperty, ta.applyTransitionDuration = fa && (ta.hasTransitions && !ta.hasTransitionAll || ta.hasAnimations && !ta.hasTransitions), ta.applyAnimationDuration = P.duration && ta.hasAnimations, ta.applyTransitionDelay = A(P.delay) && (ta.applyTransitionDuration || ta.hasTransitions), ta.applyAnimationDelay = A(P.delay) && ta.hasAnimations, ta.recalculateTimingStyles = 0 < ka.length, (ta.applyTransitionDuration || ta.applyAnimationDuration) && (ba = P.duration ? parseFloat(P.duration) : ba, ta.applyTransitionDuration && (ta.hasTransitions = !0, ra.transitionDuration = ba, ga = 0 < R.style[E + "Property"].length, ea.push(B(ba, ga))), ta.applyAnimationDuration && (ta.hasAnimations = !0, ra.animationDuration = ba, ea.push([V, ba + "s"]))), 0 === ba && !ta.recalculateTimingStyles) return K();
                    if (null != P.delay) {
                        var ua;
                        "boolean" != typeof P.delay && (ua = parseFloat(P.delay), _ = Math.max(ua, 0)), ta.applyTransitionDelay && ea.push([W, ua + "s"]), ta.applyAnimationDelay && ea.push([U, ua + "s"])
                    }
                    return null == P.duration && 0 < ra.transitionDuration && (ta.recalculateTimingStyles = ta.recalculateTimingStyles || ia), aa = 1e3 * _, ca = 1e3 * ba, P.skipBlocking || (ta.blockTransition = 0 < ra.transitionDuration, ta.blockKeyframeAnimation = 0 < ra.animationDuration && 0 < pa.animationDelay && 0 === pa.animationDuration), P.from && (P.cleanupStyles && D(Q, R, Object.keys(P.from)), o(a, P)), ta.blockTransition || ta.blockKeyframeAnimation ? y(ba) : P.skipBlocking || u(R, !1), {
                        $$willAnimate: !0,
                        end: i,
                        start: function() {
                            return S ? void 0 : ($ = {
                                end: i,
                                cancel: k,
                                resume: null,
                                pause: null
                            }, Y = new e($), x(O), Y)
                        }
                    }
                }
            }]
        }]).provider("$$animateCssDriver", ["$$animationProvider", function(a) {
            a.drivers.push("$$animateCssDriver"), this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function(a, b, c, d, e, f, g) {
                function h(a) {
                    return a.replace(/\bng-\S+\b/g, "")
                }

                function i(a, b) {
                    return O(a) && (a = a.split(" ")), O(b) && (b = b.split(" ")), a.filter(function(a) {
                        return -1 === b.indexOf(a)
                    }).join(" ")
                }

                function j(b, d, e) {
                    function f(a) {
                        var b = {},
                            c = s(a).getBoundingClientRect();
                        return M(["width", "height", "top", "left"], function(a) {
                            var d = c[a];
                            switch (a) {
                                case "top":
                                    d += n.scrollTop;
                                    break;
                                case "left":
                                    d += n.scrollLeft
                            }
                            b[a] = Math.floor(d) + "px"
                        }), b
                    }

                    function g() {
                        var b = h(e.attr("class") || ""),
                            c = i(b, l),
                            b = i(l, b),
                            c = a(k, {
                                to: f(e),
                                addClass: "ng-anchor-in " + c,
                                removeClass: "ng-anchor-out " + b,
                                delay: !0
                            });
                        return c.$$willAnimate ? c : null
                    }

                    function j() {
                        k.remove(), d.removeClass("ng-animate-shim"), e.removeClass("ng-animate-shim")
                    }
                    var k = L(s(d).cloneNode(!0)),
                        l = h(k.attr("class") || "");
                    d.addClass("ng-animate-shim"), e.addClass("ng-animate-shim"), k.addClass("ng-anchor"), o.append(k);
                    var m;
                    if (b = function() {
                            var b = a(k, {
                                addClass: "ng-anchor-out",
                                delay: !0,
                                from: f(d)
                            });
                            return b.$$willAnimate ? b : null
                        }(), !b && (m = g(), !m)) return j();
                    var p = b || m;
                    return {
                        start: function() {
                            function a() {
                                d && d.end()
                            }
                            var b, d = p.start();
                            return d.done(function() {
                                return d = null, !m && (m = g()) ? (d = m.start(), d.done(function() {
                                    d = null, j(), b.complete()
                                }), d) : (j(), void b.complete())
                            }), b = new c({
                                end: a,
                                cancel: a
                            })
                        }
                    }
                }

                function k(a, b, d, e) {
                    var f = m(a, I),
                        g = m(b, I),
                        h = [];
                    return M(e, function(a) {
                        (a = j(d, a.out, a["in"])) && h.push(a)
                    }), f || g || 0 !== h.length ? {
                        start: function() {
                            function a() {
                                M(b, function(a) {
                                    a.end()
                                })
                            }
                            var b = [];
                            f && b.push(f.start()), g && b.push(g.start()), M(h, function(a) {
                                b.push(a.start())
                            });
                            var d = new c({
                                end: a,
                                cancel: a
                            });
                            return c.all(b, function(a) {
                                d.complete(a)
                            }), d
                        }
                    } : void 0
                }

                function m(b) {
                    var c = b.element,
                        d = b.options || {};
                    return b.structural && (d.event = b.event, d.structural = !0, d.applyClassesEarly = !0, "leave" === b.event && (d.onDone = d.domOperation)), d.preparationClasses && (d.event = x(d.event, d.preparationClasses)), b = a(c, d), b.$$willAnimate ? b : null
                }
                if (!e.animations && !e.transitions) return I;
                var n = g[0].body;
                b = s(d);
                var o = L(b.parentNode && 11 === b.parentNode.nodeType || n.contains(b) ? b : n);
                return l(f),
                    function(a) {
                        return a.from && a.to ? k(a.from, a.to, a.classes, a.anchors) : m(a)
                    }
            }]
        }]).provider("$$animateJs", ["$animateProvider", function(a) {
            this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function(b, c, d) {
                function e(c) {
                    c = N(c) ? c : c.split(" ");
                    for (var d = [], e = {}, f = 0; f < c.length; f++) {
                        var g = c[f],
                            h = a.$$registeredAnimations[g];
                        h && !e[g] && (d.push(b.get(h)), e[g] = !0)
                    }
                    return d
                }
                var f = l(d);
                return function(a, b, d, g) {
                    function h() {
                        g.domOperation(), f(a, g)
                    }

                    function i(a, b, d, e, f) {
                        switch (d) {
                            case "animate":
                                b = [b, e.from, e.to, f];
                                break;
                            case "setClass":
                                b = [b, q, r, f];
                                break;
                            case "addClass":
                                b = [b, q, f];
                                break;
                            case "removeClass":
                                b = [b, r, f];
                                break;
                            default:
                                b = [b, f]
                        }
                        if (b.push(e), a = a.apply(a, b))
                            if (S(a.start) && (a = a.start()), a instanceof c) a.done(f);
                            else if (S(a)) return a;
                        return I
                    }

                    function j(a, b, d, e, f) {
                        var g = [];
                        return M(e, function(e) {
                            var h = e[f];
                            h && g.push(function() {
                                var e, f, g = !1,
                                    j = function(a) {
                                        g || (g = !0, (f || I)(a), e.complete(!a))
                                    };
                                return e = new c({
                                    end: function() {
                                        j()
                                    },
                                    cancel: function() {
                                        j(!0)
                                    }
                                }), f = i(h, a, b, d, function(a) {
                                    j(!1 === a)
                                }), e
                            })
                        }), g
                    }

                    function k(a, b, d, e, f) {
                        var g = j(a, b, d, e, f);
                        if (0 === g.length) {
                            var h, i;
                            "beforeSetClass" === f ? (h = j(a, "removeClass", d, e, "beforeRemoveClass"), i = j(a, "addClass", d, e, "beforeAddClass")) : "setClass" === f && (h = j(a, "removeClass", d, e, "removeClass"), i = j(a, "addClass", d, e, "addClass")), h && (g = g.concat(h)), i && (g = g.concat(i))
                        }
                        return 0 !== g.length ? function(a) {
                            var b = [];
                            return g.length && M(g, function(a) {
                                    b.push(a())
                                }), b.length ? c.all(b, a) : a(),
                                function(a) {
                                    M(b, function(b) {
                                        a ? b.cancel() : b.end()
                                    })
                                }
                        } : void 0
                    }
                    var l = !1;
                    3 === arguments.length && P(d) && (g = d, d = null), g = m(g), d || (d = a.attr("class") || "", g.addClass && (d += " " + g.addClass), g.removeClass && (d += " " + g.removeClass));
                    var o, p, q = g.addClass,
                        r = g.removeClass,
                        s = e(d);
                    if (s.length) {
                        var t, u;
                        "leave" == b ? (u = "leave", t = "afterLeave") : (u = "before" + b.charAt(0).toUpperCase() + b.substr(1), t = b), "enter" !== b && "move" !== b && (o = k(a, b, g, s, u)), p = k(a, b, g, s, t)
                    }
                    if (o || p) {
                        var v;
                        return {
                            $$willAnimate: !0,
                            end: function() {
                                return v ? v.end() : (l = !0, h(), n(a, g), v = new c, v.complete(!0)), v
                            },
                            start: function() {
                                function b(b) {
                                    l = !0, h(), n(a, g), v.complete(b)
                                }
                                if (v) return v;
                                v = new c;
                                var d, e = [];
                                return o && e.push(function(a) {
                                    d = o(a)
                                }), e.length ? e.push(function(a) {
                                    h(), a(!0)
                                }) : h(), p && e.push(function(a) {
                                    d = p(a)
                                }), v.setHost({
                                    end: function() {
                                        l || ((d || I)(void 0), b(void 0))
                                    },
                                    cancel: function() {
                                        l || ((d || I)(!0), b(!0))
                                    }
                                }), c.chain(e, b), v
                            }
                        }
                    }
                }
            }]
        }]).provider("$$animateJsDriver", ["$$animationProvider", function(a) {
            a.drivers.push("$$animateJsDriver"), this.$get = ["$$animateJs", "$$AnimateRunner", function(a, b) {
                function c(b) {
                    return a(b.element, b.event, b.classes, b.options)
                }
                return function(a) {
                    if (!a.from || !a.to) return c(a);
                    var d = c(a.from),
                        e = c(a.to);
                    return d || e ? {
                        start: function() {
                            function a() {
                                return function() {
                                    M(c, function(a) {
                                        a.end()
                                    })
                                }
                            }
                            var c = [];
                            d && c.push(d.start()), e && c.push(e.start()), b.all(c, function(a) {
                                f.complete(a)
                            });
                            var f = new b({
                                end: a(),
                                cancel: a()
                            });
                            return f
                        }
                    } : void 0
                }
            }]
        }])
    }(window, window.angular);