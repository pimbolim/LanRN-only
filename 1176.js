var module47 = require('./47'),
  module20 = require('./20'),
  module12 = require('./12'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = s(n);
    if (u && u.has(t)) return u.get(t);
    var c = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var o = l ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (o && (o.get || o.set)) Object.defineProperty(c, f, o);
        else c[f] = t[f];
      }

    c.default = t;
    if (u) u.set(t, c);
    return c;
  })(require('react')),
  module900 = require('./900'),
  module1177 = require('./1177');

function s(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (s = function (t) {
    return t ? u : n;
  })(t);
}

function p(t, n) {
  var u = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    if (n)
      c = c.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    u.push.apply(u, c);
  }

  return u;
}

function b(t) {
  for (var u = 1; u < arguments.length; u++) {
    var c = null != arguments[u] ? arguments[u] : {};
    if (u % 2)
      p(Object(c), true).forEach(function (u) {
        module47.default(t, u, c[u]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(c));
    else
      p(Object(c)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(c, n));
      });
  }

  return t;
}

var O = React.forwardRef(function (t, f) {
    var s = React.useState({}),
      p = module12.default(s, 2),
      O = p[0],
      y = p[1],
      v = React.useRef(null),
      j = React.useRef([]),
      k = React.useRef(false),
      P = React.useCallback(
        function (t) {
          if (t === v.current) {
            if (0 === j.current.length) v.current = null;
            else if (j.current.length > 0) {
              var n;
              if (((v.current = j.current[0]), j.current.splice(0, 1), !k.current)) null == (n = O[v.current].ref.current) || n.restoreSheetPosition();
              k.current = false;
            }
          } else {
            var u = j.current.indexOf(t);
            j.current.splice(u, 1);
          }

          y(function (n) {
            return Object.keys(n).reduce(function (u, c) {
              if (c !== t) u[c] = n[c];
              return u;
            }, {});
          });
        },
        [O]
      ),
      h = React.useCallback(
        function (t, n) {
          var u;
          if (O[t]) null == (u = O[t].ref.current) || u.snapTo(n);
        },
        [O]
      ),
      w = React.useCallback(
        function (t) {
          var n;
          if (O[t]) null == (n = O[t].ref.current) || n.expand();
        },
        [O]
      ),
      C = React.useCallback(
        function (t) {
          var n;
          if (O[t]) null == (n = O[t].ref.current) || n.collapse();
        },
        [O]
      ),
      D = React.useCallback(
        function (t, c, f) {
          if (!O[t]) {
            var o;

            if (v.current) {
              if (!(null == (o = O[v.current].ref.current))) o.temporaryCloseSheet();
              j.current = [v.current].concat(module20.default(j.current));
            }

            v.current = t;
            y(function (u) {
              return b(
                b({}, u),
                {},
                module47.default({}, t, {
                  ref: React.createRef(),
                  content: c,
                  configs: f,
                })
              );
            });
          }
        },
        [O]
      ),
      S = React.useCallback(
        function (t) {
          var n, u;

          if (O[t]) {
            if (!(null == (n = O[t].ref.current))) n.close();

            if (t === v.current && j.current.length > 0) {
              k.current = true;
              if (!(null == (u = O[j.current[0]].ref.current))) u.restoreSheetPosition();
            }
          }
        },
        [O]
      ),
      _ = React.useCallback(
        function () {
          Object.keys(O).map(function (t) {
            O[t].ref.current.close();
          });
        },
        [O]
      );

    React.useImperativeHandle(f, function () {
      return {
        present: D,
        dismiss: S,
        dismissAll: _,
        snapTo: h,
        expand: w,
        collapse: C,
      };
    });
    var M = React.useCallback(
      function () {
        return Object.keys(O).map(function (t) {
          return React.default.createElement(module1177.default, {
            key: t,
            ref: O[t].ref,
            content: O[t].content,
            configs: O[t].configs,
            unmount: function () {
              return P(t);
            },
          });
        });
      },
      [O, P]
    );
    return React.default.createElement(React.default.Fragment, null, M());
  }),
  y = React.memo(O, module900.default);
exports.default = y;
