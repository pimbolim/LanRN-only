var module47 = require('./47');

function o(t, o) {
  var n = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var b = Object.getOwnPropertySymbols(t);
    if (o)
      b = b.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      });
    n.push.apply(n, b);
  }

  return n;
}

function n(n) {
  for (var b = 1; b < arguments.length; b++) {
    var c = null != arguments[b] ? arguments[b] : {};
    if (b % 2)
      o(Object(c), true).forEach(function (o) {
        module47(n, o, c[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(n, Object.getOwnPropertyDescriptors(c));
    else
      o(Object(c)).forEach(function (t) {
        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(c, t));
      });
  }

  return n;
}

var module64 = require('./64'),
  module67 = require('./67'),
  module71 = require('./71'),
  module72 = require('./72'),
  PropTypes = require('prop-types'),
  p = n(
    n(n(n({}, module67), module71), module72),
    {},
    {
      resizeMode: PropTypes.oneOf(['center', 'contain', 'cover', 'repeat', 'stretch']),
      backfaceVisibility: PropTypes.oneOf(['visible', 'hidden']),
      backgroundColor: module64,
      borderColor: module64,
      borderWidth: PropTypes.number,
      borderRadius: PropTypes.number,
      overflow: PropTypes.oneOf(['visible', 'hidden']),
      tintColor: module64,
      opacity: PropTypes.number,
      overlayColor: PropTypes.string,
      borderTopLeftRadius: PropTypes.number,
      borderTopRightRadius: PropTypes.number,
      borderBottomLeftRadius: PropTypes.number,
      borderBottomRightRadius: PropTypes.number,
    }
  );

module.exports = p;
