var module12 = require('./12'),
  module47 = require('./47'),
  module1441 = require('./1441'),
  module1401 = require('./1401');

function f(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    if (n)
      u = u.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, u);
  }

  return o;
}

function s(t) {
  for (var n = 1; n < arguments.length; n++) {
    var u = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      f(Object(u), true).forEach(function (n) {
        module47.default(t, n, u[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      f(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

var c = function t(n, u) {
    return 1 === n.length ? module47.default({}, n[0], u) : module47.default({}, n[0], t(n.slice(1), u));
  },
  p = function t(n, u, l) {
    return 1 === u.length
      ? s(s({}, n), {}, module47.default({}, u[0], l))
      : n[u[0]]
      ? s(s({}, n), {}, module47.default({}, u[0], t(n[u[0]], u.slice(1), l)))
      : s(s({}, n), {}, module47.default({}, u[0], c(u.slice(1), l)));
  };

exports.mergeFieldPathData = p;

exports.parseUpdateArgs = function (t, o) {
  var f = {};

  if (1 === t.length) {
    if (!module1401.isObject(t[0])) throw new Error(o + ' failed: If using a single update argument, it must be an object.');
    f = module12.default(t, 1)[0];
  } else {
    if (t.length % 2 == 1) throw new Error(o + ' failed: The update arguments must be either a single object argument, or equal numbers of key/value pairs.');

    for (var s = 0; s < t.length; s += 2) {
      var c = t[s],
        b = t[s + 1];
      if (module1401.isString(c)) f[c] = b;
      else {
        if (!(c instanceof module1441.default)) throw new Error(o + ' failed: Argument at index ' + s + ' must be a string or FieldPath');
        f = p(f, c._segments, b);
      }
    }
  }

  return f;
};
