var module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = b(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var l = f ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (l && (l.get || l.set)) Object.defineProperty(u, c, l);
        else u[c] = t[c];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400'),
  module565 = require('./565'),
  module600 = require('./600'),
  module860 = require('./860');

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (b = function (t) {
    return t ? o : n;
  })(t);
}

function O() {
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

var j = 'ios' === ReactNative.Platform.OS ? 'anterior' : 'back',
  k = (function (t) {
    module35.default(w, t);

    var module400 = w,
      b = O(),
      k = function () {
        var t,
          n = module34.default(module400);

        if (b) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function w(t) {
      var o;
      module24.default(this, w);
      (o = k.call(this, t)).onPress = o.onPress.bind(module39.default(o));
      return o;
    }

    module25.default(w, [
      {
        key: 'onPress',
        value: function () {
          var t = this.props.onPress;
          if ('function' == typeof t) t();
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.text,
            o = t.switchColor,
            u = module860.CStyles();
          return React.default.createElement(
            module600.default,
            {
              onPress: this.onPress,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  u.container,
                  o && {
                    backgroundColor: 'beige',
                  },
                ],
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: u.text,
                },
                n
              ),
              React.default.createElement(module565.default, {
                name: j,
                style: u.icon,
              })
            )
          );
        },
      },
    ]);
    return w;
  })(React.PureComponent),
  w = module400.connect(function (t) {
    return {
      colorScheme: t.colorScheme,
      orientation: t.orientation,
    };
  })(k);

exports.default = w;
