var module1681 = require('./1681').TYPE,
  n = module1681.WhiteSpace,
  s = module1681.Comment,
  c = module1681.Ident,
  o = module1681.Function,
  h = module1681.Colon,
  u = module1681.LeftParenthesis;

function l() {
  return this.createSingleNodeList(this.Raw(this.scanner.tokenIndex, null, false));
}

function p() {
  this.scanner.skipSC();
  return this.scanner.tokenType === c && this.lookupNonWSType(1) === h ? this.createSingleNodeList(this.Declaration()) : k.call(this);
}

function k() {
  var t,
    h = this.createList(),
    k = null;
  this.scanner.skipSC();

  e: for (; !this.scanner.eof; ) {
    switch (this.scanner.tokenType) {
      case n:
        k = this.WhiteSpace();
        continue;

      case s:
        this.scanner.next();
        continue;

      case o:
        t = this.Function(l, this.scope.AtrulePrelude);
        break;

      case c:
        t = this.Identifier();
        break;

      case u:
        t = this.Parentheses(p, this.scope.AtrulePrelude);
        break;

      default:
        break e;
    }

    if (null !== k) {
      h.push(k);
      k = null;
    }

    h.push(t);
  }

  return h;
}

module.exports = {
  parse: {
    prelude: function () {
      var t = k.call(this);
      if (null === this.getFirstListNode(t)) this.error('Condition is expected');
      return t;
    },
    block: function () {
      return this.Block(false);
    },
  },
};
