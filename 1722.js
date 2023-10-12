var module1681 = require('./1681').TYPE,
  n = module1681.Ident,
  s = module1681.String,
  c = module1681.Colon,
  h = module1681.LeftSquareBracket,
  o = module1681.RightSquareBracket,
  l = 36,
  u = 42,
  k = 61,
  p = 94,
  S = 124,
  f = 126;

function x() {
  if (this.scanner.eof) this.error('Unexpected end of input');
  var t = this.scanner.tokenStart,
    s = false,
    h = true;

  if (this.scanner.isDelim(u)) {
    s = true;
    h = false;
    this.scanner.next();
  } else if (!this.scanner.isDelim(S)) this.eat(n);

  if (this.scanner.isDelim(S))
    this.scanner.source.charCodeAt(this.scanner.tokenStart + 1) !== k ? (this.scanner.next(), this.eat(n)) : s && this.error('Identifier is expected', this.scanner.tokenEnd);
  else if (s) this.error('Vertical line is expected');

  if (h && this.scanner.tokenType === c) {
    this.scanner.next();
    this.eat(n);
  }

  return {
    type: 'Identifier',
    loc: this.getLocation(t, this.scanner.tokenStart),
    name: this.scanner.substrToCursor(t),
  };
}

function v() {
  var t = this.scanner.tokenStart,
    n = this.scanner.source.charCodeAt(t);
  if (n !== k && n !== f && n !== p && n !== l && n !== u && n !== S) this.error('Attribute selector (=, ~=, ^=, $=, *=, |=) is expected');
  this.scanner.next();

  if (n !== k) {
    if (!this.scanner.isDelim(k)) this.error('Equal sign is expected');
    this.scanner.next();
  }

  return this.scanner.substrToCursor(t);
}

module.exports = {
  name: 'AttributeSelector',
  structure: {
    name: 'Identifier',
    matcher: [String, null],
    value: ['String', 'Identifier', null],
    flags: [String, null],
  },
  parse: function () {
    var module1681,
      c = this.scanner.tokenStart,
      l = null,
      u = null,
      k = null;
    this.eat(h);
    this.scanner.skipSC();
    module1681 = x.call(this);
    this.scanner.skipSC();

    if (this.scanner.tokenType !== o) {
      if (this.scanner.tokenType !== n) {
        l = v.call(this);
        this.scanner.skipSC();
        u = this.scanner.tokenType === s ? this.String() : this.Identifier();
        this.scanner.skipSC();
      }

      if (this.scanner.tokenType === n) {
        k = this.scanner.getTokenValue();
        this.scanner.next();
        this.scanner.skipSC();
      }
    }

    this.eat(o);
    return {
      type: 'AttributeSelector',
      loc: this.getLocation(c, this.scanner.tokenStart),
      name: module1681,
      matcher: l,
      value: u,
      flags: k,
    };
  },
  generate: function (t) {
    var n = ' ';
    this.chunk('[');
    this.node(t.name);

    if (null !== t.matcher) {
      this.chunk(t.matcher);

      if (null !== t.value) {
        this.node(t.value);
        if ('String' === t.value.type) n = '';
      }
    }

    if (null !== t.flags) {
      this.chunk(n);
      this.chunk(t.flags);
    }

    this.chunk(']');
  },
};
