var module1682 = require('./1682'),
  module1681 = require('./1681').isBOM,
  n = 10,
  o = 12,
  u = 13;

function l(l, h) {
  for (
    var c = h.length, f = module1682(l.lines, c), C = l.startLine, p = module1682(l.columns, c), A = l.startColumn, v = h.length > 0 ? module1681(h.charCodeAt(0)) : 0;
    v < c;
    v++
  ) {
    var L = h.charCodeAt(v);
    f[v] = C;
    p[v] = A++;

    if (!(L !== n && L !== u && L !== o)) {
      if (L === u && v + 1 < c && h.charCodeAt(v + 1) === n) {
        f[++v] = C;
        p[v] = A;
      }

      C++;
      A = 1;
    }
  }

  f[v] = C;
  p[v] = A;
  l.lines = f;
  l.columns = p;
}

var h = function () {
  this.lines = null;
  this.columns = null;
  this.linesAndColumnsComputed = false;
};

h.prototype = {
  setSource: function (t, s, n, o) {
    this.source = t;
    this.startOffset = undefined === s ? 0 : s;
    this.startLine = undefined === n ? 1 : n;
    this.startColumn = undefined === o ? 1 : o;
    this.linesAndColumnsComputed = false;
  },
  ensureLinesAndColumnsComputed: function () {
    if (!this.linesAndColumnsComputed) {
      l(this, this.source);
      this.linesAndColumnsComputed = true;
    }
  },
  getLocation: function (t, s) {
    this.ensureLinesAndColumnsComputed();
    return {
      source: s,
      offset: this.startOffset + t,
      line: this.lines[t],
      column: this.columns[t],
    };
  },
  getLocationRange: function (t, s, n) {
    this.ensureLinesAndColumnsComputed();
    return {
      source: n,
      start: {
        offset: this.startOffset + t,
        line: this.lines[t],
        column: this.columns[t],
      },
      end: {
        offset: this.startOffset + s,
        line: this.lines[s],
        column: this.columns[s],
      },
    };
  },
};
module.exports = h;
