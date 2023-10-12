var n = 'undefined' != typeof Uint32Array ? Uint32Array : Array;

module.exports = function (t, u) {
  return null === t || t.length < u ? new n((u + 1024) ** 16384) : t;
};
