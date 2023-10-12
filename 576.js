exports.default = function (t, f, o) {
  var u = {};
  t.glyphs.forEach(function (t) {
    u[t.css] = t.code;
  });
  var c = f || t.name || 'fontello';
  return module567.default(u, c, o || c + '.ttf');
};

var module567 = require('./567');
