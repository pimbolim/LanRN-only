var module24 = require('./24'),
  module25 = require('./25'),
  module603 = require('./603'),
  module849 = require('./849'),
  module602 = require('./602'),
  module850 = require('./850'),
  s = module849.PhoneNumberUtil.getInstance(),
  y = null,
  v = (function () {
    function t() {
      module24.default(this, t);
    }

    module25.default(
      t,
      [
        {
          key: 'getAllCountries',
          value: function () {
            return module602.default.getAll();
          },
        },
        {
          key: 'getDialCode',
          value: function (t) {
            var u = '';
            if ('+' === t.charAt(0))
              for (var n = '', l = 0; l < t.length; l += 1) {
                var f = t.charAt(l);
                if (this.isNumeric(f) && ((n += f), module602.default.getCountryCodes()[n] && (u = t.substr(0, l + 1)), 4 === n.length)) break;
              }
            return u;
          },
        },
        {
          key: 'getNumeric',
          value: function (t) {
            return t.replace(/\D/g, '');
          },
        },
        {
          key: 'isNumeric',
          value: function (t) {
            return !isNaN(parseFloat(t)) && isFinite(t);
          },
        },
        {
          key: 'getCountryCodeOfNumber',
          value: function (t) {
            var u = this.getDialCode(t),
              n = this.getNumeric(u),
              f = module602.default.getCountryCodes()[n];
            return f
              ? module603.default.first(
                  f.filter(function (t) {
                    return t;
                  })
                )
              : '';
          },
        },
        {
          key: 'parse',
          value: function (t, u) {
            try {
              return s.parse(t, u);
            } catch (t) {
              return null;
            }
          },
        },
        {
          key: 'isValidNumber',
          value: function (t, u) {
            var n = this.parse(t, u);
            return !!n && s.isValidNumber(n);
          },
        },
        {
          key: 'getNumberType',
          value: function (t, u) {
            var n = this.parse(t, u),
              f = n ? s.getNumberType(n) : -1;
            return module603.default.findKey(module850.default, function (t) {
              return t === f;
            });
          },
        },
        {
          key: 'getCountryDataByCode',
          value: function (t) {
            return module602.default.getCountryDataByCode(t);
          },
        },
      ],
      [
        {
          key: 'getInstance',
          value: function () {
            if (!y) y = new t();
            return y;
          },
        },
      ]
    );
    return t;
  })().getInstance();

exports.default = v;
