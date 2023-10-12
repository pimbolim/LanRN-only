var module25 = require('./25'),
  module24 = require('./24'),
  module1283 = require('./1283'),
  module603 = require('./603'),
  module1262 = require('./1262'),
  c = function (t) {
    return t.isValid ? 'valid' : t.isPotentiallyValid ? 'incomplete' : 'invalid';
  },
  f = {
    gaps: [4, 8, 12],
    lengths: [16],
    code: {
      size: 3,
    },
  },
  o = module25.default(function t(l) {
    var o = this;
    module24.default(this, t);

    this.validateValues = function (t) {
      var l = module1283.default.cardholderName(t.name),
        n = module1283.default.number(t.number),
        p = module1283.default.expirationDate(t.expiry),
        y = (n.card || f).code.size,
        h = module1283.default.cvv(t.cvc, y);
      if (module1262.isEasyPayTestCard(t.number)) n.isValid = true;

      var _ = module603.pick(
        {
          name: c(l),
          number: c(n),
          expiry: c(p),
          cvc: c(h),
        },
        o._displayedFields
      );

      return {
        valid: module603.every(module603.values(_), function (t) {
          return 'valid' === t;
        }),
        status: _,
      };
    };

    this._displayedFields = l;
  });

exports.default = o;
