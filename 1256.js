exports.getDeviceToken = xr;
exports.getFreeDiskStorageOld = Ln;
exports.getFreeDiskStorageOldSync = On;
exports.getMacAddress = U;
exports.getMacAddressSync = x;
exports.getReadableVersion = fe;
exports.getTotalDiskCapacityOld = Tn;
exports.getTotalDiskCapacityOldSync = hn;
exports.hasNotch = Ut;
exports.hasSystemFeature = fr;
exports.hasSystemFeatureSync = gr;
exports.isLandscape = zn;
exports.isLandscapeSync = Jn;
exports.isLowBatteryLevel = yr;
exports.syncUniqueId = P;
exports.useBatteryLevel = Rr;
exports.useBatteryLevelIsLow = _r;
exports.useDeviceName = zr;
exports.useFirstInstallTime = Wr;
exports.useHasSystemFeature = Jr;
exports.useIsEmulator = Qr;
exports.useIsHeadphonesConnected = jr;
exports.useManufacturer = Xr;
exports.usePowerState = qr;

var n,
  module12 = require('./12'),
  regeneratorRuntime = require('regenerator-runtime'),
  React = require('react'),
  ReactNative = require('react-native'),
  module1257 = require('./1257'),
  module1258 = require('./1258'),
  module1259 = require('./1259'),
  module1261 = require('./1261'),
  S = function () {
    return module1261.getSupportedPlatformInfoSync({
      defaultValue: 'unknown',
      memoKey: 'uniqueId',
      supportedPlatforms: ['android', 'ios', 'windows'],
      getter: function () {
        return module1259.default.uniqueId;
      },
    });
  };

function P() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('ios' !== ReactNative.Platform.OS) {
              t.next = 6;
              break;
            }

            t.next = 3;
            return regeneratorRuntime.default.awrap(module1259.default.syncUniqueId());

          case 3:
            n = t.sent;
            t.next = 7;
            break;

          case 6:
            n = S();

          case 7:
            return t.abrupt('return', n);

          case 8:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

exports.getUniqueId = S;
var v = module1261.getSupportedPlatformInfoFunctions({
    memoKey: 'instanceId',
    supportedPlatforms: ['android'],
    getter: function () {
      return module1259.default.getInstanceId();
    },
    syncGetter: function () {
      return module1259.default.getInstanceIdSync();
    },
    defaultValue: 'unknown',
  }),
  w = module12.default(v, 2),
  I = w[0],
  b = w[1];
exports.getInstanceIdSync = b;
exports.getInstanceId = I;
var F = module1261.getSupportedPlatformInfoFunctions({
    memoKey: 'serialNumber',
    supportedPlatforms: ['android', 'windows'],
    getter: function () {
      return module1259.default.getSerialNumber();
    },
    syncGetter: function () {
      return module1259.default.getSerialNumberSync();
    },
    defaultValue: 'unknown',
  }),
  k = module12.default(F, 2),
  A = k[0],
  M = k[1];
exports.getSerialNumberSync = M;
exports.getSerialNumber = A;
var T = module1261.getSupportedPlatformInfoFunctions({
    memoKey: 'androidId',
    supportedPlatforms: ['android'],
    getter: function () {
      return module1259.default.getAndroidId();
    },
    syncGetter: function () {
      return module1259.default.getAndroidIdSync();
    },
    defaultValue: 'unknown',
  }),
  h = module12.default(T, 2),
  C = h[0],
  V = h[1];
exports.getAndroidIdSync = V;
exports.getAndroidId = C;
var D = module1261.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return module1259.default.getIpAddress();
    },
    syncGetter: function () {
      return module1259.default.getIpAddressSync();
    },
    defaultValue: 'unknown',
  }),
  B = module12.default(D, 2),
  L = B[0],
  O = B[1];
exports.getIpAddressSync = O;
exports.getIpAddress = L;
var G = module1261.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'windows', 'web'],
    getter: function () {
      return module1259.default.isCameraPresent();
    },
    syncGetter: function () {
      return module1259.default.isCameraPresentSync();
    },
    defaultValue: false,
  }),
  N = module12.default(G, 2),
  K = N[0],
  H = N[1];

function U() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('android' !== ReactNative.Platform.OS) {
              t.next = 4;
              break;
            }

            return t.abrupt('return', module1259.default.getMacAddress());

          case 4:
            if ('ios' !== ReactNative.Platform.OS) {
              t.next = 6;
              break;
            }

            return t.abrupt('return', '02:00:00:00:00:00');

          case 6:
            return t.abrupt('return', 'unknown');

          case 7:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function x() {
  return 'android' === ReactNative.Platform.OS ? module1259.default.getMacAddressSync() : 'ios' === ReactNative.Platform.OS ? '02:00:00:00:00:00' : 'unknown';
}

exports.isCameraPresentSync = H;
exports.isCameraPresent = K;

var E = function () {
  return module1261.getSupportedPlatformInfoSync({
    defaultValue: 'unknown',
    memoKey: 'deviceId',
    getter: function () {
      return module1259.default.deviceId;
    },
    supportedPlatforms: ['android', 'ios', 'windows'],
  });
};

exports.getDeviceId = E;

var R = module1261.getSupportedPlatformInfoFunctions({
    memoKey: 'manufacturer',
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return 'ios' == ReactNative.Platform.OS ? Promise.resolve('Apple') : module1259.default.getSystemManufacturer();
    },
    syncGetter: function () {
      return 'ios' == ReactNative.Platform.OS ? 'Apple' : module1259.default.getSystemManufacturerSync();
    },
    defaultValue: 'unknown',
  }),
  _ = module12.default(R, 2),
  q = _[0],
  j = _[1];

exports.getManufacturerSync = j;
exports.getManufacturer = q;

var W = function () {
  return module1261.getSupportedPlatformInfoSync({
    memoKey: 'model',
    defaultValue: 'unknown',
    supportedPlatforms: ['ios', 'android', 'windows'],
    getter: function () {
      return module1259.default.model;
    },
  });
};

exports.getModel = W;

var z = function () {
  return module1261.getSupportedPlatformInfoSync({
    memoKey: 'brand',
    supportedPlatforms: ['android', 'ios', 'windows'],
    defaultValue: 'unknown',
    getter: function () {
      return module1259.default.brand;
    },
  });
};

exports.getBrand = z;

var J = function () {
  return module1261.getSupportedPlatformInfoSync({
    defaultValue: 'unknown',
    supportedPlatforms: ['ios', 'android', 'windows'],
    memoKey: 'systemName',
    getter: function () {
      return ReactNative.Platform.select({
        ios: module1259.default.systemName,
        android: 'Android',
        windows: 'Windows',
        default: 'unknown',
      });
    },
  });
};

exports.getSystemName = J;

var Q = function () {
  return module1261.getSupportedPlatformInfoSync({
    defaultValue: 'unknown',
    getter: function () {
      return module1259.default.systemVersion;
    },
    supportedPlatforms: ['android', 'ios', 'windows'],
    memoKey: 'systemVersion',
  });
};

exports.getSystemVersion = Q;
var X = module1261.getSupportedPlatformInfoFunctions({
    memoKey: 'buildId',
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return module1259.default.getBuildId();
    },
    syncGetter: function () {
      return module1259.default.getBuildIdSync();
    },
    defaultValue: 'unknown',
  }),
  Y = module12.default(X, 2),
  Z = Y[0],
  $ = Y[1];
exports.getBuildIdSync = $;
exports.getBuildId = Z;
var ee = module1261.getSupportedPlatformInfoFunctions({
    memoKey: 'apiLevel',
    supportedPlatforms: ['android'],
    getter: function () {
      return module1259.default.getApiLevel();
    },
    syncGetter: function () {
      return module1259.default.getApiLevelSync();
    },
    defaultValue: -1,
  }),
  te = module12.default(ee, 2),
  ne = te[0],
  re = te[1];
exports.getApiLevelSync = re;
exports.getApiLevel = ne;

var ae = function () {
  return module1261.getSupportedPlatformInfoSync({
    memoKey: 'bundleId',
    supportedPlatforms: ['android', 'ios', 'windows'],
    defaultValue: 'unknown',
    getter: function () {
      return module1259.default.bundleId;
    },
  });
};

exports.getBundleId = ae;
var oe = module1261.getSupportedPlatformInfoFunctions({
    memoKey: 'installerPackageName',
    supportedPlatforms: ['android', 'windows', 'ios'],
    getter: function () {
      return module1259.default.getInstallerPackageName();
    },
    syncGetter: function () {
      return module1259.default.getInstallerPackageNameSync();
    },
    defaultValue: 'unknown',
  }),
  ue = module12.default(oe, 2),
  de = ue[0],
  se = ue[1];
exports.getInstallerPackageNameSync = se;
exports.getInstallerPackageName = de;

var ie = function () {
  return module1261.getSupportedPlatformInfoSync({
    memoKey: 'appName',
    defaultValue: 'unknown',
    getter: function () {
      return module1259.default.appName;
    },
    supportedPlatforms: ['android', 'ios', 'windows'],
  });
};

exports.getApplicationName = ie;

var le = function () {
  return module1261.getSupportedPlatformInfoSync({
    memoKey: 'buildNumber',
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return module1259.default.buildNumber;
    },
    defaultValue: 'unknown',
  });
};

exports.getBuildNumber = le;

var ce = function () {
  return module1261.getSupportedPlatformInfoSync({
    memoKey: 'version',
    defaultValue: 'unknown',
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return module1259.default.appVersion;
    },
  });
};

function fe() {
  return ce() + '.' + le();
}

exports.getVersion = ce;
var ge = module1261.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return module1259.default.getDeviceName();
    },
    syncGetter: function () {
      return module1259.default.getDeviceNameSync();
    },
    defaultValue: 'unknown',
  }),
  ye = module12.default(ge, 2),
  pe = ye[0],
  me = ye[1];
exports.getDeviceNameSync = me;
exports.getDeviceName = pe;
var Se = module1261.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'windows', 'web'],
    getter: function () {
      return module1259.default.getUsedMemory();
    },
    syncGetter: function () {
      return module1259.default.getUsedMemorySync();
    },
    defaultValue: -1,
  }),
  Pe = module12.default(Se, 2),
  ve = Pe[0],
  we = Pe[1];
exports.getUsedMemorySync = we;
exports.getUsedMemory = ve;

var Ie = function () {
  return module1261.getSupportedPlatformInfoAsync({
    memoKey: 'userAgent',
    defaultValue: 'unknown',
    supportedPlatforms: ['android', 'ios', 'web'],
    getter: function () {
      return module1259.default.getUserAgent();
    },
  });
};

exports.getUserAgent = Ie;

var be = function () {
  return module1261.getSupportedPlatformInfoSync({
    memoKey: 'userAgent',
    defaultValue: 'unknown',
    supportedPlatforms: ['android', 'web'],
    getter: function () {
      return module1259.default.getUserAgentSync();
    },
  });
};

exports.getUserAgentSync = be;
var Fe = module1261.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return module1259.default.getFontScale();
    },
    syncGetter: function () {
      return module1259.default.getFontScaleSync();
    },
    defaultValue: -1,
  }),
  ke = module12.default(Fe, 2),
  Ae = ke[0],
  Me = ke[1];
exports.getFontScaleSync = Me;
exports.getFontScale = Ae;
var Te = module1261.getSupportedPlatformInfoFunctions({
    memoKey: 'bootloader',
    supportedPlatforms: ['android'],
    getter: function () {
      return module1259.default.getBootloader();
    },
    syncGetter: function () {
      return module1259.default.getBootloaderSync();
    },
    defaultValue: 'unknown',
  }),
  he = module12.default(Te, 2),
  Ce = he[0],
  Ve = he[1];
exports.getBootloaderSync = Ve;
exports.getBootloader = Ce;
var De = module1261.getSupportedPlatformInfoFunctions({
    getter: function () {
      return module1259.default.getDevice();
    },
    syncGetter: function () {
      return module1259.default.getDeviceSync();
    },
    defaultValue: 'unknown',
    memoKey: 'device',
    supportedPlatforms: ['android'],
  }),
  Be = module12.default(De, 2),
  Le = Be[0],
  Oe = Be[1];
exports.getDeviceSync = Oe;
exports.getDevice = Le;
var Ge = module1261.getSupportedPlatformInfoFunctions({
    memoKey: 'display',
    supportedPlatforms: ['android'],
    getter: function () {
      return module1259.default.getDisplay();
    },
    syncGetter: function () {
      return module1259.default.getDisplaySync();
    },
    defaultValue: 'unknown',
  }),
  Ne = module12.default(Ge, 2),
  Ke = Ne[0],
  He = Ne[1];
exports.getDisplaySync = He;
exports.getDisplay = Ke;
var Ue = module1261.getSupportedPlatformInfoFunctions({
    memoKey: 'fingerprint',
    supportedPlatforms: ['android'],
    getter: function () {
      return module1259.default.getFingerprint();
    },
    syncGetter: function () {
      return module1259.default.getFingerprintSync();
    },
    defaultValue: 'unknown',
  }),
  xe = module12.default(Ue, 2),
  Ee = xe[0],
  Re = xe[1];
exports.getFingerprintSync = Re;
exports.getFingerprint = Ee;

var _e = module1261.getSupportedPlatformInfoFunctions({
    memoKey: 'hardware',
    supportedPlatforms: ['android'],
    getter: function () {
      return module1259.default.getHardware();
    },
    syncGetter: function () {
      return module1259.default.getHardwareSync();
    },
    defaultValue: 'unknown',
  }),
  qe = module12.default(_e, 2),
  je = qe[0],
  We = qe[1];

exports.getHardwareSync = We;
exports.getHardware = je;
var ze = module1261.getSupportedPlatformInfoFunctions({
    memoKey: 'host',
    supportedPlatforms: ['android'],
    getter: function () {
      return module1259.default.getHost();
    },
    syncGetter: function () {
      return module1259.default.getHostSync();
    },
    defaultValue: 'unknown',
  }),
  Je = module12.default(ze, 2),
  Qe = Je[0],
  Xe = Je[1];
exports.getHostSync = Xe;
exports.getHost = Qe;
var Ye = module1261.getSupportedPlatformInfoFunctions({
    memoKey: 'product',
    supportedPlatforms: ['android'],
    getter: function () {
      return module1259.default.getProduct();
    },
    syncGetter: function () {
      return module1259.default.getProductSync();
    },
    defaultValue: 'unknown',
  }),
  Ze = module12.default(Ye, 2),
  $e = Ze[0],
  et = Ze[1];
exports.getProductSync = et;
exports.getProduct = $e;
var tt = module1261.getSupportedPlatformInfoFunctions({
    memoKey: 'tags',
    supportedPlatforms: ['android'],
    getter: function () {
      return module1259.default.getTags();
    },
    syncGetter: function () {
      return module1259.default.getTagsSync();
    },
    defaultValue: 'unknown',
  }),
  nt = module12.default(tt, 2),
  rt = nt[0],
  at = nt[1];
exports.getTagsSync = at;
exports.getTags = rt;
var ot = module1261.getSupportedPlatformInfoFunctions({
    memoKey: 'type',
    supportedPlatforms: ['android'],
    getter: function () {
      return module1259.default.getType();
    },
    syncGetter: function () {
      return module1259.default.getTypeSync();
    },
    defaultValue: 'unknown',
  }),
  ut = module12.default(ot, 2),
  dt = ut[0],
  st = ut[1];
exports.getTypeSync = st;
exports.getType = dt;
var it = module1261.getSupportedPlatformInfoFunctions({
    memoKey: 'baseOs',
    supportedPlatforms: ['android', 'web', 'windows'],
    getter: function () {
      return module1259.default.getBaseOs();
    },
    syncGetter: function () {
      return module1259.default.getBaseOsSync();
    },
    defaultValue: 'unknown',
  }),
  lt = module12.default(it, 2),
  ct = lt[0],
  ft = lt[1];
exports.getBaseOsSync = ft;
exports.getBaseOs = ct;
var gt = module1261.getSupportedPlatformInfoFunctions({
    memoKey: 'previewSdkInt',
    supportedPlatforms: ['android'],
    getter: function () {
      return module1259.default.getPreviewSdkInt();
    },
    syncGetter: function () {
      return module1259.default.getPreviewSdkIntSync();
    },
    defaultValue: -1,
  }),
  yt = module12.default(gt, 2),
  pt = yt[0],
  mt = yt[1];
exports.getPreviewSdkIntSync = mt;
exports.getPreviewSdkInt = pt;
var St = module1261.getSupportedPlatformInfoFunctions({
    memoKey: 'securityPatch',
    supportedPlatforms: ['android'],
    getter: function () {
      return module1259.default.getSecurityPatch();
    },
    syncGetter: function () {
      return module1259.default.getSecurityPatchSync();
    },
    defaultValue: 'unknown',
  }),
  Pt = module12.default(St, 2),
  vt = Pt[0],
  wt = Pt[1];
exports.getSecurityPatchSync = wt;
exports.getSecurityPatch = vt;
var It = module1261.getSupportedPlatformInfoFunctions({
    memoKey: 'codeName',
    supportedPlatforms: ['android'],
    getter: function () {
      return module1259.default.getCodename();
    },
    syncGetter: function () {
      return module1259.default.getCodenameSync();
    },
    defaultValue: 'unknown',
  }),
  bt = module12.default(It, 2),
  Ft = bt[0],
  kt = bt[1];
exports.getCodenameSync = kt;
exports.getCodename = Ft;
var At = module1261.getSupportedPlatformInfoFunctions({
    memoKey: 'incremental',
    supportedPlatforms: ['android'],
    getter: function () {
      return module1259.default.getIncremental();
    },
    syncGetter: function () {
      return module1259.default.getIncrementalSync();
    },
    defaultValue: 'unknown',
  }),
  Mt = module12.default(At, 2),
  Tt = Mt[0],
  ht = Mt[1];
exports.getIncrementalSync = ht;
exports.getIncremental = Tt;
var Ct = module1261.getSupportedPlatformInfoFunctions({
    memoKey: 'emulator',
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return module1259.default.isEmulator();
    },
    syncGetter: function () {
      return module1259.default.isEmulatorSync();
    },
    defaultValue: false,
  }),
  Vt = module12.default(Ct, 2),
  Dt = Vt[0],
  Bt = Vt[1];
exports.isEmulatorSync = Bt;
exports.isEmulator = Dt;

var Lt = function () {
  return module1261.getSupportedPlatformInfoSync({
    defaultValue: false,
    supportedPlatforms: ['android', 'ios', 'windows'],
    memoKey: 'tablet',
    getter: function () {
      return module1259.default.isTablet;
    },
  });
};

exports.isTablet = Lt;
var Ot,
  Gt = module1261.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'windows'],
    getter: function () {
      return module1259.default.isPinOrFingerprintSet();
    },
    syncGetter: function () {
      return module1259.default.isPinOrFingerprintSetSync();
    },
    defaultValue: false,
  }),
  Nt = module12.default(Gt, 2),
  Kt = Nt[0],
  Ht = Nt[1];

function Ut() {
  if (undefined === Ot) {
    var t = z(),
      n = W();
    Ot =
      -1 !==
      module1258.default.findIndex(function (o) {
        return o.brand.toLowerCase() === t.toLowerCase() && o.model.toLowerCase() === n.toLowerCase();
      });
  }

  return Ot;
}

exports.isPinOrFingerprintSetSync = Ht;
exports.isPinOrFingerprintSet = Kt;
var xt = module1261.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android'],
    getter: function () {
      return module1259.default.hasGms();
    },
    syncGetter: function () {
      return module1259.default.hasGmsSync();
    },
    defaultValue: false,
  }),
  Et = module12.default(xt, 2),
  Rt = Et[0],
  _t = Et[1];
exports.hasGmsSync = _t;
exports.hasGms = Rt;
var qt = module1261.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android'],
    getter: function () {
      return module1259.default.hasHms();
    },
    syncGetter: function () {
      return module1259.default.hasHmsSync();
    },
    defaultValue: false,
  }),
  jt = module12.default(qt, 2),
  Wt = jt[0],
  zt = jt[1];
exports.hasHmsSync = zt;
exports.hasHms = Wt;
var Jt = module1261.getSupportedPlatformInfoFunctions({
    memoKey: 'firstInstallTime',
    supportedPlatforms: ['android', 'windows'],
    getter: function () {
      return module1259.default.getFirstInstallTime();
    },
    syncGetter: function () {
      return module1259.default.getFirstInstallTimeSync();
    },
    defaultValue: -1,
  }),
  Qt = module12.default(Jt, 2),
  Xt = Qt[0],
  Yt = Qt[1];
exports.getFirstInstallTimeSync = Yt;
exports.getFirstInstallTime = Xt;
var Zt = module1261.getSupportedPlatformInfoFunctions({
    memoKey: 'installReferrer',
    supportedPlatforms: ['android', 'windows', 'web'],
    getter: function () {
      return module1259.default.getInstallReferrer();
    },
    syncGetter: function () {
      return module1259.default.getInstallReferrerSync();
    },
    defaultValue: 'unknown',
  }),
  $t = module12.default(Zt, 2),
  en = $t[0],
  tn = $t[1];
exports.getInstallReferrerSync = tn;
exports.getInstallReferrer = en;
var nn = module1261.getSupportedPlatformInfoFunctions({
    memoKey: 'lastUpdateTime',
    supportedPlatforms: ['android'],
    getter: function () {
      return module1259.default.getLastUpdateTime();
    },
    syncGetter: function () {
      return module1259.default.getLastUpdateTimeSync();
    },
    defaultValue: -1,
  }),
  rn = module12.default(nn, 2),
  an = rn[0],
  on = rn[1];
exports.getLastUpdateTimeSync = on;
exports.getLastUpdateTime = an;
var un = module1261.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android'],
    getter: function () {
      return module1259.default.getPhoneNumber();
    },
    syncGetter: function () {
      return module1259.default.getPhoneNumberSync();
    },
    defaultValue: 'unknown',
  }),
  dn = module12.default(un, 2),
  sn = dn[0],
  ln = dn[1];
exports.getPhoneNumberSync = ln;
exports.getPhoneNumber = sn;
var cn = module1261.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios'],
    getter: function () {
      return module1259.default.getCarrier();
    },
    syncGetter: function () {
      return module1259.default.getCarrierSync();
    },
    defaultValue: 'unknown',
  }),
  fn = module12.default(cn, 2),
  gn = fn[0],
  yn = fn[1];
exports.getCarrierSync = yn;
exports.getCarrier = gn;
var pn = module1261.getSupportedPlatformInfoFunctions({
    memoKey: 'totalMemory',
    supportedPlatforms: ['android', 'ios', 'windows', 'web'],
    getter: function () {
      return module1259.default.getTotalMemory();
    },
    syncGetter: function () {
      return module1259.default.getTotalMemorySync();
    },
    defaultValue: -1,
  }),
  mn = module12.default(pn, 2),
  Sn = mn[0],
  Pn = mn[1];
exports.getTotalMemorySync = Pn;
exports.getTotalMemory = Sn;
var vn = module1261.getSupportedPlatformInfoFunctions({
    memoKey: 'maxMemory',
    supportedPlatforms: ['android', 'windows', 'web'],
    getter: function () {
      return module1259.default.getMaxMemory();
    },
    syncGetter: function () {
      return module1259.default.getMaxMemorySync();
    },
    defaultValue: -1,
  }),
  wn = module12.default(vn, 2),
  In = wn[0],
  bn = wn[1];
exports.getMaxMemorySync = bn;
exports.getMaxMemory = In;
var Fn = module1261.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'windows', 'web'],
    getter: function () {
      return module1259.default.getTotalDiskCapacity();
    },
    syncGetter: function () {
      return module1259.default.getTotalDiskCapacitySync();
    },
    defaultValue: -1,
  }),
  kn = module12.default(Fn, 2),
  An = kn[0],
  Mn = kn[1];

function Tn() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('android' !== ReactNative.Platform.OS) {
              t.next = 2;
              break;
            }

            return t.abrupt('return', module1259.default.getTotalDiskCapacityOld());

          case 2:
            if ('ios' !== ReactNative.Platform.OS && 'windows' !== ReactNative.Platform.OS && 'web' !== ReactNative.Platform.OS) {
              t.next = 4;
              break;
            }

            return t.abrupt('return', An());

          case 4:
            return t.abrupt('return', -1);

          case 5:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function hn() {
  return 'android' === ReactNative.Platform.OS
    ? module1259.default.getTotalDiskCapacityOldSync()
    : 'ios' === ReactNative.Platform.OS || 'windows' === ReactNative.Platform.OS || 'web' === ReactNative.Platform.OS
    ? Mn()
    : -1;
}

exports.getTotalDiskCapacitySync = Mn;
exports.getTotalDiskCapacity = An;
var Cn = module1261.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'windows', 'web'],
    getter: function () {
      return module1259.default.getFreeDiskStorage();
    },
    syncGetter: function () {
      return module1259.default.getFreeDiskStorageSync();
    },
    defaultValue: -1,
  }),
  Vn = module12.default(Cn, 2),
  Dn = Vn[0],
  Bn = Vn[1];

function Ln() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('android' !== ReactNative.Platform.OS) {
              t.next = 2;
              break;
            }

            return t.abrupt('return', module1259.default.getFreeDiskStorageOld());

          case 2:
            if ('ios' !== ReactNative.Platform.OS && 'windows' !== ReactNative.Platform.OS && 'web' !== ReactNative.Platform.OS) {
              t.next = 4;
              break;
            }

            return t.abrupt('return', Dn());

          case 4:
            return t.abrupt('return', -1);

          case 5:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function On() {
  return 'android' === ReactNative.Platform.OS
    ? module1259.default.getFreeDiskStorageOldSync()
    : 'ios' === ReactNative.Platform.OS || 'windows' === ReactNative.Platform.OS || 'web' === ReactNative.Platform.OS
    ? Bn()
    : -1;
}

exports.getFreeDiskStorageSync = Bn;
exports.getFreeDiskStorage = Dn;
var Gn = module1261.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'windows', 'web'],
    getter: function () {
      return module1259.default.getBatteryLevel();
    },
    syncGetter: function () {
      return module1259.default.getBatteryLevelSync();
    },
    defaultValue: -1,
  }),
  Nn = module12.default(Gn, 2),
  Kn = Nn[0],
  Hn = Nn[1];
exports.getBatteryLevelSync = Hn;
exports.getBatteryLevel = Kn;
var Un = module1261.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['ios', 'android', 'windows', 'web'],
    getter: function () {
      return module1259.default.getPowerState();
    },
    syncGetter: function () {
      return module1259.default.getPowerStateSync();
    },
    defaultValue: {},
  }),
  xn = module12.default(Un, 2),
  En = xn[0],
  Rn = xn[1];
exports.getPowerStateSync = Rn;
exports.getPowerState = En;

var _n = module1261.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'windows', 'web'],
    getter: function () {
      return module1259.default.isBatteryCharging();
    },
    syncGetter: function () {
      return module1259.default.isBatteryChargingSync();
    },
    defaultValue: false,
  }),
  qn = module12.default(_n, 2),
  jn = qn[0],
  Wn = qn[1];

function zn() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            return t.abrupt('return', Promise.resolve(Jn()));

          case 1:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function Jn() {
  var t = ReactNative.Dimensions.get('window'),
    n = t.height;
  return t.width >= n;
}

exports.isBatteryChargingSync = Wn;
exports.isBatteryCharging = jn;
var Qn = module1261.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'web'],
    getter: function () {
      return module1259.default.isAirplaneMode();
    },
    syncGetter: function () {
      return module1259.default.isAirplaneModeSync();
    },
    defaultValue: false,
  }),
  Xn = module12.default(Qn, 2),
  Yn = Xn[0],
  Zn = Xn[1];
exports.isAirplaneModeSync = Zn;
exports.isAirplaneMode = Yn;

var $n = function () {
  return module1261.getSupportedPlatformInfoSync({
    memoKey: 'deviceType',
    supportedPlatforms: ['android', 'ios', 'windows'],
    defaultValue: 'unknown',
    getter: function () {
      return module1259.default.deviceType;
    },
  });
};

exports.getDeviceType = $n;

exports.getDeviceTypeSync = function () {
  return module1261.getSupportedPlatformInfoSync({
    memoKey: 'deviceType',
    supportedPlatforms: ['android', 'ios', 'windows'],
    defaultValue: 'unknown',
    getter: function () {
      return module1259.default.deviceType;
    },
  });
};

var er = module1261.getSupportedPlatformInfoFunctions({
    memoKey: '_supportedAbis',
    supportedPlatforms: ['android', 'ios'],
    getter: function () {
      return module1259.default.getSupportedAbis();
    },
    syncGetter: function () {
      return module1259.default.getSupportedAbisSync();
    },
    defaultValue: [],
  }),
  tr = module12.default(er, 2),
  nr = tr[0],
  rr = tr[1];
exports.supportedAbisSync = rr;
exports.supportedAbis = nr;
var ar = module1261.getSupportedPlatformInfoFunctions({
    memoKey: '_supported32BitAbis',
    supportedPlatforms: ['android'],
    getter: function () {
      return module1259.default.getSupported32BitAbis();
    },
    syncGetter: function () {
      return module1259.default.getSupported32BitAbisSync();
    },
    defaultValue: [],
  }),
  or = module12.default(ar, 2),
  ur = or[0],
  dr = or[1];
exports.supported32BitAbisSync = dr;
exports.supported32BitAbis = ur;
var sr = module1261.getSupportedPlatformInfoFunctions({
    memoKey: '_supported64BitAbis',
    supportedPlatforms: ['android'],
    getter: function () {
      return module1259.default.getSupported64BitAbis();
    },
    syncGetter: function () {
      return module1259.default.getSupported64BitAbisSync();
    },
    defaultValue: [],
  }),
  ir = module12.default(sr, 2),
  lr = ir[0],
  cr = ir[1];

function fr(t) {
  return regeneratorRuntime.default.async(
    function (n) {
      for (;;)
        switch ((n.prev = n.next)) {
          case 0:
            if ('android' !== ReactNative.Platform.OS) {
              n.next = 2;
              break;
            }

            return n.abrupt('return', module1259.default.hasSystemFeature(t));

          case 2:
            return n.abrupt('return', false);

          case 3:
          case 'end':
            return n.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

function gr(t) {
  return 'android' === ReactNative.Platform.OS && module1259.default.hasSystemFeatureSync(t);
}

function yr(t) {
  return 'android' === ReactNative.Platform.OS ? t < 0.15 : t < 0.2;
}

exports.supported64BitAbisSync = cr;
exports.supported64BitAbis = lr;
var pr = module1261.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android'],
    getter: function () {
      return module1259.default.getSystemAvailableFeatures();
    },
    syncGetter: function () {
      return module1259.default.getSystemAvailableFeaturesSync();
    },
    defaultValue: [],
  }),
  mr = module12.default(pr, 2),
  Sr = mr[0],
  Pr = mr[1];
exports.getSystemAvailableFeaturesSync = Pr;
exports.getSystemAvailableFeatures = Sr;
var vr = module1261.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios', 'web'],
    getter: function () {
      return module1259.default.isLocationEnabled();
    },
    syncGetter: function () {
      return module1259.default.isLocationEnabledSync();
    },
    defaultValue: false,
  }),
  wr = module12.default(vr, 2),
  Ir = wr[0],
  br = wr[1];
exports.isLocationEnabledSync = br;
exports.isLocationEnabled = Ir;
var Fr = module1261.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios'],
    getter: function () {
      return module1259.default.isHeadphonesConnected();
    },
    syncGetter: function () {
      return module1259.default.isHeadphonesConnectedSync();
    },
    defaultValue: false,
  }),
  kr = module12.default(Fr, 2),
  Ar = kr[0],
  Mr = kr[1];
exports.isHeadphonesConnectedSync = Mr;
exports.isHeadphonesConnected = Ar;
var Tr = module1261.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['windows'],
    getter: function () {
      return module1259.default.isMouseConnected();
    },
    syncGetter: function () {
      return module1259.default.isMouseConnectedSync();
    },
    defaultValue: false,
  }),
  hr = module12.default(Tr, 2),
  Cr = hr[0],
  Vr = hr[1];
exports.isMouseConnectedSync = Vr;
exports.isMouseConnected = Cr;
var Dr = module1261.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['windows'],
    getter: function () {
      return module1259.default.isKeyboardConnected();
    },
    syncGetter: function () {
      return module1259.default.isKeyboardConnectedSync();
    },
    defaultValue: false,
  }),
  Br = module12.default(Dr, 2),
  Lr = Br[0],
  Or = Br[1];
exports.isKeyboardConnectedSync = Or;
exports.isKeyboardConnected = Lr;

var Gr = function () {
  return module1261.getSupportedPlatformInfoAsync({
    supportedPlatforms: ['windows'],
    getter: function () {
      return module1259.default.isTabletMode();
    },
    defaultValue: false,
  });
};

exports.isTabletMode = Gr;
var Nr = module1261.getSupportedPlatformInfoFunctions({
    supportedPlatforms: ['android', 'ios'],
    getter: function () {
      return module1259.default.getAvailableLocationProviders();
    },
    syncGetter: function () {
      return module1259.default.getAvailableLocationProvidersSync();
    },
    defaultValue: {},
  }),
  Kr = module12.default(Nr, 2),
  Hr = Kr[0],
  Ur = Kr[1];

function xr() {
  return regeneratorRuntime.default.async(
    function (t) {
      for (;;)
        switch ((t.prev = t.next)) {
          case 0:
            if ('ios' !== ReactNative.Platform.OS) {
              t.next = 2;
              break;
            }

            return t.abrupt('return', module1259.default.getDeviceToken());

          case 2:
            return t.abrupt('return', 'unknown');

          case 3:
          case 'end':
            return t.stop();
        }
    },
    null,
    null,
    null,
    Promise
  );
}

exports.getAvailableLocationProvidersSync = Ur;
exports.getAvailableLocationProviders = Hr;
var Er = new ReactNative.NativeEventEmitter(ReactNative.NativeModules.RNDeviceInfo);

function Rr() {
  var t = React.useState(null),
    n = module12.default(t, 2),
    l = n[0],
    c = n[1];
  React.useEffect(function () {
    var t;
    regeneratorRuntime.default.async(
      function (n) {
        for (;;)
          switch ((n.prev = n.next)) {
            case 0:
              n.next = 2;
              return regeneratorRuntime.default.awrap(Kn());

            case 2:
              t = n.sent;
              c(t);

            case 4:
            case 'end':
              return n.stop();
          }
      },
      null,
      null,
      null,
      Promise
    );
    var n = Er.addListener('RNDeviceInfo_batteryLevelDidChange', function (t) {
      c(t);
    });
    return function () {
      return n.remove();
    };
  }, []);
  return l;
}

function _r() {
  var t = React.useState(null),
    n = module12.default(t, 2),
    l = n[0],
    c = n[1];
  React.useEffect(function () {
    var t;
    regeneratorRuntime.default.async(
      function (n) {
        for (;;)
          switch ((n.prev = n.next)) {
            case 0:
              n.next = 2;
              return regeneratorRuntime.default.awrap(Kn());

            case 2:
              if (yr((t = n.sent))) c(t);

            case 4:
            case 'end':
              return n.stop();
          }
      },
      null,
      null,
      null,
      Promise
    );
    var n = Er.addListener('RNDeviceInfo_batteryLevelIsLow', function (t) {
      c(t);
    });
    return function () {
      return n.remove();
    };
  }, []);
  return l;
}

function qr() {
  var t = React.useState({}),
    n = module12.default(t, 2),
    l = n[0],
    c = n[1];
  React.useEffect(function () {
    var t;
    regeneratorRuntime.default.async(
      function (n) {
        for (;;)
          switch ((n.prev = n.next)) {
            case 0:
              n.next = 2;
              return regeneratorRuntime.default.awrap(En());

            case 2:
              t = n.sent;
              c(t);

            case 4:
            case 'end':
              return n.stop();
          }
      },
      null,
      null,
      null,
      Promise
    );
    var n = Er.addListener('RNDeviceInfo_powerStateDidChange', function (t) {
      c(t);
    });
    return function () {
      return n.remove();
    };
  }, []);
  return l;
}

function jr() {
  return module1257.useOnEvent('RNDeviceInfo_headphoneConnectionDidChange', Ar, false);
}

function Wr() {
  return module1257.useOnMount(Xt, -1);
}

function zr() {
  return module1257.useOnMount(pe, 'unknown');
}

function Jr(t) {
  var n = React.useCallback(
    function () {
      return fr(t);
    },
    [t]
  );
  return module1257.useOnMount(n, false);
}

function Qr() {
  return module1257.useOnMount(Dt, false);
}

function Xr() {
  return module1257.useOnMount(q, 'unknown');
}

var Yr = {
  getAndroidId: C,
  getAndroidIdSync: V,
  getApiLevel: ne,
  getApiLevelSync: re,
  getApplicationName: ie,
  getAvailableLocationProviders: Hr,
  getAvailableLocationProvidersSync: Ur,
  getBaseOs: ct,
  getBaseOsSync: ft,
  getBatteryLevel: Kn,
  getBatteryLevelSync: Hn,
  getBootloader: Ce,
  getBootloaderSync: Ve,
  getBrand: z,
  getBuildId: Z,
  getBuildIdSync: $,
  getBuildNumber: le,
  getBundleId: ae,
  getCarrier: gn,
  getCarrierSync: yn,
  getCodename: Ft,
  getCodenameSync: kt,
  getDevice: Le,
  getDeviceId: E,
  getDeviceName: pe,
  getDeviceNameSync: me,
  getDeviceSync: Oe,
  getDeviceToken: xr,
  getDeviceType: $n,
  getDisplay: Ke,
  getDisplaySync: He,
  getFingerprint: Ee,
  getFingerprintSync: Re,
  getFirstInstallTime: Xt,
  getFirstInstallTimeSync: Yt,
  getFontScale: Ae,
  getFontScaleSync: Me,
  getFreeDiskStorage: Dn,
  getFreeDiskStorageOld: Ln,
  getFreeDiskStorageSync: Bn,
  getFreeDiskStorageOldSync: On,
  getHardware: je,
  getHardwareSync: We,
  getHost: Qe,
  getHostSync: Xe,
  getIncremental: Tt,
  getIncrementalSync: ht,
  getInstallerPackageName: de,
  getInstallerPackageNameSync: se,
  getInstallReferrer: en,
  getInstallReferrerSync: tn,
  getInstanceId: I,
  getInstanceIdSync: b,
  getIpAddress: L,
  getIpAddressSync: O,
  getLastUpdateTime: an,
  getLastUpdateTimeSync: on,
  getMacAddress: U,
  getMacAddressSync: x,
  getManufacturer: q,
  getManufacturerSync: j,
  getMaxMemory: In,
  getMaxMemorySync: bn,
  getModel: W,
  getPhoneNumber: sn,
  getPhoneNumberSync: ln,
  getPowerState: En,
  getPowerStateSync: Rn,
  getPreviewSdkInt: pt,
  getPreviewSdkIntSync: mt,
  getProduct: $e,
  getProductSync: et,
  getReadableVersion: fe,
  getSecurityPatch: vt,
  getSecurityPatchSync: wt,
  getSerialNumber: A,
  getSerialNumberSync: M,
  getSystemAvailableFeatures: Sr,
  getSystemAvailableFeaturesSync: Pr,
  getSystemName: J,
  getSystemVersion: Q,
  getTags: rt,
  getTagsSync: at,
  getTotalDiskCapacity: An,
  getTotalDiskCapacityOld: Tn,
  getTotalDiskCapacitySync: Mn,
  getTotalDiskCapacityOldSync: hn,
  getTotalMemory: Sn,
  getTotalMemorySync: Pn,
  getType: dt,
  getTypeSync: st,
  getUniqueId: S,
  getUsedMemory: ve,
  getUsedMemorySync: we,
  getUserAgent: Ie,
  getUserAgentSync: be,
  getVersion: ce,
  hasGms: Rt,
  hasGmsSync: _t,
  hasHms: Wt,
  hasHmsSync: zt,
  hasNotch: Ut,
  hasSystemFeature: fr,
  hasSystemFeatureSync: gr,
  isAirplaneMode: Yn,
  isAirplaneModeSync: Zn,
  isBatteryCharging: jn,
  isBatteryChargingSync: Wn,
  isCameraPresent: K,
  isCameraPresentSync: H,
  isEmulator: Dt,
  isEmulatorSync: Bt,
  isHeadphonesConnected: Ar,
  isHeadphonesConnectedSync: Mr,
  isLandscape: zn,
  isLandscapeSync: Jn,
  isLocationEnabled: Ir,
  isLocationEnabledSync: br,
  isPinOrFingerprintSet: Kt,
  isPinOrFingerprintSetSync: Ht,
  isMouseConnected: Cr,
  isMouseConnectedSync: Vr,
  isKeyboardConnected: Lr,
  isKeyboardConnectedSync: Or,
  isTabletMode: Gr,
  isTablet: Lt,
  supported32BitAbis: ur,
  supported32BitAbisSync: dr,
  supported64BitAbis: lr,
  supported64BitAbisSync: cr,
  supportedAbis: nr,
  supportedAbisSync: rr,
  syncUniqueId: P,
  useBatteryLevel: Rr,
  useBatteryLevelIsLow: _r,
  useDeviceName: zr,
  useFirstInstallTime: Wr,
  useHasSystemFeature: Jr,
  useIsEmulator: Qr,
  usePowerState: qr,
  useManufacturer: Xr,
  useIsHeadphonesConnected: jr,
};
exports.default = Yr;
