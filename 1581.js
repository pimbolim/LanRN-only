var React = require('react'),
  ReactNative = require('react-native'),
  l = ReactNative.StyleSheet.create({
    container: {
      width: 120,
      height: 20,
      backgroundColor: '#ffbcbc',
      borderWidth: 1,
      borderColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#333333',
      margin: 5,
      fontSize: 10,
    },
  }),
  c = function () {
    return React.default.createElement(
      ReactNative.View,
      {
        style: l.container,
      },
      React.default.createElement(
        ReactNative.Text,
        {
          style: l.text,
        },
        'CardIOView is not supported on this platform!'
      )
    );
  };

exports.default = c;
