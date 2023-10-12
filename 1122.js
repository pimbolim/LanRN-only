module.exports = function (c) {
  var o = [];
  c.replace(n, function (n, c, l) {
    var u = c.toLowerCase();

    for (l = h(l), 'm' == u && l.length > 2 && (o.push([c].concat(l.splice(0, 2))), (u = 'l'), (c = 'm' == c ? 'l' : 'L')); ; ) {
      if (l.length == t[u]) {
        l.unshift(c);
        return o.push(l);
      }

      if (l.length < t[u]) throw new Error('malformed path data');
      o.push([c].concat(l.splice(0, t[u])));
    }
  });
  return o;
};

var t = {
    a: 7,
    c: 6,
    h: 1,
    l: 2,
    m: 2,
    q: 4,
    s: 4,
    t: 2,
    v: 1,
    z: 0,
  },
  n = /([astvzqmhlc])([^astvzqmhlc]*)/gi;
var c = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;

function h(t) {
  var n = t.match(c);
  return n ? n.map(Number) : [];
}
