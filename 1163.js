var module11 = require('./11'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = w(n);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, f, c);
        else o[f] = t[f];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module900 = require('./900'),
  module901 = require('./901'),
  module961 = require('./961'),
  module1132 = require('./1132'),
  module1134 = require('./1134'),
  module1164 = require('./1164'),
  y = ['focusHook'];

function w(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (w = function (t) {
    return t ? l : n;
  })(t);
}

var O = module901.default.createAnimatedComponent(ReactNative.ScrollView),
  S = React.forwardRef(function (t, u) {
    var f = t.focusHook,
      c = undefined === f ? React.useEffect : f,
      w = module53.default(t, y),
      S = React.useRef(null),
      j = module1134.useScrollableInternal('ScrollView'),
      E = j.scrollableRef,
      R = j.handleScrollEvent,
      h = j.handleSettingScrollable,
      M = module1134.useBottomSheetInternal(),
      P = M.enabled,
      _ = M.rootTapGestureRef,
      k = M.decelerationRate;
    React.useImperativeHandle(u, function () {
      return E.current.getNode();
    });
    c(h);
    return React.default.createElement(
      module1132.default,
      {
        nativeGestureRef: S,
        gestureType: 'CONTENT',
        style: module1164.styles.container,
      },
      React.default.createElement(
        module961.NativeViewGestureHandler,
        {
          ref: S,
          enabled: P,
          waitFor: _,
        },
        React.default.createElement(
          O,
          module11.default({}, w, {
            ref: E,
            overScrollMode: 'never',
            bounces: false,
            decelerationRate: k,
            scrollEventThrottle: 1,
            onScrollBeginDrag: R,
          })
        )
      )
    );
  }),
  j = React.memo(S, module900.default);
exports.default = j;
