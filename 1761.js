var module1681 = require('./1681').cmpChar,
  module1681 = require('./1681').cmpStr,
  module1681 = require('./1681').TYPE,
  c = module1681.Ident,
  h = module1681.String,
  o = module1681.Number,
  u = module1681.Function,
  S = module1681.Url,
  k = module1681.Hash,
  f = module1681.Dimension,
  p = module1681.Percentage,
  l = module1681.LeftParenthesis,
  P = module1681.LeftSquareBracket,
  q = module1681.Comma,
  U = module1681.Delim;

module.exports = function (s) {
  switch (this.scanner.tokenType) {
    case k:
      return this.Hash();

    case q:
      s.space = null;
      s.ignoreWSAfter = true;
      return this.Operator();

    case l:
      return this.Parentheses(this.readSequence, s.recognizer);

    case P:
      return this.Brackets(this.readSequence, s.recognizer);

    case h:
      return this.String();

    case f:
      return this.Dimension();

    case p:
      return this.Percentage();

    case o:
      return this.Number();

    case u:
      return module1681(this.scanner.source, this.scanner.tokenStart, this.scanner.tokenEnd, 'url(') ? this.Url() : this.Function(this.readSequence, s.recognizer);

    case S:
      return this.Url();

    case c:
      return module1681(this.scanner.source, this.scanner.tokenStart, 117) && module1681(this.scanner.source, this.scanner.tokenStart + 1, 43)
        ? this.UnicodeRange()
        : this.Identifier();

    case U:
      var x = this.scanner.source.charCodeAt(this.scanner.tokenStart);
      if (47 === x || 42 === x || 43 === x || 45 === x) return this.Operator();
      if (35 === x) this.error('Hex or identifier is expected', this.scanner.tokenStart + 1);
  }
};
