const Jl = function () {
    const t = document.createElement("link").relList;
    return t && t.supports && t.supports("modulepreload") ? "modulepreload" : "preload"
}(), Ls = {}, Yl = "/liars-bar/", Nn = function (t, n) {
    return !n || n.length === 0 ? t() : Promise.all(n.map(r => {
        if (r = `${Yl}${r}`, r in Ls) return;
        Ls[r] = !0;
        const s = r.endsWith(".css"), i = s ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${r}"]${i}`)) return;
        const o = document.createElement("link");
        if (o.rel = s ? "stylesheet" : Jl, s || (o.as = "script", o.crossOrigin = ""), o.href = r, document.head.appendChild(o), s) return new Promise((l, a) => {
            o.addEventListener("load", l), o.addEventListener("error", () => a(new Error(`Unable to preload CSS for ${r}`)))
        })
    })).then(() => t())
};/**
 * @vue/shared v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **//*! #__NO_SIDE_EFFECTS__ */
function rs(e) {
    const t = Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return n => n in t
}

const ae = {}, zt = [], He = () => {
    }, Xl = () => !1,
    tr = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    ss = e => e.startsWith("onUpdate:"), ge = Object.assign, is = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    }, Zl = Object.prototype.hasOwnProperty, se = (e, t) => Zl.call(e, t), z = Array.isArray,
    Ut = e => nr(e) === "[object Map]", Qi = e => nr(e) === "[object Set]", G = e => typeof e == "function",
    pe = e => typeof e == "string", bt = e => typeof e == "symbol", de = e => e !== null && typeof e == "object",
    Ji = e => (de(e) || G(e)) && G(e.then) && G(e.catch), Yi = Object.prototype.toString, nr = e => Yi.call(e),
    ea = e => nr(e).slice(8, -1), Xi = e => nr(e) === "[object Object]",
    os = e => pe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    on = rs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    rr = e => {
        const t = Object.create(null);
        return n => t[n] || (t[n] = e(n))
    }, ta = /-(\w)/g, je = rr(e => e.replace(ta, (t, n) => n ? n.toUpperCase() : "")), na = /\B([A-Z])/g,
    Lt = rr(e => e.replace(na, "-$1").toLowerCase()), sr = rr(e => e.charAt(0).toUpperCase() + e.slice(1)),
    gr = rr(e => e ? `on${sr(e)}` : ""), mt = (e, t) => !Object.is(e, t), mr = (e, ...t) => {
        for (let n = 0; n < e.length; n++) e[n](...t)
    }, Zi = (e, t, n, r = !1) => {
        Object.defineProperty(e, t, {configurable: !0, enumerable: !1, writable: r, value: n})
    }, ra = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    }, sa = e => {
        const t = pe(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t
    };
let Ms;
const ir = () => Ms || (Ms = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});

function ls(e) {
    if (z(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n], s = pe(r) ? aa(r) : ls(r);
            if (s) for (const i in s) t[i] = s[i]
        }
        return t
    } else if (pe(e) || de(e)) return e
}

const ia = /;(?![^(]*\))/g, oa = /:([^]+)/, la = /\/\*[^]*?\*\//g;

function aa(e) {
    const t = {};
    return e.replace(la, "").split(ia).forEach(n => {
        if (n) {
            const r = n.split(oa);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }), t
}

function as(e) {
    let t = "";
    if (pe(e)) t = e; else if (z(e)) for (let n = 0; n < e.length; n++) {
        const r = as(e[n]);
        r && (t += r + " ")
    } else if (de(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim()
}

const ca = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ua = rs(ca);

function eo(e) {
    return !!e || e === ""
}

const to = e => !!(e && e.__v_isRef === !0),
    fa = e => pe(e) ? e : e == null ? "" : z(e) || de(e) && (e.toString === Yi || !G(e.toString)) ? to(e) ? fa(e.value) : JSON.stringify(e, no, 2) : String(e),
    no = (e, t) => to(t) ? no(e, t.value) : Ut(t) ? {[`Map(${t.size})`]: [...t.entries()].reduce((n, [r, s], i) => (n[vr(r, i) + " =>"] = s, n), {})} : Qi(t) ? {[`Set(${t.size})`]: [...t.values()].map(n => vr(n))} : bt(t) ? vr(t) : de(t) && !z(t) && !Xi(t) ? String(t) : t,
    vr = (e, t = "") => {
        var n;
        return bt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
    };
/**
 * @vue/reactivity v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/let Le;

class ro {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Le, !t && Le && (this.index = (Le.scopes || (Le.scopes = [])).push(this) - 1)
    }

    get active() {
        return this._active
    }

    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
            for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
        }
    }

    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
            for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
        }
    }

    run(t) {
        if (this._active) {
            const n = Le;
            try {
                return Le = this, t()
            } finally {
                Le = n
            }
        }
    }

    on() {
        Le = this
    }

    off() {
        Le = this.parent
    }

    stop(t) {
        if (this._active) {
            let n, r;
            for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
            for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
            if (this.scopes) for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const s = this.parent.scopes.pop();
                s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index)
            }
            this.parent = void 0, this._active = !1
        }
    }
}

function eh(e) {
    return new ro(e)
}

function da() {
    return Le
}

let fe;
const br = new WeakSet;

class so {
    constructor(t) {
        this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Le && Le.active && Le.effects.push(this)
    }

    pause() {
        this.flags |= 64
    }

    resume() {
        this.flags & 64 && (this.flags &= -65, br.has(this) && (br.delete(this), this.trigger()))
    }

    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || oo(this)
    }

    run() {
        if (!(this.flags & 1)) return this.fn();
        this.flags |= 2, Is(this), lo(this);
        const t = fe, n = ze;
        fe = this, ze = !0;
        try {
            return this.fn()
        } finally {
            ao(this), fe = t, ze = n, this.flags &= -3
        }
    }

    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep) fs(t);
            this.deps = this.depsTail = void 0, Is(this), this.onStop && this.onStop(), this.flags &= -2
        }
    }

    trigger() {
        this.flags & 64 ? br.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }

    runIfDirty() {
        Dr(this) && this.run()
    }

    get dirty() {
        return Dr(this)
    }
}

let io = 0, ln, an;

function oo(e, t = !1) {
    if (e.flags |= 8, t) {
        e.next = an, an = e;
        return
    }
    e.next = ln, ln = e
}

function cs() {
    io++
}

function us() {
    if (--io > 0) return;
    if (an) {
        let t = an;
        for (an = void 0; t;) {
            const n = t.next;
            t.next = void 0, t.flags &= -9, t = n
        }
    }
    let e;
    for (; ln;) {
        let t = ln;
        for (ln = void 0; t;) {
            const n = t.next;
            if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
                t.trigger()
            } catch (r) {
                e || (e = r)
            }
            t = n
        }
    }
    if (e) throw e
}

function lo(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t
}

function ao(e) {
    let t, n = e.depsTail, r = n;
    for (; r;) {
        const s = r.prevDep;
        r.version === -1 ? (r === n && (n = s), fs(r), ha(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s
    }
    e.deps = t, e.depsTail = n
}

function Dr(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (co(t.dep.computed) || t.dep.version !== t.version)) return !0;
    return !!e._dirty
}

function co(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === gn)) return;
    e.globalVersion = gn;
    const t = e.dep;
    if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Dr(e)) {
        e.flags &= -3;
        return
    }
    const n = fe, r = ze;
    fe = e, ze = !0;
    try {
        lo(e);
        const s = e.fn(e._value);
        (t.version === 0 || mt(s, e._value)) && (e._value = s, t.version++)
    } catch (s) {
        throw t.version++, s
    } finally {
        fe = n, ze = r, ao(e), e.flags &= -3
    }
}

function fs(e, t = !1) {
    const {dep: n, prevSub: r, nextSub: s} = e;
    if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
        n.computed.flags &= -5;
        for (let i = n.computed.deps; i; i = i.nextDep) fs(i, !0)
    }
    !t && !--n.sc && n.map && n.map.delete(n.key)
}

function ha(e) {
    const {prevDep: t, nextDep: n} = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0)
}

let ze = !0;
const uo = [];

function yt() {
    uo.push(ze), ze = !1
}

function _t() {
    const e = uo.pop();
    ze = e === void 0 ? !0 : e
}

function Is(e) {
    const {cleanup: t} = e;
    if (e.cleanup = void 0, t) {
        const n = fe;
        fe = void 0;
        try {
            t()
        } finally {
            fe = n
        }
    }
}

let gn = 0;

class pa {
    constructor(t, n) {
        this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}

class ds {
    constructor(t) {
        this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0
    }

    track(t) {
        if (!fe || !ze || fe === this.computed) return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== fe) n = this.activeLink = new pa(fe, this), fe.deps ? (n.prevDep = fe.depsTail, fe.depsTail.nextDep = n, fe.depsTail = n) : fe.deps = fe.depsTail = n, fo(n); else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
            const r = n.nextDep;
            r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = fe.depsTail, n.nextDep = void 0, fe.depsTail.nextDep = n, fe.depsTail = n, fe.deps === n && (fe.deps = r)
        }
        return n
    }

    trigger(t) {
        this.version++, gn++, this.notify(t)
    }

    notify(t) {
        cs();
        try {
            for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
        } finally {
            us()
        }
    }
}

function fo(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let r = t.deps; r; r = r.nextDep) fo(r)
        }
        const n = e.dep.subs;
        n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e
    }
}

const Nr = new WeakMap, Rt = Symbol(""), jr = Symbol(""), mn = Symbol("");

function ye(e, t, n) {
    if (ze && fe) {
        let r = Nr.get(e);
        r || Nr.set(e, r = new Map);
        let s = r.get(n);
        s || (r.set(n, s = new ds), s.map = r, s.key = n), s.track()
    }
}

function rt(e, t, n, r, s, i) {
    const o = Nr.get(e);
    if (!o) {
        gn++;
        return
    }
    const l = a => {
        a && a.trigger()
    };
    if (cs(), t === "clear") o.forEach(l); else {
        const a = z(e), u = a && os(n);
        if (a && n === "length") {
            const c = Number(r);
            o.forEach((f, h) => {
                (h === "length" || h === mn || !bt(h) && h >= c) && l(f)
            })
        } else switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), u && l(o.get(mn)), t) {
            case"add":
                a ? u && l(o.get("length")) : (l(o.get(Rt)), Ut(e) && l(o.get(jr)));
                break;
            case"delete":
                a || (l(o.get(Rt)), Ut(e) && l(o.get(jr)));
                break;
            case"set":
                Ut(e) && l(o.get(Rt));
                break
        }
    }
    us()
}

function $t(e) {
    const t = te(e);
    return t === e ? t : (ye(t, "iterate", mn), Ne(e) ? t : t.map(_e))
}

function or(e) {
    return ye(e = te(e), "iterate", mn), e
}

const ga = {
    __proto__: null, [Symbol.iterator]() {
        return yr(this, Symbol.iterator, _e)
    }, concat(...e) {
        return $t(this).concat(...e.map(t => z(t) ? $t(t) : t))
    }, entries() {
        return yr(this, "entries", e => (e[1] = _e(e[1]), e))
    }, every(e, t) {
        return Ze(this, "every", e, t, void 0, arguments)
    }, filter(e, t) {
        return Ze(this, "filter", e, t, n => n.map(_e), arguments)
    }, find(e, t) {
        return Ze(this, "find", e, t, _e, arguments)
    }, findIndex(e, t) {
        return Ze(this, "findIndex", e, t, void 0, arguments)
    }, findLast(e, t) {
        return Ze(this, "findLast", e, t, _e, arguments)
    }, findLastIndex(e, t) {
        return Ze(this, "findLastIndex", e, t, void 0, arguments)
    }, forEach(e, t) {
        return Ze(this, "forEach", e, t, void 0, arguments)
    }, includes(...e) {
        return _r(this, "includes", e)
    }, indexOf(...e) {
        return _r(this, "indexOf", e)
    }, join(e) {
        return $t(this).join(e)
    }, lastIndexOf(...e) {
        return _r(this, "lastIndexOf", e)
    }, map(e, t) {
        return Ze(this, "map", e, t, void 0, arguments)
    }, pop() {
        return Zt(this, "pop")
    }, push(...e) {
        return Zt(this, "push", e)
    }, reduce(e, ...t) {
        return $s(this, "reduce", e, t)
    }, reduceRight(e, ...t) {
        return $s(this, "reduceRight", e, t)
    }, shift() {
        return Zt(this, "shift")
    }, some(e, t) {
        return Ze(this, "some", e, t, void 0, arguments)
    }, splice(...e) {
        return Zt(this, "splice", e)
    }, toReversed() {
        return $t(this).toReversed()
    }, toSorted(e) {
        return $t(this).toSorted(e)
    }, toSpliced(...e) {
        return $t(this).toSpliced(...e)
    }, unshift(...e) {
        return Zt(this, "unshift", e)
    }, values() {
        return yr(this, "values", _e)
    }
};

function yr(e, t, n) {
    const r = or(e), s = r[t]();
    return r !== e && !Ne(e) && (s._next = s.next, s.next = () => {
        const i = s._next();
        return i.value && (i.value = n(i.value)), i
    }), s
}

const ma = Array.prototype;

function Ze(e, t, n, r, s, i) {
    const o = or(e), l = o !== e && !Ne(e), a = o[t];
    if (a !== ma[t]) {
        const f = a.apply(e, i);
        return l ? _e(f) : f
    }
    let u = n;
    o !== e && (l ? u = function (f, h) {
        return n.call(this, _e(f), h, e)
    } : n.length > 2 && (u = function (f, h) {
        return n.call(this, f, h, e)
    }));
    const c = a.call(o, u, r);
    return l && s ? s(c) : c
}

function $s(e, t, n, r) {
    const s = or(e);
    let i = n;
    return s !== e && (Ne(e) ? n.length > 3 && (i = function (o, l, a) {
        return n.call(this, o, l, a, e)
    }) : i = function (o, l, a) {
        return n.call(this, o, _e(l), a, e)
    }), s[t](i, ...r)
}

function _r(e, t, n) {
    const r = te(e);
    ye(r, "iterate", mn);
    const s = r[t](...n);
    return (s === -1 || s === !1) && gs(n[0]) ? (n[0] = te(n[0]), r[t](...n)) : s
}

function Zt(e, t, n = []) {
    yt(), cs();
    const r = te(e)[t].apply(e, n);
    return us(), _t(), r
}

const va = rs("__proto__,__v_isRef,__isVue"),
    ho = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(bt));

function ba(e) {
    bt(e) || (e = String(e));
    const t = te(this);
    return ye(t, "has", e), t.hasOwnProperty(e)
}

class po {
    constructor(t = !1, n = !1) {
        this._isReadonly = t, this._isShallow = n
    }

    get(t, n, r) {
        const s = this._isReadonly, i = this._isShallow;
        if (n === "__v_isReactive") return !s;
        if (n === "__v_isReadonly") return s;
        if (n === "__v_isShallow") return i;
        if (n === "__v_raw") return r === (s ? i ? Ta : bo : i ? vo : mo).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
        const o = z(t);
        if (!s) {
            let a;
            if (o && (a = ga[n])) return a;
            if (n === "hasOwnProperty") return ba
        }
        const l = Reflect.get(t, n, we(t) ? t : r);
        return (bt(n) ? ho.has(n) : va(n)) || (s || ye(t, "get", n), i) ? l : we(l) ? o && os(n) ? l : l.value : de(l) ? s ? _o(l) : Yt(l) : l
    }
}

class go extends po {
    constructor(t = !1) {
        super(!1, t)
    }

    set(t, n, r, s) {
        let i = t[n];
        if (!this._isShallow) {
            const a = Tt(i);
            if (!Ne(r) && !Tt(r) && (i = te(i), r = te(r)), !z(t) && we(i) && !we(r)) return a ? !1 : (i.value = r, !0)
        }
        const o = z(t) && os(n) ? Number(n) < t.length : se(t, n), l = Reflect.set(t, n, r, we(t) ? t : s);
        return t === te(s) && (o ? mt(r, i) && rt(t, "set", n, r) : rt(t, "add", n, r)), l
    }

    deleteProperty(t, n) {
        const r = se(t, n);
        t[n];
        const s = Reflect.deleteProperty(t, n);
        return s && r && rt(t, "delete", n, void 0), s
    }

    has(t, n) {
        const r = Reflect.has(t, n);
        return (!bt(n) || !ho.has(n)) && ye(t, "has", n), r
    }

    ownKeys(t) {
        return ye(t, "iterate", z(t) ? "length" : Rt), Reflect.ownKeys(t)
    }
}

class ya extends po {
    constructor(t = !1) {
        super(!0, t)
    }

    set(t, n) {
        return !0
    }

    deleteProperty(t, n) {
        return !0
    }
}

const _a = new go, wa = new ya, xa = new go(!0);
const Br = e => e, Ln = e => Reflect.getPrototypeOf(e);

function Sa(e, t, n) {
    return function (...r) {
        const s = this.__v_raw, i = te(s), o = Ut(i), l = e === "entries" || e === Symbol.iterator && o,
            a = e === "keys" && o, u = s[e](...r), c = n ? Br : t ? qr : _e;
        return !t && ye(i, "iterate", a ? jr : Rt), {
            next() {
                const {value: f, done: h} = u.next();
                return h ? {value: f, done: h} : {value: l ? [c(f[0]), c(f[1])] : c(f), done: h}
            }, [Symbol.iterator]() {
                return this
            }
        }
    }
}

function Mn(e) {
    return function (...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}

function Ca(e, t) {
    const n = {
        get(s) {
            const i = this.__v_raw, o = te(i), l = te(s);
            e || (mt(s, l) && ye(o, "get", s), ye(o, "get", l));
            const {has: a} = Ln(o), u = t ? Br : e ? qr : _e;
            if (a.call(o, s)) return u(i.get(s));
            if (a.call(o, l)) return u(i.get(l));
            i !== o && i.get(s)
        }, get size() {
            const s = this.__v_raw;
            return !e && ye(te(s), "iterate", Rt), Reflect.get(s, "size", s)
        }, has(s) {
            const i = this.__v_raw, o = te(i), l = te(s);
            return e || (mt(s, l) && ye(o, "has", s), ye(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l)
        }, forEach(s, i) {
            const o = this, l = o.__v_raw, a = te(l), u = t ? Br : e ? qr : _e;
            return !e && ye(a, "iterate", Rt), l.forEach((c, f) => s.call(i, u(c), u(f), o))
        }
    };
    return ge(n, e ? {add: Mn("add"), set: Mn("set"), delete: Mn("delete"), clear: Mn("clear")} : {
        add(s) {
            !t && !Ne(s) && !Tt(s) && (s = te(s));
            const i = te(this);
            return Ln(i).has.call(i, s) || (i.add(s), rt(i, "add", s, s)), this
        }, set(s, i) {
            !t && !Ne(i) && !Tt(i) && (i = te(i));
            const o = te(this), {has: l, get: a} = Ln(o);
            let u = l.call(o, s);
            u || (s = te(s), u = l.call(o, s));
            const c = a.call(o, s);
            return o.set(s, i), u ? mt(i, c) && rt(o, "set", s, i) : rt(o, "add", s, i), this
        }, delete(s) {
            const i = te(this), {has: o, get: l} = Ln(i);
            let a = o.call(i, s);
            a || (s = te(s), a = o.call(i, s)), l && l.call(i, s);
            const u = i.delete(s);
            return a && rt(i, "delete", s, void 0), u
        }, clear() {
            const s = te(this), i = s.size !== 0, o = s.clear();
            return i && rt(s, "clear", void 0, void 0), o
        }
    }), ["keys", "values", "entries", Symbol.iterator].forEach(s => {
        n[s] = Sa(s, e, t)
    }), n
}

function hs(e, t) {
    const n = Ca(e, t);
    return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(se(n, s) && s in r ? n : r, s, i)
}

const Ea = {get: hs(!1, !1)}, Ra = {get: hs(!1, !0)}, Pa = {get: hs(!0, !1)};
const mo = new WeakMap, vo = new WeakMap, bo = new WeakMap, Ta = new WeakMap;

function Oa(e) {
    switch (e) {
        case"Object":
        case"Array":
            return 1;
        case"Map":
        case"Set":
        case"WeakMap":
        case"WeakSet":
            return 2;
        default:
            return 0
    }
}

function ka(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Oa(ea(e))
}

function Yt(e) {
    return Tt(e) ? e : ps(e, !1, _a, Ea, mo)
}

function yo(e) {
    return ps(e, !1, xa, Ra, vo)
}

function _o(e) {
    return ps(e, !0, wa, Pa, bo)
}

function ps(e, t, n, r, s) {
    if (!de(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const i = s.get(e);
    if (i) return i;
    const o = ka(e);
    if (o === 0) return e;
    const l = new Proxy(e, o === 2 ? r : n);
    return s.set(e, l), l
}

function Vt(e) {
    return Tt(e) ? Vt(e.__v_raw) : !!(e && e.__v_isReactive)
}

function Tt(e) {
    return !!(e && e.__v_isReadonly)
}

function Ne(e) {
    return !!(e && e.__v_isShallow)
}

function gs(e) {
    return e ? !!e.__v_raw : !1
}

function te(e) {
    const t = e && e.__v_raw;
    return t ? te(t) : e
}

function Rn(e) {
    return !se(e, "__v_skip") && Object.isExtensible(e) && Zi(e, "__v_skip", !0), e
}

const _e = e => de(e) ? Yt(e) : e, qr = e => de(e) ? _o(e) : e;

function we(e) {
    return e ? e.__v_isRef === !0 : !1
}

function vn(e) {
    return wo(e, !1)
}

function Aa(e) {
    return wo(e, !0)
}

function wo(e, t) {
    return we(e) ? e : new La(e, t)
}

class La {
    constructor(t, n) {
        this.dep = new ds, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : te(t), this._value = n ? t : _e(t), this.__v_isShallow = n
    }

    get value() {
        return this.dep.track(), this._value
    }

    set value(t) {
        const n = this._rawValue, r = this.__v_isShallow || Ne(t) || Tt(t);
        t = r ? t : te(t), mt(t, n) && (this._rawValue = t, this._value = r ? t : _e(t), this.dep.trigger())
    }
}

function Pt(e) {
    return we(e) ? e.value : e
}

const Ma = {
    get: (e, t, n) => t === "__v_raw" ? e : Pt(Reflect.get(e, t, n)), set: (e, t, n, r) => {
        const s = e[t];
        return we(s) && !we(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r)
    }
};

function xo(e) {
    return Vt(e) ? e : new Proxy(e, Ma)
}

class Ia {
    constructor(t, n, r) {
        this.fn = t, this.setter = n, this._value = void 0, this.dep = new ds(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = gn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r
    }

    notify() {
        if (this.flags |= 16, !(this.flags & 8) && fe !== this) return oo(this, !0), !0
    }

    get value() {
        const t = this.dep.track();
        return co(this), t && (t.version = this.dep.version), this._value
    }

    set value(t) {
        this.setter && this.setter(t)
    }
}

function $a(e, t, n = !1) {
    let r, s;
    return G(e) ? r = e : (r = e.get, s = e.set), new Ia(r, s, n)
}

const In = {}, Vn = new WeakMap;
let Ct;

function Da(e, t = !1, n = Ct) {
    if (n) {
        let r = Vn.get(n);
        r || Vn.set(n, r = []), r.push(e)
    }
}

function Na(e, t, n = ae) {
    const {immediate: r, deep: s, once: i, scheduler: o, augmentJob: l, call: a} = n,
        u = T => s ? T : Ne(T) || s === !1 || s === 0 ? st(T, 1) : st(T);
    let c, f, h, g, v = !1, _ = !1;
    if (we(e) ? (f = () => e.value, v = Ne(e)) : Vt(e) ? (f = () => u(e), v = !0) : z(e) ? (_ = !0, v = e.some(T => Vt(T) || Ne(T)), f = () => e.map(T => {
        if (we(T)) return T.value;
        if (Vt(T)) return u(T);
        if (G(T)) return a ? a(T, 2) : T()
    })) : G(e) ? t ? f = a ? () => a(e, 2) : e : f = () => {
        if (h) {
            yt();
            try {
                h()
            } finally {
                _t()
            }
        }
        const T = Ct;
        Ct = c;
        try {
            return a ? a(e, 3, [g]) : e(g)
        } finally {
            Ct = T
        }
    } : f = He, t && s) {
        const T = f, N = s === !0 ? 1 / 0 : s;
        f = () => st(T(), N)
    }
    const R = da(), P = () => {
        c.stop(), R && is(R.effects, c)
    };
    if (i && t) {
        const T = t;
        t = (...N) => {
            T(...N), P()
        }
    }
    let L = _ ? new Array(e.length).fill(In) : In;
    const $ = T => {
        if (!(!(c.flags & 1) || !c.dirty && !T)) if (t) {
            const N = c.run();
            if (s || v || (_ ? N.some((H, V) => mt(H, L[V])) : mt(N, L))) {
                h && h();
                const H = Ct;
                Ct = c;
                try {
                    const V = [N, L === In ? void 0 : _ && L[0] === In ? [] : L, g];
                    a ? a(t, 3, V) : t(...V), L = N
                } finally {
                    Ct = H
                }
            }
        } else c.run()
    };
    return l && l($), c = new so(f), c.scheduler = o ? () => o($, !1) : $, g = T => Da(T, !1, c), h = c.onStop = () => {
        const T = Vn.get(c);
        if (T) {
            if (a) a(T, 4); else for (const N of T) N();
            Vn.delete(c)
        }
    }, t ? r ? $(!0) : L = c.run() : o ? o($.bind(null, !0), !0) : c.run(), P.pause = c.pause.bind(c), P.resume = c.resume.bind(c), P.stop = P, P
}

function st(e, t = 1 / 0, n) {
    if (t <= 0 || !de(e) || e.__v_skip || (n = n || new Set, n.has(e))) return e;
    if (n.add(e), t--, we(e)) st(e.value, t, n); else if (z(e)) for (let r = 0; r < e.length; r++) st(e[r], t, n); else if (Qi(e) || Ut(e)) e.forEach(r => {
        st(r, t, n)
    }); else if (Xi(e)) {
        for (const r in e) st(e[r], t, n);
        for (const r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && st(e[r], t, n)
    }
    return e
}

/**
 * @vue/runtime-core v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/function Pn(e, t, n, r) {
    try {
        return r ? e(...r) : e()
    } catch (s) {
        lr(s, t, n)
    }
}

function Ue(e, t, n, r) {
    if (G(e)) {
        const s = Pn(e, t, n, r);
        return s && Ji(s) && s.catch(i => {
            lr(i, t, n)
        }), s
    }
    if (z(e)) {
        const s = [];
        for (let i = 0; i < e.length; i++) s.push(Ue(e[i], t, n, r));
        return s
    }
}

function lr(e, t, n, r = !0) {
    const s = t ? t.vnode : null, {
        errorHandler: i,
        throwUnhandledErrorInProduction: o
    } = t && t.appContext.config || ae;
    if (t) {
        let l = t.parent;
        const a = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; l;) {
            const c = l.ec;
            if (c) {
                for (let f = 0; f < c.length; f++) if (c[f](e, a, u) === !1) return
            }
            l = l.parent
        }
        if (i) {
            yt(), Pn(i, null, 10, [e, a, u]), _t();
            return
        }
    }
    ja(e, n, s, r, o)
}

function ja(e, t, n, r = !0, s = !1) {
    if (s) throw e;
    console.error(e)
}

const Se = [];
let Qe = -1;
const Kt = [];
let ft = null, qt = 0;
const So = Promise.resolve();
let Kn = null;

function Co(e) {
    const t = Kn || So;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function Ba(e) {
    let t = Qe + 1, n = Se.length;
    for (; t < n;) {
        const r = t + n >>> 1, s = Se[r], i = bn(s);
        i < e || i === e && s.flags & 2 ? t = r + 1 : n = r
    }
    return t
}

function ms(e) {
    if (!(e.flags & 1)) {
        const t = bn(e), n = Se[Se.length - 1];
        !n || !(e.flags & 2) && t >= bn(n) ? Se.push(e) : Se.splice(Ba(t), 0, e), e.flags |= 1, Eo()
    }
}

function Eo() {
    Kn || (Kn = So.then(Po))
}

function qa(e) {
    z(e) ? Kt.push(...e) : ft && e.id === -1 ? ft.splice(qt + 1, 0, e) : e.flags & 1 || (Kt.push(e), e.flags |= 1), Eo()
}

function Ds(e, t, n = Qe + 1) {
    for (; n < Se.length; n++) {
        const r = Se[n];
        if (r && r.flags & 2) {
            if (e && r.id !== e.uid) continue;
            Se.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2)
        }
    }
}

function Ro(e) {
    if (Kt.length) {
        const t = [...new Set(Kt)].sort((n, r) => bn(n) - bn(r));
        if (Kt.length = 0, ft) {
            ft.push(...t);
            return
        }
        for (ft = t, qt = 0; qt < ft.length; qt++) {
            const n = ft[qt];
            n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2
        }
        ft = null, qt = 0
    }
}

const bn = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;

function Po(e) {
    const t = He;
    try {
        for (Qe = 0; Qe < Se.length; Qe++) {
            const n = Se[Qe];
            n && !(n.flags & 8) && (n.flags & 4 && (n.flags &= -2), Pn(n, n.i, n.i ? 15 : 14), n.flags & 4 || (n.flags &= -2))
        }
    } finally {
        for (; Qe < Se.length; Qe++) {
            const n = Se[Qe];
            n && (n.flags &= -2)
        }
        Qe = -1, Se.length = 0, Ro(), Kn = null, (Se.length || Kt.length) && Po()
    }
}

let Pe = null, To = null;

function Wn(e) {
    const t = Pe;
    return Pe = e, To = e && e.type.__scopeId || null, t
}

function Fa(e, t = Pe, n) {
    if (!t || e._n) return e;
    const r = (...s) => {
        r._d && Gs(-1);
        const i = Wn(t);
        let o;
        try {
            o = e(...s)
        } finally {
            Wn(i), r._d && Gs(1)
        }
        return o
    };
    return r._n = !0, r._c = !0, r._d = !0, r
}

function Oo(e, t) {
    if (Pe === null) return e;
    const n = dr(Pe), r = e.dirs || (e.dirs = []);
    for (let s = 0; s < t.length; s++) {
        let [i, o, l, a = ae] = t[s];
        i && (G(i) && (i = {mounted: i, updated: i}), i.deep && st(o), r.push({
            dir: i,
            instance: n,
            value: o,
            oldValue: void 0,
            arg: l,
            modifiers: a
        }))
    }
    return e
}

function wt(e, t, n, r) {
    const s = e.dirs, i = t && t.dirs;
    for (let o = 0; o < s.length; o++) {
        const l = s[o];
        i && (l.oldValue = i[o].value);
        let a = l.dir[r];
        a && (yt(), Ue(a, n, 8, [e.el, l, e, t]), _t())
    }
}

const ko = Symbol("_vte"), Ao = e => e.__isTeleport, cn = e => e && (e.disabled || e.disabled === ""),
    Ha = e => e && (e.defer || e.defer === ""), Ns = e => typeof SVGElement != "undefined" && e instanceof SVGElement,
    js = e => typeof MathMLElement == "function" && e instanceof MathMLElement, Fr = (e, t) => {
        const n = e && e.to;
        return pe(n) ? t ? t(n) : null : n
    }, za = {
        name: "Teleport", __isTeleport: !0, process(e, t, n, r, s, i, o, l, a, u) {
            const {mc: c, pc: f, pbc: h, o: {insert: g, querySelector: v, createText: _, createComment: R}} = u,
                P = cn(t.props);
            let {shapeFlag: L, children: $, dynamicChildren: T} = t;
            if (e == null) {
                const N = t.el = _(""), H = t.anchor = _("");
                g(N, n, r), g(H, n, r);
                const V = (j, Q) => {
                    L & 16 && (s && s.isCE && (s.ce._teleportTarget = j), c($, j, Q, s, i, o, l, a))
                }, X = () => {
                    const j = t.target = Fr(t.props, v), Q = Lo(j, t, _, g);
                    j && (o !== "svg" && Ns(j) ? o = "svg" : o !== "mathml" && js(j) && (o = "mathml"), P || (V(j, Q), jn(t, !1)))
                };
                P && (V(n, H), jn(t, !0)), Ha(t.props) ? Ee(X, i) : X()
            } else {
                t.el = e.el, t.targetStart = e.targetStart;
                const N = t.anchor = e.anchor, H = t.target = e.target, V = t.targetAnchor = e.targetAnchor,
                    X = cn(e.props), j = X ? n : H, Q = X ? N : V;
                if (o === "svg" || Ns(H) ? o = "svg" : (o === "mathml" || js(H)) && (o = "mathml"), T ? (h(e.dynamicChildren, T, j, s, i, o, l), xs(e, t, !0)) : a || f(e, t, j, Q, s, i, o, l, !1), P) X ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : $n(t, n, N, u, 1); else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                    const J = t.target = Fr(t.props, v);
                    J && $n(t, J, null, u, 0)
                } else X && $n(t, H, V, u, 1);
                jn(t, P)
            }
        }, remove(e, t, n, {um: r, o: {remove: s}}, i) {
            const {shapeFlag: o, children: l, anchor: a, targetStart: u, targetAnchor: c, target: f, props: h} = e;
            if (f && (s(u), s(c)), i && s(a), o & 16) {
                const g = i || !cn(h);
                for (let v = 0; v < l.length; v++) {
                    const _ = l[v];
                    r(_, t, n, g, !!_.dynamicChildren)
                }
            }
        }, move: $n, hydrate: Ua
    };

function $n(e, t, n, {o: {insert: r}, m: s}, i = 2) {
    i === 0 && r(e.targetAnchor, t, n);
    const {el: o, anchor: l, shapeFlag: a, children: u, props: c} = e, f = i === 2;
    if (f && r(o, t, n), (!f || cn(c)) && a & 16) for (let h = 0; h < u.length; h++) s(u[h], t, n, 2);
    f && r(l, t, n)
}

function Ua(e, t, n, r, s, i, {o: {nextSibling: o, parentNode: l, querySelector: a, insert: u, createText: c}}, f) {
    const h = t.target = Fr(t.props, a);
    if (h) {
        const g = cn(t.props), v = h._lpa || h.firstChild;
        if (t.shapeFlag & 16) if (g) t.anchor = f(o(e), t, l(e), n, r, s, i), t.targetStart = v, t.targetAnchor = v && o(v); else {
            t.anchor = o(e);
            let _ = v;
            for (; _;) {
                if (_ && _.nodeType === 8) {
                    if (_.data === "teleport start anchor") t.targetStart = _; else if (_.data === "teleport anchor") {
                        t.targetAnchor = _, h._lpa = t.targetAnchor && o(t.targetAnchor);
                        break
                    }
                }
                _ = o(_)
            }
            t.targetAnchor || Lo(h, t, c, u), f(v && o(v), t, h, n, r, s, i)
        }
        jn(t, g)
    }
    return t.anchor && o(t.anchor)
}

const th = za;

function jn(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
        let r, s;
        for (t ? (r = e.el, s = e.anchor) : (r = e.targetStart, s = e.targetAnchor); r && r !== s;) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
        n.ut()
    }
}

function Lo(e, t, n, r) {
    const s = t.targetStart = n(""), i = t.targetAnchor = n("");
    return s[ko] = i, e && (r(s, e), r(i, e)), i
}

const dt = Symbol("_leaveCb"), Dn = Symbol("_enterCb");

function Mo() {
    const e = {isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map};
    return qo(() => {
        e.isMounted = !0
    }), ys(() => {
        e.isUnmounting = !0
    }), e
}

const $e = [Function, Array], Io = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: $e,
    onEnter: $e,
    onAfterEnter: $e,
    onEnterCancelled: $e,
    onBeforeLeave: $e,
    onLeave: $e,
    onAfterLeave: $e,
    onLeaveCancelled: $e,
    onBeforeAppear: $e,
    onAppear: $e,
    onAfterAppear: $e,
    onAppearCancelled: $e
}, $o = e => {
    const t = e.subTree;
    return t.component ? $o(t.component) : t
}, Va = {
    name: "BaseTransition", props: Io, setup(e, {slots: t}) {
        const n = Tn(), r = Mo();
        return () => {
            const s = t.default && vs(t.default(), !0);
            if (!s || !s.length) return;
            const i = Do(s), o = te(e), {mode: l} = o;
            if (r.isLeaving) return wr(i);
            const a = Bs(i);
            if (!a) return wr(i);
            let u = yn(a, o, r, n, h => u = h);
            a.type !== Re && Ot(a, u);
            const c = n.subTree, f = c && Bs(c);
            if (f && f.type !== Re && !Et(a, f) && $o(n).type !== Re) {
                const h = yn(f, o, r, n);
                if (Ot(f, h), l === "out-in" && a.type !== Re) return r.isLeaving = !0, h.afterLeave = () => {
                    r.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave
                }, wr(i);
                l === "in-out" && a.type !== Re && (h.delayLeave = (g, v, _) => {
                    const R = No(r, f);
                    R[String(f.key)] = f, g[dt] = () => {
                        v(), g[dt] = void 0, delete u.delayedLeave
                    }, u.delayedLeave = _
                })
            }
            return i
        }
    }
};

function Do(e) {
    let t = e[0];
    if (e.length > 1) {
        for (const n of e) if (n.type !== Re) {
            t = n;
            break
        }
    }
    return t
}

const Ka = Va;

function No(e, t) {
    const {leavingVNodes: n} = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null), n.set(t.type, r)), r
}

function yn(e, t, n, r, s) {
    const {
        appear: i,
        mode: o,
        persisted: l = !1,
        onBeforeEnter: a,
        onEnter: u,
        onAfterEnter: c,
        onEnterCancelled: f,
        onBeforeLeave: h,
        onLeave: g,
        onAfterLeave: v,
        onLeaveCancelled: _,
        onBeforeAppear: R,
        onAppear: P,
        onAfterAppear: L,
        onAppearCancelled: $
    } = t, T = String(e.key), N = No(n, e), H = (j, Q) => {
        j && Ue(j, r, 9, Q)
    }, V = (j, Q) => {
        const J = Q[1];
        H(j, Q), z(j) ? j.every(D => D.length <= 1) && J() : j.length <= 1 && J()
    }, X = {
        mode: o, persisted: l, beforeEnter(j) {
            let Q = a;
            if (!n.isMounted) if (i) Q = R || a; else return;
            j[dt] && j[dt](!0);
            const J = N[T];
            J && Et(e, J) && J.el[dt] && J.el[dt](), H(Q, [j])
        }, enter(j) {
            let Q = u, J = c, D = f;
            if (!n.isMounted) if (i) Q = P || u, J = L || c, D = $ || f; else return;
            let Y = !1;
            const M = j[Dn] = ee => {
                Y || (Y = !0, ee ? H(D, [j]) : H(J, [j]), X.delayedLeave && X.delayedLeave(), j[Dn] = void 0)
            };
            Q ? V(Q, [j, M]) : M()
        }, leave(j, Q) {
            const J = String(e.key);
            if (j[Dn] && j[Dn](!0), n.isUnmounting) return Q();
            H(h, [j]);
            let D = !1;
            const Y = j[dt] = M => {
                D || (D = !0, Q(), M ? H(_, [j]) : H(v, [j]), j[dt] = void 0, N[J] === e && delete N[J])
            };
            N[J] = e, g ? V(g, [j, Y]) : Y()
        }, clone(j) {
            const Q = yn(j, t, n, r, s);
            return s && s(Q), Q
        }
    };
    return X
}

function wr(e) {
    if (ar(e)) return e = vt(e), e.children = null, e
}

function Bs(e) {
    if (!ar(e)) return Ao(e.type) && e.children ? Do(e.children) : e;
    const {shapeFlag: t, children: n} = e;
    if (n) {
        if (t & 16) return n[0];
        if (t & 32 && G(n.default)) return n.default()
    }
}

function Ot(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, Ot(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function vs(e, t = !1, n) {
    let r = [], s = 0;
    for (let i = 0; i < e.length; i++) {
        let o = e[i];
        const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
        o.type === Fe ? (o.patchFlag & 128 && s++, r = r.concat(vs(o.children, t, l))) : (t || o.type !== Re) && r.push(l != null ? vt(o, {key: l}) : o)
    }
    if (s > 1) for (let i = 0; i < r.length; i++) r[i].patchFlag = -2;
    return r
}/*! #__NO_SIDE_EFFECTS__ */
function bs(e, t) {
    return G(e) ? (() => ge({name: e.name}, t, {setup: e}))() : e
}

function jo(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}

function Hr(e, t, n, r, s = !1) {
    if (z(e)) {
        e.forEach((v, _) => Hr(v, t && (z(t) ? t[_] : t), n, r, s));
        return
    }
    if (un(r) && !s) return;
    const i = r.shapeFlag & 4 ? dr(r.component) : r.el, o = s ? null : i, {i: l, r: a} = e, u = t && t.r,
        c = l.refs === ae ? l.refs = {} : l.refs, f = l.setupState, h = te(f), g = f === ae ? () => !1 : v => se(h, v);
    if (u != null && u !== a && (pe(u) ? (c[u] = null, g(u) && (f[u] = null)) : we(u) && (u.value = null)), G(a)) Pn(a, l, 12, [o, c]); else {
        const v = pe(a), _ = we(a);
        if (v || _) {
            const R = () => {
                if (e.f) {
                    const P = v ? g(a) ? f[a] : c[a] : a.value;
                    s ? z(P) && is(P, i) : z(P) ? P.includes(i) || P.push(i) : v ? (c[a] = [i], g(a) && (f[a] = c[a])) : (a.value = [i], e.k && (c[e.k] = a.value))
                } else v ? (c[a] = o, g(a) && (f[a] = o)) : _ && (a.value = o, e.k && (c[e.k] = o))
            };
            o ? (R.id = -1, Ee(R, n)) : R()
        }
    }
}

ir().requestIdleCallback;
ir().cancelIdleCallback;
const un = e => !!e.type.__asyncLoader, ar = e => e.type.__isKeepAlive;

function Wa(e, t) {
    Bo(e, "a", t)
}

function Ga(e, t) {
    Bo(e, "da", t)
}

function Bo(e, t, n = me) {
    const r = e.__wdc || (e.__wdc = () => {
        let s = n;
        for (; s;) {
            if (s.isDeactivated) return;
            s = s.parent
        }
        return e()
    });
    if (cr(t, r, n), n) {
        let s = n.parent;
        for (; s && s.parent;) ar(s.parent.vnode) && Qa(r, t, n, s), s = s.parent
    }
}

function Qa(e, t, n, r) {
    const s = cr(t, e, r, !0);
    Ho(() => {
        is(r[t], s)
    }, n)
}

function cr(e, t, n = me, r = !1) {
    if (n) {
        const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
            yt();
            const l = On(n), a = Ue(t, n, e, o);
            return l(), _t(), a
        });
        return r ? s.unshift(i) : s.push(i), i
    }
}

const ot = e => (t, n = me) => {
        (!wn || e === "sp") && cr(e, (...r) => t(...r), n)
    }, Ja = ot("bm"), qo = ot("m"), Ya = ot("bu"), Fo = ot("u"), ys = ot("bum"), Ho = ot("um"), Xa = ot("sp"),
    Za = ot("rtg"), ec = ot("rtc");

function tc(e, t = me) {
    cr("ec", e, t)
}

const zo = "components";

function nc(e, t) {
    return sc(zo, e, !0, t) || e
}

const rc = Symbol.for("v-ndc");

function sc(e, t, n = !0, r = !1) {
    const s = Pe || me;
    if (s) {
        const i = s.type;
        if (e === zo) {
            const l = Vc(i, !1);
            if (l && (l === t || l === je(t) || l === sr(je(t)))) return i
        }
        const o = qs(s[e] || i[e], t) || qs(s.appContext[e], t);
        return !o && r ? i : o
    }
}

function qs(e, t) {
    return e && (e[t] || e[je(t)] || e[sr(je(t))])
}

function nh(e, t, n, r) {
    let s;
    const i = n && n[r], o = z(e);
    if (o || pe(e)) {
        const l = o && Vt(e);
        let a = !1;
        l && (a = !Ne(e), e = or(e)), s = new Array(e.length);
        for (let u = 0, c = e.length; u < c; u++) s[u] = t(a ? _e(e[u]) : e[u], u, void 0, i && i[u])
    } else if (typeof e == "number") {
        s = new Array(e);
        for (let l = 0; l < e; l++) s[l] = t(l + 1, l, void 0, i && i[l])
    } else if (de(e)) if (e[Symbol.iterator]) s = Array.from(e, (l, a) => t(l, a, void 0, i && i[a])); else {
        const l = Object.keys(e);
        s = new Array(l.length);
        for (let a = 0, u = l.length; a < u; a++) {
            const c = l[a];
            s[a] = t(e[c], c, a, i && i[a])
        }
    } else s = [];
    return n && (n[r] = s), s
}

const zr = e => e ? fl(e) ? dr(e) : zr(e.parent) : null, fn = ge(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => zr(e.parent),
    $root: e => zr(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => _s(e),
    $forceUpdate: e => e.f || (e.f = () => {
        ms(e.update)
    }),
    $nextTick: e => e.n || (e.n = Co.bind(e.proxy)),
    $watch: e => Ec.bind(e)
}), xr = (e, t) => e !== ae && !e.__isScriptSetup && se(e, t), ic = {
    get({_: e}, t) {
        if (t === "__v_skip") return !0;
        const {ctx: n, setupState: r, data: s, props: i, accessCache: o, type: l, appContext: a} = e;
        let u;
        if (t[0] !== "$") {
            const g = o[t];
            if (g !== void 0) switch (g) {
                case 1:
                    return r[t];
                case 2:
                    return s[t];
                case 4:
                    return n[t];
                case 3:
                    return i[t]
            } else {
                if (xr(r, t)) return o[t] = 1, r[t];
                if (s !== ae && se(s, t)) return o[t] = 2, s[t];
                if ((u = e.propsOptions[0]) && se(u, t)) return o[t] = 3, i[t];
                if (n !== ae && se(n, t)) return o[t] = 4, n[t];
                Ur && (o[t] = 0)
            }
        }
        const c = fn[t];
        let f, h;
        if (c) return t === "$attrs" && ye(e.attrs, "get", ""), c(e);
        if ((f = l.__cssModules) && (f = f[t])) return f;
        if (n !== ae && se(n, t)) return o[t] = 4, n[t];
        if (h = a.config.globalProperties, se(h, t)) return h[t]
    }, set({_: e}, t, n) {
        const {data: r, setupState: s, ctx: i} = e;
        return xr(s, t) ? (s[t] = n, !0) : r !== ae && se(r, t) ? (r[t] = n, !0) : se(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0)
    }, has({_: {data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: i}}, o) {
        let l;
        return !!n[o] || e !== ae && se(e, o) || xr(t, o) || (l = i[0]) && se(l, o) || se(r, o) || se(fn, o) || se(s.config.globalProperties, o)
    }, defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : se(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
    }
};

function Fs(e) {
    return z(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
}

let Ur = !0;

function oc(e) {
    const t = _s(e), n = e.proxy, r = e.ctx;
    Ur = !1, t.beforeCreate && Hs(t.beforeCreate, e, "bc");
    const {
        data: s,
        computed: i,
        methods: o,
        watch: l,
        provide: a,
        inject: u,
        created: c,
        beforeMount: f,
        mounted: h,
        beforeUpdate: g,
        updated: v,
        activated: _,
        deactivated: R,
        beforeDestroy: P,
        beforeUnmount: L,
        destroyed: $,
        unmounted: T,
        render: N,
        renderTracked: H,
        renderTriggered: V,
        errorCaptured: X,
        serverPrefetch: j,
        expose: Q,
        inheritAttrs: J,
        components: D,
        directives: Y,
        filters: M
    } = t;
    if (u && lc(u, r, null), o) for (const le in o) {
        const ne = o[le];
        G(ne) && (r[le] = ne.bind(n))
    }
    if (s) {
        const le = s.call(n, n);
        de(le) && (e.data = Yt(le))
    }
    if (Ur = !0, i) for (const le in i) {
        const ne = i[le], Xe = G(ne) ? ne.bind(n, n) : G(ne.get) ? ne.get.bind(n, n) : He,
            lt = !G(ne) && G(ne.set) ? ne.set.bind(n) : He, Ke = W({get: Xe, set: lt});
        Object.defineProperty(r, le, {enumerable: !0, configurable: !0, get: () => Ke.value, set: Ce => Ke.value = Ce})
    }
    if (l) for (const le in l) Uo(l[le], r, n, le);
    if (a) {
        const le = G(a) ? a.call(n) : a;
        Reflect.ownKeys(le).forEach(ne => {
            Bn(ne, le[ne])
        })
    }
    c && Hs(c, e, "c");

    function ce(le, ne) {
        z(ne) ? ne.forEach(Xe => le(Xe.bind(n))) : ne && le(ne.bind(n))
    }

    if (ce(Ja, f), ce(qo, h), ce(Ya, g), ce(Fo, v), ce(Wa, _), ce(Ga, R), ce(tc, X), ce(ec, H), ce(Za, V), ce(ys, L), ce(Ho, T), ce(Xa, j), z(Q)) if (Q.length) {
        const le = e.exposed || (e.exposed = {});
        Q.forEach(ne => {
            Object.defineProperty(le, ne, {get: () => n[ne], set: Xe => n[ne] = Xe})
        })
    } else e.exposed || (e.exposed = {});
    N && e.render === He && (e.render = N), J != null && (e.inheritAttrs = J), D && (e.components = D), Y && (e.directives = Y), j && jo(e)
}

function lc(e, t, n = He) {
    z(e) && (e = Vr(e));
    for (const r in e) {
        const s = e[r];
        let i;
        de(s) ? "default" in s ? i = it(s.from || r, s.default, !0) : i = it(s.from || r) : i = it(s), we(i) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: o => i.value = o
        }) : t[r] = i
    }
}

function Hs(e, t, n) {
    Ue(z(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function Uo(e, t, n, r) {
    let s = r.includes(".") ? rl(n, r) : () => n[r];
    if (pe(e)) {
        const i = t[e];
        G(i) && qn(s, i)
    } else if (G(e)) qn(s, e.bind(n)); else if (de(e)) if (z(e)) e.forEach(i => Uo(i, t, n, r)); else {
        const i = G(e.handler) ? e.handler.bind(n) : t[e.handler];
        G(i) && qn(s, i, e)
    }
}

function _s(e) {
    const t = e.type, {mixins: n, extends: r} = t, {
        mixins: s,
        optionsCache: i,
        config: {optionMergeStrategies: o}
    } = e.appContext, l = i.get(t);
    let a;
    return l ? a = l : !s.length && !n && !r ? a = t : (a = {}, s.length && s.forEach(u => Gn(a, u, o, !0)), Gn(a, t, o)), de(t) && i.set(t, a), a
}

function Gn(e, t, n, r = !1) {
    const {mixins: s, extends: i} = t;
    i && Gn(e, i, n, !0), s && s.forEach(o => Gn(e, o, n, !0));
    for (const o in t) if (!(r && o === "expose")) {
        const l = ac[o] || n && n[o];
        e[o] = l ? l(e[o], t[o]) : t[o]
    }
    return e
}

const ac = {
    data: zs,
    props: Us,
    emits: Us,
    methods: rn,
    computed: rn,
    beforeCreate: xe,
    created: xe,
    beforeMount: xe,
    mounted: xe,
    beforeUpdate: xe,
    updated: xe,
    beforeDestroy: xe,
    beforeUnmount: xe,
    destroyed: xe,
    unmounted: xe,
    activated: xe,
    deactivated: xe,
    errorCaptured: xe,
    serverPrefetch: xe,
    components: rn,
    directives: rn,
    watch: uc,
    provide: zs,
    inject: cc
};

function zs(e, t) {
    return t ? e ? function () {
        return ge(G(e) ? e.call(this, this) : e, G(t) ? t.call(this, this) : t)
    } : t : e
}

function cc(e, t) {
    return rn(Vr(e), Vr(t))
}

function Vr(e) {
    if (z(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t
    }
    return e
}

function xe(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}

function rn(e, t) {
    return e ? ge(Object.create(null), e, t) : t
}

function Us(e, t) {
    return e ? z(e) && z(t) ? [...new Set([...e, ...t])] : ge(Object.create(null), Fs(e), Fs(t != null ? t : {})) : t
}

function uc(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = ge(Object.create(null), e);
    for (const r in t) n[r] = xe(e[r], t[r]);
    return n
}

function Vo() {
    return {
        app: null,
        config: {
            isNativeTag: Xl,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}

let fc = 0;

function dc(e, t) {
    return function (r, s = null) {
        G(r) || (r = ge({}, r)), s != null && !de(s) && (s = null);
        const i = Vo(), o = new WeakSet, l = [];
        let a = !1;
        const u = i.app = {
            _uid: fc++,
            _component: r,
            _props: s,
            _container: null,
            _context: i,
            _instance: null,
            version: Wc,
            get config() {
                return i.config
            },
            set config(c) {
            },
            use(c, ...f) {
                return o.has(c) || (c && G(c.install) ? (o.add(c), c.install(u, ...f)) : G(c) && (o.add(c), c(u, ...f))), u
            },
            mixin(c) {
                return i.mixins.includes(c) || i.mixins.push(c), u
            },
            component(c, f) {
                return f ? (i.components[c] = f, u) : i.components[c]
            },
            directive(c, f) {
                return f ? (i.directives[c] = f, u) : i.directives[c]
            },
            mount(c, f, h) {
                if (!a) {
                    const g = u._ceVNode || Te(r, s);
                    return g.appContext = i, h === !0 ? h = "svg" : h === !1 && (h = void 0), f && t ? t(g, c) : e(g, c, h), a = !0, u._container = c, c.__vue_app__ = u, dr(g.component)
                }
            },
            onUnmount(c) {
                l.push(c)
            },
            unmount() {
                a && (Ue(l, u._instance, 16), e(null, u._container), delete u._container.__vue_app__)
            },
            provide(c, f) {
                return i.provides[c] = f, u
            },
            runWithContext(c) {
                const f = Wt;
                Wt = u;
                try {
                    return c()
                } finally {
                    Wt = f
                }
            }
        };
        return u
    }
}

let Wt = null;

function Bn(e, t) {
    if (me) {
        let n = me.provides;
        const r = me.parent && me.parent.provides;
        r === n && (n = me.provides = Object.create(r)), n[e] = t
    }
}

function it(e, t, n = !1) {
    const r = me || Pe;
    if (r || Wt) {
        const s = Wt ? Wt._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
        if (s && e in s) return s[e];
        if (arguments.length > 1) return n && G(t) ? t.call(r && r.proxy) : t
    }
}

const Ko = {}, Wo = () => Object.create(Ko), Go = e => Object.getPrototypeOf(e) === Ko;

function hc(e, t, n, r = !1) {
    const s = {}, i = Wo();
    e.propsDefaults = Object.create(null), Qo(e, t, s, i);
    for (const o in e.propsOptions[0]) o in s || (s[o] = void 0);
    n ? e.props = r ? s : yo(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i
}

function pc(e, t, n, r) {
    const {props: s, attrs: i, vnode: {patchFlag: o}} = e, l = te(s), [a] = e.propsOptions;
    let u = !1;
    if ((r || o > 0) && !(o & 16)) {
        if (o & 8) {
            const c = e.vnode.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                let h = c[f];
                if (ur(e.emitsOptions, h)) continue;
                const g = t[h];
                if (a) if (se(i, h)) g !== i[h] && (i[h] = g, u = !0); else {
                    const v = je(h);
                    s[v] = Kr(a, l, v, g, e, !1)
                } else g !== i[h] && (i[h] = g, u = !0)
            }
        }
    } else {
        Qo(e, t, s, i) && (u = !0);
        let c;
        for (const f in l) (!t || !se(t, f) && ((c = Lt(f)) === f || !se(t, c))) && (a ? n && (n[f] !== void 0 || n[c] !== void 0) && (s[f] = Kr(a, l, f, void 0, e, !0)) : delete s[f]);
        if (i !== l) for (const f in i) (!t || !se(t, f) && !0) && (delete i[f], u = !0)
    }
    u && rt(e.attrs, "set", "")
}

function Qo(e, t, n, r) {
    const [s, i] = e.propsOptions;
    let o = !1, l;
    if (t) for (let a in t) {
        if (on(a)) continue;
        const u = t[a];
        let c;
        s && se(s, c = je(a)) ? !i || !i.includes(c) ? n[c] = u : (l || (l = {}))[c] = u : ur(e.emitsOptions, a) || (!(a in r) || u !== r[a]) && (r[a] = u, o = !0)
    }
    if (i) {
        const a = te(n), u = l || ae;
        for (let c = 0; c < i.length; c++) {
            const f = i[c];
            n[f] = Kr(s, a, f, u[f], e, !se(u, f))
        }
    }
    return o
}

function Kr(e, t, n, r, s, i) {
    const o = e[n];
    if (o != null) {
        const l = se(o, "default");
        if (l && r === void 0) {
            const a = o.default;
            if (o.type !== Function && !o.skipFactory && G(a)) {
                const {propsDefaults: u} = s;
                if (n in u) r = u[n]; else {
                    const c = On(s);
                    r = u[n] = a.call(null, t), c()
                }
            } else r = a;
            s.ce && s.ce._setProp(n, r)
        }
        o[0] && (i && !l ? r = !1 : o[1] && (r === "" || r === Lt(n)) && (r = !0))
    }
    return r
}

const gc = new WeakMap;

function Jo(e, t, n = !1) {
    const r = n ? gc : t.propsCache, s = r.get(e);
    if (s) return s;
    const i = e.props, o = {}, l = [];
    let a = !1;
    if (!G(e)) {
        const c = f => {
            a = !0;
            const [h, g] = Jo(f, t, !0);
            ge(o, h), g && l.push(...g)
        };
        !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c)
    }
    if (!i && !a) return de(e) && r.set(e, zt), zt;
    if (z(i)) for (let c = 0; c < i.length; c++) {
        const f = je(i[c]);
        Vs(f) && (o[f] = ae)
    } else if (i) for (const c in i) {
        const f = je(c);
        if (Vs(f)) {
            const h = i[c], g = o[f] = z(h) || G(h) ? {type: h} : ge({}, h), v = g.type;
            let _ = !1, R = !0;
            if (z(v)) for (let P = 0; P < v.length; ++P) {
                const L = v[P], $ = G(L) && L.name;
                if ($ === "Boolean") {
                    _ = !0;
                    break
                } else $ === "String" && (R = !1)
            } else _ = G(v) && v.name === "Boolean";
            g[0] = _, g[1] = R, (_ || se(g, "default")) && l.push(f)
        }
    }
    const u = [o, l];
    return de(e) && r.set(e, u), u
}

function Vs(e) {
    return e[0] !== "$" && !on(e)
}

const Yo = e => e[0] === "_" || e === "$stable", ws = e => z(e) ? e.map(Je) : [Je(e)], mc = (e, t, n) => {
    if (t._n) return t;
    const r = Fa((...s) => ws(t(...s)), n);
    return r._c = !1, r
}, Xo = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
        if (Yo(s)) continue;
        const i = e[s];
        if (G(i)) t[s] = mc(s, i, r); else if (i != null) {
            const o = ws(i);
            t[s] = () => o
        }
    }
}, Zo = (e, t) => {
    const n = ws(t);
    e.slots.default = () => n
}, el = (e, t, n) => {
    for (const r in t) (n || r !== "_") && (e[r] = t[r])
}, vc = (e, t, n) => {
    const r = e.slots = Wo();
    if (e.vnode.shapeFlag & 32) {
        const s = t._;
        s ? (el(r, t, n), n && Zi(r, "_", s, !0)) : Xo(t, r)
    } else t && Zo(e, t)
}, bc = (e, t, n) => {
    const {vnode: r, slots: s} = e;
    let i = !0, o = ae;
    if (r.shapeFlag & 32) {
        const l = t._;
        l ? n && l === 1 ? i = !1 : el(s, t, n) : (i = !t.$stable, Xo(t, s)), o = t
    } else t && (Zo(e, t), o = {default: 1});
    if (i) for (const l in s) !Yo(l) && o[l] == null && delete s[l]
}, Ee = Lc;

function yc(e) {
    return _c(e)
}

function _c(e, t) {
    const n = ir();
    n.__VUE__ = !0;
    const {
        insert: r,
        remove: s,
        patchProp: i,
        createElement: o,
        createText: l,
        createComment: a,
        setText: u,
        setElementText: c,
        parentNode: f,
        nextSibling: h,
        setScopeId: g = He,
        insertStaticContent: v
    } = e, _ = (d, p, m, w = null, b = null, x = null, O = void 0, E = null, C = !!p.dynamicChildren) => {
        if (d === p) return;
        d && !Et(d, p) && (w = y(d), Ce(d, b, x, !0), d = null), p.patchFlag === -2 && (C = !1, p.dynamicChildren = null);
        const {type: S, ref: F, shapeFlag: A} = p;
        switch (S) {
            case fr:
                R(d, p, m, w);
                break;
            case Re:
                P(d, p, m, w);
                break;
            case Er:
                d == null && L(p, m, w, O);
                break;
            case Fe:
                D(d, p, m, w, b, x, O, E, C);
                break;
            default:
                A & 1 ? N(d, p, m, w, b, x, O, E, C) : A & 6 ? Y(d, p, m, w, b, x, O, E, C) : (A & 64 || A & 128) && S.process(d, p, m, w, b, x, O, E, C, B)
        }
        F != null && b && Hr(F, d && d.ref, x, p || d, !p)
    }, R = (d, p, m, w) => {
        if (d == null) r(p.el = l(p.children), m, w); else {
            const b = p.el = d.el;
            p.children !== d.children && u(b, p.children)
        }
    }, P = (d, p, m, w) => {
        d == null ? r(p.el = a(p.children || ""), m, w) : p.el = d.el
    }, L = (d, p, m, w) => {
        [d.el, d.anchor] = v(d.children, p, m, w, d.el, d.anchor)
    }, $ = ({el: d, anchor: p}, m, w) => {
        let b;
        for (; d && d !== p;) b = h(d), r(d, m, w), d = b;
        r(p, m, w)
    }, T = ({el: d, anchor: p}) => {
        let m;
        for (; d && d !== p;) m = h(d), s(d), d = m;
        s(p)
    }, N = (d, p, m, w, b, x, O, E, C) => {
        p.type === "svg" ? O = "svg" : p.type === "math" && (O = "mathml"), d == null ? H(p, m, w, b, x, O, E, C) : j(d, p, b, x, O, E, C)
    }, H = (d, p, m, w, b, x, O, E) => {
        let C, S;
        const {props: F, shapeFlag: A, transition: q, dirs: K} = d;
        if (C = d.el = o(d.type, x, F && F.is, F), A & 8 ? c(C, d.children) : A & 16 && X(d.children, C, null, w, b, Sr(d, x), O, E), K && wt(d, null, w, "created"), V(C, d, d.scopeId, O, w), F) {
            for (const ue in F) ue !== "value" && !on(ue) && i(C, ue, null, F[ue], x, w);
            "value" in F && i(C, "value", null, F.value, x), (S = F.onVnodeBeforeMount) && Ge(S, w, d)
        }
        K && wt(d, null, w, "beforeMount");
        const Z = wc(b, q);
        Z && q.beforeEnter(C), r(C, p, m), ((S = F && F.onVnodeMounted) || Z || K) && Ee(() => {
            S && Ge(S, w, d), Z && q.enter(C), K && wt(d, null, w, "mounted")
        }, b)
    }, V = (d, p, m, w, b) => {
        if (m && g(d, m), w) for (let x = 0; x < w.length; x++) g(d, w[x]);
        if (b) {
            let x = b.subTree;
            if (p === x || il(x.type) && (x.ssContent === p || x.ssFallback === p)) {
                const O = b.vnode;
                V(d, O, O.scopeId, O.slotScopeIds, b.parent)
            }
        }
    }, X = (d, p, m, w, b, x, O, E, C = 0) => {
        for (let S = C; S < d.length; S++) {
            const F = d[S] = E ? ht(d[S]) : Je(d[S]);
            _(null, F, p, m, w, b, x, O, E)
        }
    }, j = (d, p, m, w, b, x, O) => {
        const E = p.el = d.el;
        let {patchFlag: C, dynamicChildren: S, dirs: F} = p;
        C |= d.patchFlag & 16;
        const A = d.props || ae, q = p.props || ae;
        let K;
        if (m && xt(m, !1), (K = q.onVnodeBeforeUpdate) && Ge(K, m, p, d), F && wt(p, d, m, "beforeUpdate"), m && xt(m, !0), (A.innerHTML && q.innerHTML == null || A.textContent && q.textContent == null) && c(E, ""), S ? Q(d.dynamicChildren, S, E, m, w, Sr(p, b), x) : O || ne(d, p, E, null, m, w, Sr(p, b), x, !1), C > 0) {
            if (C & 16) J(E, A, q, m, b); else if (C & 2 && A.class !== q.class && i(E, "class", null, q.class, b), C & 4 && i(E, "style", A.style, q.style, b), C & 8) {
                const Z = p.dynamicProps;
                for (let ue = 0; ue < Z.length; ue++) {
                    const ie = Z[ue], Oe = A[ie], ve = q[ie];
                    (ve !== Oe || ie === "value") && i(E, ie, Oe, ve, b, m)
                }
            }
            C & 1 && d.children !== p.children && c(E, p.children)
        } else !O && S == null && J(E, A, q, m, b);
        ((K = q.onVnodeUpdated) || F) && Ee(() => {
            K && Ge(K, m, p, d), F && wt(p, d, m, "updated")
        }, w)
    }, Q = (d, p, m, w, b, x, O) => {
        for (let E = 0; E < p.length; E++) {
            const C = d[E], S = p[E], F = C.el && (C.type === Fe || !Et(C, S) || C.shapeFlag & 70) ? f(C.el) : m;
            _(C, S, F, null, w, b, x, O, !0)
        }
    }, J = (d, p, m, w, b) => {
        if (p !== m) {
            if (p !== ae) for (const x in p) !on(x) && !(x in m) && i(d, x, p[x], null, b, w);
            for (const x in m) {
                if (on(x)) continue;
                const O = m[x], E = p[x];
                O !== E && x !== "value" && i(d, x, E, O, b, w)
            }
            "value" in m && i(d, "value", p.value, m.value, b)
        }
    }, D = (d, p, m, w, b, x, O, E, C) => {
        const S = p.el = d ? d.el : l(""), F = p.anchor = d ? d.anchor : l("");
        let {patchFlag: A, dynamicChildren: q, slotScopeIds: K} = p;
        K && (E = E ? E.concat(K) : K), d == null ? (r(S, m, w), r(F, m, w), X(p.children || [], m, F, b, x, O, E, C)) : A > 0 && A & 64 && q && d.dynamicChildren ? (Q(d.dynamicChildren, q, m, b, x, O, E), (p.key != null || b && p === b.subTree) && xs(d, p, !0)) : ne(d, p, m, F, b, x, O, E, C)
    }, Y = (d, p, m, w, b, x, O, E, C) => {
        p.slotScopeIds = E, d == null ? p.shapeFlag & 512 ? b.ctx.activate(p, m, w, O, C) : M(p, m, w, b, x, O, C) : ee(d, p, C)
    }, M = (d, p, m, w, b, x, O) => {
        const E = d.component = qc(d, w, b);
        if (ar(d) && (E.ctx.renderer = B), Fc(E, !1, O), E.asyncDep) {
            if (b && b.registerDep(E, ce, O), !d.el) {
                const C = E.subTree = Te(Re);
                P(null, C, p, m)
            }
        } else ce(E, d, p, m, b, x, O)
    }, ee = (d, p, m) => {
        const w = p.component = d.component;
        if (kc(d, p, m)) if (w.asyncDep && !w.asyncResolved) {
            le(w, p, m);
            return
        } else w.next = p, w.update(); else p.el = d.el, w.vnode = p
    }, ce = (d, p, m, w, b, x, O) => {
        const E = () => {
            if (d.isMounted) {
                let {next: A, bu: q, u: K, parent: Z, vnode: ue} = d;
                {
                    const ke = tl(d);
                    if (ke) {
                        A && (A.el = ue.el, le(d, A, O)), ke.asyncDep.then(() => {
                            d.isUnmounted || E()
                        });
                        return
                    }
                }
                let ie = A, Oe;
                xt(d, !1), A ? (A.el = ue.el, le(d, A, O)) : A = ue, q && mr(q), (Oe = A.props && A.props.onVnodeBeforeUpdate) && Ge(Oe, Z, A, ue), xt(d, !0);
                const ve = Cr(d), Be = d.subTree;
                d.subTree = ve, _(Be, ve, f(Be.el), y(Be), d, b, x), A.el = ve.el, ie === null && Ac(d, ve.el), K && Ee(K, b), (Oe = A.props && A.props.onVnodeUpdated) && Ee(() => Ge(Oe, Z, A, ue), b)
            } else {
                let A;
                const {el: q, props: K} = p, {bm: Z, m: ue, parent: ie, root: Oe, type: ve} = d, Be = un(p);
                if (xt(d, !1), Z && mr(Z), !Be && (A = K && K.onVnodeBeforeMount) && Ge(A, ie, p), xt(d, !0), q && he) {
                    const ke = () => {
                        d.subTree = Cr(d), he(q, d.subTree, d, b, null)
                    };
                    Be && ve.__asyncHydrate ? ve.__asyncHydrate(q, d, ke) : ke()
                } else {
                    Oe.ce && Oe.ce._injectChildStyle(ve);
                    const ke = d.subTree = Cr(d);
                    _(null, ke, m, w, d, b, x), p.el = ke.el
                }
                if (ue && Ee(ue, b), !Be && (A = K && K.onVnodeMounted)) {
                    const ke = p;
                    Ee(() => Ge(A, ie, ke), b)
                }
                (p.shapeFlag & 256 || ie && un(ie.vnode) && ie.vnode.shapeFlag & 256) && d.a && Ee(d.a, b), d.isMounted = !0, p = m = w = null
            }
        };
        d.scope.on();
        const C = d.effect = new so(E);
        d.scope.off();
        const S = d.update = C.run.bind(C), F = d.job = C.runIfDirty.bind(C);
        F.i = d, F.id = d.uid, C.scheduler = () => ms(F), xt(d, !0), S()
    }, le = (d, p, m) => {
        p.component = d;
        const w = d.vnode.props;
        d.vnode = p, d.next = null, pc(d, p.props, w, m), bc(d, p.children, m), yt(), Ds(d), _t()
    }, ne = (d, p, m, w, b, x, O, E, C = !1) => {
        const S = d && d.children, F = d ? d.shapeFlag : 0, A = p.children, {patchFlag: q, shapeFlag: K} = p;
        if (q > 0) {
            if (q & 128) {
                lt(S, A, m, w, b, x, O, E, C);
                return
            } else if (q & 256) {
                Xe(S, A, m, w, b, x, O, E, C);
                return
            }
        }
        K & 8 ? (F & 16 && Ie(S, b, x), A !== S && c(m, A)) : F & 16 ? K & 16 ? lt(S, A, m, w, b, x, O, E, C) : Ie(S, b, x, !0) : (F & 8 && c(m, ""), K & 16 && X(A, m, w, b, x, O, E, C))
    }, Xe = (d, p, m, w, b, x, O, E, C) => {
        d = d || zt, p = p || zt;
        const S = d.length, F = p.length, A = Math.min(S, F);
        let q;
        for (q = 0; q < A; q++) {
            const K = p[q] = C ? ht(p[q]) : Je(p[q]);
            _(d[q], K, m, null, b, x, O, E, C)
        }
        S > F ? Ie(d, b, x, !0, !1, A) : X(p, m, w, b, x, O, E, C, A)
    }, lt = (d, p, m, w, b, x, O, E, C) => {
        let S = 0;
        const F = p.length;
        let A = d.length - 1, q = F - 1;
        for (; S <= A && S <= q;) {
            const K = d[S], Z = p[S] = C ? ht(p[S]) : Je(p[S]);
            if (Et(K, Z)) _(K, Z, m, null, b, x, O, E, C); else break;
            S++
        }
        for (; S <= A && S <= q;) {
            const K = d[A], Z = p[q] = C ? ht(p[q]) : Je(p[q]);
            if (Et(K, Z)) _(K, Z, m, null, b, x, O, E, C); else break;
            A--, q--
        }
        if (S > A) {
            if (S <= q) {
                const K = q + 1, Z = K < F ? p[K].el : w;
                for (; S <= q;) _(null, p[S] = C ? ht(p[S]) : Je(p[S]), m, Z, b, x, O, E, C), S++
            }
        } else if (S > q) for (; S <= A;) Ce(d[S], b, x, !0), S++; else {
            const K = S, Z = S, ue = new Map;
            for (S = Z; S <= q; S++) {
                const Ae = p[S] = C ? ht(p[S]) : Je(p[S]);
                Ae.key != null && ue.set(Ae.key, S)
            }
            let ie, Oe = 0;
            const ve = q - Z + 1;
            let Be = !1, ke = 0;
            const Xt = new Array(ve);
            for (S = 0; S < ve; S++) Xt[S] = 0;
            for (S = K; S <= A; S++) {
                const Ae = d[S];
                if (Oe >= ve) {
                    Ce(Ae, b, x, !0);
                    continue
                }
                let We;
                if (Ae.key != null) We = ue.get(Ae.key); else for (ie = Z; ie <= q; ie++) if (Xt[ie - Z] === 0 && Et(Ae, p[ie])) {
                    We = ie;
                    break
                }
                We === void 0 ? Ce(Ae, b, x, !0) : (Xt[We - Z] = S + 1, We >= ke ? ke = We : Be = !0, _(Ae, p[We], m, null, b, x, O, E, C), Oe++)
            }
            const ks = Be ? xc(Xt) : zt;
            for (ie = ks.length - 1, S = ve - 1; S >= 0; S--) {
                const Ae = Z + S, We = p[Ae], As = Ae + 1 < F ? p[Ae + 1].el : w;
                Xt[S] === 0 ? _(null, We, m, As, b, x, O, E, C) : Be && (ie < 0 || S !== ks[ie] ? Ke(We, m, As, 2) : ie--)
            }
        }
    }, Ke = (d, p, m, w, b = null) => {
        const {el: x, type: O, transition: E, children: C, shapeFlag: S} = d;
        if (S & 6) {
            Ke(d.component.subTree, p, m, w);
            return
        }
        if (S & 128) {
            d.suspense.move(p, m, w);
            return
        }
        if (S & 64) {
            O.move(d, p, m, B);
            return
        }
        if (O === Fe) {
            r(x, p, m);
            for (let A = 0; A < C.length; A++) Ke(C[A], p, m, w);
            r(d.anchor, p, m);
            return
        }
        if (O === Er) {
            $(d, p, m);
            return
        }
        if (w !== 2 && S & 1 && E) if (w === 0) E.beforeEnter(x), r(x, p, m), Ee(() => E.enter(x), b); else {
            const {leave: A, delayLeave: q, afterLeave: K} = E, Z = () => r(x, p, m), ue = () => {
                A(x, () => {
                    Z(), K && K()
                })
            };
            q ? q(x, Z, ue) : ue()
        } else r(x, p, m)
    }, Ce = (d, p, m, w = !1, b = !1) => {
        const {
            type: x,
            props: O,
            ref: E,
            children: C,
            dynamicChildren: S,
            shapeFlag: F,
            patchFlag: A,
            dirs: q,
            cacheIndex: K
        } = d;
        if (A === -2 && (b = !1), E != null && Hr(E, null, m, d, !0), K != null && (p.renderCache[K] = void 0), F & 256) {
            p.ctx.deactivate(d);
            return
        }
        const Z = F & 1 && q, ue = !un(d);
        let ie;
        if (ue && (ie = O && O.onVnodeBeforeUnmount) && Ge(ie, p, d), F & 6) An(d.component, m, w); else {
            if (F & 128) {
                d.suspense.unmount(m, w);
                return
            }
            Z && wt(d, null, p, "beforeUnmount"), F & 64 ? d.type.remove(d, p, m, B, w) : S && !S.hasOnce && (x !== Fe || A > 0 && A & 64) ? Ie(S, p, m, !1, !0) : (x === Fe && A & 384 || !b && F & 16) && Ie(C, p, m), w && Mt(d)
        }
        (ue && (ie = O && O.onVnodeUnmounted) || Z) && Ee(() => {
            ie && Ge(ie, p, d), Z && wt(d, null, p, "unmounted")
        }, m)
    }, Mt = d => {
        const {type: p, el: m, anchor: w, transition: b} = d;
        if (p === Fe) {
            It(m, w);
            return
        }
        if (p === Er) {
            T(d);
            return
        }
        const x = () => {
            s(m), b && !b.persisted && b.afterLeave && b.afterLeave()
        };
        if (d.shapeFlag & 1 && b && !b.persisted) {
            const {leave: O, delayLeave: E} = b, C = () => O(m, x);
            E ? E(d.el, x, C) : C()
        } else x()
    }, It = (d, p) => {
        let m;
        for (; d !== p;) m = h(d), s(d), d = m;
        s(p)
    }, An = (d, p, m) => {
        const {bum: w, scope: b, job: x, subTree: O, um: E, m: C, a: S} = d;
        Ks(C), Ks(S), w && mr(w), b.stop(), x && (x.flags |= 8, Ce(O, d, p, m)), E && Ee(E, p), Ee(() => {
            d.isUnmounted = !0
        }, p), p && p.pendingBranch && !p.isUnmounted && d.asyncDep && !d.asyncResolved && d.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve())
    }, Ie = (d, p, m, w = !1, b = !1, x = 0) => {
        for (let O = x; O < d.length; O++) Ce(d[O], p, m, w, b)
    }, y = d => {
        if (d.shapeFlag & 6) return y(d.component.subTree);
        if (d.shapeFlag & 128) return d.suspense.next();
        const p = h(d.anchor || d.el), m = p && p[ko];
        return m ? h(m) : p
    };
    let I = !1;
    const k = (d, p, m) => {
        d == null ? p._vnode && Ce(p._vnode, null, null, !0) : _(p._vnode || null, d, p, null, null, null, m), p._vnode = d, I || (I = !0, Ds(), Ro(), I = !1)
    }, B = {p: _, um: Ce, m: Ke, r: Mt, mt: M, mc: X, pc: ne, pbc: Q, n: y, o: e};
    let re, he;
    return t && ([re, he] = t(B)), {render: k, hydrate: re, createApp: dc(k, re)}
}

function Sr({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}

function xt({effect: e, job: t}, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5)
}

function wc(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function xs(e, t, n = !1) {
    const r = e.children, s = t.children;
    if (z(r) && z(s)) for (let i = 0; i < r.length; i++) {
        const o = r[i];
        let l = s[i];
        l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = ht(s[i]), l.el = o.el), !n && l.patchFlag !== -2 && xs(o, l)), l.type === fr && (l.el = o.el)
    }
}

function xc(e) {
    const t = e.slice(), n = [0];
    let r, s, i, o, l;
    const a = e.length;
    for (r = 0; r < a; r++) {
        const u = e[r];
        if (u !== 0) {
            if (s = n[n.length - 1], e[s] < u) {
                t[r] = s, n.push(r);
                continue
            }
            for (i = 0, o = n.length - 1; i < o;) l = i + o >> 1, e[n[l]] < u ? i = l + 1 : o = l;
            u < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r)
        }
    }
    for (i = n.length, o = n[i - 1]; i-- > 0;) n[i] = o, o = t[o];
    return n
}

function tl(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : tl(t)
}

function Ks(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}

const Sc = Symbol.for("v-scx"), Cc = () => it(Sc);

function qn(e, t, n) {
    return nl(e, t, n)
}

function nl(e, t, n = ae) {
    const {immediate: r, deep: s, flush: i, once: o} = n, l = ge({}, n), a = t && r || !t && i !== "post";
    let u;
    if (wn) {
        if (i === "sync") {
            const g = Cc();
            u = g.__watcherHandles || (g.__watcherHandles = [])
        } else if (!a) {
            const g = () => {
            };
            return g.stop = He, g.resume = He, g.pause = He, g
        }
    }
    const c = me;
    l.call = (g, v, _) => Ue(g, c, v, _);
    let f = !1;
    i === "post" ? l.scheduler = g => {
        Ee(g, c && c.suspense)
    } : i !== "sync" && (f = !0, l.scheduler = (g, v) => {
        v ? g() : ms(g)
    }), l.augmentJob = g => {
        t && (g.flags |= 4), f && (g.flags |= 2, c && (g.id = c.uid, g.i = c))
    };
    const h = Na(e, t, l);
    return wn && (u ? u.push(h) : a && h()), h
}

function Ec(e, t, n) {
    const r = this.proxy, s = pe(e) ? e.includes(".") ? rl(r, e) : () => r[e] : e.bind(r, r);
    let i;
    G(t) ? i = t : (i = t.handler, n = t);
    const o = On(this), l = nl(s, i.bind(r), n);
    return o(), l
}

function rl(e, t) {
    const n = t.split(".");
    return () => {
        let r = e;
        for (let s = 0; s < n.length && r; s++) r = r[n[s]];
        return r
    }
}

const Rc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${je(t)}Modifiers`] || e[`${Lt(t)}Modifiers`];

function Pc(e, t, ...n) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || ae;
    let s = n;
    const i = t.startsWith("update:"), o = i && Rc(r, t.slice(7));
    o && (o.trim && (s = n.map(c => pe(c) ? c.trim() : c)), o.number && (s = n.map(ra)));
    let l, a = r[l = gr(t)] || r[l = gr(je(t))];
    !a && i && (a = r[l = gr(Lt(t))]), a && Ue(a, e, 6, s);
    const u = r[l + "Once"];
    if (u) {
        if (!e.emitted) e.emitted = {}; else if (e.emitted[l]) return;
        e.emitted[l] = !0, Ue(u, e, 6, s)
    }
}

function sl(e, t, n = !1) {
    const r = t.emitsCache, s = r.get(e);
    if (s !== void 0) return s;
    const i = e.emits;
    let o = {}, l = !1;
    if (!G(e)) {
        const a = u => {
            const c = sl(u, t, !0);
            c && (l = !0, ge(o, c))
        };
        !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a)
    }
    return !i && !l ? (de(e) && r.set(e, null), null) : (z(i) ? i.forEach(a => o[a] = null) : ge(o, i), de(e) && r.set(e, o), o)
}

function ur(e, t) {
    return !e || !tr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), se(e, t[0].toLowerCase() + t.slice(1)) || se(e, Lt(t)) || se(e, t))
}

function Cr(e) {
    const {
        type: t,
        vnode: n,
        proxy: r,
        withProxy: s,
        propsOptions: [i],
        slots: o,
        attrs: l,
        emit: a,
        render: u,
        renderCache: c,
        props: f,
        data: h,
        setupState: g,
        ctx: v,
        inheritAttrs: _
    } = e, R = Wn(e);
    let P, L;
    try {
        if (n.shapeFlag & 4) {
            const T = s || r, N = T;
            P = Je(u.call(N, T, c, f, g, h, v)), L = l
        } else {
            const T = t;
            P = Je(T.length > 1 ? T(f, {attrs: l, slots: o, emit: a}) : T(f, null)), L = t.props ? l : Tc(l)
        }
    } catch (T) {
        dn.length = 0, lr(T, e, 1), P = Te(Re)
    }
    let $ = P;
    if (L && _ !== !1) {
        const T = Object.keys(L), {shapeFlag: N} = $;
        T.length && N & 7 && (i && T.some(ss) && (L = Oc(L, i)), $ = vt($, L, !1, !0))
    }
    return n.dirs && ($ = vt($, null, !1, !0), $.dirs = $.dirs ? $.dirs.concat(n.dirs) : n.dirs), n.transition && Ot($, n.transition), P = $, Wn(R), P
}

const Tc = e => {
    let t;
    for (const n in e) (n === "class" || n === "style" || tr(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}, Oc = (e, t) => {
    const n = {};
    for (const r in e) (!ss(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n
};

function kc(e, t, n) {
    const {props: r, children: s, component: i} = e, {props: o, children: l, patchFlag: a} = t, u = i.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && a >= 0) {
        if (a & 1024) return !0;
        if (a & 16) return r ? Ws(r, o, u) : !!o;
        if (a & 8) {
            const c = t.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                const h = c[f];
                if (o[h] !== r[h] && !ur(u, h)) return !0
            }
        }
    } else return (s || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? Ws(r, o, u) : !0 : !!o;
    return !1
}

function Ws(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return !0;
    for (let s = 0; s < r.length; s++) {
        const i = r[s];
        if (t[i] !== e[i] && !ur(n, i)) return !0
    }
    return !1
}

function Ac({vnode: e, parent: t}, n) {
    for (; t;) {
        const r = t.subTree;
        if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = n, t = t.parent; else break
    }
}

const il = e => e.__isSuspense;

function Lc(e, t) {
    t && t.pendingBranch ? z(e) ? t.effects.push(...e) : t.effects.push(e) : qa(e)
}

const Fe = Symbol.for("v-fgt"), fr = Symbol.for("v-txt"), Re = Symbol.for("v-cmt"), Er = Symbol.for("v-stc"), dn = [];
let Me = null;

function ol(e = !1) {
    dn.push(Me = e ? null : [])
}

function Mc() {
    dn.pop(), Me = dn[dn.length - 1] || null
}

let _n = 1;

function Gs(e) {
    _n += e, e < 0 && Me && (Me.hasOnce = !0)
}

function ll(e) {
    return e.dynamicChildren = _n > 0 ? Me || zt : null, Mc(), _n > 0 && Me && Me.push(e), e
}

function rh(e, t, n, r, s, i) {
    return ll(ul(e, t, n, r, s, i, !0))
}

function al(e, t, n, r, s) {
    return ll(Te(e, t, n, r, s, !0))
}

function Qn(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function Et(e, t) {
    return e.type === t.type && e.key === t.key
}

const cl = ({key: e}) => e != null ? e : null, Fn = ({
                                                         ref: e,
                                                         ref_key: t,
                                                         ref_for: n
                                                     }) => (typeof e == "number" && (e = "" + e), e != null ? pe(e) || we(e) || G(e) ? {
    i: Pe,
    r: e,
    k: t,
    f: !!n
} : e : null);

function ul(e, t = null, n = null, r = 0, s = null, i = e === Fe ? 0 : 1, o = !1, l = !1) {
    const a = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && cl(t),
        ref: t && Fn(t),
        scopeId: To,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: i,
        patchFlag: r,
        dynamicProps: s,
        dynamicChildren: null,
        appContext: null,
        ctx: Pe
    };
    return l ? (Ss(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= pe(n) ? 8 : 16), _n > 0 && !o && Me && (a.patchFlag > 0 || i & 6) && a.patchFlag !== 32 && Me.push(a), a
}

const Te = Ic;

function Ic(e, t = null, n = null, r = 0, s = null, i = !1) {
    if ((!e || e === rc) && (e = Re), Qn(e)) {
        const l = vt(e, t, !0);
        return n && Ss(l, n), _n > 0 && !i && Me && (l.shapeFlag & 6 ? Me[Me.indexOf(e)] = l : Me.push(l)), l.patchFlag = -2, l
    }
    if (Kc(e) && (e = e.__vccOpts), t) {
        t = $c(t);
        let {class: l, style: a} = t;
        l && !pe(l) && (t.class = as(l)), de(a) && (gs(a) && !z(a) && (a = ge({}, a)), t.style = ls(a))
    }
    const o = pe(e) ? 1 : il(e) ? 128 : Ao(e) ? 64 : de(e) ? 4 : G(e) ? 2 : 0;
    return ul(e, t, n, r, s, o, i, !0)
}

function $c(e) {
    return e ? gs(e) || Go(e) ? ge({}, e) : e : null
}

function vt(e, t, n = !1, r = !1) {
    const {props: s, ref: i, patchFlag: o, children: l, transition: a} = e, u = t ? Nc(s || {}, t) : s, c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: u,
        key: u && cl(u),
        ref: t && t.ref ? n && i ? z(i) ? i.concat(Fn(t)) : [i, Fn(t)] : Fn(t) : i,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: l,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Fe ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: a,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && vt(e.ssContent),
        ssFallback: e.ssFallback && vt(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return a && r && Ot(c, a.clone(c)), c
}

function Dc(e = " ", t = 0) {
    return Te(fr, null, e, t)
}

function sh(e = "", t = !1) {
    return t ? (ol(), al(Re, null, e)) : Te(Re, null, e)
}

function Je(e) {
    return e == null || typeof e == "boolean" ? Te(Re) : z(e) ? Te(Fe, null, e.slice()) : Qn(e) ? ht(e) : Te(fr, null, String(e))
}

function ht(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : vt(e)
}

function Ss(e, t) {
    let n = 0;
    const {shapeFlag: r} = e;
    if (t == null) t = null; else if (z(t)) n = 16; else if (typeof t == "object") if (r & 65) {
        const s = t.default;
        s && (s._c && (s._d = !1), Ss(e, s()), s._c && (s._d = !0));
        return
    } else {
        n = 32;
        const s = t._;
        !s && !Go(t) ? t._ctx = Pe : s === 3 && Pe && (Pe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
    } else G(t) ? (t = {default: t, _ctx: Pe}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Dc(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n
}

function Nc(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const s in r) if (s === "class") t.class !== r.class && (t.class = as([t.class, r.class])); else if (s === "style") t.style = ls([t.style, r.style]); else if (tr(s)) {
            const i = t[s], o = r[s];
            o && i !== o && !(z(i) && i.includes(o)) && (t[s] = i ? [].concat(i, o) : o)
        } else s !== "" && (t[s] = r[s])
    }
    return t
}

function Ge(e, t, n, r = null) {
    Ue(e, t, 7, [n, r])
}

const jc = Vo();
let Bc = 0;

function qc(e, t, n) {
    const r = e.type, s = (t ? t.appContext : e.appContext) || jc, i = {
        uid: Bc++,
        vnode: e,
        type: r,
        parent: t,
        appContext: s,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        job: null,
        scope: new ro(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(s.provides),
        ids: t ? t.ids : ["", 0, 0],
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: Jo(r, s),
        emitsOptions: sl(r, s),
        emit: null,
        emitted: null,
        propsDefaults: ae,
        inheritAttrs: r.inheritAttrs,
        ctx: ae,
        data: ae,
        props: ae,
        attrs: ae,
        slots: ae,
        refs: ae,
        setupState: ae,
        setupContext: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return i.ctx = {_: i}, i.root = t ? t.root : i, i.emit = Pc.bind(null, i), e.ce && e.ce(i), i
}

let me = null;
const Tn = () => me || Pe;
let Jn, Wr;
{
    const e = ir(), t = (n, r) => {
        let s;
        return (s = e[n]) || (s = e[n] = []), s.push(r), i => {
            s.length > 1 ? s.forEach(o => o(i)) : s[0](i)
        }
    };
    Jn = t("__VUE_INSTANCE_SETTERS__", n => me = n), Wr = t("__VUE_SSR_SETTERS__", n => wn = n)
}
const On = e => {
    const t = me;
    return Jn(e), e.scope.on(), () => {
        e.scope.off(), Jn(t)
    }
}, Qs = () => {
    me && me.scope.off(), Jn(null)
};

function fl(e) {
    return e.vnode.shapeFlag & 4
}

let wn = !1;

function Fc(e, t = !1, n = !1) {
    t && Wr(t);
    const {props: r, children: s} = e.vnode, i = fl(e);
    hc(e, r, i, t), vc(e, s, n);
    const o = i ? Hc(e, t) : void 0;
    return t && Wr(!1), o
}

function Hc(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, ic);
    const {setup: r} = n;
    if (r) {
        yt();
        const s = e.setupContext = r.length > 1 ? Uc(e) : null, i = On(e), o = Pn(r, e, 0, [e.props, s]), l = Ji(o);
        if (_t(), i(), (l || e.sp) && !un(e) && jo(e), l) {
            if (o.then(Qs, Qs), t) return o.then(a => {
                Js(e, a, t)
            }).catch(a => {
                lr(a, e, 0)
            });
            e.asyncDep = o
        } else Js(e, o, t)
    } else dl(e, t)
}

function Js(e, t, n) {
    G(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : de(t) && (e.setupState = xo(t)), dl(e, n)
}

let Ys;

function dl(e, t, n) {
    const r = e.type;
    if (!e.render) {
        if (!t && Ys && !r.render) {
            const s = r.template || _s(e).template;
            if (s) {
                const {isCustomElement: i, compilerOptions: o} = e.appContext.config, {
                    delimiters: l,
                    compilerOptions: a
                } = r, u = ge(ge({isCustomElement: i, delimiters: l}, o), a);
                r.render = Ys(s, u)
            }
        }
        e.render = r.render || He
    }
    {
        const s = On(e);
        yt();
        try {
            oc(e)
        } finally {
            _t(), s()
        }
    }
}

const zc = {
    get(e, t) {
        return ye(e, "get", ""), e[t]
    }
};

function Uc(e) {
    const t = n => {
        e.exposed = n || {}
    };
    return {attrs: new Proxy(e.attrs, zc), slots: e.slots, emit: e.emit, expose: t}
}

function dr(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(xo(Rn(e.exposed)), {
        get(t, n) {
            if (n in t) return t[n];
            if (n in fn) return fn[n](e)
        }, has(t, n) {
            return n in t || n in fn
        }
    })) : e.proxy
}

function Vc(e, t = !0) {
    return G(e) ? e.displayName || e.name : e.name || t && e.__name
}

function Kc(e) {
    return G(e) && "__vccOpts" in e
}

const W = (e, t) => $a(e, t, wn);

function U(e, t, n) {
    const r = arguments.length;
    return r === 2 ? de(t) && !z(t) ? Qn(t) ? Te(e, null, [t]) : Te(e, t) : Te(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Qn(n) && (n = [n]), Te(e, t, n))
}

const Wc = "3.5.12";
/**
 * @vue/runtime-dom v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/let Gr;
const Xs = typeof window != "undefined" && window.trustedTypes;
if (Xs) try {
    Gr = Xs.createPolicy("vue", {createHTML: e => e})
} catch {
}
const hl = Gr ? e => Gr.createHTML(e) : e => e, Gc = "http://www.w3.org/2000/svg",
    Qc = "http://www.w3.org/1998/Math/MathML", nt = typeof document != "undefined" ? document : null,
    Zs = nt && nt.createElement("template"), Jc = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, n, r) => {
            const s = t === "svg" ? nt.createElementNS(Gc, e) : t === "mathml" ? nt.createElementNS(Qc, e) : n ? nt.createElement(e, {is: n}) : nt.createElement(e);
            return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s
        },
        createText: e => nt.createTextNode(e),
        createComment: e => nt.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => nt.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, n, r, s, i) {
            const o = n ? n.previousSibling : t.lastChild;
            if (s && (s === i || s.nextSibling)) for (; t.insertBefore(s.cloneNode(!0), n), !(s === i || !(s = s.nextSibling));) ; else {
                Zs.innerHTML = hl(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
                const l = Zs.content;
                if (r === "svg" || r === "mathml") {
                    const a = l.firstChild;
                    for (; a.firstChild;) l.appendChild(a.firstChild);
                    l.removeChild(a)
                }
                t.insertBefore(l, n)
            }
            return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
        }
    }, at = "transition", en = "animation", Gt = Symbol("_vtc"), pl = {
        name: String,
        type: String,
        css: {type: Boolean, default: !0},
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
    }, gl = ge({}, Io, pl), Yc = e => (e.displayName = "Transition", e.props = gl, e),
    Xc = Yc((e, {slots: t}) => U(Ka, ml(e), t)), St = (e, t = []) => {
        z(e) ? e.forEach(n => n(...t)) : e && e(...t)
    }, ei = e => e ? z(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function ml(e) {
    const t = {};
    for (const D in e) D in pl || (t[D] = e[D]);
    if (e.css === !1) return t;
    const {
        name: n = "v",
        type: r,
        duration: s,
        enterFromClass: i = `${n}-enter-from`,
        enterActiveClass: o = `${n}-enter-active`,
        enterToClass: l = `${n}-enter-to`,
        appearFromClass: a = i,
        appearActiveClass: u = o,
        appearToClass: c = l,
        leaveFromClass: f = `${n}-leave-from`,
        leaveActiveClass: h = `${n}-leave-active`,
        leaveToClass: g = `${n}-leave-to`
    } = e, v = Zc(s), _ = v && v[0], R = v && v[1], {
        onBeforeEnter: P,
        onEnter: L,
        onEnterCancelled: $,
        onLeave: T,
        onLeaveCancelled: N,
        onBeforeAppear: H = P,
        onAppear: V = L,
        onAppearCancelled: X = $
    } = t, j = (D, Y, M) => {
        ut(D, Y ? c : l), ut(D, Y ? u : o), M && M()
    }, Q = (D, Y) => {
        D._isLeaving = !1, ut(D, f), ut(D, g), ut(D, h), Y && Y()
    }, J = D => (Y, M) => {
        const ee = D ? V : L, ce = () => j(Y, D, M);
        St(ee, [Y, ce]), ti(() => {
            ut(Y, D ? a : i), tt(Y, D ? c : l), ei(ee) || ni(Y, r, _, ce)
        })
    };
    return ge(t, {
        onBeforeEnter(D) {
            St(P, [D]), tt(D, i), tt(D, o)
        }, onBeforeAppear(D) {
            St(H, [D]), tt(D, a), tt(D, u)
        }, onEnter: J(!1), onAppear: J(!0), onLeave(D, Y) {
            D._isLeaving = !0;
            const M = () => Q(D, Y);
            tt(D, f), tt(D, h), bl(), ti(() => {
                !D._isLeaving || (ut(D, f), tt(D, g), ei(T) || ni(D, r, R, M))
            }), St(T, [D, M])
        }, onEnterCancelled(D) {
            j(D, !1), St($, [D])
        }, onAppearCancelled(D) {
            j(D, !0), St(X, [D])
        }, onLeaveCancelled(D) {
            Q(D), St(N, [D])
        }
    })
}

function Zc(e) {
    if (e == null) return null;
    if (de(e)) return [Rr(e.enter), Rr(e.leave)];
    {
        const t = Rr(e);
        return [t, t]
    }
}

function Rr(e) {
    return sa(e)
}

function tt(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e[Gt] || (e[Gt] = new Set)).add(t)
}

function ut(e, t) {
    t.split(/\s+/).forEach(r => r && e.classList.remove(r));
    const n = e[Gt];
    n && (n.delete(t), n.size || (e[Gt] = void 0))
}

function ti(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e)
    })
}

let eu = 0;

function ni(e, t, n, r) {
    const s = e._endId = ++eu, i = () => {
        s === e._endId && r()
    };
    if (n != null) return setTimeout(i, n);
    const {type: o, timeout: l, propCount: a} = vl(e, t);
    if (!o) return r();
    const u = o + "end";
    let c = 0;
    const f = () => {
        e.removeEventListener(u, h), i()
    }, h = g => {
        g.target === e && ++c >= a && f()
    };
    setTimeout(() => {
        c < a && f()
    }, l + 1), e.addEventListener(u, h)
}

function vl(e, t) {
    const n = window.getComputedStyle(e), r = v => (n[v] || "").split(", "), s = r(`${at}Delay`),
        i = r(`${at}Duration`), o = ri(s, i), l = r(`${en}Delay`), a = r(`${en}Duration`), u = ri(l, a);
    let c = null, f = 0, h = 0;
    t === at ? o > 0 && (c = at, f = o, h = i.length) : t === en ? u > 0 && (c = en, f = u, h = a.length) : (f = Math.max(o, u), c = f > 0 ? o > u ? at : en : null, h = c ? c === at ? i.length : a.length : 0);
    const g = c === at && /\b(transform|all)(,|$)/.test(r(`${at}Property`).toString());
    return {type: c, timeout: f, propCount: h, hasTransform: g}
}

function ri(e, t) {
    for (; e.length < t.length;) e = e.concat(e);
    return Math.max(...t.map((n, r) => si(n) + si(e[r])))
}

function si(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}

function bl() {
    return document.body.offsetHeight
}

function tu(e, t, n) {
    const r = e[Gt];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}

const ii = Symbol("_vod"), nu = Symbol("_vsh"), ru = Symbol(""), su = /(^|;)\s*display\s*:/;

function iu(e, t, n) {
    const r = e.style, s = pe(n);
    let i = !1;
    if (n && !s) {
        if (t) if (pe(t)) for (const o of t.split(";")) {
            const l = o.slice(0, o.indexOf(":")).trim();
            n[l] == null && Hn(r, l, "")
        } else for (const o in t) n[o] == null && Hn(r, o, "");
        for (const o in n) o === "display" && (i = !0), Hn(r, o, n[o])
    } else if (s) {
        if (t !== n) {
            const o = r[ru];
            o && (n += ";" + o), r.cssText = n, i = su.test(n)
        }
    } else t && e.removeAttribute("style");
    ii in e && (e[ii] = i ? r.display : "", e[nu] && (r.display = "none"))
}

const oi = /\s*!important$/;

function Hn(e, t, n) {
    if (z(n)) n.forEach(r => Hn(e, t, r)); else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n); else {
        const r = ou(e, t);
        oi.test(n) ? e.setProperty(Lt(r), n.replace(oi, ""), "important") : e[r] = n
    }
}

const li = ["Webkit", "Moz", "ms"], Pr = {};

function ou(e, t) {
    const n = Pr[t];
    if (n) return n;
    let r = je(t);
    if (r !== "filter" && r in e) return Pr[t] = r;
    r = sr(r);
    for (let s = 0; s < li.length; s++) {
        const i = li[s] + r;
        if (i in e) return Pr[t] = i
    }
    return t
}

const ai = "http://www.w3.org/1999/xlink";

function ci(e, t, n, r, s, i = ua(t)) {
    r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ai, t.slice(6, t.length)) : e.setAttributeNS(ai, t, n) : n == null || i && !eo(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : bt(n) ? String(n) : n)
}

function ui(e, t, n, r, s) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? hl(n) : n);
        return
    }
    const i = e.tagName;
    if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
        const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value,
            a = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
        (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
        return
    }
    let o = !1;
    if (n === "" || n == null) {
        const l = typeof e[t];
        l === "boolean" ? n = eo(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0)
    }
    try {
        e[t] = n
    } catch {
    }
    o && e.removeAttribute(s || t)
}

function lu(e, t, n, r) {
    e.addEventListener(t, n, r)
}

function au(e, t, n, r) {
    e.removeEventListener(t, n, r)
}

const fi = Symbol("_vei");

function cu(e, t, n, r, s = null) {
    const i = e[fi] || (e[fi] = {}), o = i[t];
    if (r && o) o.value = r; else {
        const [l, a] = uu(t);
        if (r) {
            const u = i[t] = hu(r, s);
            lu(e, l, u, a)
        } else o && (au(e, l, o, a), i[t] = void 0)
    }
}

const di = /(?:Once|Passive|Capture)$/;

function uu(e) {
    let t;
    if (di.test(e)) {
        t = {};
        let r;
        for (; r = e.match(di);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : Lt(e.slice(2)), t]
}

let Tr = 0;
const fu = Promise.resolve(), du = () => Tr || (fu.then(() => Tr = 0), Tr = Date.now());

function hu(e, t) {
    const n = r => {
        if (!r._vts) r._vts = Date.now(); else if (r._vts <= n.attached) return;
        Ue(pu(r, n.value), t, 5, [r])
    };
    return n.value = e, n.attached = du(), n
}

function pu(e, t) {
    if (z(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e), e._stopped = !0
        }, t.map(r => s => !s._stopped && r && r(s))
    } else return t
}

const hi = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    gu = (e, t, n, r, s, i) => {
        const o = s === "svg";
        t === "class" ? tu(e, r, o) : t === "style" ? iu(e, n, r) : tr(t) ? ss(t) || cu(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : mu(e, t, r, o)) ? (ui(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ci(e, t, r, o, i, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !pe(r)) ? ui(e, je(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), ci(e, t, r, o))
    };

function mu(e, t, n, r) {
    if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && hi(t) && G(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
    if (t === "width" || t === "height") {
        const s = e.tagName;
        if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE") return !1
    }
    return hi(t) && pe(n) ? !1 : t in e
}

const yl = new WeakMap, _l = new WeakMap, Yn = Symbol("_moveCb"), pi = Symbol("_enterCb"),
    vu = e => (delete e.props.mode, e), bu = vu({
        name: "TransitionGroup", props: ge({}, gl, {tag: String, moveClass: String}), setup(e, {slots: t}) {
            const n = Tn(), r = Mo();
            let s, i;
            return Fo(() => {
                if (!s.length) return;
                const o = e.moveClass || `${e.name || "v"}-move`;
                if (!Su(s[0].el, n.vnode.el, o)) return;
                s.forEach(_u), s.forEach(wu);
                const l = s.filter(xu);
                bl(), l.forEach(a => {
                    const u = a.el, c = u.style;
                    tt(u, o), c.transform = c.webkitTransform = c.transitionDuration = "";
                    const f = u[Yn] = h => {
                        h && h.target !== u || (!h || /transform$/.test(h.propertyName)) && (u.removeEventListener("transitionend", f), u[Yn] = null, ut(u, o))
                    };
                    u.addEventListener("transitionend", f)
                })
            }), () => {
                const o = te(e), l = ml(o);
                let a = o.tag || Fe;
                if (s = [], i) for (let u = 0; u < i.length; u++) {
                    const c = i[u];
                    c.el && c.el instanceof Element && (s.push(c), Ot(c, yn(c, l, r, n)), yl.set(c, c.el.getBoundingClientRect()))
                }
                i = t.default ? vs(t.default()) : [];
                for (let u = 0; u < i.length; u++) {
                    const c = i[u];
                    c.key != null && Ot(c, yn(c, l, r, n))
                }
                return Te(a, null, i)
            }
        }
    }), yu = bu;

function _u(e) {
    const t = e.el;
    t[Yn] && t[Yn](), t[pi] && t[pi]()
}

function wu(e) {
    _l.set(e, e.el.getBoundingClientRect())
}

function xu(e) {
    const t = yl.get(e), n = _l.get(e), r = t.left - n.left, s = t.top - n.top;
    if (r || s) {
        const i = e.el.style;
        return i.transform = i.webkitTransform = `translate(${r}px,${s}px)`, i.transitionDuration = "0s", e
    }
}

function Su(e, t, n) {
    const r = e.cloneNode(), s = e[Gt];
    s && s.forEach(l => {
        l.split(/\s+/).forEach(a => a && r.classList.remove(a))
    }), n.split(/\s+/).forEach(l => l && r.classList.add(l)), r.style.display = "none";
    const i = t.nodeType === 1 ? t : t.parentNode;
    i.appendChild(r);
    const {hasTransform: o} = vl(r);
    return i.removeChild(r), o
}

const Cu = ge({patchProp: gu}, Jc);
let gi;

function Eu() {
    return gi || (gi = yc(Cu))
}

const wl = (...e) => {
    const t = Eu().createApp(...e), {mount: n} = t;
    return t.mount = r => {
        const s = Pu(r);
        if (!s) return;
        const i = t._component;
        !G(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
        const o = n(s, !1, Ru(s));
        return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o
    }, t
};

function Ru(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function Pu(e) {
    return pe(e) ? document.querySelector(e) : e
}

function Cs(e, t, n, r) {
    return Object.defineProperty(e, t, {get: n, set: r, enumerable: !0}), e
}

const kt = vn(!1);
let Qr;

function Tu(e, t) {
    const n = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
    return {browser: n[5] || n[3] || n[1] || "", version: n[4] || n[2] || "0", platform: t[0] || ""}
}

function Ou(e) {
    return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || []
}

const xl = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;

function ku(e) {
    const t = e.toLowerCase(), n = Ou(t), r = Tu(t, n), s = {
        mobile: !1,
        desktop: !1,
        cordova: !1,
        capacitor: !1,
        nativeMobile: !1,
        electron: !1,
        bex: !1,
        linux: !1,
        mac: !1,
        win: !1,
        cros: !1,
        chrome: !1,
        firefox: !1,
        opera: !1,
        safari: !1,
        vivaldi: !1,
        edge: !1,
        edgeChromium: !1,
        ie: !1,
        webkit: !1,
        android: !1,
        ios: !1,
        ipad: !1,
        iphone: !1,
        ipod: !1,
        kindle: !1,
        winphone: !1,
        blackberry: !1,
        playbook: !1,
        silk: !1
    };
    r.browser && (s[r.browser] = !0, s.version = r.version, s.versionNumber = parseInt(r.version, 10)), r.platform && (s[r.platform] = !0);
    const i = s.android || s.ios || s.bb || s.blackberry || s.ipad || s.iphone || s.ipod || s.kindle || s.playbook || s.silk || s["windows phone"];
    if (i === !0 || t.indexOf("mobile") !== -1 ? s.mobile = !0 : s.desktop = !0, s["windows phone"] && (s.winphone = !0, delete s["windows phone"]), s.edga || s.edgios || s.edg ? (s.edge = !0, r.browser = "edge") : s.crios ? (s.chrome = !0, r.browser = "chrome") : s.fxios && (s.firefox = !0, r.browser = "firefox"), (s.ipod || s.ipad || s.iphone) && (s.ios = !0), s.vivaldi && (r.browser = "vivaldi", s.vivaldi = !0), (s.chrome || s.opr || s.safari || s.vivaldi || s.mobile === !0 && s.ios !== !0 && i !== !0) && (s.webkit = !0), s.opr && (r.browser = "opera", s.opera = !0), s.safari && (s.blackberry || s.bb ? (r.browser = "blackberry", s.blackberry = !0) : s.playbook ? (r.browser = "playbook", s.playbook = !0) : s.android ? (r.browser = "android", s.android = !0) : s.kindle ? (r.browser = "kindle", s.kindle = !0) : s.silk && (r.browser = "silk", s.silk = !0)), s.name = r.browser, s.platform = r.platform, t.indexOf("electron") !== -1) s.electron = !0; else if (document.location.href.indexOf("-extension://") !== -1) s.bex = !0; else {
        if (window.Capacitor !== void 0 ? (s.capacitor = !0, s.nativeMobile = !0, s.nativeMobileWrapper = "capacitor") : (window._cordovaNative !== void 0 || window.cordova !== void 0) && (s.cordova = !0, s.nativeMobile = !0, s.nativeMobileWrapper = "cordova"), kt.value === !0 && (Qr = {is: {...s}}), xl === !0 && s.mac === !0 && (s.desktop === !0 && s.safari === !0 || s.nativeMobile === !0 && s.android !== !0 && s.ios !== !0 && s.ipad !== !0)) {
            delete s.mac, delete s.desktop;
            const o = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
            Object.assign(s, {mobile: !0, ios: !0, platform: o, [o]: !0})
        }
        s.mobile !== !0 && window.navigator.userAgentData && window.navigator.userAgentData.mobile && (delete s.desktop, s.mobile = !0)
    }
    return s
}

const mi = navigator.userAgent || navigator.vendor || window.opera,
    Au = {has: {touch: !1, webStorage: !1}, within: {iframe: !1}},
    Ye = {userAgent: mi, is: ku(mi), has: {touch: xl}, within: {iframe: window.self !== window.top}}, Jr = {
        install(e) {
            const {$q: t} = e;
            kt.value === !0 ? (e.onSSRHydrated.push(() => {
                Object.assign(t.platform, Ye), kt.value = !1
            }), t.platform = Yt(this)) : t.platform = this
        }
    };
{
    let e;
    Cs(Ye.has, "webStorage", () => {
        if (e !== void 0) return e;
        try {
            if (window.localStorage) return e = !0, !0
        } catch {
        }
        return e = !1, !1
    }), Object.assign(Jr, Ye), kt.value === !0 && (Object.assign(Jr, Qr, Au), Qr = null)
}

function kn(e) {
    return Rn(bs(e))
}

function Lu(e) {
    return Rn(e)
}

const hr = (e, t) => {
    const n = Yt(e);
    for (const r in e) Cs(t, r, () => n[r], s => {
        n[r] = s
    });
    return t
}, At = {hasPassive: !1, passiveCapture: !0, notPassiveCapture: !0};
try {
    const e = Object.defineProperty({}, "passive", {
        get() {
            Object.assign(At, {
                hasPassive: !0,
                passive: {passive: !0},
                notPassive: {passive: !1},
                passiveCapture: {passive: !0, capture: !0},
                notPassiveCapture: {passive: !1, capture: !0}
            })
        }
    });
    window.addEventListener("qtest", null, e), window.removeEventListener("qtest", null, e)
} catch {
}

function xn() {
}

function ih(e) {
    return e.button === 0
}

function Mu(e) {
    return e.touches && e.touches[0] ? e = e.touches[0] : e.changedTouches && e.changedTouches[0] ? e = e.changedTouches[0] : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]), {
        top: e.clientY,
        left: e.clientX
    }
}

function oh(e) {
    if (e.path) return e.path;
    if (e.composedPath) return e.composedPath();
    const t = [];
    let n = e.target;
    for (; n;) {
        if (t.push(n), n.tagName === "HTML") return t.push(document), t.push(window), t;
        n = n.parentElement
    }
}

function Sl(e) {
    e.stopPropagation()
}

function Yr(e) {
    e.cancelable !== !1 && e.preventDefault()
}

function Dt(e) {
    e.cancelable !== !1 && e.preventDefault(), e.stopPropagation()
}

function lh(e, t) {
    if (e === void 0 || t === !0 && e.__dragPrevented === !0) return;
    const n = t === !0 ? r => {
        r.__dragPrevented = !0, r.addEventListener("dragstart", Yr, At.notPassiveCapture)
    } : r => {
        delete r.__dragPrevented, r.removeEventListener("dragstart", Yr, At.notPassiveCapture)
    };
    e.querySelectorAll("a, img").forEach(n)
}

function Iu(e, t, n) {
    const r = `__q_${t}_evt`;
    e[r] = e[r] !== void 0 ? e[r].concat(n) : n, n.forEach(s => {
        s[0].addEventListener(s[1], e[s[2]], At[s[3]])
    })
}

function $u(e, t) {
    const n = `__q_${t}_evt`;
    e[n] !== void 0 && (e[n].forEach(r => {
        r[0].removeEventListener(r[1], e[r[2]], At[r[3]])
    }), e[n] = void 0)
}

function Du(e, t = 250, n) {
    let r = null;

    function s() {
        const i = arguments, o = () => {
            r = null, n !== !0 && e.apply(this, i)
        };
        r !== null ? clearTimeout(r) : n === !0 && e.apply(this, i), r = setTimeout(o, t)
    }

    return s.cancel = () => {
        r !== null && clearTimeout(r)
    }, s
}

const Or = ["sm", "md", "lg", "xl"], {passive: vi} = At;
var Nu = hr({
    width: 0,
    height: 0,
    name: "xs",
    sizes: {sm: 600, md: 1024, lg: 1440, xl: 1920},
    lt: {sm: !0, md: !0, lg: !0, xl: !0},
    gt: {xs: !1, sm: !1, md: !1, lg: !1},
    xs: !0,
    sm: !1,
    md: !1,
    lg: !1,
    xl: !1
}, {
    setSizes: xn, setDebounce: xn, install({$q: e, onSSRHydrated: t}) {
        if (e.screen = this, this.__installed === !0) {
            e.config.screen !== void 0 && (e.config.screen.bodyClasses === !1 ? document.body.classList.remove(`screen--${this.name}`) : this.__update(!0));
            return
        }
        const {visualViewport: n} = window, r = n || window, s = document.scrollingElement || document.documentElement,
            i = n === void 0 || Ye.is.mobile === !0 ? () => [Math.max(window.innerWidth, s.clientWidth), Math.max(window.innerHeight, s.clientHeight)] : () => [n.width * n.scale + window.innerWidth - s.clientWidth, n.height * n.scale + window.innerHeight - s.clientHeight],
            o = e.config.screen !== void 0 && e.config.screen.bodyClasses === !0;
        this.__update = f => {
            const [h, g] = i();
            if (g !== this.height && (this.height = g), h !== this.width) this.width = h; else if (f !== !0) return;
            let v = this.sizes;
            this.gt.xs = h >= v.sm, this.gt.sm = h >= v.md, this.gt.md = h >= v.lg, this.gt.lg = h >= v.xl, this.lt.sm = h < v.sm, this.lt.md = h < v.md, this.lt.lg = h < v.lg, this.lt.xl = h < v.xl, this.xs = this.lt.sm, this.sm = this.gt.xs === !0 && this.lt.md === !0, this.md = this.gt.sm === !0 && this.lt.lg === !0, this.lg = this.gt.md === !0 && this.lt.xl === !0, this.xl = this.gt.lg, v = this.xs === !0 && "xs" || this.sm === !0 && "sm" || this.md === !0 && "md" || this.lg === !0 && "lg" || "xl", v !== this.name && (o === !0 && (document.body.classList.remove(`screen--${this.name}`), document.body.classList.add(`screen--${v}`)), this.name = v)
        };
        let l, a = {}, u = 16;
        this.setSizes = f => {
            Or.forEach(h => {
                f[h] !== void 0 && (a[h] = f[h])
            })
        }, this.setDebounce = f => {
            u = f
        };
        const c = () => {
            const f = getComputedStyle(document.body);
            f.getPropertyValue("--q-size-sm") && Or.forEach(h => {
                this.sizes[h] = parseInt(f.getPropertyValue(`--q-size-${h}`), 10)
            }), this.setSizes = h => {
                Or.forEach(g => {
                    h[g] && (this.sizes[g] = h[g])
                }), this.__update(!0)
            }, this.setDebounce = h => {
                l !== void 0 && r.removeEventListener("resize", l, vi), l = h > 0 ? Du(this.__update, h) : this.__update, r.addEventListener("resize", l, vi)
            }, this.setDebounce(u), Object.keys(a).length !== 0 ? (this.setSizes(a), a = void 0) : this.__update(), o === !0 && this.name === "xs" && document.body.classList.add("screen--xs")
        };
        kt.value === !0 ? t.push(c) : c()
    }
});
const be = hr({isActive: !1, mode: !1}, {
    __media: void 0, set(e) {
        be.mode = e, e === "auto" ? (be.__media === void 0 && (be.__media = window.matchMedia("(prefers-color-scheme: dark)"), be.__updateMedia = () => {
            be.set("auto")
        }, be.__media.addListener(be.__updateMedia)), e = be.__media.matches) : be.__media !== void 0 && (be.__media.removeListener(be.__updateMedia), be.__media = void 0), be.isActive = e === !0, document.body.classList.remove(`body--${e === !0 ? "light" : "dark"}`), document.body.classList.add(`body--${e === !0 ? "dark" : "light"}`)
    }, toggle() {
        be.set(be.isActive === !1)
    }, install({$q: e, ssrContext: t}) {
        const {dark: n} = e.config;
        e.dark = this, this.__installed !== !0 && this.set(n !== void 0 ? n : !1)
    }
});

function ju(e, t, n = document.body) {
    if (typeof e != "string") throw new TypeError("Expected a string as propName");
    if (typeof t != "string") throw new TypeError("Expected a string as value");
    if (!(n instanceof Element)) throw new TypeError("Expected a DOM element");
    n.style.setProperty(`--q-${e}`, t)
}

let Cl = !1;

function Bu(e) {
    Cl = e.isComposing === !0
}

function qu(e) {
    return Cl === !0 || e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0
}

function Xr(e, t) {
    return qu(e) === !0 ? !1 : [].concat(t).includes(e.keyCode)
}

function El(e) {
    if (e.ios === !0) return "ios";
    if (e.android === !0) return "android"
}

function Fu({is: e, has: t, within: n}, r) {
    const s = [e.desktop === !0 ? "desktop" : "mobile", `${t.touch === !1 ? "no-" : ""}touch`];
    if (e.mobile === !0) {
        const i = El(e);
        i !== void 0 && s.push("platform-" + i)
    }
    if (e.nativeMobile === !0) {
        const i = e.nativeMobileWrapper;
        s.push(i), s.push("native-mobile"), e.ios === !0 && (r[i] === void 0 || r[i].iosStatusBarPadding !== !1) && s.push("q-ios-padding")
    } else e.electron === !0 ? s.push("electron") : e.bex === !0 && s.push("bex");
    return n.iframe === !0 && s.push("within-iframe"), s
}

function Hu() {
    const {is: e} = Ye, t = document.body.className, n = new Set(t.replace(/ {2}/g, " ").split(" "));
    if (e.nativeMobile !== !0 && e.electron !== !0 && e.bex !== !0) {
        if (e.desktop === !0) n.delete("mobile"), n.delete("platform-ios"), n.delete("platform-android"), n.add("desktop"); else if (e.mobile === !0) {
            n.delete("desktop"), n.add("mobile"), n.delete("platform-ios"), n.delete("platform-android");
            const s = El(e);
            s !== void 0 && n.add(`platform-${s}`)
        }
    }
    Ye.has.touch === !0 && (n.delete("no-touch"), n.add("touch")), Ye.within.iframe === !0 && n.add("within-iframe");
    const r = Array.from(n).join(" ");
    t !== r && (document.body.className = r)
}

function zu(e) {
    for (const t in e) ju(t, e[t])
}

var Uu = {
    install(e) {
        if (this.__installed !== !0) {
            if (kt.value === !0) Hu(); else {
                const {$q: t} = e;
                t.config.brand !== void 0 && zu(t.config.brand);
                const n = Fu(Ye, t.config);
                document.body.classList.add.apply(document.body.classList, n)
            }
            Ye.is.ios === !0 && document.body.addEventListener("touchstart", xn), window.addEventListener("keydown", Bu, !0)
        }
    }
};
const Rl = () => !0;

function Vu(e) {
    return typeof e == "string" && e !== "" && e !== "/" && e !== "#/"
}

function Ku(e) {
    return e.startsWith("#") === !0 && (e = e.substring(1)), e.startsWith("/") === !1 && (e = "/" + e), e.endsWith("/") === !0 && (e = e.substring(0, e.length - 1)), "#" + e
}

function Wu(e) {
    if (e.backButtonExit === !1) return () => !1;
    if (e.backButtonExit === "*") return Rl;
    const t = ["#/"];
    return Array.isArray(e.backButtonExit) === !0 && t.push(...e.backButtonExit.filter(Vu).map(Ku)), () => t.includes(window.location.hash)
}

var Gu = {
    __history: [], add: xn, remove: xn, install({$q: e}) {
        if (this.__installed === !0) return;
        const {cordova: t, capacitor: n} = Ye.is;
        if (t !== !0 && n !== !0) return;
        const r = e.config[t === !0 ? "cordova" : "capacitor"];
        if (r !== void 0 && r.backButton === !1 || n === !0 && (window.Capacitor === void 0 || window.Capacitor.Plugins.App === void 0)) return;
        this.add = o => {
            o.condition === void 0 && (o.condition = Rl), this.__history.push(o)
        }, this.remove = o => {
            const l = this.__history.indexOf(o);
            l >= 0 && this.__history.splice(l, 1)
        };
        const s = Wu(Object.assign({backButtonExit: !0}, r)), i = () => {
            if (this.__history.length) {
                const o = this.__history[this.__history.length - 1];
                o.condition() === !0 && (this.__history.pop(), o.handler())
            } else s() === !0 ? navigator.app.exitApp() : window.history.back()
        };
        t === !0 ? document.addEventListener("deviceready", () => {
            document.addEventListener("backbutton", i, !1)
        }) : window.Capacitor.Plugins.App.addListener("backButton", i)
    }
}, bi = {
    isoName: "en-US",
    nativeName: "English (US)",
    label: {
        clear: "Clear",
        ok: "OK",
        cancel: "Cancel",
        close: "Close",
        set: "Set",
        select: "Select",
        reset: "Reset",
        remove: "Remove",
        update: "Update",
        create: "Create",
        search: "Search",
        filter: "Filter",
        refresh: "Refresh",
        expand: e => e ? `Expand "${e}"` : "Expand",
        collapse: e => e ? `Collapse "${e}"` : "Collapse"
    },
    date: {
        days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        firstDayOfWeek: 0,
        format24h: !1,
        pluralDay: "days"
    },
    table: {
        noData: "No data available",
        noResults: "No matching records found",
        loading: "Loading...",
        selectedRecords: e => e === 1 ? "1 record selected." : (e === 0 ? "No" : e) + " records selected.",
        recordsPerPage: "Records per page:",
        allRows: "All",
        pagination: (e, t, n) => e + "-" + t + " of " + n,
        columns: "Columns"
    },
    editor: {
        url: "URL",
        bold: "Bold",
        italic: "Italic",
        strikethrough: "Strikethrough",
        underline: "Underline",
        unorderedList: "Unordered List",
        orderedList: "Ordered List",
        subscript: "Subscript",
        superscript: "Superscript",
        hyperlink: "Hyperlink",
        toggleFullscreen: "Toggle Fullscreen",
        quote: "Quote",
        left: "Left align",
        center: "Center align",
        right: "Right align",
        justify: "Justify align",
        print: "Print",
        outdent: "Decrease indentation",
        indent: "Increase indentation",
        removeFormat: "Remove formatting",
        formatting: "Formatting",
        fontSize: "Font Size",
        align: "Align",
        hr: "Insert Horizontal Rule",
        undo: "Undo",
        redo: "Redo",
        heading1: "Heading 1",
        heading2: "Heading 2",
        heading3: "Heading 3",
        heading4: "Heading 4",
        heading5: "Heading 5",
        heading6: "Heading 6",
        paragraph: "Paragraph",
        code: "Code",
        size1: "Very small",
        size2: "A bit small",
        size3: "Normal",
        size4: "Medium-large",
        size5: "Big",
        size6: "Very big",
        size7: "Maximum",
        defaultFont: "Default Font",
        viewSource: "View Source"
    },
    tree: {noNodes: "No nodes available", noResults: "No matching nodes found"}
};

function yi() {
    const e = Array.isArray(navigator.languages) === !0 && navigator.languages.length !== 0 ? navigator.languages[0] : navigator.language;
    if (typeof e == "string") return e.split(/[-_]/).map((t, n) => n === 0 ? t.toLowerCase() : n > 1 || t.length < 4 ? t.toUpperCase() : t[0].toUpperCase() + t.slice(1).toLowerCase()).join("-")
}

const pt = hr({__qLang: {}}, {
    getLocale: yi, set(e = bi, t) {
        const n = {...e, rtl: e.rtl === !0, getLocale: yi};
        {
            if (n.set = pt.set, pt.__langConfig === void 0 || pt.__langConfig.noHtmlAttrs !== !0) {
                const r = document.documentElement;
                r.setAttribute("dir", n.rtl === !0 ? "rtl" : "ltr"), r.setAttribute("lang", n.isoName)
            }
            Object.assign(pt.__qLang, n)
        }
    }, install({$q: e, lang: t, ssrContext: n}) {
        e.lang = pt.__qLang, pt.__langConfig = e.config.lang, this.__installed === !0 ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qLang, {
            get() {
                return Reflect.get(...arguments)
            }, ownKeys(r) {
                return Reflect.ownKeys(r).filter(s => s !== "set" && s !== "getLocale")
            }
        }), this.set(t || bi))
    }
});
var Qu = {
    name: "material-icons",
    type: {positive: "check_circle", negative: "warning", info: "info", warning: "priority_high"},
    arrow: {
        up: "arrow_upward",
        right: "arrow_forward",
        down: "arrow_downward",
        left: "arrow_back",
        dropdown: "arrow_drop_down"
    },
    chevron: {left: "chevron_left", right: "chevron_right"},
    colorPicker: {spectrum: "gradient", tune: "tune", palette: "style"},
    pullToRefresh: {icon: "refresh"},
    carousel: {
        left: "chevron_left",
        right: "chevron_right",
        up: "keyboard_arrow_up",
        down: "keyboard_arrow_down",
        navigationIcon: "lens"
    },
    chip: {remove: "cancel", selected: "check"},
    datetime: {arrowLeft: "chevron_left", arrowRight: "chevron_right", now: "access_time", today: "today"},
    editor: {
        bold: "format_bold",
        italic: "format_italic",
        strikethrough: "strikethrough_s",
        underline: "format_underlined",
        unorderedList: "format_list_bulleted",
        orderedList: "format_list_numbered",
        subscript: "vertical_align_bottom",
        superscript: "vertical_align_top",
        hyperlink: "link",
        toggleFullscreen: "fullscreen",
        quote: "format_quote",
        left: "format_align_left",
        center: "format_align_center",
        right: "format_align_right",
        justify: "format_align_justify",
        print: "print",
        outdent: "format_indent_decrease",
        indent: "format_indent_increase",
        removeFormat: "format_clear",
        formatting: "text_format",
        fontSize: "format_size",
        align: "format_align_left",
        hr: "remove",
        undo: "undo",
        redo: "redo",
        heading: "format_size",
        code: "code",
        size: "format_size",
        font: "font_download",
        viewSource: "code"
    },
    expansionItem: {icon: "keyboard_arrow_down", denseIcon: "arrow_drop_down"},
    fab: {icon: "add", activeIcon: "close"},
    field: {clear: "cancel", error: "error"},
    pagination: {first: "first_page", prev: "keyboard_arrow_left", next: "keyboard_arrow_right", last: "last_page"},
    rating: {icon: "grade"},
    stepper: {done: "check", active: "edit", error: "warning"},
    tabs: {left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down"},
    table: {
        arrowUp: "arrow_upward",
        warning: "warning",
        firstPage: "first_page",
        prevPage: "chevron_left",
        nextPage: "chevron_right",
        lastPage: "last_page"
    },
    tree: {icon: "play_arrow"},
    uploader: {
        done: "done",
        clear: "clear",
        add: "add_box",
        upload: "cloud_upload",
        removeQueue: "clear_all",
        removeUploaded: "done_all"
    }
};
const Xn = hr({iconMapFn: null, __qIconSet: {}}, {
    set(e, t) {
        const n = {...e};
        n.set = Xn.set, Object.assign(Xn.__qIconSet, n)
    }, install({$q: e, iconSet: t, ssrContext: n}) {
        e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn), e.iconSet = this.__qIconSet, Cs(e, "iconMapFn", () => this.iconMapFn, r => {
            this.iconMapFn = r
        }), this.__installed === !0 ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qIconSet, {
            get() {
                return Reflect.get(...arguments)
            }, ownKeys(r) {
                return Reflect.ownKeys(r).filter(s => s !== "set")
            }
        }), this.set(t || Qu))
    }
}), Ju = "_q_", ah = "_q_l_", ch = "_q_pc_", uh = "_q_fo_";

function fh() {
}

const Zn = {};
let Pl = !1;

function Yu() {
    Pl = !0
}

function kr(e, t) {
    if (e === t) return !0;
    if (e !== null && t !== null && typeof e == "object" && typeof t == "object") {
        if (e.constructor !== t.constructor) return !1;
        let n, r;
        if (e.constructor === Array) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; r-- !== 0;) if (kr(e[r], t[r]) !== !0) return !1;
            return !0
        }
        if (e.constructor === Map) {
            if (e.size !== t.size) return !1;
            let i = e.entries();
            for (r = i.next(); r.done !== !0;) {
                if (t.has(r.value[0]) !== !0) return !1;
                r = i.next()
            }
            for (i = e.entries(), r = i.next(); r.done !== !0;) {
                if (kr(r.value[1], t.get(r.value[0])) !== !0) return !1;
                r = i.next()
            }
            return !0
        }
        if (e.constructor === Set) {
            if (e.size !== t.size) return !1;
            const i = e.entries();
            for (r = i.next(); r.done !== !0;) {
                if (t.has(r.value[0]) !== !0) return !1;
                r = i.next()
            }
            return !0
        }
        if (e.buffer != null && e.buffer.constructor === ArrayBuffer) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; r-- !== 0;) if (e[r] !== t[r]) return !1;
            return !0
        }
        if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
        const s = Object.keys(e).filter(i => e[i] !== void 0);
        if (n = s.length, n !== Object.keys(t).filter(i => t[i] !== void 0).length) return !1;
        for (r = n; r-- !== 0;) {
            const i = s[r];
            if (kr(e[i], t[i]) !== !0) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function Sn(e) {
    return e !== null && typeof e == "object" && Array.isArray(e) !== !0
}

const _i = [Jr, Uu, be, Nu, Gu, pt, Xn];

function Xu(e, t) {
    const n = wl(e);
    n.config.globalProperties = t.config.globalProperties;
    const {reload: r, ...s} = t._context;
    return Object.assign(n._context, s), n
}

function wi(e, t) {
    t.forEach(n => {
        n.install(e), n.__installed = !0
    })
}

function Zu(e, t, n) {
    e.config.globalProperties.$q = n.$q, e.provide(Ju, n.$q), wi(n, _i), t.components !== void 0 && Object.values(t.components).forEach(r => {
        Sn(r) === !0 && r.name !== void 0 && e.component(r.name, r)
    }), t.directives !== void 0 && Object.values(t.directives).forEach(r => {
        Sn(r) === !0 && r.name !== void 0 && e.directive(r.name, r)
    }), t.plugins !== void 0 && wi(n, Object.values(t.plugins).filter(r => typeof r.install == "function" && _i.includes(r) === !1)), kt.value === !0 && (n.$q.onSSRHydrated = () => {
        n.onSSRHydrated.forEach(r => {
            r()
        }), n.$q.onSSRHydrated = () => {
        }
    })
}

var ef = function (e, t = {}) {
    const n = {version: "2.17.0"};
    Pl === !1 ? (t.config !== void 0 && Object.assign(Zn, t.config), n.config = {...Zn}, Yu()) : n.config = t.config || {}, Zu(e, t, {
        parentApp: e,
        $q: n,
        lang: t.lang,
        iconSet: t.iconSet,
        onSSRHydrated: []
    })
}, tf = {name: "Quasar", version: "2.17.0", install: ef, lang: pt, iconSet: Xn};
const nf = Object.assign({name: "App"}, {
    __name: "App", setup(e) {
        return (t, n) => {
            const r = nc("router-view");
            return ol(), al(r)
        }
    }
});

function dh(e) {
    return e
}/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const Ft = typeof document != "undefined";

function Tl(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function rf(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Tl(e.default)
}

const oe = Object.assign;

function Ar(e, t) {
    const n = {};
    for (const r in t) {
        const s = t[r];
        n[r] = Ve(s) ? s.map(e) : e(s)
    }
    return n
}

const hn = () => {
    }, Ve = Array.isArray, Ol = /#/g, sf = /&/g, of = /\//g, lf = /=/g, af = /\?/g, kl = /\+/g, cf = /%5B/g, uf = /%5D/g,
    Al = /%5E/g, ff = /%60/g, Ll = /%7B/g, df = /%7C/g, Ml = /%7D/g, hf = /%20/g;

function Es(e) {
    return encodeURI("" + e).replace(df, "|").replace(cf, "[").replace(uf, "]")
}

function pf(e) {
    return Es(e).replace(Ll, "{").replace(Ml, "}").replace(Al, "^")
}

function Zr(e) {
    return Es(e).replace(kl, "%2B").replace(hf, "+").replace(Ol, "%23").replace(sf, "%26").replace(ff, "`").replace(Ll, "{").replace(Ml, "}").replace(Al, "^")
}

function gf(e) {
    return Zr(e).replace(lf, "%3D")
}

function mf(e) {
    return Es(e).replace(Ol, "%23").replace(af, "%3F")
}

function vf(e) {
    return e == null ? "" : mf(e).replace(of, "%2F")
}

function Cn(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {
    }
    return "" + e
}

const bf = /\/$/, yf = e => e.replace(bf, "");

function Lr(e, t, n = "/") {
    let r, s = {}, i = "", o = "";
    const l = t.indexOf("#");
    let a = t.indexOf("?");
    return l < a && l >= 0 && (a = -1), a > -1 && (r = t.slice(0, a), i = t.slice(a + 1, l > -1 ? l : t.length), s = e(i)), l > -1 && (r = r || t.slice(0, l), o = t.slice(l, t.length)), r = Sf(r != null ? r : t, n), {
        fullPath: r + (i && "?") + i + o,
        path: r,
        query: s,
        hash: Cn(o)
    }
}

function _f(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}

function xi(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function wf(e, t, n) {
    const r = t.matched.length - 1, s = n.matched.length - 1;
    return r > -1 && r === s && Qt(t.matched[r], n.matched[s]) && Il(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}

function Qt(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}

function Il(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e) if (!xf(e[n], t[n])) return !1;
    return !0
}

function xf(e, t) {
    return Ve(e) ? Si(e, t) : Ve(t) ? Si(t, e) : e === t
}

function Si(e, t) {
    return Ve(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t
}

function Sf(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"), r = e.split("/"), s = r[r.length - 1];
    (s === ".." || s === ".") && r.push("");
    let i = n.length - 1, o, l;
    for (o = 0; o < r.length; o++) if (l = r[o], l !== ".") if (l === "..") i > 1 && i--; else break;
    return n.slice(0, i).join("/") + "/" + r.slice(o).join("/")
}

const ct = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
};
var En;
(function (e) {
    e.pop = "pop", e.push = "push"
})(En || (En = {}));
var pn;
(function (e) {
    e.back = "back", e.forward = "forward", e.unknown = ""
})(pn || (pn = {}));

function Cf(e) {
    if (!e) if (Ft) {
        const t = document.querySelector("base");
        e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
    } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), yf(e)
}

const Ef = /^[^#]+#/;

function Rf(e, t) {
    return e.replace(Ef, "#") + t
}

function Pf(e, t) {
    const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
    return {behavior: t.behavior, left: r.left - n.left - (t.left || 0), top: r.top - n.top - (t.top || 0)}
}

const pr = () => ({left: window.scrollX, top: window.scrollY});

function Tf(e) {
    let t;
    if ("el" in e) {
        const n = e.el, r = typeof n == "string" && n.startsWith("#"),
            s = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!s) return;
        t = Pf(s, e)
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}

function Ci(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}

const es = new Map;

function Of(e, t) {
    es.set(e, t)
}

function kf(e) {
    const t = es.get(e);
    return es.delete(e), t
}

let Af = () => location.protocol + "//" + location.host;

function $l(e, t) {
    const {pathname: n, search: r, hash: s} = t, i = e.indexOf("#");
    if (i > -1) {
        let l = s.includes(e.slice(i)) ? e.slice(i).length : 1, a = s.slice(l);
        return a[0] !== "/" && (a = "/" + a), xi(a, "")
    }
    return xi(n, e) + r + s
}

function Lf(e, t, n, r) {
    let s = [], i = [], o = null;
    const l = ({state: h}) => {
        const g = $l(e, location), v = n.value, _ = t.value;
        let R = 0;
        if (h) {
            if (n.value = g, t.value = h, o && o === v) {
                o = null;
                return
            }
            R = _ ? h.position - _.position : 0
        } else r(g);
        s.forEach(P => {
            P(n.value, v, {delta: R, type: En.pop, direction: R ? R > 0 ? pn.forward : pn.back : pn.unknown})
        })
    };

    function a() {
        o = n.value
    }

    function u(h) {
        s.push(h);
        const g = () => {
            const v = s.indexOf(h);
            v > -1 && s.splice(v, 1)
        };
        return i.push(g), g
    }

    function c() {
        const {history: h} = window;
        !h.state || h.replaceState(oe({}, h.state, {scroll: pr()}), "")
    }

    function f() {
        for (const h of i) h();
        i = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", c)
    }

    return window.addEventListener("popstate", l), window.addEventListener("beforeunload", c, {passive: !0}), {
        pauseListeners: a,
        listen: u,
        destroy: f
    }
}

function Ei(e, t, n, r = !1, s = !1) {
    return {back: e, current: t, forward: n, replaced: r, position: window.history.length, scroll: s ? pr() : null}
}

function Mf(e) {
    const {history: t, location: n} = window, r = {value: $l(e, n)}, s = {value: t.state};
    s.value || i(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);

    function i(a, u, c) {
        const f = e.indexOf("#"),
            h = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + a : Af() + e + a;
        try {
            t[c ? "replaceState" : "pushState"](u, "", h), s.value = u
        } catch (g) {
            console.error(g), n[c ? "replace" : "assign"](h)
        }
    }

    function o(a, u) {
        const c = oe({}, t.state, Ei(s.value.back, a, s.value.forward, !0), u, {position: s.value.position});
        i(a, c, !0), r.value = a
    }

    function l(a, u) {
        const c = oe({}, s.value, t.state, {forward: a, scroll: pr()});
        i(c.current, c, !0);
        const f = oe({}, Ei(r.value, a, null), {position: c.position + 1}, u);
        i(a, f, !1), r.value = a
    }

    return {location: r, state: s, push: l, replace: o}
}

function If(e) {
    e = Cf(e);
    const t = Mf(e), n = Lf(e, t.state, t.location, t.replace);

    function r(i, o = !0) {
        o || n.pauseListeners(), history.go(i)
    }

    const s = oe({location: "", base: e, go: r, createHref: Rf.bind(null, e)}, t, n);
    return Object.defineProperty(s, "location", {
        enumerable: !0,
        get: () => t.location.value
    }), Object.defineProperty(s, "state", {enumerable: !0, get: () => t.state.value}), s
}

function $f(e) {
    return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), If(e)
}

function Df(e) {
    return typeof e == "string" || e && typeof e == "object"
}

function Dl(e) {
    return typeof e == "string" || typeof e == "symbol"
}

const Nl = Symbol("");
var Ri;
(function (e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
})(Ri || (Ri = {}));

function Jt(e, t) {
    return oe(new Error, {type: e, [Nl]: !0}, t)
}

function et(e, t) {
    return e instanceof Error && Nl in e && (t == null || !!(e.type & t))
}

const Pi = "[^/]+?", Nf = {sensitive: !1, strict: !1, start: !0, end: !0}, jf = /[.+*?^${}()[\]/\\]/g;

function Bf(e, t) {
    const n = oe({}, Nf, t), r = [];
    let s = n.start ? "^" : "";
    const i = [];
    for (const u of e) {
        const c = u.length ? [] : [90];
        n.strict && !u.length && (s += "/");
        for (let f = 0; f < u.length; f++) {
            const h = u[f];
            let g = 40 + (n.sensitive ? .25 : 0);
            if (h.type === 0) f || (s += "/"), s += h.value.replace(jf, "\\$&"), g += 40; else if (h.type === 1) {
                const {value: v, repeatable: _, optional: R, regexp: P} = h;
                i.push({name: v, repeatable: _, optional: R});
                const L = P || Pi;
                if (L !== Pi) {
                    g += 10;
                    try {
                        new RegExp(`(${L})`)
                    } catch (T) {
                        throw new Error(`Invalid custom RegExp for param "${v}" (${L}): ` + T.message)
                    }
                }
                let $ = _ ? `((?:${L})(?:/(?:${L}))*)` : `(${L})`;
                f || ($ = R && u.length < 2 ? `(?:/${$})` : "/" + $), R && ($ += "?"), s += $, g += 20, R && (g += -8), _ && (g += -20), L === ".*" && (g += -50)
            }
            c.push(g)
        }
        r.push(c)
    }
    if (n.strict && n.end) {
        const u = r.length - 1;
        r[u][r[u].length - 1] += .7000000000000001
    }
    n.strict || (s += "/?"), n.end ? s += "$" : n.strict && (s += "(?:/|$)");
    const o = new RegExp(s, n.sensitive ? "" : "i");

    function l(u) {
        const c = u.match(o), f = {};
        if (!c) return null;
        for (let h = 1; h < c.length; h++) {
            const g = c[h] || "", v = i[h - 1];
            f[v.name] = g && v.repeatable ? g.split("/") : g
        }
        return f
    }

    function a(u) {
        let c = "", f = !1;
        for (const h of e) {
            (!f || !c.endsWith("/")) && (c += "/"), f = !1;
            for (const g of h) if (g.type === 0) c += g.value; else if (g.type === 1) {
                const {value: v, repeatable: _, optional: R} = g, P = v in u ? u[v] : "";
                if (Ve(P) && !_) throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);
                const L = Ve(P) ? P.join("/") : P;
                if (!L) if (R) h.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : f = !0); else throw new Error(`Missing required param "${v}"`);
                c += L
            }
        }
        return c || "/"
    }

    return {re: o, score: r, keys: i, parse: l, stringify: a}
}

function qf(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length;) {
        const r = t[n] - e[n];
        if (r) return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0
}

function jl(e, t) {
    let n = 0;
    const r = e.score, s = t.score;
    for (; n < r.length && n < s.length;) {
        const i = qf(r[n], s[n]);
        if (i) return i;
        n++
    }
    if (Math.abs(s.length - r.length) === 1) {
        if (Ti(r)) return 1;
        if (Ti(s)) return -1
    }
    return s.length - r.length
}

function Ti(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}

const Ff = {type: 0, value: ""}, Hf = /[a-zA-Z0-9_]/;

function zf(e) {
    if (!e) return [[]];
    if (e === "/") return [[Ff]];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

    function t(g) {
        throw new Error(`ERR (${n})/"${u}": ${g}`)
    }

    let n = 0, r = n;
    const s = [];
    let i;

    function o() {
        i && s.push(i), i = []
    }

    let l = 0, a, u = "", c = "";

    function f() {
        !u || (n === 0 ? i.push({
            type: 0,
            value: u
        }) : n === 1 || n === 2 || n === 3 ? (i.length > 1 && (a === "*" || a === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), i.push({
            type: 1,
            value: u,
            regexp: c,
            repeatable: a === "*" || a === "+",
            optional: a === "*" || a === "?"
        })) : t("Invalid state to consume buffer"), u = "")
    }

    function h() {
        u += a
    }

    for (; l < e.length;) {
        if (a = e[l++], a === "\\" && n !== 2) {
            r = n, n = 4;
            continue
        }
        switch (n) {
            case 0:
                a === "/" ? (u && f(), o()) : a === ":" ? (f(), n = 1) : h();
                break;
            case 4:
                h(), n = r;
                break;
            case 1:
                a === "(" ? n = 2 : Hf.test(a) ? h() : (f(), n = 0, a !== "*" && a !== "?" && a !== "+" && l--);
                break;
            case 2:
                a === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + a : n = 3 : c += a;
                break;
            case 3:
                f(), n = 0, a !== "*" && a !== "?" && a !== "+" && l--, c = "";
                break;
            default:
                t("Unknown state");
                break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), f(), o(), s
}

function Uf(e, t, n) {
    const r = Bf(zf(e.path), n), s = oe(r, {record: e, parent: t, children: [], alias: []});
    return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}

function Vf(e, t) {
    const n = [], r = new Map;
    t = Li({strict: !1, end: !0, sensitive: !1}, t);

    function s(f) {
        return r.get(f)
    }

    function i(f, h, g) {
        const v = !g, _ = ki(f);
        _.aliasOf = g && g.record;
        const R = Li(t, f), P = [_];
        if ("alias" in f) {
            const T = typeof f.alias == "string" ? [f.alias] : f.alias;
            for (const N of T) P.push(ki(oe({}, _, {
                components: g ? g.record.components : _.components,
                path: N,
                aliasOf: g ? g.record : _
            })))
        }
        let L, $;
        for (const T of P) {
            const {path: N} = T;
            if (h && N[0] !== "/") {
                const H = h.record.path, V = H[H.length - 1] === "/" ? "" : "/";
                T.path = h.record.path + (N && V + N)
            }
            if (L = Uf(T, h, R), g ? g.alias.push(L) : ($ = $ || L, $ !== L && $.alias.push(L), v && f.name && !Ai(L) && o(f.name)), Bl(L) && a(L), _.children) {
                const H = _.children;
                for (let V = 0; V < H.length; V++) i(H[V], L, g && g.children[V])
            }
            g = g || L
        }
        return $ ? () => {
            o($)
        } : hn
    }

    function o(f) {
        if (Dl(f)) {
            const h = r.get(f);
            h && (r.delete(f), n.splice(n.indexOf(h), 1), h.children.forEach(o), h.alias.forEach(o))
        } else {
            const h = n.indexOf(f);
            h > -1 && (n.splice(h, 1), f.record.name && r.delete(f.record.name), f.children.forEach(o), f.alias.forEach(o))
        }
    }

    function l() {
        return n
    }

    function a(f) {
        const h = Gf(f, n);
        n.splice(h, 0, f), f.record.name && !Ai(f) && r.set(f.record.name, f)
    }

    function u(f, h) {
        let g, v = {}, _, R;
        if ("name" in f && f.name) {
            if (g = r.get(f.name), !g) throw Jt(1, {location: f});
            R = g.record.name, v = oe(Oi(h.params, g.keys.filter($ => !$.optional).concat(g.parent ? g.parent.keys.filter($ => $.optional) : []).map($ => $.name)), f.params && Oi(f.params, g.keys.map($ => $.name))), _ = g.stringify(v)
        } else if (f.path != null) _ = f.path, g = n.find($ => $.re.test(_)), g && (v = g.parse(_), R = g.record.name); else {
            if (g = h.name ? r.get(h.name) : n.find($ => $.re.test(h.path)), !g) throw Jt(1, {
                location: f,
                currentLocation: h
            });
            R = g.record.name, v = oe({}, h.params, f.params), _ = g.stringify(v)
        }
        const P = [];
        let L = g;
        for (; L;) P.unshift(L.record), L = L.parent;
        return {name: R, path: _, params: v, matched: P, meta: Wf(P)}
    }

    e.forEach(f => i(f));

    function c() {
        n.length = 0, r.clear()
    }

    return {addRoute: i, resolve: u, removeRoute: o, clearRoutes: c, getRoutes: l, getRecordMatcher: s}
}

function Oi(e, t) {
    const n = {};
    for (const r of t) r in e && (n[r] = e[r]);
    return n
}

function ki(e) {
    const t = {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: e.aliasOf,
        beforeEnter: e.beforeEnter,
        props: Kf(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components" in e ? e.components || null : e.component && {default: e.component}
    };
    return Object.defineProperty(t, "mods", {value: {}}), t
}

function Kf(e) {
    const t = {}, n = e.props || !1;
    if ("component" in e) t.default = n; else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
    return t
}

function Ai(e) {
    for (; e;) {
        if (e.record.aliasOf) return !0;
        e = e.parent
    }
    return !1
}

function Wf(e) {
    return e.reduce((t, n) => oe(t, n.meta), {})
}

function Li(e, t) {
    const n = {};
    for (const r in e) n[r] = r in t ? t[r] : e[r];
    return n
}

function Gf(e, t) {
    let n = 0, r = t.length;
    for (; n !== r;) {
        const i = n + r >> 1;
        jl(e, t[i]) < 0 ? r = i : n = i + 1
    }
    const s = Qf(e);
    return s && (r = t.lastIndexOf(s, r - 1)), r
}

function Qf(e) {
    let t = e;
    for (; t = t.parent;) if (Bl(t) && jl(e, t) === 0) return t
}

function Bl({record: e}) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}

function Jf(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let s = 0; s < r.length; ++s) {
        const i = r[s].replace(kl, " "), o = i.indexOf("="), l = Cn(o < 0 ? i : i.slice(0, o)),
            a = o < 0 ? null : Cn(i.slice(o + 1));
        if (l in t) {
            let u = t[l];
            Ve(u) || (u = t[l] = [u]), u.push(a)
        } else t[l] = a
    }
    return t
}

function Mi(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = gf(n), r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (Ve(r) ? r.map(i => i && Zr(i)) : [r && Zr(r)]).forEach(i => {
            i !== void 0 && (t += (t.length ? "&" : "") + n, i != null && (t += "=" + i))
        })
    }
    return t
}

function Yf(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = Ve(r) ? r.map(s => s == null ? null : "" + s) : r == null ? r : "" + r)
    }
    return t
}

const Xf = Symbol(""), Ii = Symbol(""), Rs = Symbol(""), ql = Symbol(""), ts = Symbol("");

function tn() {
    let e = [];

    function t(r) {
        return e.push(r), () => {
            const s = e.indexOf(r);
            s > -1 && e.splice(s, 1)
        }
    }

    function n() {
        e = []
    }

    return {add: t, list: () => e.slice(), reset: n}
}

function gt(e, t, n, r, s, i = o => o()) {
    const o = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
    return () => new Promise((l, a) => {
        const u = h => {
            h === !1 ? a(Jt(4, {from: n, to: t})) : h instanceof Error ? a(h) : Df(h) ? a(Jt(2, {
                from: t,
                to: h
            })) : (o && r.enterCallbacks[s] === o && typeof h == "function" && o.push(h), l())
        }, c = i(() => e.call(r && r.instances[s], t, n, u));
        let f = Promise.resolve(c);
        e.length < 3 && (f = f.then(u)), f.catch(h => a(h))
    })
}

function Mr(e, t, n, r, s = i => i()) {
    const i = [];
    for (const o of e) for (const l in o.components) {
        let a = o.components[l];
        if (!(t !== "beforeRouteEnter" && !o.instances[l])) if (Tl(a)) {
            const c = (a.__vccOpts || a)[t];
            c && i.push(gt(c, n, r, o, l, s))
        } else {
            let u = a();
            i.push(() => u.then(c => {
                if (!c) throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);
                const f = rf(c) ? c.default : c;
                o.mods[l] = c, o.components[l] = f;
                const g = (f.__vccOpts || f)[t];
                return g && gt(g, n, r, o, l, s)()
            }))
        }
    }
    return i
}

function $i(e) {
    const t = it(Rs), n = it(ql), r = W(() => {
            const a = Pt(e.to);
            return t.resolve(a)
        }), s = W(() => {
            const {matched: a} = r.value, {length: u} = a, c = a[u - 1], f = n.matched;
            if (!c || !f.length) return -1;
            const h = f.findIndex(Qt.bind(null, c));
            if (h > -1) return h;
            const g = Di(a[u - 2]);
            return u > 1 && Di(c) === g && f[f.length - 1].path !== g ? f.findIndex(Qt.bind(null, a[u - 2])) : h
        }), i = W(() => s.value > -1 && nd(n.params, r.value.params)),
        o = W(() => s.value > -1 && s.value === n.matched.length - 1 && Il(n.params, r.value.params));

    function l(a = {}) {
        return td(a) ? t[Pt(e.replace) ? "replace" : "push"](Pt(e.to)).catch(hn) : Promise.resolve()
    }

    return {route: r, href: W(() => r.value.href), isActive: i, isExactActive: o, navigate: l}
}

const Zf = bs({
    name: "RouterLink",
    compatConfig: {MODE: 3},
    props: {
        to: {type: [String, Object], required: !0},
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {type: String, default: "page"}
    },
    useLink: $i,
    setup(e, {slots: t}) {
        const n = Yt($i(e)), {options: r} = it(Rs), s = W(() => ({
            [Ni(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [Ni(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return () => {
            const i = t.default && t.default(n);
            return e.custom ? i : U("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value
            }, i)
        }
    }
}), ed = Zf;

function td(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t)) return
        }
        return e.preventDefault && e.preventDefault(), !0
    }
}

function nd(e, t) {
    for (const n in t) {
        const r = t[n], s = e[n];
        if (typeof r == "string") {
            if (r !== s) return !1
        } else if (!Ve(s) || s.length !== r.length || r.some((i, o) => i !== s[o])) return !1
    }
    return !0
}

function Di(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}

const Ni = (e, t, n) => e != null ? e : t != null ? t : n, rd = bs({
    name: "RouterView",
    inheritAttrs: !1,
    props: {name: {type: String, default: "default"}, route: Object},
    compatConfig: {MODE: 3},
    setup(e, {attrs: t, slots: n}) {
        const r = it(ts), s = W(() => e.route || r.value), i = it(Ii, 0), o = W(() => {
            let u = Pt(i);
            const {matched: c} = s.value;
            let f;
            for (; (f = c[u]) && !f.components;) u++;
            return u
        }), l = W(() => s.value.matched[o.value]);
        Bn(Ii, W(() => o.value + 1)), Bn(Xf, l), Bn(ts, s);
        const a = vn();
        return qn(() => [a.value, l.value, e.name], ([u, c, f], [h, g, v]) => {
            c && (c.instances[f] = u, g && g !== c && u && u === h && (c.leaveGuards.size || (c.leaveGuards = g.leaveGuards), c.updateGuards.size || (c.updateGuards = g.updateGuards))), u && c && (!g || !Qt(c, g) || !h) && (c.enterCallbacks[f] || []).forEach(_ => _(u))
        }, {flush: "post"}), () => {
            const u = s.value, c = e.name, f = l.value, h = f && f.components[c];
            if (!h) return ji(n.default, {Component: h, route: u});
            const g = f.props[c], v = g ? g === !0 ? u.params : typeof g == "function" ? g(u) : g : null,
                R = U(h, oe({}, v, t, {
                    onVnodeUnmounted: P => {
                        P.component.isUnmounted && (f.instances[c] = null)
                    }, ref: a
                }));
            return ji(n.default, {Component: R, route: u}) || R
        }
    }
});

function ji(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}

const sd = rd;

function id(e) {
    const t = Vf(e.routes, e), n = e.parseQuery || Jf, r = e.stringifyQuery || Mi, s = e.history, i = tn(), o = tn(),
        l = tn(), a = Aa(ct);
    let u = ct;
    Ft && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const c = Ar.bind(null, y => "" + y), f = Ar.bind(null, vf), h = Ar.bind(null, Cn);

    function g(y, I) {
        let k, B;
        return Dl(y) ? (k = t.getRecordMatcher(y), B = I) : B = y, t.addRoute(B, k)
    }

    function v(y) {
        const I = t.getRecordMatcher(y);
        I && t.removeRoute(I)
    }

    function _() {
        return t.getRoutes().map(y => y.record)
    }

    function R(y) {
        return !!t.getRecordMatcher(y)
    }

    function P(y, I) {
        if (I = oe({}, I || a.value), typeof y == "string") {
            const p = Lr(n, y, I.path), m = t.resolve({path: p.path}, I), w = s.createHref(p.fullPath);
            return oe(p, m, {params: h(m.params), hash: Cn(p.hash), redirectedFrom: void 0, href: w})
        }
        let k;
        if (y.path != null) k = oe({}, y, {path: Lr(n, y.path, I.path).path}); else {
            const p = oe({}, y.params);
            for (const m in p) p[m] == null && delete p[m];
            k = oe({}, y, {params: f(p)}), I.params = f(I.params)
        }
        const B = t.resolve(k, I), re = y.hash || "";
        B.params = c(h(B.params));
        const he = _f(r, oe({}, y, {hash: pf(re), path: B.path})), d = s.createHref(he);
        return oe({fullPath: he, hash: re, query: r === Mi ? Yf(y.query) : y.query || {}}, B, {
            redirectedFrom: void 0,
            href: d
        })
    }

    function L(y) {
        return typeof y == "string" ? Lr(n, y, a.value.path) : oe({}, y)
    }

    function $(y, I) {
        if (u !== y) return Jt(8, {from: I, to: y})
    }

    function T(y) {
        return V(y)
    }

    function N(y) {
        return T(oe(L(y), {replace: !0}))
    }

    function H(y) {
        const I = y.matched[y.matched.length - 1];
        if (I && I.redirect) {
            const {redirect: k} = I;
            let B = typeof k == "function" ? k(y) : k;
            return typeof B == "string" && (B = B.includes("?") || B.includes("#") ? B = L(B) : {path: B}, B.params = {}), oe({
                query: y.query,
                hash: y.hash,
                params: B.path != null ? {} : y.params
            }, B)
        }
    }

    function V(y, I) {
        const k = u = P(y), B = a.value, re = y.state, he = y.force, d = y.replace === !0, p = H(k);
        if (p) return V(oe(L(p), {
            state: typeof p == "object" ? oe({}, re, p.state) : re,
            force: he,
            replace: d
        }), I || k);
        const m = k;
        m.redirectedFrom = I;
        let w;
        return !he && wf(r, B, k) && (w = Jt(16, {
            to: m,
            from: B
        }), Ke(B, B, !0, !1)), (w ? Promise.resolve(w) : Q(m, B)).catch(b => et(b) ? et(b, 2) ? b : lt(b) : ne(b, m, B)).then(b => {
            if (b) {
                if (et(b, 2)) return V(oe({replace: d}, L(b.to), {
                    state: typeof b.to == "object" ? oe({}, re, b.to.state) : re,
                    force: he
                }), I || m)
            } else b = D(m, B, !0, d, re);
            return J(m, B, b), b
        })
    }

    function X(y, I) {
        const k = $(y, I);
        return k ? Promise.reject(k) : Promise.resolve()
    }

    function j(y) {
        const I = It.values().next().value;
        return I && typeof I.runWithContext == "function" ? I.runWithContext(y) : y()
    }

    function Q(y, I) {
        let k;
        const [B, re, he] = od(y, I);
        k = Mr(B.reverse(), "beforeRouteLeave", y, I);
        for (const p of B) p.leaveGuards.forEach(m => {
            k.push(gt(m, y, I))
        });
        const d = X.bind(null, y, I);
        return k.push(d), Ie(k).then(() => {
            k = [];
            for (const p of i.list()) k.push(gt(p, y, I));
            return k.push(d), Ie(k)
        }).then(() => {
            k = Mr(re, "beforeRouteUpdate", y, I);
            for (const p of re) p.updateGuards.forEach(m => {
                k.push(gt(m, y, I))
            });
            return k.push(d), Ie(k)
        }).then(() => {
            k = [];
            for (const p of he) if (p.beforeEnter) if (Ve(p.beforeEnter)) for (const m of p.beforeEnter) k.push(gt(m, y, I)); else k.push(gt(p.beforeEnter, y, I));
            return k.push(d), Ie(k)
        }).then(() => (y.matched.forEach(p => p.enterCallbacks = {}), k = Mr(he, "beforeRouteEnter", y, I, j), k.push(d), Ie(k))).then(() => {
            k = [];
            for (const p of o.list()) k.push(gt(p, y, I));
            return k.push(d), Ie(k)
        }).catch(p => et(p, 8) ? p : Promise.reject(p))
    }

    function J(y, I, k) {
        l.list().forEach(B => j(() => B(y, I, k)))
    }

    function D(y, I, k, B, re) {
        const he = $(y, I);
        if (he) return he;
        const d = I === ct, p = Ft ? history.state : {};
        k && (B || d ? s.replace(y.fullPath, oe({scroll: d && p && p.scroll}, re)) : s.push(y.fullPath, re)), a.value = y, Ke(y, I, k, d), lt()
    }

    let Y;

    function M() {
        Y || (Y = s.listen((y, I, k) => {
            if (!An.listening) return;
            const B = P(y), re = H(B);
            if (re) {
                V(oe(re, {replace: !0}), B).catch(hn);
                return
            }
            u = B;
            const he = a.value;
            Ft && Of(Ci(he.fullPath, k.delta), pr()), Q(B, he).catch(d => et(d, 12) ? d : et(d, 2) ? (V(d.to, B).then(p => {
                et(p, 20) && !k.delta && k.type === En.pop && s.go(-1, !1)
            }).catch(hn), Promise.reject()) : (k.delta && s.go(-k.delta, !1), ne(d, B, he))).then(d => {
                d = d || D(B, he, !1), d && (k.delta && !et(d, 8) ? s.go(-k.delta, !1) : k.type === En.pop && et(d, 20) && s.go(-1, !1)), J(B, he, d)
            }).catch(hn)
        }))
    }

    let ee = tn(), ce = tn(), le;

    function ne(y, I, k) {
        lt(y);
        const B = ce.list();
        return B.length ? B.forEach(re => re(y, I, k)) : console.error(y), Promise.reject(y)
    }

    function Xe() {
        return le && a.value !== ct ? Promise.resolve() : new Promise((y, I) => {
            ee.add([y, I])
        })
    }

    function lt(y) {
        return le || (le = !y, M(), ee.list().forEach(([I, k]) => y ? k(y) : I()), ee.reset()), y
    }

    function Ke(y, I, k, B) {
        const {scrollBehavior: re} = e;
        if (!Ft || !re) return Promise.resolve();
        const he = !k && kf(Ci(y.fullPath, 0)) || (B || !k) && history.state && history.state.scroll || null;
        return Co().then(() => re(y, I, he)).then(d => d && Tf(d)).catch(d => ne(d, y, I))
    }

    const Ce = y => s.go(y);
    let Mt;
    const It = new Set, An = {
        currentRoute: a,
        listening: !0,
        addRoute: g,
        removeRoute: v,
        clearRoutes: t.clearRoutes,
        hasRoute: R,
        getRoutes: _,
        resolve: P,
        options: e,
        push: T,
        replace: N,
        go: Ce,
        back: () => Ce(-1),
        forward: () => Ce(1),
        beforeEach: i.add,
        beforeResolve: o.add,
        afterEach: l.add,
        onError: ce.add,
        isReady: Xe,
        install(y) {
            const I = this;
            y.component("RouterLink", ed), y.component("RouterView", sd), y.config.globalProperties.$router = I, Object.defineProperty(y.config.globalProperties, "$route", {
                enumerable: !0,
                get: () => Pt(a)
            }), Ft && !Mt && a.value === ct && (Mt = !0, T(s.location).catch(re => {
            }));
            const k = {};
            for (const re in ct) Object.defineProperty(k, re, {get: () => a.value[re], enumerable: !0});
            y.provide(Rs, I), y.provide(ql, yo(k)), y.provide(ts, a);
            const B = y.unmount;
            It.add(y), y.unmount = function () {
                It.delete(y), It.size < 1 && (u = ct, Y && Y(), Y = null, a.value = ct, Mt = !1, le = !1), B()
            }
        }
    };

    function Ie(y) {
        return y.reduce((I, k) => I.then(() => j(k)), Promise.resolve())
    }

    return An
}

function od(e, t) {
    const n = [], r = [], s = [], i = Math.max(t.matched.length, e.matched.length);
    for (let o = 0; o < i; o++) {
        const l = t.matched[o];
        l && (e.matched.find(u => Qt(u, l)) ? r.push(l) : n.push(l));
        const a = e.matched[o];
        a && (t.matched.find(u => Qt(u, a)) || s.push(a))
    }
    return [n, r, s]
}

const ld = [{
    path: "/",
    component: () => Nn(() => import("./MainLayout.3f604a48.js").then(function (e) {
        return e.M
    }), []),
    children: [{
        path: "",
        component: () => Nn(() => import("./IndexPage.5997fd43.js"), ["assets/IndexPage.5997fd43.js", "assets/IndexPage.696c6069.css", "assets/MainLayout.3f604a48.js"])
    }]
}, {path: "/:catchAll(.*)*", component: () => Nn(() => import("./ErrorNotFound.adbbfb03.js"), [])}];
var Ir = function () {
    return id({scrollBehavior: () => ({left: 0, top: 0}), routes: ld, history: $f("/liars-bar/")})
};

async function ad(e, t) {
    const n = e(nf);
    n.use(tf, t);
    const r = Rn(typeof Ir == "function" ? await Ir({}) : Ir);
    return {app: n, router: r}
}

const ns = {xs: 18, sm: 24, md: 32, lg: 38, xl: 46}, Ps = {size: String};

function Ts(e, t = ns) {
    return W(() => e.size !== void 0 ? {fontSize: e.size in t ? `${t[e.size]}px` : e.size} : null)
}

function cd(e, t) {
    return e !== void 0 && e() || t
}

function hh(e, t) {
    if (e !== void 0) {
        const n = e();
        if (n != null) return n.slice()
    }
    return t
}

function sn(e, t) {
    return e !== void 0 ? t.concat(e()) : t
}

function ud(e, t) {
    return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e()
}

function ph(e, t, n, r, s, i) {
    t.key = r + s;
    const o = U(e, t, n);
    return s === !0 ? Oo(o, i()) : o
}

const Bi = "0 0 24 24", qi = e => e, $r = e => `ionicons ${e}`, Fl = {
        "mdi-": e => `mdi ${e}`,
        "icon-": qi,
        "bt-": e => `bt ${e}`,
        "eva-": e => `eva ${e}`,
        "ion-md": $r,
        "ion-ios": $r,
        "ion-logo": $r,
        "iconfont ": qi,
        "ti-": e => `themify-icon ${e}`,
        "bi-": e => `bootstrap-icons ${e}`
    }, Hl = {o_: "-outlined", r_: "-round", s_: "-sharp"}, zl = {sym_o_: "-outlined", sym_r_: "-rounded", sym_s_: "-sharp"},
    fd = new RegExp("^(" + Object.keys(Fl).join("|") + ")"), dd = new RegExp("^(" + Object.keys(Hl).join("|") + ")"),
    Fi = new RegExp("^(" + Object.keys(zl).join("|") + ")"), hd = /^[Mm]\s?[-+]?\.?\d/, pd = /^img:/, gd = /^svguse:/,
    md = /^ion-/, vd = /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;
var er = kn({
    name: "QIcon",
    props: {...Ps, tag: {type: String, default: "i"}, name: String, color: String, left: Boolean, right: Boolean},
    setup(e, {slots: t}) {
        const {proxy: {$q: n}} = Tn(), r = Ts(e),
            s = W(() => "q-icon" + (e.left === !0 ? " on-left" : "") + (e.right === !0 ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")),
            i = W(() => {
                let o, l = e.name;
                if (l === "none" || !l) return {none: !0};
                if (n.iconMapFn !== null) {
                    const c = n.iconMapFn(l);
                    if (c !== void 0) if (c.icon !== void 0) {
                        if (l = c.icon, l === "none" || !l) return {none: !0}
                    } else return {cls: c.cls, content: c.content !== void 0 ? c.content : " "}
                }
                if (hd.test(l) === !0) {
                    const [c, f = Bi] = l.split("|");
                    return {
                        svg: !0, viewBox: f, nodes: c.split("&&").map(h => {
                            const [g, v, _] = h.split("@@");
                            return U("path", {style: v, d: g, transform: _})
                        })
                    }
                }
                if (pd.test(l) === !0) return {img: !0, src: l.substring(4)};
                if (gd.test(l) === !0) {
                    const [c, f = Bi] = l.split("|");
                    return {svguse: !0, src: c.substring(7), viewBox: f}
                }
                let a = " ";
                const u = l.match(fd);
                if (u !== null) o = Fl[u[1]](l); else if (vd.test(l) === !0) o = l; else if (md.test(l) === !0) o = `ionicons ion-${n.platform.is.ios === !0 ? "ios" : "md"}${l.substring(3)}`; else if (Fi.test(l) === !0) {
                    o = "notranslate material-symbols";
                    const c = l.match(Fi);
                    c !== null && (l = l.substring(6), o += zl[c[1]]), a = l
                } else {
                    o = "notranslate material-icons";
                    const c = l.match(dd);
                    c !== null && (l = l.substring(2), o += Hl[c[1]]), a = l
                }
                return {cls: o, content: a}
            });
        return () => {
            const o = {class: s.value, style: r.value, "aria-hidden": "true", role: "presentation"};
            return i.value.none === !0 ? U(e.tag, o, cd(t.default)) : i.value.img === !0 ? U(e.tag, o, sn(t.default, [U("img", {src: i.value.src})])) : i.value.svg === !0 ? U(e.tag, o, sn(t.default, [U("svg", {viewBox: i.value.viewBox || "0 0 24 24"}, i.value.nodes)])) : i.value.svguse === !0 ? U(e.tag, o, sn(t.default, [U("svg", {viewBox: i.value.viewBox}, [U("use", {"xlink:href": i.value.src})])])) : (i.value.cls !== void 0 && (o.class += " " + i.value.cls), U(e.tag, o, sn(t.default, [i.value.content])))
        }
    }
}), bd = kn({
    name: "QAvatar",
    props: {...Ps, fontSize: String, color: String, textColor: String, icon: String, square: Boolean, rounded: Boolean},
    setup(e, {slots: t}) {
        const n = Ts(e),
            r = W(() => "q-avatar" + (e.color ? ` bg-${e.color}` : "") + (e.textColor ? ` text-${e.textColor} q-chip--colored` : "") + (e.square === !0 ? " q-avatar--square" : e.rounded === !0 ? " rounded-borders" : "")),
            s = W(() => e.fontSize ? {fontSize: e.fontSize} : null);
        return () => {
            const i = e.icon !== void 0 ? [U(er, {name: e.icon})] : void 0;
            return U("div", {
                class: r.value,
                style: n.value
            }, [U("div", {
                class: "q-avatar__content row flex-center overflow-hidden",
                style: s.value
            }, ud(t.default, i))])
        }
    }
});
const yd = {size: {type: [String, Number], default: "1em"}, color: String};

function _d(e) {
    return {
        cSize: W(() => e.size in ns ? `${ns[e.size]}px` : e.size),
        classes: W(() => "q-spinner" + (e.color ? ` text-${e.color}` : ""))
    }
}

var Ul = kn({
    name: "QSpinner", props: {...yd, thickness: {type: Number, default: 5}}, setup(e) {
        const {cSize: t, classes: n} = _d(e);
        return () => U("svg", {
            class: n.value + " q-spinner-mat",
            width: t.value,
            height: t.value,
            viewBox: "25 25 50 50"
        }, [U("circle", {
            class: "path",
            cx: "50",
            cy: "50",
            r: "20",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": e.thickness,
            "stroke-miterlimit": "10"
        })])
    }
});

function wd(e, t) {
    const n = e.style;
    for (const r in t) n[r] = t[r]
}

function gh(e) {
    if (e == null) return;
    if (typeof e == "string") try {
        return document.querySelector(e) || void 0
    } catch {
        return
    }
    const t = Pt(e);
    if (t) return t.$el || t
}

function mh(e, t) {
    if (e == null || e.contains(t) === !0) return !0;
    for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling) if (n.contains(t)) return !0;
    return !1
}

function xd(e, t = 250) {
    let n = !1, r;
    return function () {
        return n === !1 && (n = !0, setTimeout(() => {
            n = !1
        }, t), r = e.apply(this, arguments)), r
    }
}

function Hi(e, t, n, r) {
    n.modifiers.stop === !0 && Sl(e);
    const s = n.modifiers.color;
    let i = n.modifiers.center;
    i = i === !0 || r === !0;
    const o = document.createElement("span"), l = document.createElement("span"), a = Mu(e), {
            left: u,
            top: c,
            width: f,
            height: h
        } = t.getBoundingClientRect(), g = Math.sqrt(f * f + h * h), v = g / 2, _ = `${(f - g) / 2}px`,
        R = i ? _ : `${a.left - u - v}px`, P = `${(h - g) / 2}px`, L = i ? P : `${a.top - c - v}px`;
    l.className = "q-ripple__inner", wd(l, {
        height: `${g}px`,
        width: `${g}px`,
        transform: `translate3d(${R},${L},0) scale3d(.2,.2,1)`,
        opacity: 0
    }), o.className = `q-ripple${s ? " text-" + s : ""}`, o.setAttribute("dir", "ltr"), o.appendChild(l), t.appendChild(o);
    const $ = () => {
        o.remove(), clearTimeout(T)
    };
    n.abort.push($);
    let T = setTimeout(() => {
        l.classList.add("q-ripple__inner--enter"), l.style.transform = `translate3d(${_},${P},0) scale3d(1,1,1)`, l.style.opacity = .2, T = setTimeout(() => {
            l.classList.remove("q-ripple__inner--enter"), l.classList.add("q-ripple__inner--leave"), l.style.opacity = 0, T = setTimeout(() => {
                o.remove(), n.abort.splice(n.abort.indexOf($), 1)
            }, 275)
        }, 250)
    }, 50)
}

function zi(e, {modifiers: t, value: n, arg: r}) {
    const s = Object.assign({}, e.cfg.ripple, t, n);
    e.modifiers = {
        early: s.early === !0,
        stop: s.stop === !0,
        center: s.center === !0,
        color: s.color || r,
        keyCodes: [].concat(s.keyCodes || 13)
    }
}

var Sd = Lu({
    name: "ripple", beforeMount(e, t) {
        const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
        if (n.ripple === !1) return;
        const r = {
            cfg: n, enabled: t.value !== !1, modifiers: {}, abort: [], start(s) {
                r.enabled === !0 && s.qSkipRipple !== !0 && s.type === (r.modifiers.early === !0 ? "pointerdown" : "click") && Hi(s, e, r, s.qKeyEvent === !0)
            }, keystart: xd(s => {
                r.enabled === !0 && s.qSkipRipple !== !0 && Xr(s, r.modifiers.keyCodes) === !0 && s.type === `key${r.modifiers.early === !0 ? "down" : "up"}` && Hi(s, e, r, !0)
            }, 300)
        };
        zi(r, t), e.__qripple = r, Iu(r, "main", [[e, "pointerdown", "start", "passive"], [e, "click", "start", "passive"], [e, "keydown", "keystart", "passive"], [e, "keyup", "keystart", "passive"]])
    }, updated(e, t) {
        if (t.oldValue !== t.value) {
            const n = e.__qripple;
            n !== void 0 && (n.enabled = t.value !== !1, n.enabled === !0 && Object(t.value) === t.value && zi(n, t))
        }
    }, beforeUnmount(e) {
        const t = e.__qripple;
        t !== void 0 && (t.abort.forEach(n => {
            n()
        }), $u(t, "main"), delete e._qripple)
    }
});
const Vl = {
    left: "start",
    center: "center",
    right: "end",
    between: "between",
    around: "around",
    evenly: "evenly",
    stretch: "stretch"
}, Cd = Object.keys(Vl), Ed = {align: {type: String, validator: e => Cd.includes(e)}};

function Rd(e) {
    return W(() => {
        const t = e.align === void 0 ? e.vertical === !0 ? "stretch" : "left" : e.align;
        return `${e.vertical === !0 ? "items" : "justify"}-${Vl[t]}`
    })
}

function vh(e) {
    if (Object(e.$parent) === e.$parent) return e.$parent;
    let {parent: t} = e.$;
    for (; Object(t) === t;) {
        if (Object(t.proxy) === t.proxy) return t.proxy;
        t = t.parent
    }
}

function Pd(e) {
    return e.appContext.config.globalProperties.$router !== void 0
}

function bh(e) {
    return e.isUnmounted === !0 || e.isDeactivated === !0
}

function Ui(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}

function Vi(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}

function Td(e, t) {
    for (const n in t) {
        const r = t[n], s = e[n];
        if (typeof r == "string") {
            if (r !== s) return !1
        } else if (Array.isArray(s) === !1 || s.length !== r.length || r.some((i, o) => i !== s[o])) return !1
    }
    return !0
}

function Ki(e, t) {
    return Array.isArray(t) === !0 ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t
}

function Od(e, t) {
    return Array.isArray(e) === !0 ? Ki(e, t) : Array.isArray(t) === !0 ? Ki(t, e) : e === t
}

function kd(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e) if (Od(e[n], t[n]) === !1) return !1;
    return !0
}

const Kl = {to: [String, Object], replace: Boolean, href: String, target: String, disable: Boolean}, yh = {
    ...Kl,
    exact: Boolean,
    activeClass: {type: String, default: "q-router-link--active"},
    exactActiveClass: {type: String, default: "q-router-link--exact-active"}
};

function Ad({fallbackTag: e, useDisableForRouterLinkProps: t = !0} = {}) {
    const n = Tn(), {props: r, proxy: s, emit: i} = n, o = Pd(n), l = W(() => r.disable !== !0 && r.href !== void 0),
        a = W(t === !0 ? () => o === !0 && r.disable !== !0 && l.value !== !0 && r.to !== void 0 && r.to !== null && r.to !== "" : () => o === !0 && l.value !== !0 && r.to !== void 0 && r.to !== null && r.to !== ""),
        u = W(() => a.value === !0 ? L(r.to) : null), c = W(() => u.value !== null),
        f = W(() => l.value === !0 || c.value === !0),
        h = W(() => r.type === "a" || f.value === !0 ? "a" : r.tag || e || "div"),
        g = W(() => l.value === !0 ? {href: r.href, target: r.target} : c.value === !0 ? {
            href: u.value.href,
            target: r.target
        } : {}), v = W(() => {
            if (c.value === !1) return -1;
            const {matched: N} = u.value, {length: H} = N, V = N[H - 1];
            if (V === void 0) return -1;
            const X = s.$route.matched;
            if (X.length === 0) return -1;
            const j = X.findIndex(Vi.bind(null, V));
            if (j !== -1) return j;
            const Q = Ui(N[H - 2]);
            return H > 1 && Ui(V) === Q && X[X.length - 1].path !== Q ? X.findIndex(Vi.bind(null, N[H - 2])) : j
        }), _ = W(() => c.value === !0 && v.value !== -1 && Td(s.$route.params, u.value.params)),
        R = W(() => _.value === !0 && v.value === s.$route.matched.length - 1 && kd(s.$route.params, u.value.params)),
        P = W(() => c.value === !0 ? R.value === !0 ? ` ${r.exactActiveClass} ${r.activeClass}` : r.exact === !0 ? "" : _.value === !0 ? ` ${r.activeClass}` : "" : "");

    function L(N) {
        try {
            return s.$router.resolve(N)
        } catch {
        }
        return null
    }

    function $(N, {returnRouterError: H, to: V = r.to, replace: X = r.replace} = {}) {
        if (r.disable === !0) return N.preventDefault(), Promise.resolve(!1);
        if (N.metaKey || N.altKey || N.ctrlKey || N.shiftKey || N.button !== void 0 && N.button !== 0 || r.target === "_blank") return Promise.resolve(!1);
        N.preventDefault();
        const j = s.$router[X === !0 ? "replace" : "push"](V);
        return H === !0 ? j : j.then(() => {
        }).catch(() => {
        })
    }

    function T(N) {
        if (c.value === !0) {
            const H = V => $(N, V);
            i("click", N, H), N.defaultPrevented !== !0 && H()
        } else i("click", N)
    }

    return {
        hasRouterLink: c,
        hasHrefLink: l,
        hasLink: f,
        linkTag: h,
        resolvedLink: u,
        linkIsActive: _,
        linkIsExactActive: R,
        linkClass: P,
        linkAttrs: g,
        getLink: L,
        navigateToRouterLink: $,
        navigateOnClick: T
    }
}

const Wi = {none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32}, Ld = {xs: 8, sm: 10, md: 14, lg: 20, xl: 24},
    Md = ["button", "submit", "reset"], Id = /[^\s]\/[^\s]/, $d = ["flat", "outline", "push", "unelevated"];

function Dd(e, t) {
    return e.flat === !0 ? "flat" : e.outline === !0 ? "outline" : e.push === !0 ? "push" : e.unelevated === !0 ? "unelevated" : t
}

const Nd = {
    ...Ps, ...Kl,
    type: {type: String, default: "button"},
    label: [Number, String],
    icon: String,
    iconRight: String, ...$d.reduce((e, t) => (e[t] = Boolean) && e, {}),
    square: Boolean,
    rounded: Boolean,
    glossy: Boolean,
    size: String,
    fab: Boolean,
    fabMini: Boolean,
    padding: String,
    color: String,
    textColor: String,
    noCaps: Boolean,
    noWrap: Boolean,
    dense: Boolean,
    tabindex: [Number, String],
    ripple: {type: [Boolean, Object], default: !0},
    align: {...Ed.align, default: "center"},
    stack: Boolean,
    stretch: Boolean,
    loading: {type: Boolean, default: null},
    disable: Boolean
}, jd = {...Nd, round: Boolean};

function Bd(e) {
    const t = Ts(e, Ld), n = Rd(e), {
            hasRouterLink: r,
            hasLink: s,
            linkTag: i,
            linkAttrs: o,
            navigateOnClick: l
        } = Ad({fallbackTag: "button"}), a = W(() => {
            const R = e.fab === !1 && e.fabMini === !1 ? t.value : {};
            return e.padding !== void 0 ? Object.assign({}, R, {
                padding: e.padding.split(/\s+/).map(P => P in Wi ? Wi[P] + "px" : P).join(" "),
                minWidth: "0",
                minHeight: "0"
            }) : R
        }), u = W(() => e.rounded === !0 || e.fab === !0 || e.fabMini === !0),
        c = W(() => e.disable !== !0 && e.loading !== !0), f = W(() => c.value === !0 ? e.tabindex || 0 : -1),
        h = W(() => Dd(e, "standard")), g = W(() => {
            const R = {tabindex: f.value};
            return s.value === !0 ? Object.assign(R, o.value) : Md.includes(e.type) === !0 && (R.type = e.type), i.value === "a" ? (e.disable === !0 ? R["aria-disabled"] = "true" : R.href === void 0 && (R.role = "button"), r.value !== !0 && Id.test(e.type) === !0 && (R.type = e.type)) : e.disable === !0 && (R.disabled = "", R["aria-disabled"] = "true"), e.loading === !0 && e.percentage !== void 0 && Object.assign(R, {
                role: "progressbar",
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": e.percentage
            }), R
        }), v = W(() => {
            let R;
            e.color !== void 0 ? e.flat === !0 || e.outline === !0 ? R = `text-${e.textColor || e.color}` : R = `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (R = `text-${e.textColor}`);
            const P = e.round === !0 ? "round" : `rectangle${u.value === !0 ? " q-btn--rounded" : e.square === !0 ? " q-btn--square" : ""}`;
            return `q-btn--${h.value} q-btn--${P}` + (R !== void 0 ? " " + R : "") + (c.value === !0 ? " q-btn--actionable q-focusable q-hoverable" : e.disable === !0 ? " disabled" : "") + (e.fab === !0 ? " q-btn--fab" : e.fabMini === !0 ? " q-btn--fab-mini" : "") + (e.noCaps === !0 ? " q-btn--no-uppercase" : "") + (e.dense === !0 ? " q-btn--dense" : "") + (e.stretch === !0 ? " no-border-radius self-stretch" : "") + (e.glossy === !0 ? " glossy" : "") + (e.square ? " q-btn--square" : "")
        }),
        _ = W(() => n.value + (e.stack === !0 ? " column" : " row") + (e.noWrap === !0 ? " no-wrap text-no-wrap" : "") + (e.loading === !0 ? " q-btn__content--hidden" : ""));
    return {
        classes: v,
        style: a,
        innerClasses: _,
        attributes: g,
        hasLink: s,
        linkTag: i,
        navigateOnClick: l,
        isActionable: c
    }
}

const {passiveCapture: De} = At;
let Nt = null, jt = null, Bt = null;
var qd = kn({
    name: "QBtn",
    props: {...jd, percentage: Number, darkPercentage: Boolean, onTouchstart: [Function, Array]},
    emits: ["click", "keydown", "mousedown", "keyup"],
    setup(e, {slots: t, emit: n}) {
        const {proxy: r} = Tn(), {
            classes: s,
            style: i,
            innerClasses: o,
            attributes: l,
            hasLink: a,
            linkTag: u,
            navigateOnClick: c,
            isActionable: f
        } = Bd(e), h = vn(null), g = vn(null);
        let v = null, _, R = null;
        const P = W(() => e.label !== void 0 && e.label !== null && e.label !== ""),
            L = W(() => e.disable === !0 || e.ripple === !1 ? !1 : {keyCodes: a.value === !0 ? [13, 32] : [13], ...e.ripple === !0 ? {} : e.ripple}),
            $ = W(() => ({center: e.round})), T = W(() => {
                const M = Math.max(0, Math.min(100, e.percentage));
                return M > 0 ? {transition: "transform 0.6s", transform: `translateX(${M - 100}%)`} : {}
            }), N = W(() => {
                if (e.loading === !0) return {onMousedown: Y, onTouchstart: Y, onClick: Y, onKeydown: Y, onKeyup: Y};
                if (f.value === !0) {
                    const M = {onClick: V, onKeydown: X, onMousedown: Q};
                    if (r.$q.platform.has.touch === !0) {
                        const ee = e.onTouchstart !== void 0 ? "" : "Passive";
                        M[`onTouchstart${ee}`] = j
                    }
                    return M
                }
                return {onClick: Dt}
            }), H = W(() => ({
                ref: h,
                class: "q-btn q-btn-item non-selectable no-outline " + s.value,
                style: i.value, ...l.value, ...N.value
            }));

        function V(M) {
            if (h.value !== null) {
                if (M !== void 0) {
                    if (M.defaultPrevented === !0) return;
                    const ee = document.activeElement;
                    if (e.type === "submit" && ee !== document.body && h.value.contains(ee) === !1 && ee.contains(h.value) === !1) {
                        h.value.focus();
                        const ce = () => {
                            document.removeEventListener("keydown", Dt, !0), document.removeEventListener("keyup", ce, De), h.value !== null && h.value.removeEventListener("blur", ce, De)
                        };
                        document.addEventListener("keydown", Dt, !0), document.addEventListener("keyup", ce, De), h.value.addEventListener("blur", ce, De)
                    }
                }
                c(M)
            }
        }

        function X(M) {
            h.value !== null && (n("keydown", M), Xr(M, [13, 32]) === !0 && jt !== h.value && (jt !== null && D(), M.defaultPrevented !== !0 && (h.value.focus(), jt = h.value, h.value.classList.add("q-btn--active"), document.addEventListener("keyup", J, !0), h.value.addEventListener("blur", J, De)), Dt(M)))
        }

        function j(M) {
            h.value !== null && (n("touchstart", M), M.defaultPrevented !== !0 && (Nt !== h.value && (Nt !== null && D(), Nt = h.value, v = M.target, v.addEventListener("touchcancel", J, De), v.addEventListener("touchend", J, De)), _ = !0, R !== null && clearTimeout(R), R = setTimeout(() => {
                R = null, _ = !1
            }, 200)))
        }

        function Q(M) {
            h.value !== null && (M.qSkipRipple = _ === !0, n("mousedown", M), M.defaultPrevented !== !0 && Bt !== h.value && (Bt !== null && D(), Bt = h.value, h.value.classList.add("q-btn--active"), document.addEventListener("mouseup", J, De)))
        }

        function J(M) {
            if (h.value !== null && !(M !== void 0 && M.type === "blur" && document.activeElement === h.value)) {
                if (M !== void 0 && M.type === "keyup") {
                    if (jt === h.value && Xr(M, [13, 32]) === !0) {
                        const ee = new MouseEvent("click", M);
                        ee.qKeyEvent = !0, M.defaultPrevented === !0 && Yr(ee), M.cancelBubble === !0 && Sl(ee), h.value.dispatchEvent(ee), Dt(M), M.qKeyEvent = !0
                    }
                    n("keyup", M)
                }
                D()
            }
        }

        function D(M) {
            const ee = g.value;
            M !== !0 && (Nt === h.value || Bt === h.value) && ee !== null && ee !== document.activeElement && (ee.setAttribute("tabindex", -1), ee.focus()), Nt === h.value && (v !== null && (v.removeEventListener("touchcancel", J, De), v.removeEventListener("touchend", J, De)), Nt = v = null), Bt === h.value && (document.removeEventListener("mouseup", J, De), Bt = null), jt === h.value && (document.removeEventListener("keyup", J, !0), h.value !== null && h.value.removeEventListener("blur", J, De), jt = null), h.value !== null && h.value.classList.remove("q-btn--active")
        }

        function Y(M) {
            Dt(M), M.qSkipRipple = !0
        }

        return ys(() => {
            D(!0)
        }), Object.assign(r, {
            click: M => {
                f.value === !0 && V(M)
            }
        }), () => {
            let M = [];
            e.icon !== void 0 && M.push(U(er, {
                name: e.icon,
                left: e.stack !== !0 && P.value === !0,
                role: "img"
            })), P.value === !0 && M.push(U("span", {class: "block"}, [e.label])), M = sn(t.default, M), e.iconRight !== void 0 && e.round === !1 && M.push(U(er, {
                name: e.iconRight,
                right: e.stack !== !0 && P.value === !0,
                role: "img"
            }));
            const ee = [U("span", {class: "q-focus-helper", ref: g})];
            return e.loading === !0 && e.percentage !== void 0 && ee.push(U("span", {class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage === !0 ? " q-btn__progress--dark" : "")}, [U("span", {
                class: "q-btn__progress-indicator fit block",
                style: T.value
            })])), ee.push(U("span", {class: "q-btn__content text-center col items-center q-anchor--skip " + o.value}, M)), e.loading !== null && ee.push(U(Xc, {name: "q-transition--fade"}, () => e.loading === !0 ? [U("span", {
                key: "loading",
                class: "absolute-full flex flex-center"
            }, t.loading !== void 0 ? t.loading() : [U(Ul)])] : null)), Oo(U(u.value, H.value, ee), [[Sd, L.value, void 0, $.value]])
        }
    }
});
let Fd = 1, Hd = document.body;

function zd(e, t) {
    const n = document.createElement("div");
    if (n.id = t !== void 0 ? `q-portal--${t}--${Fd++}` : e, Zn.globalNodes !== void 0) {
        const r = Zn.globalNodes.class;
        r !== void 0 && (n.className = r)
    }
    return Hd.appendChild(n), n
}

function _h(e) {
    e.remove()
}

let Ud = 0;
const zn = {}, Un = {}, qe = {}, Wl = {}, Vd = /^\s*$/, Gl = [], Kd = [void 0, null, !0, !1, ""],
    Os = ["top-left", "top-right", "bottom-left", "bottom-right", "top", "bottom", "left", "right", "center"],
    Wd = ["top-left", "top-right", "bottom-left", "bottom-right"], Ht = {
        positive: {icon: e => e.iconSet.type.positive, color: "positive"},
        negative: {icon: e => e.iconSet.type.negative, color: "negative"},
        warning: {icon: e => e.iconSet.type.warning, color: "warning", textColor: "dark"},
        info: {icon: e => e.iconSet.type.info, color: "info"},
        ongoing: {group: !1, timeout: 0, spinner: !0, color: "grey-8"}
    };

function Ql(e, t, n) {
    if (!e) return nn("parameter required");
    let r;
    const s = {textColor: "white"};
    if (e.ignoreDefaults !== !0 && Object.assign(s, zn), Sn(e) === !1 && (s.type && Object.assign(s, Ht[s.type]), e = {message: e}), Object.assign(s, Ht[e.type || s.type], e), typeof s.icon == "function" && (s.icon = s.icon(t)), s.spinner ? (s.spinner === !0 && (s.spinner = Ul), s.spinner = Rn(s.spinner)) : s.spinner = !1, s.meta = {
        hasMedia: Boolean(s.spinner !== !1 || s.icon || s.avatar),
        hasText: Gi(s.message) || Gi(s.caption)
    }, s.position) {
        if (Os.includes(s.position) === !1) return nn("wrong position", e)
    } else s.position = "bottom";
    if (Kd.includes(s.timeout) === !0) s.timeout = 5e3; else {
        const a = Number(s.timeout);
        if (isNaN(a) || a < 0) return nn("wrong timeout", e);
        s.timeout = Number.isFinite(a) ? a : 0
    }
    s.timeout === 0 ? s.progress = !1 : s.progress === !0 && (s.meta.progressClass = "q-notification__progress" + (s.progressClass ? ` ${s.progressClass}` : ""), s.meta.progressStyle = {animationDuration: `${s.timeout + 1e3}ms`});
    const i = (Array.isArray(e.actions) === !0 ? e.actions : []).concat(e.ignoreDefaults !== !0 && Array.isArray(zn.actions) === !0 ? zn.actions : []).concat(Ht[e.type] !== void 0 && Array.isArray(Ht[e.type].actions) === !0 ? Ht[e.type].actions : []), {closeBtn: o} = s;
    if (o && i.push({label: typeof o == "string" ? o : t.lang.label.close}), s.actions = i.map(({
                                                                                                    handler: a,
                                                                                                    noDismiss: u,
                                                                                                    ...c
                                                                                                }) => ({
        flat: !0, ...c,
        onClick: typeof a == "function" ? () => {
            a(), u !== !0 && l()
        } : () => {
            l()
        }
    })), s.multiLine === void 0 && (s.multiLine = s.actions.length > 1), Object.assign(s.meta, {
        class: `q-notification row items-stretch q-notification--${s.multiLine === !0 ? "multi-line" : "standard"}` + (s.color !== void 0 ? ` bg-${s.color}` : "") + (s.textColor !== void 0 ? ` text-${s.textColor}` : "") + (s.classes !== void 0 ? ` ${s.classes}` : ""),
        wrapperClass: "q-notification__wrapper col relative-position border-radius-inherit " + (s.multiLine === !0 ? "column no-wrap justify-center" : "row items-center"),
        contentClass: "q-notification__content row items-center" + (s.multiLine === !0 ? "" : " col"),
        leftClass: s.meta.hasText === !0 ? "additional" : "single",
        attrs: {role: "alert", ...s.attrs}
    }), s.group === !1 ? (s.group = void 0, s.meta.group = void 0) : ((s.group === void 0 || s.group === !0) && (s.group = [s.message, s.caption, s.multiline].concat(s.actions.map(a => `${a.label}*${a.icon}`)).join("|")), s.meta.group = s.group + "|" + s.position), s.actions.length === 0 ? s.actions = void 0 : s.meta.actionsClass = "q-notification__actions row items-center " + (s.multiLine === !0 ? "justify-end" : "col-auto") + (s.meta.hasMedia === !0 ? " q-notification__actions--with-media" : ""), n !== void 0) {
        n.notif.meta.timer && (clearTimeout(n.notif.meta.timer), n.notif.meta.timer = void 0), s.meta.uid = n.notif.meta.uid;
        const a = qe[s.position].value.indexOf(n.notif);
        qe[s.position].value[a] = s
    } else {
        const a = Un[s.meta.group];
        if (a === void 0) {
            if (s.meta.uid = Ud++, s.meta.badge = 1, ["left", "right", "center"].indexOf(s.position) !== -1) qe[s.position].value.splice(Math.floor(qe[s.position].value.length / 2), 0, s); else {
                const u = s.position.indexOf("top") !== -1 ? "unshift" : "push";
                qe[s.position].value[u](s)
            }
            s.group !== void 0 && (Un[s.meta.group] = s)
        } else {
            if (a.meta.timer && (clearTimeout(a.meta.timer), a.meta.timer = void 0), s.badgePosition !== void 0) {
                if (Wd.includes(s.badgePosition) === !1) return nn("wrong badgePosition", e)
            } else s.badgePosition = `top-${s.position.indexOf("left") !== -1 ? "right" : "left"}`;
            s.meta.uid = a.meta.uid, s.meta.badge = a.meta.badge + 1, s.meta.badgeClass = `q-notification__badge q-notification__badge--${s.badgePosition}` + (s.badgeColor !== void 0 ? ` bg-${s.badgeColor}` : "") + (s.badgeTextColor !== void 0 ? ` text-${s.badgeTextColor}` : "") + (s.badgeClass ? ` ${s.badgeClass}` : "");
            const u = qe[s.position].value.indexOf(a);
            qe[s.position].value[u] = Un[s.meta.group] = s
        }
    }
    const l = () => {
        Gd(s), r = void 0
    };
    if (s.timeout > 0 && (s.meta.timer = setTimeout(() => {
        s.meta.timer = void 0, l()
    }, s.timeout + 1e3)), s.group !== void 0) return a => {
        a !== void 0 ? nn("trying to update a grouped one which is forbidden", e) : l()
    };
    if (r = {dismiss: l, config: e, notif: s}, n !== void 0) {
        Object.assign(n, r);
        return
    }
    return a => {
        if (r !== void 0) if (a === void 0) r.dismiss(); else {
            const u = Object.assign({}, r.config, a, {group: !1, position: s.position});
            Ql(u, t, r)
        }
    }
}

function Gd(e) {
    e.meta.timer && (clearTimeout(e.meta.timer), e.meta.timer = void 0);
    const t = qe[e.position].value.indexOf(e);
    if (t !== -1) {
        e.group !== void 0 && delete Un[e.meta.group];
        const n = Gl["" + e.meta.uid];
        if (n) {
            const {width: r, height: s} = getComputedStyle(n);
            n.style.left = `${n.offsetLeft}px`, n.style.width = r, n.style.height = s
        }
        qe[e.position].value.splice(t, 1), typeof e.onDismiss == "function" && e.onDismiss()
    }
}

function Gi(e) {
    return e != null && Vd.test(e) !== !0
}

function nn(e, t) {
    return console.error(`Notify: ${e}`, t), !1
}

function Qd() {
    return kn({
        name: "QNotifications", devtools: {hide: !0}, setup() {
            return () => U("div", {class: "q-notifications"}, Os.map(e => U(yu, {
                key: e,
                class: Wl[e],
                tag: "div",
                name: `q-notification--${e}`
            }, () => qe[e].value.map(t => {
                const n = t.meta, r = [];
                if (n.hasMedia === !0 && (t.spinner !== !1 ? r.push(U(t.spinner, {
                    class: "q-notification__spinner q-notification__spinner--" + n.leftClass,
                    color: t.spinnerColor,
                    size: t.spinnerSize
                })) : t.icon ? r.push(U(er, {
                    class: "q-notification__icon q-notification__icon--" + n.leftClass,
                    name: t.icon,
                    color: t.iconColor,
                    size: t.iconSize,
                    role: "img"
                })) : t.avatar && r.push(U(bd, {class: "q-notification__avatar q-notification__avatar--" + n.leftClass}, () => U("img", {
                    src: t.avatar,
                    "aria-hidden": "true"
                })))), n.hasText === !0) {
                    let i;
                    const o = {class: "q-notification__message col"};
                    if (t.html === !0) o.innerHTML = t.caption ? `<div>${t.message}</div><div class="q-notification__caption">${t.caption}</div>` : t.message; else {
                        const l = [t.message];
                        i = t.caption ? [U("div", l), U("div", {class: "q-notification__caption"}, [t.caption])] : l
                    }
                    r.push(U("div", o, i))
                }
                const s = [U("div", {class: n.contentClass}, r)];
                return t.progress === !0 && s.push(U("div", {
                    key: `${n.uid}|p|${n.badge}`,
                    class: n.progressClass,
                    style: n.progressStyle
                })), t.actions !== void 0 && s.push(U("div", {class: n.actionsClass}, t.actions.map(i => U(qd, i)))), n.badge > 1 && s.push(U("div", {
                    key: `${n.uid}|${n.badge}`,
                    class: t.meta.badgeClass,
                    style: t.badgeStyle
                }, [n.badge])), U("div", {
                    ref: i => {
                        Gl["" + n.uid] = i
                    }, key: n.uid, class: n.class, ...n.attrs
                }, [U("div", {class: n.wrapperClass}, s)])
            }))))
        }
    })
}

var Jd = {
    setDefaults(e) {
        Sn(e) === !0 && Object.assign(zn, e)
    }, registerType(e, t) {
        Sn(t) === !0 && (Ht[e] = t)
    }, install({$q: e, parentApp: t}) {
        if (e.notify = this.create = n => Ql(n, e), e.notify.setDefaults = this.setDefaults, e.notify.registerType = this.registerType, e.config.notify !== void 0 && this.setDefaults(e.config.notify), this.__installed !== !0) {
            Os.forEach(r => {
                qe[r] = vn([]);
                const s = ["left", "center", "right"].includes(r) === !0 ? "center" : r.indexOf("top") !== -1 ? "top" : "bottom",
                    i = r.indexOf("left") !== -1 ? "start" : r.indexOf("right") !== -1 ? "end" : "center",
                    o = ["left", "right"].includes(r) ? `items-${r === "left" ? "start" : "end"} justify-center` : r === "center" ? "flex-center" : `items-${i}`;
                Wl[r] = `q-notifications__list q-notifications__list--${s} fixed column no-wrap ${o}`
            });
            const n = zd("q-notify");
            Xu(Qd(), t).mount(n)
        }
    }
}, Yd = {config: {}, plugins: {Notify: Jd}};
const Xd = "/liars-bar/";

async function Zd({app: e, router: t}, n) {
    let r = !1;
    const s = l => {
        try {
            return t.resolve(l).href
        } catch {
        }
        return Object(l) === l ? null : l
    }, i = l => {
        if (r = !0, typeof l == "string" && /^https?:\/\//.test(l)) {
            window.location.href = l;
            return
        }
        const a = s(l);
        a !== null && (window.location.href = a, window.location.reload())
    }, o = window.location.href.replace(window.location.origin, "");
    for (let l = 0; r === !1 && l < n.length; l++) try {
        await n[l]({app: e, router: t, ssrContext: null, redirect: i, urlPath: o, publicPath: Xd})
    } catch (a) {
        if (a && a.url) {
            i(a.url);
            return
        }
        console.error("[Quasar] boot error:", a);
        return
    }
    r !== !0 && (e.use(t), e.mount("#q-app"))
}

ad(wl, Yd).then(e => {
    const [t, n] = Promise.allSettled !== void 0 ? ["allSettled", r => r.map(s => {
        if (s.status === "rejected") {
            console.error("[Quasar] boot error:", s.reason);
            return
        }
        return s.value.default
    })] : ["all", r => r.map(s => s.default)];
    return Promise[t]([Nn(() => import("./i18n.d29bfa1a.js"), [])]).then(r => {
        const s = n(r).filter(i => typeof i == "function");
        Zd(e, s)
    })
});
export {
    ch as $,
    Xr as A,
    Dt as B,
    Oo as C,
    gh as D,
    wd as E,
    Fe as F,
    Lu as G,
    Ye as H,
    ih as I,
    Iu as J,
    lh as K,
    Yr as L,
    Sl as M,
    Mu as N,
    $u as O,
    Jr as P,
    Du as Q,
    Ga as R,
    Wa as S,
    fr as T,
    sn as U,
    Gu as V,
    Pd as W,
    oh as X,
    bh as Y,
    ph as Z,
    Bn as _,
    Ho as a,
    Yt as a0,
    Ju as a1,
    nc as a2,
    ol as a3,
    al as a4,
    Fa as a5,
    qd as a6,
    Dc as a7,
    rh as a8,
    nh as a9,
    er as aa,
    fa as ab,
    Sd as ac,
    Ed as ad,
    Rd as ae,
    Ya as af,
    uh as ag,
    Cs as ah,
    Ul as ai,
    Xc as aj,
    qu as ak,
    vh as al,
    th as am,
    zd as an,
    _h as ao,
    mh as ap,
    kr as aq,
    ul as ar,
    sh as as,
    yu as at,
    bd as au,
    as as av,
    ls as aw,
    Pt as ax,
    we as b,
    W as c,
    bs as d,
    eh as e,
    Te as f,
    Tn as g,
    U as h,
    it as i,
    dh as j,
    kn as k,
    cd as l,
    kt as m,
    ys as n,
    qo as o,
    xn as p,
    Co as q,
    vn as r,
    Aa as s,
    At as t,
    fh as u,
    hh as v,
    qn as w,
    ah as x,
    yh as y,
    Ad as z
};
