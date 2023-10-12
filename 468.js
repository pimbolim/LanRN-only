exports.useOrientationChange = function (n) {
  var f = React.useRef();
  React.useEffect(
    function () {
      f.current = n;
    },
    [n]
  );
  React.useEffect(function () {
    function n(n) {
      f.current(n);
    }

    var t = module466.default.getInitialOrientation();
    n(t);
    module466.default.addOrientationListener(n);
    return function () {
      module466.default.removeOrientationListener(n);
    };
  }, []);
};

var React = require('react'),
  module466 = require('./466');
