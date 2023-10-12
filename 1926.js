require('./1924');

var module11 = require('./11'),
  module25 = require('./25'),
  module24 = require('./24'),
  module1914 = require('./1914'),
  module1913 = require('./1913'),
  module1922 = require('./1922'),
  module1915 = require('./1915'),
  c = new module1914.default('FetchPolyfill');

c.disable();
var b = module25.default(function t(s) {
  module24.default(this, t);
  module11.default(this, new p(s));
});
exports.default = b;

var p = module25.default(function t(n) {
    module24.default(this, t);

    this.build = function () {
      return function (t) {
        var s = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
          o = s.body,
          f = Promise.resolve(),
          b = null;
        s.headers = s.headers || {};
        var p,
          y,
          R,
          P = s['Content-Type'] || s['content-type'],
          w = s.headers['Content-Type'] || s.headers['content-type'];
        s.headers['Content-Type'] = P || w;
        s.headers['content-type'] = P || w;
        s.method = s.method || 'GET';
        if (o)
          o instanceof FormData
            ? (c.verbose('convert FormData to blob body'),
              (f = module1913.default.build(o).then(function (t) {
                b = t;
                s.headers['Content-Type'] = 'multipart/form-data;boundary=' + t.multipartBoundary;
                return Promise.resolve(module1915.default.wrap(t._ref));
              })))
            : (f = o.isReactNativeBlobUtilPolyfill
                ? Promise.resolve(module1915.default.wrap(o.blobPath))
                : 'object' != typeof o && 'application/json' !== s.headers['Content-Type']
                ? Promise.resolve(JSON.stringify(o))
                : 'string' != typeof o
                ? Promise.resolve(o.toString())
                : Promise.resolve(o));
        var I = null,
          j = f.then(function (o) {
            var f = module1922.config(n).fetch(s.method, t, s.headers, o);
            I = f;
            if (p) f.progress(p);
            if (y) f.uploadProgress(y);
            if (R) f.cancel();
            return f.then(function (t) {
              c.verbose('response', t);
              if (null !== b && b instanceof module1913.default) b.close();
              return Promise.resolve(new v(t));
            });
          });

        j.progress = function (t) {
          p = t;
        };

        j.uploadProgress = function (t) {
          y = t;
        };

        j.cancel = function () {
          R = true;
          if (I && I.cancel) I.cancel();
        };

        return j;
      };
    };
  }),
  v = (function () {
    function t(n) {
      module24.default(this, t);
      var s = n.info();
      this.headers = s.headers;
      this.ok = s.status >= 200 && s.status <= 299;
      this.status = s.status;
      this.type = 'basic';
      this.bodyUsed = false;
      this.resp = n;
      this.rnfbRespInfo = s;
      this.rnfbResp = n;
    }

    module25.default(t, [
      {
        key: 'rawResp',
        value: function () {
          return Promise.resolve(this.rnfbResp);
        },
      },
      {
        key: 'arrayBuffer',
        value: function () {
          c.verbose('to arrayBuffer', this.rnfbRespInfo);
          this.bodyUsed = true;
          return y(this.rnfbResp, this.rnfbRespInfo);
        },
      },
      {
        key: 'text',
        value: function () {
          c.verbose('to text', this.rnfbResp, this.rnfbRespInfo);
          this.bodyUsed = true;
          return R(this.rnfbResp, this.rnfbRespInfo);
        },
      },
      {
        key: 'json',
        value: function () {
          c.verbose('to json', this.rnfbResp, this.rnfbRespInfo);
          this.bodyUsed = true;
          return w(this.rnfbResp, this.rnfbRespInfo);
        },
      },
      {
        key: 'blob',
        value: function () {
          c.verbose('to blob', this.rnfbResp, this.rnfbRespInfo);
          this.bodyUsed = true;
          return P(this.rnfbResp, this.rnfbRespInfo);
        },
      },
    ]);
    return t;
  })();

function y(t, n) {
  switch (n.rnfbEncode) {
    case 'path':
      return t.readFile('ascii');

    default:
      var s = [],
        o = t.text();

      for (var f in o) s[f] = o.charCodeAt(f);

      return Promise.resolve(s);
  }
}

function R(t, n) {
  switch (n.rnfbEncode) {
    case 'base64':
      return Promise.resolve(t.text());

    case 'path':
      return t.text();

    default:
      return Promise.resolve(t.text());
  }
}

function P(t, n) {
  c.verbose('readBlob', t, n);
  return t.blob();
}

function w(t, n) {
  switch ((c.verbose('readJSON', t, n), n.rnfbEncode)) {
    case 'base64':
      return Promise.resolve(t.json());

    case 'path':
      return t.json();

    default:
      return Promise.resolve(t.json());
  }
}
