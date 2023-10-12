var module1681 = require('./1681').isDigit,
  module1681 = require('./1681').TYPE,
  s = module1681.Number,
  h = module1681.Delim,
  o = 46;

function c() {
  this.scanner.skipWS();

  for (var n = this.consume(s), h = 0; h < n.length; h++) {
    var c = n.charCodeAt(h);
    if (!(module1681(c) || c === o)) this.error('Unsigned number is expected', this.scanner.tokenStart - n.length + h);
  }

  if (0 === Number(n)) this.error('Zero number is not allowed', this.scanner.tokenStart - n.length);
  return n;
}

module.exports = {
  name: 'Ratio',
  structure: {
    left: String,
    right: String,
  },
  parse: function () {
    var module1681,
      n = this.scanner.tokenStart,
      s = c.call(this);
    this.scanner.skipWS();
    if (!this.scanner.isDelim(47)) this.error('Solidus is expected');
    this.eat(h);
    module1681 = c.call(this);
    return {
      type: 'Ratio',
      loc: this.getLocation(n, this.scanner.tokenStart),
      left: s,
      right: module1681,
    };
  },
  generate: function (t) {
    this.chunk(t.left);
    this.chunk('/');
    this.chunk(t.right);
  },
};
