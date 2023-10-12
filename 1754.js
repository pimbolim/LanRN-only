var module1681 = require('./1681').isHexDigit,
  module1681 = require('./1681').cmpChar,
  module1681 = require('./1681').TYPE,
  module1681 = require('./1681').NAME,
  o = module1681.Ident,
  h = module1681.Number,
  l = module1681.Dimension,
  u = 43,
  p = 45,
  x = 63;

function v(n, s) {
  for (var c = this.scanner.tokenStart + n, o = 0; c < this.scanner.tokenEnd; c++) {
    var h = this.scanner.source.charCodeAt(c);

    if (h === p && s && 0 !== o) {
      if (0 === v.call(this, n + o + 1, false)) this.error();
      return -1;
    }

    if (!module1681(h)) this.error(s && 0 !== o ? 'HyphenMinus' + (o < 6 ? ' or hex digit' : '') + ' is expected' : o < 6 ? 'Hex digit is expected' : 'Unexpected input', c);
    if (++o > 6) this.error('Too many hex digits', c);
  }

  this.scanner.next();
  return o;
}

function k(t) {
  for (var n = 0; this.scanner.isDelim(x); ) {
    if (++n > t) this.error('Too many question marks');
    this.scanner.next();
  }
}

function f(t) {
  if (this.scanner.source.charCodeAt(this.scanner.tokenStart) !== t) this.error(module1681[t] + ' is expected');
}

function y() {
  var t = 0;

  if (this.scanner.isDelim(u)) {
    this.scanner.next();
    return this.scanner.tokenType === o
      ? void ((t = v.call(this, 0, true)) > 0 && k.call(this, 6 - t))
      : this.scanner.isDelim(x)
      ? (this.scanner.next(), void k.call(this, 5))
      : void this.error('Hex digit or question mark is expected');
  } else if (this.scanner.tokenType === h) {
    f.call(this, u);
    t = v.call(this, 1, true);
    return this.scanner.isDelim(x)
      ? void k.call(this, 6 - t)
      : this.scanner.tokenType === l || this.scanner.tokenType === h
      ? (f.call(this, p), void v.call(this, 1, false))
      : undefined;
  } else if (this.scanner.tokenType === l) {
    f.call(this, u);
    return void ((t = v.call(this, 1, true)) > 0 && k.call(this, 6 - t));
  } else return void this.error();
}

module.exports = {
  name: 'UnicodeRange',
  structure: {
    value: String,
  },
  parse: function () {
    var t = this.scanner.tokenStart;
    if (!module1681(this.scanner.source, t, 117)) this.error('U is expected');
    if (!module1681(this.scanner.source, t + 1, u)) this.error('Plus sign is expected');
    this.scanner.next();
    y.call(this);
    return {
      type: 'UnicodeRange',
      loc: this.getLocation(t, this.scanner.tokenStart),
      value: this.scanner.substrToCursor(t),
    };
  },
  generate: function (t) {
    this.chunk(t.value);
  },
};
