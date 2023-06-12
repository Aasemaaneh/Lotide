
const assert = require('chai').assert;
const middle = require('../middle');

describe('middle', () => {
  it('should return an empty array for an input array with one element', () => {
    assert.deepEqual(middle([1]), []);
  });

  it('should return an empty array for an input array with two elements', () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('should return the middle element for an input array with odd number of elements', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('should return the middle element for an input array with odd number of elements', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('should return the middle two elements for an input array with even number of elements', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it('should return the middle two elements for an input array with even number of elements', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
