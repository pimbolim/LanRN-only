module.exports = function (n) {
  var o = typeof n;
  return 'string' == o || 'number' == o || 'symbol' == o || 'boolean' == o ? '__proto__' !== n : null === n;
};
