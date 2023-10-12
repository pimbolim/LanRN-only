exports.getInterfaceLanguage = function () {
  if ('undefined' == typeof navigator) return 'en-US';
  var n = navigator;

  if (n) {
    if (n.language) return n.language;
    if (n.languages && n.languages[0]) return n.languages[0];
    if (n.userLanguage) return n.userLanguage;
    if (n.browserLanguage) return n.browserLanguage;
  }

  return 'en-US';
};

exports.getBestMatchingLanguage = function (n, t) {
  if (t[n]) return n;
  var u = n.indexOf('-'),
    f = u >= 0 ? n.substring(0, u) : n;
  return t[f] ? f : Object.keys(t)[0];
};

exports.validateTranslationKeys = function (n) {
  var t = ['_interfaceLanguage', '_language', '_defaultLanguage', '_defaultLanguageFirstLevelKeys', '_props'];
  n.forEach(function (n) {
    if (-1 !== t.indexOf(n)) throw new Error(n + ' cannot be used as a key. It is a reserved word.');
  });
};

exports.randomPseudo = function (n) {
  for (var t = '', u = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', f = 0; f < n; f += 1) t += u.charAt(Math.floor(Math.random() * u.length));

  return t;
};
