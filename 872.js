var React = require('react');

exports.useBlurOnFulfill = function (u) {
  var n = u.value,
    t = u.cellCount,
    f = React.useRef(null);

  if (n && n.length === t) {
    var o = f.current;
    if (o) o.blur();
  }

  return f;
};
