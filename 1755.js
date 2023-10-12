var module1681 = require('./1681').isWhiteSpace,
  module1681 = require('./1681').cmpStr,
  module1681 = require('./1681').TYPE,
  c = module1681.Function,
  h = module1681.Url,
  o = module1681.RightParenthesis;

module.exports = {
  name: 'Url',
  structure: {
    value: ['String', 'Raw'],
  },
  parse: function () {
    var s,
      u = this.scanner.tokenStart;

    switch (this.scanner.tokenType) {
      case h:
        for (var l = u + 4, k = this.scanner.tokenEnd - 1; l < k && module1681(this.scanner.source.charCodeAt(l)); ) l++;

        for (; l < k && module1681(this.scanner.source.charCodeAt(k - 1)); ) k--;

        s = {
          type: 'Raw',
          loc: this.getLocation(l, k),
          value: this.scanner.source.substring(l, k),
        };
        this.eat(h);
        break;

      case c:
        if (!module1681(this.scanner.source, this.scanner.tokenStart, this.scanner.tokenEnd, 'url(')) this.error('Function name must be `url`');
        this.eat(c);
        this.scanner.skipSC();
        s = this.String();
        this.scanner.skipSC();
        this.eat(o);
        break;

      default:
        this.error('Url or Function is expected');
    }

    return {
      type: 'Url',
      loc: this.getLocation(u, this.scanner.tokenStart),
      value: s,
    };
  },
  generate: function (t) {
    this.chunk('url');
    this.chunk('(');
    this.node(t.value);
    this.chunk(')');
  },
};
