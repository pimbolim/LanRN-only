var module24 = require('./24'),
  module25 = require('./25'),
  h = (function () {
    function t(u) {
      module24.default(this, t);
      this.path = u ? (u.length > 1 && u.endsWith('/') ? u.substring(0, u.length - 1) : u) : '/';
    }

    module25.default(t, [
      {
        key: 'key',
        get: function () {
          return '/' === this.path ? null : this.path.substring(this.path.lastIndexOf('/') + 1);
        },
      },
    ]);
    return t;
  })();

exports.default = h;
