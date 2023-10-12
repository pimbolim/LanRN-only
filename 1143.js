var ReactNative = require('react-native'),
  t = ReactNative.Dimensions.get('window').width,
  n = ReactNative.StyleSheet.create({
    container: {
      padding: 10,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      backgroundColor: 'white',
    },
    indicator: {
      alignSelf: 'center',
      width: (7.5 * t) / 100,
      height: 4,
      borderRadius: 4,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
  });

exports.styles = n;
