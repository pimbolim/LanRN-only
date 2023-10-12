var module47 = require('./47'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  n = ['source', 'defaultSource', 'tintColor', 'onLoadStart', 'onProgress', 'onLoad', 'onError', 'onLoadEnd', 'style', 'fallback', 'children', 'resizeMode', 'forwardedRef'];

function l(t, o) {
  var n = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (o)
      l = l.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      });
    n.push.apply(n, l);
  }

  return n;
}

function c(o) {
  for (var n = 1; n < arguments.length; n++) {
    var c = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      l(Object(c), true).forEach(function (n) {
        module47(o, n, c[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(o, Object.getOwnPropertyDescriptors(c));
    else
      l(Object(c)).forEach(function (t) {
        Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(c, t));
      });
  }

  return o;
}

var module11 = require('./11'),
  React = require('react'),
  ReactNative = require('react-native');

function v(t) {
  return t && 'object' == typeof t && 'default' in t
    ? t
    : {
        default: t,
      };
}

var y = v(module11),
  h = v(React),
  b = function (t) {
    if (!t) return null;

    if ('android' === ReactNative.Platform.OS) {
      var o = ReactNative.Image.resolveAssetSource(t);
      return o ? o.uri : null;
    }

    return t;
  };

var p = React.memo(function (t) {
    var l = t.source,
      s = t.defaultSource,
      u = t.tintColor,
      v = t.onLoadStart,
      p = t.onProgress,
      w = t.onLoad,
      O = t.onError,
      E = t.onLoadEnd,
      F = t.style,
      L = t.fallback,
      P = t.children,
      j = t.resizeMode,
      C = undefined === j ? 'cover' : j,
      M = t.forwardedRef,
      D = module53(t, n);

    if (L) {
      var V = c({}, l);
      delete V.cache;
      var k = ReactNative.Image.resolveAssetSource(V);
      return h.default.createElement(
        ReactNative.View,
        {
          style: [S.imageContainer, F],
          ref: M,
        },
        h.default.createElement(
          ReactNative.Image,
          y.default({}, D, {
            style: ReactNative.StyleSheet.absoluteFill,
            source: k,
            defaultSource: s,
            onLoadStart: v,
            onProgress: p,
            onLoad: w,
            onError: O,
            onLoadEnd: E,
            resizeMode: C,
          })
        ),
        P
      );
    }

    var z = ReactNative.Image.resolveAssetSource(l),
      N = b(s);
    return h.default.createElement(
      ReactNative.View,
      {
        style: [S.imageContainer, F],
        ref: M,
      },
      h.default.createElement(
        I,
        y.default({}, D, {
          tintColor: u,
          style: ReactNative.StyleSheet.absoluteFill,
          source: z,
          defaultSource: N,
          onFastImageLoadStart: v,
          onFastImageProgress: p,
          onFastImageLoad: w,
          onFastImageError: O,
          onFastImageLoadEnd: E,
          resizeMode: C,
        })
      ),
      P
    );
  }),
  w = React.forwardRef(function (t, o) {
    return h.default.createElement(
      p,
      y.default(
        {
          forwardedRef: o,
        },
        t
      )
    );
  });
w.displayName = 'FastImage';
var O = w;
O.resizeMode = {
  contain: 'contain',
  cover: 'cover',
  stretch: 'stretch',
  center: 'center',
};
O.cacheControl = {
  immutable: 'immutable',
  web: 'web',
  cacheOnly: 'cacheOnly',
};
O.priority = {
  low: 'low',
  normal: 'normal',
  high: 'high',
};

O.preload = function (t) {
  return ReactNative.NativeModules.FastImageView.preload(t);
};

O.clearMemoryCache = function () {
  return ReactNative.NativeModules.FastImageView.clearMemoryCache();
};

O.clearDiskCache = function () {
  return ReactNative.NativeModules.FastImageView.clearDiskCache();
};

var S = ReactNative.StyleSheet.create({
    imageContainer: {
      overflow: 'hidden',
    },
  }),
  I = ReactNative.requireNativeComponent('FastImageView', O, {
    nativeOnly: {
      onFastImageLoadStart: true,
      onFastImageProgress: true,
      onFastImageLoad: true,
      onFastImageError: true,
      onFastImageLoadEnd: true,
    },
  });
module.exports = O;
