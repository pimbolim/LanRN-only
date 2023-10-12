var module1337 = require('./1337');

Object.keys(module1337).forEach(function (t) {
  if ('default' !== t && '__esModule' !== t)
    (t in exports && exports[t] === module1337[t]) ||
      Object.defineProperty(exports, t, {
        enumerable: true,
        get: function () {
          return module1337[t];
        },
      });
});
