module.exports = function (t) {
  var c = 0,
    s = 0,
    n = 0,
    b = 0;
  return t.map(function (t) {
    var f = (t = t.slice())[0],
      k = f.toUpperCase();
    if (f != k)
      switch (((t[0] = k), f)) {
        case 'a':
          t[6] += n;
          t[7] += b;
          break;

        case 'v':
          t[1] += b;
          break;

        case 'h':
          t[1] += n;
          break;

        default:
          for (var u = 1; u < t.length; ) {
            t[u++] += n;
            t[u++] += b;
          }
      }

    switch (k) {
      case 'Z':
        n = c;
        b = s;
        break;

      case 'H':
        n = t[1];
        break;

      case 'V':
        b = t[1];
        break;

      case 'M':
        n = c = t[1];
        b = s = t[2];
        break;

      default:
        n = t[t.length - 2];
        b = t[t.length - 1];
    }

    return t;
  });
};
