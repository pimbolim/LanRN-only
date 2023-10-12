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
    var s = f(n);
    if (s && s.has(t)) return s.get(t);
    var l = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var h = o ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (h && (h.get || h.set)) Object.defineProperty(l, u, h);
        else l[u] = t[u];
      }

    l.default = t;
    if (s) s.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native');

function f(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    s = new WeakMap();
  return (f = function (t) {
    return t ? s : n;
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

var y = ReactNative.StyleSheet.create({
    flipCard: {
      flex: 1,
    },
    face: {
      flex: 1,
    },
    back: {
      flex: 1,
    },
  }),
  w = (function (t) {
    module35.default(O, t);

    var f = O,
      w = v(),
      S = function () {
        var t,
          n = module34.default(f);

        if (w) {
          var s = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, s);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function O(t) {
      var n;
      module24.default(this, O);
      var l = (n = S.call(this, t)).props.alignHeight || n.props.alignWidth ? !t.flip : t.flip;
      n.state = {
        isFlipped: l,
        rotate: new ReactNative.Animated.Value(Number(t.flip)),
        measured: false,
        height: 0,
        width: 0,
        face: {
          width: 0,
          height: 0,
        },
        back: {
          width: 0,
          height: 0,
        },
      };
      return n;
    }

    module25.default(O, [
      {
        key: 'componentDidMount',
        value: function () {
          if (this.props.alignHeight || this.props.alignWidth) this.measureOtherSideTimeout = setTimeout(this.measureOtherSide.bind(this), 32);
        },
      },
      {
        key: 'UNSAFE_componentWillReceiveProps',
        value: function (t) {
          if (this.state.isFlipped !== t.flip) this._toggleCard();
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          clearTimeout(this.measureOtherSideTimeout);
        },
      },
      {
        key: '_toggleCard',
        value: function () {
          this.props.onFlipStart(this.state.isFlipped);

          this._animation(!this.state.isFlipped);
        },
      },
      {
        key: '_animation',
        value: function (t) {
          var n = this;
          if (!this.timer)
            this.timer = setTimeout(function () {
              var t = n.state.isFlipped;
              n.setState({
                isFlipped: !t,
              });
              n.timer = null;
            }, 120);
          ReactNative.Animated.spring(this.state.rotate, {
            toValue: Number(t),
            friction: this.props.friction,
            useNativeDriver: this.props.useNativeDriver,
          }).start(function () {
            n.props.onFlipEnd(n.state.isFlipped);
          });
        },
      },
      {
        key: 'measureOtherSide',
        value: function () {
          var t = this.state.isFlipped;
          this.setState({
            isFlipped: !t,
            measured: true,
          });
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            s = this.props,
            l = s.children,
            o = s.perspective,
            u = s.flipHorizontal,
            h = s.flipVertical,
            f = s.alignHeight,
            v = s.alignWidth,
            w = s.clickable,
            S = s.style,
            O = s.testID,
            F = o
              ? [
                  {
                    perspective: o,
                  },
                ]
              : [],
            E = false;

          if (
            (u &&
              F.push({
                rotateY: this.state.rotate.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '180deg'],
                }),
              }),
            h &&
              F.push({
                rotateX: this.state.rotate.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '180deg'],
                }),
              }),
            (E = this.state.isFlipped
              ? React.default.createElement(
                  b,
                  {
                    style: [
                      this.state.height > 0 && {
                        height: this.state.height,
                      },
                      this.state.width > 0 && {
                        width: this.state.width,
                      },
                    ],
                    flipHorizontal: u,
                    flipVertical: h,
                    perspective: o,
                    onLayout: function (s) {
                      var l = t.state,
                        o = l.measured,
                        u = l.face,
                        h = l.back,
                        p = s.nativeEvent.layout,
                        c = p.width,
                        y = p.height,
                        w = module11.default(h, {
                          width: c,
                          height: y,
                        });
                      t.setState({
                        back: w,
                      });

                      if (o) {
                        if (f)
                          t.setState({
                            height: u.height ** h.height,
                          });
                        if (v)
                          t.setState({
                            width: u.width ** h.width,
                          });
                      }
                    },
                  },
                  l[1]
                )
              : React.default.createElement(
                  k,
                  {
                    style: [
                      this.state.height > 0 && {
                        height: this.state.height,
                      },
                      this.state.width > 0 && {
                        width: this.state.width,
                      },
                    ],
                    onLayout: function (s) {
                      var l = t.state,
                        o = l.measured,
                        u = l.face,
                        h = l.back,
                        p = s.nativeEvent.layout,
                        c = p.width,
                        y = p.height,
                        w = module11.default(u, {
                          width: c,
                          height: y,
                        });
                      t.setState({
                        face: w,
                      });

                      if (o) {
                        if (f)
                          t.setState({
                            height: u.height ** h.height,
                          });
                        if (v)
                          t.setState({
                            width: u.width ** h.width,
                          });
                      }
                    },
                  },
                  l[0]
                )),
            w)
          ) {
            var P = 0;
            if (((f || v) && this.state.measured) || (!f && !v)) P = 1;
            return React.default.createElement(
              ReactNative.TouchableOpacity,
              {
                style: {
                  flex: 1,
                },
                testID: O,
                activeOpacity: 1,
                onPress: function () {
                  t._toggleCard();
                },
              },
              React.default.createElement(
                ReactNative.Animated.View,
                module11.default({}, this.props, {
                  style: [
                    y.flipCard,
                    {
                      transform: F,
                      opacity: P,
                    },
                    S,
                  ],
                }),
                E
              )
            );
          }

          return React.default.createElement(
            ReactNative.Animated.View,
            module11.default({}, this.props, {
              style: [
                y.flipCard,
                {
                  transform: F,
                },
                S,
              ],
            }),
            E
          );
        },
      },
    ]);
    return O;
  })(React.Component);

exports.default = w;
w.defaultProps = {
  flip: false,
  friction: 6,
  perspective: 1e3,
  flipHorizontal: false,
  flipVertical: true,
  clickable: true,
  onFlipEnd: function () {},
  onFlipStart: function () {},
  alignHeight: false,
  alignWidth: false,
  useNativeDriver: true,
};

var k = function (t) {
  var n = t.style,
    s = t.onLayout,
    l = t.children;
  return React.default.createElement(
    ReactNative.View,
    {
      style: [y.face, n],
      onLayout: s,
    },
    l
  );
};

exports.Face = k;

var b = function (t) {
  var n = t.flipHorizontal,
    s = undefined !== n && n,
    l = t.flipVertical,
    o = undefined === l || l,
    u = t.perspective,
    h = undefined === u ? 1e3 : u,
    f = t.style,
    v = t.onLayout,
    w = t.children,
    k = [];

  if (s) {
    k.push({
      scaleX: -1,
    });
    if ('android' === ReactNative.Platform.OS)
      k.push({
        perspective: h,
      });
  }

  if (o) {
    k.push({
      scaleY: -1,
    });
    if ('android' === ReactNative.Platform.OS)
      k.push({
        perspective: h,
      });
  }

  return React.default.createElement(
    ReactNative.View,
    {
      style: [
        y.back,
        f,
        {
          transform: k,
        },
      ],
      onLayout: v,
    },
    w
  );
};

exports.Back = b;
