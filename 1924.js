require(d[3]);

require('./1905');

var module25 = require('./25'),
  module24 = require('./24'),
  module1904 = require('./1904'),
  module1913 = require('./1913'),
  module1915 = require('./1915'),
  module1911 = require('./1911'),
  h = module25.default(function t(n, h, f) {
    var p = this;
    module24.default(this, t);
    this.data = f;
    this.taskId = n;
    this.type = h.rnfbEncode;
    this.respInfo = h;

    this.info = function () {
      return p.respInfo;
    };

    this.array = function () {
      if (!h.headers['Content-Type']) h.headers['content-type'];
      return new Promise(function (t, n) {
        switch (p.type) {
          case 'base64':
            break;

          case 'path':
            module1904.default.readFile(p.data, 'ascii').then(t);
        }
      });
    };

    this.blob = function () {
      var t = h.headers['Content-Type'] || h.headers['content-type'];
      return new Promise(function (n, s) {
        switch (p.type) {
          case 'base64':
            module1913.default
              .build(p.data, {
                type: t + ';BASE64',
              })
              .then(n);
            break;

          case 'path':
            module1913.default
              .build(module1915.default.wrap(p.data), {
                type: t,
              })
              .then(n);
            break;

          default:
            module1913.default
              .build(p.data, {
                type: 'text/plain',
              })
              .then(n);
        }
      });
    };

    this.text = function () {
      switch (p.type) {
        case 'base64':
          return module1911.default.decode(p.data);

        case 'path':
          return module1904.default.readFile(p.data, 'base64').then(function (t) {
            return Promise.resolve(module1911.default.decode(t));
          });

        default:
          return p.data;
      }
    };

    this.json = function () {
      switch (p.type) {
        case 'base64':
          return JSON.parse(module1911.default.decode(p.data));

        case 'path':
          return module1904.default.readFile(p.data, 'utf8').then(function (t) {
            return Promise.resolve(JSON.parse(t));
          });

        default:
          return JSON.parse(p.data);
      }
    };

    this.base64 = function () {
      switch (p.type) {
        case 'base64':
          return p.data;

        case 'path':
          return module1904.default.readFile(p.data, 'base64');

        default:
          return module1911.default.encode(p.data);
      }
    };

    this.flush = function () {
      var t = p.path();
      if (t && 'path' === p.type) return module1904.default.unlink(t);
    };

    this.path = function () {
      return 'path' === p.type ? p.data : null;
    };

    this.session = function (t) {
      if ('path' === p.type) return module1904.default.session(t).add(p.data);
      else {
        console.warn('only file paths can be add into session.');
        return null;
      }
    };

    this.readStream = function (t) {
      if ('path' === p.type) return module1904.default.readStream(p.data, t);
      else {
        console.warn('ReactNativeBlobUtil', 'this response data does not contains any available stream');
        return null;
      }
    };

    this.readFile = function (t) {
      if ('path' === p.type) return module1904.default.readFile(p.data, t);
      else {
        console.warn('ReactNativeBlobUtil', 'this response does not contains a readable file');
        return null;
      }
    };
  });

exports.FetchBlobResponse = h;
