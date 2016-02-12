
const _ = require('lodash');

const internals = {};

internals.regexes = {
  alpha: /[A-Za-z]/,
  numeric: /[0-9]/,
  whitepsace: /[\s\n\r\t]/,
  other: /[^A-Za-z0-9\s\n\r\tA]/
};

internals.countCharTypes = function (text) {
  if (_.isNull(text) || _.isUndefined(text) || !_.isString(text)) {
    return 0;
  }

  return _.reduce(internals.regexes, (sum, regex) => {
    if (text.match(regex)) {
      return sum + 1;
    } else {
      return sum;
    }
  }, 0);
};

module.exports = {
  count: internals.countCharTypes
};
