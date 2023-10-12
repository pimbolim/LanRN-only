module.exports = function (t) {
  var n,
    o = {};
  if (!(t instanceof Object) || Array.isArray(t)) throw new Error('keyMirror(...): Argument must be an object.');

  for (n in t) t.hasOwnProperty(n) && (o[n] = n);

  return o;
};
