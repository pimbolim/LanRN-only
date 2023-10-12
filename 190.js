(function (t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var u = f(n);
  if (u && u.has(t)) return u.get(t);
  var o = {},
    l = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var p in t)
    if ('default' !== p && Object.prototype.hasOwnProperty.call(t, p)) {
      var c = l ? Object.getOwnPropertyDescriptor(t, p) : null;
      if (c && (c.get || c.set)) Object.defineProperty(o, p, c);
      else o[p] = t[p];
    }

  o.default = t;
  if (u) u.set(t, o);
})(require('react'));

var module176 = require('./176'),
  module84 = require('./84'),
  module191 = require('./191');

function f(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (f = function (t) {
    return t ? u : n;
  })(t);
}

var l,
  module173 = require('./173'),
  c = module84.default({
    supportedCommands: ['focus', 'blur', 'setTextAndSelection'],
  });

exports.Commands = c;

if (globals.RN$Bridgeless) {
  module173.register('RCTSinglelineTextInputView', function () {
    return module191.default;
  });
  l = 'RCTSinglelineTextInputView';
} else l = module176.default('RCTSinglelineTextInputView');

var s = l;
exports.default = s;
