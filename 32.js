var module33 = require('./33');

function o() {
  if ('undefined' != typeof Reflect && Reflect.get) {
    module.exports = o = Reflect.get;
    module.exports.__esModule = true;
    module.exports.default = module.exports;
  } else {
    module.exports = o = function (o, p, s) {
      var l = module33(o, p);

      if (l) {
        var u = Object.getOwnPropertyDescriptor(l, p);
        return u.get ? u.get.call(arguments.length < 3 ? o : s) : u.value;
      }
    };

    module.exports.__esModule = true;
    module.exports.default = module.exports;
  }

  return o.apply(this, arguments);
}

module.exports = o;
module.exports.__esModule = true;
module.exports.default = module.exports;
