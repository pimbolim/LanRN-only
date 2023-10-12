var module20 = require('./20'),
  module1120 = require('./1120'),
  module47 = require('./47'),
  module12 = require('./12'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module1121 = require('./1121'),
  module901 = require('./901'),
  module1122 = require('./1122'),
  module1123 = require('./1123'),
  module1124 = require('./1124'),
  module1117 = require('./1117'),
  module1118 = require('./1118'),
  module1109 = require('./1109'),
  module1126 = require('./1126'),
  module1127 = require('./1127');

function j() {
  var t = module1120.default(['M', ',', ' ']);

  j = function () {
    return t;
  };

  return t;
}

function R() {
  var t = module1120.default(['', 'C', ',', ' ', ',', ' ', ',', '']);

  R = function () {
    return t;
  };

  return t;
}

function w(t, n) {
  var u = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var p = Object.getOwnPropertySymbols(t);
    if (n)
      p = p.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    u.push.apply(u, p);
  }

  return u;
}

function L(t) {
  for (var n = 1; n < arguments.length; n++) {
    var u = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      w(Object(u), true).forEach(function (n) {
        module47.default(t, n, u[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      w(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

var A = module901.default.Value,
  D = module901.default.lessOrEq,
  E = module901.default.greaterOrEq,
  _ = module901.default.and,
  q = module901.default.cond,
  z = module901.default.interpolate,
  B = module901.default.multiply,
  I = module901.default.lessThan,
  M = module901.default.concat,
  S = module901.default.add,
  X = function (t) {
    var n = module1124.default(module1123.default(module1122.default(t))),
      u = module1121.default(n),
      p = u[0],
      o = u.slice(1),
      f = o.map(function (t, n) {
        var u = o[n - 1],
          f =
            0 === n
              ? {
                  x: p[1],
                  y: p[2],
                }
              : {
                  x: u[5],
                  y: u[6],
                },
          c = {
            x: t[1],
            y: t[2],
          },
          l = {
            x: t[3],
            y: t[4],
          },
          y = {
            x: t[5],
            y: t[6],
          };
        return {
          p0: f,
          p1: c,
          p2: l,
          p3: y,
          length: module1126.default(f, c, l, y),
        };
      }),
      l = f.map(function (t, n) {
        var u = f.slice(0, n).reduce(function (t, n) {
          return t + n.length;
        }, 0);
        return {
          start: u,
          end: u + t.length,
          p0x: t.p0.x,
          p3x: t.p3.x,
        };
      });
    return {
      segments: l,
      totalLength: f.reduce(function (t, n) {
        return t + n.length;
      }, 0),
      length: f.map(function (t) {
        return t.length;
      }),
      start: l.map(function (t) {
        return t.start;
      }),
      end: l.map(function (t) {
        return t.end;
      }),
      p0x: f.map(function (t) {
        return t.p0.x;
      }),
      p0y: f.map(function (t) {
        return t.p0.y;
      }),
      p1x: f.map(function (t) {
        return t.p1.x;
      }),
      p1y: f.map(function (t) {
        return t.p1.y;
      }),
      p2x: f.map(function (t) {
        return t.p2.x;
      }),
      p2y: f.map(function (t) {
        return t.p2.y;
      }),
      p3x: f.map(function (t) {
        return t.p3.x;
      }),
      p3y: f.map(function (t) {
        return t.p3.y;
      }),
    };
  };

exports.parsePath = X;

exports.getPointAtLength = function (t, n) {
  var u = new A(-1),
    p = t.segments.reduce(function (t, u, p) {
      return q(_(E(n, u.start), D(n, u.end)), p, t);
    }, u),
    o = module1117.get(t.start, p),
    f = module1117.get(t.end, p),
    c = module1117.get(t.p0x, p),
    l = module1117.get(t.p1x, p),
    y = module1117.get(t.p2x, p),
    s = module1117.get(t.p3x, p),
    x = module1117.get(t.p0y, p),
    v = module1117.get(t.p1y, p),
    b = module1117.get(t.p2y, p),
    P = module1117.get(t.p3y, p),
    j = z(n, {
      inputRange: [o, f],
      outputRange: [0, 1],
    });
  return {
    x: module1109.cubicBezier(j, c, l, y, s),
    y: module1109.cubicBezier(j, x, v, b, P),
  };
};

var k = function (t, u) {
  var p = u.inputRange,
    c = u.outputRange,
    l = module53.default(u, ['inputRange', 'outputRange']),
    y = c.map(function (t) {
      return 'string' == typeof t ? X(t) : t;
    }),
    s = module12.default(y, 1)[0].segments.map(function (n, u) {
      var o = function (n) {
          return z(
            t,
            L(
              {
                inputRange: p,
                outputRange: y.map(function (t) {
                  return t[n][u];
                }),
              },
              l
            )
          );
        },
        f = o('p0x'),
        c = o('p0y'),
        s = o('p1x'),
        x = o('p1y'),
        h = o('p2x'),
        O = o('p2y'),
        b = o('p3x'),
        P = o('p3y');

      return module1118.string(R(), 0 === u ? module1118.string(j(), f, c) : '', s, x, h, O, b, P);
    });
  return M.apply(undefined, module20.default(s));
};

exports.interpolatePath = k;

exports.bInterpolatePath = function (t, n, u) {
  return k(t, {
    inputRange: [0, 1],
    outputRange: [n, u],
  });
};

exports.getLengthAtX = function (t, u) {
  var p = new A(-1),
    o = t.segments.reduce(function (t, n, p) {
      return q(_(E(u, n.p0x), D(u, n.p3x)), p, t);
    }, p),
    f = module1117.get(t.p0x, o),
    c = module1117.get(t.p1x, o),
    l = module1117.get(t.p2x, o),
    y = module1117.get(t.p3x, o),
    s = module1127.default(f, c, l, y),
    x = module1117.get(t.length, o),
    v = S.apply(
      undefined,
      module20.default(
        t.length.map(function (t, n) {
          return q(I(n, o), t, 0);
        })
      )
    );
  return S(v, B(s, x));
};
