var module25 = require('./25'),
  module24 = require('./24'),
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

var module1447 = (function (t) {
  module35.default(h, t);

  var module1447 = h,
    s = l(),
    v = function () {
      var t,
        u = module34.default(module1447);

      if (s) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(u, arguments, n);
      } else t = u.apply(this, arguments);

      return module37.default(this, t);
    };

  function h(t) {
    var u;
    module24.default(this, h);
    (u = v.call(this, t.error)).path = t.path;
    u.appName = t.appName;
    return u;
  }

  return module25.default(h);
})(require('./1447').default);

exports.default = module1447;
