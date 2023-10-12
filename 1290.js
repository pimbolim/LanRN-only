function t(t) {
  var n = t.filter(function (t) {
    return t.matchStrength;
  }).length;
  return n > 0 && n === t.length;
}

exports.findBestMatch = function (n) {
  return t(n)
    ? n.reduce(function (t, n) {
        return t ? (Number(t.matchStrength) < Number(n.matchStrength) ? n : t) : n;
      })
    : null;
};
