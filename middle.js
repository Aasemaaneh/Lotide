
//const assertArraysEqual = function(array1, array2) {
//  if (array1.length !== array2.length) {
//    console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
//  } else {
//    for (let i = 0; i < array1.length; i++) {
//      if (array1[i] !== array2[i]) {
//        console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
//        return;
//      }
//    }
//    console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`);
//  }
//};
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  const middleIndex = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 1) {
    return [array[middleIndex]];
  } else {
    return [array[middleIndex - 1], array[middleIndex]];
  }
};

module.exports = middle;
