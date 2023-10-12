var module24 = require('./24'),
  module25 = require('./25'),
  module1465 = require('./1465'),
  module1466 = require('./1466'),
  module1467 = require('./1467'),
  module1468 = require('./1468'),
  module1469 = require('./1469'),
  module1470 = require('./1470'),
  c = (function () {
    function t(s, c) {
      module24.default(this, t);
      this._analytics = new module1465.default(this);
      this._android = new module1466.default(this);
      this._domainURIPrefix = c;
      this._ios = new module1467.default(this);
      this._itunes = new module1468.default(this);
      this._link = s;
      this._navigation = new module1469.default(this);
      this._social = new module1470.default(this);
    }

    module25.default(t, [
      {
        key: 'analytics',
        get: function () {
          return this._analytics;
        },
      },
      {
        key: 'android',
        get: function () {
          return this._android;
        },
      },
      {
        key: 'ios',
        get: function () {
          return this._ios;
        },
      },
      {
        key: 'itunes',
        get: function () {
          return this._itunes;
        },
      },
      {
        key: 'navigation',
        get: function () {
          return this._navigation;
        },
      },
      {
        key: 'social',
        get: function () {
          return this._social;
        },
      },
      {
        key: 'build',
        value: function () {
          if (!this._link) throw new Error('DynamicLink: Missing required `link` property');
          if (!this._domainURIPrefix) throw new Error('DynamicLink: Missing required `domainURIPrefix` property');
          return {
            analytics: this._analytics.build(),
            android: this._android.build(),
            domainURIPrefix: this._domainURIPrefix,
            ios: this._ios.build(),
            itunes: this._itunes.build(),
            link: this._link,
            navigation: this._navigation.build(),
            social: this._social.build(),
          };
        },
      },
    ]);
    return t;
  })();

exports.default = c;
