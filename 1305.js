var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module47 = require('./47'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = O(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var f = c ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (f && (f.get || f.set)) Object.defineProperty(l, u, f);
        else l[u] = t[u];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module458 = require('./458'),
  module474 = require('./474'),
  module1306 = require('./1306'),
  module1313 = require('./1313');

function O(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (O = function (t) {
    return t ? o : n;
  })(t);
}

function w() {
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

function x(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (n)
      l = l.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, l);
  }

  return o;
}

function k(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      x(Object(o), true).forEach(function (n) {
        module47.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      x(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

var j = ReactNative.Dimensions.get('window').width,
  P = {
    width: 0.8 * j,
    height: 0.5 * j,
  },
  E = ReactNative.StyleSheet.create({
    cardContainer: {},
    cardFace: {},
    flipCard: {
      borderWidth: 0,
    },
    icon: {
      position: 'absolute',
      top: 0.03 * j,
      right: 0.03 * j,
      width: 0.2 * j,
      height: 0.15 * j,
      resizeMode: 'contain',
    },
    baseText: {
      fontSize: 0.04 * j,
      color: module474.Color.white,
      backgroundColor: 'transparent',
    },
    placeholder: {
      color: module474.Color.white,
    },
    focused: {
      color: module474.Color.white,
    },
    number: {
      fontSize: 0.06 * j,
      position: 'absolute',
      top: 0.25 * j,
      left: 0.07 * j,
    },
    name: {
      fontSize: 16,
      position: 'absolute',
      bottom: 20,
      left: 25,
      right: 100,
    },
    expiryLabel: {
      fontSize: 9,
      position: 'absolute',
      bottom: 0.1 * j,
      left: 0.57 * j,
    },
    expiry: {
      fontSize: 0.04 * j,
      position: 'absolute',
      bottom: 0.05 * j,
      left: 0.57 * j,
    },
    amexCVC: {
      fontSize: 16,
      position: 'absolute',
      top: 73,
      right: 30,
    },
    cvc: k(
      k(
        {
          position: 'absolute',
        },
        ReactNative.Platform.select({
          ios: {
            top: 0.22 * j,
            fontSize: 0.06 * j,
          },
          android: {
            top: 0.21 * j,
            fontSize: 0.05 * j,
          },
        })
      ),
      {},
      {
        right: 0.06 * j,
      }
    ),
  }),
  module1314 = (function (t) {
    module35.default(x, t);

    var module47 = x,
      module474 = w(),
      O = function () {
        var t,
          n = module34.default(module47);

        if (module474) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function x() {
      module24.default(this, x);
      return O.apply(this, arguments);
    }

    module25.default(x, [
      {
        key: 'renderBackground',
        value: function (t) {
          var n = this.props.style;
          return React.default.createElement(
            ReactNative.View,
            {
              style: n.backgroundContainer,
            },
            React.default.createElement(ReactNative.View, {
              style: n.background,
            }),
            React.default.createElement(ReactNative.Image, {
              style: n.backgroundImage,
              source: require('./1314'),
            }),
            t &&
              React.default.createElement(ReactNative.View, {
                style: n.backMagneticBand,
              }),
            t &&
              React.default.createElement(ReactNative.View, {
                style: n.backCvc,
              })
          );
        },
      },
      {
        key: 'renderFront',
        value: function () {
          var t = this.props,
            n = t.scale,
            o = t.name,
            l = t.number,
            c = t.focused,
            u = t.placeholder,
            f = t.expiry,
            b = t.customIcons,
            v = t.brand,
            O = t.style,
            w = undefined === O ? E : O,
            x = {
              transform: [
                {
                  scale: n,
                },
                {
                  translateY: (P.height * (n - 1)) / 2,
                },
              ],
            },
            j = [w.baseText, w.name, !o && w.placeholder, 'name' === c && w.focused],
            C = [w.baseText, w.number, !l && w.placeholder, 'number' === c && w.focused],
            S = [w.baseText, w.expiryLabel, w.placeholder, 'expiry' === c && w.focused],
            T = [w.baseText, w.expiry, !f && w.placeholder, 'expiry' === c && w.focused],
            z = k(k({}, module1306.default), b);
          return React.default.createElement(
            ReactNative.View,
            {
              style: [P, w.cardFace, x],
            },
            this.renderBackground(),
            React.default.createElement(ReactNative.Image, {
              style: [w.icon],
              source: z[v],
            }),
            React.default.createElement(
              ReactNative.Text,
              {
                style: j,
              },
              o || u.name
            ),
            React.default.createElement(
              ReactNative.Text,
              {
                style: C,
              },
              l || u.number
            ),
            React.default.createElement(
              ReactNative.Text,
              {
                style: S,
              },
              module458.default.payments.expiryCardPlaceholder
            ),
            React.default.createElement(
              ReactNative.Text,
              {
                style: T,
              },
              f || u.expiry
            )
          );
        },
      },
      {
        key: 'renderBack',
        value: function () {
          var t = this.props,
            n = t.scale,
            o = t.fontFamily,
            l = t.focused,
            c = t.placeholder,
            u = t.cvc,
            f = t.style,
            y = undefined === f ? E : f,
            b = {
              transform: [
                {
                  scale: n,
                },
                {
                  translateY: (P.height * (n - 1)) / 2,
                },
              ],
            };
          return React.default.createElement(
            ReactNative.View,
            {
              style: [P, y.cardFace, b],
            },
            this.renderBackground(true),
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  y.baseText,
                  {
                    fontFamily: o,
                  },
                  y.cvc,
                  !u && y.placeholder,
                  'cvc' === l && y.focused,
                ],
              },
              u || c.cvc
            )
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.focused,
            o = t.style,
            l = undefined === o ? E : o,
            c = 'cvc' === n;
          return React.default.createElement(
            ReactNative.View,
            {
              style: l.cardContainer,
            },
            React.default.createElement(
              module1313.default,
              {
                style: l.flipCard,
                flipHorizontal: true,
                flipVertical: true,
                friction: 10,
                perspective: 2e3,
                clickable: false,
                flip: c,
              },
              this.renderFront(),
              this.renderBack()
            )
          );
        },
      },
    ]);
    return x;
  })(React.Component);

exports.default = module1314;
module1314.defaultProps = {
  placeholder: {
    name: 'Name Surname',
    number: '\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022',
    expiry: '\u2022\u2022/\u2022\u2022',
    cvc: '\u2022\u2022\u2022',
  },
  scale: 1,
};
