var module1681 = require('./1681').TYPE,
  module1720 = require('./1720').mode,
  s = module1681.WhiteSpace,
  c = module1681.Comment,
  h = module1681.Semicolon,
  o = module1681.AtKeyword,
  l = module1681.LeftCurlyBracket,
  u = module1681.RightCurlyBracket;

function k(t) {
  return this.Raw(t, null, true);
}

function f() {
  return this.parseWithFallback(this.Rule, k);
}

function p(t) {
  return this.Raw(t, module1720.semicolonIncluded, true);
}

function y() {
  if (this.scanner.tokenType === h) return p.call(this, this.scanner.tokenIndex);
  var t = this.parseWithFallback(this.Declaration, p);
  if (this.scanner.tokenType === h) this.scanner.next();
  return t;
}

module.exports = {
  name: 'Block',
  structure: {
    children: [['Atrule', 'Rule', 'Declaration']],
  },
  parse: function (t) {
    var n = t ? y : f,
      h = this.scanner.tokenStart,
      p = this.createList();
    this.eat(l);

    t: for (; !this.scanner.eof; )
      switch (this.scanner.tokenType) {
        case u:
          break t;

        case s:
        case c:
          this.scanner.next();
          break;

        case o:
          p.push(this.parseWithFallback(this.Atrule, k));
          break;

        default:
          p.push(n.call(this));
      }

    if (!this.scanner.eof) this.eat(u);
    return {
      type: 'Block',
      loc: this.getLocation(h, this.scanner.tokenStart),
      children: p,
    };
  },
  generate: function (t) {
    this.chunk('{');
    this.children(t, function (t) {
      if ('Declaration' === t.type) this.chunk(';');
    });
    this.chunk('}');
  },
  walkContext: 'block',
};
