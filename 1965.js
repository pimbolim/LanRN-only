var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = v(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var l = f ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (l && (l.get || l.set)) Object.defineProperty(o, c, l);
        else o[c] = t[c];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module472 = require('./472');

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (v = function (t) {
    return t ? u : n;
  })(t);
}

function h() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var O = (function (t) {
    module35.default(j, t);

    var module400 = j,
      v = h(),
      O = function () {
        var t,
          n = module34.default(module400);

        if (v) {
          var u = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, u);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function j() {
      module24.default(this, j);
      return O.apply(this, arguments);
    }

    module25.default(j, [
      {
        key: 'navigation',
        get: function () {
          return this.props.navigation;
        },
      },
      {
        key: 'user',
        get: function () {
          return this.props.user.value || {};
        },
      },
      {
        key: 'render',
        value: function () {
          return React.default.createElement(
            ReactNative.View,
            {
              style: {
                flex: 1,
                backgroundColor: 'white',
              },
            },
            React.default.createElement(
              module472.Wrapper,
              {
                style: b.root,
              },
              React.default.createElement(ReactNative.Text, null, 'teste')
            )
          );
        },
      },
    ]);
    return j;
  })(React.Component),
  b = ReactNative.StyleSheet.create({
    root: {
      flex: 1,
    },
  }),
  j = module400.connect(function (t) {
    return {
      orientation: t.orientation,
      user: t.user,
    };
  })(O);

exports.default = j;
