var module11 = require('./11'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
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
  module1340 = require('./1340'),
  h = ['isVisible'],
  b = ['isVisible', 'children', 'style'];

function O(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (O = function (t) {
    return t ? l : n;
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

var P = (function (t) {
  module35.default(E, t);

  var O = E,
    P = w(),
    j = function () {
      var t,
        n = module34.default(O);

      if (P) {
        var l = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function E() {
    module24.default(this, E);
    return j.apply(this, arguments);
  }

  module25.default(E, [
    {
      key: 'render',
      value: function () {
        if (null != module1340.screensEnabled && module1340.screensEnabled() && 'web' !== ReactNative.Platform.OS) {
          var t = this.props,
            o = t.isVisible,
            u = module53.default(t, h);
          return module1340.shouldUseActivityState ? <module1340.Screen /> : <module1340.Screen />;
        }

        var f = this.props,
          c = f.isVisible,
          s = f.children,
          O = f.style,
          w = module53.default(f, b);
        return (
          <ReactNative.View>
            <ReactNative.View style={c ? S.attached : S.detached}>{s}</ReactNative.View>
          </ReactNative.View>
        );
      },
    },
  ]);
  return E;
})(React.Component);

exports.default = P;
var S = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
  },
  attached: {
    flex: 1,
  },
  detached: {
    flex: 1,
    top: 3e4,
  },
});
