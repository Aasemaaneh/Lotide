

const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects')
const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect; // Import the inspect function from the util library

  
    if (eqObjects(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  };
  
  // Example usage
  //const obj1 = { a: '1', b: 2 };
  //const obj2 = { b: 2, a: '1' };
  //assertObjectsEqual(obj1, obj2); 
  //
  //const obj3 = { a: '1', b: 2 };
  //const obj4 = { a: '1', b: 3 };
  //assertObjectsEqual(obj3, obj4); 
  module.exports = assertObjectsEqual;