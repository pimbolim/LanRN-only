exports.default = function (t) {
  var o = t.state,
    O = t.screens,
    j = t.navigation,
    P = t.screenOptions,
    S = t.defaultScreenOptions,
    h = t.onAction,
    k = t.getState,
    D = t.setState,
    E = t.addListener,
    M = t.addKeyedListener,
    _ = t.onRouteFocus,
    A = t.router,
    L = t.emitter,
    C = React.useState({}),
    W = module12.default(C, 2),
    F = W[0],
    K = W[1],
    R = React.useContext(module495.default),
    x = R.onDispatchAction,
    N = R.onOptionsChange,
    T = React.useMemo(
      function () {
        return {
          navigation: j,
          onAction: h,
          addListener: E,
          addKeyedListener: M,
          onRouteFocus: _,
          onDispatchAction: x,
          onOptionsChange: N,
        };
      },
      [j, h, E, M, _, x, N]
    ),
    q = module516.default({
      state: o,
      getState: k,
      navigation: j,
      setOptions: K,
      router: A,
      emitter: L,
    });
  return module517.default(o.routes).reduce(function (t, u, p) {
    var l = O[u.name],
      j = q[u.key],
      h = w(
        w(
          w(
            {},
            'object' == typeof P || null == P
              ? P
              : P({
                  route: u,
                  navigation: j,
                })
          ),
          'object' == typeof l.options || null == l.options
            ? l.options
            : l.options({
                route: u,
                navigation: j,
              })
        ),
        F[u.key]
      ),
      E = w(
        w(
          {},
          'function' == typeof S
            ? S({
                route: u,
                navigation: j,
                options: h,
              })
            : S
        ),
        h
      ),
      M = function () {
        return K(function (t) {
          if (u.key in t) {
            var o = u.key,
              c = module53.default(t, [o].map(b));
            return c;
          }

          return t;
        });
      };

    t[u.key] = {
      navigation: j,
      render: function () {
        return React.createElement(
          module495.default.Provider,
          {
            key: u.key,
            value: T,
          },
          React.createElement(
            module498.default.Provider,
            {
              value: j,
            },
            React.createElement(
              module497.default.Provider,
              {
                value: u,
              },
              React.createElement(module514.default, {
                navigation: j,
                route: u,
                screen: l,
                routeState: o.routes[p].state,
                getState: k,
                setState: D,
                options: E,
                clearOptions: M,
              })
            )
          )
        );
      },
      options: E,
    };
    return t;
  }, {});
};

var module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module47 = require('./47'),
  module12 = require('./12'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = O(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var s = c ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (s && (s.get || s.set)) Object.defineProperty(u, f, s);
        else u[f] = t[f];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  module514 = require('./514'),
  module495 = require('./495'),
  module516 = require('./516'),
  module517 = require('./517'),
  module498 = require('./498'),
  module497 = require('./497');

function O(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (O = function (t) {
    return t ? o : n;
  })(t);
}

function b(t) {
  var n = j(t, 'string');
  return 'symbol' == typeof n ? n : String(n);
}

function j(t, n) {
  if ('object' != typeof t || null === t) return t;
  var o = t[Symbol.toPrimitive];

  if (undefined !== o) {
    var u = o.call(t, n || 'default');
    if ('object' != typeof u) return u;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }

  return ('string' === n ? String : Number)(t);
}

function P(t, n) {
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

function w(t) {
  for (var n = 1; n < arguments.length; n++) {
    var u = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      P(Object(u), true).forEach(function (n) {
        module47.default(t, n, u[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      P(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}
