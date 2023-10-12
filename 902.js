var module24 = require('./24'),
  module25 = require('./25'),
  module903 = require('./903'),
  module930 = require('./930'),
  c = (function () {
    function u() {
      module24.default(this, u);
    }

    module25.default(u, null, [
      {
        key: 'linear',
        value: function (u) {
          return u;
        },
      },
      {
        key: 'ease',
        value: function (u) {
          return new module930.default(u, 0.42, 0, 1, 1);
        },
      },
      {
        key: 'quad',
        value: function (u) {
          return module903.multiply(u, u);
        },
      },
      {
        key: 'cubic',
        value: function (u) {
          return module903.multiply(u, u, u);
        },
      },
      {
        key: 'poly',
        value: function (u) {
          return function (n) {
            return module903.pow(n, u);
          };
        },
      },
      {
        key: 'sin',
        value: function (u) {
          return module903.sub(1, module903.cos(module903.multiply(u, Math.PI, 0.5)));
        },
      },
      {
        key: 'circle',
        value: function (u) {
          return module903.sub(1, module903.sqrt(module903.sub(1, module903.multiply(u, u))));
        },
      },
      {
        key: 'exp',
        value: function (u) {
          return module903.pow(2, module903.multiply(10, module903.sub(u, 1)));
        },
      },
      {
        key: 'elastic',
        value: function () {
          var u = (arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 1) * Math.PI;
          return function (n) {
            return module903.sub(1, module903.multiply(module903.pow(module903.cos(module903.multiply(n, Math.PI, 0.5)), 3), module903.cos(module903.multiply(n, u))));
          };
        },
      },
      {
        key: 'back',
        value: function (u) {
          if (undefined === u) u = 1.70158;
          return function (n) {
            return module903.multiply(n, n, module903.sub(module903.multiply(module903.add(u, 1), n), u));
          };
        },
      },
      {
        key: 'bounce',
        value: function (u) {
          var n = function (u) {
            return module903.multiply(7.5625, u, u);
          };

          return module903.cond(
            module903.lessThan(u, 0.36363636363636365),
            n(u),
            module903.cond(
              module903.lessThan(u, 0.7272727272727273),
              module903.add(0.75, n(module903.sub(u, 0.5454545454545454))),
              module903.cond(
                module903.lessThan(u, 0.9057971014492754),
                module903.add(0.9375, n(module903.sub(u, 0.8181818181818182))),
                module903.add(0.984375, n(module903.sub(u, 0.9545454545454546)))
              )
            )
          );
        },
      },
      {
        key: 'bezier',
        value: function (u, n, t, l) {
          return function (c) {
            return new module930.default(c, u, n, t, l);
          };
        },
      },
      {
        key: 'in',
        value: function (u) {
          return u;
        },
      },
      {
        key: 'out',
        value: function (u) {
          return function (n) {
            return module903.sub(1, u(module903.sub(1, n)));
          };
        },
      },
      {
        key: 'inOut',
        value: function (u) {
          return function (n) {
            return module903.cond(
              module903.lessThan(n, 0.5),
              module903.divide(u(module903.multiply(n, 2)), 2),
              module903.sub(1, module903.divide(u(module903.multiply(module903.sub(1, n), 2)), 2))
            );
          };
        },
      },
    ]);
    return u;
  })();

exports.default = c;
