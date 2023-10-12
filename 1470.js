var module24 = require('./24'),
  module25 = require('./25'),
  u = (function () {
    function t(l) {
      module24.default(this, t);
      this._link = l;
    }

    module25.default(t, [
      {
        key: 'setDescriptionText',
        value: function (t) {
          this._descriptionText = t;
          return this._link;
        },
      },
      {
        key: 'setImageUrl',
        value: function (t) {
          this._imageUrl = t;
          return this._link;
        },
      },
      {
        key: 'setTitle',
        value: function (t) {
          this._title = t;
          return this._link;
        },
      },
      {
        key: 'build',
        value: function () {
          return {
            descriptionText: this._descriptionText,
            imageUrl: this._imageUrl,
            title: this._title,
          };
        },
      },
    ]);
    return t;
  })();

exports.default = u;
