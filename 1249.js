var module1229 = require('./1229');

module.exports = function (t, o) {
  o = o || {};
  var s = {},
    c = ['url', 'method', 'data'],
    f = ['headers', 'auth', 'proxy', 'params'],
    u = [
      'baseURL',
      'transformRequest',
      'transformResponse',
      'paramsSerializer',
      'timeout',
      'timeoutMessage',
      'withCredentials',
      'adapter',
      'responseType',
      'xsrfCookieName',
      'xsrfHeaderName',
      'onUploadProgress',
      'onDownloadProgress',
      'decompress',
      'maxContentLength',
      'maxBodyLength',
      'maxRedirects',
      'transport',
      'httpAgent',
      'httpsAgent',
      'cancelToken',
      'socketPath',
      'responseEncoding',
    ],
    h = ['validateStatus'];

  function p(t, o) {
    return module1229.isPlainObject(t) && module1229.isPlainObject(o)
      ? module1229.merge(t, o)
      : module1229.isPlainObject(o)
      ? module1229.merge({}, o)
      : module1229.isArray(o)
      ? o.slice()
      : o;
  }

  function l(c) {
    if (module1229.isUndefined(o[c])) {
      if (!module1229.isUndefined(t[c])) s[c] = p(undefined, t[c]);
    } else s[c] = p(t[c], o[c]);
  }

  module1229.forEach(c, function (t) {
    if (!module1229.isUndefined(o[t])) s[t] = p(undefined, o[t]);
  });
  module1229.forEach(f, l);
  module1229.forEach(u, function (c) {
    if (module1229.isUndefined(o[c])) {
      if (!module1229.isUndefined(t[c])) s[c] = p(undefined, t[c]);
    } else s[c] = p(undefined, o[c]);
  });
  module1229.forEach(h, function (n) {
    if (n in o) s[n] = p(t[n], o[n]);
    else if (n in t) s[n] = p(undefined, t[n]);
  });
  var v = c.concat(f).concat(u).concat(h),
    x = Object.keys(t)
      .concat(Object.keys(o))
      .filter(function (n) {
        return -1 === v.indexOf(n);
      });
  module1229.forEach(x, l);
  return s;
};
