var module47 = require('./47');

function n(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (n)
      l = l.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, l);
  }

  return o;
}

function o(o) {
  for (var l = 1; l < arguments.length; l++) {
    var c = null != arguments[l] ? arguments[l] : {};
    if (l % 2)
      n(Object(c), true).forEach(function (n) {
        module47(o, n, c[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(o, Object.getOwnPropertyDescriptors(c));
    else
      n(Object(c)).forEach(function (t) {
        Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(c, t));
      });
  }

  return o;
}

var module64 = require('./64'),
  module75 = require('./75'),
  PropTypes = require('prop-types'),
  f = o(
    o({}, module75),
    {},
    {
      color: module64,
      fontFamily: PropTypes.string,
      fontSize: PropTypes.number,
      fontStyle: PropTypes.oneOf(['normal', 'italic']),
      fontWeight: PropTypes.oneOf(['normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900']),
      fontVariant: PropTypes.arrayOf(PropTypes.oneOf(['small-caps', 'oldstyle-nums', 'lining-nums', 'tabular-nums', 'proportional-nums'])),
      textShadowOffset: PropTypes.shape({
        width: PropTypes.number,
        height: PropTypes.number,
      }),
      textShadowRadius: PropTypes.number,
      textShadowColor: module64,
      letterSpacing: PropTypes.number,
      lineHeight: PropTypes.number,
      textAlign: PropTypes.oneOf(['auto', 'left', 'right', 'center', 'justify']),
      textAlignVertical: PropTypes.oneOf(['auto', 'top', 'bottom', 'center']),
      includeFontPadding: PropTypes.bool,
      textDecorationLine: PropTypes.oneOf(['none', 'underline', 'line-through', 'underline line-through']),
      textDecorationStyle: PropTypes.oneOf(['solid', 'double', 'dotted', 'dashed']),
      textDecorationColor: module64,
      textTransform: PropTypes.oneOf(['none', 'capitalize', 'uppercase', 'lowercase']),
      writingDirection: PropTypes.oneOf(['auto', 'ltr', 'rtl']),
    }
  );

module.exports = f;
