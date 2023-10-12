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
    var l = j(n);
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
  x = ['data', 'style', 'width', 'heightArr', 'flex', 'textStyle'],
  b = ['data', 'style', 'widthArr', 'heightArr', 'flexArr', 'textStyle'];

function j(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (j = function (t) {
    return t ? l : n;
  })(t);
}

function O(t) {
  var n = S();
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

function S() {
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

var A = (function (t) {
  module35.default(s, t);
  var c = O(s);

  function s() {
    module24.default(this, s);
    return c.apply(this, arguments);
  }

  module25.default(s, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          u = t.data,
          f = t.style,
          o = t.width,
          c = t.heightArr,
          s = t.flex,
          p = t.textStyle,
          w = module53.default(t, x);
        return u
          ? React.default.createElement(
              ReactNative.View,
              {
                style: [
                  o
                    ? {
                        width: o,
                      }
                    : {
                        flex: 1,
                      },
                  s && {
                    flex: s,
                  },
                  f,
                ],
              },
              u.map(function (t, l) {
                var u = c && c[l];
                return React.default.createElement(
                  module1885.Cell,
                  module11.default(
                    {
                      key: l,
                      data: t,
                      width: o,
                      height: u,
                      textStyle: p,
                    },
                    w
                  )
                );
              })
            )
          : null;
      },
    },
  ]);
  return s;
})(React.Component);

exports.Col = A;
A.propTypes = {
  width: PropTypes.default.number,
  style: PropTypes.default.object,
  textStyle: PropTypes.default.object,
};

var k = (function (t) {
  module35.default(s, t);
  var c = O(s);

  function s() {
    module24.default(this, s);
    return c.apply(this, arguments);
  }

  module25.default(s, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          u = t.data,
          f = t.style,
          o = t.widthArr,
          c = t.heightArr,
          s = t.flexArr,
          p = t.textStyle,
          v = module53.default(t, b),
          x = o ? module1886.sum(o) : 0;
        return u
          ? React.default.createElement(
              ReactNative.View,
              {
                style: [
                  C.cols,
                  x && {
                    width: x,
                  },
                ],
              },
              u.map(function (t, l) {
                var u = s && s[l],
                  h = o && o[l];
                return React.default.createElement(
                  A,
                  module11.default(
                    {
                      key: l,
                      data: t,
                      width: h,
                      heightArr: c,
                      flex: u,
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
  return s;
})(React.Component);

exports.Cols = k;
k.propTypes = {
  style: PropTypes.default.object,
  textStyle: PropTypes.default.object,
};
var C = ReactNative.StyleSheet.create({
  cols: {
    flexDirection: 'row',
  },
});
