Object.defineProperty(exports, 'FetchBlobResponse', {
  enumerable: true,
  get: function () {
    return module1924.FetchBlobResponse;
  },
});
Object.defineProperty(exports, 'ReactNativeBlobUtilConfig', {
  enumerable: true,
  get: function () {
    return R.ReactNativeBlobUtilConfig;
  },
});
Object.defineProperty(exports, 'ReactNativeBlobUtilResponseInfo', {
  enumerable: true,
  get: function () {
    return R.ReactNativeBlobUtilResponseInfo;
  },
});
Object.defineProperty(exports, 'ReactNativeBlobUtilStream', {
  enumerable: true,
  get: function () {
    return R.ReactNativeBlobUtilStream;
  },
});
Object.defineProperty(exports, 'URIUtil', {
  enumerable: true,
  get: function () {
    return module1915.default;
  },
});
Object.defineProperty(exports, 'getUUID', {
  enumerable: true,
  get: function () {
    return module1908.default;
  },
});
module1904.default.ReactNativeBlobUtilSession;
module1904.default.readStream;
module1904.default.createFile;
module1904.default.unlink;
module1904.default.exists;
module1904.default.mkdir;
module1904.default.writeStream;
module1904.default.readFile;
module1904.default.ls;
module1904.default.isDir;
module1904.default.mv;
module1904.default.cp;
module1912.default.Blob;

var ReactNative = require('react-native'),
  module1904 = require('./1904'),
  module1910 = require('./1910'),
  module1911 = require('./1911'),
  module1912 = require('./1912'),
  module1927 = require('./1927'),
  module1928 = require('./1928'),
  module1929 = require('./1929'),
  module1922 = require('./1922'),
  module1915 = require('./1915'),
  R = require(d[11]),
  module1924 = require('./1924'),
  module1908 = require('./1908'),
  N = module1904.default.session,
  y = ReactNative.NativeModules.ReactNativeBlobUtil,
  O = module1915.default.wrap;

if ('ios' === ReactNative.Platform.OS)
  ReactNative.AppState.addEventListener('change', function (t) {
    if ('active' === t) y.emitExpiredEvent(function () {});
  });
if (!(y && y.fetchBlobForm && y.fetchBlob))
  console.warn(
    'react-native-blob-util could not find valid native module.',
    'please make sure you have linked native modules using `rnpm link`,',
    'and restart RN packager or manually compile IOS/Android project.'
  );
var S = {
  fetch: module1922.fetch,
  base64: module1911.default,
  android: module1927.default,
  ios: module1928.default,
  config: module1922.config,
  session: N,
  fs: module1904.default,
  wrap: O,
  polyfill: module1912.default,
  JSONStream: module1929.default,
  MediaCollection: module1910.default,
};
exports.default = S;
