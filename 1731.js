var module1681 = require('./1681').TYPE,
  module1720 = require('./1720').mode,
  c = module1681.WhiteSpace,
  s = module1681.Comment,
  o = module1681.Semicolon;

function h(t) {
  return this.Raw(t, module1720.semicolonIncluded, true);
}

module.exports = {
  name: 'DeclarationList',
  structure: {
    children: [['Declaration']],
  },
  parse: function () {
    for (var t = this.createList(); !this.scanner.eof; )
      switch (this.scanner.tokenType) {
        case c:
        case s:
        case o:
          this.scanner.next();
          break;

        default:
          t.push(this.parseWithFallback(this.Declaration, h));
      }

    return {
      type: 'DeclarationList',
      loc: this.getLocationFromList(t),
      children: t,
    };
  },
  generate: function (t) {
    this.children(t, function (t) {
      if ('Declaration' === t.type) this.chunk(';');
    });
  },
};
