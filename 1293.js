module.exports = function (t) {
  for (var n, c = 0, o = false, s = t.length - 1; s >= 0; ) {
    n = parseInt(t.charAt(s), 10);
    if (o && (n *= 2) > 9) n = (n % 10) + 1;
    o = !o;
    c += n;
    s--;
  }

  return c % 10 == 0;
};
