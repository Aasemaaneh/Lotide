
const countLetters = function(input) {
  const results = {};

  for (const letter of input.toLowerCase()) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }

  return results;
};

module.exports = countLetters;
