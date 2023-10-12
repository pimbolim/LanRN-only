exports.isValidInputType = function (t) {
  return 'string' == typeof t || t instanceof String;
};
