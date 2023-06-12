const assert = require('chai').assert;
const without = require('../without');

describe('without', function() {
  it('should return a new array with elements from the source array that are not in the itemsToRemove array', function() {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it('should not alter the original array', function() {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});
