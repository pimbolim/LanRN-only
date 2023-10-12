exports.createOrReuseTransformNode = function (t, n) {
  var u = p(t);
  if (n && module948.default(u, n._config)) return n;
  return new h(t, u);
};

var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module907 = require('./907'),
  module948 = require('./948');

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

function p(t) {
  var n = [];
  t.forEach(function (t) {
    for (var u in t) {
      var f = t[u];
      if (f instanceof module907.default)
        n.push({
          property: u,
          nodeID: f.__nodeID,
        });
      else
        n.push({
          property: u,
          value: f,
        });
    }
  });
  return n;
}

function _(t) {
  var n = [];
  t.forEach(function (t) {
    for (var u in t) {
      var f = t[u];
      if (f instanceof module907.default) n.push(f);
    }
  });
  return n;
}

var h = (function (t) {
  module35.default(y, t);

  var module948 = y,
    p = v(),
    h = function () {
      var t,
        n = module34.default(module948);

      if (p) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function y(t, u) {
    var f;
    module24.default(this, y);
    (f = h.call(
      this,
      {
        type: 'transform',
        transform: u,
      },
      _(t)
    ))._config = u;
    f._transform = t;
    return f;
  }

  module25.default(y, [
    {
      key: 'toString',
      value: function () {
        return 'AnimatedTransform, id: ' + this.__nodeID;
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        return this._transform.map(function (t) {
          var n = {};

          for (var u in t) {
            var f = t[u];
            if (f instanceof module907.default) n[u] = f.__getValue();
          }

          return n;
        });
      },
    },
  ]);
  return y;
})(module907.default);
