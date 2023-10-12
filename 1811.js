exports.default = function (t, s) {
  var n = [];
  if ('' !== (t = b(n, '' + t, s))) throw new Error('Unmatched selector: ' + t);
  return n;
};

var t = /^[^\\]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
  s = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
  n = /^\s*((?:\\.|[\w\u00b0-\uFFFF-])+)\s*(?:(\S?)=\s*(?:(['"])((?:[^\\]|\\[^])*?)\3|(#?(?:\\.|[\w\u00b0-\uFFFF-])*)|)|)\s*(i)?\]/,
  o = {
    undefined: 'exists',
    '': 'equals',
    '~': 'element',
    '^': 'start',
    $: 'end',
    '*': 'any',
    '!': 'not',
    '|': 'hyphen',
  },
  u = {
    '>': 'child',
    '<': 'parent',
    '~': 'sibling',
    '+': 'adjacent',
  },
  h = {
    '#': ['id', 'equals'],
    '.': ['class', 'element'],
  },
  l = new Set(['has', 'not', 'matches', 'is', 'host', 'host-context']),
  c = new Set(['contains', 'icontains']),
  f = new Set(['"', "'"]);

function p(t, s, n) {
  var o = parseInt(s, 16) - 65536;
  return o != o || n ? s : o < 0 ? String.fromCharCode(o + 65536) : String.fromCharCode((o >> 10) | 55296, (1023 & o) | 56320);
}

function w(t) {
  return t.replace(s, p);
}

function v(t) {
  return ' ' === t || '\n' === t || '\t' === t || '\f' === t || '\r' === t;
}

function b(s, p, C) {
  var F, E;
  if (undefined === C) C = {};
  var A = [],
    S = false;

  function x() {
    var s = p.match(t);
    if (!s) throw new Error('Expected name, found ' + p);
    var n = s[0];
    p = p.substr(n.length);
    return w(n);
  }

  function M(t) {
    for (; v(p.charAt(t)); ) t++;

    p = p.substr(t);
  }

  function L(t) {
    for (var s = 0; '\\' === p.charAt(--t); ) s++;

    return 1 == (1 & s);
  }

  for (M(0); '' !== p; ) {
    var _ = p.charAt(0);

    if (v(_)) {
      S = true;
      M(1);
    } else if (_ in u) {
      A.push({
        type: u[_],
      });
      S = false;
      M(1);
    } else if (',' === _) {
      if (0 === A.length) throw new Error('Empty sub-selector');
      s.push(A);
      A = [];
      S = false;
      M(1);
    } else if (
      (S &&
        (A.length > 0 &&
          A.push({
            type: 'descendant',
          }),
        (S = false)),
      '*' === _)
    ) {
      p = p.substr(1);
      A.push({
        type: 'universal',
      });
    } else if (_ in h) {
      var q = h[_],
        W = q[0],
        j = q[1];
      p = p.substr(1);
      A.push({
        type: 'attribute',
        name: W,
        action: j,
        value: x(),
        ignoreCase: false,
      });
    } else if ('[' === _) {
      var P = (p = p.substr(1)).match(n);
      if (!P) throw new Error('Malformed attribute selector: ' + p);
      var U = P[0],
        I = P[1],
        N = P[2],
        O = P[4],
        T = undefined === O ? '' : O,
        $ = P[5],
        k = undefined === $ ? T : $,
        z = P[6];
      p = p.substr(U.length);
      var B = w(I);
      if (null !== (F = C.lowerCaseAttributeNames) && undefined !== F ? F : !C.xmlMode) B = B.toLowerCase();
      A.push({
        type: 'attribute',
        name: B,
        action: o[N],
        value: w(k),
        ignoreCase: !!z,
      });
    } else if (':' === _) {
      if (':' === p.charAt(1)) {
        p = p.substr(2);
        A.push({
          type: 'pseudo-element',
          name: x().toLowerCase(),
        });
        continue;
      }

      p = p.substr(1);
      var D = x().toLowerCase(),
        G = null;
      if (p.startsWith('('))
        if (l.has(D)) {
          var H = p.charAt(1),
            J = f.has(H);

          if (((p = b((G = []), (p = p.substr(J ? 2 : 1)), C)), J)) {
            if (!p.startsWith(H)) throw new Error('Unmatched quotes in :' + D);
            p = p.substr(1);
          }

          if (!p.startsWith(')')) throw new Error('Missing closing parenthesis in :' + D + ' (' + p + ')');
          p = p.substr(1);
        } else {
          for (var K = 1, Q = 1; Q > 0 && K < p.length; K++) '(' !== p.charAt(K) || L(K) ? ')' !== p.charAt(K) || L(K) || Q-- : Q++;

          if (Q) throw new Error('Parenthesis not matched');

          if (((G = p.substr(1, K - 2)), (p = p.substr(K)), c.has(D))) {
            if ((H = G.charAt(0)) === G.slice(-1) && f.has(H)) G = G.slice(1, -1);
            G = w(G);
          }
        }
      A.push({
        type: 'pseudo',
        name: D,
        data: G,
      });
    } else {
      if (!t.test(p)) {
        if (A.length && 'descendant' === A[A.length - 1].type) A.pop();
        y(s, A);
        return p;
      }

      var R = x();
      if (null !== (E = C.lowerCaseTags) && undefined !== E ? E : !C.xmlMode) R = R.toLowerCase();
      A.push({
        type: 'tag',
        name: R,
      });
    }
  }

  y(s, A);
  return p;
}

function y(t, s) {
  if (t.length > 0 && 0 === s.length) throw new Error('Empty sub-selector');
  t.push(s);
}
