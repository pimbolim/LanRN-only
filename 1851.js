var t =
    (this && this.__createBinding) ||
    (Object.create
      ? function (t, n, o, u) {
          if (undefined === u) u = o;
          Object.defineProperty(t, u, {
            enumerable: true,
            get: function () {
              return n[o];
            },
          });
        }
      : function (t, n, o, u) {
          if (undefined === u) u = o;
          t[u] = n[o];
        }),
  n =
    (this && this.__exportStar) ||
    function (n, o) {
      for (var u in n) 'default' === u || o.hasOwnProperty(u) || t(o, n, u);
    };

var module1852 = require('./1852');

exports.default = module1852.default;
n(require('./1854'), exports);
