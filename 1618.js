var t = {};
Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function () {
    return module1619.default;
  },
});

var module1619 = (function (t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var u = o(n);
  if (u && u.has(t)) return u.get(t);
  var f = {},
    c = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var l in t)
    if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
      var p = c ? Object.getOwnPropertyDescriptor(t, l) : null;
      if (p && (p.get || p.set)) Object.defineProperty(f, l, p);
      else f[l] = t[l];
    }

  f.default = t;
  if (u) u.set(t, f);
  return f;
})(require('./1619'));

function o(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (o = function (t) {
    return t ? u : n;
  })(t);
}

Object.keys(module1619).forEach(function (o) {
  if ('default' !== o && '__esModule' !== o)
    Object.prototype.hasOwnProperty.call(t, o) ||
      (o in exports && exports[o] === module1619[o]) ||
      Object.defineProperty(exports, o, {
        enumerable: true,
        get: function () {
          return module1619[o];
        },
      });
});
