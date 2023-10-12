exports.useApplePay = function () {
  var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {},
    s = t.onShippingMethodSelected,
    v = t.onShippingContactSelected,
    S = module1534.useStripe(),
    y = S.isApplePaySupported,
    P = S.presentApplePay,
    h = S.confirmApplePayPayment,
    A = S.updateApplePaySummaryItems,
    b = S.openApplePaySetup,
    C = React.useState(null),
    w = module12.default(C, 2),
    k = w[0],
    x = w[1],
    M = React.useState(false),
    _ = module12.default(M, 2),
    E = _[0],
    D = _[1],
    I = React.useCallback(
      function (t) {
        if (s) s(t.shippingMethod, A);
        else A(k);
      },
      [k, s, A]
    ),
    L = React.useCallback(
      function (t) {
        if (v) v(t.shippingContact, A);
        else A(k);
      },
      [k, v, A]
    );

  React.useEffect(
    function () {
      var t = c.addListener(o, I),
        n = c.addListener(f, L);
      return function () {
        t.remove();
        n.remove();
      };
    },
    [L, I]
  );
  var N = React.useCallback(
      function (t) {
        var u;
        return regeneratorRuntime.default.async(
          function (l) {
            for (;;)
              switch ((l.prev = l.next)) {
                case 0:
                  D(true);
                  x(t.cartItems);
                  l.next = 4;
                  return regeneratorRuntime.default.awrap(P(t));

                case 4:
                  if ((u = l.sent).error) x(null);
                  D(false);
                  return l.abrupt('return', u);

                case 8:
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
      [P]
    ),
    j = React.useCallback(
      function () {
        var t;
        return regeneratorRuntime.default.async(
          function (u) {
            for (;;)
              switch ((u.prev = u.next)) {
                case 0:
                  D(true);
                  u.next = 3;
                  return regeneratorRuntime.default.awrap(b());

                case 3:
                  t = u.sent;
                  D(false);
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
      [b]
    ),
    O = React.useCallback(
      function (t) {
        var module12;
        return regeneratorRuntime.default.async(
          function (l) {
            for (;;)
              switch ((l.prev = l.next)) {
                case 0:
                  D(true);
                  l.next = 3;
                  return regeneratorRuntime.default.awrap(h(t));

                case 3:
                  module12 = l.sent;
                  x(null);
                  D(false);
                  return l.abrupt('return', module12);

                case 7:
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
      [h]
    );
  return {
    loading: E,
    presentApplePay: N,
    confirmApplePayPayment: O,
    isApplePaySupported: y,
    openApplePaySetup: j,
  };
};

var regeneratorRuntime = require('regenerator-runtime'),
  module12 = require('./12'),
  React = require('react'),
  module1534 = require('./1534'),
  ReactNative = require('react-native'),
  c = new ReactNative.NativeEventEmitter(ReactNative.NativeModules.StripeSdk),
  o = 'onDidSetShippingMethod',
  f = 'onDidSetShippingContact';
