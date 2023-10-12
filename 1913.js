var module20 = require('./20'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module1904 = require('./1904'),
  module1908 = require('./1908'),
  module1914 = require('./1914'),
  module1915 = require('./1915'),
  module1916 = require('./1916');

function _() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var p = new module1914.default('Blob'),
  B = module1904.default.dirs.DocumentDir + '/ReactNativeBlobUtil-blobs/';
p.disable();

var k = (function (t) {
  module35.default(y, t);

  var module20 = y,
    module1908 = _(),
    h = function () {
      var t,
        l = module34.default(module20);

      if (module1908) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(l, arguments, o);
      } else t = l.apply(this, arguments);

      return module37.default(this, t);
    };

  function y(t, n, o) {
    var f;
    module24.default(this, y);
    (f = h.call(this)).isReactNativeBlobUtilPolyfill = true;
    f.multipartBoundary = null;
    f._ref = null;
    f._blobCreated = false;
    f._onCreated = [];
    f._closed = false;
    n = n || {};
    f.cacheName = w();
    f.isReactNativeBlobUtilPolyfill = true;
    f.isDerived = o;
    f.type = n.type || 'text/plain';
    p.verbose('Blob constructor called', 'mime', f.type, 'type', typeof t, 'length', t ? t.length : 0);
    f._ref = B + f.cacheName;
    var s = null;

    if ((t || (t = ''), t.isReactNativeBlobUtilPolyfill)) {
      p.verbose('create Blob cache file from Blob object');
      f._ref = String(t.getReactNativeBlobUtilRef());
      var v = f._ref;
      s = module1904.default.exists(v).then(function (n) {
        if (n)
          return module1904.default
            .writeFile(v, t, 'uri')
            .then(function (t) {
              return Promise.resolve(t);
            })
            .catch(function (t) {
              throw 'ReactNativeBlobUtil Blob file creation error, ' + t;
            });
        throw 'could not create Blob from path ' + v + ', file not exists';
      });
    } else if (t instanceof FormData) {
      p.verbose('create Blob cache file from FormData', t);
      var b = 'ReactNativeBlobUtil-' + f.cacheName + '-' + Date.now();
      f.multipartBoundary = b;

      var _ = t.getParts(),
        k = [];

      if (_) {
        for (var P in _) {
          k.push('\r\n--' + b + '\r\n');
          var C = _[P];

          for (var N in C.headers) k.push(N + ': ' + C.headers[N] + '\r\n');

          k.push('\r\n');
          if (C.isReactNativeBlobUtilPolyfill) k.push(C);
          else k.push(C.string);
        }

        p.verbose('FormData array', k);
        k.push('\r\n--' + b + '--\r\n');
        s = R(f._ref, k);
      } else s = module1904.default.writeFile(f._ref, '', 'utf8');
    } else if ('string' == typeof t && t.startsWith('ReactNativeBlobUtil-file://')) {
      p.verbose('create Blob cache file from file path', t);
      f._isReference = true;
      f._ref = String(t).replace('ReactNativeBlobUtil-file://', '');
      var U = f._ref;
      if (o) return module37.default(f);
      s = module1904.default.stat(U).then(function (t) {
        return Promise.resolve(t.size);
      });
    } else if ('string' == typeof t) {
      var D = 'utf8',
        F = String(f.type);
      if (/(application\/octet|\;base64)/i.test(F)) D = 'base64';
      else t = t.toString();
      f.type = String(f.type).replace(/;base64/gi, '');
      p.verbose('create Blob cache file from string', 'encode', D);
      s = module1904.default.writeFile(f._ref, t, D).then(function (t) {
        return Promise.resolve(t);
      });
    } else
      Array.isArray(t)
        ? (p.verbose('create Blob cache file from mixed array', t), (s = R(f._ref, t)))
        : ((t = t.toString()),
          (s = module1904.default.writeFile(f._ref, t, 'utf8').then(function (t) {
            return Promise.resolve(t);
          })));

    if (s)
      s.then(function (t) {
        f.size = t;

        f._invokeOnCreateEvent();
      }).catch(function (t) {
        p.error('ReactNativeBlobUtil could not create Blob : ' + f._ref, t);
      });
    return f;
  }

  module25.default(
    y,
    [
      {
        key: 'blobPath',
        get: function () {
          return this._ref;
        },
      },
      {
        key: 'onCreated',
        value: function (t) {
          p.verbose('#register blob onCreated', this._blobCreated);
          if (this._blobCreated) t(this);
          else this._onCreated.push(t);
          return this;
        },
      },
      {
        key: 'markAsDerived',
        value: function () {
          this._isDerived = true;
        },
      },
      {
        key: 'isDerived',
        get: function () {
          return this._isDerived || false;
        },
      },
      {
        key: 'getReactNativeBlobUtilRef',
        value: function () {
          return this._ref;
        },
      },
      {
        key: 'slice',
        value: function (t, n) {
          var l = this,
            o = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : '';
          if (this._closed) throw 'Blob has been released.';
          p.verbose('slice called', t, n, o);
          var f = B + w();
          p.debug('fs.slice new blob will at', f);
          var u = new y(
            module1915.default.wrap(f),
            {
              type: o,
            },
            true
          );
          module1904.default
            .exists(B)
            .then(function (t) {
              return t ? Promise.resolve() : module1904.default.mkdir(B);
            })
            .then(function () {
              return module1904.default.slice(l._ref, f, t, n);
            })
            .then(function (t) {
              p.debug('fs.slice done', t);

              u._invokeOnCreateEvent();

              true;
            })
            .catch(function (t) {
              console.warn('Blob.slice failed:', t);
              true;
            });
          p.debug('slice returning new Blob');
          return u;
        },
      },
      {
        key: 'readBlob',
        value: function (t) {
          if (this._closed) throw 'Blob has been released.';
          return module1904.default.readFile(this._ref, t || 'utf8');
        },
      },
      {
        key: 'close',
        value: function () {
          if (this._closed) return Promise.reject('Blob has been released.');
          else {
            this._closed = true;
            return module1904.default.unlink(this._ref).catch(function (t) {
              console.warn(t);
            });
          }
        },
      },
      {
        key: 'safeClose',
        value: function () {
          if (this._closed) return Promise.reject('Blob has been released.');
          else {
            this._closed = true;
            return this._isReference
              ? Promise.resolve()
              : module1904.default.unlink(this._ref).catch(function (t) {
                  console.warn(t);
                });
          }
        },
      },
      {
        key: '_invokeOnCreateEvent',
        value: function () {
          p.verbose('invoke create event', this._onCreated);
          this._blobCreated = true;
          var t = this._onCreated;

          for (var n in t) 'function' == typeof t[n] && t[n](this);

          delete this._onCreated;
        },
      },
    ],
    [
      {
        key: 'clearCache',
        value: function () {
          return module1904.default.unlink(B).then(function () {
            return module1904.default.mkdir(B);
          });
        },
      },
      {
        key: 'build',
        value: function (t, n) {
          return new Promise(function (l, o) {
            new y(t, n).onCreated(l);
          });
        },
      },
      {
        key: 'setLog',
        value: function (t) {
          if (-1 === t) p.disable();
          else p.level(t);
        },
      },
    ]
  );
  return y;
})(module1916.default);

function w() {
  return 'blob-' + module1908.default();
}

function R(t, l) {
  var o = module1904.default.writeFile(t, ''),
    f = [],
    u = 0;

  for (var s in l) {
    var v = l[s];
    if (v) v.isReactNativeBlobUtilPolyfill ? f.push([t, v._ref, 'uri']) : 'string' == typeof v ? f.push([t, v, 'utf8']) : Array.isArray(v) && f.push([t, v, 'ascii']);
  }

  var h = function (t) {
    o = o.then(
      function (l) {
        if (l) u += l;
        p.verbose('mixed blob write', f[t], l);
        return module1904.default.appendFile.apply(module1904.default, module20.default(this));
      }.bind(f[t])
    );
  };

  for (var b in f) h(b);

  return o.then(function () {
    return Promise.resolve(u);
  });
}

exports.default = k;
