var module1808 = require('./1808').falseFunc,
  n = /[-[\]{}()*+?.,\\^$|#\s]/g,
  u = {
    __proto__: null,
    equals: function (t, n, u) {
      var o = n.name,
        l = n.value,
        s = u.adapter;

      if (n.ignoreCase) {
        l = l.toLowerCase();
        return function (n) {
          var u = s.getAttributeValue(n, o);
          return null != u && u.toLowerCase() === l && t(n);
        };
      } else
        return function (n) {
          return s.getAttributeValue(n, o) === l && t(n);
        };
    },
    hyphen: function (t, n, u) {
      var o = n.name,
        l = n.value,
        s = l.length,
        c = u.adapter;

      if (n.ignoreCase) {
        l = l.toLowerCase();
        return function (n) {
          var u = c.getAttributeValue(n, o);
          return null != u && (u.length === s || '-' === u.charAt(s)) && u.substr(0, s).toLowerCase() === l && t(n);
        };
      } else
        return function (n) {
          var u = c.getAttributeValue(n, o);
          return null != u && u.substr(0, s) === l && (u.length === s || '-' === u.charAt(s)) && t(n);
        };
    },
    element: function (u, o, l) {
      var s = o.name,
        c = o.value,
        f = l.adapter;
      if (/\s/.test(c)) return module1808;
      var v = '(?:^|\\s)' + (c = c.replace(n, '\\$&')) + '(?:$|\\s)',
        b = o.ignoreCase ? 'i' : '',
        p = new RegExp(v, b);
      return function (t) {
        var n = f.getAttributeValue(t, s);
        return null != n && p.test(n) && u(t);
      };
    },
    exists: function (t, n, u) {
      var o = n.name,
        l = u.adapter;
      return function (n) {
        return l.hasAttrib(n, o) && t(n);
      };
    },
    start: function (n, u, o) {
      var l = u.name,
        s = u.value,
        c = s.length,
        f = o.adapter;
      return 0 === c
        ? module1808
        : u.ignoreCase
        ? ((s = s.toLowerCase()),
          function (t) {
            var u = f.getAttributeValue(t, l);
            return null != u && u.substr(0, c).toLowerCase() === s && n(t);
          })
        : function (t) {
            var u = f.getAttributeValue(t, l);
            return null != u && u.substr(0, c) === s && n(t);
          };
    },
    end: function (n, u, o) {
      var l = u.name,
        s = u.value,
        c = -s.length,
        f = o.adapter;
      return 0 === c
        ? module1808
        : u.ignoreCase
        ? ((s = s.toLowerCase()),
          function (t) {
            var u = f.getAttributeValue(t, l);
            return null != u && u.substr(c).toLowerCase() === s && n(t);
          })
        : function (t) {
            var u = f.getAttributeValue(t, l);
            return null != u && u.substr(c) === s && n(t);
          };
    },
    any: function (u, o, l) {
      var s = o.name,
        c = o.value,
        f = l.adapter;
      if ('' === c) return module1808;

      if (o.ignoreCase) {
        var v = new RegExp(c.replace(n, '\\$&'), 'i');
        return function (t) {
          var n = f.getAttributeValue(t, s);
          return null != n && v.test(n) && u(t);
        };
      }

      return function (t) {
        var n = f.getAttributeValue(t, s);
        return null != n && n.indexOf(c) >= 0 && u(t);
      };
    },
    not: function (t, n, u) {
      var o = n.name,
        l = n.value,
        s = u.adapter;
      return '' === l
        ? function (n) {
            return !!s.getAttributeValue(n, o) && t(n);
          }
        : n.ignoreCase
        ? ((l = l.toLowerCase()),
          function (n) {
            var u = s.getAttributeValue(n, o);
            return null != u && u.toLowerCase() !== l && t(n);
          })
        : function (n) {
            return s.getAttributeValue(n, o) !== l && t(n);
          };
    },
  };

module.exports = {
  compile: function (t, n, o) {
    if (o && o.strict && (n.ignoreCase || 'not' === n.action)) throw new Error('Unsupported attribute selector');
    return u[n.action](t, n, o);
  },
  rules: u,
};
