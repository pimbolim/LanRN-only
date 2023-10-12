var module47 = require('./47'),
  ReactNative = require('react-native');

function n(t, o) {
  var l = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    if (o)
      n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      });
    l.push.apply(l, n);
  }

  return l;
}

function b(t) {
  for (var l = 1; l < arguments.length; l++) {
    var b = null != arguments[l] ? arguments[l] : {};
    if (l % 2)
      n(Object(b), true).forEach(function (l) {
        module47.default(t, l, b[l]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(b));
    else
      n(Object(b)).forEach(function (o) {
        Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(b, o));
      });
  }

  return t;
}

exports.borderRadius = 4;
var c = {
    position: 'absolute',
    overflow: 'hidden',
  },
  u = ReactNative.StyleSheet.create({
    borderLeft: b(
      b({}, ReactNative.StyleSheet.absoluteFillObject),
      {},
      {
        borderRadius: 4,
        right: -4,
        bottom: -4,
      }
    ),
    borderRight: b(
      b({}, ReactNative.StyleSheet.absoluteFillObject),
      {},
      {
        borderRadius: 4,
        left: -4,
        bottom: -4,
      }
    ),
    borderBottom: b(
      b({}, ReactNative.StyleSheet.absoluteFillObject),
      {},
      {
        borderRadius: 4,
        top: -4,
        bottom: ReactNative.StyleSheet.hairlineWidth,
      }
    ),
    borderTop: b(
      b({}, ReactNative.StyleSheet.absoluteFillObject),
      {},
      {
        borderRadius: 4,
        left: -4,
        right: -4,
        bottom: -4,
      }
    ),
    leftContainer: b(
      b({}, c),
      {},
      {
        top: 0,
        left: 0,
        width: 4,
        height: 4,
      }
    ),
    rightContainer: b(
      b({}, c),
      {},
      {
        top: 0,
        right: 0,
        height: 4,
      }
    ),
    bottomContainer: b(
      b({}, c),
      {},
      {
        top: 4 - ('android' === ReactNative.Platform.OS ? 0.25 : 0),
        left: 0,
        right: 0,
        bottom: 0,
      }
    ),
    topContainer: b(
      b({}, c),
      {},
      {
        top: 0,
        height: 4,
      }
    ),
    topLineContainer: b(
      b({}, ReactNative.StyleSheet.absoluteFillObject),
      {},
      {
        overflow: 'hidden',
      }
    ),
  });
exports.default = u;
