var t,
  module25 = require('./25'),
  module24 = require('./24'),
  ReactNative = require('react-native').NativeModules.Orientation,
  ReactNative = require('react-native').NativeEventEmitter,
  f = {},
  s = 0,
  v = '__listener_id',
  L = false;

function O(n) {
  if (!n.hasOwnProperty(v)) {
    if (!Object.isExtensible(n)) return 'F';
    Object.defineProperty(n, v, {
      value: 'L' + ++s,
    });
  }

  return n[v];
}

var k = module25.default(function n() {
  module24.default(this, n);
});
exports.default = k;

k.getOrientation = function (n) {
  ReactNative.getOrientation(function (t) {
    n(t);
  });
};

k.getDeviceOrientation = function (n) {
  ReactNative.getDeviceOrientation(function (t) {
    n(t);
  });
};

k.isLocked = function () {
  return L;
};

k.lockToPortrait = function () {
  L = true;
  ReactNative.lockToPortrait();
};

k.lockToPortraitUpsideDown = function () {
  L = true;
  ReactNative.lockToPortraitUpsideDown();
};

k.lockToLandscape = function () {
  L = true;
  ReactNative.lockToLandscape();
};

k.lockToLandscapeRight = function () {
  L = true;
  ReactNative.lockToLandscapeRight();
};

k.lockToLandscapeLeft = function () {
  L = true;
  ReactNative.lockToLandscapeLeft();
};

k.lockToAllOrientationsButUpsideDown = function () {
  L = true;
};

k.unlockAllOrientations = function () {
  L = false;
  ReactNative.unlockAllOrientations();
};

k.addOrientationListener = function (n) {
  var o,
    c = O(n);
  t = null != (o = t) ? o : new ReactNative(ReactNative);
  f[c] = t.addListener('orientationDidChange', function (t) {
    n(t.orientation);
  });
};

k.removeOrientationListener = function (n) {
  var t = O(n);

  if (f[t]) {
    f[t].remove();
    f[t] = null;
  }
};

k.addDeviceOrientationListener = function (n) {
  var o,
    c = O(n);
  t = null != (o = t) ? o : new ReactNative(ReactNative);
  f[c] = t.addListener('deviceOrientationDidChange', function (t) {
    n(t.deviceOrientation);
  });
};

k.removeDeviceOrientationListener = function (n) {
  var t = O(n);

  if (f[t]) {
    f[t].remove();
    f[t] = null;
  }
};

k.addLockListener = function (n) {
  var o,
    c = O(n);
  t = null != (o = t) ? o : new ReactNative(ReactNative);
  f[c] = t.addListener('lockDidChange', function (t) {
    n(t.orientation);
  });
};

k.removeLockListener = function (n) {
  var t = O(n);

  if (f[t]) {
    f[t].remove();
    f[t] = null;
  }
};

k.removeAllListeners = function () {
  for (var n in f) f[n] && (f[n].remove(), (f[n] = null));
};

k.getInitialOrientation = function () {
  return ReactNative.initialOrientation;
};

k.getAutoRotateState = function (n) {
  ReactNative.getAutoRotateState(function (t) {
    n(t);
  });
};
