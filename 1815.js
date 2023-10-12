var module1816 = require('./1816'),
  module1817 = require('./1817');

module.exports = {
  __proto__: null,
  attribute: module1816.compile,
  pseudo: module1817.compile,
  tag: function (n, t, u) {
    var o = t.name,
      f = u.adapter;
    return function (t) {
      return f.getName(t) === o && n(t);
    };
  },
  descendant: function (n, t, u) {
    var o = 'undefined' != typeof WeakSet ? new WeakSet() : null,
      f = u.adapter;
    return function (t) {
      for (var u = false; !u && (t = f.getParent(t)); ) (o && o.has(t)) || (!(u = n(t)) && o && o.add(t));

      return u;
    };
  },
  _flexibleDescendant: function (n, t, u) {
    var o = u.adapter;
    return function (t) {
      for (var u = n(t); !u && (t = o.getParent(t)); ) u = n(t);

      return u;
    };
  },
  parent: function (n, t, u) {
    if (u && u.strict) throw new Error("Parent selector isn't part of CSS3");
    var o = u.adapter;
    return function (n) {
      return o.getChildren(n).some(f);
    };

    function f(t) {
      return o.isTag(t) && n(t);
    }
  },
  child: function (n, t, u) {
    var o = u.adapter;
    return function (t) {
      var u = o.getParent(t);
      return !!u && n(u);
    };
  },
  sibling: function (n, t, u) {
    var o = u.adapter;
    return function (t) {
      for (var u = o.getSiblings(t), f = 0; f < u.length; f++)
        if (o.isTag(u[f])) {
          if (u[f] === t) break;
          if (n(u[f])) return true;
        }

      return false;
    };
  },
  adjacent: function (n, t, u) {
    var o = u.adapter;
    return function (t) {
      for (var u, f = o.getSiblings(t), c = 0; c < f.length; c++)
        if (o.isTag(f[c])) {
          if (f[c] === t) break;
          u = f[c];
        }

      return !!u && n(u);
    };
  },
  universal: function (n) {
    return n;
  },
};
