var n = module.exports;
[require('./1790'), require('./1803'), require('./1804'), require('./1805'), require('./1806'), require('./1807')].forEach(function (c) {
  Object.keys(c).forEach(function (o) {
    n[o] = c[o].bind(n);
  });
});
