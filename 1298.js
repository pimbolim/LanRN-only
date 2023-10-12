function t(t, n, o) {
  return {
    isValid: t,
    isPotentiallyValid: n,
    isValidForThisYear: o || false,
  };
}

exports.expirationMonth = function (n) {
  var o = new Date().getMonth() + 1;
  if ('string' != typeof n) return t(false, false);
  if ('' === n.replace(/\s/g, '') || '0' === n) return t(false, true);
  if (!/^\d*$/.test(n)) return t(false, false);
  var u = parseInt(n, 10);
  if (isNaN(Number(n))) return t(false, false);
  var s = u > 0 && u < 13;
  return t(s, s, s && u >= o);
};
