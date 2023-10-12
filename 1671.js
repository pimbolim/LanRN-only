module.exports = function (t, n) {
  var c = Object.create(SyntaxError.prototype),
    o = new Error();
  c.name = t;
  c.message = n;
  Object.defineProperty(c, 'stack', {
    get: function () {
      return (o.stack || '').replace(/^(.+\n){1,3}/, t + ': ' + n + '\n');
    },
  });
  return c;
};
