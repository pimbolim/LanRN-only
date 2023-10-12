var n;
exports.Status = n;

(function (n) {
  n.Succeeded = 'Succeeded';
  n.RequiresPaymentMethod = 'RequiresPaymentMethod';
  n.RequiresConfirmation = 'RequiresConfirmation';
  n.Canceled = 'Canceled';
  n.Processing = 'Processing';
  n.RequiresAction = 'RequiresAction';
  n.RequiresCapture = 'RequiresCapture';
  n.Unknown = 'Unknown';
})(n || (exports.Status = n = {}));
