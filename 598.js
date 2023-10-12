var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = b(require('react')),
  ReactNative = require('react-native'),
  module599 = b(require('./599'));

function y(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (y = function (t) {
    return t ? o : n;
  })(t);
}

function b(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = y(n);
  if (o && o.has(t)) return o.get(t);
  var l = {},
    u = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var f in t)
    if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
      var c = u ? Object.getOwnPropertyDescriptor(t, f) : null;
      if (c && (c.get || c.set)) Object.defineProperty(l, f, c);
      else l[f] = t[f];
    }

  l.default = t;
  if (o) o.set(t, l);
  return l;
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
  module35.default(w, t);

  var y = w,
    b = h(),
    v = function () {
      var t,
        n = module34.default(y);

      if (b) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function w() {
    module24.default(this, w);
    return v.apply(this, arguments);
  }

  module25.default(w, [
    {
      key: 'borderProps',
      value: function () {
        var t = this.props,
          n = t.disabled,
          o = t.restricted,
          l = t.lineType,
          u = t.lineWidth,
          f = t.activeLineWidth,
          c = t.disabledLineWidth,
          s = t.baseColor,
          p = t.tintColor,
          y = t.errorColor,
          b = t.focusAnimation;
        return n
          ? {
              borderColor: s,
              borderWidth: c,
            }
          : o
          ? {
              borderColor: y,
              borderWidth: f,
            }
          : {
              borderColor: b.interpolate({
                inputRange: [-1, 0, 1],
                outputRange: [y, s, p],
              }),
              borderWidth: b.interpolate({
                inputRange: [-1, 0, 1],
                outputRange: [f, u, f],
              }),
              borderStyle: l,
            };
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          n = t.lineType,
          o = t.labelWidth,
          l = t.labelAnimation,
          u = t.contentInset;
        if ('none' === n) return null;
        var f = 2 * (u.left - 2 * module599.borderRadius),
          y = ReactNative.Animated.add(o, f),
          b = {
            transform: [
              {
                scaleX: ReactNative.I18nManager.isRTL ? -1 : 1,
              },
              {
                translateX: ReactNative.Animated.multiply(l, y),
              },
            ],
          },
          h = {
            width: u.left - module599.borderRadius,
          },
          v = {
            width: u.right - module599.borderRadius,
          },
          w = {
            left: h.width,
            right: v.width,
          },
          E = this.borderProps();
        return React.default.createElement(
          React.Fragment,
          null,
          React.default.createElement(
            ReactNative.View,
            {
              style: [module599.default.topContainer, w],
              pointerEvents: 'none',
            },
            React.default.createElement(
              ReactNative.Animated.View,
              {
                style: [module599.default.topLineContainer, b],
              },
              React.default.createElement(ReactNative.Animated.View, {
                style: [module599.default.borderTop, E],
              })
            )
          ),
          React.default.createElement(
            ReactNative.View,
            {
              style: [module599.default.rightContainer, v],
              pointerEvents: 'none',
            },
            React.default.createElement(ReactNative.Animated.View, {
              style: [module599.default.borderRight, E],
            })
          ),
          React.default.createElement(
            ReactNative.View,
            {
              style: module599.default.bottomContainer,
              pointerEvents: 'none',
            },
            React.default.createElement(ReactNative.Animated.View, {
              style: [module599.default.borderBottom, E],
            })
          ),
          React.default.createElement(
            ReactNative.View,
            {
              style: [module599.default.leftContainer, h],
              pointerEvents: 'none',
            },
            React.default.createElement(ReactNative.Animated.View, {
              style: [module599.default.borderLeft, E],
            })
          )
        );
      },
    },
  ]);
  return w;
})(React.PureComponent);

exports.default = v;
v.defaultProps = {
  lineType: 'solid',
  disabled: false,
  restricted: false,
};
