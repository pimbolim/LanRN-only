var module47 = require('./47'),
  module11 = require('./11'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  ReactNative = require('react-native'),
  module1100 = j(require('./1100')),
  React = j(require('react')),
  v = ['style'];

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (b = function (t) {
    return t ? o : n;
  })(t);
}

function j(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = b(n);
  if (o && o.has(t)) return o.get(t);
  var c = {},
    u = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var l in t)
    if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
      var f = u ? Object.getOwnPropertyDescriptor(t, l) : null;
      if (f && (f.get || f.set)) Object.defineProperty(c, l, f);
      else c[l] = t[l];
    }

  c.default = t;
  if (o) o.set(t, c);
  return c;
}

function E(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    if (n)
      c = c.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, c);
  }

  return o;
}

function P(t) {
  for (var o = 1; o < arguments.length; o++) {
    var c = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      E(Object(c), true).forEach(function (o) {
        module47.default(t, o, c[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(c));
    else
      E(Object(c)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(c, n));
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

var D = (function (t, ...args) {
  module35.default(E, t);

  var module47 = E,
    b = w(),
    j = function () {
      var t,
        o = module34.default(module47);

      if (b) {
        var c = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, c);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function E() {
    var t;
    module24.default(this, E);

    (t = j.call(this, ...args)).getChildStyleOpacityWithDefault = function () {
      var n = ReactNative.StyleSheet.flatten(t.props.style) || {};
      return null == n.opacity ? 1 : n.opacity;
    };

    t.opacity = new ReactNative.Animated.Value(t.getChildStyleOpacityWithDefault());

    t.setOpacityTo = function (n, o) {
      var c;
      ReactNative.Animated.timing(t.opacity, {
        toValue: n,
        duration: o,
        easing: ReactNative.Easing.inOut(ReactNative.Easing.quad),
        useNativeDriver: null == (c = t.props.useNativeAnimations) || c,
      }).start();
    };

    t.onStateChange = function (n, o) {
      if (o === module1100.TOUCHABLE_STATE.BEGAN) t.setOpacityTo(t.props.activeOpacity, 0);
      else if (!(o !== module1100.TOUCHABLE_STATE.UNDETERMINED && o !== module1100.TOUCHABLE_STATE.MOVED_OUTSIDE)) t.setOpacityTo(t.getChildStyleOpacityWithDefault(), 150);
    };

    return t;
  }

  module25.default(E, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          n = t.style,
          u = undefined === n ? {} : n,
          l = module53.default(t, v);
        return <module1100.default>{this.props.children ? this.props.children : <ReactNative.View />}</module1100.default>;
      },
    },
  ]);
  return E;
})(React.Component);

exports.default = D;
D.defaultProps = P(
  P({}, module1100.default.defaultProps),
  {},
  {
    activeOpacity: 0.2,
  }
);
