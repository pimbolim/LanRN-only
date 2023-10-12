var o,
  module11 = require('./11'),
  n =
    (this && this.__extends) ||
    ((o = function (t, n) {
      return (o =
        Object.setPrototypeOf ||
        ({
          __proto__: [],
        } instanceof Array &&
          function (o, t) {
            o.__proto__ = t;
          }) ||
        function (o, t) {
          for (var n in t) t.hasOwnProperty(n) && (o[n] = t[n]);
        })(t, n);
    }),
    function (t, n) {
      function s() {
        this.constructor = t;
      }

      o(t, n);
      t.prototype = null === n ? Object.create(n) : ((s.prototype = n.prototype), new s());
    }),
  s =
    (this && this.__assign) ||
    function () {
      return (s =
        Object.assign ||
        function (o) {
          for (var t, n = 1, s = arguments.length; n < s; n++) for (var p in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, p) && (o[p] = t[p]);

          return o;
        }).apply(this, arguments);
    };

var React = require('react'),
  ReactNative = require('react-native'),
  module1853 = require('./1853'),
  module1854 = require('./1854'),
  h = (function (o) {
    function h() {
      var t = (null !== o && o.apply(this, arguments)) || this;
      t.state = new module1854.ImageZoomState();
      t.lastPositionX = null;
      t.positionX = 0;
      t.animatedPositionX = new ReactNative.Animated.Value(0);
      t.lastPositionY = null;
      t.positionY = 0;
      t.animatedPositionY = new ReactNative.Animated.Value(0);
      t.scale = 1;
      t.animatedScale = new ReactNative.Animated.Value(1);
      t.zoomLastDistance = null;
      t.zoomCurrentDistance = 0;
      t.lastTouchStartTime = 0;
      t.horizontalWholeOuterCounter = 0;
      t.swipeDownOffset = 0;
      t.horizontalWholeCounter = 0;
      t.verticalWholeCounter = 0;
      t.centerDiffX = 0;
      t.centerDiffY = 0;
      t.lastClickTime = 0;
      t.doubleClickX = 0;
      t.doubleClickY = 0;
      t.isDoubleClick = false;
      t.isLongPress = false;
      t.isHorizontalWrap = false;
      t.imagePanResponder = ReactNative.PanResponder.create({
        onStartShouldSetPanResponder: t.props.onStartShouldSetPanResponder,
        onPanResponderTerminationRequest: t.props.onPanResponderTerminationRequest,
        onMoveShouldSetPanResponder: t.props.onMoveShouldSetPanResponder,
        onPanResponderGrant: function (o) {
          if (
            ((t.lastPositionX = null),
            (t.lastPositionY = null),
            (t.zoomLastDistance = null),
            (t.horizontalWholeCounter = 0),
            (t.verticalWholeCounter = 0),
            (t.lastTouchStartTime = new Date().getTime()),
            (t.isDoubleClick = false),
            (t.isLongPress = false),
            (t.isHorizontalWrap = false),
            t.singleClickTimeout && clearTimeout(t.singleClickTimeout),
            o.nativeEvent.changedTouches.length > 1)
          ) {
            var n = (o.nativeEvent.changedTouches[0].pageX + o.nativeEvent.changedTouches[1].pageX) / 2;
            t.centerDiffX = n - t.props.cropWidth / 2;
            var s = (o.nativeEvent.changedTouches[0].pageY + o.nativeEvent.changedTouches[1].pageY) / 2;
            t.centerDiffY = s - t.props.cropHeight / 2;
          }

          if (t.longPressTimeout) clearTimeout(t.longPressTimeout);
          var p = o.nativeEvent,
            u = p.locationX,
            c = p.locationY,
            h = p.pageX,
            v = p.pageY;
          if (
            ((t.longPressTimeout = setTimeout(function () {
              t.isLongPress = true;
              if (t.props.onLongPress)
                t.props.onLongPress({
                  locationX: u,
                  locationY: c,
                  pageX: h,
                  pageY: v,
                });
            }, t.props.longPressTime)),
            o.nativeEvent.changedTouches.length <= 1)
          )
            if (new Date().getTime() - t.lastClickTime < (t.props.doubleClickInterval || 0)) {
              if (
                ((t.lastClickTime = 0),
                (t.doubleClickX = o.nativeEvent.changedTouches[0].pageX),
                (t.doubleClickY = o.nativeEvent.changedTouches[0].pageY),
                t.props.onDoubleClick &&
                  t.props.onDoubleClick({
                    locationX: o.nativeEvent.changedTouches[0].locationX,
                    locationY: o.nativeEvent.changedTouches[0].locationY,
                    pageX: t.doubleClickX,
                    pageY: t.doubleClickY,
                  }),
                clearTimeout(t.longPressTimeout),
                (t.isDoubleClick = true),
                t.props.enableDoubleClickZoom)
              ) {
                if (t.scale > 1 || t.scale < 1) {
                  t.scale = 1;
                  t.positionX = 0;
                  t.positionY = 0;
                } else {
                  var f = t.scale;
                  t.scale = 2;
                  var D = t.scale - f;
                  t.positionX = ((t.props.cropWidth / 2 - t.doubleClickX) * D) / t.scale;
                  t.positionY = ((t.props.cropHeight / 2 - t.doubleClickY) * D) / t.scale;
                }

                t.imageDidMove('centerOn');
                ReactNative.Animated.parallel([
                  ReactNative.Animated.timing(t.animatedScale, {
                    toValue: t.scale,
                    duration: 100,
                    useNativeDriver: !!t.props.useNativeDriver,
                  }),
                  ReactNative.Animated.timing(t.animatedPositionX, {
                    toValue: t.positionX,
                    duration: 100,
                    useNativeDriver: !!t.props.useNativeDriver,
                  }),
                  ReactNative.Animated.timing(t.animatedPositionY, {
                    toValue: t.positionY,
                    duration: 100,
                    useNativeDriver: !!t.props.useNativeDriver,
                  }),
                ]).start();
              }
            } else t.lastClickTime = new Date().getTime();
        },
        onPanResponderMove: function (o, n) {
          if (!t.isDoubleClick) {
            if (o.nativeEvent.changedTouches.length <= 1) {
              var s = n.dx - (t.lastPositionX || 0);
              if (null === t.lastPositionX) s = 0;
              var p = n.dy - (t.lastPositionY || 0);

              if (
                (null === t.lastPositionY && (p = 0),
                (t.lastPositionX = n.dx),
                (t.lastPositionY = n.dy),
                (t.horizontalWholeCounter += s),
                (t.verticalWholeCounter += p),
                (Math.abs(t.horizontalWholeCounter) > 5 || Math.abs(t.verticalWholeCounter) > 5) && clearTimeout(t.longPressTimeout),
                t.props.panToMove)
              ) {
                if (0 === t.swipeDownOffset) {
                  if ((Math.abs(s) > Math.abs(p) && (t.isHorizontalWrap = true), t.props.imageWidth * t.scale > t.props.cropWidth)) {
                    if (t.horizontalWholeOuterCounter > 0)
                      s < 0
                        ? t.horizontalWholeOuterCounter > Math.abs(s)
                          ? ((t.horizontalWholeOuterCounter += s), (s = 0))
                          : ((s += t.horizontalWholeOuterCounter), (t.horizontalWholeOuterCounter = 0), t.props.horizontalOuterRangeOffset && t.props.horizontalOuterRangeOffset(0))
                        : (t.horizontalWholeOuterCounter += s);
                    else if (t.horizontalWholeOuterCounter < 0)
                      s > 0
                        ? Math.abs(t.horizontalWholeOuterCounter) > s
                          ? ((t.horizontalWholeOuterCounter += s), (s = 0))
                          : ((s += t.horizontalWholeOuterCounter), (t.horizontalWholeOuterCounter = 0), t.props.horizontalOuterRangeOffset && t.props.horizontalOuterRangeOffset(0))
                        : (t.horizontalWholeOuterCounter += s);
                    t.positionX += s / t.scale;
                    var l = (t.props.imageWidth * t.scale - t.props.cropWidth) / 2 / t.scale;

                    if (t.positionX < -l) {
                      t.positionX = -l;
                      t.horizontalWholeOuterCounter += -1e-10;
                    } else if (t.positionX > l) {
                      t.positionX = l;
                      t.horizontalWholeOuterCounter += 1e-10;
                    }

                    t.animatedPositionX.setValue(t.positionX);
                  } else t.horizontalWholeOuterCounter += s;

                  if (t.horizontalWholeOuterCounter > (t.props.maxOverflow || 0)) t.horizontalWholeOuterCounter = t.props.maxOverflow || 0;
                  else if (t.horizontalWholeOuterCounter < -(t.props.maxOverflow || 0)) t.horizontalWholeOuterCounter = -(t.props.maxOverflow || 0);
                  if (0 !== t.horizontalWholeOuterCounter && t.props.horizontalOuterRangeOffset) t.props.horizontalOuterRangeOffset(t.horizontalWholeOuterCounter);
                }

                if (t.props.imageHeight * t.scale > t.props.cropHeight) {
                  t.positionY += p / t.scale;
                  t.animatedPositionY.setValue(t.positionY);
                } else if (t.props.enableSwipeDown && !t.isHorizontalWrap) {
                  t.swipeDownOffset += p;

                  if (t.swipeDownOffset > 0) {
                    t.positionY += p / t.scale;
                    t.animatedPositionY.setValue(t.positionY);
                    t.scale = t.scale - p / 1e3;
                    t.animatedScale.setValue(t.scale);
                  }
                }
              }
            } else if ((t.longPressTimeout && clearTimeout(t.longPressTimeout), t.props.pinchToZoom)) {
              var u = undefined,
                c = undefined;

              if (o.nativeEvent.changedTouches[0].locationX > o.nativeEvent.changedTouches[1].locationX) {
                u = o.nativeEvent.changedTouches[1].pageX;
                c = o.nativeEvent.changedTouches[0].pageX;
              } else {
                u = o.nativeEvent.changedTouches[0].pageX;
                c = o.nativeEvent.changedTouches[1].pageX;
              }

              var h = undefined,
                v = undefined;

              if (o.nativeEvent.changedTouches[0].locationY > o.nativeEvent.changedTouches[1].locationY) {
                h = o.nativeEvent.changedTouches[1].pageY;
                v = o.nativeEvent.changedTouches[0].pageY;
              } else {
                h = o.nativeEvent.changedTouches[0].pageY;
                v = o.nativeEvent.changedTouches[1].pageY;
              }

              var f = c - u,
                D = v - h,
                C = Math.sqrt(f * f + D * D);

              if (((t.zoomCurrentDistance = Number(C.toFixed(1))), null !== t.zoomLastDistance)) {
                var X = (t.zoomCurrentDistance - t.zoomLastDistance) / 200,
                  Y = t.scale + X;
                if (Y < (t.props.minScale || 0)) Y = t.props.minScale || 0;
                if (Y > (t.props.maxScale || 0)) Y = t.props.maxScale || 0;
                var O = t.scale;
                t.scale = Y;
                t.animatedScale.setValue(t.scale);
                var P = t.scale - O;
                t.positionX -= (t.centerDiffX * P) / t.scale;
                t.positionY -= (t.centerDiffY * P) / t.scale;
                t.animatedPositionX.setValue(t.positionX);
                t.animatedPositionY.setValue(t.positionY);
              }

              t.zoomLastDistance = t.zoomCurrentDistance;
            }

            t.imageDidMove('onPanResponderMove');
          }
        },
        onPanResponderRelease: function (o, n) {
          if ((t.longPressTimeout && clearTimeout(t.longPressTimeout), !t.isDoubleClick && !t.isLongPress)) {
            var s = Math.sqrt(n.dx * n.dx + n.dy * n.dy),
              p = o.nativeEvent,
              l = p.locationX,
              u = p.locationY,
              c = p.pageX,
              h = p.pageY;
            if (1 === o.nativeEvent.changedTouches.length && s < (t.props.clickDistance || 0))
              t.singleClickTimeout = setTimeout(function () {
                if (t.props.onClick)
                  t.props.onClick({
                    locationX: l,
                    locationY: u,
                    pageX: c,
                    pageY: h,
                  });
              }, t.props.doubleClickInterval);
            else {
              if (t.props.responderRelease) t.props.responderRelease(n.vx, t.scale);
              t.panResponderReleaseResolve();
            }
          }
        },
        onPanResponderTerminate: function () {},
      });

      t.resetScale = function () {
        t.positionX = 0;
        t.positionY = 0;
        t.scale = 1;
        t.animatedScale.setValue(1);
      };

      t.panResponderReleaseResolve = function () {
        if (t.props.enableSwipeDown && t.props.swipeDownThreshold && t.swipeDownOffset > t.props.swipeDownThreshold) t.props.onSwipeDown && t.props.onSwipeDown();
        else {
          if (
            (t.props.enableCenterFocus &&
              t.scale < 1 &&
              ((t.scale = 1),
              ReactNative.Animated.timing(t.animatedScale, {
                toValue: t.scale,
                duration: 100,
                useNativeDriver: !!t.props.useNativeDriver,
              }).start()),
            t.props.imageWidth * t.scale <= t.props.cropWidth &&
              ((t.positionX = 0),
              ReactNative.Animated.timing(t.animatedPositionX, {
                toValue: t.positionX,
                duration: 100,
                useNativeDriver: !!t.props.useNativeDriver,
              }).start()),
            t.props.imageHeight * t.scale <= t.props.cropHeight &&
              ((t.positionY = 0),
              ReactNative.Animated.timing(t.animatedPositionY, {
                toValue: t.positionY,
                duration: 100,
                useNativeDriver: !!t.props.useNativeDriver,
              }).start()),
            t.props.imageHeight * t.scale > t.props.cropHeight)
          ) {
            var o = (t.props.imageHeight * t.scale - t.props.cropHeight) / 2 / t.scale;
            if (t.positionY < -o) t.positionY = -o;
            else if (t.positionY > o) t.positionY = o;
            ReactNative.Animated.timing(t.animatedPositionY, {
              toValue: t.positionY,
              duration: 100,
              useNativeDriver: !!t.props.useNativeDriver,
            }).start();
          }

          if (t.props.imageWidth * t.scale > t.props.cropWidth) {
            var n = (t.props.imageWidth * t.scale - t.props.cropWidth) / 2 / t.scale;
            if (t.positionX < -n) t.positionX = -n;
            else if (t.positionX > n) t.positionX = n;
            ReactNative.Animated.timing(t.animatedPositionX, {
              toValue: t.positionX,
              duration: 100,
              useNativeDriver: !!t.props.useNativeDriver,
            }).start();
          }

          if (t.props.enableCenterFocus && 1 === t.scale) {
            t.positionX = 0;
            t.positionY = 0;
            ReactNative.Animated.timing(t.animatedPositionX, {
              toValue: t.positionX,
              duration: 100,
              useNativeDriver: !!t.props.useNativeDriver,
            }).start();
            ReactNative.Animated.timing(t.animatedPositionY, {
              toValue: t.positionY,
              duration: 100,
              useNativeDriver: !!t.props.useNativeDriver,
            }).start();
          }

          t.horizontalWholeOuterCounter = 0;
          t.swipeDownOffset = 0;
          t.imageDidMove('onPanResponderRelease');
        }
      };

      return t;
    }

    n(h, o);

    h.prototype.componentDidMount = function () {
      if (this.props.centerOn) this.centerOn(this.props.centerOn);
    };

    h.prototype.componentDidUpdate = function (o) {
      if ((this.props.centerOn && !o.centerOn) || (this.props.centerOn && o.centerOn && this.didCenterOnChange(o.centerOn, this.props.centerOn)))
        this.centerOn(this.props.centerOn);
    };

    h.prototype.imageDidMove = function (o) {
      if (this.props.onMove)
        this.props.onMove({
          type: o,
          positionX: this.positionX,
          positionY: this.positionY,
          scale: this.scale,
          zoomCurrentDistance: this.zoomCurrentDistance,
        });
    };

    h.prototype.didCenterOnChange = function (o, t) {
      return o.x !== t.x || o.y !== t.y || o.scale !== t.scale;
    };

    h.prototype.centerOn = function (o) {
      var t = this;
      this.positionX = o.x;
      this.positionY = o.y;
      this.scale = o.scale;
      var n = o.duration || 300;
      ReactNative.Animated.parallel([
        ReactNative.Animated.timing(this.animatedScale, {
          toValue: this.scale,
          duration: n,
          useNativeDriver: !!this.props.useNativeDriver,
        }),
        ReactNative.Animated.timing(this.animatedPositionX, {
          toValue: this.positionX,
          duration: n,
          useNativeDriver: !!this.props.useNativeDriver,
        }),
        ReactNative.Animated.timing(this.animatedPositionY, {
          toValue: this.positionY,
          duration: n,
          useNativeDriver: !!this.props.useNativeDriver,
        }),
      ]).start(function () {
        t.imageDidMove('centerOn');
      });
    };

    h.prototype.handleLayout = function (o) {
      if (this.props.layoutChange) this.props.layoutChange(o);
    };

    h.prototype.reset = function () {
      this.scale = 1;
      this.animatedScale.setValue(this.scale);
      this.positionX = 0;
      this.animatedPositionX.setValue(this.positionX);
      this.positionY = 0;
      this.animatedPositionY.setValue(this.positionY);
    };

    h.prototype.render = function () {
      var o = {
          transform: [
            {
              scale: this.animatedScale,
            },
            {
              translateX: this.animatedPositionX,
            },
            {
              translateY: this.animatedPositionY,
            },
          ],
        },
        n = ReactNative.StyleSheet.flatten(this.props.style);
      return (
        <ReactNative.View>
          {React.createElement(
            ReactNative.Animated.View,
            {
              style: o,
              renderToHardwareTextureAndroid: this.props.useHardwareTextureAndroid,
            },
            React.createElement(
              ReactNative.View,
              {
                onLayout: this.handleLayout.bind(this),
                style: {
                  width: this.props.imageWidth,
                  height: this.props.imageHeight,
                },
              },
              this.props.children
            )
          )}
        </ReactNative.View>
      );
    };

    h.defaultProps = new module1854.ImageZoomProps();
    return h;
  })(React.Component);

exports.default = h;
