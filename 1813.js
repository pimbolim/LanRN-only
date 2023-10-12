module.exports = function (t) {
  for (var n = t.map(o), s = 1; s < t.length; s++) {
    var f = n[s];
    if (!(f < 0))
      for (var l = s - 1; l >= 0 && f < n[l]; l--) {
        var u = t[l + 1];
        t[l + 1] = t[l];
        t[l] = u;
        n[l + 1] = n[l];
        n[l] = f;
      }
  }
};

var module1814 = require('./1814'),
  n = {
    __proto__: null,
    exists: 10,
    equals: 8,
    not: 7,
    start: 6,
    end: 6,
    any: 5,
    hyphen: 4,
    element: 4,
  };

function o(s) {
  var f = module1814[s.type];

  if (f === module1814.attribute) {
    if ((f = n[s.action]) === n.equals && 'id' === s.name) f = 9;
    if (s.ignoreCase) f >>= 1;
  } else if (f === module1814.pseudo)
    if (s.data) {
      if ('has' === s.name || 'contains' === s.name) f = 0;
      else if ('matches' === s.name || 'not' === s.name) {
        f = 0;

        for (var l = 0; l < s.data.length; l++)
          if (1 === s.data[l].length) {
            var u = o(s.data[l][0]);

            if (0 === u) {
              f = 0;
              break;
            }

            if (u > f) f = u;
          }

        if (s.data.length > 1 && f > 0) f -= 1;
      } else f = 1;
    } else f = 3;

  return f;
}
