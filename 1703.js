var n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

exports.encode = function (t) {
  if (0 <= t && t < n.length) return n[t];
  throw new TypeError('Must be between 0 and 63: ' + t);
};

exports.decode = function (n) {
  return 65 <= n && n <= 90 ? n - 65 : 97 <= n && n <= 122 ? n - 97 + 26 : 48 <= n && n <= 57 ? n - 48 + 52 : 43 == n ? 62 : 47 == n ? 63 : -1;
};
