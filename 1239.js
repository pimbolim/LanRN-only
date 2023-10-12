var module1229 = require('./1229'),
  module1240 = require('./1240'),
  module1242 = require('./1242'),
  module1232 = require('./1232'),
  module1243 = require('./1243'),
  module1246 = require('./1246'),
  module1247 = require('./1247'),
  module1241 = require('./1241');

module.exports = function (c) {
  return new Promise(function (h, T) {
    var E = c.data,
      v = c.headers,
      w = c.responseType;
    if (module1229.isFormData(E)) delete v['Content-Type'];
    var C = new XMLHttpRequest();

    if (c.auth) {
      var R = c.auth.username || '',
        x = c.auth.password ? unescape(encodeURIComponent(c.auth.password)) : '';
      v.Authorization = 'Basic ' + btoa(R + ':' + x);
    }

    var y = module1243(c.baseURL, c.url);

    function U() {
      if (C) {
        var t = 'getAllResponseHeaders' in C ? module1246(C.getAllResponseHeaders()) : null,
          n = {
            data: w && 'text' !== w && 'json' !== w ? C.response : C.responseText,
            status: C.status,
            statusText: C.statusText,
            headers: t,
            config: c,
            request: C,
          };
        module1240(h, T, n);
        C = null;
      }
    }

    if (
      (C.open(c.method.toUpperCase(), module1232(y, c.params, c.paramsSerializer), true),
      (C.timeout = c.timeout),
      'onloadend' in C
        ? (C.onloadend = U)
        : (C.onreadystatechange = function () {
            if (C && 4 === C.readyState && (0 !== C.status || (C.responseURL && 0 === C.responseURL.indexOf('file:')))) setTimeout(U);
          }),
      (C.onabort = function () {
        if (C) {
          T(module1241('Request aborted', c, 'ECONNABORTED', C));
          C = null;
        }
      }),
      (C.onerror = function () {
        T(module1241('Network Error', c, null, C));
        C = null;
      }),
      (C.ontimeout = function () {
        var t = 'timeout of ' + c.timeout + 'ms exceeded';
        if (c.timeoutErrorMessage) t = c.timeoutErrorMessage;
        T(module1241(t, c, c.transitional && c.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED', C));
        C = null;
      }),
      module1229.isStandardBrowserEnv())
    ) {
      var N = (c.withCredentials || module1247(y)) && c.xsrfCookieName ? module1242.read(c.xsrfCookieName) : undefined;
      if (N) v[c.xsrfHeaderName] = N;
    }

    if ('setRequestHeader' in C)
      module1229.forEach(v, function (t, o) {
        if (undefined === E && 'content-type' === o.toLowerCase()) delete v[o];
        else C.setRequestHeader(o, t);
      });
    if (!module1229.isUndefined(c.withCredentials)) C.withCredentials = !!c.withCredentials;
    if (w && 'json' !== w) C.responseType = c.responseType;
    if ('function' == typeof c.onDownloadProgress) C.addEventListener('progress', c.onDownloadProgress);
    if ('function' == typeof c.onUploadProgress && C.upload) C.upload.addEventListener('progress', c.onUploadProgress);
    if (c.cancelToken)
      c.cancelToken.promise.then(function (t) {
        if (C) {
          C.abort();
          T(t);
          C = null;
        }
      });
    if (!E) E = null;
    C.send(E);
  });
};
