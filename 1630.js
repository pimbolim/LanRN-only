exports.default = function (l) {
  if (Array.isArray(l)) return l;
  if ('string' == typeof l)
    try {
      var s = module1632.parse(l);
      return [s[0], s[3], s[1], s[4], s[2], s[5]];
    } catch (t) {
      console.error(t);
      return module1631.identity;
    }
  return u(o(l), l.transform);
};

exports.props2transform = o;
exports.transformToMatrix = u;

var module1631 = require('./1631'),
  module1632 = require('./1632');

function l(t) {
  var l = t.x,
    s = t.y,
    o = t.originX,
    u = t.originY,
    y = t.scaleX,
    f = t.scaleY,
    c = t.rotation,
    p = t.skewX,
    A = t.skewY;
  module1631.appendTransform(l + o, s + u, y, f, c, p, A, o, u);
}

function s(n, t, l, s) {
  var o, u;
  if ('number' == typeof n) o = u = n;
  else if ('string' == typeof n) {
    var y = n.split(/\s*,\s*/);

    if (2 === y.length) {
      o = +y[0];
      u = +y[1];
    } else if (1 === y.length) o = u = +y[0];
  } else Array.isArray(n) && (2 === n.length ? ((o = +n[0]), (u = +n[1])) : 1 === n.length && (o = u = +n[0]));
  module1632 = +module1632;
  if (!isNaN(module1632)) o = module1632;
  l = +l;
  if (!isNaN(l)) u = l;
  return [o || s || 0, u || s || 0];
}

function o(n) {
  var t = n.rotation,
    l = n.translate,
    o = n.translateX,
    u = n.translateY,
    y = n.origin,
    f = n.originX,
    c = n.originY,
    p = n.scale,
    A = n.scaleX,
    v = n.scaleY,
    X = n.skew,
    Y = n.skewX,
    h = n.skewY,
    w = n.x,
    k = n.y;
  if (
    null == t &&
    null == l &&
    null == o &&
    null == u &&
    null == y &&
    null == f &&
    null == c &&
    null == p &&
    null == A &&
    null == v &&
    null == X &&
    null == Y &&
    null == h &&
    null == w &&
    null == k
  )
    return null;
  if (Array.isArray(w) || Array.isArray(k)) console.warn('Passing SvgLengthList to x or y attribute where SvgLength expected');

  var x = s(l, o || (Array.isArray(w) ? w[0] : w), u || (Array.isArray(k) ? k[0] : k)),
    b = s(y, f, c),
    N = s(p, A, v, 1),
    _ = s(X, Y, h);

  return {
    rotation: null == t ? 0 : +t || 0,
    originX: b[0],
    originY: b[1],
    scaleX: N[0],
    scaleY: N[1],
    skewX: _[0],
    skewY: _[1],
    x: x[0],
    y: x[1],
  };
}

function u(s, u) {
  if (!s && !u) return null;
  if ((module1631.reset(), s && l(s), u))
    if (Array.isArray(u)) 'number' == typeof u[0] && module1631.append(u[0], u[1], u[2], u[3], u[4], u[5]);
    else if ('string' == typeof u)
      try {
        var y = module1632.parse(u);
        module1631.append(y[0], y[3], y[1], y[4], y[2], y[5]);
      } catch (n) {
        console.error(n);
      }
    else {
      var f = o(u);
      if (f) l(f);
    }
  return module1631.toArray();
}
