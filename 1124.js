module.exports = function (s) {
  for (var l, u = [], h = 0, o = 0, x = 0, b = 0, k = null, f = null, p = 0, v = 0, y = 0, C = s.length; y < C; y++) {
    var A = s[y],
      w = A[0];

    switch (w) {
      case 'M':
        x = A[1];
        b = A[2];
        break;

      case 'A':
        var F = module1125({
          px: p,
          py: v,
          cx: A[6],
          cy: A[7],
          rx: A[1],
          ry: A[2],
          xAxisRotation: A[3],
          largeArcFlag: A[4],
          sweepFlag: A[5],
        });
        if (!F.length) continue;

        for (var Q, S = 0; S < F.length; S++) {
          Q = F[S];
          A = ['C', Q.x1, Q.y1, Q.x2, Q.y2, Q.x, Q.y];
          if (S < F.length - 1) u.push(A);
        }

        break;

      case 'S':
        var T = p,
          _ = v;

        if (!('C' != l && 'S' != l)) {
          T += T - h;
          _ += _ - o;
        }

        A = ['C', T, _, A[1], A[2], A[3], A[4]];
        break;

      case 'T':
        if ('Q' == l || 'T' == l) {
          k = 2 * p - k;
          f = 2 * v - f;
        } else {
          k = p;
          f = v;
        }

        A = c(p, v, k, f, A[1], A[2]);
        break;

      case 'Q':
        k = A[1];
        f = A[2];
        A = c(p, v, A[1], A[2], A[3], A[4]);
        break;

      case 'L':
        A = t(p, v, A[1], A[2]);
        break;

      case 'H':
        A = t(p, v, A[1], v);
        break;

      case 'V':
        A = t(p, v, p, A[1]);
        break;

      case 'Z':
        A = t(p, v, x, b);
    }

    l = w;
    p = A[A.length - 2];
    v = A[A.length - 1];

    if (A.length > 4) {
      h = A[A.length - 4];
      o = A[A.length - 3];
    } else {
      h = p;
      o = v;
    }

    u.push(A);
  }

  return u;
};

var module1125 = require('./1125');

function t(n, t, c, s) {
  return ['C', n, t, c, s, c, s];
}

function c(n, t, c, s, l, u) {
  return ['C', n / 3 + 0.6666666666666666 * c, t / 3 + 0.6666666666666666 * s, l / 3 + 0.6666666666666666 * c, u / 3 + 0.6666666666666666 * s, l, u];
}
