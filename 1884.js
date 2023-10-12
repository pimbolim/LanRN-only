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
    var l = S(n);
    if (l && l.has(t)) return l.get(t);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var o in t)
      if ('default' !== o && Object.prototype.hasOwnProperty.call(t, o)) {
        var c = f ? Object.getOwnPropertyDescriptor(t, o) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, o, c);
        else u[o] = t[o];
      }

    u.default = t;
    if (l) l.set(t, u);
    return u;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module1885 = require('./1885'),
  module1886 = require('./1886'),
  x = ['data', 'style', 'widthArr', 'height', 'flexArr', 'textStyle', 'cellTextStyle'],
  A = ['data', 'style', 'widthArr', 'heightArr', 'flexArr', 'textStyle'];

function S(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (S = function (t) {
    return t ? l : n;
  })(t);
}

function b(t) {
  var n = j();
  return function () {
    var l,
      u = module34.default(t);

    if (n) {
      var f = module34.default(this).constructor;
      l = Reflect.construct(u, arguments, f);
    } else l = u.apply(this, arguments);

    return module37.default(this, l);
  };
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

var O = (function (t) {
  module35.default(y, t);
  var c = b(y);

  function y() {
    module24.default(this, y);
    return c.apply(this, arguments);
  }

  module25.default(y, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          u = t.data,
          f = t.style,
          o = t.widthArr,
          c = t.height,
          y = t.flexArr,
          p = t.textStyle,
          A = t.cellTextStyle,
          S = module53.default(t, x),
          b = o ? module1886.sum(o) : 0;
        return u
          ? React.default.createElement(
              ReactNative.View,
              {
                style: [
                  c && {
                    height: c,
                  },
                  b && {
                    width: b,
                  },
                  k.row,
                  f,
                ],
              },
              u.map(function (t, l) {
                var u = y && y[l],
                  f = o && o[l];
                return React.default.createElement(
                  module1885.Cell,
                  module11.default(
                    {
                      key: l,
                      data: t,
                      width: f,
                      height: c,
                      flex: u,
                      textStyle: [A && A(t), p],
                    },
                    S
                  )
                );
              })
            )
          : null;
      },
    },
  ]);
  return y;
})(React.Component);

exports.Row = O;
O.propTypes = {
  style: PropTypes.default.object,
  textStyle: PropTypes.default.object,
};

var R = (function (t) {
  module35.default(y, t);
  var c = b(y);

  function y() {
    module24.default(this, y);
    return c.apply(this, arguments);
  }

  module25.default(y, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          u = t.data,
          f = t.style,
          o = t.widthArr,
          c = t.heightArr,
          y = t.flexArr,
          p = t.textStyle,
          v = module53.default(t, A),
          x = y ? module1886.sum(y) : 0,
          S = o ? module1886.sum(o) : 0;
        return u
          ? React.default.createElement(
              ReactNative.View,
              {
                style: [
                  x && {
                    flex: x,
                  },
                  S && {
                    width: S,
                  },
                ],
              },
              u.map(function (t, l) {
                var u = c && c[l];
                return React.default.createElement(
                  O,
                  module11.default(
                    {
                      key: l,
                      data: t,
                      widthArr: o,
                      height: u,
                      flexArr: y,
                      style: f,
                      textStyle: p,
                    },
                    v
                  )
                );
              })
            )
          : null;
      },
    },
  ]);
  return y;
})(React.Component);

exports.Rows = R;
R.propTypes = {
  style: PropTypes.default.object,
  textStyle: PropTypes.default.object,
};
var k = ReactNative.StyleSheet.create({
  row: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
});
