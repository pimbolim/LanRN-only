var module47 = require('./47');

function o(t, o) {
  var n = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    if (o)
      c = c.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      });
    n.push.apply(n, c);
  }

  return n;
}

function n(n) {
  for (var c = 1; c < arguments.length; c++) {
    var l = null != arguments[c] ? arguments[c] : {};
    if (c % 2)
      o(Object(l), true).forEach(function (o) {
        module47(n, o, l[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(n, Object.getOwnPropertyDescriptors(l));
    else
      o(Object(l)).forEach(function (t) {
        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(l, t));
      });
  }

  return n;
}

require('./80');

var module59 = require('./59'),
  module62 = require('./62'),
  module81 = require('./81'),
  u = module59.roundToNearestPixel(0.4);

if (0 === u) u = 1 / module59.get();
var b = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};
module.exports = {
  hairlineWidth: u,
  absoluteFill: b,
  absoluteFillObject: b,
  compose: function (t, o) {
    return null != t && null != o ? [t, o] : null != t ? t : o;
  },
  flatten: module81,
  setStyleAttributePreprocessor: function (t, o) {
    var c;
    if (true === module62[t]) c = {};
    else {
      if ('object' != typeof module62[t]) return void console.error(t + ' is not a valid style attribute');
      c = module62[t];
    }
    module62[t] = n(
      n({}, c),
      {},
      {
        process: o,
      }
    );
  },
  create: function (t) {
    return t;
  },
};
