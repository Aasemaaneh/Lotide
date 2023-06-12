const assert = require('chai').assert;
const letterPositions = require('../letterPositions');
const assertArraysEqual = require('../assertArraysEqual');

describe('letterPositions', () => {
  it('should return an object with the positions of each letter in the input string', () => {
    const positions = letterPositions("lighthouse in the house");
    assert.deepEqual(positions['l'], [0]);
    assert.deepEqual(positions['i'], [1, 11]);
    assert.deepEqual(positions['g'], [2]);
    assert.deepEqual(positions['h'], [3, 5, 15, 18]);
    assert.deepEqual(positions['t'], [4, 14]);
    assert.deepEqual(positions['o'], [6, 19]);
    assert.deepEqual(positions['u'], [7, 20]);
    assert.deepEqual(positions['s'], [8, 21]);
    assert.deepEqual(positions['e'], [9, 16, 22]);
    assert.deepEqual(positions['n'], [12]);
  });

  it('should return an empty object if the input string is empty', () => {
    const positions = letterPositions("");
    assert.deepEqual(positions, {});
  });

  it('should return the positions of each letter in the input string', () => {
    const positions = letterPositions("hello");
    assert.deepEqual(positions['l'], [2, 3]);
    assert.deepEqual(positions['h'], [0]);
    assert.deepEqual(positions['e'], [1]);
    assertArraysEqual(positions['o'], [4]);
  });
});
