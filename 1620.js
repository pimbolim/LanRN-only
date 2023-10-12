exports.invert = k;
exports.matrixTransform = P;
exports.multiply_matrices = b;

var module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module24 = require('./24'),
  module25 = require('./25'),
  React = require('react'),
  module1621 = require('./1621'),
  ReactNative = require('react-native');

function y() {
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

var w = ReactNative.NativeModules.RNSVGRenderableManager;

function b(t, n) {
  var o = t.a,
    u = t.b,
    f = t.c,
    c = t.d,
    l = t.e,
    s = t.f,
    h = n.a,
    v = n.b,
    y = n.c,
    w = n.d,
    b = n.e,
    k = n.f;
  return {
    a: o * h + f * v,
    c: o * y + f * w,
    e: o * b + f * k + l,
    b: u * h + c * v,
    d: u * y + c * w,
    f: u * b + c * k + s,
  };
}

function k(t) {
  var n = t.a,
    o = t.b,
    u = t.c,
    f = t.d,
    c = t.e,
    l = t.f,
    s = n * f - o * u;
  return {
    a: f / s,
    b: -o / s,
    c: -u / s,
    d: n / s,
    e: (u * l - f * c) / s,
    f: -(n * l - o * c) / s,
  };
}

var p = Math.PI / 180,
  M = (function () {
    function t(n) {
      if ((module24.default(this, t), n)) {
        var o = n.a,
          u = n.b,
          f = n.c,
          l = n.d,
          s = n.e,
          h = n.f;
        this.a = o;
        this.b = u;
        this.c = f;
        this.d = l;
        this.e = s;
        this.f = h;
      } else {
        this.a = 1;
        this.b = 0;
        this.c = 0;
        this.d = 1;
        this.e = 0;
        this.f = 0;
      }
    }

    module25.default(t, [
      {
        key: 'multiply',
        value: function (n) {
          return new t(b(this, n));
        },
      },
      {
        key: 'inverse',
        value: function () {
          return new t(k(this));
        },
      },
      {
        key: 'translate',
        value: function (n, o) {
          return new t(
            b(this, {
              a: 1,
              b: 0,
              c: 0,
              d: 1,
              e: n,
              f: o,
            })
          );
        },
      },
      {
        key: 'scale',
        value: function (n) {
          return new t(
            b(this, {
              a: n,
              b: 0,
              c: 0,
              d: n,
              e: 0,
              f: 0,
            })
          );
        },
      },
      {
        key: 'scaleNonUniform',
        value: function (n, o) {
          return new t(
            b(this, {
              a: n,
              b: 0,
              c: 0,
              d: o,
              e: 0,
              f: 0,
            })
          );
        },
      },
      {
        key: 'rotate',
        value: function (n) {
          var o = Math.cos(p * n),
            u = Math.sin(p * n);
          return new t(
            b(this, {
              a: o,
              b: u,
              c: -u,
              d: o,
              e: 0,
              f: 0,
            })
          );
        },
      },
      {
        key: 'rotateFromVector',
        value: function (n, o) {
          var u = o ** n,
            f = Math.cos(p * u),
            c = Math.sin(p * u);
          return new t(
            b(this, {
              a: f,
              b: c,
              c: -c,
              d: f,
              e: 0,
              f: 0,
            })
          );
        },
      },
      {
        key: 'flipX',
        value: function () {
          return new t(
            b(this, {
              a: -1,
              b: 0,
              c: 0,
              d: 1,
              e: 0,
              f: 0,
            })
          );
        },
      },
      {
        key: 'flipY',
        value: function () {
          return new t(
            b(this, {
              a: 1,
              b: 0,
              c: 0,
              d: -1,
              e: 0,
              f: 0,
            })
          );
        },
      },
      {
        key: 'skewX',
        value: function (n) {
          return new t(
            b(this, {
              a: 1,
              b: 0,
              c: Math.tan(p * n),
              d: 1,
              e: 0,
              f: 0,
            })
          );
        },
      },
      {
        key: 'skewY',
        value: function (n) {
          return new t(
            b(this, {
              a: 1,
              b: Math.tan(p * n),
              c: 0,
              d: 1,
              e: 0,
              f: 0,
            })
          );
        },
      },
    ]);
    return t;
  })();

function P(t, n) {
  var o = t.a,
    u = t.b,
    f = t.c,
    c = t.d,
    l = t.e,
    s = t.f,
    h = n.x,
    v = n.y;
  return {
    x: o * h + f * v + l,
    y: u * h + c * v + s,
  };
}

exports.SVGMatrix = M;

var S = (function () {
  function t(n) {
    if ((module24.default(this, t), n)) {
      var o = n.x,
        u = n.y;
      this.x = o;
      this.y = u;
    } else {
      this.x = 0;
      this.y = 0;
    }
  }

  module25.default(t, [
    {
      key: 'matrixTransform',
      value: function (n) {
        return new t(P(n, this));
      },
    },
  ]);
  return t;
})();

exports.SVGPoint = S;
var x = {
  createSVGPoint: function () {
    return new S();
  },
  createSVGMatrix: function () {
    return new M();
  },
};
exports.ownerSVGElement = x;

var N = (function (t) {
  module35.default(p, t);

  var React = p,
    b = y(),
    k = function () {
      var t,
        n = module34.default(React);

      if (b) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function p(t, o) {
    var u;
    module24.default(this, p);
    (u = k.call(this, t, o)).root = null;

    u.refMethod = function (t) {
      u.root = t;
    };

    u.setNativeProps = function (t) {
      if (u.root) u.root.setNativeProps(t);
    };

    u.getBBox = function (t) {
      var n = t || {},
        o = n.fill,
        f = undefined === o || o,
        c = n.stroke,
        l = undefined === c || c,
        s = n.markers,
        h = undefined === s || s,
        y = n.clipped,
        b = undefined === y || y,
        k = ReactNative.findNodeHandle(u.root);
      return w.getBBox(k, {
        fill: f,
        stroke: l,
        markers: h,
        clipped: b,
      });
    };

    u.getCTM = function () {
      var t = ReactNative.findNodeHandle(u.root);
      return new M(w.getCTM(t));
    };

    u.getScreenCTM = function () {
      var t = ReactNative.findNodeHandle(u.root);
      return new M(w.getScreenCTM(t));
    };

    u.isPointInFill = function (t) {
      var n = ReactNative.findNodeHandle(u.root);
      return w.isPointInFill(n, t);
    };

    u.isPointInStroke = function (t) {
      var n = ReactNative.findNodeHandle(u.root);
      return w.isPointInStroke(n, t);
    };

    u.getTotalLength = function () {
      var t = ReactNative.findNodeHandle(u.root);
      return w.getTotalLength(t);
    };

    u.getPointAtLength = function (t) {
      var n = ReactNative.findNodeHandle(u.root);
      return new S(
        w.getPointAtLength(n, {
          length: t,
        })
      );
    };

    module1621.default(module39.default(u));
    return u;
  }

  return module25.default(p);
})(React.Component);

exports.default = N;
N.prototype.ownerSVGElement = x;
