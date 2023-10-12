var t = function (t, n) {
    return t.substr(0, n).split('');
  },
  n = function (t) {
    return new Array(t).fill('');
  };

exports.getSymbols = function (l, o) {
  return new Array().concat(t(l, o)).concat(n(o)).slice(0, o);
};

exports.getStyle = function (t, n) {
  return n ? [t, n] : t;
};

exports.isLastFilledCell = function (t) {
  var n = t.value,
    l = t.index;
  return Boolean(n && n.length - 2 === l);
};
