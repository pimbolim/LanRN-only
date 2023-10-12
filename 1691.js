var t = Object.prototype.hasOwnProperty,
  module1690 = require('./1690'),
  l = module1690.MATCH,
  c = module1690.MISMATCH,
  u = module1690.DISALLOW_EMPTY,
  module1673 = require('./1673').TYPE,
  o = 0,
  h = 1,
  p = 2,
  k = 3,
  f = 'Match',
  y = 'Mismatch',
  x = 'Maximum iteration number exceeded (please fill an issue on https://github.com/csstree/csstree/issues)',
  v = 15e3,
  b = 0;

function S(t) {
  for (var n = null, l = null, c = t; null !== c; ) {
    l = c.prev;
    c.prev = n;
    n = c;
    c = l;
  }

  return n;
}

function M(t, n) {
  if (t.length !== n.length) return false;

  for (var l = 0; l < t.length; l++) {
    var c = t.charCodeAt(l),
      u = n.charCodeAt(l);
    if ((c >= 65 && c <= 90 && (c |= 32), c !== u)) return false;
  }

  return true;
}

function w(t) {
  return t.type === module1673.Delim && '?' !== t.value;
}

function C(t) {
  return (
    null === t ||
    t.type === module1673.Comma ||
    t.type === module1673.Function ||
    t.type === module1673.LeftParenthesis ||
    t.type === module1673.LeftSquareBracket ||
    t.type === module1673.LeftCurlyBracket ||
    w(t)
  );
}

function A(t) {
  return null === t || t.type === module1673.RightParenthesis || t.type === module1673.RightSquareBracket || t.type === module1673.RightCurlyBracket || t.type === module1673.Delim;
}

function O(n, S, w) {
  function O() {
    do {
      G = ++H < n.length ? n[H] : null;
    } while (null !== G && (G.type === module1673.WhiteSpace || G.type === module1673.Comment));
  }

  function T(t) {
    var l = H + t;
    return l < n.length ? n[l] : null;
  }

  function B(t, n) {
    return {
      nextState: t,
      matchStack: W,
      syntaxStack: R,
      thenStack: D,
      tokenIndex: H,
      prev: n,
    };
  }

  function I(t) {
    D = {
      nextState: t,
      matchStack: W,
      syntaxStack: R,
      prev: D,
    };
  }

  function L(t) {
    K = B(t, K);
  }

  function E() {
    W = {
      type: h,
      syntax: S.syntax,
      token: G,
      prev: W,
    };
    O();
    _ = null;
    if (H > N) N = H;
  }

  function P() {
    W =
      W.type === p
        ? W.prev
        : {
            type: k,
            syntax: R.syntax,
            token: W.token,
            prev: W,
          };
    R = R.prev;
  }

  var R = null,
    D = null,
    K = null,
    _ = null,
    q = 0,
    F = null,
    G = null,
    H = -1,
    N = 0,
    W = {
      type: o,
      syntax: null,
      token: null,
      prev: null,
    };

  for (O(); null === F && ++q < v; )
    switch (S.type) {
      case 'Match':
        if (null === D) {
          if (null !== G && (H !== n.length - 1 || ('\\0' !== G.value && '\\9' !== G.value))) {
            S = c;
            break;
          }

          F = f;
          break;
        }

        if ((S = D.nextState) === u) {
          if (D.matchStack === W) {
            S = c;
            break;
          }

          S = l;
        }

        for (; D.syntaxStack !== R; ) P();

        D = D.prev;
        break;

      case 'Mismatch':
        if (null !== _ && false !== _) (null === K || H > K.tokenIndex) && ((K = _), (_ = false));
        else if (null === K) {
          F = y;
          break;
        }
        S = K.nextState;
        D = K.thenStack;
        R = K.syntaxStack;
        W = K.matchStack;
        H = K.tokenIndex;
        G = H < n.length ? n[H] : null;
        K = K.prev;
        break;

      case 'MatchGraph':
        S = S.match;
        break;

      case 'If':
        if (S.else !== c) L(S.else);
        if (S.then !== l) I(S.then);
        S = S.match;
        break;

      case 'MatchOnce':
        S = {
          type: 'MatchOnceBuffer',
          syntax: S,
          index: 0,
          mask: 0,
        };
        break;

      case 'MatchOnceBuffer':
        var Y = S.syntax.terms;

        if (S.index === Y.length) {
          if (0 === S.mask || S.syntax.all) {
            S = c;
            break;
          }

          S = l;
          break;
        }

        if (S.mask === (1 << Y.length) - 1) {
          S = l;
          break;
        }

        for (; S.index < Y.length; S.index++) {
          var $ = 1 << S.index;

          if (0 == (S.mask & $)) {
            L(S);
            I({
              type: 'AddMatchOnce',
              syntax: S.syntax,
              mask: S.mask | $,
            });
            S = Y[S.index++];
            break;
          }
        }

        break;

      case 'AddMatchOnce':
        S = {
          type: 'MatchOnceBuffer',
          syntax: S.syntax,
          index: 0,
          mask: S.mask,
        };
        break;

      case 'Enum':
        if (null !== G)
          if ((-1 !== (Q = G.value.toLowerCase()).indexOf('\\') && (Q = Q.replace(/\\[09].*$/, '')), t.call(S.map, Q))) {
            S = S.map[Q];
            break;
          }
        S = c;
        break;

      case 'Generic':
        var j = null !== R ? R.opts : null,
          U = H + Math.floor(S.fn(G, T, j));

        if (!isNaN(U) && U > H) {
          for (; H < U; ) E();

          S = l;
        } else S = c;

        break;

      case 'Type':
      case 'Property':
        var z = 'Type' === S.type ? 'types' : 'properties',
          J = t.call(w, z) ? w[z][S.name] : null;
        if (!J || !J.match) throw new Error('Bad syntax reference: ' + ('Type' === S.type ? '<' + S.name + '>' : "<'" + S.name + "'>"));
        if (false !== _ && null !== G && 'Type' === S.type)
          if (('custom-ident' === S.name && G.type === module1673.Ident) || ('length' === S.name && '0' === G.value)) {
            if (null === _) _ = B(S, K);
            S = c;
            break;
          }
        R = {
          syntax: S.syntax,
          opts: S.syntax.opts || (null !== R && R.opts) || null,
          prev: R,
        };
        W = {
          type: p,
          syntax: S.syntax,
          token: W.token,
          prev: W,
        };
        S = J.match;
        break;

      case 'Keyword':
        var Q = S.name;

        if (null !== G) {
          var V = G.value;

          if ((-1 !== V.indexOf('\\') && (V = V.replace(/\\[09].*$/, '')), M(V, Q))) {
            E();
            S = l;
            break;
          }
        }

        S = c;
        break;

      case 'AtKeyword':
      case 'Function':
        if (null !== G && M(G.value, S.name)) {
          E();
          S = l;
          break;
        }

        S = c;
        break;

      case 'Token':
        if (null !== G && G.value === S.value) {
          E();
          S = l;
          break;
        }

        S = c;
        break;

      case 'Comma':
        if (null !== G && G.type === module1673.Comma) C(W.token) ? (S = c) : (E(), (S = A(G) ? c : l));
        else S = C(W.token) || A(G) ? l : c;
        break;

      case 'String':
        var X = '';

        for (U = H; U < n.length && X.length < S.value.length; U++) X += n[U].value;

        if (M(X, S.value)) {
          for (; H < U; ) E();

          S = l;
        } else S = c;

        break;

      default:
        throw new Error('Unknown node type: ' + S.type);
    }

  switch (((b += q), F)) {
    case null:
      console.warn('[csstree-match] BREAK after 15000 iterations');
      F = x;
      W = null;
      break;

    case f:
      for (; null !== R; ) P();

      break;

    default:
      W = null;
  }

  return {
    tokens: n,
    reason: F,
    iterations: q,
    match: W,
    longestMatch: N,
  };
}

module.exports = {
  matchAsList: function (t, n, l) {
    var c = O(t, n, l || {});

    if (null !== c.match) {
      var u = S(c.match).prev;

      for (c.match = []; null !== u; ) {
        switch (u.type) {
          case o:
            break;

          case p:
          case k:
            c.match.push({
              type: u.type,
              syntax: u.syntax,
            });
            break;

          default:
            c.match.push({
              token: u.token.value,
              node: u.token.node,
            });
        }

        u = u.prev;
      }
    }

    return c;
  },
  matchAsTree: function (t, n, l) {
    var c = O(t, n, l || {});
    if (null === c.match) return c;
    var u = c.match,
      s = (c.match = {
        syntax: n.syntax || null,
        match: [],
      }),
      o = [s];

    for (u = S(u).prev; null !== u; ) {
      switch (u.type) {
        case p:
          s.match.push(
            (s = {
              syntax: u.syntax,
              match: [],
            })
          );
          o.push(s);
          break;

        case k:
          o.pop();
          s = o[o.length - 1];
          break;

        default:
          s.match.push({
            syntax: u.syntax || null,
            token: u.token.value,
            node: u.token.node,
          });
      }

      u = u.prev;
    }

    return c;
  },
  getTotalIterationCount: function () {
    return b;
  },
};
