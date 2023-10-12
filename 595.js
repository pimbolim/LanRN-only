var module47 = require('./47'),
  module25 = require('./25'),
  module24 = require('./24'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module583 = require('./583'),
  module596 = require('./596');

function y(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(t);
    if (n)
      f = f.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, f);
  }

  return o;
}

function O(t) {
  for (var o = 1; o < arguments.length; o++) {
    var f = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      y(Object(f), true).forEach(function (o) {
        module47.default(t, o, f[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(f));
    else
      y(Object(f)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(f, n));
      });
  }

  return t;
}

function b() {
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

var v = (function (t) {
  module35.default(y, t);

  var module47 = y,
    module583 = b(),
    s = function () {
      var t,
        o = module34.default(module47);

      if (module583) {
        var f = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, f);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function y() {
    module24.default(this, y);
    return s.apply(this, arguments);
  }

  return module25.default(y);
})(module583.default);

exports.default = v;
v.contentInset = O(
  O({}, module583.default.contentInset),
  {},
  {
    top: 8,
    left: 12,
    right: 12,
  }
);
v.labelOffset = O(
  O({}, module583.default.labelOffset),
  {},
  {
    y0: -10,
    y1: -2,
  }
);
v.inputContainerStyle = [module583.default.inputContainerStyle, module596.default.inputContainer];
