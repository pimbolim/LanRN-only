var module1681 = require('./1681').TYPE.Ident;

module.exports = {
  name: 'Combinator',
  structure: {
    name: String,
  },
  parse: function () {
    var n = this.scanner.tokenStart;

    switch (this.scanner.source.charCodeAt(this.scanner.tokenStart)) {
      case 62:
      case 43:
      case 126:
        this.scanner.next();
        break;

      case 47:
        this.scanner.next();
        if (!(this.scanner.tokenType === module1681 && false !== this.scanner.lookupValue(0, 'deep'))) this.error('Identifier `deep` is expected');
        this.scanner.next();
        if (!this.scanner.isDelim(47)) this.error('Solidus is expected');
        this.scanner.next();
        break;

      default:
        this.error('Combinator is expected');
    }

    return {
      type: 'Combinator',
      loc: this.getLocation(n, this.scanner.tokenStart),
      name: this.scanner.substrToCursor(n),
    };
  },
  generate: function (t) {
    this.chunk(t.name);
  },
};
