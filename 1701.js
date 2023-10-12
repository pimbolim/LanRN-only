var module1702 = require('./1702'),
  module1704 = require('./1704'),
  module1705 = require('./1705').ArraySet,
  module1706 = require('./1706').MappingList;

function l(n) {
  if (!n) n = {};
  this._file = module1704.getArg(n, 'file', null);
  this._sourceRoot = module1704.getArg(n, 'sourceRoot', null);
  this._skipValidation = module1704.getArg(n, 'skipValidation', false);
  this._sources = new module1705();
  this._names = new module1705();
  this._mappings = new module1706();
  this._sourcesContents = null;
}

l.prototype._version = 3;

l.fromSourceMap = function (n) {
  var t = n.sourceRoot,
    s = new l({
      file: n.file,
      sourceRoot: t,
    });
  n.eachMapping(function (n) {
    var l = {
      generated: {
        line: n.generatedLine,
        column: n.generatedColumn,
      },
    };

    if (null != n.source) {
      l.source = n.source;
      if (null != t) l.source = module1704.relative(t, l.source);
      l.original = {
        line: n.originalLine,
        column: n.originalColumn,
      };
      if (null != n.name) l.name = n.name;
    }

    s.addMapping(l);
  });
  n.sources.forEach(function (l) {
    var u = l;
    if (null !== t) u = module1704.relative(t, l);
    if (!s._sources.has(u)) s._sources.add(u);
    var c = n.sourceContentFor(l);
    if (null != c) s.setSourceContent(l, c);
  });
  return s;
};

l.prototype.addMapping = function (n) {
  var t = module1704.getArg(n, 'generated'),
    s = module1704.getArg(n, 'original', null),
    l = module1704.getArg(n, 'source', null),
    u = module1704.getArg(n, 'name', null);
  if (!this._skipValidation) this._validateMapping(t, s, l, u);

  if (null != l) {
    l = String(l);
    if (!this._sources.has(l)) this._sources.add(l);
  }

  if (null != u) {
    u = String(u);
    if (!this._names.has(u)) this._names.add(u);
  }

  this._mappings.add({
    generatedLine: t.line,
    generatedColumn: t.column,
    originalLine: null != s && s.line,
    originalColumn: null != s && s.column,
    source: l,
    name: u,
  });
};

l.prototype.setSourceContent = function (n, t) {
  var s = n;
  if (null != this._sourceRoot) s = module1704.relative(this._sourceRoot, s);

  if (null != t) {
    if (!this._sourcesContents) this._sourcesContents = Object.create(null);
    this._sourcesContents[module1704.toSetString(s)] = t;
  } else if (this._sourcesContents) {
    delete this._sourcesContents[module1704.toSetString(s)];
    if (0 === Object.keys(this._sourcesContents).length) this._sourcesContents = null;
  }
};

l.prototype.applySourceMap = function (n, s, l) {
  var u = s;

  if (null == s) {
    if (null == n.file)
      throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
    u = n.file;
  }

  var c = this._sourceRoot;
  if (null != c) u = module1704.relative(c, u);
  var p = new module1705(),
    h = new module1705();

  this._mappings.unsortedForEach(function (t) {
    if (t.source === u && null != t.originalLine) {
      var s = n.originalPositionFor({
        line: t.originalLine,
        column: t.originalColumn,
      });

      if (null != s.source) {
        t.source = s.source;
        if (null != l) t.source = module1704.join(l, t.source);
        if (null != c) t.source = module1704.relative(c, t.source);
        t.originalLine = s.line;
        t.originalColumn = s.column;
        if (null != s.name) t.name = s.name;
      }
    }

    var f = t.source;
    if (!(null == f || p.has(f))) p.add(f);
    var _ = t.name;
    if (!(null == _ || h.has(_))) h.add(_);
  }, this);

  this._sources = p;
  this._names = h;
  n.sources.forEach(function (t) {
    var s = n.sourceContentFor(t);

    if (null != s) {
      if (null != l) t = module1704.join(l, t);
      if (null != c) t = module1704.relative(c, t);
      this.setSourceContent(t, s);
    }
  }, this);
};

l.prototype._validateMapping = function (n, o, t, s) {
  if (o && 'number' != typeof o.line && 'number' != typeof o.column)
    throw new Error(
      'original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.'
    );
  if (
    (!(n && 'line' in n && 'column' in n && n.line > 0 && n.column >= 0) || o || t || s) &&
    !(n && 'line' in n && 'column' in n && o && 'line' in o && 'column' in o && n.line > 0 && n.column >= 0 && o.line > 0 && o.column >= 0 && t)
  )
    throw new Error(
      'Invalid mapping: ' +
        JSON.stringify({
          generated: n,
          source: t,
          original: o,
          name: s,
        })
    );
};

l.prototype._serializeMappings = function () {
  for (var t, s, l, u, c = 0, p = 1, h = 0, f = 0, _ = 0, v = 0, y = '', C = this._mappings.toArray(), S = 0, w = C.length; S < w; S++) {
    if (((t = ''), (s = C[S]).generatedLine !== p))
      for (c = 0; s.generatedLine !== p; ) {
        t += ';';
        p++;
      }
    else if (S > 0) {
      if (!module1704.compareByGeneratedPositionsInflated(s, C[S - 1])) continue;
      t += ',';
    }
    t += module1702.encode(s.generatedColumn - c);
    c = s.generatedColumn;

    if (null != s.source) {
      u = this._sources.indexOf(s.source);
      t += module1702.encode(u - v);
      v = u;
      t += module1702.encode(s.originalLine - 1 - f);
      f = s.originalLine - 1;
      t += module1702.encode(s.originalColumn - h);
      h = s.originalColumn;

      if (null != s.name) {
        l = this._names.indexOf(s.name);
        t += module1702.encode(l - _);
        _ = l;
      }
    }

    y += t;
  }

  return y;
};

l.prototype._generateSourcesContent = function (n, t) {
  return n.map(function (n) {
    if (!this._sourcesContents) return null;
    if (null != t) n = module1704.relative(t, n);
    var s = module1704.toSetString(n);
    return Object.prototype.hasOwnProperty.call(this._sourcesContents, s) ? this._sourcesContents[s] : null;
  }, this);
};

l.prototype.toJSON = function () {
  var n = {
    version: this._version,
    sources: this._sources.toArray(),
    names: this._names.toArray(),
    mappings: this._serializeMappings(),
  };
  if (null != this._file) n.file = this._file;
  if (null != this._sourceRoot) n.sourceRoot = this._sourceRoot;
  if (this._sourcesContents) n.sourcesContent = this._generateSourcesContent(n.sources, n.sourceRoot);
  return n;
};

l.prototype.toString = function () {
  return JSON.stringify(this.toJSON());
};

exports.SourceMapGenerator = l;
