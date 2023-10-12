exports.LocalSvg = _;
exports.getUriFromSource = S;
exports.isUriAnAndroidResourceIdentifier = j;
exports.loadAndroidRawResource = L;
exports.loadLocalRawResourceAndroid = A;
exports.loadLocalRawResourceDefault = M;

var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module11 = require('./11'),
  module12 = require('./12'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  regeneratorRuntime = require('regenerator-runtime'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = O(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var s = c ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (s && (s.get || s.set)) Object.defineProperty(u, l, s);
        else u[l] = t[l];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native'),
  module183 = require('./183'),
  module1664 = require('./1664'),
  module1665 = require('./1665'),
  b = ['asset'];

function O(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (O = function (t) {
    return t ? o : n;
  })(t);
}

function k() {
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

var P = (ReactNative.NativeModules.RNSVGRenderableManager || {}).getRawResource;

function S(t) {
  return module183.default(t).uri;
}

function M(t) {
  var n = S(t);
  return module1664.fetchText(n);
}

function j(t) {
  return 'string' == typeof t && t.indexOf('/') <= -1;
}

function L(t) {
  return regeneratorRuntime.default.async(
    function (n) {
      for (;;)
        switch ((n.prev = n.next)) {
          case 0:
            n.prev = 0;
            n.next = 3;
            return regeneratorRuntime.default.awrap(P(t));

          case 3:
            return n.abrupt('return', n.sent);

          case 6:
            n.prev = 6;
            n.t0 = n.catch(0);
            console.error('Error in RawResourceUtils while trying to natively load an Android raw resource: ', n.t0);
            return n.abrupt('return', null);

          case 10:
          case 'end':
            return n.stop();
        }
    },
    null,
    null,
    [[0, 6]],
    Promise
  );
}

function A(t) {
  var n = S(t);
  return j(n) ? L(n) : module1664.fetchText(n);
}

var W = 'android' !== ReactNative.Platform.OS ? M : A;

function _(t) {
  var n = t.asset,
    o = module53.default(t, b),
    u = React.useState(null),
    c = module12.default(u, 2),
    l = c[0],
    v = c[1];
  React.useEffect(
    function () {
      W(n).then(v);
    },
    [n]
  );
  return React.default.createElement(
    module1665.SvgCss,
    module11.default(
      {
        xml: l,
      },
      o
    )
  );
}

exports.loadLocalRawResource = W;

var D = (function (t, ...args) {
  module35.default(y, t);

  var module11 = y,
    module12 = k(),
    p = function () {
      var t,
        n = module34.default(module11);

      if (module12) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function y() {
    var t;
    module24.default(this, y);
    (t = p.call(this, ...args)).state = {
      xml: null,
    };
    return t;
  }

  module25.default(y, [
    {
      key: 'componentDidMount',
      value: function () {
        this.load(this.props.asset);
      },
    },
    {
      key: 'componentDidUpdate',
      value: function (t) {
        var n = this.props.asset;
        if (n !== t.asset) this.load(n);
      },
    },
    {
      key: 'load',
      value: function (t) {
        return regeneratorRuntime.default.async(
          function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  if (((n.prev = 0), (n.t0 = this), !t)) {
                    n.next = 8;
                    break;
                  }

                  n.next = 5;
                  return regeneratorRuntime.default.awrap(W(t));

                case 5:
                  n.t1 = n.sent;
                  n.next = 9;
                  break;

                case 8:
                  n.t1 = null;

                case 9:
                  n.t2 = n.t1;
                  n.t3 = {
                    xml: n.t2,
                  };
                  n.t0.setState.call(n.t0, n.t3);
                  n.next = 17;
                  break;

                case 14:
                  n.prev = 14;
                  n.t4 = n.catch(0);
                  console.error(n.t4);

                case 17:
                case 'end':
                  return n.stop();
              }
          },
          null,
          this,
          [[0, 14]],
          Promise
        );
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          n = this.state.xml;
        return React.default.createElement(module1665.SvgWithCss, {
          xml: n,
          override: t,
        });
      },
    },
  ]);
  return y;
})(React.Component);

exports.WithLocalSvg = D;
var E = _;
exports.default = E;
