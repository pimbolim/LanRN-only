module.exports = h;

var module1789 = require('./1789'),
  module1808 = require('./1808').falseFunc,
  module1809 = require('./1809');

function s(n) {
  return function (u, s, o) {
    (s = s || {}).adapter = s.adapter || module1789;
    return n(u, s, o);
  };
}

var o = s(module1809),
  f = s(module1809.compileUnsafe);

function l(n) {
  return function (u, s, o) {
    (o = o || {}).adapter = o.adapter || module1789;
    if ('function' != typeof u) u = f(u, o, s);
    if (u.shouldTestNextSiblings) s = p((o && o.context) || s, o.adapter);
    s = Array.isArray(s) ? o.adapter.removeSubsets(s) : o.adapter.getChildren(s);
    return n(u, s, o);
  };
}

function c(t, n) {
  var u = n.getSiblings(t);
  if (!Array.isArray(u)) return [];

  for (u = u.slice(0); u.shift() !== t; );

  return u;
}

function p(t, n) {
  if (!Array.isArray(t)) t = [t];

  for (var u = t.slice(0), s = 0, o = t.length; s < o; s++) {
    var f = c(u[s], n);
    u.push.apply(u, f);
  }

  return u;
}

var y = l(function (t, u, s) {
    return t !== module1808 && u && 0 !== u.length ? s.adapter.findAll(t, u) : [];
  }),
  A = l(function (t, u, s) {
    return t !== module1808 && u && 0 !== u.length ? s.adapter.findOne(t, u) : null;
  });

function h(t, n, u) {
  return y(t, n, u);
}

h.compile = o;
h.filters = module1809.Pseudos.filters;
h.pseudos = module1809.Pseudos.pseudos;
h.selectAll = y;
h.selectOne = A;

h.is = function (n, u, s) {
  (s = s || {}).adapter = s.adapter || module1789;
  return ('function' == typeof u ? u : o(u, s))(n);
};

h.parse = o;
h.iterate = y;
h._compileUnsafe = f;
h._compileToken = module1809.compileToken;
