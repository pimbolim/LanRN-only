var t = {
    EOF: 0,
    Ident: 1,
    Function: 2,
    AtKeyword: 3,
    Hash: 4,
    String: 5,
    BadString: 6,
    Url: 7,
    BadUrl: 8,
    Delim: 9,
    Number: 10,
    Percentage: 11,
    Dimension: 12,
    WhiteSpace: 13,
    CDO: 14,
    CDC: 15,
    Colon: 16,
    Semicolon: 17,
    Comma: 18,
    LeftSquareBracket: 19,
    RightSquareBracket: 20,
    LeftParenthesis: 21,
    RightParenthesis: 22,
    LeftCurlyBracket: 23,
    RightCurlyBracket: 24,
    Comment: 25,
  },
  n = Object.keys(t).reduce(function (n, c) {
    n[t[c]] = c;
    return n;
  }, {});
module.exports = {
  TYPE: t,
  NAME: n,
};
