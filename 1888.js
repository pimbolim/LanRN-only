var module24 = require('./24'),
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
    var o = y(n);
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
  PropTypes = require('prop-types'),
  ReactNative = require('react-native');

function y(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (y = function (t) {
    return t ? o : n;
  })(t);
}

function h(t) {
  var n = b();
  return function () {
    var o,
      l = module34.default(t);

    if (n) {
      var c = module34.default(this).constructor;
      o = Reflect.construct(l, arguments, c);
    } else o = l.apply(this, arguments);

    return module37.default(this, o);
  };
}

function b() {
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

var v = (function (t) {
  module35.default(f, t);
  var u = h(f);

  function f() {
    module24.default(this, f);
    return u.apply(this, arguments);
  }

  module25.default(f, [
    {
      key: '_renderChildren',
      value: function (t) {
        return React.default.Children.map(t.children, function (n) {
          return React.default.cloneElement(
            n,
            t.borderStyle && 'ScrollView' !== n.type.displayName
              ? {
                  borderStyle: t.borderStyle,
                }
              : {}
          );
        });
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props.borderStyle,
          n = (t && t.borderWidth) || 0,
          o = n,
          l = (t && t.borderColor) || '#000';
        return React.default.createElement(
          ReactNative.View,
          {
            style: [
              this.props.style,
              {
                borderLeftWidth: n,
                borderBottomWidth: o,
                borderColor: l,
              },
            ],
          },
          this._renderChildren(this.props)
        );
      },
    },
  ]);
  return f;
})(React.Component);

exports.Table = v;
v.propTypes = {
  style: PropTypes.default.object,
  borderStyle: PropTypes.default.object,
};

var j = (function (t) {
  module35.default(f, t);
  var u = h(f);

  function f() {
    module24.default(this, f);
    return u.apply(this, arguments);
  }

  module25.default(f, [
    {
      key: '_renderChildren',
      value: function (t) {
        return React.default.Children.map(t.children, function (n) {
          return React.default.cloneElement(
            n,
            t.borderStyle
              ? {
                  borderStyle: t.borderStyle,
                }
              : {}
          );
        });
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props.style;
        return React.default.createElement(
          ReactNative.View,
          {
            style: t,
          },
          this._renderChildren(this.props)
        );
      },
    },
  ]);
  return f;
})(React.Component);

exports.TableWrapper = j;
j.propTypes = {
  style: PropTypes.default.object,
};
