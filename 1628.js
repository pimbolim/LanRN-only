exports.default = function (t, f, h) {
  var c = f.stroke,
    p = f.strokeOpacity,
    v = f.strokeLinecap,
    y = f.strokeLinejoin,
    D = f.strokeDasharray,
    L = f.strokeWidth,
    b = f.strokeDashoffset,
    j = f.strokeMiterlimit,
    M = f.vectorEffect;

  if (null != c) {
    h.push('stroke');
    t.stroke = module1625.default(c);
  }

  if (null != L) {
    h.push('strokeWidth');
    t.strokeWidth = L;
  }

  if (null != p) {
    h.push('strokeOpacity');
    t.strokeOpacity = module1627.default(p);
  }

  if (null != D) {
    h.push('strokeDasharray');
    var O = D && 'none' !== D ? module1629.default(D) : null;
    t.strokeDasharray = O && O.length % 2 == 1 ? O.concat(O) : O;
  }

  if (null != b) {
    h.push('strokeDashoffset');
    t.strokeDashoffset = D && b ? +b || 0 : null;
  }

  if (null != v) {
    h.push('strokeLinecap');
    t.strokeLinecap = (v && l[v]) || 0;
  }

  if (null != y) {
    h.push('strokeLinejoin');
    t.strokeLinejoin = (y && u[y]) || 0;
  }

  if (null != j) {
    h.push('strokeMiterlimit');
    t.strokeMiterlimit = (j && 'number' != typeof j ? parseFloat(j) : j) || 4;
  }

  if (null != M) t.vectorEffect = (M && k[M]) || 0;
};

var module1625 = require('./1625'),
  module1627 = require('./1627'),
  module1629 = require('./1629'),
  l = {
    butt: 0,
    square: 2,
    round: 1,
  },
  u = {
    miter: 0,
    bevel: 2,
    round: 1,
  },
  k = {
    none: 0,
    default: 0,
    nonScalingStroke: 1,
    'non-scaling-stroke': 1,
    inherit: 2,
    uri: 3,
  };
