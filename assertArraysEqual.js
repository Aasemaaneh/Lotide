
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

//Test Code
assertArraysEqual([1, 2, 3], [3, 2, 1,6]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([1, 2, 7], [1, 2, 7,6]);
assertArraysEqual([1, 2, 7], [1, 2, 7]);
assertArraysEqual('hello', 'hi');
assertArraysEqual('hello', 'hello');
assertArraysEqual(['hello','hi'], ['hi','hello']);