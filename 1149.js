var ReactNative = require('react-native'),
  module1150 = require('./1150'),
  o = ReactNative.Dimensions.get('window').height;

exports.normalizeSnapPoints = function (n, u) {
  return n.map(function (n) {
    module1150.validateSnapPoint(n);
    return 'number' == typeof n ? n : (Number(n.split('%')[0]) * (o - u)) / 100;
  });
};
