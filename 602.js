var module24 = require('./24'),
  module25 = require('./25'),
  module603 = require('./603'),
  s = null,
  module604 = (function () {
    function t() {
      module24.default(this, t);
      this.countryCodes = [];
      this.countriesData = null;
    }

    module25.default(
      t,
      [
        {
          key: 'setCustomCountriesData',
          value: function (t) {
            this.countriesData = t;
          },
        },
        {
          key: 'addCountryCode',
          value: function (t, n, o) {
            if (!(n in this.countryCodes)) this.countryCodes[n] = [];
            var u = o || 0;
            this.countryCodes[n][u] = t;
          },
        },
        {
          key: 'getAll',
          value: function () {
            if (!this.countries) this.countries = module603.orderBy(this.countriesData || require('./604'), ['name'], ['asc']);
            return this.countries;
          },
        },
        {
          key: 'getCountryCodes',
          value: function () {
            var t = this;
            if (!this.countryCodes.length)
              this.getAll().forEach(function (n) {
                t.addCountryCode(n.iso2, n.dialCode, n.priority);
                if (n.areaCodes)
                  n.areaCodes.forEach(function (o) {
                    t.addCountryCode(n.iso2, n.dialCode + o);
                  });
              });
            return this.countryCodes;
          },
        },
        {
          key: 'getCountryDataByCode',
          value: function (t) {
            return module603.find(this.getAll(), function (n) {
              return n.iso2 === t;
            });
          },
        },
      ],
      [
        {
          key: 'getInstance',
          value: function () {
            if (!s) s = new t();
            return s;
          },
        },
      ]
    );
    return t;
  })().getInstance();

exports.default = module604;
