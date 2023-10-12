var module1063 = require('./1063'),
  module995 = require('./995'),
  module1064 = require('./1064'),
  module1065 = require('./1065'),
  module1066 = require('./1066'),
  module999 = require('./999'),
  module1008 = require('./1008'),
  u = module1008(module1063),
  w = module1008(module995),
  f = module1008(module1064),
  p = module1008(module1065),
  v = module1008(module1066),
  M = module999;

if (
  (module1063 && '[object DataView]' != M(new module1063(new ArrayBuffer(1)))) ||
  (module995 && '[object Map]' != M(new module995())) ||
  (module1064 && '[object Promise]' != M(module1064.resolve())) ||
  (module1065 && '[object Set]' != M(new module1065())) ||
  (module1066 && '[object WeakMap]' != M(new module1066()))
)
  M = function (t) {
    var c = module999(t),
      o = '[object Object]' == c ? t.constructor : undefined,
      n = o ? module1008(o) : '';
    if (n)
      switch (n) {
        case u:
          return '[object DataView]';

        case w:
          return '[object Map]';

        case f:
          return '[object Promise]';

        case p:
          return '[object Set]';

        case v:
          return '[object WeakMap]';
      }
    return c;
  };
module.exports = M;
