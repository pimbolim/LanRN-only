exports.confirmActivationCode = function (t, l) {
  var u = s('code', l);
  if (u) return u;
  var f = {
      code: {
        equality: {
          attribute: 'validCode',
          message: module458.default.validate.activationCodeDifferent,
          comparator: function (t, l) {
            return t === l;
          },
        },
      },
    },
    c = module1517.default(
      {
        validCode: t,
        code: l,
      },
      f
    );
  return c ? c.code[0] : null;
};

exports.confirmPassword = function (t, l) {
  var s = {
      confirmPassword: {
        equality: {
          attribute: 'password',
          message: module458.default.validate.confirmPasswordMatch,
        },
        presence: {
          allowEmpty: false,
          message: module458.default.validate.confirmPassword,
        },
      },
    },
    u = module1517.default(
      {
        password: t,
        confirmPassword: l,
      },
      s
    );
  return u ? u.confirmPassword[0] : null;
};

exports.default = s;

var module47 = require('./47'),
  module1517 = require('./1517'),
  module458 = require('./458');

function s(t, s) {
  var u = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : '',
    f = {
      email: {
        presence: {
          allowEmpty: false,
          message: '^' + module458.default.formatString(module458.default.generic.requiredField, module458.default.authentication.email),
        },
        email: {
          message: module458.default.validate.invalidEmail,
        },
      },
      password: {
        presence: {
          allowEmpty: false,
          message: '^' + module458.default.formatString(module458.default.generic.requiredField, module458.default.authentication.password),
        },
      },
      newPassword: {
        presence: {
          allowEmpty: false,
          message: '^' + module458.default.formatString(module458.default.generic.requiredField, module458.default.authentication.newPassword),
        },
      },
      confirmPassword: {
        presence: {
          allowEmpty: false,
          message: '^' + module458.default.formatString(module458.default.generic.requiredField, module458.default.authentication.confirmPassword),
        },
      },
      text: {
        presence: {
          allowEmpty: false,
          message: '^' + module458.default.formatString(module458.default.generic.requiredField, u),
        },
      },
      code: {
        presence: {
          allowEmpty: false,
          message: module458.default.validate.emptyActivationCode,
        },
        length: {
          is: 4,
          message: module458.default.validate.activationCodeLength,
        },
        numericality: {
          onlyInteger: true,
          message: module458.default.validate.activationCodeNotNumeric,
        },
      },
    },
    c = module47.default({}, t, s),
    v = module47.default({}, t, f[t]),
    w = module1517.default(c, v);
  return w ? w[t][0] : null;
}
