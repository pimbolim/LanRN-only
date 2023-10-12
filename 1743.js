var module1681 = require('./1681').TYPE,
  n = module1681.LeftParenthesis,
  s = module1681.RightParenthesis;

module.exports = {
  name: 'Parentheses',
  structure: {
    children: [[]],
  },
  parse: function (t, h) {
    var c,
      o = this.scanner.tokenStart;
    this.eat(n);
    c = t.call(this, h);
    if (!this.scanner.eof) this.eat(s);
    return {
      type: 'Parentheses',
      loc: this.getLocation(o, this.scanner.tokenStart),
      children: c,
    };
  },
  generate: function (t) {
    this.chunk('(');
    this.children(t);
    this.chunk(')');
  },
};
