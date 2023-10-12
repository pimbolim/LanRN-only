var module20 = require('./20'),
  module901 = require('./901').default.concat;

exports.string = function (n) {
  for (var o = arguments.length, c = new Array(o > 1 ? o - 1 : 0), f = 1; f < o; f++) c[f - 1] = arguments[f];

  if (0 === c.length) return module901(n[0]);
  var l = c.reduce(function (u, o, c) {
    return [].concat(module20.default(u), [n[c], o]);
  }, []);
  l.push(n[n.length - 1]);
  return module901.apply(undefined, module20.default(l));
};
