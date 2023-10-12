var t = 'Expected a function',
  n = NaN,
  o = '[object Symbol]',
  u = /^\s+|\s+$/g,
  f = /^[-+]0x[0-9a-f]+$/i,
  c = /^0b[01]+$/i,
  s = /^0o[0-7]+$/i,
  v = parseInt,
  l = 'object' == typeof globals && globals && globals.Object === Object && globals,
  p = 'object' == typeof self && self && self.Object === Object && self,
  b = l || p || Function('return this')(),
  y = Object.prototype.toString,
  j = Math.max,
  O = Math.min,
  h = function () {
    return b.Date.now();
  };

function x(t) {
  var n = typeof t;
  return !!t && ('object' == n || 'function' == n);
}

function T(t) {
  return !!t && 'object' == typeof t;
}

function $(t) {
  return 'symbol' == typeof t || (T(t) && y.call(t) == o);
}

function w(t) {
  if ('number' == typeof t) return t;
  if ($(t)) return n;

  if (x(t)) {
    var o = 'function' == typeof t.valueOf ? t.valueOf() : t;
    t = x(o) ? o + '' : o;
  }

  if ('string' != typeof t) return 0 === t ? t : +t;
  t = t.replace(u, '');
  var l = c.test(t);
  return l || s.test(t) ? v(t.slice(2), l ? 2 : 8) : f.test(t) ? n : +t;
}

module.exports = function (n, o, u) {
  var f,
    c,
    s,
    v,
    l,
    p,
    b = 0,
    y = false,
    T = false,
    $ = true;
  if ('function' != typeof n) throw new TypeError(t);

  function E(t) {
    var o = f,
      u = c;
    f = c = undefined;
    b = t;
    v = n.apply(u, o);
    return v;
  }

  function M(t) {
    b = t;
    l = setTimeout(W, o);
    return y ? E(t) : v;
  }

  function N(t) {
    var n = o - (t - p);
    return T ? O(n, s - (t - b)) : n;
  }

  function S(t) {
    var n = t - p;
    return undefined === p || n >= o || n < 0 || (T && t - b >= s);
  }

  function W() {
    var t = h();
    if (S(t)) return _(t);
    l = setTimeout(W, N(t));
  }

  function _(t) {
    l = undefined;
    if ($ && f) return E(t);
    else {
      f = c = undefined;
      return v;
    }
  }

  function D() {
    var t = h(),
      n = S(t);

    if (((f = arguments), (c = this), (p = t), n)) {
      if (undefined === l) return M(p);

      if (T) {
        l = setTimeout(W, o);
        return E(p);
      }
    }

    if (undefined === l) l = setTimeout(W, o);
    return v;
  }

  o = w(o) || 0;

  if (x(u)) {
    y = !!u.leading;
    s = (T = 'maxWait' in u) ? j(w(u.maxWait) || 0, o) : s;
    $ = 'trailing' in u ? !!u.trailing : $;
  }

  D.cancel = function () {
    if (undefined !== l) clearTimeout(l);
    b = 0;
    f = p = c = l = undefined;
  };

  D.flush = function () {
    return undefined === l ? v : _(h());
  };

  return D;
};
