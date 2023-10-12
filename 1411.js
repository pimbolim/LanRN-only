var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module47 = require('./47'),
  React = require('react'),
  ReactNative = require('react-native'),
  PropTypes = require('prop-types'),
  module1412 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = P(n);
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
  })(require('./1412')),
  module1401 = require('./1401'),
  module1407 = require('./1407'),
  module1409 = require('./1409');

function P(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (P = function (t) {
    return t ? o : n;
  })(t);
}

function E() {
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

function S(t, n) {
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

function k(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      S(Object(o), true).forEach(function (n) {
        module47.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      S(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

var D = k(
  k({}, ReactNative.ViewPropTypes),
  {},
  {
    size: PropTypes.default.string.isRequired,
    unitId: PropTypes.default.string.isRequired,
    request: PropTypes.default.object,
    video: PropTypes.default.object,
  }
);
Object.keys(module1412.default).forEach(function (t) {
  D[t] = PropTypes.default.func;
});
Object.keys(module1412.NativeExpressEventTypes).forEach(function (t) {
  D[t] = PropTypes.default.func;
});
var R = {};

function B(t) {
  if (R[t]) return R[t];
  var n = ReactNative.requireNativeComponent(t, T, {
    nativeOnly: {
      onBannerEvent: true,
    },
  });
  R[t] = n;
  return n;
}

var T = (function (t) {
  module35.default(j, t);

  var module47 = j,
    PropTypes = E(),
    h = function () {
      var t,
        n = module34.default(module47);

      if (PropTypes) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function j(t) {
    var n;
    module24.default(this, j);

    (n = h.call(this, t)).onBannerEvent = function (t) {
      var o = t.nativeEvent,
        u = module39.default(n).props;
      if (u[o.type])
        if ('onAdFailedToLoad' === o.type) {
          var c = o.payload,
            l = c.code,
            p = c.message;
          u[o.type](module1401.nativeToJSError(l, p));
        } else u[o.type](o.payload || {});
      if ('onSizeChange' === o.type) n.updateSize(o.payload);
      if ('onAdLoaded' === o.type && 'ios' === ReactNative.Platform.OS) n.updateSize(o.payload);
    };

    n.updateSize = function (t) {
      var o = t.width,
        u = t.height;
      if (undefined !== o && undefined !== u)
        n.setState({
          width: o,
          height: u,
        });
    };

    n.state = {
      width: 0,
      height: 0,
    };
    n.nativeView = B(t.class);
    return n;
  }

  module25.default(j, [
    {
      key: 'render',
      value: function () {
        var t = this.props.style;
        return React.default.createElement(
          this.nativeView,
          module11.default({}, this.props, {
            style: [t, k({}, this.state)],
            onBannerEvent: this.onBannerEvent,
          })
        );
      },
    },
  ]);
  return j;
})(React.default.Component);

T.propTypes = D;
T.defaultProps = {
  request: new module1407.default().addTestDevice().build(),
  video: new module1409.default().build(),
};
var _ = T;
exports.default = _;
