var t = Object.prototype.hasOwnProperty,
  n = function () {};

function l(t) {
  return 'function' == typeof t ? t : n;
}

function u(t, n) {
  return function (l, u, o) {
    if (l.type === n) t.call(this, l, u, o);
  };
}

function o(n, l) {
  var u = l.structure,
    o = [];

  for (var c in u)
    if (false !== t.call(u, c)) {
      var f = u[c],
        s = {
          name: c,
          type: false,
          nullable: false,
        };
      if (!Array.isArray(u[c])) f = [u[c]];

      for (var v = 0; v < f.length; v++) {
        var y = f[v];
        if (null === y) s.nullable = true;
        else if ('string' == typeof y) s.type = 'node';
        else if (Array.isArray(y)) s.type = 'list';
      }

      if (s.type) o.push(s);
    }

  return o.length
    ? {
        context: l.walkContext,
        fields: o,
      }
    : null;
}

function c(n) {
  var l = {};

  for (var u in n.node)
    if (t.call(n.node, u)) {
      var c = n.node[u];
      if (!c.structure) throw new Error('Missed `structure` field in `' + u + '` node type definition');
      l[u] = o(0, c);
    }

  return l;
}

function f(t, n) {
  var l = t.fields.slice(),
    u = t.context,
    o = 'string' == typeof u;
  if (n) l.reverse();
  return function (t, c, f, s) {
    var v;

    if (o) {
      v = c[u];
      c[u] = t;
    }

    for (var y = 0; y < l.length; y++) {
      var h = l[y],
        p = t[h.name];
      if (!h.nullable || p)
        if ('list' === h.type) {
          if (n ? p.reduceRight(s, false) : p.reduce(s, false)) return true;
        } else if (f(p)) return true;
    }

    if (o) c[u] = v;
  };
}

function s(t) {
  return {
    Atrule: {
      StyleSheet: t.StyleSheet,
      Atrule: t.Atrule,
      Rule: t.Rule,
      Block: t.Block,
    },
    Rule: {
      StyleSheet: t.StyleSheet,
      Atrule: t.Atrule,
      Rule: t.Rule,
      Block: t.Block,
    },
    Declaration: {
      StyleSheet: t.StyleSheet,
      Atrule: t.Atrule,
      Rule: t.Rule,
      Block: t.Block,
      DeclarationList: t.DeclarationList,
    },
  };
}

module.exports = function (o) {
  var v = c(o),
    y = {},
    h = {},
    p = Symbol('break-walk'),
    k = Symbol('skip-node');

  for (var S in v) t.call(v, S) && null !== v[S] && ((y[S] = f(v[S], false)), (h[S] = f(v[S], true)));

  var b = s(y),
    w = s(h),
    A = function (t, o) {
      function c(t, n, l) {
        var u = s.call(R, t, n, l);
        return u === p || (u !== k && (!(!A.hasOwnProperty(t.type) || !A[t.type](t, R, c, f)) || S.call(R, t, n, l) === p));
      }

      var f = function (t, n, l, u) {
          return t || c(n, l, u);
        },
        s = n,
        S = n,
        A = y,
        R = {
          break: p,
          skip: k,
          root: t,
          stylesheet: null,
          atrule: null,
          atrulePrelude: null,
          rule: null,
          selector: null,
          block: null,
          declaration: null,
          function: null,
        };

      if ('function' == typeof o) s = o;
      else if (o && ((s = l(o.enter)), (S = l(o.leave)), o.reverse && (A = h), o.visit)) {
        if (b.hasOwnProperty(o.visit)) A = o.reverse ? w[o.visit] : b[o.visit];
        else if (!v.hasOwnProperty(o.visit)) throw new Error('Bad value `' + o.visit + '` for `visit` option (should be: ' + Object.keys(v).join(', ') + ')');
        s = u(s, o.visit);
        S = u(S, o.visit);
      }
      if (s === n && S === n) throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
      c(t);
    };

  A.break = p;
  A.skip = k;

  A.find = function (t, n) {
    var l = null;
    A(t, function (t, u, o) {
      if (n.call(this, t, u, o)) {
        l = t;
        return p;
      }
    });
    return l;
  };

  A.findLast = function (t, n) {
    var l = null;
    A(t, {
      reverse: true,
      enter: function (t, u, o) {
        if (n.call(this, t, u, o)) {
          l = t;
          return p;
        }
      },
    });
    return l;
  };

  A.findAll = function (t, n) {
    var l = [];
    A(t, function (t, u, o) {
      if (n.call(this, t, u, o)) l.push(t);
    });
    return l;
  };

  return A;
};
