var module1681 = require('./1681').TYPE,
  n = module1681.WhiteSpace,
  s = module1681.Comment,
  c = module1681.AtKeyword,
  h = module1681.CDO,
  o = module1681.CDC;

function l(t) {
  return this.Raw(t, null, false);
}

module.exports = {
  name: 'StyleSheet',
  structure: {
    children: [['Comment', 'CDO', 'CDC', 'Atrule', 'Rule', 'Raw']],
  },
  parse: function () {
    for (var t, u = this.scanner.tokenStart, C = this.createList(); !this.scanner.eof; ) {
      switch (this.scanner.tokenType) {
        case n:
          this.scanner.next();
          continue;

        case s:
          if (33 !== this.scanner.source.charCodeAt(this.scanner.tokenStart + 2)) {
            this.scanner.next();
            continue;
          }

          t = this.Comment();
          break;

        case h:
          t = this.CDO();
          break;

        case o:
          t = this.CDC();
          break;

        case c:
          t = this.parseWithFallback(this.Atrule, l);
          break;

        default:
          t = this.parseWithFallback(this.Rule, l);
      }

      C.push(t);
    }

    return {
      type: 'StyleSheet',
      loc: this.getLocation(u, this.scanner.tokenStart),
      children: C,
    };
  },
  generate: function (t) {
    this.children(t);
  },
  walkContext: 'stylesheet',
};
