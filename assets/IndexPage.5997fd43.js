import {
    k as re,
    c as E,
    h as H,
    l as oe,
    ad as Bt,
    ae as It,
    g as ee,
    U as Ft,
    m as Ot,
    r as D,
    o as Te,
    w as j,
    af as Vt,
    i as We,
    n as ie,
    ag as Ht,
    Q as Rt,
    ah as Oe,
    B as wt,
    q as ae,
    R as xt,
    S as $t,
    L as de,
    aa as Je,
    ai as Lt,
    aj as ce,
    ak as Dt,
    M as et,
    A as At,
    J as tt,
    O as Qt,
    t as Ne,
    al as He,
    a as Gt,
    am as Wt,
    an as Nt,
    ao as Kt,
    Y as jt,
    H as ze,
    N as Zt,
    ap as zt,
    aq as Xt,
    a6 as fe,
    u as he,
    x as Yt,
    $ as Ut,
    a3 as U,
    a8 as ue,
    f as G,
    a5 as W,
    F as Ce,
    ar as R,
    a4 as ge,
    a7 as le,
    as as se,
    a9 as Re,
    at as nt,
    ab as Me,
    au as at,
    av as $e,
    aw as Jt,
    ax as ot
} from "./index.47c5d9f4.js";
import {
    u as Xe,
    a as Ye,
    c as en,
    g as tn,
    b as nn,
    s as an,
    d as on,
    e as rn,
    f as ln,
    h as un,
    i as sn,
    _ as dn
} from "./MainLayout.3f604a48.js";

var ne = re({
    name: "QCardSection",
    props: {tag: {type: String, default: "div"}, horizontal: Boolean},
    setup(t, {slots: i}) {
        const a = E(() => `q-card__section q-card__section--${t.horizontal === !0 ? "horiz row no-wrap" : "vert"}`);
        return () => H(t.tag, {class: a.value}, oe(i.default))
    }
}), Le = re({
    name: "QCardActions", props: {...Bt, vertical: Boolean}, setup(t, {slots: i}) {
        const a = It(t),
            r = E(() => `q-card__actions ${a.value} q-card__actions--${t.vertical === !0 ? "vert column" : "horiz row"}`);
        return () => H("div", {class: r.value}, oe(i.default))
    }
}), we = re({
    name: "QCard",
    props: {...Xe, tag: {type: String, default: "div"}, square: Boolean, flat: Boolean, bordered: Boolean},
    setup(t, {slots: i}) {
        const {proxy: {$q: a}} = ee(), r = Ye(t, a),
            l = E(() => "q-card" + (r.value === !0 ? " q-card--dark q-dark" : "") + (t.bordered === !0 ? " q-card--bordered" : "") + (t.square === !0 ? " q-card--square no-border-radius" : "") + (t.flat === !0 ? " q-card--flat no-shadow" : ""));
        return () => H(t.tag, {class: l.value}, oe(i.default))
    }
});
const cn = ["top", "middle", "bottom"];
var fn = re({
    name: "QBadge",
    props: {
        color: String,
        textColor: String,
        floating: Boolean,
        transparent: Boolean,
        multiLine: Boolean,
        outline: Boolean,
        rounded: Boolean,
        label: [Number, String],
        align: {type: String, validator: t => cn.includes(t)}
    },
    setup(t, {slots: i}) {
        const a = E(() => t.align !== void 0 ? {verticalAlign: t.align} : null), r = E(() => {
            const l = t.outline === !0 && t.color || t.textColor;
            return `q-badge flex inline items-center no-wrap q-badge--${t.multiLine === !0 ? "multi" : "single"}-line` + (t.outline === !0 ? " q-badge--outline" : t.color !== void 0 ? ` bg-${t.color}` : "") + (l !== void 0 ? ` text-${l}` : "") + (t.floating === !0 ? " q-badge--floating" : "") + (t.rounded === !0 ? " q-badge--rounded" : "") + (t.transparent === !0 ? " q-badge--transparent" : "")
        });
        return () => H("div", {
            class: r.value,
            style: a.value,
            role: "status",
            "aria-label": t.label
        }, Ft(i.default, t.label !== void 0 ? [t.label] : []))
    }
});
let De, qe = 0;
const X = new Array(256);
for (let t = 0; t < 256; t++) X[t] = (t + 256).toString(16).substring(1);
const _n = (() => {
    const t = typeof crypto != "undefined" ? crypto : typeof window != "undefined" ? window.crypto || window.msCrypto : void 0;
    if (t !== void 0) {
        if (t.randomBytes !== void 0) return t.randomBytes;
        if (t.getRandomValues !== void 0) return i => {
            const a = new Uint8Array(i);
            return t.getRandomValues(a), a
        }
    }
    return i => {
        const a = [];
        for (let r = i; r > 0; r--) a.push(Math.floor(Math.random() * 256));
        return a
    }
})(), rt = 4096;

function Ke() {
    (De === void 0 || qe + 16 > rt) && (qe = 0, De = _n(rt));
    const t = Array.prototype.slice.call(De, qe, qe += 16);
    return t[6] = t[6] & 15 | 64, t[8] = t[8] & 63 | 128, X[t[0]] + X[t[1]] + X[t[2]] + X[t[3]] + "-" + X[t[4]] + X[t[5]] + "-" + X[t[6]] + X[t[7]] + "-" + X[t[8]] + X[t[9]] + "-" + X[t[10]] + X[t[11]] + X[t[12]] + X[t[13]] + X[t[14]] + X[t[15]]
}

function vn(t) {
    return t == null ? null : t
}

function lt(t, i) {
    return t == null ? i === !0 ? `f_${Ke()}` : null : t
}

function mn({getValue: t, required: i = !0} = {}) {
    if (Ot.value === !0) {
        const a = t !== void 0 ? D(vn(t())) : D(null);
        return i === !0 && a.value === null && Te(() => {
            a.value = `f_${Ke()}`
        }), t !== void 0 && j(t, r => {
            a.value = lt(r, i)
        }), a
    }
    return t !== void 0 ? E(() => lt(t(), i)) : D(`f_${Ke()}`)
}

const it = /^on[A-Z]/;

function pn() {
    const {attrs: t, vnode: i} = ee(), a = {listeners: D({}), attributes: D({})};

    function r() {
        const l = {}, f = {};
        for (const d in t) d !== "class" && d !== "style" && it.test(d) === !1 && (l[d] = t[d]);
        for (const d in i.props) it.test(d) === !0 && (f[d] = i.props[d]);
        a.attributes.value = l, a.listeners.value = f
    }

    return Vt(r), r(), a
}

function hn({validate: t, resetValidation: i, requiresQForm: a}) {
    const r = We(Ht, !1);
    if (r !== !1) {
        const {props: l, proxy: f} = ee();
        Object.assign(f, {validate: t, resetValidation: i}), j(() => l.disable, d => {
            d === !0 ? (typeof i == "function" && i(), r.unbindComponent(f)) : r.bindComponent(f)
        }), Te(() => {
            l.disable !== !0 && r.bindComponent(f)
        }), ie(() => {
            l.disable !== !0 && r.unbindComponent(f)
        })
    } else a === !0 && console.error("Parent QForm not found on useFormChild()!")
}

const ut = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, st = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,
    dt = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
    Ee = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,
    Pe = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,
    Qe = {
        date: t => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(t),
        time: t => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(t),
        fulltime: t => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(t),
        timeOrFulltime: t => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(t),
        email: t => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t),
        hexColor: t => ut.test(t),
        hexaColor: t => st.test(t),
        hexOrHexaColor: t => dt.test(t),
        rgbColor: t => Ee.test(t),
        rgbaColor: t => Pe.test(t),
        rgbOrRgbaColor: t => Ee.test(t) || Pe.test(t),
        hexOrRgbColor: t => ut.test(t) || Ee.test(t),
        hexaOrRgbaColor: t => st.test(t) || Pe.test(t),
        anyColor: t => dt.test(t) || Ee.test(t) || Pe.test(t)
    }, gn = [!0, !1, "ondemand"], yn = {
        modelValue: {},
        error: {type: Boolean, default: null},
        errorMessage: String,
        noErrorIcon: Boolean,
        rules: Array,
        reactiveRules: Boolean,
        lazyRules: {type: [Boolean, String], default: !1, validator: t => gn.includes(t)}
    };

function bn(t, i) {
    const {props: a, proxy: r} = ee(), l = D(!1), f = D(null), d = D(!1);
    hn({validate: c, resetValidation: u});
    let p = 0, h;
    const v = E(() => a.rules !== void 0 && a.rules !== null && a.rules.length !== 0),
        x = E(() => a.disable !== !0 && v.value === !0 && i.value === !1),
        e = E(() => a.error === !0 || l.value === !0),
        n = E(() => typeof a.errorMessage == "string" && a.errorMessage.length !== 0 ? a.errorMessage : f.value);
    j(() => a.modelValue, () => {
        d.value = !0, x.value === !0 && a.lazyRules === !1 && _()
    });

    function o() {
        a.lazyRules !== "ondemand" && x.value === !0 && d.value === !0 && _()
    }

    j(() => a.reactiveRules, s => {
        s === !0 ? h === void 0 && (h = j(() => a.rules, o, {
            immediate: !0,
            deep: !0
        })) : h !== void 0 && (h(), h = void 0)
    }, {immediate: !0}), j(() => a.lazyRules, o), j(t, s => {
        s === !0 ? d.value = !0 : x.value === !0 && a.lazyRules !== "ondemand" && _()
    });

    function u() {
        p++, i.value = !1, d.value = !1, l.value = !1, f.value = null, _.cancel()
    }

    function c(s = a.modelValue) {
        if (a.disable === !0 || v.value === !1) return !0;
        const b = ++p, C = i.value !== !0 ? () => {
            d.value = !0
        } : () => {
        }, M = (O, P) => {
            O === !0 && C(), l.value = O, f.value = P || null, i.value = !1
        }, I = [];
        for (let O = 0; O < a.rules.length; O++) {
            const P = a.rules[O];
            let Q;
            if (typeof P == "function" ? Q = P(s, Qe) : typeof P == "string" && Qe[P] !== void 0 && (Q = Qe[P](s)), Q === !1 || typeof Q == "string") return M(!0, Q), !1;
            Q !== !0 && Q !== void 0 && I.push(Q)
        }
        return I.length === 0 ? (M(!1), !0) : (i.value = !0, Promise.all(I).then(O => {
            if (O === void 0 || Array.isArray(O) === !1 || O.length === 0) return b === p && M(!1), !0;
            const P = O.find(Q => Q === !1 || typeof Q == "string");
            return b === p && M(P !== void 0, P), P === void 0
        }, O => (b === p && (console.error(O), M(!0)), !1)))
    }

    const _ = Rt(c, 0);
    return ie(() => {
        h !== void 0 && h(), _.cancel()
    }), Object.assign(r, {resetValidation: u, validate: c}), Oe(r, "hasError", () => e.value), {
        isDirtyModel: d,
        hasRules: v,
        hasError: e,
        errorMessage: n,
        validate: c,
        resetValidation: u
    }
}

let _e = [], Se = [];

function kt(t) {
    Se = Se.filter(i => i !== t)
}

function wn(t) {
    kt(t), Se.push(t)
}

function ct(t) {
    kt(t), Se.length === 0 && _e.length !== 0 && (_e[_e.length - 1](), _e = [])
}

function Ue(t) {
    Se.length === 0 ? t() : _e.push(t)
}

function xn(t) {
    _e = _e.filter(i => i !== t)
}

function je(t) {
    return t != null && ("" + t).length !== 0
}

const An = {
    ...Xe, ...yn,
    label: String,
    stackLabel: Boolean,
    hint: String,
    hideHint: Boolean,
    prefix: String,
    suffix: String,
    labelColor: String,
    color: String,
    bgColor: String,
    filled: Boolean,
    outlined: Boolean,
    borderless: Boolean,
    standout: [Boolean, String],
    square: Boolean,
    loading: Boolean,
    labelSlot: Boolean,
    bottomSlots: Boolean,
    hideBottomSpace: Boolean,
    rounded: Boolean,
    dense: Boolean,
    itemAligned: Boolean,
    counter: Boolean,
    clearable: Boolean,
    clearIcon: String,
    disable: Boolean,
    readonly: Boolean,
    autofocus: Boolean,
    for: String
}, kn = {...An, maxlength: [Number, String]}, Sn = ["update:modelValue", "clear", "focus", "blur"];

function Tn({requiredForAttr: t = !0, tagProp: i, changeEvent: a = !1} = {}) {
    const {props: r, proxy: l} = ee(), f = Ye(r, l.$q), d = mn({required: t, getValue: () => r.for});
    return {
        requiredForAttr: t,
        changeEvent: a,
        tag: i === !0 ? E(() => r.tag) : {value: "label"},
        isDark: f,
        editable: E(() => r.disable !== !0 && r.readonly !== !0),
        innerLoading: D(!1),
        focused: D(!1),
        hasPopupOpen: !1,
        splitAttrs: pn(),
        targetUid: d,
        rootRef: D(null),
        targetRef: D(null),
        controlRef: D(null)
    }
}

function Cn(t) {
    const {props: i, emit: a, slots: r, attrs: l, proxy: f} = ee(), {$q: d} = f;
    let p = null;
    t.hasValue === void 0 && (t.hasValue = E(() => je(i.modelValue))), t.emitValue === void 0 && (t.emitValue = g => {
        a("update:modelValue", g)
    }), t.controlEvents === void 0 && (t.controlEvents = {
        onFocusin: m,
        onFocusout: w
    }), Object.assign(t, {
        clearValue: T,
        onControlFocusin: m,
        onControlFocusout: w,
        focus: P
    }), t.computedCounter === void 0 && (t.computedCounter = E(() => {
        if (i.counter !== !1) {
            const g = typeof i.modelValue == "string" || typeof i.modelValue == "number" ? ("" + i.modelValue).length : Array.isArray(i.modelValue) === !0 ? i.modelValue.length : 0,
                S = i.maxlength !== void 0 ? i.maxlength : i.maxValues;
            return g + (S !== void 0 ? " / " + S : "")
        }
    }));
    const {
            isDirtyModel: h,
            hasRules: v,
            hasError: x,
            errorMessage: e,
            resetValidation: n
        } = bn(t.focused, t.innerLoading),
        o = t.floatingLabel !== void 0 ? E(() => i.stackLabel === !0 || t.focused.value === !0 || t.floatingLabel.value === !0) : E(() => i.stackLabel === !0 || t.focused.value === !0 || t.hasValue.value === !0),
        u = E(() => i.bottomSlots === !0 || i.hint !== void 0 || v.value === !0 || i.counter === !0 || i.error !== null),
        c = E(() => i.filled === !0 ? "filled" : i.outlined === !0 ? "outlined" : i.borderless === !0 ? "borderless" : i.standout ? "standout" : "standard"),
        _ = E(() => `q-field row no-wrap items-start q-field--${c.value}` + (t.fieldClass !== void 0 ? ` ${t.fieldClass.value}` : "") + (i.rounded === !0 ? " q-field--rounded" : "") + (i.square === !0 ? " q-field--square" : "") + (o.value === !0 ? " q-field--float" : "") + (b.value === !0 ? " q-field--labeled" : "") + (i.dense === !0 ? " q-field--dense" : "") + (i.itemAligned === !0 ? " q-field--item-aligned q-item-type" : "") + (t.isDark.value === !0 ? " q-field--dark" : "") + (t.getControl === void 0 ? " q-field--auto-height" : "") + (t.focused.value === !0 ? " q-field--focused" : "") + (x.value === !0 ? " q-field--error" : "") + (x.value === !0 || t.focused.value === !0 ? " q-field--highlighted" : "") + (i.hideBottomSpace !== !0 && u.value === !0 ? " q-field--with-bottom" : "") + (i.disable === !0 ? " q-field--disabled" : i.readonly === !0 ? " q-field--readonly" : "")),
        s = E(() => "q-field__control relative-position row no-wrap" + (i.bgColor !== void 0 ? ` bg-${i.bgColor}` : "") + (x.value === !0 ? " text-negative" : typeof i.standout == "string" && i.standout.length !== 0 && t.focused.value === !0 ? ` ${i.standout}` : i.color !== void 0 ? ` text-${i.color}` : "")),
        b = E(() => i.labelSlot === !0 || i.label !== void 0),
        C = E(() => "q-field__label no-pointer-events absolute ellipsis" + (i.labelColor !== void 0 && x.value !== !0 ? ` text-${i.labelColor}` : "")),
        M = E(() => ({
            id: t.targetUid.value,
            editable: t.editable.value,
            focused: t.focused.value,
            floatingLabel: o.value,
            modelValue: i.modelValue,
            emitValue: t.emitValue
        })), I = E(() => {
            const g = {};
            return t.targetUid.value && (g.for = t.targetUid.value), i.disable === !0 && (g["aria-disabled"] = "true"), g
        });

    function O() {
        const g = document.activeElement;
        let S = t.targetRef !== void 0 && t.targetRef.value;
        S && (g === null || g.id !== t.targetUid.value) && (S.hasAttribute("tabindex") === !0 || (S = S.querySelector("[tabindex]")), S && S !== g && S.focus({preventScroll: !0}))
    }

    function P() {
        Ue(O)
    }

    function Q() {
        xn(O);
        const g = document.activeElement;
        g !== null && t.rootRef.value.contains(g) && g.blur()
    }

    function m(g) {
        p !== null && (clearTimeout(p), p = null), t.editable.value === !0 && t.focused.value === !1 && (t.focused.value = !0, a("focus", g))
    }

    function w(g, S) {
        p !== null && clearTimeout(p), p = setTimeout(() => {
            p = null, !(document.hasFocus() === !0 && (t.hasPopupOpen === !0 || t.controlRef === void 0 || t.controlRef.value === null || t.controlRef.value.contains(document.activeElement) !== !1)) && (t.focused.value === !0 && (t.focused.value = !1, a("blur", g)), S !== void 0 && S())
        })
    }

    function T(g) {
        wt(g), d.platform.is.mobile !== !0 ? (t.targetRef !== void 0 && t.targetRef.value || t.rootRef.value).focus() : t.rootRef.value.contains(document.activeElement) === !0 && document.activeElement.blur(), i.type === "file" && (t.inputRef.value.value = null), a("update:modelValue", null), t.changeEvent === !0 && a("change", null), a("clear", i.modelValue), ae(() => {
            const S = h.value;
            n(), h.value = S
        })
    }

    function A(g) {
        [13, 32].includes(g.keyCode) && T(g)
    }

    function F() {
        const g = [];
        return r.prepend !== void 0 && g.push(H("div", {
            class: "q-field__prepend q-field__marginal row no-wrap items-center",
            key: "prepend",
            onClick: de
        }, r.prepend())), g.push(H("div", {class: "q-field__control-container col relative-position row no-wrap q-anchor--skip"}, q())), x.value === !0 && i.noErrorIcon === !1 && g.push(V("error", [H(Je, {
            name: d.iconSet.field.error,
            color: "negative"
        })])), i.loading === !0 || t.innerLoading.value === !0 ? g.push(V("inner-loading-append", r.loading !== void 0 ? r.loading() : [H(Lt, {color: i.color})])) : i.clearable === !0 && t.hasValue.value === !0 && t.editable.value === !0 && g.push(V("inner-clearable-append", [H(Je, {
            class: "q-field__focusable-action",
            name: i.clearIcon || d.iconSet.field.clear,
            tabindex: 0,
            role: "button",
            "aria-hidden": "false",
            "aria-label": d.lang.label.clear,
            onKeyup: A,
            onClick: T
        })])), r.append !== void 0 && g.push(H("div", {
            class: "q-field__append q-field__marginal row no-wrap items-center",
            key: "append",
            onClick: de
        }, r.append())), t.getInnerAppend !== void 0 && g.push(V("inner-append", t.getInnerAppend())), t.getControlChild !== void 0 && g.push(t.getControlChild()), g
    }

    function q() {
        const g = [];
        return i.prefix !== void 0 && i.prefix !== null && g.push(H("div", {class: "q-field__prefix no-pointer-events row items-center"}, i.prefix)), t.getShadowControl !== void 0 && t.hasShadow.value === !0 && g.push(t.getShadowControl()), t.getControl !== void 0 ? g.push(t.getControl()) : r.rawControl !== void 0 ? g.push(r.rawControl()) : r.control !== void 0 && g.push(H("div", {
            ref: t.targetRef,
            class: "q-field__native row",
            tabindex: -1, ...t.splitAttrs.attributes.value,
            "data-autofocus": i.autofocus === !0 || void 0
        }, r.control(M.value))), b.value === !0 && g.push(H("div", {class: C.value}, oe(r.label, i.label))), i.suffix !== void 0 && i.suffix !== null && g.push(H("div", {class: "q-field__suffix no-pointer-events row items-center"}, i.suffix)), g.concat(oe(r.default))
    }

    function N() {
        let g, S;
        x.value === !0 ? e.value !== null ? (g = [H("div", {role: "alert"}, e.value)], S = `q--slot-error-${e.value}`) : (g = oe(r.error), S = "q--slot-error") : (i.hideHint !== !0 || t.focused.value === !0) && (i.hint !== void 0 ? (g = [H("div", i.hint)], S = `q--slot-hint-${i.hint}`) : (g = oe(r.hint), S = "q--slot-hint"));
        const B = i.counter === !0 || r.counter !== void 0;
        if (i.hideBottomSpace === !0 && B === !1 && g === void 0) return;
        const $ = H("div", {key: S, class: "q-field__messages col"}, g);
        return H("div", {
            class: "q-field__bottom row items-start q-field__bottom--" + (i.hideBottomSpace !== !0 ? "animated" : "stale"),
            onClick: de
        }, [i.hideBottomSpace === !0 ? $ : H(ce, {name: "q-transition--field-message"}, () => $), B === !0 ? H("div", {class: "q-field__counter"}, r.counter !== void 0 ? r.counter() : t.computedCounter.value) : null])
    }

    function V(g, S) {
        return S === null ? null : H("div", {
            key: g,
            class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"
        }, S)
    }

    let k = !1;
    return xt(() => {
        k = !0
    }), $t(() => {
        k === !0 && i.autofocus === !0 && f.focus()
    }), i.autofocus === !0 && Te(() => {
        f.focus()
    }), ie(() => {
        p !== null && clearTimeout(p)
    }), Object.assign(f, {focus: P, blur: Q}), function () {
        const S = t.getControl === void 0 && r.control === void 0 ? {
            ...t.splitAttrs.attributes.value,
            "data-autofocus": i.autofocus === !0 || void 0, ...I.value
        } : I.value;
        return H(t.tag.value, {
            ref: t.rootRef,
            class: [_.value, l.class],
            style: l.style, ...S
        }, [r.before !== void 0 ? H("div", {
            class: "q-field__before q-field__marginal row no-wrap items-center",
            onClick: de
        }, r.before()) : null, H("div", {class: "q-field__inner relative-position col self-stretch"}, [H("div", {
            ref: t.controlRef,
            class: s.value,
            tabindex: -1, ...t.controlEvents
        }, F()), u.value === !0 ? N() : null]), r.after !== void 0 ? H("div", {
            class: "q-field__after q-field__marginal row no-wrap items-center",
            onClick: de
        }, r.after()) : null])
    }
}

const ft = {
    date: "####/##/##",
    datetime: "####/##/## ##:##",
    time: "##:##",
    fulltime: "##:##:##",
    phone: "(###) ### - ####",
    card: "#### #### #### ####"
}, Be = {
    "#": {pattern: "[\\d]", negate: "[^\\d]"},
    S: {pattern: "[a-zA-Z]", negate: "[^a-zA-Z]"},
    N: {pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]"},
    A: {pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: t => t.toLocaleUpperCase()},
    a: {pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: t => t.toLocaleLowerCase()},
    X: {pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: t => t.toLocaleUpperCase()},
    x: {pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: t => t.toLocaleLowerCase()}
}, St = Object.keys(Be);
St.forEach(t => {
    Be[t].regex = new RegExp(Be[t].pattern)
});
const Mn = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + St.join("") + "])|(.)", "g"),
    _t = /[.*+?^${}()|[\]\\]/g, Z = String.fromCharCode(1),
    qn = {mask: String, reverseFillMask: Boolean, fillMask: [Boolean, String], unmaskedValue: Boolean};

function En(t, i, a, r) {
    let l, f, d, p, h, v;
    const x = D(null), e = D(o());

    function n() {
        return t.autogrow === !0 || ["textarea", "text", "search", "url", "tel", "password"].includes(t.type)
    }

    j(() => t.type + t.autogrow, c), j(() => t.mask, m => {
        if (m !== void 0) _(e.value, !0); else {
            const w = P(e.value);
            c(), t.modelValue !== w && i("update:modelValue", w)
        }
    }), j(() => t.fillMask + t.reverseFillMask, () => {
        x.value === !0 && _(e.value, !0)
    }), j(() => t.unmaskedValue, () => {
        x.value === !0 && _(e.value)
    });

    function o() {
        if (c(), x.value === !0) {
            const m = I(P(t.modelValue));
            return t.fillMask !== !1 ? Q(m) : m
        }
        return t.modelValue
    }

    function u(m) {
        if (m < l.length) return l.slice(-m);
        let w = "", T = l;
        const A = T.indexOf(Z);
        if (A !== -1) {
            for (let F = m - T.length; F > 0; F--) w += Z;
            T = T.slice(0, A) + w + T.slice(A)
        }
        return T
    }

    function c() {
        if (x.value = t.mask !== void 0 && t.mask.length !== 0 && n(), x.value === !1) {
            p = void 0, l = "", f = "";
            return
        }
        const m = ft[t.mask] === void 0 ? t.mask : ft[t.mask],
            w = typeof t.fillMask == "string" && t.fillMask.length !== 0 ? t.fillMask.slice(0, 1) : "_",
            T = w.replace(_t, "\\$&"), A = [], F = [], q = [];
        let N = t.reverseFillMask === !0, V = "", k = "";
        m.replace(Mn, ($, y, K, te, Y) => {
            if (te !== void 0) {
                const z = Be[te];
                q.push(z), k = z.negate, N === !0 && (F.push("(?:" + k + "+)?(" + z.pattern + "+)?(?:" + k + "+)?(" + z.pattern + "+)?"), N = !1), F.push("(?:" + k + "+)?(" + z.pattern + ")?")
            } else if (K !== void 0) V = "\\" + (K === "\\" ? "" : K), q.push(K), A.push("([^" + V + "]+)?" + V + "?"); else {
                const z = y !== void 0 ? y : Y;
                V = z === "\\" ? "\\\\\\\\" : z.replace(_t, "\\\\$&"), q.push(z), A.push("([^" + V + "]+)?" + V + "?")
            }
        });
        const g = new RegExp("^" + A.join("") + "(" + (V === "" ? "." : "[^" + V + "]") + "+)?" + (V === "" ? "" : "[" + V + "]*") + "$"),
            S = F.length - 1,
            B = F.map(($, y) => y === 0 && t.reverseFillMask === !0 ? new RegExp("^" + T + "*" + $) : y === S ? new RegExp("^" + $ + "(" + (k === "" ? "." : k) + "+)?" + (t.reverseFillMask === !0 ? "$" : T + "*")) : new RegExp("^" + $));
        d = q, p = $ => {
            const y = g.exec(t.reverseFillMask === !0 ? $ : $.slice(0, q.length + 1));
            y !== null && ($ = y.slice(1).join(""));
            const K = [], te = B.length;
            for (let Y = 0, z = $; Y < te; Y++) {
                const J = B[Y].exec(z);
                if (J === null) break;
                z = z.slice(J.shift().length), K.push(...J)
            }
            return K.length !== 0 ? K.join("") : $
        }, l = q.map($ => typeof $ == "string" ? $ : Z).join(""), f = l.split(Z).join(w)
    }

    function _(m, w, T) {
        const A = r.value, F = A.selectionEnd, q = A.value.length - F, N = P(m);
        w === !0 && c();
        const V = I(N), k = t.fillMask !== !1 ? Q(V) : V, g = e.value !== k;
        A.value !== k && (A.value = k), g === !0 && (e.value = k), document.activeElement === A && ae(() => {
            if (k === f) {
                const B = t.reverseFillMask === !0 ? f.length : 0;
                A.setSelectionRange(B, B, "forward");
                return
            }
            if (T === "insertFromPaste" && t.reverseFillMask !== !0) {
                const B = A.selectionEnd;
                let $ = F - 1;
                for (let y = h; y <= $ && y < B; y++) l[y] !== Z && $++;
                b.right(A, $);
                return
            }
            if (["deleteContentBackward", "deleteContentForward"].indexOf(T) !== -1) {
                const B = t.reverseFillMask === !0 ? F === 0 ? k.length > V.length ? 1 : 0 : Math.max(0, k.length - (k === f ? 0 : Math.min(V.length, q) + 1)) + 1 : F;
                A.setSelectionRange(B, B, "forward");
                return
            }
            if (t.reverseFillMask === !0) if (g === !0) {
                const B = Math.max(0, k.length - (k === f ? 0 : Math.min(V.length, q + 1)));
                B === 1 && F === 1 ? A.setSelectionRange(B, B, "forward") : b.rightReverse(A, B)
            } else {
                const B = k.length - q;
                A.setSelectionRange(B, B, "backward")
            } else if (g === !0) {
                const B = Math.max(0, l.indexOf(Z), Math.min(V.length, F) - 1);
                b.right(A, B)
            } else {
                const B = F - 1;
                b.right(A, B)
            }
        });
        const S = t.unmaskedValue === !0 ? P(k) : k;
        String(t.modelValue) !== S && (t.modelValue !== null || S !== "") && a(S, !0)
    }

    function s(m, w, T) {
        const A = I(P(m.value));
        w = Math.max(0, l.indexOf(Z), Math.min(A.length, w)), h = w, m.setSelectionRange(w, T, "forward")
    }

    const b = {
        left(m, w) {
            const T = l.slice(w - 1).indexOf(Z) === -1;
            let A = Math.max(0, w - 1);
            for (; A >= 0; A--) if (l[A] === Z) {
                w = A, T === !0 && w++;
                break
            }
            if (A < 0 && l[w] !== void 0 && l[w] !== Z) return b.right(m, 0);
            w >= 0 && m.setSelectionRange(w, w, "backward")
        }, right(m, w) {
            const T = m.value.length;
            let A = Math.min(T, w + 1);
            for (; A <= T; A++) if (l[A] === Z) {
                w = A;
                break
            } else l[A - 1] === Z && (w = A);
            if (A > T && l[w - 1] !== void 0 && l[w - 1] !== Z) return b.left(m, T);
            m.setSelectionRange(w, w, "forward")
        }, leftReverse(m, w) {
            const T = u(m.value.length);
            let A = Math.max(0, w - 1);
            for (; A >= 0; A--) if (T[A - 1] === Z) {
                w = A;
                break
            } else if (T[A] === Z && (w = A, A === 0)) break;
            if (A < 0 && T[w] !== void 0 && T[w] !== Z) return b.rightReverse(m, 0);
            w >= 0 && m.setSelectionRange(w, w, "backward")
        }, rightReverse(m, w) {
            const T = m.value.length, A = u(T), F = A.slice(0, w + 1).indexOf(Z) === -1;
            let q = Math.min(T, w + 1);
            for (; q <= T; q++) if (A[q - 1] === Z) {
                w = q, w > 0 && F === !0 && w--;
                break
            }
            if (q > T && A[w - 1] !== void 0 && A[w - 1] !== Z) return b.leftReverse(m, T);
            m.setSelectionRange(w, w, "forward")
        }
    };

    function C(m) {
        i("click", m), v = void 0
    }

    function M(m) {
        if (i("keydown", m), Dt(m) === !0 || m.altKey === !0) return;
        const w = r.value, T = w.selectionStart, A = w.selectionEnd;
        if (m.shiftKey || (v = void 0), m.keyCode === 37 || m.keyCode === 39) {
            m.shiftKey && v === void 0 && (v = w.selectionDirection === "forward" ? T : A);
            const F = b[(m.keyCode === 39 ? "right" : "left") + (t.reverseFillMask === !0 ? "Reverse" : "")];
            if (m.preventDefault(), F(w, v === T ? A : T), m.shiftKey) {
                const q = w.selectionStart;
                w.setSelectionRange(Math.min(v, q), Math.max(v, q), "forward")
            }
        } else m.keyCode === 8 && t.reverseFillMask !== !0 && T === A ? (b.left(w, T), w.setSelectionRange(w.selectionStart, A, "backward")) : m.keyCode === 46 && t.reverseFillMask === !0 && T === A && (b.rightReverse(w, A), w.setSelectionRange(T, w.selectionEnd, "forward"))
    }

    function I(m) {
        if (m == null || m === "") return "";
        if (t.reverseFillMask === !0) return O(m);
        const w = d;
        let T = 0, A = "";
        for (let F = 0; F < w.length; F++) {
            const q = m[T], N = w[F];
            if (typeof N == "string") A += N, q === N && T++; else if (q !== void 0 && N.regex.test(q)) A += N.transform !== void 0 ? N.transform(q) : q, T++; else return A
        }
        return A
    }

    function O(m) {
        const w = d, T = l.indexOf(Z);
        let A = m.length - 1, F = "";
        for (let q = w.length - 1; q >= 0 && A !== -1; q--) {
            const N = w[q];
            let V = m[A];
            if (typeof N == "string") F = N + F, V === N && A--; else if (V !== void 0 && N.regex.test(V)) do F = (N.transform !== void 0 ? N.transform(V) : V) + F, A--, V = m[A]; while (T === q && V !== void 0 && N.regex.test(V)); else return F
        }
        return F
    }

    function P(m) {
        return typeof m != "string" || p === void 0 ? typeof m == "number" ? p("" + m) : m : p(m)
    }

    function Q(m) {
        return f.length - m.length <= 0 ? m : t.reverseFillMask === !0 && m.length !== 0 ? f.slice(0, -m.length) + m : m + f.slice(m.length)
    }

    return {innerValue: e, hasMask: x, moveCursorForPaste: s, updateMaskValue: _, onMaskedKeydown: M, onMaskedClick: C}
}

const Pn = {name: String};

function Bn(t) {
    return E(() => t.name || t.for)
}

function In(t, i) {
    function a() {
        const r = t.modelValue;
        try {
            const l = "DataTransfer" in window ? new DataTransfer : "ClipboardEvent" in window ? new ClipboardEvent("").clipboardData : void 0;
            return Object(r) === r && ("length" in r ? Array.from(r) : [r]).forEach(f => {
                l.items.add(f)
            }), {files: l.files}
        } catch {
            return {files: void 0}
        }
    }

    return i === !0 ? E(() => {
        if (t.type === "file") return a()
    }) : E(a)
}

function Fn(t) {
    return function (a) {
        if (a.type === "compositionend" || a.type === "change") {
            if (a.target.qComposing !== !0) return;
            a.target.qComposing = !1, t(a)
        } else a.type === "compositionstart" && (a.target.qComposing = !0)
    }
}

var On = re({
    name: "QInput",
    inheritAttrs: !1,
    props: {
        ...kn, ...qn, ...Pn,
        modelValue: [String, Number, FileList],
        shadowText: String,
        type: {type: String, default: "text"},
        debounce: [String, Number],
        autogrow: Boolean,
        inputClass: [Array, String, Object],
        inputStyle: [Array, String, Object]
    },
    emits: [...Sn, "paste", "change", "keydown", "click", "animationend"],
    setup(t, {emit: i, attrs: a}) {
        const {proxy: r} = ee(), {$q: l} = r, f = {};
        let d = NaN, p, h, v = null, x;
        const e = D(null), n = Bn(t), {
                innerValue: o,
                hasMask: u,
                moveCursorForPaste: c,
                updateMaskValue: _,
                onMaskedKeydown: s,
                onMaskedClick: b
            } = En(t, i, V, e), C = In(t, !0), M = E(() => je(o.value)), I = Fn(q), O = Tn({changeEvent: !0}),
            P = E(() => t.type === "textarea" || t.autogrow === !0),
            Q = E(() => P.value === !0 || ["text", "search", "url", "tel", "password"].includes(t.type)), m = E(() => {
                const y = {...O.splitAttrs.listeners.value, onInput: q, onPaste: F, onChange: g, onBlur: S, onFocus: et};
                return y.onCompositionstart = y.onCompositionupdate = y.onCompositionend = I, u.value === !0 && (y.onKeydown = s, y.onClick = b), t.autogrow === !0 && (y.onAnimationend = N), y
            }), w = E(() => {
                const y = {
                    tabindex: 0,
                    "data-autofocus": t.autofocus === !0 || void 0,
                    rows: t.type === "textarea" ? 6 : void 0,
                    "aria-label": t.label,
                    name: n.value, ...O.splitAttrs.attributes.value,
                    id: O.targetUid.value,
                    maxlength: t.maxlength,
                    disabled: t.disable === !0,
                    readonly: t.readonly === !0
                };
                return P.value === !1 && (y.type = t.type), t.autogrow === !0 && (y.rows = 1), y
            });
        j(() => t.type, () => {
            e.value && (e.value.value = t.modelValue)
        }), j(() => t.modelValue, y => {
            if (u.value === !0) {
                if (h === !0 && (h = !1, String(y) === d)) return;
                _(y)
            } else o.value !== y && (o.value = y, t.type === "number" && f.hasOwnProperty("value") === !0 && (p === !0 ? p = !1 : delete f.value));
            t.autogrow === !0 && ae(k)
        }), j(() => t.autogrow, y => {
            y === !0 ? ae(k) : e.value !== null && a.rows > 0 && (e.value.style.height = "auto")
        }), j(() => t.dense, () => {
            t.autogrow === !0 && ae(k)
        });

        function T() {
            Ue(() => {
                const y = document.activeElement;
                e.value !== null && e.value !== y && (y === null || y.id !== O.targetUid.value) && e.value.focus({preventScroll: !0})
            })
        }

        function A() {
            e.value !== null && e.value.select()
        }

        function F(y) {
            if (u.value === !0 && t.reverseFillMask !== !0) {
                const K = y.target;
                c(K, K.selectionStart, K.selectionEnd)
            }
            i("paste", y)
        }

        function q(y) {
            if (!y || !y.target) return;
            if (t.type === "file") {
                i("update:modelValue", y.target.files);
                return
            }
            const K = y.target.value;
            if (y.target.qComposing === !0) {
                f.value = K;
                return
            }
            if (u.value === !0) _(K, !1, y.inputType); else if (V(K), Q.value === !0 && y.target === document.activeElement) {
                const {selectionStart: te, selectionEnd: Y} = y.target;
                te !== void 0 && Y !== void 0 && ae(() => {
                    y.target === document.activeElement && K.indexOf(y.target.value) === 0 && y.target.setSelectionRange(te, Y)
                })
            }
            t.autogrow === !0 && k()
        }

        function N(y) {
            i("animationend", y), k()
        }

        function V(y, K) {
            x = () => {
                v = null, t.type !== "number" && f.hasOwnProperty("value") === !0 && delete f.value, t.modelValue !== y && d !== y && (d = y, K === !0 && (h = !0), i("update:modelValue", y), ae(() => {
                    d === y && (d = NaN)
                })), x = void 0
            }, t.type === "number" && (p = !0, f.value = y), t.debounce !== void 0 ? (v !== null && clearTimeout(v), f.value = y, v = setTimeout(x, t.debounce)) : x()
        }

        function k() {
            requestAnimationFrame(() => {
                const y = e.value;
                if (y !== null) {
                    const K = y.parentNode.style, {scrollTop: te} = y, {
                            overflowY: Y,
                            maxHeight: z
                        } = l.platform.is.firefox === !0 ? {} : window.getComputedStyle(y),
                        J = Y !== void 0 && Y !== "scroll";
                    J === !0 && (y.style.overflowY = "hidden"), K.marginBottom = y.scrollHeight - 1 + "px", y.style.height = "1px", y.style.height = y.scrollHeight + "px", J === !0 && (y.style.overflowY = parseInt(z, 10) < y.scrollHeight ? "auto" : "hidden"), K.marginBottom = "", y.scrollTop = te
                }
            })
        }

        function g(y) {
            I(y), v !== null && (clearTimeout(v), v = null), x !== void 0 && x(), i("change", y.target.value)
        }

        function S(y) {
            y !== void 0 && et(y), v !== null && (clearTimeout(v), v = null), x !== void 0 && x(), p = !1, h = !1, delete f.value, t.type !== "file" && setTimeout(() => {
                e.value !== null && (e.value.value = o.value !== void 0 ? o.value : "")
            })
        }

        function B() {
            return f.hasOwnProperty("value") === !0 ? f.value : o.value !== void 0 ? o.value : ""
        }

        ie(() => {
            S()
        }), Te(() => {
            t.autogrow === !0 && k()
        }), Object.assign(O, {
            innerValue: o,
            fieldClass: E(() => `q-${P.value === !0 ? "textarea" : "input"}` + (t.autogrow === !0 ? " q-textarea--autogrow" : "")),
            hasShadow: E(() => t.type !== "file" && typeof t.shadowText == "string" && t.shadowText.length !== 0),
            inputRef: e,
            emitValue: V,
            hasValue: M,
            floatingLabel: E(() => M.value === !0 && (t.type !== "number" || isNaN(o.value) === !1) || je(t.displayValue)),
            getControl: () => H(P.value === !0 ? "textarea" : "input", {
                ref: e,
                class: ["q-field__native q-placeholder", t.inputClass],
                style: t.inputStyle, ...w.value, ...m.value, ...t.type !== "file" ? {value: B()} : C.value
            }),
            getShadowControl: () => H("div", {class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (P.value === !0 ? "" : " text-no-wrap")}, [H("span", {class: "invisible"}, B()), H("span", t.shadowText)])
        });
        const $ = Cn(O);
        return Object.assign(r, {
            focus: T,
            select: A,
            getNativeElement: () => e.value
        }), Oe(r, "nativeEl", () => e.value), $
    }
});
const Vn = {target: {type: [Boolean, String, Element], default: !0}, noParentEvent: Boolean},
    Hn = {...Vn, contextMenu: Boolean};

function Rn({showing: t, avoidEmit: i, configureAnchorEl: a}) {
    const {props: r, proxy: l, emit: f} = ee(), d = D(null);
    let p = null;

    function h(o) {
        return d.value === null ? !1 : o === void 0 || o.touches === void 0 || o.touches.length <= 1
    }

    const v = {};
    a === void 0 && (Object.assign(v, {
        hide(o) {
            l.hide(o)
        }, toggle(o) {
            l.toggle(o), o.qAnchorHandled = !0
        }, toggleKey(o) {
            At(o, 13) === !0 && v.toggle(o)
        }, contextClick(o) {
            l.hide(o), de(o), ae(() => {
                l.show(o), o.qAnchorHandled = !0
            })
        }, prevent: de, mobileTouch(o) {
            if (v.mobileCleanup(o), h(o) !== !0) return;
            l.hide(o), d.value.classList.add("non-selectable");
            const u = o.target;
            tt(v, "anchor", [[u, "touchmove", "mobileCleanup", "passive"], [u, "touchend", "mobileCleanup", "passive"], [u, "touchcancel", "mobileCleanup", "passive"], [d.value, "contextmenu", "prevent", "notPassive"]]), p = setTimeout(() => {
                p = null, l.show(o), o.qAnchorHandled = !0
            }, 300)
        }, mobileCleanup(o) {
            d.value.classList.remove("non-selectable"), p !== null && (clearTimeout(p), p = null), t.value === !0 && o !== void 0 && en()
        }
    }), a = function (o = r.contextMenu) {
        if (r.noParentEvent === !0 || d.value === null) return;
        let u;
        o === !0 ? l.$q.platform.is.mobile === !0 ? u = [[d.value, "touchstart", "mobileTouch", "passive"]] : u = [[d.value, "mousedown", "hide", "passive"], [d.value, "contextmenu", "contextClick", "notPassive"]] : u = [[d.value, "click", "toggle", "passive"], [d.value, "keyup", "toggleKey", "passive"]], tt(v, "anchor", u)
    });

    function x() {
        Qt(v, "anchor")
    }

    function e(o) {
        for (d.value = o; d.value.classList.contains("q-anchor--skip");) d.value = d.value.parentNode;
        a()
    }

    function n() {
        if (r.target === !1 || r.target === "" || l.$el.parentNode === null) d.value = null; else if (r.target === !0) e(l.$el.parentNode); else {
            let o = r.target;
            if (typeof r.target == "string") try {
                o = document.querySelector(r.target)
            } catch {
                o = void 0
            }
            o != null ? (d.value = o.$el || o, a()) : (d.value = null, console.error(`Anchor: target "${r.target}" not found`))
        }
    }

    return j(() => r.contextMenu, o => {
        d.value !== null && (x(), a(o))
    }), j(() => r.target, () => {
        d.value !== null && x(), n()
    }), j(() => r.noParentEvent, o => {
        d.value !== null && (o === !0 ? x() : a())
    }), Te(() => {
        n(), i !== !0 && r.modelValue === !0 && d.value === null && f("update:modelValue", !1)
    }), ie(() => {
        p !== null && clearTimeout(p), x()
    }), {anchorEl: d, canShow: h, anchorEvents: v}
}

function $n(t, i) {
    const a = D(null);
    let r;

    function l(p, h) {
        const v = `${h !== void 0 ? "add" : "remove"}EventListener`, x = h !== void 0 ? h : r;
        p !== window && p[v]("scroll", x, Ne.passive), window[v]("scroll", x, Ne.passive), r = h
    }

    function f() {
        a.value !== null && (l(a.value), a.value = null)
    }

    const d = j(() => t.noParentEvent, () => {
        a.value !== null && (f(), i())
    });
    return ie(d), {localScrollTarget: a, unconfigureScrollTarget: f, changeScrollEvent: l}
}

const Ae = [];

function Ln(t, i) {
    do {
        if (t.$options.name === "QMenu") {
            if (t.hide(i), t.$props.separateClosePopup === !0) return He(t)
        } else if (t.__qPortal === !0) {
            const a = He(t);
            return a !== void 0 && a.$options.name === "QPopupProxy" ? (t.hide(i), a) : t
        }
        t = He(t)
    } while (t != null)
}

const Dn = re({
    name: "QPortal", setup(t, {slots: i}) {
        return () => i.default()
    }
});

function Qn(t) {
    for (t = t.parent; t != null;) {
        if (t.type.name === "QGlobalDialog") return !0;
        if (t.type.name === "QDialog" || t.type.name === "QMenu") return !1;
        t = t.parent
    }
    return !1
}

function Gn(t, i, a, r) {
    const l = D(!1), f = D(!1);
    let d = null;
    const p = {}, h = r === "dialog" && Qn(t);

    function v(e) {
        if (e === !0) {
            ct(p), f.value = !0;
            return
        }
        f.value = !1, l.value === !1 && (h === !1 && d === null && (d = Nt(!1, r)), l.value = !0, Ae.push(t.proxy), wn(p))
    }

    function x(e) {
        if (f.value = !1, e !== !0) return;
        ct(p), l.value = !1;
        const n = Ae.indexOf(t.proxy);
        n !== -1 && Ae.splice(n, 1), d !== null && (Kt(d), d = null)
    }

    return Gt(() => {
        x(!0)
    }), t.proxy.__qPortal = !0, Oe(t.proxy, "contentEl", () => i.value), {
        showPortal: v,
        hidePortal: x,
        portalIsActive: l,
        portalIsAccessible: f,
        renderPortal: () => h === !0 ? a() : l.value === !0 ? [H(Wt, {to: d}, H(Dn, a))] : void 0
    }
}

const Wn = {
    transitionShow: {type: String, default: "fade"},
    transitionHide: {type: String, default: "fade"},
    transitionDuration: {type: [String, Number], default: 300}
};

function Nn(t, i = () => {
}, a = () => {
}) {
    return {
        transitionProps: E(() => {
            const r = `q-transition--${t.transitionShow || i()}`, l = `q-transition--${t.transitionHide || a()}`;
            return {
                appear: !0,
                enterFromClass: `${r}-enter-from`,
                enterActiveClass: `${r}-enter-active`,
                enterToClass: `${r}-enter-to`,
                leaveFromClass: `${l}-leave-from`,
                leaveActiveClass: `${l}-leave-active`,
                leaveToClass: `${l}-leave-to`
            }
        }), transitionStyle: E(() => `--q-transition-duration: ${t.transitionDuration}ms`)
    }
}

function Kn() {
    let t;
    const i = ee();

    function a() {
        t = void 0
    }

    return xt(a), ie(a), {
        removeTick: a, registerTick(r) {
            t = r, ae(() => {
                t === r && (jt(i) === !1 && t(), t = void 0)
            })
        }
    }
}

const ve = [];
let be;

function jn(t) {
    be = t.keyCode === 27
}

function Zn() {
    be === !0 && (be = !1)
}

function zn(t) {
    be === !0 && (be = !1, At(t, 27) === !0 && ve[ve.length - 1](t))
}

function Tt(t) {
    window[t]("keydown", jn), window[t]("blur", Zn), window[t]("keyup", zn), be = !1
}

function Xn(t) {
    ze.is.desktop === !0 && (ve.push(t), ve.length === 1 && Tt("addEventListener"))
}

function vt(t) {
    const i = ve.indexOf(t);
    i !== -1 && (ve.splice(i, 1), ve.length === 0 && Tt("removeEventListener"))
}

const me = [];

function Ct(t) {
    me[me.length - 1](t)
}

function Yn(t) {
    ze.is.desktop === !0 && (me.push(t), me.length === 1 && document.body.addEventListener("focusin", Ct))
}

function Un(t) {
    const i = me.indexOf(t);
    i !== -1 && (me.splice(i, 1), me.length === 0 && document.body.removeEventListener("focusin", Ct))
}

const {notPassiveCapture: Ie} = Ne, pe = [];

function Fe(t) {
    const i = t.target;
    if (i === void 0 || i.nodeType === 8 || i.classList.contains("no-pointer-events") === !0) return;
    let a = Ae.length - 1;
    for (; a >= 0;) {
        const r = Ae[a].$;
        if (r.type.name === "QTooltip") {
            a--;
            continue
        }
        if (r.type.name !== "QDialog") break;
        if (r.props.seamless !== !0) return;
        a--
    }
    for (let r = pe.length - 1; r >= 0; r--) {
        const l = pe[r];
        if ((l.anchorEl.value === null || l.anchorEl.value.contains(i) === !1) && (i === document.body || l.innerRef.value !== null && l.innerRef.value.contains(i) === !1)) t.qClickOutside = !0, l.onClickOutside(t); else return
    }
}

function Jn(t) {
    pe.push(t), pe.length === 1 && (document.addEventListener("mousedown", Fe, Ie), document.addEventListener("touchstart", Fe, Ie))
}

function mt(t) {
    const i = pe.findIndex(a => a === t);
    i !== -1 && (pe.splice(i, 1), pe.length === 0 && (document.removeEventListener("mousedown", Fe, Ie), document.removeEventListener("touchstart", Fe, Ie)))
}

let pt, ht;

function gt(t) {
    const i = t.split(" ");
    return i.length !== 2 ? !1 : ["top", "center", "bottom"].includes(i[0]) !== !0 ? (console.error("Anchor/Self position must start with one of top/center/bottom"), !1) : ["left", "middle", "right", "start", "end"].includes(i[1]) !== !0 ? (console.error("Anchor/Self position must end with one of left/middle/right/start/end"), !1) : !0
}

function ea(t) {
    return t ? !(t.length !== 2 || typeof t[0] != "number" || typeof t[1] != "number") : !0
}

const Ze = {"start#ltr": "left", "start#rtl": "right", "end#ltr": "right", "end#rtl": "left"};
["left", "middle", "right"].forEach(t => {
    Ze[`${t}#ltr`] = t, Ze[`${t}#rtl`] = t
});

function yt(t, i) {
    const a = t.split(" ");
    return {vertical: a[0], horizontal: Ze[`${a[1]}#${i === !0 ? "rtl" : "ltr"}`]}
}

function ta(t, i) {
    let {top: a, left: r, right: l, bottom: f, width: d, height: p} = t.getBoundingClientRect();
    return i !== void 0 && (a -= i[1], r -= i[0], f += i[1], l += i[0], d += i[0], p += i[1]), {
        top: a,
        bottom: f,
        height: p,
        left: r,
        right: l,
        width: d,
        middle: r + (l - r) / 2,
        center: a + (f - a) / 2
    }
}

function na(t, i, a) {
    let {top: r, left: l} = t.getBoundingClientRect();
    return r += i.top, l += i.left, a !== void 0 && (r += a[1], l += a[0]), {
        top: r,
        bottom: r + 1,
        height: 1,
        left: l,
        right: l + 1,
        width: 1,
        middle: l,
        center: r
    }
}

function aa(t, i) {
    return {top: 0, center: i / 2, bottom: i, left: 0, middle: t / 2, right: t}
}

function bt(t, i, a, r) {
    return {top: t[a.vertical] - i[r.vertical], left: t[a.horizontal] - i[r.horizontal]}
}

function Mt(t, i = 0) {
    if (t.targetEl === null || t.anchorEl === null || i > 5) return;
    if (t.targetEl.offsetHeight === 0 || t.targetEl.offsetWidth === 0) {
        setTimeout(() => {
            Mt(t, i + 1)
        }, 10);
        return
    }
    const {
        targetEl: a,
        offset: r,
        anchorEl: l,
        anchorOrigin: f,
        selfOrigin: d,
        absoluteOffset: p,
        fit: h,
        cover: v,
        maxHeight: x,
        maxWidth: e
    } = t;
    if (ze.is.ios === !0 && window.visualViewport !== void 0) {
        const O = document.body.style, {offsetLeft: P, offsetTop: Q} = window.visualViewport;
        P !== pt && (O.setProperty("--q-pe-left", P + "px"), pt = P), Q !== ht && (O.setProperty("--q-pe-top", Q + "px"), ht = Q)
    }
    const {scrollLeft: n, scrollTop: o} = a, u = p === void 0 ? ta(l, v === !0 ? [0, 0] : r) : na(l, p, r);
    Object.assign(a.style, {
        top: 0,
        left: 0,
        minWidth: null,
        minHeight: null,
        maxWidth: e,
        maxHeight: x,
        visibility: "visible"
    });
    const {offsetWidth: c, offsetHeight: _} = a, {
        elWidth: s,
        elHeight: b
    } = h === !0 || v === !0 ? {
        elWidth: Math.max(u.width, c),
        elHeight: v === !0 ? Math.max(u.height, _) : _
    } : {elWidth: c, elHeight: _};
    let C = {maxWidth: e, maxHeight: x};
    (h === !0 || v === !0) && (C.minWidth = u.width + "px", v === !0 && (C.minHeight = u.height + "px")), Object.assign(a.style, C);
    const M = aa(s, b);
    let I = bt(u, M, f, d);
    if (p === void 0 || r === void 0) Ge(I, u, M, f, d); else {
        const {top: O, left: P} = I;
        Ge(I, u, M, f, d);
        let Q = !1;
        if (I.top !== O) {
            Q = !0;
            const m = 2 * r[1];
            u.center = u.top -= m, u.bottom -= m + 2
        }
        if (I.left !== P) {
            Q = !0;
            const m = 2 * r[0];
            u.middle = u.left -= m, u.right -= m + 2
        }
        Q === !0 && (I = bt(u, M, f, d), Ge(I, u, M, f, d))
    }
    C = {
        top: I.top + "px",
        left: I.left + "px"
    }, I.maxHeight !== void 0 && (C.maxHeight = I.maxHeight + "px", u.height > I.maxHeight && (C.minHeight = C.maxHeight)), I.maxWidth !== void 0 && (C.maxWidth = I.maxWidth + "px", u.width > I.maxWidth && (C.minWidth = C.maxWidth)), Object.assign(a.style, C), a.scrollTop !== o && (a.scrollTop = o), a.scrollLeft !== n && (a.scrollLeft = n)
}

function Ge(t, i, a, r, l) {
    const f = a.bottom, d = a.right, p = tn(), h = window.innerHeight - p, v = document.body.clientWidth;
    if (t.top < 0 || t.top + f > h) if (l.vertical === "center") t.top = i[r.vertical] > h / 2 ? Math.max(0, h - f) : 0, t.maxHeight = Math.min(f, h); else if (i[r.vertical] > h / 2) {
        const x = Math.min(h, r.vertical === "center" ? i.center : r.vertical === l.vertical ? i.bottom : i.top);
        t.maxHeight = Math.min(f, x), t.top = Math.max(0, x - f)
    } else t.top = Math.max(0, r.vertical === "center" ? i.center : r.vertical === l.vertical ? i.top : i.bottom), t.maxHeight = Math.min(f, h - t.top);
    if (t.left < 0 || t.left + d > v) if (t.maxWidth = Math.min(d, v), l.horizontal === "middle") t.left = i[r.horizontal] > v / 2 ? Math.max(0, v - d) : 0; else if (i[r.horizontal] > v / 2) {
        const x = Math.min(v, r.horizontal === "middle" ? i.middle : r.horizontal === l.horizontal ? i.right : i.left);
        t.maxWidth = Math.min(d, x), t.left = Math.max(0, x - t.maxWidth)
    } else t.left = Math.max(0, r.horizontal === "middle" ? i.middle : r.horizontal === l.horizontal ? i.left : i.right), t.maxWidth = Math.min(d, v - t.left)
}

var oa = re({
    name: "QMenu",
    inheritAttrs: !1,
    props: {
        ...Hn, ...nn, ...Xe, ...Wn,
        persistent: Boolean,
        autoClose: Boolean,
        separateClosePopup: Boolean,
        noRouteDismiss: Boolean,
        noRefocus: Boolean,
        noFocus: Boolean,
        fit: Boolean,
        cover: Boolean,
        square: Boolean,
        anchor: {type: String, validator: gt},
        self: {type: String, validator: gt},
        offset: {type: Array, validator: ea},
        scrollTarget: an,
        touchPosition: Boolean,
        maxHeight: {type: String, default: null},
        maxWidth: {type: String, default: null}
    },
    emits: [...on, "click", "escapeKey"],
    setup(t, {slots: i, emit: a, attrs: r}) {
        let l = null, f, d, p;
        const h = ee(), {proxy: v} = h, {$q: x} = v, e = D(null), n = D(!1),
            o = E(() => t.persistent !== !0 && t.noRouteDismiss !== !0), u = Ye(t, x), {
                registerTick: c,
                removeTick: _
            } = Kn(), {registerTimeout: s} = rn(), {transitionProps: b, transitionStyle: C} = Nn(t), {
                localScrollTarget: M,
                changeScrollEvent: I,
                unconfigureScrollTarget: O
            } = $n(t, K), {anchorEl: P, canShow: Q} = Rn({showing: n}), {hide: m} = ln({
                showing: n,
                canShow: Q,
                handleShow: B,
                handleHide: $,
                hideOnRouteChange: o,
                processOnMount: !0
            }), {showPortal: w, hidePortal: T, renderPortal: A} = Gn(h, e, qt, "menu"), F = {
                anchorEl: P, innerRef: e, onClickOutside(L) {
                    if (t.persistent !== !0 && n.value === !0) return m(L), (L.type === "touchstart" || L.target.classList.contains("q-dialog__backdrop")) && wt(L), !0
                }
            }, q = E(() => yt(t.anchor || (t.cover === !0 ? "center middle" : "bottom start"), x.lang.rtl)),
            N = E(() => t.cover === !0 ? q.value : yt(t.self || "top start", x.lang.rtl)),
            V = E(() => (t.square === !0 ? " q-menu--square" : "") + (u.value === !0 ? " q-menu--dark q-dark" : "")),
            k = E(() => t.autoClose === !0 ? {onClick: te} : {}), g = E(() => n.value === !0 && t.persistent !== !0);
        j(g, L => {
            L === !0 ? (Xn(z), Jn(F)) : (vt(z), mt(F))
        });

        function S() {
            Ue(() => {
                let L = e.value;
                L && L.contains(document.activeElement) !== !0 && (L = L.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || L.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || L.querySelector("[autofocus], [data-autofocus]") || L, L.focus({preventScroll: !0}))
            })
        }

        function B(L) {
            if (l = t.noRefocus === !1 ? document.activeElement : null, Yn(Y), w(), K(), f = void 0, L !== void 0 && (t.touchPosition || t.contextMenu)) {
                const Ve = Zt(L);
                if (Ve.left !== void 0) {
                    const {top: Et, left: Pt} = P.value.getBoundingClientRect();
                    f = {left: Ve.left - Pt, top: Ve.top - Et}
                }
            }
            d === void 0 && (d = j(() => x.screen.width + "|" + x.screen.height + "|" + t.self + "|" + t.anchor + "|" + x.lang.rtl, J)), t.noFocus !== !0 && document.activeElement.blur(), c(() => {
                J(), t.noFocus !== !0 && S()
            }), s(() => {
                x.platform.is.ios === !0 && (p = t.autoClose, e.value.click()), J(), w(!0), a("show", L)
            }, t.transitionDuration)
        }

        function $(L) {
            _(), T(), y(!0), l !== null && (L === void 0 || L.qClickOutside !== !0) && (((L && L.type.indexOf("key") === 0 ? l.closest('[tabindex]:not([tabindex^="-"])') : void 0) || l).focus(), l = null), s(() => {
                T(!0), a("hide", L)
            }, t.transitionDuration)
        }

        function y(L) {
            f = void 0, d !== void 0 && (d(), d = void 0), (L === !0 || n.value === !0) && (Un(Y), O(), mt(F), vt(z)), L !== !0 && (l = null)
        }

        function K() {
            (P.value !== null || t.scrollTarget !== void 0) && (M.value = un(P.value, t.scrollTarget), I(M.value, J))
        }

        function te(L) {
            p !== !0 ? (Ln(v, L), a("click", L)) : p = !1
        }

        function Y(L) {
            g.value === !0 && t.noFocus !== !0 && zt(e.value, L.target) !== !0 && S()
        }

        function z(L) {
            a("escapeKey"), m(L)
        }

        function J() {
            Mt({
                targetEl: e.value,
                offset: t.offset,
                anchorEl: P.value,
                anchorOrigin: q.value,
                selfOrigin: N.value,
                absoluteOffset: f,
                fit: t.fit,
                cover: t.cover,
                maxHeight: t.maxHeight,
                maxWidth: t.maxWidth
            })
        }

        function qt() {
            return H(ce, b.value, () => n.value === !0 ? H("div", {
                role: "menu", ...r,
                ref: e,
                tabindex: -1,
                class: ["q-menu q-position-engine scroll" + V.value, r.class],
                style: [r.style, C.value], ...k.value
            }, oe(i.default)) : null)
        }

        return ie(y), Object.assign(v, {focus: S, updatePosition: J}), A
    }
});

function ke(t, i = new WeakMap) {
    if (Object(t) !== t) return t;
    if (i.has(t)) return i.get(t);
    const a = t instanceof Date ? new Date(t) : t instanceof RegExp ? new RegExp(t.source, t.flags) : t instanceof Set ? new Set : t instanceof Map ? new Map : typeof t.constructor != "function" ? Object.create(null) : t.prototype !== void 0 && typeof t.prototype.constructor == "function" ? t : new t.constructor;
    if (typeof t.constructor == "function" && typeof t.valueOf == "function") {
        const r = t.valueOf();
        if (Object(r) !== r) {
            const l = new t.constructor(r);
            return i.set(t, l), l
        }
    }
    return i.set(t, a), t instanceof Set ? t.forEach(r => {
        a.add(ke(r, i))
    }) : t instanceof Map && t.forEach((r, l) => {
        a.set(l, ke(r, i))
    }), Object.assign(a, ...Object.keys(t).map(r => ({[r]: ke(t[r], i)})))
}

var ra = re({
        name: "QPopupEdit",
        props: {
            modelValue: {required: !0},
            title: String,
            buttons: Boolean,
            labelSet: String,
            labelCancel: String,
            color: {type: String, default: "primary"},
            validate: {type: Function, default: () => !0},
            autoSave: Boolean,
            cover: {type: Boolean, default: !0},
            disable: Boolean
        },
        emits: ["update:modelValue", "save", "cancel", "beforeShow", "show", "beforeHide", "hide"],
        setup(t, {slots: i, emit: a}) {
            const {proxy: r} = ee(), {$q: l} = r, f = D(null), d = D(""), p = D("");
            let h = !1;
            const v = E(() => Oe({
                initialValue: d.value,
                validate: t.validate,
                set: x,
                cancel: e,
                updatePosition: n
            }, "value", () => p.value, M => {
                p.value = M
            }));

            function x() {
                t.validate(p.value) !== !1 && (o() === !0 && (a("save", p.value, d.value), a("update:modelValue", p.value)), u())
            }

            function e() {
                o() === !0 && a("cancel", p.value, d.value), u()
            }

            function n() {
                ae(() => {
                    f.value.updatePosition()
                })
            }

            function o() {
                return Xt(p.value, d.value) === !1
            }

            function u() {
                h = !0, f.value.hide()
            }

            function c() {
                h = !1, d.value = ke(t.modelValue), p.value = ke(t.modelValue), a("beforeShow")
            }

            function _() {
                a("show")
            }

            function s() {
                h === !1 && o() === !0 && (t.autoSave === !0 && t.validate(p.value) === !0 ? (a("save", p.value, d.value), a("update:modelValue", p.value)) : a("cancel", p.value, d.value)), a("beforeHide")
            }

            function b() {
                a("hide")
            }

            function C() {
                const M = i.default !== void 0 ? [].concat(i.default(v.value)) : [];
                return t.title && M.unshift(H("div", {class: "q-dialog__title q-mt-sm q-mb-sm"}, t.title)), t.buttons === !0 && M.push(H("div", {class: "q-popup-edit__buttons row justify-center no-wrap"}, [H(fe, {
                    flat: !0,
                    color: t.color,
                    label: t.labelCancel || l.lang.label.cancel,
                    onClick: e
                }), H(fe, {flat: !0, color: t.color, label: t.labelSet || l.lang.label.set, onClick: x})])), M
            }

            return Object.assign(r, {
                set: x, cancel: e, show(M) {
                    f.value !== null && f.value.show(M)
                }, hide(M) {
                    f.value !== null && f.value.hide(M)
                }, updatePosition: n
            }), () => {
                if (t.disable !== !0) return H(oa, {
                    ref: f,
                    class: "q-popup-edit",
                    cover: t.cover,
                    onBeforeShow: c,
                    onShow: _,
                    onBeforeHide: s,
                    onHide: b,
                    onEscapeKey: e
                }, C)
            }
        }
    }), la = re({
        name: "QPage", props: {padding: Boolean, styleFn: Function}, setup(t, {slots: i}) {
            const {proxy: {$q: a}} = ee(), r = We(Yt, he);
            if (r === he) return console.error("QPage needs to be a deep child of QLayout"), he;
            if (We(Ut, he) === he) return console.error("QPage needs to be child of QPageContainer"), he;
            const f = E(() => {
                const p = (r.header.space === !0 ? r.header.size : 0) + (r.footer.space === !0 ? r.footer.size : 0);
                if (typeof t.styleFn == "function") {
                    const h = r.isContainer.value === !0 ? r.containerHeight.value : a.screen.height;
                    return t.styleFn(p, h)
                }
                return {minHeight: r.isContainer.value === !0 ? r.containerHeight.value - p + "px" : a.screen.height === 0 ? p !== 0 ? `calc(100vh - ${p}px)` : "100vh" : a.screen.height - p + "px"}
            }), d = E(() => `q-page${t.padding === !0 ? " q-layout-padding" : ""}`);
            return () => H("main", {class: d.value, style: f.value}, oe(i.default))
        }
    }),
    xe = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
    ye = {};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
(function (t) {
    (function () {
        var i = function () {
            this.init()
        };
        i.prototype = {
            init: function () {
                var e = this || a;
                return e._counter = 1e3, e._html5AudioPool = [], e.html5PoolSize = 10, e._codecs = {}, e._howls = [], e._muted = !1, e._volume = 1, e._canPlayEvent = "canplaythrough", e._navigator = typeof window != "undefined" && window.navigator ? window.navigator : null, e.masterGain = null, e.noAudio = !1, e.usingWebAudio = !0, e.autoSuspend = !0, e.ctx = null, e.autoUnlock = !0, e._setup(), e
            }, volume: function (e) {
                var n = this || a;
                if (e = parseFloat(e), n.ctx || x(), typeof e != "undefined" && e >= 0 && e <= 1) {
                    if (n._volume = e, n._muted) return n;
                    n.usingWebAudio && n.masterGain.gain.setValueAtTime(e, a.ctx.currentTime);
                    for (var o = 0; o < n._howls.length; o++) if (!n._howls[o]._webAudio) for (var u = n._howls[o]._getSoundIds(), c = 0; c < u.length; c++) {
                        var _ = n._howls[o]._soundById(u[c]);
                        _ && _._node && (_._node.volume = _._volume * e)
                    }
                    return n
                }
                return n._volume
            }, mute: function (e) {
                var n = this || a;
                n.ctx || x(), n._muted = e, n.usingWebAudio && n.masterGain.gain.setValueAtTime(e ? 0 : n._volume, a.ctx.currentTime);
                for (var o = 0; o < n._howls.length; o++) if (!n._howls[o]._webAudio) for (var u = n._howls[o]._getSoundIds(), c = 0; c < u.length; c++) {
                    var _ = n._howls[o]._soundById(u[c]);
                    _ && _._node && (_._node.muted = e ? !0 : _._muted)
                }
                return n
            }, stop: function () {
                for (var e = this || a, n = 0; n < e._howls.length; n++) e._howls[n].stop();
                return e
            }, unload: function () {
                for (var e = this || a, n = e._howls.length - 1; n >= 0; n--) e._howls[n].unload();
                return e.usingWebAudio && e.ctx && typeof e.ctx.close != "undefined" && (e.ctx.close(), e.ctx = null, x()), e
            }, codecs: function (e) {
                return (this || a)._codecs[e.replace(/^x-/, "")]
            }, _setup: function () {
                var e = this || a;
                if (e.state = e.ctx && e.ctx.state || "suspended", e._autoSuspend(), !e.usingWebAudio) if (typeof Audio != "undefined") try {
                    var n = new Audio;
                    typeof n.oncanplaythrough == "undefined" && (e._canPlayEvent = "canplay")
                } catch {
                    e.noAudio = !0
                } else e.noAudio = !0;
                try {
                    var n = new Audio;
                    n.muted && (e.noAudio = !0)
                } catch {
                }
                return e.noAudio || e._setupCodecs(), e
            }, _setupCodecs: function () {
                var e = this || a, n = null;
                try {
                    n = typeof Audio != "undefined" ? new Audio : null
                } catch {
                    return e
                }
                if (!n || typeof n.canPlayType != "function") return e;
                var o = n.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                    u = e._navigator ? e._navigator.userAgent : "", c = u.match(/OPR\/(\d+)/g),
                    _ = c && parseInt(c[0].split("/")[1], 10) < 33,
                    s = u.indexOf("Safari") !== -1 && u.indexOf("Chrome") === -1, b = u.match(/Version\/(.*?) /),
                    C = s && b && parseInt(b[1], 10) < 15;
                return e._codecs = {
                    mp3: !!(!_ && (o || n.canPlayType("audio/mp3;").replace(/^no$/, ""))),
                    mpeg: !!o,
                    opus: !!n.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                    ogg: !!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    oga: !!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    wav: !!(n.canPlayType('audio/wav; codecs="1"') || n.canPlayType("audio/wav")).replace(/^no$/, ""),
                    aac: !!n.canPlayType("audio/aac;").replace(/^no$/, ""),
                    caf: !!n.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                    m4a: !!(n.canPlayType("audio/x-m4a;") || n.canPlayType("audio/m4a;") || n.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    m4b: !!(n.canPlayType("audio/x-m4b;") || n.canPlayType("audio/m4b;") || n.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    mp4: !!(n.canPlayType("audio/x-mp4;") || n.canPlayType("audio/mp4;") || n.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    weba: !!(!C && n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                    webm: !!(!C && n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                    dolby: !!n.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                    flac: !!(n.canPlayType("audio/x-flac;") || n.canPlayType("audio/flac;")).replace(/^no$/, "")
                }, e
            }, _unlockAudio: function () {
                var e = this || a;
                if (!(e._audioUnlocked || !e.ctx)) {
                    e._audioUnlocked = !1, e.autoUnlock = !1, !e._mobileUnloaded && e.ctx.sampleRate !== 44100 && (e._mobileUnloaded = !0, e.unload()), e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050);
                    var n = function (o) {
                        for (; e._html5AudioPool.length < e.html5PoolSize;) try {
                            var u = new Audio;
                            u._unlocked = !0, e._releaseHtml5Audio(u)
                        } catch {
                            e.noAudio = !0;
                            break
                        }
                        for (var c = 0; c < e._howls.length; c++) if (!e._howls[c]._webAudio) for (var _ = e._howls[c]._getSoundIds(), s = 0; s < _.length; s++) {
                            var b = e._howls[c]._soundById(_[s]);
                            b && b._node && !b._node._unlocked && (b._node._unlocked = !0, b._node.load())
                        }
                        e._autoResume();
                        var C = e.ctx.createBufferSource();
                        C.buffer = e._scratchBuffer, C.connect(e.ctx.destination), typeof C.start == "undefined" ? C.noteOn(0) : C.start(0), typeof e.ctx.resume == "function" && e.ctx.resume(), C.onended = function () {
                            C.disconnect(0), e._audioUnlocked = !0, document.removeEventListener("touchstart", n, !0), document.removeEventListener("touchend", n, !0), document.removeEventListener("click", n, !0), document.removeEventListener("keydown", n, !0);
                            for (var M = 0; M < e._howls.length; M++) e._howls[M]._emit("unlock")
                        }
                    };
                    return document.addEventListener("touchstart", n, !0), document.addEventListener("touchend", n, !0), document.addEventListener("click", n, !0), document.addEventListener("keydown", n, !0), e
                }
            }, _obtainHtml5Audio: function () {
                var e = this || a;
                if (e._html5AudioPool.length) return e._html5AudioPool.pop();
                var n = new Audio().play();
                return n && typeof Promise != "undefined" && (n instanceof Promise || typeof n.then == "function") && n.catch(function () {
                    console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
                }), new Audio
            }, _releaseHtml5Audio: function (e) {
                var n = this || a;
                return e._unlocked && n._html5AudioPool.push(e), n
            }, _autoSuspend: function () {
                var e = this;
                if (!(!e.autoSuspend || !e.ctx || typeof e.ctx.suspend == "undefined" || !a.usingWebAudio)) {
                    for (var n = 0; n < e._howls.length; n++) if (e._howls[n]._webAudio) {
                        for (var o = 0; o < e._howls[n]._sounds.length; o++) if (!e._howls[n]._sounds[o]._paused) return e
                    }
                    return e._suspendTimer && clearTimeout(e._suspendTimer), e._suspendTimer = setTimeout(function () {
                        if (!!e.autoSuspend) {
                            e._suspendTimer = null, e.state = "suspending";
                            var u = function () {
                                e.state = "suspended", e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume())
                            };
                            e.ctx.suspend().then(u, u)
                        }
                    }, 3e4), e
                }
            }, _autoResume: function () {
                var e = this;
                if (!(!e.ctx || typeof e.ctx.resume == "undefined" || !a.usingWebAudio)) return e.state === "running" && e.ctx.state !== "interrupted" && e._suspendTimer ? (clearTimeout(e._suspendTimer), e._suspendTimer = null) : e.state === "suspended" || e.state === "running" && e.ctx.state === "interrupted" ? (e.ctx.resume().then(function () {
                    e.state = "running";
                    for (var n = 0; n < e._howls.length; n++) e._howls[n]._emit("resume")
                }), e._suspendTimer && (clearTimeout(e._suspendTimer), e._suspendTimer = null)) : e.state === "suspending" && (e._resumeAfterSuspend = !0), e
            }
        };
        var a = new i, r = function (e) {
            var n = this;
            if (!e.src || e.src.length === 0) {
                console.error("An array of source files must be passed with any new Howl.");
                return
            }
            n.init(e)
        };
        r.prototype = {
            init: function (e) {
                var n = this;
                return a.ctx || x(), n._autoplay = e.autoplay || !1, n._format = typeof e.format != "string" ? e.format : [e.format], n._html5 = e.html5 || !1, n._muted = e.mute || !1, n._loop = e.loop || !1, n._pool = e.pool || 5, n._preload = typeof e.preload == "boolean" || e.preload === "metadata" ? e.preload : !0, n._rate = e.rate || 1, n._sprite = e.sprite || {}, n._src = typeof e.src != "string" ? e.src : [e.src], n._volume = e.volume !== void 0 ? e.volume : 1, n._xhr = {
                    method: e.xhr && e.xhr.method ? e.xhr.method : "GET",
                    headers: e.xhr && e.xhr.headers ? e.xhr.headers : null,
                    withCredentials: e.xhr && e.xhr.withCredentials ? e.xhr.withCredentials : !1
                }, n._duration = 0, n._state = "unloaded", n._sounds = [], n._endTimers = {}, n._queue = [], n._playLock = !1, n._onend = e.onend ? [{fn: e.onend}] : [], n._onfade = e.onfade ? [{fn: e.onfade}] : [], n._onload = e.onload ? [{fn: e.onload}] : [], n._onloaderror = e.onloaderror ? [{fn: e.onloaderror}] : [], n._onplayerror = e.onplayerror ? [{fn: e.onplayerror}] : [], n._onpause = e.onpause ? [{fn: e.onpause}] : [], n._onplay = e.onplay ? [{fn: e.onplay}] : [], n._onstop = e.onstop ? [{fn: e.onstop}] : [], n._onmute = e.onmute ? [{fn: e.onmute}] : [], n._onvolume = e.onvolume ? [{fn: e.onvolume}] : [], n._onrate = e.onrate ? [{fn: e.onrate}] : [], n._onseek = e.onseek ? [{fn: e.onseek}] : [], n._onunlock = e.onunlock ? [{fn: e.onunlock}] : [], n._onresume = [], n._webAudio = a.usingWebAudio && !n._html5, typeof a.ctx != "undefined" && a.ctx && a.autoUnlock && a._unlockAudio(), a._howls.push(n), n._autoplay && n._queue.push({
                    event: "play",
                    action: function () {
                        n.play()
                    }
                }), n._preload && n._preload !== "none" && n.load(), n
            }, load: function () {
                var e = this, n = null;
                if (a.noAudio) {
                    e._emit("loaderror", null, "No audio support.");
                    return
                }
                typeof e._src == "string" && (e._src = [e._src]);
                for (var o = 0; o < e._src.length; o++) {
                    var u, c;
                    if (e._format && e._format[o]) u = e._format[o]; else {
                        if (c = e._src[o], typeof c != "string") {
                            e._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                            continue
                        }
                        u = /^data:audio\/([^;,]+);/i.exec(c), u || (u = /\.([^.]+)$/.exec(c.split("?", 1)[0])), u && (u = u[1].toLowerCase())
                    }
                    if (u || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), u && a.codecs(u)) {
                        n = e._src[o];
                        break
                    }
                }
                if (!n) {
                    e._emit("loaderror", null, "No codec support for selected audio sources.");
                    return
                }
                return e._src = n, e._state = "loading", window.location.protocol === "https:" && n.slice(0, 5) === "http:" && (e._html5 = !0, e._webAudio = !1), new l(e), e._webAudio && d(e), e
            }, play: function (e, n) {
                var o = this, u = null;
                if (typeof e == "number") u = e, e = null; else {
                    if (typeof e == "string" && o._state === "loaded" && !o._sprite[e]) return null;
                    if (typeof e == "undefined" && (e = "__default", !o._playLock)) {
                        for (var c = 0, _ = 0; _ < o._sounds.length; _++) o._sounds[_]._paused && !o._sounds[_]._ended && (c++, u = o._sounds[_]._id);
                        c === 1 ? e = null : u = null
                    }
                }
                var s = u ? o._soundById(u) : o._inactiveSound();
                if (!s) return null;
                if (u && !e && (e = s._sprite || "__default"), o._state !== "loaded") {
                    s._sprite = e, s._ended = !1;
                    var b = s._id;
                    return o._queue.push({
                        event: "play", action: function () {
                            o.play(b)
                        }
                    }), b
                }
                if (u && !s._paused) return n || o._loadQueue("play"), s._id;
                o._webAudio && a._autoResume();
                var C = Math.max(0, s._seek > 0 ? s._seek : o._sprite[e][0] / 1e3),
                    M = Math.max(0, (o._sprite[e][0] + o._sprite[e][1]) / 1e3 - C), I = M * 1e3 / Math.abs(s._rate),
                    O = o._sprite[e][0] / 1e3, P = (o._sprite[e][0] + o._sprite[e][1]) / 1e3;
                s._sprite = e, s._ended = !1;
                var Q = function () {
                    s._paused = !1, s._seek = C, s._start = O, s._stop = P, s._loop = !!(s._loop || o._sprite[e][2])
                };
                if (C >= P) {
                    o._ended(s);
                    return
                }
                var m = s._node;
                if (o._webAudio) {
                    var w = function () {
                        o._playLock = !1, Q(), o._refreshBuffer(s);
                        var q = s._muted || o._muted ? 0 : s._volume;
                        m.gain.setValueAtTime(q, a.ctx.currentTime), s._playStart = a.ctx.currentTime, typeof m.bufferSource.start == "undefined" ? s._loop ? m.bufferSource.noteGrainOn(0, C, 86400) : m.bufferSource.noteGrainOn(0, C, M) : s._loop ? m.bufferSource.start(0, C, 86400) : m.bufferSource.start(0, C, M), I !== 1 / 0 && (o._endTimers[s._id] = setTimeout(o._ended.bind(o, s), I)), n || setTimeout(function () {
                            o._emit("play", s._id), o._loadQueue()
                        }, 0)
                    };
                    a.state === "running" && a.ctx.state !== "interrupted" ? w() : (o._playLock = !0, o.once("resume", w), o._clearTimer(s._id))
                } else {
                    var T = function () {
                        m.currentTime = C, m.muted = s._muted || o._muted || a._muted || m.muted, m.volume = s._volume * a.volume(), m.playbackRate = s._rate;
                        try {
                            var q = m.play();
                            if (q && typeof Promise != "undefined" && (q instanceof Promise || typeof q.then == "function") ? (o._playLock = !0, Q(), q.then(function () {
                                o._playLock = !1, m._unlocked = !0, n ? o._loadQueue() : o._emit("play", s._id)
                            }).catch(function () {
                                o._playLock = !1, o._emit("playerror", s._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), s._ended = !0, s._paused = !0
                            })) : n || (o._playLock = !1, Q(), o._emit("play", s._id)), m.playbackRate = s._rate, m.paused) {
                                o._emit("playerror", s._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                                return
                            }
                            e !== "__default" || s._loop ? o._endTimers[s._id] = setTimeout(o._ended.bind(o, s), I) : (o._endTimers[s._id] = function () {
                                o._ended(s), m.removeEventListener("ended", o._endTimers[s._id], !1)
                            }, m.addEventListener("ended", o._endTimers[s._id], !1))
                        } catch (N) {
                            o._emit("playerror", s._id, N)
                        }
                    };
                    m.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" && (m.src = o._src, m.load());
                    var A = window && window.ejecta || !m.readyState && a._navigator.isCocoonJS;
                    if (m.readyState >= 3 || A) T(); else {
                        o._playLock = !0, o._state = "loading";
                        var F = function () {
                            o._state = "loaded", T(), m.removeEventListener(a._canPlayEvent, F, !1)
                        };
                        m.addEventListener(a._canPlayEvent, F, !1), o._clearTimer(s._id)
                    }
                }
                return s._id
            }, pause: function (e) {
                var n = this;
                if (n._state !== "loaded" || n._playLock) return n._queue.push({
                    event: "pause", action: function () {
                        n.pause(e)
                    }
                }), n;
                for (var o = n._getSoundIds(e), u = 0; u < o.length; u++) {
                    n._clearTimer(o[u]);
                    var c = n._soundById(o[u]);
                    if (c && !c._paused && (c._seek = n.seek(o[u]), c._rateSeek = 0, c._paused = !0, n._stopFade(o[u]), c._node)) if (n._webAudio) {
                        if (!c._node.bufferSource) continue;
                        typeof c._node.bufferSource.stop == "undefined" ? c._node.bufferSource.noteOff(0) : c._node.bufferSource.stop(0), n._cleanBuffer(c._node)
                    } else (!isNaN(c._node.duration) || c._node.duration === 1 / 0) && c._node.pause();
                    arguments[1] || n._emit("pause", c ? c._id : null)
                }
                return n
            }, stop: function (e, n) {
                var o = this;
                if (o._state !== "loaded" || o._playLock) return o._queue.push({
                    event: "stop", action: function () {
                        o.stop(e)
                    }
                }), o;
                for (var u = o._getSoundIds(e), c = 0; c < u.length; c++) {
                    o._clearTimer(u[c]);
                    var _ = o._soundById(u[c]);
                    _ && (_._seek = _._start || 0, _._rateSeek = 0, _._paused = !0, _._ended = !0, o._stopFade(u[c]), _._node && (o._webAudio ? _._node.bufferSource && (typeof _._node.bufferSource.stop == "undefined" ? _._node.bufferSource.noteOff(0) : _._node.bufferSource.stop(0), o._cleanBuffer(_._node)) : (!isNaN(_._node.duration) || _._node.duration === 1 / 0) && (_._node.currentTime = _._start || 0, _._node.pause(), _._node.duration === 1 / 0 && o._clearSound(_._node))), n || o._emit("stop", _._id))
                }
                return o
            }, mute: function (e, n) {
                var o = this;
                if (o._state !== "loaded" || o._playLock) return o._queue.push({
                    event: "mute", action: function () {
                        o.mute(e, n)
                    }
                }), o;
                if (typeof n == "undefined") if (typeof e == "boolean") o._muted = e; else return o._muted;
                for (var u = o._getSoundIds(n), c = 0; c < u.length; c++) {
                    var _ = o._soundById(u[c]);
                    _ && (_._muted = e, _._interval && o._stopFade(_._id), o._webAudio && _._node ? _._node.gain.setValueAtTime(e ? 0 : _._volume, a.ctx.currentTime) : _._node && (_._node.muted = a._muted ? !0 : e), o._emit("mute", _._id))
                }
                return o
            }, volume: function () {
                var e = this, n = arguments, o, u;
                if (n.length === 0) return e._volume;
                if (n.length === 1 || n.length === 2 && typeof n[1] == "undefined") {
                    var c = e._getSoundIds(), _ = c.indexOf(n[0]);
                    _ >= 0 ? u = parseInt(n[0], 10) : o = parseFloat(n[0])
                } else n.length >= 2 && (o = parseFloat(n[0]), u = parseInt(n[1], 10));
                var s;
                if (typeof o != "undefined" && o >= 0 && o <= 1) {
                    if (e._state !== "loaded" || e._playLock) return e._queue.push({
                        event: "volume",
                        action: function () {
                            e.volume.apply(e, n)
                        }
                    }), e;
                    typeof u == "undefined" && (e._volume = o), u = e._getSoundIds(u);
                    for (var b = 0; b < u.length; b++) s = e._soundById(u[b]), s && (s._volume = o, n[2] || e._stopFade(u[b]), e._webAudio && s._node && !s._muted ? s._node.gain.setValueAtTime(o, a.ctx.currentTime) : s._node && !s._muted && (s._node.volume = o * a.volume()), e._emit("volume", s._id))
                } else return s = u ? e._soundById(u) : e._sounds[0], s ? s._volume : 0;
                return e
            }, fade: function (e, n, o, u) {
                var c = this;
                if (c._state !== "loaded" || c._playLock) return c._queue.push({
                    event: "fade", action: function () {
                        c.fade(e, n, o, u)
                    }
                }), c;
                e = Math.min(Math.max(0, parseFloat(e)), 1), n = Math.min(Math.max(0, parseFloat(n)), 1), o = parseFloat(o), c.volume(e, u);
                for (var _ = c._getSoundIds(u), s = 0; s < _.length; s++) {
                    var b = c._soundById(_[s]);
                    if (b) {
                        if (u || c._stopFade(_[s]), c._webAudio && !b._muted) {
                            var C = a.ctx.currentTime, M = C + o / 1e3;
                            b._volume = e, b._node.gain.setValueAtTime(e, C), b._node.gain.linearRampToValueAtTime(n, M)
                        }
                        c._startFadeInterval(b, e, n, o, _[s], typeof u == "undefined")
                    }
                }
                return c
            }, _startFadeInterval: function (e, n, o, u, c, _) {
                var s = this, b = n, C = o - n, M = Math.abs(C / .01), I = Math.max(4, M > 0 ? u / M : u),
                    O = Date.now();
                e._fadeTo = o, e._interval = setInterval(function () {
                    var P = (Date.now() - O) / u;
                    O = Date.now(), b += C * P, b = Math.round(b * 100) / 100, C < 0 ? b = Math.max(o, b) : b = Math.min(o, b), s._webAudio ? e._volume = b : s.volume(b, e._id, !0), _ && (s._volume = b), (o < n && b <= o || o > n && b >= o) && (clearInterval(e._interval), e._interval = null, e._fadeTo = null, s.volume(o, e._id), s._emit("fade", e._id))
                }, I)
            }, _stopFade: function (e) {
                var n = this, o = n._soundById(e);
                return o && o._interval && (n._webAudio && o._node.gain.cancelScheduledValues(a.ctx.currentTime), clearInterval(o._interval), o._interval = null, n.volume(o._fadeTo, e), o._fadeTo = null, n._emit("fade", e)), n
            }, loop: function () {
                var e = this, n = arguments, o, u, c;
                if (n.length === 0) return e._loop;
                if (n.length === 1) if (typeof n[0] == "boolean") o = n[0], e._loop = o; else return c = e._soundById(parseInt(n[0], 10)), c ? c._loop : !1; else n.length === 2 && (o = n[0], u = parseInt(n[1], 10));
                for (var _ = e._getSoundIds(u), s = 0; s < _.length; s++) c = e._soundById(_[s]), c && (c._loop = o, e._webAudio && c._node && c._node.bufferSource && (c._node.bufferSource.loop = o, o && (c._node.bufferSource.loopStart = c._start || 0, c._node.bufferSource.loopEnd = c._stop, e.playing(_[s]) && (e.pause(_[s], !0), e.play(_[s], !0)))));
                return e
            }, rate: function () {
                var e = this, n = arguments, o, u;
                if (n.length === 0) u = e._sounds[0]._id; else if (n.length === 1) {
                    var c = e._getSoundIds(), _ = c.indexOf(n[0]);
                    _ >= 0 ? u = parseInt(n[0], 10) : o = parseFloat(n[0])
                } else n.length === 2 && (o = parseFloat(n[0]), u = parseInt(n[1], 10));
                var s;
                if (typeof o == "number") {
                    if (e._state !== "loaded" || e._playLock) return e._queue.push({
                        event: "rate", action: function () {
                            e.rate.apply(e, n)
                        }
                    }), e;
                    typeof u == "undefined" && (e._rate = o), u = e._getSoundIds(u);
                    for (var b = 0; b < u.length; b++) if (s = e._soundById(u[b]), s) {
                        e.playing(u[b]) && (s._rateSeek = e.seek(u[b]), s._playStart = e._webAudio ? a.ctx.currentTime : s._playStart), s._rate = o, e._webAudio && s._node && s._node.bufferSource ? s._node.bufferSource.playbackRate.setValueAtTime(o, a.ctx.currentTime) : s._node && (s._node.playbackRate = o);
                        var C = e.seek(u[b]), M = (e._sprite[s._sprite][0] + e._sprite[s._sprite][1]) / 1e3 - C,
                            I = M * 1e3 / Math.abs(s._rate);
                        (e._endTimers[u[b]] || !s._paused) && (e._clearTimer(u[b]), e._endTimers[u[b]] = setTimeout(e._ended.bind(e, s), I)), e._emit("rate", s._id)
                    }
                } else return s = e._soundById(u), s ? s._rate : e._rate;
                return e
            }, seek: function () {
                var e = this, n = arguments, o, u;
                if (n.length === 0) e._sounds.length && (u = e._sounds[0]._id); else if (n.length === 1) {
                    var c = e._getSoundIds(), _ = c.indexOf(n[0]);
                    _ >= 0 ? u = parseInt(n[0], 10) : e._sounds.length && (u = e._sounds[0]._id, o = parseFloat(n[0]))
                } else n.length === 2 && (o = parseFloat(n[0]), u = parseInt(n[1], 10));
                if (typeof u == "undefined") return 0;
                if (typeof o == "number" && (e._state !== "loaded" || e._playLock)) return e._queue.push({
                    event: "seek",
                    action: function () {
                        e.seek.apply(e, n)
                    }
                }), e;
                var s = e._soundById(u);
                if (s) if (typeof o == "number" && o >= 0) {
                    var b = e.playing(u);
                    b && e.pause(u, !0), s._seek = o, s._ended = !1, e._clearTimer(u), !e._webAudio && s._node && !isNaN(s._node.duration) && (s._node.currentTime = o);
                    var C = function () {
                        b && e.play(u, !0), e._emit("seek", u)
                    };
                    if (b && !e._webAudio) {
                        var M = function () {
                            e._playLock ? setTimeout(M, 0) : C()
                        };
                        setTimeout(M, 0)
                    } else C()
                } else if (e._webAudio) {
                    var I = e.playing(u) ? a.ctx.currentTime - s._playStart : 0,
                        O = s._rateSeek ? s._rateSeek - s._seek : 0;
                    return s._seek + (O + I * Math.abs(s._rate))
                } else return s._node.currentTime;
                return e
            }, playing: function (e) {
                var n = this;
                if (typeof e == "number") {
                    var o = n._soundById(e);
                    return o ? !o._paused : !1
                }
                for (var u = 0; u < n._sounds.length; u++) if (!n._sounds[u]._paused) return !0;
                return !1
            }, duration: function (e) {
                var n = this, o = n._duration, u = n._soundById(e);
                return u && (o = n._sprite[u._sprite][1] / 1e3), o
            }, state: function () {
                return this._state
            }, unload: function () {
                for (var e = this, n = e._sounds, o = 0; o < n.length; o++) n[o]._paused || e.stop(n[o]._id), e._webAudio || (e._clearSound(n[o]._node), n[o]._node.removeEventListener("error", n[o]._errorFn, !1), n[o]._node.removeEventListener(a._canPlayEvent, n[o]._loadFn, !1), n[o]._node.removeEventListener("ended", n[o]._endFn, !1), a._releaseHtml5Audio(n[o]._node)), delete n[o]._node, e._clearTimer(n[o]._id);
                var u = a._howls.indexOf(e);
                u >= 0 && a._howls.splice(u, 1);
                var c = !0;
                for (o = 0; o < a._howls.length; o++) if (a._howls[o]._src === e._src || e._src.indexOf(a._howls[o]._src) >= 0) {
                    c = !1;
                    break
                }
                return f && c && delete f[e._src], a.noAudio = !1, e._state = "unloaded", e._sounds = [], e = null, null
            }, on: function (e, n, o, u) {
                var c = this, _ = c["_on" + e];
                return typeof n == "function" && _.push(u ? {id: o, fn: n, once: u} : {id: o, fn: n}), c
            }, off: function (e, n, o) {
                var u = this, c = u["_on" + e], _ = 0;
                if (typeof n == "number" && (o = n, n = null), n || o) for (_ = 0; _ < c.length; _++) {
                    var s = o === c[_].id;
                    if (n === c[_].fn && s || !n && s) {
                        c.splice(_, 1);
                        break
                    }
                } else if (e) u["_on" + e] = []; else {
                    var b = Object.keys(u);
                    for (_ = 0; _ < b.length; _++) b[_].indexOf("_on") === 0 && Array.isArray(u[b[_]]) && (u[b[_]] = [])
                }
                return u
            }, once: function (e, n, o) {
                var u = this;
                return u.on(e, n, o, 1), u
            }, _emit: function (e, n, o) {
                for (var u = this, c = u["_on" + e], _ = c.length - 1; _ >= 0; _--) (!c[_].id || c[_].id === n || e === "load") && (setTimeout(function (s) {
                    s.call(this, n, o)
                }.bind(u, c[_].fn), 0), c[_].once && u.off(e, c[_].fn, c[_].id));
                return u._loadQueue(e), u
            }, _loadQueue: function (e) {
                var n = this;
                if (n._queue.length > 0) {
                    var o = n._queue[0];
                    o.event === e && (n._queue.shift(), n._loadQueue()), e || o.action()
                }
                return n
            }, _ended: function (e) {
                var n = this, o = e._sprite;
                if (!n._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop) return setTimeout(n._ended.bind(n, e), 100), n;
                var u = !!(e._loop || n._sprite[o][2]);
                if (n._emit("end", e._id), !n._webAudio && u && n.stop(e._id, !0).play(e._id), n._webAudio && u) {
                    n._emit("play", e._id), e._seek = e._start || 0, e._rateSeek = 0, e._playStart = a.ctx.currentTime;
                    var c = (e._stop - e._start) * 1e3 / Math.abs(e._rate);
                    n._endTimers[e._id] = setTimeout(n._ended.bind(n, e), c)
                }
                return n._webAudio && !u && (e._paused = !0, e._ended = !0, e._seek = e._start || 0, e._rateSeek = 0, n._clearTimer(e._id), n._cleanBuffer(e._node), a._autoSuspend()), !n._webAudio && !u && n.stop(e._id, !0), n
            }, _clearTimer: function (e) {
                var n = this;
                if (n._endTimers[e]) {
                    if (typeof n._endTimers[e] != "function") clearTimeout(n._endTimers[e]); else {
                        var o = n._soundById(e);
                        o && o._node && o._node.removeEventListener("ended", n._endTimers[e], !1)
                    }
                    delete n._endTimers[e]
                }
                return n
            }, _soundById: function (e) {
                for (var n = this, o = 0; o < n._sounds.length; o++) if (e === n._sounds[o]._id) return n._sounds[o];
                return null
            }, _inactiveSound: function () {
                var e = this;
                e._drain();
                for (var n = 0; n < e._sounds.length; n++) if (e._sounds[n]._ended) return e._sounds[n].reset();
                return new l(e)
            }, _drain: function () {
                var e = this, n = e._pool, o = 0, u = 0;
                if (!(e._sounds.length < n)) {
                    for (u = 0; u < e._sounds.length; u++) e._sounds[u]._ended && o++;
                    for (u = e._sounds.length - 1; u >= 0; u--) {
                        if (o <= n) return;
                        e._sounds[u]._ended && (e._webAudio && e._sounds[u]._node && e._sounds[u]._node.disconnect(0), e._sounds.splice(u, 1), o--)
                    }
                }
            }, _getSoundIds: function (e) {
                var n = this;
                if (typeof e == "undefined") {
                    for (var o = [], u = 0; u < n._sounds.length; u++) o.push(n._sounds[u]._id);
                    return o
                } else return [e]
            }, _refreshBuffer: function (e) {
                var n = this;
                return e._node.bufferSource = a.ctx.createBufferSource(), e._node.bufferSource.buffer = f[n._src], e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node), e._node.bufferSource.loop = e._loop, e._loop && (e._node.bufferSource.loopStart = e._start || 0, e._node.bufferSource.loopEnd = e._stop || 0), e._node.bufferSource.playbackRate.setValueAtTime(e._rate, a.ctx.currentTime), n
            }, _cleanBuffer: function (e) {
                var n = this, o = a._navigator && a._navigator.vendor.indexOf("Apple") >= 0;
                if (!e.bufferSource) return n;
                if (a._scratchBuffer && e.bufferSource && (e.bufferSource.onended = null, e.bufferSource.disconnect(0), o)) try {
                    e.bufferSource.buffer = a._scratchBuffer
                } catch {
                }
                return e.bufferSource = null, n
            }, _clearSound: function (e) {
                var n = /MSIE |Trident\//.test(a._navigator && a._navigator.userAgent);
                n || (e.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
            }
        };
        var l = function (e) {
            this._parent = e, this.init()
        };
        l.prototype = {
            init: function () {
                var e = this, n = e._parent;
                return e._muted = n._muted, e._loop = n._loop, e._volume = n._volume, e._rate = n._rate, e._seek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++a._counter, n._sounds.push(e), e.create(), e
            }, create: function () {
                var e = this, n = e._parent, o = a._muted || e._muted || e._parent._muted ? 0 : e._volume;
                return n._webAudio ? (e._node = typeof a.ctx.createGain == "undefined" ? a.ctx.createGainNode() : a.ctx.createGain(), e._node.gain.setValueAtTime(o, a.ctx.currentTime), e._node.paused = !0, e._node.connect(a.masterGain)) : a.noAudio || (e._node = a._obtainHtml5Audio(), e._errorFn = e._errorListener.bind(e), e._node.addEventListener("error", e._errorFn, !1), e._loadFn = e._loadListener.bind(e), e._node.addEventListener(a._canPlayEvent, e._loadFn, !1), e._endFn = e._endListener.bind(e), e._node.addEventListener("ended", e._endFn, !1), e._node.src = n._src, e._node.preload = n._preload === !0 ? "auto" : n._preload, e._node.volume = o * a.volume(), e._node.load()), e
            }, reset: function () {
                var e = this, n = e._parent;
                return e._muted = n._muted, e._loop = n._loop, e._volume = n._volume, e._rate = n._rate, e._seek = 0, e._rateSeek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++a._counter, e
            }, _errorListener: function () {
                var e = this;
                e._parent._emit("loaderror", e._id, e._node.error ? e._node.error.code : 0), e._node.removeEventListener("error", e._errorFn, !1)
            }, _loadListener: function () {
                var e = this, n = e._parent;
                n._duration = Math.ceil(e._node.duration * 10) / 10, Object.keys(n._sprite).length === 0 && (n._sprite = {__default: [0, n._duration * 1e3]}), n._state !== "loaded" && (n._state = "loaded", n._emit("load"), n._loadQueue()), e._node.removeEventListener(a._canPlayEvent, e._loadFn, !1)
            }, _endListener: function () {
                var e = this, n = e._parent;
                n._duration === 1 / 0 && (n._duration = Math.ceil(e._node.duration * 10) / 10, n._sprite.__default[1] === 1 / 0 && (n._sprite.__default[1] = n._duration * 1e3), n._ended(e)), e._node.removeEventListener("ended", e._endFn, !1)
            }
        };
        var f = {}, d = function (e) {
            var n = e._src;
            if (f[n]) {
                e._duration = f[n].duration, v(e);
                return
            }
            if (/^data:[^;]+;base64,/.test(n)) {
                for (var o = atob(n.split(",")[1]), u = new Uint8Array(o.length), c = 0; c < o.length; ++c) u[c] = o.charCodeAt(c);
                h(u.buffer, e)
            } else {
                var _ = new XMLHttpRequest;
                _.open(e._xhr.method, n, !0), _.withCredentials = e._xhr.withCredentials, _.responseType = "arraybuffer", e._xhr.headers && Object.keys(e._xhr.headers).forEach(function (s) {
                    _.setRequestHeader(s, e._xhr.headers[s])
                }), _.onload = function () {
                    var s = (_.status + "")[0];
                    if (s !== "0" && s !== "2" && s !== "3") {
                        e._emit("loaderror", null, "Failed loading audio file with status: " + _.status + ".");
                        return
                    }
                    h(_.response, e)
                }, _.onerror = function () {
                    e._webAudio && (e._html5 = !0, e._webAudio = !1, e._sounds = [], delete f[n], e.load())
                }, p(_)
            }
        }, p = function (e) {
            try {
                e.send()
            } catch {
                e.onerror()
            }
        }, h = function (e, n) {
            var o = function () {
                n._emit("loaderror", null, "Decoding audio data failed.")
            }, u = function (c) {
                c && n._sounds.length > 0 ? (f[n._src] = c, v(n, c)) : o()
            };
            typeof Promise != "undefined" && a.ctx.decodeAudioData.length === 1 ? a.ctx.decodeAudioData(e).then(u).catch(o) : a.ctx.decodeAudioData(e, u, o)
        }, v = function (e, n) {
            n && !e._duration && (e._duration = n.duration), Object.keys(e._sprite).length === 0 && (e._sprite = {__default: [0, e._duration * 1e3]}), e._state !== "loaded" && (e._state = "loaded", e._emit("load"), e._loadQueue())
        }, x = function () {
            if (!!a.usingWebAudio) {
                try {
                    typeof AudioContext != "undefined" ? a.ctx = new AudioContext : typeof webkitAudioContext != "undefined" ? a.ctx = new webkitAudioContext : a.usingWebAudio = !1
                } catch {
                    a.usingWebAudio = !1
                }
                a.ctx || (a.usingWebAudio = !1);
                var e = /iP(hone|od|ad)/.test(a._navigator && a._navigator.platform),
                    n = a._navigator && a._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                    o = n ? parseInt(n[1], 10) : null;
                if (e && o && o < 9) {
                    var u = /safari/.test(a._navigator && a._navigator.userAgent.toLowerCase());
                    a._navigator && !u && (a.usingWebAudio = !1)
                }
                a.usingWebAudio && (a.masterGain = typeof a.ctx.createGain == "undefined" ? a.ctx.createGainNode() : a.ctx.createGain(), a.masterGain.gain.setValueAtTime(a._muted ? 0 : a._volume, a.ctx.currentTime), a.masterGain.connect(a.ctx.destination)), a._setup()
            }
        };
        t.Howler = a, t.Howl = r, typeof xe != "undefined" ? (xe.HowlerGlobal = i, xe.Howler = a, xe.Howl = r, xe.Sound = l) : typeof window != "undefined" && (window.HowlerGlobal = i, window.Howler = a, window.Howl = r, window.Sound = l)
    })();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
    (function () {
        HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function (a) {
            var r = this;
            if (!r.ctx || !r.ctx.listener) return r;
            for (var l = r._howls.length - 1; l >= 0; l--) r._howls[l].stereo(a);
            return r
        }, HowlerGlobal.prototype.pos = function (a, r, l) {
            var f = this;
            if (!f.ctx || !f.ctx.listener) return f;
            if (r = typeof r != "number" ? f._pos[1] : r, l = typeof l != "number" ? f._pos[2] : l, typeof a == "number") f._pos = [a, r, l], typeof f.ctx.listener.positionX != "undefined" ? (f.ctx.listener.positionX.setTargetAtTime(f._pos[0], Howler.ctx.currentTime, .1), f.ctx.listener.positionY.setTargetAtTime(f._pos[1], Howler.ctx.currentTime, .1), f.ctx.listener.positionZ.setTargetAtTime(f._pos[2], Howler.ctx.currentTime, .1)) : f.ctx.listener.setPosition(f._pos[0], f._pos[1], f._pos[2]); else return f._pos;
            return f
        }, HowlerGlobal.prototype.orientation = function (a, r, l, f, d, p) {
            var h = this;
            if (!h.ctx || !h.ctx.listener) return h;
            var v = h._orientation;
            if (r = typeof r != "number" ? v[1] : r, l = typeof l != "number" ? v[2] : l, f = typeof f != "number" ? v[3] : f, d = typeof d != "number" ? v[4] : d, p = typeof p != "number" ? v[5] : p, typeof a == "number") h._orientation = [a, r, l, f, d, p], typeof h.ctx.listener.forwardX != "undefined" ? (h.ctx.listener.forwardX.setTargetAtTime(a, Howler.ctx.currentTime, .1), h.ctx.listener.forwardY.setTargetAtTime(r, Howler.ctx.currentTime, .1), h.ctx.listener.forwardZ.setTargetAtTime(l, Howler.ctx.currentTime, .1), h.ctx.listener.upX.setTargetAtTime(f, Howler.ctx.currentTime, .1), h.ctx.listener.upY.setTargetAtTime(d, Howler.ctx.currentTime, .1), h.ctx.listener.upZ.setTargetAtTime(p, Howler.ctx.currentTime, .1)) : h.ctx.listener.setOrientation(a, r, l, f, d, p); else return v;
            return h
        }, Howl.prototype.init = function (a) {
            return function (r) {
                var l = this;
                return l._orientation = r.orientation || [1, 0, 0], l._stereo = r.stereo || null, l._pos = r.pos || null, l._pannerAttr = {
                    coneInnerAngle: typeof r.coneInnerAngle != "undefined" ? r.coneInnerAngle : 360,
                    coneOuterAngle: typeof r.coneOuterAngle != "undefined" ? r.coneOuterAngle : 360,
                    coneOuterGain: typeof r.coneOuterGain != "undefined" ? r.coneOuterGain : 0,
                    distanceModel: typeof r.distanceModel != "undefined" ? r.distanceModel : "inverse",
                    maxDistance: typeof r.maxDistance != "undefined" ? r.maxDistance : 1e4,
                    panningModel: typeof r.panningModel != "undefined" ? r.panningModel : "HRTF",
                    refDistance: typeof r.refDistance != "undefined" ? r.refDistance : 1,
                    rolloffFactor: typeof r.rolloffFactor != "undefined" ? r.rolloffFactor : 1
                }, l._onstereo = r.onstereo ? [{fn: r.onstereo}] : [], l._onpos = r.onpos ? [{fn: r.onpos}] : [], l._onorientation = r.onorientation ? [{fn: r.onorientation}] : [], a.call(this, r)
            }
        }(Howl.prototype.init), Howl.prototype.stereo = function (a, r) {
            var l = this;
            if (!l._webAudio) return l;
            if (l._state !== "loaded") return l._queue.push({
                event: "stereo", action: function () {
                    l.stereo(a, r)
                }
            }), l;
            var f = typeof Howler.ctx.createStereoPanner == "undefined" ? "spatial" : "stereo";
            if (typeof r == "undefined") if (typeof a == "number") l._stereo = a, l._pos = [a, 0, 0]; else return l._stereo;
            for (var d = l._getSoundIds(r), p = 0; p < d.length; p++) {
                var h = l._soundById(d[p]);
                if (h) if (typeof a == "number") h._stereo = a, h._pos = [a, 0, 0], h._node && (h._pannerAttr.panningModel = "equalpower", (!h._panner || !h._panner.pan) && i(h, f), f === "spatial" ? typeof h._panner.positionX != "undefined" ? (h._panner.positionX.setValueAtTime(a, Howler.ctx.currentTime), h._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), h._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : h._panner.setPosition(a, 0, 0) : h._panner.pan.setValueAtTime(a, Howler.ctx.currentTime)), l._emit("stereo", h._id); else return h._stereo
            }
            return l
        }, Howl.prototype.pos = function (a, r, l, f) {
            var d = this;
            if (!d._webAudio) return d;
            if (d._state !== "loaded") return d._queue.push({
                event: "pos", action: function () {
                    d.pos(a, r, l, f)
                }
            }), d;
            if (r = typeof r != "number" ? 0 : r, l = typeof l != "number" ? -.5 : l, typeof f == "undefined") if (typeof a == "number") d._pos = [a, r, l]; else return d._pos;
            for (var p = d._getSoundIds(f), h = 0; h < p.length; h++) {
                var v = d._soundById(p[h]);
                if (v) if (typeof a == "number") v._pos = [a, r, l], v._node && ((!v._panner || v._panner.pan) && i(v, "spatial"), typeof v._panner.positionX != "undefined" ? (v._panner.positionX.setValueAtTime(a, Howler.ctx.currentTime), v._panner.positionY.setValueAtTime(r, Howler.ctx.currentTime), v._panner.positionZ.setValueAtTime(l, Howler.ctx.currentTime)) : v._panner.setPosition(a, r, l)), d._emit("pos", v._id); else return v._pos
            }
            return d
        }, Howl.prototype.orientation = function (a, r, l, f) {
            var d = this;
            if (!d._webAudio) return d;
            if (d._state !== "loaded") return d._queue.push({
                event: "orientation", action: function () {
                    d.orientation(a, r, l, f)
                }
            }), d;
            if (r = typeof r != "number" ? d._orientation[1] : r, l = typeof l != "number" ? d._orientation[2] : l, typeof f == "undefined") if (typeof a == "number") d._orientation = [a, r, l]; else return d._orientation;
            for (var p = d._getSoundIds(f), h = 0; h < p.length; h++) {
                var v = d._soundById(p[h]);
                if (v) if (typeof a == "number") v._orientation = [a, r, l], v._node && (v._panner || (v._pos || (v._pos = d._pos || [0, 0, -.5]), i(v, "spatial")), typeof v._panner.orientationX != "undefined" ? (v._panner.orientationX.setValueAtTime(a, Howler.ctx.currentTime), v._panner.orientationY.setValueAtTime(r, Howler.ctx.currentTime), v._panner.orientationZ.setValueAtTime(l, Howler.ctx.currentTime)) : v._panner.setOrientation(a, r, l)), d._emit("orientation", v._id); else return v._orientation
            }
            return d
        }, Howl.prototype.pannerAttr = function () {
            var a = this, r = arguments, l, f, d;
            if (!a._webAudio) return a;
            if (r.length === 0) return a._pannerAttr;
            if (r.length === 1) if (typeof r[0] == "object") l = r[0], typeof f == "undefined" && (l.pannerAttr || (l.pannerAttr = {
                coneInnerAngle: l.coneInnerAngle,
                coneOuterAngle: l.coneOuterAngle,
                coneOuterGain: l.coneOuterGain,
                distanceModel: l.distanceModel,
                maxDistance: l.maxDistance,
                refDistance: l.refDistance,
                rolloffFactor: l.rolloffFactor,
                panningModel: l.panningModel
            }), a._pannerAttr = {
                coneInnerAngle: typeof l.pannerAttr.coneInnerAngle != "undefined" ? l.pannerAttr.coneInnerAngle : a._coneInnerAngle,
                coneOuterAngle: typeof l.pannerAttr.coneOuterAngle != "undefined" ? l.pannerAttr.coneOuterAngle : a._coneOuterAngle,
                coneOuterGain: typeof l.pannerAttr.coneOuterGain != "undefined" ? l.pannerAttr.coneOuterGain : a._coneOuterGain,
                distanceModel: typeof l.pannerAttr.distanceModel != "undefined" ? l.pannerAttr.distanceModel : a._distanceModel,
                maxDistance: typeof l.pannerAttr.maxDistance != "undefined" ? l.pannerAttr.maxDistance : a._maxDistance,
                refDistance: typeof l.pannerAttr.refDistance != "undefined" ? l.pannerAttr.refDistance : a._refDistance,
                rolloffFactor: typeof l.pannerAttr.rolloffFactor != "undefined" ? l.pannerAttr.rolloffFactor : a._rolloffFactor,
                panningModel: typeof l.pannerAttr.panningModel != "undefined" ? l.pannerAttr.panningModel : a._panningModel
            }); else return d = a._soundById(parseInt(r[0], 10)), d ? d._pannerAttr : a._pannerAttr; else r.length === 2 && (l = r[0], f = parseInt(r[1], 10));
            for (var p = a._getSoundIds(f), h = 0; h < p.length; h++) if (d = a._soundById(p[h]), d) {
                var v = d._pannerAttr;
                v = {
                    coneInnerAngle: typeof l.coneInnerAngle != "undefined" ? l.coneInnerAngle : v.coneInnerAngle,
                    coneOuterAngle: typeof l.coneOuterAngle != "undefined" ? l.coneOuterAngle : v.coneOuterAngle,
                    coneOuterGain: typeof l.coneOuterGain != "undefined" ? l.coneOuterGain : v.coneOuterGain,
                    distanceModel: typeof l.distanceModel != "undefined" ? l.distanceModel : v.distanceModel,
                    maxDistance: typeof l.maxDistance != "undefined" ? l.maxDistance : v.maxDistance,
                    refDistance: typeof l.refDistance != "undefined" ? l.refDistance : v.refDistance,
                    rolloffFactor: typeof l.rolloffFactor != "undefined" ? l.rolloffFactor : v.rolloffFactor,
                    panningModel: typeof l.panningModel != "undefined" ? l.panningModel : v.panningModel
                };
                var x = d._panner;
                x || (d._pos || (d._pos = a._pos || [0, 0, -.5]), i(d, "spatial"), x = d._panner), x.coneInnerAngle = v.coneInnerAngle, x.coneOuterAngle = v.coneOuterAngle, x.coneOuterGain = v.coneOuterGain, x.distanceModel = v.distanceModel, x.maxDistance = v.maxDistance, x.refDistance = v.refDistance, x.rolloffFactor = v.rolloffFactor, x.panningModel = v.panningModel
            }
            return a
        }, Sound.prototype.init = function (a) {
            return function () {
                var r = this, l = r._parent;
                r._orientation = l._orientation, r._stereo = l._stereo, r._pos = l._pos, r._pannerAttr = l._pannerAttr, a.call(this), r._stereo ? l.stereo(r._stereo) : r._pos && l.pos(r._pos[0], r._pos[1], r._pos[2], r._id)
            }
        }(Sound.prototype.init), Sound.prototype.reset = function (a) {
            return function () {
                var r = this, l = r._parent;
                return r._orientation = l._orientation, r._stereo = l._stereo, r._pos = l._pos, r._pannerAttr = l._pannerAttr, r._stereo ? l.stereo(r._stereo) : r._pos ? l.pos(r._pos[0], r._pos[1], r._pos[2], r._id) : r._panner && (r._panner.disconnect(0), r._panner = void 0, l._refreshBuffer(r)), a.call(this)
            }
        }(Sound.prototype.reset);
        var i = function (a, r) {
            r = r || "spatial", r === "spatial" ? (a._panner = Howler.ctx.createPanner(), a._panner.coneInnerAngle = a._pannerAttr.coneInnerAngle, a._panner.coneOuterAngle = a._pannerAttr.coneOuterAngle, a._panner.coneOuterGain = a._pannerAttr.coneOuterGain, a._panner.distanceModel = a._pannerAttr.distanceModel, a._panner.maxDistance = a._pannerAttr.maxDistance, a._panner.refDistance = a._pannerAttr.refDistance, a._panner.rolloffFactor = a._pannerAttr.rolloffFactor, a._panner.panningModel = a._pannerAttr.panningModel, typeof a._panner.positionX != "undefined" ? (a._panner.positionX.setValueAtTime(a._pos[0], Howler.ctx.currentTime), a._panner.positionY.setValueAtTime(a._pos[1], Howler.ctx.currentTime), a._panner.positionZ.setValueAtTime(a._pos[2], Howler.ctx.currentTime)) : a._panner.setPosition(a._pos[0], a._pos[1], a._pos[2]), typeof a._panner.orientationX != "undefined" ? (a._panner.orientationX.setValueAtTime(a._orientation[0], Howler.ctx.currentTime), a._panner.orientationY.setValueAtTime(a._orientation[1], Howler.ctx.currentTime), a._panner.orientationZ.setValueAtTime(a._orientation[2], Howler.ctx.currentTime)) : a._panner.setOrientation(a._orientation[0], a._orientation[1], a._orientation[2])) : (a._panner = Howler.ctx.createStereoPanner(), a._panner.pan.setValueAtTime(a._stereo, Howler.ctx.currentTime)), a._panner.connect(a._node), a._paused || a._parent.pause(a._id, !0).play(a._id, !0)
        }
    })()
})(ye);
var ia = "/liars-bar/assets/A.44817c21.png", ua = "/liars-bar/assets/K.fefbd9f4.png",
    sa = "/liars-bar/assets/Q.1dcde64f.png", da = "/liars-bar/assets/avatar.5882cb90.png",
    ca = "/liars-bar/assets/winner.eb1ebd56.png", fa = "/liars-bar/assets/revolver-spin.8c06f4d1.mp3",
    _a = "/liars-bar/assets/revolver-cocking.a6ae419d.mp3", va = "/liars-bar/assets/revolver-shot.fe3d91cf.mp3",
    ma = "/liars-bar/assets/cards-shuffling.ee9c4251.mp3", pa = "/liars-bar/assets/heartbeat-loop.e34e3272.mp3";
const ha = {class: "full-width q-pa-md"}, ga = {class: "shuffle-container"}, ya = {class: "cards-container"},
    ba = ["src", "alt"], wa = {class: "text-h5 text-center"}, xa = {class: "player-layout"}, Aa = ["src"],
    ka = ["onClick"], Sa = ["src"], Ta = {class: "text-h5 q-mb-md"}, qa = Object.assign({name: "IndexPage"}, {
        __name: "IndexPage", props: ["soundEnabled"], setup(t) {
            const i = {A: ia, K: ua, Q: sa}, a = D(["K", "Q", "A", "K", "Q", "A", "K", "Q", "A"]), r = D(-1), l = t,
                f = D(!1), d = D(!1), p = D(!0), h = () => {
                    console.log("gameState.value"), console.log(e.value), l.soundEnabled && c.play();
                    const k = 2e3, g = 100;
                    let S = 0;
                    a.value = ["K", "Q", "A", "K", "Q", "A", "K", "Q", "A"], r.value = -1;
                    const B = setInterval(() => {
                        a.value = a.value.sort(() => Math.random() - .5), S += g, S >= k && (clearInterval(B), v())
                    }, g)
                }, v = () => {
                    r.value = Math.floor(Math.random() * 3), n.value = a.value[r.value], e.value = "selecting"
                }, x = sn(), e = D("initial"), n = D(null), o = D([{
                    name: "P1",
                    isAlive: !0,
                    shotCount: 0,
                    isSelected: !1,
                    bulletPosition: Math.floor(Math.random() * 6) + 1
                }, {
                    name: "P2",
                    isAlive: !0,
                    shotCount: 0,
                    isSelected: !1,
                    bulletPosition: Math.floor(Math.random() * 6) + 1
                }, {
                    name: "P3",
                    isAlive: !0,
                    shotCount: 0,
                    isSelected: !1,
                    bulletPosition: Math.floor(Math.random() * 6) + 1
                }, {name: "P4", isAlive: !0, shotCount: 0, isSelected: !1, bulletPosition: Math.floor(Math.random() * 6) + 1}]),
                u = E(() => x.screen.lt.sm ? ["top-center", "middle-left", "middle-right", "bottom-center"] : ["top", "left", "right", "bottom"]),
                c = new ye.Howl({src: [ma]}), _ = new ye.Howl({src: [_a]}), s = new ye.Howl({src: [fa]}),
                b = new ye.Howl({src: [va]}), C = new ye.Howl({src: [pa]}), M = D(null), I = k => i[k] || null, O = k => da,
                P = D(ca), Q = () => {
                    e.value = "selecting", p.value = !0, h()
                }, m = () => {
                    e.value = "playing", l.soundEnabled && p.value && (s.play(), p.value = !1)
                }, w = k => {
                    o.value.forEach((g, S) => {
                        g.isSelected = S === k && g.isAlive
                    })
                }, T = (k, g, S) => {
                    let B = 0;
                    const $ = () => {
                        B < k ? (C.play(), B++, setTimeout($, g)) : S ? b.play() : _.play()
                    };
                    $()
                }, A = k => {
                    k.animationName === "flashRed" && (d.value = !1)
                }, F = () => {
                    const k = o.value.find(y => y.isSelected);
                    if (!k) {
                        x.notify({
                            color: "warning",
                            position: "top",
                            message: "\u8ACB\u5148\u9078\u64C7\u4E00\u500B\u73A9\u5BB6",
                            icon: "warning"
                        }, 1500);
                        return
                    }
                    f.value = !0;
                    const g = ++k.shotCount === k.bulletPosition;
                    l.soundEnabled && T(3, 1e3);
                    const S = g ? `${k.name} \u88AB\u6DD8\u6C70\u4E86\uFF01` : `${k.name} \u5016\u5B58\u4E86\uFF01`,
                        B = g ? "negative" : "info", $ = g ? "sentiment_very_dissatisfied" : "sentiment_satisfied";
                    setTimeout(() => {
                        k.isSelected = !1, g ? (b.play(), k.isAlive = !1, q()) : _.play(), x.notify({
                            color: B,
                            message: S,
                            position: "top",
                            icon: $
                        }), f.value = !1, N(), e.value !== "gameOver" && setTimeout(() => {
                            e.value = "selecting", h()
                        }, 2e3)
                    }, 3e3)
                }, q = () => {
                    const k = document.querySelector("body");
                    k.classList.add("screen-shake"), d.value = !0, setTimeout(() => {
                        k.classList.remove("screen-shake")
                    }, 500), setTimeout(() => {
                        d.value = !1
                    }, 1500)
                }, N = () => {
                    const k = o.value.filter(g => g.isAlive);
                    k.length === 1 && (M.value = {
                        ...k[0],
                        index: o.value.findIndex(g => g.id === k[0].id)
                    }, e.value = "gameOver")
                }, V = () => {
                    M.value = null, e.value = "initial", n.value = null, p.value = !0, o.value.forEach(k => {
                        k.isAlive = !0, k.shotCount = 0, k.isSelected = !1, k.bulletPosition = Math.floor(Math.random() * 6) + 1
                    })
                };
            return (k, g) => (U(), ue(Ce, null, [G(la, {class: "flex flex-center bg-grey-2"}, {
                default: W(() => [R("div", ha, [G(ce, {
                    appear: "",
                    "enter-active-class": "animated zoomIn",
                    "leave-active-class": "animated zoomOut"
                }, {
                    default: W(() => [e.value === "initial" ? (U(), ge(we, {
                        key: 0,
                        flat: "",
                        bordered: "",
                        class: "my-card q-ma-md shadow-5"
                    }, {
                        default: W(() => [G(ne, {class: "bg-primary text-white"}, {
                            default: W(() => g[0] || (g[0] = [R("div", {class: "text-h5 text-center"}, "Welcome to Liar's Bar", -1)])),
                            _: 1
                        }), G(ne, {class: "q-pt-lg", style: {"max-height": "300px", "overflow-y": "auto"}}, {
                            default: W(() => g[1] || (g[1] = [R("p", {class: "text-body1 text-center"}, " \u904A\u6232\u898F\u5247\uFF1A ", -1), R("ul", null, [R("li", null, "\u724C\u7D44\uFF1A20\u5F35\u724C\uFF086\u5F35K\u30016\u5F35Q\u30016\u5F35A\u30012\u5F35Joker\uFF09"), R("li", null, "\u73A9\u5BB6\u4EBA\u6578\uFF1A4\u4F4D"), R("li", null, "\u6BCF\u5C40\u96A8\u6A5F\u9078\u64C7 K/Q/A \u4F5C\u70BA\u76EE\u6A19\u724C\u578B")], -1), R("p", {class: "text-body1 text-center"}, " \u904A\u6232\u6D41\u7A0B\uFF1A ", -1), R("ol", null, [R("li", null, "\u73A9\u5BB6\u8F2A\u6D41\u51FA\u724C\uFF0C\u8072\u660E\u81EA\u5DF1\u51FA\u7684\u662F\u76EE\u6A19\u724C\u578B\u3002"), R("li", null, [le("\u4E0B\u4E00\u4F4D\u73A9\u5BB6\u53EF\u4EE5\u9078\u64C7\u8AAA "), R("b", null, "liar"), le(" \u6216\u7E7C\u7E8C\u51FA\u724C\u3002")]), R("li", null, "\u76F4\u5230\u5269\u4E0B1\u540D\u73A9\u5BB6\uFF0C\u904A\u6232\u7D50\u675F")], -1), R("p", {class: "text-body1 text-center"}, [le(" \u5982\u679C\u8AAA "), R("b", null, "liar"), le("\uFF1A ")], -1), R("ul", null, [R("li", null, "\u6AA2\u67E5\u524D\u4E00\u4F4D\u73A9\u5BB6\u7684\u724C\u3002"), R("li", null, "\u5982\u679C\u8A72\u73A9\u5BB6\u8AAA\u8B0A\uFF0C\u8AAA\u8B0A\u73A9\u5BB6\u8981\u9032\u884C\u5DE6\u8F2A\u624B\u69CD\u904A\u6232\u3002"), R("li", null, [le("\u5982\u679C\u8A72\u73A9\u5BB6\u6C92\u8AAA\u8B0A\uFF0C\u8AAA "), R("b", null, "liar"), le(" \u7684\u73A9\u5BB6\u8981\u9032\u884C\u5DE6\u8F2A\u624B\u69CD\u904A\u6232\u3002")])], -1), R("p", {class: "text-body1 text-center"}, " \u5DE6\u8F2A\u624B\u69CD\u898F\u5247\uFF1A ", -1), R("ul", null, [R("li", null, "\u624B\u69CD\u67096\u500B\u819B\u5BA4\uFF0C\u88E1\u9762\u67091\u679A\u5B50\u5F48\u3002"), R("li", null, "\u6BCF\u4F4D\u73A9\u5BB6\u958B\u59CB\u6642\u7684\u547D\u4E2D\u7387\u70BA0/6\u3002\u5982\u679C\u9019\u56DE\u5408\u958B\u69CD\u6C92\u5C04\u4E2D\uFF0C\u4E0B\u4E00\u56DE\u5408\u5C07\u8B8A\u70BA1/6\uFF0C\u547D\u4E2D\u7387\u5C07\u6703\u8D8A\u4F86\u8D8A\u9AD8\u3002"), R("li", null, "\u88AB\u5C04\u4E2D\u7684\u73A9\u5BB6\u9000\u51FA\u7576\u524D\u56DE\u5408\u3002")], -1)])),
                            _: 1
                        }), G(Le, {
                            vertical: "",
                            align: "center",
                            class: "q-py-md"
                        }, {
                            default: W(() => [G(fe, {
                                color: "secondary",
                                label: "\u958B\u59CB\u65B0\u904A\u6232",
                                class: "full-width q-py-sm text-weight-bold",
                                size: "lg",
                                onClick: Q
                            })]), _: 1
                        })]), _: 1
                    })) : se("", !0)]), _: 1
                }), G(ce, {
                    appear: "",
                    "enter-active-class": "animated fadeIn",
                    "leave-active-class": "animated fadeOut"
                }, {
                    default: W(() => [e.value === "shuffling" ? (U(), ge(we, {
                        key: 0,
                        flat: "",
                        bordered: "",
                        class: "my-card q-ma-md shadow-5"
                    }, {
                        default: W(() => [G(ne, {class: "bg-secondary text-white"}, {
                            default: W(() => g[2] || (g[2] = [R("div", {class: "text-h5 text-center"}, "\u6D17\u724C\u4E2D", -1)])),
                            _: 1
                        }), G(ne, {class: "text-center q-pt-lg"}, {
                            default: W(() => [R("div", ga, [(U(), ue(Ce, null, Re(20, S => R("div", {
                                key: S,
                                class: "card-back",
                                style: Jt({transform: `rotate(${Math.random() * 360}deg) translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px)`})
                            }, null, 4)), 64))])]), _: 1
                        })]), _: 1
                    })) : se("", !0)]), _: 1
                }), G(ce, {
                    appear: "",
                    "enter-active-class": "animated fadeIn",
                    "leave-active-class": "animated fadeOut"
                }, {
                    default: W(() => [e.value === "selecting" ? (U(), ge(we, {
                        key: 0,
                        flat: "",
                        bordered: "",
                        class: "my-card q-ma-md shadow-5"
                    }, {
                        default: W(() => [G(ne, {class: "bg-secondary text-white"}, {
                            default: W(() => g[3] || (g[3] = [R("div", {class: "text-h5 text-center"}, "\u9078\u64C7\u76EE\u6A19\u724C", -1)])),
                            _: 1
                        }), G(ne, {class: "text-center q-pt-lg"}, {
                            default: W(() => [R("div", ya, [G(nt, {
                                name: "card-shuffle",
                                tag: "div",
                                class: "cards-deck"
                            }, {
                                default: W(() => [(U(!0), ue(Ce, null, Re(a.value, (S, B) => (U(), ue("div", {
                                    key: S + B,
                                    class: $e(["card", {"card-selected": B === r.value}])
                                }, [R("img", {src: I(S), alt: S, class: "card-image"}, null, 8, ba)], 2))), 128))]), _: 1
                            })]), n.value ? (U(), ge(fe, {
                                key: 0,
                                color: "primary",
                                label: "\u78BA\u8A8D\u76EE\u6A19\u724C\u578B",
                                class: "q-mt-md full-width",
                                onClick: m
                            })) : se("", !0)]), _: 1
                        })]), _: 1
                    })) : se("", !0)]), _: 1
                }), G(ce, {appear: "", "enter-active-class": "animated fadeIn", "leave-active-class": "animated fadeOut"}, {
                    default: W(() => [e.value === "playing" ? (U(), ge(we, {
                        key: 0,
                        flat: "",
                        bordered: "",
                        class: "my-card q-ma-md shadow-5"
                    }, {
                        default: W(() => [G(ne, {
                            class: "text-white",
                            style: {"background-color": "#392a77"}
                        }, {
                            default: W(() => [R("div", wa, " \u76EE\u6A19\u724C: " + Me(n.value), 1)]),
                            _: 1
                        }), G(ne, {class: "bg-grey-4"}, {
                            default: W(() => [R("div", xa, [G(nt, {name: "player-move"}, {
                                default: W(() => [(U(!0), ue(Ce, null, Re(o.value, (S, B) => (U(), ue("div", {
                                    key: S.id,
                                    class: $e(["player-wrapper", u.value[B]])
                                }, [G(fe, {
                                    round: "",
                                    size: ot(x).screen.lt.sm ? "16px" : "20px",
                                    color: S.isAlive ? S.isSelected ? "red-10" : "dark" : "grey",
                                    disable: !S.isAlive,
                                    onClick: $ => w(B),
                                    class: "shadow-5"
                                }, {
                                    default: W(() => [G(at, {size: ot(x).screen.lt.sm ? "30px" : "40px"}, {
                                        default: W(() => [R("img", {src: O(B)}, null, 8, Aa)]),
                                        _: 2
                                    }, 1032, ["size"])]), _: 2
                                }, 1032, ["size", "color", "disable", "onClick"]), G(fn, {
                                    color: "red",
                                    floating: "",
                                    rounded: ""
                                }, {
                                    default: W(() => [le(Me(S.shotCount) + "/6 ", 1)]),
                                    _: 2
                                }, 1024), R("div", {
                                    class: "player-name q-mt-sm",
                                    onClick: $ => w(B)
                                }, [G(ra, {
                                    modelValue: S.name,
                                    "onUpdate:modelValue": $ => S.name = $,
                                    "auto-save": ""
                                }, {
                                    default: W($ => [G(On, {
                                        modelValue: $.value,
                                        "onUpdate:modelValue": y => $.value = y,
                                        dense: "",
                                        autofocus: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])]), _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue"]), le(" " + Me(S.name), 1)], 8, ka)], 2))), 128))]),
                                _: 1
                            })])]), _: 1
                        }), G(Le, {
                            align: "center",
                            class: "q-pa-md",
                            style: {"background-color": "#3d2676"}
                        }, {
                            default: W(() => [G(fe, {
                                style: {"background-color": "#dc2626", color: "white"},
                                icon: "fa fa-gun",
                                label: "\u958B\u69CD",
                                onClick: F,
                                class: "full-width q-py-sm",
                                size: "lg"
                            })]), _: 1
                        })]), _: 1
                    })) : se("", !0)]), _: 1
                }), G(ce, {
                    appear: "",
                    "enter-active-class": "animated bounceIn",
                    "leave-active-class": "animated bounceOut"
                }, {
                    default: W(() => [e.value === "gameOver" ? (U(), ge(we, {
                        key: 0,
                        flat: "",
                        bordered: "",
                        class: "my-card q-ma-md shadow-5"
                    }, {
                        default: W(() => [G(ne, {class: "bg-positive text-white"}, {
                            default: W(() => g[4] || (g[4] = [R("div", {class: "text-h4 text-center"}, "\u904A\u6232\u7D50\u675F\uFF01", -1)])),
                            _: 1
                        }), G(ne, {class: "text-center q-pt-lg"}, {
                            default: W(() => [G(at, {
                                size: "100px",
                                class: "q-mb-md"
                            }, {
                                default: W(() => [R("img", {src: P.value}, null, 8, Sa)]),
                                _: 1
                            }), R("div", Ta, "\u7372\u52DD\u8005: " + Me(M.value.name), 1)]), _: 1
                        }), G(Le, {align: "center", class: "q-pa-md"}, {
                            default: W(() => [G(fe, {
                                color: "primary",
                                label: "\u518D\u73A9\u4E00\u5C40",
                                onClick: V,
                                class: "full-width q-py-sm",
                                size: "lg"
                            })]), _: 1
                        })]), _: 1
                    })) : se("", !0)]), _: 1
                }), f.value ? (U(), ue("div", {
                    key: 0,
                    class: $e(["overlay", {"overlay-flash": d.value}]),
                    onAnimationend: A
                }, null, 34)) : se("", !0)])]), _: 1
            }), G(dn, {onResetGame: V})], 64))
        }
    });
export {qa as default};
