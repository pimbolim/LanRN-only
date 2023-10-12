var module1681 = require('./1681'),
  module1672 = new (require('./1672'))(),
  o = {
    decorator: function (n) {
      var t = null,
        o = {
          len: 0,
          node: null,
        },
        u = [o],
        c = '';
      return {
        children: n.children,
        node: function (o) {
          var l = t;
          t = o;
          n.node.call(this, o);
          t = l;
        },
        chunk: function (n) {
          c += n;
          if (o.node !== t)
            u.push({
              len: n.length,
              node: t,
            });
          else o.len += n.length;
        },
        result: function () {
          return l(c, u);
        },
      };
    },
  };

function l(o, l) {
  var u = [],
    c = 0,
    f = 0,
    h = l ? l[f].node : null;

  for (module1681(o, module1672); !module1672.eof; ) {
    if (l)
      for (; f < l.length && c + l[f].len <= module1672.tokenStart; ) {
        c += l[f++].len;
        h = l[f].node;
      }
    u.push({
      type: module1672.tokenType,
      value: module1672.getTokenValue(),
      index: module1672.tokenIndex,
      balance: module1672.balance[module1672.tokenIndex],
      node: h,
    });
    module1672.next();
  }

  return u;
}

module.exports = function (n, t) {
  return 'string' == typeof n ? l(n, null) : t.generate(n, o);
};
