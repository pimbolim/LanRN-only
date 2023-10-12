var module20 = require('./20'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = b(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var u = c ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (u && (u.get || u.set)) Object.defineProperty(l, s, u);
        else l[s] = t[s];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  PropTypes = require('prop-types'),
  module1576 = require('./1576'),
  module1577 = require('./1577');

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (b = function (t) {
    return t ? o : n;
  })(t);
}

function h() {
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

var P = 'ios' === ReactNative.Platform.OS,
  w = ReactNative.I18nManager.isRTL,
  T = (function (t) {
    module35.default(O, t);

    var PropTypes = O,
      b = h(),
      T = function () {
        var t,
          n = module34.default(PropTypes);

        if (b) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function O(t) {
      var module20;
      module24.default(this, O);
      module20 = T.call(this, t);
      if ((t.dotColor && !t.inactiveDotColor) || (!t.dotColor && t.inactiveDotColor))
        console.warn('react-native-snap-carousel | Pagination: You need to specify both `dotColor` and `inactiveDotColor`');
      if ((t.dotElement && !t.inactiveDotElement) || (!t.dotElement && t.inactiveDotElement))
        console.warn('react-native-snap-carousel | Pagination: You need to specify both `dotElement` and `inactiveDotElement`');
      if (t.tappableDots && undefined === t.carouselRef)
        console.warn('react-native-snap-carousel | Pagination: You must specify prop `carouselRef` when setting `tappableDots` to `true`');
      return module20;
    }

    module25.default(O, [
      {
        key: '_needsRTLAdaptations',
        value: function () {
          var t = this.props.vertical;
          return w && !P && !t;
        },
      },
      {
        key: '_activeDotIndex',
        get: function () {
          var t = this.props,
            n = t.activeDotIndex,
            o = t.dotsLength;
          return this._needsRTLAdaptations() ? o - n - 1 : n;
        },
      },
      {
        key: 'dots',
        get: function () {
          var t = this,
            o = this.props,
            l = o.activeOpacity,
            c = o.carouselRef,
            s = o.dotsLength,
            u = o.dotColor,
            f = o.dotContainerStyle,
            y = o.dotElement,
            D = o.dotStyle,
            b = o.inactiveDotColor,
            h = o.inactiveDotElement,
            P = o.inactiveDotOpacity,
            w = o.inactiveDotScale,
            T = o.inactiveDotStyle,
            O = o.renderDots,
            R = o.tappableDots,
            S = o.animatedDuration,
            C = o.animatedFriction,
            E = o.animatedTension,
            V = o.delayPressInDot;
          if (O) return O(this._activeDotIndex, s, this);

          var _ = React.default.createElement(module1576.default, {
            carouselRef: c,
            tappable: R && undefined !== c,
            activeOpacity: l,
            color: u,
            containerStyle: f,
            style: D,
            inactiveColor: b,
            inactiveOpacity: P,
            inactiveScale: w,
            inactiveStyle: T,
            animatedDuration: S,
            animatedFriction: C,
            animatedTension: E,
            delayPressInDot: V,
          });

          return module20.default(Array(s).keys()).map(function (n) {
            var o = n === t._activeDotIndex;
            return React.default.cloneElement((o ? y : h) || _, {
              key: 'pagination-dot-' + n,
              active: o,
              index: n,
            });
          });
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.dotsLength,
            o = t.containerStyle,
            l = t.vertical,
            c = t.accessibilityLabel;
          if (!n || n < 2) return false;
          var s = [
            module1577.default.sliderPagination,
            {
              flexDirection: l ? 'column' : this._needsRTLAdaptations() ? 'row-reverse' : 'row',
            },
            o || {},
          ];
          return React.default.createElement(
            ReactNative.View,
            {
              pointerEvents: 'box-none',
              style: s,
              accessible: !!c,
              accessibilityLabel: c,
            },
            this.dots
          );
        },
      },
    ]);
    return O;
  })(React.PureComponent);

exports.default = T;
T.propTypes = {
  activeDotIndex: PropTypes.default.number.isRequired,
  dotsLength: PropTypes.default.number.isRequired,
  activeOpacity: PropTypes.default.number,
  carouselRef: PropTypes.default.object,
  containerStyle: ReactNative.ViewPropTypes ? ReactNative.ViewPropTypes.style : ReactNative.View.propTypes.style,
  dotColor: PropTypes.default.string,
  dotContainerStyle: ReactNative.ViewPropTypes ? ReactNative.ViewPropTypes.style : ReactNative.View.propTypes.style,
  dotElement: PropTypes.default.element,
  dotStyle: ReactNative.ViewPropTypes ? ReactNative.ViewPropTypes.style : ReactNative.View.propTypes.style,
  inactiveDotColor: PropTypes.default.string,
  inactiveDotElement: PropTypes.default.element,
  inactiveDotOpacity: PropTypes.default.number,
  inactiveDotScale: PropTypes.default.number,
  inactiveDotStyle: ReactNative.ViewPropTypes ? ReactNative.ViewPropTypes.style : ReactNative.View.propTypes.style,
  renderDots: PropTypes.default.func,
  tappableDots: PropTypes.default.bool,
  vertical: PropTypes.default.bool,
  accessibilityLabel: PropTypes.default.string,
  animatedDuration: PropTypes.default.number,
  animatedFriction: PropTypes.default.number,
  animatedTension: PropTypes.default.number,
  delayPressInDot: PropTypes.default.number,
};
T.defaultProps = {
  inactiveDotOpacity: 0.5,
  inactiveDotScale: 0.5,
  tappableDots: false,
  vertical: false,
  animatedDuration: 250,
  animatedFriction: 4,
  animatedTension: 50,
  delayPressInDot: 0,
};
