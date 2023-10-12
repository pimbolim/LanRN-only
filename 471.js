exports.OrientationLocker = function (t) {
  var c = t.orientation,
    u = t.onChange,
    f = t.onDeviceChange,
    T = React.useRef({});
  React.useEffect(function () {
    var t = T.current;
    s.push(t);
    return function () {
      var n = s.indexOf(t);
      if (-1 !== n) s.splice(n, 1);

      _();
    };
  }, []);
  React.useEffect(
    function () {
      T.current.orientation = c;

      _();
    },
    [c]
  );
  React.useEffect(
    function () {
      if (u) {
        module466.default.addOrientationListener(u);
        return function () {
          return module466.default.removeOrientationListener(u);
        };
      }
    },
    [u]
  );
  React.useEffect(
    function () {
      if (f) {
        module466.default.addDeviceOrientationListener(f);
        return function () {
          return module466.default.removeDeviceOrientationListener(f);
        };
      }
    },
    [f]
  );
  return null;
};

var React = require('react'),
  module466 = require('./466'),
  c = 'UNLOCK';

exports.UNLOCK = c;
var u = 'PORTRAIT';
exports.PORTRAIT = u;
var f = 'LANDSCAPE';
exports.LANDSCAPE = f;
var T = 'LANDSCAPE_LEFT';
exports.LANDSCAPE_LEFT = T;
var A = 'LANDSCAPE_RIGHT';
exports.LANDSCAPE_RIGHT = A;
var L = 'PORTRAIT_UPSIDE_DOWN';
exports.PORTRAIT_UPSIDE_DOWN = L;
var O = 'ALL_ORIENTATIONS_BUT_UPSIDE_DOWN';
exports.ALL_ORIENTATIONS_BUT_UPSIDE_DOWN = O;
var l,
  s = [];

function _() {
  clearImmediate(l);
  l = setImmediate(function () {
    for (var t, n = s.length; !t && n--; ) t = s[n].orientation;

    switch (t) {
      case c:
        module466.default.unlockAllOrientations();
        break;

      case u:
        module466.default.lockToPortrait();
        break;

      case f:
        module466.default.lockToLandscape();
        break;

      case T:
        module466.default.lockToLandscapeLeft();
        break;

      case A:
        module466.default.lockToLandscapeRight();
        break;

      case L:
        module466.default.lockToPortraitUpsideDown();
        break;

      case O:
        module466.default.lockToAllOrientationsButUpsideDown();
    }
  });
}
