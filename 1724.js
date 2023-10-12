var module1681 = require('./1681').TYPE,
  n = module1681.LeftSquareBracket,
  c = module1681.RightSquareBracket;

module.exports = {
  name: 'Brackets',
  structure: {
    children: [[]],
  },
  parse: function (t, s) {
    var h,
      o = this.scanner.tokenStart;
    this.eat(n);
    h = t.call(this, s);
    if (!this.scanner.eof) this.eat(c);
    return {
      type: 'Brackets',
      loc: this.getLocation(o, this.scanner.tokenStart),
      children: h,
    };
  },
  generate: function (t) {
    this.chunk('[');
    this.children(t);
    this.chunk(']');
  },
};
