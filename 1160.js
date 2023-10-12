var module11 = require('./11'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = O(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, f, c);
        else l[f] = t[f];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module900 = require('./900'),
  module901 = require('./901'),
  module961 = require('./961'),
  module1132 = require('./1132'),
  module1134 = require('./1134'),
  module1161 = require('./1161'),
  y = ['focusHook'];

function O(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (O = function (t) {
    return t ? o : n;
  })(t);
}

var S = module901.default.createAnimatedComponent(ReactNative.SectionList),
  w = React.forwardRef(function (t, u) {
    var f = t.focusHook,
      c = undefined === f ? React.useEffect : f,
      O = module53.default(t, y),
      w = React.useRef(null),
      j = module1134.useScrollableInternal('SectionList'),
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
        nativeGestureRef: w,
        gestureType: 'CONTENT',
        style: module1161.styles.container,
      },
      React.default.createElement(
        module961.NativeViewGestureHandler,
        {
          ref: w,
          enabled: P,
          waitFor: _,
        },
        React.default.createElement(
          S,
          module11.default({}, O, {
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
  j = React.memo(w, module900.default);
exports.default = j;
