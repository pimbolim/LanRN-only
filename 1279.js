var module1280 = require('./1280');

Object.keys(module1280).forEach(function (t) {
  if ('default' !== t && '__esModule' !== t)
    (t in exports && exports[t] === module1280[t]) ||
      Object.defineProperty(exports, t, {
        enumerable: true,
        get: function () {
          return module1280[t];
        },
      });
});
