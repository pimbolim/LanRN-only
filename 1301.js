exports.removeNonNumber = function () {
  return (arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : '').replace(/[^\d]/g, '');
};

exports.removeLeadingSpaces = function () {
  return (arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : '').replace(/^\s+/g, '');
};
