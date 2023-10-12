exports.default = function (t) {
  var o = t.openByDefault,
    u = module53.default(t, s),
    p = module489.default(u);
  return l(
    l({}, p),
    {},
    {
      type: 'drawer',
      getInitialState: function (t) {
        var n = t.routeNames,
          u = t.routeParamList,
          f = t.routeGetIdList,
          s = p.getInitialState({
            routeNames: n,
            routeParamList: u,
            routeGetIdList: f,
          });
        if (o) s = b(s);
        return l(
          l({}, s),
          {},
          {
            stale: false,
            type: 'drawer',
            key: 'drawer-' + module487.nanoid(),
          }
        );
      },
      getRehydratedState: function (t, n) {
        var u = n.routeNames,
          f = n.routeParamList,
          s = n.routeGetIdList;
        if (false === t.stale) return t;
        var y = p.getRehydratedState(t, {
          routeNames: u,
          routeParamList: f,
          routeGetIdList: s,
        });
        if (t.history ? w(t) : o) y = b(y);
        return l(
          l({}, y),
          {},
          {
            type: 'drawer',
            key: 'drawer-' + module487.nanoid(),
          }
        );
      },
      getStateForRouteFocus: function (t, n) {
        var u = p.getStateForRouteFocus(t, n);
        return o ? b(u) : v(u);
      },
      getStateForAction: function (t, n, u) {
        switch (n.type) {
          case 'OPEN_DRAWER':
            return b(t);

          case 'CLOSE_DRAWER':
            return v(t);

          case 'TOGGLE_DRAWER':
            return w(t) ? v(t) : b(t);

          case 'GO_BACK':
            if (o) {
              if (!w(t)) return b(t);
            } else if (w(t)) return v(t);

            return p.getStateForAction(t, n, u);

          default:
            return p.getStateForAction(t, n, u);
        }
      },
      actionCreators: O,
    }
  );
};

var module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module20 = require('./20'),
  module47 = require('./47'),
  module487 = require('./487'),
  module489 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = p(n);
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
  })(require('./489')),
  s = ['openByDefault'];

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (p = function (t) {
    return t ? o : n;
  })(t);
}

function y(t, n) {
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

function l(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      y(Object(o), true).forEach(function (n) {
        module47.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      y(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

var O = l(
  l({}, module489.TabActions),
  {},
  {
    openDrawer: function () {
      return {
        type: 'OPEN_DRAWER',
      };
    },
    closeDrawer: function () {
      return {
        type: 'CLOSE_DRAWER',
      };
    },
    toggleDrawer: function () {
      return {
        type: 'TOGGLE_DRAWER',
      };
    },
  }
);
exports.DrawerActions = O;

var w = function (t) {
    var n;
    return Boolean(
      null == (n = t.history)
        ? undefined
        : n.some(function (t) {
            return 'drawer' === t.type;
          })
    );
  },
  b = function (t) {
    return w(t)
      ? t
      : l(
          l({}, t),
          {},
          {
            history: [].concat(module20.default(t.history), [
              {
                type: 'drawer',
              },
            ]),
          }
        );
  },
  v = function (t) {
    return w(t)
      ? l(
          l({}, t),
          {},
          {
            history: t.history.filter(function (t) {
              return 'drawer' !== t.type;
            }),
          }
        )
      : t;
  };
