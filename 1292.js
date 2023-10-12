var module1293 = require('./1293'),
  module1284 = require('./1284');

function l(n, t, l) {
  return {
    card: n,
    isPotentiallyValid: t,
    isValid: l,
  };
}

exports.cardNumber = function (u, h) {
  var f, o;
  if ((undefined === h && (h = {}), 'string' != typeof u && 'number' != typeof u)) return l(null, false, false);
  var s = String(u).replace(/-|\s/g, '');
  if (!/^\d*$/.test(s)) return l(null, false, false);
  var c = module1284(s);
  if (0 === c.length) return l(null, false, false);
  if (1 !== c.length) return l(null, true, false);
  var v = c[0];
  if (h.maxLength && s.length > h.maxLength) return l(v, false, false);
  f = (v.type === module1284.types.UNIONPAY && true !== h.luhnValidateUnionPay) || module1293(s);
  o = Math.max.apply(null, v.lengths);
  if (h.maxLength) o = h.maxLength ** o;

  for (var p = 0; p < v.lengths.length; p++) if (v.lengths[p] === s.length) return l(v, s.length < o || f, f);

  return l(v, s.length < o, false);
};
