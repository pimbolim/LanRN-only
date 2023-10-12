var module24 = require('./24'),
  module25 = require('./25'),
  _ = (function (...args) {
    function n() {
      module24.default(this, n);
      this._segments = args;
    }

    module25.default(n, null, [
      {
        key: 'documentId',
        value: function () {
          return f;
        },
      },
    ]);
    return n;
  })();

exports.default = _;
var f = new _('__name__');
exports.DOCUMENT_ID = f;
