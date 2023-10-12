var t,
  module11 = require('./11'),
  n =
    (this && this.__extends) ||
    ((t =
      Object.setPrototypeOf ||
      ({
        __proto__: [],
      } instanceof Array &&
        function (t, o) {
          t.__proto__ = o;
        }) ||
      function (t, o) {
        for (var n in o) o.hasOwnProperty(n) && (t[n] = o[n]);
      }),
    function (o, n) {
      function s() {
        this.constructor = o;
      }

      t(o, n);
      o.prototype = null === n ? Object.create(n) : ((s.prototype = n.prototype), new s());
    }),
  s =
    (this && this.__assign) ||
    Object.assign ||
    function (t) {
      for (var o, n = 1, s = arguments.length; n < s; n++) for (var l in (o = arguments[n])) Object.prototype.hasOwnProperty.call(o, l) && (t[l] = o[l]);

      return t;
    },
  l =
    (this && this.__rest) ||
    function (t, o) {
      var n = {};

      for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && o.indexOf(s) < 0 && (n[s] = t[s]);

      if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
        var l = 0;

        for (s = Object.getOwnPropertySymbols(t); l < s.length; l++) o.indexOf(s[l]) < 0 && (n[s[l]] = t[s[l]]);
      }

      return n;
    };

var React = require('react'),
  ReactNative = require('react-native'),
  module1851 = require('./1851'),
  module1855 = require('./1855'),
  module1856 = require('./1856'),
  f = (function (t) {
    function f() {
      var o = (null !== t && t.apply(this, arguments)) || this;
      o.state = new module1856.State();
      o.fadeAnim = new ReactNative.Animated.Value(0);
      o.standardPositionX = 0;
      o.positionXNumber = 0;
      o.positionX = new ReactNative.Animated.Value(0);
      o.width = 0;
      o.height = 0;
      o.styles = module1855.default(0, 0, 'transparent');
      o.hasLayout = false;
      o.loadedIndex = new Map();
      o.handleLongPressWithIndex = new Map();
      o.imageRefs = [];

      o.resetImageByIndex = function (t) {
        if (o.imageRefs[t]) o.imageRefs[t].reset();
      };

      o.preloadImage = function (t) {
        if (t < o.state.imageSizes.length) o.loadImage(t + 1);
      };

      o.handleHorizontalOuterRangeOffset = function (t) {
        if (undefined === t) t = 0;
        o.positionXNumber = o.standardPositionX + t;
        o.positionX.setValue(o.positionXNumber);
        var n = ReactNative.I18nManager.isRTL ? -t : t;
        if (n < 0) {
          if (o.state.currentShowIndex || 0 < o.props.imageUrls.length - 1) o.loadImage((o.state.currentShowIndex || 0) + 1);
        } else if (n > 0 && o.state.currentShowIndex) o.loadImage((o.state.currentShowIndex || 0) - 1);
      };

      o.handleResponderRelease = function (t) {
        if (undefined === t) t = 0;
        var n = ReactNative.I18nManager.isRTL ? -t : t,
          s = ReactNative.I18nManager.isRTL
            ? o.positionXNumber - o.standardPositionX < -(o.props.flipThreshold || 0)
            : o.positionXNumber - o.standardPositionX > (o.props.flipThreshold || 0),
          l = ReactNative.I18nManager.isRTL
            ? o.positionXNumber - o.standardPositionX > (o.props.flipThreshold || 0)
            : o.positionXNumber - o.standardPositionX < -(o.props.flipThreshold || 0);

        if (n > 0.7) {
          o.goBack.call(o);
          return void (o.state.currentShowIndex && o.loadImage((o.state.currentShowIndex || 0) - 1));
        } else if (n < -0.7) {
          o.goNext.call(o);
          return void ((o.state.currentShowIndex || 0 < o.props.imageUrls.length - 1) && o.loadImage((o.state.currentShowIndex || 0) + 1));
        } else return s ? void o.goBack.call(o) : l ? void o.goNext.call(o) : void o.resetPosition.call(o);
      };

      o.goBack = function () {
        if (0 !== o.state.currentShowIndex) {
          o.positionXNumber = ReactNative.I18nManager.isRTL ? o.standardPositionX - o.width : o.standardPositionX + o.width;
          o.standardPositionX = o.positionXNumber;
          ReactNative.Animated.timing(o.positionX, {
            toValue: o.positionXNumber,
            duration: o.props.pageAnimateTime,
            useNativeDriver: !!o.props.useNativeDriver,
          }).start();
          var t = (o.state.currentShowIndex || 0) - 1;
          o.setState(
            {
              currentShowIndex: t,
            },
            function () {
              if (o.props.onChange) o.props.onChange(o.state.currentShowIndex);
            }
          );
        } else o.resetPosition.call(o);
      };

      o.goNext = function () {
        if (o.state.currentShowIndex !== o.props.imageUrls.length - 1) {
          o.positionXNumber = ReactNative.I18nManager.isRTL ? o.standardPositionX + o.width : o.standardPositionX - o.width;
          o.standardPositionX = o.positionXNumber;
          ReactNative.Animated.timing(o.positionX, {
            toValue: o.positionXNumber,
            duration: o.props.pageAnimateTime,
            useNativeDriver: !!o.props.useNativeDriver,
          }).start();
          var t = (o.state.currentShowIndex || 0) + 1;
          o.setState(
            {
              currentShowIndex: t,
            },
            function () {
              if (o.props.onChange) o.props.onChange(o.state.currentShowIndex);
            }
          );
        } else o.resetPosition.call(o);
      };

      o.handleLongPress = function (t) {
        if (o.props.saveToLocalByLongPress)
          o.setState({
            isShowMenu: true,
          });
        if (o.props.onLongPress) o.props.onLongPress(t);
      };

      o.handleClick = function () {
        if (o.props.onClick) o.props.onClick(o.handleCancel, o.state.currentShowIndex);
      };

      o.handleDoubleClick = function () {
        if (o.props.onDoubleClick) o.props.onDoubleClick(o.handleCancel);
      };

      o.handleCancel = function () {
        o.hasLayout = false;
        if (o.props.onCancel) o.props.onCancel();
      };

      o.handleLayout = function (t) {
        if (t.nativeEvent.layout.width !== o.width) {
          o.hasLayout = true;
          o.width = t.nativeEvent.layout.width;
          o.height = t.nativeEvent.layout.height;
          o.styles = module1855.default(o.width, o.height, o.props.backgroundColor || 'transparent');
          o.forceUpdate();
          o.jumpToCurrentImage();
        }
      };

      o.saveToLocal = function () {
        if (o.props.onSave) o.props.onSave(o.props.imageUrls[o.state.currentShowIndex || 0].url);
        else {
          ReactNative.CameraRoll.saveToCameraRoll(o.props.imageUrls[o.state.currentShowIndex || 0].url);
          o.props.onSaveToCamera(o.state.currentShowIndex);
        }
        o.setState({
          isShowMenu: false,
        });
      };

      o.handleLeaveMenu = function () {
        o.setState({
          isShowMenu: false,
        });
      };

      o.handleSwipeDown = function () {
        if (o.props.onSwipeDown) o.props.onSwipeDown();
        o.handleCancel();
      };

      return o;
    }

    n(f, t);

    f.prototype.componentDidMount = function () {
      this.init(this.props);
    };

    f.getDerivedStateFromProps = function (t, o) {
      return t.index !== o.prevIndexProp
        ? {
            currentShowIndex: t.index,
            prevIndexProp: t.index,
          }
        : null;
    };

    f.prototype.componentDidUpdate = function (t, o) {
      if (t.index !== this.props.index) {
        this.loadImage(this.props.index || 0);
        this.jumpToCurrentImage();
        ReactNative.Animated.timing(this.fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: !!this.props.useNativeDriver,
        }).start();
      }
    };

    f.prototype.init = function (t) {
      var o = this;

      if (0 === t.imageUrls.length) {
        this.fadeAnim.setValue(0);
        return this.setState(new module1856.State());
      }

      var n = [];
      t.imageUrls.forEach(function (t) {
        n.push({
          width: t.width || 0,
          height: t.height || 0,
          status: 'loading',
        });
      });
      this.setState(
        {
          currentShowIndex: t.index,
          prevIndexProp: t.index || 0,
          imageSizes: n,
        },
        function () {
          o.loadImage(t.index || 0);
          o.jumpToCurrentImage();
          ReactNative.Animated.timing(o.fadeAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: !!t.useNativeDriver,
          }).start();
        }
      );
    };

    f.prototype.jumpToCurrentImage = function () {
      this.positionXNumber = this.width * (this.state.currentShowIndex || 0) * (ReactNative.I18nManager.isRTL ? 1 : -1);
      this.standardPositionX = this.positionXNumber;
      this.positionX.setValue(this.positionXNumber);
    };

    f.prototype.loadImage = function (t) {
      var o = this;

      if (this.state.imageSizes[t] && !this.loadedIndex.has(t)) {
        this.loadedIndex.set(t, true);

        var n = this.props.imageUrls[t],
          l = s({}, this.state.imageSizes[t]),
          h = function () {
            if (!o.state.imageSizes[t] || 'loading' === o.state.imageSizes[t].status) {
              var n = o.state.imageSizes.slice();
              n[t] = l;
              o.setState({
                imageSizes: n,
              });
            }
          };

        if ('success' !== this.state.imageSizes[t].status) {
          if (this.state.imageSizes[t].width > 0 && this.state.imageSizes[t].height > 0) {
            l.status = 'success';
            return void h();
          }

          var u = false;

          if (((n.url && !n.url.startsWith('file:')) || (u = true), n.width && n.height)) {
            if (this.props.enablePreload && false === u) ReactNative.Image.prefetch(n.url);
            l.width = n.width;
            l.height = n.height;
            l.status = 'success';
            return void h();
          }

          ReactNative.Image.getSize(
            n.url,
            function (t, o) {
              l.width = t;
              l.height = o;
              l.status = 'success';
              h();
            },
            function () {
              try {
                var t = ReactNative.Image.resolveAssetSource(n.props.source);
                l.width = t.width;
                l.height = t.height;
                l.status = 'success';
                h();
              } catch (t) {
                l.status = 'fail';
                h();
              }
            }
          );
        }
      }
    };

    f.prototype.resetPosition = function () {
      this.positionXNumber = this.standardPositionX;
      ReactNative.Animated.timing(this.positionX, {
        toValue: this.standardPositionX,
        duration: 150,
        useNativeDriver: !!this.props.useNativeDriver,
      }).start();
    };

    f.prototype.getContent = function () {
      var t = this,
        n = this.width,
        c = this.height,
        w = this.props.imageUrls.map(function (w, f) {
          if ((t.state.currentShowIndex || 0) > f + 1 || (t.state.currentShowIndex || 0) < f - 1)
            return (
              <ReactNative.View
                key={f}
                style={{
                  width: n,
                  height: c,
                }}
              />
            );
          if (!t.handleLongPressWithIndex.has(f)) t.handleLongPressWithIndex.set(f, t.handleLongPress.bind(t, w));
          var y = t.state.imageSizes[f] && t.state.imageSizes[f].width,
            S = t.state.imageSizes[f] && t.state.imageSizes[f].height,
            v = t.state.imageSizes[f];
          if (!v || !v.status)
            return (
              <ReactNative.View
                key={f}
                style={{
                  width: n,
                  height: c,
                }}
              />
            );

          if (y > n) {
            var I = n / y;
            y *= I;
            S *= I;
          }

          if (S > c) {
            var x = c / S;
            y *= x;
            S *= x;
          }

          var b = function (n) {
            var s = n.children,
              p = l(n, ['children']);
            return <module1851.default>{s}</module1851.default>;
          };

          switch (v.status) {
            case 'loading':
              return React.createElement(
                b,
                {
                  key: f,
                  style: s({}, t.styles.modalContainer, t.styles.loadingContainer),
                  imageWidth: n,
                  imageHeight: c,
                },
                React.createElement(
                  ReactNative.View,
                  {
                    style: t.styles.loadingContainer,
                  },
                  t.props.loadingRender()
                )
              );

            case 'success':
              if (!w.props) w.props = {};
              if (!w.props.style) w.props.style = {};
              w.props.style = s({}, t.styles.imageStyle, w.props.style, {
                width: y,
                height: S,
              });

              if (!('number' == typeof w.props.source)) {
                if (!w.props.source) w.props.source = {};
                w.props.source = s(
                  {
                    uri: w.url,
                  },
                  w.props.source
                );
              }

              if (t.props.enablePreload) t.preloadImage(t.state.currentShowIndex || 0);
              return React.createElement(
                module1851.default,
                {
                  key: f,
                  ref: function (o) {
                    return (t.imageRefs[f] = o);
                  },
                  cropWidth: t.width,
                  cropHeight: t.height,
                  maxOverflow: t.props.maxOverflow,
                  horizontalOuterRangeOffset: t.handleHorizontalOuterRangeOffset,
                  responderRelease: t.handleResponderRelease,
                  onMove: t.props.onMove,
                  onLongPress: t.handleLongPressWithIndex.get(f),
                  onClick: t.handleClick,
                  onDoubleClick: t.handleDoubleClick,
                  imageWidth: y,
                  imageHeight: S,
                  enableSwipeDown: t.props.enableSwipeDown,
                  swipeDownThreshold: t.props.swipeDownThreshold,
                  onSwipeDown: t.handleSwipeDown,
                  panToMove: !t.state.isShowMenu,
                  pinchToZoom: t.props.enableImageZoom && !t.state.isShowMenu,
                  enableDoubleClickZoom: t.props.enableImageZoom && !t.state.isShowMenu,
                  doubleClickInterval: t.props.doubleClickInterval,
                  minScale: t.props.minScale,
                  maxScale: t.props.maxScale,
                },
                t.props.renderImage(w.props)
              );

            case 'fail':
              return React.createElement(
                b,
                {
                  key: f,
                  style: t.styles.modalContainer,
                  imageWidth: t.props.failImageSource ? t.props.failImageSource.width : n,
                  imageHeight: t.props.failImageSource ? t.props.failImageSource.height : c,
                },
                t.props.failImageSource &&
                  t.props.renderImage({
                    source: {
                      uri: t.props.failImageSource.url,
                    },
                    style: {
                      width: t.props.failImageSource.width,
                      height: t.props.failImageSource.height,
                    },
                  })
              );
          }
        });
      return React.createElement(
        ReactNative.Animated.View,
        {
          style: {
            zIndex: 9,
          },
        },
        React.createElement(
          ReactNative.Animated.View,
          {
            style: s({}, this.styles.container, {
              opacity: this.fadeAnim,
            }),
          },
          this.props.renderHeader(this.state.currentShowIndex),
          React.createElement(
            ReactNative.View,
            {
              style: this.styles.arrowLeftContainer,
            },
            React.createElement(
              ReactNative.TouchableWithoutFeedback,
              {
                onPress: this.goBack,
              },
              React.createElement(ReactNative.View, null, this.props.renderArrowLeft())
            )
          ),
          React.createElement(
            ReactNative.View,
            {
              style: this.styles.arrowRightContainer,
            },
            React.createElement(
              ReactNative.TouchableWithoutFeedback,
              {
                onPress: this.goNext,
              },
              React.createElement(ReactNative.View, null, this.props.renderArrowRight())
            )
          ),
          React.createElement(
            ReactNative.Animated.View,
            {
              style: s({}, this.styles.moveBox, {
                transform: [
                  {
                    translateX: this.positionX,
                  },
                ],
                width: this.width * this.props.imageUrls.length,
              }),
            },
            w
          ),
          this.props.renderIndicator((this.state.currentShowIndex || 0) + 1, this.props.imageUrls.length),
          this.props.imageUrls[this.state.currentShowIndex || 0] &&
            this.props.imageUrls[this.state.currentShowIndex || 0].originSizeKb &&
            this.props.imageUrls[this.state.currentShowIndex || 0].originUrl &&
            React.createElement(
              ReactNative.View,
              {
                style: this.styles.watchOrigin,
              },
              React.createElement(
                ReactNative.TouchableOpacity,
                {
                  style: this.styles.watchOriginTouchable,
                },
                React.createElement(
                  ReactNative.Text,
                  {
                    style: this.styles.watchOriginText,
                  },
                  '\u67e5\u770b\u539f\u56fe(2M)'
                )
              )
            ),
          React.createElement(
            ReactNative.View,
            {
              style: [
                {
                  bottom: 0,
                  position: 'absolute',
                  zIndex: 9,
                },
                this.props.footerContainerStyle,
              ],
            },
            this.props.renderFooter(this.state.currentShowIndex || 0)
          )
        )
      );
    };

    f.prototype.getMenu = function () {
      return this.state.isShowMenu
        ? this.props.menus
          ? React.createElement(
              ReactNative.View,
              {
                style: this.styles.menuContainer,
              },
              this.props.menus({
                cancel: this.handleLeaveMenu,
                saveToLocal: this.saveToLocal,
              })
            )
          : React.createElement(
              ReactNative.View,
              {
                style: this.styles.menuContainer,
              },
              React.createElement(ReactNative.View, {
                style: this.styles.menuShadow,
              }),
              React.createElement(
                ReactNative.View,
                {
                  style: this.styles.menuContent,
                },
                React.createElement(
                  ReactNative.TouchableHighlight,
                  {
                    underlayColor: '#F2F2F2',
                    onPress: this.saveToLocal,
                    style: this.styles.operateContainer,
                  },
                  React.createElement(
                    ReactNative.Text,
                    {
                      style: this.styles.operateText,
                    },
                    this.props.menuContext.saveToLocal
                  )
                ),
                React.createElement(
                  ReactNative.TouchableHighlight,
                  {
                    underlayColor: '#F2F2F2',
                    onPress: this.handleLeaveMenu,
                    style: this.styles.operateContainer,
                  },
                  React.createElement(
                    ReactNative.Text,
                    {
                      style: this.styles.operateText,
                    },
                    this.props.menuContext.cancel
                  )
                )
              )
            )
        : null;
    };

    f.prototype.render = function () {
      var t;
      t = React.createElement(ReactNative.View, null, this.getContent(), this.getMenu());
      return React.createElement(
        ReactNative.View,
        {
          onLayout: this.handleLayout,
          style: s(
            {
              flex: 1,
              overflow: 'hidden',
            },
            this.props.style
          ),
        },
        t
      );
    };

    f.defaultProps = new module1856.Props();
    return f;
  })(React.Component);

exports.default = f;
