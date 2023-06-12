const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('countOnly', () => {
  it('should return an object with the count of specified items in the input array', () => {
    const firstNames = [
      'Karl',
      'Salima',
      'Agouhanna',
      'Fang',
      'Kavith',
      'Jason',
      'Salima',
      'Fang',
      'Joe'
    ];

    const expected = { Jason: 1, Karima: undefined, Fang: 2, Agouhanna: undefined };
    const actual = countOnly(firstNames, { Jason: true, Karima: true, Fang: true, Agouhanna: false });

    assert.deepEqual(actual, expected);
  });

  it('should handle empty input array and return an empty object', () => {
    const firstNames = [];
    const expected = {};
    const actual = countOnly(firstNames, { Jason: true, Karima: true, Fang: true, Agouhanna: false });

    assert.deepEqual(actual, expected);
  });

  it('should handle empty options object and return an empty object', () => {
    const firstNames = ['Karl', 'Salima', 'Fang'];
    const expected = {};
    const actual = countOnly(firstNames, {});

    assert.deepEqual(actual, expected);
  });
});
