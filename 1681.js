var module1672 = require('./1672'),
  module1682 = require('./1682'),
  module1673 = require('./1673'),
  s = module1673.TYPE,
  module1675 = require('./1675'),
  u = module1675.isNewline,
  f = module1675.isName,
  k = module1675.isValidEscape,
  b = module1675.isNumberStart,
  h = module1675.isIdentifierStart,
  l = module1675.charCodeCategory,
  v = module1675.isBOM,
  module1674 = require('./1674'),
  S = module1674.cmpStr,
  B = module1674.getNewlineLength,
  D = module1674.findWhiteSpaceEnd,
  p = module1674.consumeEscaped,
  y = module1674.consumeName,
  E = module1674.consumeNumber,
  N = module1674.consumeBadUrlRemnants,
  w = 16777215,
  O = 24;

function A(n, o) {
  function C(t) {
    return t < U ? n.charCodeAt(t) : 0;
  }

  function A() {
    x = E(n, x);

    if (h(C(x), C(x + 1), C(x + 2))) {
      K = s.Dimension;
      return void (x = y(n, x));
    } else if (37 === C(x)) {
      K = s.Percentage;
      return void x++;
    } else return void (K = s.Number);
  }

  function L() {
    var t = x;
    x = y(n, x);
    if (S(n, t, x, 'url') && 40 === C(x)) {
      if (34 === C((x = D(n, x + 1))) || 39 === C(x)) {
        K = s.Function;
        return void (x = t + 4);
      } else return void R();
    } else if (40 === C(x)) {
      K = s.Function;
      return void x++;
    } else return void (K = s.Ident);
  }

  function P(t) {
    for (t || (t = C(x++)), K = s.String; x < n.length; x++) {
      var c = n.charCodeAt(x);

      switch (l(c)) {
        case t:
          return void x++;

        case l.Eof:
          return;

        case l.WhiteSpace:
          if (u(c)) {
            x += B(n, x, c);
            return void (K = s.BadString);
          }

          break;

        case 92:
          if (x === n.length - 1) break;
          var o = C(x + 1);
          if (u(o)) x += B(n, x + 1, o);
          else if (k(c, o)) x = p(n, x) - 1;
      }
    }
  }

  function R() {
    for (K = s.Url, x = D(n, x); x < n.length; x++) {
      var t = n.charCodeAt(x);

      switch (l(t)) {
        case 41:
          return void x++;

        case l.Eof:
          return;

        case l.WhiteSpace:
          if (41 === C((x = D(n, x))) || x >= n.length) return void (x < n.length && x++);
          else {
            x = N(n, x);
            return void (K = s.BadUrl);
          }

        case 34:
        case 39:
        case 40:
        case l.NonPrintable:
          x = N(n, x);
          return void (K = s.BadUrl);

        case 92:
          if (k(t, C(x + 1))) {
            x = p(n, x) - 1;
            break;
          }

          x = N(n, x);
          return void (K = s.BadUrl);
      }
    }
  }

  if (!o) o = new module1672();

  for (var U = (n = String(n || '')).length, W = module1682(o.offsetAndType, U + 1), q = module1682(o.balance, U + 1), F = 0, j = v(C(0)), x = j, T = 0, I = 0, _ = 0; x < U; ) {
    var H = n.charCodeAt(x),
      K = 0;

    switch (((q[F] = U), l(H))) {
      case l.WhiteSpace:
        K = s.WhiteSpace;
        x = D(n, x + 1);
        break;

      case 34:
        P();
        break;

      case 35:
        if (f(C(x + 1)) || k(C(x + 1), C(x + 2))) {
          K = s.Hash;
          x = y(n, x + 1);
        } else {
          K = s.Delim;
          x++;
        }

        break;

      case 39:
        P();
        break;

      case 40:
        K = s.LeftParenthesis;
        x++;
        break;

      case 41:
        K = s.RightParenthesis;
        x++;
        break;

      case 43:
        if (b(H, C(x + 1), C(x + 2))) A();
        else {
          K = s.Delim;
          x++;
        }
        break;

      case 44:
        K = s.Comma;
        x++;
        break;

      case 45:
        if (b(H, C(x + 1), C(x + 2))) A();
        else if (45 === C(x + 1) && 62 === C(x + 2)) {
          K = s.CDC;
          x += 3;
        } else if (h(H, C(x + 1), C(x + 2))) L();
        else {
          K = s.Delim;
          x++;
        }
        break;

      case 46:
        if (b(H, C(x + 1), C(x + 2))) A();
        else {
          K = s.Delim;
          x++;
        }
        break;

      case 47:
        if (42 === C(x + 1)) {
          K = s.Comment;
          if (1 === (x = n.indexOf('*/', x + 2) + 2)) x = n.length;
        } else {
          K = s.Delim;
          x++;
        }

        break;

      case 58:
        K = s.Colon;
        x++;
        break;

      case 59:
        K = s.Semicolon;
        x++;
        break;

      case 60:
        if (33 === C(x + 1) && 45 === C(x + 2) && 45 === C(x + 3)) {
          K = s.CDO;
          x += 4;
        } else {
          K = s.Delim;
          x++;
        }

        break;

      case 64:
        if (h(C(x + 1), C(x + 2), C(x + 3))) {
          K = s.AtKeyword;
          x = y(n, x + 1);
        } else {
          K = s.Delim;
          x++;
        }

        break;

      case 91:
        K = s.LeftSquareBracket;
        x++;
        break;

      case 92:
        if (k(H, C(x + 1))) L();
        else {
          K = s.Delim;
          x++;
        }
        break;

      case 93:
        K = s.RightSquareBracket;
        x++;
        break;

      case 123:
        K = s.LeftCurlyBracket;
        x++;
        break;

      case 125:
        K = s.RightCurlyBracket;
        x++;
        break;

      case l.Digit:
        A();
        break;

      case l.NameStart:
        L();
        break;

      case l.Eof:
        break;

      default:
        K = s.Delim;
        x++;
    }

    switch (K) {
      case T:
        for (T = (I = q[(_ = I & w)]) >> O, q[F] = _, q[_++] = F; _ < F; _++) q[_] === U && (q[_] = F);

        break;

      case s.LeftParenthesis:
      case s.Function:
        q[F] = I;
        I = ((T = s.RightParenthesis) << O) | F;
        break;

      case s.LeftSquareBracket:
        q[F] = I;
        I = ((T = s.RightSquareBracket) << O) | F;
        break;

      case s.LeftCurlyBracket:
        q[F] = I;
        I = ((T = s.RightCurlyBracket) << O) | F;
    }

    W[F++] = (K << O) | x;
  }

  for (W[F] = (s.EOF << O) | x, q[F] = U, q[U] = U; 0 !== I; ) {
    I = q[(_ = I & w)];
    q[_] = U;
  }

  o.source = n;
  o.firstCharOffset = j;
  o.offsetAndType = W;
  o.tokenCount = F;
  o.balance = q;
  o.reset();
  o.next();
  return o;
}

Object.keys(module1673).forEach(function (t) {
  A[t] = module1673[t];
});
Object.keys(module1675).forEach(function (t) {
  A[t] = module1675[t];
});
Object.keys(module1674).forEach(function (t) {
  A[t] = module1674[t];
});
module.exports = A;
