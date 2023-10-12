exports.clearMemo = function () {
  p = {};
};

exports.getSupportedPlatformInfoAsync = b;

exports.getSupportedPlatformInfoFunctions = function (t) {
  var o = t.syncGetter,
    u = module53.default(t, f);
  return [
    function () {
      return b(u);
    },
    function () {
      return O(
        s(
          s({}, u),
          {},
          {
            getter: o,
          }
        )
      );
    },
  ];
};

exports.getSupportedPlatformInfoSync = O;

var module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  regeneratorRuntime = require('regenerator-runtime'),
  module47 = require('./47'),
  ReactNative = require('react-native'),
  f = ['syncGetter'];

function l(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    if (n)
      u = u.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, u);
  }

  return o;
}

function s(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      l(Object(o), true).forEach(function (n) {
        module47.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      l(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

var p = {};

function y(t, n, o) {
  var u = {};
  t.filter(function (t) {
    return ReactNative.Platform.OS == t;
  }).forEach(function (t) {
    return (u[t] = n);
  });
  return ReactNative.Platform.select(
    s(
      s({}, u),
      {},
      {
        default: o,
      }
    )
  );
}

function O(t) {
  var n = t.getter,
    o = t.supportedPlatforms,
    u = t.defaultValue,
    c = t.memoKey;
  if (c && undefined != p[c]) return p[c];
  var f = y(o, n, function () {
    return u;
  })();
  if (c) p[c] = f;
  return f;
}

function b(t) {
  var n, u, c, f, l;
  return regeneratorRuntime.default.async(
    function (s) {
      for (;;)
        switch ((s.prev = s.next)) {
          case 0:
            if (((n = t.getter), (u = t.supportedPlatforms), (c = t.defaultValue), !(f = t.memoKey) || undefined == p[f])) {
              s.next = 5;
              break;
            }

            return s.abrupt('return', p[f]);

          case 5:
            s.next = 7;
            return regeneratorRuntime.default.awrap(
              y(u, n, function () {
                return Promise.resolve(c);
              })()
            );

          case 7:
            l = s.sent;
            if (f) p[f] = l;
            return s.abrupt('return', l);

          case 10:
          case 'end':
            return s.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}
