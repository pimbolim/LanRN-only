var module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module11 = require('./11'),
  module47 = require('./47'),
  module20 = require('./20'),
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
    var s = v(o);
    if (s && s.has(t)) return s.get(t);
    var n = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var p = l ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (p && (p.get || p.set)) Object.defineProperty(n, u, p);
        else n[u] = t[u];
      }

    n.default = t;
    if (s) s.set(t, n);
    return n;
  })(require('react')),
  ReactNative = require('react-native'),
  module1318 = require('./1318'),
  module1323 = require('./1323'),
  R = ['onFocus', 'clearButtonMode'];

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var o = new WeakMap(),
    s = new WeakMap();
  return (v = function (t) {
    return t ? s : o;
  })(t);
}

function S(t, o) {
  var s = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    if (o)
      n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      });
    s.push.apply(s, n);
  }

  return s;
}

function x(t) {
  for (var o = 1; o < arguments.length; o++) {
    var s = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      S(Object(s), true).forEach(function (o) {
        module47.default(t, o, s[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(s));
    else
      S(Object(s)).forEach(function (o) {
        Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(s, o));
      });
  }

  return t;
}

function L() {
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

var F = ReactNative.Dimensions.get('window'),
  C = {
    container: {
      flex: 1,
    },
    textInputContainer: {
      backgroundColor: '#C9C9CE',
      height: 44,
      borderTopColor: '#7e7e7e',
      borderBottomColor: '#b5b5b5',
      borderTopWidth: 1 / ReactNative.PixelRatio.get(),
      borderBottomWidth: 1 / ReactNative.PixelRatio.get(),
      flexDirection: 'row',
    },
    textInput: {
      backgroundColor: '#FFFFFF',
      height: 28,
      borderRadius: 5,
      paddingTop: 4.5,
      paddingBottom: 4.5,
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 7.5,
      marginLeft: 8,
      marginRight: 8,
      fontSize: 15,
      flex: 1,
    },
    poweredContainer: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
    },
    powered: {},
    listView: {
      flex: 1,
    },
    row: {
      padding: 13,
      height: 44,
      flexDirection: 'row',
    },
    separator: {
      height: ReactNative.StyleSheet.hairlineWidth,
      backgroundColor: '#c8c7cc',
    },
    description: {},
    loader: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      height: 20,
    },
    androidLoader: {
      marginRight: -15,
    },
  },
  D = (function (t) {
    module35.default(D, t);

    var module47 = D,
      v = L(),
      S = function () {
        var t,
          o = module34.default(module47);

        if (v) {
          var s = module34.default(this).constructor;
          t = Reflect.construct(o, arguments, s);
        } else t = o.apply(this, arguments);

        return module37.default(this, t);
      };

    function D(t) {
      var o;
      module24.default(this, D);
      (o = S.call(this, t))._isMounted = false;
      o._results = [];
      o._requests = [];

      o.getInitialState = function () {
        return {
          text: o.props.getDefaultValue(),
          dataSource: o.buildRowsFromResults([]),
          listViewDisplayed: 'auto' !== o.props.listViewDisplayed && o.props.listViewDisplayed,
        };
      };

      o.setAddressText = function (t) {
        return o.setState({
          text: t,
        });
      };

      o.getAddressText = function () {
        return o.state.text;
      };

      o.buildRowsFromResults = function (t) {
        var module11 = [];

        if (!(0 !== t.length && true !== o.props.predefinedPlacesAlwaysVisible)) {
          module11 = module20.default(o.props.predefinedPlaces);
          if (true === o.props.currentLocation)
            module11.unshift({
              description: o.props.currentLocationLabel,
              isCurrentLocation: true,
            });
        }

        module11 = module11.map(function (t) {
          return x(
            x({}, t),
            {},
            {
              isPredefinedPlace: true,
            }
          );
        });
        return [].concat(module20.default(module11), module20.default(t));
      };

      o._abortRequests = function () {
        o._requests.map(function (t) {
          return t.abort();
        });

        o._requests = [];
      };

      o.triggerFocus = function () {
        if (o.refs.textInput) o.refs.textInput.focus();
      };

      o.triggerBlur = function () {
        if (o.refs.textInput) o.refs.textInput.blur();
      };

      o.getCurrentLocation = function () {
        var t = {
          enableHighAccuracy: false,
          timeout: 2e4,
          maximumAge: 1e3,
        };
        if (o.props.enableHighAccuracyLocation && 'android' === ReactNative.Platform.OS)
          t = {
            enableHighAccuracy: true,
            timeout: 2e4,
          };
        navigator.geolocation.getCurrentPosition(
          function (t) {
            if ('None' === o.props.nearbyPlacesAPI) {
              var s = {
                description: o.props.currentLocationLabel,
                geometry: {
                  location: {
                    lat: t.coords.latitude,
                    lng: t.coords.longitude,
                  },
                },
              };

              o._disableRowLoaders();

              o.props.onPress(s, s);
            } else o._requestNearby(t.coords.latitude, t.coords.longitude);
          },
          function (t) {
            o._disableRowLoaders();
          },
          t
        );
      };

      o._onPress = function (t) {
        if (true !== t.isPredefinedPlace && true === o.props.fetchDetails) {
          if (true === t.isLoading) return;
          ReactNative.Keyboard.dismiss();

          o._abortRequests();

          o._enableRowLoader(t);

          var s = new XMLHttpRequest();

          o._requests.push(s);

          s.timeout = o.props.timeout;
          s.ontimeout = o.props.onTimeout;

          s.onreadystatechange = function () {
            if (4 === s.readyState)
              if (200 === s.status) {
                var n = JSON.parse(s.responseText);

                if ('OK' === n.status) {
                  if (true === o._isMounted) {
                    var l = n.result;
                    delete t.isLoading;
                    o.props.onPress(t, l);
                  }
                } else {
                  o._disableRowLoaders();

                  if (o.props.autoFillOnNotFound) {
                    o.setState({
                      text: o._renderDescription(t),
                    });
                    delete t.isLoading;
                  }

                  if (o.props.onNotFound) o.props.onNotFound(n);
                  else console.warn('google places autocomplete: ' + n.status);
                }
              } else {
                o._disableRowLoaders();

                if (o.props.onFail) o.props.onFail('request could not be completed or has been aborted');
                else console.warn('google places autocomplete: request could not be completed or has been aborted');
              }
          };

          var n = module1318.default.stringify(
            x(
              {
                key: o.props.query.key,
                placeid: t.place_id,
                language: o.props.query.language,
              },
              o.props.GooglePlacesDetailsQuery
            )
          );
          s.open('GET', 'https://maps.googleapis.com/maps/api/place/details/json?' + n);
          if (null !== o.props.query.origin) s.setRequestHeader('Referer', o.props.query.origin);
          s.send();
        } else if (true === t.isCurrentLocation) {
          o._enableRowLoader(t);

          o.setState({
            text: o._renderDescription(t),
          });
          o.triggerBlur();
          delete t.isLoading;
          o.getCurrentLocation();
        } else {
          o.setState({
            text: o._renderDescription(t),
          });

          o._onBlur();

          delete t.isLoading;

          var l = o._getPredefinedPlace(t);

          o.props.onPress(l, l);
        }
      };

      o._enableRowLoader = function (t) {
        for (var s = o.buildRowsFromResults(o._results), n = 0; n < s.length; n += 1)
          if (s[n].place_id === t.place_id || (true === s[n].isCurrentLocation && true === t.isCurrentLocation)) {
            s[n].isLoading = true;
            o.setState({
              dataSource: s,
            });
            break;
          }
      };

      o._disableRowLoaders = function () {
        if (true === o._isMounted) {
          for (var t = 0; t < o._results.length; t += 1) true === o._results[t].isLoading && (o._results[t].isLoading = false);

          o.setState({
            dataSource: o.buildRowsFromResults(o._results),
          });
        }
      };

      o._getPredefinedPlace = function (t) {
        if (true !== t.isPredefinedPlace) return t;

        for (var s = 0; s < o.props.predefinedPlaces.length; s += 1) if (o.props.predefinedPlaces[s].description === t.description) return o.props.predefinedPlaces[s];

        return t;
      };

      o._filterResultsByTypes = function (t, o) {
        if (0 === o.length) return t;

        for (var s = [], n = 0; n < t.length; n += 1) {
          for (var l = false, u = 0; u < o.length; u += 1)
            if (-1 !== t[n].types.indexOf(o[u])) {
              l = true;
              break;
            }

          if (true === l) s.push(t[n]);
        }

        return s;
      };

      o._requestNearby = function (t, s) {
        if ((o._abortRequests(), undefined !== t && undefined !== s && null !== t && null !== s)) {
          var n = new XMLHttpRequest();

          o._requests.push(n);

          n.timeout = o.props.timeout;
          n.ontimeout = o.props.onTimeout;

          n.onreadystatechange = function () {
            if (4 === n.readyState && 200 === n.status) {
              var t = JSON.parse(n.responseText);

              if ((o._disableRowLoaders(), undefined !== t.results && true === o._isMounted)) {
                var s = [];
                s = 'GoogleReverseGeocoding' === o.props.nearbyPlacesAPI ? o._filterResultsByTypes(t.results, o.props.filterReverseGeocodingByTypes) : t.results;
                o.setState({
                  dataSource: o.buildRowsFromResults(s),
                });
              }

              if (undefined !== t.error_message) o.props.onFail ? o.props.onFail(t.error_message) : console.warn('google places autocomplete: ' + t.error_message);
            }
          };

          var l = '';
          l =
            'GoogleReverseGeocoding' === o.props.nearbyPlacesAPI
              ? 'https://maps.googleapis.com/maps/api/geocode/json?' +
                module1318.default.stringify(
                  x(
                    {
                      latlng: t + ',' + s,
                      key: o.props.query.key,
                    },
                    o.props.GoogleReverseGeocodingQuery
                  )
                )
              : 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?' +
                module1318.default.stringify(
                  x(
                    {
                      location: t + ',' + s,
                      key: o.props.query.key,
                    },
                    o.props.GooglePlacesSearchQuery
                  )
                );
          n.open('GET', l);
          if (null !== o.props.query.origin) n.setRequestHeader('Referer', o.props.query.origin);
          n.send();
        } else {
          o._results = [];
          o.setState({
            dataSource: o.buildRowsFromResults([]),
          });
        }
      };

      o._request = function (t) {
        if ((o._abortRequests(), t.length >= o.props.minLength)) {
          var s = new XMLHttpRequest();

          o._requests.push(s);

          s.timeout = o.props.timeout;
          s.ontimeout = o.props.onTimeout;

          s.onreadystatechange = function () {
            if (4 === s.readyState && 200 === s.status) {
              var t = JSON.parse(s.responseText);

              if (undefined !== t.predictions && true === o._isMounted) {
                var n = t.predictions;
                if ('GoogleReverseGeocoding' === o.props.nearbyPlacesAPI) n = o._filterResultsByTypes(t.predictions, o.props.filterReverseGeocodingByTypes);
                o._results = n;
                o.setState({
                  dataSource: o.buildRowsFromResults(n),
                });
              }

              if (undefined !== t.error_message) o.props.onFail ? o.props.onFail(t.error_message) : console.warn('google places autocomplete: ' + t.error_message);
            }
          };

          if (o.props.preProcess) t = o.props.preProcess(t);
          s.open('GET', 'https://maps.googleapis.com/maps/api/place/autocomplete/json?&input=' + encodeURIComponent(t) + '&' + module1318.default.stringify(o.props.query));
          if (null !== o.props.query.origin) s.setRequestHeader('Referer', o.props.query.origin);
          s.send();
        } else {
          o._results = [];
          o.setState({
            dataSource: o.buildRowsFromResults([]),
          });
        }
      };

      o._onChangeText = function (t) {
        o._request(t);

        o.setState({
          text: t,
          listViewDisplayed: o._isMounted || o.props.autoFocus,
        });
      };

      o._handleChangeText = function (t) {
        o._onChangeText(t);

        var s = o.props && o.props.textInputProps && o.props.textInputProps.onChangeText;
        if (s) s(t);
      };

      o._renderRowData = function (t) {
        return o.props.renderRow
          ? o.props.renderRow(t)
          : React.default.createElement(
              ReactNative.Text,
              {
                style: [o.props.suppressDefaultStyles ? {} : C.description, o.props.styles.description, t.isPredefinedPlace ? o.props.styles.predefinedPlacesDescription : {}],
                numberOfLines: o.props.numberOfLines,
              },
              o._renderDescription(t)
            );
      };

      o._renderDescription = function (t) {
        return o.props.renderDescription ? o.props.renderDescription(t) : t.description || t.formatted_address || t.name;
      };

      o._renderLoader = function (t) {
        return true === t.isLoading
          ? React.default.createElement(
              ReactNative.View,
              {
                style: [o.props.suppressDefaultStyles ? {} : C.loader, o.props.styles.loader],
              },
              o._getRowLoader()
            )
          : null;
      };

      o._renderRow = function () {
        if (arguments.length > 1) arguments[1];
        if (arguments.length > 2) arguments[2];
        var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {},
          s = o.props.renderItem;
        return 'function' == typeof s
          ? s(t)
          : React.default.createElement(
              ReactNative.ScrollView,
              {
                style: {
                  flex: 1,
                },
                scrollEnabled: o.props.isRowScrollable,
                keyboardShouldPersistTaps: o.props.keyboardShouldPersistTaps,
                horizontal: true,
                showsHorizontalScrollIndicator: false,
                showsVerticalScrollIndicator: false,
              },
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  style: {
                    width: F.width,
                  },
                  onPress: function () {
                    return o._onPress(t);
                  },
                  underlayColor: o.props.listUnderlayColor || '#c8c7cc',
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: [o.props.suppressDefaultStyles ? {} : C.row, o.props.styles.row, t.isPredefinedPlace ? o.props.styles.specialItemRow : {}],
                  },
                  o._renderRowData(t)
                )
              )
            );
      };

      o._renderSeparator = function (t, s) {
        return s === o.state.dataSource.length - 1
          ? null
          : React.default.createElement(ReactNative.View, {
              key: t + '-' + s,
              style: [o.props.suppressDefaultStyles ? {} : C.separator, o.props.styles.separator],
            });
      };

      o._onBlur = function () {
        o.triggerBlur();
        o.setState({
          listViewDisplayed: false,
        });
      };

      o._onFocus = function () {
        var t = o.props.textInputProps.onFocus;
        if ('function' == typeof t) t();
        o.setState({
          listViewDisplayed: true,
        });
      };

      o._shouldShowPoweredLogo = function () {
        if (!o.props.enablePoweredByContainer || 0 === o.state.dataSource.length) return false;

        for (var t = 0; t < o.state.dataSource.length; t += 1) {
          var s = o.state.dataSource[t];
          if (!s.hasOwnProperty('isCurrentLocation') && !s.hasOwnProperty('isPredefinedPlace')) return true;
        }

        return false;
      };

      o._renderLeftButton = function () {
        if (o.props.renderLeftButton) return o.props.renderLeftButton();
      };

      o._renderRightButton = function () {
        if (o.props.renderRightButton) return o.props.renderRightButton();
      };

      o._getFlatList = function () {
        return ('' === o.state.text && !o.props.predefinedPlaces.length && true !== o.props.currentLocation) || true !== o.state.listViewDisplayed
          ? null
          : React.default.createElement(
              ReactNative.FlatList,
              module11.default(
                {
                  scrollEnabled: !o.props.disableScroll,
                  style: [o.props.suppressDefaultStyles ? {} : C.listView, o.props.styles.listView],
                  data: o.state.dataSource,
                  keyExtractor: function () {
                    return Math.random().toString(36).substr(2, 10);
                  },
                  extraData: [o.state.dataSource, o.props],
                  ItemSeparatorComponent: o._renderSeparator,
                  renderItem: function (t) {
                    return o._renderRow(t.item);
                  },
                  ListHeaderComponent: o.props.renderHeaderComponent && o.props.renderHeaderComponent(o.state.text),
                },
                o.props
              )
            );
      };

      o.state = o.getInitialState.call(module39.default(o));
      return o;
    }

    module25.default(D, [
      {
        key: 'UNSAFE_componentWillMount',
        value: function () {
          this._request = this.props.debounce ? module1323.default(this._request, this.props.debounce) : this._request;
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          this._handleChangeText(this.state.text);

          this._isMounted = true;
        },
      },
      {
        key: 'UNSAFE_componentWillReceiveProps',
        value: function (t) {
          var o = true;
          if ('auto' !== t.listViewDisplayed) o = t.listViewDisplayed;
          if (undefined !== t.text && this.state.text !== t.text)
            this.setState(
              {
                listViewDisplayed: o,
              },
              this._handleChangeText(t.text)
            );
          else
            this.setState({
              listViewDisplayed: o,
            });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this._abortRequests();

          this._isMounted = false;
        },
      },
      {
        key: 'clearText',
        value: function () {
          this.setState({
            text: '',
          });
        },
      },
      {
        key: '_getRowLoader',
        value: function () {
          return React.default.createElement(ReactNative.ActivityIndicator, {
            animating: true,
            size: 'small',
          });
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props.textInputProps,
            n = t.clearButtonMode,
            l = module53.default(t, R);
          return React.default.createElement(
            ReactNative.View,
            {
              style: [this.props.suppressDefaultStyles ? {} : C.container, this.props.styles.container],
              pointerEvents: 'box-none',
            },
            !this.props.textInputHide &&
              React.default.createElement(
                ReactNative.View,
                {
                  style: [this.props.suppressDefaultStyles ? {} : C.textInputContainer, this.props.styles.textInputContainer],
                },
                this._renderLeftButton(),
                React.default.createElement(
                  ReactNative.TextInput,
                  module11.default(
                    {
                      ref: 'textInput',
                      editable: this.props.editable,
                      returnKeyType: this.props.returnKeyType,
                      keyboardAppearance: this.props.keyboardAppearance,
                      autoFocus: this.props.autoFocus,
                      style: [this.props.suppressDefaultStyles ? {} : C.textInput, this.props.styles.textInput],
                      value: this.state.text,
                      placeholder: this.props.placeholder,
                      onSubmitEditing: this.props.onSubmitEditing,
                      placeholderTextColor: this.props.placeholderTextColor,
                      onFocus: this._onFocus,
                      onBlur: this._onBlur,
                      underlineColorAndroid: this.props.underlineColorAndroid,
                      clearButtonMode: n || 'while-editing',
                    },
                    l,
                    {
                      onChangeText: this._handleChangeText,
                    }
                  )
                ),
                this._renderRightButton()
              ),
            this._getFlatList(),
            this.props.children
          );
        },
      },
    ]);
    return D;
  })(React.Component);

exports.GooglePlacesAutocomplete = D;
D.defaultProps = {
  placeholder: 'Search',
  placeholderTextColor: '#A8A8A8',
  isRowScrollable: true,
  underlineColorAndroid: 'transparent',
  returnKeyType: 'default',
  keyboardAppearance: 'default',
  onPress: function () {},
  onNotFound: function () {},
  onFail: function () {},
  minLength: 0,
  fetchDetails: false,
  autoFocus: false,
  autoFillOnNotFound: false,
  keyboardShouldPersistTaps: 'always',
  getDefaultValue: function () {
    return '';
  },
  timeout: 2e4,
  onTimeout: function () {
    return console.warn('google places autocomplete: request timeout');
  },
  query: {
    key: 'missing api key',
    language: 'en',
    types: 'geocode',
  },
  GoogleReverseGeocodingQuery: {},
  GooglePlacesDetailsQuery: {},
  GooglePlacesSearchQuery: {
    rankby: 'distance',
    type: 'restaurant',
  },
  styles: {},
  textInputProps: {},
  enablePoweredByContainer: true,
  predefinedPlaces: [],
  currentLocation: false,
  currentLocationLabel: 'Current location',
  nearbyPlacesAPI: 'GooglePlacesSearch',
  enableHighAccuracyLocation: true,
  filterReverseGeocodingByTypes: [],
  predefinedPlacesAlwaysVisible: false,
  enableEmptySections: true,
  listViewDisplayed: 'auto',
  debounce: 0,
  textInputHide: false,
  suppressDefaultStyles: false,
  numberOfLines: 1,
  onSubmitEditing: function () {},
  editable: true,
};

exports.create = function () {
  var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
  return React.default.createClass({
    render: function () {
      return React.default.createElement(
        D,
        module11.default(
          {
            ref: 'GooglePlacesAutocomplete',
          },
          t
        )
      );
    },
  });
};
