var ReactNative = require('react-native'),
  n = ReactNative.StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    input: {
      top: 2,
      padding: 0,
      paddingTop: 0,
      margin: 0,
      flex: 1,
      textAlign: ReactNative.I18nManager.isRTL ? 'right' : 'left',
      includeFontPadding: false,
      textAlignVertical: 'top',
    },
    helperContainer: {
      minHeight: 8,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
    },
    row: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    stack: {
      flex: 1,
      alignSelf: 'stretch',
    },
    flex: {
      flex: 1,
    },
  });

exports.default = n;
