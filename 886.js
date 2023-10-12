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
    var u = h(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var c = f ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, l, c);
        else o[l] = t[l];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module884 = require('./884');

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (h = function (t) {
    return t ? u : n;
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

var O = (function (t) {
  module35.default(E, t);

  var h = E,
    O = v(),
    _ = function () {
      var t,
        n = module34.default(h);

      if (O) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function E() {
    module24.default(this, E);
    return _.apply(this, arguments);
  }

  module25.default(E, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          u = t.source,
          o = t.style,
          f = t.imageProps;

        if (null != u) {
          var l = 'string' == typeof u;
          if (!o.width) o.width = module884.DEFAULT_IMAGE_DIMENSIONS;
          if (!o.height) o.height = module884.DEFAULT_IMAGE_DIMENSIONS;
          return React.default.createElement(
            ReactNative.Image,
            module11.default(
              {
                style: o,
                source: l
                  ? {
                      uri: u,
                    }
                  : u,
              },
              f
            )
          );
        }

        return null;
      },
    },
  ]);
  return E;
})(React.Component);

exports.default = O;
O.defaultProps = {
  style: {
    padding: 8,
    width: module884.DEFAULT_IMAGE_DIMENSIONS,
    height: module884.DEFAULT_IMAGE_DIMENSIONS,
    alignSelf: 'center',
  },
  source: null,
  imageProps: {},
};
