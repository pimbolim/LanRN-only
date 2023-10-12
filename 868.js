var React = require('react');

exports.useEvent = function (t, u) {
  return React.useCallback(
    function (n) {
      u();
      if ('function' == typeof t) t(n);
    },
    [t]
  );
};
