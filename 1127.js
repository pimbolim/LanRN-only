var module901 = require('./901'),
  module1117 = require('./1117'),
  module1109 = require('./1109'),
  f = module901.default.Value,
  w = module901.default.and,
  o = module901.default.cond,
  s = module901.default.divide,
  c = module901.default.add,
  p = module901.default.multiply,
  v = module901.default.block,
  h = module901.default.greaterThan,
  _ = module901.default.eq,
  b = module901.default.lessThan,
  x = module901.default.pow,
  M = module901.default.sqrt,
  P = module901.default.set,
  q = module901.default.sub,
  y = module901.default.cos,
  I = module901.default.not,
  T = module901.default.acos,
  j = function (n) {
    return w(h(n, 0), b(n, 1));
  },
  k = function (n) {
    return o(b(n, 0), p(x(p(n, -1), 0.3333333333333333), -1), x(n, 0.3333333333333333));
  },
  O = function (n, t, w, O) {
    var V = new f(),
      z = new f(),
      A = new f(),
      B = new f(),
      C = new f(),
      D = new f(),
      E = new f(),
      F = new f(),
      G = new f(),
      H = new f(),
      J = new f(),
      K = new f(),
      L = new f(),
      N = new f(),
      Q = new f(),
      R = new f(),
      S = new f(),
      U = new f(),
      W = new f(),
      X = new f(),
      Y = new f(),
      Z = new f(),
      $ = new f(),
      ee = new f();
    return v([
      P(V, c(p(3, n), p(-6, t), p(3, w))),
      P(z, c(p(-3, n), p(3, t))),
      P(A, n),
      P(B, c(p(-1, n), p(3, t), p(-3, w), O)),
      o(
        module1109.approximates(B, 0, 0.001),
        o(
          module1109.approximates(B, 0, 0.001),
          o(I(module1109.approximates(z, 0, 0.001)), P(C, s(p(-1, A), z)), [P(F, M(q(x(z, 2), p(4, V, A)))), P(C, s(q(F, z), p(2, V))), P(D, s(q(p(z, -1), F), p(2, V)))])
        ),
        [
          P(V, s(V, B)),
          P(z, s(z, B)),
          P(A, s(A, B)),
          P(H, s(q(p(3, z), p(V, V)), 3)),
          P(J, s(H, 3)),
          P(F, s(c(p(2, V, V, V), p(-9, V, z), p(27, A)), 27)),
          P(G, s(F, 2)),
          P(K, c(p(G, G), p(J, J, J))),
          o(
            b(K, 0),
            [
              P(L, s(p(H, -1), 3)),
              P(N, p(L, L, L)),
              P(Q, M(N)),
              P(R, s(p(F, -1), p(2, Q))),
              P(S, o(b(R, -1), -1, o(h(R, 1), 1, R))),
              P(U, T(S)),
              P(W, k(Q)),
              P(X, p(2, W)),
              P(C, q(p(X, y(s(U, 3))), s(V, 3))),
              P(D, q(p(X, y(s(c(U, 2 * Math.PI), 3))), s(V, 3))),
              P(E, q(p(X, y(s(c(U, 4 * Math.PI), 3))), s(V, 3))),
            ],
            o(
              _(K, 0),
              [P(Y, o(b(G, 0), k(p(G, -1)), p(k(G), -1))), P(C, q(p(2, Y), s(V, 3))), P(D, q(p(-1, Y), s(V, 3)))],
              [P(Z, M(K)), P(Y, k(q(ee, G))), P($, k(c(ee, G))), P(C, q(Y, $, s(V, 3)))]
            )
          ),
        ]
      ),
      module1117.find([C, D, E], j),
    ]);
  };

exports.default = O;
