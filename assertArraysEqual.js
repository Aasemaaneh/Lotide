


const eqArrays = require('./eqArrays');
const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
  } else {
    console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`);
  }
};
module.exports = assertArraysEqual;
//Test Code
//assertArraysEqual([1, 2, 3], [3, 2, 1,6]);
//assertArraysEqual([1, 2, 3], [3, 2, 1]);
//assertArraysEqual([1, 2, 7], [1, 2, 7,6]);
//assertArraysEqual([1, 2, 7], [1, 2, 7]);
//assertArraysEqual('hello', 'hi');
//assertArraysEqual('hello', 'hello');
//assertArraysEqual(['hello','hi'], ['hi','hello']);