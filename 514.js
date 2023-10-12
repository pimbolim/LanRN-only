exports.default = function (t) {
  var n = t.screen,
    s = t.route,
    p = t.navigation,
    O = t.routeState,
    b = t.getState,
    v = t.setState,
    j = t.options,
    k = t.clearOptions,
    P = React.useRef(),
    w = React.useCallback(function () {
      return P.current;
    }, []),
    h = module502.default({
      key: s.key,
      options: j,
      navigation: p,
    }).addOptionsGetter,
    E = React.useCallback(function (t) {
      P.current = t;
    }, []),
    C = React.useCallback(
      function () {
        var t = b(),
          n = t.routes.find(function (t) {
            return t.key === s.key;
          });
        return n ? n.state : undefined;
      },
      [b, s.key]
    ),
    S = React.useCallback(
      function (t) {
        var n = b();
        v(
          y(
            y({}, n),
            {},
            {
              routes: n.routes.map(function (n) {
                return n.key === s.key
                  ? y(
                      y({}, n),
                      {},
                      {
                        state: t,
                      }
                    )
                  : n;
              }),
            }
          )
        );
      },
      [b, s.key, v]
    ),
    D = React.useRef(true);
  React.useEffect(function () {
    D.current = false;
  });
  React.useEffect(function () {
    return k;
  }, []);

  var M = React.useCallback(function () {
      return D.current;
    }, []),
    _ = React.useMemo(
      function () {
        return {
          state: O,
          getState: C,
          setState: S,
          getKey: w,
          setKey: E,
          getIsInitial: M,
          addOptionsGetter: h,
        };
      },
      [O, C, S, w, E, M, h]
    ),
    W = n.getComponent ? n.getComponent() : n.component;

  return React.createElement(
    module496.default.Provider,
    {
      value: _,
    },
    React.createElement(
      module493.default,
      null,
      React.createElement(
        module515.default,
        {
          name: n.name,
          render: W || n.children,
          navigation: p,
          route: s,
        },
        undefined !== W
          ? React.createElement(W, {
              navigation: p,
              route: s,
            })
          : undefined !== n.children
          ? n.children({
              navigation: p,
              route: s,
            })
          : null
      )
    )
  );
};

var module47 = require('./47'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = s(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var l = c ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (l && (l.get || l.set)) Object.defineProperty(u, f, l);
        else u[f] = t[f];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  module496 = require('./496'),
  module515 = require('./515'),
  module493 = require('./493'),
  module502 = require('./502');

function s(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (s = function (t) {
    return t ? o : n;
  })(t);
}

function p(t, n) {
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

function y(t) {
  for (var o = 1; o < arguments.length; o++) {
    var u = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      p(Object(u), true).forEach(function (o) {
        module47.default(t, o, u[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      p(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}
