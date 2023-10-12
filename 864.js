var React = require('react'),
  u = function (u, n) {
    return function (o, c) {
      var v = React.useRef();
      React.useEffect(
        function () {
          var t = function () {
            return u(v.current);
          };

          t();
          v.current = n(o, c);
          return t;
        },
        [c]
      );
    };
  },
  n = u(clearInterval, setInterval);

exports.useInterval = n;
var o = u(clearTimeout, setTimeout);
exports.useTimeout = o;
