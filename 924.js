exports.createAnimatedFunction = function (t) {
  for (var u = new Array(t.length), c = 0; c < u.length; c++) u[c] = module913.createAnimatedParam();

  var o = t.apply(undefined, u),
    l = module96.default(w, [o].concat(u));
  return function (...args) {
    if (args.length !== u.length) throw new Error('Parameter mismatch when calling reanimated function. Expected ' + u.length + ' parameters, got ' + args.length + '.');
    return module925.createAnimatedCallFunc(l, args, u);
  };
};

var module96 = require('./96'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module907 = require('./907'),
  module925 = require('./925'),
  module913 = require('./913'),
  module906 = require('./906'),
  module218 = require('./218');

function _() {
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

var w = (function (t) {
  module35.default(w, t);

  var module96 = w,
    module925 = _(),
    v = function () {
      var t,
        u = module34.default(module96);

      if (module925) {
        var c = module34.default(this).constructor;
        t = Reflect.construct(u, arguments, c);
      } else t = u.apply(this, arguments);

      return module37.default(this, t);
    };

  function w(t) {
    var n;
    module24.default(this, w);
    module218.default(t instanceof module907.default, "Reanimated: AnimatedCallFunc 'what' argument should be of type AnimatedNode but got " + t);

    for (var c = arguments.length, o = new Array(c > 1 ? c - 1 : 0), l = 1; l < c; l++) o[l - 1] = arguments[l];

    (n = v.call(
      this,
      {
        type: 'func',
        what: t,
      },
      [t].concat(o)
    ))._what = t;

    n.__attach();

    return n;
  }

  module25.default(w, [
    {
      key: '__onEvaluate',
      value: function () {
        return module906.val(this._what);
      },
    },
    {
      key: 'toString',
      value: function () {
        return 'AnimatedFunction, id: ' + this.__nodeID;
      },
    },
  ]);
  return w;
})(module907.default);
