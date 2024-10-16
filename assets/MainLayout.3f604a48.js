import {
    k as $,
    c as f,
    h as q,
    l as le,
    r as T,
    m as ft,
    o as oe,
    n as Z,
    p as De,
    q as ae,
    g as Q,
    t as W,
    i as be,
    u as X,
    w as L,
    v as mt,
    x as ye,
    y as Pt,
    z as $t,
    A as Ht,
    B as Re,
    C as he,
    D as At,
    E as Ne,
    P as Vt,
    G as Dt,
    H as R,
    I as Rt,
    J as de,
    K as Te,
    L as Xe,
    M as Ce,
    N as He,
    O as Le,
    Q as Qt,
    R as ht,
    S as It,
    U as bt,
    V as Ye,
    W as Ft,
    X as Wt,
    Y as jt,
    Z as Ue,
    _ as yt,
    $ as Nt,
    a0 as ve,
    a as Xt,
    a1 as Yt,
    a2 as Ut,
    a3 as Ke,
    a4 as Kt,
    a5 as V,
    f as M,
    a6 as Ge,
    a7 as ke,
    a8 as Gt,
    a9 as Jt,
    F as Zt,
    aa as el,
    ab as tl,
    ac as ll
} from "./index.47c5d9f4.js";

var ol = $({
    name: "QToolbarTitle", props: {shrink: Boolean}, setup(e, {slots: l}) {
        const o = f(() => "q-toolbar__title ellipsis" + (e.shrink === !0 ? " col-shrink" : ""));
        return () => q("div", {class: o.value}, le(l.default))
    }
}), al = $({
    name: "QToolbar", props: {inset: Boolean}, setup(e, {slots: l}) {
        const o = f(() => "q-toolbar row no-wrap items-center" + (e.inset === !0 ? " q-toolbar--inset" : ""));
        return () => q("div", {class: o.value, role: "toolbar"}, le(l.default))
    }
});

function nl() {
    const e = T(!ft.value);
    return e.value === !1 && oe(() => {
        e.value = !0
    }), {isHydrated: e}
}

const gt = typeof ResizeObserver != "undefined", Je = gt === !0 ? {} : {
    style: "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",
    url: "about:blank"
};
var se = $({
    name: "QResizeObserver",
    props: {debounce: {type: [String, Number], default: 100}},
    emits: ["resize"],
    setup(e, {emit: l}) {
        let o = null, i, t = {width: -1, height: -1};

        function a(c) {
            c === !0 || e.debounce === 0 || e.debounce === "0" ? r() : o === null && (o = setTimeout(r, e.debounce))
        }

        function r() {
            if (o !== null && (clearTimeout(o), o = null), i) {
                const {offsetWidth: c, offsetHeight: v} = i;
                (c !== t.width || v !== t.height) && (t = {width: c, height: v}, l("resize", t))
            }
        }

        const {proxy: n} = Q();
        if (n.trigger = a, gt === !0) {
            let c;
            const v = u => {
                i = n.$el.parentNode, i ? (c = new ResizeObserver(a), c.observe(i), r()) : u !== !0 && ae(() => {
                    v(!0)
                })
            };
            return oe(() => {
                v()
            }), Z(() => {
                o !== null && clearTimeout(o), c !== void 0 && (c.disconnect !== void 0 ? c.disconnect() : i && c.unobserve(i))
            }), De
        } else {
            let u = function () {
                o !== null && (clearTimeout(o), o = null), v !== void 0 && (v.removeEventListener !== void 0 && v.removeEventListener("resize", a, W.passive), v = void 0)
            }, w = function () {
                u(), i && i.contentDocument && (v = i.contentDocument.defaultView, v.addEventListener("resize", a, W.passive), r())
            };
            const {isHydrated: c} = nl();
            let v;
            return oe(() => {
                ae(() => {
                    i = n.$el, i && w()
                })
            }), Z(u), () => {
                if (c.value === !0) return q("object", {
                    class: "q--avoid-card-border",
                    style: Je.style,
                    tabindex: -1,
                    type: "text/html",
                    data: Je.url,
                    "aria-hidden": "true",
                    onLoad: w
                })
            }
        }
    }
}), il = $({
    name: "QHeader",
    props: {
        modelValue: {type: Boolean, default: !0},
        reveal: Boolean,
        revealOffset: {type: Number, default: 250},
        bordered: Boolean,
        elevated: Boolean,
        heightHint: {type: [String, Number], default: 50}
    },
    emits: ["reveal", "focusin"],
    setup(e, {slots: l, emit: o}) {
        const {proxy: {$q: i}} = Q(), t = be(ye, X);
        if (t === X) return console.error("QHeader needs to be child of QLayout"), X;
        const a = T(parseInt(e.heightHint, 10)), r = T(!0),
            n = f(() => e.reveal === !0 || t.view.value.indexOf("H") !== -1 || i.platform.is.ios && t.isContainer.value === !0),
            c = f(() => {
                if (e.modelValue !== !0) return 0;
                if (n.value === !0) return r.value === !0 ? a.value : 0;
                const d = a.value - t.scroll.value.position;
                return d > 0 ? d : 0
            }), v = f(() => e.modelValue !== !0 || n.value === !0 && r.value !== !0),
            u = f(() => e.modelValue === !0 && v.value === !0 && e.reveal === !0),
            w = f(() => "q-header q-layout__section--marginal " + (n.value === !0 ? "fixed" : "absolute") + "-top" + (e.bordered === !0 ? " q-header--bordered" : "") + (v.value === !0 ? " q-header--hidden" : "") + (e.modelValue !== !0 ? " q-layout--prevent-focus" : "")),
            p = f(() => {
                const d = t.rows.value.top, g = {};
                return d[0] === "l" && t.left.space === !0 && (g[i.lang.rtl === !0 ? "right" : "left"] = `${t.left.size}px`), d[2] === "r" && t.right.space === !0 && (g[i.lang.rtl === !0 ? "left" : "right"] = `${t.right.size}px`), g
            });

        function h(d, g) {
            t.update("header", d, g)
        }

        function b(d, g) {
            d.value !== g && (d.value = g)
        }

        function B({height: d}) {
            b(a, d), h("size", d)
        }

        function k(d) {
            u.value === !0 && b(r, !0), o("focusin", d)
        }

        L(() => e.modelValue, d => {
            h("space", d), b(r, !0), t.animate()
        }), L(c, d => {
            h("offset", d)
        }), L(() => e.reveal, d => {
            d === !1 && b(r, e.modelValue)
        }), L(r, d => {
            t.animate(), o("reveal", d)
        }), L(t.scroll, d => {
            e.reveal === !0 && b(r, d.direction === "up" || d.position <= e.revealOffset || d.position - d.inflectionPoint < 100)
        });
        const z = {};
        return t.instances.header = z, e.modelValue === !0 && h("size", a.value), h("space", e.modelValue), h("offset", c.value), Z(() => {
            t.instances.header === z && (t.instances.header = void 0, h("size", 0), h("offset", 0), h("space", !1))
        }), () => {
            const d = mt(l.default, []);
            return e.elevated === !0 && d.push(q("div", {class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"})), d.push(q(se, {
                debounce: 0,
                onResize: B
            })), q("header", {class: w.value, style: p.value, onFocusin: k}, d)
        }
    }
}), rl = $({
    name: "QItemLabel",
    props: {overline: Boolean, caption: Boolean, header: Boolean, lines: [Number, String]},
    setup(e, {slots: l}) {
        const o = f(() => parseInt(e.lines, 10)),
            i = f(() => "q-item__label" + (e.overline === !0 ? " q-item__label--overline text-overline" : "") + (e.caption === !0 ? " q-item__label--caption text-caption" : "") + (e.header === !0 ? " q-item__label--header" : "") + (o.value === 1 ? " ellipsis" : "")),
            t = f(() => e.lines !== void 0 && o.value > 1 ? {
                overflow: "hidden",
                display: "-webkit-box",
                "-webkit-box-orient": "vertical",
                "-webkit-line-clamp": o.value
            } : null);
        return () => q("div", {style: t.value, class: i.value}, le(l.default))
    }
}), Ze = $({
    name: "QItemSection",
    props: {avatar: Boolean, thumbnail: Boolean, side: Boolean, top: Boolean, noWrap: Boolean},
    setup(e, {slots: l}) {
        const o = f(() => `q-item__section column q-item__section--${e.avatar === !0 || e.side === !0 || e.thumbnail === !0 ? "side" : "main"}` + (e.top === !0 ? " q-item__section--top justify-start" : " justify-center") + (e.avatar === !0 ? " q-item__section--avatar" : "") + (e.thumbnail === !0 ? " q-item__section--thumbnail" : "") + (e.noWrap === !0 ? " q-item__section--nowrap" : ""));
        return () => q("div", {class: o.value}, le(l.default))
    }
});
const ge = {dark: {type: Boolean, default: null}};

function we(e, l) {
    return f(() => e.dark === null ? l.dark.isActive : e.dark)
}

var ul = $({
    name: "QItem",
    props: {
        ...ge, ...Pt,
        tag: {type: String, default: "div"},
        active: {type: Boolean, default: null},
        clickable: Boolean,
        dense: Boolean,
        insetLevel: Number,
        tabindex: [String, Number],
        focused: Boolean,
        manualFocus: Boolean
    },
    emits: ["click", "keyup"],
    setup(e, {slots: l, emit: o}) {
        const {proxy: {$q: i}} = Q(), t = we(e, i), {
                hasLink: a,
                linkAttrs: r,
                linkClass: n,
                linkTag: c,
                navigateOnClick: v
            } = $t(), u = T(null), w = T(null), p = f(() => e.clickable === !0 || a.value === !0 || e.tag === "label"),
            h = f(() => e.disable !== !0 && p.value === !0),
            b = f(() => "q-item q-item-type row no-wrap" + (e.dense === !0 ? " q-item--dense" : "") + (t.value === !0 ? " q-item--dark" : "") + (a.value === !0 && e.active === null ? n.value : e.active === !0 ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}` : "") + (e.disable === !0 ? " disabled" : "") + (h.value === !0 ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === !0 ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === !0 ? " q-manual-focusable--focused" : "") : "")),
            B = f(() => {
                if (e.insetLevel === void 0) return null;
                const g = i.lang.rtl === !0 ? "Right" : "Left";
                return {["padding" + g]: 16 + e.insetLevel * 56 + "px"}
            });

        function k(g) {
            h.value === !0 && (w.value !== null && (g.qKeyEvent !== !0 && document.activeElement === u.value ? w.value.focus() : document.activeElement === w.value && u.value.focus()), v(g))
        }

        function z(g) {
            if (h.value === !0 && Ht(g, [13, 32]) === !0) {
                Re(g), g.qKeyEvent = !0;
                const S = new MouseEvent("click", g);
                S.qKeyEvent = !0, u.value.dispatchEvent(S)
            }
            o("keyup", g)
        }

        function d() {
            const g = mt(l.default, []);
            return h.value === !0 && g.unshift(q("div", {class: "q-focus-helper", tabindex: -1, ref: w})), g
        }

        return () => {
            const g = {ref: u, class: b.value, style: B.value, role: "listitem", onClick: k, onKeyup: z};
            return h.value === !0 ? (g.tabindex = e.tabindex || "0", Object.assign(g, r.value)) : p.value === !0 && (g["aria-disabled"] = "true"), q(c.value, g, d())
        }
    }
});
const sl = ["ul", "ol"];
var cl = $({
    name: "QList",
    props: {
        ...ge,
        bordered: Boolean,
        dense: Boolean,
        separator: Boolean,
        padding: Boolean,
        tag: {type: String, default: "div"}
    },
    setup(e, {slots: l}) {
        const o = Q(), i = we(e, o.proxy.$q), t = f(() => sl.includes(e.tag) ? null : "list"),
            a = f(() => "q-list" + (e.bordered === !0 ? " q-list--bordered" : "") + (e.dense === !0 ? " q-list--dense" : "") + (e.separator === !0 ? " q-list--separator" : "") + (i.value === !0 ? " q-list--dark" : "") + (e.padding === !0 ? " q-list--padding" : ""));
        return () => q(e.tag, {class: a.value, role: t.value}, le(l.default))
    }
}), dl = $({
    props: ["store", "barStyle", "verticalBarStyle", "horizontalBarStyle"], setup(e) {
        return () => [q("div", {
            class: e.store.scroll.vertical.barClass.value,
            style: [e.barStyle, e.verticalBarStyle],
            "aria-hidden": "true",
            onMousedown: e.store.onVerticalMousedown
        }), q("div", {
            class: e.store.scroll.horizontal.barClass.value,
            style: [e.barStyle, e.horizontalBarStyle],
            "aria-hidden": "true",
            onMousedown: e.store.onHorizontalMousedown
        }), he(q("div", {
            ref: e.store.scroll.vertical.ref,
            class: e.store.scroll.vertical.thumbClass.value,
            style: e.store.scroll.vertical.style.value,
            "aria-hidden": "true"
        }), e.store.thumbVertDir), he(q("div", {
            ref: e.store.scroll.horizontal.ref,
            class: e.store.scroll.horizontal.thumbClass.value,
            style: e.store.scroll.horizontal.style.value,
            "aria-hidden": "true"
        }), e.store.thumbHorizDir)]
    }
});
const vl = [Element, String], fl = [null, document, document.body, document.scrollingElement, document.documentElement];

function ml(e, l) {
    let o = At(l);
    if (o === void 0) {
        if (e == null) return window;
        o = e.closest(".scroll,.scroll-y,.overflow-auto")
    }
    return fl.includes(o) ? window : o
}

function Qe(e) {
    return e === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : e.scrollTop
}

function Ie(e) {
    return e === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : e.scrollLeft
}

function wt(e, l, o = 0) {
    const i = arguments[3] === void 0 ? performance.now() : arguments[3], t = Qe(e);
    if (o <= 0) {
        t !== l && Ae(e, l);
        return
    }
    requestAnimationFrame(a => {
        const r = a - i, n = t + (l - t) / Math.max(r, o) * r;
        Ae(e, n), n !== l && wt(e, l, o - r, a)
    })
}

function pt(e, l, o = 0) {
    const i = arguments[3] === void 0 ? performance.now() : arguments[3], t = Ie(e);
    if (o <= 0) {
        t !== l && Ve(e, l);
        return
    }
    requestAnimationFrame(a => {
        const r = a - i, n = t + (l - t) / Math.max(r, o) * r;
        Ve(e, n), n !== l && pt(e, l, o - r, a)
    })
}

function Ae(e, l) {
    if (e === window) {
        window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, l);
        return
    }
    e.scrollTop = l
}

function Ve(e, l) {
    if (e === window) {
        window.scrollTo(l, window.pageYOffset || window.scrollY || document.body.scrollTop || 0);
        return
    }
    e.scrollLeft = l
}

function et(e, l, o) {
    if (o) {
        wt(e, l, o);
        return
    }
    Ae(e, l)
}

function xe(e, l, o) {
    if (o) {
        pt(e, l, o);
        return
    }
    Ve(e, l)
}

let fe;

function Be() {
    if (fe !== void 0) return fe;
    const e = document.createElement("p"), l = document.createElement("div");
    Ne(e, {width: "100%", height: "200px"}), Ne(l, {
        position: "absolute",
        top: "0px",
        left: "0px",
        visibility: "hidden",
        width: "200px",
        height: "150px",
        overflow: "hidden"
    }), l.appendChild(e), document.body.appendChild(l);
    const o = e.offsetWidth;
    l.style.overflow = "scroll";
    let i = e.offsetWidth;
    return o === i && (i = l.clientWidth), l.remove(), fe = o - i, fe
}

function hl(e, l = !0) {
    return !e || e.nodeType !== Node.ELEMENT_NODE ? !1 : l ? e.scrollHeight > e.clientHeight && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"])) : e.scrollWidth > e.clientWidth && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]))
}

const {passive: tt} = W, bl = ["both", "horizontal", "vertical"];
var St = $({
    name: "QScrollObserver",
    props: {
        axis: {type: String, validator: e => bl.includes(e), default: "vertical"},
        debounce: [String, Number],
        scrollTarget: vl
    },
    emits: ["scroll"],
    setup(e, {emit: l}) {
        const o = {
            position: {top: 0, left: 0},
            direction: "down",
            directionChanged: !1,
            delta: {top: 0, left: 0},
            inflectionPoint: {top: 0, left: 0}
        };
        let i = null, t, a;
        L(() => e.scrollTarget, () => {
            c(), n()
        });

        function r() {
            i !== null && i();
            const w = Math.max(0, Qe(t)), p = Ie(t), h = {top: w - o.position.top, left: p - o.position.left};
            if (e.axis === "vertical" && h.top === 0 || e.axis === "horizontal" && h.left === 0) return;
            const b = Math.abs(h.top) >= Math.abs(h.left) ? h.top < 0 ? "up" : "down" : h.left < 0 ? "left" : "right";
            o.position = {
                top: w,
                left: p
            }, o.directionChanged = o.direction !== b, o.delta = h, o.directionChanged === !0 && (o.direction = b, o.inflectionPoint = o.position), l("scroll", {...o})
        }

        function n() {
            t = ml(a, e.scrollTarget), t.addEventListener("scroll", v, tt), v(!0)
        }

        function c() {
            t !== void 0 && (t.removeEventListener("scroll", v, tt), t = void 0)
        }

        function v(w) {
            if (w === !0 || e.debounce === 0 || e.debounce === "0") r(); else if (i === null) {
                const [p, h] = e.debounce ? [setTimeout(r, e.debounce), clearTimeout] : [requestAnimationFrame(r), cancelAnimationFrame];
                i = () => {
                    h(p), i = null
                }
            }
        }

        const {proxy: u} = Q();
        return L(() => u.$q.lang.rtl, r), oe(() => {
            a = u.$el.parentNode, n()
        }), Z(() => {
            i !== null && i(), c()
        }), Object.assign(u, {trigger: v, getPosition: () => o}), De
    }
});
const Fe = {left: !0, right: !0, up: !0, down: !0, horizontal: !0, vertical: !0}, yl = Object.keys(Fe);
Fe.all = !0;

function lt(e) {
    const l = {};
    for (const o of yl) e[o] === !0 && (l[o] = !0);
    return Object.keys(l).length === 0 ? Fe : (l.horizontal === !0 ? l.left = l.right = !0 : l.left === !0 && l.right === !0 && (l.horizontal = !0), l.vertical === !0 ? l.up = l.down = !0 : l.up === !0 && l.down === !0 && (l.vertical = !0), l.horizontal === !0 && l.vertical === !0 && (l.all = !0), l)
}

const gl = ["INPUT", "TEXTAREA"];

function ot(e, l) {
    return l.event === void 0 && e.target !== void 0 && e.target.draggable !== !0 && typeof l.handler == "function" && gl.includes(e.target.nodeName.toUpperCase()) === !1 && (e.qClonedBy === void 0 || e.qClonedBy.indexOf(l.uid) === -1)
}

function wl() {
    if (window.getSelection !== void 0) {
        const e = window.getSelection();
        e.empty !== void 0 ? e.empty() : e.removeAllRanges !== void 0 && (e.removeAllRanges(), Vt.is.mobile !== !0 && e.addRange(document.createRange()))
    } else document.selection !== void 0 && document.selection.empty()
}

function Ee(e, l, o) {
    const i = He(e);
    let t, a = i.left - l.event.x, r = i.top - l.event.y, n = Math.abs(a), c = Math.abs(r);
    const v = l.direction;
    v.horizontal === !0 && v.vertical !== !0 ? t = a < 0 ? "left" : "right" : v.horizontal !== !0 && v.vertical === !0 ? t = r < 0 ? "up" : "down" : v.up === !0 && r < 0 ? (t = "up", n > c && (v.left === !0 && a < 0 ? t = "left" : v.right === !0 && a > 0 && (t = "right"))) : v.down === !0 && r > 0 ? (t = "down", n > c && (v.left === !0 && a < 0 ? t = "left" : v.right === !0 && a > 0 && (t = "right"))) : v.left === !0 && a < 0 ? (t = "left", n < c && (v.up === !0 && r < 0 ? t = "up" : v.down === !0 && r > 0 && (t = "down"))) : v.right === !0 && a > 0 && (t = "right", n < c && (v.up === !0 && r < 0 ? t = "up" : v.down === !0 && r > 0 && (t = "down")));
    let u = !1;
    if (t === void 0 && o === !1) {
        if (l.event.isFirst === !0 || l.event.lastDir === void 0) return {};
        t = l.event.lastDir, u = !0, t === "left" || t === "right" ? (i.left -= a, n = 0, a = 0) : (i.top -= r, c = 0, r = 0)
    }
    return {
        synthetic: u,
        payload: {
            evt: e,
            touch: l.event.mouse !== !0,
            mouse: l.event.mouse === !0,
            position: i,
            direction: t,
            isFirst: l.event.isFirst,
            isFinal: o === !0,
            duration: Date.now() - l.event.time,
            distance: {x: n, y: c},
            offset: {x: a, y: r},
            delta: {x: i.left - l.event.lastX, y: i.top - l.event.lastY}
        }
    }
}

let pl = 0;
var ue = Dt({
    name: "touch-pan", beforeMount(e, {value: l, modifiers: o}) {
        if (o.mouse !== !0 && R.has.touch !== !0) return;

        function i(a, r) {
            o.mouse === !0 && r === !0 ? Re(a) : (o.stop === !0 && Ce(a), o.prevent === !0 && Xe(a))
        }

        const t = {
            uid: "qvtp_" + pl++, handler: l, modifiers: o, direction: lt(o), noop: De, mouseStart(a) {
                ot(a, t) && Rt(a) && (de(t, "temp", [[document, "mousemove", "move", "notPassiveCapture"], [document, "mouseup", "end", "passiveCapture"]]), t.start(a, !0))
            }, touchStart(a) {
                if (ot(a, t)) {
                    const r = a.target;
                    de(t, "temp", [[r, "touchmove", "move", "notPassiveCapture"], [r, "touchcancel", "end", "passiveCapture"], [r, "touchend", "end", "passiveCapture"]]), t.start(a)
                }
            }, start(a, r) {
                if (R.is.firefox === !0 && Te(e, !0), t.lastEvt = a, r === !0 || o.stop === !0) {
                    if (t.direction.all !== !0 && (r !== !0 || t.modifiers.mouseAllDir !== !0 && t.modifiers.mousealldir !== !0)) {
                        const v = a.type.indexOf("mouse") !== -1 ? new MouseEvent(a.type, a) : new TouchEvent(a.type, a);
                        a.defaultPrevented === !0 && Xe(v), a.cancelBubble === !0 && Ce(v), Object.assign(v, {
                            qKeyEvent: a.qKeyEvent,
                            qClickOutside: a.qClickOutside,
                            qAnchorHandled: a.qAnchorHandled,
                            qClonedBy: a.qClonedBy === void 0 ? [t.uid] : a.qClonedBy.concat(t.uid)
                        }), t.initialEvent = {target: a.target, event: v}
                    }
                    Ce(a)
                }
                const {left: n, top: c} = He(a);
                t.event = {
                    x: n,
                    y: c,
                    time: Date.now(),
                    mouse: r === !0,
                    detected: !1,
                    isFirst: !0,
                    isFinal: !1,
                    lastX: n,
                    lastY: c
                }
            }, move(a) {
                if (t.event === void 0) return;
                const r = He(a), n = r.left - t.event.x, c = r.top - t.event.y;
                if (n === 0 && c === 0) return;
                t.lastEvt = a;
                const v = t.event.mouse === !0, u = () => {
                    i(a, v);
                    let h;
                    o.preserveCursor !== !0 && o.preservecursor !== !0 && (h = document.documentElement.style.cursor || "", document.documentElement.style.cursor = "grabbing"), v === !0 && document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), wl(), t.styleCleanup = b => {
                        if (t.styleCleanup = void 0, h !== void 0 && (document.documentElement.style.cursor = h), document.body.classList.remove("non-selectable"), v === !0) {
                            const B = () => {
                                document.body.classList.remove("no-pointer-events--children")
                            };
                            b !== void 0 ? setTimeout(() => {
                                B(), b()
                            }, 50) : B()
                        } else b !== void 0 && b()
                    }
                };
                if (t.event.detected === !0) {
                    t.event.isFirst !== !0 && i(a, t.event.mouse);
                    const {payload: h, synthetic: b} = Ee(a, t, !1);
                    h !== void 0 && (t.handler(h) === !1 ? t.end(a) : (t.styleCleanup === void 0 && t.event.isFirst === !0 && u(), t.event.lastX = h.position.left, t.event.lastY = h.position.top, t.event.lastDir = b === !0 ? void 0 : h.direction, t.event.isFirst = !1));
                    return
                }
                if (t.direction.all === !0 || v === !0 && (t.modifiers.mouseAllDir === !0 || t.modifiers.mousealldir === !0)) {
                    u(), t.event.detected = !0, t.move(a);
                    return
                }
                const w = Math.abs(n), p = Math.abs(c);
                w !== p && (t.direction.horizontal === !0 && w > p || t.direction.vertical === !0 && w < p || t.direction.up === !0 && w < p && c < 0 || t.direction.down === !0 && w < p && c > 0 || t.direction.left === !0 && w > p && n < 0 || t.direction.right === !0 && w > p && n > 0 ? (t.event.detected = !0, t.move(a)) : t.end(a, !0))
            }, end(a, r) {
                if (t.event !== void 0) {
                    if (Le(t, "temp"), R.is.firefox === !0 && Te(e, !1), r === !0) t.styleCleanup !== void 0 && t.styleCleanup(), t.event.detected !== !0 && t.initialEvent !== void 0 && t.initialEvent.target.dispatchEvent(t.initialEvent.event); else if (t.event.detected === !0) {
                        t.event.isFirst === !0 && t.handler(Ee(a === void 0 ? t.lastEvt : a, t).payload);
                        const {payload: n} = Ee(a === void 0 ? t.lastEvt : a, t, !0), c = () => {
                            t.handler(n)
                        };
                        t.styleCleanup !== void 0 ? t.styleCleanup(c) : c()
                    }
                    t.event = void 0, t.initialEvent = void 0, t.lastEvt = void 0
                }
            }
        };
        if (e.__qtouchpan = t, o.mouse === !0) {
            const a = o.mouseCapture === !0 || o.mousecapture === !0 ? "Capture" : "";
            de(t, "main", [[e, "mousedown", "mouseStart", `passive${a}`]])
        }
        R.has.touch === !0 && de(t, "main", [[e, "touchstart", "touchStart", `passive${o.capture === !0 ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]])
    }, updated(e, l) {
        const o = e.__qtouchpan;
        o !== void 0 && (l.oldValue !== l.value && (typeof value != "function" && o.end(), o.handler = l.value), o.direction = lt(l.modifiers))
    }, beforeUnmount(e) {
        const l = e.__qtouchpan;
        l !== void 0 && (l.event !== void 0 && l.end(), Le(l, "main"), Le(l, "temp"), R.is.firefox === !0 && Te(e, !1), l.styleCleanup !== void 0 && l.styleCleanup(), delete e.__qtouchpan)
    }
});

function N(e, l, o) {
    return o <= l ? l : Math.min(o, Math.max(l, e))
}

const at = ["vertical", "horizontal"], Oe = {
    vertical: {offset: "offsetY", scroll: "scrollTop", dir: "down", dist: "y"},
    horizontal: {offset: "offsetX", scroll: "scrollLeft", dir: "right", dist: "x"}
}, nt = {prevent: !0, mouse: !0, mouseAllDir: !0}, it = e => e >= 250 ? 50 : Math.ceil(e / 5);
var Sl = $({
    name: "QScrollArea",
    props: {
        ...ge,
        thumbStyle: Object,
        verticalThumbStyle: Object,
        horizontalThumbStyle: Object,
        barStyle: [Array, String, Object],
        verticalBarStyle: [Array, String, Object],
        horizontalBarStyle: [Array, String, Object],
        verticalOffset: {type: Array, default: [0, 0]},
        horizontalOffset: {type: Array, default: [0, 0]},
        contentStyle: [Array, String, Object],
        contentActiveStyle: [Array, String, Object],
        delay: {type: [String, Number], default: 1e3},
        visible: {type: Boolean, default: null},
        tabindex: [String, Number],
        onScroll: Function
    },
    setup(e, {slots: l, emit: o}) {
        const i = T(!1), t = T(!1), a = T(!1), r = {vertical: T(0), horizontal: T(0)}, n = {
            vertical: {ref: T(null), position: T(0), size: T(0)},
            horizontal: {ref: T(null), position: T(0), size: T(0)}
        }, {proxy: c} = Q(), v = we(e, c.$q);
        let u = null, w;
        const p = T(null), h = f(() => "q-scrollarea" + (v.value === !0 ? " q-scrollarea--dark" : ""));
        Object.assign(r, {
            verticalInner: f(() => r.vertical.value - e.verticalOffset[0] - e.verticalOffset[1]),
            horizontalInner: f(() => r.horizontal.value - e.horizontalOffset[0] - e.horizontalOffset[1])
        }), n.vertical.percentage = f(() => {
            const m = n.vertical.size.value - r.vertical.value;
            if (m <= 0) return 0;
            const y = N(n.vertical.position.value / m, 0, 1);
            return Math.round(y * 1e4) / 1e4
        }), n.vertical.thumbHidden = f(() => (e.visible === null ? a.value : e.visible) !== !0 && i.value === !1 && t.value === !1 || n.vertical.size.value <= r.vertical.value + 1), n.vertical.thumbStart = f(() => e.verticalOffset[0] + n.vertical.percentage.value * (r.verticalInner.value - n.vertical.thumbSize.value)), n.vertical.thumbSize = f(() => Math.round(N(r.verticalInner.value * r.verticalInner.value / n.vertical.size.value, it(r.verticalInner.value), r.verticalInner.value))), n.vertical.style = f(() => ({
            ...e.thumbStyle, ...e.verticalThumbStyle,
            top: `${n.vertical.thumbStart.value}px`,
            height: `${n.vertical.thumbSize.value}px`,
            right: `${e.horizontalOffset[1]}px`
        })), n.vertical.thumbClass = f(() => "q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" + (n.vertical.thumbHidden.value === !0 ? " q-scrollarea__thumb--invisible" : "")), n.vertical.barClass = f(() => "q-scrollarea__bar q-scrollarea__bar--v absolute-right" + (n.vertical.thumbHidden.value === !0 ? " q-scrollarea__bar--invisible" : "")), n.horizontal.percentage = f(() => {
            const m = n.horizontal.size.value - r.horizontal.value;
            if (m <= 0) return 0;
            const y = N(Math.abs(n.horizontal.position.value) / m, 0, 1);
            return Math.round(y * 1e4) / 1e4
        }), n.horizontal.thumbHidden = f(() => (e.visible === null ? a.value : e.visible) !== !0 && i.value === !1 && t.value === !1 || n.horizontal.size.value <= r.horizontal.value + 1), n.horizontal.thumbStart = f(() => e.horizontalOffset[0] + n.horizontal.percentage.value * (r.horizontalInner.value - n.horizontal.thumbSize.value)), n.horizontal.thumbSize = f(() => Math.round(N(r.horizontalInner.value * r.horizontalInner.value / n.horizontal.size.value, it(r.horizontalInner.value), r.horizontalInner.value))), n.horizontal.style = f(() => ({
            ...e.thumbStyle, ...e.horizontalThumbStyle,
            [c.$q.lang.rtl === !0 ? "right" : "left"]: `${n.horizontal.thumbStart.value}px`,
            width: `${n.horizontal.thumbSize.value}px`,
            bottom: `${e.verticalOffset[1]}px`
        })), n.horizontal.thumbClass = f(() => "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (n.horizontal.thumbHidden.value === !0 ? " q-scrollarea__thumb--invisible" : "")), n.horizontal.barClass = f(() => "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (n.horizontal.thumbHidden.value === !0 ? " q-scrollarea__bar--invisible" : ""));
        const b = f(() => n.vertical.thumbHidden.value === !0 && n.horizontal.thumbHidden.value === !0 ? e.contentStyle : e.contentActiveStyle);

        function B() {
            const m = {};
            return at.forEach(y => {
                const C = n[y];
                Object.assign(m, {
                    [y + "Position"]: C.position.value,
                    [y + "Percentage"]: C.percentage.value,
                    [y + "Size"]: C.size.value,
                    [y + "ContainerSize"]: r[y].value,
                    [y + "ContainerInnerSize"]: r[y + "Inner"].value
                })
            }), m
        }

        const k = Qt(() => {
            const m = B();
            m.ref = c, o("scroll", m)
        }, 0);

        function z(m, y, C) {
            if (at.includes(m) === !1) {
                console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
                return
            }
            (m === "vertical" ? et : xe)(p.value, y, C)
        }

        function d({height: m, width: y}) {
            let C = !1;
            r.vertical.value !== m && (r.vertical.value = m, C = !0), r.horizontal.value !== y && (r.horizontal.value = y, C = !0), C === !0 && H()
        }

        function g({position: m}) {
            let y = !1;
            n.vertical.position.value !== m.top && (n.vertical.position.value = m.top, y = !0), n.horizontal.position.value !== m.left && (n.horizontal.position.value = m.left, y = !0), y === !0 && H()
        }

        function S({height: m, width: y}) {
            n.horizontal.size.value !== y && (n.horizontal.size.value = y, H()), n.vertical.size.value !== m && (n.vertical.size.value = m, H())
        }

        function x(m, y) {
            const C = n[y];
            if (m.isFirst === !0) {
                if (C.thumbHidden.value === !0) return;
                w = C.position.value, t.value = !0
            } else if (t.value !== !0) return;
            m.isFinal === !0 && (t.value = !1);
            const I = Oe[y], j = (C.size.value - r[y].value) / (r[y + "Inner"].value - C.thumbSize.value),
                F = m.distance[I.dist], ne = w + (m.direction === I.dir ? 1 : -1) * F * j;
            Y(ne, y)
        }

        function E(m, y) {
            const C = n[y];
            if (C.thumbHidden.value !== !0) {
                const I = y === "vertical" ? e.verticalOffset[0] : e.horizontalOffset[0], j = m[Oe[y].offset] - I,
                    F = C.thumbStart.value - I;
                if (j < F || j > F + C.thumbSize.value) {
                    const ne = j - C.thumbSize.value / 2, pe = N(ne / (r[y + "Inner"].value - C.thumbSize.value), 0, 1);
                    Y(pe * Math.max(0, C.size.value - r[y].value), y)
                }
                C.ref.value !== null && C.ref.value.dispatchEvent(new MouseEvent(m.type, m))
            }
        }

        function H() {
            i.value = !0, u !== null && clearTimeout(u), u = setTimeout(() => {
                u = null, i.value = !1
            }, e.delay), e.onScroll !== void 0 && k()
        }

        function Y(m, y) {
            p.value[Oe[y].scroll] = m
        }

        let O = null;

        function D() {
            O !== null && clearTimeout(O), O = setTimeout(() => {
                O = null, a.value = !0
            }, c.$q.platform.is.ios ? 50 : 0)
        }

        function U() {
            O !== null && (clearTimeout(O), O = null), a.value = !1
        }

        let ee = null;
        L(() => c.$q.lang.rtl, m => {
            p.value !== null && xe(p.value, Math.abs(n.horizontal.position.value) * (m === !0 ? -1 : 1))
        }), ht(() => {
            ee = {top: n.vertical.position.value, left: n.horizontal.position.value}
        }), It(() => {
            if (ee === null) return;
            const m = p.value;
            m !== null && (xe(m, ee.left), et(m, ee.top))
        }), Z(k.cancel), Object.assign(c, {
            getScrollTarget: () => p.value,
            getScroll: B,
            getScrollPosition: () => ({top: n.vertical.position.value, left: n.horizontal.position.value}),
            getScrollPercentage: () => ({top: n.vertical.percentage.value, left: n.horizontal.percentage.value}),
            setScrollPosition: z,
            setScrollPercentage(m, y, C) {
                z(m, y * (n[m].size.value - r[m].value) * (m === "horizontal" && c.$q.lang.rtl === !0 ? -1 : 1), C)
            }
        });
        const K = {
            scroll: n, thumbVertDir: [[ue, m => {
                x(m, "vertical")
            }, void 0, {vertical: !0, ...nt}]], thumbHorizDir: [[ue, m => {
                x(m, "horizontal")
            }, void 0, {horizontal: !0, ...nt}]], onVerticalMousedown(m) {
                E(m, "vertical")
            }, onHorizontalMousedown(m) {
                E(m, "horizontal")
            }
        };
        return () => q("div", {class: h.value, onMouseenter: D, onMouseleave: U}, [q("div", {
            ref: p,
            class: "q-scrollarea__container scroll relative-position fit hide-scrollbar",
            tabindex: e.tabindex !== void 0 ? e.tabindex : void 0
        }, [q("div", {class: "q-scrollarea__content absolute", style: b.value}, bt(l.default, [q(se, {
            debounce: 0,
            onResize: S
        })])), q(St, {axis: "both", onScroll: g})]), q(se, {debounce: 0, onResize: d}), q(dl, {
            store: K,
            barStyle: e.barStyle,
            verticalBarStyle: e.verticalBarStyle,
            horizontalBarStyle: e.horizontalBarStyle
        })])
    }
});

function zl(e, l, o) {
    let i;

    function t() {
        i !== void 0 && (Ye.remove(i), i = void 0)
    }

    return Z(() => {
        e.value === !0 && t()
    }), {
        removeFromHistory: t, addToHistory() {
            i = {condition: () => o.value === !0, handler: l}, Ye.add(i)
        }
    }
}

const ql = {modelValue: {type: Boolean, default: null}, "onUpdate:modelValue": [Function, Array]},
    _l = ["beforeShow", "show", "beforeHide", "hide"];

function Tl({showing: e, canShow: l, hideOnRouteChange: o, handleShow: i, handleHide: t, processOnMount: a}) {
    const r = Q(), {props: n, emit: c, proxy: v} = r;
    let u;

    function w(d) {
        e.value === !0 ? b(d) : p(d)
    }

    function p(d) {
        if (n.disable === !0 || d !== void 0 && d.qAnchorHandled === !0 || l !== void 0 && l(d) !== !0) return;
        const g = n["onUpdate:modelValue"] !== void 0;
        g === !0 && (c("update:modelValue", !0), u = d, ae(() => {
            u === d && (u = void 0)
        })), (n.modelValue === null || g === !1) && h(d)
    }

    function h(d) {
        e.value !== !0 && (e.value = !0, c("beforeShow", d), i !== void 0 ? i(d) : c("show", d))
    }

    function b(d) {
        if (n.disable === !0) return;
        const g = n["onUpdate:modelValue"] !== void 0;
        g === !0 && (c("update:modelValue", !1), u = d, ae(() => {
            u === d && (u = void 0)
        })), (n.modelValue === null || g === !1) && B(d)
    }

    function B(d) {
        e.value !== !1 && (e.value = !1, c("beforeHide", d), t !== void 0 ? t(d) : c("hide", d))
    }

    function k(d) {
        n.disable === !0 && d === !0 ? n["onUpdate:modelValue"] !== void 0 && c("update:modelValue", !1) : d === !0 !== e.value && (d === !0 ? h : B)(u)
    }

    L(() => n.modelValue, k), o !== void 0 && Ft(r) === !0 && L(() => v.$route.fullPath, () => {
        o.value === !0 && e.value === !0 && b()
    }), a === !0 && oe(() => {
        k(n.modelValue)
    });
    const z = {show: p, hide: b, toggle: w};
    return Object.assign(v, z), z
}

let ie = 0, Me, Pe, re, $e = !1, rt, ut, st, te = null;

function Cl(e) {
    Ll(e) && Re(e)
}

function Ll(e) {
    if (e.target === document.body || e.target.classList.contains("q-layout__backdrop")) return !0;
    const l = Wt(e), o = e.shiftKey && !e.deltaX, i = !o && Math.abs(e.deltaX) <= Math.abs(e.deltaY),
        t = o || i ? e.deltaY : e.deltaX;
    for (let a = 0; a < l.length; a++) {
        const r = l[a];
        if (hl(r, i)) return i ? t < 0 && r.scrollTop === 0 ? !0 : t > 0 && r.scrollTop + r.clientHeight === r.scrollHeight : t < 0 && r.scrollLeft === 0 ? !0 : t > 0 && r.scrollLeft + r.clientWidth === r.scrollWidth
    }
    return !0
}

function ct(e) {
    e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop)
}

function me(e) {
    $e !== !0 && ($e = !0, requestAnimationFrame(() => {
        $e = !1;
        const {height: l} = e.target, {clientHeight: o, scrollTop: i} = document.scrollingElement;
        (re === void 0 || l !== window.innerHeight) && (re = o - l, document.scrollingElement.scrollTop = i), i > re && (document.scrollingElement.scrollTop -= Math.ceil((i - re) / 8))
    }))
}

function dt(e) {
    const l = document.body, o = window.visualViewport !== void 0;
    if (e === "add") {
        const {overflowY: i, overflowX: t} = window.getComputedStyle(l);
        Me = Ie(window), Pe = Qe(window), rt = l.style.left, ut = l.style.top, st = window.location.href, l.style.left = `-${Me}px`, l.style.top = `-${Pe}px`, t !== "hidden" && (t === "scroll" || l.scrollWidth > window.innerWidth) && l.classList.add("q-body--force-scrollbar-x"), i !== "hidden" && (i === "scroll" || l.scrollHeight > window.innerHeight) && l.classList.add("q-body--force-scrollbar-y"), l.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = !0, R.is.ios === !0 && (o === !0 ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", me, W.passiveCapture), window.visualViewport.addEventListener("scroll", me, W.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", ct, W.passiveCapture))
    }
    R.is.desktop === !0 && R.is.mac === !0 && window[`${e}EventListener`]("wheel", Cl, W.notPassive), e === "remove" && (R.is.ios === !0 && (o === !0 ? (window.visualViewport.removeEventListener("resize", me, W.passiveCapture), window.visualViewport.removeEventListener("scroll", me, W.passiveCapture)) : window.removeEventListener("scroll", ct, W.passiveCapture)), l.classList.remove("q-body--prevent-scroll"), l.classList.remove("q-body--force-scrollbar-x"), l.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = !1, l.style.left = rt, l.style.top = ut, window.location.href === st && window.scrollTo(Me, Pe), re = void 0)
}

function kl(e) {
    let l = "add";
    if (e === !0) {
        if (ie++, te !== null) {
            clearTimeout(te), te = null;
            return
        }
        if (ie > 1) return
    } else {
        if (ie === 0 || (ie--, ie > 0)) return;
        if (l = "remove", R.is.ios === !0 && R.is.nativeMobile === !0) {
            te !== null && clearTimeout(te), te = setTimeout(() => {
                dt(l), te = null
            }, 100);
            return
        }
    }
    dt(l)
}

function xl() {
    let e;
    return {
        preventBodyScroll(l) {
            l !== e && (e !== void 0 || l === !0) && (e = l, kl(l))
        }
    }
}

function Bl() {
    let e = null;
    const l = Q();

    function o() {
        e !== null && (clearTimeout(e), e = null)
    }

    return ht(o), Z(o), {
        removeTimeout: o, registerTimeout(i, t) {
            o(), jt(l) === !1 && (e = setTimeout(() => {
                e = null, i()
            }, t))
        }
    }
}

const vt = 150;
var El = $({
    name: "QDrawer",
    inheritAttrs: !1,
    props: {
        ...ql, ...ge,
        side: {type: String, default: "left", validator: e => ["left", "right"].includes(e)},
        width: {type: Number, default: 300},
        mini: Boolean,
        miniToOverlay: Boolean,
        miniWidth: {type: Number, default: 57},
        noMiniAnimation: Boolean,
        breakpoint: {type: Number, default: 1023},
        showIfAbove: Boolean,
        behavior: {type: String, validator: e => ["default", "desktop", "mobile"].includes(e), default: "default"},
        bordered: Boolean,
        elevated: Boolean,
        overlay: Boolean,
        persistent: Boolean,
        noSwipeOpen: Boolean,
        noSwipeClose: Boolean,
        noSwipeBackdrop: Boolean
    },
    emits: [..._l, "onLayout", "miniState"],
    setup(e, {slots: l, emit: o, attrs: i}) {
        const t = Q(), {proxy: {$q: a}} = t, r = we(e, a), {preventBodyScroll: n} = xl(), {
            registerTimeout: c,
            removeTimeout: v
        } = Bl(), u = be(ye, X);
        if (u === X) return console.error("QDrawer needs to be child of QLayout"), X;
        let w, p = null, h;
        const b = T(e.behavior === "mobile" || e.behavior !== "desktop" && u.totalWidth.value <= e.breakpoint),
            B = f(() => e.mini === !0 && b.value !== !0), k = f(() => B.value === !0 ? e.miniWidth : e.width),
            z = T(e.showIfAbove === !0 && b.value === !1 ? !0 : e.modelValue === !0),
            d = f(() => e.persistent !== !0 && (b.value === !0 || ne.value === !0));

        function g(s, _) {
            if (H(), s !== !1 && u.animate(), A(0), b.value === !0) {
                const P = u.instances[C.value];
                P !== void 0 && P.belowBreakpoint === !0 && P.hide(!1), G(1), u.isContainer.value !== !0 && n(!0)
            } else G(0), s !== !1 && ze(!1);
            c(() => {
                s !== !1 && ze(!0), _ !== !0 && o("show", s)
            }, vt)
        }

        function S(s, _) {
            Y(), s !== !1 && u.animate(), G(0), A(U.value * k.value), qe(), _ !== !0 ? c(() => {
                o("hide", s)
            }, vt) : v()
        }

        const {show: x, hide: E} = Tl({
                showing: z,
                hideOnRouteChange: d,
                handleShow: g,
                handleHide: S
            }), {addToHistory: H, removeFromHistory: Y} = zl(z, E, d), O = {belowBreakpoint: b, hide: E},
            D = f(() => e.side === "right"), U = f(() => (a.lang.rtl === !0 ? -1 : 1) * (D.value === !0 ? 1 : -1)),
            ee = T(0), K = T(!1), m = T(!1), y = T(k.value * U.value), C = f(() => D.value === !0 ? "left" : "right"),
            I = f(() => z.value === !0 && b.value === !1 && e.overlay === !1 ? e.miniToOverlay === !0 ? e.miniWidth : k.value : 0),
            j = f(() => e.overlay === !0 || e.miniToOverlay === !0 || u.view.value.indexOf(D.value ? "R" : "L") !== -1 || a.platform.is.ios === !0 && u.isContainer.value === !0),
            F = f(() => e.overlay === !1 && z.value === !0 && b.value === !1),
            ne = f(() => e.overlay === !0 && z.value === !0 && b.value === !1),
            pe = f(() => "fullscreen q-drawer__backdrop" + (z.value === !1 && K.value === !1 ? " hidden" : "")),
            zt = f(() => ({backgroundColor: `rgba(0,0,0,${ee.value * .4})`})),
            We = f(() => D.value === !0 ? u.rows.value.top[2] === "r" : u.rows.value.top[0] === "l"),
            qt = f(() => D.value === !0 ? u.rows.value.bottom[2] === "r" : u.rows.value.bottom[0] === "l"),
            _t = f(() => {
                const s = {};
                return u.header.space === !0 && We.value === !1 && (j.value === !0 ? s.top = `${u.header.offset}px` : u.header.space === !0 && (s.top = `${u.header.size}px`)), u.footer.space === !0 && qt.value === !1 && (j.value === !0 ? s.bottom = `${u.footer.offset}px` : u.footer.space === !0 && (s.bottom = `${u.footer.size}px`)), s
            }), Tt = f(() => {
                const s = {width: `${k.value}px`, transform: `translateX(${y.value}px)`};
                return b.value === !0 ? s : Object.assign(s, _t.value)
            }), Ct = f(() => "q-drawer__content fit " + (u.isContainer.value !== !0 ? "scroll" : "overflow-auto")),
            Lt = f(() => `q-drawer q-drawer--${e.side}` + (m.value === !0 ? " q-drawer--mini-animate" : "") + (e.bordered === !0 ? " q-drawer--bordered" : "") + (r.value === !0 ? " q-drawer--dark q-dark" : "") + (K.value === !0 ? " no-transition" : z.value === !0 ? "" : " q-layout--prevent-focus") + (b.value === !0 ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding" : ` q-drawer--${B.value === !0 ? "mini" : "standard"}` + (j.value === !0 || F.value !== !0 ? " fixed" : "") + (e.overlay === !0 || e.miniToOverlay === !0 ? " q-drawer--on-top" : "") + (We.value === !0 ? " q-drawer--top-padding" : ""))),
            kt = f(() => {
                const s = a.lang.rtl === !0 ? e.side : C.value;
                return [[ue, Ot, void 0, {[s]: !0, mouse: !0}]]
            }), xt = f(() => {
                const s = a.lang.rtl === !0 ? C.value : e.side;
                return [[ue, je, void 0, {[s]: !0, mouse: !0}]]
            }), Bt = f(() => {
                const s = a.lang.rtl === !0 ? C.value : e.side;
                return [[ue, je, void 0, {[s]: !0, mouse: !0, mouseAllDir: !0}]]
            });

        function Se() {
            Mt(b, e.behavior === "mobile" || e.behavior !== "desktop" && u.totalWidth.value <= e.breakpoint)
        }

        L(b, s => {
            s === !0 ? (w = z.value, z.value === !0 && E(!1)) : e.overlay === !1 && e.behavior !== "mobile" && w !== !1 && (z.value === !0 ? (A(0), G(0), qe()) : x(!1))
        }), L(() => e.side, (s, _) => {
            u.instances[_] === O && (u.instances[_] = void 0, u[_].space = !1, u[_].offset = 0), u.instances[s] = O, u[s].size = k.value, u[s].space = F.value, u[s].offset = I.value
        }), L(u.totalWidth, () => {
            (u.isContainer.value === !0 || document.qScrollPrevented !== !0) && Se()
        }), L(() => e.behavior + e.breakpoint, Se), L(u.isContainer, s => {
            z.value === !0 && n(s !== !0), s === !0 && Se()
        }), L(u.scrollbarWidth, () => {
            A(z.value === !0 ? 0 : void 0)
        }), L(I, s => {
            J("offset", s)
        }), L(F, s => {
            o("onLayout", s), J("space", s)
        }), L(D, () => {
            A()
        }), L(k, s => {
            A(), _e(e.miniToOverlay, s)
        }), L(() => e.miniToOverlay, s => {
            _e(s, k.value)
        }), L(() => a.lang.rtl, () => {
            A()
        }), L(() => e.mini, () => {
            e.noMiniAnimation || e.modelValue === !0 && (Et(), u.animate())
        }), L(B, s => {
            o("miniState", s)
        });

        function A(s) {
            s === void 0 ? ae(() => {
                s = z.value === !0 ? 0 : k.value, A(U.value * s)
            }) : (u.isContainer.value === !0 && D.value === !0 && (b.value === !0 || Math.abs(s) === k.value) && (s += U.value * u.scrollbarWidth.value), y.value = s)
        }

        function G(s) {
            ee.value = s
        }

        function ze(s) {
            const _ = s === !0 ? "remove" : u.isContainer.value !== !0 ? "add" : "";
            _ !== "" && document.body.classList[_]("q-body--drawer-toggle")
        }

        function Et() {
            p !== null && clearTimeout(p), t.proxy && t.proxy.$el && t.proxy.$el.classList.add("q-drawer--mini-animate"), m.value = !0, p = setTimeout(() => {
                p = null, m.value = !1, t && t.proxy && t.proxy.$el && t.proxy.$el.classList.remove("q-drawer--mini-animate")
            }, 150)
        }

        function Ot(s) {
            if (z.value !== !1) return;
            const _ = k.value, P = N(s.distance.x, 0, _);
            if (s.isFinal === !0) {
                P >= Math.min(75, _) === !0 ? x() : (u.animate(), G(0), A(U.value * _)), K.value = !1;
                return
            }
            A((a.lang.rtl === !0 ? D.value !== !0 : D.value) ? Math.max(_ - P, 0) : Math.min(0, P - _)), G(N(P / _, 0, 1)), s.isFirst === !0 && (K.value = !0)
        }

        function je(s) {
            if (z.value !== !0) return;
            const _ = k.value, P = s.direction === e.side,
                ce = (a.lang.rtl === !0 ? P !== !0 : P) ? N(s.distance.x, 0, _) : 0;
            if (s.isFinal === !0) {
                Math.abs(ce) < Math.min(75, _) === !0 ? (u.animate(), G(1), A(0)) : E(), K.value = !1;
                return
            }
            A(U.value * ce), G(N(1 - ce / _, 0, 1)), s.isFirst === !0 && (K.value = !0)
        }

        function qe() {
            n(!1), ze(!0)
        }

        function J(s, _) {
            u.update(e.side, s, _)
        }

        function Mt(s, _) {
            s.value !== _ && (s.value = _)
        }

        function _e(s, _) {
            J("size", s === !0 ? e.miniWidth : _)
        }

        return u.instances[e.side] = O, _e(e.miniToOverlay, k.value), J("space", F.value), J("offset", I.value), e.showIfAbove === !0 && e.modelValue !== !0 && z.value === !0 && e["onUpdate:modelValue"] !== void 0 && o("update:modelValue", !0), oe(() => {
            o("onLayout", F.value), o("miniState", B.value), w = e.showIfAbove === !0;
            const s = () => {
                (z.value === !0 ? g : S)(!1, !0)
            };
            if (u.totalWidth.value !== 0) {
                ae(s);
                return
            }
            h = L(u.totalWidth, () => {
                h(), h = void 0, z.value === !1 && e.showIfAbove === !0 && b.value === !1 ? x(!1) : s()
            })
        }), Z(() => {
            h !== void 0 && h(), p !== null && (clearTimeout(p), p = null), z.value === !0 && qe(), u.instances[e.side] === O && (u.instances[e.side] = void 0, J("size", 0), J("offset", 0), J("space", !1))
        }), () => {
            const s = [];
            b.value === !0 && (e.noSwipeOpen === !1 && s.push(he(q("div", {
                key: "open",
                class: `q-drawer__opener fixed-${e.side}`,
                "aria-hidden": "true"
            }), kt.value)), s.push(Ue("div", {
                ref: "backdrop",
                class: pe.value,
                style: zt.value,
                "aria-hidden": "true",
                onClick: E
            }, void 0, "backdrop", e.noSwipeBackdrop !== !0 && z.value === !0, () => Bt.value)));
            const _ = B.value === !0 && l.mini !== void 0,
                P = [q("div", {...i, key: "" + _, class: [Ct.value, i.class]}, _ === !0 ? l.mini() : le(l.default))];
            return e.elevated === !0 && z.value === !0 && P.push(q("div", {class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"})), s.push(Ue("aside", {
                ref: "content",
                class: Lt.value,
                style: Tt.value
            }, P, "contentclose", e.noSwipeClose !== !0 && b.value === !0, () => xt.value)), q("div", {class: "q-drawer-container"}, s)
        }
    }
}), Ol = $({
    name: "QPageContainer", setup(e, {slots: l}) {
        const {proxy: {$q: o}} = Q(), i = be(ye, X);
        if (i === X) return console.error("QPageContainer needs to be child of QLayout"), X;
        yt(Nt, !0);
        const t = f(() => {
            const a = {};
            return i.header.space === !0 && (a.paddingTop = `${i.header.size}px`), i.right.space === !0 && (a[`padding${o.lang.rtl === !0 ? "Left" : "Right"}`] = `${i.right.size}px`), i.footer.space === !0 && (a.paddingBottom = `${i.footer.size}px`), i.left.space === !0 && (a[`padding${o.lang.rtl === !0 ? "Right" : "Left"}`] = `${i.left.size}px`), a
        });
        return () => q("div", {class: "q-page-container", style: t.value}, le(l.default))
    }
}), Ml = $({
    name: "QLayout",
    props: {
        container: Boolean,
        view: {
            type: String,
            default: "hhh lpr fff",
            validator: e => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())
        },
        onScroll: Function,
        onScrollHeight: Function,
        onResize: Function
    },
    setup(e, {slots: l, emit: o}) {
        const {proxy: {$q: i}} = Q(), t = T(null), a = T(i.screen.height),
            r = T(e.container === !0 ? 0 : i.screen.width), n = T({position: 0, direction: "down", inflectionPoint: 0}),
            c = T(0), v = T(ft.value === !0 ? 0 : Be()),
            u = f(() => "q-layout q-layout--" + (e.container === !0 ? "containerized" : "standard")),
            w = f(() => e.container === !1 ? {minHeight: i.screen.height + "px"} : null),
            p = f(() => v.value !== 0 ? {[i.lang.rtl === !0 ? "left" : "right"]: `${v.value}px`} : null),
            h = f(() => v.value !== 0 ? {
                [i.lang.rtl === !0 ? "right" : "left"]: 0,
                [i.lang.rtl === !0 ? "left" : "right"]: `-${v.value}px`,
                width: `calc(100% + ${v.value}px)`
            } : null);

        function b(S) {
            if (e.container === !0 || document.qScrollPrevented !== !0) {
                const x = {
                    position: S.position.top,
                    direction: S.direction,
                    directionChanged: S.directionChanged,
                    inflectionPoint: S.inflectionPoint.top,
                    delta: S.delta.top
                };
                n.value = x, e.onScroll !== void 0 && o("scroll", x)
            }
        }

        function B(S) {
            const {height: x, width: E} = S;
            let H = !1;
            a.value !== x && (H = !0, a.value = x, e.onScrollHeight !== void 0 && o("scrollHeight", x), z()), r.value !== E && (H = !0, r.value = E), H === !0 && e.onResize !== void 0 && o("resize", S)
        }

        function k({height: S}) {
            c.value !== S && (c.value = S, z())
        }

        function z() {
            if (e.container === !0) {
                const S = a.value > c.value ? Be() : 0;
                v.value !== S && (v.value = S)
            }
        }

        let d = null;
        const g = {
            instances: {},
            view: f(() => e.view),
            isContainer: f(() => e.container),
            rootRef: t,
            height: a,
            containerHeight: c,
            scrollbarWidth: v,
            totalWidth: f(() => r.value + v.value),
            rows: f(() => {
                const S = e.view.toLowerCase().split(" ");
                return {top: S[0].split(""), middle: S[1].split(""), bottom: S[2].split("")}
            }),
            header: ve({size: 0, offset: 0, space: !1}),
            right: ve({size: 300, offset: 0, space: !1}),
            footer: ve({size: 0, offset: 0, space: !1}),
            left: ve({size: 300, offset: 0, space: !1}),
            scroll: n,
            animate() {
                d !== null ? clearTimeout(d) : document.body.classList.add("q-body--layout-animate"), d = setTimeout(() => {
                    d = null, document.body.classList.remove("q-body--layout-animate")
                }, 155)
            },
            update(S, x, E) {
                g[S][x] = E
            }
        };
        if (yt(ye, g), Be() > 0) {
            let E = function () {
                S = null, x.classList.remove("hide-scrollbar")
            }, H = function () {
                if (S === null) {
                    if (x.scrollHeight > i.screen.height) return;
                    x.classList.add("hide-scrollbar")
                } else clearTimeout(S);
                S = setTimeout(E, 300)
            }, Y = function (O) {
                S !== null && O === "remove" && (clearTimeout(S), E()), window[`${O}EventListener`]("resize", H)
            }, S = null;
            const x = document.body;
            L(() => e.container !== !0 ? "add" : "remove", Y), e.container !== !0 && Y("add"), Xt(() => {
                Y("remove")
            })
        }
        return () => {
            const S = bt(l.default, [q(St, {onScroll: b}), q(se, {onResize: B})]),
                x = q("div", {class: u.value, style: w.value, ref: e.container === !0 ? void 0 : t, tabindex: -1}, S);
            return e.container === !0 ? q("div", {
                class: "q-layout-container overflow-hidden",
                ref: t
            }, [q(se, {onResize: k}), q("div", {class: "absolute-full", style: p.value}, [q("div", {
                class: "scroll",
                style: h.value
            }, [x])])]) : x
        }
    }
});

function Pl() {
    return be(Yt)
}

const $l = Object.assign({name: "MainLayout"}, {
    __name: "MainLayout", emits: ["reset-game"], setup(e, {emit: l}) {
        const o = Pl(), i = T(!0), t = () => {
            i.value = !i.value, o.notify({
                color: i.value ? "positive" : "negative",
                message: i.value ? "\u97F3\u6548\u5DF2\u958B\u555F" : "\u97F3\u6548\u5DF2\u95DC\u9589",
                icon: i.value ? "volume_up" : "volume_off"
            })
        }, a = l, r = () => {
            console.log("emitResetGame"), a("reset-game"), c.value = !c.value
        }, n = [{icon: "rotate_right", label: "Restart Game", separator: !1}], c = T(!1);

        function v() {
            c.value = !c.value
        }

        return (u, w) => {
            const p = Ut("router-view");
            return Ke(), Kt(Ml, {view: "lHh Lpr lFf"}, {
                default: V(() => [M(il, {elevated: ""}, {
                    default: V(() => [M(al, null, {
                        default: V(() => [M(Ge, {
                            flat: "",
                            dense: "",
                            round: "",
                            icon: "menu",
                            "aria-label": "Menu",
                            onClick: v
                        }), M(ol, {class: "text-h5 text-weight-bold"}, {
                            default: V(() => w[1] || (w[1] = [ke(" Liar's Bar")])),
                            _: 1
                        }), M(Ge, {
                            flat: "",
                            round: "",
                            dense: "",
                            icon: i.value ? "volume_up" : "volume_off",
                            onClick: t
                        }, null, 8, ["icon"])]), _: 1
                    })]), _: 1
                }), M(El, {
                    modelValue: c.value,
                    "onUpdate:modelValue": w[0] || (w[0] = h => c.value = h),
                    "show-if-above": "",
                    bordered: ""
                }, {
                    default: V(() => [M(Sl, {class: "fit"}, {
                        default: V(() => [M(rl, {header: ""}, {
                            default: V(() => w[2] || (w[2] = [ke("\u904A\u6232\u9078\u55AE")])),
                            _: 1
                        }), M(cl, {class: "cursor-pointer"}, {
                            default: V(() => [(Ke(), Gt(Zt, null, Jt(n, (h, b) => he(M(ul, {
                                key: b,
                                onClick: r,
                                clickable: ""
                            }, {
                                default: V(() => [M(Ze, {avatar: ""}, {
                                    default: V(() => [M(el, {name: h.icon}, null, 8, ["name"])]),
                                    _: 2
                                }, 1024), M(Ze, null, {default: V(() => [ke(tl(h.label), 1)]), _: 2}, 1024)]), _: 2
                            }, 1024), [[ll]])), 64))]), _: 1
                        })]), _: 1
                    })]), _: 1
                }, 8, ["modelValue"]), M(Ol, null, {
                    default: V(() => [M(p, {"sound-enabled": i.value}, null, 8, ["sound-enabled"])]),
                    _: 1
                })]), _: 1
            })
        }
    }
});
var Vl = Object.freeze(Object.defineProperty({__proto__: null, default: $l}, Symbol.toStringTag, {value: "Module"}));
export {
    Vl as M,
    $l as _,
    we as a,
    ql as b,
    wl as c,
    _l as d,
    Bl as e,
    Tl as f,
    Be as g,
    ml as h,
    Pl as i,
    vl as s,
    ge as u
};
