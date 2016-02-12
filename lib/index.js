const wordReplacer = require('./word-replacer');
const charTypes = require('./char-types');

const internals = {};

internals.calcScore = function (text) {
  let cleanedWord = wordReplacer.replace(text);
  let charTypesCount = charTypes.count(cleanedWord);

  let strength = charTypesCount * cleanedWord.length;

  return {strength: strength, status: internals.status(strength)};
};

internals.status = function (strength) {
  let status = 'unacceptable';

  if (strength >= 50) {
    status = 'strong';
  } else if (strength > 10) {
    status = 'weak';
  }

  return status;
};

module.exports = {
  calculate: internals.calcScore
};
