exports.managePanProps = X;

var module47 = require('./47'),
  module20 = require('./20'),
  module977 = require('./977'),
  module1067 = require('./1067');

function c(t, f) {
  var s = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    if (f)
      n = n.filter(function (f) {
        return Object.getOwnPropertyDescriptor(t, f).enumerable;
      });
    s.push.apply(s, n);
  }

  return s;
}

function l(t) {
  for (var s = 1; s < arguments.length; s++) {
    var n = null != arguments[s] ? arguments[s] : {};
    if (s % 2)
      c(Object(n), true).forEach(function (s) {
        module47.default(t, s, n[s]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(n));
    else
      c(Object(n)).forEach(function (f) {
        Object.defineProperty(t, f, Object.getOwnPropertyDescriptor(n, f));
      });
  }

  return t;
}

var o = [
  'activeOffsetY',
  'activeOffsetX',
  'failOffsetY',
  'failOffsetX',
  'minDist',
  'minVelocity',
  'minVelocityX',
  'minVelocityY',
  'minPointers',
  'maxPointers',
  'avgTouches',
  'enableTrackpadTwoFingerGesture',
  'activateAfterLongPress',
];
exports.panGestureHandlerProps = o;
var v = ['activeOffsetYStart', 'activeOffsetYEnd', 'activeOffsetXStart', 'activeOffsetXEnd', 'failOffsetYStart', 'failOffsetYEnd', 'failOffsetXStart', 'failOffsetXEnd'];
exports.panGestureHandlerCustomNativeProps = v;
exports.panHandlerName = 'PanGestureHandler';
var u = module977.default({
  name: 'PanGestureHandler',
  allowedProps: [].concat(module20.default(module1067.baseGestureHandlerProps), o),
  config: {},
  transformProps: X,
  customNativeProps: v,
});

function p(t) {
  var f = l({}, t);

  if (undefined !== t.activeOffsetX) {
    delete f.activeOffsetX;

    if (Array.isArray(t.activeOffsetX)) {
      f.activeOffsetXStart = t.activeOffsetX[0];
      f.activeOffsetXEnd = t.activeOffsetX[1];
    } else if (t.activeOffsetX < 0) f.activeOffsetXStart = t.activeOffsetX;
    else f.activeOffsetXEnd = t.activeOffsetX;
  }

  if (undefined !== t.activeOffsetY) {
    delete f.activeOffsetY;

    if (Array.isArray(t.activeOffsetY)) {
      f.activeOffsetYStart = t.activeOffsetY[0];
      f.activeOffsetYEnd = t.activeOffsetY[1];
    } else if (t.activeOffsetY < 0) f.activeOffsetYStart = t.activeOffsetY;
    else f.activeOffsetYEnd = t.activeOffsetY;
  }

  if (undefined !== t.failOffsetX) {
    delete f.failOffsetX;

    if (Array.isArray(t.failOffsetX)) {
      f.failOffsetXStart = t.failOffsetX[0];
      f.failOffsetXEnd = t.failOffsetX[1];
    } else if (t.failOffsetX < 0) f.failOffsetXStart = t.failOffsetX;
    else f.failOffsetXEnd = t.failOffsetX;
  }

  if (undefined !== t.failOffsetY) {
    delete f.failOffsetY;

    if (Array.isArray(t.failOffsetY)) {
      f.failOffsetYStart = t.failOffsetY[0];
      f.failOffsetYEnd = t.failOffsetY[1];
    } else if (t.failOffsetY < 0) f.failOffsetYStart = t.failOffsetY;
    else f.failOffsetYEnd = t.failOffsetY;
  }

  return f;
}

function X(t) {
  return p(t);
}

exports.PanGestureHandler = u;
