exports.default = function (n, t, l) {
  for (
    var p = t.onPress,
      u = t.disabled,
      R = t.onPressIn,
      c = t.onPressOut,
      b = t.onLongPress,
      h = t.delayPressIn,
      P = t.delayPressOut,
      v = t.delayLongPress,
      H = t.pointerEvents,
      S = false,
      f = 0;
    f < s;
    f++
  ) {
    var y = o[f],
      O = t[y];

    if (O) {
      S = true;
      n[y] = O;
    }
  }

  if (H) n.pointerEvents = H;

  if (null != u || p || R || c || b || h || P || v) {
    S = true;
    n.onResponderMove = l.touchableHandleResponderMove;
    n.onResponderGrant = l.touchableHandleResponderGrant;
    n.onResponderRelease = l.touchableHandleResponderRelease;
    n.onResponderTerminate = l.touchableHandleResponderTerminate;
    n.onStartShouldSetResponder = l.touchableHandleStartShouldSetResponder;
    n.onResponderTerminationRequest = l.touchableHandleResponderTerminationRequest;
  }

  if (S) n.responsible = true;
};

var ReactNative = require('react-native'),
  o = Object.keys(ReactNative.PanResponder.create({}).panHandlers),
  s = o.length;
