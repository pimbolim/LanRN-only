exports.default = function (l) {
  var x = l.viewBox,
    o = l.preserveAspectRatio;
  if (!x) return null;
  var u = (Array.isArray(x) ? x : x.trim().split(M)).map(Number);

  if (4 !== u.length || u.some(isNaN)) {
    console.warn('Invalid `viewBox` prop:' + x);
    return null;
  }

  var v = o ? o.trim().split(M) : [],
    s = v[0],
    c = v[1];
  return {
    minX: u[0],
    minY: u[1],
    vbWidth: u[2],
    vbHeight: u[3],
    align: t[s] || 'xMidYMid',
    meetOrSlice: n[c] || 0,
  };
};

var n = {
  meet: 0,
  slice: 1,
  none: 2,
};
exports.meetOrSliceTypes = n;
var t = ['xMinYMin', 'xMidYMin', 'xMaxYMin', 'xMinYMid', 'xMidYMid', 'xMaxYMid', 'xMinYMax', 'xMidYMax', 'xMaxYMax', 'none'].reduce(function (n, t) {
  n[t] = t;
  return n;
}, {});
exports.alignEnum = t;
var M = /\s+/;
