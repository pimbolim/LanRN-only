var module1000 = require('./1000'),
  module1032 = require('./1032'),
  module986 = require('./986'),
  module1025 = require('./1025'),
  module1033 = require('./1033'),
  module1034 = require('./1034'),
  f = 1,
  u = 2,
  j = '[object Boolean]',
  y = '[object Date]',
  l = '[object Error]',
  v = '[object Map]',
  h = '[object Number]',
  p = '[object RegExp]',
  w = '[object Set]',
  L = '[object String]',
  O = '[object Symbol]',
  S = '[object ArrayBuffer]',
  x = '[object DataView]',
  z = module1000 ? module1000.prototype : undefined,
  B = z ? z.valueOf : undefined;

module.exports = function (t, z, D, E, _, A, M) {
  switch (D) {
    case x:
      if (t.byteLength != z.byteLength || t.byteOffset != z.byteOffset) return false;
      t = t.buffer;
      z = z.buffer;

    case S:
      return !(t.byteLength != z.byteLength || !A(new module1032(t), new module1032(z)));

    case j:
    case y:
    case h:
      return module986(+t, +z);

    case l:
      return t.name == z.name && t.message == z.message;

    case p:
    case L:
      return t == z + '';

    case v:
      var N = module1033;

    case w:
      var R = E & f;
      if ((N || (N = module1034), t.size != z.size && !R)) return false;
      var V = M.get(t);
      if (V) return V == z;
      E |= u;
      M.set(t, z);
      var k = module1025(N(t), N(z), E, _, A, M);
      M.delete(t);
      return k;

    case O:
      if (B) return B.call(t) == B.call(z);
  }

  return false;
};
