exports.default = function (t, p) {
  var s = t.id,
    y = t.children,
    b = t.gradientTransform,
    h = t.transform,
    O = t.gradientUnits;
  if (!s) return null;

  for (
    var _ = [],
      j = y
        ? React.Children.map(y, function (t) {
            return React.default.cloneElement(t, {
              parent: p,
            });
          })
        : [],
      w = j.length,
      M = 0;
    M < w;
    M++
  ) {
    var P = j[M].props,
      k = P.style,
      C = P.offset,
      W = undefined === C ? k && k.offset : C,
      A = P.stopColor,
      D = undefined === A ? (k && k.stopColor) || '#000' : A,
      E = P.stopOpacity,
      N = undefined === E ? k && k.stopOpacity : E,
      T = c(W || 0),
      U = D && module1626.default(D);
    if ('number' != typeof U || isNaN(T)) console.warn('"' + D + '" is not a valid color or "' + W + '" is not a valid offset');
    else {
      var V = Math.round(255 * module1627.default(N));

      _.push([T, (16777215 & U) | (V << 24)]);
    }
  }

  _.sort(v);

  for (var $ = [], q = _.length, x = 0; x < q; x++) {
    var z = _[x];
    $.push(z[0], z[1]);
  }

  return {
    name: s,
    gradient: $,
    children: j,
    gradientUnits: (O && module1656.default[O]) || 0,
    gradientTransform: module1630.default(b || h || t),
  };
};

var React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = p(n);
    if (o && o.has(t)) return o.get(t);
    var f = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var s = u ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (s && (s.get || s.set)) Object.defineProperty(f, l, s);
        else f[l] = t[l];
      }

    f.default = t;
    if (o) o.set(t, f);
    return f;
  })(require('react')),
  module1626 = require('./1626'),
  module1627 = require('./1627'),
  module1630 = require('./1630'),
  module1656 = require('./1656');

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (p = function (t) {
    return t ? o : n;
  })(t);
}

var s = /^([+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)(%?)$/;

function c(t) {
  if ('number' == typeof t) return t;
  if ('object' == typeof t && 'function' == typeof t.__getAnimatedValue) return t.__getAnimatedValue();
  var n = 'string' == typeof t && t.match(s);
  if (n) return n[2] ? +n[1] / 100 : +n[1];
  else {
    console.warn('"' + t + '" is not a valid number or percentage string.');
    return 0;
  }
}

var v = function (t, n) {
  return t[0] - n[0];
};
