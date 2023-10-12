function t(t) {
  function n(t) {
    return null !== t && ('Type' === t.type || 'Property' === t.type || 'Keyword' === t.type);
  }

  var u = null;
  if (null !== this.matched)
    (function o(y) {
      if (Array.isArray(y.match)) {
        for (var c = 0; c < y.match.length; c++)
          if (o(y.match[c])) {
            if (n(y.syntax)) u.unshift(y.syntax);
            return true;
          }
      } else if (y.node === t) {
        u = n(y.syntax) ? [y.syntax] : [];
        return true;
      }

      return false;
    })(this.matched);
  return u;
}

function n(n, u, o) {
  var y = t.call(n, u);
  return null !== y && y.some(o);
}

module.exports = {
  getTrace: t,
  isType: function (t, u) {
    return n(this, t, function (t) {
      return 'Type' === t.type && t.name === u;
    });
  },
  isProperty: function (t, u) {
    return n(this, t, function (t) {
      return 'Property' === t.type && t.name === u;
    });
  },
  isKeyword: function (t) {
    return n(this, t, function (t) {
      return 'Keyword' === t.type;
    });
  },
};
