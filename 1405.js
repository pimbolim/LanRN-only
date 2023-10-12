var module24 = require('./24'),
  module25 = require('./25'),
  module1403 = require('./1403'),
  module1404 = require('./1404'),
  l = (function () {
    function t(o, l, c) {
      if ((module24.default(this, t), !l.moduleName)) throw new Error('Missing module name');
      if (!l.namespace) throw new Error('Missing namespace');
      var f = l.moduleName;
      this._app = o;
      this._customUrlOrRegion = c;
      this.namespace = l.namespace;
      module1404.initialiseNativeModule(this, l, c);
      module1403.initialiseLogger(this, o.name + ':' + f.replace('RNFirebase', ''));
    }

    module25.default(t, [
      {
        key: 'app',
        get: function () {
          return this._app;
        },
      },
      {
        key: 'log',
        get: function () {
          return module1403.getLogger(this);
        },
      },
    ]);
    return t;
  })();

exports.default = l;
