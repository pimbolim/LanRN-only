exports.append = h;

exports.appendTransform = function (n, p, l, y, _, P, b, j, A) {
  if (0 === n && 0 === p && 1 === l && 1 === y && 0 === _ && 0 === P && 0 === b && 0 === j && 0 === A) return;
  var I, O;

  if (_ % 360) {
    var T = _ * t;
    I = Math.cos(T);
    O = Math.sin(T);
  } else {
    I = 1;
    O = 0;
  }

  var k = I * l,
    q = O * l,
    w = -O * y,
    x = I * y;

  if (P || b) {
    var z = Math.tan(b * t),
      B = Math.tan(P * t);
    h(k + B * q, z * k + q, w + B * x, z * w + x, n, p);
  } else h(k, q, w, x, n, p);

  if (j || A) {
    c -= j * f + A * u;
    s -= j * o + A * v;
    M = false;
  }
};

exports.reset = function () {
  if (M) return;
  f = v = 1;
  o = u = c = s = 0;
  M = true;
};

exports.toArray = function () {
  if (M) return n;
  return [f, o, u, v, c, s];
};

var t = Math.PI / 180,
  n = [1, 0, 0, 1, 0, 0];
exports.identity = n;
var f = 1,
  o = 0,
  u = 0,
  v = 1,
  c = 0,
  s = 0,
  M = true;

function h(t, n, h, p, l, y) {
  var _ = 1 !== t || 0 !== n || 0 !== h || 1 !== p,
    P = 0 !== l || 0 !== y;

  if (_ || P) {
    if (M) {
      M = false;
      f = t;
      o = n;
      u = h;
      v = p;
      c = l;
      return void (s = y);
    }

    var b = f,
      j = o,
      A = u,
      I = v;

    if (_) {
      f = b * t + A * n;
      o = j * t + I * n;
      u = b * h + A * p;
      v = j * h + I * p;
    }

    if (P) {
      c = b * l + A * y + c;
      s = j * l + I * y + s;
    }
  }
}
