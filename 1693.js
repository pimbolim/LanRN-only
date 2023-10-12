var module1669 = require('./1669');

function t(n) {
  return 'node' in n ? n.node : t(n.match[0]);
}

function c(n) {
  return 'node' in n ? n.node : c(n.match[n.match.length - 1]);
}

module.exports = {
  matchFragments: function (o, u, h, f, l) {
    var s = [];
    if (null !== h.matched)
      (function h(y) {
        if (null !== y.syntax && y.syntax.type === f && y.syntax.name === l) {
          var p = t(y),
            x = c(y);
          o.syntax.walk(u, function (t, c, o) {
            if (t === p) {
              var u = new module1669();

              do {
                if ((u.appendData(c.data), c.data === x)) break;
                c = c.next;
              } while (null !== c);

              s.push({
                parent: o,
                nodes: u,
              });
            }
          });
        }

        if (Array.isArray(y.match)) y.match.forEach(h);
      })(h.matched);
    return s;
  },
};
