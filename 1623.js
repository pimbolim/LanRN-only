exports.default = j;

exports.extract = function (t, n) {
  return j(b(n), t);
};

exports.propsAndStyles = b;

exports.withoutXY = function (t, n) {
  return j(
    v(
      v({}, b(n)),
      {},
      {
        x: null,
        y: null,
      }
    ),
    t
  );
};

var module20 = require('./20'),
  module47 = require('./47'),
  module1624 = require('./1624'),
  module1628 = require('./1628'),
  module1630 = require('./1630'),
  module1633 = require('./1633'),
  module1627 = require('./1627'),
  module1634 = require('./1634');

function y(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    if (n)
      c = c.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, c);
  }

  return o;
}

function v(t) {
  for (var n = 1; n < arguments.length; n++) {
    var c = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      y(Object(c), true).forEach(function (n) {
        module47.default(t, n, c[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(c));
    else
      y(Object(c)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(c, n));
      });
  }

  return t;
}

var O = {
  evenodd: 0,
  nonzero: 1,
};

function b(t) {
  var o = t.style;
  return o ? v(v({}, Array.isArray(o) ? Object.assign({}, ...module20.default(o)) : o), t) : t;
}

function P(t) {
  if (t) {
    var n = t.match(module1634.idPattern);
    return n ? n[1] : undefined;
  }
}

function j(t, n) {
  var o = t.id,
    y = t.opacity,
    v = t.onLayout,
    b = t.clipPath,
    j = t.clipRule,
    k = t.display,
    h = t.mask,
    w = t.marker,
    x = t.markerStart,
    S = undefined === x ? w : x,
    D = t.markerMid,
    E = undefined === D ? w : D,
    M = t.markerEnd,
    _ = undefined === M ? w : M,
    A = t.transform,
    L = {},
    I = [];

  module1633.default(L, t, n);
  module1624.default(L, t, I);
  module1628.default(L, t, I);
  if (I.length) L.propList = I;
  var R = module1630.props2transform(t),
    z = module1630.transformToMatrix(R, A);

  if (
    (null !== z && (L.matrix = z),
    null != y && (L.opacity = module1627.default(y)),
    null != k && (L.display = 'none' === k ? 'none' : undefined),
    v && (L.onLayout = v),
    S && (L.markerStart = P(S)),
    E && (L.markerMid = P(E)),
    _ && (L.markerEnd = P(_)),
    o && (L.name = String(o)),
    j && (L.clipRule = 0 === O[j] ? 0 : 1),
    b)
  ) {
    var T = b.match(module1634.idPattern);
    if (T) L.clipPath = T[1];
    else console.warn('Invalid `clipPath` prop, expected a clipPath like "#id", but got: "' + b + '"');
  }

  if (h) {
    var X = h.match(module1634.idPattern);
    if (X) L.mask = X[1];
    else console.warn('Invalid `mask` prop, expected a mask like "#id", but got: "' + h + '"');
  }

  return L;
}
