var module402 = require('./402');

exports.default = function (t) {
  var l, O;

  O = l = (function (l) {
    function P() {
      module24.default(this, P);
      return module37.default(this, module34.default(P).apply(this, arguments));
    }

    module35.default(P, l);
    module25.default(P, [
      {
        key: 'render',
        value: function () {
          var l = this.props,
            s = l.style,
            u = l.iconStyle,
            c = l.children,
            f = module53.default(l, ['style', 'iconStyle', 'children']),
            y = module574.default(f, F, 'style', 'name', 'size', 'color'),
            P = module574.default(f, N),
            k = module573.default(f, Object.keys(y), Object.keys(P), 'iconStyle', 'borderRadius', 'backgroundColor');
          y.style = u ? [C.icon, u] : C.icon;
          var O = module574.default(this.props, 'color'),
            T = module574.default(this.props, 'backgroundColor', 'borderRadius');
          return React.default.createElement(
            module568.TouchableHighlight,
            module11.default(
              {
                style: [C.touchable, T],
              },
              P,
              {
                __source: {
                  fileName: _,
                  lineNumber: 118,
                },
              }
            ),
            React.default.createElement(
              module568.View,
              module11.default(
                {
                  style: [C.container, T, s],
                },
                k,
                {
                  __source: {
                    fileName: _,
                    lineNumber: 122,
                  },
                }
              ),
              React.default.createElement(
                t,
                module11.default({}, y, {
                  __source: {
                    fileName: _,
                    lineNumber: 123,
                  },
                })
              ),
              module572.default(c)
                ? React.default.createElement(
                    module568.Text,
                    {
                      style: [C.text, O],
                      __source: {
                        fileName: _,
                        lineNumber: 125,
                      },
                    },
                    c
                  )
                : c
            )
          );
        },
      },
    ]);
    return P;
  })(React.PureComponent);

  l.propTypes = {
    backgroundColor: PropTypes.default.oneOfType([PropTypes.default.string, PropTypes.default.number]),
    borderRadius: PropTypes.default.number,
    color: PropTypes.default.any,
    size: PropTypes.default.number,
    iconStyle: PropTypes.default.any,
    style: PropTypes.default.any,
    children: PropTypes.default.node,
  };
  l.defaultProps = {
    backgroundColor: k,
    borderRadius: 5,
    color: 'white',
    size: 20,
  };
  return O;
};

var module11 = require('./11'),
  module53 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
  module25 = require('./25'),
  module37 = require('./37'),
  module34 = require('./34'),
  module35 = require('./35'),
  module572 = require('./572'),
  module573 = require('./573'),
  module574 = require('./574'),
  React = module402(require('react')),
  PropTypes = require('prop-types'),
  module568 = require('./568'),
  _ = '/Users/joelarvidsson/Code/react-native-vector-icons/lib/icon-button.js',
  C = module568.StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 8,
    },
    touchable: {
      overflow: 'hidden',
    },
    icon: {
      marginRight: 10,
    },
    text: {
      fontWeight: '600',
      backgroundColor: 'transparent',
    },
  }),
  k = '#007AFF',
  F = ['ellipsizeMode', 'numberOfLines', 'textBreakStrategy', 'selectable', 'suppressHighlighting', 'allowFontScaling', 'adjustsFontSizeToFit', 'minimumFontScale'],
  N = [
    'accessible',
    'accessibilityLabel',
    'accessibilityHint',
    'accessibilityComponentType',
    'accessibilityRole',
    'accessibilityStates',
    'accessibilityTraits',
    'onFocus',
    'onBlur',
    'disabled',
    'onPress',
    'onPressIn',
    'onPressOut',
    'onLayout',
    'onLongPress',
    'nativeID',
    'testID',
    'delayPressIn',
    'delayPressOut',
    'delayLongPress',
    'activeOpacity',
    'underlayColor',
    'selectionColor',
    'onShowUnderlay',
    'onHideUnderlay',
    'hasTVPreferredFocus',
    'tvParallaxProperties',
  ];
