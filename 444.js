exports.__esModule = true;

exports.default = function (o) {
  var c = o.storage,
    u = ''.concat(undefined !== o.keyPrefix ? o.keyPrefix : module440.KEY_PREFIX).concat(o.key);
  return c.removeItem(u, n);
};

var module440 = require('./440');

function n(t) {
  0;
}
