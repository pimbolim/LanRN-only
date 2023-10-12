var module47 = require('./47'),
  module12 = require('./12'),
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
  module585 = require('./585');

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (h = function (t) {
    return t ? o : n;
  })(t);
}

function v(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    if (n)
      u = u.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, u);
  }

  return o;
}

function O(t) {
  for (var o = 1; o < arguments.length; o++) {
    var u = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      v(Object(u), true).forEach(function (o) {
        module47.default(t, o, u[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      v(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

function P() {
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

var j = (function (t, ...args) {
  module35.default(j, t);

  var module47 = j,
    h = P(),
    v = function () {
      var t,
        o = module34.default(module47);

      if (h) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, u);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function j() {
    var t;
    module24.default(this, j);
    (t = v.call(this, ...args)).state = {
      maxLineWidth: 1,
    };
    return t;
  }

  module25.default(
    j,
    [
      {
        key: 'borderProps',
        value: function () {
          var t = this.props,
            n = t.disabled,
            o = t.restricted,
            u = t.lineWidth,
            l = t.activeLineWidth,
            c = t.disabledLineWidth,
            f = t.baseColor,
            p = t.tintColor,
            s = t.errorColor,
            y = t.focusAnimation;
          return n
            ? {
                borderColor: f,
                borderWidth: c,
              }
            : o
            ? {
                borderColor: s,
                borderWidth: l,
              }
            : {
                borderColor: y.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [s, f, p],
                }),
                borderWidth: y.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [l, u, l],
                }),
              };
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.state.maxLineWidth,
            n = this.props,
            u = n.disabled,
            l = n.lineType,
            c = n.disabledLineType,
            f = u ? c : l;
          if ('none' === f) return null;
          var p = Array.from(new Array(3), function () {
              return -1.5 * t;
            }),
            h = module12.default(p, 3),
            v = h[0],
            P = h[1],
            j = h[2],
            W = O(
              O({}, this.borderProps()),
              {},
              {
                borderStyle: f,
                top: v,
                right: P,
                left: j,
              }
            );
          return React.default.createElement(
            ReactNative.View,
            {
              style: module585.default.container,
              pointerEvents: 'none',
            },
            React.default.createElement(ReactNative.Animated.View, {
              style: [module585.default.line, W],
            })
          );
        },
      },
    ],
    [
      {
        key: 'getDerivedStateFromProps',
        value: function (t, n) {
          var o = t.lineWidth,
            u = t.activeLineWidth,
            l = t.disabledLineWidth,
            c = o ** u;
          return c !== n.maxLineWidth
            ? {
                maxLineWidth: c,
              }
            : null;
        },
      },
    ]
  );
  return j;
})(React.PureComponent);

exports.default = j;
j.defaultProps = {
  lineType: 'solid',
  disabledLineType: 'dotted',
  disabled: false,
  restricted: false,
};
