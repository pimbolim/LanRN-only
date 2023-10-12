var module402 = require('./402');

exports.default = function (t) {
  var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
    b = Object.keys(t);
  if (0 === b.length) throw new Error('You need to add at least one style');
  var S = j(
      {
        defaultStyle: b[0],
        fallbackFamily: function () {
          return b[0];
        },
        glyphValidator: function () {
          return true;
        },
      },
      n
    ),
    P = b.reduce(function (n, u) {
      var o = t[u];
      n[u] = module567.default(o.glyphMap || {}, o.fontFamily || '', o.fontFile || '', o.fontStyle || {});
      return n;
    }, {});

  function w(t) {
    return Object.keys(t).reduce(function (n, u) {
      return -1 !== b.indexOf(u) && true === t[u] ? u : n;
    }, S.defaultStyle);
  }

  function F(t) {
    var n = t.name,
      u = w(t);
    if (S.glyphValidator(n, u)) return P[u];
    var o = S.fallbackFamily(n);
    return -1 === b.indexOf(o) ? S.defaultStyle : P[o];
  }

  function _(t) {
    return Object.keys(t).reduce(function (n, u) {
      if (-1 === b.indexOf(u)) n[u] = t[u];
      return n;
    }, {});
  }

  function k(t) {
    var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : '';
    return -1 === b.indexOf(t)
      ? P[S.defaultStyle]
      : n
      ? F(
          module47.default(
            {
              name: n,
            },
            t,
            true
          )
        )
      : P[w(module47.default({}, t, true))];
  }

  function E() {
    var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : '',
      n = (function (n) {
        function p() {
          module24.default(this, p);
          return module37.default(this, module34.default(p).apply(this, arguments));
        }

        module35.default(p, n);
        module25.default(p, [
          {
            key: 'render',
            value: function () {
              var n = l,
                o,
                l = F(this.props),
                f = (o = t).length > 0 ? n[o] : n,
                c = _(this.props);

              return React.default.createElement(
                f,
                module11.default({}, c, {
                  __source: {
                    fileName: h,
                    lineNumber: 123,
                  },
                })
              );
            },
          },
        ]);
        return p;
      })(React.PureComponent);

    n.propTypes = b.reduce(function (t, n) {
      t[n] = PropTypes.default.bool;
      return t;
    }, {});
    n.defaultProps = b.reduce(function (t, n) {
      t[n] = false;
      return t;
    }, {});
    return n;
  }

  var I = E();
  I.Button = E('Button');
  I.getStyledIconSet = k;

  I.getImageSource = function (t) {
    var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : module567.DEFAULT_ICON_SIZE,
      u = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : module567.DEFAULT_ICON_COLOR;
    return k(arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : S.defaultStyle, t).getImageSource(t, n, u);
  };

  I.getFontFamily = function () {
    return k(arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : S.defaultStyle).getFontFamily();
  };

  I.getRawGlyphMap = function () {
    return k(arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : S.defaultStyle).getRawGlyphMap();
  };

  I.hasIcon = function (t) {
    var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : S.defaultStyle;
    return S.glyphValidator(t, n);
  };

  return I;
};

var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module37 = require('./37'),
  module34 = require('./34'),
  module35 = require('./35'),
  module47 = require('./47'),
  React = module402(require('react')),
  PropTypes = require('prop-types'),
  module567 = module402(require('./567')),
  h = '/Users/joelarvidsson/Code/react-native-vector-icons/lib/create-multi-style-icon-set.js';

function b(t, n) {
  var u = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    if (n)
      o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    u.push.apply(u, o);
  }

  return u;
}

function j(t) {
  for (var n = 1; n < arguments.length; n++) {
    var u = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      b(Object(u), true).forEach(function (n) {
        module47.default(t, n, u[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      b(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}
