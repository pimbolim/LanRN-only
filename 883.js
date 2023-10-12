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
    var o = D(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = s ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, u, c);
        else l[u] = t[u];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module884 = require('./884'),
  module885 = require('./885'),
  module886 = require('./886'),
  module887 = require('./887');

function D(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (D = function (t) {
    return t ? o : n;
  })(t);
}

function T() {
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

var C = (function (t) {
  module35.default(E, t);

  var D = E,
    C = T(),
    I = function () {
      var t,
        n = module34.default(D);

      if (C) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function E(t) {
    var n;
    module24.default(this, E);
    (n = I.call(this, t)).mainView = React.default.createRef();

    n.getPanResponder = function () {
      return ReactNative.PanResponder.create({
        onStartShouldSetPanResponder: function () {
          return n._onShouldStartPan();
        },
        onMoveShouldSetPanResponder: function (t, o) {
          return n._onShouldMovePan(t, o);
        },
        onPanResponderMove: function (t, o) {
          return n._onMovePan(t, o);
        },
        onPanResponderRelease: function (t, o) {
          return n._onDonePan(t, o);
        },
        onPanResponderTerminate: function (t, o) {
          return n._onDonePan(t, o);
        },
      });
    };

    n._onShouldStartPan = function () {
      return n.props.panResponderEnabled;
    };

    n._onShouldMovePan = function (t, o) {
      var l = n.props,
        s = l.sensitivity,
        u = l.panResponderEnabled,
        c = Math.abs(o.dx),
        p = Math.abs(o.dy);
      return c < s && p >= s && u;
    };

    n._onMovePan = function (t, o) {
      if (o.dy < 0)
        n.setState({
          topValue: o.dy,
        });
    };

    n._onDonePan = function (t, o) {
      var l = n.getStartDelta(n.state.height, n.props.startDelta) / 5;
      if (o.dy < l) n.closeAction(module884.ACTION.pan);
    };

    n.alertWithType = function () {
      var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : '',
        o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : '',
        l = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : '',
        s = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : {},
        u = arguments.length > 4 && undefined !== arguments[4] ? arguments[4] : 1,
        c = n.props,
        p = c.closeInterval,
        f = c.replaceEnabled,
        S = p;
      if ('number' == typeof u && u > 1) S = u;
      var y = {
        type: t,
        title: n.getStringValue(o),
        message: n.getStringValue(l),
        payload: s,
        interval: S,
      };

      if (
        (n.state.queue.find(function (t) {
          var n = t.type === y.type,
            o = t.title === y.title,
            l = t.message === y.message;
          return n && o && l;
        }) || n.state.queue.push(y),
        !n.animationLock)
      ) {
        var v = n.state.isOpen;

        if (!f && v) {
          n.alertData = y;
          n.setState({
            isOpen: true,
          });
          return void (S > 0 && n.closeAutomatic(S));
        }

        if (v)
          n.closeAction(module884.ACTION.programmatic, function () {
            n.open(y, S);
          });
        else n.open(y, S);
      }
    };

    n.open = function (t, o) {
      n.alertData = t;
      n.setState({
        isOpen: true,
      });
      n.animate(1, 450, function () {
        n.animationLock = false;
        if (o > 0) n.closeAutomatic(o);
      });
    };

    n.closeAction = function () {
      var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : module884.ACTION.programmatic,
        o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : function () {};
      n.clearCloseTimeoutID();
      n.close(t, o);
    };

    n.closeAutomatic = function (t) {
      n.clearCloseTimeoutID();
      n.closeTimeoutID = setTimeout(function () {
        n.close(module884.ACTION.automatic);
      }, t);
    };

    n.close = function (t) {
      var o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : function () {};
      n.animate(0, 250, function () {
        var l = n.props,
          s = l.onClose,
          u = l.updateStatusBar,
          c = l.onCancel,
          p = l.onTap;
        n.updateStatusBar(u, false);
        n.alertData.action = t;
        if (t === module884.ACTION.cancel) c(n.alertData);
        else {
          if (t === module884.ACTION.tap) p(n.alertData);
          s(n.alertData);
        }
        n.setState(
          {
            isOpen: false,
            topValue: 0,
            height: 0,
          },
          function () {
            setImmediate(function () {
              if ((n.state.queue.shift(), (n.animationLock = false), n.state.queue.length)) {
                var t = n.state.queue[0],
                  l = t.type,
                  s = t.title,
                  u = t.message,
                  c = t.payload,
                  p = t.interval;
                n.alertWithType(l, s, u, c, p);
              } else o();
            });
          }
        );
      });
    };

    n.updateStatusBar = function () {
      var t = !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0],
        o = arguments.length > 1 && undefined !== arguments[1] && arguments[1];

      if (t) {
        if (module884.IS_ANDROID) {
          var l = n.props,
            s = l.inactiveStatusBarBackgroundColor,
            u = l.activeStatusBarBackgroundColor,
            c = l.translucent;

          if (o) {
            var p = u,
              S = n.alertData.type;
            if (S !== module884.TYPE.custom) p = n.getBackgroundColorForType(S);
            ReactNative.StatusBar.setBackgroundColor(p, true);
            ReactNative.StatusBar.setTranslucent(c);
          } else ReactNative.StatusBar.setBackgroundColor(s, true);
        }

        var y = n.props,
          v = y.inactiveStatusBarStyle,
          D = y.activeStatusBarStyle;
        if (o) ReactNative.StatusBar.setBarStyle(D, true);
        else ReactNative.StatusBar.setBarStyle(v, true);
      }
    };

    n.clearCloseTimeoutID = function () {
      if (n.closeTimeoutID) clearTimeout(n.closeTimeoutID);
    };

    n.animate = function (t) {
      var o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 450,
        l = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : function () {},
        s = n.props,
        u = s.useAnimationLock,
        c = s.useNativeDriver;
      if (u) n.animationLock = true;
      ReactNative.Animated.timing(n.state.animationValue, {
        toValue: t,
        duration: o,
        easing: ReactNative.Easing.out(ReactNative.Easing.ease),
        useNativeDriver: c,
      }).start(l);
    };

    n.getStartDelta = function (t, n) {
      var o = 0 - t,
        l = module884.HEIGHT + t;
      return n < 0 && n !== o ? o : n > l ? l : n;
    };

    n.getEndDelta = function (t, n) {
      var o = module884.HEIGHT;
      return n < 0 ? 0 : n >= o ? o - t : n;
    };

    n.getOutputRange = function (t, o, l) {
      return t ? [n.getStartDelta(t, o), n.getEndDelta(t, l)] : [o, l];
    };

    n._onLayoutEvent = function (t) {
      var o = t.nativeEvent.layout.height;

      if (o > n.state.height) {
        var l = n.state,
          s = l.startDelta,
          u = l.endDelta,
          c = n.getStartDelta(o, s),
          p = n.getEndDelta(o, u);
        if (!(s === c && u === p))
          n.setState({
            height: o,
            startDelta: c,
            endDelta: p,
          });
      }
    };

    n.state = {
      animationValue: new ReactNative.Animated.Value(0),
      isOpen: false,
      topValue: 0,
      height: 0,
      queue: [],
      startDelta: t.startDelta,
      endDelta: t.endDelta,
    };
    n.alertData = {
      type: '',
      message: '',
      title: '',
      payload: {},
      interval: t.closeInterval,
    };
    n.animationLock = false;
    n.panResponder = n.getPanResponder();
    return n;
  }

  module25.default(E, [
    {
      key: 'componentWillUnmount',
      value: function () {
        if (this.state.isOpen) this.closeAction(module884.ACTION.programmatic);
      },
    },
    {
      key: 'getStringValue',
      value: function (t) {
        try {
          return 'string' == typeof t ? t : Array.isArray(t) ? t.join(' ') : 'object' == typeof t ? '' + JSON.stringify(t) : '' + t;
        } catch (t) {
          return t.toString();
        }
      },
    },
    {
      key: 'getStyleForType',
      value: function (t) {
        var n = this.props.defaultContainer;

        switch (t) {
          case module884.TYPE.info:
            return [
              ReactNative.StyleSheet.flatten(n),
              {
                backgroundColor: this.props.infoColor,
              },
            ];

          case module884.TYPE.warn:
            return [
              ReactNative.StyleSheet.flatten(n),
              {
                backgroundColor: this.props.warnColor,
              },
            ];

          case module884.TYPE.error:
            return [
              ReactNative.StyleSheet.flatten(n),
              {
                backgroundColor: this.props.errorColor,
              },
            ];

          case module884.TYPE.success:
            return [
              ReactNative.StyleSheet.flatten(n),
              {
                backgroundColor: this.props.successColor,
              },
            ];

          default:
            return [ReactNative.StyleSheet.flatten(n), ReactNative.StyleSheet.flatten(this.props.containerStyle)];
        }
      },
    },
    {
      key: 'getSourceForType',
      value: function (t) {
        switch (t) {
          case module884.TYPE.info:
            return this.props.infoImageSrc;

          case module884.TYPE.warn:
            return this.props.warnImageSrc;

          case module884.TYPE.error:
            return this.props.errorImageSrc;

          case module884.TYPE.success:
            return this.props.successImageSrc;

          default:
            return this.props.imageSrc;
        }
      },
    },
    {
      key: 'getBackgroundColorForType',
      value: function (t) {
        switch (t) {
          case module884.TYPE.info:
            return this.props.infoColor;

          case module884.TYPE.warn:
            return this.props.warnColor;

          case module884.TYPE.error:
            return this.props.errorColor;

          case module884.TYPE.success:
            return this.props.successColor;

          default:
            return this.props.containerStyle.backgroundColor;
        }
      },
    },
    {
      key: '_renderImage',
      value: function (t) {
        return this.props.renderImage
          ? this.props.renderImage(this.props, this.alertData)
          : React.default.createElement(module886.default, {
              style: ReactNative.StyleSheet.flatten(this.props.imageStyle),
              source: t,
            });
      },
    },
    {
      key: '_renderTitle',
      value: function () {
        if (this.props.renderTitle) return this.props.renderTitle(this.props, this.alertData);
        var t = this.props,
          o = t.titleTextProps,
          l = t.titleStyle,
          s = t.titleNumOfLines;
        return React.default.createElement(
          module885.default,
          module11.default({}, o, {
            style: ReactNative.StyleSheet.flatten(l),
            numberOfLines: s,
            text: this.alertData.title,
          })
        );
      },
    },
    {
      key: '_renderMessage',
      value: function () {
        var t = this.props,
          o = t.messageTextProps,
          l = t.messageStyle,
          s = t.messageNumOfLines,
          u = t.renderMessage;
        return u
          ? u(this.props, this.alertData)
          : React.default.createElement(
              module885.default,
              module11.default({}, o, {
                style: ReactNative.StyleSheet.flatten(l),
                numberOfLines: s,
                text: this.alertData.message,
              })
            );
      },
    },
    {
      key: '_renderCancel',
      value: function () {
        var t = this;
        if (!(arguments.length > 0 && undefined !== arguments[0] && arguments[0])) return null;
        if (this.props.renderCancel) return this.props.renderCancel(this.props, this.alertData);
        var n = this.props,
          o = n.cancelBtnImageSrc,
          l = n.cancelBtnImageStyle;
        return React.default.createElement(module887.default, {
          imageStyle: l,
          imageSrc: o,
          onPress: function () {
            return t.closeAction(module884.ACTION.cancel);
          },
        });
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this;
        if (!this.state.isOpen) return null;
        var o = this.props,
          l = o.elevation,
          s = o.zIndex,
          u = o.wrapperStyle,
          c = o.tapToCloseEnabled,
          S = o.accessibilityLabel,
          y = o.testID,
          v = o.accessible,
          D = o.contentContainerStyle,
          T = o.defaultTextContainer,
          C = o.translucent,
          I = o.updateStatusBar,
          E = o.showCancel,
          O = this.state,
          P = O.animationValue,
          B = O.topValue,
          b = O.height,
          A = O.startDelta,
          _ = O.endDelta,
          k = this.alertData,
          w = k.type,
          N = k.payload,
          R = ReactNative.StyleSheet.flatten(this.getStyleForType(w)),
          M = this.getSourceForType(w);
        if (N && N.hasOwnProperty('source') && N.source && 'object' != typeof N.source) M = N.source;
        if (module884.IS_ANDROID && C)
          R = ReactNative.StyleSheet.flatten([
            R,
            {
              paddingTop: ReactNative.StatusBar.currentHeight,
            },
          ]);
        this.updateStatusBar(I, true);
        var L = this.getOutputRange(b, A, _),
          x = {
            transform: [
              {
                translateY: P.interpolate({
                  inputRange: [0, 1],
                  outputRange: L,
                }),
              },
            ],
            position: 'absolute',
            top: B,
            left: 0,
            right: 0,
            elevation: l,
            zIndex: s || 1e3,
          },
          V = module884.IS_IOS_BELOW_11 || module884.IS_ANDROID ? ReactNative.View : ReactNative.SafeAreaView,
          Y = !c || E ? 1 : 0.95;
        return React.default.createElement(
          ReactNative.Animated.View,
          module11.default(
            {
              ref: this.mainView,
            },
            this.panResponder.panHandlers,
            {
              style: [x, u],
            }
          ),
          React.default.createElement(
            ReactNative.TouchableOpacity,
            {
              activeOpacity: Y,
              onPress: function () {
                return c ? t.closeAction(module884.ACTION.tap) : null;
              },
              disabled: !c,
              testID: y,
              onLayout: this._onLayoutEvent,
              accessibilityLabel: S,
              accessible: v,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: R,
              },
              React.default.createElement(
                V,
                {
                  style: ReactNative.StyleSheet.flatten(D),
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: ReactNative.StyleSheet.flatten(T),
                  },
                  this._renderTitle(),
                  this._renderMessage()
                ),
                this._renderImage(M)
              ),
              this._renderCancel(E)
            )
          )
        );
      },
    },
  ]);
  return E;
})(React.PureComponent);

exports.default = C;
C.defaultProps = {
  onClose: function () {},
  onCancel: function () {},
  closeInterval: 4e3,
  startDelta: -120,
  endDelta: 0,
  titleNumOfLines: 1,
  messageNumOfLines: 3,
  imageSrc: null,
  infoColor: '#2B73B6',
  warnColor: '#cd853f',
  errorColor: '#cc3232',
  successColor: '#32A54A',
  showCancel: false,
  tapToCloseEnabled: true,
  panResponderEnabled: true,
  replaceEnabled: true,
  wrapperStyle: null,
  containerStyle: {
    padding: 16,
    flexDirection: 'row',
    backgroundColor: '#202020',
  },
  contentContainerStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  titleStyle: {
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
  },
  messageStyle: {
    fontSize: 14,
    textAlign: 'left',
    fontWeight: 'normal',
    color: 'white',
    backgroundColor: 'transparent',
  },
  imageStyle: {
    padding: 8,
    width: module884.DEFAULT_IMAGE_DIMENSIONS,
    height: module884.DEFAULT_IMAGE_DIMENSIONS,
    alignSelf: 'center',
  },
  cancelBtnImageStyle: {
    padding: 8,
    width: module884.DEFAULT_IMAGE_DIMENSIONS,
    height: module884.DEFAULT_IMAGE_DIMENSIONS,
    alignSelf: 'center',
  },
  defaultContainer: {
    padding: 8,
    flexDirection: 'row',
  },
  defaultTextContainer: {
    flex: 1,
    padding: 8,
  },
  translucent: false,
  activeStatusBarStyle: 'light-content',
  activeStatusBarBackgroundColor: module884.getDefaultStatusBarBackgroundColor(),
  inactiveStatusBarStyle: module884.getDefaultStatusBarStyle(),
  inactiveStatusBarBackgroundColor: module884.getDefaultStatusBarBackgroundColor(),
  updateStatusBar: true,
  isInteraction: true,
  useNativeDriver: true,
  elevation: 1,
  zIndex: null,
  sensitivity: 20,
  renderImage: undefined,
  renderCancel: undefined,
  renderTitle: undefined,
  renderMessage: undefined,
  testID: undefined,
  accessibilityLabel: undefined,
  accessible: false,
  titleTextProps: undefined,
  messageTextProps: undefined,
  useAnimationLock: true,
  onTap: function () {},
};
