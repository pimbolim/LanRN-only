var module1681 = require('./1681').TYPE,
  n = module1681.Ident,
  s = module1681.Function,
  h = module1681.Colon,
  c = module1681.RightParenthesis;

module.exports = {
  name: 'PseudoElementSelector',
  structure: {
    name: String,
    children: [['Raw'], null],
  },
  parse: function () {
    var t,
      o,
      u = this.scanner.tokenStart,
      l = null;
    this.eat(h);
    this.eat(h);

    if (this.scanner.tokenType === s) {
      o = (t = this.consumeFunctionName()).toLowerCase();

      if (this.pseudo.hasOwnProperty(o)) {
        this.scanner.skipSC();
        l = this.pseudo[o].call(this);
        this.scanner.skipSC();
      } else (l = this.createList()).push(this.Raw(this.scanner.tokenIndex, null, false));

      this.eat(c);
    } else t = this.consume(n);

    return {
      type: 'PseudoElementSelector',
      loc: this.getLocation(u, this.scanner.tokenStart),
      name: t,
      children: l,
    };
  },
  generate: function (t) {
    this.chunk('::');
    this.chunk(t.name);

    if (null !== t.children) {
      this.chunk('(');
      this.children(t);
      this.chunk(')');
    }
  },
  walkContext: 'function',
};
