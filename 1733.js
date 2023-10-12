var module1681 = require('./1681').TYPE.RightParenthesis;

module.exports = {
  name: 'Function',
  structure: {
    name: String,
    children: [[]],
  },
  parse: function (n, s) {
    var c,
      h = this.scanner.tokenStart,
      o = this.consumeFunctionName(),
      u = o.toLowerCase();
    c = s.hasOwnProperty(u) ? s[u].call(this, s) : n.call(this, s);
    if (!this.scanner.eof) this.eat(module1681);
    return {
      type: 'Function',
      loc: this.getLocation(h, this.scanner.tokenStart),
      name: o,
      children: c,
    };
  },
  generate: function (t) {
    this.chunk(t.name);
    this.chunk('(');
    this.children(t);
    this.chunk(')');
  },
  walkContext: 'function',
};
