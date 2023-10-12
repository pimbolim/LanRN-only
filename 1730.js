var module1679 = require('./1679').isCustomProperty,
  module1681 = require('./1681').TYPE,
  module1720 = require('./1720').mode,
  c = module1681.Ident,
  o = module1681.Hash,
  h = module1681.Colon,
  l = module1681.Semicolon,
  p = module1681.Delim,
  u = module1681.WhiteSpace,
  k = 33,
  y = 35,
  S = 36,
  f = 38,
  x = 42,
  v = 43,
  C = 47;

function D(t) {
  return this.Raw(t, module1720.exclamationMarkOrSemicolon, true);
}

function T(t) {
  return this.Raw(t, module1720.exclamationMarkOrSemicolon, false);
}

function w() {
  var t = this.scanner.tokenIndex,
    n = this.Value();
  if ('Raw' !== n.type && false === this.scanner.eof && this.scanner.tokenType !== l && false === this.scanner.isDelim(k) && false === this.scanner.isBalanceEdge(t)) this.error();
  return n;
}

function I() {
  var t = this.scanner.tokenStart;
  if (this.scanner.tokenType === p)
    switch (this.scanner.source.charCodeAt(this.scanner.tokenStart)) {
      case x:
      case S:
      case v:
      case y:
      case f:
        this.scanner.next();
        break;

      case C:
        this.scanner.next();
        if (this.scanner.isDelim(C)) this.scanner.next();
    }
  if (this.scanner.tokenType === o) this.eat(o);
  else this.eat(c);
  return this.scanner.substrToCursor(t);
}

function b() {
  this.eat(p);
  this.scanner.skipSC();
  var t = this.consume(c);
  return 'important' === t || t;
}

module.exports = {
  name: 'Declaration',
  structure: {
    important: [Boolean, String],
    property: String,
    value: ['Value', 'Raw'],
  },
  parse: function () {
    var n,
      s = this.scanner.tokenStart,
      c = this.scanner.tokenIndex,
      o = I.call(this),
      p = module1679(o),
      y = p ? this.parseCustomProperty : this.parseValue,
      S = p ? T : D,
      f = false;
    this.scanner.skipSC();
    this.eat(h);
    var x = this.scanner.tokenIndex;
    if ((p || this.scanner.skipSC(), (n = y ? this.parseWithFallback(w, S) : S.call(this, this.scanner.tokenIndex)), p && 'Value' === n.type && n.children.isEmpty()))
      for (var v = x - this.scanner.tokenIndex; v <= 0; v++)
        if (this.scanner.lookupType(v) === u) {
          n.children.appendData({
            type: 'WhiteSpace',
            loc: null,
            value: ' ',
          });
          break;
        }

    if (this.scanner.isDelim(k)) {
      f = b.call(this);
      this.scanner.skipSC();
    }

    if (false === this.scanner.eof && this.scanner.tokenType !== l && false === this.scanner.isBalanceEdge(c)) this.error();
    return {
      type: 'Declaration',
      loc: this.getLocation(s, this.scanner.tokenStart),
      important: f,
      property: o,
      value: n,
    };
  },
  generate: function (t) {
    this.chunk(t.property);
    this.chunk(':');
    this.node(t.value);
    if (t.important) this.chunk(true === t.important ? '!important' : '!' + t.important);
  },
  walkContext: 'declaration',
};
