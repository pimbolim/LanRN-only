var module1229 = require('./1229'),
  module1237 = require('./1237'),
  module1238 = require('./1238'),
  s = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };

function c(n, o) {
  if (!module1229.isUndefined(n) && module1229.isUndefined(n['Content-Type'])) n['Content-Type'] = o;
}

function f(n, o, s) {
  if (module1229.isString(n))
    try {
      (o || JSON.parse)(n);
      return module1229.trim(n);
    } catch (t) {
      if ('SyntaxError' !== t.name) throw t;
    }
  return (s || JSON.stringify)(n);
}

var p,
  module1239 = {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false,
    },
    adapter:
      ('undefined' != typeof XMLHttpRequest
        ? (p = require('./1239'))
        : 'undefined' != typeof process && '[object process]' === Object.prototype.toString.call(process) && (p = require('./1239')),
      p),
    transformRequest: [
      function (o, s) {
        module1237(s, 'Accept');
        module1237(s, 'Content-Type');
        return module1229.isFormData(o) || module1229.isArrayBuffer(o) || module1229.isBuffer(o) || module1229.isStream(o) || module1229.isFile(o) || module1229.isBlob(o)
          ? o
          : module1229.isArrayBufferView(o)
          ? o.buffer
          : module1229.isURLSearchParams(o)
          ? (c(s, 'application/x-www-form-urlencoded;charset=utf-8'), o.toString())
          : module1229.isObject(o) || (s && 'application/json' === s['Content-Type'])
          ? (c(s, 'application/json'), f(o))
          : o;
      },
    ],
    transformResponse: [
      function (n) {
        var s = this.transitional,
          c = s && s.silentJSONParsing,
          f = s && s.forcedJSONParsing,
          p = !c && 'json' === this.responseType;
        if (p || (f && module1229.isString(n) && n.length))
          try {
            return JSON.parse(n);
          } catch (t) {
            if (p) {
              if ('SyntaxError' === t.name) throw module1238(t, this, 'E_JSON_PARSE');
              throw t;
            }
          }
        return n;
      },
    ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function (t) {
      return t >= 200 && t < 300;
    },
  };
module1239.headers = {
  common: {
    Accept: 'application/json, text/plain, */*',
  },
};
module1229.forEach(['delete', 'get', 'head'], function (t) {
  module1239.headers[t] = {};
});
module1229.forEach(['post', 'put', 'patch'], function (n) {
  module1239.headers[n] = module1229.merge(s);
});
module.exports = module1239;
