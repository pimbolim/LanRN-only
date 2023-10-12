var module11 = require('./11'),
  module47 = require('./47'),
  module20 = require('./20'),
  module12 = require('./12'),
  module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, o) {
    if (!o && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = b(o);
    if (n && n.has(t)) return n.get(t);
    var l = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = s ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, u, c);
        else l[u] = t[u];
      }

    l.default = t;
    if (n) n.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  PropTypes = require('prop-types'),
  module1572 = require('./1572'),
  module1574 = require('./1574');

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    n = new WeakMap();
  return (b = function (t) {
    return t ? n : o;
  })(t);
}

function k(t, o) {
  var n = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (o)
      l = l.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      });
    n.push.apply(n, l);
  }

  return n;
}

function A(t) {
  for (var o = 1; o < arguments.length; o++) {
    var l = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      k(Object(l), true).forEach(function (o) {
        module47.default(t, o, l[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      k(Object(l)).forEach(function (o) {
        Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(l, o));
      });
  }

  return t;
}

function O() {
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

var C = 'ios' === ReactNative.Platform.OS,
  E = ReactNative.FlatList ? ReactNative.Animated.createAnimatedComponent(ReactNative.FlatList) : null,
  w = ReactNative.Animated.createAnimatedComponent(ReactNative.ScrollView),
  P = ReactNative.I18nManager.isRTL,
  D = (function (t) {
    module35.default(k, t);

    var module47 = k,
      PropTypes = O(),
      b = function () {
        var t,
          o = module34.default(module47);

        if (PropTypes) {
          var l = module34.default(this).constructor;
          t = Reflect.construct(o, arguments, l);
        } else t = o.apply(this, arguments);

        return module37.default(this, t);
      };

    function k(t) {
      var o;
      module24.default(this, k);
      (o = b.call(this, t)).state = {
        hideCarousel: true,
        interpolators: [],
      };

      var n = o._getFirstItem(t.firstItem);

      o._activeItem = n;
      o._previousActiveItem = n;
      o._previousFirstItem = n;
      o._previousItemsLength = n;
      o._mounted = false;
      o._positions = [];
      o._currentContentOffset = 0;
      o._canFireBeforeCallback = false;
      o._canFireCallback = false;
      o._scrollOffsetRef = null;
      o._onScrollTriggered = true;
      o._lastScrollDate = 0;
      o._scrollEnabled = false !== t.scrollEnabled;
      o._initPositionsAndInterpolators = o._initPositionsAndInterpolators.bind(module39.default(o));
      o._renderItem = o._renderItem.bind(module39.default(o));
      o._onSnap = o._onSnap.bind(module39.default(o));
      o._onLayout = o._onLayout.bind(module39.default(o));
      o._onScroll = o._onScroll.bind(module39.default(o));
      o._onScrollBeginDrag = t.enableSnap ? o._onScrollBeginDrag.bind(module39.default(o)) : undefined;
      o._onScrollEnd = t.enableSnap || t.autoplay ? o._onScrollEnd.bind(module39.default(o)) : undefined;
      o._onScrollEndDrag = t.enableMomentum ? undefined : o._onScrollEndDrag.bind(module39.default(o));
      o._onMomentumScrollEnd = t.enableMomentum ? o._onMomentumScrollEnd.bind(module39.default(o)) : undefined;
      o._onTouchStart = o._onTouchStart.bind(module39.default(o));
      o._onTouchEnd = o._onTouchEnd.bind(module39.default(o));
      o._onTouchRelease = o._onTouchRelease.bind(module39.default(o));
      o._getKeyExtractor = o._getKeyExtractor.bind(module39.default(o));

      o._setScrollHandler(t);

      o._ignoreNextMomentum = false;
      if (!ReactNative.ViewPropTypes) console.warn('react-native-snap-carousel: It is recommended to use at least version 0.44 of React Native with the plugin');
      if (!(t.vertical || (t.sliderWidth && t.itemWidth)))
        console.error('react-native-snap-carousel: You need to specify both `sliderWidth` and `itemWidth` for horizontal carousels');
      if (!(!t.vertical || (t.sliderHeight && t.itemHeight)))
        console.error('react-native-snap-carousel: You need to specify both `sliderHeight` and `itemHeight` for vertical carousels');
      if (!(!t.apparitionDelay || C || t.useScrollView))
        console.warn('react-native-snap-carousel: Using `apparitionDelay` on Android is not recommended since it can lead to rendering issues');
      if (t.customAnimationType || t.customAnimationOptions)
        console.warn(
          'react-native-snap-carousel: Props `customAnimationType` and `customAnimationOptions` have been renamed to `activeAnimationType` and `activeAnimationOptions`'
        );
      if (t.onScrollViewScroll) console.error('react-native-snap-carousel: Prop `onScrollViewScroll` has been removed. Use `onScroll` instead');
      return o;
    }

    module25.default(k, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this,
            o = this.props,
            n = o.apparitionDelay,
            l = o.autoplay,
            s = o.firstItem,
            u = this._getFirstItem(s),
            c = function () {
              t.setState({
                hideCarousel: false,
              });
              if (l) t.startAutoplay();
            };

          this._mounted = true;

          this._initPositionsAndInterpolators();

          requestAnimationFrame(function () {
            if (t._mounted) {
              t._snapToItem(u, false, false, true, false);

              t._hackActiveSlideAnimation(u, 'start', true);

              if (n)
                t._apparitionTimeout = setTimeout(function () {
                  c();
                }, n);
              else c();
            }
          });
        },
      },
      {
        key: 'shouldComponentUpdate',
        value: function (t, o) {
          return false === this.props.shouldOptimizeUpdates || module1572.default(this, t, o);
        },
      },
      {
        key: 'componentDidUpdate',
        value: function (t) {
          var o = this.state.interpolators,
            n = this.props,
            l = n.firstItem,
            s = n.itemHeight,
            u = n.itemWidth,
            c = n.scrollEnabled,
            h = n.sliderHeight,
            p = n.sliderWidth,
            f = this._getCustomDataLength(this.props);

          if (f) {
            var _ = this._getFirstItem(l, this.props),
              v = this._activeItem || 0 === this._activeItem ? this._activeItem : _,
              y = p && p !== t.sliderWidth,
              S = h && h !== t.sliderHeight,
              T = u && u !== t.itemWidth,
              I = s && s !== t.itemHeight,
              b = c !== t.scrollEnabled;

            if (v > f - 1) v = f - 1;
            if (b) this._setScrollEnabled(c);

            if (o.length !== f || y || S || T || I) {
              this._activeItem = v;
              this._previousItemsLength = f;

              this._initPositionsAndInterpolators(this.props);

              if (this._previousItemsLength > f) this._hackActiveSlideAnimation(v, null, true);
              if (y || S || T || I) this._snapToItem(v, false, false, false, false);
            } else if (_ !== this._previousFirstItem && _ !== this._activeItem) {
              this._activeItem = _;
              this._previousFirstItem = _;

              this._snapToItem(_, false, true, false, false);
            }

            if (this.props.onScroll !== t.onScroll) this._setScrollHandler(this.props);
          }
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this._mounted = false;
          this.stopAutoplay();
          clearTimeout(this._apparitionTimeout);
          clearTimeout(this._hackSlideAnimationTimeout);
          clearTimeout(this._enableAutoplayTimeout);
          clearTimeout(this._autoplayTimeout);
          clearTimeout(this._snapNoMomentumTimeout);
          clearTimeout(this._edgeItemTimeout);
          clearTimeout(this._lockScrollTimeout);
        },
      },
      {
        key: 'realIndex',
        get: function () {
          return this._activeItem;
        },
      },
      {
        key: 'currentIndex',
        get: function () {
          return this._getDataIndex(this._activeItem);
        },
      },
      {
        key: 'currentScrollPosition',
        get: function () {
          return this._currentContentOffset;
        },
      },
      {
        key: '_setScrollHandler',
        value: function (t) {
          var o = {
            listener: this._onScroll,
            useNativeDriver: true,
          };
          this._scrollPos = new ReactNative.Animated.Value(0);
          var n = t.vertical
            ? [
                {
                  nativeEvent: {
                    contentOffset: {
                      y: this._scrollPos,
                    },
                  },
                },
              ]
            : [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: this._scrollPos,
                    },
                  },
                },
              ];

          if (t.onScroll && Array.isArray(t.onScroll._argMapping)) {
            n.pop();
            var u = module12.default(t.onScroll._argMapping, 1)[0];
            if (u && u.nativeEvent && u.nativeEvent.contentOffset) this._scrollPos = u.nativeEvent.contentOffset.x || u.nativeEvent.contentOffset.y || this._scrollPos;
            n.push.apply(n, module20.default(t.onScroll._argMapping));
          }

          this._onScrollHandler = ReactNative.Animated.event(n, o);
        },
      },
      {
        key: '_needsScrollView',
        value: function () {
          return this.props.useScrollView || !E || this._shouldUseStackLayout() || this._shouldUseTinderLayout();
        },
      },
      {
        key: '_needsRTLAdaptations',
        value: function () {
          var t = this.props.vertical;
          return P && !C && !t;
        },
      },
      {
        key: '_canLockScroll',
        value: function () {
          var t = this.props,
            o = t.scrollEnabled,
            n = t.enableMomentum,
            l = t.lockScrollWhileSnapping;
          return o && !n && l;
        },
      },
      {
        key: '_enableLoop',
        value: function () {
          var t = this.props,
            o = t.data,
            n = t.enableSnap,
            l = t.loop;
          return n && l && o && o.length && o.length > 1;
        },
      },
      {
        key: '_shouldAnimateSlides',
        value: function () {
          var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : this.props,
            o = t.inactiveSlideOpacity,
            n = t.inactiveSlideScale,
            l = t.scrollInterpolator,
            s = t.slideInterpolatedStyle;
          return o < 1 || n < 1 || !!l || !!s || this._shouldUseShiftLayout() || this._shouldUseStackLayout() || this._shouldUseTinderLayout();
        },
      },
      {
        key: '_shouldUseCustomAnimation',
        value: function () {
          return !!this.props.activeAnimationOptions && !this._shouldUseStackLayout() && !this._shouldUseTinderLayout();
        },
      },
      {
        key: '_shouldUseShiftLayout',
        value: function () {
          var t = this.props,
            o = t.inactiveSlideShift;
          return 'default' === t.layout && 0 !== o;
        },
      },
      {
        key: '_shouldUseStackLayout',
        value: function () {
          return 'stack' === this.props.layout;
        },
      },
      {
        key: '_shouldUseTinderLayout',
        value: function () {
          return 'tinder' === this.props.layout;
        },
      },
      {
        key: '_getCustomData',
        value: function () {
          var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : this.props,
            o = t.data,
            n = t.loopClonesPerSide,
            s = o && o.length;
          if (!s) return [];
          if (!this._enableLoop()) return o;
          var u = [],
            c = [];

          if (n > s) {
            for (var h, p, f = Math.floor(n / s), _ = n % s, v = 0; v < f; v++) {
              var y, S;
              (y = u).push.apply(y, module20.default(o));
              (S = c).push.apply(S, module20.default(o));
            }

            (h = u).unshift.apply(h, module20.default(o.slice(-_)));
            (p = c).push.apply(p, module20.default(o.slice(0, _)));
          } else {
            u = o.slice(-n);
            c = o.slice(0, n);
          }

          return u.concat(o, c);
        },
      },
      {
        key: '_getCustomDataLength',
        value: function () {
          var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : this.props,
            o = t.data,
            n = t.loopClonesPerSide,
            l = o && o.length;
          return l ? (this._enableLoop() ? l + 2 * n : l) : 0;
        },
      },
      {
        key: '_getCustomIndex',
        value: function (t) {
          var o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : this.props,
            n = this._getCustomDataLength(o);

          return !n || (!t && 0 !== t) ? 0 : this._needsRTLAdaptations() ? n - t - 1 : t;
        },
      },
      {
        key: '_getDataIndex',
        value: function (t) {
          var o = this.props,
            n = o.data,
            s = o.loopClonesPerSide,
            u = n && n.length;
          if (!this._enableLoop() || !u) return t;
          if (t >= u + s) return s > u ? (t - s) % u : t - u - s;

          if (t < s) {
            if (s > u) {
              for (var c = [], h = [], p = Math.floor(s / u), f = s % u, _ = 0; _ < u; _++) c.push(_);

              for (var v = 0; v < p; v++) h.push.apply(h, c);

              h.unshift.apply(h, module20.default(c.slice(-f)));
              return h[t];
            }

            return t + u - s;
          }

          return t - s;
        },
      },
      {
        key: '_getPositionIndex',
        value: function (t) {
          var o = this.props,
            n = o.loop,
            l = o.loopClonesPerSide;
          return n ? t + l : t;
        },
      },
      {
        key: '_getFirstItem',
        value: function (t) {
          var o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : this.props,
            n = o.loopClonesPerSide,
            l = this._getCustomDataLength(o);

          return !l || t > l - 1 || t < 0 ? 0 : this._enableLoop() ? t + n : t;
        },
      },
      {
        key: '_getWrappedRef',
        value: function () {
          return this._carouselRef && ((this._needsScrollView() && this._carouselRef.scrollTo) || (!this._needsScrollView() && this._carouselRef.scrollToOffset))
            ? this._carouselRef
            : this._carouselRef && this._carouselRef.getNode && this._carouselRef.getNode();
        },
      },
      {
        key: '_getScrollEnabled',
        value: function () {
          return this._scrollEnabled;
        },
      },
      {
        key: '_setScrollEnabled',
        value: function () {
          var t = !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0],
            o = this._getWrappedRef();

          if (o && o.setNativeProps) {
            o.setNativeProps({
              scrollEnabled: t,
            });
            this._scrollEnabled = t;
          }
        },
      },
      {
        key: '_getKeyExtractor',
        value: function (t, o) {
          return this._needsScrollView() ? 'scrollview-item-' + o : 'flatlist-item-' + o;
        },
      },
      {
        key: '_getScrollOffset',
        value: function (t) {
          var o = this.props.vertical;
          return t && t.nativeEvent && t.nativeEvent.contentOffset ? t.nativeEvent.contentOffset[o ? 'y' : 'x'] : 0;
        },
      },
      {
        key: '_getContainerInnerMargin',
        value: function () {
          var t = arguments.length > 0 && undefined !== arguments[0] && arguments[0],
            o = this.props,
            n = o.sliderWidth,
            l = o.sliderHeight,
            s = o.itemWidth,
            u = o.itemHeight,
            c = o.vertical,
            h = o.activeSlideAlignment;
          return ('start' === h && !t) || ('end' === h && t) ? 0 : ('end' === h && !t) || ('start' === h && t) ? (c ? l - u : n - s) : c ? (l - u) / 2 : (n - s) / 2;
        },
      },
      {
        key: '_getViewportOffset',
        value: function () {
          var t = this.props,
            o = t.sliderWidth,
            n = t.sliderHeight,
            l = t.itemWidth,
            s = t.itemHeight,
            u = t.vertical,
            c = t.activeSlideAlignment;
          if ('start' === c) return u ? s / 2 : l / 2;
          else if ('end' === c) return u ? n - s / 2 : o - l / 2;
          else return u ? n / 2 : o / 2;
        },
      },
      {
        key: '_getCenter',
        value: function (t) {
          return t + this._getViewportOffset() - this._getContainerInnerMargin();
        },
      },
      {
        key: '_getActiveItem',
        value: function (t) {
          for (var o = this.props, n = o.activeSlideOffset, l = o.swipeThreshold, s = this._getCenter(t), u = n || l, c = 0; c < this._positions.length; c++) {
            var h = this._positions[c],
              p = h.start,
              f = h.end;
            if (s + u >= p && s - u <= f) return c;
          }

          var _ = this._positions.length - 1;

          return this._positions[_] && s - u > this._positions[_].end ? _ : 0;
        },
      },
      {
        key: '_initPositionsAndInterpolators',
        value: function () {
          var t = this,
            o = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : this.props,
            n = o.data,
            l = o.itemWidth,
            s = o.itemHeight,
            u = o.scrollInterpolator,
            c = o.vertical ? s : l;

          if (n && n.length) {
            var h = [];
            this._positions = [];

            this._getCustomData(o).forEach(function (n, l) {
              var s,
                p = t._getCustomIndex(l, o);

              if (
                ((t._positions[l] = {
                  start: l * c,
                  end: l * c + c,
                }),
                t._shouldAnimateSlides(o))
              ) {
                if (t._shouldUseCustomAnimation()) s = new ReactNative.Animated.Value(p === t._activeItem ? 1 : 0);
                else {
                  var f;
                  if (u) f = u(p, o);
                  else if (t._shouldUseStackLayout()) f = module1574.stackScrollInterpolator(p, o);
                  else if (t._shouldUseTinderLayout()) f = module1574.tinderScrollInterpolator(p, o);
                  if (!(f && f.inputRange && f.outputRange)) f = module1574.defaultScrollInterpolator(p, o);
                  s = t._scrollPos.interpolate(
                    A(
                      A({}, f),
                      {},
                      {
                        extrapolate: 'clamp',
                      }
                    )
                  );
                }
              } else s = new ReactNative.Animated.Value(1);
              h.push(s);
            });

            this.setState({
              interpolators: h,
            });
          }
        },
      },
      {
        key: '_getSlideAnimation',
        value: function (t, o) {
          var n = this.state.interpolators,
            l = this.props,
            s = l.activeAnimationType,
            u = l.activeAnimationOptions,
            c = n && n[t];
          if (!c && 0 !== c) return null;
          var h = A(
            A(
              {
                isInteraction: false,
                useNativeDriver: true,
              },
              u
            ),
            {},
            {
              toValue: o,
            }
          );
          return ReactNative.Animated.parallel([
            ReactNative.Animated.timing(
              c,
              A(
                A({}, h),
                {},
                {
                  easing: ReactNative.Easing.linear,
                }
              )
            ),
            ReactNative.Animated[s](c, A({}, h)),
          ]);
        },
      },
      {
        key: '_playCustomSlideAnimation',
        value: function (t, o) {
          var n = this.state.interpolators,
            l = this._getCustomDataLength(),
            s = this._getCustomIndex(t),
            u = this._getDataIndex(s),
            c = this._getCustomIndex(o),
            h = this._getDataIndex(c),
            p = [];

          if (this._enableLoop())
            for (var f = 0; f < l; f++)
              this._getDataIndex(f) === u && n[f] ? p.push(this._getSlideAnimation(f, 0)) : this._getDataIndex(f) === h && n[f] && p.push(this._getSlideAnimation(f, 1));
          else {
            if (n[t]) p.push(this._getSlideAnimation(t, 0));
            if (n[o]) p.push(this._getSlideAnimation(o, 1));
          }
          ReactNative.Animated.parallel(p, {
            stopTogether: false,
          }).start();
        },
      },
      {
        key: '_hackActiveSlideAnimation',
        value: function (t, o) {
          var n = this,
            l = arguments.length > 2 && undefined !== arguments[2] && arguments[2],
            s = this.props.data;

          if (this._mounted && this._carouselRef && this._positions[t] && (l || !this._enableLoop())) {
            var u = this._positions[t] && this._positions[t].start;

            if (u || 0 === u) {
              var c = s && s.length,
                h = o || 1 === c ? 'start' : 'end';

              this._scrollTo(u + ('start' === h ? -1 : 1), false);

              clearTimeout(this._hackSlideAnimationTimeout);
              this._hackSlideAnimationTimeout = setTimeout(function () {
                n._scrollTo(u, false);
              }, 50);
            }
          }
        },
      },
      {
        key: '_lockScroll',
        value: function () {
          var t = this,
            o = this.props.lockScrollTimeoutDuration;
          clearTimeout(this._lockScrollTimeout);
          this._lockScrollTimeout = setTimeout(function () {
            t._releaseScroll();
          }, o);

          this._setScrollEnabled(false);
        },
      },
      {
        key: '_releaseScroll',
        value: function () {
          clearTimeout(this._lockScrollTimeout);

          this._setScrollEnabled(true);
        },
      },
      {
        key: '_repositionScroll',
        value: function (t) {
          var o = this.props,
            n = o.data,
            l = o.loopClonesPerSide,
            s = n && n.length;

          if (this._enableLoop() && s && !(t >= l && t < s + l)) {
            var u = t;
            if (t >= s + l) u = t - s;
            else if (t < l) u = t + s;

            this._snapToItem(u, false, false, false, false);
          }
        },
      },
      {
        key: '_scrollTo',
        value: function (t) {
          var o = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1],
            n = this.props.vertical,
            l = this._getWrappedRef();

          if (this._mounted && l) {
            var s = A(
              A(
                {},
                this._needsScrollView()
                  ? {
                      x: n ? 0 : t,
                      y: n ? t : 0,
                    }
                  : {
                      offset: t,
                    }
              ),
              {},
              {
                animated: o,
              }
            );
            if (this._needsScrollView()) l.scrollTo(s);
            else l.scrollToOffset(s);
          }
        },
      },
      {
        key: '_onScroll',
        value: function (t) {
          var o = this.props,
            n = o.callbackOffsetMargin,
            l = o.enableMomentum,
            s = o.onScroll,
            u = t ? this._getScrollOffset(t) : this._currentContentOffset,
            c = this._getActiveItem(u),
            h = c === this._itemToSnapTo,
            p = u >= this._scrollOffsetRef - n && u <= this._scrollOffsetRef + n;

          this._currentContentOffset = u;
          this._onScrollTriggered = true;
          this._lastScrollDate = Date.now();
          if (this._activeItem !== c && this._shouldUseCustomAnimation()) this._playCustomSlideAnimation(this._activeItem, c);

          if (l) {
            clearTimeout(this._snapNoMomentumTimeout);
            if (this._activeItem !== c) this._activeItem = c;

            if (h) {
              if (this._canFireBeforeCallback) this._onBeforeSnap(this._getDataIndex(c));
              if (p && this._canFireCallback) this._onSnap(this._getDataIndex(c));
            }
          } else if (this._activeItem !== c && h) {
            if (this._canFireBeforeCallback) this._onBeforeSnap(this._getDataIndex(c));

            if (p) {
              this._activeItem = c;
              if (this._canLockScroll()) this._releaseScroll();
              if (this._canFireCallback) this._onSnap(this._getDataIndex(c));
            }
          }

          if (c === this._itemToSnapTo && u === this._scrollOffsetRef) this._repositionScroll(c);
          if ('function' == typeof s && t) s(t);
        },
      },
      {
        key: '_onStartShouldSetResponderCapture',
        value: function (t) {
          var o = this.props.onStartShouldSetResponderCapture;
          if (o) o(t);
          return this._getScrollEnabled();
        },
      },
      {
        key: '_onTouchStart',
        value: function () {
          var t = this.props.onTouchStart;
          if (false !== this._getScrollEnabled() && this._autoplaying) this.pauseAutoPlay();
          if (t) t();
        },
      },
      {
        key: '_onTouchEnd',
        value: function () {
          var t = this.props.onTouchEnd;
          if (false !== this._getScrollEnabled() && this._autoplay && !this._autoplaying) this.startAutoplay();
          if (t) t();
        },
      },
      {
        key: '_onScrollBeginDrag',
        value: function (t) {
          var o = this.props.onScrollBeginDrag;

          if (this._getScrollEnabled()) {
            this._scrollStartOffset = this._getScrollOffset(t);
            this._scrollStartActive = this._getActiveItem(this._scrollStartOffset);
            this._ignoreNextMomentum = false;
            if (o) o(t);
          }
        },
      },
      {
        key: '_onScrollEndDrag',
        value: function (t) {
          var o = this.props.onScrollEndDrag;
          if (this._carouselRef && this._onScrollEnd) this._onScrollEnd();
          if (o) o(t);
        },
      },
      {
        key: '_onMomentumScrollEnd',
        value: function (t) {
          var o = this.props.onMomentumScrollEnd;
          if (this._carouselRef && this._onScrollEnd) this._onScrollEnd();
          if (o) o(t);
        },
      },
      {
        key: '_onScrollEnd',
        value: function (t) {
          var o = this,
            n = this.props,
            l = n.autoplayDelay,
            s = n.enableSnap;
          if (this._ignoreNextMomentum) this._ignoreNextMomentum = false;
          else if (this._currentContentOffset !== this._scrollEndOffset) {
            this._scrollEndOffset = this._currentContentOffset;
            this._scrollEndActive = this._getActiveItem(this._scrollEndOffset);
            if (s) this._snapScroll(this._scrollEndOffset - this._scrollStartOffset);

            if (this._autoplay && !this._autoplaying) {
              clearTimeout(this._enableAutoplayTimeout);
              this._enableAutoplayTimeout = setTimeout(function () {
                o.startAutoplay();
              }, l + 50);
            }
          }
        },
      },
      {
        key: '_onTouchRelease',
        value: function (t) {
          var o = this;

          if (this.props.enableMomentum && C) {
            clearTimeout(this._snapNoMomentumTimeout);
            this._snapNoMomentumTimeout = setTimeout(function () {
              o._snapToItem(o._activeItem);
            }, 100);
          }
        },
      },
      {
        key: '_onLayout',
        value: function (t) {
          var o = this.props.onLayout;

          if (this._onLayoutInitDone) {
            this._initPositionsAndInterpolators();

            this._snapToItem(this._activeItem, false, false, false, false);
          } else this._onLayoutInitDone = true;

          if (o) o(t);
        },
      },
      {
        key: '_snapScroll',
        value: function (t) {
          var o = this.props.swipeThreshold;
          if (!this._scrollEndActive && 0 !== this._scrollEndActive && C) this._scrollEndActive = this._scrollStartActive;
          if (this._scrollStartActive !== this._scrollEndActive) this._snapToItem(this._scrollEndActive);
          else if (t > 0) t > o ? this._snapToItem(this._scrollStartActive + 1) : this._snapToItem(this._scrollEndActive);
          else if (t < 0 && t < -o) this._snapToItem(this._scrollStartActive - 1);
          else this._snapToItem(this._scrollEndActive);
        },
      },
      {
        key: '_snapToItem',
        value: function (t) {
          var o = this,
            n = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1],
            l = !(arguments.length > 2 && undefined !== arguments[2]) || arguments[2],
            s = arguments.length > 3 && undefined !== arguments[3] && arguments[3],
            u = !(arguments.length > 4 && undefined !== arguments[4]) || arguments[4],
            c = this.props,
            h = c.enableMomentum,
            p = c.onSnapToItem,
            f = c.onBeforeSnapToItem,
            _ = this._getCustomDataLength(),
            v = this._getWrappedRef();

          if (_ && v) {
            if (!t || t < 0) t = 0;
            else if (_ > 0 && t >= _) t = _ - 1;

            if (t !== this._previousActiveItem) {
              this._previousActiveItem = t;
              if (u && this._canLockScroll()) this._lockScroll();

              if (l) {
                if (f) this._canFireBeforeCallback = true;
                if (p) this._canFireCallback = true;
              }
            }

            this._itemToSnapTo = t;
            this._scrollOffsetRef = this._positions[t] && this._positions[t].start;
            this._onScrollTriggered = false;

            if (this._scrollOffsetRef || 0 === this._scrollOffsetRef) {
              this._scrollTo(this._scrollOffsetRef, n);

              this._scrollEndOffset = this._currentContentOffset;

              if (h) {
                if (!s) this._ignoreNextMomentum = true;

                if (!(0 !== t && t !== _ - 1)) {
                  clearTimeout(this._edgeItemTimeout);
                  this._edgeItemTimeout = setTimeout(function () {
                    if (!(s || t !== o._activeItem || o._onScrollTriggered)) o._onScroll();
                  }, 250);
                }
              }
            }
          }
        },
      },
      {
        key: '_onBeforeSnap',
        value: function (t) {
          var o = this.props.onBeforeSnapToItem;

          if (this._carouselRef) {
            this._canFireBeforeCallback = false;
            if (o) o(t);
          }
        },
      },
      {
        key: '_onSnap',
        value: function (t) {
          var o = this.props.onSnapToItem;

          if (this._carouselRef) {
            this._canFireCallback = false;
            if (o) o(t);
          }
        },
      },
      {
        key: 'startAutoplay',
        value: function () {
          var t = this,
            o = this.props,
            n = o.autoplayInterval,
            l = o.autoplayDelay;
          this._autoplay = true;

          if (!this._autoplaying) {
            clearTimeout(this._autoplayTimeout);
            this._autoplayTimeout = setTimeout(function () {
              t._autoplaying = true;
              t._autoplayInterval = setInterval(function () {
                if (t._autoplaying) t.snapToNext();
              }, n);
            }, l);
          }
        },
      },
      {
        key: 'pauseAutoPlay',
        value: function () {
          this._autoplaying = false;
          clearTimeout(this._autoplayTimeout);
          clearTimeout(this._enableAutoplayTimeout);
          clearInterval(this._autoplayInterval);
        },
      },
      {
        key: 'stopAutoplay',
        value: function () {
          this._autoplay = false;
          this.pauseAutoPlay();
        },
      },
      {
        key: 'snapToItem',
        value: function (t) {
          var o = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1],
            n = !(arguments.length > 2 && undefined !== arguments[2]) || arguments[2];
          if (!t || t < 0) t = 0;

          var l = this._getPositionIndex(t);

          if (l !== this._activeItem) this._snapToItem(l, o, n);
        },
      },
      {
        key: 'snapToNext',
        value: function () {
          var t = !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0],
            o = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1],
            n = this._getCustomDataLength(),
            l = this._activeItem + 1;

          if (l > n - 1) {
            if (!this._enableLoop()) return;
            l = 0;
          }

          this._snapToItem(l, t, o);
        },
      },
      {
        key: 'snapToPrev',
        value: function () {
          var t = !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0],
            o = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1],
            n = this._getCustomDataLength(),
            l = this._activeItem - 1;

          if (l < 0) {
            if (!this._enableLoop()) return;
            l = n - 1;
          }

          this._snapToItem(l, t, o);
        },
      },
      {
        key: 'triggerRenderingHack',
        value: function (t) {
          if (!(Date.now() - this._lastScrollDate < 500)) {
            var o = this._currentContentOffset;

            if (o || 0 === o) {
              var n = t || (0 === o ? 1 : -1);

              this._scrollTo(o + n, false);
            }
          }
        },
      },
      {
        key: '_getSlideInterpolatedStyle',
        value: function (t, o) {
          var n = this.props,
            l = n.layoutCardOffset,
            s = n.slideInterpolatedStyle;
          return s
            ? s(t, o, this.props)
            : this._shouldUseTinderLayout()
            ? module1574.tinderAnimatedStyles(t, o, this.props, l)
            : this._shouldUseStackLayout()
            ? module1574.stackAnimatedStyles(t, o, this.props, l)
            : this._shouldUseShiftLayout()
            ? module1574.shiftAnimatedStyles(t, o, this.props)
            : module1574.defaultAnimatedStyles(t, o, this.props);
        },
      },
      {
        key: '_renderItem',
        value: function (t) {
          var n = t.item,
            l = t.index,
            s = this.state.interpolators,
            u = this.props,
            c = u.hasParallaxImages,
            h = u.itemWidth,
            p = u.itemHeight,
            f = u.keyExtractor,
            _ = u.renderItem,
            S = u.sliderHeight,
            T = u.sliderWidth,
            I = u.slideStyle,
            b = u.vertical,
            k = s && s[l];
          if (!k && 0 !== k) return null;

          var A = this._shouldAnimateSlides(),
            O = A ? ReactNative.Animated.View : ReactNative.View,
            C = A ? this._getSlideInterpolatedStyle(l, k) : {},
            E = c
              ? {
                  scrollPosition: this._scrollPos,
                  carouselRef: this._carouselRef,
                  vertical: b,
                  sliderWidth: T,
                  sliderHeight: S,
                  itemWidth: h,
                  itemHeight: p,
                }
              : undefined,
            w = b
              ? {
                  height: p,
                }
              : {
                  width: h,
                },
            P = this._needsScrollView()
              ? {
                  key: f ? f(n, l) : this._getKeyExtractor(n, l),
                }
              : {};

          return React.default.createElement(
            O,
            module11.default(
              {
                style: [w, I, C],
                pointerEvents: 'box-none',
              },
              P
            ),
            _(
              {
                item: n,
                index: l,
              },
              E
            )
          );
        },
      },
      {
        key: '_getComponentOverridableProps',
        value: function () {
          var t = this.props,
            o = t.enableMomentum,
            n = t.itemWidth,
            l = t.itemHeight,
            s = t.loopClonesPerSide,
            u = t.sliderWidth,
            c = t.sliderHeight,
            h = t.vertical,
            p = Math.ceil(h ? c / l : u / n) + 1 + 2 * (this._enableLoop() ? s : 2),
            f = 1 + 2 * p,
            _ = f,
            v = this._needsScrollView()
              ? {}
              : {
                  initialNumToRender: p,
                  maxToRenderPerBatch: f,
                  windowSize: _,
                };
          return A(
            {
              decelerationRate: o ? 0.9 : 'fast',
              showsHorizontalScrollIndicator: false,
              showsVerticalScrollIndicator: false,
              overScrollMode: 'never',
              automaticallyAdjustContentInsets: false,
              directionalLockEnabled: true,
              pinchGestureEnabled: false,
              scrollsToTop: false,
              removeClippedSubviews: !this._needsScrollView(),
              inverted: this._needsRTLAdaptations(),
            },
            v
          );
        },
      },
      {
        key: '_getComponentStaticProps',
        value: function () {
          var t = this,
            o = this.state.hideCarousel,
            n = this.props,
            l = n.containerCustomStyle,
            s = n.contentContainerCustomStyle,
            u = n.keyExtractor,
            c = n.sliderWidth,
            h = n.sliderHeight,
            p = n.style,
            f = n.vertical,
            _ = [
              l || p || {},
              o
                ? {
                    opacity: 0,
                  }
                : {},
              f
                ? {
                    height: h,
                    flexDirection: 'column',
                  }
                : {
                    width: c,
                    flexDirection: this._needsRTLAdaptations() ? 'row-reverse' : 'row',
                  },
            ],
            v = [
              f
                ? {
                    paddingTop: this._getContainerInnerMargin(),
                    paddingBottom: this._getContainerInnerMargin(true),
                  }
                : {
                    paddingLeft: this._getContainerInnerMargin(),
                    paddingRight: this._getContainerInnerMargin(true),
                  },
              s || {},
            ],
            y = this._needsScrollView()
              ? {}
              : {
                  renderItem: this._renderItem,
                  numColumns: 1,
                  keyExtractor: u || this._getKeyExtractor,
                };
          return A(
            {
              ref: function (o) {
                return (t._carouselRef = o);
              },
              data: this._getCustomData(),
              style: _,
              contentContainerStyle: v,
              horizontal: !f,
              scrollEventThrottle: 1,
              onScroll: this._onScrollHandler,
              onScrollBeginDrag: this._onScrollBeginDrag,
              onScrollEndDrag: this._onScrollEndDrag,
              onMomentumScrollEnd: this._onMomentumScrollEnd,
              onResponderRelease: this._onTouchRelease,
              onStartShouldSetResponderCapture: this._onStartShouldSetResponderCapture,
              onTouchStart: this._onTouchStart,
              onTouchEnd: this._onScrollEnd,
              onLayout: this._onLayout,
            },
            y
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            o = this.props,
            n = o.data,
            l = o.renderItem,
            s = o.useScrollView;
          if (!n || !l) return null;
          var u = A(A(A({}, this._getComponentOverridableProps()), this.props), this._getComponentStaticProps()),
            c = 'function' == typeof s ? s : w;
          return this._needsScrollView()
            ? React.default.createElement(
                c,
                u,
                this._getCustomData().map(function (o, n) {
                  return t._renderItem({
                    item: o,
                    index: n,
                  });
                })
              )
            : React.default.createElement(E, u);
        },
      },
    ]);
    return k;
  })(React.Component);

exports.default = D;
D.propTypes = {
  data: PropTypes.default.array.isRequired,
  renderItem: PropTypes.default.func.isRequired,
  itemWidth: PropTypes.default.number,
  itemHeight: PropTypes.default.number,
  sliderWidth: PropTypes.default.number,
  sliderHeight: PropTypes.default.number,
  activeAnimationType: PropTypes.default.string,
  activeAnimationOptions: PropTypes.default.object,
  activeSlideAlignment: PropTypes.default.oneOf(['center', 'end', 'start']),
  activeSlideOffset: PropTypes.default.number,
  apparitionDelay: PropTypes.default.number,
  autoplay: PropTypes.default.bool,
  autoplayDelay: PropTypes.default.number,
  autoplayInterval: PropTypes.default.number,
  callbackOffsetMargin: PropTypes.default.number,
  containerCustomStyle: ReactNative.ViewPropTypes ? ReactNative.ViewPropTypes.style : ReactNative.View.propTypes.style,
  contentContainerCustomStyle: ReactNative.ViewPropTypes ? ReactNative.ViewPropTypes.style : ReactNative.View.propTypes.style,
  enableMomentum: PropTypes.default.bool,
  enableSnap: PropTypes.default.bool,
  firstItem: PropTypes.default.number,
  hasParallaxImages: PropTypes.default.bool,
  inactiveSlideOpacity: PropTypes.default.number,
  inactiveSlideScale: PropTypes.default.number,
  inactiveSlideShift: PropTypes.default.number,
  layout: PropTypes.default.oneOf(['default', 'stack', 'tinder']),
  layoutCardOffset: PropTypes.default.number,
  lockScrollTimeoutDuration: PropTypes.default.number,
  lockScrollWhileSnapping: PropTypes.default.bool,
  loop: PropTypes.default.bool,
  loopClonesPerSide: PropTypes.default.number,
  scrollEnabled: PropTypes.default.bool,
  scrollInterpolator: PropTypes.default.func,
  slideInterpolatedStyle: PropTypes.default.func,
  slideStyle: ReactNative.ViewPropTypes ? ReactNative.ViewPropTypes.style : ReactNative.View.propTypes.style,
  shouldOptimizeUpdates: PropTypes.default.bool,
  swipeThreshold: PropTypes.default.number,
  useScrollView: PropTypes.default.oneOfType([PropTypes.default.bool, PropTypes.default.func]),
  vertical: PropTypes.default.bool,
  onBeforeSnapToItem: PropTypes.default.func,
  onSnapToItem: PropTypes.default.func,
};
D.defaultProps = {
  activeAnimationType: 'timing',
  activeAnimationOptions: null,
  activeSlideAlignment: 'center',
  activeSlideOffset: 20,
  apparitionDelay: 0,
  autoplay: false,
  autoplayDelay: 1e3,
  autoplayInterval: 3e3,
  callbackOffsetMargin: 5,
  containerCustomStyle: {},
  contentContainerCustomStyle: {},
  enableMomentum: false,
  enableSnap: true,
  firstItem: 0,
  hasParallaxImages: false,
  inactiveSlideOpacity: 0.7,
  inactiveSlideScale: 0.9,
  inactiveSlideShift: 0,
  layout: 'default',
  lockScrollTimeoutDuration: 1e3,
  lockScrollWhileSnapping: false,
  loop: false,
  loopClonesPerSide: 3,
  scrollEnabled: true,
  slideStyle: {},
  shouldOptimizeUpdates: true,
  swipeThreshold: 20,
  useScrollView: !E,
  vertical: false,
};
