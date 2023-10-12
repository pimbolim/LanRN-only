var module47 = require('./47'),
  module11 = require('./11'),
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
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var l = f ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (l && (l.get || l.set)) Object.defineProperty(u, c, l);
        else u[c] = t[c];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  b = ['style'];

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (h = function (t) {
    return t ? o : n;
  })(t);
}

function P(t, n) {
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
      P(Object(u), true).forEach(function (o) {
        module47.default(t, o, u[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      P(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

function w() {
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

var _ = (function (t, ...args) {
  module35.default(h, t);

  var module47 = h,
    PropTypes = w(),
    v = function () {
      var t,
        o = module34.default(module47);

      if (PropTypes) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, u);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function h() {
    var t;
    module24.default(this, h);

    (t = v.call(this, ...args))._getStylePropsProps = function () {
      var n = t.props,
        o = n.width,
        u = n.height;
      return o || u
        ? {
            width: o,
            height: u,
          }
        : {};
    };

    return t;
  }

  module25.default(h, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          n = t.style,
          f = module53.default(t, b);
        return React.default.createElement(
          D,
          module11.default({}, f, {
            style: [n, this._getStylePropsProps()],
          })
        );
      },
    },
  ]);
  return h;
})(React.PureComponent);

exports.default = _;
_.propTypes = j(
  j({}, ReactNative.ViewPropTypes),
  {},
  {
    fileNo: PropTypes.default.number,
    page: PropTypes.default.number,
    width: PropTypes.default.number,
    height: PropTypes.default.number,
  }
);
_.defaultProps = {
  style: {},
};
var D = ReactNative.requireNativeComponent('RCTPdfPageView', _, {
  nativeOnly: {},
});
