require('./49');

var module65 = require('./65');

module.exports = function (t) {
  if (undefined === t || null === t) return t;
  var o = module65(t);

  if (null !== o && undefined !== o) {
    if ('object' == typeof o) {
      var module66 = require('./66').processColorObject(o);

      if (null != module66) return module66;
    }

    if ('number' != typeof o) return null;
    else {
      o = ((o << 24) | (o >>> 8)) >>> 0;
      o |= 0;
      return o;
    }
  }
};
