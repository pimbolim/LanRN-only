var module47 = require('./47'),
  module11 = require('./11'),
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
    var o = P(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var l = c ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (l && (l.get || l.set)) Object.defineProperty(u, s, l);
        else u[s] = t[s];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native');

function P(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (P = function (t) {
    return t ? o : n;
  })(t);
}

function y(t, n) {
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

function b(t) {
  for (var o = 1; o < arguments.length; o++) {
    var u = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      y(Object(u), true).forEach(function (o) {
        module47.default(t, o, u[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      y(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

function R() {
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
  module35.default(y, t);

  var module47 = y,
    PropTypes = R(),
    P = function () {
      var t,
        o = module34.default(module47);

      if (PropTypes) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, u);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function y(t) {
    var n;
    module24.default(this, y);

    (n = P.call(this, t))._handleStartShouldSetPanResponder = function (t, n) {
      return false;
    };

    n._handleMoveShouldSetPanResponder = function (t, o) {
      return n.props.scalable && (t.nativeEvent.changedTouches.length >= 2 || o.numberActiveTouches >= 2);
    };

    n._handlePanResponderGrant = function (t, o) {
      if (t.nativeEvent.changedTouches.length >= 2 || o.numberActiveTouches >= 2) {
        var u = Math.abs(t.nativeEvent.touches[0].pageX - t.nativeEvent.touches[1].pageX),
          c = Math.abs(t.nativeEvent.touches[0].pageY - t.nativeEvent.touches[1].pageY);
        n.distant = Math.sqrt(u * u + c * c);
      }
    };

    n._handlePanResponderEnd = function (t, o) {
      n.distant = 0;
    };

    n._handlePanResponderTerminate = function (t, o) {
      n.distant = 0;
    };

    n._handlePanResponderMove = function (t, o) {
      if ((t.nativeEvent.changedTouches.length >= 2 || o.numberActiveTouches >= 2) && n.distant > 100) {
        var u = Math.abs(t.nativeEvent.touches[0].pageX - t.nativeEvent.touches[1].pageX),
          c = Math.abs(t.nativeEvent.touches[0].pageY - t.nativeEvent.touches[1].pageY),
          s = Math.sqrt(u * u + c * c),
          l = {
            scale: s / n.distant,
            pageX: (t.nativeEvent.touches[0].pageX + t.nativeEvent.touches[1].pageX) / 2,
            pageY: (t.nativeEvent.touches[0].pageY + t.nativeEvent.touches[1].pageY) / 2,
          };
        n.props.onScaleChanged(l);
        n.distant = s;
      }
    };

    n.state = {};
    n.distant = 0;
    n.gestureHandlers = ReactNative.PanResponder.create({
      onStartShouldSetPanResponder: n._handleStartShouldSetPanResponder,
      onMoveShouldSetResponderCapture: function (t, n) {
        return true;
      },
      onMoveShouldSetPanResponder: n._handleMoveShouldSetPanResponder,
      onPanResponderGrant: n._handlePanResponderGrant,
      onPanResponderMove: n._handlePanResponderMove,
      onPanResponderRelease: n._handlePanResponderEnd,
      onPanResponderTerminationRequest: function (t) {
        return false;
      },
      onPanResponderTerminate: n._handlePanResponderTerminate,
      onShouldBlockNativeResponder: function (t) {
        return true;
      },
    });
    return n;
  }

  module25.default(y, [
    {
      key: 'render',
      value: function () {
        var t;
        return React.default.createElement(
          ReactNative.View,
          module11.default({}, this.props, null == (t = this.gestureHandlers) ? undefined : t.panHandlers, {
            style: [S.container, this.props.style],
          }),
          this.props.children
        );
      },
    },
  ]);
  return y;
})(React.Component);

exports.default = O;
O.propTypes = b(
  b({}, ReactNative.ViewPropTypes),
  {},
  {
    scalable: PropTypes.default.bool,
    onScaleChanged: PropTypes.default.func,
  }
);
O.defaultProps = {
  scalable: true,
  onScaleChanged: function (t) {},
};
var S = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
