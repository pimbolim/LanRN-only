exports.clone = function (n) {
  return n ? JSON.parse(JSON.stringify(n)) : null;
};
