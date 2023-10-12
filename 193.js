var module93 = require('./93');

module.exports = {
  showErrorDialog: function (o) {
    var t,
      c = o.componentStack,
      p = o.error;
    t = p instanceof Error ? p : 'string' == typeof p ? new module93.SyntheticError(p) : new module93.SyntheticError('Unspecified error');

    try {
      t.componentStack = c;
      t.isComponentError = true;
    } catch (n) {}

    module93.handleException(t, false);
    return false;
  },
};
