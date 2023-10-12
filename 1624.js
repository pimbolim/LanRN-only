exports.default = function (l, o, c) {
  var p = o.fill,
    s = o.fillRule,
    v = o.fillOpacity;

  if (null != p) {
    c.push('fill');
    l.fill = p || 'number' == typeof p ? module1625.default(p) : module1626;
  }

  if (null != v) {
    c.push('fillOpacity');
    l.fillOpacity = module1627.default(v);
  }

  if (null != s) {
    c.push('fillRule');
    l.fillRule = s && 0 === n[s] ? 0 : 1;
  }
};

var module1625 = require('./1625'),
  module1627 = require('./1627'),
  n = {
    evenodd: 0,
    nonzero: 1,
  },
  module1626 = require('./1626').colorNames.black;
