var module24 = require('./24'),
  module25 = require('./25'),
  module1914 = new (require('./1914').default)('EventTarget');

module1914.disable();

var v = (function () {
  function t() {
    module24.default(this, t);
    module1914.info('constructor called');
    this.listeners = {};
  }

  module25.default(t, [
    {
      key: 'addEventListener',
      value: function (t, n) {
        module1914.info('add event listener', t, n);
        if (!(t in this.listeners)) this.listeners[t] = [];
        this.listeners[t].push(n);
      },
    },
    {
      key: 'removeEventListener',
      value: function (t, n) {
        if ((module1914.info('remove event listener', t, n), t in this.listeners)) {
          var s = this.listeners[t];

          for (var v in s)
            if (n === s[v]) {
              s.splice(v, 1);
              return this.removeEventListener(t, n);
            }
        }
      },
    },
    {
      key: 'dispatchEvent',
      value: function (t, n) {
        if ((module1914.info('dispatch event', n), t in this.listeners)) {
          var s = this.listeners[t];

          for (var v in s) s[v].call(this, n);
        }
      },
    },
    {
      key: 'clearEventListeners',
      value: function () {
        for (var t in this.listeners) delete this.listeners[t];
      },
    },
  ]);
  return t;
})();

exports.default = v;
