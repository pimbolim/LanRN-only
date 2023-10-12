var n,
  module11 = require('./11'),
  React = require('react'),
  ReactNative = require('react-native'),
  module18 = require('./18'),
  module3 = require('./3'),
  module1592 = require('./1592'),
  module1593 = require('./1593'),
  module1595 = require('./1595'),
  v =
    (this && this.__extends) ||
    ((n = function (t, o) {
      return (n =
        Object.setPrototypeOf ||
        ({
          __proto__: [],
        } instanceof Array &&
          function (t, n) {
            t.__proto__ = n;
          }) ||
        function (t, n) {
          for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        })(t, o);
    }),
    function (t, o) {
      if ('function' != typeof o && null !== o) throw new TypeError('Class extends value ' + String(o) + ' is not a constructor or null');

      function s() {
        this.constructor = t;
      }

      n(t, o);
      t.prototype = null === o ? Object.create(o) : ((s.prototype = o.prototype), new s());
    }),
  w =
    (this && this.__awaiter) ||
    function (t, n, o, s) {
      return new (o || (o = Promise))(function (l, u) {
        function c(t) {
          try {
            f(s.next(t));
          } catch (t) {
            u(t);
          }
        }

        function p(t) {
          try {
            f(s.throw(t));
          } catch (t) {
            u(t);
          }
        }

        function f(t) {
          var n;
          if (t.done) l(t.value);
          else
            ((n = t.value),
            n instanceof o
              ? n
              : new o(function (t) {
                  t(n);
                })).then(c, p);
        }

        f((s = s.apply(t, n || [])).next());
      });
    },
  b =
    (this && this.__generator) ||
    function (t, n) {
      var o,
        s,
        l,
        module18,
        c = {
          label: 0,
          sent: function () {
            if (1 & l[0]) throw l[1];
            return l[1];
          },
          trys: [],
          ops: [],
        };
      module18 = {
        next: p(0),
        throw: p(1),
        return: p(2),
      };
      if ('function' == typeof Symbol)
        module18[Symbol.iterator] = function () {
          return this;
        };
      return module18;

      function p(t) {
        return function (n) {
          return f([t, n]);
        };
      }

      function f(u) {
        if (o) throw new TypeError('Generator is already executing.');

        for (; c; )
          try {
            if (((o = 1), s && (l = 2 & u[0] ? s.return : u[0] ? s.throw || ((l = s.return) && l.call(s), 0) : s.next) && !(l = l.call(s, u[1])).done)) return l;

            switch (((s = 0), l && (u = [2 & u[0], l.value]), u[0])) {
              case 0:
              case 1:
                l = u;
                break;

              case 4:
                c.label++;
                return {
                  value: u[1],
                  done: false,
                };

              case 5:
                c.label++;
                s = u[1];
                u = [0];
                continue;

              case 7:
                u = c.ops.pop();
                c.trys.pop();
                continue;

              default:
                if (!(l = (l = c.trys).length > 0 && l[l.length - 1]) && (6 === u[0] || 2 === u[0])) {
                  c = 0;
                  continue;
                }

                if (3 === u[0] && (!l || (u[1] > l[0] && u[1] < l[3]))) {
                  c.label = u[1];
                  break;
                }

                if (6 === u[0] && c.label < l[1]) {
                  c.label = l[1];
                  l = u;
                  break;
                }

                if (l && c.label < l[2]) {
                  c.label = l[2];
                  c.ops.push(u);
                  break;
                }

                if (l[2]) c.ops.pop();
                c.trys.pop();
                continue;
            }

            u = n.call(t, c);
          } catch (t) {
            u = [6, t];
            s = 0;
          } finally {
            o = l = 0;
          }

        if (5 & u[0]) throw u[1];
        return {
          value: u[0] ? u[1] : undefined,
          done: true,
        };
      }
    },
  S =
    (this && this.__rest) ||
    function (t, n) {
      var o = {};

      for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && n.indexOf(s) < 0 && (o[s] = t[s]);

      if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
        var l = 0;

        for (s = Object.getOwnPropertySymbols(t); l < s.length; l++) n.indexOf(s[l]) < 0 && Object.prototype.propertyIsEnumerable.call(t, s[l]) && (o[s[l]] = t[s[l]]);
      }

      return o;
    },
  y = ReactNative.UIManager,
  E = ReactNative.Image.resolveAssetSource,
  C = 0,
  L = (function (t) {
    function n() {
      var n = (null !== t && t.apply(this, arguments)) || this;
      n.startUrl = null;
      n.state = {
        viewState: n.props.startInLoadingState ? 'LOADING' : 'IDLE',
        lastErrorEvent: null,
      };
      n.onShouldStartLoadWithRequest = null;
      n.webViewRef = React.default.createRef();
      n.messagingModuleName = 'WebViewMessageHandler'.concat((C += 1));

      n.componentDidMount = function () {
        module18.default.registerCallableModule(n.messagingModuleName, n);
      };

      n.getCommands = function () {
        return y.getViewManagerConfig('RNCWebView').Commands;
      };

      n.goForward = function () {
        y.dispatchViewManagerCommand(n.getWebViewHandle(), n.getCommands().goForward, undefined);
      };

      n.goBack = function () {
        y.dispatchViewManagerCommand(n.getWebViewHandle(), n.getCommands().goBack, undefined);
      };

      n.reload = function () {
        n.setState({
          viewState: 'LOADING',
        });
        y.dispatchViewManagerCommand(n.getWebViewHandle(), n.getCommands().reload, undefined);
      };

      n.stopLoading = function () {
        y.dispatchViewManagerCommand(n.getWebViewHandle(), n.getCommands().stopLoading, undefined);
      };

      n.requestFocus = function () {
        y.dispatchViewManagerCommand(n.getWebViewHandle(), n.getCommands().requestFocus, undefined);
      };

      n.postMessage = function (t) {
        y.dispatchViewManagerCommand(n.getWebViewHandle(), n.getCommands().postMessage, [String(t)]);
      };

      n.clearFormData = function () {
        y.dispatchViewManagerCommand(n.getWebViewHandle(), n.getCommands().clearFormData, undefined);
      };

      n.clearCache = function (t) {
        y.dispatchViewManagerCommand(n.getWebViewHandle(), n.getCommands().clearCache, [t]);
      };

      n.clearHistory = function () {
        y.dispatchViewManagerCommand(n.getWebViewHandle(), n.getCommands().clearHistory, undefined);
      };

      n.injectJavaScript = function (t) {
        y.dispatchViewManagerCommand(n.getWebViewHandle(), n.getCommands().injectJavaScript, [t]);
      };

      n.updateNavigationState = function (t) {
        if (n.props.onNavigationStateChange) n.props.onNavigationStateChange(t.nativeEvent);
      };

      n.getWebViewHandle = function () {
        var t = ReactNative.findNodeHandle(n.webViewRef.current);
        module3.default(null != t, 'nodeHandle expected to be non-null');
        return t;
      };

      n.onLoadingStart = function (t) {
        var o = n.props.onLoadStart,
          s = t.nativeEvent.url;
        n.startUrl = s;
        if (o) o(t);
        n.updateNavigationState(t);
      };

      n.onLoadingError = function (t) {
        t.persist();
        var o = n.props,
          s = o.onError,
          l = o.onLoadEnd;
        if (s) s(t);
        else console.warn('Encountered an error loading page', t.nativeEvent);
        if (l) l(t);
        if (!t.isDefaultPrevented())
          n.setState({
            lastErrorEvent: t.nativeEvent,
            viewState: 'ERROR',
          });
      };

      n.onHttpError = function (t) {
        var o = n.props.onHttpError;
        if (o) o(t);
      };

      n.onRenderProcessGone = function (t) {
        var o = n.props.onRenderProcessGone;
        if (o) o(t);
      };

      n.onLoadingFinish = function (t) {
        var o = n.props,
          s = o.onLoad,
          l = o.onLoadEnd,
          u = t.nativeEvent.url;
        if (s) s(t);
        if (l) l(t);
        if (u === n.startUrl)
          n.setState({
            viewState: 'IDLE',
          });
        n.updateNavigationState(t);
      };

      n.onMessage = function (t) {
        var o = n.props.onMessage;
        if (o) o(t);
      };

      n.onLoadingProgress = function (t) {
        var o = n.props.onLoadProgress;
        if (1 === t.nativeEvent.progress)
          n.setState(function (t) {
            return 'LOADING' === t.viewState
              ? {
                  viewState: 'IDLE',
                }
              : null;
          });
        if (o) o(t);
      };

      n.onShouldStartLoadWithRequestCallback = function (t, o, s) {
        if (s) ReactNative.NativeModules.RNCWebView.onShouldStartLoadWithRequestCallback(t, s);
        else if (t) y.dispatchViewManagerCommand(n.getWebViewHandle(), n.getCommands().loadUrl, [String(o)]);
      };

      return n;
    }

    var L;
    v(n, t);

    n.prototype.render = function () {
      var t = this.props,
        n = t.onMessage,
        u = t.onShouldStartLoadWithRequest,
        v = t.originWhitelist,
        w = t.renderError,
        b = t.renderLoading,
        y = t.source,
        C = t.style,
        L = t.containerStyle,
        V = t.nativeConfig,
        W = undefined === V ? {} : V,
        M = S(t, ['onMessage', 'onShouldStartLoadWithRequest', 'originWhitelist', 'renderError', 'renderLoading', 'source', 'style', 'containerStyle', 'nativeConfig']),
        R = null;
      if ('LOADING' === this.state.viewState) R = (b || module1593.defaultRenderLoading)();
      else if ('ERROR' === this.state.viewState) {
        var O = this.state.lastErrorEvent;
        module3.default(null != O, 'lastErrorEvent expected to be non-null');
        R = (w || module1593.defaultRenderError)(O.domain, O.code, O.description);
      } else 'IDLE' !== this.state.viewState && console.error('RNCWebView invalid state encountered: '.concat(this.state.viewState));
      var H = [module1595.default.container, module1595.default.webView, C],
        P = [module1595.default.container, L];
      if ('number' != typeof y && y && 'method' in y)
        'POST' === y.method && y.headers
          ? console.warn('WebView: `source.headers` is not supported when using POST.')
          : 'GET' === y.method && y.body && console.warn('WebView: `source.body` is not supported when using GET.');
      var N = W.component || module1592.default;
      this.onShouldStartLoadWithRequest = module1593.createOnShouldStartLoadWithRequest(this.onShouldStartLoadWithRequestCallback, v, u);

      var _ = React.default.createElement(
        N,
        module11.default(
          {
            key: 'webViewKey',
          },
          M,
          {
            messagingEnabled: 'function' == typeof n,
            messagingModuleName: this.messagingModuleName,
            onLoadingError: this.onLoadingError,
            onLoadingFinish: this.onLoadingFinish,
            onLoadingProgress: this.onLoadingProgress,
            onLoadingStart: this.onLoadingStart,
            onHttpError: this.onHttpError,
            onRenderProcessGone: this.onRenderProcessGone,
            onMessage: this.onMessage,
            onShouldStartLoadWithRequest: this.onShouldStartLoadWithRequest,
            ref: this.webViewRef,
            source: E(y),
            style: H,
          },
          W.props
        )
      );

      return React.default.createElement(
        ReactNative.View,
        {
          style: P,
        },
        _,
        R
      );
    };

    L = n;
    n.defaultProps = {
      overScrollMode: 'always',
      javaScriptEnabled: true,
      thirdPartyCookiesEnabled: true,
      scalesPageToFit: true,
      allowsFullscreenVideo: false,
      allowFileAccess: false,
      saveFormDataDisabled: false,
      cacheEnabled: true,
      androidHardwareAccelerationDisabled: false,
      androidLayerType: 'none',
      originWhitelist: module1593.defaultOriginWhitelist,
      setSupportMultipleWindows: true,
      setBuiltInZoomControls: true,
      setDisplayZoomControls: false,
      nestedScrollEnabled: false,
    };

    n.isFileUploadSupported = function () {
      return w(undefined, undefined, undefined, function () {
        return b(L, function (t) {
          return [2, ReactNative.NativeModules.RNCWebView.isFileUploadSupported()];
        });
      });
    };

    return n;
  })(React.default.Component);

exports.default = L;
