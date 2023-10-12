var module11 = require('./11'),
  module12 = require('./12'),
  module47 = require('./47'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = w(n);
    if (u && u.has(t)) return u.get(t);
    var l = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = o ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, f, c);
        else l[f] = t[f];
      }

    l.default = t;
    if (u) u.set(t, l);
    return l;
  })(require('react')),
  module483 = require('./483'),
  module545 = require('./545'),
  module547 = require('./547'),
  module548 = require('./548'),
  module549 = require('./549'),
  module550 = require('./550'),
  module553 = require('./553'),
  module554 = require('./554'),
  P = ['theme', 'linking', 'fallback', 'documentTitle', 'onReady'];

function w(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (w = function (t) {
    return t ? u : n;
  })(t);
}

function h(t, n) {
  var u = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (n)
      l = l.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    u.push.apply(u, l);
  }

  return u;
}

function k(t) {
  for (var n = 1; n < arguments.length; n++) {
    var u = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      h(Object(u), true).forEach(function (n) {
        module47.default(t, n, u[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      h(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

var E = React.forwardRef(function (t, l) {
  var w = t.theme,
    h = undefined === w ? module547.default : w,
    E = t.linking,
    S = t.fallback,
    D = undefined === S ? null : S,
    M = t.documentTitle,
    _ = t.onReady,
    R = module53.default(t, P),
    W = !!E && false !== E.enabled,
    I = React.useRef(null);
  module554.default(I);
  module553.default(I, M);
  var T = module550.default(
      I,
      k(
        {
          enabled: W,
          prefixes: [],
        },
        E
      )
    ).getInitialState,
    x = module549.default(T),
    B = module12.default(x, 2),
    C = B[0],
    H = B[1];
  React.useImperativeHandle(l, function () {
    return I.current;
  });
  var N = React.useMemo(
      function () {
        return {
          options: E,
        };
      },
      [E]
    ),
    q = null != R.initialState || !W || C,
    z = React.useRef(_);
  React.useEffect(function () {
    z.current = _;
  });
  React.useEffect(
    function () {
      if (q) null == z.current || z.current();
    },
    [q]
  );
  return q
    ? React.createElement(
        module548.default.Provider,
        {
          value: N,
        },
        React.createElement(
          module545.default,
          {
            value: h,
          },
          React.createElement(
            module483.BaseNavigationContainer,
            module11.default({}, R, {
              initialState: null == R.initialState ? H : R.initialState,
              ref: I,
            })
          )
        )
      )
    : D;
});
exports.default = E;
