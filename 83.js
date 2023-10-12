!(function (t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var u = o(n);
  if (u && u.has(t)) return u.get(t);
  var f = {},
    p = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var s in t)
    if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
      var l = p ? Object.getOwnPropertyDescriptor(t, s) : null;
      if (l && (l.get || l.set)) Object.defineProperty(f, s, l);
      else f[s] = t[s];
    }

  f.default = t;
  if (u) u.set(t, f);
})(require('react'));

var module84 = require('./84');

function o(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (o = function (t) {
    return t ? u : n;
  })(t);
}

require('./49');

var u,
  f,
  module189 = require('./189'),
  module196 = require('./196'),
  module176 = require('./176');

if (globals.RN$Bridgeless) {
  f = module189;
  module196('RCTView', module189);
  u = 'RCTView';
} else u = module176('RCTView');

var c = f;
exports.__INTERNAL_VIEW_CONFIG = c;

var _ = module84.default({
  supportedCommands: ['hotspotUpdate', 'setPressed'],
});

exports.Commands = _;
var v = u;
exports.default = v;
