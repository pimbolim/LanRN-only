var module3 = require('./3');

exports.validateSnapPoint = function (t) {
  module3.default('number' == typeof t || 'string' == typeof t, "'" + t + "' is not a valid snap point! expected types are string or number.");
  module3.default(
    'number' == typeof t || ('string' == typeof t && t.includes('%')),
    "'" + t + "' is not a valid percentage snap point! expected percentage snap point must include '%'. e.g. '50%'"
  );
  module3.default(
    'number' == typeof t || ('string' == typeof t && Number(t.split('%')[0])),
    "'" + t + "' is not a valid percentage snap point! expected percentage snap point must be only numbers and '%'. e.g. '50%'"
  );
};
