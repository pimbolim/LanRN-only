var module1791 = require('./1791'),
  module1792 = require('./1792'),
  u = module1791.isTag;

module.exports = {
  getInnerHTML: function (n, u) {
    return n.children
      ? n.children
          .map(function (n) {
            return module1792(n, u);
          })
          .join('')
      : '';
  },
  getOuterHTML: module1792,
  getText: function t(c) {
    if (Array.isArray(c)) return c.map(t).join('');
    if (u(c)) return 'br' === c.name ? '\n' : t(c.children);
    if (c.type === module1791.CDATA) return t(c.children);
    if (c.type === module1791.Text) return c.data;
    return '';
  },
};
