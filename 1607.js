var module11 = require('./11'),
  module47 = require('./47'),
  module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = v(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = s ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(l, u, c);
        else l[u] = t[u];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native');

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (v = function (t) {
    return t ? o : n;
  })(t);
}

function w(t, n) {
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

function x(t) {
  for (var n = 1; n < arguments.length; n++) {
    var l = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      w(Object(l), true).forEach(function (n) {
        module47.default(t, n, l[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      w(Object(l)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
      });
  }

  return t;
}

function S() {
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

var E = {
    container: {
      backgroundColor: 'transparent',
      position: 'relative',
      flex: 1,
    },
    wrapperIOS: {
      backgroundColor: 'transparent',
    },
    wrapperAndroid: {
      backgroundColor: 'transparent',
      flex: 1,
    },
    slide: {
      backgroundColor: 'transparent',
    },
    pagination_x: {
      position: 'absolute',
      bottom: 25,
      left: 0,
      right: 0,
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    pagination_y: {
      position: 'absolute',
      right: 15,
      top: 0,
      bottom: 0,
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    title: {
      height: 30,
      justifyContent: 'center',
      position: 'absolute',
      paddingLeft: 10,
      bottom: -30,
      left: 0,
      flexWrap: 'nowrap',
      width: 250,
      backgroundColor: 'transparent',
    },
    buttonWrapper: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
      position: 'absolute',
      top: 0,
      left: 0,
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 50,
      color: '#007aff',
    },
  },
  T = (function (t, ...args) {
    module35.default(w, t);

    var module47 = w,
      PropTypes = S(),
      v = function () {
        var t,
          n = module34.default(module47);

        if (PropTypes) {
          var l = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, l);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function w() {
      var t;
      module24.default(this, w);
      (t = v.call(this, ...args)).state = t.initState(t.props);
      t.initialRender = true;
      t.autoplayTimer = null;
      t.loopJumpTimer = null;

      t.onLayout = function (n) {
        var o = n.nativeEvent.layout,
          l = o.width,
          s = o.height,
          u = (t.internals.offset = {}),
          c = {
            width: l,
            height: s,
          };

        if (t.state.total > 1) {
          var p = t.state.index;
          if (t.props.loop) p++;
          u[t.state.dir] = 'y' === t.state.dir ? s * p : l * p;
        }

        if (!t.state.offset) c.offset = u;

        if (t.initialRender && t.state.total > 1) {
          t.scrollView.scrollTo(
            x(
              x({}, u),
              {},
              {
                animated: false,
              }
            )
          );
          t.initialRender = false;
        }

        t.setState(c);
      };

      t.loopJump = function () {
        if (t.state.loopJump) {
          var n = t.state.index + (t.props.loop ? 1 : 0),
            o = t.scrollView;
          t.loopJumpTimer = setTimeout(
            function () {
              if (o.setPageWithoutAnimation) o.setPageWithoutAnimation(n);
              else if (0 === t.state.index)
                o.scrollTo(
                  false === t.props.horizontal
                    ? {
                        x: 0,
                        y: t.state.height,
                        animated: false,
                      }
                    : {
                        x: t.state.width,
                        y: 0,
                        animated: false,
                      }
                );
              else if (t.state.index === t.state.total - 1)
                false === t.props.horizontal
                  ? t.scrollView.scrollTo({
                      x: 0,
                      y: t.state.height * t.state.total,
                      animated: false,
                    })
                  : t.scrollView.scrollTo({
                      x: t.state.width * t.state.total,
                      y: 0,
                      animated: false,
                    });
            },
            o.setPageWithoutAnimation ? 50 : 300
          );
        }
      };

      t.autoplay = function () {
        if (Array.isArray(t.state.children) && t.props.autoplay && !t.internals.isScrolling && !t.state.autoplayEnd) {
          if (t.autoplayTimer) clearTimeout(t.autoplayTimer);
          t.autoplayTimer = setTimeout(function () {
            if (!t.props.loop && (t.props.autoplayDirection ? t.state.index === t.state.total - 1 : 0 === t.state.index))
              return t.setState({
                autoplayEnd: true,
              });
            t.scrollBy(t.props.autoplayDirection ? 1 : -1);
          }, 1e3 * t.props.autoplayTimeout);
        }
      };

      t.onScrollBegin = function (n) {
        t.internals.isScrolling = true;
        if (t.props.onScrollBeginDrag) t.props.onScrollBeginDrag(n, t.fullState(), module39.default(t));
      };

      t.onScrollEnd = function (n) {
        t.internals.isScrolling = false;
        if (!n.nativeEvent.contentOffset)
          'x' === t.state.dir
            ? (n.nativeEvent.contentOffset = {
                x: n.nativeEvent.position * t.state.width,
              })
            : (n.nativeEvent.contentOffset = {
                y: n.nativeEvent.position * t.state.height,
              });
        t.updateIndex(n.nativeEvent.contentOffset, t.state.dir, function () {
          t.autoplay();
          t.loopJump();
        });
        if (t.props.onMomentumScrollEnd) t.props.onMomentumScrollEnd(n, t.fullState(), module39.default(t));
      };

      t.onScrollEndDrag = function (n) {
        var o = n.nativeEvent.contentOffset,
          l = t.props.horizontal,
          s = t.state,
          u = s.children,
          c = s.index,
          p = t.internals.offset;
        if (!((l ? p.x : p.y) !== (l ? o.x : o.y) || (0 !== c && c !== u.length - 1))) t.internals.isScrolling = false;
      };

      t.updateIndex = function (n, o, l) {
        var s = t.state,
          u = s.index;
        if (!t.internals.offset) t.internals.offset = {};
        var c = n[o] - t.internals.offset[o],
          p = 'x' === o ? s.width : s.height,
          f = false;

        if (c) {
          u = parseInt(u + Math.round(c / p));
          if (t.props.loop) u <= -1 ? ((u = s.total - 1), (n[o] = p * s.total), (f = true)) : u >= s.total && ((u = 0), (n[o] = p), (f = true));
          var h = {};
          h.index = u;
          h.loopJump = f;
          t.internals.offset = n;
          if (f)
            n[o] === t.internals.offset[o]
              ? ((h.offset = {
                  x: 0,
                  y: 0,
                }),
                (h.offset[o] = n[o] + 1),
                t.setState(h, function () {
                  t.setState(
                    {
                      offset: n,
                    },
                    l
                  );
                }))
              : ((h.offset = n), t.setState(h, l));
          else t.setState(h, l);
        }
      };

      t.scrollBy = function (n) {
        var o = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];

        if (!(t.internals.isScrolling || t.state.total < 2)) {
          var l = t.state,
            s = (t.props.loop ? 1 : 0) + n + t.state.index,
            u = 0,
            c = 0;
          if ('x' === l.dir) u = s * l.width;
          if ('y' === l.dir) c = s * l.height;
          if (t.scrollView)
            t.scrollView.scrollTo({
              x: u,
              y: c,
              animated: o,
            });
          t.internals.isScrolling = true;
          t.setState({
            autoplayEnd: false,
          });
          if (!(o && 'ios' === ReactNative.Platform.OS))
            setImmediate(function () {
              t.onScrollEnd({
                nativeEvent: {
                  position: s,
                },
              });
            });
        }
      };

      t.scrollTo = function (n) {
        var o = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];

        if (!(t.internals.isScrolling || t.state.total < 2 || n == t.state.index)) {
          var l = t.state,
            s = t.state.index + (n - t.state.index),
            u = 0,
            c = 0;
          if ('x' === l.dir) u = s * l.width;
          if ('y' === l.dir) c = s * l.height;
          if (t.scrollView)
            t.scrollView.scrollTo({
              x: u,
              y: c,
              animated: o,
            });
          t.internals.isScrolling = true;
          t.setState({
            autoplayEnd: false,
          });
          if (!(o && 'ios' === ReactNative.Platform.OS))
            setImmediate(function () {
              t.onScrollEnd({
                nativeEvent: {
                  position: s,
                },
              });
            });
        }
      };

      t.scrollViewPropOverrides = function () {
        var n = t.props,
          o = {};

        for (var l in n)
          'function' == typeof n[l] &&
            'onMomentumScrollEnd' !== l &&
            'renderPagination' !== l &&
            'onScrollBeginDrag' !== l &&
            (function () {
              var s = n[l];

              o[l] = function (n) {
                return s(n, t.fullState(), module39.default(t));
              };
            })();

        return o;
      };

      t.renderPagination = function () {
        if (t.state.total <= 1) return null;

        for (
          var n = [],
            o =
              t.props.activeDot ||
              React.default.createElement(ReactNative.View, {
                style: [
                  {
                    backgroundColor: t.props.activeDotColor || '#007aff',
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3,
                    marginBottom: 3,
                  },
                  t.props.activeDotStyle,
                ],
              }),
            l =
              t.props.dot ||
              React.default.createElement(ReactNative.View, {
                style: [
                  {
                    backgroundColor: t.props.dotColor || 'rgba(0,0,0,.2)',
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3,
                    marginBottom: 3,
                  },
                  t.props.dotStyle,
                ],
              }),
            s = 0;
          s < t.state.total;
          s++
        )
          n.push(
            s === t.state.index
              ? React.default.cloneElement(o, {
                  key: s,
                })
              : React.default.cloneElement(l, {
                  key: s,
                })
          );

        return React.default.createElement(
          ReactNative.View,
          {
            pointerEvents: 'none',
            style: [E['pagination_' + t.state.dir], t.props.paginationStyle],
          },
          n
        );
      };

      t.renderTitle = function () {
        var n = t.state.children[t.state.index];
        return n && n.props && n.props.title
          ? React.default.createElement(
              ReactNative.View,
              {
                style: E.title,
              },
              t.state.children[t.state.index].props.title
            )
          : null;
      };

      t.renderNextButton = function () {
        var n = null;
        if (t.props.loop || t.state.index !== t.state.total - 1)
          n =
            t.props.nextButton ||
            React.default.createElement(
              ReactNative.Text,
              {
                style: E.buttonText,
              },
              '\u203a'
            );
        return React.default.createElement(
          ReactNative.TouchableOpacity,
          {
            onPress: function () {
              return null !== n && t.scrollBy(1);
            },
            disabled: t.props.disableNextButton,
          },
          React.default.createElement(ReactNative.View, null, n)
        );
      };

      t.renderPrevButton = function () {
        var n = null;
        if (t.props.loop || 0 !== t.state.index)
          n =
            t.props.prevButton ||
            React.default.createElement(
              ReactNative.Text,
              {
                style: E.buttonText,
              },
              '\u2039'
            );
        return React.default.createElement(
          ReactNative.TouchableOpacity,
          {
            onPress: function () {
              return null !== n && t.scrollBy(-1);
            },
            disabled: t.props.disablePrevButton,
          },
          React.default.createElement(ReactNative.View, null, n)
        );
      };

      t.renderButtons = function () {
        return React.default.createElement(
          ReactNative.View,
          {
            pointerEvents: 'box-none',
            style: [
              E.buttonWrapper,
              {
                width: t.state.width,
                height: t.state.height,
              },
              t.props.buttonWrapperStyle,
            ],
          },
          t.renderPrevButton(),
          t.renderNextButton()
        );
      };

      t.refScrollView = function (n) {
        t.scrollView = n;
      };

      t.onPageScrollStateChanged = function (n) {
        switch (n) {
          case 'dragging':
            return t.onScrollBegin();

          case 'idle':
          case 'settling':
            if (t.props.onTouchEnd) t.props.onTouchEnd();
        }
      };

      t.renderScrollView = function (o) {
        return React.default.createElement(
          ReactNative.ScrollView,
          module11.default(
            {
              ref: t.refScrollView,
            },
            t.props,
            t.scrollViewPropOverrides(),
            {
              contentContainerStyle: [E.wrapperIOS, t.props.style],
              contentOffset: t.state.offset,
              onScrollBeginDrag: t.onScrollBegin,
              onMomentumScrollEnd: t.onScrollEnd,
              onScrollEndDrag: t.onScrollEndDrag,
              style: t.props.scrollViewStyle,
            }
          ),
          o
        );
      };

      return t;
    }

    module25.default(w, [
      {
        key: 'UNSAFE_componentWillReceiveProps',
        value: function (t) {
          if (!t.autoplay && this.autoplayTimer) clearTimeout(this.autoplayTimer);
          if (t.index !== this.props.index) this.setState(this.initState(t, this.props.index !== t.index));
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          this.autoplay();
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          if (this.autoplayTimer) clearTimeout(this.autoplayTimer);
          if (this.loopJumpTimer) clearTimeout(this.loopJumpTimer);
        },
      },
      {
        key: 'UNSAFE_componentWillUpdate',
        value: function (t, n) {
          if (this.state.index !== n.index) this.props.onIndexChanged(n.index);
        },
      },
      {
        key: 'componentDidUpdate',
        value: function (t) {
          if (this.props.autoplay && !t.autoplay) this.autoplay();
          if (this.props.children !== t.children)
            this.props.loadMinimal && 'ios' === ReactNative.Platform.OS
              ? this.setState(
                  x(
                    x({}, this.props),
                    {},
                    {
                      index: this.state.index,
                    }
                  )
                )
              : this.setState(
                  this.initState(
                    x(
                      x({}, this.props),
                      {},
                      {
                        index: this.state.index,
                      }
                    ),
                    true
                  )
                );
        },
      },
      {
        key: 'initState',
        value: function (t) {
          var n = arguments.length > 1 && undefined !== arguments[1] && arguments[1],
            o = this.state || {
              width: 0,
              height: 0,
              offset: {
                x: 0,
                y: 0,
              },
            },
            l = {
              autoplayEnd: false,
              children: null,
              loopJump: false,
              offset: {},
            };
          l.children = Array.isArray(t.children)
            ? t.children.filter(function (t) {
                return t;
              })
            : t.children;
          l.total = l.children ? l.children.length || 1 : 0;
          if (o.total !== l.total || n) l.index = l.total > 1 ? t.index ** (l.total - 1) : 0;
          else l.index = o.index;
          var s = ReactNative.Dimensions.get('window'),
            u = s.width,
            c = s.height;
          l.dir = false === t.horizontal ? 'y' : 'x';
          if (t.width) l.width = t.width;
          else if (this.state && this.state.width) l.width = this.state.width;
          else l.width = u;
          if (t.height) l.height = t.height;
          else if (this.state && this.state.height) l.height = this.state.height;
          else l.height = c;
          l.offset[l.dir] = 'y' === l.dir ? c * t.index : u * t.index;
          this.internals = x(
            x({}, this.internals),
            {},
            {
              isScrolling: false,
            }
          );
          return l;
        },
      },
      {
        key: 'fullState',
        value: function () {
          return module11.default({}, this.state, this.internals);
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.state,
            n = t.index,
            o = t.total,
            l = t.width,
            s = t.height,
            u = t.children,
            c = this.props,
            p = c.containerStyle,
            f = c.loop,
            y = c.loadMinimal,
            v = c.loadMinimalSize,
            w = c.loadMinimalLoader,
            x = c.renderPagination,
            S = c.showsButtons,
            T = c.showsPagination,
            O = f ? 1 : 0,
            P = [],
            V = [
              {
                width: l,
                height: s,
              },
              E.slide,
            ],
            B = {
              width: l,
              height: s,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            };

          if (o > 1) {
            P = Object.keys(u);

            if (f) {
              P.unshift(o - 1 + '');
              P.push('0');
            }

            P = P.map(function (t, l) {
              return y
                ? (l >= n + O - v && l <= n + O + v) || (f && 1 === l) || (f && l === o - 1)
                  ? React.default.createElement(
                      ReactNative.View,
                      {
                        style: V,
                        key: l,
                      },
                      u[t]
                    )
                  : React.default.createElement(
                      ReactNative.View,
                      {
                        style: B,
                        key: l,
                      },
                      w || React.default.createElement(ReactNative.ActivityIndicator, null)
                    )
                : React.default.createElement(
                    ReactNative.View,
                    {
                      style: V,
                      key: l,
                    },
                    u[t]
                  );
            });
          } else
            P = React.default.createElement(
              ReactNative.View,
              {
                style: V,
                key: 0,
              },
              u
            );

          return React.default.createElement(
            ReactNative.View,
            {
              style: [E.container, p],
              onLayout: this.onLayout,
            },
            this.renderScrollView(P),
            T && (x ? x(n, o, this) : this.renderPagination()),
            this.renderTitle(),
            S && this.renderButtons()
          );
        },
      },
    ]);
    return w;
  })(React.Component);

exports.default = T;
T.propTypes = {
  horizontal: PropTypes.default.bool,
  children: PropTypes.default.node.isRequired,
  containerStyle: PropTypes.default.oneOfType([PropTypes.default.object, PropTypes.default.number]),
  style: PropTypes.default.oneOfType([PropTypes.default.object, PropTypes.default.number, PropTypes.default.array]),
  scrollViewStyle: PropTypes.default.oneOfType([PropTypes.default.object, PropTypes.default.number]),
  pagingEnabled: PropTypes.default.bool,
  showsHorizontalScrollIndicator: PropTypes.default.bool,
  showsVerticalScrollIndicator: PropTypes.default.bool,
  bounces: PropTypes.default.bool,
  scrollsToTop: PropTypes.default.bool,
  removeClippedSubviews: PropTypes.default.bool,
  automaticallyAdjustContentInsets: PropTypes.default.bool,
  showsPagination: PropTypes.default.bool,
  showsButtons: PropTypes.default.bool,
  disableNextButton: PropTypes.default.bool,
  disablePrevButton: PropTypes.default.bool,
  loadMinimal: PropTypes.default.bool,
  loadMinimalSize: PropTypes.default.number,
  loadMinimalLoader: PropTypes.default.element,
  loop: PropTypes.default.bool,
  autoplay: PropTypes.default.bool,
  autoplayTimeout: PropTypes.default.number,
  autoplayDirection: PropTypes.default.bool,
  index: PropTypes.default.number,
  renderPagination: PropTypes.default.func,
  dotStyle: PropTypes.default.oneOfType([PropTypes.default.object, PropTypes.default.number, PropTypes.default.array]),
  activeDotStyle: PropTypes.default.oneOfType([PropTypes.default.object, PropTypes.default.number, PropTypes.default.array]),
  dotColor: PropTypes.default.string,
  activeDotColor: PropTypes.default.string,
  onIndexChanged: PropTypes.default.func,
};
T.defaultProps = {
  horizontal: true,
  pagingEnabled: true,
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
  bounces: false,
  scrollsToTop: false,
  removeClippedSubviews: true,
  automaticallyAdjustContentInsets: false,
  showsPagination: true,
  showsButtons: false,
  disableNextButton: false,
  disablePrevButton: false,
  loop: true,
  loadMinimal: false,
  loadMinimalSize: 1,
  autoplay: false,
  autoplayTimeout: 2.5,
  autoplayDirection: true,
  index: 0,
  onIndexChanged: function () {
    return null;
  },
};
