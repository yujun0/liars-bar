import {
    k as le,
    c as q,
    h as H,
    l as re,
    ad as Bt,
    ae as Ft,
    g as te,
    U as Ot,
    m as Vt,
    r as L,
    o as Me,
    w as U,
    af as Ht,
    i as Ke,
    n as se,
    ag as Rt,
    Q as Lt,
    ah as Ve,
    B as At,
    q as oe,
    R as xt,
    S as $t,
    L as de,
    aa as tt,
    ai as Dt,
    aj as ce,
    ak as Gt,
    M as nt,
    A as kt,
    J as at,
    O as Qt,
    t as je,
    al as Re,
    a as Nt,
    am as Wt,
    an as Kt,
    ao as jt,
    Y as Zt,
    H as Xe,
    N as zt,
    ap as Ut,
    aq as Xt,
    a6 as fe,
    u as he,
    x as Yt,
    $ as Jt,
    a3 as J,
    a8 as ne,
    f as N,
    a5 as W,
    F as Ee,
    ar as I,
    a4 as ge,
    a7 as ie,
    as as ue,
    a9 as Le,
    at as ye,
    ab as Ae,
    au as ot,
    av as $e,
    aw as rt,
    ax as De
} from "./index.0a6aa4f1.js";
import {
    u as Ye,
    a as Je,
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
} from "./MainLayout.4781bbf9.js";

var ae = le({
    name: "QCardSection",
    props: {tag: {type: String, default: "div"}, horizontal: Boolean},
    setup(t, {slots: i}) {
        const a = q(() => `q-card__section q-card__section--${t.horizontal === !0 ? "horiz row no-wrap" : "vert"}`);
        return () => H(t.tag, {class: a.value}, re(i.default))
    }
}), Ge = le({
    name: "QCardActions", props: {...Bt, vertical: Boolean}, setup(t, {slots: i}) {
        const a = Ft(t),
            r = q(() => `q-card__actions ${a.value} q-card__actions--${t.vertical === !0 ? "vert column" : "horiz row"}`);
        return () => H("div", {class: r.value}, re(i.default))
    }
}), xe = le({
    name: "QCard",
    props: {...Ye, tag: {type: String, default: "div"}, square: Boolean, flat: Boolean, bordered: Boolean},
    setup(t, {slots: i}) {
        const {proxy: {$q: a}} = te(), r = Je(t, a),
            l = q(() => "q-card" + (r.value === !0 ? " q-card--dark q-dark" : "") + (t.bordered === !0 ? " q-card--bordered" : "") + (t.square === !0 ? " q-card--square no-border-radius" : "") + (t.flat === !0 ? " q-card--flat no-shadow" : ""));
        return () => H(t.tag, {class: l.value}, re(i.default))
    }
});
const cn = ["top", "middle", "bottom"];
var fn = le({
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
        const a = q(() => t.align !== void 0 ? {verticalAlign: t.align} : null), r = q(() => {
            const l = t.outline === !0 && t.color || t.textColor;
            return `q-badge flex inline items-center no-wrap q-badge--${t.multiLine === !0 ? "multi" : "single"}-line` + (t.outline === !0 ? " q-badge--outline" : t.color !== void 0 ? ` bg-${t.color}` : "") + (l !== void 0 ? ` text-${l}` : "") + (t.floating === !0 ? " q-badge--floating" : "") + (t.rounded === !0 ? " q-badge--rounded" : "") + (t.transparent === !0 ? " q-badge--transparent" : "")
        });
        return () => H("div", {
            class: r.value,
            style: a.value,
            role: "status",
            "aria-label": t.label
        }, Ot(i.default, t.label !== void 0 ? [t.label] : []))
    }
});
let Qe, qe = 0;
const Y = new Array(256);
for (let t = 0; t < 256; t++) Y[t] = (t + 256).toString(16).substring(1);
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
})(), lt = 4096;

function Ze() {
    (Qe === void 0 || qe + 16 > lt) && (qe = 0, Qe = _n(lt));
    const t = Array.prototype.slice.call(Qe, qe, qe += 16);
    return t[6] = t[6] & 15 | 64, t[8] = t[8] & 63 | 128, Y[t[0]] + Y[t[1]] + Y[t[2]] + Y[t[3]] + "-" + Y[t[4]] + Y[t[5]] + "-" + Y[t[6]] + Y[t[7]] + "-" + Y[t[8]] + Y[t[9]] + "-" + Y[t[10]] + Y[t[11]] + Y[t[12]] + Y[t[13]] + Y[t[14]] + Y[t[15]]
}

function vn(t) {
    return t == null ? null : t
}

function it(t, i) {
    return t == null ? i === !0 ? `f_${Ze()}` : null : t
}

function mn({getValue: t, required: i = !0} = {}) {
    if (Vt.value === !0) {
        const a = t !== void 0 ? L(vn(t())) : L(null);
        return i === !0 && a.value === null && Me(() => {
            a.value = `f_${Ze()}`
        }), t !== void 0 && U(t, r => {
            a.value = it(r, i)
        }), a
    }
    return t !== void 0 ? q(() => it(t(), i)) : L(`f_${Ze()}`)
}

const ut = /^on[A-Z]/;

function pn() {
    const {attrs: t, vnode: i} = te(), a = {listeners: L({}), attributes: L({})};

    function r() {
        const l = {}, f = {};
        for (const d in t) d !== "class" && d !== "style" && ut.test(d) === !1 && (l[d] = t[d]);
        for (const d in i.props) ut.test(d) === !0 && (f[d] = i.props[d]);
        a.attributes.value = l, a.listeners.value = f
    }

    return Ht(r), r(), a
}

function hn({validate: t, resetValidation: i, requiresQForm: a}) {
    const r = Ke(Rt, !1);
    if (r !== !1) {
        const {props: l, proxy: f} = te();
        Object.assign(f, {validate: t, resetValidation: i}), U(() => l.disable, d => {
            d === !0 ? (typeof i == "function" && i(), r.unbindComponent(f)) : r.bindComponent(f)
        }), Me(() => {
            l.disable !== !0 && r.bindComponent(f)
        }), se(() => {
            l.disable !== !0 && r.unbindComponent(f)
        })
    } else a === !0 && console.error("Parent QForm not found on useFormChild()!")
}

const st = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, dt = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,
    ct = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
    Ie = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,
    Pe = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,
    Ne = {
        date: t => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(t),
        time: t => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(t),
        fulltime: t => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(t),
        timeOrFulltime: t => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(t),
        email: t => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t),
        hexColor: t => st.test(t),
        hexaColor: t => dt.test(t),
        hexOrHexaColor: t => ct.test(t),
        rgbColor: t => Ie.test(t),
        rgbaColor: t => Pe.test(t),
        rgbOrRgbaColor: t => Ie.test(t) || Pe.test(t),
        hexOrRgbColor: t => st.test(t) || Ie.test(t),
        hexaOrRgbaColor: t => dt.test(t) || Pe.test(t),
        anyColor: t => ct.test(t) || Ie.test(t) || Pe.test(t)
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
    const {props: a, proxy: r} = te(), l = L(!1), f = L(null), d = L(!1);
    hn({validate: c, resetValidation: u});
    let g = 0, h;
    const v = q(() => a.rules !== void 0 && a.rules !== null && a.rules.length !== 0),
        w = q(() => a.disable !== !0 && v.value === !0 && i.value === !1),
        e = q(() => a.error === !0 || l.value === !0),
        n = q(() => typeof a.errorMessage == "string" && a.errorMessage.length !== 0 ? a.errorMessage : f.value);
    U(() => a.modelValue, () => {
        d.value = !0, w.value === !0 && a.lazyRules === !1 && _()
    });

    function o() {
        a.lazyRules !== "ondemand" && w.value === !0 && d.value === !0 && _()
    }

    U(() => a.reactiveRules, s => {
        s === !0 ? h === void 0 && (h = U(() => a.rules, o, {
            immediate: !0,
            deep: !0
        })) : h !== void 0 && (h(), h = void 0)
    }, {immediate: !0}), U(() => a.lazyRules, o), U(t, s => {
        s === !0 ? d.value = !0 : w.value === !0 && a.lazyRules !== "ondemand" && _()
    });

    function u() {
        g++, i.value = !1, d.value = !1, l.value = !1, f.value = null, _.cancel()
    }

    function c(s = a.modelValue) {
        if (a.disable === !0 || v.value === !1) return !0;
        const y = ++g, S = i.value !== !0 ? () => {
            d.value = !0
        } : () => {
        }, C = (O, P) => {
            O === !0 && S(), l.value = O, f.value = P || null, i.value = !1
        }, B = [];
        for (let O = 0; O < a.rules.length; O++) {
            const P = a.rules[O];
            let $;
            if (typeof P == "function" ? $ = P(s, Ne) : typeof P == "string" && Ne[P] !== void 0 && ($ = Ne[P](s)), $ === !1 || typeof $ == "string") return C(!0, $), !1;
            $ !== !0 && $ !== void 0 && B.push($)
        }
        return B.length === 0 ? (C(!1), !0) : (i.value = !0, Promise.all(B).then(O => {
            if (O === void 0 || Array.isArray(O) === !1 || O.length === 0) return y === g && C(!1), !0;
            const P = O.find($ => $ === !1 || typeof $ == "string");
            return y === g && C(P !== void 0, P), P === void 0
        }, O => (y === g && (console.error(O), C(!0)), !1)))
    }

    const _ = Lt(c, 0);
    return se(() => {
        h !== void 0 && h(), _.cancel()
    }), Object.assign(r, {resetValidation: u, validate: c}), Ve(r, "hasError", () => e.value), {
        isDirtyModel: d,
        hasRules: v,
        hasError: e,
        errorMessage: n,
        validate: c,
        resetValidation: u
    }
}

let _e = [], Ce = [];

function St(t) {
    Ce = Ce.filter(i => i !== t)
}

function wn(t) {
    St(t), Ce.push(t)
}

function ft(t) {
    St(t), Ce.length === 0 && _e.length !== 0 && (_e[_e.length - 1](), _e = [])
}

function et(t) {
    Ce.length === 0 ? t() : _e.push(t)
}

function An(t) {
    _e = _e.filter(i => i !== t)
}

function ze(t) {
    return t != null && ("" + t).length !== 0
}

const xn = {
    ...Ye, ...yn,
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
}, kn = {...xn, maxlength: [Number, String]}, Sn = ["update:modelValue", "clear", "focus", "blur"];

function Tn({requiredForAttr: t = !0, tagProp: i, changeEvent: a = !1} = {}) {
    const {props: r, proxy: l} = te(), f = Je(r, l.$q), d = mn({required: t, getValue: () => r.for});
    return {
        requiredForAttr: t,
        changeEvent: a,
        tag: i === !0 ? q(() => r.tag) : {value: "label"},
        isDark: f,
        editable: q(() => r.disable !== !0 && r.readonly !== !0),
        innerLoading: L(!1),
        focused: L(!1),
        hasPopupOpen: !1,
        splitAttrs: pn(),
        targetUid: d,
        rootRef: L(null),
        targetRef: L(null),
        controlRef: L(null)
    }
}

function Cn(t) {
    const {props: i, emit: a, slots: r, attrs: l, proxy: f} = te(), {$q: d} = f;
    let g = null;
    t.hasValue === void 0 && (t.hasValue = q(() => ze(i.modelValue))), t.emitValue === void 0 && (t.emitValue = x => {
        a("update:modelValue", x)
    }), t.controlEvents === void 0 && (t.controlEvents = {
        onFocusin: m,
        onFocusout: b
    }), Object.assign(t, {
        clearValue: k,
        onControlFocusin: m,
        onControlFocusout: b,
        focus: P
    }), t.computedCounter === void 0 && (t.computedCounter = q(() => {
        if (i.counter !== !1) {
            const x = typeof i.modelValue == "string" || typeof i.modelValue == "number" ? ("" + i.modelValue).length : Array.isArray(i.modelValue) === !0 ? i.modelValue.length : 0,
                V = i.maxlength !== void 0 ? i.maxlength : i.maxValues;
            return x + (V !== void 0 ? " / " + V : "")
        }
    }));
    const {
            isDirtyModel: h,
            hasRules: v,
            hasError: w,
            errorMessage: e,
            resetValidation: n
        } = bn(t.focused, t.innerLoading),
        o = t.floatingLabel !== void 0 ? q(() => i.stackLabel === !0 || t.focused.value === !0 || t.floatingLabel.value === !0) : q(() => i.stackLabel === !0 || t.focused.value === !0 || t.hasValue.value === !0),
        u = q(() => i.bottomSlots === !0 || i.hint !== void 0 || v.value === !0 || i.counter === !0 || i.error !== null),
        c = q(() => i.filled === !0 ? "filled" : i.outlined === !0 ? "outlined" : i.borderless === !0 ? "borderless" : i.standout ? "standout" : "standard"),
        _ = q(() => `q-field row no-wrap items-start q-field--${c.value}` + (t.fieldClass !== void 0 ? ` ${t.fieldClass.value}` : "") + (i.rounded === !0 ? " q-field--rounded" : "") + (i.square === !0 ? " q-field--square" : "") + (o.value === !0 ? " q-field--float" : "") + (y.value === !0 ? " q-field--labeled" : "") + (i.dense === !0 ? " q-field--dense" : "") + (i.itemAligned === !0 ? " q-field--item-aligned q-item-type" : "") + (t.isDark.value === !0 ? " q-field--dark" : "") + (t.getControl === void 0 ? " q-field--auto-height" : "") + (t.focused.value === !0 ? " q-field--focused" : "") + (w.value === !0 ? " q-field--error" : "") + (w.value === !0 || t.focused.value === !0 ? " q-field--highlighted" : "") + (i.hideBottomSpace !== !0 && u.value === !0 ? " q-field--with-bottom" : "") + (i.disable === !0 ? " q-field--disabled" : i.readonly === !0 ? " q-field--readonly" : "")),
        s = q(() => "q-field__control relative-position row no-wrap" + (i.bgColor !== void 0 ? ` bg-${i.bgColor}` : "") + (w.value === !0 ? " text-negative" : typeof i.standout == "string" && i.standout.length !== 0 && t.focused.value === !0 ? ` ${i.standout}` : i.color !== void 0 ? ` text-${i.color}` : "")),
        y = q(() => i.labelSlot === !0 || i.label !== void 0),
        S = q(() => "q-field__label no-pointer-events absolute ellipsis" + (i.labelColor !== void 0 && w.value !== !0 ? ` text-${i.labelColor}` : "")),
        C = q(() => ({
            id: t.targetUid.value,
            editable: t.editable.value,
            focused: t.focused.value,
            floatingLabel: o.value,
            modelValue: i.modelValue,
            emitValue: t.emitValue
        })), B = q(() => {
            const x = {};
            return t.targetUid.value && (x.for = t.targetUid.value), i.disable === !0 && (x["aria-disabled"] = "true"), x
        });

    function O() {
        const x = document.activeElement;
        let V = t.targetRef !== void 0 && t.targetRef.value;
        V && (x === null || x.id !== t.targetUid.value) && (V.hasAttribute("tabindex") === !0 || (V = V.querySelector("[tabindex]")), V && V !== x && V.focus({preventScroll: !0}))
    }

    function P() {
        et(O)
    }

    function $() {
        An(O);
        const x = document.activeElement;
        x !== null && t.rootRef.value.contains(x) && x.blur()
    }

    function m(x) {
        g !== null && (clearTimeout(g), g = null), t.editable.value === !0 && t.focused.value === !1 && (t.focused.value = !0, a("focus", x))
    }

    function b(x, V) {
        g !== null && clearTimeout(g), g = setTimeout(() => {
            g = null, !(document.hasFocus() === !0 && (t.hasPopupOpen === !0 || t.controlRef === void 0 || t.controlRef.value === null || t.controlRef.value.contains(document.activeElement) !== !1)) && (t.focused.value === !0 && (t.focused.value = !1, a("blur", x)), V !== void 0 && V())
        })
    }

    function k(x) {
        At(x), d.platform.is.mobile !== !0 ? (t.targetRef !== void 0 && t.targetRef.value || t.rootRef.value).focus() : t.rootRef.value.contains(document.activeElement) === !0 && document.activeElement.blur(), i.type === "file" && (t.inputRef.value.value = null), a("update:modelValue", null), t.changeEvent === !0 && a("change", null), a("clear", i.modelValue), oe(() => {
            const V = h.value;
            n(), h.value = V
        })
    }

    function A(x) {
        [13, 32].includes(x.keyCode) && k(x)
    }

    function F() {
        const x = [];
        return r.prepend !== void 0 && x.push(H("div", {
            class: "q-field__prepend q-field__marginal row no-wrap items-center",
            key: "prepend",
            onClick: de
        }, r.prepend())), x.push(H("div", {class: "q-field__control-container col relative-position row no-wrap q-anchor--skip"}, E())), w.value === !0 && i.noErrorIcon === !1 && x.push(R("error", [H(tt, {
            name: d.iconSet.field.error,
            color: "negative"
        })])), i.loading === !0 || t.innerLoading.value === !0 ? x.push(R("inner-loading-append", r.loading !== void 0 ? r.loading() : [H(Dt, {color: i.color})])) : i.clearable === !0 && t.hasValue.value === !0 && t.editable.value === !0 && x.push(R("inner-clearable-append", [H(tt, {
            class: "q-field__focusable-action",
            name: i.clearIcon || d.iconSet.field.clear,
            tabindex: 0,
            role: "button",
            "aria-hidden": "false",
            "aria-label": d.lang.label.clear,
            onKeyup: A,
            onClick: k
        })])), r.append !== void 0 && x.push(H("div", {
            class: "q-field__append q-field__marginal row no-wrap items-center",
            key: "append",
            onClick: de
        }, r.append())), t.getInnerAppend !== void 0 && x.push(R("inner-append", t.getInnerAppend())), t.getControlChild !== void 0 && x.push(t.getControlChild()), x
    }

    function E() {
        const x = [];
        return i.prefix !== void 0 && i.prefix !== null && x.push(H("div", {class: "q-field__prefix no-pointer-events row items-center"}, i.prefix)), t.getShadowControl !== void 0 && t.hasShadow.value === !0 && x.push(t.getShadowControl()), t.getControl !== void 0 ? x.push(t.getControl()) : r.rawControl !== void 0 ? x.push(r.rawControl()) : r.control !== void 0 && x.push(H("div", {
            ref: t.targetRef,
            class: "q-field__native row",
            tabindex: -1, ...t.splitAttrs.attributes.value,
            "data-autofocus": i.autofocus === !0 || void 0
        }, r.control(C.value))), y.value === !0 && x.push(H("div", {class: S.value}, re(r.label, i.label))), i.suffix !== void 0 && i.suffix !== null && x.push(H("div", {class: "q-field__suffix no-pointer-events row items-center"}, i.suffix)), x.concat(re(r.default))
    }

    function K() {
        let x, V;
        w.value === !0 ? e.value !== null ? (x = [H("div", {role: "alert"}, e.value)], V = `q--slot-error-${e.value}`) : (x = re(r.error), V = "q--slot-error") : (i.hideHint !== !0 || t.focused.value === !0) && (i.hint !== void 0 ? (x = [H("div", i.hint)], V = `q--slot-hint-${i.hint}`) : (x = re(r.hint), V = "q--slot-hint"));
        const Q = i.counter === !0 || r.counter !== void 0;
        if (i.hideBottomSpace === !0 && Q === !1 && x === void 0) return;
        const T = H("div", {key: V, class: "q-field__messages col"}, x);
        return H("div", {
            class: "q-field__bottom row items-start q-field__bottom--" + (i.hideBottomSpace !== !0 ? "animated" : "stale"),
            onClick: de
        }, [i.hideBottomSpace === !0 ? T : H(ce, {name: "q-transition--field-message"}, () => T), Q === !0 ? H("div", {class: "q-field__counter"}, r.counter !== void 0 ? r.counter() : t.computedCounter.value) : null])
    }

    function R(x, V) {
        return V === null ? null : H("div", {
            key: x,
            class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"
        }, V)
    }

    let G = !1;
    return xt(() => {
        G = !0
    }), $t(() => {
        G === !0 && i.autofocus === !0 && f.focus()
    }), i.autofocus === !0 && Me(() => {
        f.focus()
    }), se(() => {
        g !== null && clearTimeout(g)
    }), Object.assign(f, {focus: P, blur: $}), function () {
        const V = t.getControl === void 0 && r.control === void 0 ? {
            ...t.splitAttrs.attributes.value,
            "data-autofocus": i.autofocus === !0 || void 0, ...B.value
        } : B.value;
        return H(t.tag.value, {
            ref: t.rootRef,
            class: [_.value, l.class],
            style: l.style, ...V
        }, [r.before !== void 0 ? H("div", {
            class: "q-field__before q-field__marginal row no-wrap items-center",
            onClick: de
        }, r.before()) : null, H("div", {class: "q-field__inner relative-position col self-stretch"}, [H("div", {
            ref: t.controlRef,
            class: s.value,
            tabindex: -1, ...t.controlEvents
        }, F()), u.value === !0 ? K() : null]), r.after !== void 0 ? H("div", {
            class: "q-field__after q-field__marginal row no-wrap items-center",
            onClick: de
        }, r.after()) : null])
    }
}

const _t = {
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
}, Tt = Object.keys(Be);
Tt.forEach(t => {
    Be[t].regex = new RegExp(Be[t].pattern)
});
const Mn = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + Tt.join("") + "])|(.)", "g"),
    vt = /[.*+?^${}()|[\]\\]/g, X = String.fromCharCode(1),
    En = {mask: String, reverseFillMask: Boolean, fillMask: [Boolean, String], unmaskedValue: Boolean};

function qn(t, i, a, r) {
    let l, f, d, g, h, v;
    const w = L(null), e = L(o());

    function n() {
        return t.autogrow === !0 || ["textarea", "text", "search", "url", "tel", "password"].includes(t.type)
    }

    U(() => t.type + t.autogrow, c), U(() => t.mask, m => {
        if (m !== void 0) _(e.value, !0); else {
            const b = P(e.value);
            c(), t.modelValue !== b && i("update:modelValue", b)
        }
    }), U(() => t.fillMask + t.reverseFillMask, () => {
        w.value === !0 && _(e.value, !0)
    }), U(() => t.unmaskedValue, () => {
        w.value === !0 && _(e.value)
    });

    function o() {
        if (c(), w.value === !0) {
            const m = B(P(t.modelValue));
            return t.fillMask !== !1 ? $(m) : m
        }
        return t.modelValue
    }

    function u(m) {
        if (m < l.length) return l.slice(-m);
        let b = "", k = l;
        const A = k.indexOf(X);
        if (A !== -1) {
            for (let F = m - k.length; F > 0; F--) b += X;
            k = k.slice(0, A) + b + k.slice(A)
        }
        return k
    }

    function c() {
        if (w.value = t.mask !== void 0 && t.mask.length !== 0 && n(), w.value === !1) {
            g = void 0, l = "", f = "";
            return
        }
        const m = _t[t.mask] === void 0 ? t.mask : _t[t.mask],
            b = typeof t.fillMask == "string" && t.fillMask.length !== 0 ? t.fillMask.slice(0, 1) : "_",
            k = b.replace(vt, "\\$&"), A = [], F = [], E = [];
        let K = t.reverseFillMask === !0, R = "", G = "";
        m.replace(Mn, (T, p, M, j, Z) => {
            if (j !== void 0) {
                const z = Be[j];
                E.push(z), G = z.negate, K === !0 && (F.push("(?:" + G + "+)?(" + z.pattern + "+)?(?:" + G + "+)?(" + z.pattern + "+)?"), K = !1), F.push("(?:" + G + "+)?(" + z.pattern + ")?")
            } else if (M !== void 0) R = "\\" + (M === "\\" ? "" : M), E.push(M), A.push("([^" + R + "]+)?" + R + "?"); else {
                const z = p !== void 0 ? p : Z;
                R = z === "\\" ? "\\\\\\\\" : z.replace(vt, "\\\\$&"), E.push(z), A.push("([^" + R + "]+)?" + R + "?")
            }
        });
        const x = new RegExp("^" + A.join("") + "(" + (R === "" ? "." : "[^" + R + "]") + "+)?" + (R === "" ? "" : "[" + R + "]*") + "$"),
            V = F.length - 1,
            Q = F.map((T, p) => p === 0 && t.reverseFillMask === !0 ? new RegExp("^" + k + "*" + T) : p === V ? new RegExp("^" + T + "(" + (G === "" ? "." : G) + "+)?" + (t.reverseFillMask === !0 ? "$" : k + "*")) : new RegExp("^" + T));
        d = E, g = T => {
            const p = x.exec(t.reverseFillMask === !0 ? T : T.slice(0, E.length + 1));
            p !== null && (T = p.slice(1).join(""));
            const M = [], j = Q.length;
            for (let Z = 0, z = T; Z < j; Z++) {
                const ee = Q[Z].exec(z);
                if (ee === null) break;
                z = z.slice(ee.shift().length), M.push(...ee)
            }
            return M.length !== 0 ? M.join("") : T
        }, l = E.map(T => typeof T == "string" ? T : X).join(""), f = l.split(X).join(b)
    }

    function _(m, b, k) {
        const A = r.value, F = A.selectionEnd, E = A.value.length - F, K = P(m);
        b === !0 && c();
        const R = B(K), G = t.fillMask !== !1 ? $(R) : R, x = e.value !== G;
        A.value !== G && (A.value = G), x === !0 && (e.value = G), document.activeElement === A && oe(() => {
            if (G === f) {
                const Q = t.reverseFillMask === !0 ? f.length : 0;
                A.setSelectionRange(Q, Q, "forward");
                return
            }
            if (k === "insertFromPaste" && t.reverseFillMask !== !0) {
                const Q = A.selectionEnd;
                let T = F - 1;
                for (let p = h; p <= T && p < Q; p++) l[p] !== X && T++;
                y.right(A, T);
                return
            }
            if (["deleteContentBackward", "deleteContentForward"].indexOf(k) !== -1) {
                const Q = t.reverseFillMask === !0 ? F === 0 ? G.length > R.length ? 1 : 0 : Math.max(0, G.length - (G === f ? 0 : Math.min(R.length, E) + 1)) + 1 : F;
                A.setSelectionRange(Q, Q, "forward");
                return
            }
            if (t.reverseFillMask === !0) if (x === !0) {
                const Q = Math.max(0, G.length - (G === f ? 0 : Math.min(R.length, E + 1)));
                Q === 1 && F === 1 ? A.setSelectionRange(Q, Q, "forward") : y.rightReverse(A, Q)
            } else {
                const Q = G.length - E;
                A.setSelectionRange(Q, Q, "backward")
            } else if (x === !0) {
                const Q = Math.max(0, l.indexOf(X), Math.min(R.length, F) - 1);
                y.right(A, Q)
            } else {
                const Q = F - 1;
                y.right(A, Q)
            }
        });
        const V = t.unmaskedValue === !0 ? P(G) : G;
        String(t.modelValue) !== V && (t.modelValue !== null || V !== "") && a(V, !0)
    }

    function s(m, b, k) {
        const A = B(P(m.value));
        b = Math.max(0, l.indexOf(X), Math.min(A.length, b)), h = b, m.setSelectionRange(b, k, "forward")
    }

    const y = {
        left(m, b) {
            const k = l.slice(b - 1).indexOf(X) === -1;
            let A = Math.max(0, b - 1);
            for (; A >= 0; A--) if (l[A] === X) {
                b = A, k === !0 && b++;
                break
            }
            if (A < 0 && l[b] !== void 0 && l[b] !== X) return y.right(m, 0);
            b >= 0 && m.setSelectionRange(b, b, "backward")
        }, right(m, b) {
            const k = m.value.length;
            let A = Math.min(k, b + 1);
            for (; A <= k; A++) if (l[A] === X) {
                b = A;
                break
            } else l[A - 1] === X && (b = A);
            if (A > k && l[b - 1] !== void 0 && l[b - 1] !== X) return y.left(m, k);
            m.setSelectionRange(b, b, "forward")
        }, leftReverse(m, b) {
            const k = u(m.value.length);
            let A = Math.max(0, b - 1);
            for (; A >= 0; A--) if (k[A - 1] === X) {
                b = A;
                break
            } else if (k[A] === X && (b = A, A === 0)) break;
            if (A < 0 && k[b] !== void 0 && k[b] !== X) return y.rightReverse(m, 0);
            b >= 0 && m.setSelectionRange(b, b, "backward")
        }, rightReverse(m, b) {
            const k = m.value.length, A = u(k), F = A.slice(0, b + 1).indexOf(X) === -1;
            let E = Math.min(k, b + 1);
            for (; E <= k; E++) if (A[E - 1] === X) {
                b = E, b > 0 && F === !0 && b--;
                break
            }
            if (E > k && A[b - 1] !== void 0 && A[b - 1] !== X) return y.leftReverse(m, k);
            m.setSelectionRange(b, b, "forward")
        }
    };

    function S(m) {
        i("click", m), v = void 0
    }

    function C(m) {
        if (i("keydown", m), Gt(m) === !0 || m.altKey === !0) return;
        const b = r.value, k = b.selectionStart, A = b.selectionEnd;
        if (m.shiftKey || (v = void 0), m.keyCode === 37 || m.keyCode === 39) {
            m.shiftKey && v === void 0 && (v = b.selectionDirection === "forward" ? k : A);
            const F = y[(m.keyCode === 39 ? "right" : "left") + (t.reverseFillMask === !0 ? "Reverse" : "")];
            if (m.preventDefault(), F(b, v === k ? A : k), m.shiftKey) {
                const E = b.selectionStart;
                b.setSelectionRange(Math.min(v, E), Math.max(v, E), "forward")
            }
        } else m.keyCode === 8 && t.reverseFillMask !== !0 && k === A ? (y.left(b, k), b.setSelectionRange(b.selectionStart, A, "backward")) : m.keyCode === 46 && t.reverseFillMask === !0 && k === A && (y.rightReverse(b, A), b.setSelectionRange(k, b.selectionEnd, "forward"))
    }

    function B(m) {
        if (m == null || m === "") return "";
        if (t.reverseFillMask === !0) return O(m);
        const b = d;
        let k = 0, A = "";
        for (let F = 0; F < b.length; F++) {
            const E = m[k], K = b[F];
            if (typeof K == "string") A += K, E === K && k++; else if (E !== void 0 && K.regex.test(E)) A += K.transform !== void 0 ? K.transform(E) : E, k++; else return A
        }
        return A
    }

    function O(m) {
        const b = d, k = l.indexOf(X);
        let A = m.length - 1, F = "";
        for (let E = b.length - 1; E >= 0 && A !== -1; E--) {
            const K = b[E];
            let R = m[A];
            if (typeof K == "string") F = K + F, R === K && A--; else if (R !== void 0 && K.regex.test(R)) do F = (K.transform !== void 0 ? K.transform(R) : R) + F, A--, R = m[A]; while (k === E && R !== void 0 && K.regex.test(R)); else return F
        }
        return F
    }

    function P(m) {
        return typeof m != "string" || g === void 0 ? typeof m == "number" ? g("" + m) : m : g(m)
    }

    function $(m) {
        return f.length - m.length <= 0 ? m : t.reverseFillMask === !0 && m.length !== 0 ? f.slice(0, -m.length) + m : m + f.slice(m.length)
    }

    return {innerValue: e, hasMask: w, moveCursorForPaste: s, updateMaskValue: _, onMaskedKeydown: C, onMaskedClick: S}
}

const In = {name: String};

function Pn(t) {
    return q(() => t.name || t.for)
}

function Bn(t, i) {
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

    return i === !0 ? q(() => {
        if (t.type === "file") return a()
    }) : q(a)
}

function Fn(t) {
    return function (a) {
        if (a.type === "compositionend" || a.type === "change") {
            if (a.target.qComposing !== !0) return;
            a.target.qComposing = !1, t(a)
        } else a.type === "compositionstart" && (a.target.qComposing = !0)
    }
}

var On = le({
    name: "QInput",
    inheritAttrs: !1,
    props: {
        ...kn, ...En, ...In,
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
        const {proxy: r} = te(), {$q: l} = r, f = {};
        let d = NaN, g, h, v = null, w;
        const e = L(null), n = Pn(t), {
                innerValue: o,
                hasMask: u,
                moveCursorForPaste: c,
                updateMaskValue: _,
                onMaskedKeydown: s,
                onMaskedClick: y
            } = qn(t, i, R, e), S = Bn(t, !0), C = q(() => ze(o.value)), B = Fn(E), O = Tn({changeEvent: !0}),
            P = q(() => t.type === "textarea" || t.autogrow === !0),
            $ = q(() => P.value === !0 || ["text", "search", "url", "tel", "password"].includes(t.type)), m = q(() => {
                const p = {...O.splitAttrs.listeners.value, onInput: E, onPaste: F, onChange: x, onBlur: V, onFocus: nt};
                return p.onCompositionstart = p.onCompositionupdate = p.onCompositionend = B, u.value === !0 && (p.onKeydown = s, p.onClick = y), t.autogrow === !0 && (p.onAnimationend = K), p
            }), b = q(() => {
                const p = {
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
                return P.value === !1 && (p.type = t.type), t.autogrow === !0 && (p.rows = 1), p
            });
        U(() => t.type, () => {
            e.value && (e.value.value = t.modelValue)
        }), U(() => t.modelValue, p => {
            if (u.value === !0) {
                if (h === !0 && (h = !1, String(p) === d)) return;
                _(p)
            } else o.value !== p && (o.value = p, t.type === "number" && f.hasOwnProperty("value") === !0 && (g === !0 ? g = !1 : delete f.value));
            t.autogrow === !0 && oe(G)
        }), U(() => t.autogrow, p => {
            p === !0 ? oe(G) : e.value !== null && a.rows > 0 && (e.value.style.height = "auto")
        }), U(() => t.dense, () => {
            t.autogrow === !0 && oe(G)
        });

        function k() {
            et(() => {
                const p = document.activeElement;
                e.value !== null && e.value !== p && (p === null || p.id !== O.targetUid.value) && e.value.focus({preventScroll: !0})
            })
        }

        function A() {
            e.value !== null && e.value.select()
        }

        function F(p) {
            if (u.value === !0 && t.reverseFillMask !== !0) {
                const M = p.target;
                c(M, M.selectionStart, M.selectionEnd)
            }
            i("paste", p)
        }

        function E(p) {
            if (!p || !p.target) return;
            if (t.type === "file") {
                i("update:modelValue", p.target.files);
                return
            }
            const M = p.target.value;
            if (p.target.qComposing === !0) {
                f.value = M;
                return
            }
            if (u.value === !0) _(M, !1, p.inputType); else if (R(M), $.value === !0 && p.target === document.activeElement) {
                const {selectionStart: j, selectionEnd: Z} = p.target;
                j !== void 0 && Z !== void 0 && oe(() => {
                    p.target === document.activeElement && M.indexOf(p.target.value) === 0 && p.target.setSelectionRange(j, Z)
                })
            }
            t.autogrow === !0 && G()
        }

        function K(p) {
            i("animationend", p), G()
        }

        function R(p, M) {
            w = () => {
                v = null, t.type !== "number" && f.hasOwnProperty("value") === !0 && delete f.value, t.modelValue !== p && d !== p && (d = p, M === !0 && (h = !0), i("update:modelValue", p), oe(() => {
                    d === p && (d = NaN)
                })), w = void 0
            }, t.type === "number" && (g = !0, f.value = p), t.debounce !== void 0 ? (v !== null && clearTimeout(v), f.value = p, v = setTimeout(w, t.debounce)) : w()
        }

        function G() {
            requestAnimationFrame(() => {
                const p = e.value;
                if (p !== null) {
                    const M = p.parentNode.style, {scrollTop: j} = p, {
                            overflowY: Z,
                            maxHeight: z
                        } = l.platform.is.firefox === !0 ? {} : window.getComputedStyle(p),
                        ee = Z !== void 0 && Z !== "scroll";
                    ee === !0 && (p.style.overflowY = "hidden"), M.marginBottom = p.scrollHeight - 1 + "px", p.style.height = "1px", p.style.height = p.scrollHeight + "px", ee === !0 && (p.style.overflowY = parseInt(z, 10) < p.scrollHeight ? "auto" : "hidden"), M.marginBottom = "", p.scrollTop = j
                }
            })
        }

        function x(p) {
            B(p), v !== null && (clearTimeout(v), v = null), w !== void 0 && w(), i("change", p.target.value)
        }

        function V(p) {
            p !== void 0 && nt(p), v !== null && (clearTimeout(v), v = null), w !== void 0 && w(), g = !1, h = !1, delete f.value, t.type !== "file" && setTimeout(() => {
                e.value !== null && (e.value.value = o.value !== void 0 ? o.value : "")
            })
        }

        function Q() {
            return f.hasOwnProperty("value") === !0 ? f.value : o.value !== void 0 ? o.value : ""
        }

        se(() => {
            V()
        }), Me(() => {
            t.autogrow === !0 && G()
        }), Object.assign(O, {
            innerValue: o,
            fieldClass: q(() => `q-${P.value === !0 ? "textarea" : "input"}` + (t.autogrow === !0 ? " q-textarea--autogrow" : "")),
            hasShadow: q(() => t.type !== "file" && typeof t.shadowText == "string" && t.shadowText.length !== 0),
            inputRef: e,
            emitValue: R,
            hasValue: C,
            floatingLabel: q(() => C.value === !0 && (t.type !== "number" || isNaN(o.value) === !1) || ze(t.displayValue)),
            getControl: () => H(P.value === !0 ? "textarea" : "input", {
                ref: e,
                class: ["q-field__native q-placeholder", t.inputClass],
                style: t.inputStyle, ...b.value, ...m.value, ...t.type !== "file" ? {value: Q()} : S.value
            }),
            getShadowControl: () => H("div", {class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (P.value === !0 ? "" : " text-no-wrap")}, [H("span", {class: "invisible"}, Q()), H("span", t.shadowText)])
        });
        const T = Cn(O);
        return Object.assign(r, {
            focus: k,
            select: A,
            getNativeElement: () => e.value
        }), Ve(r, "nativeEl", () => e.value), T
    }
});
const Vn = {target: {type: [Boolean, String, Element], default: !0}, noParentEvent: Boolean},
    Hn = {...Vn, contextMenu: Boolean};

function Rn({showing: t, avoidEmit: i, configureAnchorEl: a}) {
    const {props: r, proxy: l, emit: f} = te(), d = L(null);
    let g = null;

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
            kt(o, 13) === !0 && v.toggle(o)
        }, contextClick(o) {
            l.hide(o), de(o), oe(() => {
                l.show(o), o.qAnchorHandled = !0
            })
        }, prevent: de, mobileTouch(o) {
            if (v.mobileCleanup(o), h(o) !== !0) return;
            l.hide(o), d.value.classList.add("non-selectable");
            const u = o.target;
            at(v, "anchor", [[u, "touchmove", "mobileCleanup", "passive"], [u, "touchend", "mobileCleanup", "passive"], [u, "touchcancel", "mobileCleanup", "passive"], [d.value, "contextmenu", "prevent", "notPassive"]]), g = setTimeout(() => {
                g = null, l.show(o), o.qAnchorHandled = !0
            }, 300)
        }, mobileCleanup(o) {
            d.value.classList.remove("non-selectable"), g !== null && (clearTimeout(g), g = null), t.value === !0 && o !== void 0 && en()
        }
    }), a = function (o = r.contextMenu) {
        if (r.noParentEvent === !0 || d.value === null) return;
        let u;
        o === !0 ? l.$q.platform.is.mobile === !0 ? u = [[d.value, "touchstart", "mobileTouch", "passive"]] : u = [[d.value, "mousedown", "hide", "passive"], [d.value, "contextmenu", "contextClick", "notPassive"]] : u = [[d.value, "click", "toggle", "passive"], [d.value, "keyup", "toggleKey", "passive"]], at(v, "anchor", u)
    });

    function w() {
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

    return U(() => r.contextMenu, o => {
        d.value !== null && (w(), a(o))
    }), U(() => r.target, () => {
        d.value !== null && w(), n()
    }), U(() => r.noParentEvent, o => {
        d.value !== null && (o === !0 ? w() : a())
    }), Me(() => {
        n(), i !== !0 && r.modelValue === !0 && d.value === null && f("update:modelValue", !1)
    }), se(() => {
        g !== null && clearTimeout(g), w()
    }), {anchorEl: d, canShow: h, anchorEvents: v}
}

function Ln(t, i) {
    const a = L(null);
    let r;

    function l(g, h) {
        const v = `${h !== void 0 ? "add" : "remove"}EventListener`, w = h !== void 0 ? h : r;
        g !== window && g[v]("scroll", w, je.passive), window[v]("scroll", w, je.passive), r = h
    }

    function f() {
        a.value !== null && (l(a.value), a.value = null)
    }

    const d = U(() => t.noParentEvent, () => {
        a.value !== null && (f(), i())
    });
    return se(d), {localScrollTarget: a, unconfigureScrollTarget: f, changeScrollEvent: l}
}

const Se = [];

function $n(t, i) {
    do {
        if (t.$options.name === "QMenu") {
            if (t.hide(i), t.$props.separateClosePopup === !0) return Re(t)
        } else if (t.__qPortal === !0) {
            const a = Re(t);
            return a !== void 0 && a.$options.name === "QPopupProxy" ? (t.hide(i), a) : t
        }
        t = Re(t)
    } while (t != null)
}

const Dn = le({
    name: "QPortal", setup(t, {slots: i}) {
        return () => i.default()
    }
});

function Gn(t) {
    for (t = t.parent; t != null;) {
        if (t.type.name === "QGlobalDialog") return !0;
        if (t.type.name === "QDialog" || t.type.name === "QMenu") return !1;
        t = t.parent
    }
    return !1
}

function Qn(t, i, a, r) {
    const l = L(!1), f = L(!1);
    let d = null;
    const g = {}, h = r === "dialog" && Gn(t);

    function v(e) {
        if (e === !0) {
            ft(g), f.value = !0;
            return
        }
        f.value = !1, l.value === !1 && (h === !1 && d === null && (d = Kt(!1, r)), l.value = !0, Se.push(t.proxy), wn(g))
    }

    function w(e) {
        if (f.value = !1, e !== !0) return;
        ft(g), l.value = !1;
        const n = Se.indexOf(t.proxy);
        n !== -1 && Se.splice(n, 1), d !== null && (jt(d), d = null)
    }

    return Nt(() => {
        w(!0)
    }), t.proxy.__qPortal = !0, Ve(t.proxy, "contentEl", () => i.value), {
        showPortal: v,
        hidePortal: w,
        portalIsActive: l,
        portalIsAccessible: f,
        renderPortal: () => h === !0 ? a() : l.value === !0 ? [H(Wt, {to: d}, H(Dn, a))] : void 0
    }
}

const Nn = {
    transitionShow: {type: String, default: "fade"},
    transitionHide: {type: String, default: "fade"},
    transitionDuration: {type: [String, Number], default: 300}
};

function Wn(t, i = () => {
}, a = () => {
}) {
    return {
        transitionProps: q(() => {
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
        }), transitionStyle: q(() => `--q-transition-duration: ${t.transitionDuration}ms`)
    }
}

function Kn() {
    let t;
    const i = te();

    function a() {
        t = void 0
    }

    return xt(a), se(a), {
        removeTick: a, registerTick(r) {
            t = r, oe(() => {
                t === r && (Zt(i) === !1 && t(), t = void 0)
            })
        }
    }
}

const ve = [];
let we;

function jn(t) {
    we = t.keyCode === 27
}

function Zn() {
    we === !0 && (we = !1)
}

function zn(t) {
    we === !0 && (we = !1, kt(t, 27) === !0 && ve[ve.length - 1](t))
}

function Ct(t) {
    window[t]("keydown", jn), window[t]("blur", Zn), window[t]("keyup", zn), we = !1
}

function Un(t) {
    Xe.is.desktop === !0 && (ve.push(t), ve.length === 1 && Ct("addEventListener"))
}

function mt(t) {
    const i = ve.indexOf(t);
    i !== -1 && (ve.splice(i, 1), ve.length === 0 && Ct("removeEventListener"))
}

const me = [];

function Mt(t) {
    me[me.length - 1](t)
}

function Xn(t) {
    Xe.is.desktop === !0 && (me.push(t), me.length === 1 && document.body.addEventListener("focusin", Mt))
}

function Yn(t) {
    const i = me.indexOf(t);
    i !== -1 && (me.splice(i, 1), me.length === 0 && document.body.removeEventListener("focusin", Mt))
}

const {notPassiveCapture: Fe} = je, pe = [];

function Oe(t) {
    const i = t.target;
    if (i === void 0 || i.nodeType === 8 || i.classList.contains("no-pointer-events") === !0) return;
    let a = Se.length - 1;
    for (; a >= 0;) {
        const r = Se[a].$;
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
    pe.push(t), pe.length === 1 && (document.addEventListener("mousedown", Oe, Fe), document.addEventListener("touchstart", Oe, Fe))
}

function pt(t) {
    const i = pe.findIndex(a => a === t);
    i !== -1 && (pe.splice(i, 1), pe.length === 0 && (document.removeEventListener("mousedown", Oe, Fe), document.removeEventListener("touchstart", Oe, Fe)))
}

let ht, gt;

function yt(t) {
    const i = t.split(" ");
    return i.length !== 2 ? !1 : ["top", "center", "bottom"].includes(i[0]) !== !0 ? (console.error("Anchor/Self position must start with one of top/center/bottom"), !1) : ["left", "middle", "right", "start", "end"].includes(i[1]) !== !0 ? (console.error("Anchor/Self position must end with one of left/middle/right/start/end"), !1) : !0
}

function ea(t) {
    return t ? !(t.length !== 2 || typeof t[0] != "number" || typeof t[1] != "number") : !0
}

const Ue = {"start#ltr": "left", "start#rtl": "right", "end#ltr": "right", "end#rtl": "left"};
["left", "middle", "right"].forEach(t => {
    Ue[`${t}#ltr`] = t, Ue[`${t}#rtl`] = t
});

function bt(t, i) {
    const a = t.split(" ");
    return {vertical: a[0], horizontal: Ue[`${a[1]}#${i === !0 ? "rtl" : "ltr"}`]}
}

function ta(t, i) {
    let {top: a, left: r, right: l, bottom: f, width: d, height: g} = t.getBoundingClientRect();
    return i !== void 0 && (a -= i[1], r -= i[0], f += i[1], l += i[0], d += i[0], g += i[1]), {
        top: a,
        bottom: f,
        height: g,
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

function wt(t, i, a, r) {
    return {top: t[a.vertical] - i[r.vertical], left: t[a.horizontal] - i[r.horizontal]}
}

function Et(t, i = 0) {
    if (t.targetEl === null || t.anchorEl === null || i > 5) return;
    if (t.targetEl.offsetHeight === 0 || t.targetEl.offsetWidth === 0) {
        setTimeout(() => {
            Et(t, i + 1)
        }, 10);
        return
    }
    const {
        targetEl: a,
        offset: r,
        anchorEl: l,
        anchorOrigin: f,
        selfOrigin: d,
        absoluteOffset: g,
        fit: h,
        cover: v,
        maxHeight: w,
        maxWidth: e
    } = t;
    if (Xe.is.ios === !0 && window.visualViewport !== void 0) {
        const O = document.body.style, {offsetLeft: P, offsetTop: $} = window.visualViewport;
        P !== ht && (O.setProperty("--q-pe-left", P + "px"), ht = P), $ !== gt && (O.setProperty("--q-pe-top", $ + "px"), gt = $)
    }
    const {scrollLeft: n, scrollTop: o} = a, u = g === void 0 ? ta(l, v === !0 ? [0, 0] : r) : na(l, g, r);
    Object.assign(a.style, {
        top: 0,
        left: 0,
        minWidth: null,
        minHeight: null,
        maxWidth: e,
        maxHeight: w,
        visibility: "visible"
    });
    const {offsetWidth: c, offsetHeight: _} = a, {
        elWidth: s,
        elHeight: y
    } = h === !0 || v === !0 ? {
        elWidth: Math.max(u.width, c),
        elHeight: v === !0 ? Math.max(u.height, _) : _
    } : {elWidth: c, elHeight: _};
    let S = {maxWidth: e, maxHeight: w};
    (h === !0 || v === !0) && (S.minWidth = u.width + "px", v === !0 && (S.minHeight = u.height + "px")), Object.assign(a.style, S);
    const C = aa(s, y);
    let B = wt(u, C, f, d);
    if (g === void 0 || r === void 0) We(B, u, C, f, d); else {
        const {top: O, left: P} = B;
        We(B, u, C, f, d);
        let $ = !1;
        if (B.top !== O) {
            $ = !0;
            const m = 2 * r[1];
            u.center = u.top -= m, u.bottom -= m + 2
        }
        if (B.left !== P) {
            $ = !0;
            const m = 2 * r[0];
            u.middle = u.left -= m, u.right -= m + 2
        }
        $ === !0 && (B = wt(u, C, f, d), We(B, u, C, f, d))
    }
    S = {
        top: B.top + "px",
        left: B.left + "px"
    }, B.maxHeight !== void 0 && (S.maxHeight = B.maxHeight + "px", u.height > B.maxHeight && (S.minHeight = S.maxHeight)), B.maxWidth !== void 0 && (S.maxWidth = B.maxWidth + "px", u.width > B.maxWidth && (S.minWidth = S.maxWidth)), Object.assign(a.style, S), a.scrollTop !== o && (a.scrollTop = o), a.scrollLeft !== n && (a.scrollLeft = n)
}

function We(t, i, a, r, l) {
    const f = a.bottom, d = a.right, g = tn(), h = window.innerHeight - g, v = document.body.clientWidth;
    if (t.top < 0 || t.top + f > h) if (l.vertical === "center") t.top = i[r.vertical] > h / 2 ? Math.max(0, h - f) : 0, t.maxHeight = Math.min(f, h); else if (i[r.vertical] > h / 2) {
        const w = Math.min(h, r.vertical === "center" ? i.center : r.vertical === l.vertical ? i.bottom : i.top);
        t.maxHeight = Math.min(f, w), t.top = Math.max(0, w - f)
    } else t.top = Math.max(0, r.vertical === "center" ? i.center : r.vertical === l.vertical ? i.top : i.bottom), t.maxHeight = Math.min(f, h - t.top);
    if (t.left < 0 || t.left + d > v) if (t.maxWidth = Math.min(d, v), l.horizontal === "middle") t.left = i[r.horizontal] > v / 2 ? Math.max(0, v - d) : 0; else if (i[r.horizontal] > v / 2) {
        const w = Math.min(v, r.horizontal === "middle" ? i.middle : r.horizontal === l.horizontal ? i.right : i.left);
        t.maxWidth = Math.min(d, w), t.left = Math.max(0, w - t.maxWidth)
    } else t.left = Math.max(0, r.horizontal === "middle" ? i.middle : r.horizontal === l.horizontal ? i.left : i.right), t.maxWidth = Math.min(d, v - t.left)
}

var oa = le({
    name: "QMenu",
    inheritAttrs: !1,
    props: {
        ...Hn, ...nn, ...Ye, ...Nn,
        persistent: Boolean,
        autoClose: Boolean,
        separateClosePopup: Boolean,
        noRouteDismiss: Boolean,
        noRefocus: Boolean,
        noFocus: Boolean,
        fit: Boolean,
        cover: Boolean,
        square: Boolean,
        anchor: {type: String, validator: yt},
        self: {type: String, validator: yt},
        offset: {type: Array, validator: ea},
        scrollTarget: an,
        touchPosition: Boolean,
        maxHeight: {type: String, default: null},
        maxWidth: {type: String, default: null}
    },
    emits: [...on, "click", "escapeKey"],
    setup(t, {slots: i, emit: a, attrs: r}) {
        let l = null, f, d, g;
        const h = te(), {proxy: v} = h, {$q: w} = v, e = L(null), n = L(!1),
            o = q(() => t.persistent !== !0 && t.noRouteDismiss !== !0), u = Je(t, w), {
                registerTick: c,
                removeTick: _
            } = Kn(), {registerTimeout: s} = rn(), {transitionProps: y, transitionStyle: S} = Wn(t), {
                localScrollTarget: C,
                changeScrollEvent: B,
                unconfigureScrollTarget: O
            } = Ln(t, M), {anchorEl: P, canShow: $} = Rn({showing: n}), {hide: m} = ln({
                showing: n,
                canShow: $,
                handleShow: Q,
                handleHide: T,
                hideOnRouteChange: o,
                processOnMount: !0
            }), {showPortal: b, hidePortal: k, renderPortal: A} = Qn(h, e, qt, "menu"), F = {
                anchorEl: P, innerRef: e, onClickOutside(D) {
                    if (t.persistent !== !0 && n.value === !0) return m(D), (D.type === "touchstart" || D.target.classList.contains("q-dialog__backdrop")) && At(D), !0
                }
            }, E = q(() => bt(t.anchor || (t.cover === !0 ? "center middle" : "bottom start"), w.lang.rtl)),
            K = q(() => t.cover === !0 ? E.value : bt(t.self || "top start", w.lang.rtl)),
            R = q(() => (t.square === !0 ? " q-menu--square" : "") + (u.value === !0 ? " q-menu--dark q-dark" : "")),
            G = q(() => t.autoClose === !0 ? {onClick: j} : {}), x = q(() => n.value === !0 && t.persistent !== !0);
        U(x, D => {
            D === !0 ? (Un(z), Jn(F)) : (mt(z), pt(F))
        });

        function V() {
            et(() => {
                let D = e.value;
                D && D.contains(document.activeElement) !== !0 && (D = D.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || D.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || D.querySelector("[autofocus], [data-autofocus]") || D, D.focus({preventScroll: !0}))
            })
        }

        function Q(D) {
            if (l = t.noRefocus === !1 ? document.activeElement : null, Xn(Z), b(), M(), f = void 0, D !== void 0 && (t.touchPosition || t.contextMenu)) {
                const He = zt(D);
                if (He.left !== void 0) {
                    const {top: It, left: Pt} = P.value.getBoundingClientRect();
                    f = {left: He.left - Pt, top: He.top - It}
                }
            }
            d === void 0 && (d = U(() => w.screen.width + "|" + w.screen.height + "|" + t.self + "|" + t.anchor + "|" + w.lang.rtl, ee)), t.noFocus !== !0 && document.activeElement.blur(), c(() => {
                ee(), t.noFocus !== !0 && V()
            }), s(() => {
                w.platform.is.ios === !0 && (g = t.autoClose, e.value.click()), ee(), b(!0), a("show", D)
            }, t.transitionDuration)
        }

        function T(D) {
            _(), k(), p(!0), l !== null && (D === void 0 || D.qClickOutside !== !0) && (((D && D.type.indexOf("key") === 0 ? l.closest('[tabindex]:not([tabindex^="-"])') : void 0) || l).focus(), l = null), s(() => {
                k(!0), a("hide", D)
            }, t.transitionDuration)
        }

        function p(D) {
            f = void 0, d !== void 0 && (d(), d = void 0), (D === !0 || n.value === !0) && (Yn(Z), O(), pt(F), mt(z)), D !== !0 && (l = null)
        }

        function M() {
            (P.value !== null || t.scrollTarget !== void 0) && (C.value = un(P.value, t.scrollTarget), B(C.value, ee))
        }

        function j(D) {
            g !== !0 ? ($n(v, D), a("click", D)) : g = !1
        }

        function Z(D) {
            x.value === !0 && t.noFocus !== !0 && Ut(e.value, D.target) !== !0 && V()
        }

        function z(D) {
            a("escapeKey"), m(D)
        }

        function ee() {
            Et({
                targetEl: e.value,
                offset: t.offset,
                anchorEl: P.value,
                anchorOrigin: E.value,
                selfOrigin: K.value,
                absoluteOffset: f,
                fit: t.fit,
                cover: t.cover,
                maxHeight: t.maxHeight,
                maxWidth: t.maxWidth
            })
        }

        function qt() {
            return H(ce, y.value, () => n.value === !0 ? H("div", {
                role: "menu", ...r,
                ref: e,
                tabindex: -1,
                class: ["q-menu q-position-engine scroll" + R.value, r.class],
                style: [r.style, S.value], ...G.value
            }, re(i.default)) : null)
        }

        return se(p), Object.assign(v, {focus: V, updatePosition: ee}), A
    }
});

function Te(t, i = new WeakMap) {
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
        a.add(Te(r, i))
    }) : t instanceof Map && t.forEach((r, l) => {
        a.set(l, Te(r, i))
    }), Object.assign(a, ...Object.keys(t).map(r => ({[r]: Te(t[r], i)})))
}

var ra = le({
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
            const {proxy: r} = te(), {$q: l} = r, f = L(null), d = L(""), g = L("");
            let h = !1;
            const v = q(() => Ve({
                initialValue: d.value,
                validate: t.validate,
                set: w,
                cancel: e,
                updatePosition: n
            }, "value", () => g.value, C => {
                g.value = C
            }));

            function w() {
                t.validate(g.value) !== !1 && (o() === !0 && (a("save", g.value, d.value), a("update:modelValue", g.value)), u())
            }

            function e() {
                o() === !0 && a("cancel", g.value, d.value), u()
            }

            function n() {
                oe(() => {
                    f.value.updatePosition()
                })
            }

            function o() {
                return Xt(g.value, d.value) === !1
            }

            function u() {
                h = !0, f.value.hide()
            }

            function c() {
                h = !1, d.value = Te(t.modelValue), g.value = Te(t.modelValue), a("beforeShow")
            }

            function _() {
                a("show")
            }

            function s() {
                h === !1 && o() === !0 && (t.autoSave === !0 && t.validate(g.value) === !0 ? (a("save", g.value, d.value), a("update:modelValue", g.value)) : a("cancel", g.value, d.value)), a("beforeHide")
            }

            function y() {
                a("hide")
            }

            function S() {
                const C = i.default !== void 0 ? [].concat(i.default(v.value)) : [];
                return t.title && C.unshift(H("div", {class: "q-dialog__title q-mt-sm q-mb-sm"}, t.title)), t.buttons === !0 && C.push(H("div", {class: "q-popup-edit__buttons row justify-center no-wrap"}, [H(fe, {
                    flat: !0,
                    color: t.color,
                    label: t.labelCancel || l.lang.label.cancel,
                    onClick: e
                }), H(fe, {flat: !0, color: t.color, label: t.labelSet || l.lang.label.set, onClick: w})])), C
            }

            return Object.assign(r, {
                set: w, cancel: e, show(C) {
                    f.value !== null && f.value.show(C)
                }, hide(C) {
                    f.value !== null && f.value.hide(C)
                }, updatePosition: n
            }), () => {
                if (t.disable !== !0) return H(oa, {
                    ref: f,
                    class: "q-popup-edit",
                    cover: t.cover,
                    onBeforeShow: c,
                    onShow: _,
                    onBeforeHide: s,
                    onHide: y,
                    onEscapeKey: e
                }, S)
            }
        }
    }), la = le({
        name: "QPage", props: {padding: Boolean, styleFn: Function}, setup(t, {slots: i}) {
            const {proxy: {$q: a}} = te(), r = Ke(Yt, he);
            if (r === he) return console.error("QPage needs to be a deep child of QLayout"), he;
            if (Ke(Jt, he) === he) return console.error("QPage needs to be child of QPageContainer"), he;
            const f = q(() => {
                const g = (r.header.space === !0 ? r.header.size : 0) + (r.footer.space === !0 ? r.footer.size : 0);
                if (typeof t.styleFn == "function") {
                    const h = r.isContainer.value === !0 ? r.containerHeight.value : a.screen.height;
                    return t.styleFn(g, h)
                }
                return {minHeight: r.isContainer.value === !0 ? r.containerHeight.value - g + "px" : a.screen.height === 0 ? g !== 0 ? `calc(100vh - ${g}px)` : "100vh" : a.screen.height - g + "px"}
            }), d = q(() => `q-page${t.padding === !0 ? " q-layout-padding" : ""}`);
            return () => H("main", {class: d.value, style: f.value}, re(i.default))
        }
    }),
    ke = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
    be = {};/*!
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
                if (e = parseFloat(e), n.ctx || w(), typeof e != "undefined" && e >= 0 && e <= 1) {
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
                n.ctx || w(), n._muted = e, n.usingWebAudio && n.masterGain.gain.setValueAtTime(e ? 0 : n._volume, a.ctx.currentTime);
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
                return e.usingWebAudio && e.ctx && typeof e.ctx.close != "undefined" && (e.ctx.close(), e.ctx = null, w()), e
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
                    s = u.indexOf("Safari") !== -1 && u.indexOf("Chrome") === -1, y = u.match(/Version\/(.*?) /),
                    S = s && y && parseInt(y[1], 10) < 15;
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
                    weba: !!(!S && n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                    webm: !!(!S && n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
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
                            var y = e._howls[c]._soundById(_[s]);
                            y && y._node && !y._node._unlocked && (y._node._unlocked = !0, y._node.load())
                        }
                        e._autoResume();
                        var S = e.ctx.createBufferSource();
                        S.buffer = e._scratchBuffer, S.connect(e.ctx.destination), typeof S.start == "undefined" ? S.noteOn(0) : S.start(0), typeof e.ctx.resume == "function" && e.ctx.resume(), S.onended = function () {
                            S.disconnect(0), e._audioUnlocked = !0, document.removeEventListener("touchstart", n, !0), document.removeEventListener("touchend", n, !0), document.removeEventListener("click", n, !0), document.removeEventListener("keydown", n, !0);
                            for (var C = 0; C < e._howls.length; C++) e._howls[C]._emit("unlock")
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
                return a.ctx || w(), n._autoplay = e.autoplay || !1, n._format = typeof e.format != "string" ? e.format : [e.format], n._html5 = e.html5 || !1, n._muted = e.mute || !1, n._loop = e.loop || !1, n._pool = e.pool || 5, n._preload = typeof e.preload == "boolean" || e.preload === "metadata" ? e.preload : !0, n._rate = e.rate || 1, n._sprite = e.sprite || {}, n._src = typeof e.src != "string" ? e.src : [e.src], n._volume = e.volume !== void 0 ? e.volume : 1, n._xhr = {
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
                    var y = s._id;
                    return o._queue.push({
                        event: "play", action: function () {
                            o.play(y)
                        }
                    }), y
                }
                if (u && !s._paused) return n || o._loadQueue("play"), s._id;
                o._webAudio && a._autoResume();
                var S = Math.max(0, s._seek > 0 ? s._seek : o._sprite[e][0] / 1e3),
                    C = Math.max(0, (o._sprite[e][0] + o._sprite[e][1]) / 1e3 - S), B = C * 1e3 / Math.abs(s._rate),
                    O = o._sprite[e][0] / 1e3, P = (o._sprite[e][0] + o._sprite[e][1]) / 1e3;
                s._sprite = e, s._ended = !1;
                var $ = function () {
                    s._paused = !1, s._seek = S, s._start = O, s._stop = P, s._loop = !!(s._loop || o._sprite[e][2])
                };
                if (S >= P) {
                    o._ended(s);
                    return
                }
                var m = s._node;
                if (o._webAudio) {
                    var b = function () {
                        o._playLock = !1, $(), o._refreshBuffer(s);
                        var E = s._muted || o._muted ? 0 : s._volume;
                        m.gain.setValueAtTime(E, a.ctx.currentTime), s._playStart = a.ctx.currentTime, typeof m.bufferSource.start == "undefined" ? s._loop ? m.bufferSource.noteGrainOn(0, S, 86400) : m.bufferSource.noteGrainOn(0, S, C) : s._loop ? m.bufferSource.start(0, S, 86400) : m.bufferSource.start(0, S, C), B !== 1 / 0 && (o._endTimers[s._id] = setTimeout(o._ended.bind(o, s), B)), n || setTimeout(function () {
                            o._emit("play", s._id), o._loadQueue()
                        }, 0)
                    };
                    a.state === "running" && a.ctx.state !== "interrupted" ? b() : (o._playLock = !0, o.once("resume", b), o._clearTimer(s._id))
                } else {
                    var k = function () {
                        m.currentTime = S, m.muted = s._muted || o._muted || a._muted || m.muted, m.volume = s._volume * a.volume(), m.playbackRate = s._rate;
                        try {
                            var E = m.play();
                            if (E && typeof Promise != "undefined" && (E instanceof Promise || typeof E.then == "function") ? (o._playLock = !0, $(), E.then(function () {
                                o._playLock = !1, m._unlocked = !0, n ? o._loadQueue() : o._emit("play", s._id)
                            }).catch(function () {
                                o._playLock = !1, o._emit("playerror", s._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), s._ended = !0, s._paused = !0
                            })) : n || (o._playLock = !1, $(), o._emit("play", s._id)), m.playbackRate = s._rate, m.paused) {
                                o._emit("playerror", s._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                                return
                            }
                            e !== "__default" || s._loop ? o._endTimers[s._id] = setTimeout(o._ended.bind(o, s), B) : (o._endTimers[s._id] = function () {
                                o._ended(s), m.removeEventListener("ended", o._endTimers[s._id], !1)
                            }, m.addEventListener("ended", o._endTimers[s._id], !1))
                        } catch (K) {
                            o._emit("playerror", s._id, K)
                        }
                    };
                    m.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" && (m.src = o._src, m.load());
                    var A = window && window.ejecta || !m.readyState && a._navigator.isCocoonJS;
                    if (m.readyState >= 3 || A) k(); else {
                        o._playLock = !0, o._state = "loading";
                        var F = function () {
                            o._state = "loaded", k(), m.removeEventListener(a._canPlayEvent, F, !1)
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
                    for (var y = 0; y < u.length; y++) s = e._soundById(u[y]), s && (s._volume = o, n[2] || e._stopFade(u[y]), e._webAudio && s._node && !s._muted ? s._node.gain.setValueAtTime(o, a.ctx.currentTime) : s._node && !s._muted && (s._node.volume = o * a.volume()), e._emit("volume", s._id))
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
                    var y = c._soundById(_[s]);
                    if (y) {
                        if (u || c._stopFade(_[s]), c._webAudio && !y._muted) {
                            var S = a.ctx.currentTime, C = S + o / 1e3;
                            y._volume = e, y._node.gain.setValueAtTime(e, S), y._node.gain.linearRampToValueAtTime(n, C)
                        }
                        c._startFadeInterval(y, e, n, o, _[s], typeof u == "undefined")
                    }
                }
                return c
            }, _startFadeInterval: function (e, n, o, u, c, _) {
                var s = this, y = n, S = o - n, C = Math.abs(S / .01), B = Math.max(4, C > 0 ? u / C : u),
                    O = Date.now();
                e._fadeTo = o, e._interval = setInterval(function () {
                    var P = (Date.now() - O) / u;
                    O = Date.now(), y += S * P, y = Math.round(y * 100) / 100, S < 0 ? y = Math.max(o, y) : y = Math.min(o, y), s._webAudio ? e._volume = y : s.volume(y, e._id, !0), _ && (s._volume = y), (o < n && y <= o || o > n && y >= o) && (clearInterval(e._interval), e._interval = null, e._fadeTo = null, s.volume(o, e._id), s._emit("fade", e._id))
                }, B)
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
                    for (var y = 0; y < u.length; y++) if (s = e._soundById(u[y]), s) {
                        e.playing(u[y]) && (s._rateSeek = e.seek(u[y]), s._playStart = e._webAudio ? a.ctx.currentTime : s._playStart), s._rate = o, e._webAudio && s._node && s._node.bufferSource ? s._node.bufferSource.playbackRate.setValueAtTime(o, a.ctx.currentTime) : s._node && (s._node.playbackRate = o);
                        var S = e.seek(u[y]), C = (e._sprite[s._sprite][0] + e._sprite[s._sprite][1]) / 1e3 - S,
                            B = C * 1e3 / Math.abs(s._rate);
                        (e._endTimers[u[y]] || !s._paused) && (e._clearTimer(u[y]), e._endTimers[u[y]] = setTimeout(e._ended.bind(e, s), B)), e._emit("rate", s._id)
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
                    var y = e.playing(u);
                    y && e.pause(u, !0), s._seek = o, s._ended = !1, e._clearTimer(u), !e._webAudio && s._node && !isNaN(s._node.duration) && (s._node.currentTime = o);
                    var S = function () {
                        y && e.play(u, !0), e._emit("seek", u)
                    };
                    if (y && !e._webAudio) {
                        var C = function () {
                            e._playLock ? setTimeout(C, 0) : S()
                        };
                        setTimeout(C, 0)
                    } else S()
                } else if (e._webAudio) {
                    var B = e.playing(u) ? a.ctx.currentTime - s._playStart : 0,
                        O = s._rateSeek ? s._rateSeek - s._seek : 0;
                    return s._seek + (O + B * Math.abs(s._rate))
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
                    var y = Object.keys(u);
                    for (_ = 0; _ < y.length; _++) y[_].indexOf("_on") === 0 && Array.isArray(u[y[_]]) && (u[y[_]] = [])
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
                }, g(_)
            }
        }, g = function (e) {
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
        }, w = function () {
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
        t.Howler = a, t.Howl = r, typeof ke != "undefined" ? (ke.HowlerGlobal = i, ke.Howler = a, ke.Howl = r, ke.Sound = l) : typeof window != "undefined" && (window.HowlerGlobal = i, window.Howler = a, window.Howl = r, window.Sound = l)
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
        }, HowlerGlobal.prototype.orientation = function (a, r, l, f, d, g) {
            var h = this;
            if (!h.ctx || !h.ctx.listener) return h;
            var v = h._orientation;
            if (r = typeof r != "number" ? v[1] : r, l = typeof l != "number" ? v[2] : l, f = typeof f != "number" ? v[3] : f, d = typeof d != "number" ? v[4] : d, g = typeof g != "number" ? v[5] : g, typeof a == "number") h._orientation = [a, r, l, f, d, g], typeof h.ctx.listener.forwardX != "undefined" ? (h.ctx.listener.forwardX.setTargetAtTime(a, Howler.ctx.currentTime, .1), h.ctx.listener.forwardY.setTargetAtTime(r, Howler.ctx.currentTime, .1), h.ctx.listener.forwardZ.setTargetAtTime(l, Howler.ctx.currentTime, .1), h.ctx.listener.upX.setTargetAtTime(f, Howler.ctx.currentTime, .1), h.ctx.listener.upY.setTargetAtTime(d, Howler.ctx.currentTime, .1), h.ctx.listener.upZ.setTargetAtTime(g, Howler.ctx.currentTime, .1)) : h.ctx.listener.setOrientation(a, r, l, f, d, g); else return v;
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
            for (var d = l._getSoundIds(r), g = 0; g < d.length; g++) {
                var h = l._soundById(d[g]);
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
            for (var g = d._getSoundIds(f), h = 0; h < g.length; h++) {
                var v = d._soundById(g[h]);
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
            for (var g = d._getSoundIds(f), h = 0; h < g.length; h++) {
                var v = d._soundById(g[h]);
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
            for (var g = a._getSoundIds(f), h = 0; h < g.length; h++) if (d = a._soundById(g[h]), d) {
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
                var w = d._panner;
                w || (d._pos || (d._pos = a._pos || [0, 0, -.5]), i(d, "spatial"), w = d._panner), w.coneInnerAngle = v.coneInnerAngle, w.coneOuterAngle = v.coneOuterAngle, w.coneOuterGain = v.coneOuterGain, w.distanceModel = v.distanceModel, w.maxDistance = v.maxDistance, w.refDistance = v.refDistance, w.rolloffFactor = v.rolloffFactor, w.panningModel = v.panningModel
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
})(be);
var ia = "/liars-bar/assets/A.44817c21.png", ua = "/liars-bar/assets/K.fefbd9f4.png",
    sa = "/liars-bar/assets/Q.1dcde64f.png", da = "/liars-bar/assets/avatar.5882cb90.png",
    ca = "/liars-bar/assets/winner.eb1ebd56.png", fa = "/liars-bar/assets/revolver-spin.8c06f4d1.mp3",
    _a = "/liars-bar/assets/revolver-cocking.a6ae419d.mp3", va = "/liars-bar/assets/revolver-shot.fe3d91cf.mp3",
    ma = "/liars-bar/assets/cards-shuffling.ee9c4251.mp3", pa = "/liars-bar/assets/heartbeat-loop.e34e3272.mp3";
const ha = {class: "full-width q-pa-md"}, ga = {class: "shuffle-container"},
    ya = {key: 0, class: "text-h5 text-center"}, ba = {key: 1, class: "text-h5 text-center"},
    wa = {class: "cards-container"}, Aa = ["src", "alt"], xa = {class: "text-h5 text-center"},
    ka = {class: "player-layout"}, Sa = ["src"], Ta = ["onClick"], Ca = ["src"], Ma = {class: "text-h5 q-mb-md"},
    Ea = {key: 1, class: "overlay-shuffle"}, Pa = Object.assign({name: "IndexPage"}, {
        __name: "IndexPage", props: ["soundEnabled"], setup(t) {
            const i = {ACE: ia, KING: ua, QUEEN: sa}, a = {
                    ACE: "background-color: #eb9a58",
                    KING: "background-color: #be483f",
                    QUEEN: "background-color: #a20f8f"
                }, r = L(["KING", "QUEEN", "ACE", "KING", "QUEEN", "ACE", "KING", "QUEEN", "ACE"]), l = L(-1), f = t, d = L(!1),
                g = L(!1), h = L(!1), v = L(!0);
            let w = L(""), e = L("");
            const n = () => {
                    w.value = "", f.soundEnabled && S.play();
                    const T = 2e3, p = 100;
                    let M = 0;
                    r.value = ["KING", "QUEEN", "ACE", "KING", "QUEEN", "ACE", "KING", "QUEEN", "ACE"], l.value = -1;
                    const j = setInterval(() => {
                        r.value = r.value.sort(() => Math.random() - .5), M += p, M >= T && (clearInterval(j), o())
                    }, p)
                }, o = () => {
                    l.value = Math.floor(Math.random() * 3), _.value = r.value[l.value], c.value = "selecting", w.value = _.value, e.value = a[w.value] || "background-color: #3d2676"
                }, u = sn(), c = L("initial"), _ = L(null), s = L([{
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
                y = q(() => u.screen.lt.sm ? ["top-center", "middle-left", "middle-right", "bottom-center"] : ["top", "left", "right", "bottom"]),
                S = new be.Howl({src: [ma]}), C = new be.Howl({src: [_a]}), B = new be.Howl({src: [fa]}),
                O = new be.Howl({src: [va]}), P = new be.Howl({src: [pa]}), $ = L(null), m = T => i[T] || null, b = T => da,
                k = L(ca), A = () => {
                    c.value = "selecting", v.value = !0, n()
                }, F = () => {
                    c.value = "playing", f.soundEnabled && v.value && (B.play(), v.value = !1)
                }, E = T => {
                    s.value.forEach((p, M) => {
                        p.isSelected = M === T && p.isAlive
                    })
                }, K = (T, p, M) => {
                    let j = 0;
                    const Z = () => {
                        j < T ? (P.play(), j++, setTimeout(Z, p)) : M ? O.play() : C.play()
                    };
                    Z()
                }, R = T => {
                    T.animationName === "flashRed" && (h.value = !1)
                }, G = () => {
                    const T = s.value.find(z => z.isSelected);
                    if (!T) {
                        u.notify({
                            color: "warning",
                            position: "top",
                            message: "\u8ACB\u5148\u9078\u64C7\u4E00\u500B\u73A9\u5BB6",
                            icon: "warning"
                        }, 1500);
                        return
                    }
                    d.value = !0;
                    const p = ++T.shotCount === T.bulletPosition;
                    f.soundEnabled && K(3, 1e3);
                    const M = p ? `${T.name} \u88AB\u6DD8\u6C70\u4E86\uFF01` : `${T.name} \u5016\u5B58\u4E86\uFF01`,
                        j = p ? "negative" : "info", Z = p ? "sentiment_very_dissatisfied" : "sentiment_satisfied";
                    setTimeout(() => {
                        T.isSelected = !1, p ? (O.play(), T.isAlive = !1, x()) : C.play(), u.notify({
                            color: j,
                            message: M,
                            position: "top",
                            icon: Z
                        }), d.value = !1, V(), c.value !== "gameOver" && (g.value = !0, setTimeout(() => {
                            _.value = null, c.value = "selecting", n(), g.value = !1
                        }, 2e3))
                    }, 3e3)
                }, x = () => {
                    const T = document.querySelector("body");
                    T.classList.add("screen-shake"), h.value = !0, setTimeout(() => {
                        T.classList.remove("screen-shake")
                    }, 500), setTimeout(() => {
                        h.value = !1
                    }, 1500)
                }, V = () => {
                    const T = s.value.filter(p => p.isAlive);
                    T.length === 1 && ($.value = {
                        ...T[0],
                        index: s.value.findIndex(p => p.id === T[0].id)
                    }, c.value = "gameOver")
                }, Q = () => {
                    $.value = null, c.value = "initial", _.value = null, v.value = !0, w.value = "", s.value.forEach(T => {
                        T.isAlive = !0, T.shotCount = 0, T.isSelected = !1, T.bulletPosition = Math.floor(Math.random() * 6) + 1
                    })
                };
            return (T, p) => (J(), ne(Ee, null, [N(la, {class: "flex flex-center bg-grey-2"}, {
                default: W(() => [I("div", ha, [N(ce, {
                    appear: "",
                    "enter-active-class": "animated zoomIn",
                    "leave-active-class": "animated zoomOut"
                }, {
                    default: W(() => [c.value === "initial" ? (J(), ge(xe, {
                        key: 0,
                        flat: "",
                        bordered: "",
                        class: "my-card q-ma-md shadow-5"
                    }, {
                        default: W(() => [N(ae, {class: "bg-primary text-white"}, {
                            default: W(() => p[0] || (p[0] = [I("div", {class: "text-h5 text-center"}, "Welcome to Liar's Bar", -1)])),
                            _: 1
                        }), N(ae, {class: "q-pt-lg", style: {"max-height": "300px", "overflow-y": "auto"}}, {
                            default: W(() => p[1] || (p[1] = [I("p", {class: "text-body1"}, "\u904A\u6232\u898F\u5247\uFF1A", -1), I("ul", null, [I("li", null, [I("strong", null, "\u724C\u7D44\uFF1A"), I("ul", null, [I("li", null, "20 \u5F35\u724C\uFF086 \u5F35 K\u30016 \u5F35 Q\u30016 \u5F35 A\u30012 \u5F35 Joker\uFF09"), I("li", null, "Joker \u53EF\u4EE5\u7576\u4EFB\u610F\u724C\u578B")])]), I("li", null, [I("strong", null, "\u73A9\u5BB6\u4EBA\u6578\uFF1A4 \u4F4D")]), I("li", null, [I("strong", null, "\u6BCF\u5C40\u958B\u59CB\uFF1A"), I("ul", null, [I("li", null, "\u96A8\u6A5F\u9078\u64C7 K/Q/A \u4F5C\u70BA\u76EE\u6A19\u724C\u578B"), I("li", null, "\u6BCF\u4F4D\u73A9\u5BB6\u624B\u4E2D\u6709 5 \u5F35\u724C")])])], -1), I("p", {class: "text-body1"}, "\u904A\u6232\u6D41\u7A0B\uFF1A", -1), I("ul", null, [I("li", null, "\u73A9\u5BB6\u8F2A\u6D41\u51FA\u724C\uFF0C\u8072\u660E\u81EA\u5DF1\u51FA\u7684\u662F\u76EE\u6A19\u724C\u578B\u3002"), I("li", null, [ie("\u4E0B\u4E00\u4F4D\u73A9\u5BB6\u53EF\u4EE5\u9078\u64C7\u8AAA "), I("b", null, "liar"), ie(" \u6216\u7E7C\u7E8C\u51FA\u724C\u3002")]), I("li", null, [ie("\u5982\u679C\u8AAA "), I("b", null, "liar"), ie("\uFF0C\u6AA2\u67E5\u524D\u4E00\u4F4D\u73A9\u5BB6\u7684\u724C\uFF1A")]), I("ul", null, [I("li", null, "\u5982\u679C\u8A72\u73A9\u5BB6\u8AAA\u8B0A\uFF0C\u8AAA\u8B0A\u73A9\u5BB6\u8981\u9032\u884C\u5DE6\u8F2A\u624B\u69CD\u904A\u6232\u3002"), I("li", null, [ie("\u5982\u679C\u8A72\u73A9\u5BB6\u6C92\u8AAA\u8B0A\uFF0C\u8AAA "), I("b", null, "liar"), ie(" \u7684\u73A9\u5BB6\u8981\u9032\u884C\u5DE6\u8F2A\u624B\u69CD\u904A\u6232\u3002")])]), I("li", null, "\u958B\u5B8C\u69CD\u5F8C\uFF0C\u5C07\u91CD\u65B0\u96A8\u6A5F\u9078\u64C7\u76EE\u6A19\u724C\u578B\u3002"), I("li", null, "\u76F4\u5230\u5269\u4E0B 1 \u540D\u73A9\u5BB6\uFF0C\u904A\u6232\u7D50\u675F\u3002")], -1), I("p", {class: "text-body1"}, "\u5DE6\u8F2A\u624B\u69CD\u898F\u5247\uFF1A", -1), I("ul", null, [I("li", null, "\u624B\u69CD\u6709 6 \u500B\u819B\u5BA4\uFF0C\u88E1\u9762\u6709 1 \u679A\u5B50\u5F48\u3002"), I("li", null, "\u6BCF\u4F4D\u73A9\u5BB6\u958B\u59CB\u6642\u7684\u547D\u4E2D\u7387\u70BA 0/6\u3002\u82E5\u9019\u56DE\u5408\u958B\u69CD\u672A\u5C04\u4E2D\uFF0C\u4E0B\u4E00\u56DE\u5408\u547D\u4E2D\u7387\u8B8A\u70BA 1/6\uFF0C\u547D\u4E2D\u7387\u6703\u9010\u6F38\u589E\u52A0\u3002"), I("li", null, "\u88AB\u5C04\u4E2D\u7684\u73A9\u5BB6\u9000\u51FA\u7576\u524D\u56DE\u5408\u3002")], -1)])),
                            _: 1
                        }), N(Ge, {
                            vertical: "",
                            align: "center",
                            class: "q-py-md"
                        }, {
                            default: W(() => [N(fe, {
                                color: "secondary",
                                label: "\u958B\u59CB\u65B0\u904A\u6232",
                                class: "full-width q-py-sm text-weight-bold",
                                size: "lg",
                                onClick: A
                            })]), _: 1
                        })]), _: 1
                    })) : ue("", !0)]), _: 1
                }), N(ce, {
                    appear: "",
                    "enter-active-class": "animated fadeIn",
                    "leave-active-class": "animated fadeOut"
                }, {
                    default: W(() => [c.value === "shuffling" ? (J(), ge(xe, {
                        key: 0,
                        flat: "",
                        bordered: "",
                        class: "my-card q-ma-md shadow-5"
                    }, {
                        default: W(() => [N(ae, {class: "bg-secondary text-white"}, {
                            default: W(() => p[2] || (p[2] = [I("div", {class: "text-h5 text-center"}, "\u6D17\u724C\u4E2D", -1)])),
                            _: 1
                        }), N(ae, {class: "text-center q-pt-lg"}, {
                            default: W(() => [I("div", ga, [(J(), ne(Ee, null, Le(20, M => I("div", {
                                key: M,
                                class: "card-back",
                                style: $e({transform: `rotate(${Math.random() * 360}deg) translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px)`})
                            }, null, 4)), 64))])]), _: 1
                        })]), _: 1
                    })) : ue("", !0)]), _: 1
                }), N(ce, {
                    appear: "",
                    "enter-active-class": "animated fadeIn",
                    "leave-active-class": "animated fadeOut"
                }, {
                    default: W(() => [c.value === "selecting" ? (J(), ge(xe, {
                        key: 0,
                        flat: "",
                        bordered: "",
                        class: "my-card q-ma-md shadow-5"
                    }, {
                        default: W(() => [N(ae, {class: "bg-secondary text-white"}, {
                            default: W(() => [ye(w) ? (J(), ne("div", ba, Ae(ye(w)) + "'S TABLE", 1)) : (J(), ne("div", ya, "\u9078\u64C7\u76EE\u6A19\u724C"))]),
                            _: 1
                        }), N(ae, {class: "text-center q-pt-lg"}, {
                            default: W(() => [I("div", wa, [N(ot, {
                                name: "card-shuffle",
                                tag: "div",
                                class: "cards-deck"
                            }, {
                                default: W(() => [(J(!0), ne(Ee, null, Le(r.value, (M, j) => (J(), ne("div", {
                                    key: M + j,
                                    class: De(["card", {"card-selected": j === l.value}])
                                }, [I("img", {src: m(M), alt: M, class: "card-image"}, null, 8, Aa)], 2))), 128))]), _: 1
                            })]), _.value ? (J(), ge(fe, {
                                key: 0,
                                color: "primary",
                                label: "\u78BA\u8A8D\u76EE\u6A19\u724C\u578B",
                                class: "q-mt-md full-width",
                                onClick: F
                            })) : ue("", !0)]), _: 1
                        })]), _: 1
                    })) : ue("", !0)]), _: 1
                }), N(ce, {appear: "", "enter-active-class": "animated fadeIn", "leave-active-class": "animated fadeOut"}, {
                    default: W(() => [c.value === "playing" ? (J(), ge(xe, {
                        key: 0,
                        flat: "",
                        bordered: "",
                        class: "my-card q-ma-md shadow-5"
                    }, {
                        default: W(() => [N(ae, {
                            class: "text-white",
                            style: $e(ye(e))
                        }, {
                            default: W(() => [I("div", xa, Ae(_.value) + "'S TABLE ", 1)]),
                            _: 1
                        }, 8, ["style"]), N(ae, {class: "bg-grey-4"}, {
                            default: W(() => [I("div", ka, [N(ot, {name: "player-move"}, {
                                default: W(() => [(J(!0), ne(Ee, null, Le(s.value, (M, j) => (J(), ne("div", {
                                    key: M.id,
                                    class: De(["player-wrapper", y.value[j]])
                                }, [N(fe, {
                                    round: "",
                                    size: ye(u).screen.lt.sm ? "16px" : "20px",
                                    color: M.isAlive ? M.isSelected ? "red-10" : "dark" : "grey",
                                    disable: !M.isAlive,
                                    onClick: Z => E(j),
                                    class: "shadow-5"
                                }, {
                                    default: W(() => [N(rt, {size: ye(u).screen.lt.sm ? "30px" : "40px"}, {
                                        default: W(() => [I("img", {src: b(j)}, null, 8, Sa)]),
                                        _: 2
                                    }, 1032, ["size"])]), _: 2
                                }, 1032, ["size", "color", "disable", "onClick"]), N(fn, {
                                    color: "red",
                                    floating: "",
                                    rounded: ""
                                }, {
                                    default: W(() => [ie(Ae(M.shotCount) + "/6 ", 1)]),
                                    _: 2
                                }, 1024), I("div", {
                                    class: "player-name q-mt-sm",
                                    onClick: Z => E(j)
                                }, [N(ra, {
                                    modelValue: M.name,
                                    "onUpdate:modelValue": Z => M.name = Z,
                                    "auto-save": ""
                                }, {
                                    default: W(Z => [N(On, {
                                        modelValue: Z.value,
                                        "onUpdate:modelValue": z => Z.value = z,
                                        dense: "",
                                        autofocus: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])]), _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue"]), ie(" " + Ae(M.name), 1)], 8, Ta)], 2))), 128))]),
                                _: 1
                            })])]), _: 1
                        }), N(Ge, {
                            align: "center",
                            class: "q-pa-md",
                            style: $e(ye(e))
                        }, {
                            default: W(() => [N(fe, {
                                style: {"background-color": "#9c584b", color: "#f2f2f1"},
                                icon: "fa fa-gun",
                                onClick: G,
                                class: "full-width q-py-sm",
                                size: "lg"
                            })]), _: 1
                        }, 8, ["style"])]), _: 1
                    })) : ue("", !0)]), _: 1
                }), N(ce, {
                    appear: "",
                    "enter-active-class": "animated bounceIn",
                    "leave-active-class": "animated bounceOut"
                }, {
                    default: W(() => [c.value === "gameOver" ? (J(), ge(xe, {
                        key: 0,
                        flat: "",
                        bordered: "",
                        class: "my-card q-ma-md shadow-5"
                    }, {
                        default: W(() => [N(ae, {class: "bg-positive text-white"}, {
                            default: W(() => p[3] || (p[3] = [I("div", {class: "text-h4 text-center"}, "\u904A\u6232\u7D50\u675F\uFF01", -1)])),
                            _: 1
                        }), N(ae, {class: "text-center q-pt-lg"}, {
                            default: W(() => [N(rt, {
                                size: "100px",
                                class: "q-mb-md"
                            }, {
                                default: W(() => [I("img", {src: k.value}, null, 8, Ca)]),
                                _: 1
                            }), I("div", Ma, "\u7372\u52DD\u8005: " + Ae($.value.name), 1)]), _: 1
                        }), N(Ge, {align: "center", class: "q-pa-md"}, {
                            default: W(() => [N(fe, {
                                color: "primary",
                                label: "\u518D\u73A9\u4E00\u5C40",
                                onClick: Q,
                                class: "full-width q-py-sm",
                                size: "lg"
                            })]), _: 1
                        })]), _: 1
                    })) : ue("", !0)]), _: 1
                }), d.value ? (J(), ne("div", {
                    key: 0,
                    class: De(["overlay", {"overlay-flash": h.value}]),
                    onAnimationend: R
                }, null, 34)) : ue("", !0), g.value ? (J(), ne("div", Ea)) : ue("", !0)])]), _: 1
            }), N(dn, {onResetGame: Q})], 64))
        }
    });
export {Pa as default};
