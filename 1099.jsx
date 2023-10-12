var module47 = require('./47'),
  module11 = require('./11'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  ReactNative = require('react-native'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = P(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var p = l ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (p && (p.get || p.set)) Object.defineProperty(u, c, p);
        else u[c] = t[c];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  module1100 = require('./1100'),
  v = ['style'];

function P(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (P = function (t) {
    return t ? o : n;
  })(t);
}

function h(t, n) {
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

function j(t) {
  for (var o = 1; o < arguments.length; o++) {
    var u = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      h(Object(u), true).forEach(function (o) {
        module47.default(t, o, u[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      h(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

function B() {
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

var R = (function (t) {
  module35.default(h, t);

  var module47 = h,
    ReactNative = B(),
    P = function () {
      var t,
        o = module34.default(module47);

      if (ReactNative) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, u);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function h() {
    module24.default(this, h);
    return P.apply(this, arguments);
  }

  module25.default(h, [
    {
      key: 'getExtraButtonProps',
      value: function () {
        var t = {},
          n = this.props.background;

        if (n) {
          if ('RippleAndroid' === n.type) {
            t.borderless = n.borderless;
            t.rippleColor = n.color;
          } else if ('ThemeAttrAndroid' === n.type) t.borderless = 'selectableItemBackgroundBorderless' === n.attribute;

          t.rippleRadius = n.rippleRadius;
        }

        t.foreground = this.props.useForeground;
        return t;
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          n = t.style,
          l = undefined === n ? {} : n,
          c = module53.default(t, v);
        return <module1100.default />;
      },
    },
  ]);
  return h;
})(React.Component);

exports.default = R;
R.defaultProps = j(
  j({}, module1100.default.defaultProps),
  {},
  {
    useForeground: true,
    extraButtonProps: {
      rippleColor: null,
    },
  }
);

R.SelectableBackground = function (t) {
  return {
    type: 'ThemeAttrAndroid',
    attribute: 'selectableItemBackground',
    rippleRadius: t,
  };
};

R.SelectableBackgroundBorderless = function (t) {
  return {
    type: 'ThemeAttrAndroid',
    attribute: 'selectableItemBackgroundBorderless',
    rippleRadius: t,
  };
};

R.Ripple = function (t, n, o) {
  return {
    type: 'RippleAndroid',
    color: t,
    borderless: n,
    rippleRadius: o,
  };
};

R.canUseNativeForeground = function () {
  return ReactNative.Platform.Version >= 23;
};
