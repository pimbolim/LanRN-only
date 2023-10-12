var regeneratorRuntime = require('regenerator-runtime'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = l(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      p = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var f = p ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (f && (f.get || f.set)) Object.defineProperty(u, c, f);
        else u[c] = t[c];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  module1532 = require('./1532');

function l(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (l = function (t) {
    return t ? o : n;
  })(t);
}

var p = React.default.memo(
  function (t) {
    var l = t.onIsSupported,
      p = t.showPayment,
      c = t.stripeData,
      f = t.onSucessPayment,
      s = t.onFailPayment,
      y = module1532.useApplePay(),
      v = y.presentApplePay,
      P = y.confirmApplePayPayment,
      b = y.isApplePaySupported;
    React.useEffect(function () {
      module1532.initStripe({
        publishableKey: 'pk_live_5pvjJ1OSNIZDppNdcrffaVjD',
        merchantIdentifier: 'merchant.com.lanidor.applepay',
      });
      l(b);
    }, []);
    React.useEffect(
      function () {
        if (p && c) h();
      },
      [p, c]
    );

    var h = function () {
      var t, React, u, l;
      return regeneratorRuntime.default.async(
        function (p) {
          for (;;)
            switch ((p.prev = p.next)) {
              case 0:
                t = c.amount / 100;
                React = t.toFixed(2).toString();
                p.next = 4;
                return regeneratorRuntime.default.awrap(
                  v({
                    cartItems: [
                      {
                        label: 'Lanidor',
                        amount: React,
                        paymentType: 'Immediate',
                      },
                    ],
                    country: 'PT',
                    currency: c.currency,
                  })
                );

              case 4:
                if (((u = p.sent), !(l = u.error))) {
                  p.next = 10;
                  break;
                }

                console.log('\ud83d\ude80 ~ file: stripe-handle.tsx:46 ~ pay ~ error', l);
                p.next = 15;
                break;

              case 10:
                p.next = 12;
                return regeneratorRuntime.default.awrap(P(c.client_secret));

              case 12:
                if (p.sent.error) s();
                else f();

              case 15:
              case 'end':
                return p.stop();
            }
        },
        null,
        null,
        null,
        Promise
      );
    };

    return null;
  },
  function (t, n) {
    return (null == t ? undefined : t.showPayment) == (null == n ? undefined : n.showPayment) && (null == t ? undefined : t.stripeData) == (null == n ? undefined : n.stripeData);
  }
);
exports.default = p;
