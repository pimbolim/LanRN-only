var t = 19;

function n(t, n, u) {
  return {
    isValid: t,
    isPotentiallyValid: n,
    isCurrentYear: u || false,
  };
}

exports.expirationYear = function (u, s) {
  var f;
  if ((undefined === s && (s = t), 'string' != typeof u)) return n(false, false);
  if ('' === u.replace(/\s/g, '')) return n(false, true);
  if (!/^\d*$/.test(u)) return n(false, false);
  var l = u.length;
  if (l < 2) return n(false, true);
  var o = new Date().getFullYear();
  if (3 === l) return n(false, u.slice(0, 2) === String(o).slice(0, 2));
  if (l > 4) return n(false, false);
  var c = parseInt(u, 10),
    v = Number(String(o).substr(2, 2)),
    p = false;

  if (2 === l) {
    if (String(o).substr(0, 2) === u) return n(false, true);
    f = v === c;
    p = c >= v && c <= v + s;
  } else 4 === l && ((f = o === c), (p = c >= o && c <= o + s));

  return n(p, p, f);
};
