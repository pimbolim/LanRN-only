exports.useConfirmSetupIntent = function () {
  var n = React.useState(false),
    o = module12.default(n, 2),
    s = o[0],
    f = o[1],
    p = module1534.useStripe().confirmSetupIntent;
  return {
    confirmSetupIntent: React.useCallback(
      function (n, u) {
        var React,
          module1534,
          o = arguments;
        return regeneratorRuntime.default.async(
          function (s) {
            for (;;)
              switch ((s.prev = s.next)) {
                case 0:
                  React = o.length > 2 && undefined !== o[2] ? o[2] : {};
                  f(true);
                  s.next = 4;
                  return regeneratorRuntime.default.awrap(p(n, u, React));

                case 4:
                  module1534 = s.sent;
                  f(false);
                  return s.abrupt('return', module1534);

                case 7:
                case 'end':
                  return s.stop();
              }
          },
          null,
          null,
          null,
          Promise
        );
      },
      [p]
    ),
    loading: s,
  };
};

var regeneratorRuntime = require('regenerator-runtime'),
  module12 = require('./12'),
  React = require('react'),
  module1534 = require('./1534');
