exports.sum = function (u) {
  return u.reduce(function (u, n) {
    return u + n;
  }, 0);
};
