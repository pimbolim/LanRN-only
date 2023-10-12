exports.default = function (t) {
  var u,
    o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
    l = React.forwardRef(function (u, l) {
      var p = Object.keys(u).reduce(function (t, n) {
          var o = O;
          if (o.includes(n)) t[n] = u[n];
          return t;
        }, s({}, o)),
        v = React.useRef(),
        y = React.useRef();
      React.useImperativeHandle(
        l,
        function () {
          var t = y.current;

          if (v.current && t) {
            v.current.handlerTag = t.handlerTag;
            return v.current;
          } else return null;
        },
        [v, y]
      );
      return (
        <module1078.NativeViewGestureHandler>
          <t />
        </module1078.NativeViewGestureHandler>
      );
    });
  l.displayName =
    (null == t ? undefined : t.displayName) || (null == t ? undefined : null == (u = t.render) ? undefined : u.name) || ('string' == typeof t && t) || 'ComponentWrapper';
  return l;
};

var module11 = require('./11'),
  module47 = require('./47'),
  module20 = require('./20'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = l(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var p = c ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (p && (p.get || p.set)) Object.defineProperty(o, f, p);
        else o[f] = t[f];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  module1078 = require('./1078');

function l(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (l = function (t) {
    return t ? u : n;
  })(t);
}

function p(t, n) {
  var u = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    if (n)
      o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    u.push.apply(u, o);
  }

  return u;
}

function s(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      p(Object(o), true).forEach(function (n) {
        module47.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      p(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

var O = [].concat(module20.default(module1078.nativeViewProps), ['onGestureHandlerEvent', 'onGestureHandlerStateChange']);
