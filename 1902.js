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
    var o = w(n);
    if (o && o.has(t)) return o.get(t);
    var s = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var c = l ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (c && (c.get || c.set)) Object.defineProperty(s, u, c);
        else s[u] = t[u];
      }

    s.default = t;
    if (o) o.set(t, s);
    return s;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module1903 = require('./1903'),
  module1931 = require('./1931');

function w(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (w = function (t) {
    return t ? o : n;
  })(t);
}

function C(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    if (n)
      s = s.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, s);
  }

  return o;
}

function S(t) {
  for (var n = 1; n < arguments.length; n++) {
    var s = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      C(Object(s), true).forEach(function (n) {
        module47.default(t, n, s[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(s));
    else
      C(Object(s)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(s, n));
      });
  }

  return t;
}

function _() {
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

var module1937 = require('./1937'),
  ReactNative = (function (t) {
    module35.default(C, t);

    var module47 = C,
      PropTypes = _(),
      w = function () {
        var t,
          n = module34.default(module47);

        if (PropTypes) {
          var s = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, s);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function C(t) {
      var o;
      module24.default(this, C);

      (o = w.call(this, t))._loadFromSource = function (t) {
        var n = ReactNative.Image.resolveAssetSource(t) || {},
          s = n.uri || '';
        if (o._mounted)
          o.setState({
            isDownloaded: false,
            path: '',
            progress: 0,
          });
        var l = n.cacheFileName || module1937(s) + '.pdf',
          u = module1903.default.fs.dirs.CacheDir + '/' + l;
        if (n.cache)
          module1903.default.fs
            .stat(u)
            .then(function (t) {
              if (!Boolean(n.expiration) || 1e3 * n.expiration + t.lastModified > new Date().getTime()) {
                if (o._mounted)
                  o.setState({
                    path: u,
                    isDownloaded: true,
                  });
              } else o._prepareFile(n);
            })
            .catch(function () {
              o._prepareFile(n);
            });
        else o._prepareFile(n);
      };

      o._prepareFile = function (t) {
        var s, l, u, c, p, f, h;
        return regeneratorRuntime.default.async(
          function (b) {
            for (;;)
              switch ((b.prev = b.next)) {
                case 0:
                  try {
                    if (t.uri) {
                      s = t.uri || '';
                      l = !(!s || !s.match(/^https?:\/\//));
                      u = !(!s || !s.match(/^bundle-assets:\/\//));
                      c = !(!s || !s.match(/^data:application\/pdf;base64/));
                      p = t.cacheFileName || module1937(s) + '.pdf';
                      f = module1903.default.fs.dirs.CacheDir + '/' + p;

                      o._unlinkFile(f);

                      if (l) o._downloadFile(t, f);
                      else if (u)
                        module1903.default.fs
                          .cp(s, f)
                          .then(function () {
                            if (o._mounted)
                              o.setState({
                                path: f,
                                isDownloaded: true,
                                progress: 1,
                              });
                          })
                          .catch(function (t) {
                            return regeneratorRuntime.default.async(
                              function (n) {
                                for (;;)
                                  switch ((n.prev = n.next)) {
                                    case 0:
                                      o._unlinkFile(f);

                                      o._onError(t);

                                    case 2:
                                    case 'end':
                                      return n.stop();
                                  }
                              },
                              null,
                              null,
                              null,
                              Promise
                            );
                          });
                      else if (c) {
                        h = s.replace(/data:application\/pdf;base64,/i, '');
                        module1903.default.fs
                          .writeFile(f, h, 'base64')
                          .then(function () {
                            if (o._mounted)
                              o.setState({
                                path: f,
                                isDownloaded: true,
                                progress: 1,
                              });
                          })
                          .catch(function (t) {
                            return regeneratorRuntime.default.async(
                              function (n) {
                                for (;;)
                                  switch ((n.prev = n.next)) {
                                    case 0:
                                      o._unlinkFile(f);

                                      o._onError(t);

                                    case 2:
                                    case 'end':
                                      return n.stop();
                                  }
                              },
                              null,
                              null,
                              null,
                              Promise
                            );
                          });
                      } else if (o._mounted)
                        o.setState({
                          path: s.replace(/file:\/\//i, ''),
                          isDownloaded: true,
                        });
                    } else o._onError(new Error('no pdf source!'));
                  } catch (t) {
                    o._onError(t);
                  }

                case 1:
                case 'end':
                  return b.stop();
              }
          },
          null,
          null,
          null,
          Promise
        );
      };

      o._downloadFile = function (t, s) {
        var l;
        return regeneratorRuntime.default.async(
          function (u) {
            for (;;)
              switch ((u.prev = u.next)) {
                case 0:
                  if (o.lastRNBFTask) {
                    o.lastRNBFTask.cancel(function (t) {});
                    o.lastRNBFTask = null;
                  }

                  l = s + '.tmp';

                  o._unlinkFile(l);

                  o.lastRNBFTask = module1903.default
                    .config({
                      path: l,
                      trusty: o.props.trustAllCerts,
                    })
                    .fetch(t.method ? t.method : 'GET', t.uri, t.headers ? t.headers : {}, t.body ? t.body : '')
                    .progress(function (t, n) {
                      if (o.props.onLoadProgress) o.props.onLoadProgress(t / n);
                      if (o._mounted)
                        o.setState({
                          progress: t / n,
                        });
                    });
                  o.lastRNBFTask
                    .then(function (u) {
                      var module35, p, f;
                      return regeneratorRuntime.default.async(
                        function (h) {
                          for (;;)
                            switch ((h.prev = h.next)) {
                              case 0:
                                if (
                                  ((o.lastRNBFTask = null),
                                  !(u && u.respInfo && u.respInfo.headers) ||
                                    u.respInfo.headers['Content-Encoding'] ||
                                    u.respInfo.headers['Transfer-Encoding'] ||
                                    !u.respInfo.headers['Content-Length'])
                                ) {
                                  h.next = 17;
                                  break;
                                }

                                module35 = u.respInfo.headers['Content-Length'];
                                h.prev = 3;
                                h.next = 6;
                                return regeneratorRuntime.default.awrap(module1903.default.fs.stat(u.path()));

                              case 6:
                                if ((f = h.sent) && f.size) {
                                  h.next = 9;
                                  break;
                                }

                                throw new Error('FileNotFound:' + t.uri);

                              case 9:
                                p = f.size;
                                h.next = 15;
                                break;

                              case 12:
                                throw ((h.prev = 12), (h.t0 = h.catch(3)), new Error('DownloadFailed:' + t.uri));

                              case 15:
                                if (module35 == p) {
                                  h.next = 17;
                                  break;
                                }

                                throw new Error('DownloadFailed:' + t.uri);

                              case 17:
                                o._unlinkFile(s);

                                module1903.default.fs
                                  .cp(l, s)
                                  .then(function () {
                                    if (o._mounted)
                                      o.setState({
                                        path: s,
                                        isDownloaded: true,
                                        progress: 1,
                                      });

                                    o._unlinkFile(l);
                                  })
                                  .catch(function (t) {
                                    return regeneratorRuntime.default.async(
                                      function (n) {
                                        for (;;)
                                          switch ((n.prev = n.next)) {
                                            case 0:
                                              throw t;

                                            case 1:
                                            case 'end':
                                              return n.stop();
                                          }
                                      },
                                      null,
                                      null,
                                      null,
                                      Promise
                                    );
                                  });

                              case 19:
                              case 'end':
                                return h.stop();
                            }
                        },
                        null,
                        null,
                        [[3, 12]],
                        Promise
                      );
                    })
                    .catch(function (t) {
                      return regeneratorRuntime.default.async(
                        function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                o._unlinkFile(l);

                                o._unlinkFile(s);

                                o._onError(t);

                              case 3:
                              case 'end':
                                return n.stop();
                            }
                        },
                        null,
                        null,
                        null,
                        Promise
                      );
                    });

                case 5:
                case 'end':
                  return u.stop();
              }
          },
          null,
          null,
          null,
          Promise
        );
      };

      o._unlinkFile = function (t) {
        return regeneratorRuntime.default.async(
          function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  o.prev = 0;
                  o.next = 3;
                  return regeneratorRuntime.default.awrap(module1903.default.fs.unlink(t));

                case 3:
                  o.next = 7;
                  break;

                case 5:
                  o.prev = 5;
                  o.t0 = o.catch(0);

                case 7:
                case 'end':
                  return o.stop();
              }
          },
          null,
          null,
          [[0, 5]],
          Promise
        );
      };

      o.setNativeProps = function (t) {
        if (o._root) o._root.setNativeProps(t);
      };

      o._onChange = function (t) {
        var n = t.nativeEvent.message.split('|');

        if (n.length > 0) {
          if (n.length > 5) n[4] = n.splice(4).join('|');
          if ('loadComplete' === n[0]) {
            if (o.props.onLoadComplete)
              o.props.onLoadComplete(
                Number(n[1]),
                o.state.path,
                {
                  width: Number(n[2]),
                  height: Number(n[3]),
                },
                n[4] && JSON.parse(n[4])
              );
          } else if ('pageChanged' === n[0]) {
            if (o.props.onPageChanged) o.props.onPageChanged(Number(n[1]), Number(n[2]));
          } else if ('error' === n[0]) o._onError(new Error(n[1]));
          else if ('pageSingleTap' === n[0]) {
            if (o.props.onPageSingleTap) o.props.onPageSingleTap(Number(n[1]), Number(n[2]), Number(n[3]));
          } else if ('scaleChanged' === n[0]) {
            if (o.props.onScaleChanged) o.props.onScaleChanged(Number(n[1]));
          } else if ('linkPressed' === n[0] && o.props.onPressLink) o.props.onPressLink(n[1]);
        }
      };

      o._onError = function (t) {
        if (o.props.onError) o.props.onError(t);
      };

      o.state = {
        path: '',
        isDownloaded: false,
        progress: 0,
        isSupportPDFKit: -1,
      };
      o.lastRNBFTask = null;
      return o;
    }

    module25.default(C, [
      {
        key: 'componentDidUpdate',
        value: function (t) {
          var n = this,
            o = ReactNative.Image.resolveAssetSource(this.props.source),
            s = ReactNative.Image.resolveAssetSource(t.source);
          if (o.uri !== s.uri)
            this.lastRNBFTask
              ? (this.lastRNBFTask.cancel(function (t) {
                  n._loadFromSource(n.props.source);
                }),
                (this.lastRNBFTask = null))
              : this._loadFromSource(this.props.source);
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          var t = this;
          if (((this._mounted = true), 'ios' === ReactNative.Platform.OS))
            require('react-native').NativeModules.PdfViewManager.supportPDFKit(function (n) {
              if (t._mounted)
                t.setState({
                  isSupportPDFKit: n ? 1 : 0,
                });
            });

          this._loadFromSource(this.props.source);
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this._mounted = false;

          if (this.lastRNBFTask) {
            this.lastRNBFTask.cancel(function (t) {});
            this.lastRNBFTask = null;
          }
        },
      },
      {
        key: 'setPage',
        value: function (t) {
          if (null === t || isNaN(t)) throw new Error('Specified pageNumber is not a number');
          this.setNativeProps({
            page: t,
          });
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this;
          return 'android' === ReactNative.Platform.OS || 'ios' === ReactNative.Platform.OS || 'windows' === ReactNative.Platform.OS
            ? React.default.createElement(
                ReactNative.View,
                {
                  style: [
                    this.props.style,
                    {
                      overflow: 'hidden',
                    },
                  ],
                },
                this.state.isDownloaded
                  ? 'android' === ReactNative.Platform.OS || 'windows' === ReactNative.Platform.OS
                    ? React.default.createElement(
                        O,
                        module11.default(
                          {
                            ref: function (n) {
                              return (t._root = n);
                            },
                          },
                          this.props,
                          {
                            style: [
                              {
                                flex: 1,
                                backgroundColor: '#EEE',
                              },
                              this.props.style,
                            ],
                            path: this.state.path,
                            onChange: this._onChange,
                          }
                        )
                      )
                    : this.props.usePDFKit && 1 === this.state.isSupportPDFKit
                    ? React.default.createElement(
                        O,
                        module11.default(
                          {
                            ref: function (n) {
                              return (t._root = n);
                            },
                          },
                          this.props,
                          {
                            style: [
                              {
                                backgroundColor: '#EEE',
                                overflow: 'hidden',
                              },
                              this.props.style,
                            ],
                            path: this.state.path,
                            onChange: this._onChange,
                          }
                        )
                      )
                    : React.default.createElement(
                        module1931.default,
                        module11.default({}, this.props, {
                          style: [
                            {
                              backgroundColor: '#EEE',
                              overflow: 'hidden',
                            },
                            this.props.style,
                          ],
                          path: this.state.path,
                          onLoadComplete: this.props.onLoadComplete,
                          onPageChanged: this.props.onPageChanged,
                          onError: this._onError,
                          onPageSingleTap: this.props.onPageSingleTap,
                          onScaleChanged: this.props.onScaleChanged,
                          onPressLink: this.props.onPressLink,
                        })
                      )
                  : React.default.createElement(
                      ReactNative.View,
                      {
                        style: E.progressContainer,
                      },
                      this.props.renderActivityIndicator
                        ? this.props.renderActivityIndicator(this.state.progress)
                        : React.default.createElement(ReactNative.Text, null, (100 * this.state.progress).toFixed(2) + '%')
                    )
              )
            : null;
        },
      },
    ]);
    return C;
  })(React.Component);

if (
  ((exports.default = ReactNative),
  (ReactNative.propTypes = S(
    S({}, ReactNative.ViewPropTypes),
    {},
    {
      source: PropTypes.default.oneOfType([
        PropTypes.default.shape({
          uri: PropTypes.default.string,
          cache: PropTypes.default.bool,
          cacheFileName: PropTypes.default.string,
          expiration: PropTypes.default.number,
        }),
        PropTypes.default.number,
      ]).isRequired,
      page: PropTypes.default.number,
      scale: PropTypes.default.number,
      minScale: PropTypes.default.number,
      maxScale: PropTypes.default.number,
      horizontal: PropTypes.default.bool,
      spacing: PropTypes.default.number,
      password: PropTypes.default.string,
      renderActivityIndicator: PropTypes.default.func,
      enableAntialiasing: PropTypes.default.bool,
      enableAnnotationRendering: PropTypes.default.bool,
      enablePaging: PropTypes.default.bool,
      enableRTL: PropTypes.default.bool,
      fitPolicy: PropTypes.default.number,
      trustAllCerts: PropTypes.default.bool,
      singlePage: PropTypes.default.bool,
      onLoadComplete: PropTypes.default.func,
      onPageChanged: PropTypes.default.func,
      onError: PropTypes.default.func,
      onPageSingleTap: PropTypes.default.func,
      onScaleChanged: PropTypes.default.func,
      onPressLink: PropTypes.default.func,
      accessibilityLabel: PropTypes.default.string,
      importantForAccessibility: PropTypes.default.string,
      renderToHardwareTextureAndroid: PropTypes.default.string,
      testID: PropTypes.default.string,
      onLayout: PropTypes.default.bool,
      accessibilityLiveRegion: PropTypes.default.string,
      accessibilityComponentType: PropTypes.default.string,
    }
  )),
  (ReactNative.defaultProps = {
    password: '',
    scale: 1,
    minScale: 1,
    maxScale: 3,
    spacing: 10,
    fitPolicy: 2,
    horizontal: false,
    page: 1,
    enableAntialiasing: true,
    enableAnnotationRendering: true,
    enablePaging: false,
    enableRTL: false,
    trustAllCerts: true,
    usePDFKit: true,
    singlePage: false,
    onLoadProgress: function (t) {},
    onLoadComplete: function (t, n) {},
    onPageChanged: function (t, n) {},
    onError: function (t) {},
    onPageSingleTap: function (t, n, o) {},
    onScaleChanged: function (t) {},
    onPressLink: function (t) {},
  }),
  'android' === ReactNative.Platform.OS)
)
  var O = ReactNative.requireNativeComponent('RCTPdf', ReactNative, {
    nativeOnly: {
      path: true,
      onChange: true,
    },
  });
else if ('ios' === ReactNative.Platform.OS)
  O = ReactNative.requireNativeComponent('RCTPdfView', ReactNative, {
    nativeOnly: {
      path: true,
      onChange: true,
    },
  });
else if ('windows' === ReactNative.Platform.OS)
  O = ReactNative.requireNativeComponent('RCTPdf', ReactNative, {
    nativeOnly: {
      path: true,
      onChange: true,
    },
  });
var E = ReactNative.StyleSheet.create({
  progressContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    width: 200,
    height: 2,
  },
});
