var module1704 = require('./1704'),
  n = Object.prototype.hasOwnProperty,
  s = 'undefined' != typeof Map;

function o() {
  this._array = [];
  this._set = s ? new Map() : Object.create(null);
}

o.fromArray = function (t, n) {
  for (var s = new o(), h = 0, p = t.length; h < p; h++) s.add(t[h], n);

  return s;
};

o.prototype.size = function () {
  return s ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

o.prototype.add = function (o, h) {
  var p = s ? o : module1704.toSetString(o),
    u = s ? this.has(o) : n.call(this._set, p),
    y = this._array.length;
  if (!(u && !h)) this._array.push(o);
  if (!u) s ? this._set.set(o, y) : (this._set[p] = y);
};

o.prototype.has = function (o) {
  if (s) return this._set.has(o);
  var h = module1704.toSetString(o);
  return n.call(this._set, h);
};

o.prototype.indexOf = function (o) {
  if (s) {
    var h = this._set.get(o);

    if (h >= 0) return h;
  } else {
    var p = module1704.toSetString(o);
    if (n.call(this._set, p)) return this._set[p];
  }

  throw new Error('"' + o + '" is not in the set.');
};

o.prototype.at = function (t) {
  if (t >= 0 && t < this._array.length) return this._array[t];
  throw new Error('No element indexed by ' + t);
};

o.prototype.toArray = function () {
  return this._array.slice();
};

exports.ArraySet = o;
