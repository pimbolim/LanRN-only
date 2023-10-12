var module1681 = require('./1681').TYPE,
  module1720 = require('./1720').mode,
  s = module1681.AtKeyword,
  l = module1681.Semicolon,
  u = module1681.LeftCurlyBracket,
  c = module1681.RightCurlyBracket;

function o(t) {
  return this.Raw(t, module1720.leftCurlyBracketOrSemicolon, true);
}

function h() {
  for (var t, n = 1; (t = this.scanner.lookupType(n)); n++) {
    if (t === c) return true;
    if (t === u || t === s) return false;
  }

  return false;
}

module.exports = {
  name: 'Atrule',
  structure: {
    name: String,
    prelude: ['AtrulePrelude', 'Raw', null],
    block: ['Block', null],
  },
  parse: function () {
    var t,
      n,
      c = this.scanner.tokenStart,
      k = null,
      p = null;

    switch (
      (this.eat(s),
      (n = (t = this.scanner.substrToCursor(c + 1)).toLowerCase()),
      this.scanner.skipSC(),
      false === this.scanner.eof &&
        this.scanner.tokenType !== u &&
        this.scanner.tokenType !== l &&
        (this.parseAtrulePrelude
          ? 'AtrulePrelude' === (k = this.parseWithFallback(this.AtrulePrelude.bind(this, t), o)).type && null === k.children.head && (k = null)
          : (k = o.call(this, this.scanner.tokenIndex)),
        this.scanner.skipSC()),
      this.scanner.tokenType)
    ) {
      case l:
        this.scanner.next();
        break;

      case u:
        p = this.atrule.hasOwnProperty(n) && 'function' == typeof this.atrule[n].block ? this.atrule[n].block.call(this) : this.Block(h.call(this));
    }

    return {
      type: 'Atrule',
      loc: this.getLocation(c, this.scanner.tokenStart),
      name: t,
      prelude: k,
      block: p,
    };
  },
  generate: function (t) {
    this.chunk('@');
    this.chunk(t.name);

    if (null !== t.prelude) {
      this.chunk(' ');
      this.node(t.prelude);
    }

    if (t.block) this.node(t.block);
    else this.chunk(';');
  },
  walkContext: 'atrule',
};
