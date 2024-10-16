import {
    d as dt,
    h as zt,
    e as An,
    i as Sn,
    o as Pn,
    a as yn,
    c as Oe,
    w as st,
    F as en,
    g as tn,
    b as Rn,
    r as Dn,
    s as kn,
    f as Mn,
    T as Fn,
    j as vn
} from "./index.47c5d9f4.js";/*!
  * shared v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const De = typeof window != "undefined", le = (e, t = !1) => t ? Symbol.for(e) : Symbol(e),
    Un = (e, t, n) => wn({l: e, k: t, s: n}),
    wn = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
    X = e => typeof e == "number" && isFinite(e), Wn = e => rn(e) === "[object Date]",
    ke = e => rn(e) === "[object RegExp]", we = e => v(e) && Object.keys(e).length === 0, j = Object.assign;
let Ot;
const Me = () => Ot || (Ot = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});

function bt(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}

const xn = Object.prototype.hasOwnProperty;

function Fe(e, t) {
    return xn.call(e, t)
}

const G = Array.isArray, $ = e => typeof e == "function", C = e => typeof e == "string", V = e => typeof e == "boolean",
    U = e => e !== null && typeof e == "object", Vn = e => U(e) && $(e.then) && $(e.catch),
    nn = Object.prototype.toString, rn = e => nn.call(e), v = e => {
        if (!U(e)) return !1;
        const t = Object.getPrototypeOf(e);
        return t === null || t.constructor === Object
    }, $n = e => e == null ? "" : G(e) || v(e) && e.toString === nn ? JSON.stringify(e, null, 2) : String(e);

function Yn(e, t = "") {
    return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "")
}

function We(e) {
    let t = e;
    return () => ++t
}

function Gn(e, t) {
    typeof console != "undefined" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
}

const Pe = e => !U(e) || G(e);

function Re(e, t) {
    if (Pe(e) || Pe(t)) throw new Error("Invalid value");
    const n = [{src: e, des: t}];
    for (; n.length;) {
        const {src: r, des: s} = n.pop();
        Object.keys(r).forEach(c => {
            U(r[c]) && !U(s[c]) && (s[c] = Array.isArray(r[c]) ? [] : {}), Pe(s[c]) || Pe(r[c]) ? s[c] = r[c] : n.push({
                src: r[c],
                des: s[c]
            })
        })
    }
}/*!
  * message-compiler v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function Xn(e, t, n) {
    return {line: e, column: t, offset: n}
}

function ve(e, t, n) {
    const r = {start: e, end: t};
    return n != null && (r.source = n), r
}

const Hn = /\{([0-9a-zA-Z]+)\}/g;

function an(e, ...t) {
    return t.length === 1 && Kn(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Hn, (n, r) => t.hasOwnProperty(r) ? t[r] : "")
}

const sn = Object.assign, ht = e => typeof e == "string", Kn = e => e !== null && typeof e == "object";

function ln(e, t = "") {
    return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "")
}

const Et = {USE_MODULO_SYNTAX: 1, __EXTEND_POINT__: 2}, jn = {[Et.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."};

function Bn(e, t, ...n) {
    const r = an(jn[e] || "", ...n || []), s = {message: String(r), code: e};
    return t && (s.location = t), s
}

const D = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    UNHANDLED_CODEGEN_NODE_TYPE: 15,
    UNHANDLED_MINIFIER_NODE_TYPE: 16,
    __EXTEND_POINT__: 17
}, Jn = {
    [D.EXPECTED_TOKEN]: "Expected token: '{0}'",
    [D.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
    [D.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
    [D.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
    [D.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
    [D.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
    [D.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
    [D.EMPTY_PLACEHOLDER]: "Empty placeholder",
    [D.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
    [D.INVALID_LINKED_FORMAT]: "Invalid linked format",
    [D.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
    [D.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
    [D.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
    [D.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
    [D.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
    [D.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};

function Le(e, t, n = {}) {
    const {domain: r, messages: s, args: c} = n, o = an((s || Jn)[e] || "", ...c || []), f = new SyntaxError(String(o));
    return f.code = e, t && (f.location = t), f.domain = r, f
}

function Qn(e) {
    throw e
}

const ne = " ", qn = "\r", K = `
`, Zn = String.fromCharCode(8232), zn = String.fromCharCode(8233);

function er(e) {
    const t = e;
    let n = 0, r = 1, s = 1, c = 0;
    const o = p => t[p] === qn && t[p + 1] === K, f = p => t[p] === K, i = p => t[p] === zn, d = p => t[p] === Zn,
        O = p => o(p) || f(p) || i(p) || d(p), T = () => n, L = () => r, h = () => s, R = () => c,
        k = p => o(p) || i(p) || d(p) ? K : t[p], A = () => k(n), y = () => k(n + c);

    function F() {
        return c = 0, O(n) && (r++, s = 0), o(n) && n++, n++, s++, t[n]
    }

    function _() {
        return o(n + c) && c++, c++, t[n + c]
    }

    function E() {
        n = 0, r = 1, s = 1, c = 0
    }

    function I(p = 0) {
        c = p
    }

    function N() {
        const p = n + c;
        for (; p !== n;) F();
        c = 0
    }

    return {
        index: T,
        line: L,
        column: h,
        peekOffset: R,
        charAt: k,
        currentChar: A,
        currentPeek: y,
        next: F,
        peek: _,
        reset: E,
        resetPeek: I,
        skipToPeek: N
    }
}

const oe = void 0, tr = ".", Ct = "'", nr = "tokenizer";

function rr(e, t = {}) {
    const n = t.location !== !1, r = er(e), s = () => r.index(), c = () => Xn(r.line(), r.column(), r.index()), o = c(),
        f = s(), i = {
            currentType: 14,
            offset: f,
            startLoc: o,
            endLoc: o,
            lastType: 14,
            lastOffset: f,
            lastStartLoc: o,
            lastEndLoc: o,
            braceNest: 0,
            inLinked: !1,
            text: ""
        }, d = () => i, {onError: O} = t;

    function T(a, l, m, ...P) {
        const x = d();
        if (l.column += m, l.offset += m, O) {
            const M = n ? ve(x.startLoc, l) : null, u = Le(a, M, {domain: nr, args: P});
            O(u)
        }
    }

    function L(a, l, m) {
        a.endLoc = c(), a.currentType = l;
        const P = {type: l};
        return n && (P.loc = ve(a.startLoc, a.endLoc)), m != null && (P.value = m), P
    }

    const h = a => L(a, 14);

    function R(a, l) {
        return a.currentChar() === l ? (a.next(), l) : (T(D.EXPECTED_TOKEN, c(), 0, l), "")
    }

    function k(a) {
        let l = "";
        for (; a.currentPeek() === ne || a.currentPeek() === K;) l += a.currentPeek(), a.peek();
        return l
    }

    function A(a) {
        const l = k(a);
        return a.skipToPeek(), l
    }

    function y(a) {
        if (a === oe) return !1;
        const l = a.charCodeAt(0);
        return l >= 97 && l <= 122 || l >= 65 && l <= 90 || l === 95
    }

    function F(a) {
        if (a === oe) return !1;
        const l = a.charCodeAt(0);
        return l >= 48 && l <= 57
    }

    function _(a, l) {
        const {currentType: m} = l;
        if (m !== 2) return !1;
        k(a);
        const P = y(a.currentPeek());
        return a.resetPeek(), P
    }

    function E(a, l) {
        const {currentType: m} = l;
        if (m !== 2) return !1;
        k(a);
        const P = a.currentPeek() === "-" ? a.peek() : a.currentPeek(), x = F(P);
        return a.resetPeek(), x
    }

    function I(a, l) {
        const {currentType: m} = l;
        if (m !== 2) return !1;
        k(a);
        const P = a.currentPeek() === Ct;
        return a.resetPeek(), P
    }

    function N(a, l) {
        const {currentType: m} = l;
        if (m !== 8) return !1;
        k(a);
        const P = a.currentPeek() === ".";
        return a.resetPeek(), P
    }

    function p(a, l) {
        const {currentType: m} = l;
        if (m !== 9) return !1;
        k(a);
        const P = y(a.currentPeek());
        return a.resetPeek(), P
    }

    function S(a, l) {
        const {currentType: m} = l;
        if (!(m === 8 || m === 12)) return !1;
        k(a);
        const P = a.currentPeek() === ":";
        return a.resetPeek(), P
    }

    function b(a, l) {
        const {currentType: m} = l;
        if (m !== 10) return !1;
        const P = () => {
            const M = a.currentPeek();
            return M === "{" ? y(a.peek()) : M === "@" || M === "%" || M === "|" || M === ":" || M === "." || M === ne || !M ? !1 : M === K ? (a.peek(), P()) : w(a, !1)
        }, x = P();
        return a.resetPeek(), x
    }

    function H(a) {
        k(a);
        const l = a.currentPeek() === "|";
        return a.resetPeek(), l
    }

    function z(a) {
        const l = k(a), m = a.currentPeek() === "%" && a.peek() === "{";
        return a.resetPeek(), {isModulo: m, hasSpace: l.length > 0}
    }

    function w(a, l = !0) {
        const m = (x = !1, M = "", u = !1) => {
            const g = a.currentPeek();
            return g === "{" ? M === "%" ? !1 : x : g === "@" || !g ? M === "%" ? !0 : x : g === "%" ? (a.peek(), m(x, "%", !0)) : g === "|" ? M === "%" || u ? !0 : !(M === ne || M === K) : g === ne ? (a.peek(), m(!0, ne, u)) : g === K ? (a.peek(), m(!0, K, u)) : !0
        }, P = m();
        return l && a.resetPeek(), P
    }

    function Q(a, l) {
        const m = a.currentChar();
        return m === oe ? oe : l(m) ? (a.next(), m) : null
    }

    function Ve(a) {
        const l = a.charCodeAt(0);
        return l >= 97 && l <= 122 || l >= 65 && l <= 90 || l >= 48 && l <= 57 || l === 95 || l === 36
    }

    function $e(a) {
        return Q(a, Ve)
    }

    function Ye(a) {
        const l = a.charCodeAt(0);
        return l >= 97 && l <= 122 || l >= 65 && l <= 90 || l >= 48 && l <= 57 || l === 95 || l === 36 || l === 45
    }

    function Ge(a) {
        return Q(a, Ye)
    }

    function Xe(a) {
        const l = a.charCodeAt(0);
        return l >= 48 && l <= 57
    }

    function He(a) {
        return Q(a, Xe)
    }

    function Ke(a) {
        const l = a.charCodeAt(0);
        return l >= 48 && l <= 57 || l >= 65 && l <= 70 || l >= 97 && l <= 102
    }

    function te(a) {
        return Q(a, Ke)
    }

    function Te(a) {
        let l = "", m = "";
        for (; l = He(a);) m += l;
        return m
    }

    function je(a) {
        A(a);
        const l = a.currentChar();
        return l !== "%" && T(D.EXPECTED_TOKEN, c(), 0, l), a.next(), "%"
    }

    function Ce(a) {
        let l = "";
        for (; ;) {
            const m = a.currentChar();
            if (m === "{" || m === "}" || m === "@" || m === "|" || !m) break;
            if (m === "%") if (w(a)) l += m, a.next(); else break; else if (m === ne || m === K) if (w(a)) l += m, a.next(); else {
                if (H(a)) break;
                l += m, a.next()
            } else l += m, a.next()
        }
        return l
    }

    function Be(a) {
        A(a);
        let l = "", m = "";
        for (; l = Ge(a);) m += l;
        return a.currentChar() === oe && T(D.UNTERMINATED_CLOSING_BRACE, c(), 0), m
    }

    function Je(a) {
        A(a);
        let l = "";
        return a.currentChar() === "-" ? (a.next(), l += `-${Te(a)}`) : l += Te(a), a.currentChar() === oe && T(D.UNTERMINATED_CLOSING_BRACE, c(), 0), l
    }

    function pt(a) {
        return a !== Ct && a !== K
    }

    function Qe(a) {
        A(a), R(a, "'");
        let l = "", m = "";
        for (; l = Q(a, pt);) l === "\\" ? m += qe(a) : m += l;
        const P = a.currentChar();
        return P === K || P === oe ? (T(D.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, c(), 0), P === K && (a.next(), R(a, "'")), m) : (R(a, "'"), m)
    }

    function qe(a) {
        const l = a.currentChar();
        switch (l) {
            case"\\":
            case"'":
                return a.next(), `\\${l}`;
            case"u":
                return Ae(a, l, 4);
            case"U":
                return Ae(a, l, 6);
            default:
                return T(D.UNKNOWN_ESCAPE_SEQUENCE, c(), 0, l), ""
        }
    }

    function Ae(a, l, m) {
        R(a, l);
        let P = "";
        for (let x = 0; x < m; x++) {
            const M = te(a);
            if (!M) {
                T(D.INVALID_UNICODE_ESCAPE_SEQUENCE, c(), 0, `\\${l}${P}${a.currentChar()}`);
                break
            }
            P += M
        }
        return `\\${l}${P}`
    }

    function Ze(a) {
        return a !== "{" && a !== "}" && a !== ne && a !== K
    }

    function ze(a) {
        A(a);
        let l = "", m = "";
        for (; l = Q(a, Ze);) m += l;
        return m
    }

    function et(a) {
        let l = "", m = "";
        for (; l = $e(a);) m += l;
        return m
    }

    function tt(a) {
        const l = m => {
            const P = a.currentChar();
            return P === "{" || P === "%" || P === "@" || P === "|" || P === "(" || P === ")" || !P || P === ne ? m : (m += P, a.next(), l(m))
        };
        return l("")
    }

    function Ie(a) {
        A(a);
        const l = R(a, "|");
        return A(a), l
    }

    function _e(a, l) {
        let m = null;
        switch (a.currentChar()) {
            case"{":
                return l.braceNest >= 1 && T(D.NOT_ALLOW_NEST_PLACEHOLDER, c(), 0), a.next(), m = L(l, 2, "{"), A(a), l.braceNest++, m;
            case"}":
                return l.braceNest > 0 && l.currentType === 2 && T(D.EMPTY_PLACEHOLDER, c(), 0), a.next(), m = L(l, 3, "}"), l.braceNest--, l.braceNest > 0 && A(a), l.inLinked && l.braceNest === 0 && (l.inLinked = !1), m;
            case"@":
                return l.braceNest > 0 && T(D.UNTERMINATED_CLOSING_BRACE, c(), 0), m = me(a, l) || h(l), l.braceNest = 0, m;
            default: {
                let x = !0, M = !0, u = !0;
                if (H(a)) return l.braceNest > 0 && T(D.UNTERMINATED_CLOSING_BRACE, c(), 0), m = L(l, 1, Ie(a)), l.braceNest = 0, l.inLinked = !1, m;
                if (l.braceNest > 0 && (l.currentType === 5 || l.currentType === 6 || l.currentType === 7)) return T(D.UNTERMINATED_CLOSING_BRACE, c(), 0), l.braceNest = 0, pe(a, l);
                if (x = _(a, l)) return m = L(l, 5, Be(a)), A(a), m;
                if (M = E(a, l)) return m = L(l, 6, Je(a)), A(a), m;
                if (u = I(a, l)) return m = L(l, 7, Qe(a)), A(a), m;
                if (!x && !M && !u) return m = L(l, 13, ze(a)), T(D.INVALID_TOKEN_IN_PLACEHOLDER, c(), 0, m.value), A(a), m;
                break
            }
        }
        return m
    }

    function me(a, l) {
        const {currentType: m} = l;
        let P = null;
        const x = a.currentChar();
        switch ((m === 8 || m === 9 || m === 12 || m === 10) && (x === K || x === ne) && T(D.INVALID_LINKED_FORMAT, c(), 0), x) {
            case"@":
                return a.next(), P = L(l, 8, "@"), l.inLinked = !0, P;
            case".":
                return A(a), a.next(), L(l, 9, ".");
            case":":
                return A(a), a.next(), L(l, 10, ":");
            default:
                return H(a) ? (P = L(l, 1, Ie(a)), l.braceNest = 0, l.inLinked = !1, P) : N(a, l) || S(a, l) ? (A(a), me(a, l)) : p(a, l) ? (A(a), L(l, 12, et(a))) : b(a, l) ? (A(a), x === "{" ? _e(a, l) || P : L(l, 11, tt(a))) : (m === 8 && T(D.INVALID_LINKED_FORMAT, c(), 0), l.braceNest = 0, l.inLinked = !1, pe(a, l))
        }
    }

    function pe(a, l) {
        let m = {type: 14};
        if (l.braceNest > 0) return _e(a, l) || h(l);
        if (l.inLinked) return me(a, l) || h(l);
        switch (a.currentChar()) {
            case"{":
                return _e(a, l) || h(l);
            case"}":
                return T(D.UNBALANCED_CLOSING_BRACE, c(), 0), a.next(), L(l, 3, "}");
            case"@":
                return me(a, l) || h(l);
            default: {
                if (H(a)) return m = L(l, 1, Ie(a)), l.braceNest = 0, l.inLinked = !1, m;
                const {isModulo: x, hasSpace: M} = z(a);
                if (x) return M ? L(l, 0, Ce(a)) : L(l, 4, je(a));
                if (w(a)) return L(l, 0, Ce(a));
                break
            }
        }
        return m
    }

    function nt() {
        const {currentType: a, offset: l, startLoc: m, endLoc: P} = i;
        return i.lastType = a, i.lastOffset = l, i.lastStartLoc = m, i.lastEndLoc = P, i.offset = s(), i.startLoc = c(), r.currentChar() === oe ? L(i, 14) : pe(r, i)
    }

    return {nextToken: nt, currentOffset: s, currentPosition: c, context: d}
}

const ar = "parser", sr = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

function lr(e, t, n) {
    switch (e) {
        case"\\\\":
            return "\\";
        case"\\'":
            return "'";
        default: {
            const r = parseInt(t || n, 16);
            return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "\uFFFD"
        }
    }
}

function cr(e = {}) {
    const t = e.location !== !1, {onError: n, onWarn: r} = e;

    function s(_, E, I, N, ...p) {
        const S = _.currentPosition();
        if (S.offset += N, S.column += N, n) {
            const b = t ? ve(I, S) : null, H = Le(E, b, {domain: ar, args: p});
            n(H)
        }
    }

    function c(_, E, I, N, ...p) {
        const S = _.currentPosition();
        if (S.offset += N, S.column += N, r) {
            const b = t ? ve(I, S) : null;
            r(Bn(E, b, p))
        }
    }

    function o(_, E, I) {
        const N = {type: _};
        return t && (N.start = E, N.end = E, N.loc = {start: I, end: I}), N
    }

    function f(_, E, I, N) {
        N && (_.type = N), t && (_.end = E, _.loc && (_.loc.end = I))
    }

    function i(_, E) {
        const I = _.context(), N = o(3, I.offset, I.startLoc);
        return N.value = E, f(N, _.currentOffset(), _.currentPosition()), N
    }

    function d(_, E) {
        const I = _.context(), {lastOffset: N, lastStartLoc: p} = I, S = o(5, N, p);
        return S.index = parseInt(E, 10), _.nextToken(), f(S, _.currentOffset(), _.currentPosition()), S
    }

    function O(_, E, I) {
        const N = _.context(), {lastOffset: p, lastStartLoc: S} = N, b = o(4, p, S);
        return b.key = E, I === !0 && (b.modulo = !0), _.nextToken(), f(b, _.currentOffset(), _.currentPosition()), b
    }

    function T(_, E) {
        const I = _.context(), {lastOffset: N, lastStartLoc: p} = I, S = o(9, N, p);
        return S.value = E.replace(sr, lr), _.nextToken(), f(S, _.currentOffset(), _.currentPosition()), S
    }

    function L(_) {
        const E = _.nextToken(), I = _.context(), {lastOffset: N, lastStartLoc: p} = I, S = o(8, N, p);
        return E.type !== 12 ? (s(_, D.UNEXPECTED_EMPTY_LINKED_MODIFIER, I.lastStartLoc, 0), S.value = "", f(S, N, p), {
            nextConsumeToken: E,
            node: S
        }) : (E.value == null && s(_, D.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, q(E)), S.value = E.value || "", f(S, _.currentOffset(), _.currentPosition()), {node: S})
    }

    function h(_, E) {
        const I = _.context(), N = o(7, I.offset, I.startLoc);
        return N.value = E, f(N, _.currentOffset(), _.currentPosition()), N
    }

    function R(_) {
        const E = _.context(), I = o(6, E.offset, E.startLoc);
        let N = _.nextToken();
        if (N.type === 9) {
            const p = L(_);
            I.modifier = p.node, N = p.nextConsumeToken || _.nextToken()
        }
        switch (N.type !== 10 && s(_, D.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, q(N)), N = _.nextToken(), N.type === 2 && (N = _.nextToken()), N.type) {
            case 11:
                N.value == null && s(_, D.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, q(N)), I.key = h(_, N.value || "");
                break;
            case 5:
                N.value == null && s(_, D.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, q(N)), I.key = O(_, N.value || "");
                break;
            case 6:
                N.value == null && s(_, D.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, q(N)), I.key = d(_, N.value || "");
                break;
            case 7:
                N.value == null && s(_, D.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, q(N)), I.key = T(_, N.value || "");
                break;
            default: {
                s(_, D.UNEXPECTED_EMPTY_LINKED_KEY, E.lastStartLoc, 0);
                const p = _.context(), S = o(7, p.offset, p.startLoc);
                return S.value = "", f(S, p.offset, p.startLoc), I.key = S, f(I, p.offset, p.startLoc), {
                    nextConsumeToken: N,
                    node: I
                }
            }
        }
        return f(I, _.currentOffset(), _.currentPosition()), {node: I}
    }

    function k(_) {
        const E = _.context(), I = E.currentType === 1 ? _.currentOffset() : E.offset,
            N = E.currentType === 1 ? E.endLoc : E.startLoc, p = o(2, I, N);
        p.items = [];
        let S = null, b = null;
        do {
            const w = S || _.nextToken();
            switch (S = null, w.type) {
                case 0:
                    w.value == null && s(_, D.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, q(w)), p.items.push(i(_, w.value || ""));
                    break;
                case 6:
                    w.value == null && s(_, D.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, q(w)), p.items.push(d(_, w.value || ""));
                    break;
                case 4:
                    b = !0;
                    break;
                case 5:
                    w.value == null && s(_, D.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, q(w)), p.items.push(O(_, w.value || "", !!b)), b && (c(_, Et.USE_MODULO_SYNTAX, E.lastStartLoc, 0, q(w)), b = null);
                    break;
                case 7:
                    w.value == null && s(_, D.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, q(w)), p.items.push(T(_, w.value || ""));
                    break;
                case 8: {
                    const Q = R(_);
                    p.items.push(Q.node), S = Q.nextConsumeToken || null;
                    break
                }
            }
        } while (E.currentType !== 14 && E.currentType !== 1);
        const H = E.currentType === 1 ? E.lastOffset : _.currentOffset(),
            z = E.currentType === 1 ? E.lastEndLoc : _.currentPosition();
        return f(p, H, z), p
    }

    function A(_, E, I, N) {
        const p = _.context();
        let S = N.items.length === 0;
        const b = o(1, E, I);
        b.cases = [], b.cases.push(N);
        do {
            const H = k(_);
            S || (S = H.items.length === 0), b.cases.push(H)
        } while (p.currentType !== 14);
        return S && s(_, D.MUST_HAVE_MESSAGES_IN_PLURAL, I, 0), f(b, _.currentOffset(), _.currentPosition()), b
    }

    function y(_) {
        const E = _.context(), {offset: I, startLoc: N} = E, p = k(_);
        return E.currentType === 14 ? p : A(_, I, N, p)
    }

    function F(_) {
        const E = rr(_, sn({}, e)), I = E.context(), N = o(0, I.offset, I.startLoc);
        return t && N.loc && (N.loc.source = _), N.body = y(E), e.onCacheKey && (N.cacheKey = e.onCacheKey(_)), I.currentType !== 14 && s(E, D.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, _[I.offset] || ""), f(N, E.currentOffset(), E.currentPosition()), N
    }

    return {parse: F}
}

function q(e) {
    if (e.type === 14) return "EOF";
    const t = (e.value || "").replace(/\r?\n/gu, "\\n");
    return t.length > 10 ? t.slice(0, 9) + "\u2026" : t
}

function or(e, t = {}) {
    const n = {ast: e, helpers: new Set};
    return {context: () => n, helper: c => (n.helpers.add(c), c)}
}

function At(e, t) {
    for (let n = 0; n < e.length; n++) Nt(e[n], t)
}

function Nt(e, t) {
    switch (e.type) {
        case 1:
            At(e.cases, t), t.helper("plural");
            break;
        case 2:
            At(e.items, t);
            break;
        case 6: {
            Nt(e.key, t), t.helper("linked"), t.helper("type");
            break
        }
        case 5:
            t.helper("interpolate"), t.helper("list");
            break;
        case 4:
            t.helper("interpolate"), t.helper("named");
            break
    }
}

function ir(e, t = {}) {
    const n = or(e);
    n.helper("normalize"), e.body && Nt(e.body, n);
    const r = n.context();
    e.helpers = Array.from(r.helpers)
}

function ur(e) {
    const t = e.body;
    return t.type === 2 ? St(t) : t.cases.forEach(n => St(n)), e
}

function St(e) {
    if (e.items.length === 1) {
        const t = e.items[0];
        (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value)
    } else {
        const t = [];
        for (let n = 0; n < e.items.length; n++) {
            const r = e.items[n];
            if (!(r.type === 3 || r.type === 9) || r.value == null) break;
            t.push(r.value)
        }
        if (t.length === e.items.length) {
            e.static = ln(t);
            for (let n = 0; n < e.items.length; n++) {
                const r = e.items[n];
                (r.type === 3 || r.type === 9) && delete r.value
            }
        }
    }
}

const fr = "minifier";

function Ee(e) {
    switch (e.t = e.type, e.type) {
        case 0: {
            const t = e;
            Ee(t.body), t.b = t.body, delete t.body;
            break
        }
        case 1: {
            const t = e, n = t.cases;
            for (let r = 0; r < n.length; r++) Ee(n[r]);
            t.c = n, delete t.cases;
            break
        }
        case 2: {
            const t = e, n = t.items;
            for (let r = 0; r < n.length; r++) Ee(n[r]);
            t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
            break
        }
        case 3:
        case 9:
        case 8:
        case 7: {
            const t = e;
            t.value && (t.v = t.value, delete t.value);
            break
        }
        case 6: {
            const t = e;
            Ee(t.key), t.k = t.key, delete t.key, t.modifier && (Ee(t.modifier), t.m = t.modifier, delete t.modifier);
            break
        }
        case 5: {
            const t = e;
            t.i = t.index, delete t.index;
            break
        }
        case 4: {
            const t = e;
            t.k = t.key, delete t.key;
            break
        }
        default:
            throw Le(D.UNHANDLED_MINIFIER_NODE_TYPE, null, {domain: fr, args: [e.type]})
    }
    delete e.type
}

const _r = "parser";

function mr(e, t) {
    const {sourceMap: n, filename: r, breakLineCode: s, needIndent: c} = t, o = t.location !== !1, f = {
        filename: r,
        code: "",
        column: 1,
        line: 1,
        offset: 0,
        map: void 0,
        breakLineCode: s,
        needIndent: c,
        indentLevel: 0
    };
    o && e.loc && (f.source = e.loc.source);
    const i = () => f;

    function d(A, y) {
        f.code += A
    }

    function O(A, y = !0) {
        const F = y ? s : "";
        d(c ? F + "  ".repeat(A) : F)
    }

    function T(A = !0) {
        const y = ++f.indentLevel;
        A && O(y)
    }

    function L(A = !0) {
        const y = --f.indentLevel;
        A && O(y)
    }

    function h() {
        O(f.indentLevel)
    }

    return {
        context: i,
        push: d,
        indent: T,
        deindent: L,
        newline: h,
        helper: A => `_${A}`,
        needIndent: () => f.needIndent
    }
}

function dr(e, t) {
    const {helper: n} = e;
    e.push(`${n("linked")}(`), Ne(e, t.key), t.modifier ? (e.push(", "), Ne(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")")
}

function Er(e, t) {
    const {helper: n, needIndent: r} = e;
    e.push(`${n("normalize")}([`), e.indent(r());
    const s = t.items.length;
    for (let c = 0; c < s && (Ne(e, t.items[c]), c !== s - 1); c++) e.push(", ");
    e.deindent(r()), e.push("])")
}

function Nr(e, t) {
    const {helper: n, needIndent: r} = e;
    if (t.cases.length > 1) {
        e.push(`${n("plural")}([`), e.indent(r());
        const s = t.cases.length;
        for (let c = 0; c < s && (Ne(e, t.cases[c]), c !== s - 1); c++) e.push(", ");
        e.deindent(r()), e.push("])")
    }
}

function gr(e, t) {
    t.body ? Ne(e, t.body) : e.push("null")
}

function Ne(e, t) {
    const {helper: n} = e;
    switch (t.type) {
        case 0:
            gr(e, t);
            break;
        case 1:
            Nr(e, t);
            break;
        case 2:
            Er(e, t);
            break;
        case 6:
            dr(e, t);
            break;
        case 8:
            e.push(JSON.stringify(t.value), t);
            break;
        case 7:
            e.push(JSON.stringify(t.value), t);
            break;
        case 5:
            e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
            break;
        case 4:
            e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
            break;
        case 9:
            e.push(JSON.stringify(t.value), t);
            break;
        case 3:
            e.push(JSON.stringify(t.value), t);
            break;
        default:
            throw Le(D.UNHANDLED_CODEGEN_NODE_TYPE, null, {domain: _r, args: [t.type]})
    }
}

const Lr = (e, t = {}) => {
    const n = ht(t.mode) ? t.mode : "normal", r = ht(t.filename) ? t.filename : "message.intl", s = !!t.sourceMap,
        c = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : n !== "arrow", f = e.helpers || [],
        i = mr(e, {mode: n, filename: r, sourceMap: s, breakLineCode: c, needIndent: o});
    i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(o), f.length > 0 && (i.push(`const { ${ln(f.map(T => `${T}: _${T}`), ", ")} } = ctx`), i.newline()), i.push("return "), Ne(i, e), i.deindent(o), i.push("}"), delete e.helpers;
    const {code: d, map: O} = i.context();
    return {ast: e, code: d, map: O ? O.toJSON() : void 0}
};

function Tr(e, t = {}) {
    const n = sn({}, t), r = !!n.jit, s = !!n.minify, c = n.optimize == null ? !0 : n.optimize, f = cr(n).parse(e);
    return r ? (c && ur(f), s && Ee(f), {ast: f, code: ""}) : (ir(f, n), Lr(f, n))
}/*!
  * core-base v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function Ir() {
    typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Me().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Me().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1)
}

const ie = [];
ie[0] = {w: [0], i: [3, 0], ["["]: [4], o: [7]};
ie[1] = {w: [1], ["."]: [2], ["["]: [4], o: [7]};
ie[2] = {w: [2], i: [3, 0], [0]: [3, 0]};
ie[3] = {i: [3, 0], [0]: [3, 0], w: [1, 1], ["."]: [2, 1], ["["]: [4, 1], o: [7, 1]};
ie[4] = {["'"]: [5, 0], ['"']: [6, 0], ["["]: [4, 2], ["]"]: [1, 3], o: 8, l: [4, 0]};
ie[5] = {["'"]: [4, 0], o: 8, l: [5, 0]};
ie[6] = {['"']: [4, 0], o: 8, l: [6, 0]};
const pr = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

function Or(e) {
    return pr.test(e)
}

function br(e) {
    const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
    return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}

function hr(e) {
    if (e == null) return "o";
    switch (e.charCodeAt(0)) {
        case 91:
        case 93:
        case 46:
        case 34:
        case 39:
            return e;
        case 95:
        case 36:
        case 45:
            return "i";
        case 9:
        case 10:
        case 13:
        case 160:
        case 65279:
        case 8232:
        case 8233:
            return "w"
    }
    return "i"
}

function Cr(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Or(t) ? br(t) : "*" + t
}

function Ar(e) {
    const t = [];
    let n = -1, r = 0, s = 0, c, o, f, i, d, O, T;
    const L = [];
    L[0] = () => {
        o === void 0 ? o = f : o += f
    }, L[1] = () => {
        o !== void 0 && (t.push(o), o = void 0)
    }, L[2] = () => {
        L[0](), s++
    }, L[3] = () => {
        if (s > 0) s--, r = 4, L[0](); else {
            if (s = 0, o === void 0 || (o = Cr(o), o === !1)) return !1;
            L[1]()
        }
    };

    function h() {
        const R = e[n + 1];
        if (r === 5 && R === "'" || r === 6 && R === '"') return n++, f = "\\" + R, L[0](), !0
    }

    for (; r !== null;) if (n++, c = e[n], !(c === "\\" && h())) {
        if (i = hr(c), T = ie[r], d = T[i] || T.l || 8, d === 8 || (r = d[0], d[1] !== void 0 && (O = L[d[1]], O && (f = c, O() === !1)))) return;
        if (r === 7) return t
    }
}

const Pt = new Map;

function Sr(e, t) {
    return U(e) ? e[t] : null
}

function Pr(e, t) {
    if (!U(e)) return null;
    let n = Pt.get(t);
    if (n || (n = Ar(t), n && Pt.set(t, n)), !n) return null;
    const r = n.length;
    let s = e, c = 0;
    for (; c < r;) {
        const o = s[n[c]];
        if (o === void 0 || $(s)) return null;
        s = o, c++
    }
    return s
}

const yr = e => e, Rr = e => "", Dr = "text", kr = e => e.length === 0 ? "" : Yn(e), Mr = $n;

function yt(e, t) {
    return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}

function Fr(e) {
    const t = X(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (X(e.named.count) || X(e.named.n)) ? X(e.named.count) ? e.named.count : X(e.named.n) ? e.named.n : t : t
}

function vr(e, t) {
    t.count || (t.count = e), t.n || (t.n = e)
}

function Ur(e = {}) {
    const t = e.locale, n = Fr(e), r = U(e.pluralRules) && C(t) && $(e.pluralRules[t]) ? e.pluralRules[t] : yt,
        s = U(e.pluralRules) && C(t) && $(e.pluralRules[t]) ? yt : void 0, c = y => y[r(n, y.length, s)],
        o = e.list || [], f = y => o[y], i = e.named || {};
    X(e.pluralIndex) && vr(n, i);
    const d = y => i[y];

    function O(y) {
        const F = $(e.messages) ? e.messages(y) : U(e.messages) ? e.messages[y] : !1;
        return F || (e.parent ? e.parent.message(y) : Rr)
    }

    const T = y => e.modifiers ? e.modifiers[y] : yr,
        L = v(e.processor) && $(e.processor.normalize) ? e.processor.normalize : kr,
        h = v(e.processor) && $(e.processor.interpolate) ? e.processor.interpolate : Mr,
        R = v(e.processor) && C(e.processor.type) ? e.processor.type : Dr, A = {
            list: f, named: d, plural: c, linked: (y, ...F) => {
                const [_, E] = F;
                let I = "text", N = "";
                F.length === 1 ? U(_) ? (N = _.modifier || N, I = _.type || I) : C(_) && (N = _ || N) : F.length === 2 && (C(_) && (N = _ || N), C(E) && (I = E || I));
                const p = O(y)(A), S = I === "vnode" && G(p) && N ? p[0] : p;
                return N ? T(N)(S, I) : S
            }, message: O, type: R, interpolate: h, normalize: L, values: j({}, o, i)
        };
    return A
}

const cn = Et.__EXTEND_POINT__, ue = We(cn), wr = {
    NOT_FOUND_KEY: cn,
    FALLBACK_TO_TRANSLATE: ue(),
    CANNOT_FORMAT_NUMBER: ue(),
    FALLBACK_TO_NUMBER_FORMAT: ue(),
    CANNOT_FORMAT_DATE: ue(),
    FALLBACK_TO_DATE_FORMAT: ue(),
    EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: ue(),
    __EXTEND_POINT__: ue()
}, on = D.__EXTEND_POINT__, fe = We(on), ee = {
    INVALID_ARGUMENT: on,
    INVALID_DATE_ARGUMENT: fe(),
    INVALID_ISO_DATE_ARGUMENT: fe(),
    NOT_SUPPORT_NON_STRING_MESSAGE: fe(),
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: fe(),
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: fe(),
    NOT_SUPPORT_LOCALE_TYPE: fe(),
    __EXTEND_POINT__: fe()
};

function ae(e) {
    return Le(e, null, void 0)
}

function gt(e, t) {
    return t.locale != null ? Rt(t.locale) : Rt(e.locale)
}

let rt;

function Rt(e) {
    if (C(e)) return e;
    if ($(e)) {
        if (e.resolvedOnce && rt != null) return rt;
        if (e.constructor.name === "Function") {
            const t = e();
            if (Vn(t)) throw ae(ee.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
            return rt = t
        } else throw ae(ee.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
    } else throw ae(ee.NOT_SUPPORT_LOCALE_TYPE)
}

function Wr(e, t, n) {
    return [...new Set([n, ...G(t) ? t : U(t) ? Object.keys(t) : C(t) ? [t] : [n]])]
}

function un(e, t, n) {
    const r = C(n) ? n : Ue, s = e;
    s.__localeChainCache || (s.__localeChainCache = new Map);
    let c = s.__localeChainCache.get(r);
    if (!c) {
        c = [];
        let o = [n];
        for (; G(o);) o = Dt(c, o, t);
        const f = G(t) || !v(t) ? t : t.default ? t.default : null;
        o = C(f) ? [f] : f, G(o) && Dt(c, o, !1), s.__localeChainCache.set(r, c)
    }
    return c
}

function Dt(e, t, n) {
    let r = !0;
    for (let s = 0; s < t.length && V(r); s++) {
        const c = t[s];
        C(c) && (r = xr(e, t[s], n))
    }
    return r
}

function xr(e, t, n) {
    let r;
    const s = t.split("-");
    do {
        const c = s.join("-");
        r = Vr(e, c, n), s.splice(-1, 1)
    } while (s.length && r === !0);
    return r
}

function Vr(e, t, n) {
    let r = !1;
    if (!e.includes(t) && (r = !0, t)) {
        r = t[t.length - 1] !== "!";
        const s = t.replace(/!/g, "");
        e.push(s), (G(n) || v(n)) && n[s] && (r = n[s])
    }
    return r
}

const $r = "9.14.1", xe = -1, Ue = "en-US", kt = "", Mt = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;

function Yr() {
    return {
        upper: (e, t) => t === "text" && C(e) ? e.toUpperCase() : t === "vnode" && U(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
        lower: (e, t) => t === "text" && C(e) ? e.toLowerCase() : t === "vnode" && U(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
        capitalize: (e, t) => t === "text" && C(e) ? Mt(e) : t === "vnode" && U(e) && "__v_isVNode" in e ? Mt(e.children) : e
    }
}

let fn;

function Gr(e) {
    fn = e
}

let _n;

function Xr(e) {
    _n = e
}

let mn;

function Hr(e) {
    mn = e
}

let dn = null;
const Ft = e => {
    dn = e
}, Kr = () => dn;
let vt = 0;

function jr(e = {}) {
    const t = $(e.onWarn) ? e.onWarn : Gn, n = C(e.version) ? e.version : $r,
        r = C(e.locale) || $(e.locale) ? e.locale : Ue, s = $(r) ? Ue : r,
        c = G(e.fallbackLocale) || v(e.fallbackLocale) || C(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s,
        o = v(e.messages) ? e.messages : {[s]: {}}, f = v(e.datetimeFormats) ? e.datetimeFormats : {[s]: {}},
        i = v(e.numberFormats) ? e.numberFormats : {[s]: {}}, d = j({}, e.modifiers || {}, Yr()),
        O = e.pluralRules || {}, T = $(e.missing) ? e.missing : null,
        L = V(e.missingWarn) || ke(e.missingWarn) ? e.missingWarn : !0,
        h = V(e.fallbackWarn) || ke(e.fallbackWarn) ? e.fallbackWarn : !0, R = !!e.fallbackFormat, k = !!e.unresolving,
        A = $(e.postTranslation) ? e.postTranslation : null, y = v(e.processor) ? e.processor : null,
        F = V(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, _ = !!e.escapeParameter,
        E = $(e.messageCompiler) ? e.messageCompiler : fn, I = $(e.messageResolver) ? e.messageResolver : _n || Sr,
        N = $(e.localeFallbacker) ? e.localeFallbacker : mn || Wr,
        p = U(e.fallbackContext) ? e.fallbackContext : void 0, S = e,
        b = U(S.__datetimeFormatters) ? S.__datetimeFormatters : new Map,
        H = U(S.__numberFormatters) ? S.__numberFormatters : new Map, z = U(S.__meta) ? S.__meta : {};
    vt++;
    const w = {
        version: n,
        cid: vt,
        locale: r,
        fallbackLocale: c,
        messages: o,
        modifiers: d,
        pluralRules: O,
        missing: T,
        missingWarn: L,
        fallbackWarn: h,
        fallbackFormat: R,
        unresolving: k,
        postTranslation: A,
        processor: y,
        warnHtmlMessage: F,
        escapeParameter: _,
        messageCompiler: E,
        messageResolver: I,
        localeFallbacker: N,
        fallbackContext: p,
        onWarn: t,
        __meta: z
    };
    return w.datetimeFormats = f, w.numberFormats = i, w.__datetimeFormatters = b, w.__numberFormatters = H, w
}

function Lt(e, t, n, r, s) {
    const {missing: c, onWarn: o} = e;
    if (c !== null) {
        const f = c(e, n, t, s);
        return C(f) ? f : t
    } else return t
}

function be(e, t, n) {
    const r = e;
    r.__localeChainCache = new Map, e.localeFallbacker(e, n, t)
}

function Br(e, t) {
    return e === t ? !1 : e.split("-")[0] === t.split("-")[0]
}

function Jr(e, t) {
    const n = t.indexOf(e);
    if (n === -1) return !1;
    for (let r = n + 1; r < t.length; r++) if (Br(e, t[r])) return !0;
    return !1
}

function at(e) {
    return n => Qr(n, e)
}

function Qr(e, t) {
    const n = t.b || t.body;
    if ((n.t || n.type) === 1) {
        const r = n, s = r.c || r.cases;
        return e.plural(s.reduce((c, o) => [...c, Ut(e, o)], []))
    } else return Ut(e, n)
}

function Ut(e, t) {
    const n = t.s || t.static;
    if (n) return e.type === "text" ? n : e.normalize([n]);
    {
        const r = (t.i || t.items).reduce((s, c) => [...s, lt(e, c)], []);
        return e.normalize(r)
    }
}

function lt(e, t) {
    const n = t.t || t.type;
    switch (n) {
        case 3: {
            const r = t;
            return r.v || r.value
        }
        case 9: {
            const r = t;
            return r.v || r.value
        }
        case 4: {
            const r = t;
            return e.interpolate(e.named(r.k || r.key))
        }
        case 5: {
            const r = t;
            return e.interpolate(e.list(r.i != null ? r.i : r.index))
        }
        case 6: {
            const r = t, s = r.m || r.modifier;
            return e.linked(lt(e, r.k || r.key), s ? lt(e, s) : void 0, e.type)
        }
        case 7: {
            const r = t;
            return r.v || r.value
        }
        case 8: {
            const r = t;
            return r.v || r.value
        }
        default:
            throw new Error(`unhandled node type on format message part: ${n}`)
    }
}

const qr = e => e;
let ye = Object.create(null);
const ge = e => U(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);

function Zr(e, t = {}) {
    let n = !1;
    const r = t.onError || Qn;
    return t.onError = s => {
        n = !0, r(s)
    }, {...Tr(e, t), detectError: n}
}

function zr(e, t) {
    if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && C(e)) {
        V(t.warnHtmlMessage) && t.warnHtmlMessage;
        const r = (t.onCacheKey || qr)(e), s = ye[r];
        if (s) return s;
        const {ast: c, detectError: o} = Zr(e, {...t, location: !1, jit: !0}), f = at(c);
        return o ? f : ye[r] = f
    } else {
        const n = e.cacheKey;
        if (n) {
            const r = ye[n];
            return r || (ye[n] = at(e))
        } else return at(e)
    }
}

const wt = () => "", se = e => $(e);

function Wt(e, ...t) {
    const {
            fallbackFormat: n,
            postTranslation: r,
            unresolving: s,
            messageCompiler: c,
            fallbackLocale: o,
            messages: f
        } = e, [i, d] = ct(...t), O = V(d.missingWarn) ? d.missingWarn : e.missingWarn,
        T = V(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn,
        L = V(d.escapeParameter) ? d.escapeParameter : e.escapeParameter, h = !!d.resolvedMessage,
        R = C(d.default) || V(d.default) ? V(d.default) ? c ? i : () => i : d.default : n ? c ? i : () => i : "",
        k = n || R !== "", A = gt(e, d);
    L && ea(d);
    let [y, F, _] = h ? [i, A, f[A] || {}] : En(e, i, A, o, T, O), E = y, I = i;
    if (!h && !(C(E) || ge(E) || se(E)) && k && (E = R, I = E), !h && (!(C(E) || ge(E) || se(E)) || !C(F))) return s ? xe : i;
    let N = !1;
    const p = () => {
        N = !0
    }, S = se(E) ? E : Nn(e, i, F, E, I, p);
    if (N) return E;
    const b = ra(e, F, _, d), H = Ur(b), z = ta(e, S, H);
    return r ? r(z, i) : z
}

function ea(e) {
    G(e.list) ? e.list = e.list.map(t => C(t) ? bt(t) : t) : U(e.named) && Object.keys(e.named).forEach(t => {
        C(e.named[t]) && (e.named[t] = bt(e.named[t]))
    })
}

function En(e, t, n, r, s, c) {
    const {messages: o, onWarn: f, messageResolver: i, localeFallbacker: d} = e, O = d(e, r, n);
    let T = {}, L, h = null;
    const R = "translate";
    for (let k = 0; k < O.length && (L = O[k], T = o[L] || {}, (h = i(T, t)) === null && (h = T[t]), !(C(h) || ge(h) || se(h))); k++) if (!Jr(L, O)) {
        const A = Lt(e, t, L, c, R);
        A !== t && (h = A)
    }
    return [h, L, T]
}

function Nn(e, t, n, r, s, c) {
    const {messageCompiler: o, warnHtmlMessage: f} = e;
    if (se(r)) {
        const d = r;
        return d.locale = d.locale || n, d.key = d.key || t, d
    }
    if (o == null) {
        const d = () => r;
        return d.locale = n, d.key = t, d
    }
    const i = o(r, na(e, n, s, r, f, c));
    return i.locale = n, i.key = t, i.source = r, i
}

function ta(e, t, n) {
    return t(n)
}

function ct(...e) {
    const [t, n, r] = e, s = {};
    if (!C(t) && !X(t) && !se(t) && !ge(t)) throw ae(ee.INVALID_ARGUMENT);
    const c = X(t) ? String(t) : (se(t), t);
    return X(n) ? s.plural = n : C(n) ? s.default = n : v(n) && !we(n) ? s.named = n : G(n) && (s.list = n), X(r) ? s.plural = r : C(r) ? s.default = r : v(r) && j(s, r), [c, s]
}

function na(e, t, n, r, s, c) {
    return {
        locale: t, key: n, warnHtmlMessage: s, onError: o => {
            throw c && c(o), o
        }, onCacheKey: o => Un(t, n, o)
    }
}

function ra(e, t, n, r) {
    const {
        modifiers: s,
        pluralRules: c,
        messageResolver: o,
        fallbackLocale: f,
        fallbackWarn: i,
        missingWarn: d,
        fallbackContext: O
    } = e, L = {
        locale: t, modifiers: s, pluralRules: c, messages: h => {
            let R = o(n, h);
            if (R == null && O) {
                const [, , k] = En(O, h, t, f, i, d);
                R = o(k, h)
            }
            if (C(R) || ge(R)) {
                let k = !1;
                const y = Nn(e, h, t, R, h, () => {
                    k = !0
                });
                return k ? wt : y
            } else return se(R) ? R : wt
        }
    };
    return e.processor && (L.processor = e.processor), r.list && (L.list = r.list), r.named && (L.named = r.named), X(r.plural) && (L.pluralIndex = r.plural), L
}

function xt(e, ...t) {
    const {
        datetimeFormats: n,
        unresolving: r,
        fallbackLocale: s,
        onWarn: c,
        localeFallbacker: o
    } = e, {__datetimeFormatters: f} = e, [i, d, O, T] = ot(...t), L = V(O.missingWarn) ? O.missingWarn : e.missingWarn;
    V(O.fallbackWarn) ? O.fallbackWarn : e.fallbackWarn;
    const h = !!O.part, R = gt(e, O), k = o(e, s, R);
    if (!C(i) || i === "") return new Intl.DateTimeFormat(R, T).format(d);
    let A = {}, y, F = null;
    const _ = "datetime format";
    for (let N = 0; N < k.length && (y = k[N], A = n[y] || {}, F = A[i], !v(F)); N++) Lt(e, i, y, L, _);
    if (!v(F) || !C(y)) return r ? xe : i;
    let E = `${y}__${i}`;
    we(T) || (E = `${E}__${JSON.stringify(T)}`);
    let I = f.get(E);
    return I || (I = new Intl.DateTimeFormat(y, j({}, F, T)), f.set(E, I)), h ? I.formatToParts(d) : I.format(d)
}

const gn = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

function ot(...e) {
    const [t, n, r, s] = e, c = {};
    let o = {}, f;
    if (C(t)) {
        const i = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!i) throw ae(ee.INVALID_ISO_DATE_ARGUMENT);
        const d = i[3] ? i[3].trim().startsWith("T") ? `${i[1].trim()}${i[3].trim()}` : `${i[1].trim()}T${i[3].trim()}` : i[1].trim();
        f = new Date(d);
        try {
            f.toISOString()
        } catch {
            throw ae(ee.INVALID_ISO_DATE_ARGUMENT)
        }
    } else if (Wn(t)) {
        if (isNaN(t.getTime())) throw ae(ee.INVALID_DATE_ARGUMENT);
        f = t
    } else if (X(t)) f = t; else throw ae(ee.INVALID_ARGUMENT);
    return C(n) ? c.key = n : v(n) && Object.keys(n).forEach(i => {
        gn.includes(i) ? o[i] = n[i] : c[i] = n[i]
    }), C(r) ? c.locale = r : v(r) && (o = r), v(s) && (o = s), [c.key || "", f, c, o]
}

function Vt(e, t, n) {
    const r = e;
    for (const s in n) {
        const c = `${t}__${s}`;
        !r.__datetimeFormatters.has(c) || r.__datetimeFormatters.delete(c)
    }
}

function $t(e, ...t) {
    const {
        numberFormats: n,
        unresolving: r,
        fallbackLocale: s,
        onWarn: c,
        localeFallbacker: o
    } = e, {__numberFormatters: f} = e, [i, d, O, T] = it(...t), L = V(O.missingWarn) ? O.missingWarn : e.missingWarn;
    V(O.fallbackWarn) ? O.fallbackWarn : e.fallbackWarn;
    const h = !!O.part, R = gt(e, O), k = o(e, s, R);
    if (!C(i) || i === "") return new Intl.NumberFormat(R, T).format(d);
    let A = {}, y, F = null;
    const _ = "number format";
    for (let N = 0; N < k.length && (y = k[N], A = n[y] || {}, F = A[i], !v(F)); N++) Lt(e, i, y, L, _);
    if (!v(F) || !C(y)) return r ? xe : i;
    let E = `${y}__${i}`;
    we(T) || (E = `${E}__${JSON.stringify(T)}`);
    let I = f.get(E);
    return I || (I = new Intl.NumberFormat(y, j({}, F, T)), f.set(E, I)), h ? I.formatToParts(d) : I.format(d)
}

const Ln = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

function it(...e) {
    const [t, n, r, s] = e, c = {};
    let o = {};
    if (!X(t)) throw ae(ee.INVALID_ARGUMENT);
    const f = t;
    return C(n) ? c.key = n : v(n) && Object.keys(n).forEach(i => {
        Ln.includes(i) ? o[i] = n[i] : c[i] = n[i]
    }), C(r) ? c.locale = r : v(r) && (o = r), v(s) && (o = s), [c.key || "", f, c, o]
}

function Yt(e, t, n) {
    const r = e;
    for (const s in n) {
        const c = `${t}__${s}`;
        !r.__numberFormatters.has(c) || r.__numberFormatters.delete(c)
    }
}

Ir();/*!
  * vue-i18n v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const aa = "9.14.1";

function sa() {
    typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Me().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Me().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1)
}

const Tn = wr.__EXTEND_POINT__, re = We(Tn);
re(), re(), re(), re(), re(), re(), re(), re(), re();
const In = ee.__EXTEND_POINT__, B = We(In), J = {
    UNEXPECTED_RETURN_TYPE: In,
    INVALID_ARGUMENT: B(),
    MUST_BE_CALL_SETUP_TOP: B(),
    NOT_INSTALLED: B(),
    NOT_AVAILABLE_IN_LEGACY_MODE: B(),
    REQUIRED_VALUE: B(),
    INVALID_VALUE: B(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: B(),
    NOT_INSTALLED_WITH_PROVIDE: B(),
    UNEXPECTED_ERROR: B(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: B(),
    BRIDGE_SUPPORT_VUE_2_ONLY: B(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: B(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: B(),
    __EXTEND_POINT__: B()
};

function Z(e, ...t) {
    return Le(e, null, void 0)
}

const ut = le("__translateVNode"), ft = le("__datetimeParts"), _t = le("__numberParts"), la = le("__setPluralRules");
le("__intlifyMeta");
const ca = le("__injectWithOption"), mt = le("__dispose");

function he(e) {
    if (!U(e)) return e;
    for (const t in e) if (!!Fe(e, t)) if (!t.includes(".")) U(e[t]) && he(e[t]); else {
        const n = t.split("."), r = n.length - 1;
        let s = e, c = !1;
        for (let o = 0; o < r; o++) {
            if (n[o] in s || (s[n[o]] = {}), !U(s[n[o]])) {
                c = !0;
                break
            }
            s = s[n[o]]
        }
        c || (s[n[r]] = e[t], delete e[t]), U(s[n[r]]) && he(s[n[r]])
    }
    return e
}

function pn(e, t) {
    const {messages: n, __i18n: r, messageResolver: s, flatJson: c} = t, o = v(n) ? n : G(r) ? {} : {[e]: {}};
    if (G(r) && r.forEach(f => {
        if ("locale" in f && "resource" in f) {
            const {locale: i, resource: d} = f;
            i ? (o[i] = o[i] || {}, Re(d, o[i])) : Re(d, o)
        } else C(f) && Re(JSON.parse(f), o)
    }), s == null && c) for (const f in o) Fe(o, f) && he(o[f]);
    return o
}

function oa(e) {
    return e.type
}

function ia(e, t, n) {
    let r = U(t.messages) ? t.messages : {};
    "__i18nGlobal" in n && (r = pn(e.locale.value, {messages: r, __i18n: n.__i18nGlobal}));
    const s = Object.keys(r);
    s.length && s.forEach(c => {
        e.mergeLocaleMessage(c, r[c])
    });
    {
        if (U(t.datetimeFormats)) {
            const c = Object.keys(t.datetimeFormats);
            c.length && c.forEach(o => {
                e.mergeDateTimeFormat(o, t.datetimeFormats[o])
            })
        }
        if (U(t.numberFormats)) {
            const c = Object.keys(t.numberFormats);
            c.length && c.forEach(o => {
                e.mergeNumberFormat(o, t.numberFormats[o])
            })
        }
    }
}

function Gt(e) {
    return Mn(Fn, null, e, 0)
}

const Xt = () => [], ua = () => !1;
let Ht = 0;

function Kt(e) {
    return (t, n, r, s) => e(n, r, tn() || void 0, s)
}

function On(e = {}, t) {
    const {__root: n, __injectWithOption: r} = e, s = n === void 0, c = e.flatJson, o = De ? Dn : kn,
        f = !!e.translateExistCompatible;
    let i = V(e.inheritLocale) ? e.inheritLocale : !0;
    const d = o(n && i ? n.locale.value : C(e.locale) ? e.locale : Ue),
        O = o(n && i ? n.fallbackLocale.value : C(e.fallbackLocale) || G(e.fallbackLocale) || v(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : d.value),
        T = o(pn(d.value, e)), L = o(v(e.datetimeFormats) ? e.datetimeFormats : {[d.value]: {}}),
        h = o(v(e.numberFormats) ? e.numberFormats : {[d.value]: {}});
    let R = n ? n.missingWarn : V(e.missingWarn) || ke(e.missingWarn) ? e.missingWarn : !0,
        k = n ? n.fallbackWarn : V(e.fallbackWarn) || ke(e.fallbackWarn) ? e.fallbackWarn : !0,
        A = n ? n.fallbackRoot : V(e.fallbackRoot) ? e.fallbackRoot : !0, y = !!e.fallbackFormat,
        F = $(e.missing) ? e.missing : null, _ = $(e.missing) ? Kt(e.missing) : null,
        E = $(e.postTranslation) ? e.postTranslation : null,
        I = n ? n.warnHtmlMessage : V(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, N = !!e.escapeParameter;
    const p = n ? n.modifiers : v(e.modifiers) ? e.modifiers : {};
    let S = e.pluralRules || n && n.pluralRules, b;
    b = (() => {
        s && Ft(null);
        const u = {
            version: aa,
            locale: d.value,
            fallbackLocale: O.value,
            messages: T.value,
            modifiers: p,
            pluralRules: S,
            missing: _ === null ? void 0 : _,
            missingWarn: R,
            fallbackWarn: k,
            fallbackFormat: y,
            unresolving: !0,
            postTranslation: E === null ? void 0 : E,
            warnHtmlMessage: I,
            escapeParameter: N,
            messageResolver: e.messageResolver,
            messageCompiler: e.messageCompiler,
            __meta: {framework: "vue"}
        };
        u.datetimeFormats = L.value, u.numberFormats = h.value, u.__datetimeFormatters = v(b) ? b.__datetimeFormatters : void 0, u.__numberFormatters = v(b) ? b.__numberFormatters : void 0;
        const g = jr(u);
        return s && Ft(g), g
    })(), be(b, d.value, O.value);

    function z() {
        return [d.value, O.value, T.value, L.value, h.value]
    }

    const w = Oe({
        get: () => d.value, set: u => {
            d.value = u, b.locale = d.value
        }
    }), Q = Oe({
        get: () => O.value, set: u => {
            O.value = u, b.fallbackLocale = O.value, be(b, d.value, u)
        }
    }), Ve = Oe(() => T.value), $e = Oe(() => L.value), Ye = Oe(() => h.value);

    function Ge() {
        return $(E) ? E : null
    }

    function Xe(u) {
        E = u, b.postTranslation = u
    }

    function He() {
        return F
    }

    function Ke(u) {
        u !== null && (_ = Kt(u)), F = u, b.missing = _
    }

    const te = (u, g, W, Y, ce, Se) => {
        z();
        let de;
        try {
            s || (b.fallbackContext = n ? Kr() : void 0), de = u(b)
        } finally {
            s || (b.fallbackContext = void 0)
        }
        if (W !== "translate exists" && X(de) && de === xe || W === "translate exists" && !de) {
            const [Cn, ka] = g();
            return n && A ? Y(n) : ce(Cn)
        } else {
            if (Se(de)) return de;
            throw Z(J.UNEXPECTED_RETURN_TYPE)
        }
    };

    function Te(...u) {
        return te(g => Reflect.apply(Wt, null, [g, ...u]), () => ct(...u), "translate", g => Reflect.apply(g.t, g, [...u]), g => g, g => C(g))
    }

    function je(...u) {
        const [g, W, Y] = u;
        if (Y && !U(Y)) throw Z(J.INVALID_ARGUMENT);
        return Te(g, W, j({resolvedMessage: !0}, Y || {}))
    }

    function Ce(...u) {
        return te(g => Reflect.apply(xt, null, [g, ...u]), () => ot(...u), "datetime format", g => Reflect.apply(g.d, g, [...u]), () => kt, g => C(g))
    }

    function Be(...u) {
        return te(g => Reflect.apply($t, null, [g, ...u]), () => it(...u), "number format", g => Reflect.apply(g.n, g, [...u]), () => kt, g => C(g))
    }

    function Je(u) {
        return u.map(g => C(g) || X(g) || V(g) ? Gt(String(g)) : g)
    }

    const Qe = {normalize: Je, interpolate: u => u, type: "vnode"};

    function qe(...u) {
        return te(g => {
            let W;
            const Y = g;
            try {
                Y.processor = Qe, W = Reflect.apply(Wt, null, [Y, ...u])
            } finally {
                Y.processor = null
            }
            return W
        }, () => ct(...u), "translate", g => g[ut](...u), g => [Gt(g)], g => G(g))
    }

    function Ae(...u) {
        return te(g => Reflect.apply($t, null, [g, ...u]), () => it(...u), "number format", g => g[_t](...u), Xt, g => C(g) || G(g))
    }

    function Ze(...u) {
        return te(g => Reflect.apply(xt, null, [g, ...u]), () => ot(...u), "datetime format", g => g[ft](...u), Xt, g => C(g) || G(g))
    }

    function ze(u) {
        S = u, b.pluralRules = S
    }

    function et(u, g) {
        return te(() => {
            if (!u) return !1;
            const W = C(g) ? g : d.value, Y = _e(W), ce = b.messageResolver(Y, u);
            return f ? ce != null : ge(ce) || se(ce) || C(ce)
        }, () => [u], "translate exists", W => Reflect.apply(W.te, W, [u, g]), ua, W => V(W))
    }

    function tt(u) {
        let g = null;
        const W = un(b, O.value, d.value);
        for (let Y = 0; Y < W.length; Y++) {
            const ce = T.value[W[Y]] || {}, Se = b.messageResolver(ce, u);
            if (Se != null) {
                g = Se;
                break
            }
        }
        return g
    }

    function Ie(u) {
        const g = tt(u);
        return g != null ? g : n ? n.tm(u) || {} : {}
    }

    function _e(u) {
        return T.value[u] || {}
    }

    function me(u, g) {
        if (c) {
            const W = {[u]: g};
            for (const Y in W) Fe(W, Y) && he(W[Y]);
            g = W[u]
        }
        T.value[u] = g, b.messages = T.value
    }

    function pe(u, g) {
        T.value[u] = T.value[u] || {};
        const W = {[u]: g};
        if (c) for (const Y in W) Fe(W, Y) && he(W[Y]);
        g = W[u], Re(g, T.value[u]), b.messages = T.value
    }

    function nt(u) {
        return L.value[u] || {}
    }

    function a(u, g) {
        L.value[u] = g, b.datetimeFormats = L.value, Vt(b, u, g)
    }

    function l(u, g) {
        L.value[u] = j(L.value[u] || {}, g), b.datetimeFormats = L.value, Vt(b, u, g)
    }

    function m(u) {
        return h.value[u] || {}
    }

    function P(u, g) {
        h.value[u] = g, b.numberFormats = h.value, Yt(b, u, g)
    }

    function x(u, g) {
        h.value[u] = j(h.value[u] || {}, g), b.numberFormats = h.value, Yt(b, u, g)
    }

    Ht++, n && De && (st(n.locale, u => {
        i && (d.value = u, b.locale = u, be(b, d.value, O.value))
    }), st(n.fallbackLocale, u => {
        i && (O.value = u, b.fallbackLocale = u, be(b, d.value, O.value))
    }));
    const M = {
        id: Ht,
        locale: w,
        fallbackLocale: Q,
        get inheritLocale() {
            return i
        },
        set inheritLocale(u) {
            i = u, u && n && (d.value = n.locale.value, O.value = n.fallbackLocale.value, be(b, d.value, O.value))
        },
        get availableLocales() {
            return Object.keys(T.value).sort()
        },
        messages: Ve,
        get modifiers() {
            return p
        },
        get pluralRules() {
            return S || {}
        },
        get isGlobal() {
            return s
        },
        get missingWarn() {
            return R
        },
        set missingWarn(u) {
            R = u, b.missingWarn = R
        },
        get fallbackWarn() {
            return k
        },
        set fallbackWarn(u) {
            k = u, b.fallbackWarn = k
        },
        get fallbackRoot() {
            return A
        },
        set fallbackRoot(u) {
            A = u
        },
        get fallbackFormat() {
            return y
        },
        set fallbackFormat(u) {
            y = u, b.fallbackFormat = y
        },
        get warnHtmlMessage() {
            return I
        },
        set warnHtmlMessage(u) {
            I = u, b.warnHtmlMessage = u
        },
        get escapeParameter() {
            return N
        },
        set escapeParameter(u) {
            N = u, b.escapeParameter = u
        },
        t: Te,
        getLocaleMessage: _e,
        setLocaleMessage: me,
        mergeLocaleMessage: pe,
        getPostTranslationHandler: Ge,
        setPostTranslationHandler: Xe,
        getMissingHandler: He,
        setMissingHandler: Ke,
        [la]: ze
    };
    return M.datetimeFormats = $e, M.numberFormats = Ye, M.rt = je, M.te = et, M.tm = Ie, M.d = Ce, M.n = Be, M.getDateTimeFormat = nt, M.setDateTimeFormat = a, M.mergeDateTimeFormat = l, M.getNumberFormat = m, M.setNumberFormat = P, M.mergeNumberFormat = x, M[ca] = r, M[ut] = qe, M[ft] = Ze, M[_t] = Ae, M
}

const Tt = {
    tag: {type: [String, Object]},
    locale: {type: String},
    scope: {type: String, validator: e => e === "parent" || e === "global", default: "parent"},
    i18n: {type: Object}
};

function fa({slots: e}, t) {
    return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, s) => [...r, ...s.type === en ? s.children : [s]], []) : t.reduce((n, r) => {
        const s = e[r];
        return s && (n[r] = s()), n
    }, {})
}

function bn(e) {
    return en
}

const _a = dt({
    name: "i18n-t",
    props: j({
        keypath: {type: String, required: !0},
        plural: {type: [Number, String], validator: e => X(e) || !isNaN(e)}
    }, Tt),
    setup(e, t) {
        const {slots: n, attrs: r} = t, s = e.i18n || It({useScope: e.scope, __useComponent: !0});
        return () => {
            const c = Object.keys(n).filter(T => T !== "_"), o = {};
            e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = C(e.plural) ? +e.plural : e.plural);
            const f = fa(t, c), i = s[ut](e.keypath, f, o), d = j({}, r), O = C(e.tag) || U(e.tag) ? e.tag : bn();
            return zt(O, d, i)
        }
    }
}), jt = _a;

function ma(e) {
    return G(e) && !C(e[0])
}

function hn(e, t, n, r) {
    const {slots: s, attrs: c} = t;
    return () => {
        const o = {part: !0};
        let f = {};
        e.locale && (o.locale = e.locale), C(e.format) ? o.key = e.format : U(e.format) && (C(e.format.key) && (o.key = e.format.key), f = Object.keys(e.format).reduce((L, h) => n.includes(h) ? j({}, L, {[h]: e.format[h]}) : L, {}));
        const i = r(e.value, o, f);
        let d = [o.key];
        G(i) ? d = i.map((L, h) => {
            const R = s[L.type], k = R ? R({[L.type]: L.value, index: h, parts: i}) : [L.value];
            return ma(k) && (k[0].key = `${L.type}-${h}`), k
        }) : C(i) && (d = [i]);
        const O = j({}, c), T = C(e.tag) || U(e.tag) ? e.tag : bn();
        return zt(T, O, d)
    }
}

const da = dt({
    name: "i18n-n",
    props: j({value: {type: Number, required: !0}, format: {type: [String, Object]}}, Tt),
    setup(e, t) {
        const n = e.i18n || It({useScope: e.scope, __useComponent: !0});
        return hn(e, t, Ln, (...r) => n[_t](...r))
    }
}), Bt = da, Ea = dt({
    name: "i18n-d",
    props: j({value: {type: [Number, Date], required: !0}, format: {type: [String, Object]}}, Tt),
    setup(e, t) {
        const n = e.i18n || It({useScope: e.scope, __useComponent: !0});
        return hn(e, t, gn, (...r) => n[ft](...r))
    }
}), Jt = Ea;

function Na(e, t) {
    const n = e;
    if (e.mode === "composition") return n.__getInstance(t) || e.global;
    {
        const r = n.__getInstance(t);
        return r != null ? r.__composer : e.global.__composer
    }
}

function ga(e) {
    const t = o => {
        const {instance: f, modifiers: i, value: d} = o;
        if (!f || !f.$) throw Z(J.UNEXPECTED_ERROR);
        const O = Na(e, f.$), T = Qt(d);
        return [Reflect.apply(O.t, O, [...qt(T)]), O]
    };
    return {
        created: (o, f) => {
            const [i, d] = t(f);
            De && e.global === d && (o.__i18nWatcher = st(d.locale, () => {
                f.instance && f.instance.$forceUpdate()
            })), o.__composer = d, o.textContent = i
        }, unmounted: o => {
            De && o.__i18nWatcher && (o.__i18nWatcher(), o.__i18nWatcher = void 0, delete o.__i18nWatcher), o.__composer && (o.__composer = void 0, delete o.__composer)
        }, beforeUpdate: (o, {value: f}) => {
            if (o.__composer) {
                const i = o.__composer, d = Qt(f);
                o.textContent = Reflect.apply(i.t, i, [...qt(d)])
            }
        }, getSSRProps: o => {
            const [f] = t(o);
            return {textContent: f}
        }
    }
}

function Qt(e) {
    if (C(e)) return {path: e};
    if (v(e)) {
        if (!("path" in e)) throw Z(J.REQUIRED_VALUE, "path");
        return e
    } else throw Z(J.INVALID_VALUE)
}

function qt(e) {
    const {path: t, locale: n, args: r, choice: s, plural: c} = e, o = {}, f = r || {};
    return C(n) && (o.locale = n), X(s) && (o.plural = s), X(c) && (o.plural = c), [t, f, o]
}

function La(e, t, ...n) {
    const r = v(n[0]) ? n[0] : {}, s = !!r.useI18nComponentName;
    (V(r.globalInstall) ? r.globalInstall : !0) && ([s ? "i18n" : jt.name, "I18nT"].forEach(o => e.component(o, jt)), [Bt.name, "I18nN"].forEach(o => e.component(o, Bt)), [Jt.name, "I18nD"].forEach(o => e.component(o, Jt))), e.directive("t", ga(t))
}

const Ta = le("global-vue-i18n");

function Ia(e = {}, t) {
    const n = V(e.globalInjection) ? e.globalInjection : !0, r = !0, s = new Map, [c, o] = pa(e), f = le("");

    function i(T) {
        return s.get(T) || null
    }

    function d(T, L) {
        s.set(T, L)
    }

    function O(T) {
        s.delete(T)
    }

    {
        const T = {
            get mode() {
                return "composition"
            }, get allowComposition() {
                return r
            }, async install(L, ...h) {
                if (L.__VUE_I18N_SYMBOL__ = f, L.provide(L.__VUE_I18N_SYMBOL__, T), v(h[0])) {
                    const A = h[0];
                    T.__composerExtend = A.__composerExtend, T.__vueI18nExtend = A.__vueI18nExtend
                }
                let R = null;
                n && (R = ya(L, T.global)), La(L, T, ...h);
                const k = L.unmount;
                L.unmount = () => {
                    R && R(), T.dispose(), k()
                }
            }, get global() {
                return o
            }, dispose() {
                c.stop()
            }, __instances: s, __getInstance: i, __setInstance: d, __deleteInstance: O
        };
        return T
    }
}

function It(e = {}) {
    const t = tn();
    if (t == null) throw Z(J.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw Z(J.NOT_INSTALLED);
    const n = Oa(t), r = ha(n), s = oa(t), c = ba(e, s);
    if (c === "global") return ia(r, e, s), r;
    if (c === "parent") {
        let i = Ca(n, t, e.__useComponent);
        return i == null && (i = r), i
    }
    const o = n;
    let f = o.__getInstance(t);
    if (f == null) {
        const i = j({}, e);
        "__i18n" in s && (i.__i18n = s.__i18n), r && (i.__root = r), f = On(i), o.__composerExtend && (f[mt] = o.__composerExtend(f)), Sa(o, t, f), o.__setInstance(t, f)
    }
    return f
}

function pa(e, t, n) {
    const r = An();
    {
        const s = r.run(() => On(e));
        if (s == null) throw Z(J.UNEXPECTED_ERROR);
        return [r, s]
    }
}

function Oa(e) {
    {
        const t = Sn(e.isCE ? Ta : e.appContext.app.__VUE_I18N_SYMBOL__);
        if (!t) throw Z(e.isCE ? J.NOT_INSTALLED_WITH_PROVIDE : J.UNEXPECTED_ERROR);
        return t
    }
}

function ba(e, t) {
    return we(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
}

function ha(e) {
    return e.mode === "composition" ? e.global : e.global.__composer
}

function Ca(e, t, n = !1) {
    let r = null;
    const s = t.root;
    let c = Aa(t, n);
    for (; c != null;) {
        const o = e;
        if (e.mode === "composition" && (r = o.__getInstance(c)), r != null || s === c) break;
        c = c.parent
    }
    return r
}

function Aa(e, t = !1) {
    return e == null ? null : t && e.vnode.ctx || e.parent
}

function Sa(e, t, n) {
    Pn(() => {
    }, t), yn(() => {
        const r = n;
        e.__deleteInstance(t);
        const s = r[mt];
        s && (s(), delete r[mt])
    }, t)
}

const Pa = ["locale", "fallbackLocale", "availableLocales"], Zt = ["t", "rt", "d", "n", "tm", "te"];

function ya(e, t) {
    const n = Object.create(null);
    return Pa.forEach(s => {
        const c = Object.getOwnPropertyDescriptor(t, s);
        if (!c) throw Z(J.UNEXPECTED_ERROR);
        const o = Rn(c.value) ? {
            get() {
                return c.value.value
            }, set(f) {
                c.value.value = f
            }
        } : {
            get() {
                return c.get && c.get()
            }
        };
        Object.defineProperty(n, s, o)
    }), e.config.globalProperties.$i18n = n, Zt.forEach(s => {
        const c = Object.getOwnPropertyDescriptor(t, s);
        if (!c || !c.value) throw Z(J.UNEXPECTED_ERROR);
        Object.defineProperty(e.config.globalProperties, `$${s}`, c)
    }), () => {
        delete e.config.globalProperties.$i18n, Zt.forEach(s => {
            delete e.config.globalProperties[`$${s}`]
        })
    }
}

sa();
__INTLIFY_JIT_COMPILATION__ && Gr(zr);
Xr(Pr);
Hr(un);
var Ra = {failed: "Action failed", success: "Action was successful"}, Da = {"en-US": Ra}, Fa = vn(({app: e}) => {
    const t = Ia({locale: "en-US", globalInjection: !0, messages: Da});
    e.use(t)
});
export {Fa as default};
