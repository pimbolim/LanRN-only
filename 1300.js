var t = 3;

function n(t, n) {
  return {
    isValid: t,
    isPotentiallyValid: n,
  };
}

exports.postalCode = function (o, l) {
  if (undefined === l) l = {};
  var s = l.minLength || t;
  return 'string' != typeof o ? n(false, false) : o.length < s ? n(false, true) : n(true, true);
};
