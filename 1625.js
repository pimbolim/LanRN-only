exports.default = function (n) {
  if ('number' == typeof n && n >>> 0 === n && n >= 0 && n <= 4294967295) return module1626.integerColor(n);
  if (!n || 'none' === n) return null;
  if ('currentColor' === n) return u;
  if ('context-fill' === n) return f;
  if ('context-stroke' === n) return l;
  var c = 'string' == typeof n && n.match(o);
  if (c) return [1, c[1]];
  var p = module1626.default(n);
  if ('number' == typeof p) return p;
  console.warn('"' + n + '" is not a valid color or brush');
  return null;
};

var module1626 = (function (t, o) {
  if (!o && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var u = n(o);
  if (u && u.has(t)) return u.get(t);
  var f = {},
    l = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var c in t)
    if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
      var p = l ? Object.getOwnPropertyDescriptor(t, c) : null;
      if (p && (p.get || p.set)) Object.defineProperty(f, c, p);
      else f[c] = t[c];
    }

  f.default = t;
  if (u) u.set(t, f);
  return f;
})(require('./1626'));

function n(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    u = new WeakMap();
  return (n = function (t) {
    return t ? u : o;
  })(t);
}

var o = /^url\(#(.+)\)$/,
  u = [2],
  f = [3],
  l = [4];
