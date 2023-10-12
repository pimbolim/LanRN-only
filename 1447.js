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

var module94 = (function (t) {
  module35.default(p, t);

  var module94 = p,
    v = l(),
    h = function () {
      var t,
        n = module34.default(module94);

      if (v) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function p(t) {
    var n;
    module24.default(this, p);
    (n = h.call(this, t.message)).code = t.code;
    n.message = t.message;
    n.nativeErrorCode = t.nativeErrorCode;
    n.nativeErrorMessage = t.nativeErrorMessage;
    return n;
  }

  return module25.default(p);
})(require('./94').default(Error));

exports.default = module94;
