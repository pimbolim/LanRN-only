var module24 = require('./24'),
  module25 = require('./25'),
  s = (function () {
    function t(u) {
      module24.default(this, t);
      this._link = u;
    }

    module25.default(t, [
      {
        key: 'setCampaign',
        value: function (t) {
          this._campaign = t;
          return this._link;
        },
      },
      {
        key: 'setContent',
        value: function (t) {
          this._content = t;
          return this._link;
        },
      },
      {
        key: 'setMedium',
        value: function (t) {
          this._medium = t;
          return this._link;
        },
      },
      {
        key: 'setSource',
        value: function (t) {
          this._source = t;
          return this._link;
        },
      },
      {
        key: 'setTerm',
        value: function (t) {
          this._term = t;
          return this._link;
        },
      },
      {
        key: 'build',
        value: function () {
          return {
            campaign: this._campaign,
            content: this._content,
            medium: this._medium,
            source: this._source,
            term: this._term,
          };
        },
      },
    ]);
    return t;
  })();

exports.default = s;
