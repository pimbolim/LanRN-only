var module1681 = require('./1681').cmpChar,
  module1681 = require('./1681').isDigit,
  module1681 = require('./1681').TYPE,
  c = module1681.WhiteSpace,
  h = module1681.Comment,
  o = module1681.Ident,
  l = module1681.Number,
  u = module1681.Dimension,
  k = 43,
  p = 45,
  S = 110,
  b = true;

function f(s, t) {
  var c = this.scanner.tokenStart + s,
    h = this.scanner.source.charCodeAt(c);

  for ((h !== k && h !== p) || (t && this.error('Number sign is not allowed'), c++); c < this.scanner.tokenEnd; c++)
    module1681(this.scanner.source.charCodeAt(c)) || this.error('Integer is expected', c);
}

function x(s) {
  return f.call(this, 0, s);
}

function C(n, t) {
  if (!module1681(this.scanner.source, this.scanner.tokenStart + n, t)) {
    var c = '';

    switch (t) {
      case S:
        c = 'N is expected';
        break;

      case p:
        c = 'HyphenMinus is expected';
    }

    this.error(c, this.scanner.tokenStart + n);
  }
}

function T() {
  for (var s = 0, n = 0, t = this.scanner.tokenType; t === c || t === h; ) t = this.scanner.lookupType(++s);

  if (t !== l) {
    if (!this.scanner.isDelim(k, s) && !this.scanner.isDelim(p, s)) return null;
    n = this.scanner.isDelim(k, s) ? k : p;

    do {
      t = this.scanner.lookupType(++s);
    } while (t === c || t === h);

    if (t !== l) {
      this.scanner.skip(s);
      x.call(this, b);
    }
  }

  if (s > 0) this.scanner.skip(s);
  if (0 === n && (t = this.scanner.source.charCodeAt(this.scanner.tokenStart)) !== k && t !== p) this.error('Number sign is expected');
  x.call(this, 0 !== n);
  return n === p ? '-' + this.consume(l) : this.consume(l);
}

module.exports = {
  name: 'AnPlusB',
  structure: {
    a: [String, null],
    b: [String, null],
  },
  parse: function () {
    var t = this.scanner.tokenStart,
      c = null,
      h = null;

    if (this.scanner.tokenType === l) {
      x.call(this, false);
      h = this.consume(l);
    } else if (this.scanner.tokenType === o && module1681(this.scanner.source, this.scanner.tokenStart, p))
      switch (((c = '-1'), C.call(this, 1, S), this.scanner.getTokenLength())) {
        case 2:
          this.scanner.next();
          h = T.call(this);
          break;

        case 3:
          C.call(this, 2, p);
          this.scanner.next();
          this.scanner.skipSC();
          x.call(this, b);
          h = '-' + this.consume(l);
          break;

        default:
          C.call(this, 2, p);
          f.call(this, 3, b);
          this.scanner.next();
          h = this.scanner.substrToCursor(t + 2);
      }
    else if (this.scanner.tokenType === o || (this.scanner.isDelim(k) && this.scanner.lookupType(1) === o)) {
      var A = 0;

      switch (((c = '1'), this.scanner.isDelim(k) && ((A = 1), this.scanner.next()), C.call(this, 0, S), this.scanner.getTokenLength())) {
        case 1:
          this.scanner.next();
          h = T.call(this);
          break;

        case 2:
          C.call(this, 1, p);
          this.scanner.next();
          this.scanner.skipSC();
          x.call(this, b);
          h = '-' + this.consume(l);
          break;

        default:
          C.call(this, 1, p);
          f.call(this, 2, b);
          this.scanner.next();
          h = this.scanner.substrToCursor(t + A + 1);
      }
    } else if (this.scanner.tokenType === u) {
      for (
        A = v === k || v === p, v = this.scanner.source.charCodeAt(this.scanner.tokenStart), y = this.scanner.tokenStart + A, undefined;
        y < this.scanner.tokenEnd && module1681(this.scanner.source.charCodeAt(y));
        y++
      ) {
        var v, y;
      }

      if (y === this.scanner.tokenStart + A) this.error('Integer is expected', this.scanner.tokenStart + A);
      C.call(this, y - this.scanner.tokenStart, S);
      c = this.scanner.source.substring(t, y);

      if (y + 1 === this.scanner.tokenEnd) {
        this.scanner.next();
        h = T.call(this);
      } else {
        C.call(this, y - this.scanner.tokenStart + 1, p);

        if (y + 2 === this.scanner.tokenEnd) {
          this.scanner.next();
          this.scanner.skipSC();
          x.call(this, b);
          h = '-' + this.consume(l);
        } else {
          f.call(this, y - this.scanner.tokenStart + 2, b);
          this.scanner.next();
          h = this.scanner.substrToCursor(y + 1);
        }
      }
    } else this.error();

    if (null !== c && c.charCodeAt(0) === k) c = c.substr(1);
    if (null !== h && h.charCodeAt(0) === k) h = h.substr(1);
    return {
      type: 'AnPlusB',
      loc: this.getLocation(t, this.scanner.tokenStart),
      a: c,
      b: h,
    };
  },
  generate: function (s) {
    var n = null !== s.a && undefined !== s.a,
      t = null !== s.b && undefined !== s.b;

    if (n) {
      this.chunk('+1' === s.a ? '+n' : '1' === s.a ? 'n' : '-1' === s.a ? '-n' : s.a + 'n');
      if (t) '-' === (t = String(s.b)).charAt(0) || '+' === t.charAt(0) ? (this.chunk(t.charAt(0)), this.chunk(t.substr(1))) : (this.chunk('+'), this.chunk(t));
    } else this.chunk(String(s.b));
  },
};
