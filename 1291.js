var t = /^[\d\s-]*$/,
  n = 255;

function l(t, n) {
  return {
    isValid: t,
    isPotentiallyValid: n,
  };
}

exports.cardholderName = function (o) {
  return 'string' != typeof o ? l(false, false) : 0 === o.length ? l(false, true) : o.length > n ? l(false, false) : t.test(o) ? l(false, true) : l(true, true);
};
