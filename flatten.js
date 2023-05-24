const assertEqual = function(actual, expected) {
  if (String(actual) === String(expected)) {
    console.log(`✅✅✅ Assertion Passed:  ${actual}   ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual}  !==  ${expected}`);
  }
};
  
const assertArraysEqual = function(array1, array2) {
  if (array1.length !== array2.length) {
    console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
        return;
      }
    }
    console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`);
  }
};
const flatten = function(array) {
  const flattenedArray = [];
  
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        flattenedArray.push(array[i][j]);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  
  return flattenedArray;
};

// Test cases
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, [2, [3, 4], 5], 6]), [1, 2, [3, 4], 5, 6]);