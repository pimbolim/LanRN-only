exports.default = function (n, f) {
  if (!(React.default.useEffect instanceof Function)) return;
  React.default.useEffect(function () {
    if (!(n instanceof Function)) {
      console.warn('useCode() first argument should be a function that returns an animation node.');
      var t = n;

      n = function () {
        return t;
      };
    }

    var f = n();

    if (f) {
      if (f instanceof Array) f = module903.block(f);
      var o = module903.always(f);

      o.__attach();

      return function () {
        return o.__detach();
      };
    }
  }, f);
};

var React = require('react'),
  module903 = require('./903');
