var module24 = require('./24'),
  module25 = require('./25'),
  ReactNative = require('react-native'),
  module1908 = require('./1908'),
  f = ReactNative.NativeModules.ReactNativeBlobUtil,
  u = ReactNative.DeviceEventEmitter,
  c = (function () {
    function t(o, s, f, c) {
      var l = this;
      if ((module24.default(this, t), (this.tick = 10), !o)) throw Error('ReactNativeBlobUtil could not open file stream with empty `path`');
      this.encoding = s || 'utf8';
      this.bufferSize = f;
      this.path = o;
      this.closed = false;
      this.tick = c;

      this._onData = function () {};

      this._onEnd = function () {};

      this._onError = function () {};

      this.streamId = 'RNFBRS' + module1908.default();
      var v = u.addListener(this.streamId, function (t) {
        var n = t.event,
          o = t.code,
          s = t.detail;
        if (l._onData && 'data' === n) l._onData(s);
        else {
          if (l._onEnd && 'end' === n) l._onEnd(s);
          else {
            var h = new Error(s);
            if (((h.code = o || 'EUNSPECIFIED'), !l._onError)) throw h;

            l._onError(h);
          }

          if (!('error' !== n && 'end' !== n)) {
            v.remove();
            l.closed = true;
          }
        }
      });
    }

    module25.default(t, [
      {
        key: 'open',
        value: function () {
          if (this.closed) throw new Error('Stream closed');
          f.readStream(this.path, this.encoding, this.bufferSize || 10240, this.tick || -1, this.streamId);
        },
      },
      {
        key: 'onData',
        value: function (t) {
          this._onData = t;
        },
      },
      {
        key: 'onError',
        value: function (t) {
          this._onError = t;
        },
      },
      {
        key: 'onEnd',
        value: function (t) {
          this._onEnd = t;
        },
      },
    ]);
    return t;
  })();

exports.default = c;
