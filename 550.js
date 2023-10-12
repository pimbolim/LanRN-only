exports.default = function (n, f) {
  var l = f.enabled,
    v = undefined === l || l,
    h = f.prefixes,
    p = f.config,
    k = f.getInitialURL,
    y =
      undefined === k
        ? function () {
            return Promise.race([
              ReactNative.Linking.getInitialURL(),
              new Promise(function (n) {
                return setTimeout(n, 150);
              }),
            ]);
          }
        : k,
    b = f.subscribe,
    w =
      undefined === b
        ? function (n) {
            var t = function (t) {
                var o = t.url;
                return n(o);
              },
              u = ReactNative.Linking.addEventListener('url', t);

            return function () {
              if (null != u && u.remove) u.remove();
              else ReactNative.Linking.removeEventListener('url', t);
            };
          }
        : b,
    P = f.getStateFromPath,
    L = undefined === P ? module483.getStateFromPath : P,
    R = f.getActionFromState,
    O = undefined === R ? module483.getActionFromState : R;
  React.useEffect(function () {
    if (false !== v && s)
      throw new Error(
        [
          'Looks like you have configured linking in multiple places. This is likely an error since deep links should only be handled in one place to avoid conflicts. Make sure that:',
          "- You are not using both 'linking' prop and 'useLinking'",
          "- You don't have 'useLinking' in multiple components",
          'android' === ReactNative.Platform.OS
            ? "- You have set 'android:launchMode=singleTask' in the '<activity />' section of the 'AndroidManifest.xml' file to avoid launching multiple instances"
            : '',
        ]
          .join('\n')
          .trim()
      );
    s = false !== v;
    return function () {
      s = false;
    };
  });

  var j = React.useRef(v),
    M = React.useRef(h),
    S = React.useRef(p),
    E = React.useRef(y),
    _ = React.useRef(L),
    T = React.useRef(O);

  React.useEffect(function () {
    j.current = v;
    M.current = h;
    S.current = p;
    E.current = y;
    _.current = L;
    T.current = O;
  });
  var A = React.useCallback(function () {
    var n;

    if (j.current) {
      var t = E.current();
      if (null != t && 'string' != typeof t)
        return t.then(function (n) {
          var t = n ? module551.default(M.current, n) : null;
          return t ? _.current(t, S.current) : undefined;
        });
      var o = t ? module551.default(M.current, t) : null;
      n = o ? _.current(o, S.current) : undefined;
    }

    var u = {
      then: function (t) {
        return Promise.resolve(t ? t(n) : n);
      },
      catch: function () {
        return u;
      },
    };
    return u;
  }, []);
  React.useEffect(
    function () {
      return w(function (t) {
        if (v) {
          var o = module551.default(M.current, t),
            u = n.current;

          if (u && o) {
            var f = _.current(o, S.current);

            if (f) {
              var s = u.getRootState();
              if (
                f.routes.some(function (n) {
                  return !(null != s && s.routeNames.includes(n.name));
                })
              )
                return void console.warn(
                  "The navigation state parsed from the URL contains routes not present in the root navigator. This usually means that the linking configuration doesn't match the navigation structure. See https://reactnavigation.org/docs/5.x/configuring-links for more details on how to specify a linking configuration."
                );
              var l = T.current(f, S.current);
              if (undefined !== l)
                try {
                  u.dispatch(l);
                } catch (n) {
                  console.warn("An error occurred when trying to handle the link '" + o + "': " + n.message);
                }
              else u.resetRoot(f);
            }
          }
        }
      });
    },
    [v, n, w]
  );
  return {
    getInitialState: A,
  };
};

var React = (function (n, t) {
    if (!t && n && n.__esModule) return n;
    if (null === n || ('object' != typeof n && 'function' != typeof n))
      return {
        default: n,
      };
    var o = f(t);
    if (o && o.has(n)) return o.get(n);
    var u = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in n)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(n, s)) {
        var l = c ? Object.getOwnPropertyDescriptor(n, s) : null;
        if (l && (l.get || l.set)) Object.defineProperty(u, s, l);
        else u[s] = n[s];
      }

    u.default = n;
    if (o) o.set(n, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module483 = require('./483'),
  module551 = require('./551');

function f(n) {
  if ('function' != typeof WeakMap) return null;
  var t = new WeakMap(),
    o = new WeakMap();
  return (f = function (n) {
    return n ? o : t;
  })(n);
}

var s = false;
