var t = {
  isFileURI: function (t) {
    return 'string' == typeof t && /^ReactNativeBlobUtil-file\:\/\//.test(t);
  },
  isJSONStreamURI: function (t) {
    return 'string' == typeof t && /^JSONStream\:\/\//.test(t);
  },
  removeURIScheme: function (t, n) {
    n = n || 1;

    for (var l = t, o = 0; o < n; o++) l = String(l).replace(/^[^\:]+\:\/\//, '');

    return String(l);
  },
  unwrapFileURI: function (t) {
    return String(t).replace(/^ReactNativeBlobUtil-file\:\/\//, '');
  },
  wrap: function (t) {
    return (t.startsWith('content://') ? 'ReactNativeBlobUtil-content://' : 'ReactNativeBlobUtil-file://') + t;
  },
};
exports.default = t;
