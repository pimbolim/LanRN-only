var o = {};

var module47 = require('./47'),
  module24 = require('./24'),
  module25 = require('./25'),
  module1512 = require('./1512'),
  ReactNative = require('react-native'),
  s = require(d[6]);

function y(t, o) {
  var n = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (o)
      l = l.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      });
    n.push.apply(n, l);
  }

  return n;
}

function b(t) {
  for (var o = 1; o < arguments.length; o++) {
    var l = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      y(Object(l), true).forEach(function (o) {
        module47.default(t, o, l[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      y(Object(l)).forEach(function (o) {
        Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(l, o));
      });
  }

  return t;
}

Object.keys(s).forEach(function (t) {
  if ('default' !== t && '__esModule' !== t)
    Object.prototype.hasOwnProperty.call(o, t) ||
      (t in exports && exports[t] === s[t]) ||
      Object.defineProperty(exports, t, {
        enumerable: true,
        get: function () {
          return s[t];
        },
      });
});
var p = {
    title: 'Select a Photo',
    cancelButtonTitle: 'Cancel',
    takePhotoButtonTitle: 'Take Photo\u2026',
    chooseFromLibraryButtonTitle: 'Choose from Library\u2026',
    quality: 1,
    allowsEditing: false,
    permissionDenied: {
      title: 'Permission denied',
      text: 'To be able to take pictures with your camera and choose images from your library.',
      reTryTitle: 're-try',
      okTitle: "I'm sure",
    },
    tintColor: '',
  },
  h = new ((function () {
    function t() {
      module24.default(this, t);
    }

    module25.default(t, [
      {
        key: 'showImagePicker',
        value: function (t, o) {
          if ('function' == typeof t)
            return module1512.default.showImagePicker(
              b(
                b({}, p),
                {},
                {
                  tintColor: ReactNative.processColor(p.tintColor),
                }
              ),
              t
            );
          if (null == o) throw new Error('callback cannot be undefined');
          return module1512.default.showImagePicker(
            b(
              b(b({}, p), t),
              {},
              {
                tintColor: ReactNative.processColor(t.tintColor || p.tintColor),
              }
            ),
            o
          );
        },
      },
      {
        key: 'launchCamera',
        value: function (t, o) {
          return module1512.default.launchCamera(
            b(
              b(b({}, p), t),
              {},
              {
                tintColor: ReactNative.processColor(t.tintColor || p.tintColor),
              }
            ),
            o
          );
        },
      },
      {
        key: 'launchImageLibrary',
        value: function (t, o) {
          return module1512.default.launchImageLibrary(
            b(
              b(b({}, p), t),
              {},
              {
                tintColor: ReactNative.processColor(t.tintColor || p.tintColor),
              }
            ),
            o
          );
        },
      },
    ]);
    return t;
  })())();
exports.default = h;
