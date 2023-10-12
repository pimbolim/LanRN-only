exports.createAnimatedOperator = function (t) {
  return function (...args) {
    return new q(t, args.map(module905.adapt));
  };
};

var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module907 = require('./907'),
  module906 = require('./906'),
  module218 = require('./218'),
  module905 = require('./905');

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

function y(t) {
  return function (n) {
    return n.reduce(function (n, u) {
      return t(module906.val(n), module906.val(u));
    });
  };
}

function _(t, n) {
  return function (u) {
    return u.reduce(function (n, u) {
      return t(module906.val(n), module906.val(u));
    }, n);
  };
}

function M(t) {
  return function (n) {
    return t(module906.val(n[0]), module906.val(n[1]));
  };
}

function b(t) {
  return function (n) {
    return t(module906.val(n[0]));
  };
}

var R = {
    add: y(function (t, n) {
      return t + n;
    }),
    sub: y(function (t, n) {
      return t - n;
    }),
    multiply: y(function (t, n) {
      return t * n;
    }),
    divide: y(function (t, n) {
      return t / n;
    }),
    pow: y(function (t, n) {
      return t ** n;
    }),
    modulo: y(function (t, n) {
      return ((t % n) + n) % n;
    }),
    sqrt: b(function (t) {
      return Math.sqrt(t);
    }),
    log: b(function (t) {
      return Math.log(t);
    }),
    sin: b(function (t) {
      return Math.sin(t);
    }),
    cos: b(function (t) {
      return Math.cos(t);
    }),
    tan: b(function (t) {
      return Math.tan(t);
    }),
    acos: b(function (t) {
      return Math.acos(t);
    }),
    asin: b(function (t) {
      return Math.asin(t);
    }),
    atan: b(function (t) {
      return Math.atan(t);
    }),
    exp: b(function (t) {
      return Math.exp(t);
    }),
    round: b(function (t) {
      return Math.round(t);
    }),
    and: _(function (t, n) {
      return t && n;
    }, true),
    or: _(function (t, n) {
      return t || n;
    }, false),
    not: b(function (t) {
      return !t;
    }),
    defined: b(function (t) {
      return null !== t && undefined !== t && !isNaN(t);
    }),
    lessThan: M(function (t, n) {
      return t < n;
    }),
    eq: M(function (t, n) {
      return t == n;
    }),
    greaterThan: M(function (t, n) {
      return t > n;
    }),
    lessOrEq: M(function (t, n) {
      return t <= n;
    }),
    greaterOrEq: M(function (t, n) {
      return t >= n;
    }),
    neq: M(function (t, n) {
      return t != n;
    }),
  },
  q = (function (t) {
    module35.default(_, t);

    var module906 = _,
      module905 = v(),
      y = function () {
        var t,
          n = module34.default(module906);

        if (module905) {
          var u = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, u);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function _(t, u) {
      var o;
      module24.default(this, _);
      module218.default('string' == typeof t, 'Reanimated: Animated.operator node first argument should be of type String, but got: ' + t);
      module218.default(
        u.every(function (t) {
          return t instanceof module907.default || 'string' == typeof t || 'number' == typeof t;
        }),
        'Reanimated: Animated.operator node second argument should be one or more of type AnimatedNode, String or Number but got ' + u
      );
      (o = y.call(
        this,
        {
          type: 'op',
          op: t,
          input: u,
        },
        u
      ))._op = t;
      o._input = u;
      return o;
    }

    module25.default(_, [
      {
        key: 'toString',
        value: function () {
          return 'AnimatedOperator, id: ' + this.__nodeID;
        },
      },
      {
        key: '__onEvaluate',
        value: function () {
          if (!this._operation) {
            this._operation = R[this._op];
            module218.default(this._operation, "Illegal operator '%s'", this._op);
          }

          return this._operation(this._input);
        },
      },
    ]);
    return _;
  })(module907.default);
