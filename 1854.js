var t = (function () {
  return function () {
    this.cropWidth = 100;
    this.cropHeight = 100;
    this.imageWidth = 100;
    this.imageHeight = 100;
    this.panToMove = true;
    this.pinchToZoom = true;
    this.enableDoubleClickZoom = true;
    this.clickDistance = 10;
    this.maxOverflow = 100;
    this.longPressTime = 800;
    this.doubleClickInterval = 175;
    this.style = {};
    this.swipeDownThreshold = 230;
    this.enableSwipeDown = false;
    this.enableCenterFocus = true;
    this.useHardwareTextureAndroid = true;
    this.minScale = 0.6;
    this.maxScale = 10;
    this.useNativeDriver = false;

    this.onClick = function () {};

    this.onDoubleClick = function () {};

    this.onLongPress = function () {};

    this.horizontalOuterRangeOffset = function () {};

    this.onDragLeft = function () {};

    this.responderRelease = function () {};

    this.onMove = function () {};

    this.layoutChange = function () {};

    this.onSwipeDown = function () {};

    this.onStartShouldSetPanResponder = function () {
      return true;
    };

    this.onPanResponderTerminationRequest = function () {
      return false;
    };
  };
})();

exports.ImageZoomProps = t;

var n = (function () {
  return function () {
    this.centerX = 0.5;
    this.centerY = 0.5;
  };
})();

exports.ImageZoomState = n;
