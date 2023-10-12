var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34');

function l() {
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

var module1913 = (function (t) {
  module35.default(p, t);

  var module1913 = p,
    v = l(),
    y = function () {
      var t,
        n = module34.default(module1913);

      if (v) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function p(t, u) {
    var f;
    module24.default(this, p);
    (f = y.call(this, t, u)).name = '';
    return f;
  }

  module25.default(p, null, [
    {
      key: 'build',
      value: function (t, n, u) {
        return new Promise(function (f, o) {
          if (undefined === n) o(new TypeError('data is undefined'));
          new p(n, u).onCreated(function (n) {
            n.name = t;
            f(n);
          });
        });
      },
    },
  ]);
  return p;
})(require('./1913').default);

exports.default = module1913;
