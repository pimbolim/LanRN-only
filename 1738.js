var module1681 = require('./1681').TYPE,
  n = module1681.WhiteSpace,
  s = module1681.Comment,
  c = module1681.Ident,
  h = module1681.LeftParenthesis;

module.exports = {
  name: 'MediaQuery',
  structure: {
    children: [['Identifier', 'MediaFeature', 'WhiteSpace']],
  },
  parse: function () {
    this.scanner.skipSC();
    var t = this.createList(),
      u = null,
      o = null;

    e: for (; !this.scanner.eof; ) {
      switch (this.scanner.tokenType) {
        case s:
          this.scanner.next();
          continue;

        case n:
          o = this.WhiteSpace();
          continue;

        case c:
          u = this.Identifier();
          break;

        case h:
          u = this.MediaFeature();
          break;

        default:
          break e;
      }

      if (null !== o) {
        t.push(o);
        o = null;
      }

      t.push(u);
    }

    if (null === u) this.error('Identifier or parenthesis is expected');
    return {
      type: 'MediaQuery',
      loc: this.getLocationFromList(t),
      children: t,
    };
  },
  generate: function (t) {
    this.children(t);
  },
};
