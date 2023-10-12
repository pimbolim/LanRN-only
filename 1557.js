exports.StripeProvider = function (t) {
  var n = t.children,
    u = t.publishableKey,
    f = t.merchantIdentifier,
    p = t.threeDSecureParams,
    s = t.stripeAccountId,
    b = t.urlScheme,
    O = t.setReturnUrlSchemeOnAndroid;
  React.useEffect(
    function () {
      if (u)
        module1535.isAndroid
          ? module1536.default.initialise({
              publishableKey: u,
              appInfo: y,
              stripeAccountId: s,
              threeDSecureParams: p,
              urlScheme: b,
              setReturnUrlSchemeOnAndroid: O,
            })
          : module1536.default.initialise({
              publishableKey: u,
              appInfo: y,
              stripeAccountId: s,
              threeDSecureParams: p,
              merchantIdentifier: f,
              urlScheme: b,
            });
    },
    [u, f, s, p, b, O]
  );
  return React.default.createElement(React.default.Fragment, null, n);
};

var regeneratorRuntime = require('regenerator-runtime'),
  module47 = require('./47'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = p(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var f = c ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (f && (f.get || f.set)) Object.defineProperty(o, l, f);
        else o[l] = t[l];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('react')),
  module1536 = require('./1536'),
  module1535 = require('./1535'),
  module1558 = require('./1558');

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (p = function (t) {
    return t ? u : n;
  })(t);
}

function s(t, n) {
  var u = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    if (n)
      o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    u.push.apply(u, o);
  }

  return u;
}

function b(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      s(Object(o), true).forEach(function (n) {
        module47.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      s(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

var O = module1558.default.repository,
  y = {
    name: module1535.shouldAttributeExpo() ? module1558.default.name + '/expo' : module1558.default.name,
    url: O.url || O,
    version: module1558.default.version,
    partnerId: module1535.shouldAttributeExpo() ? 'pp_partner_JBN7LkABco2yUu' : undefined,
  };

exports.initStripe = function (t) {
  var u;
  return regeneratorRuntime.default.async(
    function (n) {
      for (;;)
        switch ((n.prev = n.next)) {
          case 0:
            u = b(
              b({}, t),
              {},
              {
                appInfo: y,
              }
            );
            module1536.default.initialise(u);

          case 2:
          case 'end':
            return n.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
};
