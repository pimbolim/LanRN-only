var module1229 = require('./1229'),
  module1232 = require('./1232'),
  module1233 = require('./1233'),
  module1234 = require('./1234'),
  module1249 = require('./1249'),
  module1250 = require('./1250'),
  f = module1250.validators;

function c(t) {
  this.defaults = t;
  this.interceptors = {
    request: new module1233(),
    response: new module1233(),
  };
}

c.prototype.request = function (t) {
  if ('string' == typeof t) (t = arguments[1] || {}).url = arguments[0];
  else t = t || {};
  if ((t = module1249(this.defaults, t)).method) t.method = t.method.toLowerCase();
  else if (this.defaults.method) t.method = this.defaults.method.toLowerCase();
  else t.method = 'get';
  var o = t.transitional;
  if (undefined !== o)
    module1250.assertOptions(
      o,
      {
        silentJSONParsing: f.transitional(f.boolean, '1.0.0'),
        forcedJSONParsing: f.transitional(f.boolean, '1.0.0'),
        clarifyTimeoutError: f.transitional(f.boolean, '1.0.0'),
      },
      false
    );
  var n = [],
    c = true;
  this.interceptors.request.forEach(function (o) {
    if (!('function' == typeof o.runWhen && false === o.runWhen(t))) {
      c = c && o.synchronous;
      n.unshift(o.fulfilled, o.rejected);
    }
  });
  var l,
    p = [];

  if (
    (this.interceptors.response.forEach(function (t) {
      p.push(t.fulfilled, t.rejected);
    }),
    !c)
  ) {
    var y = [module1234, undefined];

    for (Array.prototype.unshift.apply(y, n), y = y.concat(p), l = Promise.resolve(t); y.length; ) l = l.then(y.shift(), y.shift());

    return l;
  }

  for (var v = t; n.length; ) {
    var q = n.shift(),
      E = n.shift();

    try {
      v = q(v);
    } catch (t) {
      E(t);
      break;
    }
  }

  try {
    l = module1234(v);
  } catch (t) {
    return Promise.reject(t);
  }

  for (; p.length; ) l = l.then(p.shift(), p.shift());

  return l;
};

c.prototype.getUri = function (t) {
  module1229 = module1249(this.defaults, module1229);
  return module1232(module1229.url, module1229.params, module1229.paramsSerializer).replace(/^\?/, '');
};

module1229.forEach(['delete', 'get', 'head', 'options'], function (t) {
  c.prototype[t] = function (o, n) {
    return this.request(
      module1249(n || {}, {
        method: t,
        url: o,
        data: (n || {}).data,
      })
    );
  };
});
module1229.forEach(['post', 'put', 'patch'], function (t) {
  c.prototype[t] = function (o, n, s) {
    return this.request(
      module1249(s || {}, {
        method: t,
        url: o,
        data: n,
      })
    );
  };
});
module.exports = c;
