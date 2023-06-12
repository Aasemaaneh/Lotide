const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue'); 

describe('findKeyByValue', () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  };

  it('should return the key for the given value in the object', () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('should return undefined if the value is not found in the object', () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});
