var module1681 = require('./1681').TYPE,
  t = module1681.WhiteSpace,
  c = module1681.Semicolon,
  s = module1681.LeftCurlyBracket,
  o = module1681.Delim,
  u = 33;

function h() {
  return this.scanner.tokenIndex > 0 && this.scanner.lookupType(-1) === t
    ? this.scanner.tokenIndex > 1
      ? this.scanner.getTokenStart(this.scanner.tokenIndex - 1)
      : this.scanner.firstCharOffset
    : this.scanner.tokenStart;
}

function l() {
  return 0;
}

module.exports = {
  name: 'Raw',
  structure: {
    value: String,
  },
  parse: function (n, t, c) {
    var s,
      o = this.scanner.getTokenStart(n);
    this.scanner.skip(this.scanner.getRawLength(n, t || l));
    s = c && this.scanner.tokenStart > o ? h.call(this) : this.scanner.tokenStart;
    return {
      type: 'Raw',
      loc: this.getLocation(o, s),
      value: this.scanner.source.substring(o, s),
    };
  },
  generate: function (n) {
    this.chunk(n.value);
  },
  mode: {
    default: l,
    leftCurlyBracket: function (n) {
      return n === s ? 1 : 0;
    },
    leftCurlyBracketOrSemicolon: function (n) {
      return n === s || n === c ? 1 : 0;
    },
    exclamationMarkOrSemicolon: function (n, t, s) {
      return n === o && t.charCodeAt(s) === u ? 1 : n === c ? 1 : 0;
    },
    semicolonIncluded: function (n) {
      return n === c ? 2 : 0;
    },
  },
};
