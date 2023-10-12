var module1673 = require('./1673'),
  n = module1673.TYPE,
  s = module1673.NAME,
  module1674 = require('./1674').cmpStr,
  h = n.EOF,
  f = n.WhiteSpace,
  u = n.Comment,
  k = function () {
    this.offsetAndType = null;
    this.balance = null;
    this.reset();
  };

k.prototype = {
  reset: function () {
    this.eof = false;
    this.tokenIndex = -1;
    this.tokenType = 0;
    this.tokenStart = this.firstCharOffset;
    this.tokenEnd = this.firstCharOffset;
  },
  lookupType: function (t) {
    return (t += this.tokenIndex) < this.tokenCount ? this.offsetAndType[t] >> 24 : h;
  },
  lookupOffset: function (t) {
    return (t += this.tokenIndex) < this.tokenCount ? 16777215 & this.offsetAndType[t - 1] : this.source.length;
  },
  lookupValue: function (t, n) {
    return (t += this.tokenIndex) < this.tokenCount && module1674(this.source, 16777215 & this.offsetAndType[t - 1], 16777215 & this.offsetAndType[t], n);
  },
  getTokenStart: function (t) {
    return t === this.tokenIndex
      ? this.tokenStart
      : t > 0
      ? t < this.tokenCount
        ? 16777215 & this.offsetAndType[t - 1]
        : 16777215 & this.offsetAndType[this.tokenCount]
      : this.firstCharOffset;
  },
  getRawLength: function (t, n) {
    var s,
      o = t,
      h = 16777215 & this.offsetAndType[(o - 1) ** 0];

    t: for (; o < this.tokenCount && !((s = this.balance[o]) < t); o++)
      switch (n(this.offsetAndType[o] >> 24, this.source, h)) {
        case 1:
          break t;

        case 2:
          o++;
          break t;

        default:
          if (this.balance[s] === o) o = s;
          h = 16777215 & this.offsetAndType[o];
      }

    return o - this.tokenIndex;
  },
  isBalanceEdge: function (t) {
    return this.balance[this.tokenIndex] < t;
  },
  isDelim: function (t, s) {
    return s ? this.lookupType(s) === n.Delim && this.source.charCodeAt(this.lookupOffset(s)) === t : this.tokenType === n.Delim && this.source.charCodeAt(this.tokenStart) === t;
  },
  getTokenValue: function () {
    return this.source.substring(this.tokenStart, this.tokenEnd);
  },
  getTokenLength: function () {
    return this.tokenEnd - this.tokenStart;
  },
  substrToCursor: function (t) {
    return this.source.substring(t, this.tokenStart);
  },
  skipWS: function () {
    for (var t = this.tokenIndex, n = 0; t < this.tokenCount && this.offsetAndType[t] >> 24 === f; t++, n++);

    if (n > 0) this.skip(n);
  },
  skipSC: function () {
    for (; this.tokenType === f || this.tokenType === u; ) this.next();
  },
  skip: function (t) {
    var n = this.tokenIndex + t;

    if (n < this.tokenCount) {
      this.tokenIndex = n;
      this.tokenStart = 16777215 & this.offsetAndType[n - 1];
      n = this.offsetAndType[n];
      this.tokenType = n >> 24;
      this.tokenEnd = 16777215 & n;
    } else {
      this.tokenIndex = this.tokenCount;
      this.next();
    }
  },
  next: function () {
    var t = this.tokenIndex + 1;

    if (t < this.tokenCount) {
      this.tokenIndex = t;
      this.tokenStart = this.tokenEnd;
      t = this.offsetAndType[t];
      this.tokenType = t >> 24;
      this.tokenEnd = 16777215 & t;
    } else {
      this.tokenIndex = this.tokenCount;
      this.eof = true;
      this.tokenType = h;
      this.tokenStart = this.tokenEnd = this.source.length;
    }
  },
  forEachToken: function (t) {
    for (var n = 0, s = this.firstCharOffset; n < this.tokenCount; n++) {
      var o = s,
        h = this.offsetAndType[n],
        f = 16777215 & h;
      s = f;
      t(h >> 24, o, f, n);
    }
  },
  dump: function () {
    var t = this,
      n = new Array(this.tokenCount);
    this.forEachToken(function (o, h, f, u) {
      n[u] = {
        idx: u,
        type: s[o],
        chunk: t.source.substring(h, f),
        balance: t.balance[u],
      };
    });
    return n;
  },
};
module.exports = k;
