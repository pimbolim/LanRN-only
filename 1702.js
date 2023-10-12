var module1703 = require('./1703');

function o(n) {
  return n < 0 ? 1 + (-n << 1) : 0 + (n << 1);
}

exports.encode = function (t) {
  var c,
    u = '',
    h = o(t);

  do {
    c = 31 & h;
    if ((h >>>= 5) > 0) c |= 32;
    u += module1703.encode(c);
  } while (h > 0);

  return u;
};

exports.decode = function (o, t, c) {
  var u,
    h,
    f,
    l,
    v = o.length,
    w = 0,
    s = 0;

  do {
    if (t >= v) throw new Error('Expected more digits in base 64 VLQ value.');
    if (-1 === (h = module1703.decode(o.charCodeAt(t++)))) throw new Error('Invalid base64 digit: ' + o.charAt(t - 1));
    u = !!(32 & h);
    w += (h &= 31) << s;
    s += 5;
  } while (u);

  c.value = ((l = (f = w) >> 1), 1 == (1 & f) ? -l : l);
  c.rest = t;
};
