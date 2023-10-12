var React = require('react');

exports.useStableCallback = function (n) {
  var t = React.useRef(),
    c = React.useCallback(function () {
      return t.current && t.current.apply(t, arguments);
    }, []);
  React.useEffect(function () {
    t.current = n;
    return function () {
      return (t.current = undefined);
    };
  });
  return c;
};
