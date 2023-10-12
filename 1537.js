var regeneratorRuntime = require('regenerator-runtime'),
  module1535 = require('./1535'),
  module1538 = require('./1538'),
  module1536 = require('./1536'),
  module1539 = require('./1539');

exports.createPaymentMethod = function (t) {
  var module1535,
    c,
    o,
    p,
    l = arguments;
  return regeneratorRuntime.default.async(
    function (f) {
      for (;;)
        switch ((f.prev = f.next)) {
          case 0:
            module1535 = l.length > 1 && undefined !== l[1] ? l[1] : {};
            f.prev = 1;
            f.next = 4;
            return regeneratorRuntime.default.awrap(module1536.default.createPaymentMethod(t, module1535));

          case 4:
            if (((c = f.sent), (o = c.paymentMethod), !(p = c.error))) {
              f.next = 9;
              break;
            }

            return f.abrupt('return', {
              error: p,
            });

          case 9:
            return f.abrupt('return', {
              paymentMethod: o,
            });

          case 12:
            f.prev = 12;
            f.t0 = f.catch(1);
            return f.abrupt('return', {
              error: f.t0,
            });

          case 15:
          case 'end':
            return f.stop();
        }
    },
    null,
    null,
    [[1, 12]],
    Promise
  );
};

exports.createToken = function (t) {
  var u, o, p, l;
  return regeneratorRuntime.default.async(
    function (f) {
      for (;;)
        switch ((f.prev = f.next)) {
          case 0:
            if ('BankAccount' !== t.type || 'us' !== (null == (u = t.country) ? undefined : u.toLowerCase()) || t.routingNumber) {
              f.next = 2;
              break;
            }

            return f.abrupt('return', {
              error: module1538.MissingRoutingNumber,
            });

          case 2:
            f.prev = 2;
            f.next = 5;
            return regeneratorRuntime.default.awrap(module1536.default.createToken(t));

          case 5:
            if (((o = f.sent), (p = o.token), !(l = o.error))) {
              f.next = 10;
              break;
            }

            return f.abrupt('return', {
              error: l,
            });

          case 10:
            return f.abrupt('return', {
              token: p,
            });

          case 13:
            f.prev = 13;
            f.t0 = f.catch(2);
            return f.abrupt('return', {
              error: f.t0,
            });

          case 16:
          case 'end':
            return f.stop();
        }
    },
    null,
    null,
    [[2, 13]],
    Promise
  );
};

exports.retrievePaymentIntent = function (t) {
  var u, c, o;
  return regeneratorRuntime.default.async(
    function (p) {
      for (;;)
        switch ((p.prev = p.next)) {
          case 0:
            p.prev = 0;
            p.next = 3;
            return regeneratorRuntime.default.awrap(module1536.default.retrievePaymentIntent(t));

          case 3:
            if (((u = p.sent), (c = u.paymentIntent), !(o = u.error))) {
              p.next = 8;
              break;
            }

            return p.abrupt('return', {
              error: o,
            });

          case 8:
            return p.abrupt('return', {
              paymentIntent: c,
            });

          case 11:
            p.prev = 11;
            p.t0 = p.catch(0);
            return p.abrupt('return', {
              error: p.t0,
            });

          case 14:
          case 'end':
            return p.stop();
        }
    },
    null,
    null,
    [[0, 11]],
    Promise
  );
};

exports.retrieveSetupIntent = function (t) {
  var u, c, o;
  return regeneratorRuntime.default.async(
    function (p) {
      for (;;)
        switch ((p.prev = p.next)) {
          case 0:
            p.prev = 0;
            p.next = 3;
            return regeneratorRuntime.default.awrap(module1536.default.retrieveSetupIntent(t));

          case 3:
            if (((u = p.sent), (c = u.setupIntent), !(o = u.error))) {
              p.next = 8;
              break;
            }

            return p.abrupt('return', {
              error: o,
            });

          case 8:
            return p.abrupt('return', {
              setupIntent: c,
            });

          case 11:
            p.prev = 11;
            p.t0 = p.catch(0);
            return p.abrupt('return', {
              error: p.t0,
            });

          case 14:
          case 'end':
            return p.stop();
        }
    },
    null,
    null,
    [[0, 11]],
    Promise
  );
};

exports.confirmPayment = function (t, u) {
  var module1538,
    o,
    p,
    l,
    f = arguments;
  return regeneratorRuntime.default.async(
    function (y) {
      for (;;)
        switch ((y.prev = y.next)) {
          case 0:
            module1538 = f.length > 2 && undefined !== f[2] ? f[2] : {};
            y.prev = 1;
            y.next = 4;
            return regeneratorRuntime.default.awrap(module1536.default.confirmPayment(t, u, module1538));

          case 4:
            if (((o = y.sent), (p = o.paymentIntent), !(l = o.error))) {
              y.next = 9;
              break;
            }

            return y.abrupt('return', {
              error: l,
            });

          case 9:
            return y.abrupt('return', {
              paymentIntent: p,
            });

          case 12:
            y.prev = 12;
            y.t0 = y.catch(1);
            return y.abrupt('return', {
              error: y.t0,
            });

          case 15:
          case 'end':
            return y.stop();
        }
    },
    null,
    null,
    [[1, 12]],
    Promise
  );
};

exports.isApplePaySupported = function () {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if (((t.t0 = module1535.isiOS), !t.t0)) {
              t.next = 5;
              break;
            }

            t.next = 4;
            return regeneratorRuntime.default.awrap(module1536.default.isApplePaySupported());

          case 4:
            t.t0 = t.sent;

          case 5:
            return t.abrupt('return', t.t0);

          case 6:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
};

exports.presentApplePay = function (t) {
  var u, c, p;
  return regeneratorRuntime.default.async(
    function (l) {
      for (;;)
        switch ((l.prev = l.next)) {
          case 0:
            l.next = 2;
            return regeneratorRuntime.default.awrap(module1536.default.isApplePaySupported());

          case 2:
            if (l.sent) {
              l.next = 4;
              break;
            }

            return l.abrupt('return', {
              error: {
                code: module1539.ApplePayError.Canceled,
                message: 'Apple pay is not supported on this device',
              },
            });

          case 4:
            l.prev = 4;
            l.next = 7;
            return regeneratorRuntime.default.awrap(module1536.default.presentApplePay(t));

          case 7:
            if (((u = l.sent), (c = u.paymentMethod), !(p = u.error))) {
              l.next = 12;
              break;
            }

            return l.abrupt('return', {
              error: p,
            });

          case 12:
            return l.abrupt('return', {
              paymentMethod: c,
            });

          case 15:
            l.prev = 15;
            l.t0 = l.catch(4);
            return l.abrupt('return', {
              error: l.t0,
            });

          case 18:
          case 'end':
            return l.stop();
        }
    },
    null,
    null,
    [[4, 15]],
    Promise
  );
};

exports.updateApplePaySummaryItems = function (t) {
  var module1535,
    c = arguments;
  return regeneratorRuntime.default.async(
    function (p) {
      for (;;)
        switch ((p.prev = p.next)) {
          case 0:
            module1535 = c.length > 1 && undefined !== c[1] ? c[1] : [];
            p.next = 3;
            return regeneratorRuntime.default.awrap(module1536.default.isApplePaySupported());

          case 3:
            if (p.sent) {
              p.next = 5;
              break;
            }

            return p.abrupt('return', {
              error: {
                code: module1539.ApplePayError.Canceled,
                message: 'Apple pay is not supported on this device',
              },
            });

          case 5:
            p.prev = 5;
            p.next = 8;
            return regeneratorRuntime.default.awrap(module1536.default.updateApplePaySummaryItems(t, module1535));

          case 8:
            return p.abrupt('return', {});

          case 11:
            p.prev = 11;
            p.t0 = p.catch(5);
            return p.abrupt('return', {
              error: p.t0,
            });

          case 14:
          case 'end':
            return p.stop();
        }
    },
    null,
    null,
    [[5, 11]],
    Promise
  );
};

exports.confirmApplePayPayment = function (t) {
  return regeneratorRuntime.default.async(
    function (u) {
      for (;;)
        switch ((u.prev = u.next)) {
          case 0:
            u.next = 2;
            return regeneratorRuntime.default.awrap(module1536.default.isApplePaySupported());

          case 2:
            if (u.sent) {
              u.next = 4;
              break;
            }

            return u.abrupt('return', {
              error: {
                code: module1539.ApplePayError.Canceled,
                message: 'Apple pay is not supported on this device',
              },
            });

          case 4:
            u.prev = 4;
            u.next = 7;
            return regeneratorRuntime.default.awrap(module1536.default.confirmApplePayPayment(t));

          case 7:
            return u.abrupt('return', {});

          case 10:
            u.prev = 10;
            u.t0 = u.catch(4);
            return u.abrupt('return', {
              error: u.t0,
            });

          case 13:
          case 'end':
            return u.stop();
        }
    },
    null,
    null,
    [[4, 10]],
    Promise
  );
};

exports.handleNextAction = function (t) {
  var c, o, p;
  return regeneratorRuntime.default.async(
    function (l) {
      for (;;)
        switch ((l.prev = l.next)) {
          case 0:
            l.prev = 0;
            l.next = 3;
            return regeneratorRuntime.default.awrap(module1536.default.handleNextAction(t));

          case 3:
            if (((c = l.sent), (o = c.paymentIntent), !(p = c.error))) {
              l.next = 8;
              break;
            }

            return l.abrupt('return', {
              error: p,
            });

          case 8:
            return l.abrupt('return', {
              paymentIntent: o,
            });

          case 11:
            l.prev = 11;
            l.t0 = l.catch(0);
            return l.abrupt('return', {
              error: module1535.createError(l.t0),
            });

          case 14:
          case 'end':
            return l.stop();
        }
    },
    null,
    null,
    [[0, 11]],
    Promise
  );
};

exports.confirmSetupIntent = function (t, u) {
  var module1538,
    o,
    p,
    l,
    f = arguments;
  return regeneratorRuntime.default.async(
    function (y) {
      for (;;)
        switch ((y.prev = y.next)) {
          case 0:
            module1538 = f.length > 2 && undefined !== f[2] ? f[2] : {};
            y.prev = 1;
            y.next = 4;
            return regeneratorRuntime.default.awrap(module1536.default.confirmSetupIntent(t, u, module1538));

          case 4:
            if (((o = y.sent), (p = o.setupIntent), !(l = o.error))) {
              y.next = 9;
              break;
            }

            return y.abrupt('return', {
              error: l,
            });

          case 9:
            return y.abrupt('return', {
              setupIntent: p,
            });

          case 12:
            y.prev = 12;
            y.t0 = y.catch(1);
            return y.abrupt('return', {
              error: y.t0,
            });

          case 15:
          case 'end':
            return y.stop();
        }
    },
    null,
    null,
    [[1, 12]],
    Promise
  );
};

exports.createTokenForCVCUpdate = function (t) {
  var u, c, o;
  return regeneratorRuntime.default.async(
    function (p) {
      for (;;)
        switch ((p.prev = p.next)) {
          case 0:
            p.prev = 0;
            p.next = 3;
            return regeneratorRuntime.default.awrap(module1536.default.createTokenForCVCUpdate(t));

          case 3:
            if (((u = p.sent), (c = u.tokenId), !(o = u.error))) {
              p.next = 8;
              break;
            }

            return p.abrupt('return', {
              error: o,
            });

          case 8:
            return p.abrupt('return', {
              tokenId: c,
            });

          case 11:
            p.prev = 11;
            p.t0 = p.catch(0);
            return p.abrupt('return', {
              error: p.t0,
            });

          case 14:
          case 'end':
            return p.stop();
        }
    },
    null,
    null,
    [[0, 11]],
    Promise
  );
};

exports.handleURLCallback = function (t) {
  var module1535;
  return regeneratorRuntime.default.async(
    function (c) {
      for (;;)
        switch ((c.prev = c.next)) {
          case 0:
            c.next = 2;
            return regeneratorRuntime.default.awrap(module1536.default.handleURLCallback(t));

          case 2:
            module1535 = c.sent;
            return c.abrupt('return', module1535);

          case 4:
          case 'end':
            return c.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
};

exports.verifyMicrodepositsForPayment = function (t, c) {
  var o, p, l;
  return regeneratorRuntime.default.async(
    function (f) {
      for (;;)
        switch ((f.prev = f.next)) {
          case 0:
            f.prev = 0;
            f.next = 3;
            return regeneratorRuntime.default.awrap(module1536.default.verifyMicrodeposits(true, t, c));

          case 3:
            if (((o = f.sent), (p = o.paymentIntent), !(l = o.error))) {
              f.next = 8;
              break;
            }

            return f.abrupt('return', {
              error: l,
            });

          case 8:
            return f.abrupt('return', {
              paymentIntent: p,
            });

          case 11:
            f.prev = 11;
            f.t0 = f.catch(0);
            return f.abrupt('return', {
              error: module1535.createError(f.t0),
            });

          case 14:
          case 'end':
            return f.stop();
        }
    },
    null,
    null,
    [[0, 11]],
    Promise
  );
};

exports.verifyMicrodepositsForSetup = function (t, c) {
  var o, p, l;
  return regeneratorRuntime.default.async(
    function (f) {
      for (;;)
        switch ((f.prev = f.next)) {
          case 0:
            f.prev = 0;
            f.next = 3;
            return regeneratorRuntime.default.awrap(module1536.default.verifyMicrodeposits(false, t, c));

          case 3:
            if (((o = f.sent), (p = o.setupIntent), !(l = o.error))) {
              f.next = 8;
              break;
            }

            return f.abrupt('return', {
              error: l,
            });

          case 8:
            return f.abrupt('return', {
              setupIntent: p,
            });

          case 11:
            f.prev = 11;
            f.t0 = f.catch(0);
            return f.abrupt('return', {
              error: module1535.createError(f.t0),
            });

          case 14:
          case 'end':
            return f.stop();
        }
    },
    null,
    null,
    [[0, 11]],
    Promise
  );
};

exports.initPaymentSheet = function (t) {
  var u, c, o;
  return regeneratorRuntime.default.async(
    function (p) {
      for (;;)
        switch ((p.prev = p.next)) {
          case 0:
            p.prev = 0;
            p.next = 3;
            return regeneratorRuntime.default.awrap(module1536.default.initPaymentSheet(t));

          case 3:
            if (((u = p.sent), (c = u.paymentOption), !(o = u.error))) {
              p.next = 8;
              break;
            }

            return p.abrupt('return', {
              error: o,
            });

          case 8:
            return p.abrupt('return', {
              paymentOption: c,
            });

          case 11:
            p.prev = 11;
            p.t0 = p.catch(0);
            return p.abrupt('return', {
              error: p.t0,
            });

          case 14:
          case 'end':
            return p.stop();
        }
    },
    null,
    null,
    [[0, 11]],
    Promise
  );
};

exports.presentPaymentSheet = function () {
  var t, u, c;
  return regeneratorRuntime.default.async(
    function (o) {
      for (;;)
        switch ((o.prev = o.next)) {
          case 0:
            o.prev = 0;
            o.next = 3;
            return regeneratorRuntime.default.awrap(module1536.default.presentPaymentSheet());

          case 3:
            if (((t = o.sent), (u = t.paymentOption), !(c = t.error))) {
              o.next = 8;
              break;
            }

            return o.abrupt('return', {
              error: c,
            });

          case 8:
            return o.abrupt('return', {
              paymentOption: u,
            });

          case 11:
            o.prev = 11;
            o.t0 = o.catch(0);
            return o.abrupt('return', {
              error: o.t0,
            });

          case 14:
          case 'end':
            return o.stop();
        }
    },
    null,
    null,
    [[0, 11]],
    Promise
  );
};

exports.confirmPaymentSheetPayment = function () {
  var t, u;
  return regeneratorRuntime.default.async(
    function (c) {
      for (;;)
        switch ((c.prev = c.next)) {
          case 0:
            c.prev = 0;
            c.next = 3;
            return regeneratorRuntime.default.awrap(module1536.default.confirmPaymentSheetPayment());

          case 3:
            if (((t = c.sent), !(u = t.error))) {
              c.next = 7;
              break;
            }

            return c.abrupt('return', {
              error: u,
            });

          case 7:
            return c.abrupt('return', {});

          case 10:
            c.prev = 10;
            c.t0 = c.catch(0);
            return c.abrupt('return', {
              error: c.t0,
            });

          case 13:
          case 'end':
            return c.stop();
        }
    },
    null,
    null,
    [[0, 10]],
    Promise
  );
};

exports.isGooglePaySupported = function (t) {
  return regeneratorRuntime.default.async(
    function (c) {
      for (;;)
        switch ((c.prev = c.next)) {
          case 0:
            if (((c.t0 = module1535.isAndroid), !c.t0)) {
              c.next = 5;
              break;
            }

            c.next = 4;
            return regeneratorRuntime.default.awrap(module1536.default.isGooglePaySupported(null != t ? t : {}));

          case 4:
            c.t0 = c.sent;

          case 5:
            return c.abrupt('return', c.t0);

          case 6:
          case 'end':
            return c.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
};

exports.initGooglePay = function (t) {
  var u, c;
  return regeneratorRuntime.default.async(
    function (o) {
      for (;;)
        switch ((o.prev = o.next)) {
          case 0:
            o.prev = 0;
            o.next = 3;
            return regeneratorRuntime.default.awrap(module1536.default.initGooglePay(t));

          case 3:
            if (((u = o.sent), !(c = u.error))) {
              o.next = 7;
              break;
            }

            return o.abrupt('return', {
              error: c,
            });

          case 7:
            return o.abrupt('return', {});

          case 10:
            o.prev = 10;
            o.t0 = o.catch(0);
            return o.abrupt('return', {
              error: o.t0,
            });

          case 13:
          case 'end':
            return o.stop();
        }
    },
    null,
    null,
    [[0, 10]],
    Promise
  );
};

exports.presentGooglePay = function (t) {
  var u, c;
  return regeneratorRuntime.default.async(
    function (o) {
      for (;;)
        switch ((o.prev = o.next)) {
          case 0:
            o.prev = 0;
            o.next = 3;
            return regeneratorRuntime.default.awrap(module1536.default.presentGooglePay(t));

          case 3:
            if (((u = o.sent), !(c = u.error))) {
              o.next = 7;
              break;
            }

            return o.abrupt('return', {
              error: c,
            });

          case 7:
            return o.abrupt('return', {});

          case 10:
            o.prev = 10;
            o.t0 = o.catch(0);
            return o.abrupt('return', {
              error: o.t0,
            });

          case 13:
          case 'end':
            return o.stop();
        }
    },
    null,
    null,
    [[0, 10]],
    Promise
  );
};

exports.createGooglePayPaymentMethod = function (t) {
  var u, c, o;
  return regeneratorRuntime.default.async(
    function (p) {
      for (;;)
        switch ((p.prev = p.next)) {
          case 0:
            p.prev = 0;
            p.next = 3;
            return regeneratorRuntime.default.awrap(module1536.default.createGooglePayPaymentMethod(t));

          case 3:
            if (((u = p.sent), (c = u.error), (o = u.paymentMethod), !c)) {
              p.next = 8;
              break;
            }

            return p.abrupt('return', {
              error: c,
            });

          case 8:
            return p.abrupt('return', {
              paymentMethod: o,
            });

          case 11:
            p.prev = 11;
            p.t0 = p.catch(0);
            return p.abrupt('return', {
              error: p.t0,
            });

          case 14:
          case 'end':
            return p.stop();
        }
    },
    null,
    null,
    [[0, 11]],
    Promise
  );
};

exports.openApplePaySetup = function () {
  var t, u;
  return regeneratorRuntime.default.async(
    function (c) {
      for (;;)
        switch ((c.prev = c.next)) {
          case 0:
            c.prev = 0;
            c.next = 3;
            return regeneratorRuntime.default.awrap(module1536.default.openApplePaySetup());

          case 3:
            if (((t = c.sent), !(u = t.error))) {
              c.next = 7;
              break;
            }

            return c.abrupt('return', {
              error: u,
            });

          case 7:
            return c.abrupt('return', {});

          case 10:
            c.prev = 10;
            c.t0 = c.catch(0);
            return c.abrupt('return', {
              error: c.t0,
            });

          case 13:
          case 'end':
            return c.stop();
        }
    },
    null,
    null,
    [[0, 10]],
    Promise
  );
};

exports.collectBankAccountForPayment = function (t, c) {
  var o, p, l;
  return regeneratorRuntime.default.async(
    function (f) {
      for (;;)
        switch ((f.prev = f.next)) {
          case 0:
            f.prev = 0;
            f.next = 3;
            return regeneratorRuntime.default.awrap(module1536.default.collectBankAccount(true, t, c));

          case 3:
            if (((o = f.sent), (p = o.paymentIntent), !(l = o.error))) {
              f.next = 8;
              break;
            }

            return f.abrupt('return', {
              error: l,
            });

          case 8:
            return f.abrupt('return', {
              paymentIntent: p,
            });

          case 11:
            f.prev = 11;
            f.t0 = f.catch(0);
            return f.abrupt('return', {
              error: module1535.createError(f.t0),
            });

          case 14:
          case 'end':
            return f.stop();
        }
    },
    null,
    null,
    [[0, 11]],
    Promise
  );
};

exports.collectBankAccountForSetup = function (t, c) {
  var o, p, l;
  return regeneratorRuntime.default.async(
    function (f) {
      for (;;)
        switch ((f.prev = f.next)) {
          case 0:
            f.prev = 0;
            f.next = 3;
            return regeneratorRuntime.default.awrap(module1536.default.collectBankAccount(false, t, c));

          case 3:
            if (((o = f.sent), (p = o.setupIntent), !(l = o.error))) {
              f.next = 8;
              break;
            }

            return f.abrupt('return', {
              error: l,
            });

          case 8:
            return f.abrupt('return', {
              setupIntent: p,
            });

          case 11:
            f.prev = 11;
            f.t0 = f.catch(0);
            return f.abrupt('return', {
              error: module1535.createError(f.t0),
            });

          case 14:
          case 'end':
            return f.stop();
        }
    },
    null,
    null,
    [[0, 11]],
    Promise
  );
};
