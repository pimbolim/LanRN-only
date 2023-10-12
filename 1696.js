var module1697 = require('./1697'),
  module1670 = require('./1670'),
  module1672 = require('./1672'),
  module1669 = require('./1669'),
  module1681 = require('./1681'),
  module1673 = require('./1673'),
  module1674 = require('./1674'),
  p = module1674.findWhiteSpaceStart,
  f = module1674.cmpStr,
  module1698 = require('./1698'),
  P = function () {},
  k = module1673.TYPE,
  v = module1673.NAME,
  x = k.WhiteSpace,
  w = k.Comment,
  E = k.Ident,
  L = k.Function,
  y = k.Url,
  S = k.Hash,
  T = k.Percentage,
  C = k.Number;

function M(n) {
  return function () {
    return this[n]();
  };
}

function N(n) {
  var t = {
    context: {},
    scope: {},
    atrule: {},
    pseudo: {},
  };
  if (n.parseContext)
    for (var o in n.parseContext)
      switch (typeof n.parseContext[o]) {
        case 'function':
          t.context[o] = n.parseContext[o];
          break;

        case 'string':
          t.context[o] = M(n.parseContext[o]);
      }
  if (n.scope) for (var o in n.scope) t.scope[o] = n.scope[o];
  if (n.atrule)
    for (var o in n.atrule) {
      var s = n.atrule[o];
      if (s.parse) t.atrule[o] = s.parse;
    }
  if (n.pseudo)
    for (var o in n.pseudo) {
      var c = n.pseudo[o];
      if (c.parse) t.pseudo[o] = c.parse;
    }
  if (n.node) for (var o in n.node) t[o] = n.node[o].parse;
  return t;
}

module.exports = function (u) {
  var l = {
    scanner: new module1672(),
    locationMap: new module1697(),
    filename: '<unknown>',
    needPositions: false,
    onParseError: P,
    onParseErrorThrow: false,
    parseAtrulePrelude: true,
    parseRulePrelude: true,
    parseValue: true,
    parseCustomProperty: false,
    readSequence: module1698,
    createList: function () {
      return new module1669();
    },
    createSingleNodeList: function (n) {
      return new module1669().appendData(n);
    },
    getFirstListNode: function (n) {
      return n && n.first();
    },
    getLastListNode: function (n) {
      return n.last();
    },
    parseWithFallback: function (n, t) {
      var o = this.scanner.tokenIndex;

      try {
        return n.call(this);
      } catch (n) {
        if (this.onParseErrorThrow) throw n;
        var s = t.call(this, o);
        this.onParseErrorThrow = true;
        this.onParseError(n, s);
        this.onParseErrorThrow = false;
        return s;
      }
    },
    lookupNonWSType: function (n) {
      do {
        var t = this.scanner.lookupType(n++);
        if (t !== x) return t;
      } while (0 !== t);

      return 0;
    },
    eat: function (n) {
      if (this.scanner.tokenType !== n) {
        var t = this.scanner.tokenStart,
          o = v[n] + ' is expected';

        switch (n) {
          case E:
            if (this.scanner.tokenType === L || this.scanner.tokenType === y) {
              t = this.scanner.tokenEnd - 1;
              o = 'Identifier is expected but function found';
            } else o = 'Identifier is expected';

            break;

          case S:
            if (this.scanner.isDelim(35)) {
              this.scanner.next();
              t++;
              o = 'Name is expected';
            }

            break;

          case T:
            if (this.scanner.tokenType === C) {
              t = this.scanner.tokenEnd;
              o = 'Percent sign is expected';
            }

            break;

          default:
            if (this.scanner.source.charCodeAt(this.scanner.tokenStart) === n) t += 1;
        }

        this.error(o, t);
      }

      this.scanner.next();
    },
    consume: function (n) {
      var t = this.scanner.getTokenValue();
      this.eat(n);
      return t;
    },
    consumeFunctionName: function () {
      var n = this.scanner.source.substring(this.scanner.tokenStart, this.scanner.tokenEnd - 1);
      this.eat(L);
      return n;
    },
    getLocation: function (n, t) {
      return this.needPositions ? this.locationMap.getLocationRange(n, t, this.filename) : null;
    },
    getLocationFromList: function (n) {
      if (this.needPositions) {
        var t = this.getFirstListNode(n),
          o = this.getLastListNode(n);
        return this.locationMap.getLocationRange(
          null !== t ? t.loc.start.offset - this.locationMap.startOffset : this.scanner.tokenStart,
          null !== o ? o.loc.end.offset - this.locationMap.startOffset : this.scanner.tokenStart,
          this.filename
        );
      }

      return null;
    },
    error: function (n, o) {
      var s =
        undefined !== o && o < this.scanner.source.length
          ? this.locationMap.getLocation(o)
          : this.scanner.eof
          ? this.locationMap.getLocation(p(this.scanner.source, this.scanner.source.length - 1))
          : this.locationMap.getLocation(this.scanner.tokenStart);
      throw new module1670(n || 'Unexpected input', this.scanner.source, s.offset, s.line, s.column);
    },
  };

  for (var k in (u = N(u || {}))) l[k] = u[k];

  return function (n, t) {
    var module1672,
      s = (t = t || {}).context || 'default',
      u = t.onComment;
    if (
      (module1681(n, l.scanner),
      l.locationMap.setSource(n, t.offset, t.line, t.column),
      (l.filename = t.filename || '<unknown>'),
      (l.needPositions = Boolean(t.positions)),
      (l.onParseError = 'function' == typeof t.onParseError ? t.onParseError : P),
      (l.onParseErrorThrow = false),
      (l.parseAtrulePrelude = !('parseAtrulePrelude' in t) || Boolean(t.parseAtrulePrelude)),
      (l.parseRulePrelude = !('parseRulePrelude' in t) || Boolean(t.parseRulePrelude)),
      (l.parseValue = !('parseValue' in t) || Boolean(t.parseValue)),
      (l.parseCustomProperty = 'parseCustomProperty' in t && Boolean(t.parseCustomProperty)),
      !l.context.hasOwnProperty(s))
    )
      throw new Error('Unknown context `' + s + '`');
    if ('function' == typeof u)
      l.scanner.forEachToken(function (t, o, s) {
        if (t === w) {
          var c = l.getLocation(o, s),
            p = f(n, s - 2, s, '*/') ? n.slice(o + 2, s - 2) : n.slice(o + 2, s);
          u(p, c);
        }
      });
    module1672 = l.context[s].call(l, t);
    if (!l.scanner.eof) l.error();
    return module1672;
  };
};
