function t(t, n, s) {
  var u = String(n).length,
    c = t.substr(0, u),
    h = parseInt(c, 10);
  n = parseInt(String(n).substr(0, c.length), 10);
  s = parseInt(String(s).substr(0, c.length), 10);
  return h >= n && h <= s;
}

function n(t, n) {
  return (n = String(n)).substring(0, t.length) === t.substring(0, n.length);
}

exports.matches = function (s, u) {
  return Array.isArray(u) ? t(s, u[0], u[1]) : n(s, u);
};
