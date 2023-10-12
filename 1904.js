require('./1909');

var ReactNative = require('react-native'),
  module1905 = require('./1905'),
  module1906 = require('./1906'),
  module1907 = require('./1907'),
  f = ReactNative.NativeModules.ReactNativeBlobUtil,
  c = {
    DocumentDir: f.DocumentDir,
    CacheDir: f.CacheDir,
    PictureDir: f.PictureDir,
    MusicDir: f.MusicDir,
    MovieDir: f.MovieDir,
    DownloadDir: f.DownloadDir,
    DCIMDir: f.DCIMDir,
    SDCardDir: f.SDCardDir,
    SDCardApplicationDir: f.SDCardApplicationDir,
    MainBundleDir: f.MainBundleDir,
    LibraryDir: f.LibraryDir,
    ApplicationSupportDir: f.ApplicationSupportDir,
  };

function p(t, n) {
  n.code = t;
  return n;
}

function E(t) {
  return new Promise(function (n, o) {
    if ('string' != typeof t) return o(p('EINVAL', new TypeError('Missing argument "path" ')));
    f.stat(t, function (t, s) {
      if (t) o(new Error(t));
      else {
        if (s) {
          s.size = parseInt(s.size);
          s.lastModified = parseInt(s.lastModified);
        }

        n(s);
      }
    });
  });
}

var l = {
  ReactNativeBlobUtilSession: module1905.default,
  unlink: function (t) {
    return new Promise(function (n, o) {
      if ('string' != typeof t) return o(p('EINVAL', new TypeError('Missing argument "path" ')));
      f.unlink(t, function (t) {
        if (t) o(p('EUNSPECIFIED', new Error(t)));
        else n();
      });
    });
  },
  mkdir: function (t) {
    return 'string' != typeof t ? Promise.reject(p('EINVAL', new TypeError('Missing argument "path" '))) : f.mkdir(t);
  },
  session: function (t) {
    if (module1905.default.getSession(t)) return new module1905.default(t);
    else {
      module1905.default.setSession(t, []);
      return new module1905.default(t, []);
    }
  },
  ls: function (t) {
    return 'string' != typeof t ? Promise.reject(p('EINVAL', new TypeError('Missing argument "path" '))) : f.ls(t);
  },
  readStream: function (t) {
    var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 'utf8',
      o = arguments.length > 2 ? arguments[2] : undefined,
      s = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : 10;
    return 'string' != typeof t ? Promise.reject(p('EINVAL', new TypeError('Missing argument "path" '))) : Promise.resolve(new module1907.default(t, n, o, s));
  },
  mv: function (t, n) {
    return new Promise(function (o, s) {
      if ('string' != typeof t || 'string' != typeof n) return s(p('EINVAL', new TypeError('Missing argument "path" and/or "destination"')));
      f.mv(t, n, function (t, n) {
        if (t) s(p('EUNSPECIFIED', new Error(t)));
        else o(n);
      });
    });
  },
  cp: function (t, n) {
    return new Promise(function (o, s) {
      if ('string' != typeof t || 'string' != typeof n) return s(p('EINVAL', new TypeError('Missing argument "path" and/or "destination"')));
      f.cp(t, n, function (t, n) {
        if (t) s(p('EUNSPECIFIED', new Error(t)));
        else o(n);
      });
    });
  },
  writeStream: function (t) {
    var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 'utf8',
      o = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
    return 'string' != typeof t
      ? Promise.reject(p('EINVAL', new TypeError('Missing argument "path" ')))
      : new Promise(function (u, c) {
          f.writeStream(t, n, o, function (t, o, f) {
            if (o) {
              var p = new Error(o);
              p.code = t;
              c(p);
            } else u(new module1906.default(f, n));
          });
        });
  },
  writeFile: function (t, n) {
    var o = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : 'utf8';
    return 'string' != typeof t
      ? Promise.reject(p('EINVAL', new TypeError('Missing argument "path" ')))
      : 'ascii' === o.toLocaleLowerCase()
      ? Array.isArray(n)
        ? f.writeFileArray(t, n, false)
        : Promise.reject(p('EINVAL', new TypeError('"data" must be an Array when encoding is "ascii"')))
      : 'string' != typeof n
      ? Promise.reject(p('EINVAL', new TypeError('"data" must be a String when encoding is "utf8" or "base64", but it is "' + typeof n + '"')))
      : f.writeFile(t, o, n, false, false);
  },
  writeFileWithTransform: function (t, n) {
    var o = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : 'utf8';
    return 'string' != typeof t
      ? Promise.reject(p('EINVAL', new TypeError('Missing argument "path" ')))
      : 'ascii' === o.toLocaleLowerCase()
      ? Promise.reject(p('EINVAL', new TypeError('ascii is not supported for converted files')))
      : 'string' != typeof n
      ? Promise.reject(p('EINVAL', new TypeError('"data" must be a String when encoding is "utf8" or "base64", but it is "' + typeof n + '"')))
      : f.writeFile(t, o, n, true, false);
  },
  readFileWithTransform: function (t) {
    var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 'utf8';
    return 'string' != typeof t ? Promise.reject(p('EINVAL', new TypeError('Missing argument "path" '))) : f.readFile(t, n, true);
  },
  appendFile: function (t, n) {
    var o = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : 'utf8';
    return 'string' != typeof t
      ? Promise.reject(p('EINVAL', new TypeError('Missing argument "path" ')))
      : 'ascii' === o.toLocaleLowerCase()
      ? Array.isArray(n)
        ? f.writeFileArray(t, n, true)
        : Promise.reject(p('EINVAL', new TypeError('`data` of ASCII file must be an array with 0..255 numbers')))
      : 'string' != typeof n
      ? Promise.reject(p('EINVAL'), new TypeError('"data" must be a String when encoding is "utf8" or "base64", but it is "' + typeof n + '"'))
      : f.writeFile(t, o, n, false, true);
  },
  pathForAppGroup: function (t) {
    return f.pathForAppGroup(t);
  },
  syncPathAppGroup: function (t) {
    return 'ios' === ReactNative.Platform.OS ? f.syncPathAppGroup(t) : '';
  },
  readFile: function (t) {
    var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 'utf8';
    return 'string' != typeof t ? Promise.reject(p('EINVAL', new TypeError('Missing argument "path" '))) : f.readFile(t, n, false);
  },
  hash: function (t, n) {
    return 'string' != typeof t || 'string' != typeof n ? Promise.reject(p('EINVAL', new TypeError('Missing argument "path" and/or "algorithm"'))) : f.hash(t, n);
  },
  exists: function (t) {
    return new Promise(function (n, o) {
      if ('string' != typeof t) return o(p('EINVAL', new TypeError('Missing argument "path" ')));

      try {
        f.exists(t, function (t) {
          n(t);
        });
      } catch (t) {
        o(p('EUNSPECIFIED', new Error(t)));
      }
    });
  },
  createFile: function (t, n) {
    var o = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : 'utf8';
    return 'ascii' === o.toLowerCase()
      ? Array.isArray(n)
        ? f.createFileASCII(t, n)
        : Promise.reject(p('EINVAL', new TypeError('`data` of ASCII file must be an array with 0..255 numbers')))
      : f.createFile(t, n, o);
  },
  isDir: function (t) {
    return new Promise(function (n, o) {
      if ('string' != typeof t) return o(p('EINVAL', new TypeError('Missing argument "path" ')));

      try {
        f.exists(t, function (t, o) {
          n(o);
        });
      } catch (t) {
        o(p('EUNSPECIFIED', new Error(t)));
      }
    });
  },
  stat: E,
  lstat: function (t) {
    return new Promise(function (n, o) {
      if ('string' != typeof t) return o(p('EINVAL', new TypeError('Missing argument "path" ')));
      f.lstat(t, function (t, s) {
        if (t) o(p('EUNSPECIFIED', new Error(t)));
        else n(s);
      });
    });
  },
  scanFile: function (t) {
    return new Promise(function (n, o) {
      if (undefined === t) return o(p('EINVAL', new TypeError('Missing argument')));
      f.scanFile(t, function (t) {
        if (t) o(p('EUNSPECIFIED', new Error(t)));
        else n();
      });
    });
  },
  dirs: c,
  slice: function (t, n, o, s) {
    if ('string' != typeof t || 'string' != typeof n) return reject(p('EINVAL', new TypeError('Missing argument "src" and/or "destination"')));
    var u = Promise.resolve(),
      c = 0;

    function l(t, n) {
      return t < 0 ? 0 ** (n + t) : t || 0 === t ? t : n;
    }

    if (o < 0 || s < 0 || !o || !s)
      u = u
        .then(function () {
          return E(t);
        })
        .then(function (t) {
          c = Math.floor(t.size);
          o = l(o || 0, c);
          s = l(s, c);
        });
    return u.then(function () {
      return f.slice(t, n, o, s);
    });
  },
  asset: function (t) {
    return 'ios' === ReactNative.Platform.OS && /^assets-library\:\/\//.test(t) ? t : 'bundle-assets://' + t;
  },
  df: function () {
    return new Promise(function (t, n) {
      f.df(function (o, s) {
        if (o) n(p('EUNSPECIFIED', new Error(o)));
        else t(s);
      });
    });
  },
};
exports.default = l;
