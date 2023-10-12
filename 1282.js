var module20 = require('./20'),
  module25 = require('./25'),
  module24 = require('./24'),
  module1283 = require('./1283'),
  module603 = require('./603'),
  module1301 = require('./1301'),
  f = function () {
    var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : '',
      n = arguments.length > 1 ? arguments[1] : undefined;
    return t.substr(0, n);
  },
  v = function () {
    var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : '',
      n = arguments.length > 1 ? arguments[1] : undefined,
      o = [0].concat(n).concat([t.length]);
    return o
      .map(function (n, u) {
        if (0 === u) return '';
        var s = o[u - 1];
        return t.substr(s, n - s);
      })
      .filter(function (t) {
        return '' !== t;
      })
      .join(' ');
  },
  p = {
    gaps: [4, 8, 12],
    lengths: [16],
    code: {
      size: 3,
    },
  },
  h = module25.default(function t(o) {
    var h = this;
    module24.default(this, t);

    this.formatValues = function (t) {
      var n = module1283.default.number(t.number).card || p;
      return module603.pick(
        {
          type: n.type,
          niceType: n.niceType,
          number: h._formatNumber(t.number, n),
          expiry: h._formatExpiry(t.expiry),
          cvc: h._formatCVC(t.cvc, n),
          name: module1301.removeLeadingSpaces(t.name),
          postalCode: module1301.removeNonNumber(t.postalCode),
        },
        h._displayedFields
      );
    };

    this._formatNumber = function (t, n) {
      var o = module1301.removeNonNumber(t),
        u = n.lengths[n.lengths.length - 1],
        s = f(o, u);
      return v(s, n.gaps);
    };

    this._formatExpiry = function (t) {
      var n = f(module1301.removeNonNumber(t), 4);
      return n.match(/^[2-9]$/) ? '0' + n : n.length > 2 ? n.substr(0, 2) + '/' + n.substr(2, n.length) : n;
    };

    this._formatCVC = function (t, n) {
      var o = n.code.size;
      return f(module1301.removeNonNumber(t), o);
    };

    this._displayedFields = [].concat(module20.default(o), ['type', 'niceType']);
  });

exports.default = h;
