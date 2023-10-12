exports.removeSubsets = function (n) {
  for (var t, f, o, u = n.length; --u > -1; ) {
    for (t = f = n[u], n[u] = null, o = true; f; ) {
      if (n.indexOf(f) > -1) {
        o = false;
        n.splice(u, 1);
        break;
      }

      f = f.parent;
    }

    if (o) n[u] = t;
  }

  return n;
};

var n = 1,
  t = 2,
  f = 4,
  o = 8,
  u = 16,
  c = (exports.compareDocumentPosition = function (c, s) {
    var l,
      p,
      v,
      h,
      x,
      O,
      b = [],
      S = [];
    if (c === s) return 0;

    for (l = c; l; ) {
      b.unshift(l);
      l = l.parent;
    }

    for (l = s; l; ) {
      S.unshift(l);
      l = l.parent;
    }

    for (O = 0; b[O] === S[O]; ) O++;

    if (0 === O) return n;
    else {
      v = (p = b[O - 1]).children;
      h = b[O];
      x = S[O];
      if (v.indexOf(h) > v.indexOf(x)) return p === s ? f | u : f;
      else return p === c ? t | o : t;
    }
  });

exports.uniqueSort = function (n) {
  var o,
    u,
    s = n.length;

  for (n = n.slice(); --s > -1; ) {
    o = n[s];
    if ((u = n.indexOf(o)) > -1 && u < s) n.splice(s, 1);
  }

  n.sort(function (n, o) {
    var u = c(n, o);
    return u & t ? -1 : u & f ? 1 : 0;
  });
  return n;
};
