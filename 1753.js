var module1681 = require('./1681').TYPE.Ident,
  n = 42;

function s() {
  if (this.scanner.tokenType !== module1681 && false === this.scanner.isDelim(n)) this.error('Identifier or asterisk is expected');
  this.scanner.next();
}

module.exports = {
  name: 'TypeSelector',
  structure: {
    name: String,
  },
  parse: function () {
    var t = this.scanner.tokenStart;

    if (this.scanner.isDelim(124)) {
      this.scanner.next();
      s.call(this);
    } else {
      s.call(this);

      if (this.scanner.isDelim(124)) {
        this.scanner.next();
        s.call(this);
      }
    }

    return {
      type: 'TypeSelector',
      loc: this.getLocation(t, this.scanner.tokenStart),
      name: this.scanner.substrToCursor(t),
    };
  },
  generate: function (t) {
    this.chunk(t.name);
  },
};
