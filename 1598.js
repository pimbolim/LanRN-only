Object.defineProperty(exports, 'DRMType', {
  enumerable: true,
  get: function () {
    return module1601.default;
  },
});
Object.defineProperty(exports, 'FilterType', {
  enumerable: true,
  get: function () {
    return module1600.default;
  },
});
Object.defineProperty(exports, 'TextTrackType', {
  enumerable: true,
  get: function () {
    return module1599.default;
  },
});

var regeneratorRuntime = require('regenerator-runtime'),
  module47 = require('./47'),
  module11 = require('./11'),
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

    var o = _(n);

    if (o && o.has(t)) return o.get(t);
    var l = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var f = u ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (f && (f.get || f.set)) Object.defineProperty(l, s, f);
        else l[s] = t[s];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module183 = require('./183'),
  module1599 = require('./1599'),
  module1600 = require('./1600'),
  module1601 = require('./1601'),
  module1602 = require('./1602');

function _(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (_ = function (t) {
    return t ? o : n;
  })(t);
}

function F(t, n) {
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

function M(t) {
  for (var n = 1; n < arguments.length; n++) {
    var l = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      F(Object(l), true).forEach(function (n) {
        module47.default(t, n, l[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      F(Object(l)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
      });
  }

  return t;
}

function k() {
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

var R = ReactNative.StyleSheet.create({
    base: {
      overflow: 'hidden',
    },
  }),
  N = (function (t) {
    module35.default(E, t);

    var module47 = E,
      PropTypes = k(),
      v = function () {
        var t,
          n = module34.default(module47);

        if (PropTypes) {
          var l = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, l);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function E(t) {
      var o;
      module24.default(this, E);

      (o = v.call(this, t)).seek = function (t) {
        var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 100;
        if (isNaN(t)) throw new Error('Specified time is not a number');
        if ('ios' === ReactNative.Platform.OS)
          o.setNativeProps({
            seek: {
              time: t,
              tolerance: n,
            },
          });
        else
          o.setNativeProps({
            seek: t,
          });
      };

      o.presentFullscreenPlayer = function () {
        o.setNativeProps({
          fullscreen: true,
        });
      };

      o.dismissFullscreenPlayer = function () {
        o.setNativeProps({
          fullscreen: false,
        });
      };

      o.save = function (t) {
        return regeneratorRuntime.default.async(
          function (l) {
            for (;;)
              switch ((l.prev = l.next)) {
                case 0:
                  l.next = 2;
                  return regeneratorRuntime.default.awrap(ReactNative.NativeModules.VideoManager.save(t, ReactNative.findNodeHandle(o._root)));

                case 2:
                  return l.abrupt('return', l.sent);

                case 3:
                case 'end':
                  return l.stop();
              }
          },
          null,
          null,
          null,
          Promise
        );
      };

      o.restoreUserInterfaceForPictureInPictureStopCompleted = function (t) {
        o.setNativeProps({
          restoreUserInterfaceForPIPStopCompletionHandler: t,
        });
      };

      o._assignRoot = function (t) {
        o._root = t;
      };

      o._hidePoster = function () {
        if (o.state.showPoster)
          o.setState({
            showPoster: false,
          });
      };

      o._onLoadStart = function (t) {
        if (o.props.onLoadStart) o.props.onLoadStart(t.nativeEvent);
      };

      o._onLoad = function (t) {
        if ('windows' === ReactNative.Platform.OS) o._hidePoster();
        if (o.props.onLoad) o.props.onLoad(t.nativeEvent);
      };

      o._onError = function (t) {
        if (o.props.onError) o.props.onError(t.nativeEvent);
      };

      o._onProgress = function (t) {
        if (o.props.onProgress) o.props.onProgress(t.nativeEvent);
      };

      o._onBandwidthUpdate = function (t) {
        if (o.props.onBandwidthUpdate) o.props.onBandwidthUpdate(t.nativeEvent);
      };

      o._onSeek = function (t) {
        if (o.props.onSeek) o.props.onSeek(t.nativeEvent);
      };

      o._onEnd = function (t) {
        if (o.props.onEnd) o.props.onEnd(t.nativeEvent);
      };

      o._onTimedMetadata = function (t) {
        if (o.props.onTimedMetadata) o.props.onTimedMetadata(t.nativeEvent);
      };

      o._onFullscreenPlayerWillPresent = function (t) {
        if (o.props.onFullscreenPlayerWillPresent) o.props.onFullscreenPlayerWillPresent(t.nativeEvent);
      };

      o._onFullscreenPlayerDidPresent = function (t) {
        if (o.props.onFullscreenPlayerDidPresent) o.props.onFullscreenPlayerDidPresent(t.nativeEvent);
      };

      o._onFullscreenPlayerWillDismiss = function (t) {
        if (o.props.onFullscreenPlayerWillDismiss) o.props.onFullscreenPlayerWillDismiss(t.nativeEvent);
      };

      o._onFullscreenPlayerDidDismiss = function (t) {
        if (o.props.onFullscreenPlayerDidDismiss) o.props.onFullscreenPlayerDidDismiss(t.nativeEvent);
      };

      o._onReadyForDisplay = function (t) {
        if (!o.props.audioOnly) o._hidePoster();
        if (o.props.onReadyForDisplay) o.props.onReadyForDisplay(t.nativeEvent);
      };

      o._onPlaybackStalled = function (t) {
        if (o.props.onPlaybackStalled) o.props.onPlaybackStalled(t.nativeEvent);
      };

      o._onPlaybackResume = function (t) {
        if (o.props.onPlaybackResume) o.props.onPlaybackResume(t.nativeEvent);
      };

      o._onPlaybackRateChange = function (t) {
        if (o.props.onPlaybackRateChange) o.props.onPlaybackRateChange(t.nativeEvent);
      };

      o._onExternalPlaybackChange = function (t) {
        if (o.props.onExternalPlaybackChange) o.props.onExternalPlaybackChange(t.nativeEvent);
      };

      o._onAudioBecomingNoisy = function () {
        if (o.props.onAudioBecomingNoisy) o.props.onAudioBecomingNoisy();
      };

      o._onPictureInPictureStatusChanged = function (t) {
        if (o.props.onPictureInPictureStatusChanged) o.props.onPictureInPictureStatusChanged(t.nativeEvent);
      };

      o._onRestoreUserInterfaceForPictureInPictureStop = function (t) {
        if (o.props.onRestoreUserInterfaceForPictureInPictureStop) o.props.onRestoreUserInterfaceForPictureInPictureStop();
      };

      o._onAudioFocusChanged = function (t) {
        if (o.props.onAudioFocusChanged) o.props.onAudioFocusChanged(t.nativeEvent);
      };

      o._onBuffer = function (t) {
        if (o.props.onBuffer) o.props.onBuffer(t.nativeEvent);
      };

      o._onGetLicense = function (t) {
        if (o.props.drm && o.props.drm.getLicense instanceof Function) {
          var n = t.nativeEvent;

          if (n && n.spcBase64) {
            var l = o.props.drm.getLicense(n.spcBase64, n.contentId, n.licenseUrl);
            Promise.resolve(l)
              .then(function (t) {
                if (undefined !== t) ReactNative.NativeModules.VideoManager.setLicenseResult(t, ReactNative.findNodeHandle(o._root));
                else if (ReactNative.NativeModules.VideoManager.setLicenseError)
                  ReactNative.NativeModules.VideoManager.setLicenseError('Empty license result', ReactNative.findNodeHandle(o._root));
              })
              .catch(function (t) {
                if (ReactNative.NativeModules.VideoManager.setLicenseError) ReactNative.NativeModules.VideoManager.setLicenseError(t, ReactNative.findNodeHandle(o._root));
              });
          } else
            ReactNative.NativeModules.VideoManager.setLicenseError &&
              ReactNative.NativeModules.VideoManager.setLicenseError('No spc received', ReactNative.findNodeHandle(o._root));
        }
      };

      o.getViewManagerConfig = function (t) {
        return ReactNative.NativeModules.UIManager.getViewManagerConfig ? ReactNative.NativeModules.UIManager.getViewManagerConfig(t) : ReactNative.NativeModules.UIManager[t];
      };

      o.state = {
        showPoster: !!t.poster,
      };
      return o;
    }

    module25.default(E, [
      {
        key: 'setNativeProps',
        value: function (t) {
          this._root.setNativeProps(t);
        },
      },
      {
        key: 'toTypeString',
        value: function (t) {
          switch (typeof t) {
            case 'object':
              return t instanceof Date ? t.toISOString() : JSON.stringify(t);

            case 'undefined':
              return '';

            default:
              return t.toString();
          }
        },
      },
      {
        key: 'stringsOnlyObject',
        value: function (t) {
          var n = this,
            o = {};
          Object.keys(t).forEach(function (l) {
            o[l] = n.toTypeString(t[l]);
          });
          return o;
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props.resizeMode,
            n = module183.default(this.props.source) || {},
            o = !n.__packager_asset,
            u = n.uri || '';
          if (u && u.match(/^\//)) u = 'file://' + u;
          if (!u) console.warn('Trying to load empty source.');
          var s,
            f = !(!u || !u.match(/^https?:/)),
            c = !(!u || !u.match(/^(assets-library|ipod-library|file|content|ms-appx|ms-appdata):/)),
            p = this.getViewManagerConfig('RCTVideo');
          s =
            t === module1602.default.stretch
              ? p.Constants.ScaleToFill
              : t === module1602.default.contain
              ? p.Constants.ScaleAspectFit
              : t === module1602.default.cover
              ? p.Constants.ScaleAspectFill
              : p.Constants.ScaleNone;
          var P = module11.default({}, this.props);
          module11.default(P, {
            style: [R.base, P.style],
            resizeMode: s,
            src: {
              uri: u,
              isNetwork: f,
              isAsset: c,
              shouldCache: o,
              type: n.type || '',
              mainVer: n.mainVer || 0,
              patchVer: n.patchVer || 0,
              requestHeaders: n.headers ? this.stringsOnlyObject(n.headers) : {},
            },
            onVideoLoadStart: this._onLoadStart,
            onVideoLoad: this._onLoad,
            onVideoError: this._onError,
            onVideoProgress: this._onProgress,
            onVideoSeek: this._onSeek,
            onVideoEnd: this._onEnd,
            onVideoBuffer: this._onBuffer,
            onVideoBandwidthUpdate: this._onBandwidthUpdate,
            onTimedMetadata: this._onTimedMetadata,
            onVideoAudioBecomingNoisy: this._onAudioBecomingNoisy,
            onVideoExternalPlaybackChange: this._onExternalPlaybackChange,
            onVideoFullscreenPlayerWillPresent: this._onFullscreenPlayerWillPresent,
            onVideoFullscreenPlayerDidPresent: this._onFullscreenPlayerDidPresent,
            onVideoFullscreenPlayerWillDismiss: this._onFullscreenPlayerWillDismiss,
            onVideoFullscreenPlayerDidDismiss: this._onFullscreenPlayerDidDismiss,
            onReadyForDisplay: this._onReadyForDisplay,
            onPlaybackStalled: this._onPlaybackStalled,
            onPlaybackResume: this._onPlaybackResume,
            onPlaybackRateChange: this._onPlaybackRateChange,
            onAudioFocusChanged: this._onAudioFocusChanged,
            onAudioBecomingNoisy: this._onAudioBecomingNoisy,
            onGetLicense: P.drm && P.drm.getLicense && this._onGetLicense,
            onPictureInPictureStatusChanged: this._onPictureInPictureStatusChanged,
            onRestoreUserInterfaceForPictureInPictureStop: this._onRestoreUserInterfaceForPictureInPictureStop,
          });
          var v = M(
            M({}, ReactNative.StyleSheet.absoluteFillObject),
            {},
            {
              resizeMode: this.props.posterResizeMode || 'contain',
            }
          );
          return React.default.createElement(
            ReactNative.View,
            {
              style: P.style,
            },
            React.default.createElement(
              V,
              module11.default(
                {
                  ref: this._assignRoot,
                },
                P,
                {
                  style: ReactNative.StyleSheet.absoluteFill,
                }
              )
            ),
            this.state.showPoster &&
              React.default.createElement(ReactNative.Image, {
                style: v,
                source: {
                  uri: this.props.poster,
                },
              })
          );
        },
      },
    ]);
    return E;
  })(React.Component);

exports.default = N;
N.propTypes = M(
  {
    filter: PropTypes.default.oneOf([
      module1600.default.NONE,
      module1600.default.INVERT,
      module1600.default.MONOCHROME,
      module1600.default.POSTERIZE,
      module1600.default.FALSE,
      module1600.default.MAXIMUMCOMPONENT,
      module1600.default.MINIMUMCOMPONENT,
      module1600.default.CHROME,
      module1600.default.FADE,
      module1600.default.INSTANT,
      module1600.default.MONO,
      module1600.default.NOIR,
      module1600.default.PROCESS,
      module1600.default.TONAL,
      module1600.default.TRANSFER,
      module1600.default.SEPIA,
    ]),
    filterEnabled: PropTypes.default.bool,
    src: PropTypes.default.object,
    seek: PropTypes.default.oneOfType([PropTypes.default.number, PropTypes.default.object]),
    fullscreen: PropTypes.default.bool,
    onVideoLoadStart: PropTypes.default.func,
    onVideoLoad: PropTypes.default.func,
    onVideoBuffer: PropTypes.default.func,
    onVideoError: PropTypes.default.func,
    onVideoProgress: PropTypes.default.func,
    onVideoBandwidthUpdate: PropTypes.default.func,
    onVideoSeek: PropTypes.default.func,
    onVideoEnd: PropTypes.default.func,
    onTimedMetadata: PropTypes.default.func,
    onVideoAudioBecomingNoisy: PropTypes.default.func,
    onVideoExternalPlaybackChange: PropTypes.default.func,
    onVideoFullscreenPlayerWillPresent: PropTypes.default.func,
    onVideoFullscreenPlayerDidPresent: PropTypes.default.func,
    onVideoFullscreenPlayerWillDismiss: PropTypes.default.func,
    onVideoFullscreenPlayerDidDismiss: PropTypes.default.func,
    source: PropTypes.default.oneOfType([
      PropTypes.default.shape({
        uri: PropTypes.default.string,
      }),
      PropTypes.default.number,
    ]),
    drm: PropTypes.default.shape({
      type: PropTypes.default.oneOf([module1601.default.CLEARKEY, module1601.default.FAIRPLAY, module1601.default.WIDEVINE, module1601.default.PLAYREADY]),
      licenseServer: PropTypes.default.string,
      headers: PropTypes.default.shape({}),
      base64Certificate: PropTypes.default.bool,
      certificateUrl: PropTypes.default.string,
      getLicense: PropTypes.default.func,
    }),
    minLoadRetryCount: PropTypes.default.number,
    maxBitRate: PropTypes.default.number,
    resizeMode: PropTypes.default.string,
    poster: PropTypes.default.string,
    posterResizeMode: ReactNative.Image.propTypes.resizeMode,
    repeat: PropTypes.default.bool,
    automaticallyWaitsToMinimizeStalling: PropTypes.default.bool,
    allowsExternalPlayback: PropTypes.default.bool,
    selectedAudioTrack: PropTypes.default.shape({
      type: PropTypes.default.string.isRequired,
      value: PropTypes.default.oneOfType([PropTypes.default.string, PropTypes.default.number]),
    }),
    selectedVideoTrack: PropTypes.default.shape({
      type: PropTypes.default.string.isRequired,
      value: PropTypes.default.oneOfType([PropTypes.default.string, PropTypes.default.number]),
    }),
    selectedTextTrack: PropTypes.default.shape({
      type: PropTypes.default.string.isRequired,
      value: PropTypes.default.oneOfType([PropTypes.default.string, PropTypes.default.number]),
    }),
    textTracks: PropTypes.default.arrayOf(
      PropTypes.default.shape({
        title: PropTypes.default.string,
        uri: PropTypes.default.string.isRequired,
        type: PropTypes.default.oneOf([module1599.default.SRT, module1599.default.TTML, module1599.default.VTT]),
        language: PropTypes.default.string.isRequired,
      })
    ),
    paused: PropTypes.default.bool,
    muted: PropTypes.default.bool,
    volume: PropTypes.default.number,
    bufferConfig: PropTypes.default.shape({
      minBufferMs: PropTypes.default.number,
      maxBufferMs: PropTypes.default.number,
      bufferForPlaybackMs: PropTypes.default.number,
      bufferForPlaybackAfterRebufferMs: PropTypes.default.number,
    }),
    stereoPan: PropTypes.default.number,
    rate: PropTypes.default.number,
    pictureInPicture: PropTypes.default.bool,
    playInBackground: PropTypes.default.bool,
    preferredForwardBufferDuration: PropTypes.default.number,
    playWhenInactive: PropTypes.default.bool,
    ignoreSilentSwitch: PropTypes.default.oneOf(['ignore', 'obey']),
    reportBandwidth: PropTypes.default.bool,
    disableFocus: PropTypes.default.bool,
    controls: PropTypes.default.bool,
    audioOnly: PropTypes.default.bool,
    currentTime: PropTypes.default.number,
    fullscreenAutorotate: PropTypes.default.bool,
    fullscreenOrientation: PropTypes.default.oneOf(['all', 'landscape', 'portrait']),
    progressUpdateInterval: PropTypes.default.number,
    useTextureView: PropTypes.default.bool,
    hideShutterView: PropTypes.default.bool,
    onLoadStart: PropTypes.default.func,
    onLoad: PropTypes.default.func,
    onBuffer: PropTypes.default.func,
    onError: PropTypes.default.func,
    onProgress: PropTypes.default.func,
    onBandwidthUpdate: PropTypes.default.func,
    onSeek: PropTypes.default.func,
    onEnd: PropTypes.default.func,
    onFullscreenPlayerWillPresent: PropTypes.default.func,
    onFullscreenPlayerDidPresent: PropTypes.default.func,
    onFullscreenPlayerWillDismiss: PropTypes.default.func,
    onFullscreenPlayerDidDismiss: PropTypes.default.func,
    onReadyForDisplay: PropTypes.default.func,
    onPlaybackStalled: PropTypes.default.func,
    onPlaybackResume: PropTypes.default.func,
    onPlaybackRateChange: PropTypes.default.func,
    onAudioFocusChanged: PropTypes.default.func,
    onAudioBecomingNoisy: PropTypes.default.func,
    onPictureInPictureStatusChanged: PropTypes.default.func,
    needsToRestoreUserInterfaceForPictureInPictureStop: PropTypes.default.func,
    onExternalPlaybackChange: PropTypes.default.func,
    scaleX: PropTypes.default.number,
    scaleY: PropTypes.default.number,
    translateX: PropTypes.default.number,
    translateY: PropTypes.default.number,
    rotation: PropTypes.default.number,
  },
  ReactNative.ViewPropTypes
);
var V = ReactNative.requireNativeComponent('RCTVideo', N, {
  nativeOnly: {
    src: true,
    seek: true,
    fullscreen: true,
  },
});
