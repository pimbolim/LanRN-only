var module999 = require('./999'),
  module1054 = require('./1054'),
  module1048 = require('./1048'),
  b = {};

b['[object Float32Array]'] = b['[object Float64Array]'] = b['[object Int8Array]'] = b['[object Int16Array]'] = b['[object Int32Array]'] = b['[object Uint8Array]'] = b[
  '[object Uint8ClampedArray]'
] = b['[object Uint16Array]'] = b['[object Uint32Array]'] = true;
b['[object Arguments]'] = b['[object Array]'] = b['[object ArrayBuffer]'] = b['[object Boolean]'] = b['[object DataView]'] = b['[object Date]'] = b['[object Error]'] = b[
  '[object Function]'
] = b['[object Map]'] = b['[object Number]'] = b['[object Object]'] = b['[object RegExp]'] = b['[object Set]'] = b['[object String]'] = b['[object WeakMap]'] = false;

module.exports = function (j) {
  return module1048(j) && module1054(j.length) && !!b[module999(j)];
};
