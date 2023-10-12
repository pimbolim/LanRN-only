exports.useLockListener = function (n) {
  var c = React.useRef();
  React.useEffect(
    function () {
      c.current = n;
    },
    [n]
  );
  React.useEffect(function () {
    function n(n) {
      c.current(n);
    }

    module466.default.addLockListener(n);
    return function () {
      module466.default.removeLockListener(n);
    };
  }, []);
};

var React = require('react'),
  module466 = require('./466');
