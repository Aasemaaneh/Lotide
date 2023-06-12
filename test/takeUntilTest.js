const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('takeUntil', () => {
  it('should return a new array until the condition is met', () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);

    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === ',');
    assert.deepEqual(results2, ["I've", "been", "to", "Hollywood"]);
  });

  it('should return the entire array if the condition is never met', () => {
    const data = [1, 2, 3, 4, 5];
    const results = takeUntil(data, x => x > 10);
    assert.deepEqual(results, [1, 2, 3, 4, 5]);
  });

  it('should return an empty array if the input array is empty', () => {
    const data = [];
    const results = takeUntil(data, x => x === 0);
    assert.deepEqual(results, []);
  });
});
