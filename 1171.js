var React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = c(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var s = l ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (s && (s.get || s.set)) Object.defineProperty(u, f, s);
        else u[f] = t[f];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module901 = require('./901'),
  module900 = require('./900'),
  module1172 = require('./1172');

function c(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (c = function (t) {
    return t ? o : n;
  })(t);
}

var s = React.memo(function (t) {
  var l = t.color,
    c = undefined === l ? 'black' : l,
    s = t.pointerEvents,
    p = t.animatedOpacity,
    y = t.onPress,
    v = React.useMemo(
      function () {
        return [
          module1172.styles.container,
          {
            opacity: p,
            backgroundColor: c,
          },
        ];
      },
      [c, p]
    );
  return y
    ? React.default.createElement(
        ReactNative.TouchableWithoutFeedback,
        {
          onPress: y,
          style: module1172.styles.container,
        },
        React.default.createElement(module901.default.View, {
          pointerEvents: s,
          style: v,
        })
      )
    : React.default.createElement(module901.default.View, {
        pointerEvents: s,
        style: v,
      });
}, module900.default);
exports.default = s;
