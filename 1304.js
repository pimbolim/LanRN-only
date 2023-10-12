var ReactNative = require('react-native'),
  module474 = require('./474'),
  n = ReactNative.StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainer: {
      paddingTop: module474.ms(30),
      paddingBottom: module474.ms(30),
      alignItems: 'center',
    },
    form: {
      width: '100%',
      marginTop: module474.ms(20),
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    smallInputContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    smallInputWrapper: {
      width: '45%',
    },
    inputContainer: {
      width: '100%',
      marginTop: module474.ms(10),
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
    },
    hideCardInputContainer: {
      borderWidth: 1,
      borderRadius: module474.ms(5),
      borderColor: module474.Color.lightGray,
      width: '100%',
      marginTop: module474.ms(10),
      paddingHorizontal: module474.ms(7.5),
    },
    input: {
      height: module474.ms(35),
      color: 'grey',
    },
    inputLabel: {
      color: 'black',
    },
    baseInputStyle: {
      color: 'white',
    },
    icon: {
      color: 'gray',
      fontSize: module474.ms(24),
    },
  });

exports.default = n;
