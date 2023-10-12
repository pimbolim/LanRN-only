var module1225 = require('./1225');

Object.keys(module1225).forEach(function (t) {
  if ('default' !== t && '__esModule' !== t)
    (t in exports && exports[t] === module1225[t]) ||
      Object.defineProperty(exports, t, {
        enumerable: true,
        get: function () {
          return module1225[t];
        },
      });
});
