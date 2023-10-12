var n, o, t, l, c, u, E, C, k, f;
exports.ConfirmPaymentError = n;

(function (n) {
  n.Canceled = 'Canceled';
  n.Failed = 'Failed';
  n.Unknown = 'Unknown';
})(n || (exports.ConfirmPaymentError = n = {}));

exports.CardActionError = o;

(function (n) {
  n.Canceled = 'Canceled';
  n.Failed = 'Failed';
  n.Unknown = 'Unknown';
})(o || (exports.CardActionError = o = {}));

exports.ConfirmSetupIntentError = t;

(function (n) {
  n.Canceled = 'Canceled';
  n.Failed = 'Failed';
  n.Unknown = 'Unknown';
})(t || (exports.ConfirmSetupIntentError = t = {}));

exports.CreatePaymentMethodError = l;

(function (n) {
  n.Failed = 'Failed';
})(l || (exports.CreatePaymentMethodError = l = {}));

exports.CreateTokenError = c;

(function (n) {
  n.Failed = 'Failed';
})(c || (exports.CreateTokenError = c = {}));

exports.RetrievePaymentIntentError = u;

(function (n) {
  n.Unknown = 'Unknown';
})(u || (exports.RetrievePaymentIntentError = u = {}));

exports.RetrieveSetupIntentError = E;

(function (n) {
  n.Unknown = 'Unknown';
})(E || (exports.RetrieveSetupIntentError = E = {}));

exports.ApplePayError = C;

(function (n) {
  n.Canceled = 'Canceled';
  n.Failed = 'Failed';
  n.Unknown = 'Unknown';
})(C || (exports.ApplePayError = C = {}));

exports.PaymentSheetError = k;

(function (n) {
  n.Failed = 'Failed';
  n.Canceled = 'Canceled';
})(k || (exports.PaymentSheetError = k = {}));

exports.GooglePayError = f;

(function (n) {
  n.Failed = 'Failed';
  n.Canceled = 'Canceled';
  n.Unknown = 'Unknown';
})(f || (exports.GooglePayError = f = {}));

var y,
  F,
  P = {
    code: c.Failed,
    message: 'You must provide a routing number for US bank accounts. This should be the ACH routing number.',
  };
exports.MissingRoutingNumber = P;
exports.VerifyMicrodepositsError = y;

(function (n) {
  n.Canceled = 'Canceled';
  n.Failed = 'Failed';
  n.Unknown = 'Unknown';
})(y || (exports.VerifyMicrodepositsError = y = {}));

exports.CollectBankAccountError = F;

(function (n) {
  n.Canceled = 'Canceled';
  n.Failed = 'Failed';
  n.Unknown = 'Unknown';
})(F || (exports.CollectBankAccountError = F = {}));
