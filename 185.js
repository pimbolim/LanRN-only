require('./49');

var module24 = require('./24'),
  module25 = require('./25'),
  module59 = require('./59'),
  module186 = require('./186'),
  module3 = require('./3');

function l(t) {
  var s = c.pickScale(t.scales, module59.get()),
    o = 1 === s ? '' : '@' + s + 'x';
  return module186.getBasePath(t) + '/' + t.name + o + '.' + t.type;
}

function h(t) {
  var s = c.pickScale(t.scales, module59.get());
  return module186.getAndroidResourceFolderName(t, s) + '/' + module186.getAndroidResourceIdentifier(t) + '.' + t.type;
}

var c = (function () {
  function c(s, n, u) {
    module24(this, c);
    this.serverUrl = s;
    this.jsbundleUrl = n;
    this.asset = u;
  }

  module25(
    c,
    [
      {
        key: 'isLoadedFromServer',
        value: function () {
          return !!this.serverUrl;
        },
      },
      {
        key: 'isLoadedFromFileSystem',
        value: function () {
          return !(!this.jsbundleUrl || !this.jsbundleUrl.startsWith('file://'));
        },
      },
      {
        key: 'defaultAsset',
        value: function () {
          return this.isLoadedFromServer() ? this.assetServerURL() : this.isLoadedFromFileSystem() ? this.drawableFolderInBundle() : this.resourceIdentifierWithoutScale();
        },
      },
      {
        key: 'assetServerURL',
        value: function () {
          module3(!!this.serverUrl, 'need server to load from');
          return this.fromSource(this.serverUrl + l(this.asset) + '?platform=android&hash=' + this.asset.hash);
        },
      },
      {
        key: 'scaledAssetPath',
        value: function () {
          return this.fromSource(l(this.asset));
        },
      },
      {
        key: 'scaledAssetURLNearBundle',
        value: function () {
          var t = this.jsbundleUrl || 'file://';
          return this.fromSource(t + l(this.asset).replace(/\.\.\//g, '_'));
        },
      },
      {
        key: 'resourceIdentifierWithoutScale',
        value: function () {
          module3(true, 'resource identifiers work on Android');
          return this.fromSource(module186.getAndroidResourceIdentifier(this.asset));
        },
      },
      {
        key: 'drawableFolderInBundle',
        value: function () {
          var t = this.jsbundleUrl || 'file://';
          return this.fromSource(t + h(this.asset));
        },
      },
      {
        key: 'fromSource',
        value: function (t) {
          return {
            __packager_asset: true,
            width: this.asset.width,
            height: this.asset.height,
            uri: t,
            scale: c.pickScale(this.asset.scales, module59.get()),
          };
        },
      },
    ],
    [
      {
        key: 'pickScale',
        value: function (t, s) {
          for (var n = 0; n < t.length; n++) if (t[n] >= s) return t[n];

          return t[t.length - 1] || 1;
        },
      },
    ]
  );
  return c;
})();

module.exports = c;
