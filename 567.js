var module402 = require('./402');

exports.default = function (t, n, C, x) {
  var E = C ? C.replace(/\.(otf|ttf)$/, '') : n,
    R = module568.Platform.select({
      windows: '/Assets/' + C + '#' + n,
      android: E,
      web: E,
      default: n,
    }),
    A = PropTypes.default.oneOf(Object.keys(t)),
    k = (function (n, ...args) {
      function o() {
        var t, n;
        module24.default(this, o);
        (n = module37.default(this, (t = module34.default(o)).call.apply(t, [this].concat(args)))).root = null;

        n.handleRef = function (t) {
          n.root = t;
        };

        return n;
      }

      module35.default(o, n);
      module25.default(o, [
        {
          key: 'setNativeProps',
          value: function (t) {
            if (this.root) this.root.setNativeProps(t);
          },
        },
        {
          key: 'render',
          value: function () {
            var n = this.props,
              o = n.name,
              l = n.size,
              s = n.color,
              f = n.style,
              v = n.children,
              p = module53.default(n, ['name', 'size', 'color', 'style', 'children']),
              h = o ? t[o] || '?' : '';
            if ('number' == typeof h) h = String.fromCodePoint(h);
            var b = {
                fontSize: l,
                color: s,
              },
              I = {
                fontFamily: R,
                fontWeight: 'normal',
                fontStyle: 'normal',
              };
            p.style = [b, f, I, x || {}];
            p.ref = this.handleRef;
            return React.default.createElement(
              module568.Text,
              module11.default({}, p, {
                __source: {
                  fileName: O,
                  lineNumber: 91,
                },
              }),
              h,
              v
            );
          },
        },
      ]);
      return o;
    })(React.PureComponent);

  k.propTypes = {
    allowFontScaling: PropTypes.default.bool,
    name: A,
    size: PropTypes.default.number,
    color: PropTypes.default.any,
    children: PropTypes.default.node,
    style: PropTypes.default.any,
  };
  k.defaultProps = {
    size: _,
    allowFontScaling: false,
  };
  var L = module570.default();

  function M(n) {
    var o = t[n] || '?';
    return 'number' == typeof o ? String.fromCodePoint(o) : o;
  }

  k.Button = module571.default(k);

  k.getImageSource = function (t) {
    var n,
      o,
      u,
      c,
      s,
      module25,
      module37,
      p = arguments;
    return regeneratorRuntime.default.async(
      function (h) {
        for (;;)
          switch ((h.prev = h.next)) {
            case 0:
              if (
                ((n = p.length > 1 && undefined !== p[1] ? p[1] : _),
                (o = p.length > 2 && undefined !== p[2] ? p[2] : S),
                module569.default(),
                (u = M(t)),
                (c = module568.processColor(o)),
                (s = u + ':' + n + ':' + c),
                !L.has(s))
              ) {
                h.next = 8;
                break;
              }

              return h.abrupt('return', L.get(s));

            case 8:
              h.prev = 8;
              h.next = 11;
              return regeneratorRuntime.default.awrap(P.getImageForFont(R, u, n, c));

            case 11:
              module25 = h.sent;
              module37 = {
                uri: module25,
                scale: module568.PixelRatio.get(),
              };
              L.setValue(s, module37);
              return h.abrupt('return', module37);

            case 17:
              throw ((h.prev = 17), (h.t0 = h.catch(8)), L.setError(s, h.t0), h.t0);

            case 21:
            case 'end':
              return h.stop();
          }
      },
      null,
      null,
      [[8, 17]]
    );
  };

  k.getImageSourceSync = function (t) {
    var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : _,
      o = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : S;
    module569.default();
    var l = M(t),
      u = module568.processColor(o),
      c = l + ':' + n + ':' + u;
    if (L.has(c)) return L.get(c);

    try {
      var s = P.getImageForFontSync(R, l, n, u),
        f = {
          uri: s,
          scale: module568.PixelRatio.get(),
        };
      L.setValue(c, f);
      return f;
    } catch (t) {
      throw (L.setError(c, t), t);
    }
  };

  k.loadFont = function () {
    var t,
      n = arguments;
    return regeneratorRuntime.default.async(function (u) {
      for (;;)
        switch ((u.prev = u.next)) {
          case 0:
            if (((t = n.length > 0 && undefined !== n[0] ? n[0] : C), 'ios' !== module568.Platform.OS)) {
              u.next = 7;
              break;
            }

            if ((module569.default(), t)) {
              u.next = 5;
              break;
            }

            throw new Error('Unable to load font, because no file was specified. ');

          case 5:
            u.next = 7;
            return regeneratorRuntime.default.awrap(P.loadFontWithFileName.apply(P, module20.default(t.split('.'))));

          case 7:
          case 'end':
            return u.stop();
        }
    });
  };

  k.hasIcon = function (n) {
    return Object.prototype.hasOwnProperty.call(t, n);
  };

  k.getRawGlyphMap = function () {
    return t;
  };

  k.getFontFamily = function () {
    return R;
  };

  return k;
};

var module20 = require('./20'),
  regeneratorRuntime = require('regenerator-runtime'),
  module11 = require('./11'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
  module25 = require('./25'),
  module37 = require('./37'),
  module34 = require('./34'),
  module35 = require('./35'),
  React = module402(require('react')),
  PropTypes = require('prop-types'),
  module568 = require('./568'),
  module569 = require('./569'),
  module570 = require('./570'),
  module571 = require('./571'),
  O = '/Users/joelarvidsson/Code/react-native-vector-icons/lib/create-icon-set.js',
  P = module568.NativeModules.RNVectorIconsManager || module568.NativeModules.RNVectorIconsModule;

exports.NativeIconAPI = P;
var _ = 12;
exports.DEFAULT_ICON_SIZE = _;
var S = 'black';
exports.DEFAULT_ICON_COLOR = S;
