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
    var o = v(n);
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
  })(require('react')),
  ReactNative = require('react-native'),
  module431 = require('./431'),
  module889 = require('./889');

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (v = function (t) {
    return t ? o : n;
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

var S = {
    duration: 500,
    create: {
      duration: 300,
      type: ReactNative.LayoutAnimation.Types.easeInEaseOut,
      property: ReactNative.LayoutAnimation.Properties.opacity,
    },
    update: {
      type: ReactNative.LayoutAnimation.Types.spring,
      springDamping: 200,
    },
  },
  O = (function (t) {
    module35.default(P, t);

    var v = P,
      O = h(),
      k = function () {
        var t,
          n = module34.default(v);

        if (O) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function P(t) {
      var o;
      module24.default(this, P);
      (o = k.call(this, t))._listeners = [];

      o.updateKeyboardSpace = function (t) {
        if (t.endCoordinates) {
          var n = S;
          if ('ios' === ReactNative.Platform.OS)
            n = ReactNative.LayoutAnimation.create(t.duration, ReactNative.LayoutAnimation.Types[t.easing], ReactNative.LayoutAnimation.Properties.opacity);
          ReactNative.LayoutAnimation.configureNext(n);
          var u = ReactNative.Dimensions.get('window').height - t.endCoordinates.screenY + (o.props.topSpacing || 0);
          o.setState(
            {
              keyboardSpace: u,
              isKeyboardOpened: true,
            },
            function () {
              return o.onToggle(true, u);
            }
          );
        }
      };

      o.resetKeyboardSpace = function (t) {
        var n = S;
        if ('ios' === ReactNative.Platform.OS)
          n = ReactNative.LayoutAnimation.create(t.duration, ReactNative.LayoutAnimation.Types[t.easing], ReactNative.LayoutAnimation.Properties.opacity);
        ReactNative.LayoutAnimation.configureNext(n);
        o.setState(
          {
            keyboardSpace: 0,
            isKeyboardOpened: false,
          },
          function () {
            return o.onToggle(false, 0);
          }
        );
      };

      o.state = {
        keyboardSpace: 0,
        isKeyboardOpened: false,
      };
      o.resetKeyboardSpace = o.resetKeyboardSpace.bind(module39.default(o));
      return o;
    }

    module25.default(P, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = 'android' === ReactNative.Platform.OS ? 'keyboardDidShow' : 'keyboardWillShow',
            n = 'android' === ReactNative.Platform.OS ? 'keyboardDidHide' : 'keyboardWillHide';
          this._listeners = [ReactNative.Keyboard.addListener(t, this.updateKeyboardSpace), ReactNative.Keyboard.addListener(n, this.resetKeyboardSpace)];
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this._listeners.forEach(function (t) {
            return t.remove();
          });
        },
      },
      {
        key: 'onToggle',
        value: function (t, n) {
          var o = this.props.onToggle;
          if ('function' == typeof o) o(t, n);
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = module889.CStyles();
          return React.default.createElement(module431.SafeAreaConsumer, null, function (o) {
            return React.default.createElement(ReactNative.View, {
              style: [
                n.container,
                {
                  height: t.state.keyboardSpace - o.bottom,
                },
                t.props.style,
              ],
            });
          });
        },
      },
    ]);
    return P;
  })(React.Component);

exports.default = O;
O.defaultProps = {
  topSpacing: 0,
  onToggle: function () {
    return null;
  },
};
