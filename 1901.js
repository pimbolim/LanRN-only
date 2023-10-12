var ReactNative = require('react-native'),
  module480 = require('./480').CreateStyles({
    root: {
      flex: 1,
    },
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 25,
    },
    pdf: {
      flex: 1,
      width: ReactNative.Dimensions.get('window').width,
      height: ReactNative.Dimensions.get('window').height,
    },
  });

exports.CStyles = module480;
