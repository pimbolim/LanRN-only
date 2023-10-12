exports.getArg = function (n, t, o) {
  if (t in n) return n[t];
  if (3 === arguments.length) return o;
  throw new Error('"' + t + '" is a required argument.');
};

var n = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,
  t = /^data:.+\,.+$/;

function o(t) {
  var o = t.match(n);
  return o
    ? {
        scheme: o[1],
        auth: o[2],
        host: o[3],
        port: o[4],
        path: o[5],
      }
    : null;
}

function u(n) {
  var t = '';
  if (n.scheme) t += n.scheme + ':';
  t += '//';
  if (n.auth) t += n.auth + '@';
  if (n.host) t += n.host;
  if (n.port) t += ':' + n.port;
  if (n.path) t += n.path;
  return t;
}

function c(n) {
  var t = n,
    c = o(n);

  if (c) {
    if (!c.path) return n;
    t = c.path;
  }

  for (var l, h = exports.isAbsolute(t), s = t.split(/\/+/), f = 0, p = s.length - 1; p >= 0; p--)
    '.' === (l = s[p]) ? s.splice(p, 1) : '..' === l ? f++ : f > 0 && ('' === l ? (s.splice(p + 1, f), (f = 0)) : (s.splice(p, 2), f--));

  if ('' === (t = s.join('/'))) t = h ? '/' : '.';

  if (c) {
    c.path = t;
    return u(c);
  } else return t;
}

function l(n, l) {
  if ('' === n) n = '.';
  if ('' === l) l = '.';
  var h = o(l),
    s = o(n);

  if ((s && (n = s.path || '/'), h && !h.scheme)) {
    if (s) h.scheme = s.scheme;
    return u(h);
  }

  if (h || l.match(t)) return l;

  if (s && !s.host && !s.path) {
    s.host = l;
    return u(s);
  }

  var f = '/' === l.charAt(0) ? l : c(n.replace(/\/+$/, '') + '/' + l);

  if (s) {
    s.path = f;
    return u(s);
  } else return f;
}

exports.urlParse = o;
exports.urlGenerate = u;
exports.normalize = c;
exports.join = l;

exports.isAbsolute = function (t) {
  return '/' === t.charAt(0) || n.test(t);
};

exports.relative = function (n, t) {
  if ('' === n) n = '.';
  n = n.replace(/\/$/, '');

  for (var o = 0; 0 !== t.indexOf(n + '/'); ) {
    var u = n.lastIndexOf('/');
    if (u < 0) return t;
    if ((n = n.slice(0, u)).match(/^([^\/]+:\/)?\/*$/)) return t;
    ++o;
  }

  return Array(o + 1).join('../') + t.substr(n.length + 1);
};

var h = !('__proto__' in Object.create(null));

function s(n) {
  return n;
}

function f(n) {
  if (!n) return false;
  var t = n.length;
  if (t < 9) return false;
  if (
    95 !== n.charCodeAt(t - 1) ||
    95 !== n.charCodeAt(t - 2) ||
    111 !== n.charCodeAt(t - 3) ||
    116 !== n.charCodeAt(t - 4) ||
    111 !== n.charCodeAt(t - 5) ||
    114 !== n.charCodeAt(t - 6) ||
    112 !== n.charCodeAt(t - 7) ||
    95 !== n.charCodeAt(t - 8) ||
    95 !== n.charCodeAt(t - 9)
  )
    return false;

  for (var o = t - 10; o >= 0; o--) if (36 !== n.charCodeAt(o)) return false;

  return true;
}

function p(n, t) {
  return n === t ? 0 : null === n ? 1 : null === t ? -1 : n > t ? 1 : -1;
}

exports.toSetString = h
  ? s
  : function (n) {
      return f(n) ? '$' + n : n;
    };
exports.fromSetString = h
  ? s
  : function (n) {
      return f(n) ? n.slice(1) : n;
    };

exports.compareByOriginalPositions = function (n, t, o) {
  var u = p(n.source, t.source);
  return 0 !== u
    ? u
    : 0 != (u = n.originalLine - t.originalLine)
    ? u
    : 0 != (u = n.originalColumn - t.originalColumn) || o
    ? u
    : 0 != (u = n.generatedColumn - t.generatedColumn)
    ? u
    : 0 != (u = n.generatedLine - t.generatedLine)
    ? u
    : p(n.name, t.name);
};

exports.compareByGeneratedPositionsDeflated = function (n, t, o) {
  var u = n.generatedLine - t.generatedLine;
  return 0 !== u
    ? u
    : 0 != (u = n.generatedColumn - t.generatedColumn) || o
    ? u
    : 0 !== (u = p(n.source, t.source))
    ? u
    : 0 != (u = n.originalLine - t.originalLine)
    ? u
    : 0 != (u = n.originalColumn - t.originalColumn)
    ? u
    : p(n.name, t.name);
};

exports.compareByGeneratedPositionsInflated = function (n, t) {
  var o = n.generatedLine - t.generatedLine;
  return 0 !== o
    ? o
    : 0 != (o = n.generatedColumn - t.generatedColumn)
    ? o
    : 0 !== (o = p(n.source, t.source))
    ? o
    : 0 != (o = n.originalLine - t.originalLine)
    ? o
    : 0 != (o = n.originalColumn - t.originalColumn)
    ? o
    : p(n.name, t.name);
};

exports.parseSourceMapInput = function (n) {
  return JSON.parse(n.replace(/^\)]}'[^\n]*\n/, ''));
};

exports.computeSourceURL = function (n, t, h) {
  if (((t = t || ''), n && ('/' !== n[n.length - 1] && '/' !== t[0] && (n += '/'), (t = n + t)), h)) {
    var s = o(h);
    if (!s) throw new Error('sourceMapURL could not be parsed');

    if (s.path) {
      var f = s.path.lastIndexOf('/');
      if (f >= 0) s.path = s.path.substring(0, f + 1);
    }

    t = l(u(s), t);
  }

  return c(t);
};
