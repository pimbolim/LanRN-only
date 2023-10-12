var n =
    (this && this.__assign) ||
    function () {
      return (n =
        Object.assign ||
        function (n) {
          for (var t, o = 1, c = arguments.length; o < c; o++) for (var s in (t = arguments[o])) Object.prototype.hasOwnProperty.call(t, s) && (n[s] = t[s]);

          return n;
        }).apply(this, arguments);
    },
  module1285 = require('./1285'),
  module1286 = require('./1286'),
  module1289 = require('./1289'),
  module1290 = require('./1290'),
  module1287 = require('./1287'),
  u = {},
  f = {
    VISA: 'visa',
    MASTERCARD: 'mastercard',
    AMERICAN_EXPRESS: 'american-express',
    DINERS_CLUB: 'diners-club',
    DISCOVER: 'discover',
    JCB: 'jcb',
    UNIONPAY: 'unionpay',
    MAESTRO: 'maestro',
    ELO: 'elo',
    MIR: 'mir',
    HIPER: 'hiper',
    HIPERCARD: 'hipercard',
  },
  E = [f.VISA, f.MASTERCARD, f.AMERICAN_EXPRESS, f.DINERS_CLUB, f.DISCOVER, f.JCB, f.UNIONPAY, f.MAESTRO, f.ELO, f.MIR, f.HIPER, f.HIPERCARD],
  R = module1287.clone(E);

function C(n) {
  return u[n] || module1285[n];
}

function I(n, t) {
  if (undefined === t) t = false;
  var o = R.indexOf(n);
  if (!t && -1 === o) throw new Error('"' + n + '" is not a supported card type.');
  return o;
}

function l(n) {
  var t = [];
  if (!module1289.isValidInputType(n)) return t;
  if (0 === n.length)
    return R.map(function (n) {
      return module1287.clone(C(n));
    });
  R.forEach(function (c) {
    var s = C(c);
    module1286.addMatchingCardsToResults(n, s, t);
  });
  var u = module1290.findBestMatch(t);
  return u ? [u] : t;
}

l.getTypeInfo = function (n) {
  return module1287.clone(C(n));
};

l.removeCard = function (n) {
  var t = I(n);
  R.splice(t, 1);
};

l.addCard = function (n) {
  var t = I(n.type, true);
  u[n.type] = n;
  if (-1 === t) R.push(n.type);
};

l.updateCard = function (o, c) {
  var s = u[o] || module1285[o];
  if (!s) throw new Error('"' + o + '" is not a recognized type. Use `addCard` instead.\'');
  if (c.type && s.type !== c.type) throw new Error('Cannot overwrite type parameter.');
  var f = module1287.clone(s);
  f = n(n({}, f), c);
  u[f.type] = f;
};

l.changeOrder = function (n, t) {
  var o = I(n);
  R.splice(o, 1);
  R.splice(t, 0, n);
};

l.resetModifications = function () {
  R = module1287.clone(E);
  u = {};
};

l.types = f;
module.exports = l;
