var module24 = require('./24'),
  module25 = require('./25'),
  u = (function () {
    function n(o, u, s) {
      module24.default(this, n);
      this._name = u;
      this._groupId = o;
      this._description = s;
    }

    module25.default(n, [
      {
        key: 'groupId',
        get: function () {
          return this._groupId;
        },
      },
      {
        key: 'name',
        get: function () {
          return this._name;
        },
      },
      {
        key: 'description',
        get: function () {
          return this._description;
        },
      },
      {
        key: 'build',
        value: function () {
          if (!this._groupId) throw new Error('AndroidChannelGroup: Missing required `groupId` property');
          if (!this._name) throw new Error('AndroidChannelGroup: Missing required `name` property');
          return {
            name: this._name,
            groupId: this._groupId,
            description: this._description,
            channels: [],
          };
        },
      },
    ]);
    return n;
  })();

exports.default = u;
