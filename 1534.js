exports.useStripe = function () {
  var n = React.useState(null),
    p = module12.default(n, 2),
    f = p[0],
    y = p[1];
  React.useEffect(function () {
    var n;
    regeneratorRuntime.default.async(
      function (u) {
        for (;;)
          switch ((u.prev = u.next)) {
            case 0:
              if (((u.t0 = module1535.isiOS), !u.t0)) {
                u.next = 5;
                break;
              }

              u.next = 4;
              return regeneratorRuntime.default.awrap(module1536.default.isApplePaySupported());

            case 4:
              u.t0 = u.sent;

            case 5:
              n = u.t0;
              y(n);

            case 7:
            case 'end':
              return u.stop();
          }
      },
      null,
      null,
      null,
      Promise
    );
  }, []);

  var P = React.useCallback(function (n) {
      var module12,
        l = arguments;
      return regeneratorRuntime.default.async(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                module12 = l.length > 1 && undefined !== l[1] ? l[1] : {};
                return t.abrupt('return', module1537.createPaymentMethod(n, module12));

              case 2:
              case 'end':
                return t.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    }, []),
    b = React.useCallback(function (n) {
      return regeneratorRuntime.default.async(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return t.abrupt('return', module1537.createToken(n));

              case 1:
              case 'end':
                return t.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    }, []),
    v = React.useCallback(function (n) {
      return regeneratorRuntime.default.async(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return t.abrupt('return', module1537.retrievePaymentIntent(n));

              case 1:
              case 'end':
                return t.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    }, []),
    h = React.useCallback(function (n) {
      return regeneratorRuntime.default.async(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return t.abrupt('return', module1537.retrieveSetupIntent(n));

              case 1:
              case 'end':
                return t.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    }, []),
    k = React.useCallback(function (n, u) {
      var React,
        c = arguments;
      return regeneratorRuntime.default.async(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                React = c.length > 2 && undefined !== c[2] ? c[2] : {};
                return t.abrupt('return', module1537.confirmPayment(n, u, React));

              case 2:
              case 'end':
                return t.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    }, []),
    C = React.useCallback(function (n) {
      return regeneratorRuntime.default.async(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return t.abrupt('return', module1537.presentApplePay(n));

              case 1:
              case 'end':
                return t.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    }, []),
    x = React.useCallback(function (n) {
      var module12,
        l = arguments;
      return regeneratorRuntime.default.async(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                module12 = l.length > 1 && undefined !== l[1] ? l[1] : [];
                return t.abrupt('return', module1537.updateApplePaySummaryItems(n, module12));

              case 2:
              case 'end':
                return t.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    }, []),
    w = React.useCallback(function (n) {
      return regeneratorRuntime.default.async(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return t.abrupt('return', module1537.confirmApplePayPayment(n));

              case 1:
              case 'end':
                return t.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    }, []),
    S = React.useCallback(function (n) {
      return regeneratorRuntime.default.async(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return t.abrupt('return', module1537.handleNextAction(n));

              case 1:
              case 'end':
                return t.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    }, []),
    A = React.useCallback(function (n, u) {
      var React,
        c = arguments;
      return regeneratorRuntime.default.async(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                React = c.length > 2 && undefined !== c[2] ? c[2] : {};
                return t.abrupt('return', module1537.confirmSetupIntent(n, u, React));

              case 2:
              case 'end':
                return t.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    }, []),
    F = React.useCallback(function (n) {
      return regeneratorRuntime.default.async(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return t.abrupt('return', module1537.createTokenForCVCUpdate(n));

              case 1:
              case 'end':
                return t.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    }, []),
    M = React.useCallback(function (n) {
      return regeneratorRuntime.default.async(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return t.abrupt('return', module1537.initPaymentSheet(n));

              case 1:
              case 'end':
                return t.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    }, []),
    G = React.useCallback(function () {
      return regeneratorRuntime.default.async(
        function (n) {
          for (;;)
            switch ((n.prev = n.next)) {
              case 0:
                return n.abrupt('return', module1537.presentPaymentSheet());

              case 1:
              case 'end':
                return n.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    }, []),
    I = React.useCallback(function () {
      return regeneratorRuntime.default.async(
        function (n) {
          for (;;)
            switch ((n.prev = n.next)) {
              case 0:
                return n.abrupt('return', module1537.confirmPaymentSheetPayment());

              case 1:
              case 'end':
                return n.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    }, []),
    B = React.useCallback(function (n) {
      return regeneratorRuntime.default.async(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return t.abrupt('return', module1537.handleURLCallback(n));

              case 1:
              case 'end':
                return t.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    }, []),
    T = React.useCallback(function (n) {
      return regeneratorRuntime.default.async(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return t.abrupt('return', module1537.isGooglePaySupported(n));

              case 1:
              case 'end':
                return t.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    }, []),
    U = React.useCallback(function (n) {
      return regeneratorRuntime.default.async(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return t.abrupt('return', module1537.initGooglePay(n));

              case 1:
              case 'end':
                return t.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    }, []),
    _ = React.useCallback(function (n) {
      return regeneratorRuntime.default.async(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return t.abrupt('return', module1537.presentGooglePay(n));

              case 1:
              case 'end':
                return t.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    }, []),
    L = React.useCallback(function (n) {
      return regeneratorRuntime.default.async(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return t.abrupt('return', module1537.createGooglePayPaymentMethod(n));

              case 1:
              case 'end':
                return t.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    }, []),
    N = React.useCallback(function () {
      return regeneratorRuntime.default.async(
        function (n) {
          for (;;)
            switch ((n.prev = n.next)) {
              case 0:
                return n.abrupt('return', module1537.openApplePaySetup());

              case 1:
              case 'end':
                return n.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    }, []),
    O = React.useCallback(function (n, u) {
      return regeneratorRuntime.default.async(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return t.abrupt('return', module1537.collectBankAccountForPayment(n, u));

              case 1:
              case 'end':
                return t.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    }, []),
    R = React.useCallback(function (n, u) {
      return regeneratorRuntime.default.async(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return t.abrupt('return', module1537.collectBankAccountForSetup(n, u));

              case 1:
              case 'end':
                return t.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    }, []),
    V = React.useCallback(function (n, u) {
      return regeneratorRuntime.default.async(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return t.abrupt('return', module1537.verifyMicrodepositsForPayment(n, u));

              case 1:
              case 'end':
                return t.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    }, []),
    j = React.useCallback(function (n, u) {
      return regeneratorRuntime.default.async(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return t.abrupt('return', module1537.verifyMicrodepositsForSetup(n, u));

              case 1:
              case 'end':
                return t.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    }, []);

  return {
    retrievePaymentIntent: v,
    retrieveSetupIntent: h,
    confirmPayment: k,
    createPaymentMethod: P,
    handleNextAction: S,
    isApplePaySupported: f,
    presentApplePay: C,
    confirmApplePayPayment: w,
    confirmSetupIntent: A,
    createTokenForCVCUpdate: F,
    updateApplePaySummaryItems: x,
    handleURLCallback: B,
    confirmPaymentSheetPayment: I,
    presentPaymentSheet: G,
    initPaymentSheet: M,
    createToken: b,
    isGooglePaySupported: T,
    initGooglePay: U,
    presentGooglePay: _,
    createGooglePayPaymentMethod: L,
    openApplePaySetup: N,
    collectBankAccountForPayment: O,
    collectBankAccountForSetup: R,
    verifyMicrodepositsForPayment: V,
    verifyMicrodepositsForSetup: j,
  };
};

var regeneratorRuntime = require('regenerator-runtime'),
  module12 = require('./12'),
  React = require('react'),
  module1535 = require('./1535'),
  module1536 = require('./1536'),
  module1537 = require('./1537');
