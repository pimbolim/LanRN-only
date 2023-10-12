module.exports = y;

var module1810 = require('./1810').parse,
  module1808 = require('./1808'),
  module1813 = require('./1813'),
  module1814 = require('./1814'),
  module1815 = require('./1815'),
  module1817 = require('./1817'),
  f = module1808.trueFunc,
  l = module1808.falseFunc,
  p = module1817.filters;

function y(t, n, o) {
  return h(x(t, n, o), n);
}

function h(t, n) {
  var o = n.adapter;
  return function (n) {
    return o.isTag(n) && t(n);
  };
}

function x(n, o, u) {
  return F(module1810(n, o), o, u);
}

function v(t) {
  return (
    'pseudo' === t.type &&
    ('scope' === t.name ||
      (Array.isArray(t.data) &&
        t.data.some(function (t) {
          return t.some(v);
        })))
  );
}

var A = {
    type: 'descendant',
  },
  M = {
    type: '_flexibleDescendant',
  },
  w = {
    type: 'pseudo',
    name: 'scope',
  },
  b = {};

function E(t, n, o) {
  var u = n.adapter,
    c =
      !!o &&
      !!o.length &&
      o.every(function (t) {
        return t === b || !!u.getParent(t);
      });
  t.forEach(function (t) {
    if (t.length > 0 && T(t[0]) && 'descendant' !== t[0].type);
    else {
      if (!c || (Array.isArray(t) ? t.some(v) : v(t))) return;
      t.unshift(A);
    }
    t.unshift(w);
  });
}

function F(t, n, u) {
  (t = t.filter(function (t) {
    return t.length > 0;
  })).forEach(module1813);
  var c = Array.isArray(u);
  if ((u = (n && n.context) || u) && !c) u = [u];
  E(t, n, u);
  var s = false,
    f = t
      .map(function (t) {
        if (t[0] && t[1] && 'scope' === t[0].name) {
          var o = t[1].type;
          if (c && 'descendant' === o) t[1] = M;
          else if (!('adjacent' !== o && 'sibling' !== o)) s = true;
        }

        return C(t, n, u);
      })
      .reduce(_, l);
  f.shouldTestNextSiblings = s;
  return f;
}

function T(t) {
  return module1814[t.type] < 0;
}

function C(t, n, o) {
  return t.reduce(function (t, u) {
    if (t === l) return t;
    if (!(u.type in module1815)) throw new Error('Rule type ' + u.type + ' is not supported by css-select');
    return module1815[u.type](t, u, n, o);
  }, (n && n.rootFunc) || f);
}

function _(t, n) {
  return n === l || t === f
    ? t
    : t === l || n === f
    ? n
    : function (o) {
        return t(o) || n(o);
      };
}

function O(t) {
  return t.some(T);
}

p.not = function (t, n, o, u) {
  var c = {
    xmlMode: !(!o || !o.xmlMode),
    strict: !(!o || !o.strict),
    adapter: o.adapter,
  };
  if (c.strict && (n.length > 1 || n.some(O))) throw new Error("complex selectors in :not aren't allowed in strict mode");
  var s = F(n, c, u);
  return s === l
    ? t
    : s === f
    ? l
    : function (n) {
        return !s(n) && t(n);
      };
};

p.has = function (t, n, o) {
  var u = o.adapter,
    c = {
      xmlMode: !(!o || !o.xmlMode),
      strict: !(!o || !o.strict),
      adapter: u,
    },
    s = n.some(O) ? [b] : null,
    p = F(n, c, s);
  return p === l
    ? l
    : p === f
    ? function (n) {
        return u.getChildren(n).some(u.isTag) && t(n);
      }
    : ((p = h(p, o)),
      s
        ? function (n) {
            return t(n) && ((s[0] = n), u.existsOne(p, u.getChildren(n)));
          }
        : function (n) {
            return t(n) && u.existsOne(p, u.getChildren(n));
          });
};

p.matches = function (t, n, o, u) {
  return F(
    n,
    {
      xmlMode: !(!o || !o.xmlMode),
      strict: !(!o || !o.strict),
      rootFunc: t,
      adapter: o.adapter,
    },
    u
  );
};

y.compileToken = F;
y.compileUnsafe = x;
y.Pseudos = module1817;
