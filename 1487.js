var module24 = require('./24'),
  module25 = require('./25'),
  module1404 = require('./1404'),
  o = (function () {
    function t(s, h, o) {
      module24.default(this, t);
      this._perf = s;
      this.url = h;
      this.httpMethod = o;
    }

    module25.default(t, [
      {
        key: 'getAttribute',
        value: function (t) {
          return module1404.getNativeModule(this._perf).getHttpMetricAttribute(this.url, this.httpMethod, t);
        },
      },
      {
        key: 'getAttributes',
        value: function () {
          return module1404.getNativeModule(this._perf).getHttpMetricAttributes(this.url, this.httpMethod);
        },
      },
      {
        key: 'putAttribute',
        value: function (t, u) {
          return module1404.getNativeModule(this._perf).putHttpMetricAttribute(this.url, this.httpMethod, t, u);
        },
      },
      {
        key: 'removeAttribute',
        value: function (t) {
          return module1404.getNativeModule(this._perf).removeHttpMetricAttribute(this.url, this.httpMethod, t);
        },
      },
      {
        key: 'setHttpResponseCode',
        value: function (t) {
          return module1404.getNativeModule(this._perf).setHttpMetricResponseCode(this.url, this.httpMethod, t);
        },
      },
      {
        key: 'setRequestPayloadSize',
        value: function (t) {
          return module1404.getNativeModule(this._perf).setHttpMetricRequestPayloadSize(this.url, this.httpMethod, t);
        },
      },
      {
        key: 'setResponseContentType',
        value: function (t) {
          return module1404.getNativeModule(this._perf).setHttpMetricResponseContentType(this.url, this.httpMethod, t);
        },
      },
      {
        key: 'setResponsePayloadSize',
        value: function (t) {
          return module1404.getNativeModule(this._perf).setHttpMetricResponsePayloadSize(this.url, this.httpMethod, t);
        },
      },
      {
        key: 'start',
        value: function () {
          return module1404.getNativeModule(this._perf).startHttpMetric(this.url, this.httpMethod);
        },
      },
      {
        key: 'stop',
        value: function () {
          return module1404.getNativeModule(this._perf).stopHttpMetric(this.url, this.httpMethod);
        },
      },
    ]);
    return t;
  })();

exports.default = o;
