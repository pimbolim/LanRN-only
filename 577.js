exports.default = function (t, f, o) {
  var c = {};
  t.icons.forEach(function (t) {
    t.properties.name.split(/\s*,\s*/g).forEach(function (n) {
      c[n] = t.properties.code;
    });
  });
  var u = f || t.preferences.fontPref.metadata.fontFamily;
  return module567.default(c, u, o || u + '.ttf');
};

var module567 = require('./567');
