var module24 = require('./24'),
  module25 = require('./25'),
  module1451 = require('./1451'),
  u = (function () {
    function t(o) {
      module24.default(this, t);
      this._binaryString = o;
    }

    module25.default(
      t,
      [
        {
          key: 'isEqual',
          value: function (n) {
            if (!(n instanceof t)) throw new Error('firestore.Blob.isEqual expects an instance of Blob');
            return this._binaryString === n._binaryString;
          },
        },
        {
          key: 'toBase64',
          value: function () {
            return module1451.default.btoa(this._binaryString);
          },
        },
        {
          key: 'toUint8Array',
          value: function () {
            return new Uint8Array(
              this._binaryString.split('').map(function (t) {
                return t.charCodeAt(0);
              })
            );
          },
        },
        {
          key: 'toString',
          value: function () {
            return 'firestore.Blob(base64: ' + this.toBase64() + ')';
          },
        },
      ],
      [
        {
          key: 'fromBase64String',
          value: function (n) {
            if ('string' != typeof n || n.length < 1) throw new Error('firestore.Blob.fromBase64String expects a string of at least 1 character in length');
            return new t(module1451.default.atob(n));
          },
        },
        {
          key: 'fromUint8Array',
          value: function (n) {
            if (!(n instanceof Uint8Array)) throw new Error('firestore.Blob.fromUint8Array expects an instance of Uint8Array');
            return new t(
              Array.prototype.map
                .call(n, function (t) {
                  return String.fromCharCode(t);
                })
                .join('')
            );
          },
        },
      ]
    );
    return t;
  })();

exports.default = u;
