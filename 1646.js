exports.default = function (t, n) {
  var f = t.x,
    c = t.y,
    u = t.dx,
    p = t.dy,
    y = t.rotate,
    b = t.children,
    O = t.inlineSize,
    S = t.baselineShift,
    h = t.verticalAlign,
    v = t.alignmentBaseline,
    j =
      'string' == typeof b || 'number' == typeof b
        ? n
          ? React.default.createElement(s, null, String(b))
          : null
        : React.Children.count(b) > 1 || Array.isArray(b)
        ? React.Children.map(b, w)
        : b;
  return {
    content: null === j ? String(b) : null,
    children: j,
    inlineSize: O,
    baselineShift: S,
    verticalAlign: h,
    alignmentBaseline: v,
    font: P(t),
    x: module1629.default(f),
    y: module1629.default(c),
    dx: module1629.default(u),
    dy: module1629.default(p),
    rotate: module1629.default(y),
  };
};

exports.extractFont = P;

exports.setTSpan = function (t) {
  s = t;
};

var module47 = require('./47'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = c(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var p = f ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (p && (p.get || p.set)) Object.defineProperty(l, u, p);
        else l[u] = t[u];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  module1629 = require('./1629'),
  module1634 = require('./1634');

function c(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (c = function (t) {
    return t ? o : n;
  })(t);
}

function u(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (n)
      l = l.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, l);
  }

  return o;
}

function p(t) {
  for (var o = 1; o < arguments.length; o++) {
    var l = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      u(Object(l), true).forEach(function (o) {
        module47.default(t, o, l[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      u(Object(l)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
      });
  }

  return t;
}

var s,
  y = /^\s*((?:(?:normal|bold|italic)\s+)*)(?:(\d+(?:\.\d+)?(?:%|px|em|pt|pc|mm|cm|in]))*(?:\s*\/.*?)?\s+)?\s*"?([^"]*)/i,
  b = /^[\s"']*/,
  O = /[\s"']*$/,
  S = /\s*,\s*/g,
  h = {};

function v(t) {
  return t ? t.split(S)[0].replace(b, '').replace(O, '') : null;
}

function j(t) {
  if (h.hasOwnProperty(t)) return h[t];
  var n = y.exec(t);

  if (!n) {
    h[t] = null;
    return null;
  }

  var o = /bold/.exec(n[1]),
    l = /italic/.exec(n[1]);
  h[t] = {
    fontSize: n[2] || 12,
    fontWeight: o ? 'bold' : 'normal',
    fontStyle: l ? 'italic' : 'normal',
    fontFamily: v(n[3]),
  };
  return h[t];
}

function P(t) {
  var n = t.fontData,
    o = t.fontStyle,
    l = t.fontVariant,
    c = t.fontWeight,
    u = t.fontStretch,
    s = t.fontSize,
    y = t.fontFamily,
    b = t.textAnchor,
    O = t.textDecoration,
    S = t.letterSpacing,
    h = t.wordSpacing,
    P = t.kerning,
    w = t.fontFeatureSettings,
    x = t.fontVariantLigatures,
    D = t.fontVariationSettings,
    k = t.font,
    A = module1634.pickNotNil({
      fontData: n,
      fontStyle: o,
      fontVariant: l,
      fontWeight: c,
      fontStretch: u,
      fontSize: s,
      fontFamily: v(y),
      textAnchor: b,
      textDecoration: O,
      letterSpacing: S,
      wordSpacing: h,
      kerning: P,
      fontFeatureSettings: w,
      fontVariantLigatures: x,
      fontVariationSettings: D,
    });
  return p(p({}, 'string' == typeof k ? j(k) : k), A);
}

function w(t) {
  return 'string' == typeof t || 'number' == typeof t ? React.default.createElement(s, null, String(t)) : t;
}
