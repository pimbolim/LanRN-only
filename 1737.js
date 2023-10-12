var module1681 = require('./1681').TYPE,
  n = module1681.Ident,
  s = module1681.Number,
  h = module1681.Dimension,
  o = module1681.LeftParenthesis,
  u = module1681.RightParenthesis,
  c = module1681.Colon,
  k = module1681.Delim;

module.exports = {
  name: 'MediaFeature',
  structure: {
    name: String,
    value: ['Identifier', 'Number', 'Dimension', 'Ratio', null],
  },
  parse: function () {
    var t,
      l = this.scanner.tokenStart,
      p = null;

    if ((this.eat(o), this.scanner.skipSC(), (t = this.consume(n)), this.scanner.skipSC(), this.scanner.tokenType !== u)) {
      switch ((this.eat(c), this.scanner.skipSC(), this.scanner.tokenType)) {
        case s:
          p = this.lookupNonWSType(1) === k ? this.Ratio() : this.Number();
          break;

        case h:
          p = this.Dimension();
          break;

        case n:
          p = this.Identifier();
          break;

        default:
          this.error('Number, dimension, ratio or identifier is expected');
      }

      this.scanner.skipSC();
    }

    this.eat(u);
    return {
      type: 'MediaFeature',
      loc: this.getLocation(l, this.scanner.tokenStart),
      name: t,
      value: p,
    };
  },
  generate: function (t) {
    this.chunk('(');
    this.chunk(t.name);

    if (null !== t.value) {
      this.chunk(':');
      this.node(t.value);
    }

    this.chunk(')');
  },
};
