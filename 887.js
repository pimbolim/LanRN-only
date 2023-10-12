var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = v(n);
    if (u && u.has(t)) return u.get(t);
    var f = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var c = o ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (c && (c.get || c.set)) Object.defineProperty(f, l, c);
        else f[l] = t[l];
      }

    f.default = t;
    if (u) u.set(t, f);
    return f;
  })(require('react')),
  ReactNative = require('react-native'),
  module886 = require('./886'),
  module884 = require('./884');

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (v = function (t) {
    return t ? u : n;
  })(t);
}

function h() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var O = (function (t) {
  module35.default(P, t);

  var module884 = P,
    v = h(),
    O = function () {
      var t,
        n = module34.default(module884);

      if (v) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function P() {
    module24.default(this, P);
    return O.apply(this, arguments);
  }

  module25.default(P, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          n = t.style,
          u = t.onPress,
          f = t.imageStyle,
          o = t.imageSrc;
        return React.default.createElement(
          ReactNative.TouchableOpacity,
          {
            style: n,
            onPress: u,
          },
          React.default.createElement(module886.default, {
            style: f,
            source: o,
          })
        );
      },
    },
  ]);
  return P;
})(React.Component);

exports.default = O;
O.defaultProps = {
  style: {
    padding: 8,
    width: module884.DEFAULT_IMAGE_DIMENSIONS,
    height: module884.DEFAULT_IMAGE_DIMENSIONS,
    alignSelf: 'center',
  },
};
