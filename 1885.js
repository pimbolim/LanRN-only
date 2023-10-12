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
    var l = v(n);
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
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  b = ['data', 'width', 'height', 'flex', 'style', 'textStyle', 'borderStyle'];

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (v = function (t) {
    return t ? l : n;
  })(t);
}

function j() {
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

var x = (function (t) {
  module35.default(w, t);

  var PropTypes = w,
    v = j(),
    x = function () {
      var t,
        n = module34.default(PropTypes);

      if (v) {
        var l = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function w() {
    module24.default(this, w);
    return x.apply(this, arguments);
  }

  module25.default(w, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          o = t.data,
          u = t.width,
          f = t.height,
          c = t.flex,
          p = t.style,
          s = t.textStyle,
          v = t.borderStyle,
          j = module53.default(t, b),
          x = React.default.isValidElement(o)
            ? o
            : React.default.createElement(
                ReactNative.Text,
                module11.default(
                  {
                    style: [s, O.text],
                  },
                  j
                ),
                o
              ),
          w = (v && v.borderWidth) || 0,
          S = w,
          C = (v && v.borderColor) || '#000';
        return React.default.createElement(
          ReactNative.View,
          {
            style: [
              {
                borderTopWidth: w,
                borderRightWidth: S,
                borderColor: C,
              },
              O.cell,
              u && {
                width: u,
              },
              f && {
                height: f,
              },
              c && {
                flex: c,
              },
              !u &&
                !c &&
                !f &&
                !p && {
                  flex: 1,
                },
              p,
            ],
          },
          x
        );
      },
    },
  ]);
  return w;
})(React.Component);

exports.Cell = x;
x.propTypes = {
  style: PropTypes.default.object,
  textStyle: PropTypes.default.object,
  borderStyle: PropTypes.default.object,
};
var O = ReactNative.StyleSheet.create({
  cell: {
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'transparent',
  },
});
