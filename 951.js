var module903 = require('./903'),
  module932 = require('./932'),
  module909 = require('./909'),
  n = 64;

function u(t, u, p) {
  var y = module903.cond(u.time, u.time, t),
    v = module932.min(module903.sub(t, y), n),
    c = p.damping,
    h = p.mass,
    f = p.stiffness,
    b = module903.multiply(-1, u.velocity),
    T = module903.sub(p.toValue, u.position),
    V = module903.divide(c, module903.multiply(2, module903.sqrt(module903.multiply(f, h)))),
    q = module903.sqrt(module903.divide(f, h)),
    P = module903.multiply(q, module903.sqrt(module903.sub(1, module903.multiply(V, V)))),
    _ = module903.divide(v, 1e3),
    C = module903.sin(module903.multiply(P, _)),
    D = module903.cos(module903.multiply(P, _)),
    S = module903.exp(module903.multiply(-1, V, q, _)),
    x = module903.multiply(S, module903.add(module903.multiply(C, module903.divide(module903.add(b, module903.multiply(V, q, T)), P)), module903.multiply(T, D))),
    j = module903.sub(p.toValue, x),
    k = module903.sub(
      module903.multiply(V, q, x),
      module903.multiply(S, module903.sub(module903.multiply(D, module903.add(b, module903.multiply(V, q, T))), module903.multiply(P, T, C)))
    ),
    w = module903.exp(module903.multiply(-1, q, _)),
    M = module903.sub(p.toValue, module903.multiply(w, module903.add(T, module903.multiply(module903.add(b, module903.multiply(q, T)), _)))),
    O = module903.multiply(w, module903.add(module903.multiply(b, module903.sub(module903.multiply(_, q), 1)), module903.multiply(_, T, q, q))),
    z = u.prevPosition ? u.prevPosition : new module909.default(0),
    A = module903.cond(
      module903.and(p.overshootClamping, module903.neq(p.stiffness, 0)),
      module903.cond(module903.lessThan(z, p.toValue), module903.greaterThan(u.position, p.toValue), module903.lessThan(u.position, p.toValue))
    ),
    B = module903.lessThan(module932.abs(u.velocity), p.restSpeedThreshold),
    E = module903.or(module903.eq(p.stiffness, 0), module903.lessThan(module932.abs(module903.sub(p.toValue, u.position)), p.restDisplacementThreshold));

  return module903.block([
    module903.set(z, u.position),
    module903.cond(module903.lessThan(V, 1), [module903.set(u.position, j), module903.set(u.velocity, k)], [module903.set(u.position, M), module903.set(u.velocity, O)]),
    module903.set(u.time, t),
    module903.cond(module903.or(A, module903.and(B, E)), [
      module903.cond(module903.neq(p.stiffness, 0), [module903.set(u.velocity, 0), module903.set(u.position, p.toValue)]),
      module903.set(u.finished, 1),
    ]),
  ]);
}

var p = module903.proc(function (t, s, l, o, n, p, y, v, c, h, f, b, T) {
  return u(
    T,
    {
      finished: t,
      velocity: s,
      position: l,
      time: o,
      prevPosition: n,
    },
    {
      toValue: p,
      damping: y,
      mass: v,
      stiffness: c,
      overshootClamping: h,
      restDisplacementThreshold: b,
      restSpeedThreshold: f,
    }
  );
});

exports.default = function (t, s, l) {
  var o = s.finished,
    n = s.velocity,
    u = s.position,
    y = s.time,
    v = s.prevPosition,
    c = l.toValue,
    h = l.damping,
    f = l.mass,
    b = l.stiffness,
    T = l.overshootClamping,
    V = l.restDisplacementThreshold,
    q = l.restSpeedThreshold;
  return p(o, n, u, y, v, c, h, f, b, T, q, V, t);
};
