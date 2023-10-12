exports.usePaymentSheet = function () {
  var t = module1534.useStripe(),
    l = t.initPaymentSheet,
    o = t.presentPaymentSheet,
    f = t.confirmPaymentSheetPayment,
    p = React.useState(false),
    y = module12.default(p, 2),
    P = y[0],
    h = y[1];
  return {
    loading: P,
    initPaymentSheet: function (t) {
      var module12;
      return regeneratorRuntime.default.async(
        function (s) {
          for (;;)
            switch ((s.prev = s.next)) {
              case 0:
                h(true);
                s.next = 3;
                return regeneratorRuntime.default.awrap(l(t));

              case 3:
                module12 = s.sent;
                h(false);
                return s.abrupt('return', module12);

              case 6:
              case 'end':
                return s.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    },
    presentPaymentSheet: function () {
      var t;
      return regeneratorRuntime.default.async(
        function (u) {
          for (;;)
            switch ((u.prev = u.next)) {
              case 0:
                h(true);
                u.next = 3;
                return regeneratorRuntime.default.awrap(o());

              case 3:
                t = u.sent;
                h(false);
                return u.abrupt('return', t);

              case 6:
              case 'end':
                return u.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    },
    confirmPaymentSheetPayment: function () {
      var t;
      return regeneratorRuntime.default.async(
        function (u) {
          for (;;)
            switch ((u.prev = u.next)) {
              case 0:
                h(true);
                u.next = 3;
                return regeneratorRuntime.default.awrap(f());

              case 3:
                t = u.sent;
                h(false);
                return u.abrupt('return', t);

              case 6:
              case 'end':
                return u.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    },
  };
};

var regeneratorRuntime = require('regenerator-runtime'),
  module12 = require('./12'),
  React = require('react'),
  module1534 = require('./1534');
