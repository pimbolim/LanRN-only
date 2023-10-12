var module11 = require('./11'),
  module1930 = require('./1930'),
  module1918 = require('./1918'),
  module1915 = require('./1915'),
  s = function (t) {
    if (
      ((window.location = ''),
      window.XMLHttpRequest.isRNFBPolyfill ||
        ((window.XMLHttpRequest = module1918.default),
        console.warn(
          'Use JSONStream will automatically replace window.XMLHttpRequest with ReactNativeBlobUtil.polyfill.XMLHttpRequest. You are seeing this warning because you did not replace it manually.'
        )),
      'string' == typeof t)
    )
      t = module1915.default.isFileURI(t)
        ? {
            url: 'JSONStream://' + t,
            headers: {
              noCache: true,
            },
          }
        : 'JSONStream://' + t;
    else if ('object' == typeof t) {
      var s = t.headers || {};
      if (module1915.default.isFileURI(t.url)) s.noCache = true;
      t = module11.default(t, {
        url: 'JSONStream://' + t.url,
        headers: s,
      });
    }
    return module1930.default(t);
  };

exports.default = s;
