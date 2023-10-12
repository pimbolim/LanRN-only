var module402 = require('./402');

exports.__esModule = true;

require('prop-types');

var React = module402(require('react')),
  module403 = require('./403'),
  module404 = require('./404');

var c = function (t) {
  var n = t.store,
    c = t.context,
    f = t.children,
    l = React.useMemo(
      function () {
        var t = new module404.default(n);
        t.onStateChange = t.notifyNestedSubs;
        return {
          store: n,
          subscription: t,
        };
      },
      [n]
    ),
    v = React.useMemo(
      function () {
        return n.getState();
      },
      [n]
    );
  React.useEffect(
    function () {
      var t = l.subscription;
      t.trySubscribe();
      if (v !== n.getState()) t.notifyNestedSubs();
      return function () {
        t.tryUnsubscribe();
        t.onStateChange = null;
      };
    },
    [l, v]
  );
  var b = c || module403.ReactReduxContext;
  return React.default.createElement(
    b.Provider,
    {
      value: l,
    },
    f
  );
};

exports.default = c;
