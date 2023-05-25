
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  
  return true;
};
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

  
  const eqObjects = function(object1, object2) {

  
    if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
    }
  
    for (const key of Object.keys(object1)) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
        if (!eqObjects(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  
    return true;
  };
  



const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect; // Import the inspect function from the util library

  
    if (eqObjects(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  };
  
  // Example usage
  const obj1 = { a: '1', b: 2 };
  const obj2 = { b: 2, a: '1' };
  assertObjectsEqual(obj1, obj2); 
  
  const obj3 = { a: '1', b: 2 };
  const obj4 = { a: '1', b: 3 };
  assertObjectsEqual(obj3, obj4); 
  