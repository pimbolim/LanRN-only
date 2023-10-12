exports.default = function (n, t) {
  return function (o, s, l) {
    return undefined !== l ? n(o, s, l) : c(n, t, o, s);
  };
};

var module903 = require('./903'),
  module912 = require('./912'),
  module926 = require('./926');

function c(n, c, l, f) {
  var u,
    h,
    _ = new module912.default(),
    p = c.getDefaultState(),
    v = false,
    y = false,
    C = false,
    b = {
      start: function (o) {
        h = o;
        if (v) {
          if (h)
            h({
              finished: false,
            });
        } else if (y) console.warn('Animation has been finished before');
        else if (l.isNativelyInitialized()) {
          v = true;
          module926.evaluateOnce(module903.set(p.position, l), p.position, function () {
            u = module903.always(
              module903.set(
                l,
                module903.block([
                  module903.cond(module903.clockRunning(_), 0, module903.startClock(_)),
                  n(_, p, f),
                  module903.cond(p.finished, [
                    module903.call([], function () {
                      v = false;
                      if (!C) y = true;

                      l.__detachAnimation(b);

                      y = true;
                      if (!C) C = false;
                    }),
                    module903.stopClock(_),
                  ]),
                  p.position,
                ])
              )
            );

            l.__attachAnimation(b);

            u.__addChild(l);
          });
        }
      },
      __detach: function () {
        if (h)
          h({
            finished: y,
          });
        h = null;

        u.__removeChild(l);
      },
      stop: function () {
        if (y) console.warn('Calling stop has no effect as the animation has already completed');
        else if (v) {
          C = true;
          module926.evaluateOnce(module903.set(p.finished, 1), p.finished);
        } else console.warn("Calling stop has no effect as the animation hasn't been started");
      },
      __stopImmediately_testOnly: function (n) {
        b.stop();
        y = n;

        l.__detachAnimation(b);
      },
    };

  return b;
}
