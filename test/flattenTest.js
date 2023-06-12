const assert = require('chai').assert;
const flatten = require('../flatten'); 

describe('flatten', () => {
  it('should return a flattened array when given an array with nested elements', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it('should return a flattened array when given an array with deeply nested elements', () => {
    assert.deepEqual(flatten([1, [2, [3, 4], 5], 6]), [1, 2, [3, 4], 5, 6]);
  });
});
