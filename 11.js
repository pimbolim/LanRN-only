function t() {
  module.exports = t =
    Object.assign ||
    function (t) {
      for (var o = 1; o < arguments.length; o++) {
        var s = arguments[o];

        for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
      }

      return t;
    };

  module.exports.__esModule = true;
  module.exports.default = module.exports;
  return t.apply(this, arguments);
}

module.exports = t;
module.exports.__esModule = true;
module.exports.default = module.exports;
