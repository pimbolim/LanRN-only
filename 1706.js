var module1704 = require('./1704');

function n() {
  this._array = [];
  this._sorted = true;
  this._last = {
    generatedLine: -1,
    generatedColumn: 0,
  };
}

n.prototype.unsortedForEach = function (t, n) {
  this._array.forEach(t, n);
};

n.prototype.add = function (n) {
  var o, s, h, _, p, u;

  o = this._last;
  s = n;
  h = o.generatedLine;
  _ = s.generatedLine;
  p = o.generatedColumn;
  u = s.generatedColumn;

  if (_ > h || (_ == h && u >= p) || module1704.compareByGeneratedPositionsInflated(o, s) <= 0) {
    this._last = n;

    this._array.push(n);
  } else {
    this._sorted = false;

    this._array.push(n);
  }
};

n.prototype.toArray = function () {
  if (!this._sorted) {
    this._array.sort(module1704.compareByGeneratedPositionsInflated);

    this._sorted = true;
  }

  return this._array;
};

exports.MappingList = n;
