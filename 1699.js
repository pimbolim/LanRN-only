var module1700 = require('./1700'),
  t = Object.prototype.hasOwnProperty;

function o(n, t) {
  var o = n.children,
    c = null;
  if ('function' != typeof t) o.forEach(this.node, this);
  else
    o.forEach(function (n) {
      if (null !== c) t.call(this, c);
      this.node(n);
      c = n;
    }, this);
}

module.exports = function (c) {
  function u(n) {
    if (!t.call(f, n.type)) throw new Error('Unknown node type: ' + n.type);
    f[n.type].call(this, n);
  }

  var f = {};
  if (c.node) for (var l in c.node) f[l] = c.node[l].generate;
  return function (t, c) {
    var f = '',
      l = {
        children: o,
        node: u,
        chunk: function (n) {
          f += n;
        },
        result: function () {
          return f;
        },
      };

    if (c) {
      if ('function' == typeof c.decorator) l = c.decorator(l);
      if (c.sourceMap) l = module1700(l);
    }

    l.node(t);
    return l.result();
  };
};
