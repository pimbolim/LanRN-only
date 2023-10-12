var ReactNative = require('react-native'),
  o = ReactNative.Dimensions.get('window'),
  n = o.height,
  l = o.width,
  c = ReactNative.StyleSheet.create({
    overlayStyle: {
      width: l,
      height: n,
      backgroundColor: 'rgba(0,0,0,0.7)',
    },
    optionContainer: {
      borderRadius: 5,
      width: 0.8 * l,
      height: 400,
      backgroundColor: 'rgba(255,255,255,0.8)',
      left: 0.1 * l,
      top: (n - 400) / 2,
    },
    cancelContainer: {
      left: 0.1 * l,
      top: (n - 400) / 2 + 10,
    },
    selectStyle: {
      flex: 1,
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 8,
      borderRadius: 5,
    },
    selectTextStyle: {
      textAlign: 'center',
      color: '#333',
      fontSize: 16,
    },
    cancelStyle: {
      borderRadius: 5,
      width: 0.8 * l,
      backgroundColor: 'rgba(255,255,255,0.8)',
      padding: 8,
    },
    cancelTextStyle: {
      textAlign: 'center',
      color: '#333',
      fontSize: 16,
    },
    optionStyle: {
      padding: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    optionTextStyle: {
      textAlign: 'center',
      fontSize: 16,
      color: 'rgba(0,118,255,0.9)',
    },
    sectionStyle: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    sectionTextStyle: {
      textAlign: 'center',
      fontSize: 16,
    },
  });

exports.default = c;
