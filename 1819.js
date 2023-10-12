module.exports = function (n) {
  if ('even' === (n = n.trim().toLowerCase())) return [2, 0];
  if ('odd' === n) return [2, 1];
  var o,
    s = n.match(t);
  if (!s) throw new SyntaxError("n-th rule couldn't be parsed ('" + n + "')");

  if (s[1]) {
    o = parseInt(s[1], 10);
    if (isNaN(o)) o = '-' === s[1].charAt(0) ? -1 : 1;
  } else o = 0;

  return [o, s[3] ? parseInt((s[2] || '') + s[3], 10) : 0];
};

var t = /^([+\-]?\d*n)?\s*(?:([+\-]?)\s*(\d+))?$/;
