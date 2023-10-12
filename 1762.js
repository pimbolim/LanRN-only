var module1681 = require('./1681').TYPE,
  s = module1681.Delim,
  c = module1681.Ident,
  n = module1681.Dimension,
  o = module1681.Percentage,
  h = module1681.Number,
  u = module1681.Hash,
  l = module1681.Colon,
  S = module1681.LeftSquareBracket,
  p = 35,
  k = 42,
  C = 43,
  b = 47,
  f = 46,
  P = 62,
  T = 124,
  y = 126;

module.exports = {
  getNode: function (t) {
    switch (this.scanner.tokenType) {
      case S:
        return this.AttributeSelector();

      case u:
        return this.IdSelector();

      case l:
        return this.scanner.lookupType(1) === l ? this.PseudoElementSelector() : this.PseudoClassSelector();

      case c:
        return this.TypeSelector();

      case h:
      case o:
        return this.Percentage();

      case n:
        if (this.scanner.source.charCodeAt(this.scanner.tokenStart) === f) this.error('Identifier is expected', this.scanner.tokenStart + 1);
        break;

      case s:
        switch (this.scanner.source.charCodeAt(this.scanner.tokenStart)) {
          case C:
          case P:
          case y:
            t.space = null;
            t.ignoreWSAfter = true;
            return this.Combinator();

          case b:
            return this.Combinator();

          case f:
            return this.ClassSelector();

          case k:
          case T:
            return this.TypeSelector();

          case p:
            return this.IdSelector();
        }
    }
  },
};
