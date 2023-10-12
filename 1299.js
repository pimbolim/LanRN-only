var n = 3;

function t(n, t) {
  for (var l = 0; l < n.length; l++) if (t === n[l]) return true;

  return false;
}

function l(t) {
  for (var l = n, o = 0; o < t.length; o++) l = t[o] > l ? t[o] : l;

  return l;
}

function o(n, t) {
  return {
    isValid: n,
    isPotentiallyValid: t,
  };
}

exports.cvv = function (u, f) {
  if (undefined === f) f = n;
  f = f instanceof Array ? f : [f];
  return 'string' != typeof u
    ? o(false, false)
    : /^\d*$/.test(u)
    ? t(f, u.length)
      ? o(true, true)
      : u.length < Math.min.apply(null, f)
      ? o(false, true)
      : u.length > l(f)
      ? o(false, false)
      : o(true, true)
    : o(false, false);
};
