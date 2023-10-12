var module1681 = require('./1681').TYPE,
  s = module1681.String,
  n = module1681.Ident,
  h = module1681.Url,
  p = module1681.Function,
  u = module1681.LeftParenthesis;

module.exports = {
  parse: {
    prelude: function () {
      var t = this.createList();

      switch ((this.scanner.skipSC(), this.scanner.tokenType)) {
        case s:
          t.push(this.String());
          break;

        case h:
        case p:
          t.push(this.Url());
          break;

        default:
          this.error('String or url() is expected');
      }

      if (!(this.lookupNonWSType(0) !== n && this.lookupNonWSType(0) !== u)) {
        t.push(this.WhiteSpace());
        t.push(this.MediaQueryList());
      }

      return t;
    },
    block: null,
  },
};
