exports.default = function (n) {
  var u;
  module517.SUPPRESS_STATE_ACCESS_WARNING.value = true;
  var S = n.state;
  module517.SUPPRESS_STATE_ACCESS_WARNING.value = false;
  var l = n.params;
  return S
    ? S.routes[null != (u = S.index) ? u : 'string' == typeof S.type && 'stack' !== S.type ? 0 : S.routes.length - 1].name
    : 'string' == typeof (null == l ? undefined : l.screen)
    ? l.screen
    : undefined;
};

var module517 = require('./517');
