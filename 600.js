var module11 = require('./11'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
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
    var o = h(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var f = l ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (f && (f.get || f.set)) Object.defineProperty(u, c, f);
        else u[c] = t[c];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module474 = require('./474'),
  y = ['children', 'style', 'foreground', 'background', 'useForeground', 'fallback'];

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (h = function (t) {
    return t ? o : n;
  })(t);
}

function k() {
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

var F = {
    opacity: 0.5,
  },
  B = ReactNative.TouchableWithoutFeedback;
if ('android' === ReactNative.Platform.OS) B = ReactNative.Platform.Version <= 20 ? ReactNative.TouchableOpacity : ReactNative.TouchableNativeFeedback;

if (B !== ReactNative.TouchableNativeFeedback) {
  B.SelectableBackground = function () {
    return {};
  };

  B.SelectableBackgroundBorderless = function () {
    return {};
  };

  B.Ripple = function () {
    return {};
  };

  B.canUseNativeForeground = function () {
    return false;
  };
}

var O = (function (t) {
  module35.default(P, t);

  var h = P,
    O = k(),
    N = function () {
      var t,
        n = module34.default(h);

      if (O) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function P() {
    module24.default(this, P);
    return N.apply(this, arguments);
  }

  module25.default(P, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          u = t.children,
          l = t.style,
          c = t.foreground,
          f = t.background,
          module34 = t.useForeground,
          h = t.fallback,
          k = module53.default(t, y);

        if (((u = React.default.Children.only(u)), B !== ReactNative.TouchableNativeFeedback)) {
          var O = h || B;
          return React.default.createElement(
            O,
            k,
            React.default.createElement(
              ReactNative.View,
              {
                style: [l, k.disabled && F],
              },
              u
            )
          );
        }

        module34 = Boolean(c) && ReactNative.TouchableNativeFeedback.canUseNativeForeground();
        if (c && f) console.warn('Specified foreground and background for Touchable, only one can be used at a time. Defaulted to foreground.');
        return React.default.createElement(
          B,
          module11.default({}, k, {
            useForeground: module34,
            background: (module34 && c) || f || ReactNative.TouchableNativeFeedback.Ripple(module474.Color.ripple, false),
          }),
          React.default.createElement(
            ReactNative.View,
            {
              style: [l, k.disabled && F],
            },
            u
          )
        );
      },
    },
  ]);
  return P;
})(React.Component);

exports.default = O;
O.SelectableBackground = B.SelectableBackground;
O.SelectableBackgroundBorderless = B.SelectableBackgroundBorderless;
O.Ripple = B.Ripple;
O.canUseNativeForeground = B.canUseNativeForeground;
