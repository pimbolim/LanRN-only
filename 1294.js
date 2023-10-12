var t =
  (this && this.__assign) ||
  function () {
    return (t =
      Object.assign ||
      function (t) {
        for (var n, l = 1, o = arguments.length; l < o; l++) for (var s in (n = arguments[l])) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);

        return t;
      }).apply(this, arguments);
  };

var module1295 = require('./1295'),
  module1298 = require('./1298'),
  module1296 = require('./1296');

function s(t, n, l, o) {
  return {
    isValid: t,
    isPotentiallyValid: n,
    month: l,
    year: o,
  };
}

exports.expirationDate = function (u, f) {
  var y;

  if ('string' == typeof u) {
    u = u.replace(/^(\d\d) (\d\d(\d\d)?)$/, '$1/$2');
    y = module1295.parseDate(String(u));
  } else {
    if (null === u || 'object' != typeof u) return s(false, false, null, null);
    var p = t({}, u);
    y = {
      month: String(p.month),
      year: String(p.year),
    };
  }

  var h = module1298.expirationMonth(y.month),
    c = module1296.expirationYear(y.year, f);

  if (h.isValid) {
    if (c.isCurrentYear) {
      var v = h.isValidForThisYear;
      return s(v, v, y.month, y.year);
    }

    if (c.isValid) return s(true, true, y.month, y.year);
  }

  return h.isPotentiallyValid && c.isPotentiallyValid ? s(false, true, null, null) : s(false, false, null, null);
};
