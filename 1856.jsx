var React = require('react'),
  ReactNative = require('react-native'),
  module1855 = require('./1855'),
  s = (function () {
    return function () {
      this.show = false;
      this.imageUrls = [];
      this.flipThreshold = 80;
      this.maxOverflow = 300;
      this.index = 0;
      this.failImageSource = undefined;
      this.backgroundColor = 'black';
      this.footerContainerStyle = {};
      this.menuContext = {
        saveToLocal: 'save to the album',
        cancel: 'cancel',
      };
      this.saveToLocalByLongPress = true;
      this.enableImageZoom = true;
      this.style = {};
      this.enableSwipeDown = false;
      this.enablePreload = false;
      this.pageAnimateTime = 100;
      this.useNativeDriver = false;

      this.onLongPress = function () {};

      this.onClick = function () {};

      this.onDoubleClick = function () {};

      this.onSave = function () {};

      this.onMove = function () {};

      this.renderHeader = function () {
        return null;
      };

      this.renderFooter = function () {
        return null;
      };

      this.renderIndicator = function (s, h) {
        return (
          <ReactNative.View style={module1855.simpleStyle.count}>
            <ReactNative.Text style={module1855.simpleStyle.countText}>{s + '/' + h}</ReactNative.Text>
          </ReactNative.View>
        );
      };

      this.renderImage = function (o) {
        return <ReactNative.Image />;
      };

      this.renderArrowLeft = function () {
        return null;
      };

      this.renderArrowRight = function () {
        return null;
      };

      this.onShowModal = function () {};

      this.onCancel = function () {};

      this.onSwipeDown = function () {};

      this.loadingRender = function () {
        return null;
      };

      this.onSaveToCamera = function () {};

      this.onChange = function () {};
    };
  })();

exports.Props = s;

var h = (function () {
  return function () {
    this.show = false;
    this.currentShowIndex = 0;
    this.prevIndexProp = 0;
    this.imageLoaded = false;
    this.imageSizes = [];
    this.isShowMenu = false;
  };
})();

exports.State = h;
