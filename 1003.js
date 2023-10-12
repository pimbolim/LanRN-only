var module1000 = require('./1000'),
  o = Object.prototype,
  n = o.hasOwnProperty,
  c = o.toString,
  l = module1000 ? module1000.toStringTag : undefined;

module.exports = function (t) {
  var o = n.call(t, l),
    v = t[l];

  try {
    t[l] = undefined;
  } catch (t) {}

  var p = c.call(t);
  if (o) t[l] = v;
  else delete t[l];
  return p;
};
