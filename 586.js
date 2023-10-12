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
    var o = R(n);
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
  })(require('react')),
  ReactNative = require('react-native'),
  module587 = require('./587'),
  b = [
    'label',
    'offset',
    'disabled',
    'restricted',
    'fontSize',
    'activeFontSize',
    'contentInset',
    'errorColor',
    'baseColor',
    'tintColor',
    'style',
    'focusAnimation',
    'labelAnimation',
  ];

function R(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (R = function (t) {
    return t ? o : n;
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
  module35.default(j, t);

  var R = j,
    O = h(),
    P = function () {
      var t,
        n = module34.default(R);

      if (O) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function j() {
    module24.default(this, j);
    return P.apply(this, arguments);
  }

  module25.default(j, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          l = t.label,
          u = t.offset,
          f = t.disabled,
          c = t.restricted,
          s = t.fontSize,
          R = t.activeFontSize,
          h = t.contentInset,
          O = t.errorColor,
          P = t.baseColor,
          j = t.tintColor,
          C = t.style,
          w = t.focusAnimation,
          A = t.labelAnimation,
          _ = module53.default(t, b);

        if (null == l) return null;
        var x = {
            lineHeight: s,
            fontSize: s,
            color: f
              ? P
              : c
              ? O
              : w.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [O, P, j],
                }),
          },
          z = u.x0,
          M = u.y0,
          S = u.x1,
          k = u.y1;
        M += R;
        M += h.label;
        M += 0.25 * s;
        var W = {
          transform: [
            {
              scale: A.interpolate({
                inputRange: [0, 1],
                outputRange: [1, R / s],
              }),
            },
            {
              translateY: A.interpolate({
                inputRange: [0, 1],
                outputRange: [M, k],
              }),
            },
            {
              translateX: A.interpolate({
                inputRange: [0, 1],
                outputRange: [z, S],
              }),
            },
          ],
        };
        return React.default.createElement(
          ReactNative.Animated.View,
          {
            style: [module587.default.container, W],
          },
          React.default.createElement(
            ReactNative.Animated.Text,
            module11.default(
              {
                style: [module587.default.text, C, x],
              },
              _
            ),
            l
          )
        );
      },
    },
  ]);
  return j;
})(React.PureComponent);

exports.default = O;
O.defaultProps = {
  numberOfLines: 1,
  disabled: false,
  restricted: false,
};
