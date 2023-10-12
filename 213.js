require('./49');

var module24 = require('./24'),
  module25 = require('./25'),
  module214 = require('./214'),
  module141 = require('./141'),
  o = (function () {
    function t() {
      module24.default(this, t);
      this.__nativeTVNavigationEventListener = null;
      this.__nativeTVNavigationEventEmitter = null;
    }

    module25.default(t, [
      {
        key: 'enable',
        value: function (t, n) {
          this.__nativeTVNavigationEventEmitter = new module141(module214.default);
          this.__nativeTVNavigationEventListener = this.__nativeTVNavigationEventEmitter.addListener('onHWKeyEvent', function (v) {
            if (n) n(t, v);
          });
        },
      },
      {
        key: 'disable',
        value: function () {
          if (this.__nativeTVNavigationEventListener) {
            this.__nativeTVNavigationEventListener.remove();

            delete this.__nativeTVNavigationEventListener;
          }

          if (this.__nativeTVNavigationEventEmitter) delete this.__nativeTVNavigationEventEmitter;
        },
      },
    ]);
    return t;
  })();

module.exports = o;
