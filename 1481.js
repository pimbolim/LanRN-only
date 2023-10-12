var module47 = require('./47'),
  module24 = require('./24'),
  module25 = require('./25'),
  module1404 = require('./1404');

function l(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    if (n)
      u = u.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, u);
  }

  return o;
}

function f(t) {
  for (var o = 1; o < arguments.length; o++) {
    var u = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      l(Object(u), true).forEach(function (o) {
        module47.default(t, o, u[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      l(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

var s = (function () {
  function t(n) {
    module24.default(this, t);
    this.shouldAutoComplete = true;
    var u = module1404.getNativeModule(n);
    this._backgroundFetchResult = {
      noData: u.backgroundFetchResultNoData,
      newData: u.backgroundFetchResultNewData,
      failure: u.backgroundFetchResultFailed,
    };
  }

  module25.default(t, [
    {
      key: 'backgroundFetchResult',
      get: function () {
        return f({}, this._backgroundFetchResult);
      },
    },
  ]);
  return t;
})();

exports.default = s;
