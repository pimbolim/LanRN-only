exports.config = function (t) {
  return {
    fetch: h.bind(t),
  };
};

exports.fetch = h;

require(d[1]);

var module1915 = require('./1915'),
  module1904 = require('./1904'),
  module1908 = require('./1908'),
  ReactNative = require('react-native'),
  module1924 = require('./1924'),
  u = ReactNative.DeviceEventEmitter,
  f = ReactNative.NativeModules.ReactNativeBlobUtil;

function v() {
  if (arguments.length > 0 && undefined !== arguments[0]) arguments[0];
  var t = arguments.length > 1 ? arguments[1] : undefined,
    l = arguments.length > 2 ? arguments[2] : undefined,
    s = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : {};
  if (arguments.length > 4) arguments[4];
  if (!module1915.default.isFileURI(l)) throw 'could not fetch file from an invalid URI : ' + l;
  l = module1915.default.unwrapFileURI(l);
  var u,
    f,
    v = null,
    h = -1,
    p = '',
    b = null;

  switch (t.toLowerCase()) {
    case 'post':
    case 'put':
      break;

    default:
      v = module1904.default
        .stat(l)
        .then(function (t) {
          h = t.size;
          return module1904.default.readStream(l, s.encoding || 'utf8', Math.floor(s.bufferSize) || 409600, Math.floor(s.interval) || 100);
        })
        .then(function (t) {
          return new Promise(function (n, o) {
            t.open();
            b = {
              state: '2',
              headers: {
                source: 'system-fs',
              },
              status: 200,
              respType: 'text',
              rnfbEncode: s.encoding || 'utf8',
            };
            f(b);
            t.onData(function (t) {
              if (u) u(0, h, t);
              if (!s.noCache) p += t;
            });
            t.onError(function (t) {
              o(t);
            });
            t.onEnd(function () {
              n(new module1924.FetchBlobResponse(null, b, p));
            });
          });
        });
  }

  v.progress = function (t) {
    u = t;
    return v;
  };

  v.stateChange = function (t) {
    f = t;
    return v;
  };

  v.uploadProgress = function (t) {
    t;
    return v;
  };

  return v;
}

function h() {
  var y,
    E = [].concat(args),
    k = E[0],
    N = E[1],
    I = E[2],
    C = E[3];
  if (
    ((I =
      I &&
      Object.keys(I).reduce(function (t, n) {
        t[n] = I[n] || '';
        return t;
      }, {})),
    module1915.default.isFileURI(N))
  )
    return v(P, k, N, I, C);
  var L = new Promise(function (n, l) {
    n;
    y = l;
    var v = Array.isArray(C) ? 'fetchBlobForm' : 'fetchBlob';
    t = u.addListener('ReactNativeBlobUtilProgress', function (t) {
      if (t.taskId === b && L.onProgress) L.onProgress(t.written, t.total, t.chunk);
    });
    s = u.addListener('ReactNativeBlobUtilProgress-upload', function (t) {
      if (t.taskId === b && L.onUploadProgress) L.onUploadProgress(t.written, t.total);
    });
    h = u.addListener('ReactNativeBlobUtilState', function (t) {
      if (t.taskId === b) R = t;
      if (L.onStateChange) L.onStateChange(t);
    });
    t = u.addListener('ReactNativeBlobUtilExpire', function (t) {
      if (t.taskId === b && L.onExpire) L.onExpire(t);
    });
    p = u.addListener('ReactNativeBlobUtilServerPush', function (t) {
      if (t.taskId === b && L.onPartData) L.onPartData(t.chunk);
    });
    if (C instanceof Blob && C.isReactNativeBlobUtilPolyfill) C = C.getReactNativeBlobUtilRef();
    f[v](P, b, k, N, I || {}, C, function (u, f, v) {
      t.remove();
      s.remove();
      h.remove();
      p.remove();
      delete L.progress;
      delete L.uploadProgress;
      delete L.stateChange;
      delete L.part;
      delete L.cancel;

      L.cancel = function () {};

      if (u) l(new Error(u, R));
      else {
        if ((P.path || P.fileCache || P.addAndroidDownloads || P.key || (P.auto && 'blob' === R.respType)) && P.session) module1904.default.session(P.session).add(v);
        R.rnfbEncode = f;
        n(new module1924.FetchBlobResponse(b, R, v));
      }
    });
  });

  L.progress = function (...args) {
    if (2 === args.length) {
      t = args[0].interval || t;
      n = args[0].count || n;
      o = args[1];
    } else o = args[0];

    L.onProgress = o;
    f.enableProgressReport(b, t, n);
    return L;
  };

  L.uploadProgress = function (...args) {
    if (2 === args.length) {
      t = args[0].interval || t;
      n = args[0].count || n;
      o = args[1];
    } else o = args[0];

    L.onUploadProgress = o;
    f.enableUploadProgressReport(b, t, n);
    return L;
  };

  L.part = function (t) {
    L.onPartData = t;
    return L;
  };

  L.stateChange = function (t) {
    L.onStateChange = t;
    return L;
  };

  L.expire = function (t) {
    L.onExpire = t;
    return L;
  };

  L.cancel = function (n) {
    n = n || function () {};

    t.remove();
    s.remove();
    h.remove();
    f.cancelRequest(b, n);
    y(new Error('canceled'));
  };

  L.taskId = b;
  return L;
}

u.addListener('ReactNativeBlobUtilMessage', function (t) {
  if ('warn' === t.event) console.warn(t.detail);
  else {
    if ('error' === t.event) throw t.detail;
    console.log('ReactNativeBlobUtil native message', t.detail);
  }
});
