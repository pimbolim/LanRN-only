var module1229 = require('./1229'),
  module1230 = require('./1230'),
  module1231 = require('./1231'),
  module1249 = require('./1249');

function u(s) {
  var u = new module1231(s),
    c = module1230(module1231.prototype.request, u);
  module1229.extend(c, module1231.prototype, u);
  module1229.extend(c, u);
  return c;
}

var module1236 = u(require('./1236'));
module1236.Axios = module1231;

module1236.create = function (t) {
  return u(module1249(module1236.defaults, t));
};

module1236.Cancel = require('./1252');
module1236.CancelToken = require('./1253');
module1236.isCancel = require('./1248');

module1236.all = function (t) {
  return Promise.all(t);
};

module1236.spread = require('./1254');
module1236.isAxiosError = require('./1255');
module.exports = module1236;
module.exports.default = module1236;
