require('./1398');

var module24 = require('./24'),
  module25 = require('./25'),
  ReactNative = require('react-native'),
  module1397 = require('./1397'),
  module1400 = require('./1400'),
  module1493 = require('./1493'),
  module1402 = require('./1402'),
  module1414 = require('./1414'),
  module1427 = require('./1427'),
  module1428 = require('./1428'),
  module1429 = require('./1429'),
  module1430 = require('./1430'),
  module1438 = require('./1438'),
  module1460 = require('./1460'),
  module1462 = require('./1462'),
  module1463 = require('./1463'),
  module1471 = require('./1471'),
  module1474 = require('./1474'),
  module1485 = require('./1485'),
  module1488 = require('./1488'),
  module1491 = require('./1491'),
  k = ReactNative.NativeModules.RNFirebase,
  v = new ((function () {
    function t() {
      if ((module24.default(this, t), !k)) throw new Error(module1400.default.STRINGS.ERROR_MISSING_CORE);
      module1397.default.initializeNativeApps();
      this.admob = module1397.default.moduleAndStatics('admob', module1402.statics, module1402.MODULE_NAME);
      this.analytics = module1397.default.moduleAndStatics('analytics', module1427.statics, module1427.MODULE_NAME);
      this.auth = module1397.default.moduleAndStatics('auth', module1414.statics, module1414.MODULE_NAME);
      this.config = module1397.default.moduleAndStatics('config', module1428.statics, module1428.MODULE_NAME);
      this.crashlytics = module1397.default.moduleAndStatics('crashlytics', module1429.statics, module1429.MODULE_NAME);
      this.database = module1397.default.moduleAndStatics('database', module1430.statics, module1430.MODULE_NAME);
      this.firestore = module1397.default.moduleAndStatics('firestore', module1438.statics, module1438.MODULE_NAME);
      this.functions = module1397.default.moduleAndStatics('functions', module1460.statics, module1460.MODULE_NAME);
      this.iid = module1397.default.moduleAndStatics('iid', module1462.statics, module1462.MODULE_NAME);
      this.links = module1397.default.moduleAndStatics('links', module1463.statics, module1463.MODULE_NAME);
      this.messaging = module1397.default.moduleAndStatics('messaging', module1471.statics, module1471.MODULE_NAME);
      this.notifications = module1397.default.moduleAndStatics('notifications', module1474.statics, module1474.MODULE_NAME);
      this.perf = module1397.default.moduleAndStatics('perf', module1485.statics, module1485.MODULE_NAME);
      this.storage = module1397.default.moduleAndStatics('storage', module1488.statics, module1488.MODULE_NAME);
      this.utils = module1397.default.moduleAndStatics('utils', module1491.statics, module1491.MODULE_NAME);
    }

    module25.default(t, [
      {
        key: 'initializeApp',
        value: function (t, s) {
          return module1397.default.initializeApp(t, s);
        },
      },
      {
        key: 'app',
        value: function (t) {
          return module1397.default.app(t);
        },
      },
      {
        key: 'apps',
        get: function () {
          return module1397.default.apps();
        },
      },
      {
        key: 'SDK_VERSION',
        get: function () {
          return module1493.default;
        },
      },
    ]);
    return t;
  })())(),
  R = v;

exports.default = R;
var I = v.admob,
  w = v.analytics,
  z = v.auth,
  G = v.config,
  j = v.crashlytics,
  C = v.database,
  F = v.firestore,
  K = v.functions,
  P = v.iid,
  T = v.links,
  V = v.messaging,
  q = v.notifications,
  x = v.perf,
  B = v.storage,
  H = v.utils;
exports.utils = H;
exports.storage = B;
exports.perf = x;
exports.notifications = q;
exports.messaging = V;
exports.links = T;
exports.iid = P;
exports.functions = K;
exports.firestore = F;
exports.database = C;
exports.crashlytics = j;
exports.config = G;
exports.auth = z;
exports.analytics = w;
exports.admob = I;
