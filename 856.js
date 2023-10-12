var module11 = require('./11'),
  module24 = require('./24'),
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
    var o = h(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = l ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, f, c);
        else u[f] = t[f];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module400 = require('./400');

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (h = function (t) {
    return t ? o : n;
  })(t);
}

function v() {
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

var module857 = require('./857'),
  module858 = require('./858'),
  P = [],
  b = (function (t) {
    module35.default(E, t);

    var module400 = E,
      h = v(),
      b = function () {
        var t,
          n = module34.default(module400);

        if (h) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function E(t) {
      var n;
      module24.default(this, E);
      (n = b.call(this, t)).animate = new ReactNative.Animated.Value(0);

      n.showImage = function () {
        var t = n.props.source;
        P.push(JSON.stringify(t));
        ReactNative.Animated.timing(n.animate, {
          toValue: 1,
          duration: 500,
          easing: ReactNative.Easing.ease,
          useNativeDriver: true,
        }).start();
      };

      n.state = {
        error: false,
      };
      var u = -1 !== P.indexOf(JSON.stringify(t.source));
      n.animate = new ReactNative.Animated.Value(u ? 1 : 0);
      return n;
    }

    module25.default(E, [
      {
        key: 'UNSAFE_componentWillReceiveProps',
        value: function (t) {
          if (!t.source) this.animate.setValue(0);
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            o = this.props,
            u = o.style,
            l = o.hidePlaceholder,
            f = o.noImage,
            c = o.source,
            y = this.state.error,
            h = this.props.placeholder ? module858 : module857;
          if (l && !c)
            return React.default.createElement(ReactNative.View, {
              style: f,
            });
          var v = ReactNative.StyleSheet.flatten([
            u,
            {
              resizeMode: undefined,
            },
          ]);
          return React.default.createElement(
            ReactNative.View,
            {
              style: v,
            },
            React.default.createElement(
              ReactNative.Image,
              module11.default({}, this.props, {
                source: h,
              })
            ),
            !y &&
              React.default.createElement(
                ReactNative.Animated.Image,
                module11.default({}, this.props, {
                  onLoadEnd: this.showImage,
                  onError: function () {
                    return t.setState({
                      error: true,
                    });
                  },
                  style: [
                    u,
                    {
                      position: 'absolute',
                      opacity: this.animate,
                    },
                  ],
                })
              )
          );
        },
      },
    ]);
    return E;
  })(React.Component),
  E = module400.connect(function (t) {
    return {
      orientation: t.orientation,
    };
  })(b);

exports.default = E;
