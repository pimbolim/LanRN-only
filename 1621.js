var module47 = require('./47');

function o(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    if (n)
      s = s.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, s);
  }

  return o;
}

function s(t) {
  for (var s = 1; s < arguments.length; s++) {
    var l = null != arguments[s] ? arguments[s] : {};
    if (s % 2)
      o(Object(l), true).forEach(function (o) {
        module47.default(t, o, l[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      o(Object(l)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
      });
  }

  return t;
}

var l = {
    top: 20,
    left: 20,
    right: 20,
    bottom: 30,
  },
  ReactNative = require('react-native').Touchable.Mixin,
  c = ReactNative.touchableHandleStartShouldSetResponder,
  p = ReactNative.touchableHandleResponderTerminationRequest,
  h = ReactNative.touchableHandleResponderGrant,
  f = ReactNative.touchableHandleResponderMove,
  b = ReactNative.touchableHandleResponderRelease,
  v = ReactNative.touchableHandleResponderTerminate,
  R = ReactNative.touchableGetInitialState,
  O = s(
    s({}, ReactNative),
    {},
    {
      touchableHandleStartShouldSetResponder: function (t) {
        var n = this.props.onStartShouldSetResponder;
        return n ? n(t) : c.call(this, t);
      },
      touchableHandleResponderTerminationRequest: function (t) {
        var n = this.props.onResponderTerminationRequest;
        return n ? n(t) : p.call(this, t);
      },
      touchableHandleResponderGrant: function (t) {
        var n = this.props.onResponderGrant;
        return n ? n(t) : h.call(this, t);
      },
      touchableHandleResponderMove: function (t) {
        var n = this.props.onResponderMove;
        return n ? n(t) : f.call(this, t);
      },
      touchableHandleResponderRelease: function (t) {
        var n = this.props.onResponderRelease;
        return n ? n(t) : b.call(this, t);
      },
      touchableHandleResponderTerminate: function (t) {
        var n = this.props.onResponderTerminate;
        return n ? n(t) : v.call(this, t);
      },
      touchableHandlePress: function (t) {
        var n = this.props.onPress;
        if (n) n(t);
      },
      touchableHandleActivePressIn: function (t) {
        var n = this.props.onPressIn;
        if (n) n(t);
      },
      touchableHandleActivePressOut: function (t) {
        var n = this.props.onPressOut;
        if (n) n(t);
      },
      touchableHandleLongPress: function (t) {
        var n = this.props.onLongPress;
        if (n) n(t);
      },
      touchableGetPressRectOffset: function () {
        return this.props.pressRetentionOffset || l;
      },
      touchableGetHitSlop: function () {
        return this.props.hitSlop;
      },
      touchableGetHighlightDelayMS: function () {
        return this.props.delayPressIn || 0;
      },
      touchableGetLongPressDelayMS: function () {
        var t = this.props.delayLongPress;
        return 0 === t ? 0 : t || 500;
      },
      touchableGetPressOutDelayMS: function () {
        return this.props.delayPressOut || 0;
      },
    }
  ),
  P = Object.keys(O),
  y = P.map(function (t) {
    return O[t];
  }),
  H = P.length;

exports.default = function (t) {
  for (var n = 0; n < H; n++) {
    var o = P[n],
      s = y[n];
    t[o] = 'function' == typeof s ? s.bind(t) : s;
  }

  t.state = R();
};
