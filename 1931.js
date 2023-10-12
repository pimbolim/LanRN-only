var module47 = require('./47'),
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
    var o = b(n);
    if (o && o.has(t)) return o.get(t);
    var s = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var p = l ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (p && (p.get || p.set)) Object.defineProperty(s, c, p);
        else s[c] = t[c];
      }

    s.default = t;
    if (o) o.set(t, s);
    return s;
  })(require('react')),
  ReactNative = require('react-native'),
  PropTypes = require('prop-types'),
  module1932 = require('./1932'),
  module1933 = require('./1933'),
  module1934 = require('./1934'),
  module1935 = require('./1935'),
  module1936 = require('./1936');

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (b = function (t) {
    return t ? o : n;
  })(t);
}

function O(t, n) {
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

function v(t) {
  for (var o = 1; o < arguments.length; o++) {
    var s = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      O(Object(s), true).forEach(function (o) {
        module47.default(t, o, s[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(s));
    else
      O(Object(s)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(s, n));
      });
  }

  return t;
}

function z() {
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

var T = {
    minimumViewTime: 500,
    itemVisiblePercentThreshold: 10,
    waitForInteraction: false,
  },
  x = (function (t) {
    module35.default(O, t);

    var module47 = O,
      PropTypes = z(),
      b = function () {
        var t,
          o = module34.default(module47);

        if (PropTypes) {
          var s = module34.default(this).constructor;
          t = Reflect.construct(o, arguments, s);
        } else t = o.apply(this, arguments);

        return module37.default(this, t);
      };

    function O(t) {
      var n;
      module24.default(this, O);

      (n = b.call(this, t))._keyExtractor = function (t, n) {
        return 'pdf-page-' + n;
      };

      n._getPageWidth = function () {
        var t = n.props.fitPolicy;

        switch (((1 === n.state.numberOfPages || n.props.singlePage) && (t = 2), t)) {
          case 0:
            return n.state.contentContainerSize.width * n.state.scale;

          case 1:
            return n.state.contentContainerSize.height * n.state.pageAspectRate * n.state.scale;

          case 2:
          default:
            return n.state.contentContainerSize.width / n.state.contentContainerSize.height < n.state.pageAspectRate
              ? n.state.contentContainerSize.width * n.state.scale
              : n.state.contentContainerSize.height * n.state.pageAspectRate * n.state.scale;
        }
      };

      n._getPageHeight = function () {
        var t = n.props.fitPolicy;

        switch (((1 === n.state.numberOfPages || n.props.singlePage) && (t = 2), t)) {
          case 0:
            return n.state.contentContainerSize.width * (1 / n.state.pageAspectRate) * n.state.scale;

          case 1:
            return n.state.contentContainerSize.height * n.state.scale;

          case 2:
          default:
            return n.state.contentContainerSize.width / n.state.contentContainerSize.height < n.state.pageAspectRate
              ? n.state.contentContainerSize.width * (1 / n.state.pageAspectRate) * n.state.scale
              : n.state.contentContainerSize.height * n.state.scale;
        }
      };

      n._renderSeparator = function () {
        return React.default.createElement(ReactNative.View, {
          style: n.props.horizontal
            ? {
                width: n.props.spacing * n.state.scale,
                backgroundColor: 'transparent',
              }
            : {
                height: n.props.spacing * n.state.scale,
                backgroundColor: 'transparent',
              },
        });
      };

      n._onItemSingleTap = function (t, o, s) {
        n.props.onPageSingleTap(t + 1, o, s);
      };

      n._onItemDoubleTap = function (t) {
        if (n.state.scale >= n.props.maxScale)
          n._onScaleChanged({
            scale: 1 / n.state.scale,
            pageX: n.state.contentContainerSize.width / 2,
            pageY: n.state.contentContainerSize.height / 2,
          });
        else
          n._onScaleChanged({
            scale: 1.2,
            pageX: n.state.contentContainerSize.width / 2,
            pageY: n.state.contentContainerSize.height / 2,
          });
      };

      n._onScaleChanged = function (t) {
        var o = t.scale * n.state.scale;
        o = (o = o > n.props.maxScale ? n.props.maxScale : o) < n.props.minScale ? n.props.minScale : o;
        var s = {
          x: (n.state.contentOffset.x + t.pageX) * (o / n.state.scale) - t.pageX,
          y: (n.state.contentOffset.y + t.pageY) * (o / n.state.scale) - t.pageY,
        };
        n.setState({
          scale: o,
          newContentOffset: s,
        });
        n.props.onScaleChanged(o);
      };

      n._renderItem = function (t) {
        var o = t.item,
          s = t.index,
          l = React.default.createElement(module1933.default, {
            accessible: true,
            key: o.id,
            fileNo: n.state.fileNo,
            page: o.key + 1,
            width: n._getPageWidth(),
            height: n._getPageHeight(),
          });
        return n.props.singlePage
          ? React.default.createElement(
              ReactNative.View,
              {
                style: {
                  flexDirection: n.props.horizontal ? 'row' : 'column',
                },
              },
              l
            )
          : React.default.createElement(
              module1934.default,
              {
                style: {
                  flexDirection: n.props.horizontal ? 'row' : 'column',
                },
                onSingleTap: function (t, o) {
                  n._onItemSingleTap(s, t, o);
                },
                onDoubleTap: function () {
                  n._onItemDoubleTap(s);
                },
              },
              l,
              s !== n.state.numberOfPages - 1 && n._renderSeparator()
            );
      };

      n._onViewableItemsChanged = function (t) {
        for (
          var o = 0;
          o < t.viewableItems.length &&
          (n._onPageChanged(t.viewableItems[o].index + 1, n.state.numberOfPages), !(t.viewableItems.length + t.viewableItems[0].index < n.state.numberOfPages));
          o++
        );
      };

      n._onPageChanged = function (t, o) {
        if (n.props.onPageChanged && n.state.currentPage !== t) {
          n.props.onPageChanged(t, o);
          n.setState({
            currentPage: t,
          });
        }
      };

      n._getRef = function (t) {
        return (n._flatList = t);
      };

      n._getItemLayout = function (t, o) {
        return {
          length: n.props.horizontal ? n._getPageWidth() : n._getPageHeight(),
          offset: ((n.props.horizontal ? n._getPageWidth() : n._getPageHeight()) + n.props.spacing * n.state.scale) * o,
          index: o,
        };
      };

      n._onScroll = function (t) {
        n.setState({
          contentOffset: t.nativeEvent.contentOffset,
          newContentOffset: t.nativeEvent.contentOffset,
        });
      };

      n._onListContentSizeChange = function (t, o) {
        if (!(n.state.contentOffset.x == n.state.newContentOffset.x && n.state.contentOffset.y == n.state.newContentOffset.y))
          n._flatList.scrollToXY(n.state.newContentOffset.x, n.state.newContentOffset.y);
      };

      n._renderList = function () {
        var t = [];
        if (n.props.singlePage)
          t[0] = {
            key: n.props.currentPage >= 0 ? n.props.currentPage : 0,
          };
        else
          for (var s = 0; s < n.state.numberOfPages; s++)
            t[s] = {
              key: s,
            };
        return React.default.createElement(module1936.default, {
          ref: n._getRef,
          style: [L.container, n.props.style],
          pagingEnabled: n.props.enablePaging,
          contentContainerStyle: [
            {
              justifyContent: 'center',
              alignItems: 'center',
            },
            n.props.horizontal
              ? {
                  height: n.state.contentContainerSize.height * n.state.scale,
                }
              : {
                  width: n.state.contentContainerSize.width * n.state.scale,
                },
          ],
          horizontal: n.props.horizontal,
          data: t,
          renderItem: n._renderItem,
          keyExtractor: n._keyExtractor,
          windowSize: 11,
          getItemLayout: n._getItemLayout,
          maxToRenderPerBatch: 1,
          renderScrollComponent: function (t) {
            return React.default.createElement(
              ReactNative.ScrollView,
              module11.default({}, t, {
                centerContent: n.state.centerContent,
                pinchGestureEnabled: false,
              })
            );
          },
          initialScrollIndex: n.props.page < 1 ? 0 : n.props.page - 1,
          onViewableItemsChanged: n._onViewableItemsChanged,
          viewabilityConfig: T,
          onScroll: n._onScroll,
          onContentSizeChange: n._onListContentSizeChange,
          scrollEnabled: !n.props.singlePage,
        });
      };

      n._onLayout = function (t) {
        n.setState({
          contentContainerSize: {
            width: t.nativeEvent.layout.width,
            height: t.nativeEvent.layout.height,
          },
        });
      };

      n.state = {
        pdfLoaded: false,
        fileNo: -1,
        numberOfPages: 0,
        page: -1,
        currentPage: -1,
        pageAspectRate: 0.5,
        pdfPageSize: {
          width: 0,
          height: 0,
        },
        contentContainerSize: {
          width: 0,
          height: 0,
        },
        scale: n.props.scale,
        contentOffset: {
          x: 0,
          y: 0,
        },
        newContentOffset: {
          x: 0,
          y: 0,
        },
      };
      n._flatList = null;
      n._scaleTimer = null;
      n._scrollTimer = null;
      n._mounted = false;
      return n;
    }

    module25.default(O, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this;
          this._mounted = true;
          module1932.default
            .loadFile(this.props.path, this.props.password)
            .then(function (n) {
              if (t._mounted) {
                var o = n[0],
                  s = n[1],
                  l = n[2],
                  c = n[3],
                  p = 0 === c ? 1 : l / c;
                t.setState({
                  pdfLoaded: true,
                  fileNo: o,
                  numberOfPages: s,
                  pageAspectRate: p,
                  pdfPageSize: {
                    width: l,
                    height: c,
                  },
                  centerContent: !(s > 1),
                });
                if (t.props.onLoadComplete)
                  t.props.onLoadComplete(s, t.props.path, {
                    width: l,
                    height: c,
                  });
              }
            })
            .catch(function (n) {
              t.props.onError(n);
            });
          clearTimeout(this._scrollTimer);
          this._scrollTimer = setTimeout(function () {
            if (t._flatList)
              t._flatList.scrollToIndex({
                animated: false,
                index: t.props.page < 1 ? 0 : t.props.page - 1,
              });
          }, 200);
        },
      },
      {
        key: 'componentDidUpdate',
        value: function (t) {
          var n = this;

          if (
            (this.props.scale !== this.state.scale &&
              this._onScaleChanged({
                scale: this.props.scale / this.state.scale,
                pageX: this.state.contentContainerSize.width / 2,
                pageY: this.state.contentContainerSize.height / 2,
              }),
            this.props.horizontal !== t.horizontal || this.props.page !== t.page)
          ) {
            var o = this.props.page < 1 ? 1 : this.props.page;
            o = o > this.state.numberOfPages ? this.state.numberOfPages : o;

            if (this._flatList) {
              clearTimeout(this._scrollTimer);
              this._scrollTimer = setTimeout(function () {
                n._flatList.scrollToIndex({
                  animated: false,
                  index: o - 1,
                });
              }, 200);
            }
          }
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this._mounted = false;
          clearTimeout(this._scaleTimer);
          clearTimeout(this._scrollTimer);
        },
      },
      {
        key: 'render',
        value: function () {
          return this.props.singlePage
            ? React.default.createElement(
                ReactNative.View,
                {
                  style: L.container,
                  onLayout: this._onLayout,
                },
                this.state.pdfLoaded && this._renderList()
              )
            : React.default.createElement(
                module1935.default,
                {
                  style: L.container,
                  onLayout: this._onLayout,
                  onScaleChanged: this._onScaleChanged,
                },
                this.state.pdfLoaded && this._renderList()
              );
        },
      },
    ]);
    return O;
  })(React.Component);

exports.default = x;
x.propTypes = v(
  v({}, ReactNative.ViewPropTypes),
  {},
  {
    path: PropTypes.default.string,
    password: PropTypes.default.string,
    scale: PropTypes.default.number,
    minScale: PropTypes.default.number,
    maxScale: PropTypes.default.number,
    spacing: PropTypes.default.number,
    fitPolicy: PropTypes.default.number,
    horizontal: PropTypes.default.bool,
    page: PropTypes.default.number,
    currentPage: PropTypes.default.number,
    singlePage: PropTypes.default.bool,
    onPageSingleTap: PropTypes.default.func,
    onScaleChanged: PropTypes.default.func,
  }
);
x.defaultProps = {
  path: '',
  password: '',
  scale: 1,
  minScale: 1,
  maxScale: 3,
  spacing: 10,
  style: {},
  fitPolicy: 2,
  horizontal: false,
  centerContent: false,
  page: 1,
  currentPage: -1,
  enablePaging: false,
  singlePage: false,
  onPageSingleTap: function (t, n, o) {},
  onScaleChanged: function (t) {},
};
var L = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
  },
});
