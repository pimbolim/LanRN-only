var module1296 = require('./1296'),
  module1297 = require('./1297');

exports.parseDate = function (n) {
  var l;
  if ((/^\d{4}-\d{1,2}$/.test(n) ? (l = n.split('-').reverse()) : /\//.test(n) ? (l = n.split(/\s*\/\s*/g)) : /\s/.test(n) && (l = n.split(/ +/g)), module1297.isArray(l)))
    return {
      month: l[0] || '',
      year: l.slice(1).join(),
    };
  var u = n,
    o,
    p,
    b =
      0 === (p = Number(u[0]))
        ? 2
        : p > 1
        ? 1
        : 1 === p && Number(u[1]) > 2
        ? 1
        : 1 === p
        ? ((o = u.substr(1)), module1296.expirationYear(o).isPotentiallyValid ? 1 : 2)
        : 5 === u.length
        ? 1
        : u.length > 5
        ? 2
        : 1,
    v = n.substr(0, b);
  return {
    month: v,
    year: n.substr(v.length),
  };
};
