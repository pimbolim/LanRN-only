var module1287 = require('./1287'),
  module1288 = require('./1288');

exports.addMatchingCardsToResults = function (s, h, c) {
  var l, o;

  for (l = 0; l < h.patterns.length; l++) {
    var u = h.patterns[l];

    if (module1288.matches(s, u)) {
      var v = module1287.clone(h);
      o = Array.isArray(u) ? String(u[0]).length : String(u).length;
      if (s.length >= o) v.matchStrength = o;
      c.push(v);
      break;
    }
  }
};
