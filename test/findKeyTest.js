const assert = require('chai').assert;
const findKey = require('../findKey');


describe('findKey', () => {
  const data = {
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
  };

  it('should return the first key that satisfies the callback condition', () => {
    const result1 = findKey(data, x => x.stars === 3);
    assert.equal(result1, "Akaleri");
  });

  it('should return undefined if no key satisfies the callback condition', () => {
    const result2 = findKey(data, x => x.stars === 122);
    assert.equal(result2, undefined);
  });
});
