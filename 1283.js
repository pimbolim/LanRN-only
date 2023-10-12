var t =
    (this && this.__createBinding) ||
    (Object.create
      ? function (t, n, o, c) {
          if (undefined === c) c = o;
          Object.defineProperty(t, c, {
            enumerable: true,
            get: function () {
              return n[o];
            },
          });
        }
      : function (t, n, o, c) {
          if (undefined === c) c = o;
          t[c] = n[o];
        }),
  n =
    (this && this.__setModuleDefault) ||
    (Object.create
      ? function (t, n) {
          Object.defineProperty(t, 'default', {
            enumerable: true,
            value: n,
          });
        }
      : function (t, n) {
          t.default = n;
        }),
  module1284 = (
    (this && this.__importStar) ||
    function (o) {
      if (o && o.__esModule) return o;
      var c = {};
      if (null != o) for (var u in o) 'default' !== u && Object.prototype.hasOwnProperty.call(o, u) && t(c, o, u);
      n(c, o);
      return c;
    }
  )(require('./1284')),
  module1291 = require('./1291'),
  module1292 = require('./1292'),
  module1294 = require('./1294'),
  module1298 = require('./1298'),
  module1296 = require('./1296'),
  module1299 = require('./1299'),
  module1300 = require('./1300'),
  v = {
    creditCardType: module1284,
    cardholderName: module1291.cardholderName,
    number: module1292.cardNumber,
    expirationDate: module1294.expirationDate,
    expirationMonth: module1298.expirationMonth,
    expirationYear: module1296.expirationYear,
    cvv: module1299.cvv,
    postalCode: module1300.postalCode,
  };

module.exports = v;
