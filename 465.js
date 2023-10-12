var n = {
  OrientationType: true,
};

var module466 = require('./466'),
  module467 = require('./467');

Object.keys(module467).forEach(function (t) {
  if ('default' !== t && '__esModule' !== t)
    Object.prototype.hasOwnProperty.call(n, t) ||
      (t in exports && exports[t] === module467[t]) ||
      Object.defineProperty(exports, t, {
        enumerable: true,
        get: function () {
          return module467[t];
        },
      });
});

var module471 = require('./471');

Object.keys(module471).forEach(function (t) {
  if ('default' !== t && '__esModule' !== t)
    Object.prototype.hasOwnProperty.call(n, t) ||
      (t in exports && exports[t] === module471[t]) ||
      Object.defineProperty(exports, t, {
        enumerable: true,
        get: function () {
          return module471[t];
        },
      });
});
exports.OrientationType = {
  PORTRAIT: 'PORTRAIT',
  'PORTRAIT-UPSIDEDOWN': 'PORTRAIT-UPSIDEDOWN',
  'LANDSCAPE-LEFT': 'LANDSCAPE-LEFT',
  'LANDSCAPE-RIGHT': 'LANDSCAPE-RIGHT',
  'FACE-UP': 'FACE-UP',
  'FACE-DOWN': 'FACE-DOWN',
  UNKNOWN: 'UNKNOWN',
};
var c = module466.default;
exports.default = c;
