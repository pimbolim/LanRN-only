exports.__esModule = true;
exports.createSelectorHook = h;

var React = require('react'),
  module427 = require('./427'),
  module404 = require('./404'),
  module410 = require('./410'),
  module403 = require('./403'),
  f = function (t, n) {
    return t === n;
  };

function v(t, u, s, f) {
  var v,
    h = React.useReducer(function (t) {
      return t + 1;
    }, 0)[1],
    R = React.useMemo(
      function () {
        return new module404.default(s, f);
      },
      [s, f]
    ),
    x = React.useRef(),
    y = React.useRef(),
    S = React.useRef();

  try {
    v = t !== y.current || x.current ? t(s.getState()) : S.current;
  } catch (t) {
    throw (x.current && (t.message += '\nThe error may be correlated with this previous error:\n' + x.current.stack + '\n\n'), t);
  }

  module410.useIsomorphicLayoutEffect(function () {
    y.current = t;
    S.current = v;
    x.current = undefined;
  });
  module410.useIsomorphicLayoutEffect(
    function () {
      function t() {
        try {
          var t = y.current(s.getState());
          if (u(t, S.current)) return;
          S.current = t;
        } catch (t) {
          x.current = t;
        }

        h({});
      }

      R.onStateChange = t;
      R.trySubscribe();
      t();
      return function () {
        return R.tryUnsubscribe();
      };
    },
    [s, R]
  );
  return v;
}

function h(t) {
  if (undefined === t) t = module403.ReactReduxContext;
  var c =
    t === module403.ReactReduxContext
      ? module427.useReduxContext
      : function () {
          return React.useContext(t);
        };
  return function (t, n) {
    if (undefined === n) n = f;
    var u = c();
    return v(t, n, u.store, u.subscription);
  };
}

var R = h();
exports.useSelector = R;
