var module1950 = require('./1950');

Object.keys(module1950).forEach(function (t) {
  if ('default' !== t && '__esModule' !== t)
    (t in exports && exports[t] === module1950[t]) ||
      Object.defineProperty(exports, t, {
        enumerable: true,
        get: function () {
          return module1950[t];
        },
      });
});
