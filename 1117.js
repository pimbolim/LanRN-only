var module901 = require('./901'),
  u = module901.default.Value,
  o = module901.default.cond,
  c = module901.default.eq,
  f = module901.default.or;

exports.get = function (n, t) {
  var f = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : new u();
  return n.reduce(function (n, u, f) {
    return o(c(f, t), u, n);
  }, f);
};

exports.contains = function (n, t) {
  return n.reduce(function (n, u) {
    return f(n, c(t, u));
  }, new u(0));
};

exports.find = function (n, t) {
  var c = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : new u();
  return n.reduce(function (n, u) {
    return o(t(u), u, n);
  }, c);
};
