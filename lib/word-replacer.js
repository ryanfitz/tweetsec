const _ = require('lodash');
const fs = require('fs');
const wordListPath = require('word-list');

const internals = {
  dictionary: fs.readFileSync(wordListPath, 'utf8').split('\n').reduce((memo, word) => {
    memo[word.toLowerCase()] = true;
    return memo;
  }, {})
};

internals.replaceWordsGreedy = function (text) {
  if (_.isNull(text) || _.isUndefined(text) || !_.isString(text)) {
    return '';
  }

  // Generate regex ordered by largest to smallest words
  // split string using regex
  const lower = text.toLowerCase();
  let words = _.map(internals.segmentString(lower, 0), 'w').join('|');
  let reg = new RegExp(words);

  return lower.split(reg).join('z');
};

// return the largest words in given text
// ordered largest to smallest
internals.segmentString = function (text, start) {
  let result = [];

  for (let i in text) {
    let prefix = text.substr(0, text.length - i);

    if (internals.dictionary[prefix]) {
      result.push({w: prefix, l: prefix.length, start: start});
      break;
    } else {
      let suffix = text.substr(text.length - i, text.length);
      let nextStart = start + text.length - i;
      result.push(internals.segmentString(suffix, nextStart));
    }
  }

  return _.chain(result)
        .flattenDeep()
        .uniqBy('w')
        .sortBy('l')
        .reverse()
        .value();
};

module.exports = {
  replace: internals.replaceWordsGreedy
};
