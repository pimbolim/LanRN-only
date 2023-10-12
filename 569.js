exports.default = function () {
  if (!n) {
    if ('android' === module568.Platform.OS)
      throw new Error('RNVectorIconsModule not available, did you properly integrate the module? Try running `react-native link react-native-vector-icons` and recompiling.');
    throw new Error(
      'RNVectorIconsManager not available, did you add the library to your project and link with libRNVectorIcons.a? Try running `react-native link react-native-vector-icons` and recompiling.'
    );
  }
};

var module568 = require('./568'),
  n = module568.NativeModules.RNVectorIconsManager || module568.NativeModules.RNVectorIconsModule;
