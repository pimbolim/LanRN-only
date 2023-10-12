exports.Cursor = function (u) {
  var E = u.cursorSymbol,
    L = undefined === E ? v : E,
    S = u.delay,
    c = undefined === S ? _ : S,
    f = React.useState(true),
    l = module12.default(f, 2),
    D = l[0],
    U = l[1];
  module864.useInterval(function () {
    return U(function (u) {
      return !u;
    });
  }, c);
  return D ? L : '';
};

var module12 = require('./12'),
  React = require('react'),
  module864 = require('./864'),
  _ = 500;

exports.DEFAULT_BLINKING_SPEED = _;
var v = '|';
exports.DEFAULT_CURSOR_SYMBOL = v;
