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
    var u = y(n);
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
  module589 = require('./589');

function y(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (y = function (t) {
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

var v = (function (t) {
  module35.default(b, t);

  var y = b,
    v = h(),
    O = function () {
      var t,
        n = module34.default(y);

      if (v) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function b() {
    module24.default(this, b);
    return O.apply(this, arguments);
  }

  module25.default(b, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          n = t.labelAnimation,
          u = t.style,
          f = t.children,
          o = t.type,
          l = t.fontSize,
          y = {
            height: 1.5 * l,
            opacity: n,
          },
          h = {
            includeFontPadding: false,
            textAlignVertical: 'top',
            fontSize: l,
            color: t.color,
          };

        switch (o) {
          case 'prefix':
            y.paddingRight = 8;
            h.textAlign = 'left';
            break;

          case 'suffix':
            y.paddingLeft = 8;
            h.textAlign = 'right';
        }

        return React.default.createElement(
          ReactNative.Animated.View,
          {
            style: [module589.default.container, y],
          },
          React.default.createElement(
            ReactNative.Animated.Text,
            {
              style: [u, h],
            },
            f
          )
        );
      },
    },
  ]);
  return b;
})(React.PureComponent);

exports.default = v;
v.defaultProps = {
  numberOfLines: 1,
};
