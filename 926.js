exports.evaluateOnce = function (t) {
  var v = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : [],
    h = arguments.length > 2 ? arguments[2] : undefined;
  if (!Array.isArray(v)) v = [v];

  for (
    var f = new module909.default(0),
      u = module904.createAnimatedCond(
        f,
        0,
        module917.createAnimatedCall([t, module910.createAnimatedSet(f, 1)], function () {
          if (h) h();

          for (var t = 0; t < v.length; t++) {
            v[t].__removeChild(A);

            A.__detach();
          }
        })
      ),
      A = module927.createAnimatedAlways(u),
      y = 0;
    y < v.length;
    y++
  ) {
    v[y].__addChild(A);

    A.__attach();
  }
};

var module909 = require('./909'),
  module910 = require('./910'),
  module917 = require('./917'),
  module927 = require('./927'),
  module904 = require('./904');
