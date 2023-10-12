var ReactNative = require('react-native'),
  module474 = require('./474'),
  o = module474.width,
  c = ReactNative.StyleSheet.create({
    containerWrapper: {
      justifyContent: 'center',
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    basicContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    modalContainer: {
      width: o,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
    },
    buttonView: {
      width: o,
      padding: 8,
      borderTopWidth: 0.5,
      borderTopColor: 'lightgrey',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    bottomPicker: {
      width: o,
    },
    flagWrapper: {
      marginRight: module474.ms(10),
      maxWidth: module474.ms(35),
      alignItems: 'center',
      justifyContent: 'center',
    },
    flag: {
      height: 19,
      width: 28,
      resizeMode: 'contain',
      borderRadius: 2,
      backgroundColor: '#cecece',
    },
    text: {
      padding: 0,
      justifyContent: 'center',
    },
  });

exports.default = c;
