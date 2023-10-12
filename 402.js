var module38 = require('./38').default;

function n(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    u = new WeakMap();
  return (n = function (t) {
    return t ? u : o;
  })(t);
}

module.exports = function (o, u) {
  if (!u && o && o.__esModule) return o;
  if (null === o || ('object' !== module38(o) && 'function' != typeof o))
    return {
      default: o,
    };
  var f = n(u);
  if (f && f.has(o)) return f.get(o);
  var p = {},
    c = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var l in o)
    if ('default' !== l && Object.prototype.hasOwnProperty.call(o, l)) {
      var s = c ? Object.getOwnPropertyDescriptor(o, l) : null;
      if (s && (s.get || s.set)) Object.defineProperty(p, l, s);
      else p[l] = o[l];
    }

  p.default = o;
  if (f) f.set(o, p);
  return p;
};

module.exports.__esModule = true;
module.exports.default = module.exports;
