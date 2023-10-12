var module47 = require('./47'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module903 = require('./903'),
  module909 = require('./909'),
  l = ['tension', 'friction'],
  p = ['bounciness', 'speed'];

function s(t, n) {
  var u = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    if (n)
      o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    u.push.apply(u, o);
  }

  return u;
}

function c(t) {
  for (var u = 1; u < arguments.length; u++) {
    var o = null != arguments[u] ? arguments[u] : {};
    if (u % 2)
      s(Object(o), true).forEach(function (u) {
        module47.default(t, u, o[u]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      s(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

function y(t) {
  return 3.62 * (t - 30) + 194;
}

function b(t) {
  return 3 * (t - 8) + 25;
}

function w(t) {
  return module903.add(module903.multiply(module903.sub(t, 30), 3.62), 194);
}

function O(t) {
  return module903.add(module903.multiply(module903.sub(t, 8), 3), 25);
}

function v(t, n, u) {
  function f(t, n, u) {
    return module903.divide(module903.sub(t, n), module903.sub(u, n));
  }

  function l(t, n, u) {
    return module903.add(n, module903.multiply(t, module903.sub(u, n)));
  }

  function p(t, n, u) {
    return module903.add(module903.multiply(t, u), module903.multiply(module903.sub(1, t), n));
  }

  function s(t) {
    return module903.add(module903.sub(module903.multiply(44e-6, module903.pow(t, 3)), module903.multiply(0.006, module903.pow(t, 2))), module903.multiply(0.36, t), 2);
  }

  function y(t) {
    return module903.add(module903.sub(module903.multiply(4.5e-7, module903.pow(t, 3)), module903.multiply(332e-6, module903.pow(t, 2))), module903.multiply(0.1078, t), 5.84);
  }

  var b = f(module903.divide(t, 1.7), 0, 20);
  b = l(b, 0, 0.8);
  var v = b,
    h = module903.cond(
      module903.lessOrEq(P, 18),
      ((M = P), module903.add(module903.sub(module903.multiply(7e-4, module903.pow(M, 3)), module903.multiply(0.031, module903.pow(M, 2))), module903.multiply(0.64, M), 1.28)),
      module903.cond(module903.and(module903.greaterThan(P, 18), module903.lessOrEq(P, 44)), s(P), y(P))
    ),
    j = 0.01,
    P = D,
    M,
    D = l(f(module903.divide(n, 1.7), 0, 20), 0.5, 200),
    k = p(module903.sub(module903.multiply(2, v), module903.multiply(v, v)), h, j);
  return c(
    c({}, u),
    {},
    {
      stiffness: w(D),
      damping: O(k),
    }
  );
}

function h(t, n, u) {
  function o(t, n, u) {
    return (t - n) / (u - n);
  }

  function f(t, n, u) {
    return n + t * (u - n);
  }

  function l(t, n, u) {
    return t * u + (1 - t) * n;
  }

  function p(t) {
    return 44e-6 * t ** 3 - 0.006 * t ** 2 + 0.36 * t + 2;
  }

  function s(t) {
    return 4.5e-7 * t ** 3 - 332e-6 * t ** 2 + 0.1078 * t + 5.84;
  }

  var w = o(t / 1.7, 0, 20);
  w = f(w, 0, 0.8);
  var O = w,
    v = (h = P) <= 18 ? ((j = h), 7e-4 * j ** 3 - 0.031 * j ** 2 + 0.64 * j + 1.28) : h > 18 && h <= 44 ? p(h) : s(h),
    h,
    j,
    P = f(o(n / 1.7, 0, 20), 0.5, 200),
    M = l(2 * O - O * O, v, 0.01);
  return c(
    c({}, u),
    {},
    {
      stiffness: y(P),
      damping: b(M),
    }
  );
}

var j = {
  makeDefaultConfig: function () {
    return {
      stiffness: new module909.default(100),
      mass: new module909.default(1),
      damping: new module909.default(10),
      overshootClamping: false,
      restSpeedThreshold: 0.001,
      restDisplacementThreshold: 0.001,
      toValue: new module909.default(0),
    };
  },
  makeConfigFromBouncinessAndSpeed: function (t) {
    var n = t.bounciness,
      o = t.speed,
      f = module53.default(t, p);
    return 'number' == typeof n && 'number' == typeof o ? h(n, o, f) : v(n, o, f);
  },
  makeConfigFromOrigamiTensionAndFriction: function (t) {
    var n = t.tension,
      o = t.friction;
    return c(
      c({}, module53.default(t, l)),
      {},
      {
        stiffness: 'number' == typeof n ? y(n) : w(n),
        damping: 'number' == typeof o ? b(o) : O(o),
      }
    );
  },
};
exports.default = j;
