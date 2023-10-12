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
    var o = y(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var p in t)
      if ('default' !== p && Object.prototype.hasOwnProperty.call(t, p)) {
        var l = c ? Object.getOwnPropertyDescriptor(t, p) : null;
        if (l && (l.get || l.set)) Object.defineProperty(u, p, l);
        else u[p] = t[p];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  PropTypes = require('prop-types');

function y(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (y = function (t) {
    return t ? o : n;
  })(t);
}

function T(t, n) {
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
      T(Object(u), true).forEach(function (o) {
        module47.default(t, o, u[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      T(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

function O() {
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

var P = (function (t) {
  module35.default(T, t);

  var module47 = T,
    PropTypes = O(),
    y = function () {
      var t,
        o = module34.default(module47);

      if (PropTypes) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, u);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function T() {
    var t;
    module24.default(this, T);

    (t = y.call(this)).distance = function (t, n, o, u) {
      return Math.sqrt((o - t) ** 2 + (u - n) ** 2).toFixed(1);
    };

    t.isDoubleTap = function (n, o) {
      var u = o.x0,
        c = o.y0,
        p = t.prevTouchInfo,
        l = p.prevTouchX,
        f = p.prevTouchY,
        s = p.prevTouchTimeStamp,
        v = n - s,
        h = t.props,
        y = h.delay,
        T = h.radius;
      return s > 0 && v < y && t.distance(l, f, u, c) < T;
    };

    t.handlePanResponderRelease = function (n, o) {
      var u = Date.now(),
        c = n.nativeEvent.locationX,
        p = n.nativeEvent.locationY;
      if (t.timer) {
        if (t.isDoubleTap(u, o)) {
          clearTimeout(t.timer);
          t.timer = null;
          t.props.onDoubleTap();
        } else {
          var l = t.prevTouchInfo,
            f = l.prevTouchX,
            s = l.prevTouchY,
            v = t.props.radius;

          if (t.distance(f, s, o.x0, o.y0) < v) {
            t.timer = null;
            t.props.onSingleTap(c, p);
          }
        }
      } else
        t.distance(0, o.dx, 0, o.dy) < 10 &&
          (t.timer = setTimeout(function () {
            t.props.onSingleTap(c, p);
            t.timer = null;
          }, t.props.delay));
      t.prevTouchInfo = {
        prevTouchX: o.x0,
        prevTouchY: o.y0,
        prevTouchTimeStamp: u,
      };
    };

    t.gestureHandlers = ReactNative.PanResponder.create({
      onStartShouldSetPanResponder: function (t, n) {
        return 1 === n.numberActiveTouches;
      },
      onStartShouldSetResponderCapture: function (t, n) {
        return 1 === n.numberActiveTouches;
      },
      onMoveShouldSetPanResponder: function (t, n) {
        return false;
      },
      onMoveShouldSetResponderCapture: function (t, n) {
        return false;
      },
      onPanResponderTerminationRequest: function (t, n) {
        return false;
      },
      onPanResponderRelease: t.handlePanResponderRelease,
    });
    t.prevTouchInfo = {
      prevTouchX: 0,
      prevTouchY: 0,
      prevTouchTimeStamp: 0,
    };
    t.timer = null;
    return t;
  }

  module25.default(T, [
    {
      key: 'render',
      value: function () {
        return React.default.createElement(ReactNative.View, module11.default({}, this.props, this.gestureHandlers.panHandlers), this.props.children);
      },
    },
  ]);
  return T;
})(React.Component);

exports.default = P;
P.propTypes = b(
  b({}, ReactNative.ViewPropTypes),
  {},
  {
    delay: PropTypes.default.number,
    radius: PropTypes.default.number,
    onSingleTap: PropTypes.default.func,
    onDoubleTap: PropTypes.default.func,
  }
);
P.defaultProps = {
  delay: 300,
  radius: 50,
  onSingleTap: function () {},
  onDoubleTap: function () {},
};
