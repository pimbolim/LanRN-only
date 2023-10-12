var t =
  (this && this.__importStar) ||
  function (t) {
    if (t && t.__esModule) return t;
    var n = {};
    if (null != t) for (var u in t) Object.hasOwnProperty.call(t, u) && (n[u] = t[u]);
    n.default = t;
    return n;
  };

var React = t(require('react')),
  module892 = require('./892'),
  module893 = require('./893');

exports.Portal = function (t) {
  var o = t.children;
  return React.createElement(module893.Context.Consumer, null, function (t) {
    return React.createElement(
      module892.Consumer,
      {
        manager: t,
      },
      o
    );
  });
};
