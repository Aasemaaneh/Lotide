const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('countLetters', () => {
  it('should return an object with the counts of each letter in the input string', () => {
    const result1 = countLetters('LHL');
    assert.deepEqual(result1, { l: 2, h: 1 });

    const result2 = countLetters('lighthouse in the house');
    assert.deepEqual(result2, {
      l: 1,
      i: 2,
      g: 1,
      h: 4,
      t: 2,
      o: 2,
      u: 2,
      s: 2,
      e: 3,
      n: 1,
    });
  });
});
