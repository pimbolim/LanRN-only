var module1701 = require('./1701').SourceMapGenerator,
  l = {
    Atrule: true,
    Selector: true,
    Declaration: true,
  };

module.exports = function (o) {
  var c = new module1701(),
    t = 1,
    u = 0,
    p = {
      line: 1,
      column: 0,
    },
    s = {
      line: 0,
      column: 0,
    },
    f = false,
    h = {
      line: 1,
      column: 0,
    },
    v = {
      generated: h,
    },
    y = o.node;

  o.node = function (n) {
    if (n.loc && n.loc.start && l.hasOwnProperty(n.type)) {
      var o = n.loc.start.line,
        M = n.loc.start.column - 1;

      if (!(s.line === o && s.column === M)) {
        s.line = o;
        s.column = M;
        p.line = t;
        p.column = u;

        if (f) {
          f = false;
          if (!(p.line === h.line && p.column === h.column)) c.addMapping(v);
        }

        f = true;
        c.addMapping({
          source: n.loc.source,
          original: s,
          generated: p,
        });
      }
    }

    y.call(this, n);

    if (f && l.hasOwnProperty(n.type)) {
      h.line = t;
      h.column = u;
    }
  };

  var M = o.chunk;

  o.chunk = function (n) {
    for (var l = 0; l < n.length; l++) 10 === n.charCodeAt(l) ? (t++, (u = 0)) : u++;

    M(n);
  };

  var w = o.result;

  o.result = function () {
    if (f) c.addMapping(v);
    return {
      css: w(),
      map: c,
    };
  };

  return o;
};
