exports.useGooglePay = function () {
  var n = module1534.useStripe(),
    o = n.isGooglePaySupported,
    c = n.initGooglePay,
    f = n.presentGooglePay,
    p = n.createGooglePayPaymentMethod,
    y = React.useState(false),
    P = module12.default(y, 2),
    v = P[0],
    b = P[1],
    G = React.useCallback(
      function (n) {
        var module12;
        return regeneratorRuntime.default.async(
          function (l) {
            for (;;)
              switch ((l.prev = l.next)) {
                case 0:
                  b(true);
                  l.next = 3;
                  return regeneratorRuntime.default.awrap(o(n));

                case 3:
                  module12 = l.sent;
                  b(false);
                  return l.abrupt('return', module12);

                case 6:
                case 'end':
                  return l.stop();
              }
          },
          null,
          null,
          null,
          Promise
        );
      },
      [o]
    ),
    w = React.useCallback(
      function (n) {
        var module12;
        return regeneratorRuntime.default.async(
          function (l) {
            for (;;)
              switch ((l.prev = l.next)) {
                case 0:
                  b(true);
                  l.next = 3;
                  return regeneratorRuntime.default.awrap(c(n));

                case 3:
                  module12 = l.sent;
                  b(false);
                  return l.abrupt('return', module12);

                case 6:
                case 'end':
                  return l.stop();
              }
          },
          null,
          null,
          null,
          Promise
        );
      },
      [c]
    ),
    x = React.useCallback(
      function (n) {
        var module12;
        return regeneratorRuntime.default.async(
          function (l) {
            for (;;)
              switch ((l.prev = l.next)) {
                case 0:
                  b(true);
                  l.next = 3;
                  return regeneratorRuntime.default.awrap(f(n));

                case 3:
                  module12 = l.sent;
                  b(false);
                  return l.abrupt('return', module12);

                case 6:
                case 'end':
                  return l.stop();
              }
          },
          null,
          null,
          null,
          Promise
        );
      },
      [f]
    ),
    h = React.useCallback(
      function (n) {
        var module12;
        return regeneratorRuntime.default.async(
          function (l) {
            for (;;)
              switch ((l.prev = l.next)) {
                case 0:
                  b(true);
                  l.next = 3;
                  return regeneratorRuntime.default.awrap(p(n));

                case 3:
                  module12 = l.sent;
                  b(false);
                  return l.abrupt('return', module12);

                case 6:
                case 'end':
                  return l.stop();
              }
          },
          null,
          null,
          null,
          Promise
        );
      },
      [p]
    );
  return {
    loading: v,
    isGooglePaySupported: G,
    initGooglePay: w,
    presentGooglePay: x,
    createGooglePayPaymentMethod: h,
  };
};

var regeneratorRuntime = require('regenerator-runtime'),
  module12 = require('./12'),
  React = require('react'),
  module1534 = require('./1534');
