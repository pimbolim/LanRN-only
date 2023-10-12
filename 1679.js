var t = Object.prototype.hasOwnProperty,
  n = Object.create(null),
  o = Object.create(null),
  u = 45;

function c(t, n) {
  n = n || 0;
  return t.length - n >= 2 && t.charCodeAt(n) === u && t.charCodeAt(n + 1) === u;
}

function l(t, n) {
  if (((n = n || 0), t.length - n >= 3 && t.charCodeAt(n) === u && t.charCodeAt(n + 1) !== u)) {
    var o = t.indexOf('-', n + 2);
    if (-1 !== o) return t.substring(n, o + 1);
  }

  return '';
}

module.exports = {
  keyword: function (o) {
    if (t.call(n, o)) return n[o];
    var u = o.toLowerCase();
    if (t.call(n, u)) return (n[o] = n[u]);
    var s = c(u, 0),
      f = s ? '' : l(u, 0);
    return (n[o] = Object.freeze({
      basename: u.substr(f.length),
      name: u,
      vendor: f,
      prefix: f,
      custom: s,
    }));
  },
  property: function (n) {
    if (t.call(o, n)) return o[n];
    var u = n,
      s = n[0];
    if ('/' === s) s = '/' === n[1] ? '//' : '/';
    else if ('_' !== s && '*' !== s && '$' !== s && '#' !== s && '+' !== s && '&' !== s) s = '';
    var f = c(u, s.length);
    if (!f && ((u = u.toLowerCase()), t.call(o, u))) return (o[n] = o[u]);
    var h = f ? '' : l(u, s.length),
      b = u.substr(0, s.length + h.length);
    return (o[n] = Object.freeze({
      basename: u.substr(b.length),
      name: u.substr(s.length),
      hack: s,
      vendor: h,
      prefix: b,
      custom: f,
    }));
  },
  isCustomProperty: c,
  vendorPrefix: l,
};
