var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module1644 = require('./1644'),
  module1623 = require('./1623'),
  module1620 = require('./1620'),
  module1635 = require('./1635');

function x() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var M = /\s+/,
  w = (function (t) {
    module35.default(S, t);

    var module1620 = S,
      w = x(),
      O = function () {
        var t,
          u = module34.default(module1620);

        if (w) {
          var n = module34.default(this).constructor;
          t = Reflect.construct(u, arguments, n);
        } else t = u.apply(this, arguments);

        return module37.default(this, t);
      };

    function S() {
      module24.default(this, S);
      return O.apply(this, arguments);
    }

    module25.default(S, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.preserveAspectRatio,
            f = t.x,
            l = t.y,
            o = t.width,
            c = t.height,
            y = t.xlinkHref,
            x = t.href,
            w = undefined === x ? y : x,
            O = n ? n.trim().split(M) : [],
            S = O[0],
            _ = O[1];
          return React.default.createElement(
            module1635.RNSVGImage,
            module11.default(
              {
                ref: this.refMethod,
              },
              module1623.withoutXY(this, t),
              {
                x: f,
                y: l,
                width: o,
                height: c,
                meetOrSlice: module1644.meetOrSliceTypes[_] || 0,
                align: module1644.alignEnum[S] || 'xMidYMid',
                src: w
                  ? ReactNative.Image.resolveAssetSource(
                      'string' == typeof w
                        ? {
                            uri: w,
                          }
                        : w
                    )
                  : null,
              }
            )
          );
        },
      },
    ]);
    return S;
  })(module1620.default);

exports.default = w;
w.displayName = 'Image';
w.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  preserveAspectRatio: 'xMidYMid meet',
};
