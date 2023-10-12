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
    var o = P(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, s, c);
        else l[s] = t[s];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module431 = require('./431'),
  module891 = require('./891'),
  module400 = require('./400'),
  module897 = require('./897'),
  module888 = require('./888');

function P(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (P = function (t) {
    return t ? o : n;
  })(t);
}

function k() {
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

var w = (function (t) {
    module35.default(E, t);

    var module400 = E,
      P = k(),
      w = function () {
        var t,
          n = module34.default(module400);

        if (P) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function E(t) {
      var o;
      module24.default(this, E);
      (o = w.call(this, t)).sheetRef = React.default.createRef();
      o.animated = new ReactNative.Animated.Value(0);
      o.index = 0;

      o.onChange = function (t) {
        if (o.index !== t) {
          if (!Boolean(t)) o.onClose();
          o.index = t;
        }
      };

      o.onChange = o.onChange.bind(module39.default(o));
      o.onClose = o.onClose.bind(module39.default(o));
      return o;
    }

    module25.default(E, [
      {
        key: 'UNSAFE_componentWillReceiveProps',
        value: function (t) {
          var n = this.props.visible;
          if (!n && t.visible) this.open();
          else if (n && !t.visible) this.close();
        },
      },
      {
        key: 'open',
        value: function () {
          var t = this;
          setImmediate(function () {
            var n;
            return null == (n = t.sheetRef.current) ? undefined : n.expand();
          });
          ReactNative.Animated.timing(this.animated, {
            toValue: 1,
            easing: ReactNative.Easing.ease,
            duration: 250,
            useNativeDriver: true,
          }).start();
        },
      },
      {
        key: 'close',
        value: function () {
          var t = this;
          setImmediate(function () {
            var n;
            return null == (n = t.sheetRef.current) ? undefined : n.close();
          });
          ReactNative.Animated.timing(this.animated, {
            toValue: 0,
            easing: ReactNative.Easing.ease,
            duration: 250,
            useNativeDriver: true,
          }).start(this.onClose);
        },
      },
      {
        key: 'onClose',
        value: function () {
          var t = this.props.onClose;
          ReactNative.Keyboard.dismiss();
          if ('function' == typeof t) t();
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.visible,
            o = t.snapPoints,
            l = t.keyboardSpacer,
            u = t.children,
            s = t.preventTouchClose,
            c = t.lockScroll,
            y = t.backViewNotBlocked,
            P = t.enablePanDownToClose;
          return React.default.createElement(
            module891.Portal,
            null,
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  ReactNative.StyleSheet.absoluteFill,
                  n &&
                    y && {
                      marginTop: '160%',
                    },
                ],
                pointerEvents: n && !c ? undefined : 'none',
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: {
                    flex: 1,
                  },
                },
                React.default.createElement(
                  ReactNative.TouchableWithoutFeedback,
                  {
                    onPress: (!s && this.onClose) || undefined,
                  },
                  React.default.createElement(ReactNative.Animated.View, {
                    style: [
                      ReactNative.StyleSheet.absoluteFill,
                      {
                        opacity: this.animated,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                      },
                    ],
                  })
                ),
                React.default.createElement(
                  module897.default,
                  {
                    enablePanDownToClose: P,
                    ref: this.sheetRef,
                    initialSnapIndex: 0,
                    animationDuration: 250,
                    onChange: this.onChange,
                    snapPoints: o,
                  },
                  u
                )
              ),
              'ios' === ReactNative.Platform.OS &&
                l &&
                n &&
                React.default.createElement(module431.SafeAreaInsetsContext.Consumer, null, function (t) {
                  return React.default.createElement(module888.default, {
                    topSpacing: -Number(null == t ? undefined : t.bottom),
                  });
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
  })(w);

exports.default = E;
