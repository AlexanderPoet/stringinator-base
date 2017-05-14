const _ = require('./underbar');

const first = function(str, n = 1) {
  return n !== 1 ? _.first(str.split(''), n).join(''): 
                   _.first(str.split(''), n);
};

const last = function(str, n = 1) {
  return n !== 1 ? _.last(str.split(''), n).join(''):
                   _.last(str.split(''), n);
};

const removeChar = function(str, target) {
  // hint: use _.reject
  const match = function(char) {
    return char === target;
  }
  return _.reject(str.split(''), match).join('');
};

const hasChar = function(str, target) {
  // hint: use _.some
  return _.some(str.split(''), char => char === target);
};

const isOnlyDigits = function(str) {
  return _.every(str.split(''), x => /\d/.test(x));
};

const filterToOnlyDigits = function(str) {
  return _.filter(str.split(''), x => /\d/.test(x)).join('');
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  let result = [];
  Object.keys(obj).forEach((key) => {
    result.push(truncateString(obj[key], maxLength));
  });
  return result;
};

const countChars = function(str) {
  const cb = function(obj, letter) {
    obj[letter] = obj[letter] + 1 || 1;
    return obj;
  }
  return _.reduce(str.split(''), cb, {});
};

const dedup = function(str) {
  return _.uniq(str.split('')).join('');
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};