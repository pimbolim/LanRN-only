var regeneratorRuntime = require('regenerator-runtime'),
  module11 = require('./11'),
  module12 = require('./12'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module47 = require('./47'),
  React = require('react'),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native');

function v() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (o) {
    return false;
  }
}

function T(o, t) {
  var n = Object.keys(o);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(o);
    if (t)
      l = l.filter(function (t) {
        return Object.getOwnPropertyDescriptor(o, t).enumerable;
      });
    n.push.apply(n, l);
  }

  return n;
}

function k(o) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    if (t % 2)
      T(Object(n), true).forEach(function (t) {
        module47.default(o, t, n[t]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(o, Object.getOwnPropertyDescriptors(n));
    else
      T(Object(n)).forEach(function (t) {
        Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(n, t));
      });
  }

  return o;
}

var module1329 = require('./1329').isIphoneX() ? 83 : 49,
  O = ['keyboardWillShow', 'keyboardDidShow', 'keyboardWillHide', 'keyboardDidHide', 'keyboardWillChangeFrame', 'keyboardDidChangeFrame'],
  w = function (o) {
    return 'on' + o[0].toUpperCase() + o.substring(1);
  },
  R = O.reduce(function (o, t) {
    return k(k({}, o), {}, module47.default({}, w(t), PropTypes.default.func));
  }, {});

O.reduce(function (o, t) {
  return k(k({}, o), {}, module47.default({}, w(t), Function));
}, {});
var x = {
  enableOnAndroid: false,
  contentContainerStyle: undefined,
  enableAutomaticScroll: true,
  extraHeight: 75,
  extraScrollHeight: 0,
  enableResetScrollToCoords: true,
  keyboardOpeningTime: 250,
  viewIsInsideTabBar: false,
  refPropName: 'ref',
  extractNativeRef: function (o) {
    var t = !ReactNative.Platform.constants || (0 === ReactNative.Platform.constants.reactNativeVersion.major && ReactNative.Platform.constants.reactNativeVersion.minor < 62);
    return o.getNode && t ? o.getNode() : o;
  },
};

function _(o) {
  var T,
    _,
    H,
    P = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
    C = k(k({}, x), P);

  _ = T = (function (h) {
    module35.default(x, h);

    var T = x,
      k = v(),
      R = function () {
        var o,
          t = module34.default(T);

        if (k) {
          var n = module34.default(this).constructor;
          o = Reflect.construct(t, arguments, n);
        } else o = t.apply(this, arguments);

        return module37.default(this, o);
      };

    function x(o) {
      var n;
      module24.default(this, x);

      (n = R.call(this, o)).getScrollResponder = function () {
        return n._rnkasv_keyboardView && n._rnkasv_keyboardView.getScrollResponder && n._rnkasv_keyboardView.getScrollResponder();
      };

      n.scrollToPosition = function (o, t) {
        var l = !(arguments.length > 2 && undefined !== arguments[2]) || arguments[2],
          s = n.getScrollResponder();
        if (s)
          s.scrollResponderScrollTo
            ? s.scrollResponderScrollTo({
                x: o,
                y: t,
                animated: l,
              })
            : s.scrollTo &&
              s.scrollTo({
                x: o,
                y: t,
                animated: l,
              });
      };

      n.scrollToEnd = function () {
        var o = !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0],
          t = n.getScrollResponder();
        if (t)
          t.scrollResponderScrollToEnd
            ? t.scrollResponderScrollToEnd({
                animated: o,
              })
            : t.scrollToEnd &&
              t.scrollToEnd({
                animated: o,
              });
      };

      n.scrollForExtraHeightOnAndroid = function (o) {
        n.scrollToPosition(0, n.position.y + o, true);
      };

      n.scrollToFocusedInput = function (o, t, l) {
        if (undefined === t) t = n.props.extraHeight || 0;
        if (undefined === l) l = n.props.keyboardOpeningTime || 0;
        setTimeout(function () {
          if (n.mountedComponent) {
            var l = n.getScrollResponder();
            if (l) l.scrollResponderScrollNativeHandleToKeyboard(o, t, true);
          }
        }, l);
      };

      n.scrollIntoView = function (o) {
        var s,
          c,
          u,
          p,
          f,
          b,
          y,
          h,
          S,
          v,
          T = arguments;
        return regeneratorRuntime.default.async(
          function (k) {
            for (;;)
              switch ((k.prev = k.next)) {
                case 0:
                  if (((s = T.length > 1 && undefined !== T[1] ? T[1] : {}), n._rnkasv_keyboardView && o)) {
                    k.next = 3;
                    break;
                  }

                  return k.abrupt('return');

                case 3:
                  k.next = 5;
                  return regeneratorRuntime.default.awrap(Promise.all([n._measureElement(n._rnkasv_keyboardView), n._measureElement(o)]));

                case 5:
                  c = k.sent;
                  u = module12.default(c, 2);
                  p = u[0];
                  f = u[1];
                  b = s.getScrollPosition || n._defaultGetScrollPosition;
                  y = b(p, f, n.position);
                  h = y.x;
                  S = y.y;
                  v = y.animated;
                  n.scrollToPosition(h, S, v);

                case 12:
                case 'end':
                  return k.stop();
              }
          },
          null,
          null,
          null,
          Promise
        );
      };

      n._defaultGetScrollPosition = function (o, t, n) {
        return {
          x: 0,
          y: 0 ** (t.y - o.y + n.y),
          animated: true,
        };
      };

      n._measureElement = function (o) {
        var t = ReactNative.findNodeHandle(o);
        return new Promise(function (o) {
          ReactNative.UIManager.measureInWindow(t, function (t, n, l, s) {
            o({
              x: t,
              y: n,
              width: l,
              height: s,
            });
          });
        });
      };

      n._updateKeyboardSpace = function (o) {
        if (n.props.enableAutomaticScroll) {
          var t = o.endCoordinates.height + n.props.extraScrollHeight;
          if (n.props.viewIsInsideTabBar) t -= module1329;
          n.setState({
            keyboardSpace: t,
          });
          var l = ReactNative.TextInput.State.currentlyFocusedInput
              ? ReactNative.findNodeHandle(ReactNative.TextInput.State.currentlyFocusedInput())
              : ReactNative.TextInput.State.currentlyFocusedField(),
            s = n.getScrollResponder();
          if (!l || !s) return;
          ReactNative.UIManager.viewIsDescendantOf(l, s.getInnerViewNode(), function (s) {
            if (s)
              ReactNative.UIManager.measureInWindow(l, function (s, c, u, p) {
                var f = c + p,
                  b = o.endCoordinates.screenY,
                  y = n.props.extraScrollHeight + n.props.extraHeight;
                if ('ios' === ReactNative.Platform.OS) {
                  if (f > b - y) n._scrollToFocusedInputWithNodeHandle(l);
                } else if (f > b) {
                  t -= f - b;
                  n.setState({
                    keyboardSpace: t,
                  });
                  n.scrollForExtraHeightOnAndroid(y);
                } else if (f > b - y) n.scrollForExtraHeightOnAndroid(y - (b - f));
              });
          });
        }

        if (!(n.props.resetScrollToCoords || n.defaultResetScrollToCoords)) n.defaultResetScrollToCoords = n.position;
      };

      n._resetKeyboardSpace = function () {
        var o = n.props.viewIsInsideTabBar ? module1329 : 0;
        n.setState({
          keyboardSpace: o,
        });
        if (false !== n.props.enableResetScrollToCoords)
          n.props.resetScrollToCoords
            ? n.scrollToPosition(n.props.resetScrollToCoords.x, n.props.resetScrollToCoords.y, true)
            : n.defaultResetScrollToCoords
            ? (n.scrollToPosition(n.defaultResetScrollToCoords.x, n.defaultResetScrollToCoords.y, true), (n.defaultResetScrollToCoords = null))
            : n.scrollToPosition(0, 0, true);
        else n.defaultResetScrollToCoords = null;
      };

      n._scrollToFocusedInputWithNodeHandle = function (o, t, l) {
        if (undefined === t) t = n.props.extraHeight;
        var s = ReactNative.findNodeHandle(o);
        n.scrollToFocusedInput(s, t + n.props.extraScrollHeight, undefined !== l ? l : n.props.keyboardOpeningTime || 0);
      };

      n._handleOnScroll = function (o) {
        n.position = o.nativeEvent.contentOffset;
      };

      n._handleRef = function (o) {
        n._rnkasv_keyboardView = o ? C.extractNativeRef(o) : o;
        if (n.props.innerRef) n.props.innerRef(n._rnkasv_keyboardView);
      };

      n.update = function () {
        var o = ReactNative.TextInput.State.currentlyFocusedInput
            ? ReactNative.findNodeHandle(ReactNative.TextInput.State.currentlyFocusedInput())
            : ReactNative.TextInput.State.currentlyFocusedField(),
          t = n.getScrollResponder();
        if (o && t) n._scrollToFocusedInputWithNodeHandle(o);
      };

      n.keyboardWillShowEvent = undefined;
      n.keyboardWillHideEvent = undefined;
      n.callbacks = {};
      n.position = {
        x: 0,
        y: 0,
      };
      n.defaultResetScrollToCoords = null;
      var c = o.viewIsInsideTabBar ? module1329 : 0;
      n.state = {
        keyboardSpace: c,
      };
      return n;
    }

    module25.default(x, [
      {
        key: 'componentDidMount',
        value: function () {
          var o = this;
          this.mountedComponent = true;

          if ('ios' === ReactNative.Platform.OS) {
            this.keyboardWillShowEvent = ReactNative.Keyboard.addListener('keyboardWillShow', this._updateKeyboardSpace);
            this.keyboardWillHideEvent = ReactNative.Keyboard.addListener('keyboardWillHide', this._resetKeyboardSpace);
          } else if ('android' === ReactNative.Platform.OS && this.props.enableOnAndroid) {
            this.keyboardWillShowEvent = ReactNative.Keyboard.addListener('keyboardDidShow', this._updateKeyboardSpace);
            this.keyboardWillHideEvent = ReactNative.Keyboard.addListener('keyboardDidHide', this._resetKeyboardSpace);
          }

          O.forEach(function (t) {
            var n = w(t);
            if (o.props[n]) o.callbacks[t] = ReactNative.Keyboard.addListener(t, o.props[n]);
          });
        },
      },
      {
        key: 'componentDidUpdate',
        value: function (o) {
          if (this.props.viewIsInsideTabBar !== o.viewIsInsideTabBar) {
            var t = this.props.viewIsInsideTabBar ? module1329 : 0;
            if (this.state.keyboardSpace !== t)
              this.setState({
                keyboardSpace: t,
              });
          }
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.mountedComponent = false;
          if (this.keyboardWillShowEvent) this.keyboardWillShowEvent.remove();
          if (this.keyboardWillHideEvent) this.keyboardWillHideEvent.remove();
          Object.values(this.callbacks).forEach(function (o) {
            return o.remove();
          });
        },
      },
      {
        key: 'render',
        value: function () {
          var t,
            l = this.props,
            s = l.enableOnAndroid,
            c = l.contentContainerStyle,
            u = l.onScroll;
          if ('android' === ReactNative.Platform.OS && s)
            t = [].concat(c).concat({
              paddingBottom: ((c || {}).paddingBottom || 0) + this.state.keyboardSpace,
            });
          var p = module47.default({}, C.refPropName, this._handleRef);
          return React.default.createElement(
            o,
            module11.default(
              {},
              p,
              {
                keyboardDismissMode: 'interactive',
                contentInset: {
                  bottom: this.state.keyboardSpace,
                },
                automaticallyAdjustContentInsets: false,
                showsVerticalScrollIndicator: true,
                scrollEventThrottle: 1,
              },
              this.props,
              {
                contentContainerStyle: t || c,
                keyboardSpace: this.state.keyboardSpace,
                getScrollResponder: this.getScrollResponder,
                scrollToPosition: this.scrollToPosition,
                scrollToEnd: this.scrollToEnd,
                scrollForExtraHeightOnAndroid: this.scrollForExtraHeightOnAndroid,
                scrollToFocusedInput: this.scrollToFocusedInput,
                scrollIntoView: this.scrollIntoView,
                resetKeyboardSpace: this._resetKeyboardSpace,
                handleOnScroll: this._handleOnScroll,
                update: this.update,
                onScroll: ReactNative.Animated.forkEvent(u, this._handleOnScroll),
              }
            )
          );
        },
      },
    ]);
    return x;
  })(React.default.Component);

  T.displayName = 'KeyboardAware' + (((H = o) && (H.displayName || H.name)) || 'Component');
  T.propTypes = k(
    {
      viewIsInsideTabBar: PropTypes.default.bool,
      resetScrollToCoords: PropTypes.default.shape({
        x: PropTypes.default.number.isRequired,
        y: PropTypes.default.number.isRequired,
      }),
      enableResetScrollToCoords: PropTypes.default.bool,
      enableAutomaticScroll: PropTypes.default.bool,
      extraHeight: PropTypes.default.number,
      extraScrollHeight: PropTypes.default.number,
      keyboardOpeningTime: PropTypes.default.number,
      onScroll: PropTypes.default.oneOfType([PropTypes.default.func, PropTypes.default.object]),
      update: PropTypes.default.func,
      contentContainerStyle: PropTypes.default.any,
      enableOnAndroid: PropTypes.default.bool,
      innerRef: PropTypes.default.func,
    },
    R
  );
  T.defaultProps = {
    enableAutomaticScroll: C.enableAutomaticScroll,
    extraHeight: C.extraHeight,
    extraScrollHeight: C.extraScrollHeight,
    enableResetScrollToCoords: C.enableResetScrollToCoords,
    keyboardOpeningTime: C.keyboardOpeningTime,
    viewIsInsideTabBar: C.viewIsInsideTabBar,
    enableOnAndroid: C.enableOnAndroid,
  };
  return _;
}

var H = function (o) {
  return 'object' != typeof o || o.displayName
    ? _(o)
    : function (t) {
        return _(t, o);
      };
};

exports.default = H;
