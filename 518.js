exports.default = function (t) {
  var n = t.onAction,
    s = t.getState,
    l = t.emitter,
    O = t.router,
    y = React.useContext(module494.default),
    b = React.useContext(module498.default);
  return React.useMemo(
    function () {
      var t = function (t) {
          var o = 'function' == typeof t ? t(s()) : t,
            u = n(o);
          if (!(u || null == y)) y(o);
        },
        o = p(p({}, O.actionCreators), module484.CommonActions),
        c = Object.keys(o).reduce(function (n, u) {
          n[u] = function () {
            return t(o[u].apply(o, arguments));
          };

          return n;
        }, {});

      return p(
        p(p({}, b), c),
        {},
        {
          dispatch: t,
          emit: l.emit,
          isFocused: b
            ? b.isFocused
            : function () {
                return true;
              },
          canGoBack: function () {
            var t = s();
            return (
              null !==
                O.getStateForAction(t, module484.CommonActions.goBack(), {
                  routeNames: t.routeNames,
                  routeParamList: {},
                  routeGetIdList: {},
                }) ||
              (null == b ? undefined : b.canGoBack()) ||
              false
            );
          },
          getParent: function () {
            return b;
          },
          getState: s,
          dangerouslyGetParent: function () {
            return b;
          },
          dangerouslyGetState: s,
        }
      );
    },
    [l.emit, s, n, y, b, O]
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
  module484 = require('./484'),
  module498 = require('./498'),
  module494 = require('./494');

function s(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (s = function (t) {
    return t ? o : n;
  })(t);
}

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

function p(t) {
  for (var o = 1; o < arguments.length; o++) {
    var u = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      l(Object(u), true).forEach(function (o) {
        module47.default(t, o, u[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      l(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

require('./519').PrivateValueStore;
