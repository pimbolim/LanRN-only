var t =
    Object.assign ||
    function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var u = arguments[n];

        for (var o in u) Object.prototype.hasOwnProperty.call(u, o) && (t[o] = u[o]);
      }

      return t;
    },
  React = require('react'),
  module461 = require('./461');

var f = /(\{[\d|\w]+\})/;

module461.default.prototype.formatString = function (u) {
  for (var o = arguments.length, l = Array(o > 1 ? o - 1 : 0), c = 1; c < o; c++) l[c - 1] = arguments[c];

  var v = false,
    s = (u || '')
      .split(f)
      .filter(function (t) {
        return !!t;
      })
      .map(function (u, o) {
        if (u.match(f)) {
          var c = u.slice(1, -1),
            s = l[c];

          if (undefined == s) {
            var p = l[0][c];
            if (undefined === p) return s;
            s = p;
          }

          if (React.default.isValidElement(s)) {
            v = true;
            return React.default.Children.toArray(s).map(function (n) {
              return t({}, n, {
                key: o.toString(),
              });
            });
          } else return s;
        }

        return u;
      });
  return v ? s : s.join('');
};

exports.default = module461.default;
