var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  module1435 = require('./1435'),
  module1490 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = v(n);
    if (u && u.has(t)) return u.get(t);
    var o = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = l ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, f, c);
        else o[f] = t[f];
      }

    o.default = t;
    if (u) u.set(t, o);
    return o;
  })(require('./1490')),
  module1401 = require('./1401'),
  module1404 = require('./1404');

function v(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (v = function (t) {
    return t ? u : n;
  })(t);
}

function y() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var _ = (function (t) {
  module35.default(M, t);

  var module1435 = M,
    v = y(),
    _ = function () {
      var t,
        n = module34.default(module1435);

      if (v) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function M(t, u) {
    var o;
    module24.default(this, M);
    (o = _.call(this, u))._storage = t;
    return o;
  }

  module25.default(M, [
    {
      key: 'fullPath',
      get: function () {
        return this.path;
      },
    },
    {
      key: 'toString',
      value: function () {
        return 'gs://' + this._storage.app.options.storageBucket + this.path;
      },
    },
    {
      key: 'child',
      value: function (t) {
        return new M(this._storage, this.path + '/' + t);
      },
    },
    {
      key: 'delete',
      value: function () {
        return module1404.getNativeModule(this._storage).delete(this.path);
      },
    },
    {
      key: 'getDownloadURL',
      value: function () {
        return module1404.getNativeModule(this._storage).getDownloadURL(this.path);
      },
    },
    {
      key: 'getMetadata',
      value: function () {
        return module1404.getNativeModule(this._storage).getMetadata(this.path);
      },
    },
    {
      key: 'updateMetadata',
      value: function () {
        var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        return module1404.getNativeModule(this._storage).updateMetadata(this.path, t);
      },
    },
    {
      key: 'downloadFile',
      value: function (t) {
        return new module1490.default(module1490.DOWNLOAD_TASK, module1404.getNativeModule(this._storage).downloadFile(this.path, t), this);
      },
    },
    {
      key: 'put',
      get: function () {
        return this.putFile;
      },
    },
    {
      key: 'putFile',
      value: function (t) {
        var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
          u = module1401.isIOS ? t.replace('file://', '') : t;
        if (u.includes('%')) u = decodeURIComponent(u);
        return new module1490.default(module1490.UPLOAD_TASK, module1404.getNativeModule(this._storage).putFile(this.path, u, n), this);
      },
    },
  ]);
  return M;
})(module1435.default);

exports.default = _;
