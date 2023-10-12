var module1229 = require('./1229'),
  module1235 = require('./1235'),
  module1248 = require('./1248'),
  module1236 = require('./1236');

function c(t) {
  if (t.cancelToken) t.cancelToken.throwIfRequested();
}

module.exports = function (h) {
  c(h);
  h.headers = h.headers || {};
  h.data = module1235.call(h, h.data, h.headers, h.transformRequest);
  h.headers = module1229.merge(h.headers.common || {}, h.headers[h.method] || {}, h.headers);
  module1229.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function (t) {
    delete h.headers[t];
  });
  return (h.adapter || module1236.adapter)(h).then(
    function (t) {
      c(h);
      t.data = module1235.call(h, t.data, t.headers, h.transformResponse);
      return t;
    },
    function (t) {
      if (!module1248(t)) {
        c(h);
        if (t && t.response) t.response.data = module1235.call(h, t.response.data, t.response.headers, h.transformResponse);
      }

      return Promise.reject(t);
    }
  );
};
