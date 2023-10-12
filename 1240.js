var module1241 = require('./1241');

module.exports = function (s, u, n) {
  var c = n.config.validateStatus;
  if (n.status && c && !c(n.status)) u(module1241('Request failed with status code ' + n.status, n.config, null, n.request, n));
  else s(n);
};
