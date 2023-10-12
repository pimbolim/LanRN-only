var module11 = require('./11'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = O(n);
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
  module1158 = require('./1158'),
  y = ['focusHook'];

function O(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (O = function (t) {
    return t ? l : n;
  })(t);
}

var w = module901.default.createAnimatedComponent(ReactNative.FlatList),
  j = React.forwardRef(function (t, u) {
    var f = t.focusHook,
      c = undefined === f ? React.useEffect : f,
      O = module53.default(t, y),
      j = React.useRef(null),
      E = module1134.useScrollableInternal('FlatList'),
      R = E.scrollableRef,
      S = E.handleScrollEvent,
      h = E.handleSettingScrollable,
      M = module1134.useBottomSheetInternal(),
      P = M.enabled,
      _ = M.rootTapGestureRef,
      k = M.decelerationRate;
    React.useImperativeHandle(u, function () {
      return R.current.getNode();
    });
    c(h);
    return React.default.createElement(
      module1132.default,
      {
        nativeGestureRef: j,
        gestureType: 'CONTENT',
        style: module1158.styles.container,
      },
      React.default.createElement(
        module961.NativeViewGestureHandler,
        {
          ref: j,
          enabled: P,
          waitFor: _,
        },
        React.default.createElement(
          w,
          module11.default({}, O, {
            ref: R,
            overScrollMode: 'never',
            bounces: false,
            decelerationRate: k,
            scrollEventThrottle: 1,
            onScrollBeginDrag: S,
          })
        )
      )
    );
  }),
  E = React.memo(j, module900.default);
exports.default = E;
