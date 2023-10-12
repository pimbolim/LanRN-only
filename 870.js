exports.MaskSymbol = function (t) {
  var f = t.isLastFilledCell,
    s = t.children,
    _ = t.maskSymbol,
    c = t.delay,
    E = undefined === c ? o : c,
    v = React.useState(true),
    L = module12.default(v, 2),
    S = L[0],
    y = L[1];
  module864.useTimeout(function () {
    return y(false);
  }, E);
  React.useEffect(
    function () {
      if (f) y(false);
    },
    [f]
  );
  return S ? s : _;
};

var module12 = require('./12'),
  React = require('react'),
  module864 = require('./864'),
  o = 500;

exports.DEFAULT_BLINKING_SPEED = o;
