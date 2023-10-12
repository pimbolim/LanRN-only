var t =
  (this && this.__importDefault) ||
  function (t) {
    return t && t.__esModule
      ? t
      : {
          default: t,
        };
  };

var module1800 = t(require('./1800')),
  u =
    String.fromCodePoint ||
    function (t) {
      var n = '';

      if (t > 65535) {
        t -= 65536;
        n += String.fromCharCode(((t >>> 10) & 1023) | 55296);
        t = 56320 | (1023 & t);
      }

      n += String.fromCharCode(t);
      return n;
    };

exports.default = function (t) {
  if ((t >= 55296 && t <= 57343) || t > 1114111) return '\ufffd';
  else {
    if (t in module1800.default) t = module1800.default[t];
    return u(t);
  }
};
