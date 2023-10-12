exports.default = function (t) {
  var n = t.getState,
    c = t.emitter,
    l = t.beforeRemoveListeners,
    y = React.useContext(module495.default).addKeyedListener,
    p = React.useContext(module497.default),
    s = null == p ? undefined : p.key;
  React.useEffect(
    function () {
      if (s)
        return null == y
          ? undefined
          : y('beforeRemove', s, function (t) {
              var o = n();
              return O(c, l, o.routes, [], t);
            });
    },
    [y, l, c, n, s]
  );
};

var module47 = require('./47'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = c(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var y = f ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (y && (y.get || y.set)) Object.defineProperty(u, l, y);
        else u[l] = t[l];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  module495 = require('./495'),
  module497 = require('./497');

function c(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (c = function (t) {
    return t ? o : n;
  })(t);
}

function l(t, n) {
  var o = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
  if (o) return (o = o.call(t)).next.bind(o);

  if (Array.isArray(t) || (o = y(t)) || (n && t && 'number' == typeof t.length)) {
    if (o) t = o;
    var u = 0;
    return function () {
      return u >= t.length
        ? {
            done: true,
          }
        : {
            done: false,
            value: t[u++],
          };
    };
  }

  throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}

function y(t, n) {
  if (t) {
    if ('string' == typeof t) return p(t, n);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if ('Object' === o && t.constructor) o = t.constructor.name;
    return 'Map' === o || 'Set' === o ? Array.from(t) : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? p(t, n) : undefined;
  }
}

function p(t, n) {
  if (null == n || n > t.length) n = t.length;

  for (var o = 0, u = new Array(n); o < n; o++) u[o] = t[o];

  return u;
}

function s(t, n) {
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

function v(t) {
  for (var o = 1; o < arguments.length; o++) {
    var u = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      s(Object(u), true).forEach(function (o) {
        module47.default(t, o, u[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      s(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

var b = Symbol('VISITED_ROUTE_KEYS'),
  O = function (t, o, u, f, c) {
    for (
      var y,
        p,
        s = f.map(function (t) {
          return t.key;
        }),
        O = u
          .filter(function (t) {
            return !s.includes(t.key);
          })
          .reverse(),
        j = null != (y = c[b]) ? y : new Set(),
        P = v(v({}, c), {}, module47.default({}, b, j)),
        h = l(O);
      !(p = h()).done;

    ) {
      var w,
        S = p.value;

      if (!j.has(S.key)) {
        if (null == (w = o[S.key]) ? undefined : w.call(o, P)) return true;
        if (
          (j.add(S.key),
          t.emit({
            type: 'beforeRemove',
            target: S.key,
            data: {
              action: P,
            },
            canPreventDefault: true,
          }).defaultPrevented)
        )
          return true;
      }
    }

    return false;
  };

exports.shouldPreventRemove = O;
