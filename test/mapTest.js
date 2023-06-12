const assert = require('chai').assert;
const map = require('../map');

describe('map', () => {
  it('should return a new array with the results of applying the callback function to each element', () => {
    const words = ["ground", "control", "to", "major", "tom"];

    const results1 = map(words, word => word[0]);
    assert.deepEqual(results1, ['g', 'c', 't', 'm', 't']);

    const results2 = map(words, word => Math.round(Math.sqrt(word.length)));
    assert.deepEqual(results2, [2, 3, 1, 2, 2]);

    const results3 = map(words, word => word.toUpperCase() + " : " + word);
    assert.deepEqual(results3, ['GROUND : ground', 'CONTROL : control', 'TO : to', 'MAJOR : major', 'TOM : tom']);
  });

  it('should return an empty array if the input array is empty', () => {
    const words = [];
    const results = map(words, word => word[0]);
    assert.deepEqual(results, []);
  });

  it('should return an empty array if the input array is empty and callback is not provided', () => {
    const words = [];
    const results = map(words);
    assert.deepEqual(results, []);
  });
});
